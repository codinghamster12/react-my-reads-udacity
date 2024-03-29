import React, { Component, Fragment } from "react";
import { headers } from "../BooksAPI";
import axios from "axios";
import Book from "./Book";

export default class BooksList extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map(book => {
                  if (book.shelf === "currentlyReading")
                    return (
                      <Fragment>
                        <Book
                          book={book}
                          handleChange={this.props.handleChange}
                        ></Book>
                      </Fragment>
                    );
                })}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map(book => {
                  if (book.shelf === "read")
                    return (
                      <Fragment>
                        <Book
                          book={book}
                          handleChange={this.props.handleChange}
                        ></Book>
                      </Fragment>
                    );
                })}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map(book => {
                  if (book.shelf === "wantToRead")
                    return (
                      <Fragment>
                        <Book
                          book={book}
                          handleChange={this.props.handleChange}
                        ></Book>
                      </Fragment>
                    );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
