function trapped_zeroes(row,col,array){
    let count =0
   
        
       for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
  
        
        if (array[i][j] === 0 &&
            (i === 0 || array[i-1][j] === 1) &&  
            (i === row - 1 || array[i+1][j] === 1) &&  
            (j === 0 || array[i][j-1] === 1) &&  
            (j === col - 1 || array[i][j+1] === 1)) {  
          count++;
        }
      }
    }
  
   
    
    console.log(count);
  }
  
  function runProgram(input) {
    // Write code here
    let lines = input.split('\n');
    let idx =0;
    let [row,col]= lines[idx++].split(" ").map(Number);
    let array = []
    for(let i=0; i<row; i++){
      array.push(lines[idx++].split(" ").map(Number));
    }
    trapped_zeroes(row,col,array);
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  