

# Attendance Management System (AMS)

The Attendance Management System (AMS) is a web and mobile application designed to streamline the process of recording and managing student attendance in educational institutions. This system allows students to mark their attendance using a mobile app, while teachers can track and manage attendance records for their classes through a web interface. Administrators have overall control and management of the system, including user management and generating attendance reports.

## Features



- **Web Application**:
  - Teachers can view attendance records for their classes and mark attendance manually if needed.
  - Administrators can manage user accounts, assign teachers to classes, and generate system-wide reports.

- **Authentication and Authorization**:
  - Secure user authentication using JWT (JSON Web Tokens) ensures data privacy and security.
  - Role-based access control allows different levels of access for students, teachers, and administrators.


- **Reporting and Analytics**:
  - Teachers and administrators can generate attendance reports, including overall attendance rates and trends.
  - Analytics features provide insights into attendance patterns and individual student attendance records.

## Technologies Used

- **Frontend**:
  - Web Application: React.js

- **Backend**:
  - Node.js with Express.js 

- **Database**:
  - MongoDB

## Getting Started

1. **Prerequisites**:
   - Node.js and npm installed on your machine.
   - MongoDB database server set up and running.

2. **Installation**:
   - Clone this repository to your local machine.
   - Install dependencies for both frontend and backend using `npm install`.

3. **Configuration**:
   - Configure database connection settings in the backend `.env` file.
   - Run database migrations to set up the database schema.

4. **Running the Application**:
   - Start the backend server using `npm start` or `node server.js`.
   - Start the frontend development server for both mobile and web applications.

5. **Accessing the Application**:
   - Access the web application by navigating to the specified URL in your browser.
   - Install the mobile application on your device and log in using your credentials.

## Contributing

Contributions to the Attendance Management System project are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/xyz`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/xyz`).
5. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Special thanks to pola for the contribution .
- This project was inspired by the need for efficient attendance management in educational institutions.

---

