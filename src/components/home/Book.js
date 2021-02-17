import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchBook, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';

export class Book extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, book } = this.props;

    let bookInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={book.imageLinks === undefined ? "" : `${book.imageLinks.thumbnail}`} className="cover" alt="Cover" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{book.title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Authors:</strong> {book.authors}
              </li>
              <li className="list-group-item">
                <strong>Pages:</strong> {book.pageCount}
              </li>
              <li className="list-group-item">
                <strong>Publisher:</strong> {book.publisher}
              </li>
              <li className="list-group-item">
                <strong>Categories:</strong> {book.categories}
              </li>
              <li className="list-group-item">
                <strong>About:</strong> {book.description}
                <hr />
                <Link to="/" className="btn btn-link text-dark">
                  Go Back To Search
                </Link>
                <a
                  href={book.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  View on Google Books
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );

    let content = loading ? <Spinner /> : bookInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.books.loading,
  book: state.books.book
});

export default connect(
  mapStateToProps,
  { fetchBook, setLoading }
)(Book);