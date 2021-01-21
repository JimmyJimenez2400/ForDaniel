// import React from 'react';
// import Carrousel from './Carrousel';
// import TimeUntil from './TimeUntil';

import React, {Component} from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Contact extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Navbar/>
//         <div>
//           [Page content here]
//         </div>
//       </div>
//     )
//   }
// }



// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );
export default Contact;