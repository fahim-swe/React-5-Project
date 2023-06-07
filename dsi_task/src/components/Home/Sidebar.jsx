import React from 'react';

import {FiUsers} from "react-icons/fi";
import {MdKeyboardArrowDown} from "react-icons/md";
import Footer from './Footer';


import usersIcon from '../../assets/usersIcon.svg';

const questionList = [
    {id: 1, question: "Please follow the rules"},
    {id: 2, question: "No Personal advice"},
    {id: 3, question: "Don't share misinformation"},
    {id: 4, question: "Don't ask for Likes or Favorites"},
    {id: 5, question: "Be respectful of others"},
    {id: 6, question: "Only answer questions on those you"},
    {id: 7, question: "Don't copy other's response to answer"},
    {id: 8, question: "Report misinformation"}
];

export default function Sidebar() {
  return (
    <div className="sideBarContainer">
        <MembersList />
        <PopularTag />

        <AskNBRRules />

        <Footer/>
    </div>
  )
}

function MembersList()
{
    return (
        <div className="sideBarmemberList">
           
            <div>
                <img src={usersIcon} />
                <div className="">
                    <h3>Members</h3>
                    <p>457 members</p>
                </div>
            </div>
            <button >See all members</button>

        </div>
    )
}


function PopularTag()
{
    return (
        <div className='popularTagList'>
            <div>TAX</div>
            <div>
                Discussion
            </div>
            <div>
                Questions
            </div>
            <div>News</div>
            <div>Report</div>
            <div>Misc</div>
            <div>Form Submission</div>
        </div>
    )
}


function AskNBRRules()
{
    return (
        <div className="askNbrRules">
            <section className='askNbarSection1'>
                <img  src={usersIcon} />
                <div className="">
                    <h3>AskNBR Rules</h3>
                    <p>Please read before you post anything</p>
                </div>
            </section>

            <hr/>
            <section >
                {
                    questionList.map((question)=>(
                        <div className="listOfQuestion" key={question.id}>
                           <div> {question.id} {" - "} {question.question} </div>
                           <  MdKeyboardArrowDown />
                        </div>

                    ))
                }
            </section>

        </div>
    )
}