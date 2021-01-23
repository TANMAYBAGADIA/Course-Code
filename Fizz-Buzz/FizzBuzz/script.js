let list = document.getElementById("list");
let input = document.getElementById("input");
let submit = document.getElementById("submit");


submit.addEventListener('click', function(){
    let value = input.value;
    value = parseInt(value);
    print(value);
    
})


function print(n){
    list.innerHTML = "";
    
for(let i = 1; i <= n; i=i+1){
    if(i % 15 == 0){
     list.innerHTML += "<li>" + "FizzBuzz" + "</li>"
    }
    else if(i % 5 == 0){
        list.innerHTML += "<li>" + "Buzz" + "</li>"
    }
    else if(i % 3 == 0){
        list.innerHTML += "<li>" + "Fizz" + "</li>"

    } 
    
    else{
        list.innerHTML += "<li>" + i + "</li>"
    }
}
}