import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { Element } from 'react-scroll';

function Main() {
  return (
      <div className='main'>
        <Header isMain={true}/>
        <main>
          <Promo />
          <NavTab />
          <Element name="AboutProjectElement"><AboutProject /></Element>
          <Element name="TechsElement"><Techs /></Element>
          <Element name="AboutMeElement"><AboutMe /></Element>
          <Portfolio />
        </main>
        <Footer />
      </div>
  )
}

export default Main;