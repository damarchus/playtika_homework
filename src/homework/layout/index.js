import {Outlet} from "react-router-dom";
import LeftSideMenu from "./LeftSideMenu";
import {Fragment} from "react";

const Layout = () => {
    return(
        <Fragment>
            <LeftSideMenu />
            <div className="outlet">
                <Outlet />
            </div>
        </Fragment>
    );
}

export default Layout;