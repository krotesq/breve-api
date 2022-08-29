# breve-api

Breve backend

## ToDo`s

- edit util function "uid()", that it will generate unique id`s which dont exists
- GET method
- rework response, if entry already exists 

## .env variables

PORT -> defines the port the server is listening to

DOMAIN -> defines the base url of the short link e.g.: http://breve.app/

DB_USER -> defines the database user name

DB_PASSWORD -> defines the dabase password for the username

DB_URL -> defines the mongodb connectionm string including the collection name at the end


## /v1/short

### GET

- query param: "url" to find single entry for param - e.g api.breve.app/v1/short?url=http://adasdsada
- query param: "code" to find single entry for param - e.g api.breve.app/v1/short?code=xfmga4


### POST

- requires "url" body data
