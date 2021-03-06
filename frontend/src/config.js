const config = {
    // Backend config
    SENTRY_DSN: "https://b59b481eebec42f9816dfa86c6427bb0@o1028350.ingest.sentry.io/5995710",
    STRIPE_KEY: "pk_test_51JZWX1BpeSmQTsZ0uBTBzgpg5oTRdhdOPVrWahK27fzIdfxwsCodi7fKJDtHaYnHVy3Zl1otL7VGbIPBboMRpXqh00bRO7k7FC",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;