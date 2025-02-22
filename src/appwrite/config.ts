import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
    email: string,
    password: string,
    name: string,
}

type LoginUserAccount = {
    email: string,
    password: string,
}

const appwriteClient = new Client()

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

export const account = new Account(appwriteClient)

export class AppwriteService {
    //Create a new record of user inside appwrite
    async createUserAccount({ email, password, name }: CreateUserAccount) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error: any) {
            throw error
        }
    }

    async login({ email, password }: LoginUserAccount) {
        try {
            return await account.createEmailPasswordSession(email, password)
        } catch (error: any) {
            throw error
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data) // return on the basis of data, if (data) => true, if(!data) => false
        } catch (error: any) {
            console.log("isLoggedIn error: " + error);
        }
        return false
    }

    async getCurrentUser() {
        try {
            return account.get()
        } catch (error: any) {
            console.log("getCurrentUser error: " + error);
        }
    }

    async logout() {
        try {
            return await account.deleteSession("current")
        } catch (error: any) {
            console.log("logout error: " + error);
        }
    }
}

const appwriteService = new AppwriteService()

export default appwriteService
