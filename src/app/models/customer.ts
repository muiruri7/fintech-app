export interface Customer {
  id: string; // Unique ID
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfRegistration: string; // ISO date string
  customerType: 'Individual' | 'Business';
  profilePicture: string; // Base64 string stored in localStorage
}
