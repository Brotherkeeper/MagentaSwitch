import React, { Component } from 'react';
class LightBulb extends Component {
    constructor(props){
        super(props);
    }
    
     render() { 
         const invalid = {
             height: '50px'
           };
           const offButton = {
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
             <img style={bulb} src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn" />
             <br />
             <img onClick={this.props.turnOff} style={offButton} src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/680455-button_switch_power_option_control_lever_off-512.png" />
             <br />
                 <img onClick={this.props.breakBulb} style={invalid} src="https://png.icons8.com/ios/1600/break.png" />
                 <br />
                 
             </div>
          );
     }
 }
 
export default LightBulb;