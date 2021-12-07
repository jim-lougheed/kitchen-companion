# KitchenCompanion Customizable Cookbook

helps you search for countless recipe ideas based on ingredients you have on hand to answer the dreaded question of "What am I going to make for dinner tonight?" Using KitchenCompanion, you can create custom searches through the Spoonacular API and favourite recipes so you can access them later at your convenience.

## Available Scripts

In the project directory, you can run:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

## Features

![Home Page](./server/public/readme-captures/homePage.JPG)

Each recipe retrieved by the API can be added to the user's list of favourited recipes.

![Add to myKitchen Recipes button](./server/public/readme-captures/addToMyRecipes.JPG)

The "What's in myKitchen?" sidebar allows the user to check the box of each food item they have on hand to filter recipes and use the Dinner Wheel.

![Ingredients On Hand component](./server/public/readme-captures/ingredientsOnHand.JPG)

## Technologies Used

### [React](https://reactjs.org/)
Created with `create-react-app` using the React JS library.

### [spoonacular API](https://spoonacular.com/food-api)
Recipe API used for data retrieval of recipes.

### [mySQL](https://www.mysql.com/)
Stores user information and favourited recipes.

### [Knex.js](https://knexjs.org/)
Makes queries to and from mySQL database.

### [Ant Design](https://ant.design/)
Built with Ant Design UI framework components.

### [Winwheel.js](http://dougtesting.net/home)
Uses basic code wheel for random dinner recipe selector.

### [Node.js](https://nodejs.org/en/)
Runs server.

### [Express](http://expressjs.com/)
Express web framework for Node.js.

### [Axios](https://axios-http.com/)
Axios HTTP client makes API calls to spoonacular API.

### [SASS](https://sass-lang.com/)
CSS extension language used with BEM naming principles.

### [uniqid](https://www.npmjs.com/package/uniqid)
Creates unique IDs for recipes added to database.


## Badges

https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fimg.shields.io%2Ftwitter%2Furl%3Fstyle%3Dsocial%26url%3D%252Ftwitter%252FJimsCodes

https://img.shields.io/github/watchers/jim-lougheed/kitchen-companion?style=social




