import {useState} from 'react';
import {Button} from "../../components/Button.tsx";
import {Text, TextVariant} from "../../components/Text.tsx";


export const Photos = (href: string) => {
    const images = [
        'src/sections/Photos/images/0.jpg',
        'src/sections/Photos/images/1.jpg',
        'src/sections/Photos/images/2.jpg',
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='p-10 flex flex-col gap-8 items-center justify-center'>
            <div className="relative left-[10%]">
                <button onClick={goToPrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r">←</button>
                <button onClick={goToNext} className="absolute right-[20%] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l">→</button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-[80%] h-[80%]"/>
                <div className="absolute bottom-4 left-[40%] transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}/>
                    ))}
                </div>
            </div>
            <a target='_blank' href={href}></a><Button><Text variant={TextVariant.H3}>Купить билет</Text></Button>
        </div>

    );
};

export default Photos;
