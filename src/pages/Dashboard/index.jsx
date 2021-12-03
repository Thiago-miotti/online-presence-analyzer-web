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
import scrapeAllCompanies from "../../api/scrapeAllCompanies";

// Utils
import {prepareDataForLineGraphAllCompanies} from "../../utils/prepareDataForLineGraph";
import {prepareDataForBarGraphAllCompanies} from "../../utils/prepareDataForBarGraph";

const Dashboard = () => {
    const [ refresh, setRefresh ] = useState(false);
    const [ companiesData, setCompaniesData ] = useState([]);
    const [ lineGraphData, setLineGraphData ] = useState([]);
    const [ barGraphData, setBarGraphData ] = useState([]);

    useEffect(async () => {
        let data = await getAllCompanies();
        setCompaniesData(data);

    }, [refresh]);

    useEffect(() => {
        if(companiesData.length > 0)
            setLineGraphData(prepareDataForLineGraphAllCompanies(companiesData));
            setBarGraphData(prepareDataForBarGraphAllCompanies(companiesData));

    }, [companiesData]);

    const runScrapeService = () => {
        scrapeAllCompanies().then(res => {
            setRefresh(true);
        })
    }

    return (
        <PageContainer title="Dashboard" updateFunctionCall={runScrapeService}>
            <div className="dashboard-main-container">
                <div className="dashboard-grid-row-2">
                    <div className="dashboard-col-1 graph-max-size">
                        <GraphContainer subtitle="overview" title="Reclamaçoes respondidas por dia">
                            <BarGraph data={barGraphData} colors={['#21c25e', '#ea1d2c', "#fed525", "#0e89ff", "#820ad1", "#fee600" ]} keys={['PicPay', 'Ifood', "Mercado Livre", "Magalu", "Nubank", "Correios" ]}/>
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
                        <GraphContainer subtitle="overview" title="Reclamaçoes não respondidas">
                            <LineGraph data={lineGraphData} colors={['#21c25e', '#ea1d2c', "#fed525", "#0e89ff", "#820ad1", "#fee600" ]} />
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