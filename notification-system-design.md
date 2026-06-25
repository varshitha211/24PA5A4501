Notification System Design

Overview

This document describes the design approach for the Notification System developed as part of the Campus Evaluation. The system is designed to send notifications efficiently while maintaining scalability, reliability, and security.

---

Stage 1 – Requirements Gathering

Functional Requirements

- Create notifications.
- Store notifications in the database.
- Retrieve notifications for users.
- Mark notifications as read.
- Support different notification types.

Non-Functional Requirements

- High availability.
- Scalable architecture.
- Low response time.
- Secure APIs.
- Reliable database operations.

---

Stage 2 – High-Level Design

Components

- Client Application
- REST API (Node.js + Express)
- Notification Service
- Database (MongoDB)
- Logging Middleware

Flow

Client → REST API → Notification Service → MongoDB

All requests are logged through middleware before reaching the service layer.

---

Stage 3 – Database Design

Notification Collection

Field| Type
_id| ObjectId
userId| String
title| String
message| String
type| String
status| String
createdAt| Date
updatedAt| Date

Indexes:

- userId
- createdAt

These indexes improve retrieval performance.

---

Stage 4 – API Design

Create Notification

POST /notifications

Creates a new notification.

Get Notifications

GET /notifications/:userId

Returns all notifications for a user.

Mark as Read

PUT /notifications/:id/read

Marks a notification as read.

Delete Notification

DELETE /notifications/:id

Deletes a notification.

---

Stage 5 – Scalability

The system can scale horizontally by deploying multiple backend instances behind a load balancer.

Future improvements include:

- Redis caching
- Message queues (RabbitMQ/Kafka)
- Background workers
- Microservice architecture

---

Stage 6 – Security & Monitoring

Security

- Input validation
- Error handling
- Environment variables
- Secure database connection
- API authentication (future enhancement)

Monitoring

- Request logging middleware
- Centralized logging
- Performance monitoring
- Error tracking

---

Conclusion

The notification system follows a modular architecture with clear separation of concerns. It supports scalability, maintainability, and future enhancements while meeting the functional requirements of the Campus Evaluation.