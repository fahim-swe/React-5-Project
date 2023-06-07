import React from 'react';

import {HiSearch} from "react-icons/hi";
import {BiTimeFive} from "react-icons/bi";
import {RiInformationLine} from "react-icons/ri";


import searchIcon from '../../assets/searchQuestionIcon.svg';
import latestPostIcon from '../../assets/latestPostIcon.svg';
import activeIcon from '../../assets/actionIcon.svg';


export default function Search() {
  return (
    <div className="searchContainer">
        <div className="item1">
            <img src={searchIcon} />
            <p>Search Questions</p>
        </div>
        <div className="item2">
            <div className='activeItem'>
                <img src={latestPostIcon} />
                <p>Latest</p>
            </div>
            <div>
                <img src={activeIcon} />
                <p>Active</p>
            </div>
        </div>
    </div>
  )
}
