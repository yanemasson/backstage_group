import {Navbar} from '../sections/Navbar';
import {Photos} from '../sections/Photos';
import {Footer} from '../sections/Footer';
import {Description} from '../sections/Description';
import YandexMetrika from '../components/YandexMetrika.tsx';
import MailRuMetrika from '../components/MailRuMetrika.tsx';
import MainImage from '../../public/images/bg.jpg';

const Link: string = 'https://quicktickets.ru/novokuznetsk-dk-alyuminshchik/s645'
const Novokuznetsk = () => {
  return (
    <div>
      <YandexMetrika counterId={98366893} />
      <MailRuMetrika counterId="3556729" />
      <Navbar city={'Новокузнецк'} place={'ДК "Алюминщик"'} date={'19 ноября в 19:00'}/>
      <main className='flex flex-col lg:flex-row '>
        <img alt='image' src={MainImage}/>
        <Description href={Link}/>
      </main>
      <Photos href={Link}/>
      <Footer />
    </div>
  );
};

export default Novokuznetsk;