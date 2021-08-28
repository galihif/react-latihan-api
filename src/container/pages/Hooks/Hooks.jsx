import React, {useState, Component, useEffect} from 'react'

// class Hooks extends Component{
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     // Method ketika pertama kali komponen muncul
//     componentDidMount(){
//         document.title = `Title change : ${this.state.count}`
//     }

//     // Method ketika ada perubahan dalam komponen
//     componentDidUpdate(){
//         document.title = `Title change : ${this.state.count}`
//     }

//     //Method ketika komponen menghilang dari browser
//     componentWillUnmount(){
//         document.title = "React App"
//     }
//     render(){
//         return(
//             <div>
//                 <p>Nilai saya : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0)
    const [state, setState] = useState(100)

    // Use effect seperti method componentDidMount, return seperti componentWillUnmount
    useEffect(() => {
        document.title = `Title change : ${count}`
        return () => {
            document.title = 'React App'
        }
    })

    return(
        <div>
            <p>Nilai saya : {count}</p>
            <p>Uang saya : {state}</p>
            <button onClick={() => setCount(count + 10)}>Update nilai</button>
            <button onClick={() => setState(state + 100)}>Update uang</button>
        </div>
    )
}

export default Hooks;