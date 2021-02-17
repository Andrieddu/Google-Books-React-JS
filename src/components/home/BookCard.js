import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BookCard extends Component {
    render() {
        const { book } = this.props;
        return (
            <div className="col-md-3 mb-5 mt-3">
                <div className="card card-body bg-dark text-center h-100 book-card">
                    <img className="w-100 mb-2 book-img" style={{maxHeight: '350px'}} src={book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`} alt="Book Cover" />
                    <h5 className="text-light card-title">
                        {book.volumeInfo.title} 
                    </h5>
                    <h5 className="text-light card-authors">
                        {book.volumeInfo.authors}
                    </h5>
                    <Link className="btn btn-success" to={'/book/' + book.id}>
                        Book Details
                    </Link>
                </div>
            </div>
        );
    }
}

export default BookCard;
