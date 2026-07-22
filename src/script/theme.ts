import { ColorSwitch } from "./color-switch";
export const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    const element=document.getElementById('color-switch') as ColorSwitch;

    if(currentTheme=='dark'){
        element.setChecked=true;
    }
    else if(element){
        element.setChecked=false;
    }

    setTheme(currentTheme);
}
export const setTheme = (currentTheme: string) => {
    localStorage.setItem("theme",currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
}
