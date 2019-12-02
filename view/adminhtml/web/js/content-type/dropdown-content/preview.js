define([
    'jquery',
    'underscore',
    'Magento_PageBuilder/js/events',
    'Magento_PageBuilder/js/content-type/preview-collection',
], function($, _, events, PreviewCollection) {
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

    /**
     * Bind events for image uploading API
     */
    Preview.prototype.bindEvents = function bindEvents() {
        PreviewCollection.prototype.bindEvents.call(this);
    };

    /**
     * Check if content type is container
     *
     * @returns {boolean}
     */
    Preview.prototype.isContainer = function() {
        return false;
    };

    return Preview;
});
