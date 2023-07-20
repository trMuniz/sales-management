# Spring REST API

This is a sample Spring REST API project built using Java and Spring Boot.

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, make sure you have the following prerequisites installed on your machine:

- Java Development Kit (JDK) 8 or above
- Maven
- MySQL Server

### Installation

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/spring-rest-api.git
   ```

2. Open the project in your preferred IDE (e.g., IntelliJ, Eclipse).

3. Configure the database connection:

   - Open the `application.properties` file located in the `src/main/resources` directory.
   - Update the following properties with your MySQL database connection details:

     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

4. Build the project:

   - Option 1: Using the command line
     ```shell
     cd spring-rest-api
     mvn clean install
     ```

   - Option 2: Using the IDE
     - Right-click on the project and select "Build" or "Rebuild" option.

5. Run the application:

   - Option 1: Using the command line
     ```shell
     mvn spring-boot:run
     ```

   - Option 2: Using the IDE
     - Run the `SpringRestApiApplication` class located in the `src/main/java/com.example.demo` package.

6. The API will be accessible at `http://localhost:8080`.

## API Documentation

The API documentation is generated using Swagger. You can access the Swagger UI to explore and test the available endpoints.

- API documentation: `http://localhost:8080/api/v1/swagger-ui.html`

## Usage

You can use tools like cURL, Postman, or any HTTP client to interact with the API endpoints. Refer to the API documentation for the list of available endpoints and their respective request/response formats.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---