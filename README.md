[![Latest Version](https://img.shields.io/github/v/tag/kernel528/WeLoveMovies)](https://github.com/kernel528/WeLoveMovies/releases/latest)

# Chegg Skills Back-end Web Development Capstone
This repository contains the source code for the We Love Movies Capstone to the Chegg Skills Back-end Web Development Certificate Program.

### Front-end Setup
- The starter-movie-front-end is a symlink in this repo to the fork from Chegg Skills located here: [starter-movie-frontend](https://github.com/kernel528/starter-movie-front-end). This was setup to test progress in addition to test cases.
- Due to using the `qualified-attach` to sync local changes with qualified site, this previously defaulted to the `Final_Capstone_WeLoveMovies_Guild_Node_18_1` folder name before moving to repo root.

## Quickstart
1. Install dependencies: `npm install`
2. Configure environment: set `DATABASE_URL` (and `NODE_ENV=development` for local).
3. Create schema and seed data: `npm run migrate` then `npm run seed`
4. Start the API: `npm run start:dev`
5. Verify: open `http://localhost:5001/movies`

## Project Structure
```plaintext
WeLoveMovies/
├── .env
├── .gitignore
├── knexfile.js
├── package.json
├── package-lock.json
├── README.md
├── VERSION.md
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
├── images/
├── src/
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
    ├── utils/
        ├── map-properties.js
        ├── reduce-properties.js
├── starter-movie-front-end (symlink)
├── starter-movie-front-end.old/
└── test/
```

## Database Versions
- Local Docker: Postgres 18 (example image `kernel528/postgres:18` or `kernel528/postgres:18-arm64`).
- Render (production): Postgres 18.
- Default local API port: `http://localhost:5001`.

## Implementation & Deployment Logs
Detailed historical setup notes, route task logs, validation transcripts, and deployment steps are kept in `Capstone_Project_Logs.md`.
