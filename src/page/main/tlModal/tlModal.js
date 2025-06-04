import { Modal } from "antd";
import "./index.scss";
const TlModal = ({ open, onOk, onCancel, children, ...resetProps }) => {
    return (
        <>
            <Modal
                open={open}
                onOk={onOk}
                onCancel={onCancel}
                {...resetProps}
            >
                {children}
            </Modal>
        </>
    )
};

export default TlModal;
