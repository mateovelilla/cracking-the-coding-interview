//    Time complexity: O((m+n)* m)
//      m = size array 1
//      n = size array 2
//      For each insertion frp, nums2 inot nums1, up to m elements might need to be shifted
//    Space Complexity
//      O(m + n )
//      we are appending the rest of the elements in num2 at the end of nums1
function merge_arrays(nums1, nums2){
  let p1 = 0;
  let p2 = 0;
  // Traverse both arrays until the end of nums2 or nums2 is reached
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      nums1.splice(p1, 0, nums2[p2]);
      p1++;
      p2++;
    }else {
      p1++;
    }
  }
  if (p2 < nums2.length) {
    nums1 = nums1.concat(nums2.slice(p2));
  }
  return nums1;
}

function main(){
  let nums1 = [
	  [23, 33, 35, 41, 44, 47, 56, 91, 105],
		[1, 2],
		[1, 1, 1],
		[6],
		[12, 34, 45, 56, 67, 78, 89, 99]
	];
	let nums2 = [
		[32, 49, 50, 51, 61, 99],
		[7],
		[1, 2, 3, 4],
		[-99, -45],
		[100]
	];

	for (let i = 0; i < nums1.length; i++) {
        console.log(i+1, ".\tFirst array: [", nums1[i].join(", "),"]");
        console.log("\tSecond array: [", nums2[i].join(", "),"]");
        console.log("\tMerged Array: [", merge_arrays(nums1[i], nums2[i]).join(", "),"]");
        console.log("-".repeat(100));
    }
}
main()
