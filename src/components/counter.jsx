import React, { Component } from 'react';

class Counter extends Component {
    
    
    styles = {
        fontSize : 20,
    };
    /*constructor(){
        super();
        this.plusOne = this.plusOne.bind(this);
        
    }
    <ul>
        {this.state.tags.map(tag =><li key={tag} >{tag}</li>)}
    </ul>
    */
    render() { 
        return (<div>
                    <span style={this.styles} className={this.showClasse()}>
                        {this.formatCount()}
                    </span>
                    <button name="9" onClick = {() => {this.props.plusOne(this.props.counter)}}>Increment me</button>
                    <button className="btn btn-danger m-2" 
                    onClick = {() => {this.props.removeList(this.props.counter.id)}}>Remove</button>
                </div>);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    showClasse(){
        let nameClass= "badge m-2 badge-";
        const {value} = this.props.counter;
        return value === 0 ? nameClass +='warning' : nameClass += 'primary';
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    } 

    
}
 
export default Counter;