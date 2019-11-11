# This is a URL Shortener

#### Usage

1. Clone the project.
2. Open the project with an editor.
3. Change directory to urlShortener.
   `cd urlShortener/`
4. Paste the connection string with mongo db in `config/default.json` in the `mongoURI` key.
5. Run `npm install` to install the dependencies and run the command `npm run server` to start the development server or run `docker-compose up` to use docker.
6. From Postman or with a `curl` command send a POST request to
   `http://localhost:3000/` with the link you want to shorten into the body for example `"url": "https://github.com/PanGan21"` and the response should be the shortened link.
7. From Postman or with a `curl` command send a GET request to the shortened link to retrieve the original link.

#### Implementation

1. When a URL is provided, it is inserted to the database's table with a unique id.
2. Next this unique ID is converted into base-52 representation.
3. The base-53 string is appended into the the base URL of the domain `http://localhost:3000` and update it to the database column.

#### Improvements

1. The application should check and validate if the URL entered is an existing URL.
2. The algorithm used to encode and decode could give us a larger range. The currenct algorithm may break as the entries to the database increase.
3. When a URL is inserted to the database, a pre hook is fired which updating the database. These two database operations may not scale under heavy load.
4. A better approach could be adding the date of the link creation in the database and the expiration date of the link.
5. Test the functions encode/decode.
