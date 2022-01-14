export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface UserDetail extends User {
  gender: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
  registerDate: string;
  updatedDate: string;
}

export interface Posts {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: User;
}

export interface PostDetail extends Posts {
  link: any;
}
