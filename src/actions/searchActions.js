import {SEARCH_BOOK, FETCH_BOOKS, FETCH_BOOK, LOADING} from './types';
import axios from 'axios';

export const searchBook = text => dispatch => {
    dispatch ({
        type: SEARCH_BOOK,
        payload: text
    });
};

export const fetchBooks = text => dispatch => {
    axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
        .then(response => 
            dispatch({
                type: FETCH_BOOKS,
                payload: response.data.items
            })
        )
        .catch(err => console.log(err))
};

export const fetchBook = id => dispatch => {
    axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(response =>
            dispatch({
                type: FETCH_BOOK,
                payload: response.data.volumeInfo
            })
        )
        .catch(err => console.log(err));
};
  
  export const setLoading = () => {
    return {
      type: LOADING
    };
  };