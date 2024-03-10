import FileUploader from "@/components/shared/FileUploader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import { getPostById, updatePost } from "@/lib/appwrite/api";
import { useCreatePost, useUpdatePost } from "@/lib/react-query/queriesAndMutations";
import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
import { CreatePostValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

function CreatePost({ isUpdate }) {
  const { user } = useUserContext();
  const { postId } = useParams()

    const {data} = useQuery({
      queryKey: [QUERY_KEYS.GET_POST_BY_ID],
      queryFn: () => getPostById(postId),
    })

  const { toast } = useToast();
  const navigate = useNavigate();


  const { mutateAsync: createPost, isLoading: isCreatePostIsLoading } =
    useCreatePost();


  const { mutateAsync: updatePost, isLoading: isUpdatePostIsLoading } =
    useUpdatePost();



  async function handelCreatePost(
    details: z.infer<typeof CreatePostValidation>,
  ) {
    try {
      const newPost = await createPost({
        ...details,
        userId: user?.id,
      });

      if (!newPost) {
        toast({
          title: `post failed. Please try again.`,
        });
        throw new Error("Something went wrong while creating post");
      }
      toast({
        title: "Post Created",
        description: "Your post has been created successfully",
      });
      navigate("/");

      return newPost;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function handelUpdatePost(
    details: z.infer<typeof CreatePostValidation>,
  ) {
    try {
      const getUpdatePost = await updatePost({
        ...details,
        postId: postId,
      });

      if (!getUpdatePost) {
        toast({
          title: `post failed. Please try again.`,
        });
        throw new Error("Something went wrong while creating post");
      }
      toast({
        title: "Post Updated",
        description: "Your post has been updated successfully",
      });
      navigate("/");

      return getUpdatePost;
    } catch (error) {
      console.log(error);
    }
  }

  const form = useForm({
    resolver: zodResolver(CreatePostValidation),
    defaultValues: {
      caption: isUpdate ? data?.caption : "",
      file: [],
      location: isUpdate ? data?.location : "",
      tags: isUpdate ? data?.tags.join(',') : "",
    },
  });

  return (
    <div className="flex justify-center">
      <div className="mr-6 flex flex-col justify-center gap-8 ">
        <h1 className="flex gap-4 text-3xl font-bold">
          <img
            className="invert-white w-8"
            src="/assets/icons/gallery-add.svg"
            alt=""
          />
          {postId ? 'Update': 'Create'} Post
        </h1>

        <Form {...form}>
          <form
            className="flex flex-col gap-10"
            onSubmit={form.handleSubmit(isUpdate ? handelUpdatePost : handelCreatePost)}
          >
            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Caption</FormLabel>
                  <FormControl className="shad-textarea">
                    <Textarea rows={5} cols={100} {...field} id="caption" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Photos</FormLabel>
                  <FormControl className="file_uploader-box border-none bg-dark-3">
             

                    <FileUploader fieldChange={field.onChange} mediaUrl={isUpdate ? data?.imageUrl : ''} />

                    {/* <Input
                      className="file_uploader-box"
                      id="file"
                      type="file"
                      {...field}
                    /> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Location</FormLabel>
                  <FormControl className="shad-input">
                    <Input {...field} id="location" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Tags (separated by comma ",")</FormLabel>

                  <FormControl className="shad-input">
                    <Input {...field} id="tags" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end gap-4">
              <Button className="shad-button_dark_4">Cancel</Button>
              <Button className="shad-button_primary" type="submit">
                {isCreatePostIsLoading || isUpdatePostIsLoading ? (
                  <div className="flex-center gap-2">
                    <Loader className="mr-2 h-4 w-4 animate-spin" /> Loading...
                  </div>
                ) : (
                  <>
                  {postId ? 'Update': 'Create'} Post
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default CreatePost;
