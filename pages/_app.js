import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Bottom from '../components/Footer/Bottom';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="z-10">
        <Header />
      </div>
      <Component {...pageProps} />
      <div>
        <Footer />
        <Bottom />
      </div>
    </div>
  );
}

export default MyApp;
