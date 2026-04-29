export type midBoxContentType={
    title:string,
    className:string,
    contList:string[],
}
export const createMidContentBox = (content:midBoxContentType[]): HTMLDivElement => {
    const midContentBox = document.createElement('div');
    midContentBox.id = 'mid-content-box';

    const section = content;

    section.forEach(section=>{
        const boxColumn=document.createElement('div');
        boxColumn.className='boxColumn';

        const titleDiv=document.createElement('div');
        titleDiv.className='mid-title';
        titleDiv.textContent=section.title;
        boxColumn.appendChild(titleDiv);
    
        const listDiv=document.createElement('div');
        listDiv.className=section.className;

        section.contList.forEach(skillText=>{
            const skillItem=document.createElement('div');
            skillItem.textContent=skillText;
            listDiv.appendChild(skillItem);
        });
        boxColumn.appendChild(listDiv);
        midContentBox.appendChild(boxColumn);
    });
    return midContentBox;
}