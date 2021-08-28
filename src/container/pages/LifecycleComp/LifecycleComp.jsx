import React, {Component, Fragment} from 'react'
import './LifecycleComp.css'
// import { connect } from 'react-redux'
import { GlobalConsumer } from "../../../context/context";

class LifecycleComp extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000)
        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps: ',nextProps)
        console.log('nextState: ',nextState)
        console.log('thisState: ',this.state)
        console.groupEnd()
        if (nextState.count %2 === 0){
            return false
        } else{
            return true
        }
        
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render(){
        console.log('render')
        return(
            <Fragment>
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
                {/* <p>Total Order: {this.props.order}</p> */}
                <p>Total Order: {this.props.state.totalOrder}</p>
            </Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }


// export default connect(mapStateToProps)(LifecycleComp)
export default GlobalConsumer(LifecycleComp)