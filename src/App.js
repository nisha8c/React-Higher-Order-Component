import logo from './logo.svg';
import './App.css';
import UsersList from "./components/UsersList";
import userHOC from './components/userHOC';
function App() {
  const UserInfoLoader = userHOC(UsersList);
  return (
    <div className="App">
      <h1>Higher Order Component Example</h1>
      <UserInfoLoader />
    </div>
  );
}

export default App;
