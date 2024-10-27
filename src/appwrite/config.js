import conf from "../conf/conf.js";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases
    bucket

    constructor()
    {
       this.client.setEndpoint(conf.appwriteUrl);
       this.client.setProject(conf.appwriteProjectId);
       this.databases=new Databases(this.client);
       this.bucket=new Storage(this.client);

    }

    async createPost({title,slug,content,featuredimage,status,userId})
    { // slug is document ID
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId,
                }
            )

        }catch(err)
        {
            console.log("Appwrite serive :: createPost :: error", err);
        }
       
    }

    async updatePost(slug,{title,content,featuredimage,status})
    {
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,

                }
            )

        }catch(err)
        {
            console.log("Appwrite serive :: updatePost :: error", err);
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
        }catch(err)
        {
            console.log("Appwrite serive :: deletePost :: error", err);
            return false

        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )

        }catch(err)
        {
            console.log("Appwrite serive :: getPost :: error", err);
            return false
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )

        }catch(err)
        {
            console.log("Appwrite serive :: getPosts :: error", err);
            return false
        }
    }

    async uploadFile(file)
    {
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )


        }catch(err)
        {
            console.log("Appwrite serive :: uploadFile :: error", err);
            return false
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true

        }catch(err) 
        {
            console.log("Appwrite serive :: deleteFile :: error", err);
            return false
        }
    }
     
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ) 
    }

}

const service =new Service();
export default service;