import axios from 'axios';

const BASE_URL = 'http://localhost:5200/api/v1'

const getSingleCompany = async (companyId) => {
    return await axios.get(BASE_URL + `/company/${companyId}`)
        .then(response => {

            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}

export default getSingleCompany;