function Input({ type, id, label, ...props }) {
    return (
        <div className="my-2">
            <label htmlFor={id}>{label}</label>
            {/* eslint-disable react/jsx-props-no-spreading */}
            <input className="ml-5" type={type} id={id} {...props} name={id} />
        </div>
    );
}
export default Input;
