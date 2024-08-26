<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get the visitor's IP address
$ip_address = $_SERVER['REMOTE_ADDR'];

// Define the log file path
$log_file = 'ip_log.txt';

// Log the IP address (append mode)
if (file_put_contents($log_file, $ip_address . PHP_EOL, FILE_APPEND) === false) {
    echo "Error logging IP address.";
} else {
    echo "IP address logged successfully.";
}
?>
