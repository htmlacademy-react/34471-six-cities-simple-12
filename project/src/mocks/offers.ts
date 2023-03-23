import { RoomDetail } from '../types/types';

export const rooms: RoomDetail[] = [
  {

    id: 1,
    img: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    roomtype: 'Apartment',
    rating: 4.8,
    images: ['img/studio-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    fulldescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    roomsamount: 3,
    roomsguests: 4,
    items: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      ' Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'
    ],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,

    },
    reviews: [
      {
        id: 1,
        roomid: 1,
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        rating: 4,
        date: ['April', 2019],
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

      },
      {
        id: 2,
        roomid: 1,
        avatar: 'img/avatar-angelina.jpg',
        name: 'Ангелина',
        rating: 5,
        date: ['April', 2019],
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

      },

    ],

  },
  {

    id: 2,
    img: 'img/apartment-02.jpg',
    isPremium: false,
    price: 80,
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    roomtype: 'Room',
    rating: 3.8,
    images: ['img/apartment-03.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    fulldescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    roomsamount: 3,
    roomsguests: 4,
    items: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      ' Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'
    ],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,

    },
    reviews: [
      {
        id: 1,
        roomid: 1,
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        rating: 4,
        date: ['April', 2019],
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

      },
      {
        id: 2,
        roomid: 1,
        avatar: 'img/avatar-angelina.jpg',
        name: 'Ангелина',
        rating: 5,
        date: ['April', 2019],
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

      },

    ],

  },
  {

    id: 3,
    img: 'img/apartment-03.jpg',
    isPremium: true,
    price: 150,
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    roomtype: 'Hotel',
    rating: 4.2,
    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    fulldescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    roomsamount: 3,
    roomsguests: 4,
    items: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      ' Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'
    ],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,

    },
    reviews: [
      {
        id: 1,
        roomid: 1,
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        rating: 4,
        date: ['April', 2019],
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

      },
      {
        id: 2,
        roomid: 1,
        avatar: 'img/avatar-angelina.jpg',
        name: 'Ангелина',
        rating: 5,
        date: ['April', 2019],
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

      },

    ],

  },
  {

    id: 4,
    img: 'img/apartment-01.jpg',
    isPremium: false,
    price: 100,
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    roomtype: 'House',
    rating: 3.1,

    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    fulldescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    roomsamount: 3,
    roomsguests: 4,
    items: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      ' Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV'
    ],
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true,

    },
    reviews: [
      {
        id: 1,
        roomid: 4,
        avatar: 'img/avatar-max.jpg',
        name: 'Max',
        rating: 4,
        date: ['April', 2019],
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

      },
      {
        id: 2,
        roomid: 4,
        avatar: 'img/avatar-angelina.jpg',
        name: 'Ангелина',
        rating: 5,
        date: ['April', 2019],
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',

      },

    ],

  },

];
