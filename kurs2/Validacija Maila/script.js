function testing(){
    let input = document.querySelector("#input")
    let value = input.value
    
    if(value.includes("@") && value.includes(".")){
        let pozicijaAt = value.indexOf("@")
        let pozicijaTac = value.indexOf(".")
        let izmedjuAT = value.substring(pozicijaAt +1,pozicijaTac)

            if(izmedjuAT.length > 0){
                let preAt = value.substring(0,pozicijaAt)
                    if(preAt.length > 3){

                        let posleTac = value.substring(pozicijaTac +1 , value.length)
                        
                        if(posleTac.length > 2){
                            console.log("okejjj");
                        }else{
                            console.log("Ne mozeeee");  
                        }
                        
                
                    }else{
                        console.log("Ne mozeeee");        
                    }
            }else{
                console.log("Ne mozeeee");
            }
            
        
    }else{
        console.log("Ne mozeeee");
    }

      


  
}
