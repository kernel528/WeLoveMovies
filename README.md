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
