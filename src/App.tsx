import "./App.css";
import HeaderClient from "./components/HeaderClient";
import ButtonPrimmary from "./components/ButtonPrimmary";
import ButtonInverse from "./components/ButtonInverse";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {
  return (
    <>
      <HeaderClient></HeaderClient>
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard></ProductDetailsCard>
          <div className="dsc-btn-page-container">
            <ButtonPrimmary></ButtonPrimmary>
            <ButtonInverse></ButtonInverse>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
