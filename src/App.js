import './App.css';
import UserForm from './Components/UserForm';
import UserFormWithFormikContext from './Components/UserFormWithFormikContext';

function App() {
  return (
    <div className="App">
        <UserForm />
        <UserFormWithFormikContext />
    </div>
  );
}

export default App;
