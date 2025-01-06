import { action, computed, makeObservable, observable } from "mobx";

class AccountStore {
    protected token: string = "";
    public _isAuthorized: boolean = false;
    protected _firstName: string = "";
    protected _lastName: string = "";

    constructor() {
        makeObservable(this, {
            token: observable,
            _isAuthorized: observable,
            _firstName: observable,
            _lastName: observable,
            signUp: action,
            signIn: action,
            login: action,
            logout: action,
            isAuthorized: computed,
            userInfo: computed,
        })
    }

    public signUp(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._isAuthorized = true;
    }

    public signIn() {
        this._isAuthorized = true;
    }

    public login(token: string): void {
        this.token = token;
        this._isAuthorized = true;
    }

    public logout() {
        this.token = "";
        this._isAuthorized = false;
    }

    public get isAuthorized() {
        return this._isAuthorized;
    }

    public get userInfo() {
        return { firstName: this._firstName, lastName: this._lastName};
    }
}

const accountStore = new AccountStore();
export default accountStore;
