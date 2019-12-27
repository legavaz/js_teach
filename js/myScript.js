
function returnFileName() {
            mElement     =   document.getElementById("id_fileName");
 
            if (mElement.innerHTML==="") {
             mElement.innerHTML  =  "name file: "+ document.baseURI ;
             
            } else {
             
             mElement.innerHTML  =  "" ;    
             
            }
}