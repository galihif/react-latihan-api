import React, {Component, Fragment} from 'react';
import './Product.css'
import CardProduct from './CardProduct/CardProduct'
import { GlobalConsumer } from '../../../context/context';
// import {connect} from 'react-redux'

class Product extends Component{

    // state = {
    //     order: 4,
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue,
    //     })
    // }

    render(){
        console.log(this)
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <div className="trolley">
                        <img src="https://static.thenounproject.com/png/1138102-200.png" alt="" />
                        {/* <div className="count">{this.props.order}</div> */}
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>         
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);