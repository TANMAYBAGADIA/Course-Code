function insertionSort(arr) {
        let memIndex = 0
        for (let i = 0; i < arr.length; i++) {
          memIndex = i;
          for (let j = i + 1; j >= 0; --j) {
            if (arr[j] >= arr[i]) {
              break;
            }
            if (arr[j] < arr[i]) {
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
              i = i - 1;
            }
          }
          i = memIndex;
        }
        return arr;
      }
      const arr = [5, 1, 6, 2, 4, 9, 9, 3, 1, 1, 1];
      console.log('Unsorted array', arr);
      console.log('Sorted array:', insertionSort(arr));