import { LitElement, html, css } from 'lit';

import sandbox from '../sandbox/sandbox.js';


export class InfoModal extends LitElement {
  static get properties() {
      return{
        mascota: {type:Object},
        src:{type:String},
        name
      }
  }

  constructor() {
    super();
    this.mascota=[];
    this.src="";



    //this.esconderDialog();
    sandbox.on('info-modal-adopcion',this.showDialog.bind(this));
  }

  showDialog(e){
    let modalEliminar = this.shadowRoot.getElementById("modalEliminar");
    modalEliminar.classList.add('show');
    modalEliminar.style.display="block";
    this.mascota=mascota.mascota;
    this.src =this.mascota.image.src;
  }


  esconderDialog(){
    var modalElimiar = this.shadowRoot.getElementById("modalEliminar");
    modalElimiar.classList.remove('show');
    modalElimiar.style.display="none";
  }


  render() {
    return html`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <!-- Modal -->
        <div class="modal fade" id="modalEliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title font-weight-bold" style="color:#483D8B" id="exampleModalLongTitle">${this.mascota.nombre}</h3>
                    <button type="button" @click="${this.esconderDialog}" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form>
                    <img src="${this.src}" height="150" width="100" class="card-img-top"/>
                    
                    <div class="form-row mt-3">
                        <div class="form-group col-md-6">
                        <label style="color:#483D8B" class="font-weight-bold" for="edad">Especie</label>
                        <input type="text" value="${this.mascota.especie}" class="form-control" id="edad" disabled>
                        </div>
                        <div class="form-group col-md-6">
                        <label style="color:#483D8B" class="font-weight-bold" for="edad">Edad</label>
                        <input type="text" value="${this.mascota.edad}" class="form-control" id="edad" disabled>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="descripcion" style="color:#483D8B" class="font-weight-bold">Descripcion</label>
                        <textarea disabled class="form-control" id="descripcion">${this.mascota.descripcion}</textarea>
                    </div>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="${this.esconderDialog}" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                </div>
                </div>
            </div>
            </div>
    `;
  }



}

customElements.define('info-modal',InfoModal);