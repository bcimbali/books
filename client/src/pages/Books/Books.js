import React, { Component } from 'react';
import ListItem from './../../components/List/ListItem.js';
import DeleteBtn from './../../components/DeleteBtn/DeleteBtn.js';
import API from './../../utils/API';

class Books extends Component {
    state = {
        books: [],
    };

    // Lifecycles
    componentDidMount() {
        this.loadBooks();
    }

    // My methods
    loadBooks = () => {
        // Set books array to some books from mongo
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            ).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <p>This is a list of books</p>

                
                {this.state.books.map(book => (
                    <div>
                    <ListItem>{book.title}</ListItem>
                    <DeleteBtn className="badClass" onClick={() => this.deleteBook(book.id)} />
                    <div>{book.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Books;