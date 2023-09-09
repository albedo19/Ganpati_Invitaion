const arr =["1.png","2.png","3.jpg","4.png","5.png"];
var idx = 0, max=4
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

