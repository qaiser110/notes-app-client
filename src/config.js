const dev = {
  STRIPE_KEY: "pk_test_SpQYD2xJkKaB14uXKIFO5n1l",
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-1nq6m0xeikfqx',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://aswczu9kwb.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_KIc82rR6j',
    APP_CLIENT_ID: '4onum154r7unama1g21tf6m1n0',
    IDENTITY_POOL_ID: 'us-east-1:352e53f6-2578-4f27-b3a3-b4935c15cf20',
  },
};

const prod = {
  STRIPE_KEY: "pk_test_SpQYD2xJkKaB14uXKIFO5n1l",
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-tvp4ei8wi44m',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://ualtowv9w1.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_I5b5O660i',
    APP_CLIENT_ID: '5e1s6f8ac5ahgjld6i0knnp6qn',
    IDENTITY_POOL_ID: 'us-east-1:ee468366-8d1c-4b1e-9aa9-ab4292f88c67',
  },
};

// CRA support custom env variables prefixed with REACT_APP_
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
