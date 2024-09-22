// Time Complexity
//      O(n^²)
//      For each iteration nested we need to add n
// Space Complexity
//    O(1)
//    No extra data added
function findSum(nums, k) {
    let result = [];
    
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            // Check if the sum of current pair equals the target sum (k)
            if (nums[i] + nums[j] === k) {
                // If found, push the pair to the result array and return
                result.push(nums[i]);
                result.push(nums[j]);
                return result;
            }
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
