import shortid from 'shortid';

const userOneId = shortid();
const userTwoId = shortid();

const initialState = {
  users: [
    {
      id: userOneId,
      email: 'sadow.adrian@gmail.com',
      password: '123',
    },
    {
      id: userTwoId,
      email: 'kowalski@poczta.pl',
      password: '123',
    },
  ],
  user: {
    logged: true,
    id: userOneId,
    role: undefined,
  },
  posts: {
    data: [
      {
        // id: shortid(),
        id: '123124521124214',
        title: 'Audi RS6',
        description: `Description of post One. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        publicationDate: '7-02-2022',
        lastUpdate: '7-02-2022',
        author: {
          id: userTwoId,
          email: 'kowalski@poczta.pl',
        },
        status: 'published',
        price: '489',
        location: 'Warszawa',
      },
      {
        id: shortid(),
        title: 'Mercedes-Benz AMG GT',
        description: `Description of post Two. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        publicationDate: '7-02-2022',
        lastUpdate: '7-02-2022',
        author: {
          id: userTwoId,
          email: 'kowalski@poczta.pl',
        },
        status: 'published',
        price: '1800',
        location: 'Dubai',
      },
      {
        id: shortid(),
        title: 'BMW M3 DKG',
        description: `Description of post Three. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        publicationDate: '7-02-2022',
        lastUpdate: '7-02-2022',
        author: {
          id: userOneId,
          email: 'sadow.adrian@gmail.com',
        },
        status: 'published',
        price: '999',
        location: 'Krakow',
      },
      {
        id: shortid(),
        title: 'Ferrari California F1',
        description: `Description of post Four. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        publicationDate: '7-02-2022',
        lastUpdate: '7-02-2022',
        author: {
          id: userOneId,
          email: 'sadow.adrian@gmail.com',
        },
        status: 'published',
        price: '200',
        location: 'Katowice',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};

export default initialState;
