import shortid from 'shortid';

const userOneId = shortid();

const initialState = {
  users: [
    {
      id: userOneId,
      email: 'sadow.adrian@gmail.com',
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
        id: shortid(),
        title: 'Post One',
        description: `Description of post One. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        publicationDate: '7-02-2022',
        author: { id: userOneId },
        status: 'published',
        price: '200',
      },
      {
        id: shortid(),
        title: 'Post Two',
        description: `Description of post Two. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        publicationDate: '7-02-2022',
        author: { id: userOneId },
        status: 'published',
        price: '200',
      },
      {
        id: shortid(),
        title: 'Post Three',
        description: `Description of post Three. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        publicationDate: '7-02-2022',
        author: { id: userOneId },
        status: 'published',
        price: '200',
      },
      {
        id: shortid(),
        title: 'Post Four',
        description: `Description of post Four. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        publicationDate: '7-02-2022',
        author: { id: userOneId },
        status: 'published',
        price: '200',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};

export default initialState;
