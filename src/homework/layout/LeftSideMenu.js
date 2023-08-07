import {NavLink} from "react-router-dom";
import LeftSideMenuItem from "./LeftSideMenuItem";

const menuItems = [
    {id: 0, url: "/", text: "Home"},
    {id: 1, url: "/lesson2", text: "Lesson 2"},
    {id: 2, url: "/lesson3", text: "Lesson 3"},
    {id: 3, url: "/lesson4", text: "Lesson 4"},
    {id: 4, url: "/lesson5", text: "Lesson 5", children: [
            {id: 0, url: "/lesson5/popular", text: "Popular"},
            {id: 1, url: "/lesson5/battle", text: "Battle"},
        ]
    },
]

const LeftSideMenu = () => {
    return(
        <nav className="leftSideMenu">
            <NavLink className="emblem" to="/" />
            {menuItems.map(menuItem =>
                <LeftSideMenuItem key={menuItem.id} menuItem={menuItem} padding={10}/>
            )}
        </nav>
    );
}

export default LeftSideMenu;