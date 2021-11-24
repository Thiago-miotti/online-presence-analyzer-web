import React from 'react';
import './style.css';

// MUI
import {Divider} from "@material-ui/core";

const GraphContainer = ({title, subtitle, children}) => {
    return (
        <div className="graph-container">
            <div className="graph-container-title-container">
                <p>{subtitle.toUpperCase()}</p>
                <h2>{title}</h2>
            </div>
            {/*<Divider />*/}
            <div className="graph-content">
                {children}
            </div>
        </div>
    );
};

export default GraphContainer;