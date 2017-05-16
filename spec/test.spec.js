
'use strict'

let getPrimes = require('../app/getPrime.js');



describe("Prime Numbers Generator", function() {
      it("should return [] for -2", function() {
        expect(getPrimes.getPrimes(-2).length).toBe(0);
      });

       it("should return [] for -12", function() {
        expect(getPrimes.getPrimes(-12).length).toBe(0);
      });

        it("should return [] for -30", function() {
        expect(getPrimes.getPrimes(-12).length).toBe(0);
      });

      it("should return [] for 0", function() {
        expect(getPrimes.getPrimes(0).length).toBe(0);
      });

      it("should return [] for 1", function() {
        expect(getPrimes.getPrimes(1).length).toBe(0);
      });
      it("should return [2] for 2", function() {
        expect(getPrimes.getPrimes(2).length).toBe(1);
      });

      it("should return [2,3] for 3", function() {
        expect(getPrimes.getPrimes(3).length).toBe(2);
      });

      it("should return [2,3] for 4", function() {
        expect(getPrimes.getPrimes(4).length).toBe(2);
      });
      it("should return [ ] for Negative number", function() {
        expect(getPrimes.getPrimes(5).length).toBe(3);
      });

      it("should return [2,3,5] for 6", function() {
        expect(getPrimes.getPrimes(6).length).toBe(3);
      });

      it("should return [2,3,5,7] for 8", function() {
        expect(getPrimes.getPrimes(8).length).toBe(4);
      });
      it("should return 'Invalid number' for 'notANumber'", function() {
        expect(getPrimes.getPrimes(['notANumber'])).toBe('Invalid number');
      });

 });
//test works