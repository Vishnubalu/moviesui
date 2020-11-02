import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import SideNav from "react-simple-sidenav";
import {useStyle} from "../constants";


function SideMenu(props) {
    const items = ['Movies', 'Genres', 'Contact Us', 'Services', 'Feedback', 'Sign out']
    const button = useStyle();
    const [showNav, setShowNav] = useState(false);
    const clicked = (event) => {
        console.log(event)
    };

    useEffect(() => {
        setShowNav(true);
    }, []);

    return <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title="Hi, Vishnuvardhan"
        items={[
            items.map((item) =>
                <Button style={{textTransform: "none"}} className={button.menuButton}>
                    {item.toString()}
                </Button>
            )
        ]}
        titleStyle={{backgroundColor: '#006666', marginTop: "50px", paddingLeft: "100px"}}
        itemStyle={{listStyle: "none"}}
        onClick={clicked}
    />;
}

export default SideMenu;