import React,{ Component, Fragment } from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubeCompPage extends Component{
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp
                    time="10.12"
                    title="IOTNBO Eps 1"
                    desc="20x ditonton, 10 hari yang lalu" />
                <YoutubeComp
                    time="0.12"
                    title="IOTNBO Eps 2"
                    desc="200x ditonton, 10 hari yang lalu" />
                <YoutubeComp
                    time="10.10"
                    title="IOTNBO Eps 3"
                    desc="2x ditonton, 10 hari yang lalu" />
                <YoutubeComp
                    time="20.00"
                    title="IOTNBO Eps 4"
                    desc="100x ditonton, 10 hari yang lalu" />
                <YoutubeComp />
            </Fragment>
            
        )
    }
}

export default YoutubeCompPage;