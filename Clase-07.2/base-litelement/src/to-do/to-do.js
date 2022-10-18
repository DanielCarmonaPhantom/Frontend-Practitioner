import {LitElement, html, css} from 'lit-element';
import './to-do-task.js';
import './to-do-input.js';

import sandbox from '../sandbox/sandbox.js';

class ToDo extends LitElement {
    static get properties(){
        return {
            title: {type:String},
            tareas:{type:Array}
        };
    }
    static get styles()
    {
        return css `
            ul{
                list-style-type:none; padding:0px;
            }
            li{
                width: 100%;
                height:30px;
                line-heigth:30px;
                border-bottom:1px solid #ccc;
            }
            li:hover{
                background:#999; color:#fff;
            }
        `;
    }
    constructor(){
        super();
        this.title="";
        this.tareas=[]; // [{"texto":"PASEAR PERRO", "PRIORIDAD":1}];

        sandbox.on('remover-tarea', this.eliminar.bind(this));
        sandbox.on('agregar-tarea', this.agregar.bind(this));
    }
    render (){
        return html `    
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <div>
                <h3>${this.title}</h3>
                <to-do-input @agregar-tarea="${this.agregar}"></to-do-input>
                <ul>
                ${this.tareas.sort(function(t1,t2)
                    {
                        return t1.prioridad - t2.prioridad;
                    }).map(
                        function(tarea){
                            return html `
                            <to-do-task
                            id="${tarea.id}"-- texto ="${tarea.texto}"-- prioridad="${tarea.prioridad}" @remover-texto="${this.eliminar}">
                            </to-do-task>
                            `;
                        }.bind(this)

                    )}
                </ul>
            </div>
        `;
    }

    agregar(e){
        this.id = this.getId();
        console.log(e.detail);
        var tarea={"id": this.id , "texto": e.detail.texto, "prioridad": e.detail.prioridad};
        this.tareas=[...this.tareas,tarea] ;
    }

    eliminar(e){
        this.tareas=this.tareas.filter(function (tarea){
            return tarea.id!=e.detail.id;
        });
        
        //console.log(e.detail);
    }
    update(){
        this.dispatchCount();
    }
    getId(){
        return Math.trunc(Math.random()*100);
    }
    dispatchCount(){
        console.log("dispatch")

        // this.dispatchEvent(new CustomEvent('count-tarea', {
        //     bubbles: true,
        //     composed: true,
        //     detail: {
        //         'count': this.tareas.length
        //     }
        // }));
        sandbox.dispatch('count-tarea', {
            'count': this.tareas.length
        }, this);
    }
}

customElements.define('to-do', ToDo);