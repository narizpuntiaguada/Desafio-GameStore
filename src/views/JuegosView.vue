
<template>
  <div class="juegos">
    <header class="text-center my-5">
      <h1 class="text-principal"></h1>
    </header>
    <main class="container">
      <section class="">
        <h2 class="text-center my-5">Lista de juegos</h2>
        <table class="table">
          <thead class="text-center">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Stock</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(juego, index) in juegos" :key="index">
              <th scope="row">{{ juego.codigo }}</th>

              <td>{{ juego.nombre }}</td>
              <td>{{ juego.stock }}</td>
              <td>{{ juego.precio }}</td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-success btn-sm"
                    @click="agregar(juego.codigo)"
                  >
                    <i class="bi bi-plus-circle"></i>
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    @click="disminuir(juego.codigo, juego.stock)"
                  >
                    <i class="bi bi-dash-circle"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "JuegosView",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["juegos"]),
  },

  methods: {
    ...mapActions(["setJuegos", "incrementar", "onDisminuir"]),
    agregar(codigo) {
      this.incrementar(codigo);
    },
    disminuir(codigo,stock) {
      console.log(stock)
     if(stock > 0){
      this.onDisminuir(codigo);
     }     


    },
  },

  // AQUÍ IRÍAN MOUNTED - CREATED
  created() {
    this.setJuegos();
  },
};
</script>
<style scoped>
</style>