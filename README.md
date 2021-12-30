# YT-FETCH

Client:

- ReactJS(using create-react-app framework)

Server:

- ExpressJS (Server framework)
- dotenv (for secrets)
- Mongoose (A **thin** mongodb ODM)
- Google APIs (for YT)
- Fuzzy searching implemented using `mongoose-fuzzy-searching`
- A cron job that runs every 10 seconds fetching data from YT, scheduled using `node-cron`

## Run with docker compose

Add `.env` file so that `docker-compose` can read the secrets.

```
# Add youtube API key
YT_API_KEY =

# Add mongodb url
DOCKER_MONGODB_URI =
```

And then run,

```
docker-compose up -d
```

## Local setup

### Server

Clone the repo, then `cd server` and then run `npm install` to install required dependencies. Create a file `.env` filling all the secrets.

```
# Youtube API key
YT_API_KEY =

# Mongodb url
MONGODB_URI =
```

and then run `npm run dev` or `npm start` to run the server.

### Client

Go into `client` directory(`cd client`), run `npm install` then `npm start` to start the client.

## TODO

- [ ] Logging in API
- [ ] Manual fuzzy searching
- [ ] Cursor based pagination
