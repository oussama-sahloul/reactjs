import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    
    render() { 
        
        const {resetAll,removeList,plusOne,counters} = this.props; // object destructring
        return (<div>
            <button onClick={resetAll} className="btn btn-default">Reset</button>
            {counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    counter={counter} 
                    removeList = {removeList}
                    plusOne = {plusOne}
                />
                )
            }
        </div>);
    }

    

}
 
export default Counters;