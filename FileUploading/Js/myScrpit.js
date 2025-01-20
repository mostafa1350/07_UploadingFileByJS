 const inputFile = document.getElementById("input-select-file");
 const btnFile = document.getElementById("btnFile");
 const spanTxt = document.getElementById("span-file");

//  =============================
// infact we call inputFile element when it's hidden

btnFile.addEventListener("click",()=>{
    inputFile.click();
});

// we want to investigate inputfile event when loading ...
inputFile.addEventListener("change",()=>{
    if(inputFile.value){
        spanTxt.innerHTML = 
                inputFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }else{spanTxt.innerHTML = "no file chosen,yet ...";}
})
