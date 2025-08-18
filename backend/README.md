# Backend API Documentation

## Overview
This is the backend part of the My React Node App project. It is built using Node.js and Express, and it connects to a PostgreSQL database to handle data operations.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-react-node-app/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure the database connection:**
   Update the connection string in `src/db/postgres.ts` to match your PostgreSQL database credentials.

4. **Run the application:**
   ```bash
   npm start
   ```

## API Endpoints

### Base URL
`http://localhost:3000/api`

### Endpoints

- **GET /api/data**
  - Description: Fetches data from the database.
  - Response: Returns a JSON array of data.

- **POST /api/data**
  - Description: Adds new data to the database.
  - Request Body: JSON object with data to be added.
  - Response: Returns the added data.

## Development

- The backend is structured with controllers, routes, and database connection logic separated for better maintainability.
- TypeScript is used for type safety and better development experience.

## Testing

To run tests, use the following command:
```bash
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.