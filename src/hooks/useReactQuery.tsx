/* eslint-disable import/no-cycle */
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import ProductReview from '../components/product-components/product-detail-components/ProductReview';
import ProductTopInfo from '../components/product-components/ProductTopInfo';
import ProductDescription from '../components/product-components/product-detail-components/ProductDescription';
import Characteristics from '../components/product-components/product-detail-components/Characteristics';
import ProductReviews from '../components/product-components/product-detail-components/ProductReviews';
import Button from '../components/Button';
import CartPageContent from '../components/cart-components/CartPageContent';
import ProductCard from '../components/product-components/ProductCard';
import Category from '../components/Category';

function handleContent(data, queryFnName, state, functions) {
    let content;
    if (queryFnName === 'getCategoryDetails') {
        content = data[state].map((item) => {
            return (
                <ul key={item.name} className="lg:basis-1/5 basis-1/3">
                    <Link to={item.link} className="hover:text-sky-400">
                        <h3 className="font-bold mb-1">{item.name}</h3>
                    </Link>
                    {item.subCategories &&
                        item.subCategories.map((category) => {
                            return (
                                <li className="mb-1" key={category.name}>
                                    <Link
                                        to={category.link}
                                        className="hover:text-sky-400"
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            );
        });
    }
    if (queryFnName === 'getCategories') {
        content = data.map((item, index) => {
            return (
                <li
                    key={item.name}
                    onMouseEnter={() => functions[0](item.name)}
                    onMouseLeave={() => functions[1](item.name)}
                    className="py-2 px-4 list-none rounded hover:bg-blue-100 hover:text-sky-400"
                >
                    <Link
                        to={item.link}
                        className="flex justify-between items-center"
                    >
                        <div className="flex items-center gap-3">
                            <p>{index}</p>
                            <img src={item.icon} alt="" className="w-1/12 " />
                            <h3>{item.name}</h3>
                        </div>
                        <span className="font-bold text-2xl">&gt;</span>
                    </Link>
                </li>
            );
        });
    }
    if (queryFnName === 'getProductReview') {
        content = data.reviewSet.map((review) => (
            <ProductReview review={review} />
        ));
    }
    if (queryFnName === 'getProductItem') {
        content = (
            <>
                <ProductTopInfo item={data} />
                <ProductDescription description={data.description} />
                <Characteristics characteristics={data.characteristics} />
                <ProductReviews item={data} />
            </>
        );
    }
    if (queryFnName === 'getUser') {
        content = (
            <>
                <img
                    alt="profile"
                    src={data.image}
                    className="w-10 rounded-3xl h-auto border"
                />
                <div className="flex justify-between my-3">
                    <div className="w-[48%]">
                        <p>Name:{data.name}</p>
                        <p>Surname:{data.surname}</p>
                        <p>Date of birth:{data.date}</p>
                        <p>Phone:{data.telephone}</p>
                        <p>Gender:{data.gender}</p>
                    </div>
                    <div className="w-[48%]">
                        <p>Email:{data.email}</p>
                        <p>Address:{data.address}</p>
                    </div>
                </div>
                {/* eslint-disable react/jsx-no-bind */}
                <Button icon={<FaPen />} onClick={functions[0]}>
                    Edit
                </Button>
            </>
        );
    }
    if (queryFnName === 'getCart') {
        if (data.length !== 0) {
            content = <CartPageContent products={data} />;
        } else content = 'Cart is empty yet';
    }
    if (queryFnName === 'getDocument') {
        content = (
            <ul className="flex flex-wrap justify-between gap-y-6">
                {data.items.map((item) => {
                    return (
                        <li key={item.title} className="w-[23%] h-48">
                            <Link to={`/product/detail/${item.title}`}>
                                <ProductCard item={item} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
    if (queryFnName === 'getProductsCategories') {
        content = (
            <ul className="p-4 list-none">
                {data.map((category) => {
                    return (
                        <li key={category.name}>
                            <Link to={`/product/category/${category.name}`}>
                                <h2 className="font-bold">{category.name}</h2>
                            </Link>
                            <Category
                                image={category.image}
                                category={category}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
    return content;
}

export default function useReactQuery(
    config,
    queryFnName,
    state,
    functionArrs
) {
    const { data, isPending, isError, error } = useQuery(config);
    let content;
    if (isPending) content = <p className="text-center">Loading...</p>;
    if (isError)
        content = (
            <p className="text-center text-red-500">{`Error: ${error.message}`}</p>
        );
    if (data) {
        content = handleContent(data, queryFnName, state, functionArrs);
    }
    return content;
}
