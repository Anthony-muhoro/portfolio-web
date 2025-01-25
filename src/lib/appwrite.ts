import { Client, Databases, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint('YOUR_APPWRITE_ENDPOINT') 
    .setProject('YOUR_PROJECT_ID');

export const databases = new Databases(client);
export const storage = new Storage(client);

// Collection IDs - you'll need to create these in Appwrite Console
export const HERO_COLLECTION_ID = 'hero';
export const PROJECTS_COLLECTION_ID = 'projects';
export const SKILLS_COLLECTION_ID = 'skills';
export const SERVICES_COLLECTION_ID = 'services';
export const CONTACT_COLLECTION_ID = 'contact';
export const FOOTER_COLLECTION_ID = 'footer';

export { client };