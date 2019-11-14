import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { store } from './store';

class Box extends React.Component{

    constructor(){
        super();
        this.state={
            name:"wutong"
        }
    }

    changeName(){
        this.setState({
            name:"caixukun"
        })
    }

    render(){
        return (<App changeName={this.changeName.bind(this)} name={this.state.name} />)
    }

}

ReactDOM.render(	<Provider store={store}><Box /></Provider>, document.getElementById('root'));
