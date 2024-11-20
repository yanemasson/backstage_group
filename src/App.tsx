import './App.css';
import {Suspense, lazy} from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Loader from './components/Loader.tsx';




function App() {
  const MainPage = lazy(()=> import('./pages/MainPage.tsx'))
  const Mezhdurechensk = lazy(()=> import('./pages/Mezhdurechensk.tsx'))
  const Novokuznetsk = lazy(() => import('./pages/Novokuznetsk'))
  const LeninskKuznetskiy = lazy(()=> import('./pages/LeninskKuznetskiy.tsx'))
  return (
    <>
      <HashRouter>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path="/mezhdurechensk" element={<Mezhdurechensk/>} />
            <Route path="novokuznetsk" element={<Novokuznetsk/>} />
            <Route path='leninsk_kuznetskiy' element={<LeninskKuznetskiy/>}/>
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
