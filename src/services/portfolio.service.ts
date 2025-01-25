import { databases, storage } from '@/lib/appwrite';
import { ID } from 'appwrite';
import emailjs from '@emailjs/browser';

export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  imageId: string;
}

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  imageId: string;
  liveUrl: string;
  githubUrl: string;
}

export interface SkillData {
  name: string;
  category: string;
}

export interface ServiceData {
  title: string;
  description: string;
  icon: string;
}

export interface ContactData {
  email: string;
  phone: string;
  message: string;
}

export const portfolioService = {
  // Hero Section
  async updateHero(data: HeroData) {
    try {
      const response = await databases.createDocument(
        'YOUR_DATABASE_ID',
        'hero',
        ID.unique(),
        data
      );
      return response;
    } catch (error) {
      console.error('Error updating hero:', error);
      throw error;
    }
  },

  // Projects Section
  async updateProject(data: ProjectData) {
    try {
      const response = await databases.createDocument(
        'YOUR_DATABASE_ID',
        'projects',
        ID.unique(),
        data
      );
      return response;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  },

  // Skills Section
  async updateSkill(data: SkillData) {
    try {
      const response = await databases.createDocument(
        'YOUR_DATABASE_ID',
        'skills',
        ID.unique(),
        data
      );
      return response;
    } catch (error) {
      console.error('Error updating skill:', error);
      throw error;
    }
  },

  // Services Section
  async updateService(data: ServiceData) {
    try {
      const response = await databases.createDocument(
        'YOUR_DATABASE_ID',
        'services',
        ID.unique(),
        data
      );
      return response;
    } catch (error) {
      console.error('Error updating service:', error);
      throw error;
    }
  },

  // Contact Form Submission with EmailJS
  async submitContact(data: ContactData) {
    try {
      // Save to Appwrite
      const response = await databases.createDocument(
        'YOUR_DATABASE_ID',
        'contact',
        ID.unique(),
        data
      );

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJS service ID
        'YOUR_TEMPLATE_ID', // EmailJS template ID
        {
          to_email: data.email,
          message: data.message,
          from_name: 'Your Portfolio',
          reply_to: 'your-email@example.com',
        },
        'YOUR_PUBLIC_KEY' // EmailJS public key
      );

      return response;
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
  },

  // File Upload
  async uploadFile(file: File) {
    try {
      const response = await storage.createFile(
        'YOUR_BUCKET_ID',
        ID.unique(),
        file
      );
      return response;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
};