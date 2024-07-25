import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a13be2002ccdfe5dd7")
  .setKey(
    "25fc5ad1653b3f9ccbb9bb88464464587504b2354ea33be77e98cc536315b8b687cf56b407b045eeb86cc83f076fe6ac8c9e46644152ab535412eef0350caefba13eb11180898eeef428a8a28e4811548e2e0182a2404f5144c789d1f08b94b45e0ebc7933ff002336a748fde123b32044312ac8692201b1fcc7a98be93d256c"!
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
