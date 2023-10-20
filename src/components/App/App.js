import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/Static/Home';
import Welcome from 'components/Static/Welcome';
import Staff from 'components/Static/Staff';
import Workshops from 'components/Static/Workshops';
import Schedule from 'components/Static/Schedule';
import Fragrance from 'components/Static/Fragrance';
import Contact from 'components/Static/Contact';
import Payment from 'components/Static/Payment';
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
            <Route exact path="/welcome" element=<Welcome /> />
            <Route exact path="/staff" element=<Staff /> />
            <Route exact path="/workshops" element=<Workshops /> />
            <Route exact path="/schedule" element=<Schedule /> />
            <Route exact path="/fragrance" element=<Fragrance /> />
            <Route exact path="/contact" element=<Contact /> />
            <Route exact path="/waystopay" element=<Payment /> />
            <Route exact path="/registration" element=<Registration /> />
          </Routes>
        </MaterialLayout>
      </Router>
    </>
  );
}
