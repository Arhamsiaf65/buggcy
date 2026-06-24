export interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  tags?: string[];
}

export interface Career {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string; // e.g., 'Full-time', 'Part-time', 'Contract'
  requirements: string[];
  department?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  detailedContent?: string;
}
