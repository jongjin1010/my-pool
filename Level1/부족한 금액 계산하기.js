function solution(price, money, count) {
    let temp = 0;
    
    for (let i = 1; i <= count; i++) {
       temp += price * i; 
    };
    
    return money > temp ? 0: temp - money
}
