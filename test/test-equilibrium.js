var expect    = require("chai").expect;
var arrayHelper = require("../app/array");
var equblm = require("../app/index");

// Sample array data to input the test cases
var a1 = [-7, 1, 'A', 2, -4, 3, 0];
var a2 = [-7, 1, 5, 2, -4, 3, 0];
var a3 = [1, 2, 3, 4, 5, 4, 3, 2, 1];

describe("Equilibrium", function() {

    /*
       Validate the input array
    */
    describe("Array elements", function() {
        it("should be integer", function() {
            var x = arrayHelper.isIntger(a2);
            expect(x).to.be.true;
        });
        it("with non integer values not be processed", function() {
            var x = arrayHelper.isIntger(a1);
            expect(x).to.be.false;
        });
    });

    /*
        Test equilibrium indicies of all possible arrays
     */
    describe("Indicies", function() {
        it("A non integer array throws error", function() {
            expect(function(){equblm.findEquilibriumIndicies(a1)}).to.throw(TypeError);
        });
        it("An empty array has no indicies", function() {
            expect(equblm.findEquilibriumIndicies([])).to.have.lengthOf(0);
        });
        it("For an array [" + a2 + "] is 3,and 6", function() {
            expect(equblm.findEquilibriumIndicies(a2)).to.deep.equal([3,6]);
        });
        it("For an array [" + a3 + "] is 4", function() {
            expect(equblm.findEquilibriumIndicies(a3)).to.deep.equal([4]);
        });
        it("Are always between 0 and the length of the array", function() {
            var equblmIndex = equblm.findEquilibriumIndicies(a3);
            expect(equblmIndex[0]).to.be.above(-1);
            expect(equblmIndex[0]).to.be.below(a3.length);
        });
    });

});