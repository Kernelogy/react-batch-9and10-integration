import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin'
import UserList from './components/UserList';
import AddProduct from './components/AddProduct';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Signin /> */}
      {/* <UserList /> */}
      {/* <AddProduct /> */}
      <ListProducts />
    </div>
  );
}

export default App;
