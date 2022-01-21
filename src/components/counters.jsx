import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {
    state={
        counters:[
{id:1,value:0},
{id:2,value:0},
{id:3,value:0},
{id:4,value:0}

        ]
    };

    handleIncrement=(counter)=>
    {
     const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counters[index]={...counter};
     counters[index].value++;
     this.setState({counters});

    };
    handleReset=()=>
    {
        const counters=this.state.counters.map(m=>{m.value=0
            return m});
            this.setState({counters});
    };
    handleDelete=(counterid)=>
    {
        const counters=this.state.counters.filter(c=>c.id!=counterid);
        this.setState({counters});
    };
    render() { 
        return (
        
        <div> 
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset </button>

            {this.state.counters.map(counter=>
            <Counter key={counter.id} 
            onDelete={this.handleDelete} 
            counter={counter}
            onIncrement={this.handleIncrement}
            />)}
        </div>);
    }
}
 
export default Counters;