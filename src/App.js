import './App.css';
import Header from './components/Header';
import SectionI from './components/SectionI';
import SectionII from './components/SectionII';

function App() {
  return (
    <div className='h-fit pb-1 w-[50vw] mx-auto bg-gradient-to-b from-[#fefff3] to-[#fbfcad]'>
      <Header/>
      <SectionI/>
      <SectionII/>
    </div>
  );
}

export default App;
