import React, { Component } from 'react';
class Bulb extends Component {
    constructor(props){
        super(props);
    }
    
     render() { 
         const invalid = {
             height: '50px'
           };
           const onButton = {
            height: '100px'
          };
           const align = {
             textAlign: 'center'
           };
           const bulb = {
             height: '250px'
           };
         return ( 
             <div style={align}>
             <img style={bulb} src="https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg" />
             <br />
             <img onClick={this.props.turnOn} style={onButton} src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/680460-button_switch_power_option_control_lever_on-512.png" />
             <br />
                 <img onClick={this.props.breakBulb} style={invalid} src="https://png.icons8.com/ios/1600/break.png" />
                 <br />
                 
             </div>
          );
     }
 }
export default Bulb;