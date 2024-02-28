import './styles.css'
import ProductDetailsCard from '../../../components/ProductDetailsCard'
import ButtonPrimmary from '../../../components/ButtonPrimmary'
import ButtonInverse from '../../../components/ButtonInverse'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ProductDTO } from '../../../models/product'
import * as productService from '../../../services/product-service'

function ProductDetails() {
  const params = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<ProductDTO>()

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then(({ data }) => {
        setProduct(data)
      })
      .catch(() => {
        navigate('/catalog')
      })
  }, [])

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
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
