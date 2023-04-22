import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import { ButtonGroup, Container } from 'react-bootstrap';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div className="App">
      <NavBar title="Text App" />
      {/* <Buttons col = 'primary' button_name = " Play"></Buttons>
      <Buttons col = 'danger' button_name = " Headlines"></Buttons>
      <Buttons col = 'primary' button_name = " In My Area"></Buttons>
      <Buttons col = 'primary' button_name = " Trending"></Buttons> */}
      <container className = "my-3">
        <TextForm ></TextForm>       
      </container>
      














      {/* <>
      <Buttons col = "danger" button_name = "Fake News"/>
      <Buttons col = "success" button_name = "Real News"/>
      <Buttons  button_name = "Home"/>
      <Buttons  button_name = "Alert"/>
      <Buttons  button_name = "Play"/>
      <Buttons  button_name = "Headlines"/>
      <Buttons  button_name = "Tutorial"/>
      <Buttons  button_name = "In my Area"/>
      <Buttons  button_name = "Trending"/>
      <Buttons  button_name = "My Interests"/>
      <Buttons  button_name = "My Interests"/> 
      {/* </> */} 
      
    </div>
  );
}

export default App;
