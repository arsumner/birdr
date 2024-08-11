<a id="readme-top"></a>


<!-- Shields -->
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/arsumner/birdr">
  <a href="">
    <img src="images/birdr.jpg" alt="Logo" width="100" height="80">
  </a>

<h3 align="center">Birdr</h3>

  <p align="center">
    Birdr is an interactive birding application that enables users to discover, 
    learn, and catalog various bird species. The app features a personal logbook 
    where users can perform CRUD (Create, Read, Update, Delete) operations on their entries. 
    Birdr also integrates with the Nuthatch API, allowing users to search for 
    North American and European bird species' information directly within the app.
    <br />
    <br />
    <a href="https://github.com/arsumner/birdr"><strong>Check out the Birdr Repository »</strong></a>
    <br />
    <br />
    </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-features">Project Features</a>
      <ul>
        <li><a href="#built-with">Technologies Used</a></li>
      </ul>
    </li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#structure">Folder Structure</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#api">API Reference</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- Project Features -->
## Project Features

Video

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

Frontend
React: To build the User Interface
React Router: Client-side routing.
CSS: Component styling.

Backend
Node.js: Server-side runtime environment.
Express: Web application framework for Node.js.
MongoDB: NoSQL database for data storage.
Mongoose: Object Data Modeling library for MongoDB and Node.js.
bcryptjs: For password hashing to enhance security.
jsonwebtoken: For authentication - creates and verifys JSON Web Tokens.
dotenv: For environment variable management.
cors: For enabling Cross-Origin Resource Sharing.

API Integration
Nuthatch API: To retrieve bird data for search page.

Development Tools
Nodemon: To restart the server automatically during development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Ensure you have npm and node.js installed to run the project.
* NPM
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Get a free API Key at [https://nuthatch.lastelm.software/] to access the Nuthatch API
2. Clone the repo
   ```sh
   git clone https://github.com/arsumner/birdr
   ```
3. Install Server Dependencies by navigating to the 'server' directory.
   ```sh
   cd birdr/server
   ```
   Then run the following commnad to install the necessary packages:
   ```sh
   npm install
   ```
4. Install Client Dependencies by navigating to the 'client' directory.
   ```sh
   cd ../client
   ```
   Then run the following commnad to install the necessary packages:
   ```sh
   npm install
   ```
5. Create a .env file in the 'server' directory and set up environment variables:
   ```js
   PORT=4200
   MONGO_URI=your_mongo_uri
   SECRET=your_secret_key
   REACT_APP_NUTHATCH_API_KEY=your_key
   ```
   * To obtain a SECRET variable for JWT
  Open your terminal and run the following Node.js script to generate a random string: 
  ```sh
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
6. Run the Server in the 'server' directory
   ```js
   npm run dev
   ```
7. Run the Client in the 'client' directory
   ```js
   npm start 
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Account sign up and log in options to allow full access to the site.

Search for bird information provided by the Nutchatch database through the search feature (does not require user authentication).

Full Create, Read, Update and Delete (CRUD) on authenticated users' personal bird logbook.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- FOLDER STRUCTURE -->
## FOLDER STRUCTURE

```sh
birdr/
├── client/                   # React client application
│   ├── public/               # Public files
│   ├── src/                  # Source files
│      ├── context/          # Authentication context
│      ├── components/       # Reusable components
│      ├── pages/            # Application pages (Home, Login, etc.)
│      ├── hooks/            # Enables state management
│      ├── images/           # Site images
│      └── App.js            # Main app file
│   
└── server/                   # Express server
    ├── models/               # Mongoose models
    ├── routes/               # API routes
    ├── controllers/          # Request handlers
    ├── middleware/           # Authenticate requests through JWT
    └── server.js             # Main server file
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Have any suggestions on how Birdr can improve? Feel free to fork the repo and create a pull request or open an issue!

Steps to Contribute:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Suggestions for x'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- API Reference -->
## API Reference

Nuthatch API: An API providing data about birds, 
including name, scientific name, order, family, status, region, wingspan, length, and images.

Example request:

```js
fetch(`https://api.nuthatch.com/v1/birds?name=eagle`, {
  headers: {
    'Authorization': `Bearer ${REACT_APP_NUTHATCH_API_KEY}`
  }
})
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Amanda Sumner - sumnera@oregonstate.edu

Project Link: [https://github.com/arsumner/birdr]
LinkedIn: [https://www.linkedin.com/in/amandarsumner/]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Nuthatch API](https://nuthatch.lastelm.software/) - For generously providing the bird data used in this application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/amandarsumner/
