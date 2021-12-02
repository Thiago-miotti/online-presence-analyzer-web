import React, {useEffect, useState} from 'react';
import "./style.css"

import data from '../../assets/mockData.json';
import lineData from '../../assets/mockLineGraphData.json';

// Components
import PageContainer from "../../components/PageContainer";
import BarGraph from "../../components/Graphs/Bar";
import LineGraph from "../../components/Graphs/Line";
import GraphContainer from "../../components/GraphContainer";
import TableOpa from '../../components/Table';

// Http
import getAllCompanies from '../../api/getAllCompanies';

// Utils
import {prepareDataForLineGraphAllCompanies} from "../../utils/prepareDataForLineGraph";

const Dashboard = () => {
    const [ companiesData, setCompaniesData ] = useState([]);
    const [ lineGraphData, setLineGraphData ] = useState([]);

    useEffect(async () => {
        let data = await getAllCompanies();
        setCompaniesData(data);

    }, []);

    useEffect(() => {
        if(companiesData.length > 0)
            setLineGraphData(prepareDataForLineGraphAllCompanies(companiesData));

    }, [companiesData]);

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
                            <LineGraph data={lineGraphData} />
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