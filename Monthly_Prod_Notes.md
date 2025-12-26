# We Love Movies

### Monthly Production Maintenance Steps on Render.com
Will get a notification from Render indicating the DB will be deleted due to free tier.
1. Suspend the We Love Movies application services.
   - [kernel528-WeLoveMovies-front-end](https://dashboard.render.com/web/srv-cu61j7l6l47c73btue80)
   - [kernel528-WeLoveMovies-back-end](https://dashboard.render.com/web/srv-cu60jl56l47c73btmg3g)
2. Delete the current Postgres DB instance.
   - [WeLoveMoviesDB](https://dashboard.render.com/d/dpg-cv1kpfhu0jms738j2da0-a)
3. Create new DB instance
4. Capture the usual details needed and add them to a GPG encrypted file in `home network` folder. 
   - Decrypt the existing `credentials.md.gpg` file...
   - Linux
     ```bash
       : gpg --output credentials.md --decrypt credentials.md.gpg
     ```
   - MacOS
     ```bash
       : gpg -d credentials.md.gpg >> credentials.md
     ```
   - Put details into a .md file and encrypt.
     ```bash
       ### Postgres - Render Hosted - We Love Movies - 3/1/2025
       DB Name:      
       DB Username:  
       DB Password:  
       Hostname:     
       PSQL Command: 
       External URL: 
       Internal URL: 
     ```
5. Update DBeaver connection settings with above info to validate setup and connection. 
6. Update the local `.env` file settings for the `PRODUCTION_DATABASE_URL` using the `External URL` value. 
7. Encrypt file; Delete unencrypted file; confirm overwrite if needed...
     ```bash
       : gpg -c <filename>.md
       : rm <path-to-file>/credentials.md
     ```
8. Reload the sample data to the database:
   - Setup tables...
     ```bash
       : NODE_ENV=production npx knex migrate:list  
       Using environment: production
       No Completed Migration files Found.
       Found 5 Pending Migration file/files.
       20250117174804_createCriticsTable.js
       20250117174832_createMoviesTable.js
       20250117174844_createTheatersTable.js
       20250117174852_createReviewsTable.js
       20250117174906_createMovies_TheatersTable.js
       
       # joe @ obiwan in ~/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies on git:refresh-2025-03 [2025-03-01 12:21:25]
       : NODE_ENV=production npx knex migrate:latest
       Using environment: production
       Batch 1 run: 5 migrations
     ```
   - Seed data...
     ```bash
       # joe @ obiwan in ~/github/kernel528/Chegg-Skills/Projects/Backend-Web-Dev/WeLoveMovies on git:refresh-2025-03 [2025-03-01 12:21:35]
       : NODE_ENV=production npx knex seed:run      
       Using environment: production
       Ran 6 seed files
     ```
9. On render.com Instance: [kernel528-WeLoveMovies-back-end](https://dashboard.render.com/web/srv-cu60jl56l47c73btmg3g) --> [Environment](https://dashboard.render.com/web/srv-cu60jl56l47c73btmg3g/env)
   - Update the backend application environment variable for the `PRODUCTION_DATABASE_URL`
   - This should match the `.env` file `PRODUCTION_DATABASE_URL`
10. Restart backend and frontend application instances...
    - Resume [kernel528-WeLoveMovies-back-end](https://dashboard.render.com/web/srv-cu60jl56l47c73btmg3g) service and initiate a `clear cache and rebuild`
      - Once this is confirmed active, then proceed to resume the front-end below...
    - Resume [kernel528-WeLoveMovies-front-end](https://dashboard.render.com/web/srv-cu61j7l6l47c73btue80) service and initiate a `clear cache and rebuild`

### Render.com DB Refreshes
- June 2025:     v16.9
- July 2025:     v16.10
- October 2025:  v17.6
- November 2025: v17.7
- December 2025: v17.7