import './App.css'
import Detail from './section/detail/Detail.jsx';
import Header from './section/header/Header.jsx';
import About from './section/about/About';
import Menu from './section/menu/Menu';
import Booking from './section/booking/Booking';
import Team from './section/team/Team';
import Testimonial from './section/testimonial/Testimonial';

function App() {

  return (
    <>
      <div>
        <Header />
        <Detail />
        <About />
        <Menu />
        <Booking />
        <Team />
        <Testimonial />
      </div>
    </>
  )
}

export default App
