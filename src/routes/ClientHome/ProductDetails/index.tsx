import './styles.css'
import ProductDetailsCard from '../../../components/ProductDetailsCard'
import ButtonPrimmary from '../../../components/ButtonPrimmary'
import ButtonInverse from '../../../components/ButtonInverse'
import * as ProductService from '../../../services/produtc-service'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function ProductDetails() {
  const params = useParams()

  const product = ProductService.findById(Number(params.productId))

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product}></ProductDetailsCard>}
        <div className="dsc-btn-page-container">
          <ButtonPrimmary name="Comprar"></ButtonPrimmary>
          <Link to={'/'}>
            <ButtonInverse name="Início"></ButtonInverse>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails
