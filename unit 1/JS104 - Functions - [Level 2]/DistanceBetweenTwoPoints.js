let x1=2;
let y1=3;
let x2=5;
let y2=7;

function DistanceBetweenTwoPoints(x1,y1,x2,y2){
    let finalx = (x2-x1);
    let finaly = (y2-y1);

    let res = finalx*finalx + finaly*finaly;
    return Math.sqrt(res);
}

console.log(DistanceBetweenTwoPoints(x1,y1,x2,y2))

