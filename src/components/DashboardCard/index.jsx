import React from 'react';
import './style.css';

// MUI
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

/*
* upOrDown: If growth is positive[1] or negative[0]
* */
const DashboardCard = ({title, content, percentage, upOrDown, sinceLabel, icon, iconContainerBgColor}) => {
    return (
        <div className="dashboard-card-container">
            <div className="dashboard-card-row-1">
                <div className="dashboard-card-col-1">
                    <p>{title.toUpperCase()}</p>
                    <h3>{content}</h3>
                </div>
                <div className="dashboard-card-col-2">
                    <div className="icon-container" style={{backgroundColor: iconContainerBgColor}}>
                        {icon}
                    </div>
                </div>
            </div>
            <div className="dashboard-card-row-2">
                <div className="grow-percentage">
                    {upOrDown === 0 ? <TrendingDownIcon fontSize="small" style={{color: "#fa2d2d"}}  /> : <TrendingUpIcon fontSize="small" style={{color: "#1df127"}} /> }
                    <p style={ upOrDown === 0 ? {color:"#fa2d2d"}: {color:"#1df127"} }>{percentage}</p>
                </div>
                <p>{sinceLabel}</p>
            </div>

        </div>
    );
};

export default DashboardCard;