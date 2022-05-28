import React, { Fragment, PureComponent } from "react";
import { NavLink } from 'react-router-dom'



const LinkablePictures = () => {
    return (
        <div className="">
            <NavLink to="/userpage" className='home-button' ><a href="" className="logo"><img className="logo" src={logo} /></a></NavLink>
        </div>
    );
  };