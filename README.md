# 3DPrintMaterialManager

## Overview

3DPrintMaterialManager is a Node.js application designed to manage 3D printing materials efficiently.

## Table of Contents

-   [Features](#features)
-   [Project Structure](#project-structure)
-   [Getting Started](#getting-started)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Documentation](#documentation)
-   [Contributing](#contributing)
-   [Author](#author)

## Features

-   Create, read, update, and delete 3D printing materials
-   Upload and manage images for materials
-   Data validation and error handling

## Project Structure

```plaintext
src/
│
├── config/
│   └── db.js
│
├── controllers/
|   └── index.js
│   └── materialsControllers.js
│
├── dao/
|   └── index.js
│   └── materialsDao.js
│
├── middlewares/
│   └── error-handler.js
│   └── multer.js
│
├── models/
|   └── index.js
│   └── Material.js
│
├── routes/
|   └── index.js
│   └── materialRoutes.js
│
├── services/
|   └── index.js
│   └── materialServices.js
│
├── utils/
│   └── parseJSON.js
│   └── ApiError.js
│
└── index.js
```

## Getting Started

### Prerequisites

1. Node.js installed on your machine
2. MongoDB database installed and running
3. [Postman](https://www.postman.com/) or a similar tool for testing API endpoints

### Installation

1. Clone the repository

```bash
git clone https://github.com/vivek-tripathi-9005/3DPrintMaterialManager
cd 3DPrintMaterialManager
```

2. Install dependencies:

```bash
npm install
```

3. Create a database in your MongoDB

```shell
use DATABASE_NAME
```

4. Rename `.env.example` file to `.env` in the root of the project, add values to environment variables, example

```env
CONNECTION_STRING=_mongodb://127.0.0.1:27017/__YOUR__DATABASE_NAME__
```

### Usage

1. Start the server:

```bash
npm run start
```

2. The server will be running http://localhost:3000

3. For API Documentation visit Postman Api Documentation

## API Endpoints

-   **GET /api/materials**: Get all materials
-   **GET /api/materials/:id**: Get material by ID
-   **POST /api/materials**: Create a new material (multipart/form-data for image upload)
-   **PUT /api/materials/:id**: Update an existing material (multipart/form-data for image upload)
-   **DELETE /api/materials/:id**: Delete a material by ID

## Documentation

For detailed API documentation and examples, please refer to the [Postman Documentation](https://documenter.getpostman.com/view/36586891/2sA3dsmDTV#897c1c2a-9eac-4bdc-bfaf-e37041a2a2f4).

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## Author

<p> <b>Vivek Tripathi</b>
<code><a href="https://github.com/vivek-tripathi-9005" target="_blank"><img src="https://github.com/deut-erium/deut-erium/blob/master/assets/github.svg" width="30px" alt="Github"></a></code> &nbsp; &nbsp;
<code><a href="https://www.linkedin.com/in/vivek-tripathi1" target="_blank"><img src="https://github.com/deut-erium/deut-erium/blob/master/assets/linkedin.svg" width="30px" alt="LinkedIn"></a></code> &nbsp; &nbsp;
</p>
