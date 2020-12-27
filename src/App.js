
import './App.css'
import  NavBar from './components/navBar'
import Signin from './components/signIn'
import SignUp from './components/signUp'

function App() {
  return (
    <main className="App">
      <header id="header">
        Groceries delivery in Karachi / Mobile phones, Cosmetics, Toys &
        Electronics nationwide
      </header>
      <NavBar />
      {/* <Signin/> */}
      {/* <SignUp /> */}
    </main>
  );
}

export default App;
