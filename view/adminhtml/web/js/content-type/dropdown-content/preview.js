define(['jquery', 'underscore', 'Magento_PageBuilder/js/content-type/preview-collection'], function(
    $,
    _,
    PreviewCollection
) {
    'use strict';

    let $super;

    /**
     * Preview Constructor
     *
     * @param parent
     * @param config
     * @param stageId
     * @constructor
     */
    function Preview(parent, config, stageId) {
        PreviewCollection.call(this, parent, config, stageId);
    }
    Preview.prototype = Object.create(PreviewCollection.prototype);
    $super = PreviewCollection.prototype;

    /**
     * Remove move, duplicate and remove options
     *
     * @returns {*}
     */
    Preview.prototype.retrieveOptions = function retrieveOptions() {
        return $super.retrieveOptions.call(this, arguments);
    };

    return Preview;
});
