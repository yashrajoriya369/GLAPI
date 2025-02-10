import React from 'react';
import "./Home.css";
import { BsChatRightText } from "react-icons/bs";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoReorderThreeOutline } from "react-icons/io5";
import { CgStories } from "react-icons/cg";
import { PiShootingStarLight } from "react-icons/pi";
import { RiMemoriesFill } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { GiEgyptianProfile } from "react-icons/gi";
import group_Img from "../../images/group.jpg";

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='first-sub-container'>
          <div className='sub-container-first-nav'>
            <div className='home'>
              <span><CiHome
                className='home-icon' /></span>Home</div>
            <div className='profile'><span><GiEgyptianProfile className='profile-icon' />
            </span>Profile</div>
          </div>
          <hr />
          <div className='sub-container-second-nav'>
            <p>Favorites</p>
            <ul className='nav-list'>
              <li><span><BsChatRightText className='icons' />
              </span>Messages</li>
              <li><span><LiaUserFriendsSolid className='icons' />
              </span>Friends</li>
              <li><span><IoReorderThreeOutline className='icons' />
              </span>Feed</li>
              <li><span><CgStories className='icons' />
              </span>Stories</li>
              <li><span><PiShootingStarLight className='icons' />
              </span>Event</li>
              <li><span><RiMemoriesFill className='icons' />
              </span>Memories</li>
            </ul>
            <hr />
          </div>
          <div className='sub-container-third-nav'><p>Groups</p>
              <div>
                <ul>
                  <li><img className='group_Photo' src={group_Img} alt='group_Img' />Group 1</li>
                  <li><img className='group_Photo' src={group_Img} alt='group_Img' />Group 2</li>
                  <li><img className='group_Photo' src={group_Img} alt='group_Img' />Group 3</li>
                </ul>
              </div>
            </div>
        </div>
        <div className='second-sub-container bg-zinc-500'>SECOND</div>
        <div className='third-sub-container bg-zinc-400'>THIRD</div>
      </div>
    </>
  )
}

export default Home
