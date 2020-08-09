
var arr = []
var paper = ""
var flag = true
var mode = true
var secret = true
var censor = true
var loweralpha = "abcdefghijklmnopqrstuvwxyz"
var capitalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var disp = document.getElementById("display")
var caps = document.getElementById("capslock")
function click_key(value,special){ 
    if (flag){
        if(!mode){
            if(!secret){
                paper = paper.split("")
                for(i=0; i< paper.length; i++){
                    paper[i] = '*'
                }
                paper = paper.join("")
                arr.push(special)
                paper = paper + special
                display.value = paper
                mode = true
                document.getElementById("shiftkey").style.color = "black"
                
            }
            else{
                arr.push(special)
                paper = paper + special
                display.value = arr.join("")
                mode = true
                document.getElementById("shiftkey").style.color = "black"
            }
            
        }
        else {
            if (!secret){
                paper = paper.split("")
                for(i=0; i< paper.length; i++){
                    paper[i] = '*'
                }
                paper = paper.join("")
                arr.push(value)
                paper = paper + value
                display.value = paper
               
            }
            else{
                arr.push(value)
                paper = paper + value
                display.value = arr.join("")
            }
              
        }
            
    }
    else {
        if(!mode){
            if(!secret){
                paper = paper.split("")
                for(i=0; i< paper.length; i++){
                    paper[i] = '*'
                }
                paper = paper.join("")
                arr.push(special)
                paper = paper + special
                display.value = paper
                mode = true
                document.getElementById("shiftkey").style.color = "black"
            }
            else{
                arr.push(special)
                paper = paper + special
                display.value = arr.join("")
                mode = true
                document.getElementById("shiftkey").style.color = "black"
            }
           
        }
        else{
            if(!secret){
                paper = paper.split("")
                for(i=0; i< paper.length; i++){
                    paper[i] = '*'
                }
                paper = paper.join("")
                for(i=0;i<loweralpha.length;i++){
                    if (value ==loweralpha[i]){
                        value = value.toUpperCase()
                    }
                    else if(value === '.com'){
                        value = ".COM"
                    }
                    else {
                        value = value
                    }
                }
                arr.push(value)
                paper = paper + value
                display.value = paper
                
            }
            else{
                
                for(i=0;i<loweralpha.length;i++){
                    if (value ==loweralpha[i]){
                        value = value.toUpperCase()
                    }
                    else if(value === '.com'){
                        value = ".COM"
                    }
                    else {
                        value = value
                    }
                }
                arr.push(value)
                paper = paper + value
                display.value = arr.join("")
            }
            
        }
         
    }
       
    console.log(arr)
     
}
function del_key(){
    arr.pop()
    paper = arr.join("")
    display.value = paper
      
}
function caps_key(){
    if (flag){
        document.getElementById("capslock").style.color = "green"
        flag = false
    }
    else {
        document.getElementById("capslock").style.color = "black"
        flag = true
    }
    
}
function shift_key(){
    if (mode){
        document.getElementById("shiftkey").style.color = "green"
        mode = false
    }
}
function passwd_key(){
    if(secret){        
        document.getElementById("password").style.color = "green"
        paper = paper.split("")
        for(i=0; i< paper.length-1; i++){
            paper[i] = '*'
        }
        paper = paper.join("")
        display.value = paper
        secret = false
    }
    else{
        
        document.getElementById("password").style.color = "black"
        display.value = arr.join("")
        secret = true
    }
}
function clean_key(){
    if(censor){
        document.getElementById("censor").style.color = "green"
        console.log(arr)
        var censorWords = ["asshole","bastard","bitch","erotic","nude","porn","erotic","shit","slut","sucks"]
        var str1 = arr.toString().toLowerCase().split(",").join("")
        var str2 = arr.toString().toLowerCase().split(",")
        censorWords.forEach(function(item){    
            for(i=0;i<str1.length;i++){
                for(j= i+1;j<=str1.length;j++){
                    var subStr = str1.substring(i,j)
                    if(item===subStr){
                        var indx = str1.indexOf(subStr)
                        for(k = 1;k<subStr.length-1;k++){
                            str2[indx+k]="*"
                        }
                        // str1 =  arr.toString().toLowerCase().split(",")
                        // str1.splice(indx,subStr.length)
                        // str1 = str1.join("")                    
                    }
                }     
            }
        })
        display.value = str2.join("")   
        censor = false
    }
    else {
        document.getElementById("censor").style.color = "black"
        display.value = arr.join("") 
        censor = true
    }
}
function rev_key(){
    if(reverse){
        document.getElementById("reverse").style.color = "green"
        var arr2 =[]
        var str = arr.toString().split(",")
        for(i=str.length-1;i>=0;i--){
            arr2.push(str[i])
            
        }
        console.log(arr2)
        display.value = arr2.join("")
        reverse = false
    }
    else if(!reverse){
        document.getElementById("reverse").style.color = "black"
        display.value = arr.join("")
        reverse = true
    }
}
function space_key(value){
    
    arr.push(value)
    paper = paper+value
    display.value = paper
}