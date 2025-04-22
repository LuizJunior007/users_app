import Toast from 'react-bootstrap/Toast';

type MyToastProps = {
    setShow: () => void;
    show: boolean;
    callback: {
        status: string;
        msg: string
    }
}

const MyToast = ({ setShow, show, callback } : MyToastProps) => {

    return(
        <Toast onClose={() => setShow()} show={show} delay={3000} autohide>
            <Toast.Body 
                className={ `${callback.status === 'success' ? 'bg-success' : 'bg-danger'} text-light rounded text-center` }>
                { callback.msg }
            </Toast.Body>
        </Toast>
    );

}

export default MyToast;