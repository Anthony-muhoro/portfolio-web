import { databases, storage } from '@/lib/appwrite';
import { ID } from 'appwrite';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-specific-password'
  }
});

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

  // Contact Form Submission with Auto-reply
  async submitContact(data: ContactData) {
    try {
      // Save to Appwrite
      const response = await databases.createDocument(
        'YOUR_DATABASE_ID',
        'contact',
        ID.unique(),
        data
      );

      // Send auto-reply email
      await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: data.email,
        subject: 'Thank you for contacting me!',
        text: `Dear visitor,\n\nThank you for reaching out. I have received your message and will get back to you as soon as possible.\n\nBest regards,\nYour Name`
      });

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