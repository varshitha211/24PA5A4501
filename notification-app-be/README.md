Notification App Backend

Overview

This project retrieves notifications from the evaluation service using an access token, filters unread notifications, prioritizes them based on notification type and timestamp, and displays the top 10 notifications.

Features

- Fetch notifications from the Evaluation API
- Filter unread notifications
- Priority-based sorting
- Display top 10 notifications
- Uses Bearer Token authentication

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

The application prints:

- Notification ID
- Notification Type
- Message
- Timestamp

Project Structure

notification-app-be/
├── index.js
├── package.json
├── README.md

Future Improvements

- Pagination
- Notification categories
- Mark as Read API
- Email and SMS notifications