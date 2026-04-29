import { createMidContentBox } from "./script/functions";
import { skills, workExperience, personal } from "./script/constants";
import type { midBoxContentType } from "./script/functions";

const middleRow = document.getElementById('middle-row');

const updateMidContent = (content: midBoxContentType[]) => {
    if (!middleRow) return;
    middleRow.innerHTML = ''; 
    middleRow.appendChild(createMidContentBox(content));
};

const skillButton=document.getElementById('skillBtn') as HTMLButtonElement;
const workButton=document.getElementById('workBtn') as HTMLButtonElement;
const personalButton=document.getElementById('personalBtn') as HTMLButtonElement;

skillButton?.addEventListener('click',()=>{
    skillButton.disabled=true;
    workButton.disabled=false;
    personalButton.disabled=false;
    updateMidContent(skills);
});
workButton?.addEventListener('click',()=>{
    skillButton.disabled=false;
    workButton.disabled=true;
    personalButton.disabled=false;
    updateMidContent(workExperience)
} );
personalButton?.addEventListener('click',()=>{
    skillButton.disabled=false;
    workButton.disabled=false;
    personalButton.disabled=true;
    updateMidContent(personal)
} );

updateMidContent(skills);
skillButton.disabled=true;