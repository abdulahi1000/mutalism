import './App.css';
import HomeScreen from './screens/HomeScreen';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='' style={{ display: 'flex',  }}>
      <SideBar />
         <HomeScreen/>
    
   
      </div>
  )
}

export default App;
