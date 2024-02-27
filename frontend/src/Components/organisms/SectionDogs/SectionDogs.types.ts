export interface dogDataTypes {
  name: string;
  gender: string;
  age: string;
  primary_photo_cropped: {
    small: string;
    medium: string;
    large: string;
  };
  photos: {
    full: string;
    large: string;
  }[];
  breeds: {
    mixed: boolean;
    primary: string;
    secondary: string;
  };
  description: string;
  id: number;
  size: string;
  status: string;
}
