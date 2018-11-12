import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { Root } from './routes/Root';
import store from './store/store';

class App extends Component{
    render(){
        return(
            <Provider store= {store}>
                <Root />
            </Provider>
        )
    }
}

export default App;