/*eslint-disable */
define(["underscore", "Magento_PageBuilder/js/utils/object"], function (_underscore, _object) {
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */
    var Paddings =
        /*#__PURE__*/
        function () {
            "use strict";

            function Paddings() {}

            var _proto = Paddings.prototype;

            /**
             * @param {string} value
             * @returns {Object | string}
             */
            _proto.fromDom = function fromDom(value) {
                return value;
            }
            /**
             * Convert value to knockout format
             *
             * @param {string} name
             * @param {DataObject} data
             * @returns {string | object}
             */
            ;

            _proto.toDom = function toDom(name, data) {
                var result = {};
                var value = (0, _object.get)(data, name);

                if (value && _underscore.isString(value)) {
                    value = JSON.parse(value);
                }

                const checkProp = function(prop) {
                    return prop && prop !== '0';
                };

                if (value && undefined !== value.padding) {
                    checkProp(value.padding.left) && (result.paddingLeft = value.padding.left + "px");
                    checkProp(value.padding.top) && (result.paddingTop = value.padding.top + "px");
                    checkProp(value.padding.right) && (result.paddingRight = value.padding.right + "px");
                    checkProp(value.padding.bottom) && (result.paddingBottom = value.padding.bottom + "px");
                }

                return result;
            };

            return Paddings;
        }();

    return Paddings;
});
//# sourceMappingURL=paddings.js.map