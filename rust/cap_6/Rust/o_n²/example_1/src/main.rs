fn print_pairs(array: &[i32]) {
    for i in 0..array.len() {
        for j in i + 1..array.len() {
            println!("{} {}", array[i], array[j]);
        }
    }
}
fn main() {
    let array = [1, 2, 3, 4, 5];
    print_pairs(&array);
}
