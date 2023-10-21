import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/Static/Home';
import About from 'components/Static/About';
import Staff from 'components/Static/Staff';
import Seattle from 'components/Static/Seattle';
import Contact from 'components/Static/Contact';
import Schedule from 'components/Static/Schedule';
import Registration from 'components/Registration';
import MaterialLayout from 'components/Layout/';
// import * as S from './Global-styles';

export default function App() {
  return (
    <>
      {/* <S.GlobalStyle /> */}
      <Router>
        <MaterialLayout>
          <Routes>
            <Route exact path="/" element=<Home /> />
            <Route exact path="/about" element=<About /> />
            <Route exact path="/staff" element=<Staff /> />
            <Route exact path="/schedule" element=<Schedule /> />
            <Route exact path="/seattle" element=<Seattle /> />
            <Route exact path="/contact" element=<Contact /> />
            <Route exact path="/registration" element=<Registration /> />
          </Routes>
        </MaterialLayout>
      </Router>
    </>
  );
}
