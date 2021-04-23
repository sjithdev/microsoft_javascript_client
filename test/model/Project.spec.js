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
    describe('Project', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.Project();
      });

      it('should create an instance of Project', function() {
        // TODO: update the code to test Project
        expect(instance).to.be.a(SpeechToTextApiV30.Project);
      });

      it('should have the property links (base name: "links")', function() {
        // TODO: update the code to test the property links
        expect(instance).to.have.property('links');
        // expect(instance.links).to.be(expectedValueLiteral);
      });

      it('should have the property properties (base name: "properties")', function() {
        // TODO: update the code to test the property properties
        expect(instance).to.have.property('properties');
        // expect(instance.properties).to.be(expectedValueLiteral);
      });

      it('should have the property self (base name: "self")', function() {
        // TODO: update the code to test the property self
        expect(instance).to.have.property('self');
        // expect(instance.self).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property locale (base name: "locale")', function() {
        // TODO: update the code to test the property locale
        expect(instance).to.have.property('locale');
        // expect(instance.locale).to.be(expectedValueLiteral);
      });

      it('should have the property customProperties (base name: "customProperties")', function() {
        // TODO: update the code to test the property customProperties
        expect(instance).to.have.property('customProperties');
        // expect(instance.customProperties).to.be(expectedValueLiteral);
      });

      it('should have the property createdDateTime (base name: "createdDateTime")', function() {
        // TODO: update the code to test the property createdDateTime
        expect(instance).to.have.property('createdDateTime');
        // expect(instance.createdDateTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
