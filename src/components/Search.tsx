function Search() {
    return (
        <form className=" border-2 rounded border-sky-400 w-80">
            <input
                type="search"
                className="focus:outline-0 w-4/5 h-full"
                placeholder="search"
            />
            <button className="bg-sky-400 p-1.5 w-1/5 text-white" type="button">
                Search
            </button>
        </form>
    );
}
export default Search;
