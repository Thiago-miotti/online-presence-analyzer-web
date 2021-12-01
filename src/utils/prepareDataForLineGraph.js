import formatDate from "./formatDate";
import { DateTime } from "luxon/build/es6/luxon";

const prepareDataForLineGraph = (data) => {
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

export default prepareDataForLineGraph;

