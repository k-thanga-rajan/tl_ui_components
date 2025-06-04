import TlModal from "./tlModal";
import { ModalComplete, infoIcon, xMarkModal } from "../../assets/images";
import "./index.scss";

const TlShowConfirmModal = ({ openModal, handleModalSubmit, handleClose, title, subTitle, modalType, ...resetProps }) => {
    const modalIcon = modalType === "info" ? infoIcon : modalType === "complete" ? ModalComplete : modalType === "warning" ? xMarkModal : "";
    return (
        <>
            <TlModal
                open={openModal}
                onOk={handleModalSubmit}
                onCancel={handleClose}
                {...resetProps}
            >
                <div className="row py-1 m-0 px-0 ">
                    <div className="col-12 mx-auto d-flex justify-content-center p-0">
                        <img className="mx-auto" src={modalIcon} alt="" />
                    </div>
                    <div className="pt-4 m-auto p-0">
                        <h6 className="text-center">{title}</h6>
                        <p className="text-center">{subTitle}</p>
                    </div>
                </div>
            </TlModal>
        </>
    );
};

export default TlShowConfirmModal;