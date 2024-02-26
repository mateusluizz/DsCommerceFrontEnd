import './styles.css'
import SerachBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import { ProductDTO } from '../../../models/product'

const product: ProductDTO = {
  id: 2,
  name: 'Smart TV',
  description: 'TV Bonita',
  imgUrl:
    'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: 'Eletrônicos',
    },
    {
      id: 2,
      name: 'Computadores',
    },
    {
      id: 4,
      name: 'Importados',
    },
  ],
}

function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SerachBar></SerachBar>

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
        </div>

        <ButtonNextPage name="Carregar Mais"></ButtonNextPage>
      </section>
    </main>
  )
}

export default Catalog
