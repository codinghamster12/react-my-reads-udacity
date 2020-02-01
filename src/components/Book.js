import React from "react";

const Book = props => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.book.imageLinks.thumbnail})`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={e => props.handleChange(e, props.book.title)}>
              <option value="DEFAULT">Move to...</option>

              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.author}</div>
      </div>
    </li>
  );
};

export default Book;