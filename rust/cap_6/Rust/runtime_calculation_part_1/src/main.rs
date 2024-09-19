// The runtime to algorithm is 2^(n-1)
fn calculation_runtime(num: i32) -> i32{
    println!("f({})\n", num);
    if num <= 1 {
        return 1;
    }
    if num + num == 2{
        println!("Last step");
    }
    return calculation_runtime(num - 1) + calculation_runtime(num - 1);
    
}
fn main() {
    let result = calculation_runtime(10);
    println!("result: {}", result);
}
