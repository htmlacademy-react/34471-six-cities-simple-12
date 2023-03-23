export type RoomType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export type Review = {
  id: number;
  roomid: number;
  avatar: string;
  name: string;
  rating: number;
  date: [string, number];
  text: string;

};

export type RoomDetail = {
  id: number;
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


