import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(({ children }, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => ({
        openDialog() {
            dialog.current.showModal();
        },
        closeDialog() {
            dialog.current.close();
        },
    }));

    function handleCloseClick() {
        dialog.current.close();
    }
    return createPortal(
        <dialog ref={dialog} className="p-3 rounded-2xl w-6/12">
            {children}
            <button
                type="button"
                onClick={handleCloseClick}
                className="p-3 bg-red-500 text-white rounded-xl"
            >
                close
            </button>
        </dialog>,
        document.getElementById('modal')
    );
});
export default Modal;
