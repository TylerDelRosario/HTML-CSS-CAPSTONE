function helloWorld (int) {
    return Math.floor(int * 2);
}

console.log(helloWorld(22));

function nthPower(arr, n) {

    //Check whether num is a power of N.
    function recursionN(num, index) {
        //If N to the power of index == num return true.
        if (n**index == num) {
            return true;
        }

        //If N to the power of index doesn't equal index and is less than
        //num, then run recursionN again and increase index by one.
        else if (n**index < num) {
            return recursionN(num, index+1);
        }

        //N to the power of index is greater than num and therefore num
        //is not a power of N.
        return false;

    }

    return arr.filter((element) => {
        
        if (recursionN(element)) {
            return element;
        }

    });

}