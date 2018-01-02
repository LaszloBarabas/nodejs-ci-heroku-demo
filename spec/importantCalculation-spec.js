

// Spec file to test if importantCalculation works properly

var importantModule = require('../logic/important');


describe ('Test suite for importantCalculation Checking', function () {
	//  first spec to check the multiplication of 2 and  3
	it('should multiply 2 and 3 correctly', function () {
		var result = importantModule.importantCalculationAdd(2,3);

		expect(result).toBe(5);
	});

	//  second spec to check the multiplication of 2 and  3
	it('should add 2 and 3 correctly', function () {
		var result = importantModule.importantCalculationMultiply(2,3);

		expect(result).toBe(6);
	});

});