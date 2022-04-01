import React from 'react';

const card_set = ['vow', 'mid', 'afr', 'stx', 'khm', 'znr'];

function reloadPage() {
    window.location.assign('http://localhost:3000?hi');
}


function Filters() {
    return (
        <div id="filters">
            <button onClick={reloadPage}>Test button</button>
            {/* <h2> Filters: </h2>
            <div class="dropdown">
                <button class="dropbtn">Card Set</button>
                <div class="dropdown-content">
                    <button value="card_set=vow" name="card_set=vow" onclick="toggle_filter(this.value)">Crimson
                    Vow</button>
                    <button value="card_set=mid" onclick="toggle_filter(this.value)">Midnight Hunt</button>
                    <button value="card_set=afr" onclick="toggle_filter(this.value)">Adventures in the Forgotten
                Realms</button>
                    <button value="card_set=stx" onclick="toggle_filter(this.value)">Strixhaven: School of
                Mages</button>
                    <button value="card_set=khm" onclick="toggle_filter(this.value)">Kaldheim</button>
                    <button value="card_set=znr" onclick="toggle_filter(this.value)">Zendikar Rising</button>
                </div>
            </div> */}
        </div>
    );
}

export default Filters;