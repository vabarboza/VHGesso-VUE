<template>
  <div class="parceiros">
    <div class="container-sm my-5">
      <div class="card border border-dark rounded-sm bg-transparent">
        <div class="card-body text-center text-capitalize font-weight-bold">
          NOSSOS PARCEIROS
        </div>
      </div>

      <!--Section: Contact v.2-->
      <section class="mb-4">
        <!--Section heading-->
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          No momento não temos nenhum parceiro!
        </h2>
        <!--Section description-->
        <p class="text-center w-responsive mx-auto mb-5">
          Tem algum negócio e quer fazer uma parceria? Entre em contato pelo
          botão abaixo para que possamos entrar em contato.
        </p>
        <div class="container-sm text-center">
        <button v-on:click="entraContato" type="button" class="btn btn-outline-elegant btn-rounded waves-effect w-responsive">Entrar em Contato</button>
        </div>
      </section>
      <!--Section: Contact v.2-->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    entraContato() {
      this.$router.push('contato');
    }
  }
}
</script>

<style></style>
