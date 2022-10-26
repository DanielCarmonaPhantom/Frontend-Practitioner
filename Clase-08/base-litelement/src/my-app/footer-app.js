import {LitElement, html, css} from 'lit-element'

class FooterApp extends LitElement {

static get properties(){
 return {
 };    
}
static get styles()
{
  return css `
            footer{
                padding-top:32px;
                background-color: #fff;
                bottom:0px;
                position:fixed;
                bottom:0px;

                color: #333;
                width:100%;
                padding:20px,10px;
                text-align:right;
                overflow: hidden;
            }
        `;
}
    constructor (){
        super();
    }
    render (){
        return html `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

        <footer id="footer">

            <div class="footer-top">
            <div class="container">
                <div class="row">

                <div class="col-lg-3 col-md-6 footer-contact">
                    <h3>To Do APP</h3>

                </div>

                

                </div>
            </div>
            </div>

            <div class="container d-md-flex py-4">

            
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            </div>
        </footer><!-- End Footer -->
        `;
    }
}
        customElements.define ('footer-app', FooterApp)