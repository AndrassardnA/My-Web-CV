import { drawName } from "./script/content-header";
import "./script/color-switch"
import mainHU from "./data/data-hu.json";
import mainEN from "./data/data-en.json"
import navHU from "./data/nav-hu.json"
import navEN from "./data/nav-en.json"
import { initRouter } from "./script/router";
import { initNavButtons, toggleNavButtons, type NavigationData } from "./script/content-menu";

let language="hu";
let mainData;
let navData:NavigationData;
if(language=="hu"){
    mainData=mainHU;
    navData=navHU;
}
else{
    mainData=mainEN;
    navData=navEN;
}
drawName("name-cont",mainData.main.name);
initNavButtons(navData);
toggleNavButtons();
initRouter(mainData);
