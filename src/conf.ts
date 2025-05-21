type AppwriteConfig = {
    appwriteUrl: string;
    appwriteProjectId: string;
    appwriteDatabaseId: string;
    appwriteNoticeCollectionId: string;
    appwriteGalleryCollectionId: string;
    appwriteBucketId: string;

  };
  
  const conf: AppwriteConfig = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteNoticeCollectionId: String(import.meta.env.VITE_APPWRITE_NOTICE_COLLECTION_ID),
    appwriteGalleryCollectionId: String(import.meta.env.VITE_APPWRITE_GALLERY_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
   
  };
  
  export default conf;