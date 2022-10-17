import { LitElement, html, css } from 'lit-element';
import './to-do-task';

class ToDo extends LitElement {
    static get properties() {
      return {
        title: {type:String},
              tareas: {type:Array}
      };
	  }
    static get styles()
    {
        return css
            `ul {
                list-style-type:none;
                padding: 0px;
            }
            li {
                width: 100%;
                height: 30px;
                line-height: 30px;
                border-bottom: 1px solid #ccc;
            }
            li:hover{
                background-color: #999;
                color: #fff;

            }
        `;
    }
    constructor() {
      // Always calls super() first.
      super();

          this.title = ""
      this.tareas = []; //[{'texto': 'Pasear el perro', 'prioridad': 1}]
	  }
    render(){
        console.log(this.tareas);
        return html `
            <div>
                <h3>${this.title}</h3>
                <ul>
                    ${this.tareas.sort(function(t1,t2){
                        return t1.prioridad-t2.prioridad;
                    }).map(
                        function (tarea) {
                          return html `<to-do-task id="${tarea.id}" tarea ="${tarea.texto}" prioridad = "${tarea.prioridad}" @remover-tarea="${this.eliminar}" '></to-do-task>`;
                        }.bind(this)
                    )}
                </ul>
            </div>
        `
    }
    agregar(e){
        console.log(e.detail());
        var tarea = {
            'id': this.getId(),
            'texto': e.detail.texto,
            'prioridad': e.detail.prioridad
        }
        this.tareas = [... this.tareas, tareas]
    }
    eliminar(e){
        this.tareas = this.tareas.filter(function(tarea){
            return tarea.id!= e.detail.id; // Va a devolver todas las tareas donde el iud sea diferente al id que se paso
        })
    }

    getId(){
        return Math.trunc(Math.random()*1000000);
    }
}

customElements.define('to-do', ToDo)
