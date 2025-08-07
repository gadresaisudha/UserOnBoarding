export interface User {
  _id: string;
  email: string;
  aboutme?: string;
  birthdate?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  createdAt?: string;
}