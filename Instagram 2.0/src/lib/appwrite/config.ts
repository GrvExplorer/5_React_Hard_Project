import { Account, Avatars, Client, Databases, Storage } from "appwrite";

export const client = new Client();
export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);
