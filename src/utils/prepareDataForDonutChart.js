import { getLatest } from "./getLatestDataForCard";

const prepareDataForDonutChart = (data) => {
    let formattedData = [];
    let groupedRecords = [];

    for(const r of data) {
        if(!groupedRecords[r.empresa_id]) groupedRecords[r.empresa_id] = [];
        groupedRecords[r.empresa_id].push(r);
    }

    groupedRecords.forEach(companies => {
        let companyObject = {"id": "", "label": "" ,"value": ""};

        companies.forEach(record => {
            companyObject.id = record.empresa_nome;

            if(record.empresa_nome === "Magazine Luiza")
                companyObject.label = "Magalu";
            else
                companyObject.label = record.empresa_nome;
        })

        const latestValue = getLatest(companies);
        if(latestValue)
            companyObject.value = latestValue.reclamacoes_total;

        formattedData.push(companyObject);
    });



    return formattedData;

}

export {prepareDataForDonutChart};
