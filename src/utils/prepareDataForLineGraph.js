import { DateTime } from "luxon/build/es6/luxon";

const prepareDataForLineGraphSingleCompany = (data) => {
    let formattedData = [];
    let companyObject = { "id": data[0].empresa_nome, "color": data[0].empresa_color, "data": [] }

    data.forEach(company => {
        let formattedDate = DateTime.fromISO(company.updated).toLocaleString({ month: "short", day: 'numeric' })
        let coor = { "x": formattedDate, "y": parseInt(company.reclamacoes_total) };
        companyObject.data.push(coor);
    });

    formattedData.push(companyObject);

    return formattedData;
};

const prepareDataForLineGraphAllCompanies = (data) => {
    let formattedData = [];
    let groupedRecords = [];

    for(const r of data) {
        if(!groupedRecords[r.empresa_id]) groupedRecords[r.empresa_id] = [];
        groupedRecords[r.empresa_id].push(r);
    }

    groupedRecords.forEach(companies => {
        let companyObject = {"id": "", "color": "", "data": []};

        companies.forEach(record => {
            companyObject.id = record.empresa_nome;
            companyObject.color = record.empresa_color;

            let formattedDate = DateTime.fromISO(record.updated).toLocaleString({ month: "short", day: 'numeric' })
            let coor = { "x": formattedDate, "y": parseInt(record.reclamacoes_total) };
            companyObject.data.push(coor);

            console.log(record)
        })
        formattedData.push(companyObject);
    });

    return formattedData;
};

export {prepareDataForLineGraphSingleCompany, prepareDataForLineGraphAllCompanies};

