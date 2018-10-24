import React from 'react'										// Imports React Library
import PropTypes from 'prop-types'					// Imports PropTypes capability

class Shelf extends React.Component
{
	static propTypes =
	{
		books: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}

	render( )
	{
		const { books, updateShelf } = this.props

		return (
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map( (book) => (
						<li key={book.id}>
							<div className="book">
								<div className="book-top">
									<div className="book-cover" style={{
											width: 128,
											height: 193,
											backgroundImage: `url(${book.imageLinks.thumbnail})`
									}}></div>
									<div className="book-shelf-changer">
										<select
											defaultValue={book.shelf}
											onChange={ (event) => updateShelf( book, event.target.value ) }
										>
												<option value="move" disabled>Move to...</option>
												<option value="currentlyReading">Currently Reading</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">None</option>
										</select>
									</div>
								</div>
								<div className="book-title">{book.title}</div>
								<div className="book-authors">{book.authors.map( (author) => (
									<div key={book.id + author}>{author}</div>
								))}</div>
							</div>
						</li>
					))}
				</ol>
			</div>
		)
	}
}

export default Shelf
