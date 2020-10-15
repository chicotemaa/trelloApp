const vm = new Vue({
    created() {
        var url ="https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(respuesta => respuesta.json())
                .then(respuesta => this.usuarios = respuesta);
    },
    el:"#app",
    data: {
        NuevaTarea:'',
        tiempo: 0,
        busqueda: '',
        usuarios: [],
        tareas: [
            {nombre: 'Aprender JavaScript moderno', tiempo: 3},
            {nombre: 'Aprender Vue.js', tiempo: 7},
            {nombre: 'Reparar el coche', tiempo: 22},
            {nombre: 'Viajar más', tiempo: 16},
            {nombre: 'Comprar la cena', tiempo: 12},
            {nombre: 'Mejorar como desarrollador', tiempo: 9},
            {nombre: 'Dar un curso', tiempo: 14},
        ]
    },
    computed:{
        filtroTareas(){
            return this.tareas.filter(tarea =>{
                return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda);
            })
        }
    },
    methods:{
        nuevaTarea(){
            this.tareas.unshift({
                nombre:this.NuevaTarea,
                tiempo:Math.floor(Math.random()*100)

            }),
            this.NuevaTarea=null;
        }
    }
})
Vue.config.productionTip = false