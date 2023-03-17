import { Product } from '../../interfaces/interfaces';
import './band-product.scss';

type Props = {
  product: Product;
};
function BandProduct({ product }: Props) {
  return (
    <li className="col-lg-4 mb-4">
      <div className="product h-100 rounded-2 overflow-hidden">
        <div className="product__img">
          <img
            src={product.image}
            alt={product.title}
            className="w-100 h-100"
          />
        </div>
        <div className="p-3">
          <h4 className="h3 mb-2">{product.title}</h4>
          <p className="m-0">{product.description}</p>
        </div>
      </div>
    </li>
  );
}

export default BandProduct;
