# Workout_Tracker

Homework for Week 17

The Workout Tracker can be found here: [https://young-eyrie-39127.herokuapp.com/](https://young-eyrie-39127.herokuapp.com/)

## Introduction

This application allows the user to view and create daily workouts. The user can also track their exercise and view the combined weight of multiple exercises on a stats page.

## Table of Contents
* [Description](#Description)
* [Usage](#Usage)
* [Questions](#Questions)

## Description

This application uses a Mongo database with a Mongoose schema and Express to handle the routes to connect the back-end and front-end of the code. The api-routes.js file handles the requests to use the data from the Mongo database.

## Usage

When the user first visits the deployed application, they will see the stats for the last workout if they entered a workout previously. The user can enter a new workout, add exercises to continue the last workout, or view the dashboard for the stats of all the workouts.

![Main page for the workout tracker application.](https://github.com/falbuna/Workout_Tracker/blob/main/assets/1_IndexPage.png)

When the user selects "New Workout" or "Continue Workout", they will be sent to a new page that will allow the user to select the type of exercise to enter; Cardio or Resistance. If the user selects Resistance, they will be required to enter the name of the exercise, weight, sets, reps, and duration. After the fields have been entered, the user can select "Complete" which will send the user back to the index page and display the entered workout as the last workout, or "Add Exercise" to add another exercise to the workout.

![Adding a resistance exercise.](https://github.com/falbuna/Workout_Tracker/blob/main/assets/2_Resistance.png)

If user selects Cardio, they will be required to enter the name of the exercise, the distance, and the duration. After the fields have been entered, the user can select "Complete" which will send the user back to the index page and display the entered workout as the last workout, or "Add Exercise" to add another exercise to the workout.

![Adding a cardio exercise.](https://github.com/falbuna/Workout_Tracker/blob/main/assets/3_Cardio.png)

To view the dashboard for the stats of all the workouts, the user will need to select "Dashboard" on the top right of the application.

![Viewing the stats for the workouts.](https://github.com/falbuna/Workout_Tracker/blob/main/assets/4_Stats.png)

## Questions

If you have any questions regarding this application, please reach me at: falbuna1@gmail.com

My Github can be found here: [https://github.com/falbuna/](https://github.com/falbuna/)