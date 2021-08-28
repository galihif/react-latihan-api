// Libraries
import React, { Component, Fragment } from 'react'
// import axios from 'axios'

// Styles
import './BlogPost.css'

// Pages
import Post from '../../../component/Post/Post'
import API from '../../../services'
class BlogPost extends Component{

    // State untuk menyimpan data
    state = {
        post: [],
        formBlogPost:{
            id: 1,
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: false,
        comments: [],
    }

    getPostAPI = () => {
        API.getNewsBlog()
            .then(result => {
                console.log(result)
                this.setState({
                    post: result,
                })
            })
        API.getComments()
            .then(result => {
                this.setState({
                    comments: result
                })
            })
    }

    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost)
            .then((res) => {
                this.getPostAPI()
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1,
                    }
                })
            }, (error) => {
                console.log('error: ', error)
            })
    }

    putDataToAPI = () => {
        API.putNewsBlog(this.state.formBlogPost)
            .then((result) => {
                this.getPostAPI()
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1,
                    },
                })
            })
    }

    handleRemove = (data) => {
        API.deleteNewsBlog(data)
            .then(() => {
                this.getPostAPI()
            })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost}
        if (!this.state.isUpdate){
            let timestamp = new Date().getTime();
            formBlogPostNew['id'] = timestamp
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate){
            this.putDataToAPI()
        } else{
            this.postDataToAPI()
        }
    }  

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount(){
        this.getPostAPI()
    }

    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" value={this.state.formBlogPost.title} onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return (
                            <div>
                                <p>{comment.body}</p>
                                <hr />
                            </div>
                        )
                    })
                } */}
                {
                    this.state.post.map(post => {
                        
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost