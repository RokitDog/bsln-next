import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-[1440px] mx-auto selection:bg-black-500">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
