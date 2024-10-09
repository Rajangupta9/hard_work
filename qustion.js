function trapped(n,m,mat){
    let count = 0;
  
    for (let i = 0; i < n ; i++) {
      for (let j = 0; j < m; j++) {
        if (mat[i][j] === 0) {
          if (i === 0) {
              if(mat[i+1][j] === 1 && mat[i][j-1] === 1 && mat[i][j+1] === 1){
                count++;
              }
          } else if (i === n-1) { 
              if(mat[i-1][j] === 1 && mat[i][j-1] === 1 && mat[i][j+1] === 1){
                count++;
              }
          } else if (j === 0) { 
              if(mat[i-1][j] === 1 && mat[i+1][j] === 1 && mat[i][j+1] === 1){
                count++;
              }
          } else if (j === m-1) { 
              if(mat[i-1][j] === 1 && mat[i+1][j] === 1 && mat[i][j-1] === 1){
                count++;
              }
          } 
          else{
              if(mat[i-1][j] === 1 && mat[i+1][j] === 1 && mat[i][j-1] === 1 && mat[i][j+1] === 1){
                count++;
              }
          }
      }  
    }
    console.log(count);
  }
}
  function runProgram(input) {
    let lines = input.trim().split('\n');
    let idx = 0;
    let [n,m] = lines[idx++].split(' ').map(Number);
    let mat = [];
    for(let i = 0; i < n; i++){
      mat.push(lines[idx++].split(' ').map(Number));
    }
    trapped(n,m,mat);
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