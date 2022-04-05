<?php
include ("setup_db.php");
include ("structure_query.php");

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");


$mysqli = db_iconnect("mtg");
$page_response = array();
$_POST = json_decode(file_get_contents("php://input"),true);
$string_url = $_POST['string_url'];
$cardUpdatedCount = $_POST['cardCountUpdated'];
$rowsPerPage = $_POST['rowsPerPage'];

$query = structure_query($string_url);

$result_num_rows = $mysqli->query($query) or die($mysqli->error);
$total_num_cards = mysqli_num_rows($result_num_rows);

$page_response[] = $total_num_cards;
$page_response[] = get_only_filter_values($string_url);

echo rawurlencode(json_encode($page_response));

function get_only_filter_values($url) {
    $string_url = $url;

    $only_filter_values = array();

    $filter_params = substr($string_url, strpos($string_url, "?") + 1);    

    $pair_of_filters = explode("&", $filter_params);
    
    if (empty($filter_params) || empty(strpos($string_url, "?"))) {
	    return;
    }

    foreach ($pair_of_filters as $index => $filter) {
        $create_filter = explode("=", $filter);
	    $only_filter_values[] = "+" . strtoupper($create_filter[1]) . " ";
    }

    return $only_filter_values;
}