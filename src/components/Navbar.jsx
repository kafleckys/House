import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
//2c2c2c 8f8f8f
    const navigate =useNavigate();
    const location =useLocation();

    const pathMatchRoute =(route) =>{
   if(route === location.pathname)
   return true;
    }
  return (
    <div>
      <footer className="navbar">
        <nav className="navbarNav">
          <ul className="navbarListItems">
            <li className="navbarListItem">
              <ExploreIcon 
             
              fill= {pathMatchRoute('/')?"#2c2c2c":"#8f8f8f"}
               width="36px" height="36px" onClick={()=>{
                navigate('/')
              }} />
              <p className={pathMatchRoute('/')?'navbarListItemNameActive':'navbarListItemNav'}>Explore</p>
            </li>

            <li className="navbarListItem">
              <OfferIcon fill={pathMatchRoute('/offers')?"#2c2c2c":"#8f8f8f"} width="36px" height="36px" onClick={()=>{
                navigate('/offers')
              }}/>
              <p className={pathMatchRoute('/offers')?'navbarListItemNameActive':'navbarListItemNav'}>Offer</p>
            </li>

            <li className="navbarListItem">
              <PersonOutlineIcon fill={pathMatchRoute('/profile')?"#2c2c2c":"#8f8f8f"} width="36px" height="36px" 
                onClick={()=>{
                    navigate('/profile')
                }}
              />
              <p className={pathMatchRoute('/profile')?'navbarListItemNameActive':'navbarListItemNav'}>Profile</p>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Navbar;
