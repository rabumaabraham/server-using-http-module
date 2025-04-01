# Simple HTTP Server in Node.js

This is a simple HTTP server built using **Node.js**. It listens for incoming requests and sends a plain text response to the client (browser).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **Handles HTTP requests**: The server listens on port 3000 and responds to any requests.
- **Sends plain text response**: Upon request, it sends a simple 'Hello, World!' message.
- **Customizable**: You can modify the message or extend functionality as per your need.

## Technologies Used

- **Node.js**: JavaScript runtime for building the HTTP server.
- **http Module**: Built-in Node.js module used to create the HTTP server.

## Installation

1. **Clone the repository**:

    \`\`\`bash
    git clone https://github.com/yourusername/simple-http-server-node.git
    \`\`\`

2. **Navigate into the project directory**:

    \`\`\`bash
    cd simple-http-server-node
    \`\`\`

3. **Run the server**:

    Make sure you have Node.js installed. Then, run the following command to start the server:

    \`\`\`bash
    node server.js
    \`\`\`

    The server will start on **http://127.0.0.1:3000**.

## Usage

1. Open a browser or an HTTP client (like Postman).
2. Type in the URL: **http://127.0.0.1:3000**
3. You should see the message: **"Hello, World! Welcome to my first server in Node.js!"**

## Contributing

Contributions are welcome! If you would like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit the changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request."
