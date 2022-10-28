import { LitElement, html, css } from 'lit-element';  

class SideNav extends LitElement {  
    static get properties(){
        return{  
        };
    }
    
    static get styles(){
        return css `
            body {
                font-family: "Lato", sans-serif;
            }

            
            .sidenav {
                background-color: #7B3C99;
                padding-top: 20px;
                z-index: -50;
                height: 100%;
                
                
            }
            .sidenav img{
                border-radius: 8px;
            }
            
            
            

        `;
    }


    constructor(){
        super();

    }
    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            
            <div class="sidenav">
                <div class="login-main-text">
                    
                    <h2>PETLESS<br>Por un nuevo hogar</h2>
                    <p>"Ahora puedes adoptar o dar en adpción, no lo pienses más, es momento de hacerlos y ser feliz"</p>
                </div>
            </div>
        `;
    }
}

customElements.define('side-nav', SideNav);