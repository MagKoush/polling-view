# \<Application-Name> Client

Polling Client application to support basic features as of now. The features include the followings:

- Login Users

- Create/Update/Get Users

- Create/Update/Get Elections

- Create/Update/Get Polls

- Create/Update/Get Votes

## Development Environment on macOS

In order to setup the development environment you must go over the followings:

1. Install [Node](https://nodejs.org/en/)
2. Install [nvm](https://github.com/nvm-sh/nvm)
3. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. Clone and install the appropriate node driver and dependencies

   ```bash
     git clone git@github.com:MagKoush/polling-view.git
     cd polling
     nvm install
     npm i
   ```

5. Please make sure to run your mongo server locally. Learn more mongo online.
6. Run the application

   ```bash
   npm start
   ```

### Environment Variables

By default the environment variables are set already. However if you would like to modify the variables, make sure to create an `.env` file. Do make sure to not commit this file.

| Key        | Default Value         | Description                           |
| ---------- | --------------------- | ------------------------------------- |
| SERVER_URL | http://localhost:6969 | server url to connect the client with |
