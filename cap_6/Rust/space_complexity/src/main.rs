use std::time::Instant;
use plotly::{
    Plot,
    Scatter
};

fn sum(num:i32) -> i32{
    if num == 0 {
        return 0;
    }
    return num + sum(num - 1);
}
// this would take O(N) time and O(N) in space.
fn main() {
    
    let mut x:[i32; 50000] = [0;50000];
    let mut y:[f32; 50000] = [0.0;50000];
    for i in 0..x.len() {
        let start = Instant::now();
        sum(i as i32);
        let duration = start.elapsed();
        x[i] = i as i32;
        y[i] = duration.as_secs_f32();
    }
    let mut plot = Plot::new();
    let trace = Scatter::new(x.to_vec(), y.to_vec());
    plot.add_trace(trace);
    plot.write_html("chart.html");
}
