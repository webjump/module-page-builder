/*eslint-disable */
define(["underscore", "Magento_PageBuilder/js/utils/object"], function (_underscore, _object) {
    /**
     * Copyright © Magento, Inc. All rights reserved.
     * See COPYING.txt for license details.
     */

    /**
     * @api
     */
    var Margins =
        /*#__PURE__*/
        function () {
            "use strict";

            function Margins() {}

            var _proto = Margins.prototype;

            /**
             * Convert value to internal format
             *
             * @param value string
             * @returns {string | object}
             */
            _proto.fromDom = function fromDom(value) {
                if (undefined !== value.margin) {
                    return {
                        margin: {
                            top: value.margin.top.replace("px", ""),
                            left: value.margin.left.replace("px", ""),
                            right: value.margin.right.replace("px", ""),
                            bottom: value.margin.bottom.replace("px", "")
                        }
                    };
                }

                return {};
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

                if (value && undefined !== value.margin) {
                    checkProp(value.margin.left) && (result.marginLeft = value.margin.left + "px");
                    checkProp(value.margin.top) && (result.marginTop = value.margin.top + "px");
                    checkProp(value.margin.right) && (result.marginRight = value.margin.right + "px");
                    checkProp(value.margin.bottom) && (result.marginBottom = value.margin.bottom + "px");
                }

                return result;
            };

            return Margins;
        }();

    return Margins;
});
//# sourceMappingURL=margins.js.map