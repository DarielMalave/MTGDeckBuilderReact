<?php

function structure_query($url) {
    // some filters can't easily be search by "filter = value", these
    // filters have to be searched by something like "filter LIKE '%value%'"
    $special_filters = array('manaCost', 'type');

    // Instead of using $_GET variables, grabbing and parsing the URL
    // will be used in order manipulate/organize filters
    // For example: if a user wants to search for cards from VOW and MID,
    // it's easier to use/parse the URL instead of grabbing values
    // from $_GET
    $string_url = $url;

    // All filters from the URL will be stored in this array and then
    // added to the query string at the end
    $all_filters = array();

    // Get URL string after the question mark to only deal with
    // filters
    $filter_params = substr($string_url, strpos($string_url, "?") + 1);    

    // Get individual filters from splitting the array based on &
    $pair_of_filters = explode("&", $filter_params);
    
    // If there are no filters in the URL, the default query is going to
    // return all cards from all sets
    if (empty($filter_params) || empty(strpos($string_url, "?"))) {
	    return "SELECT * FROM cards";
    }

    // Base query string used to fetch cards from database
    $query = "SELECT * FROM cards WHERE ";

    // order filters by alphabetical order
    // for example, if URL looks like ?card_set=vow&type=instant&card_set=mid,
    // that would mess up the algorithm coming after this. Also it's
    // easier to read and parse filters when values of the same
    // type are together
    // sort() is going to make example look like ?card_set=vow&card_set=mid&type=instant
    sort($pair_of_filters);

    // Iterate through each individual filter and add them to $all_filters 
    // as SQL clauses
    foreach ($pair_of_filters as $index => $filter) {
	    $create_filter = explode("=", $filter);
        if ($index == 0) {
            $all_filters[] = (in_array($create_filter[0], $special_filters)) ? "($create_filter[0] LIKE '%$create_filter[1]%'" : "($create_filter[0] = '$create_filter[1]'";
            continue;
        }
    
        $previous_filter_type = $all_filters[$index - 1];
        $previous_filter_type = trim($previous_filter_type, "AND ");
        $previous_filter_type = trim($previous_filter_type, "OR ");
        $previous_filter_type = trim($previous_filter_type, "(");
        $previous_filter_type = trim($previous_filter_type, ") AND (");
        $previous_filter_type = substr($previous_filter_type, 0, strlen($create_filter[0]));
        
        // if not first element and this filter has same type as previous filter
        if (strcmp($create_filter[0], $previous_filter_type) == 0) {
    	    $all_filters[] = (in_array($create_filter[0], $special_filters)) ? "OR $create_filter[0] LIKE '%$create_filter[1]%'" : "OR $create_filter[0] = '$create_filter[1]'";
        }
        else {
		    $all_filters[] = (in_array($create_filter[0], $special_filters)) ? ") AND ($create_filter[0] LIKE '%$create_filter[1]%'" : ") AND ($create_filter[0] = '$create_filter[1]'";
        }
    }

    foreach ($all_filters as $index => $filter) {
	    $query .= $filter . " ";
    }
    
    $query .= ")";

    return $query;
}