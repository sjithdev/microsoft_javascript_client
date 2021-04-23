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
    describe('TranscriptionProperties', function() {
      beforeEach(function() {
        instance = new SpeechToTextApiV30.TranscriptionProperties();
      });

      it('should create an instance of TranscriptionProperties', function() {
        // TODO: update the code to test TranscriptionProperties
        expect(instance).to.be.a(SpeechToTextApiV30.TranscriptionProperties);
      });

      it('should have the property diarizationEnabled (base name: "diarizationEnabled")', function() {
        // TODO: update the code to test the property diarizationEnabled
        expect(instance).to.have.property('diarizationEnabled');
        // expect(instance.diarizationEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property wordLevelTimestampsEnabled (base name: "wordLevelTimestampsEnabled")', function() {
        // TODO: update the code to test the property wordLevelTimestampsEnabled
        expect(instance).to.have.property('wordLevelTimestampsEnabled');
        // expect(instance.wordLevelTimestampsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property channels (base name: "channels")', function() {
        // TODO: update the code to test the property channels
        expect(instance).to.have.property('channels');
        // expect(instance.channels).to.be(expectedValueLiteral);
      });

      it('should have the property destinationContainerUrl (base name: "destinationContainerUrl")', function() {
        // TODO: update the code to test the property destinationContainerUrl
        expect(instance).to.have.property('destinationContainerUrl');
        // expect(instance.destinationContainerUrl).to.be(expectedValueLiteral);
      });

      it('should have the property punctuationMode (base name: "punctuationMode")', function() {
        // TODO: update the code to test the property punctuationMode
        expect(instance).to.have.property('punctuationMode');
        // expect(instance.punctuationMode).to.be(expectedValueLiteral);
      });

      it('should have the property profanityFilterMode (base name: "profanityFilterMode")', function() {
        // TODO: update the code to test the property profanityFilterMode
        expect(instance).to.have.property('profanityFilterMode');
        // expect(instance.profanityFilterMode).to.be(expectedValueLiteral);
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
