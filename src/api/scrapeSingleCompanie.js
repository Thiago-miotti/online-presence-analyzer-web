import axios from 'axios';

const BASE_URL = 'http://localhost:5200/api/v1'

const scrapeSingeCompany = async (companieName) => {
    return await axios.get(BASE_URL + `/scrape/${companieName}`)
        .then(response => {

            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}

export default scrapeSingeCompany;