import Main from "./Main";
import React from 'react';
import ShoppingCart from "./ShoppingCart";
import Customer from "./Customer";
import OrderSuccessful from "./OrderSuccessful";
import OrderSummary from "./OrderSummary";
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
                <Route path="/" component={Main} exact={true}/>
                <Route path="/books" component={BookCard} exact={true}/>
                <Route path="/cart" component={ShoppingCart}/>
                <Route path="/customerdetails" component={Customer}/>
                <Route path="/ordersummary" component={OrderSummary}/>
                <Route path="/ordersuccessful" component={OrderSuccessful}/>
            </Switch>
            </Router>
        )
    }
}
export default Routers;