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
    describe('Endpoint', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.Endpoint();
      });

      it('should create an instance of Endpoint', function() {
        // TODO: update the code to test Endpoint
        expect(instance).to.be.a(SpeechToTextApiV30.Endpoint);
      });

      it('should have the property project (base name: "project")', function() {
        // TODO: update the code to test the property project
        expect(instance).to.have.property('project');
        // expect(instance.project).to.be(expectedValueLiteral);
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

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
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

      it('should have the property lastActionDateTime (base name: "lastActionDateTime")', function() {
        // TODO: update the code to test the property lastActionDateTime
        expect(instance).to.have.property('lastActionDateTime');
        // expect(instance.lastActionDateTime).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property createdDateTime (base name: "createdDateTime")', function() {
        // TODO: update the code to test the property createdDateTime
        expect(instance).to.have.property('createdDateTime');
        // expect(instance.createdDateTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
