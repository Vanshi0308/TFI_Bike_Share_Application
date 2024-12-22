# Bike Share Angular Application

## Description

This Angular application demonstrates the implementation of a responsive web application for managing and displaying bike station data. It features user authentication, secure API integration, and a data dashboard with sorting, filtering, and pagination.

---

## Features

1. **Responsive Pages:**
   - Login page
   - Signup page
   - Dashboard page

2. **Login Page:**
   - Allows previously registered users to log in.
   - Redirects logged-in users to the dashboard.
   - Displays an error message for unregistered users and prompts them to sign up.

3. **Signup Page (Additional Feature):**
   - New users must register before accessing the application.
   - Only registered users can log in and view the dashboard.

4. **Dashboard Page:**
   - Accessible only to logged-in users.
   - Displays bike station data fetched from the API.
   - Includes sorting, filtering, and pagination for the data table.
   - Dropdown for filtering stations by schemes (e.g., Waterford, Cork, Limerick, Galway).
   - Logout button redirects users to the login page.

5. **User Authentication:**
   - Ensures only registered and logged-in users can view the dashboard.

6. **Security Features:**
   - Sensitive API credentials are stored in environment variables for added security.

---

## API Details

The application retrieves station data using the following API:

```
curl --location 'https://data.bikeshare.ie/dataapi/resources/station/data/list' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'key=YOUR_KEY_RECEIVED_BY_EMAIL' \
--data-urlencode 'schemeId=-1'
```

---

## Installation and Running the Application

Follow these steps to set up and run the application:

### Backend Setup
1. Unzip the `bike-share-backend` folder.
2. Navigate to the extracted folder using the command prompt.
3. Install the dependencies using the following command:
   ```bash
   npm install
   ```
4. Run the backend server with the command:
   ```bash
   npm run devStart
   ```

### Frontend Setup
1. Unzip the `bike-share-app` folder.
2. Navigate to the extracted folder using the command prompt.
3. Install the dependencies using the following command:
   ```bash
   npm install
   ```
4. Run the frontend server with the command:
   ```bash
   ng serve
   ```
5. Open the application in your browser at `http://localhost:4200`.

---

## Additional Enhancements

- **Responsive Design:** Ensures compatibility across various devices and screen sizes.
- **Error Handling:** Displays appropriate error messages for invalid inputs or unregistered users.
- **Environment Configuration:** API keys are securely stored in environment variables to enhance security.

---

## Folder Structure

### `bike-share-backend`
Contains the backend logic for fetching bike station data from the API and securely managing API keys.

### `bike-share-app`
Contains the Angular frontend application, including pages, components, and services for user authentication and data visualization.

---

## Technologies Used

- **Frontend:** Angular, TypeScript
- **Backend:** Node.js, Express.js
- **API Integration:** TFI Bikes API
- **Styling:** CSS for responsive design

---

## Author

This application was developed as a demonstration of Angular skills, responsive design, and secure API integration.