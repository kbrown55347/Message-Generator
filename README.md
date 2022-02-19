# Message Generator

![alt text](./public/Message_Generator.png)

## How to Run Program

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### Installation
- Open your editor of choice and navigate to the project directory in your terminal.
- Run `npm install` in your terminal to install the project's node dependencies.
- Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.
- Run `npm run server` in your terminal to start the server.
- Open a new terminal tab and run `npm run client` to start the react client app in a web browser.

### Usage
To generate a message for a guest using an existing template:
1. Select a time of day from the dropdown menu.
2. Select the guest name from the dropdown menu.
3. Select the company from the dropdown menu.
4. Click GENERATE MESSAGE and view the message displayed below with the selected information.


## Design Decisions

I provided dropdown menus for the user to select from pre-populated data in order to eliminate potential error in the user choosing or inputting a guest's name, a company name or a guest's room number. I displayed the message output below the dropdown menus so the user could see the message template for the information they were being prompted to select.

In the App.jsx file, I stored the id's of the selected values by the user so more than just the selected guest's first name, room number and/or the company's name is stored. That way those pieces of state could be accessed and used in the future for other message templates that could ask for additional or different information.

## Languages Used

I used a combination of HTML, CSS, MUI, React, Express and Node for this project. I used Express and Node to be able to store and access both company and guest data server side. I used MUI in combination with CSS to bring the project past the vanilla HTML layout and because I enjoy the style of MUI. I also used all of these languages, including React, because they are the ones I am the most comfortable with at this time and that I determined would allow me to best accomplish the project.

## Process for Verifying Correctness of Program

To verify the program was functioning how I intended it too, I tested my functions along the way by console logging variables and data. I did this to ensure I was getting the result I thought I was supposed to get. I also used Postman in the beginning to test that my GET routes were working correctly to retrieve all the data requested. Lastly, I tested the program as a potential user in the web browser to make sure the data that was populating and that I was selecting matched up with the data that was provided in the JSON files.

## What I Would Do With More Time

- I would move the message template information to a JSON file in the server like I did for the companies and guests data
- I would build out the functionality to allow a user to create and use their own message template
- I would create a way to autopopulate the morning, afternoon or evening times of day based on the actual time of day instead of having the user select



