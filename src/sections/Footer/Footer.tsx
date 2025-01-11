import {Text, TextVariant} from '../../components/Text';
import VKLogo from '../../../public/icons/vk_icon.svg';
import TGLogo from '../../../public/icons/tg_icon.svg';

export const Footer = () => {
  return (
    <div className='flex p-8 bg-green-950 text-white flex-row gap-2 justify-between items-start'>
        <div className='flex flex-col'>
            <Text variant={TextVariant.H6}>Организатор: ИП Волик Михаил Александрович</Text>
            <Text variant={TextVariant.H6}>Адрес: 662313, Красноярский край, г. Шарыпово, мкр. 4-й</Text>
            <Text variant={TextVariant.H6}>ИНН: 245904917048</Text>
            <Text variant={TextVariant.H6}>ОГРН/ОРГНИП: 323246800154125</Text>
        </div>
        <div className=''>
            <Text variant={TextVariant.H6}>Мы в социальных сетях</Text>
            <div className='flex pt-4 gap-4 justify-center'>
                <a target="_blank" className='hover:text-green-500' href={'https://vk.com/backstagegroup'}><VKLogo/></a>
                <a target="_blank" className='hover:text-green-500' href={'https://t.me/backstagegroup24'}><TGLogo/></a>
            </div>
        </div>
    </div>

  );
};
