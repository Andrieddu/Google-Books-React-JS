import React, { Component } from 'react';

import {connect} from 'react-redux';

import BookCard from './BookCard';

export class BooksContainer extends Component {
    render() {
        
        const {books} = this.props;
        let content = '';

        content = books.length > 0 ? books.map((book, index) => <BookCard key={index} book={book} />) : null ;
        console.log (books.length)
        return (
            <div className="row">
                <hr />
                {content}
                <hr />    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books.books
})

export default connect(mapStateToProps)(BooksContainer);
