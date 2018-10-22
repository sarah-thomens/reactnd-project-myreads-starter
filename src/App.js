import React from 'react'										// Imports React Library
import * as BooksAPI from './BooksAPI'			// Imports the BooksAPI
import { Route } from 'react-router-dom'		// Imports the Route Component from React
import { Link } from 'react-router-dom'			// Imports the Link Component from React
import Shelf from './Shelf'									// Imports the Shelf Component
import BookSearch from './BookSearch'				// Imports the Book Search Component
import './App.css'													// Imports the CSS for the App

class BooksApp extends React.Component
{
  state =
	{
		books: []
  }

	componentDidMount( )
	{
		BooksAPI.getAll( ).then( ( books ) =>
		{
			this.setState( { books } )
		})
	}

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

  render( )
	{
		return (
      <div className='app'>
				<Route exact path='/' render={ ( ) => (
					<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
								<Shelf
									books={this.state.books}
									filterType='currentlyReading'
									shelfName='Currently Reading'
									updateShelf={this.changeShelf}
								/>
								<Shelf
									books={this.state.books}
									filterType='wantToRead'
									shelfName='Want to Read'
									updateShelf={this.changeShelf}
								/>
								<Shelf
									books={this.state.books}
									filterType='read'
									shelfName='Read'
									updateShelf={this.changeShelf}
								/>
              </div>
            </div>
            <div className="open-search">
							<Link
								to='/search'
							>Add a book</Link>
            </div>
          </div>
				)}/>
				<Route path='/search' render={ ( { history } ) => (
					<BookSearch/>
				)}/>
      </div>
    )
  }
}

export default BooksApp
