interface NavButton {
    title: string;
    link: string;
}
export interface NavigationData {
    "nav-buttons": NavButton[];
}

export const initNavButtons = (data: NavigationData) => {
    const container = document.getElementById("menu-bar") as HTMLElement | null;
    if (container) {
        container.innerHTML='';
        for (let i = 0; i < data['nav-buttons'].length; i++) {
            const button = document.createElement('button');
            button.setAttribute('nav-link', '');
            button.setAttribute('nav-path', data['nav-buttons'][i]['link']);
            button.className = 'menu-button';
            button.innerText = data['nav-buttons'][i]['title'];
            container.appendChild(button);
        }
    }
}
export const toggleNavButtons = () => {
    const menuButtons = document.querySelectorAll<HTMLButtonElement>('.menu-button');
    document.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLButtonElement;
        if (target.hasAttribute('nav-link')) {
            menuButtons.forEach(element => {
                element.disabled = false;
            });
            target.disabled = true;
        }
    });
    let winPath = window.location.pathname;
    menuButtons.forEach(element => {
        let elemUrl = element.getAttribute('nav-path');
        if(winPath=='/My-Web-CV/'){
            winPath+='home';
        }
        if (elemUrl && winPath.endsWith(elemUrl)) {
            element.disabled = true;
        }
    });

}