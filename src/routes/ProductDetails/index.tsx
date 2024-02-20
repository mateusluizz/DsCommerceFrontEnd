import './styles.css'
import HeaderClient from '../../components/HeaderClient'
import ProductDetailsCard from '../../components/ProductDetailsCard'
import ButtonPrimmary from '../../components/ButtonPrimmary'
import ButtonInverse from '../../components/ButtonInverse'

function ProductDetails() {
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
  )
}

export default ProductDetails