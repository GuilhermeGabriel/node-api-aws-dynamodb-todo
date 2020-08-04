# node-rest-api-aws-dynamodb-todo

Simple todo rest api made with node and dynamodb

## Use-cases

- API for a Web Application
- API for a Mobile Application
- API for Embedded Systems

## Setup

```bash
npm install
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

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### List all Todos

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos
```

Example output:
```bash
[{"text":"Deploy my first service","id":"ac90feaa11e6-9ede-afdfa051af86","checked":true,"updatedAt":1479139961304},{"text":"Learn Serverless","id":"206793aa11e6-9ede-afdfa051af86","createdAt":1479139943241,"checked":false,"updatedAt":1479139943241}]%
```

### Get one Todo

```bash
# Replace the <id> part with a real id from your todos table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### Update a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id> --data '{ "text": "Learn Serverless", "checked": true }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":true,"updatedAt":1479138570824}%
```

### Delete a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
``
