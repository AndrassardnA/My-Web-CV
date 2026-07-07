export const drawName = (id:string, name:string):void =>{
    const container = document.getElementById(id) as HTMLElement | null;
    if(container){
        container.textContent=name;
    }
}