import MobileDispatcher from '../dispatcher/dispatcher.js';


var MobileAction = (function() {
    return {
        // Dispatch event on change of checkbox click
        checkListOnchange: function(evt, data) {
            MobileDispatcher.dispatch({
                actionType: 'checkbox-onchange',
                value: {evt, data}
            })
        },
        // Dispatch event on click of search button
        searchList: function() {
            MobileDispatcher.dispatch({
                actionType: 'search',
                value: {fromSearch: true}
            })
        },
        // Dispatch event onchange of input field
        resetSearch: function(evt) {
            MobileDispatcher.dispatch({
                actionType: 'search-input',
                value: evt
            })
        }
    }
})();

module.exports = MobileAction;