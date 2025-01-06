import modalStore from "../../../../../store/ModalStore";
import Modal from "../../../../modal/Modal";
import { observer } from "mobx-react";
import SignInForm from "./SignInForm";

const SignInModal = () => {
    const { isSignInModalOpen, toggleSignInModal} = modalStore;
    return (
        <Modal isOpen={isSignInModalOpen} onClose={() => toggleSignInModal(false)}>
            <SignInForm />
        </Modal>
    )
}

export default observer(SignInModal);