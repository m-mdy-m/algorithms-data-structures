fn main(){
    let array1d: [i32; 3] =[1,2,3];
    println!("first element array: {}",array1d[0]);
    for i in 0..array1d.len() {
        println!("Number at index {}: {}", i, array1d[i]);
    }
}