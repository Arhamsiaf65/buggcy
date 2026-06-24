import type { Blog, Career, Service } from "../types";
import { mockBlogs, mockCareers, mockServices } from "../data/mockData";

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getBlogById = async (id: string): Promise<Blog | undefined> => {
  await delay(800); // Simulate 800ms network latency
  return mockBlogs.find((blog) => blog.id === id);
};

export const getBlogs = async (): Promise<Blog[]> => {
  await delay(800);
  return mockBlogs;
};

export const getCareerById = async (id: string): Promise<Career | undefined> => {
  await delay(800);
  return mockCareers.find((career) => career.id === id);
};

export const getCareers = async (): Promise<Career[]> => {
  await delay(800);
  return mockCareers;
};

export const getServiceById = async (id: string): Promise<Service | undefined> => {
  await delay(800);
  return mockServices.find((service) => service.id === id);
};

export const getServices = async (): Promise<Service[]> => {
  await delay(800);
  return mockServices;
};

export const submitContactForm = async (data: any): Promise<{ success: boolean }> => {
  await delay(900); // Simulate network latency
  console.log("Form data received by API:", data);
  return { success: true };
};
