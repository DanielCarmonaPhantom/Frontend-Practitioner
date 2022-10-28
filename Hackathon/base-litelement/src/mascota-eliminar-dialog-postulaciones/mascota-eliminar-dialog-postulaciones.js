import { LitElement, html, css } from 'lit';

import sandbox from '../sandbox/sandbox.js';
export class MascotaEliminarDialogPostulaciones extends LitElement {
  static get properties() {
      return{
         id:{type:Number}
      }
  }

  constructor() {
    super();
    this.id=0;
    //this.esconderDialog();
    sandbox.on('abrir-modal',this.showDialog.bind(this));
  }

  showDialog(id){
    console.log("entrando a showdialog");
    let modalEliminar = this.shadowRoot.getElementById("modalEliminar");
    modalEliminar.classList.add('show');
    modalEliminar.style.display="block";
    this.id=id;
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
                    <h5 class="modal-title" id="exampleModalLongTitle">¡Eliminar!</h5>
                    <button type="button" @click="${this.esconderDialog}" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ¿Está seguro que desea eliminar?
                </div>
                <div class="modal-footer">
                    <button type="button" @click="${this.esconderDialog}" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" @click="${this.eliminarMascota}" class="btn btn-danger">Eliminar</button>
                </div>
                </div>
            </div>
            </div>
    `;
  }

  eliminarMascota(){
    this.esconderDialog();
    //console.log("Entrando a eliminar mascota");
    //console.log(this.id);
    sandbox.dispatch('delete-mascota-postulaciones',{id:this.id},this);
  }

}

customElements.define('mascota-eliminar-dialog-postulaciones',MascotaEliminarDialogPostulaciones );