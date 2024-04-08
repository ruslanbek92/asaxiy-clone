import { Link } from 'react-router-dom';
import { SlSocialDropbox } from 'react-icons/sl';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsTelephoneInbound } from 'react-icons/bs';
import { IoMailOpenOutline } from 'react-icons/io5';
import { CiLocationOn, CiCreditCard1 } from 'react-icons/ci';

function Footer() {
    return (
        <footer>
            <section className="py-10 px-4 bg-sky-400 ">
                <div className="rounded-2xl  p-5 flex flex-wrap gap-8 md:gap-0 justify-between items-center bg-white">
                    <div className="flex items-center flex-col md:flex-row gap-2 md:gap-4 w-full md:w-2/5 lg:w-[24%]">
                        <SlSocialDropbox className="w-11 h-auto text-sky-400" />
                        <Link to="/" className="text-center md:text-left">
                            <h3 className="font-bold">
                                Больше не нужно ходить на базар
                            </h3>
                            <p className="text-xs">
                                У нас выгодные цены и доставка до дома
                            </p>
                        </Link>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-2 md:gap-4 w-full md:w-2/5 lg:w-[24%]">
                        <TbTruckDelivery className="w-11 h-auto text-sky-400" />
                        <Link to="/" className="text-center md:text-left">
                            <h3 className="font-bold">Быстрая доставка</h3>
                            <p className="text-xs">Наш сервис удивит вас</p>
                        </Link>
                    </div>
                    <div className="flex  items-center flex-col md:flex-row gap-2 md:gap-4 w-full md:w-2/5 lg:w-[24%]">
                        <CiCreditCard1 className="basis-11 h-auto text-sky-400" />
                        <Link to="/" className="text-center md:text-left">
                            <h3 className="font-bold">Удобства для вас</h3>
                            <p className="text-xs">
                                Быстрое оформление и гарантия на возврат в
                                случае неисправности
                            </p>
                        </Link>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-2 md:gap-4 w-full  md:w-2/5 lg:w-[22%]">
                        <CiCreditCard1 className="w-11 h-auto text-sky-400" />
                        <Link to="/" className="text-center md:text-left">
                            <h3 className="font-bold">Рассрочка</h3>
                            <p className="text-xs">
                                Без предоплаты на 6 или 12 месяцев
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-10 px-4">
                <div className="flex">
                    <div>
                        <h3 className="font-bold">Информация</h3>
                        <ul>
                            <li>
                                <Link to="/">Часто задаваемые вопросы</Link>
                            </li>
                            <li>
                                <Link to="/">Пункты выдачи</Link>
                            </li>
                            <li>
                                <Link to="/">Блог</Link>
                            </li>
                            <li>
                                <Link to="/">Наши бренды</Link>
                            </li>
                            <li>
                                <Link to="/">Карьера в Asaxiy</Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Публичная оферта (Пользовательское
                                    соглашение)
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Оферта для покупок в рассрочку
                                </Link>
                            </li>
                            <li>
                                <Link to="/">О нас</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Для связи</h3>
                        <ul>
                            <li>
                                <a
                                    href="tel:+998 71 200 01 05"
                                    className="flex items-end gap-2"
                                >
                                    <BsTelephoneInbound />
                                    +998 71 200 01 05
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@asaxiy.uz"
                                    className="flex items-end gap-2"
                                >
                                    <IoMailOpenOutline />
                                    info@asaxiy.uz
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="link" className="flex items-end gap-2">
                                    <CiLocationOn />
                                    улица Ислама Каримова, 49, Ташкент
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Наши достижения</h3>
                        <ul>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="something">Премия Tahsin</a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="something">Медаль Shuhrat</a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="something">
                                    Медаль Kelajak bunyodkori
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold">Книжные магазины</h3>
                        <ul className="">
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="/home">
                                    <CiLocationOn />
                                    Asaxiy Novza
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="/home">
                                    <CiLocationOn />
                                    Asaxiy Farhod bozori
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="/home">
                                    <CiLocationOn />
                                    Asaxiy Panorama
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="/home">
                                    <CiLocationOn />
                                    Asaxiy Kitob Olami
                                </a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="/home">
                                    <CiLocationOn />
                                    Asaxiy Books Kamolon
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div />
            </section>
        </footer>
    );
}
export default Footer;
