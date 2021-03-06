# MyReads Project

### By: Sarah Thomens

This project uses the starter template for the final assessment project for Udacity's React Fundamentals course. The CSS and HTML markup was provided as a starting point, but without any of the React code. All React code was written by Sarah Thomens.

## How to Install and Run Project

To install and run this project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Requirements Checklist
* Main Page
	- [x] Shows three different shelves - currently reading, want to read, and read
	- [x] Links to Search Page
* Search Page
	- [x] Has text input that brings up books that match the query
	- [x] Books that come up should have control to change bookshelves
	- [x] Has a link to the root URL (`/`)
	- [x] New book selections on search page should show up on main page
	- [x] Invalid queries are handled
	- [x] Prior search results are not shown
	- [x] Search works correctly when a book does not have a thumbnail or author
	- [x] User is able to search for multiple word queries
* Books
	- [x] Each book has a control to change what shelf it is on
	- [x] Default value should be the current shelf the book is on or 'none' if not on a shelf
	- [x] Book moves to new shelf immediately when changed
	- [x] Book should have same state on main page and on search page
* Misc
	- [x] Include a README file with instructions for installing and launching
	- [x] Project code handles state management appropriately


## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Guidance Used
The tutorial for the FEND Project 6: My Reads Walkthrough was used to help get the search function working properly and some issues with changing shelves not persisting with a refresh. Though I did watch Ryan Waite's video, my code is not exactly like his because our projects were so different. However, I would not have been able to figure things without his guidance. Thanks! You can watch the video [here](https://www.youtube.com/watch?v=acJHkd6K5kI&feature=youtu.be).

## Backend Server

A backend server was provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the completed MyReads project for Sarah Thomens for the Udacity React Class in the Google Nanodegree Program. Therefore, pull requests most likely will not be accepted.
