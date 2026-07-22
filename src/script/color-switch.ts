export class ColorSwitch extends HTMLElement {
    private shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback(): void {
        this.render();
        this.setupEventListener();
    }
    private render(): void {
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="src/style/switch.css">
        
        <label id="custom-checkbox">
            <input type="checkbox" id="checkbox">
            <div id="color-switch">
                <div id="circle"></div>
            </div>
        </label>
        `
    }
    private setupEventListener(): void{
        const checkbox = this.shadow.getElementById('checkbox') as HTMLInputElement | null;

        checkbox?.addEventListener('change', ()=>{
            const event = new CustomEvent('switch-change', {
                detail:{checked:checkbox.checked},
                bubbles:true,
                composed:true
            });
            this.dispatchEvent(event);
        });
    }
    get isChecked(): boolean{
        const checkbox = this.shadow.getElementById('checkbox') as HTMLInputElement | null;
        return checkbox?.checked?? false;
    }
    set setChecked(value:boolean){
        const checkbox =this.shadow.getElementById('checkbox') as HTMLInputElement | null;
        if(checkbox){
            checkbox.checked=value;
        }
    }
}
customElements.define('color-switch',ColorSwitch);