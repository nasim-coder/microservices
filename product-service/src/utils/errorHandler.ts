
const httpStatusMessages: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: "I'm a teapot", // April Fools' joke
    422: 'Unprocessable Entity',
    429: 'Too Many Requests',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
};



const handleErrorResponse = (err: any) => {

    let statusCode: number = err?.statusCode || err?.code || err?.status || 500;

    let message: string = err?.message || err?.text || 'Something went wrong';

    if( typeof err == 'string') message = err;

    
    if (typeof err === 'string') message = err;

    if(typeof err == 'number') {
        statusCode=err;
        message = httpStatusMessages[statusCode] || message;
    }
    
    else if (typeof err === 'object' && err !== null) {
        
        const key = Object.keys(err)[0]; // Get the first key
        const value = err[key]; // Get the value for that key

        // Check if the key is a number or string and handle accordingly
        if (!isNaN(Number(key))) {
            statusCode = Number(key);
            message = httpStatusMessages[statusCode] || message; // Set the message based on the HTTP status code
        }
        // If the value is a number, use it as the status code
        if (typeof value === 'number') {
            statusCode = value;
            message = httpStatusMessages[statusCode] || message; // Set the message based on the HTTP status code
        }
        // If the value is a string, use it as the message
        else if (typeof value === 'string')
            message = value;
    }

    // Log the error for debugging purposes
    console.error(err);


    return { message, statusCode }


}

export default handleErrorResponse;