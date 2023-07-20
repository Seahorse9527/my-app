import React from 'react';
import { connect } from 'react-redux';
import { increate, increateAsync } from '../actions';

export class CustomCounter extends React.Component {
 
  render() {
   
    return (
     
      
         <div>
          <p>值:{this.props.counter}</p>
          <button onClick={()=>this.props.increate()}>自增</button>
          <button onClick={()=>this.props.increateAsync()}>异步自增</button>
        </div>
     
    )
  }

}

  const mapStateToProps = (state) => {
    return {
      counter :state.counter
  }}
  
  export default connect(mapStateToProps, {increate, increateAsync })(CustomCounter);