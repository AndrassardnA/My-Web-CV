import { handleMainContent } from "./content-main";
const routes: Record<string, string> = {
    "home": "main",
    "skills": "skills",
    "experience": "work_experience",
    "personal": "personal",
    "contact": "contact"
};
const BASE_PATH = window.location.pathname.includes('/My-Web-CV/') ? '/My-Web-CV/' : '';
export const initRouter = (data:any): void => {
    const handleRouting = (): void => {
        let path = window.location.pathname;
        if (BASE_PATH && path.startsWith(BASE_PATH)) {
            path = path.slice(BASE_PATH.length);
        }
        if (path === '' || path === '/index.html' || path === '/') {
            path = 'home';
        }
        const pageId = routes[path] || 'main';

        handleMainContent(pageId,data);   
    };

    document.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.tagName === 'BUTTON' && target.hasAttribute('nav-link')) {
            event.preventDefault();

            const url = target.getAttribute('nav-path');
            if (url) {
                const fullUrl = BASE_PATH + url;
                window.history.pushState(null, '', fullUrl);
            }
            handleRouting();
        }
    });
    window.addEventListener('popstate', () => {
        handleRouting();
    });
    handleRouting();
}