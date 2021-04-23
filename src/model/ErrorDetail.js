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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SpeechToTextApiV30) {
      root.SpeechToTextApiV30 = {};
    }
    root.SpeechToTextApiV30.ErrorDetail = factory(root.SpeechToTextApiV30.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ErrorDetail model module.
   * @module model/ErrorDetail
   * @version v3.0
   */

  /**
   * Constructs a new <code>ErrorDetail</code>.
   * An array of implementations of this interface can be used as details for an error.
   * @alias module:model/ErrorDetail
   * @class
   * @param code {String} A service-defined error code that should be human-readable.  This code serves as a more specific indicator of the error than  the HTTP error code specified in the response.
   * @param message {String} A human-readable representation of the error. It is intended as  an aid to developers and is not suitable for exposure to end users.
   */
  var exports = function(code, message) {
    this.code = code;
    this.message = message;
  };

  /**
   * Constructs a <code>ErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorDetail} obj Optional instance to populate.
   * @return {module:model/ErrorDetail} The populated <code>ErrorDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('target'))
        obj.target = ApiClient.convertToType(data['target'], 'String');
    }
    return obj;
  }

  /**
   * A service-defined error code that should be human-readable.  This code serves as a more specific indicator of the error than  the HTTP error code specified in the response.
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * A human-readable representation of the error. It is intended as  an aid to developers and is not suitable for exposure to end users.
   * @member {String} message
   */
  exports.prototype.message = undefined;

  /**
   * The target of the particular error (e.g., the name of the property in error).
   * @member {String} target
   */
  exports.prototype.target = undefined;


  return exports;

}));
