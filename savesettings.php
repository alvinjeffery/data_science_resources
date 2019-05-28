<?php
$servername = "localhost";
$username = "alvinjeffery";
$password = "Vandy!n4matix";
$dbname = "clicks";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

$clickpath = mysqli_real_escape_string($conn, $_POST['clickpath']);

if (strlen($times) > 200000) {  $times = "";    }

$sql = "INSERT INTO d3clicks (time, clickpath)
VALUES (NOW(), '$clickpath') ON DUPLICATE KEY UPDATE    
time=NOW(), clickpath='$clickpath'";

if ($conn->query($sql) === TRUE) {
    echo "Page saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
