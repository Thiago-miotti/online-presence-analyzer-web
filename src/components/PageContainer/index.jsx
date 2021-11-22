import React from 'react';
import "./style.css"

import RefreshIcon from '@material-ui/icons/Refresh';

const PageContainer = ({title, backgroundColor, fontColor, children}) => {
    return (
        <div className="page-container">
            <div className="page-container-app-bar" style={{backgroundColor: backgroundColor, color: fontColor}}>
                <div className="page-container-title-container">
                    <h1>{title}</h1>
                </div>
                <a><RefreshIcon style={{marginRight: "5px"}}/> Atualizar</a>
            </div>
            {children}
        </div>
    );
};

export default PageContainer;