function findMaxSubArrayBruteForce(arr) {
    var max_so_far = Number.NEGATIVE_INFINITY;
    var leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;
            for (var k = i; k <= j; k++) {
                maxSum += arr[k];

                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }
    return {
        left: leftIndex,
        right: rightIndex,
        final_max_sum_subArray: max_so_far
    };
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));




function findMaxSubArrayBruteForce(arr) {
	var max_so_far = Number.NEGATIVE_INFINITY;
	var leftIndex = 0,
		rightIndex = arr.length - 1,
		len = arr.length;

	for (var i = 0; i < len; i++) {
		maxSum = 0;

		for (var j = i; j < len; j++) {
			maxSum += arr[j];

			if (max_so_far < maxSum) {
				leftIndex = i;
				max_so_far = maxSum;
				rightIndex = j;
			}
		}
	}
	return {
		left: leftIndex,
		right: rightIndex,
		final_max_sum_subArray: max_so_far
	};
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));