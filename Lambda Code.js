const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: "recipes",
  };
  const data = await dynamo.scan(params).promise();
  const response = {
    statusCode: 200,
    body: JSON.stringify(data.Items),
  };
  return response;
};
