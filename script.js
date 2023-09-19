const nextBtn=document.getElementById("next-btn");
const previousBtn=document.getElementById("previous-btn");
const images=document.getElementById("images");

const imageList=["image1","image2","image3","image4"];
let imageIndex=0;
nextBtn.onclick=()=>{
if(imageIndex<3){
   imageIndex++;
images.src="img/"+imageList[imageIndex]+".jpg"; 
}
else{
    imageIndex=0;
    images.src="img/"+imageList[imageIndex]+".jpg"; 
}
};

previousBtn.onclick=()=>{
if(imageIndex>0){
    imageIndex--;
    images.src="img/"+imageList[imageIndex]+".jpg";
}
else{
    imageIndex=3;
    images.src="img/"+imageList[imageIndex]+".jpg";
}
};