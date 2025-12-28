# Real-Time Collaborative Workspace Backend

This repository contains the backend implementation of a real-time collaborative workspace platform.  
The system supports secure authentication, role-based access control, project management, asynchronous job processing, and cloud-ready deployment.

To Access Project - [Collaborative-workspace](https://collaborative-workspace-backend-six.vercel.app)

---

## 1. Architecture Overview

### High-Level Architecture

Client (Postman / Frontend)
        |
        |  REST APIs (HTTP)
        |
Vercel Serverless Functions
        |
        |-- Express Application
        |-- JWT Authentication & RBAC
        |
        |-- MongoDB Atlas (Persistent Storage)
        |-- Upstash Redis (Caching & Job Queue)

### Components Explanation

- **Express Backend**  
  Handles REST APIs for authentication, projects, and background jobs.

- **Authentication & Authorization**  
  JWT-based authentication with role-based access control (Owner, Collaborator, Viewer).

- **MongoDB Atlas**  
  Stores users, projects, and job metadata.

- **Redis (Upstash)**  
  Used for caching and simulating asynchronous background job processing.

- **Vercel**  
  Hosts the backend as serverless functions for scalability and easy deployment.

---

## 2. Setup & Run Instructions

### Prerequisites

- Node.js (v18 LTS recommended)
- MongoDB Atlas account
- Upstash Redis account
- Git

### Install Dependencies
- npm install

### Run the Application Locally
- node server.js

### Expected output:
-MongoDB connected
-Redis connected
-Server running on port 3000

---
## 3. Design Decisions and Trade-offs
### 1. Serverless Deployment on Vercel

Decision: Use Vercel serverless functions instead of a traditional server.
Reason: Simplifies deployment and provides automatic scaling.
Trade-off: Long-running processes are not supported, so background jobs are simulated.

### 2. Redis for Asynchronous Jobs

Decision: Use Redis lists to simulate job queues.
Reason: Lightweight, fast, and commonly used for background task handling.
Trade-off: Not as feature-rich as Kafka or RabbitMQ, but sufficient for this scope.

### 3. Mocked Real-Time Collaboration

Decision: Log collaboration events instead of maintaining persistent WebSocket connections.
Reason: Vercel does not support long-lived WebSocket connections easily.
Trade-off: Real-time behavior is simulated rather than fully live.

## 4. Scalability Considerations

### Horizontal Scalability
Vercel serverless functions scale automatically based on incoming traffic.

### Stateless Backend
The application is stateless; all state is stored in MongoDB and Redis.

### Caching Layer
Redis can be extended to cache frequently accessed data to reduce database load.

### Asynchronous Processing
Background jobs are decoupled from API requests to improve responsiveness.

### Future Enhancements

External WebSocket service for real-time collaboration

Dedicated message broker (Kafka / RabbitMQ)

Containerized deployment with Kubernetes for enterprise-scale systems 

### Clone the Repository

```bash

git clone https://github.com/Sharathkatukuri/Collaborative-Workspace-Backend.git
cd Collaborative-Workspace-Backend
