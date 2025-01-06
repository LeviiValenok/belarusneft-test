import { action, computed, makeObservable, observable } from "mobx";

class ModalStore {
    protected _isSignUpModalOpen: boolean = false;
    protected _isSignInModalOpen: boolean = false;

    constructor() {
        makeObservable(this, {
            _isSignUpModalOpen: observable,
            _isSignInModalOpen: observable,
            toggleSignUpModal: action,
            toggleSignInModal: action,
            isSignInModalOpen: computed,
            isSignUpModalOpen: computed,
        });
    }

    public toggleSignUpModal = (state: boolean) => {
        this._isSignUpModalOpen = state;
    }

    public toggleSignInModal = (state: boolean) => {
        this._isSignInModalOpen = state;
    }

    public get isSignInModalOpen() {
        return this._isSignInModalOpen;
    }

    public get isSignUpModalOpen() {
        return this._isSignUpModalOpen;
    }
}

const modalStore = new ModalStore();
export default modalStore;