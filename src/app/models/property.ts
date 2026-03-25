export interface PropertyImage {
  id: number;
  propertyId: number;
  imageUrl: string;
  isPrimary: boolean;
  sortOrder: number;
}

export interface PropertyModel {
  id: number;
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  propertyType: string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  squareFootage: number;
  yearBuilt?: number | null;
  status: string;
  latitude?: number | null;
  longitude?: number | null;
  dateListed: string;
  agentId: number;
  createdAt: string;
  updatedAt?: string | null;
  propertyImages: PropertyImage[];
}