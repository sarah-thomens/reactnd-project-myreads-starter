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
		updateShelf: PropTypes.func.isRequired	// updateShelf Function
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
		if( this.state.query === '' || this.state.query === undefined )
		{
			return this.setState({ searchResults: [] });
		}

		BooksAPI.search( this.state.query.trim( ) ).then( results =>
		{
			if( results.error )
			{
				return this.setState({ searchResults: [] });
			}
			else
			{
				return this.setState({ searchResults: results });
			}
		});
	}

	//--Render Method for BookSearch Component------------------------------------------------------------------
	render( )
	{
		const { updateShelf } = this.props						// updateShelf function
		const { query, searchResults } = this.state		// the query state

		return(
			<div className="search-books">
				<div className="search-books-bar">
					{/*--Link back to Main Page using React Link-----------------------------------------------------*/}
					<Link
						className="close-search"
						to='/'
					>Close</Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={ (event) => this.updateQuery( event.target.value ) }
						/>

					</div>
				</div>
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
