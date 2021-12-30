import '../src/assets/css/style.css'
import Hero from './components';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className='container'>
    <Header/>
    <Hero/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
