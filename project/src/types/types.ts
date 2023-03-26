export type RoomType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export type Review = {
  reviewId: number;
  roomid: number;
  avatar: string;
  name: string;
  rating: number;
  date: [string, number];
  text: string;

};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type RoomDetail = {
  id: number;
  location: Point;
  img: string;
  isPremium: boolean;
  price: number;
  title: string;
  description: string;
  roomtype: RoomType;
  rating: number;
  images: string[];
  fulldescription: string;
  roomsamount: number;
  roomsguests: number;
  items: string[];
  owner: {
    avatar: string;
    name: string;
    isPro: boolean;
  };
  reviews: Review[];
};
