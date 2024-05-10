function SignBtn({ children, ...props }) {
    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <button
            type="button"
            className="bg-orange-500 rounded-lg p-2 mt-5"
            {...props}
        >
            {children}
        </button>
    );
}
export default SignBtn;
