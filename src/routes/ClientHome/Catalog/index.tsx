import './styles.css'
import SerachBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import { ProductDTO } from '../../../models/product'
import { useEffect, useState } from 'react'
import * as productService from '../../../services/product-service'

function Catalog() {
  const [products, setproducts] = useState<ProductDTO[]>([])

  useEffect(() => {
    productService.findAll().then(({ data }) => {
      setproducts(data.content)
    })
  }, [])

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SerachBar></SerachBar>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product}></CatalogCard>
          ))}
        </div>

        <ButtonNextPage name="Carregar Mais"></ButtonNextPage>
      </section>
    </main>
  )
}

export default Catalog
