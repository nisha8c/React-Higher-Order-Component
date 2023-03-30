import './App.css';
import UsersList from "./components/UsersList";
import userHOC from './components/userHOC';
import ControlledForm from "./components/ControlledForm";
function App() {
  const UserInfoLoader = userHOC(UsersList);
  return (
    <div className="App">
      <h1>React Design Patterns</h1>
      <section>
          <h2>Example of Higher Order Component</h2>
          <UserInfoLoader />
      </section>

      <section>
          <h2>Example of Controlled Form</h2>
          <ControlledForm />
      </section>
    </div>
  );
}

export default App;
