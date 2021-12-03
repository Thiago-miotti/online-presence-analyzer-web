import React, {useEffect, useState} from 'react';
import "./style.css"

// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';

// Assets
import NubankLogo from "../../assets/LogoNubank.png";
import IfoodLogo from "../../assets/LogoIfood.png";
import Magalulogo from "../../assets/LogoMagalu.png";
import MercadoLivrelogo from "../../assets/LogoMercadoLivre.png";
import Correioslogo from "../../assets/LogoCorreios.png";
import PicPaylogo from "../../assets/LogoPicPay.png";

// React Router
import {useNavigate} from 'react-router-dom';

// Hooks
import useWindowDimensions from "../../hooks/useWindowDimension";

const SidebarOpa = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const {width} = useWindowDimensions();
    let navigate = useNavigate();

    const minWidth = 600;

    useEffect(() => {
        if (width <= minWidth)
            setSidebarOpen(false);

        if (width > minWidth)
            setSidebarOpen(true);

    }, [width])

    const navigateAndCloseSidebar = (whereTo) => {
        navigate(whereTo);
        if(width <= minWidth)
            setSidebarOpen(!sidebarOpen);
    }

    return (
        <>
            {width <= minWidth ? (
                    <div style={sidebarOpen ? {left: "140px"} : {left: "2px"}} className="hamburger-menu-container"
                         onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <MenuIcon style={{color: "#fff"}}/>
                    </div>
                ) :
                null}
            <Slide direction="right" in={sidebarOpen} mountOnEnter unmountOnExit>
                <div className="sidebar-container"
                     style={!sidebarOpen ? {left: "-111px"} : width <= minWidth ? {left: "10px"} : {left: "50px"}}>

                    <List>
                        <ListItem button key={"NuBank"} onClick={() => navigateAndCloseSidebar("/nubank")}>
                            <ListItemIcon>
                                <img alt="company logo" className="company-logos" src={NubankLogo}
                                     className="company-logos"/>
                            </ListItemIcon>
                        </ListItem>
                        <ListItem button key={"Mercado Livre"}
                                  onClick={() => navigateAndCloseSidebar("/mercado-livre")}>
                            <ListItemIcon>
                                <img alt="company logo" className="company-logos" src={MercadoLivrelogo}/>
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button key={"Ifood"} onClick={() => navigateAndCloseSidebar("/ifood")}>
                            <ListItemIcon>
                                <img alt="company logo" className="company-logos" src={IfoodLogo}/>
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button key={"Dashboard"} onClick={() => navigateAndCloseSidebar("/")}>
                            <ListItemIcon>
                                <DashboardIcon style={{color: "#fff"}} fontSize="large"/>
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button key={"Magalu"} onClick={() => navigateAndCloseSidebar("/magalu")}>
                            <ListItemIcon>
                                <img alt="company logo" className="company-logos" src={Magalulogo}/>
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button key={"Correios"} onClick={() => navigateAndCloseSidebar("/correios")}>
                            <ListItemIcon>
                                <img alt="company logo" className="company-logos" src={Correioslogo}/>
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button key={"PicPay"} onClick={() => navigateAndCloseSidebar("/picpay")}>
                            <ListItemIcon>
                                <img alt="company logo" className="company-logos" src={PicPaylogo}/>
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </div>
            </Slide>
        </>

    );
}


export default SidebarOpa;