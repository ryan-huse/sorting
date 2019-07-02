import React from 'react';
import Sort from './Sort';

class MakeList extends React.Component {

    // Then we add our constructor which receives our props
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Finished = this.Finished.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.step !== prevProps.step)
        if(this.props.step === 3){
            var fir = this.props.first.map(element => 
                // element.concat(" 1")
                element
            );
            var sec = this.props.second.map(element => 
                // element.concat(" 2")
                element
            );
            var both = this.onlyUnique(fir,sec)
            this.setState({list: both})
         }else{
             this.setState({list:[]})
         }
    }

    onlyUnique(first,second) { 
        console.log({first,second})
        // var unique = first.map(element => 
        //     element.concat(" 1")
        // );
        var unique1 = first.map(element => {
                var object = element.concat(" 1")
                if(second.indexOf(element) !== -1){
                    second.splice(second.indexOf(element),1)
                    return object.concat(" 2");
                }else{
                    return object;
                }
        });
        var unique2 = second.map(element =>{
                return element.concat(" 2")
        })
        console.log({unique1,unique2})

        return unique1.concat(unique2);
    }

    handleSubmit(){
        var value = window.document.getElementById("stuff").value;
        if(value && this.state.list.indexOf(value.toUpperCase())===-1)
            this.setState({list:this.state.list.concat(value.toUpperCase())}, ()=> {window.document.getElementById("stuff").value=""; window.document.getElementById("stuff").focus()});
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            this.handleSubmit();
        } 
    }
    
    Finished(){
        this.props.next(this.state.list)
    }

    // The render function, where we actually tell the browser what it should show
    render() {
        return (
            <div>
               {this.props.step!==3 ? <div><label>Input {this.props.step}: </label><input id="stuff" onKeyPress={this.enterPressed.bind(this)}></input>
                <button onClick={this.handleSubmit} style={{position:"relative", marginLeft:"50px"}}>Add</button>
                <button onClick={this.Finished} style={{position:"relative", marginLeft:"250px"}}>Next</button></div>:""}


                <Sort values={this.state.list}/>
            </div>
        )
    }
}

export default MakeList;