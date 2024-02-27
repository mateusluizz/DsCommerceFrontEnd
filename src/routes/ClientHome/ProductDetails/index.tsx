import './styles.css'
import ProductDetailsCard from '../../../components/ProductDetailsCard'
import ButtonPrimmary from '../../../components/ButtonPrimmary'
import ButtonInverse from '../../../components/ButtonInverse'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ProductDTO } from '../../../models/product'
import * as productService from '../../../services/produtc-service'

function ProductDetails() {
  const params = useParams()
  const [product, setProduct] = useState<ProductDTO>()

  useEffect(() => {
    productService.findById(Number(params.productId)).then(({ data }) => {
      console.log(data)
      setProduct(data)
    })
  }, [])

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
