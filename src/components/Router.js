import Main from "./Main";
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import BookCard from "./BookCard";
// import { Route } from "react-router";

class Router extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Switch>
                <Route path="/" component={Main} exact={true}/>
                <Route path="/books" component={BookCard} exact={true}/>
            </Switch>
        )
    }
}
export default Router;