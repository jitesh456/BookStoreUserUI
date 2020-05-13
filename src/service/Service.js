
import axios from 'axios';



const BASIC_API_URL = 'http://localhost:8090'
class DataService {


  getBookData = () => {
    return axios.get(`${BASIC_API_URL}/api/v1/books`);
  }

  getSortedBook=(sortingValue)=>{
    return axios.get(`${BASIC_API_URL}/api/v2/books`,{params:{field:sortingValue}});
  }


}
export default new DataService()
