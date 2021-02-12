function findMaxSubArrayBruteForce(arr) {
    let max_so_far = Number.NEGATIVE_INFINITY;
    let leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (let i = 0; i < len; i++) {

        for (let j = i; j < len; j++) {
            maxSum = 0;
            for (let k = i; k <= j; k++) {
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

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));




function findMaxSubArrayBruteForce(arr) {
	let max_so_far = Number.NEGATIVE_INFINITY;
	let leftIndex = 0,
		rightIndex = arr.length - 1,
		len = arr.length;

	for (let i = 0; i < len; i++) {
		maxSum = 0;

		for (let j = i; j < len; j++) {
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

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));