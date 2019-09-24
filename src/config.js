export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-55'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://tudrsd95jj.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_hkhZmrhqp',
    APP_CLIENT_ID: '1vecsgq6k7ca8na8p34f8lordj',
    IDENTITY_POOL_ID: 'us-east-1:4d92c5c7-dd74-4ab1-9f19-2a14feef9330'
  }
};
