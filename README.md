# Twitter-Clone Project

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:3004/>.
4. Go to <http://localhost:3004/> in your browser.

## Setting Up The Database

1. Create a .env file with the following:
  DB_HOST=localhost
  DB_USER="Your Database User"
  DB_PASS="Your Database Password"
  DB_NAME=twitter_clone
  DB_PORT=1234
  idleTimeoutMillis: 0
  connectionTimeoutMillis: 0
2. Run `psql` from the db folder
3. Create the `twitter_clone` database
4. Run `\i schema/00_all_migrations.sql`
5. Run `\i seeds/01_users_seeds.sql`
6. Run `\i seeds/02_tweets_seeds.sql`

## Running the Chat Feature

1. Open 3 separate terminals
2. In the first terminal, run `node chat-server`
3. In the second terminal, run `node chat-client user1`
4. In the third terminal, run `node client-chat user2`
5. user1 and user2 can now comunicate back and forth

## Unit Testing

1. From root directory, run `npm test`