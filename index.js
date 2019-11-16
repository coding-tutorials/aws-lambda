exports.handler = async (event) => ({
  statusCode: 200,
  body: JSON.stringify('Lambda deployed from CI!'),
})
