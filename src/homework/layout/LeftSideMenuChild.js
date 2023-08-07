import LeftSideMenuItem from "./LeftSideMenuItem";

const LeftSideMenuChild = ({menuChildren, isActive, padding}) => {
    if(menuChildren !== undefined && menuChildren.length > 0) {
        return(
            <div style={{paddingLeft: padding}} hidden={!isActive}>
                {menuChildren.map(menuChild => <LeftSideMenuItem key={menuChild.id} menuItem={menuChild} padding={padding} />)}
            </div>
        );
    }
}

export default LeftSideMenuChild;