import HelloWorld, { Profile, UniqueKey } from "./components/Hello";
import Sum from "./components/Sum";
import { Header } from "./components/Header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <HelloWorld />
      <Profile />
      <h1>{UniqueKey}</h1>
      <Sum />
      <Footer />
    </>
  );
}

export default App;
