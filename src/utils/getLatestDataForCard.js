import { DateTime } from "luxon/build/es6/luxon";

const getLatestDataForCard = (data, stat) => {
    const latestData = getLatest(data);
    const chosenStat = chooseStat(latestData, stat);

    return chosenStat;
}

const getLatest = (data) => {
    let latest;

    for(let i = 1; i < data.length; i++){
        let date = DateTime.fromISO(data[i].updated);
        let prevDate = DateTime.fromISO(data[i - 1].updated);

        if(date.startOf("day") >= prevDate.startOf("day"))
            latest = data[i];
    }

    return latest;
}

const chooseStat = (data, chosenStat) => {
    switch (chosenStat) {
        case "reputacao_geral":
            return data.reputacao_geral;

        case "nota":
            return data.nota;

        case "voltaria_negocio":
            return data.voltaria_negocio;

        case "indice_solucao":
            return data.indice_solucao;
    }
}

export {getLatestDataForCard, getLatest};