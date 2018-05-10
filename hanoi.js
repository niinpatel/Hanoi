function hanoi(n, fr, to, spare) {

    if(n === 1){
        console.log("Move from " + fr + " to " + to);
    }
    else {
        hanoi(n - 1, fr, spare, to);
        hanoi(1, fr, to, spare);
        hanoi(n - 1, spare, to, fr);
    }

}



hanoi(5, 1,2,3);