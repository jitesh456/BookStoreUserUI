import Main from "./Main";
import React from 'react';
import ShoppingCart from "./ShoppingCart";
import Customer from "./Customer";
import OrderSuccessful from "./OrderSuccessful";
import OrderSummary from "./OrderSummary";
import UserLogin from "./UserLogin";
import {Router,Route,Switch} from 'react-router-dom';
import BookCard from "./BookCard";
import MyOrder from "./MyOrder";
import history from "./history";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";
import VerifyEmail from "./VerifyEmail";
class Routers extends React.Component{
    
    render(){
        return (
            <Router history={history}>
            <Switch>
                <Route path="/main" component={BookCard} exact={true}/>
                <Route path="/cart" component={ShoppingCart}/>
                <Route path="/customerdetails" component={Customer}/>
                <Route path="/ordersummary" component={OrderSummary}/>
                <Route path="/order/successful" component={OrderSuccessful}/>
                <Route path="/myorder" component={MyOrder}/>
                <Route path="/reset/password" component={ResetPassword}/>
                <Route path="/forget/password" component={ForgetPassword}/>
                <Route path="/user/login" component={UserLogin}/>
                <Route path="/verify/account" component={VerifyEmail}/>
                <Route path="/" component={Main}/>
            </Switch>
            </Router>
        )
    }
}
export default Routers;