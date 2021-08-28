// Libraries
import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GlobalProvider  from '../../context/context'

// Pages
import BlogPost from '../pages/BlogPost/BlogPost'
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LifecycleComp from '../pages/LifecycleComp/LifecycleComp'
import Product from '../pages/Product/Product'
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import Hooks from '../pages/Hooks/Hooks'

//Styling
import './Home.css'

class Home extends Component{
    render(){
        return(
            <Router>
                <Fragment>
                    <nav>                      
                        <Link to="/">HomePage</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                        <Link to="/youtube">Youtube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:id" exact component={DetailPost} />
                        <Route path="/product" component={Product}/>
                        <Route path="/lifecycle" component={LifecycleComp}/>
                        <Route path="/youtube" component={YoutubeCompPage}/>
                        <Route path="/hooks" component={Hooks}/>
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default GlobalProvider(Home);