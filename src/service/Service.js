
import axios from 'axios';



const BASIC_API_URL = 'http://localhost:8090'
class DataService {


  getBookData = () => {
    return axios.get(`${BASIC_API_URL}/books`);
  }

  getFilteredData=(searchOn,sortOn)=>{
      return axios.get(`${BASIC_API_URL}/books/filter`,{params:{search:searchOn,sort:sortOn}})
  }

  getSortedBook=(sortingValue)=>{
    return axios.get(`${BASIC_API_URL}/books/sort`,{params:{field:sortingValue}});
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

  addtoCart=(cart)=>{
    console.log(localStorage.getItem('token'));
    return axios({
        headers:{Token:localStorage.getItem('token')},
        method:'post',
        url:`${BASIC_API_URL}/book`,
        data:cart
    });
    
  }

  getCartBook=()=>{

    return axios({
      headers:{Token:localStorage.getItem('token')},
      method:'get',
      url:`${BASIC_API_URL}/book`,
  });
  
  }

  placeOrder=()=>{

    return axios({
      headers:{Token:localStorage.getItem('token')},
      method:'put',
      url:`${BASIC_API_URL}/cart`
  });
  
  }

  removeBook=(id)=>{

    return axios({
      headers:{Token:localStorage.getItem('token')},
      method:'DELETE',
      url:`${BASIC_API_URL}/book/${id}`
  });
  
  }
  getMyOrder=()=>{
    return axios({
      headers:{Token:localStorage.getItem('token')},
      method:'get',
      url:`${BASIC_API_URL}/order/details`
  });
  }

  addUserDetails=(object)=>{
    return axios({
      headers:{Token:localStorage.getItem('token')},
      method:'post',
      url:`${BASIC_API_URL}/customerdetail`,
      data:object
  });
  
  }

  getCustomerDetail=()=>{
    return axios({
      headers:{Token:localStorage.getItem('token')},
      method:'get',
      url:`${BASIC_API_URL}/customerdetail`
  });
}

forgetPassword(emailId){

    return axios.get(`${BASIC_API_URL}/forget`,{params:{email:emailId}}
    
    );
}


resetPassword=(password , token)=>{
  return axios({
  headers:{Token:token},
  method:'put',
  url:`${BASIC_API_URL}/reset/password?password=`+password
});    
}


}
export default new DataService()