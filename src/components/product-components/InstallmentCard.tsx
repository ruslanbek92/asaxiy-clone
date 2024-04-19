import { useState } from 'react';
import logo from '../../assets/asaxiy-logo.svg';

function InstallmentCard({ price }) {
    const [period, setPeriod] = useState(12);
    const installmentAmount = price / period;
    const tabClass = 'border border-sky-400 bg-sky-100';
    function handleClick(changedPeriod) {
        setPeriod(changedPeriod);
    }
    return (
        <div className="p-3 w-full md:w-1/5 border-2 border-yellow-400 flex flex-col gap-3 bg-white rounded-xl">
            <h3 className="font-bold">Installemts of Payment</h3>
            <div className="flex justify-center gap-1 md:justify-between">
                <button
                    className={`${period === 3 && tabClass} py-1 px-4 border border-gray-400 rounded-md`}
                    type="button"
                    onClick={() => handleClick(3)}
                >
                    3 m
                </button>
                <button
                    className={`${period === 6 && tabClass} py-1 px-4 border border-gray-400 rounded-md`}
                    type="button"
                    onClick={() => handleClick(6)}
                >
                    6 m
                </button>
                <button
                    className={`${period === 12 && tabClass} py-1 px-4 border border-gray-400 rounded-md`}
                    type="button"
                    onClick={() => handleClick(12)}
                >
                    12 m
                </button>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <p>Installment from Asaxiy</p>
                    <span className="text-gray-400 px-1.5 py-0.5 rounded-full border-2 border-gray-400 cursor-pointer">
                        i
                    </span>
                </div>

                <div className="flex justify-between gap-1 items-center border border-sky-400 p-2 rounded-md">
                    <img src={logo} alt="" className="w-4/12 h-auto" />
                    <p className="font-bold text-orange-500 text-right">
                        {installmentAmount} soums
                    </p>
                </div>
                <button
                    type="button"
                    className="py-3 px-6 w-full bg-orange-500 rounded-xl"
                >
                    Order
                </button>
            </div>
        </div>
    );
}

export default InstallmentCard;
