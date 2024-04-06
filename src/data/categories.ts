import books from '../assets/category-images/books.jpeg';
import console from '../assets/category-images/console.png';
import furniture from '../assets/category-images/furniture.png';
import pan from '../assets/category-images/pan.jpeg';
import pc from '../assets/category-images/pc.jpeg';
import smartphone from '../assets/category-images/smartphone.png';
import sports from '../assets/category-images/sports.png';
import tires from '../assets/category-images/tires.png';
import tv from '../assets/category-images/tv.png';
import machine from '../assets/category-images/washing-machine.png';

const CATEGORIES = [
    {
        name: 'Books',
        link: 'product/books',
        icon: '/book.png',
        image: books,
    },
    {
        name: 'Mobile and gadgets',
        link: 'product/mobile-gadgets',
        icon: '/tablet.png',
        image: smartphone,
    },
    {
        name: 'Household appliances',
        link: 'product/appliances',
        icon: '/appliances.png',
        image: machine,
    },
    {
        name: 'Climate controllers',
        link: 'product/climate-controllers',
        icon: '/air-conditioner.png',
        image: machine,
    },
    {
        name: 'Computers',
        link: 'product/computers',
        icon: '/laptop.png',
        image: pc,
    },
    {
        name: 'Sports and leisure',
        link: 'product/sports-leisure',
        icon: '/sports.png',
        image: sports,
    },
    {
        name: 'Home and Office',
        link: 'product/home-office',
        icon: '/torches.png',
        image: pc,
    },
    {
        name: 'TV, video and audio',
        link: 'product/htv-video-audio',
        icon: '/television.png',
        image: tv,
    },
    {
        name: 'For gamers',
        link: 'product/for-gamers',
        icon: '/console.png',
        image: console,
    },
    {
        name: 'Furniture',
        link: 'product/furniture',
        icon: '/armchair.png',
        image: furniture,
    },
    {
        name: 'Dishes',
        link: 'product/dishes',
        icon: '/dish.png',
        image: pan,
    },
    {
        name: 'Beauty and health',
        link: 'product/beauty-and-health',
        icon: '/skin-care.png',
        image: pan,
    },
    {
        name: 'For kids',
        link: 'product/for-kids',
        icon: '/toys.png',
        image: books,
    },
    {
        name: 'Clothes,shoes and accessoires',
        link: 'product/clothes-shoes-accessoires',
        icon: '/toys.png',
        image: books,
    },
    {
        name: 'Toys,gifts and accessoires',
        link: 'product/toys-gifts-accessoires',
        icon: '/toys.png',
        image: books,
    },
    {
        name: 'Vehicle products',
        link: 'product/vehicle-products',
        icon: '/toys.png',
        image: tires,
    },
    {
        name: 'stationery products',
        link: 'product/stationery-products',
        icon: '/toys.png',
        image: books,
    },
];

export default CATEGORIES;
