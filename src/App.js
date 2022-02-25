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
import RefsDemo from './components/refs/RefsDemo';
import Hero from './components/errors/Hero';
import ErrorBoundary from './components/errors/ErrorBoundary';
import ClickCounter from './components/hoc/ClickCounter';
import HoverCounter from './components/hoc/HoverCounter';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/userContext';
import PostList from './components/http/PostList';
import PostForm from './components/http/PostForm';
import HooksCounter from './components/hooks/HooksCounter';
import HooksCounterTwo from './components/hooks/HookCounterTwo';
import HookSateObject from './components/hooks/HookStateObject';
import HookStateArray from './components/hooks/HookStateArray';
import HookEffectCounter from './components/hooks/HookEffectCounter';

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

      {/*------- Pure components, React memo --------- */}
      {/* <ParentComp/> */}

      {/* <RefsDemo /> */}

      {/*------- Errors --------- */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/*------- HOC --------- */}
      {/* <ClickCounter name="Sivam" />
      <HoverCounter name="Balu" /> */}

      {/*------- Context --------- */}
      {/* <UserProvider value="Balu">
        <ComponentC />
      </UserProvider> */}

      {/*------- HTTP Request --------- */}
      {/* <PostList/> */}
      {/* <PostForm /> */}

      {/*------- Hooks --------- */}
      {/* <HooksCounter/>
      <HooksCounterTwo/> */}
      <HookSateObject/>
      <HookStateArray/>
      <HookEffectCounter/>

    </div>
  );
}

export default App;
