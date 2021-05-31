

function magicMatrices(arr) {

    let sum = 0;

    arr[0].forEach(x => sum += x);

    for (let row = 1; row < arr.length; row++) {
        let rowSum = 0;
        arr[row].forEach(x => rowSum += x);
        if (rowSum != sum)	return false;
    }

    for (let col = 0; col < arr[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < arr.length; row++)
            colSum += arr[row][col];
        if (colSum != sum)	return false;
    }
    
    return true;
}