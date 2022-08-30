# breve-api

## Methods

### Get Entries

#### URL : `/v1/short`

#### Method: `GET`

#### Query-Params: `url, code` 

- "url" : find entry by long url - e.g /v1/short?url=https://example.com
- "code" : find entry by short code - e.g /v1/short?code=xfmga4


### Create Entry

#### URL : `/v1/short`

#### Method: `POST`

#### POST-Data: 
```json 
{"url": "https://example.com"} 
```

# Development

## ToDo`s

- edit util function "uid()", that it will generate unique id`s which dont exists
- GET method
- rework responses (status codes etc)

## .env variables

`PORT` -> defines the port the server is listening to

`DOMAIN` -> defines the base url of the short link e.g.: http://breve.app/

`DB_USER` -> defines the database user name

`DB_PASSWORD` -> defines the dabase password for the username

`DB_URL` -> defines the mongodb connectionm string including the collection name at the end


