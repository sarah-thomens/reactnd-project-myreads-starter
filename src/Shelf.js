import React from 'react'										// Imports React Library
import PropTypes from 'prop-types'					// Imports PropTypes capability

class Shelf extends React.Component
{
	static propTypes =
	{
		books: PropTypes.array.isRequired,
		shelfName: PropTypes.string.isRequired
	}

	render( )
	{
		const { books, shelfName } = this.props

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelfName}</h2>
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
											<select>
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
			</div>
		)
	}
}

export default Shelf
