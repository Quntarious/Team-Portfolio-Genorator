import React, { Fragment, PureComponent } from "react";
import { NavLink } from 'react-router-dom';



const LinkablePictures = () => {
    return (
        <div className="">
            <NavLink to="/userpage" className='home-button' ><a href="" className="photo"><img className="photo" src={logo} /></a></NavLink>
        </div>
    );
  };

  export default LinkablePictures