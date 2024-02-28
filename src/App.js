import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionI from './components/SectionI';
import SectionII from './components/SectionII';

function App() {
  return (
    <div className='h-fit md:w-[75vw] lg:w-[50vw] mx-auto bg-gradient-to-b from-[#fffffa] to-[#feffb3]'>
      <Header/>
      <SectionI/>
      <SectionII/>
      <Footer/>
    </div>
  );
}

export default App;
