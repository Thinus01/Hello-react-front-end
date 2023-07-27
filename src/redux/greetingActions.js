import axios from 'axios';

export const SET_RANDOM_GREETING = 'SET_RANDOM_GREETING';

export const setRandomGreeting = (greeting) => {
  return {
    type: SET_RANDOM_GREETING,
    payload: greeting,
  };
};

export const fetchRandomGreeting = () => {
    return (dispatch) => {
      axios
        .get('http://localhost:3000/random_greeting')
        .then((response) => {
          const greeting = response.data.greeting;
          dispatch(setRandomGreeting(greeting));
        })
        .catch((error) => {
          console.error('Error fetching random greeting:', error);
        });
    };
  };