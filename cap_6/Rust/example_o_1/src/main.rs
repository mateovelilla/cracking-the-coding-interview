fn pair_sum(a:i32, b:i32)-> i32 {
    a + b
}
fn pair_sum_sequence(n:i32) -> i32 {
    let mut sum = 0;
    for i in 0..n {
        sum += pair_sum(i, n + i);
    }
    sum
}
fn main() {
    let result  =pair_sum_sequence(70);
    println!("{}", result);
}
