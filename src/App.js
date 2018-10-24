import React from 'react'										// Imports React Library
import * as BooksAPI from './BooksAPI'			// Imports the BooksAPI
import { Route } from 'react-router-dom'		// Imports the Route Component from React
import { Link } from 'react-router-dom'			// Imports the Link Component from React
import Shelf from './Shelf'									// Imports the Shelf Component
import BookSearch from './BookSearch'				// Imports the Book Search Component
import './App.css'													// Imports the CSS for the App

class BooksApp extends React.Component
{
	//--The state of the books array for the app----------------------------------------------------------------
  state =
	{
		books: []
  }

	//--Function that gets all books from the Books API and sets the books state with the array-----------------
	componentDidMount( )
	{
		BooksAPI.getAll( ).then( ( books ) =>
		{
			this.setState( { books } )
		})
	}

	//--Function that updates the shelves when a user changes where a book is placed----------------------------
	changeShelf = ( book, shelf ) =>
	{
		BooksAPI.update( book, shelf ).then( ( book ) =>
		{
			{
				this.setState( state =>
				({
					books: state.books
				}))
			}
		})
	}

	//--The Render function for the app-------------------------------------------------------------------------
  render( )
	{
		return (
      <div className='app'>
				//--Main Page HTML------------------------------------------------------------------------------------
				<Route exact path='/' render={ ( ) => (
					<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
								//--Currently Reading Shelf-------------------------------------------------------------------
								<div className="bookshelf">
									<h2 className="bookshelf-title">Currently Reading</h2>
									<Shelf
										books={this.state.books.filter( (book) => book.shelf === 'currentlyReading' )}
										updateShelf={this.changeShelf}
									/>
								</div>
								//--Want to Read Shelf------------------------------------------------------------------------
								<div className="bookshelf">
									<h2 className="bookshelf-title">Want to Read</h2>
									<Shelf
										books={this.state.books.filter( (book) => book.shelf === 'wantToRead' )}
										updateShelf={this.changeShelf}
									/>
								</div>
								//--Read Shelf--------------------------------------------------------------------------------
								<div className="bookshelf">
									<h2 className="bookshelf-title">Read</h2>
									<Shelf
										books={this.state.books.filter( (book) => book.shelf === 'read' )}
										updateShelf={this.changeShelf}
									/>
								</div>
              </div>
            </div>
						//--Link to Search Page Using React Link----------------------------------------------------------
            <div className="open-search">
							<Link to='/search'>Add a book</Link>
            </div>
          </div>
				)}/>
				//--Book Search Page----------------------------------------------------------------------------------
				<Route path='/search' render={ ( { history } ) => (
					<BookSearch/>
				)}/>
      </div>
    )
  }
}

export default BooksApp
