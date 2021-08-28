import Post from './Post'
import Get from './Get'
import Put from './Put'
import Delete from './Delete'

// POST
const postNewsBlog = (data) => Post('posts', false, data)

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false)
const getComments = () => Get('comments', true)

// PUT
const putNewsBlog = (data) => Put('posts', false, data)

// DELETE
const deleteNewsBlog = (data) => Delete('posts', false, data)

const API = {
    getNewsBlog,
    getComments,
    postNewsBlog,
    putNewsBlog,
    deleteNewsBlog,
}

export default API;

