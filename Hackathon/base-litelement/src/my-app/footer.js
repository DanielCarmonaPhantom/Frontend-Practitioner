import { LitElement, html,css } from 'lit-element';

class MascotaFooter extends LitElement {

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    static get styles() { 
        return css `
        #footer {
            font-size: 14px;
            background: #37517e;
            margin-top:80px;
          }
          
          #footer .footer-newsletter {
            padding: 50px 0;
            background: #f3f5fa;
            text-align: center;
            font-size: 15px;
            color: #444444;
          }
          
          #footer .footer-newsletter h4 {
            font-size: 24px;
            margin: 0 0 20px 0;
            padding: 0;
            line-height: 1;
            font-weight: 600;
            color: #37517e;
          }
          
          #footer .footer-newsletter form {
            margin-top: 30px;
            background: #fff;
            padding: 6px 10px;
            position: relative;
            border-radius: 50px;
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
            text-align: left;
          }
          
          #footer .footer-newsletter form input[type=email] {
            border: 0;
            padding: 4px 8px;
            width: calc(100% - 100px);
          }
          
          #footer .footer-newsletter form input[type=submit] {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            border: 0;
            background: none;
            font-size: 16px;
            padding: 0 20px;
            background: #47b2e4;
            color: #fff;
            transition: 0.3s;
            border-radius: 50px;
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
          }
          
          #footer .footer-newsletter form input[type=submit]:hover {
            background: #209dd8;
          }
          
          #footer .footer-top {
            padding: 60px 0 30px 0;
            background: #fff;
          }
          
          #footer .footer-top .footer-contact {
            margin-bottom: 30px;
          }
          
          #footer .footer-top .footer-contact h3 {
            font-size: 28px;
            margin: 0 0 10px 0;
            padding: 2px 0 2px 0;
            line-height: 1;
            text-transform: uppercase;
            font-weight: 600;
            color: #37517e;
          }
          
          #footer .footer-top .footer-contact p {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 0;
            font-family: "Jost", sans-serif;
            color: #5e5e5e;
          }
          
          #footer .footer-top h4 {
            font-size: 16px;
            font-weight: bold;
            color: #37517e;
            position: relative;
            padding-bottom: 12px;
          }
          
          #footer .footer-top .footer-links {
            margin-bottom: 30px;
          }
          
          #footer .footer-top .footer-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          #footer .footer-top .footer-links ul i {
            padding-right: 2px;
            color: #47b2e4;
            font-size: 18px;
            line-height: 1;
          }
          
          #footer .footer-top .footer-links ul li {
            padding: 10px 0;
            display: flex;
            align-items: center;
          }
          
          #footer .footer-top .footer-links ul li:first-child {
            padding-top: 0;
          }
          
          #footer .footer-top .footer-links ul a {
            color: #777777;
            transition: 0.3s;
            display: inline-block;
            line-height: 1;
          }
          
          #footer .footer-top .footer-links ul a:hover {
            text-decoration: none;
            color: #47b2e4;
          }
          
          #footer .footer-top .social-links a {
            font-size: 18px;
            display: inline-block;
            background: #47b2e4;
            color: #fff;
            line-height: 1;
            padding: 8px 0;
            margin-right: 4px;
            border-radius: 50%;
            text-align: center;
            width: 36px;
            height: 36px;
            transition: 0.3s;
          }
          
          #footer .footer-top .social-links a:hover {
            background: #209dd8;
            color: #fff;
            text-decoration: none;
          }
          
          #footer .footer-bottom {
            padding-top: 30px;
            padding-bottom: 30px;
            color: #fff;
          }
          
          #footer .copyright {
            float: left;
          }
          
          #footer .credits {
            float: right;
            font-size: 13px;
          }
          
          #footer .credits a {
            transition: 0.3s;
          }
          
          @media (max-width: 768px) {
            #footer .footer-bottom {
              padding-top: 20px;
              padding-bottom: 20px;
            }
          
            #footer .copyright,
            #footer .credits {
              text-align: center;
              float: none;
            }
          
            #footer .credits {
              padding-top: 4px;
            }
          }  
        
        `;
         }

    render() {
        return html`  
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <footer id="footer">


            <div class="footer-top">
            <div class="container">
                <div class="row">
                
                <div class="col-lg-10 footer-contact">
                    <h3>PETLESS</h3>
                
                </div>
                <div class="col-lg-2 footer-links">
                    <div class="social-links mt-3">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>

                    </div>
                </div>

                </div>
            </div>
            </div>

            <div class="container footer-bottom clearfix">
            <div class="copyright">
                &copy; Copyright <strong><span>PETLESS</span></strong>. Todos los derechos reservados
            </div>
            <div class="credits">
                Diseñado por el equipo 5
            </div>
            </div>
        </footer><!-- End Footer -->
        `;
    }
}

customElements.define('mascota-footer', MascotaFooter)