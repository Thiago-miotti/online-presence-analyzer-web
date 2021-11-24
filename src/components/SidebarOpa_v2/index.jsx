import React from 'react';
import "./style.css"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Divider} from "@material-ui/core";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import NubankLogo from "../../assets/LogoNubank.png";
import IfoodLogo from "../../assets/LogoIfood.png";
import Magalulogo from "../../assets/LogoMagalu.png";
import MercadoLivrelogo from "../../assets/LogoMercadoLivre.png";
import Correioslogo from "../../assets/LogoCorreios.png";
import PicPaylogo from "../../assets/LogoPicPay.png";
import MetrixLogo from "../../assets/metrix-logo.jpeg";

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
                <Divider />
                <ListItem button key={"NuBank"} onClick={() => navigate("/nubank")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={NubankLogo} className="company-logos" />
                    </ListItemIcon>
                    <ListItemText primary="NuBank"/>
                </ListItem>
                <Divider />
                <ListItem button key={"Mercado Livre"} onClick={() => navigate("/mercado-livre")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={MercadoLivrelogo}/>
                    </ListItemIcon>
                    <ListItemText primary="Mercado Livre"/>
                </ListItem>
                <Divider />

                <ListItem button key={"Ifood"} onClick={() => navigate("/ifood")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={IfoodLogo}/>
                    </ListItemIcon>
                    <ListItemText primary="Ifood"/>
                </ListItem>
                <Divider />

                <ListItem button key={"Dashboard"} onClick={() => navigate("/")}>
                    <ListItemIcon>
                        <DashboardIcon  style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
                <Divider />

                <ListItem button key={"Magalu"} onClick={() => navigate("/magalu")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={Magalulogo}/>
                    </ListItemIcon>
                    <ListItemText primary="Magalu"/>
                </ListItem>
                <Divider />

                <ListItem button key={"Correios"} onClick={() => navigate("/correios")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={Correioslogo}/>
                    </ListItemIcon>
                    <ListItemText primary="Correios"/>
                </ListItem>
                <Divider />

                <ListItem button key={"PicPay"} onClick={() => navigate("/picpay")}>
                    <ListItemIcon>
                        <img alt="company logo" className="company-logos" src={PicPaylogo}/>
                    </ListItemIcon>
                    <ListItemText primary="PicPay"/>
                </ListItem>
                <Divider />

            </List>

        </div>
    );
}


export default SidebarOpa;