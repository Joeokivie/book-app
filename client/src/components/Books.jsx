import Book from "./Book";
import { useState } from "react";

export default function Books() {

    let [books, setBooks] = useState([
        {
            bookName: `test book`, 
            bookAuthor: `test author`, 
            reactions: [],
            publicImageURL: `https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=sph`,
        }
    ]);

    return (
        <div className={`books`}>
            {books.length > 0 ? (
                <div className={`booksContainer`}>
                    {books.map((book, bookIndex) => {
                        return <Book key={bookIndex} book={book} />
                    })}
                </div>
            ) : (
                <div className={`noBooks`}>No Books</div>
            )}
        </div>
    )
}