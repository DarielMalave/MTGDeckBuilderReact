import React, { useRef } from 'react';
import './styles/Filters.css';
import {v4 as uuid} from "uuid";

const card_set = ['card_set=vow', 'card_set=mid', 'card_set=afr', 'card_set=stx', 'card_set=khm', 'card_set=znr'];
const card_set_name = ['Crimson Vow', 'Midnight Hunt', 'Adventures in the Forgotten Realms', 'Strixhaven: School of Mages', 'Kaldheim', 'Zendikar Rising'];

const cmc = ['cmc=1', 'cmc=2', 'cmc=3', 'cmc=4', 'cmc=5', 'cmc=6', 'cmc=7', 'cmc=8', 'cmc=9'];
const cmc_name = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const color = ['manaCost={R}', 'manaCost={U}', 'manaCost={G}', 'manaCost={W}', 'manaCost={B}'];
const color_name = ['Red', 'Blue', 'Green', 'White', 'Black'];

const type = ['type=creature', 'type=instant', 'type=artifact', 'type=enchantment', 'type=sorcery', 'type=planeswalker', 'type=land'];
const type_name = ['Creature', 'Instant', 'Artifact', 'Enchantment', 'Sorcery', 'Planeswalker', 'Land'];

const rarity = ['rarity=common', 'rarity=uncommon', 'rarity=rare', 'rarity=mythic'];
const rarity_name = ['Common', 'Uncommon', 'Rare', 'Mythic'];

function Filters() {
    function resetPage() {
        window.location.assign(window.location.origin + "/gallery");
    }

    function toggleFilter(filter) {
        let string_url = window.location.href;
        let updated_string_url;
    
        if (string_url.indexOf("?") === -1) {
            string_url += "?";
        }
    
        if (string_url.indexOf(filter) > -1) {
            updated_string_url = string_url.replace(filter, "");
        } else {
            updated_string_url = string_url.concat("&" + filter);
        }
    
        if (updated_string_url.substring(updated_string_url.length - 1) === "&") {
            updated_string_url = updated_string_url.substring(0, updated_string_url.length - 1);
        }
    
        if (updated_string_url.substring(updated_string_url.length - 1) === "?") {
            updated_string_url = updated_string_url.substring(0, updated_string_url.length - 1);
        }
    
        updated_string_url = updated_string_url.replace("?&", "?");
        updated_string_url = updated_string_url.replace("&&", "&");
    
        window.location.assign(updated_string_url);
    }

    return (
        <div id="filters">
            <h2> Filters: </h2>
            <div className="dropdown">
                <button className="dropbtn">Card Set</button>
                <div className="dropdown-content">
                    {
                        card_set.map((filter, index) => {
                            if (window.location.href.includes(filter)) {
                                return <button key={uuid()} value={filter} className="active-button" onClick={(e) => {toggleFilter(e.target.value) }}>{card_set_name[index]}</button>
                            }
                            else {
                                return <button key={uuid()} value={filter} onClick={(e) => {toggleFilter(e.target.value) }}>{card_set_name[index]}</button>
                            }
                        })
                    }
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">CMC</button>
                <div className="dropdown-content">
                    {
                        cmc.map((filter, index) => {
                            if (window.location.href.includes(filter)) {
                                return <button key={uuid()} value={filter} className="active-button" onClick={(e) => {toggleFilter(e.target.value) }}>{cmc_name[index]}</button>
                            }
                            else {
                                return <button key={uuid()} value={filter} onClick={(e) => {toggleFilter(e.target.value) }}>{cmc_name[index]}</button>
                            }
                        })
                    }
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Color Identity</button>
                <div className="dropdown-content">
                    {
                        color.map((filter, index) => {
                            if (window.location.href.includes(filter)) {
                                return <button key={uuid()} value={filter} className="active-button" onClick={(e) => {toggleFilter(e.target.value) }}>{color_name[index]}</button>
                            }
                            else {
                                return <button key={uuid()} value={filter} onClick={(e) => {toggleFilter(e.target.value) }}>{color_name[index]}</button>
                            }
                        })
                    }
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Type</button>
                <div className="dropdown-content">
                    {
                        type.map((filter, index) => {
                            if (window.location.href.includes(filter)) {
                                return <button key={uuid()} value={filter} className="active-button" onClick={(e) => {toggleFilter(e.target.value) }}>{type_name[index]}</button>
                            }
                            else {
                                return <button key={uuid()} value={filter} onClick={(e) => {toggleFilter(e.target.value) }}>{type_name[index]}</button>
                            }
                        })
                    }
                </div>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Rarity</button>
                <div className="dropdown-content">
                    {
                        rarity.map((filter, index) => {
                            if (window.location.href.includes(filter)) {
                                return <button key={uuid()} value={filter} className="active-button" onClick={(e) => {toggleFilter(e.target.value) }}>{rarity_name[index]}</button>
                            }
                            else {
                                return <button key={uuid()} value={filter} onClick={(e) => {toggleFilter(e.target.value) }}>{rarity_name[index]}</button>
                            }
                        })
                    }
                </div>
            </div>

            <div className="dropdown">
                <button key={uuid()} onClick={resetPage} className="dropbtn">Reset</button>
            </div>
        </div>
    );
}

export default Filters;