This tic-tac-toe game is my phase 5 project for Flatiron School. 

To set it up on your own computer, please run these commands

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)


Here is a description of how I envision this project to be at it's final stage:

-The user will be able to play a series of games against a computer (using the minimax algorithm)
-As the user continues to interact with the computer, a narrative experience will unfold
-The application will utlize a robust backend to support and track the narrative experience
-A robust CSS framework will give the application a signature style


Here is a description of the current iteration of my project:

-In the current iteration, most of everything is handled by my react and javascript frontend
-A robust CSS framework gives the application a signature style
-Two players are able to play a game together
-If one player wins, they will be taken to a screen celebrating their win

Here is what I am currently working on:

-Implimenting the minimax algorithm to allow the user to play against the computer