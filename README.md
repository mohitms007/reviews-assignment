# Reviews Finder

A tool for companies to look at their Amazon reviews and find out what their users are saying.

## Description

We are trying to render 10000 reviews at once without pagination. We can use concept of a window which only render those components which are currently in the window which can be of any specified height and width and destroy all components which aren't. We use React Virtualized for this which implements this idea.

## Getting Started
npm install && npm start

### Dependencies

* React
* Chakra UI (dependencies: Framer Motion and emoticon) and Semantic UI
* React Virtualized
* React Router

### Features

- [x] Allow the company to view all reviews at once (without pagination)
- [x] Search through the reviews
- [x] Filter the entire list of reviews to find the good and the bad ones.
- [x] Allow the user to set up conditional formatting rules
- [x] Provide a summary of all the reviews to the company without looking at the data.

### Extra Features
- [x] Tried to make a well performant and good looking application.
- [x] It is mobile responsive as well (Please refresh the application after changing viewports to get a perfect look).

### More Features that can be added
* Adding More Filters
* Adding more conditional formatting rules
* Fix bugs if any

