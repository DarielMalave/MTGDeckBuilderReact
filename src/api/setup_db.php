<?php
function db_iconnect($db) {
	$hostname = "localhost";
	$username = "root";
	$password = "acb713";
	$mysqli = new mysqli($hostname,$username,$password,$db);
	if (mysqli_connect_error()) {
		die("Unable to connect to $db: " . mysqli_connect_error());
	}
	return $mysqli;
}