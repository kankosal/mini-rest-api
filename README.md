# Node.js Login API
A simple Node.js API that forwards login requests to an external SSO API.

## Environment Variables (`.env`)
You need to create a `.env` file in the root of your project with the following variables:
```sh
PORT=3000
SSO_API_URL=https://your-grph.com/graphql
API_TYPE=rest
```

## Setup

1. Install Dependencies <br />
Run the following command to install the required dependencies:
```sh
npm install
```

2. Start the Server <br />
Once the dependencies are installed, start the server using:
```sh
node server.js
```

## Run with Docker
`docker-compose.yml`
```yml
version: "3.8"

services:
  mini-rest-api:
    build: .
    restart: always
    ports:
      - "3000:3000"
    env_file:
      - .env
    networks:
      - app_network

networks:
  app_network:
    external: true
```
1. Build and Run <br />
You can also run the application using Docker Compose. To do this, run:
```sh
docker-compose up --build -d
```

2. Stop <br />
To stop the service, run:
```sh
docker-compose down
```

## API Endpoint
### Login <br />
POST `/api/v1/auth/login` <br />
Request Body: <br />
```json
{
  "username": "your_username",
  "password": "your_password"
}
```
Response Example:
```json
{
  "data": {
    "id": "12345",
    "employee_id": "E12345",
    "department": "IT",
    "gender": "Male",
    "email": "john.doe@example.com",
    "phone_number": "+1234567890",
    "position": "Software Engineer",
    "full_name": "John Doe",
    "status": "Active",
    "access_token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NWVmMjMxODgwMzQwOTQ5YjUwNDY5NCIsInVzZXJuYW1lIjoianRvZG9lIiwiYXBwSWQiOiIwMDAwMDUiLCJpYXQiOjE3NDExODU2MzAsImV4cCI6MTc3MjcyMTYzMH0.YrH4dMMSfmg7MnuYJqhMiMO73U4_ki-z188WLqbXPPg",
    "token_expired_at": 1772721630,
    "created_at": 1672531199000,
    "updated_at": 1672531199000,
    "deleted_at": null,
  },
}
```