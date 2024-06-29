use std::collections::HashMap;
fn main(){
    let mut associative_array = HashMap::new();
    associative_array.insert("hello","associative");
    println!("{:?}",associative_array);
}