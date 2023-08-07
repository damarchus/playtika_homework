import {NavLink, useLocation} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import LeftSideMenuChild from "./LeftSideMenuChild";

const LeftSideMenuItem = ({menuItem, padding}) => {
    const location = useLocation();
    const[isActive, setActive] = useState(false);

    useEffect(() => {
        setActive(location.pathname.includes(menuItem.url))
    }, [location.pathname, menuItem.url])

    return(
      <Fragment>
          <NavLink className="menuItem" key={menuItem.id} to={menuItem.url} >{menuItem.text}</NavLink>
          <LeftSideMenuChild menuChildren={menuItem.children} isActive={isActive} padding={padding + 10} />
      </Fragment>
    );
}

export default LeftSideMenuItem;