import TitleComponent from '../TitleComponent/TitleComponent';
import BandProduct from './BandProduct';
import { Product } from '../../interfaces/interfaces';
import ProductsData from '../../data/ProductsData';

function BandProducts() {
  return (
    <section>
      <TitleComponent title="Nosotros" />
      <div className="container py-5">
        <ul className="row list-unstyled d-flex justify-content-center gy-4">
          {ProductsData.map((product: Product) => (
            <BandProduct key={product.key} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BandProducts;
