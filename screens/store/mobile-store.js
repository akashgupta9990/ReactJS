import MobileDispatcher from '../dispatcher/dispatcher.js';
import EventEmitter from 'events';

var mockData = require('../tack/mobile');
var searchValue = "", mobileStore, viewList = [], filters=[], searchList=[];;
(function () {
    mobileStore = Object.assign({}, EventEmitter.EventEmitter.prototype, {
        getMobileJSON: function () {
            let data = {
                mobileJSON: mockData.getMobileJSON()
            }
            return data;
        },
        setViewList: function(newList) {
            try {
                viewList = JSON.parse(JSON.stringify(newList))
                this.emitChange('change')
            } catch(e) {
                console.error('Invalid product list')
            }
        },
        getViewList: function() {
            return viewList;
        },
        getFilterList: function () {
            let data = {
                filterList: mockData.getFilterList()
            }
            return data;
        },
        emitChange: function () {
            this.emit('change')
        },
        getSearchValue: function() {
            return searchValue;
        },
        setSearchValue: function(str) {
            searchValue = str;
        },
        filterList(filters, fromSearch) {
            filters = filters && filters.length > 0 ? filters : this.getSearchValue();
            if (filters) {
                let products = this.getMobileJSON().mobileJSON;
                // this.setViewList([])
                let textArray;
                if (typeof filters == 'string') {
                    textArray = filters.split(' ');
                } else {
                    products = searchList.length > 0 ? searchList : products;
                    textArray = filters;
                }
                let lists = [];
                textArray.forEach((t, index) => {
                    if (index > 0) {
                        products = lists.length > 0 ? lists : products;
                        lists = [];
                    }
                    this.recursionSearch(t, products, lists);
                })
                lists = lists.filter(function (elem, index, self) {
                    return index == self.indexOf(elem);
                });
                viewList = lists;
            } else {
                viewList = [];
            }
            searchList = fromSearch ? viewList : "";
            this.setViewList(viewList);
        },
        recursionSearch(text, list, elementArray) {
            let stringAvailable = false;
            list.forEach((element, index) => {
                if (typeof text == 'string') {
                    let e = JSON.stringify(element);
                    if (((e.toLowerCase()).indexOf(text.toLowerCase()) > -1)) {
                        // stringAvailable = true;
                        // if (index == (textArray.length - 1)) {
                            elementArray.push(element);
                            // return;
                        }
                    // } else {
                    //     if (index > 0 && stringAvailable) {
                    //         stringAvailable = false
                    //     }
                    // }
                } else {
                    let key;
                    let isRange;
                    let filters = text.value.split('-')
                    switch (text.type) {
                        case 'screen':
                        key = parseFloat(element.display.screen_size);
                            isRange = true;
                            break;
                        case 'price':
                        key = parseFloat(element.summary.price);
                            isRange = true;
                            break;
                            case 'ram':
                            key = element.summary.ram.toLowerCase();
                            break;
                        case 'os':
                        key = element.software.operating_system.replace(/[^0-9,.]/g, '')
                            break;
                        case 'brand':
                            key = element.summary.brand.toLowerCase()
                            break;
                    }
                    if (!isRange) {
                        filters.forEach(f => {
                            if (key.indexOf(f.toLowerCase()) > -1) {
                                elementArray.push(element)
                            }
                        })
                    } else {
                        if ((key >= parseFloat(filters[0])) && (key <= (parseFloat(filters[1])))) {
                            elementArray.push(element);
                        }
                    }
                }
            })
        },
        generateFilterList(evt, data) {
            let isSelected = evt.target.checked;
            let index = filters.findIndex(x => x.type == data.name)
            if (isSelected) {
                if (index > -1) {
                    filters[index].value = filters[index].value + "-" + data.value;
                } else {
                    filters.push({ type: data.name, value: data.value });
                }
            } else {
                filters = filters.filter(function (a) {
                    return a.value != data.value
                })
                if (filters.length>0) {
                    let value  = filters[index].value;
                    let newValue = value.replace('-' + data.value, "");
                    filters[index].value = newValue;
                }
            }
            this.filterList(filters);
        }
    });
    return mobileStore
})();

MobileDispatcher.register(action => {
    switch (action.actionType) {
        case 'checkbox-onchange':
            mobileStore.generateFilterList(action.value.evt, action.value.data)
            mobileStore.emitChange();
            break;
        case 'search':
            let searchValue = mobileStore.getSearchValue();
            mobileStore.filterList(searchValue, action.value.fromSearch);
            mobileStore.emitChange();
    }
})


module.exports = mobileStore;