import React, {useEffect, useState} from 'react';
import "./style.css";

// Components
import PageContainer from "../../components/PageContainer";
import DashboardCard from "../../components/DashboardCard";
import LineGraph from "../../components/Graphs/Line";
import GraphContainer from "../../components/GraphContainer";


// Router
import { useParams } from "react-router-dom";

// MUI
import TimelineIcon from "@material-ui/icons/Timeline";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ScatterPlotIcon from "@material-ui/icons/ScatterPlot";
import PieChartIcon from "@material-ui/icons/PieChart";

// Http
import getSingleCompany from '../../api/getSingleCompany';

// Utils
import { selectCompanyInfoById, selectCompanyInfoByUrlName } from "../../utils/selectCompanyInfo";
import prepareDataForLineGraph from "../../utils/prepareDataForLineGraph";
import getLatestDataForCard from "../../utils/getLatestDataForCard";

function firstLetterUppercase(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function splitDash(str) {
    str = firstLetterUppercase(str);
    return str
        .split('-')
        .reduce((a, b) => firstLetterUppercase(a) + ' ' + firstLetterUppercase(b));
}

const Company = () => {
    const [ companyData, setCompanyData ] = useState([]);
    const [ lineGraphData, setLineGraphData ] = useState([]);

    const { company }  = useParams();

    useEffect(async () => {
        let companyObjectInfo = selectCompanyInfoByUrlName(company);
        let data = await getSingleCompany(companyObjectInfo.id)
        setCompanyData(data);

    }, [company]);

    useEffect(() => {
        if(companyData.length > 0){
            let preparedData = prepareDataForLineGraph(companyData);
            setLineGraphData(preparedData);
        }

    }, [companyData]);

    return (
        <PageContainer title={splitDash(company)} backgroundColor={selectCompanyInfoByUrlName(company).backgroundColor}  fontColor={selectCompanyInfoByUrlName(company).fontColor}>
            <div className="company-main-container">
                <div className="company-grid-row-1">
                    <DashboardCard title="Nota" content={companyData.length > 0 ? getLatestDataForCard(companyData, "nota") : null} icon={<TimelineIcon style={{color: "#fff"}}/>} upOrDown="1" iconContainerBgColor="#21c25e" percentage="54%" sinceLabel="since yesterday"/>
                    <DashboardCard title="Reputaçao Geral" content={companyData.length > 0 ? getLatestDataForCard(companyData, "reputacao_geral") : null} icon={<EqualizerIcon style={{color: "#fff"}}/>} upOrDown="1" iconContainerBgColor="#ea1d2c" percentage="54%" sinceLabel="since yesterday"/>
                    <DashboardCard title="Voltaria a negocio" content={companyData.length > 0 ? getLatestDataForCard(companyData, "voltaria_negocio") : null} icon={<ScatterPlotIcon style={{color: "#fff"}}/>} upOrDown="1" iconContainerBgColor="#fed525" percentage="54%" sinceLabel="since yesterday"/>
                    <DashboardCard title="Indice de solução" content={companyData.length > 0 ? getLatestDataForCard(companyData, "indice_solucao") : null} icon={<PieChartIcon style={{color: "#fff"}}/>} upOrDown="1" iconContainerBgColor="#0e89ff" percentage="54%" sinceLabel="since yesterday"/>
                </div>

                <div className="dashboard-col-1 graph-max-size">
                    <GraphContainer subtitle="overview" title="Numero de reclamaçoes">
                        <LineGraph data={lineGraphData} />
                    </GraphContainer>
                </div>
            </div>
        </PageContainer>
    );
};

export default Company;