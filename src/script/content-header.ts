export const drawName = (id:string, name:string):void =>{
    const container = document.getElementById(id) as HTMLElement | null;
    if(container){
        container.textContent=name;
    }
}
export const toggleLanguageButtons=(lang:string)=>{
    const buttonHU=document.getElementById("hu") as HTMLButtonElement | null;
    const buttonEN=document.getElementById("en") as HTMLButtonElement | null;
    if(buttonHU&&buttonEN){
        buttonHU.disabled=false;
        buttonEN.disabled=false;

        if(lang==='hu'){
            buttonHU.disabled=true;
        }
        else{
            buttonEN.disabled=true;
        }
    }  
}