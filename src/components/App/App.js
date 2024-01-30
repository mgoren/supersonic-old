import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/Static/Home';
import About from 'components/Static/About';
import Staff from 'components/Static/Staff';
import Seattle from 'components/Static/Seattle';
import Contact from 'components/Static/Contact';
import Schedule from 'components/Static/Schedule';
import Registration from 'components/Registration';
import MaterialLayout from 'components/Layout/';
import Error from 'components/Error';
import { EMAIL_CONTACT } from 'config';
import PaymentExplanation from 'components/PaymentExplanation';
import ScrollToAnchor from 'components/ScrollToAnchor';
// import * as S from './Global-styles';

export default function App() {
  return (
    <>
      {/* <S.GlobalStyle /> */}
      <Router>
        <ScrollToAnchor />
        <MaterialLayout>
          <Routes>
            <Route exact path="/" element=<Home /> />
            <Route exact path="/about" element=<About /> />
            <Route exact path="/staff" element=<Staff /> />
            <Route exact path="/schedule" element=<Schedule /> />
            <Route exact path="/seattle" element=<Seattle /> />
            <Route exact path="/contact" element=<Contact /> />
            <Route exact path="/paymentinfo" element=<PaymentExplanation /> />
            <Route exact path="/registration" element=<Registration waitlist={true} /> />
            {/* <Route exact path="/lateregistration2024" element=<Registration waitlist={false} /> /> */}
            <Route exact path="/error-contact-support" element=<Error error={`Unexpected payment processing error. Please email ${EMAIL_CONTACT}`} /> />
          </Routes>
        </MaterialLayout>
      </Router>
    </>
  );
}
