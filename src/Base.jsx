import React from 'react';
import MakeList from './MakeList'

class Base extends React.Component {

      // Then we add our constructor which receives our props
    constructor(props) {
        super(props);
        this.state = {
            first:[],
            second: [],
            step: 1,
        }
        this.updateList = this.updateList.bind(this);
    }


    
   updateList(value){
        if(this.state.step===1)
            this.setState({first:value,step:2});
        if(this.state.step===2)
            this.setState({second:value, step:3});
        
    }

    // The render function, where we actually tell the browser what it should show
    render() {
        return (
            <MakeList next={this.updateList} step={this.state.step} first={this.state.first} second={this.state.second}/>
        );
    }
}

export default Base;