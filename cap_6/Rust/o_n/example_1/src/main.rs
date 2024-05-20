fn foo(array: &[i32]){
    let mut sum = 0;
    let mut product: i32 = 1;
    for i in 0..array.len() {
        sum += array[i];
    }
    for i in 0..array.len() {
        product *= array[i];
    }
    print!("{} , {}", sum, product);
}
fn main() {
    let array = [1, 2, 3, 4, 5];
    foo(&array);
}
