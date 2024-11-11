function solve(n,s,k){
  let conti =0;
  let c =0;
  for(let i=0; i<n-1; i++){
       //console.log(s[i],s[i+1])
       if(s[i]==s[i+1]){
           c++;
      }else{
      c++;
      if(conti<c){
        conti=c;
      }
    }
  }
  let total =0;
  if(conti>=k){
    if(conti-k>=0){
      let n = conti-k +1;
      total += (n*(n+1))/2
    }
    total += s.length - conti;
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