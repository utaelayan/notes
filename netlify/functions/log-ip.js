// netlify/functions/log-ip.js

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    // Get the visitor's IP address from the event object
    const ipAddress = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'Unknown IP';

    // Define the log file path (use the /tmp directory for serverless functions)
    const logFile = path.join('/tmp', 'ip_log.txt');

    try {
        // Log the IP address to a file in the /tmp directory
        fs.appendFileSync(logFile, ipAddress + '\n', 'utf8');
        return {
            statusCode: 200,
            body: `IP address logged: ${ipAddress}`,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Error logging IP address: ${error.message}`,
        };
    }
};