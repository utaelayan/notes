<?php
// Get the visitor's IP address
$ip_address = $_SERVER['REMOTE_ADDR'];

// Define the log file path
$log_file = 'ip_log.txt';

// Log the IP address (append mode)
file_put_contents($log_file, $ip_address . PHP_EOL, FILE_APPEND);
?>