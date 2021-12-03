import React, {useEffect, useState} from 'react';
import "./style.css";

// Components
import PageContainer from "../../components/PageContainer";
import DashboardCard from "../../components/DashboardCard";
import LineGraph from "../../components/Graphs/Line";
import GraphContainer from "../../components/GraphContainer";
import BarGraph from "../../components/Graphs/Bar";

// Router
import { useParams } from "react-router-dom";

// MUI
import TimelineIcon from "@material-ui/icons/Timeline";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ScatterPlotIcon from "@material-ui/icons/ScatterPlot";
import PieChartIcon from "@material-ui/icons/PieChart";

// Http
import getSingleCompany from '../../api/getSingleCompany';
import scrapeSingeCompany from "../../api/scrapeSingleCompanie";

// Utils
import { selectCompanyInfoByUrlName } from "../../utils/selectCompanyInfo";
import { prepareDataForLineGraphSingleCompany } from "../../utils/prepareDataForLineGraph";
import { getLatestDataForCard } from "../../utils/getLatestDataForCard";
import { prepareDataForBarGraphSingleCompany } from "../../utils/prepareDataForBarGraph";

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
    const [ refresh, setRefresh ] = useState(false);
    const [ companyData, setCompanyData ] = useState([]);
    const [ lineGraphData, setLineGraphData ] = useState([]);
    const [ barGraphData, setBarGraphData ] = useState([]);

    const { company }  = useParams();

    useEffect(async () => {
        let companyObjectInfo = selectCompanyInfoByUrlName(company);
        let data = await getSingleCompany(companyObjectInfo.id)
        setCompanyData(data);

    }, [company, refresh]);

    useEffect(() => {
        if(companyData.length > 0)
            setLineGraphData(prepareDataForLineGraphSingleCompany(companyData));
            setBarGraphData(prepareDataForBarGraphSingleCompany(companyData));

    }, [companyData]);

    const runScrapeService = () => {
        scrapeSingeCompany(company).then(res => {
            setRefresh(true);
        })
    }

    return (
        <PageContainer title={splitDash(company)} updateFunctionCall={runScrapeService} backgroundColor={selectCompanyInfoByUrlName(company).backgroundColor}  fontColor={selectCompanyInfoByUrlName(company).fontColor}>
            <div className="company-main-container">
                <div className="company-grid-row-1">
                    <DashboardCard title="Nota" content={companyData.length > 0 ? getLatestDataForCard(companyData, "nota") : null} icon={<TimelineIcon style={{color: "#fff"}}/>} upOrDown="1" iconContainerBgColor="#21c25e" percentage={"0%"} sinceLabel="since yesterday"/>
                    <DashboardCard title="Reputaçao Geral" content={companyData.length > 0 ? getLatestDataForCard(companyData, "reputacao_geral") : null} icon={<EqualizerIcon style={{color: "#fff"}}/>} upOrDown="1" iconContainerBgColor="#ea1d2c" percentage={"0%"} sinceLabel="since yesterday"/>
                    <DashboardCard title="Voltaria a negocio" content={companyData.length > 0 ? getLatestDataForCard(companyData, "voltaria_negocio") : null} icon={<ScatterPlotIcon style={{color: "#fff"}}/>} upOrDown="1" iconContainerBgColor="#fed525" percentage={"0%"} sinceLabel="since yesterday"/>
                    <DashboardCard title="Indice de solução" content={companyData.length > 0 ? getLatestDataForCard(companyData, "indice_solucao") : null} icon={<PieChartIcon style={{color: "#fff"}}/>} upOrDown="1" iconContainerBgColor="#0e89ff" percentage={"0%"} sinceLabel="since yesterday"/>
                </div>

                <div className="dashboard-col-1 graph-max-size">
                    <GraphContainer subtitle="overview" title="Numero de reclamações">
                        <LineGraph data={lineGraphData} colors={companyData.length > 0 ? [companyData[0].empresa_color] : null}/>
                    </GraphContainer>
                </div>

                <GraphContainer subtitle="overview" title="Numero de reclamações x Numero de reclamações respondidas">
                    <BarGraph data={barGraphData} keys={['respondidas', 'reclamacoes']} colors={[companyData.length > 0 ? [companyData[0].empresa_color] : null, "#f34c4c"]} />
                </GraphContainer>
            </div>
        </PageContainer>
    );
};

export default Company;