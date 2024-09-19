function merge_arrays(arr1, arr2) {
  let newArray = new Array( arr1.length + arr2.length).fill(null);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if(arr1[p1]< arr2[p2]) {
      newArray[p3] = arr1[p1];
      p1++
      p3++
    }else {
      newArray[p3] = arr2[p2];
      p2++
      p3++
    }
  }
  //Remain Loops, this is to complete the array
  while (p1 < arr1.length) {
    newArray[p3] = arr1[p1];
    p1++
    p3++
  }
  while (p2 < arr2.length) {
    newArray[p3] = arr2[p2]
    p2++
    p3++
  }
  return newArray
}
function main() {
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
