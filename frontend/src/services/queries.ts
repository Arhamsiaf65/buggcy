import { useQuery, useMutation } from "@tanstack/react-query";
import { 
  getBlogById, getCareerById, getServiceById,
  getBlogs, getCareers, getServices, submitContactForm
} from "./api";

export const useBlogQuery = (id: string) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id, // Only run the query if ID exists
  });
};

export const useCareerQuery = (id: string) => {
  return useQuery({
    queryKey: ["career", id],
    queryFn: () => getCareerById(id),
    enabled: !!id,
  });
};

export const useServiceQuery = (id: string) => {
  return useQuery({
    queryKey: ["service", id],
    queryFn: () => getServiceById(id),
    enabled: !!id,
  });
};

export const useBlogsQuery = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
};

export const useCareersQuery = () => {
  return useQuery({
    queryKey: ["careers"],
    queryFn: getCareers,
  });
};

export const useServicesQuery = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
};

export const useContactMutation = () => {
  return useMutation({
    mutationFn: submitContactForm,
  });
};
