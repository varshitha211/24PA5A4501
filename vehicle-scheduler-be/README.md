Vehicle Scheduler Backend

Overview

This project solves the depot scheduling problem using the 0/1 Knapsack algorithm. It retrieves depot and vehicle task information from the evaluation service and selects the optimal set of maintenance tasks to maximize total impact within available mechanic hours.

Features

- Fetch depot information
- Fetch vehicle maintenance tasks
- Implement 0/1 Knapsack algorithm
- Maximize maintenance impact
- Display selected tasks for every depot

Technologies

- Node.js
- Axios

Installation

npm install

Configuration

Replace the access token in "index.js".

const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

Run

node index.js

Output

The application displays:

- Depot ID
- Mechanic Hours
- Total Duration
- Total Impact
- Selected Tasks

Project Structure

vehicle-scheduler-be/
├── index.js
├── package.json
├── README.md

Algorithm Used

- 0/1 Knapsack Dynamic Programming

Future Improvements

- Multiple scheduling strategies
- Parallel processing
- Performance optimization
- Detailed reporting