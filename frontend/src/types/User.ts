export interface User {
  _id: string;
  email: string;
  aboutMe?: string;
  birthdate?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  createdAt?: string;
}