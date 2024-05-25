# IT Landscape Docker example

In this repository you can find a *very* basic example of a NodeJS backend that is listening to port 3000 using Express.
You can start up the backend by installing the dependencies and running the `npm start` script:

```shell
npm install
npm run start
```

## Docker

However, there is also a Dockerfile included, which allows you to build a Docker image and run it anywhere!
To build the Dockerfile into a Docker image, you need to execute the docker build command:

```shell
docker build -t simple-nodejs-server .
```

After building the Docker image, you can start it up by using the following command:

```shell
docker run -p 3000:3000 simple-nodejs-server
```

When the container is running, you can navigate to `http://localhost:3000` to check that the server is running.