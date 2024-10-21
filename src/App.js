import './App.css';
import Child from './Child';
import React ,{Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      x:10,
      show:true
    }
  }
  render(){ 
    return(
      <>
      <div>

        <h1>This is an parent class component</h1>
        {this.state.show&& <Child data={this.state.x}></Child>}
        
        <button onClick={()=>{this.setState({show:false})}}>Hide</button>
        <button onClick={()=>{this.setState({show:true})}}>Show</button>
        <button onClick={()=>{this.setState({x:this.state.x + 10})}}>Click</button>

      </div>
      </>
    )
  }
}

export default App