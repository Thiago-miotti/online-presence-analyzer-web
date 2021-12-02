import axios from 'axios';

const BASE_URL = 'http://localhost:5200/api/v1'

const getAllCompanies = async () => {
    return await axios.get(BASE_URL + `/company`)
        .then(response => {

            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}

export default getAllCompanies;