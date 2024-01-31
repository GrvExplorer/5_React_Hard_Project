import { INewUser, IUser } from "@/types";
import { ID, Query } from "appwrite";
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
    );

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

    if (!newAccount)
      throw new Error("Something went wrong while creating account");

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
