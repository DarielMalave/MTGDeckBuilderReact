import React, { useState, useEffect, useReducer } from 'react';
import CardContainer from './CardContainer.js';
import axios from 'axios';
import {v4 as uuid} from "uuid";

//const axios = require('axios');
//const BASE_URL = 'https://opentdb.com/api.php?amount=10';
const BASE_URL = 'http://localhost/PokemonCompendium/process.php';
const ROWS_PER_PAGE = 20;

const default_param = {
  'cardCountUpdated': 0,
  'rowsPerPage': 20,
  'string_url': "http://localhost/PokemonCompendium/process.php?card_set=mid"
};

function App() {
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

  const [dataSource, setDataSource] = useState([]);
  const [queryInfo, setQueryInfo] = useState({
    'totalNumPages': 1,
    'totalNumCards': 1
  });

  useEffect(() => {
    axios({
      method: "post",
      url: BASE_URL,
      data: state.param
    })
    .then(function (response) {
      console.log(JSON.parse(decodeURIComponent(response['data'])));
      setDataSource(JSON.parse(decodeURIComponent(response['data'])));
    })
  }, [state])

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