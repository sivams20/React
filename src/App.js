import logo from './logo.svg';
import './App.css';
import Greet from './components/basic/Greet';
import Message from './components/basic/Message';
import Counter from './components/basic/Counter';
import ParentComponent from './components/methodprops/ParentComponent';
import NameList from './components/list/NameList';
import Stylesheet from './components/style/Stylesheet';
import Inline from './components/style/Inline';

import './appStyles.css';
import styles from './appStyles.module.css';
import LifecycleA from './components/lifecycle/LifecycleA';
import FragmentDemo from './components/fragment/FragmentDemo';
import ParentComp from './components/pure/parentComp';

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
      {/* <NameList/> */}

      {/*------- Styling --------- */}
      {/* <h2 className={styles.success}>Success</h2>
      <h2 className='error'>Error</h2>
      <Stylesheet/>
      <Inline/> */}

      {/*------- Lifecycle --------- */}
      {/* <LifecycleA/> */}

      {/*------- Fragment Component --------- */}
      {/* <FragmentDemo/> */}

      <ParentComp/>

    </div>
  );
}

export default App;
