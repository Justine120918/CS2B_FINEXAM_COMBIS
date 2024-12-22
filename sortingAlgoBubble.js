let numbers = [];
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
    }

    function bubbleSort(arr) {
      let n = arr.length;
        let comparisonProcess = [];
          for (let i = 0; i < n - 1; i++) {
              for (let j = 0; j < n - i - 1; j++) {
                    comparisonProcess.push(`Comparing ${arr[j]} and ${arr[j + 1]}`);
                          if (arr[j] > arr[j + 1]) {
                                  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                                          comparisonProcess.push(`Swapped: ${arr}`);
                                                }
                                                    }
                                                      }
                                                        return { sortedArray: arr, process: comparisonProcess };
                                                        }

                                                        const { sortedArray, process } = bubbleSort(numbers);
                                                        console.log("Sorted Array:", sortedArray);
                                                        console.log("Comparison Process:");
                                                        process.forEach((step) => console.log(step));
