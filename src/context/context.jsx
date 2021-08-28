import React, {Component, createContext} from 'react'

const RootContext = createContext()

//Provider
const Provider = RootContext.Provider

const GlobalProvider = (Children) => {
    return(
        class ParentComp extends Component{
            state = {
                totalOrder: 100
            }
            dispatch = (action) => {
                switch (action.type) {
                    case 'PLUS_ORDER':
                        return (
                            this.setState({
                                totalOrder: this.state.totalOrder + 1
                            })
                        )
                    case 'MINUS_ORDER':
                        return (
                            this.setState({
                                totalOrder: this.state.totalOrder - 1
                            })
                        )
                    default:
                        return null
                }
            }

            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

// Consumer
const Consumer = RootContext.Consumer
 
export const GlobalConsumer = (Children) =>{
    return(
        class ParentConsumer extends Component{
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                <Children {...this.props} {...value}/> 
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
        
    )
}