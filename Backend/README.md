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

## User Login Endpoint, POST /users/login

### Description

This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 8 characters long.

### Response

- `200 OK`: The user was successfully logged in.
  - Body: A JSON object containing the user details and an authentication token.
- `400 Bad Request`: The request was invalid. This can occur if required fields are missing or validation fails.
  - Body: A JSON object containing the validation errors.
- `401 Unauthorized`: The credentials provided were invalid.
  - Body: A JSON object containing the error message.

### Example Request

```json
{
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

## User Profile Endpoint, GET /users/profile

### Description

This endpoint is used to retrieve the profile of the authenticated user.

### Request Headers

- `Authorization` (string, required): The authentication token of the user in the format `Bearer <token>`.

### Response

- `200 OK`: The user profile was successfully retrieved.
  - Body: A JSON object containing the user details.
- `401 Unauthorized`: The authentication token was missing or invalid.
  - Body: A JSON object containing the error message.

### Example Request

```http
GET /users/profile HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
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
  }
}
```

## User Logout Endpoint, GET /users/logout

### Description

This endpoint is used to log out the authenticated user.

### Request Headers

- `Authorization` (string, required): The authentication token of the user in the format `Bearer <token>`.

### Response

- `200 OK`: The user was successfully logged out.
  - Body: A JSON object containing a success message.
- `401 Unauthorized`: The authentication token was missing or invalid.
  - Body: A JSON object containing the error message.

### Example Request

```http
GET /users/logout HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response

```json
{
  "message": "Logged out successfully"
}
```

## Captain Registration Endpoint, POST /captains/register

### Description

This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, required): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 8 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be either "motorcycle", "car", or "auto".

### Response

- `201 Created`: The captain was successfully created.
  - Body: A JSON object containing the captain details and an authentication token.
- `400 Bad Request`: The request was invalid. This can occur if required fields are missing or validation fails.
  - Body: A JSON object containing the validation errors.

### Example Request

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response

```json
{
  "captain": {
    "_id": "60c72b2f9b1d8c001c8e4b8f",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "createdAt": "2021-06-14T12:34:56.789Z",
    "updatedAt": "2021-06-14T12:34:56.789Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Captain Login Endpoint, POST /captains/login

### Description

This endpoint is used to log in an existing captain. It requires the captain's email and password.

### Request Body

The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 8 characters long.

### Response

- `200 OK`: The captain was successfully logged in.
  - Body: A JSON object containing the captain details and an authentication token.
- `400 Bad Request`: The request was invalid. This can occur if required fields are missing or validation fails.
  - Body: A JSON object containing the validation errors.
- `401 Unauthorized`: The credentials provided were invalid.
  - Body: A JSON object containing the error message.

### Example Request

```json
{
  "email": "jane.doe@example.com",
  "password": "securepassword123"
}
```

### Example Response

```json
{
  "captain": {
    "_id": "60c72b2f9b1d8c001c8e4b8f",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "createdAt": "2021-06-14T12:34:56.789Z",
    "updatedAt": "2021-06-14T12:34:56.789Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Captain Profile Endpoint, GET /captains/profile

### Description

This endpoint is used to retrieve the profile of the authenticated captain.

### Request Headers

- `Authorization` (string, required): The authentication token of the captain in the format `Bearer <token>`.

### Response

- `200 OK`: The captain profile was successfully retrieved.
  - Body: A JSON object containing the captain details.
- `401 Unauthorized`: The authentication token was missing or invalid.
  - Body: A JSON object containing the error message.

### Example Request

```http
GET /captains/profile HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response

```json
{
  "captain": {
    "_id": "60c72b2f9b1d8c001c8e4b8f",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "createdAt": "2021-06-14T12:34:56.789Z",
    "updatedAt": "2021-06-14T12:34:56.789Z"
  }
}
```

## Captain Logout Endpoint, GET /captains/logout

### Description

This endpoint is used to log out the authenticated captain.

### Request Headers

- `Authorization` (string, required): The authentication token of the captain in the format `Bearer <token>`.

### Response

- `200 OK`: The captain was successfully logged out.
  - Body: A JSON object containing a success message.
- `401 Unauthorized`: The authentication token was missing or invalid.
  - Body: A JSON object containing the error message.

### Example Request

```http
GET /captains/logout HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response

```json
{
  "message": "Logged out successfully"
}
```
