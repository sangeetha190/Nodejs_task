## User Management API
This project is a simple API for managing users using Node.js, Express, and MongoDB. It includes endpoints for creating, retrieving, updating, and deleting users.

Setup and Installation
Prerequisites
Node.js (v14 or above)
MongoDB
Installation
Clone the repository:

- git clone
- npm install
- npm start
  
## Usage and Endpoints
- GET https://nodejs-task-dug8.onrender.com/api/users: Retrieve a list of users with optional pagination, search, and sorting.
- POST https://nodejs-task-dug8.onrender.com/api/users: Create a new user.
- GET https://nodejs-task-dug8.onrender.com/api/users/{id}: Retrieve a user by ID.
- PUT https://nodejs-task-dug8.onrender.com/api/users/{id}: Update a user by ID.
- DELETE https://nodejs-task-dug8.onrender.com/api/users/{id}: Delete a user by ID.
- use the postman to check this

##Questions and Answers

1. How long did it take you to complete this assignment?
This assignment took me approximately 2hours to complete.

2. What about this assignment did you find most challenging?
The most challenging part of this assignment was integrating Swagger for API documentation.

3. What about this assignment did you find unclear?
The instructions for mention specific part, e.g., setting up the OpenAPI documentation or implementing certain API features were a bit unclear initially. However, after some research and trial and error, I was able to understand and implement them.

4. What challenges did you face that you did not expect?
I didn't face any unexpected challenges during this assignment.

5. Do you feel like this assignment has an appropriate level of difficulty?
Yes, I feel that this assignment has an appropriate level of difficulty. It effectively tests knowledge of Node.js, Express, MongoDB, and API documentation, while also challenging problem-solving and debugging skills.

6. Briefly explain your decisions to use tools, frameworks, and libraries.
I used the following tools, frameworks, and libraries:
- Express.js: For its simplicity and robust features for building web applications.
- MongoDB: As a NoSQL database that integrates well with Node.js through Mongoose.
- Swagger: For API documentation to provide clear and interactive API documentation.
- dotenv: To manage environment variables. This tool helps in keeping sensitive configuration details and environment-specific settings out of the codebase, making the application easier to configure across different environments.
- env: Used in conjunction with dotenv to load environment variables from a .env file, which helps in managing configurations and secrets securely.
- These choices were made to ensure a scalable, maintainable, and well-documented codebase while keeping sensitive information secure and easily configurable.

7. Did you make certain assumptions and decisions around the application? Please elaborate on your reasonings.
Yes, I made the following assumptions and decisions:
 User Data Structure: I assumed a basic structure for user data with fields like firstName, lastName, age, etc., based on typical user management requirements.
Error Handling: Implemented generic error handling for simplicity and to cover common scenarios like not found and server errors.
API Design: Followed RESTful principles to design the API endpoints for clear and predictable interactions.
Environment Configuration: Assumed the use of environment variables for configuration to separate code from configuration details.
These decisions were made to create a robust and user-friendly API while adhering to best practices in API development.
