import React from 'react';
import "./style.css";

// Components
import PageContainer from "../../components/PageContainer";

import { useParams } from "react-router-dom";
import {selectCompanyInfoByUrlName} from "../../utils/selectCompanyInfo";

function firstLetterUppercase(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const Company = () => {
    const { company }  = useParams();

    return (
        <PageContainer title={firstLetterUppercase(company)} backgroundColor={selectCompanyInfoByUrlName(company).backgroundColor}  fontColor={selectCompanyInfoByUrlName(company).fontColor}>
            {/*<h1>{company}</h1>*/}
        </PageContainer>
    );
};

export default Company;