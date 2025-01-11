import {Text, TextVariant} from '../../components/Text';
import {Button} from "../../components/Button.tsx";

interface DescriptionProps {
    href: string;
}

export const Description = ({href}:DescriptionProps)  => {
  return (
    <div className='flex w-full gap-3 p-6 lg:p-3 flex-col text-[#252B42] items-start'>
        <Text variant={TextVariant.H6}>"Время Рождества" - это время, когда все вокруг верят в волшебство и ждут чуда; время, когда собираются всей семьёй, дарят друг другу подарки, тепло, заботу, любовь...</Text>
        <Text variant={TextVariant.H6}>Приглашаем Вас 9 и 10 января в 19.00 в Сибирский государственный институт искусств им. Д.А. Хворостовского</Text>
        <Text variant={TextVariant.H6}>Посетите поистине удивительный концерт "Christmas time" и погрузитесь в атмосферу семейного уютного праздника и торжества.</Text>
        <Text variant={TextVariant.H6}>Вы услышите незабываемые мелодии и самые известные хиты в исполнении инструментального ансамбля "Маэстро" и солистов Красноярского государственного театра оперы и балета им. Д. А. Хворостовского</Text>
        <div className='flex items-center flex-col xl:flex-row'>
            <div>
                <Text variant={TextVariant.H6}> - Джон Уильямс - музыка из к/ф "Гарри Поттер" и "Один дома"</Text>
                <Text variant={TextVariant.H6}> - Эндрю Ллойд Уэббер - музыка из мюзикла "Призрак оперы"</Text>
                <Text variant={TextVariant.H6}> - Джон Уильямс - "Имперский марш" Из к/ф "Звёздные войны"</Text>
                <Text variant={TextVariant.H6}> - Карлос Гардель - Танго из к/ф "Запах женщины"</Text>
                <Text variant={TextVariant.H6}> - The Beatles - "Леди Мадонна" и "Hard Day’s Night"</Text>
                <Text variant={TextVariant.H6}> - Фрэнк Синатра</Text>
                <Text variant={TextVariant.H6}> - Луис Армстронг</Text>
            </div>
            <div className='pt-4 xl:pl-20 xl:self-end'>
                <a target='_blank' href={href}><Button><Text variant={TextVariant.H3}>Купить билет</Text></Button></a>
            </div>
        </div>


        <div className='flex pt-6 self-center'>
      </div>
    </div>
  );
};
