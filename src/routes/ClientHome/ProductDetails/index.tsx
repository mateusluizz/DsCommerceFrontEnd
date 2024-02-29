import './styles.css'
import ProductDetailsCard from '../../../components/ProductDetailsCard'
import ButtonPrimmary from '../../../components/ButtonPrimmary'
import ButtonInverse from '../../../components/ButtonInverse'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ProductDTO } from '../../../models/product'
import * as productService from '../../../services/product-service'
import * as cartService from '../../../services/cart-service'

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

  const handleBuyClick = () => {
    if (product) {
      cartService.addProduct(product)
      navigate('/cart')
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <div onClick={handleBuyClick}>
            <ButtonPrimmary name="Comprar"></ButtonPrimmary>
          </div>
          <Link to={'/'}>
            <ButtonInverse name="Início"></ButtonInverse>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails
