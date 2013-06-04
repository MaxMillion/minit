{{#copyright}}/* {{{copyright}}} */

{{/copyright}}/**
 * @module ui/welcome.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Welcome
 * @extends Component
 */
exports.Welcome = Component.specialize(/** @lends Welcome# */ {

    montageDescription: {
        get: function() {
            return montageRequire.packageDescription;
        }
    }

});
