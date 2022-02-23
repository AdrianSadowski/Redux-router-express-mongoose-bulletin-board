import Axios from 'axios';

/* selectors */
export const getAll = ({posts}) => posts.data;
export const getPost = ({posts}) => posts.currentPost;
export const getPostById = ({posts, users}, postId) => {
  const post = posts.data.find(innerPost => innerPost._id === postId);
  if (post) {
    post.author = users.find(user => user._id === post.author._id);
  }
  return post;
};
export const getAllPublished = ({posts}) => posts.data.filter(item => item.status === 'published');
export const getLoadingState = ({posts}) => posts.loading;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_POSTS = createActionName('FETCH_POSTS');

const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');
const UPDATE_POST = createActionName('UPDATE_POST');
const FETCH_ONE_POST = createActionName('FETCH_ONE_POST');

/* action creators */
export const fetchStarted = payload => ({payload, type: FETCH_START});
export const fetchSuccess = payload => ({payload, type: FETCH_SUCCESS});
export const fetchError = payload => ({payload, type: FETCH_ERROR});
const fetchPosts = payload => ({payload, type: FETCH_POSTS});
export const fetchOnePost = payload => ({payload, type: FETCH_ONE_POST});

export const addPost = payload => ({payload, type: ADD_POST});
export const removePost = payload => ({payload, type: REMOVE_POST});
export const updatePost = payload => ({payload, type: UPDATE_POST});

/* thunk creators */
export const fetchAllPosts = () => async (dispatch, getState) => {
  const {posts} = getState();

  if (!posts.data.length) {
    dispatch(fetchStarted());
    await Axios.get('http://localhost:8000/api/posts')
      .then(res => {
        dispatch(fetchPosts(res.data));
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  }
};

export const fetchPostById = postId => async (dispatch, getState) => {
  const {posts} = getState();

  if (!posts.currentPost || posts.currentPost._id !== postId) {
    dispatch(fetchStarted());
    await Axios.get(`http://localhost:8000/api/posts/${postId}`)
      .then(res => {
        dispatch(fetchOnePost(res.data));
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  }
};

export const fetchAddPost = (post) => {
  console.log('in fetch post', post);

  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.post('http://localhost:8000/api/posts/add', post,)
      .then((res) => {
        dispatch(addPost(post));
        dispatch(fetchSuccess(post));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_POST: {
      console.log(statePart);
      console.log(action);
      return {...statePart, data: [...statePart.data, action.payload]};
    }
    case REMOVE_POST: {
      return {
        ...statePart,
        data: [...statePart.data.filter(post => post.id !== action.payload)],
      };
    }
    case UPDATE_POST: {
      const index = statePart.data.findIndex(item => item.id === action.payload.id);
      const newData = [...statePart.data];
      newData[index] = action.payload;

      return {...statePart, data: newData};
    }
    case FETCH_ONE_POST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        currentPost: action.payload,
      };
    }
    default:
      return statePart;
  }
}
