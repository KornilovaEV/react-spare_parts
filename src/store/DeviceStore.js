import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'холод'},
            {id: 2, name: 'микро'},
            {id: 3, name: 'пыл'},
            {id: 4, name: 'чай'},
        ]
        
        this._brands = [
            {id: 1, name: 'sumsung'},
            {id: 2, name: 'apple'},
        ]

        this._devices = [
            {id: 1, name: 'sumsung 1', price: 25000, reting: 5, img: 'https://www.ferra.ru/review/mobile/samsung-galaxy-a32-a52.htm'},
            {id: 2, name: 'apple 1', price: 35000, reting: 4, img: 'https://news.samsung.com/ru/samsung-predstavlyaet-novuyu-lineily-smartphonov-galaxy-a'},
            {id: 3, name: 'sumsung 2', price: 567815, reting: 3.2, img: 'https://www.samsungstore.ru/products/productID101515/'},
            {id: 4, name: 'sumsung 2', price: 54654, reting: 1.8, img: 'https://www.ferra.ru/review/mobile/samsung-galaxy-a32-a52.htm'},
            {id: 5, name: 'sumsung 3', price: 8445, reting: 5, img: 'https://www.samsungstore.ru/products/productID101515'},
        ]
        makeAutoObservable(this)
    }
    /*
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }*/

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    /*
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }*/

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    /*
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }*/
}