import { useParams } from 'react-router';

function ProductDetail() {
    const { productDetail } = useParams();
    return <div>Product detail: {productDetail}</div>;
}
export default ProductDetail;
