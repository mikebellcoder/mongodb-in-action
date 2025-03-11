## How to use

Run npm install to pull down the NodeJS dependency:
``` shell
$ npm install
```
Run the following to build the image:
``` shell
$ docker build --tag 'mongo_local'
```
Next run the image as a container:
``` shell
$ docker run -n mongo_local -d -rm -p 27017:27017 mongo_local
```
Run mongosh to connect to the local MongoDB instance:
``` terminal
$ mongosh
```
Load the JS script file to run in MongoDB REPL:
``` REPL
> load("./mongodb-script.js)
```

### Bonus
To see the config values for the current mongosh session use the following command:
``` shell
> config
```
