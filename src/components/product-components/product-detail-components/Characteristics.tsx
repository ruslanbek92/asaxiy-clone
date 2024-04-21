function Characteristics({ characteristics }) {
    return (
        <div className="p-4 bg-white overflow-hidden rounded-2xl mt-11">
            <h3 className="font-bold text-5xl">Characteristics</h3>
            <table className="table-fixed w-full mt-3">
                <tbody>
                    {characteristics.map((item, index) => (
                        <tr
                            className={`font-bold  ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white-100'}`}
                        >
                            <td className="p-4">
                                {Object.entries(item)[0][0]}
                            </td>
                            <td className="text-right text-sky-400 p-4">
                                {Object.entries(item)[0][1]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Characteristics;
