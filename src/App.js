import logo from './logo.svg';
import './App.css';
import Greet from './components/basic/Greet';
import Message from './components/basic/Message';
import Counter from './components/basic/Counter';
import ParentComponent from './components/methodprops/ParentComponent';
import NameList from './components/list/NameList';

function App() {
  return (
    <div className="App">
      {/* <Greet name="sivam" role="Developer">
        This is a child props
      </Greet>
      <Greet name="balu" role="Engineer">
        <button>Action</button>
      </Greet>
      <Greet name="Ratan" role="Businessman"/>
      <Greet name="Diana" role="Wonder women"/>
      <Message/> */}
      {/* <Counter/>
      <ParentComponent/> */}
      <NameList/>
    </div>
  );
}

export default App;
