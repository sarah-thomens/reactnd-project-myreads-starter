import React from 'react'										// Imports React Library
import PropTypes from 'prop-types'					// Imports PropTypes capability
import { Link } from 'react-router-dom'			// Imports the Link Component from React

class BookSearch extends React.Component
{
	//--PropTypes for BookSearch Component----------------------------------------------------------------------
	static propTypes =
	{

	}

	//--Render Method for BookSearch Component------------------------------------------------------------------
	render( )
	{
		return(
			<div className="search-books">
				<div className="search-books-bar">
					//--Link back to Main Page using React Link---------------------------------------------------------
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
						<input type="text" placeholder="Search by title or author"/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid"></ol>
				</div>
			</div>
		)
	}
}

export default BookSearch
