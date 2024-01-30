import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account, appwriteConfig, avatars, databases } from "./config";

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
    )

    return newUser;

  } catch (error) {
    console.log(error);
    
  }
}

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name,
    );

    if (!newAccount) throw new Error("Something went wrong while creating account");
  
    const avatarUrl = avatars.getInitials(user.name, 256, 256, "white");

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
