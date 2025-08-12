import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import DressCodeDetails from './components/DressCodeDetails'
import TimerPlace from './components/Timer-Place'


function App() {
  


  return (
    <>
      <div className="main-div">
        <Header/>
        <main>
        <TimerPlace/>
        <DressCodeDetails/>
        </main>
        <Footer/>  
      </div> 
    </>
  )
}

export default App
