window._config = {
    cognito: {
        // Get from Cognito
        userPoolId: 'us-east-1_OtieyQej4', // e.g. us-east-2_uXboG5pAb
        // Get from app client ID
        userPoolClientId: '77us1adlp7s3jk2ng3eg1a1u2q', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-east-1' // e.g. us-east-2
    },
    api: {
        // Get from API Gateway URL
        invokeUrl: 'https://lw1kolw4r3.execute-api.us-east-1.amazonaws.com/dev' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
