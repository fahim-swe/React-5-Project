import React from 'react';

import {MdFeed} from "react-icons/md";

import myFeedIcon from '../assets/myFeedicon.svg';
import myQuestionIcon from '../assets/myQuestionicon.svg';
import myFavoritesIcon from '../assets/myFavoritesIcon.svg';


import {AiOutlineQuestionCircle} from "react-icons/ai";
import {BsStar} from "react-icons/bs";
import Search from './Home/Search';
import NeedFeed from './Home/NeedFeed';
import Sidebar from './Home/Sidebar';

export default function Home() {
  return (
    <>
        <div className='containerHome'>
            <div className="section1">
                <div className="item1">
                    <div className='activeItem'>
                        <img src={myFeedIcon} />
                        <div>My Feed</div>
                    </div>
                    <div>
                        <img src={myQuestionIcon} />
                        <div>My Questions</div>
                        <span>3</span>
                    </div>
                    <div>
                        
                        <img src={myFavoritesIcon}/>
                        <div>Favorites</div>

                        <span>1</span>
                    </div>
                </div>
                <div className="item2">
                    Ask new Question
                </div>
            </div>

            <Search />

            <div className='newsNeedContainer'>
                
                <NeedFeed />
                <Sidebar />
                
            </div>
        </div>
    
    
    </>
  )
}
