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


![Screenshot from 2022-01-09 19-19-30](https://user-images.githubusercontent.com/55339354/148685036-61b58a80-6074-4c3e-9447-d78f42af5043.png)
![Screenshot from 2022-01-09 19-19-50](https://user-images.githubusercontent.com/55339354/148685041-809f4498-93b0-424b-b989-3568081e3621.png)
![Screenshot from 2022-01-09 19-20-15](https://user-images.githubusercontent.com/55339354/148685047-f466fae8-65a5-47bc-a8dc-6a1f02184f33.png)

