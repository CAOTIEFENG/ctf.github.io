class LocalStorageService{
    static localStorageService=null;

    constructor() {
        this.localStorage = window.localStorage;
    }

    setStorage(value){
        console.log(this.localStorage)
    };
}