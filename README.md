# Sales Management

![Sales Management](./demo/sales-management.png)

The Sales Management is a full-stack web application built with the latest versions of Spring Boot and Angular. The system aims to efficiently manage sales-related tasks, providing a user-friendly interface for sales teams to track leads, manage customers, handle orders, and analyze sales data.

## Features

- **User Authentication:** Secure user registration and login functionality with role-based access control for different user types (e.g., sales representatives, managers).

- **Lead Management:** Efficiently track potential customers and their status in the sales pipeline. Update leads' status (e.g., new lead, contacted, converted, lost).

- **Customer Database:** Maintain a comprehensive database of customers with their contact information and purchase history.

- **Sales Order Processing:** Create, manage, and track sales orders for products or services.

- **Sales Analytics:** Generate insightful reports and visualizations to analyze sales performance and make data-driven decisions.

## Technologies

- **Frontend:** Angular [latest version]
- **Backend:** Spring Boot [latest version]
- **Database:** MySQL [latest version]

Other notable libraries and tools used in the project:

- **Spring Security:** For authentication and access control.
- **Angular Material:** For a consistent and modern UI.

## Getting Started

### Prerequisites

To set up the development environment, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- Java Development Kit (JDK) 11 or higher
- MySQL database

### Installation

1. Clone the repository.

git clone https://github.com/your-username/sales-management.git
cd sales-management

2. Frontend setup:

cd frontend
npm install

3. Backend setup:

   - Import the database schema into MySQL (you can find the SQL script in the `backend/database` directory).
   - Update the database connection settings in `backend/src/main/resources/application.properties`.

4. Run the application:

   - Start the backend server:

     ```
     cd backend
     ./mvnw spring-boot:run
     ```

   - Start the frontend development server:

     ```
     cd frontend
     ng serve
     ```

5. Access the application in your web browser: `http://localhost:4200`.

## License

The Sales Management is open-source software licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the codebase as long as you retain the original license and include a copy of it in your project.

MIT License

Thiago Muniz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Please replace "Thiago Muniz" with the appropriate name or organization that you wish to be credited in the license. Additionally, make sure to add the LICENSE file to the root of your project containing the above license text.

Remember that licenses are important legal documents, and if you have any specific concerns about licensing or are unsure about which license to choose, it's best to consult with a legal professional.

## Contact

For any questions, feedback, or collaboration opportunities related to the Sales Management project, feel free to reach out to me:

- Email: muniz@duck.com
- Website: [thiagomuniz.dev](https://thiagomuniz.dev)

![Demo](./demo/sales-management-demo.gif)
