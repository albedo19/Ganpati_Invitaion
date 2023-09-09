const arr =["1.jpg","2.jpg","3.jpg","4.jpg","5.png","6.png","7.jpg"];
var idx = 0, max=6
function carousel(){
    setTimeout(carousel,2500);
    if(idx>max)
    {
        idx=0;
    }
    const img1 = document.getElementById('img-carousel');
    console.log(`./Photos/carosel/${arr[idx]}`);    
    img1.src=`./Photos/carosel/${arr[idx]}`;
    idx++;
}

carousel();

