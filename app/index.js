var arrayHelper = require('./array');

/**
 * Find all the equilibrium incidies in a array
 * @param array
 * @returns array
 * There are different ways to find the equilibrum indicies of an array. -
 * like nested looping the array to find out. But I have tried to give a best solution with single iteration.
 * The function will return array that contain list of equilibrium indicies.
 */
var findEquilibriumIndicies =  function(array){

    // First check whether all elements in the array are integer
    if(!arrayHelper.isIntger(array)){
        throw new TypeError('Non Integer Array');
    };

    // Otherwise process the
    var indicies = [];
    var arraySum = arrayHelper.sum(array);
    var leftElementsSum = 0;
    array.forEach(function(element, index){
        arraySum = arraySum - element;
        if(arraySum === leftElementsSum){
            indicies.push(index);
        }
        leftElementsSum = leftElementsSum + element;
    });
    return indicies;
};

exports.findEquilibriumIndicies = findEquilibriumIndicies


var init = function(){
    // Result 1
    var array1 = [-7, 1, 5, 2, -4, 3, 0];
    var result1 = findEquilibriumIndicies(array1);
    arrayHelper.printEquilibriumIndicies(array1, result1);

    console.log("----------------------------");

    // Result 2
    var array2 = [1, 2, 3, 4, 5, 4,3,2,1];
    var result2 = findEquilibriumIndicies(array2);
    arrayHelper.printEquilibriumIndicies(array2, result2);
    return;

    // Result 3 - for a non integer array
    /*var array3 = [1, 2, 'S', 4, 5, 4,3,2,1];
    try{
        findEquilibriumIndicies(array3);
    }
    catch(err){
        console.log(err);
    }*/
    return;
};

init();