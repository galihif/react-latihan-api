import React,{ Component, Fragment } from "react";
import axios from 'axios'

class DetailPost extends Component{
    state = {
        post: [],
        id: this.props.match.params.id
    }
    getPostAPI = () => {
        axios.get(`http://localhost:3004/posts/${this.state.id}`)
            .then((result) => { 
                this.setState({
                    post: result.data
                })
            })
    }

    componentDidMount() {
        this.getPostAPI()
    }


    render(){
        return(
            <Fragment>
                <p>Detail Post</p>
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://placeimg.com/200/150/tech" alt="dummy" />
                    </div>
                    <div className="content">
                        <p className="title">{this.state.post.title}</p>
                        <p className="desc">{this.state.post.body}</p>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default DetailPost;