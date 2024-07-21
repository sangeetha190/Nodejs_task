
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
1. `GET /api/users` - To list the users.

    - Response with HTTP status code 200 on success
    - https://nodejs-task-dug8.onrender.com/api/users
      
      <img width="1167" alt="Screen Shot 2024-07-21 at 5 32 46 PM" src="https://github.com/user-attachments/assets/698423b0-7faa-4fd2-9a66-7509d439c76b">

    -  Retrieve a list of users with optional pagination, search, and sorting.
   
      <img width="1180" alt="Screen Shot 2024-07-21 at 5 36 58 PM" src="https://github.com/user-attachments/assets/c9ed72e7-d9f1-4626-82a4-fe804e93c155">

2. `POST /api/users` - To create a new user
   
     - https://nodejs-task-dug8.onrender.com/api/users
    
      <img width="1171" alt="Screen Shot 2024-07-21 at 5 47 39 PM" src="https://github.com/user-attachments/assets/f2462319-0e67-472f-828e-3cdd088b65f4">

4. `GET /api/users/{id}` - To get the details of a user using **ID**

    - Here `{id}` would be the user ID in path parameter
    - Response with HTTP status code 200 on success

    <img width="1173" alt="Screen Shot 2024-07-21 at 5 50 11 PM" src="https://github.com/user-attachments/assets/ce17c0b6-bbfa-475f-99d5-8d8d0aed48b9">

5. `PUT /api/users/{id}` - To update the details of a user

     - Here `{id}` would be the user ID in path parameter
     - Request Payload should be like in json format for updating first name, last name and age:-
     
    <img width="1174" alt="Screen Shot 2024-07-21 at 5 52 07 PM" src="https://github.com/user-attachments/assets/324c02eb-c707-42e7-a6b8-18c74a690498">

6. `DELETE /api/users/{id}` - To delete the user

    - Here {id} will be the id of the user in path parameter
    - Response with HTTP status code 204 on success

     <img width="1173" alt="Screen Shot 2024-07-21 at 5 54 16 PM" src="https://github.com/user-attachments/assets/8f665a8b-c8f4-4633-8a8f-805c4ea48bff">

   - Used Thunder Client to check this **API**
  

## Questions and Answers

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
