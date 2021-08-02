import { useState } from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        count: 0
    };
      
        this.increment = this.increment.bind(this);
      
}
    
    increment() {
        this.setState({
        count: 1 })
}
    
    render() {
      return (
        <div 
        absoluta superior-1 izquierda-1
        fuente redondeada px-3-negrita
        text-black bg-gray-200>
          
          <button className='inc' onClick={this.increment}>Incrementp!</button>
          <button className='dec' onClick={this.decrement}>Decremento!</button>
          <button className='reset' onClick={this.reset}>Resetear</button>
          <h1>Contador Actualizado{this.state.count}</h1>
        
        </div>
      );
    }
};


export default IteamCount