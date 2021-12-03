import React, {useEffect, useState} from 'react';
import "./style.css"

// Components
import PageContainer from "../../components/PageContainer";
import BarGraph from "../../components/Graphs/Bar";
import LineGraph from "../../components/Graphs/Line";
import GraphContainer from "../../components/GraphContainer";
import TableOpa from '../../components/Table';
import DonutChart from "../../components/Graphs/Donut";

// Mocks
import mockDonutData from '../../assets/mocks/mockDonutGraphData.json';
import data from '../../assets/mocks/mockData.json';
import lineData from '../../assets/mocks/mockLineGraphData.json';

// Http
import getAllCompanies from '../../api/getAllCompanies';
import scrapeAllCompanies from "../../api/scrapeAllCompanies";

// Utils
import {prepareDataForLineGraphAllCompanies} from "../../utils/prepareDataForLineGraph";
import {prepareDataForBarGraphAllCompanies} from "../../utils/prepareDataForBarGraph";
import {prepareDataForDonutChart} from '../../utils/prepareDataForDonutChart';

const Dashboard = () => {
    const [ refresh, setRefresh ] = useState(false);
    const [ companiesData, setCompaniesData ] = useState([]);
    const [ lineGraphData, setLineGraphData ] = useState([]);
    const [ barGraphData, setBarGraphData ] = useState([]);
    const [ donutGraphData, setDonutGraphData ] = useState([]);

    useEffect(async () => {
        let data = await getAllCompanies();
        setCompaniesData(data);

    }, [refresh]);

    useEffect(() => {
        if(companiesData.length > 0){
            setDonutGraphData(prepareDataForDonutChart(companiesData));
            setLineGraphData(prepareDataForLineGraphAllCompanies(companiesData));
            setBarGraphData(prepareDataForBarGraphAllCompanies(companiesData));
        }

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
                        <GraphContainer subtitle="overview" title="Reclamaçoes">
                            <DonutChart data={donutGraphData} />
                        </GraphContainer>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Dashboard;