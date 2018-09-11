/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr = []) {
    
    let one, two, three, count = 0;
    
    arr.unshift(0);
    
    for (let i = 0 ; i < arr.length; i++) {
        one = arr[i];
        two = arr[one];
        three = arr[two];

        if (three === i && arr[one] !== one && arr[two] !== two && arr[three] !== three) {
            count ++
        }
    }

    return count / 3;
};
