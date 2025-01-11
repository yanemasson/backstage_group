import './App.css';

import YandexMetrika from "./components/YandexMetrika.tsx";
import MailRuMetrika from "./components/MailRuMetrika.tsx";
import {Navbar} from "./sections/Navbar";
import MainImage from "../public/images/main.jpg";
import {Description} from "./sections/Description";
import {Footer} from "./sections/Footer";


function App() {


  return (
      <div className='flex flex-col min-h-screen'>
        <YandexMetrika counterId={98366893} />
        <MailRuMetrika counterId="3556729" />
        <Navbar city={'Красноярск'} place={'Институт искусств им. Хворостовского'} date={'9 января в 19:00'}/>
        <main className='flex flex-col pb-10 items-center flex-grow '>
          <div className='flex flex-col lg:flex-row' >
            <img alt='image' className=' w-full xl:w-[45%] xl:h-[45%]' src={MainImage}/>
            <Description href='https://krasbilet.ru/events/koncerty-i-shou/2-14475/'/>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
