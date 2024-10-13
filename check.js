function fun(n, run) {
    let abdStrike = true;
    let runAbd = 0;
    let runKohli = 0;

    for (let i = 0; i < run.length; i++) {
        if (abdStrike) {
            runAbd += run[i];
        } else {
            runKohli += run[i];
        }

        if (run[i] === 1 || run[i] === 3) {
            abdStrike = !abdStrike;
        }

        if ((i + 1) % 6 === 0) {
            abdStrike = !abdStrike;
        }
    }

    if (runKohli > runAbd) {
        console.log("Virat Kohli");
    } else if (runAbd > runKohli) {
        console.log("AB de Villiers");
    } else {
        console.log("Tie");
    }
}



function runProgram(input) {
  // Write code here
  let lines = input.split("\n");
  let idx=0;
  let testcase = +lines[idx++];
  while(testcase--){
       let n = +lines[idx++];
       let run = lines[idx++].split(" ").map(Number);

       fun(n, run);
    }
    
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



