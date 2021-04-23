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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpeechToTextApiV30);
  }
}(this, function(expect, SpeechToTextApiV30) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('EndpointProperties', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.EndpointProperties();
      });

      it('should create an instance of EndpointProperties', function() {
        // TODO: update the code to test EndpointProperties
        expect(instance).to.be.a(SpeechToTextApiV30.EndpointProperties);
      });

      it('should have the property loggingEnabled (base name: "loggingEnabled")', function() {
        // TODO: update the code to test the property loggingEnabled
        expect(instance).to.have.property('loggingEnabled');
        // expect(instance.loggingEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property timeToLive (base name: "timeToLive")', function() {
        // TODO: update the code to test the property timeToLive
        expect(instance).to.have.property('timeToLive');
        // expect(instance.timeToLive).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

    });
  });

}));
