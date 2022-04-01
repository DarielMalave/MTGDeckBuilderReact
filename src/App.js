import React, { useState, useEffect, useReducer } from 'react';
import CardContainer from './CardContainer.js';
import Filters from './Filters.js';
import axios from 'axios';
import {v4 as uuid} from "uuid";

const BASE_URL = 'http://localhost/PokemonCompendium/process.php';
const ROWS_PER_PAGE = 20;

// When page first loads, the page will display all cards in database by default
const default_param = {
  'cardCountUpdated': 0,
  'rowsPerPage': 20,
  'string_url': "http://localhost/PokemonCompendium/process.php"
};

function App() {
  // This hook holds all crucial state information (page number, current card count, parameters to
  // axios call) for this page
  // Using useReducer() instead of useState() because state logic is more complicated and relies on
  // other states
  const [state, dispatch] = useReducer(reducer, {
     page: 1,
     cardCount: 0,
     param: default_param
  });

  function reducer(state, action) {
    switch(action.type) {
      case 'nextPage':
        return { page: state.page + 1, cardCount: state.cardCount + ROWS_PER_PAGE, param: {'cardCountUpdated': state.cardCount + ROWS_PER_PAGE, 'rowsPerPage': 20, 'string_url': "http://localhost/PokemonCompendium/process.php?card_set=mid"} }
      case 'previousPage':
        return { page: state.page - 1, cardCount: state.cardCount - ROWS_PER_PAGE, param: {'cardCountUpdated': state.cardCount - ROWS_PER_PAGE, 'rowsPerPage': 20, 'string_url': "http://localhost/PokemonCompendium/process.php?card_set=mid"} }
    }
  }

  // This hook will hold the JSON object containing all card info in current page
  const [dataSource, setDataSource] = useState([]);
  // This hook will hold information of current query (filters applied, number of total cards returned, 
  // number of total pages returned)
  const [queryInfo, setQueryInfo] = useState({});

  useEffect(() => {
    axios({
      method: "post",
      url: BASE_URL,
      data: state.param
    })
    .then(function (response) {
      //console.log(JSON.parse(decodeURIComponent(response['data'])));
      setDataSource(JSON.parse(decodeURIComponent(response['data'])));
    })
  }, [state])


  useEffect(() => {
    axios({
      method: "post",
      url: 'http://localhost/PokemonCompendium/process_num_pages.php',
      data: state.param
    })
    .then(function (response) {
      let updated_response = JSON.parse(decodeURIComponent(response['data']));
      //console.log(updated_response);
      if (updated_response[1]) {
        setQueryInfo({ filters: updated_response[1], totalNumPages: Math.ceil(updated_response[0] / ROWS_PER_PAGE), totalNumCards: updated_response[0] });
      }
      else {
        setQueryInfo({ filters: '+ALL CARDS (DEFAULT)', totalNumPages: Math.ceil(updated_response[0] / ROWS_PER_PAGE), totalNumCards: updated_response[0] });
      }
    })
  }, [])

  function nextPage() {
    dispatch({ type: 'nextPage' });
  }

  function previousPage() {
    if (state.page === 1) {
      return;
    }

    dispatch({ type: 'previousPage' });
  }

  return (
    <>
      <h1>Welcome to the Gallery!</h1>
      {/* Make into separate component (since one way communication) */}
      <h2>Filters: { queryInfo.filters }</h2>
      <h2>Total number of cards: {queryInfo.totalNumCards}</h2>
      <h2>Total number of pages: {queryInfo.totalNumPages}</h2>
      {/* ================================================================ */}

      <Filters />
      <CardContainer dataSource={dataSource} />
      <section id="pagination_bar">
        <button id="previous_button" onClick={previousPage}>Previous Page</button>
        <button id="current_page_display">Page {state.page}</button>
        <button id="next_button" onClick={nextPage}>Next Page</button>
      </section>
    </>
  );
}

export default App;