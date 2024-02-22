import './styles.css';
import HeaderClient from '../../components/HeaderClient';
import ProductDetailsCard from '../../components/ProductDetailsCard';
import ButtonPrimmary from '../../components/ButtonPrimmary';
import ButtonInverse from '../../components/ButtonInverse';
import { ProductDTO } from '../../models/product';

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
};

function ProductDetails() {
  return (
    <>
      <HeaderClient></HeaderClient>
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product}></ProductDetailsCard>
          <div className="dsc-btn-page-container">
            <ButtonPrimmary></ButtonPrimmary>
            <ButtonInverse></ButtonInverse>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
