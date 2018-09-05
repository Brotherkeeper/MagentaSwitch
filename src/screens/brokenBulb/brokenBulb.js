import React, { Component } from 'react';
class BrokenBulb extends Component {
   constructor(props){
       super(props);
   }
   
    render() { 
        const invalid = {
            height: '50px'
          };
          const align = {
            textAlign: 'center'
          };
          const bulb = {
            height: '250px'
          };
        return ( 
            <div style={align}>
            <img style={bulb} src="https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736" />
            <br />
                <img style={invalid} src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/danger_hanger_triangle_traffic_cone-512.png" />
                <br />
            </div>
         );
    }
}
 
export default BrokenBulb;
