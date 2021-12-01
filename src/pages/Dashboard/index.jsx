import React from 'react';
import "./style.css"

import data from '../../assets/mockData.json';
import lineData from '../../assets/mockLineGraphData.json';

// Components
import PageContainer from "../../components/PageContainer";
import BarGraph from "../../components/Graphs/Bar";
import LineGraph from "../../components/Graphs/Line";
import GraphContainer from "../../components/GraphContainer";
import TableOpa from '../../components/Table';

// MUI
import TimelineIcon from '@material-ui/icons/Timeline';
import PieChartIcon from '@material-ui/icons/PieChart';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';

const Dashboard = () => {
    return (
        <PageContainer title="Dashboard">
            <div className="dashboard-main-container">
                <div className="dashboard-grid-row-2">
                    <div className="dashboard-col-1 graph-max-size">
                        <GraphContainer subtitle="overview" title="Numero de reclamaçoes">
                            <BarGraph data={data.data} />
                        </GraphContainer>
                    </div>
                    <div className="dashboard-col-2 graph-max-size">
                        <GraphContainer subtitle="overview" title="Ranking das empresas ">
                            <TableOpa />
                        </GraphContainer>
                    </div>
                </div>
                <div className="dashboard-grid-row-2">
                    <div className="dashboard-col-1 graph-max-size">
                        <GraphContainer subtitle="overview" title="Numero de reclamaçoes">
                            <LineGraph data={lineData} />
                        </GraphContainer>
                    </div>
                    <div className="dashboard-col-2 graph-max-size">
                        <GraphContainer subtitle="overview" title="Numero de reclamaçoes">
                            <BarGraph data={data.data} />
                        </GraphContainer>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Dashboard;