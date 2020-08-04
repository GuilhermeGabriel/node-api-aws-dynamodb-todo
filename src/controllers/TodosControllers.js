const AWS = require('../config/aws');
const { v1: uid } = require('uuid');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports = {
  async create(req, res) {
    const { todo } = req.body;
    const uuid = uid();

    const params = {
      TableName: 'Todos',
      Item: {
        "id": uuid,
        "todo": todo
      }
    };

    dynamo.put(params, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ "added": todo, "id": uuid });
    });
  },
  async index(req, res) {
    const params = {
      TableName: 'Todos',
    }
    dynamo.scan(params, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    })
  },
  async show(req, res) {
    const { id } = req.params;
    console.log(id)

    const params = {
      TableName: 'Todos',
      Key: {
        "id": id
      }
    }
    dynamo.get(params, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  },
  async update(req, res) {
    const { id } = req.params;
    const { todo } = req.body;
    const params = {
      TableName: 'Todos',
      Key: {
        "id": id
      },
      UpdateExpression: "set todo = :todo",
      ExpressionAttributeValues: {
        ":todo": todo,
      },
      ReturnValues: "UPDATED_NEW"
    };
    dynamo.update(params, (err, data) => {
      if (err) return res.json(err);
      else return res.json(data);
    });
  },
  async delete(req, res) {
    const { id } = req.params;
    const params = {
      TableName: 'Todos',
      Key: {
        "id": id
      }
    }
    dynamo.delete(params, (err, data) => {
      if (err) return res.json(err);
      else return res.json({ "deleted": id });
    });
  }
}