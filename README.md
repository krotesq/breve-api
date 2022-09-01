# breve-api

## Methods

### Get Entries

#### URL : `/v1/short`

#### Method: `GET`

#### Auth required: `No`

#### Query-Params: `url, code` 

- `url` : find entry by long url - e.g /v1/short?url=https://example.com
- `code` : find entry by short code - e.g /v1/short?code=xfmga4


### Create Entry

#### URL : `/v1/short`

#### Method: `POST`

#### Auth required: `No`

#### POST-Data: 
```json 
{"url": "https://example.com"} 
```

# Development

## ToDo`s

- edit util function "uid()", that it will generate unique id`s which dont exists
- rework responses (status codes etc)

## .env variables

`PORT` -> defines the port the server is listening to

`DOMAIN` -> defines the base url of the short link e.g.: http://breve.app/

`DB_URL` -> defines the mongodb connectionm string including the username+pw and the database name at the end

`ID_MAX_CHARS` -> defines the max allowed length of a custom id


