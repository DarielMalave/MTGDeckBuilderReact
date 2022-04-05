<?php
include ("setup_db.php");
include ("structure_query.php");

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");

// close database
// use prepared statements
$mysqli = db_iconnect("mtg");
$all_cards = array();
$_POST = json_decode(file_get_contents("php://input"),true);
//print_r($_POST);
$string_url = $_POST['string_url'];
$cardUpdatedCount = $_POST['cardCountUpdated'];
$rowsPerPage = $_POST['rowsPerPage'];

$query = structure_query($string_url);

$query .= " LIMIT $cardUpdatedCount, $rowsPerPage;";

$result = $mysqli->query($query) or die($mysqli->error);

$i = 0;
while($row = $result->fetch_assoc()) {
    $all_cards[$i] = $row;
    $i ++;
}

$updated_all_cards = rawurlencode(json_encode($all_cards));
echo $updated_all_cards;