import {Link} from 'react-router-dom';
import {Button} from '../components/Button.tsx';
import {Navbar} from '../sections/Navbar';
import {Text, TextVariant} from '../components/Text.tsx';
import {Footer} from '../sections/Footer';
import MainImage from '../../public/images/bg.jpg';

const MainPage = () => {
  return (
    <div>
      <Navbar city={'Новокузнецк'} place={'Междуреченск'} date={'Ленинск-Кузнецкий'}/>
      <main className='flex flex-col lg:flex-row '>
        <img alt='image' src={MainImage}/>
        <div className='flex p-6 gap-4 flex-col text-[#252B42] items-start'>
          <Text variant={TextVariant.H3}>Уникальная возможность увидеть самые яркие и интересные номера из всемирно известных балетных спектаклей!</Text>
          <Text variant={TextVariant.H6}>Гала-концерт – это представление, которое позволит зрителю познакомиться с истинными шедеврами балетной классики: на одной сцене в один вечер артисты представляют фрагменты самых знаменитых и любимых зрителями спектаклей – «Лебединое озеро», «Спящая красавица», «Корсар», «Дон Кихот», «Щелкунчик», «Шахерезада» и др.</Text>
          <Text variant={TextVariant.H6}>В концерте примут участие артисты из Мариинского Театра Оперы и Балета, Красноярского Театра Оперы и Балета, Новосибирского Театра Оперы и Балета НОВАТ и Самарского Академического Театра Оперы и Балета</Text>
          <Text variant={TextVariant.H6}>Продолжительность - 2 часа</Text>
          <Text variant={TextVariant.H6}> Филигранная техника, отточенные движения, красота линий, гармония пластики. Настоящий праздник балета в двух отделениях.</Text>
          <div className='flex flex-col lg:flex-row pt-8 justify-between gap-4'>
            <Link to={'/novokuznetsk'}><Button><Text variant={TextVariant.H3}>Новокузнецк</Text></Button></Link>
            <Link to={'/mezhdurechensk'}><Button><Text variant={TextVariant.H3}>Междуреченск</Text></Button></Link>
            <Link to={'/leninsk_kuznetskiy'}><Button><Text variant={TextVariant.H3}>Ленинск-Кузнецкий</Text></Button></Link>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default MainPage;