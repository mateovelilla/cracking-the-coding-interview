// Below are the steps of the algorithm:
// Sort the input array nums to enable efficient searching.
// Iterate through each element in the array:
// For each element nums[j], find the index of the complement to the current element (k - nums[j])
// using binary search because k - nums[j] will be the second element that will create a sum of k 
// when added with the current element.
// If the complement is found and it’s not the same element index, return the pair [nums[j], k - nums[j]].
// Time Complexity:
//   O(nlogn)
// Space Complexity
//    O(1)
function binarySearch(a, item) {
    var first = 0, mid;
    var last = a.length - 1;
    
    var found = false;
    var index = -1;
    // Perform binary search until the item is found or the pointers meet
    while ((first <= last) && !found) {
        mid = Math.floor((first + last) / 2);
        // Check if the middle element is the item
        if (a[mid] == item) {
            // If found, update the index and set found to True
            index = mid;
            found = true;
        } else {
            // If the item is smaller than the middle element, update the last pointer
            if (item < a[mid]) {
                last = mid - 1;
            } else { // If the item is larger than the middle element, update the first pointer
                first = mid + 1;
            }
        }
    }
    if (found) {
        return index;
    } else {
        return -1;
    }
}

function findSum(nums, k) {

    nums.sort(function(a, b) {
        return a - b
    })
    var index;

    for (var j = 0; j < nums.length; j++) {
        // Find the index of the complement to the current element using binary search
        index = binarySearch(nums, (k - nums[j]));
        // If the complement is found and it's not the same element, return the pair
        if (index != -1 && j != index) {
            return [nums[j], k - nums[j]];
        }
    }
    return [];
}


// Driver code
function main() {
    const inputs = [
        [1, 2, 3, 4],
        [1, 2],
        [2, 2],
        [-4, -1, -9, 1, -7],
        [25, 50, 75, 100, 400]
    ];

    const k = [5, 3, 4, -3, 425];

    for (let i = 0; i < inputs.length; i++) {
        console.log(`${i + 1}.\tArray: [${inputs[i].join(', ')}]`);
        console.log(`\tk: ${k[i]}`);
        console.log(`\tResult: [${findSum(inputs[i], k[i]).join(', ')}]`);
        console.log("-".repeat(100));
    }
}

main();
