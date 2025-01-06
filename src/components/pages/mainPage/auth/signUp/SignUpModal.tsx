import Modal from "../../../../modal/Modal";
import SignUpForm from "../signUp/SignUpForm";
import modalStore from "../../../../../store/ModalStore";
import { observer } from "mobx-react";

const SignUpModal = () => {
    const { isSignUpModalOpen, toggleSignUpModal } = modalStore;
    return (
        <Modal isOpen={isSignUpModalOpen} onClose={() => toggleSignUpModal(false)}>
            <SignUpForm />
        </Modal>
    )
}

export default observer(SignUpModal);