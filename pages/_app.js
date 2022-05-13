import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Bottom from '../components/Footer/Bottom';

function MyApp({ Component, pageProps }) {
  return (
    <div className='App'>
      <div className='scroll'>
        <div className='z-10 '>
          <Header />
        </div>
        <div className='pt-[100px]'>
          <Component {...pageProps} />
        </div>
        <div>
          <Footer />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
