# Chegg Skills Back-end Web Development Capstone
This repository contains the source code for the We Love Movies Capstone to the Chegg Skills Back-end Web Development Certificate Program.

### Front-end Setup
- The starter-movie-front-end is a symlink in this repo to the fork from Chegg Skills. This was setup to test progress in addition to test cases.
- Due to using the `qualified-attach` to sync local changes with qualified site, this defaulted to the `Final_Capstone_WeLoveMovies_Guild_Node_18_1` folder name.


## Project Structure
```plaintext
Final_Capstone_WeLoveMovies_Guild_Node_18_1
├── .env
├── .gitignore
├── knexfile.js
├── package.json
├── package-lock.json
├── README.md
├── docs/
    ├── routes/
        ├── movies_list.md
        ├── movies_read.md
        ├── reviews_destroy.md
        ├── reviews_update.md
        ├── theaters_list.md
    ├── tables/
        ├── critics.md
        ├── movies.md
        ├── movies_theaters.md
        ├── reviews.md
        ├── theaters.md
|── src/
    ├── app.js
    ├── server.js
    ├── db/
        ├── connection.js
        ├── migrations/
            |── <migration 1>
            |── <migration 2>
            |── <migration ...>
        ├── seeds/
            |── 00_drop_tables.js
            |── 01_movies.js
            |── 02_critics.js
            |── 03_reviews.js
            |── 04_theaters.js
            |── 05_movies_theaters.js
    ├── errors/
        ├── asyncErrorBoundary.js
        ├── methodNotAllowed.js
    ├── movies/
        ├── movies.controller.js
        ├── movies.router.js
        ├── movies.service.js
    ├── reviews/
        ├── reviews.controller.js
        ├── reviews.router.js
        ├── reviews.service.js
    ├── theaters/
        ├── theaters.controller.js
        ├── theaters.router.js
        ├── theaters.service.js
    ├── setup/
        ├── authors.sql
        ├── books.sql
        ├── books_genres.sql
        ├── genres.sql
    ├── utils/
        ├── map-properties.js
        ├── reduce-properties.js
````

### Database Setup
- For local testing, I am using a docker-based database setup on a host called `swarm-m3` with a new database called: `chegg_welovemovies_dev`
- For remote/deployment, I will use a `Render` hosted DB instance: *Info TBD*

Local DB Setup with Docker
1. Launch docker `psql` container and create DB:
    ```bash
    docker container run -it --rm --name postgres-psql-swarm --platform=linux/amd64 kernel528/postgres:16-arm64 psql -h 192.168.1.33 -U postgres -d chegg_books_dev
    chegg_books_dev=# CREATE DATABASE chegg_welovemovies_dev;
    CREATE DATABASE
    chegg_books_dev=# \l
    List of databases
    Name          |  Owner   | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules |   Access privileges
    ------------------------+----------+----------+-----------------+------------+------------+------------+-----------+-----------------------
    chegg_books            | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
    chegg_books_dev        | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
    chegg_dev              | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
    chegg_mock_practice    | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
    chegg_node_dev         | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
    chegg_welovemovies_dev | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
    postgres               | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
    template0              | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/postgres          +
    |          |          |                 |            |            |            |           | postgres=CTc/postgres
    template1              | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/postgres          +
    |          |          |                 |            |            |            |           | postgres=CTc/postgres
    (9 rows)
    ```
2. Setup `DBeaver` connection to be able to test/validate DB updates.
3. Run `npm install` to install packages.  Then attempt to startup app as is:
   ```bash
   : npm run start:dev
   
   > project-movie-back-end@1.0.0 start:dev
   > nodemon src/server.js
   
   [nodemon] 2.0.22
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching path(s): *.*
   [nodemon] watching extensions: js,mjs,json
   [nodemon] starting `node src/server.js`
   Error: connect ECONNREFUSED ::1:5432
       at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1555:16) {
     errno: -61,
     code: 'ECONNREFUSED',
     syscall: 'connect',
     address: '::1',
     port: 5432
   }
   [nodemon] clean exit - waiting for changes before restart
   
   ```
4. Setup `knex` integration
5. Setup the `db/migrations` 
   ```bash
   # joe @ obiwan in ~/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1 on git:database-setup [2025-01-17 17:33:06] C:1 
   : npx knex migrate:make createCriticsTable
   Using environment: development
   Using environment: development
   Using environment: development
   Created Migration: /Users/joe/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1/src/db/migrations/20250117174804_createCriticsTable.js
   # joe @ obiwan in ~/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1 on git:database-setup x [2025-01-17 17:48:04]
   : npx knex migrate:make createMoviesTable 
   Using environment: development
   Using environment: development
   Using environment: development
   Created Migration: /Users/joe/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1/src/db/migrations/20250117174832_createMoviesTable.js
   # joe @ obiwan in ~/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1 on git:database-setup x [2025-01-17 17:48:32]
   : npx knex migrate:make createTheatersTable
   Using environment: development
   Using environment: development
   Using environment: development
   Created Migration: /Users/joe/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1/src/db/migrations/20250117174844_createTheatersTable.js
   # joe @ obiwan in ~/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1 on git:database-setup x [2025-01-17 17:48:44]
   : npx knex migrate:make createReviewsTable 
   Using environment: development
   Using environment: development
   Using environment: development
   Created Migration: /Users/joe/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1/src/db/migrations/20250117174852_createReviewsTable.js
   # joe @ obiwan in ~/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1 on git:database-setup x [2025-01-17 17:48:52]
   : npx knex migrate:make createMovies_TheatersTable
   Using environment: development
   Using environment: development
   Using environment: development
   Created Migration: /Users/joe/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies/Final_Capstone_WeLoveMovies_Guild_Node_18_1/src/db/migrations/20250117174906_createMovies_TheatersTable.js
   ```
6. Customize/Update the `db/migrations` files.
7. Run the migrations.  Note: Because I had the API server running in `dev` mode it picked up the migration files originally when created.  Had to delete the original `knex_migrations` tables.
   ```bash
   : npx knex migrate:list  
   Using environment: development
   No Completed Migration files Found. 
   Found 5 Pending Migration file/files.
   20250117174804_createCriticsTable.js 
   20250117174832_createMoviesTable.js 
   20250117174844_createTheatersTable.js 
   20250117174852_createReviewsTable.js 
   20250117174906_createMovies_TheatersTable.js 
   
   : npx knex migrate:latest
   Using environment: development
   Batch 1 run: 5 migrations
   ```
8. This indicates it ran fine and checking `dbeaver` shows the tables were created.  The `npm test` failed as this uses sqllite for in-memory testing.
9. Seed the data:
   ```bash
   : npx knex seed:run
   Using environment: development
   Ran 6 seed files
   ```
   - After seeding the files I ran some `select` queries using `dbeaver` and confirmed data loaded.

### Movie Routes
1. Task 1:  GET /movies (all)
   - Updated the `movies.controller.js` list function.  Enabled route in `movies.router.js`.  The `movies.service.js` was already setup for list (get all).
   - When opening browser to http://localhost:5025/movies all movies were returned from `dev` database.
   - Ran `npm test` to check test status:
     ```bash
      Test Suites: 3 failed, 3 total
      Tests:       11 failed, 1 passed, 12 total
     ```
2. Task 2: GET /movies?is_showing=true
   - Updated the `movies.controller.js` list function to include a check for `is_showing` in the `query.params` and if true, then return only those movies.
   - When opening browser to http://localhost:5025/movies?is_showing=true the output is sorted differently.  Same with `postman`.
   - Ran `npm test` to check test status:
     ```bash
      Test Suites: 3 failed, 3 total
      Tests:       10 failed, 2 passed, 12 total
     ```
3. Task 3: GET /movies/:movieId
   - Updated the `movies.controller.js` with code for checking if movie exists (`movieExists`) and enabled route in `movies.router.js` and updated `movies.service.js` read query.
   - Validated with browser route to `movies/:movie_id` and `postman` READ.
   - Ran `npm test` to check test status:
     ```bash
      Test Suites: 3 failed, 3 total
      Tests:       9 failed, 3 passed, 12 total
     ```
4. Task 4: GET /movies/:movie_id invalid ID
   - Updated the `movies.controller.js` movieExists function with correct message.  Added custom `errorHandler.js` to `errors` and updated the `app.js` to use this.
   - Validated with `postman` by using invalid movie_id.
   - Ran `npm test` to check test status:
     ```bash
      Test Suites: 3 failed, 3 total
      Tests:       8 failed, 4 passed, 12 total
     ```
5. Task 5: GET /movies/:movie_id/theaters
   - Updated the `movies.router.js` to add the `/movies/:movie_id/theaters` route with `theatersRouter` callback.
   - Then updated the `theaters.controller.js` to assign the `movie_id` and send to the `theaters.service.list(movie_id)` in the `list` function.
   - Then updated the `theaters.router.js` file to enable the route.
   - Validated with browser and `postman` by going to the `/movies/1/theaters` route...
   - Ran `npm test` to check test status:
     ```bash
      Test Suites: 3 failed, 3 total
      Tests:       7 failed, 5 passed, 12 total
     ```
6. Task 6: GET /movies/:movie_id/reviews
   - Updated `movies` and `reviews` src files to support returning reviews data properly in the `/movies/:movie_id/reviews` route.
   - Fixed an issue with the `down` in the createTheatersTable migration file.
   - Validated with `postman` proper 200 response with review data.
   - Ran `npm test` to check test status:
     ```bash
      Test Suites: 3 failed, 3 total
      Tests:       6 failed, 6 passed, 12 total
     ```
7. Task 7: should not include critics anywhere for the path `/movies/:movieId/critics`
   - Had to update the `movies.router.js` file to include a catch-all handler for `/movies/:movie_id/*` not defined as valid.
   - Validate with `postman` that going to `/movies/:movie_id/reviews` works as expected but something like `/movies/:movie_id/critics` returns a 404 error.
   - Ran `npm test` to check test status:
     ```bash
      Test Suites: 2 failed, 1 passed, 3 total
      Tests:       5 failed, 7 passed, 12 total
     ```

### Theater Routes
- GET

### Review Routes
- PUT
- DELETE

### General Tasks

### Deploy