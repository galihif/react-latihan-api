import axios from 'axios'
import { OnlineRoot, RootPath } from "./Config";

const Delete = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? OnlineRoot : RootPath}/${path}/${data}`)
            .then((result) => {
                resolve(result.data)
            }, (error) => {
                reject(error)
            })
    })
    return promise
}

export default Delete;
