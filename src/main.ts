import { drawName, toggleLanguageButtons } from "./script/content-header";
import "./script/color-switch"
import mainHU from "./data/data-hu.json";
import mainEN from "./data/data-en.json"
import navHU from "./data/nav-hu.json"
import navEN from "./data/nav-en.json"
import { initRouter } from "./script/router";
import { initNavButtons, toggleNavButtons, type NavigationData } from "./script/content-menu";
import { initTheme, setTheme } from "./script/theme";
import {ColorSwitch} from "./script/color-switch"


const initApp = () => {
    let language: string = document.documentElement.lang;
    let mainData;
    let navData: NavigationData;
    if (language == "hu") {
        mainData = mainHU;
        navData = navHU;
    }
    else {
        mainData = mainEN;
        navData = navEN;
    }

    drawName("name-cont", mainData.main.name);
    initNavButtons(navData);
    toggleNavButtons();
    initRouter(mainData);
    toggleLanguageButtons(language);
}
document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    if (target && (target.id == "hu" || target.id == "en")) {
        document.documentElement.lang = target.id;
        initApp();
    }
});
document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as ColorSwitch;
    if (target && (target.id == "color-switch")) {
        if(target.isChecked){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
});
initApp();
initTheme();