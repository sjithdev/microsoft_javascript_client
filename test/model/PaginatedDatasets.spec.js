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
    describe('PaginatedDatasets', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.PaginatedDatasets();
      });

      it('should create an instance of PaginatedDatasets', function() {
        // TODO: update the code to test PaginatedDatasets
        expect(instance).to.be.a(SpeechToTextApiV30.PaginatedDatasets);
      });

      it('should have the property values (base name: "values")', function() {
        // TODO: update the code to test the property values
        expect(instance).to.have.property('values');
        // expect(instance.values).to.be(expectedValueLiteral);
      });

      it('should have the property nextLink (base name: "@nextLink")', function() {
        // TODO: update the code to test the property nextLink
        expect(instance).to.have.property('nextLink');
        // expect(instance.nextLink).to.be(expectedValueLiteral);
      });

    });
  });

}));
