import '../styles/globals.css';
import Header from '../components/Header/Header';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <div className="z-10">
          <Header />
        </div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
