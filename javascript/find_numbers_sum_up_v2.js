// Time Complexity:
//    O(n log n);
//    The sorting of the array takes O(nlogn), and the loop iterates through the sorted array only once, which takes O(n) in the worst-case scenario.
//  Space Complexity:
//    The space complexity is O(1) because no extra space is used.
function findSum(nums, k) {
    nums.sort(function(a, b) {
        return a - b
    })

    var left = 0;
    var right = nums.length - 1;
    
    var result = [];
    
    // Iterate until the pointers meet
    while (left < right) {
        // Calculate the sum of the current pair
        let sumVal = nums[left] + nums[right];
        
        // If the sum is less than the target sum, move the left pointer to the right
        if (sumVal < k) {
            left++;
        }
        // If the sum is greater than the target sum, move the right pointer to the left
        else if (sumVal > k) {
            right--;
        }
        // If the sum equals the target sum, add the pair to the result array and break the loop
        else {
            result.push(nums[left]);
            result.push(nums[right]);
            break;
        }
    }
    
    return result;
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
