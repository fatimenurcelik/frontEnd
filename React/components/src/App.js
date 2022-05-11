
const name = "Fatime Nur"
const surname = "Çelik"
const isLoggedIn = false;

function App() {
  return (
  <>
    <h2>{ isLoggedIn ? `Benim adım ${name}, soyadım ${surname} `: "Giriş Yapmadınız " }</h2>
  </>

  );
}

export default App;