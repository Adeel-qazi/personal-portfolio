//i would write a logic for showing and hiding the navigation as cross and ham
console.log("scripting running");
document.querySelector('.cross').style.display = 'none';    //cross's display is even none
document.querySelector('.hamburger').addEventListener("click", ()=>{       //add event in hamburger when someone clicks if cross is hide so show the cross
    document.querySelector('.sidebar').classList.toggle('sidebarGo');     //toggle is a method if cross is hidden so show the cross or cross is shown so hide the cross
                                                                             //that element is whose class is sidebar(first element)
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){     //is sidebarGo class?  inside of first element sidebar of class    //classList means inside class   //contains mean include
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'                       //hide the navigation
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        
        setTimeout(()=>{   //cross will take the position after 300 mili seconds
            document.querySelector('.cross').style.display = 'inline'
        } , 300); 
    
    }
       
})                                                                            
                                                                            