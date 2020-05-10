
import axios from 'axios';



const BASIC_API_URL = 'http://localhost:8080'
class DataService {


  getBookData = () => {
    return axios.get(`${BASIC_API_URL}/data`);
  }


}
export default new DataService()
