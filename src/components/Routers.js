import Main from "./Main";
import React from 'react';
import ShoppingCart from "./ShoppingCart";
import Customer from "./Customer";
import OrderSuccessful from "./OrderSuccessful";
import OrderSummary from "./OrderSummary";
import UserLogin from "./UserLogin";
import {Router,Route,Switch} from 'react-router-dom';
import BookCard from "./BookCard";
import history from "./history";

class Routers extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router history={history}>
            <Switch>
                <Route path="/books" component={Main} exact={true}/>
                <Route path="/main" component={BookCard} exact={true}/>
                <Route path="/cart" component={ShoppingCart}/>
                <Route path="/customerdetails" component={Customer}/>
                <Route path="/ordersummary" component={OrderSummary}/>
                <Route path="/order/successful" component={OrderSuccessful}/>
                <Route path="/" component={UserLogin}/>
            </Switch>
            </Router>
        )
    }
}
export default Routers;