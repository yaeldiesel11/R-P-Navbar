import logo from './logo.svg';
import './App.css';
import FormWrapper from '../FormWrapper/FormWrapper';
import Wrapper from '../Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar'

const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
