import MobileDispatcher from '../dispatcher/dispatcher.js';


var MobileAction = (function() {
    return {
        checkListOnchange: function(evt, data) {
            MobileDispatcher.dispatch({
                actionType: 'checkbox-onchange',
                value: {evt, data}
            })
        },
        searchList: function() {
            MobileDispatcher.dispatch({
                actionType: 'search',
                value: {fromSearch: true}
            })
        }
    }
})();

module.exports = MobileAction;