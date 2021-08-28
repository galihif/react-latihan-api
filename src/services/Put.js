import axios from 'axios'
import { OnlineRoot, RootPath } from "./Config";

const Put = (path,root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlineRoot : RootPath}/${path}/${data.id}`, data)
            .then((result) => {
                resolve(result.data)
            }, (error) => {
                reject(error)
            })
    })
    return promise
}

export default Put;
