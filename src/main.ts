import { drawName } from "./script/content-header";
import "./script/color-switch"
import dataHU from "./content/data-hu.json";
import dataEN from "./content/data-en.json"
import { initRouter } from "./script/router";

let language="hu";
let data;
if(language=="hu"){
    data=dataHU;
}
else{
    data=dataEN;
}
drawName("name-cont",data.main.name);
initRouter(data);
