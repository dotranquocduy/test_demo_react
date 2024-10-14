import logo from './logo.svg';
import './App.scss';
// './' => sử dụng một dấu chấm là kiếm thư mục cùng cấp
// '../' => sử dụng hai dấu chấm là kiếm ở thư mục cha
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';


class App extends React.Component{

  render(){
    return(
      <div>
        chào mừng &amp; hỏi dân it
        <MyComponent></MyComponent>
      </div>
    );
    
  }
}



// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           HELLO WORLD IT
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
