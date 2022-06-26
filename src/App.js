import './App.css';
import ClassComponent from './ClassComponent';
import CreateClassComponent from './CreateClassComponent';
import FunctionComponent from './function-component'
import FunctionArrowComponent from './FunctionArrowComponent';
import FunctionExpressionComponent from './FunctionExpressionComponent';

function App() {
  return (
    <div>
      <CreateClassComponent name="Welcome"></CreateClassComponent>
      < FunctionComponent name="Welcome"> </ FunctionComponent >
      < ClassComponent > </ ClassComponent >
      <FunctionExpressionComponent></FunctionExpressionComponent>
      <FunctionArrowComponent></FunctionArrowComponent>

    </div>
  );
}

export default App;
