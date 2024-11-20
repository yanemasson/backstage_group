import {Text, TextVariant} from '../../components/Text';
import VKLogo from '../../../public/icons/vk_icon.svg';
import TGLogo from '../../../public/icons/tg_icon.svg';

export const Footer = () => {
  return (
    <div className='flex p-8 bg-[#252B42] text-white flex-col gap-2 justify-start items-start'>
        <Text variant={TextVariant.H6}>Организатор: ИП Фамилия Имя Отчество</Text>
        <Text variant={TextVariant.H6}>Адрес: 000000, Край, город, микрорайон</Text>
        <Text variant={TextVariant.H6}>ИНН: 000000000000</Text>
        <Text variant={TextVariant.H6}>ОГРН/ОРГНИП: 000000000000000</Text>
      <div className='pt-3'>
        <Text variant={TextVariant.H6}>Мы в социальных сетях:</Text>
        <div className='flex gap-3 flex-row'>
          <a target="_blank" className='hover:text-[#2091F9]/80' href={'https://vk.com/backstagegroup'}><VKLogo/></a>
          <a target="_blank" className='hover:text-[#2091F9]/80' href={'https://t.me/backstagegroup24'}><TGLogo/></a>
        </div>
      </div>

    </div>

  );
};
