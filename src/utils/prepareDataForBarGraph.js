import { DateTime } from "luxon/build/es6/luxon";

const prepareDataForBarGraphSingleCompany = (data) => {
    let formattedData = [];

    data.forEach(record => {
        let formattedDate = DateTime.fromISO(record.updated).toLocaleString({ month: "short", day: 'numeric' })
        let companiesData = {"dia": formattedDate, "respondidas": record.respondidas_total, "reclamacoes": record.reclamacoes_total};

        formattedData.push(companiesData);
    })

    return formattedData;
}

const prepareDataForBarGraphAllCompanies = (data) => {
    let formattedData = [];
    let groupedRecords = [];
    let answeredPerDay = [];
    let days = [];

    for(const r of data) {
        r.updated = DateTime.fromISO(r.updated).toLocaleString({ month: "short", day: 'numeric' });

        if(!groupedRecords[r.empresa_id]) groupedRecords[r.empresa_id] = [];
        groupedRecords[r.empresa_id].push(r);
    }

    for(let i = 1; i < groupedRecords.length ; i++){
        answeredPerDay.push({"nome": groupedRecords[i][0].empresa_nome, "total": groupedRecords[i].slice(1).map((v, a) => v.respondidas_total - groupedRecords[i][a].respondidas_total)});
        groupedRecords[i].forEach(day => {
            if (!days.includes(day.updated)) days.push(day.updated);
        });
    }

    days.splice(-1); // Removes last item

    let aux = {};
    for(let i = 0; i < answeredPerDay.length ; i++){
        for(let a = 0; a < answeredPerDay[i].total.length ; a++){
            if(!aux[days[a]]){
                let newRecord = {};
                newRecord.dia = days[a];
                newRecord[answeredPerDay[i].nome] = answeredPerDay[i].total[a];
                aux[days[a]] = newRecord;
                formattedData.push(newRecord);
            }
            else{
                let existingValue = aux[days[a]];
                existingValue[answeredPerDay[i].nome] = answeredPerDay[i].total[a];
            }
        }
    }

    return formattedData;
}

export { prepareDataForBarGraphSingleCompany, prepareDataForBarGraphAllCompanies }