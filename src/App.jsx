import './App.css'
import Detail from './section/detail/Detail.jsx';
import Header from './section/header/Header.jsx';
import About from './section/about/About';
import Menu from './section/menu/Menu';
import Booking from './section/booking/Booking';

function App() {

  return (
    <>
      <div>
        <Header />
        <Detail />
        <About />
        <Menu />
        <Booking />
      </div>
    </>
  )
}

export default App
