import './styles.css'
import SerachBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import * as productService from '../../../services/produtc-service'

function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SerachBar></SerachBar>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {productService.findAll().map((product) => (
            <CatalogCard key={product.id} product={product}></CatalogCard>
          ))}
        </div>

        <ButtonNextPage name="Carregar Mais"></ButtonNextPage>
      </section>
    </main>
  )
}

export default Catalog
