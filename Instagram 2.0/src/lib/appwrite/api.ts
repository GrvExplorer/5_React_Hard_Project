import { INewPost, INewUser } from "@/types";
import { ID, Models, Query } from "appwrite";
import { account, appwriteConfig, avatars, databases, storage } from "./config";

export async function saveUserToDB(user: {
  accountId: string;
  username: string;
  name: string;
  email: string;
  imageUrl: URL;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user,
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadFile(file: File) {
  try {
    const uploadFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file,
    );
    return uploadFile;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilePreview(fileId: string) {
  try {
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      "top",
      100,
    );

    if (!fileUrl) throw Error;
    return fileUrl;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFile(fileId: string) {
  try {
    const deleteFile = await storage.deleteFile(
      appwriteConfig.storageId,
      fileId,
    );
    return deleteFile;
  } catch (error) {
    console.log(error);
  }
}

// User
export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name,
    );

    if (!newAccount)
      throw new Error("Something went wrong while creating account");

    const avatarUrl = avatars.getInitials(user.name, 256, 256);

    const newUser = await saveUserToDB({
      name: user.name,
      email: user.email,
      username: user.username,
      accountId: newAccount.$id,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const loginAccount = await account.createEmailSession(
      user.email,
      user.password,
    );
    return loginAccount;
  } catch (error) {
    console.log(error);
  }
}
export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)],
    );

    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function signOutAccount() {
  try {
    const logoutAccount = await account.deleteSession("current");
    return logoutAccount;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserPosts(userId: string) {
  if (!userId) return;

  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      [Query.equal("creator", userId), Query.orderDesc("$createdAt")],
    );
    console.log(posts);

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserDetails() {}

export async function setUserDetails() {}

export async function getUserSaves() {}

export async function getUserLikes() {}

export async function getAllUsers() {
  try {
    const users = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    )

    if (!users) throw new Error("user not found");
  
    return users
  } catch (error) {
    console.log(error);
    
  }
}

// Posts
export async function createPost(post: INewPost) {
  try {
    const uploadedFile = await uploadFile(post.file[0]);

    if (!uploadedFile) throw Error;

    const fileUrl = await getFilePreview(uploadedFile.$id);

    if (!fileUrl) throw Error;

    const tags = post.tags?.replace(/ /g, "").split(",") || [];

    const newPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      ID.unique(),
      {
        creator: post.userId,
        caption: post.caption,
        imageUrl: fileUrl,
        imageId: uploadedFile.$id,
        location: post.location,
        tags: tags,
      },
    );
    if (!newPost) {
      await deleteFile(uploadedFile.$id);
      throw Error;
    }

    return newPost;
  } catch (error) {
    console.log(error);
  }
}

export async function getRecentPosts() {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(10)],
    );

    if (!posts) throw Error;

    return posts;
  } catch (error) {
    console.log(error);
  }
}

export async function getPopularPosts() {}

export async function setPostLikes(postId: string, likesArray: string[]) {
  try {
    const setLike = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      postId,
      {
        likes: likesArray,
      },
    );

    if (!setLike) throw new Error("Not able to set the like");

    return setLike;
  } catch (error) {
    console.log(error);
  }
}
export async function setPostSaves(postId: string, userId: string) {
  try {
    const updatedPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.saveCollectionsID,
      ID.unique(),
      {
      user: userId,
      post: postId,
      },
    );

    if (!updatedPost) throw new Error("Not able to set the like");
console.log(updatedPost);

    return updatedPost;
  } catch (error) {
    console.log(error);
  }
}


// export async function deleteSavedPost() {
//   try {

//     const deletedPhoto = deleteFile(post.imageId)    

//     if (!deletedPhoto) throw new Error("No able to delete the post due to photo");
    

//     const statusCode = await databases.deleteDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
      
//     )

//     if (!statusCode) throw new Error
    
//     return { status: 'Ok'};
//   } catch (error) {
//     console.log(error);
//   }
// }