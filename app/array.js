/*
    This is my custom helper function for handling array elements.
    Documented by Ashok on Feb-20-2017
 */


/**
 * Find th sum of all the elements in a array
 * @param array
 * @return integer
 */
exports.sum = function(array){
    var total = array.reduce(function(total, element){
        return total + element;
    }, 0);
    return total;
};


/**
 * Check whether all the elments in the array are integer or not
 * @param array
 * @return Boolean
 */
exports.isIntger = function(array){
    var flag = array.every(function(element){
        return Number.isInteger(element);
    });
    return flag;
};


/**
 * Return the string representation of the result
 * @param indicies
 * @returns String
 */
exports.printEquilibriumIndicies = function(array, indicies){
    console.log("Array:", array);
    if(indicies.length>0){
        console.log("Result:"+ indicies.join(','));
    }
    else{
        return 'There is no equilibrium index for the array';
    }
};