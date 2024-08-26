const fs = require('fs');

exports.handler = async function(event, context) {
    const { name } = JSON.parse(event.body);
    const currentTime = new Date().toLocaleString();

    const logEntry = `Name: ${name}, Time: ${currentTime}\n`;

    try {
        // Simulate logging data (replace this with your actual logging logic)
        console.log(logEntry);
        
        // If you want to log to a database or an external service, you would perform that here
        // Example: await database.log({name, time: currentTime});

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data logged successfully' })
        };
    } catch (error) {
        console.error('Error logging data:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to log data' })
        };
    }
};
