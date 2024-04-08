import ProductCategorySideBar from '../components/ProductCategorySideBar';

function ProductCategory() {
    return (
        <div className="flex justify-between">
            <ProductCategorySideBar />
            <section className="border-2 border-green-600 w-9/12">
                <div />
                <article />
            </section>
        </div>
    );
}

export default ProductCategory;
