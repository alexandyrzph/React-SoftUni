# SoftUni Practice Server

## Usage

This is **REST service**, created for educational purposes. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```

Note that changes to the data **will not be persisted**! All operations happen in memory and will be wiped when the service is restarted.

## Base URL

The Base URL for the API is: `https://localhost:3030`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

# Endpoints: Todos

- `/data/todos` -- get todo list;

## Get todo list

Send a `GET` request to `/data/todos`. The service will respond with an array of todo objects.

### Success Response:

Code: 200 OK

Content:

```
[
  {
    "_id": string,
    "text": string,
    "isCompleted": boolean,
  }, ...
]
```
