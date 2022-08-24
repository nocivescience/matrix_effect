const matrixEl=document.getElementById('matrix');
var ctx=matrixEl.getContext('2d');
let width=matrixEl.width=window.innerWidth;
let height=matrixEl.height=window.innerHeight;
let srt= 'a+jx js:2 @dfs tr YY ufds M5f';
let matrix= srt.split('');
const font=21;
const col= width/font;
let arr= [];
for (let i; i<parseInt(col);i++){
    arr[i]=1;
}
const draw= ()=>{
    ctx.fillStyle='rgba(0,0,0,0.05';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle='#00FF00';
    ctx.font=`${font}px arial`;
    for(let i;i<arr.length;i++){
        let txt= matrix[Math.floor(Math.random()*matrix.length)];
        ctx.fillText(txt,i*font,arr[i]*font);
        if(arr[i]*font>height&&Math.random()>0.975){
            arr[i]=0;
        }
        arr[i]++;
    }
}
setInterval(draw,20);
window.addEventListener('resize',()=>location.reload());