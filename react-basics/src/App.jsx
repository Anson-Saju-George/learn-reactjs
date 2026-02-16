import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

import avatar from './avatar.png' ;

function Logo(props){
  const userPic = <img src={avatar} alt="User Avatar" />;
  return userPic;
}



function App() {
  return (
    <>
      <div className="content">
        <Header name="Anson" color="blue" />
        <Main greet="Hello, Anson!" />
        <Sidebar greet="Welcome back, Anson!" />
      </div>
    </>
  )
}

export default App
