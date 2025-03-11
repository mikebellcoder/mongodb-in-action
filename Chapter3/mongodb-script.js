function printMongoDBDetailsSimplified() {
    // Import dayjs for handling date and time
    const dayjs = require('dayjs');
    // Import relativeTime plugin for human-readable time formatting
    const relativeTime = require('dayjs/plugin/relativeTime');
    // Activate the relativeTime plugin
    dayjs.extend(relativeTime);

    try {
        // access the admin database
        const adminDB = db.getSiblingDB('admin');
        // retrieve MongoDB server status
        const serverStatus = adminDB.serverStatus();
        // display MongoDB version
        console.log("MongoDB Version:", serverStatus.version);
        // display host information
        console.log("Host:", serverStatus.host);
        // Show uptime in a human-readable format using dayjs
        console.log("Uptime:", dayjs().subtract(serverStatus.uptime, 'seconds').fromNow(true));
        // display the current number of open connections
        console.log("Currently open connections:", serverStatus.connections.current);
    } catch (err) {
        // handle errors if server status cannot be retrieved
        console.error("Failed to retrieve server status. Error:", err.Message);
    }
}

printMongoDBDetailsSimplified();