/* selectors */
export const getAll = ({posts}) => posts.data;
export const getPostById = ({posts, users}, postId) => {
  const post = posts.data.find(innerPost => innerPost.id === postId);
  if (post) {
    post.author = users.find(user => user.id === post.author.id);
    // post = JSON.parse(JSON.stringify(post))
  }
  return post;
};

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_POST = createActionName('ADD_POST');

/* action creators */
export const fetchStarted = payload => ({payload, type: FETCH_START});
export const fetchSuccess = payload => ({payload, type: FETCH_SUCCESS});
export const fetchError = payload => ({payload, type: FETCH_ERROR});
export const addPost = payload => ({payload, type: ADD_POST});

/* thunk creators */

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
    default:
      return statePart;
  }
}
