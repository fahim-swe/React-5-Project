import React from 'react';

import {BiLike} from "react-icons/bi"; 
import {MdOutlineModeComment} from "react-icons/md";
import {HiOutlineStar} from "react-icons/hi";
import {AiFillCheckCircle} from "react-icons/ai";



import post1Image from '../../assets/post1.png';
import post2Image from '../../assets/post2.png';
import post3Image from '../../assets/post3.png';
import userProfileIcon from '../../assets/userProfileImage.svg';



import postLike from '../../assets/postLikeicon.svg';
import postComment from '../../assets/postComenticon.svg';
import postFav from '../../assets/postFavicon.svg';
import postCheckGreenCheckMark from '../../assets/postCheckGreenicon.svg';


import bronzeContributorIcon from '../../assets/bronzeContributor.svg';
import moderatorIcon from '../../assets/moderatorIcon.svg';


const comment = {
    id: 1, 
    profileIcon: userProfileIcon,
    name: 'Md Karim Ahmed',
    contribution : {
        type: 'SilverContributor',
        icon: bronzeContributorIcon
    }
    ,
    commentMessage : "আপনি নরমালি ফর্মটা ফিলাপ করুন। আর ফর্মের সাথে এন আই ডি এর ফটোকপি,  দুই কপি পাসপোর্ট সাইজ ছবি, আর এক কপি স্ট্যাম্প সাইজ ছবি এটাচ করে দিবেন। "
}

export default function NeedFeed() {
  return (
    <div className="newsFeedContainer">
        <NewsCard postImage={post1Image} comment={comment} />

        <NewsCard postImage={post2Image} />

        <NewsCard postImage={post3Image}/>
        
    </div>
  )
}



function NewsCard({postImage, comment = ""}) {
    return (
      <div className='newCardSection'>
        <div className="userInfo">
            <div className="userProfileImage">

            </div>
            <div className="userDetails">
                <div className="userName">
                    <div>
                        <h3>Rohim Akhand</h3>
                        <div className='userInfoSection'>
                            <img src={bronzeContributorIcon} />
                            <p>Bronze Contributor </p>
                        </div>
                        <div className='userInfoSection'>
                            <img src={moderatorIcon} />
                            <p>Moderator </p>
                        </div>
                    </div>
                    <p>Senior Officer, VAT Audit and Intelligence, Dhaka Head Office</p>
                    <p>2 hr ago</p>

                </div>
            </div>
        </div>
        <div className="content">
        What is the procedure for completing and submitting Form-1120 in the Mirpur area, and what documents are required along with it, and what is the deadline for its submission?
        </div>
        
        <img src={postImage} />
        
        <div className="likeComment">
            <div >
                <div className="like">
                    <img src={postLike} />
                    <span>13</span>
                </div>

                <div className="like">
                    <img src={postComment} />
                    <span>13</span>
                </div>

                <div className="fav">
                    <img src={postFav} />
                </div>
            </div>

            <div>
                <p>Questions </p>
                <img src={postCheckGreenCheckMark} />
            </div>
        </div>
        <div className="comment">
            {
                comment == '' ? <> </> : 
                
                <div>
                    <img src= {comment.profileIcon} />
                    <div>
                        <div>
                            <h3>{comment.name}</h3>
                            <div>
                                <img src={comment.contribution.icon} />
                                <p> {comment.contribution.type} </p>
                            </div>
                          
                        </div>
                        <p>{comment.commentMessage}</p>
                    </div>
                </div>
            }
        </div>
      </div>
    );
  }