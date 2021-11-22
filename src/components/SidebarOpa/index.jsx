import React from 'react';
import "./style.css"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import NubankLogo from "../../Assets/LogoNubank.png";
import IfoodLogo from "../../Assets/LogoIfood.png";
import Magalulogo from "../../Assets/LogoMagalu.png";
import MercadoLivrelogo from "../../Assets/LogoMercadoLivre.png";
import Correioslogo from "../../Assets/LogoCorreios.png";
import PicPaylogo from "../../Assets/LogoPicPay.png";
import MetrixLogo from "../../Assets/metrix-logo.jpeg";

// React Router
import { useNavigate } from 'react-router-dom';

const SidebarOpa = () => {
    let navigate = useNavigate();

    return(
        <div className="sidebar-container">
            <div className="logo-container">
                <img alt="metrix logo" src={MetrixLogo} />
            </div>
            <List>
                <ListItem button key={"NuBank"} onClick={() => navigate("/nubank")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={NubankLogo} className="company-logos" />
                    </ListItemIcon>
                    <ListItemText primary="NuBank"/>
                </ListItem>
                <ListItem button key={"Mercado Livre"} onClick={() => navigate("/mercadolivre")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={MercadoLivrelogo}/>
                    </ListItemIcon>
                    <ListItemText primary="Mercado Livre"/>
                </ListItem>
                <ListItem button key={"Ifood"} onClick={() => navigate("/ifood")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={IfoodLogo}/>
                    </ListItemIcon>
                    <ListItemText primary="Ifood"/>
                </ListItem>
                <ListItem button key={"Dashboard"} onClick={() => navigate("/")}>
                    <ListItemIcon>
                        <DashboardIcon  style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
                <ListItem button key={"Magalu"} onClick={() => navigate("/magalu")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={Magalulogo}/>
                    </ListItemIcon>
                    <ListItemText primary="Magalu"/>
                </ListItem>
                <ListItem button key={"Correios"} onClick={() => navigate("/correios")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={Correioslogo}/>
                    </ListItemIcon>
                    <ListItemText primary="Correios"/>
                </ListItem>
                <ListItem button key={"PicPay"} onClick={() => navigate("/picpay")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={PicPaylogo}/>
                    </ListItemIcon>
                    <ListItemText primary="PicPay"/>
                </ListItem>
            </List>

        </div>
    );
}


export default SidebarOpa;