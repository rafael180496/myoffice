const AppName ='MineralNic'

const NavCamb =(indpath=true)=>{
    let elem =document.getElementById("mainNav")
    if(indpath){
        elem.className="navbar navbar-expand-lg navbar-dark fixed-top"
    }else{
        elem.className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
    }
    
}
const AppSer ={
    AppName,
    NavCamb
}

export {AppSer};