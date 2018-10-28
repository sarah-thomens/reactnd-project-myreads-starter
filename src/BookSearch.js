import React from 'react'										// Imports React Library
import * as BooksAPI from './BooksAPI'			// Imports the BooksAPI
import PropTypes from 'prop-types'					// Imports PropTypes capability
import { Link } from 'react-router-dom'			// Imports the Link Component from React
import Shelf from './Shelf'									// Imports the Shelf Component

class BookSearch extends React.Component
{
	//--PropTypes for BookSearch Component----------------------------------------------------------------------
	static propTypes =
	{
		updateShelf: PropTypes.func.isRequired,	// updateShelf Function
		books: PropTypes.array.isRequired				// books array
	}

	//--A State for the Search Query a user will input----------------------------------------------------------
	state =
	{
		query: '',
		searchResults: []
	}

	//--Updating the query from user input----------------------------------------------------------------------
	updateQuery = ( query ) =>
	{
		this.setState( { query: query }, this.submitQuery );
	}

	//--Submitting the Search Query to display books that match-------------------------------------------------
	submitQuery( )
	{
		//--If the query is empty or undefined return an empty search array---------------------------------------
		if( this.state.query === '' || this.state.query === undefined )
		{
			this.setState({ searchResults: [] });
		}

		else
		{
			//--Search the BooksAPI with the trimmed query----------------------------------------------------------
			BooksAPI.search( this.state.query.trim( ) ).then( results =>
			{
				//--If there is an error, return an empty search array------------------------------------------------
				if( !Array.isArray( results ) )
				{
					results = [];
				}
				//--If there is not an error, create a new array of books from the results----------------------------
				else
				{
					results = results.map( (book) =>
					{
						//--If there is no image file, create an empty image object file----------------------------------
						if( book.imageLinks === undefined )
						{
							book.imageLinks = { smallThumbnail: '', thumbnail: '' }
						}

						//--If there are no authers, create an array stating No Author------------------------------------
						if( book.authors === undefined )
						{
							book.authors = ["No Author"]
						}

						//--Set the default shelf to none for each book---------------------------------------------------
						book.shelf = "none";

						//--Check the current bookshelves against the searched books and change shelves accordingly-------
						this.props.books.forEach( (myBook) =>
						{
							if( myBook.id === book.id )
							{
								book.shelf = myBook.shelf;
							}
						})

						return book;
					})
				}

				this.setState({ searchResults: results });
			});
		}
	}

	//--Render Method for BookSearch Component------------------------------------------------------------------
	render( )
	{
		const { updateShelf } = this.props						// updateShelf function and books array
		const { query, searchResults } = this.state		// the query state

		return(
			<div className="search-books">
				<div className="search-books-bar">
					{/*--Link back to Main Page using React Link-----------------------------------------------------*/}
					<Link
						className="close-search"
						to='/'
					>Close</Link>
					{/*--Set the Input field for the search to trigger the updateQuery function----------------------*/}
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={ (event) => this.updateQuery( event.target.value ) }
						/>
					</div>
				</div>
				{/*--Show the search results on the page using Shelf component-------------------------------------*/}
				<div className="search-books-results">
					<Shelf
						books={searchResults}
						updateShelf={updateShelf}
					/>
				</div>
			</div>
		)
	}
}

export default BookSearch
