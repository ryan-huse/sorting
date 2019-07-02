import React from 'react';

class Sort extends React.Component {
    // Then we add our constructor which receives our props
    constructor(props) {
        super(props);
    }

    // The render function, where we actually tell the browser what it should show
    render() {

        var stuff = () =>  this.props.values.map(element => 
            <div key={Math.random()} className="uk-margin">
                <div className="uk-card uk-card-default uk-card-body uk-card-small">{element}</div>
            </div>
        );

        return (
            <div>
                <div id="demo" uk-sortable="group: sortable-group">
                    {stuff()}
                </div>
            </div>
        )
    }
}

export default Sort;