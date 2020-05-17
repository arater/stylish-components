import React from 'react';
import logo from './logo.svg';
import Gauge from './Components/Gauge'

class App extends React.Component {
  state = {
    gaugeValue : '50'
  }
  render() {
    return (
      <div>
        <div style={{justifyContent:'center', flex:1}} display='flex'>
          <h1 style={{paddingBottom: 50}}>My Stylish Components</h1>
        </div>
        <div style={{justifyContent:'center'}} display='flex'>
          <Gauge value={this.state.gaugeValue} min={0} max={100} label="Grade" units="Points" />
          <form>
            <label>
              Enter the Value: {console.log('gaugeValue', this.state.gaugeValue)}
              <input type="text" name="name" value={this.state.gaugeValue} onChange={(event) => this.setState({gaugeValue: event.target.value})}/>
            </label>
          </form>
        </div>  
      </div>
    );
  }
}

export default App;
