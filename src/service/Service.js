
import axios from 'axios';



const BASIC_API_URL = 'http://localhost:8090'
class DataService {


  getBookData = () => {
    return axios.get(`${BASIC_API_URL}/books`);
  }

  getSortedBook=(sortingValue)=>{
    return axios.get(`${BASIC_API_URL}/books/field`,{params:{field:sortingValue}});
  }

  sendMail = (data) => {
    return axios.post(`${BASIC_API_URL}/mail`,data );
  }

  updateQuantity=(bookdata)=>{
    return axios.put(`${BASIC_API_URL}/book`,bookdata );
  }

  registerUser=(user)=>{
    return axios.post(`${BASIC_API_URL}/user`,user );
  }


  login=(credentials)=>{
    return axios.post(`${BASIC_API_URL}/login`,credentials );
  }
}
export default new DataService()
