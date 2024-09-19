fn merge_arrays(num1: &[i32], num2:&[i32]) -> Vec<i32> {
    let mut p1:usize = 0;
    let mut p2:usize = 0;
    let mut p3:usize = 0;
    let mut new_array = vec![0; num1.len() + num2.len()];
    while p1 < num1.len() && p2 < num2.len() {
        if num1[p1] < num2[p2] {
            new_array[p3] = num1[p1];
            p1+=1;
            p3+=1;
        }else {
            new_array[p3] = num2[p2];
            p2+=1;
            p3+=1;
        }
    }
    // remain values
    while p1 < num1.len() {
        new_array[p3] = num1[p1];
        p1+=1;
        p3+=1;
    }
    while p2 < num2.len() {
        new_array[p3] = num2[p2];
        p2+=1;
        p3+=1;
    }
    new_array
}
fn main() {
    let num1 = [23, 33, 35, 41, 44, 47, 56, 91, 105];
    let num2 = 	[1, 2];
    println!("Array 1 : {:?}", num1);
    println!("Array 2 : {:?}", num2);
    println!("Result : {:?}", merge_arrays(&num1, &num2));
    println!("Hello, world!");
}
