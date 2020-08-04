# node-rest-api-aws-dynamodb-todo

Simple todo rest api made with node and dynamodb

## Use-cases

- API for a Web Application
- API for a Mobile Application
- API for Embedded Systems

## Setup

```bash

// Create an machine in EC2 on aws
// Install Node
// Clone this repo
git@github.com:GuilhermeGabriel/node-api-aws-dynamodb-todo.git
cd node-api-aws-dynamodb-todo

yarn
yarn start
```

```
endpoints:
  POST - <IP:3333>/todos
  GET - <IP:3333>/todos
  GET - <IP:3333>/todos/id
  PUT - <IP:3333>/todos/id
  DELETE - <IP:3333>/todos/id
```

## Usage

You can create, retrieve, update, or delete todos with the following commands:

### Create a Todo

```bash
curl -X POST <IP:3333>/todos --data '{ "todo": "Learn Serverless" }'
```

### List all Todos

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos
```

### Get one Todo

```bash
# Replace the <id> part with a real id from your todos table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
```

### Update a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id> --data '{ "text": "Learn Serverless", "checked": true }'
```

### Delete a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
``
