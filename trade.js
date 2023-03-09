function trade(){
    let a=+document.getElementById("aom").value
    let b=document.getElementById("fromcurrency").value
    let c=document.getElementById("tocurrency").value
    if(b=="USD"&&c=="VND"){
        a*=23500
        document.getElementById("result").innerHTML=a+"VND"
    }else if(b=="VND" && c=="USD") {
        a/=23500
        document.getElementById("result").innerHTML=a+"$"
    }else if(b=="VND"&&c=="VND"){
        a=a
        document.getElementById("result").innerHTML=a+"VND"
    }
else{
    a=a
    document.getElementById("result").innerHTML=a+"USD"
}
}