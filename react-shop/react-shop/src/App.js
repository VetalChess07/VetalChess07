import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Price from "./components/Price";
import FormsearchCard from "./components/FormsearchCard";

function App() {
  return (
    <div className="App">
      <Price />
      <Cart />
      <Header />
      <main>
        <section className="section catalog">
          <h1 className="section__title">Все кроссовки</h1>
          <FormsearchCard />
          <div className="cards">
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
