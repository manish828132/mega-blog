import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
     client=new Client()
     account;
constructor(){

    this.client.setEndpoint(conf.appwriteUrl);
    this.client.setProject(conf.appwriteProjectId);
    this.account=new Account(this.client);

}

async createAccount({email,password,name})
{
    try{
        const userAccount = await this.account.create(
                 ID.unique(), 
                 email, 
                 password,
                 name
             );

             if(userAccount)
             {
               return this.login({email,password});
             }
             else {
                return userAccount;
             }

    }catch(err)
    {
        throw err;
    }
}

async login({email,password})
{
    try {
        const response = await this.account.createEmailPasswordSession(email, password);
        return response // Success
    } catch (error) {
        console.log(error); // Failure
    }
    
    
}

async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
}

async logOut()
{
    try {
        await this.account.deleteSessions('current');
    } catch (error) {
        console.log("Appwrite serive :: logout :: error", error);
    }
}


}

const authservice=new AuthService();
export default authservice






