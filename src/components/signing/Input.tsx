function Input({ type, id, label, validityState, errorTxt, ...props }) {
    return (
        <div className="my-2">
            <label htmlFor={id}>{label}</label>
            {/* eslint-disable react/jsx-props-no-spreading */}
            <input className="ml-5" type={type} id={id} {...props} name={id} />
            {!validityState && <p className="text-red-500">{errorTxt}</p>}
        </div>
    );
}
export default Input;
