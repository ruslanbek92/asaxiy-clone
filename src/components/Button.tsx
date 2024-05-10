function Button({ icon, children, ...props }) {
    return (
        /* eslint-disable react/jsx-props-no-spreading */
        <button
            {...props}
            className="bg-sky-400 p-1.5 rounded-lg text-white flex items-center gap-2"
            type="button"
        >
            {icon}
            {children}
        </button>
    );
}
export default Button;
