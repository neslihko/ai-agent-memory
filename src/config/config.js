const config = {
    development: {
      zepApiUrl: process.env.REACT_APP_ZEP_API_URL || 'http://localhost:8000',
      apiKey: process.env.REACT_APP_API_KEY,
      memoryConfig: {
        shortTermLimit: 10,
        longTermLimit: 1000
      },
      security: {
        encryptionEnabled: true,
        encryptionKey: process.env.REACT_APP_ENCRYPTION_KEY
      }
    },
    production: {
      zepApiUrl: process.env.REACT_APP_ZEP_API_URL,
      apiKey: process.env.REACT_APP_API_KEY,
      memoryConfig: {
        shortTermLimit: 20,
        longTermLimit: 5000
      },
      security: {
        encryptionEnabled: true,
        encryptionKey: process.env.REACT_APP_ENCRYPTION_KEY
      }
    }
  };
  
  export default config[process.env.NODE_ENV || 'development'];