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
git clone git@github.com:GuilhermeGabriel/node-api-aws-dynamodb-todo.git
cd node-api-aws-dynamodb-todo

//Install dependencies
yarn

//Start code
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
curl -X POST <IP:3333>/todos --data '{ "todo": "make item 001" }'
```

### List all Todos

```bash
curl POST <IP:3333>/todos
```

### Get one Todo

```bash
curl POST <IP:3333>/todos/<id>
```

### Update a Todo

```
curl -X PUT <IP:3333>/todos/<id>
```

### Delete a Todo

```bash
curl -X DELETE <IP:3333>/todos/<id>
```
