export const handleMainContent = (pageID:string,data:any) =>{
    const mainContent = document.getElementById("main-content") as HTMLElement | null;
    if(mainContent){
        const out:string=JSON.stringify(data[pageID]);
        mainContent.textContent=out;
    }
}