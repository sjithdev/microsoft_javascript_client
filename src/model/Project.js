/*
 * Speech to Text API v3.0
 * Speech to Text API v3.0.
 *
 * OpenAPI spec version: v3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ProjectLinks', 'model/ProjectProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectLinks'), require('./ProjectProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.Project = factory(root.SpeechToTextApiV30.ApiClient, root.SpeechToTextApiV30.ProjectLinks, root.SpeechToTextApiV30.ProjectProperties);
  }
}(this, function(ApiClient, ProjectLinks, ProjectProperties) {
  'use strict';

  /**
   * The Project model module.
   * @module model/Project
   * @version v3.0
   */

  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @class
   * @param displayName {String} The display name of the object.
   * @param locale {String} The locale of the contained data.
   */
  var exports = function(displayName, locale) {
    this.displayName = displayName;
    this.locale = locale;
  };

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('links'))
        obj.links = ProjectLinks.constructFromObject(data['links']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ProjectProperties.constructFromObject(data['properties']);
      if (data.hasOwnProperty('self'))
        obj.self = ApiClient.convertToType(data['self'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('locale'))
        obj.locale = ApiClient.convertToType(data['locale'], 'String');
      if (data.hasOwnProperty('customProperties'))
        obj.customProperties = ApiClient.convertToType(data['customProperties'], {'String': 'String'});
      if (data.hasOwnProperty('createdDateTime'))
        obj.createdDateTime = ApiClient.convertToType(data['createdDateTime'], 'Date');
    }
    return obj;
  }

  /**
   * The links for additional actions or content related to this project.
   * @member {module:model/ProjectLinks} links
   */
  exports.prototype.links = undefined;

  /**
   * Additional metadata provided by the service.
   * @member {module:model/ProjectProperties} properties
   */
  exports.prototype.properties = undefined;

  /**
   * The location of this entity.
   * @member {String} self
   */
  exports.prototype.self = undefined;

  /**
   * The display name of the object.
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * The description of the object.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * The locale of the contained data.
   * @member {String} locale
   */
  exports.prototype.locale = undefined;

  /**
   * The custom properties of this entity. The maximum allowed key length is 64 characters, the maximum  allowed value length is 256 characters and the count of allowed entries is 10.
   * @member {Object.<String, String>} customProperties
   */
  exports.prototype.customProperties = undefined;

  /**
   * The time-stamp when the object was created.  The time stamp is encoded as ISO 8601 date and time format  (\"YYYY-MM-DDThh:mm:ssZ\", see https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
   * @member {Date} createdDateTime
   */
  exports.prototype.createdDateTime = undefined;


  return exports;

}));
