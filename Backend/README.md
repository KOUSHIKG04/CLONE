# Backend API Documentation

## User Registration Endpoint, POST /users/register

### Description

This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 8 characters long.

### Response

- `201 Created`: The user was successfully created.
  - Body: A JSON object containing the user details and an authentication token.
- `400 Bad Request`: The request was invalid. This can occur if required fields are missing or validation fails.
  - Body: A JSON object containing the validation errors.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

### Example Response

```json
{
  "user": {
    "_id": "60c72b2f9b1d8c001c8e4b8e",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "createdAt": "2021-06-14T12:34:56.789Z",
    "updatedAt": "2021-06-14T12:34:56.789Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
