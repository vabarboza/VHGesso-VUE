<template>
  <div class="forro-liso">
    <div class="container-sm my-5">
      <div class="card border border-dark rounded-sm bg-white">
        <div class="card-body text-center text-capitalize font-weight-bold">
          PRODUTOS
        </div>
      </div>

      <div class="card-body text-center">
        <img
          class="d-flex mt-3 mb-3 img-thumbnail text-center rounded mx-auto d-block"
          src="@/assets/produtos/forroliso/01.jpeg"
          style="width: 350px"
        />
        <p class="h5 font-weight-bold">Forro Liso</p>
        <p class="card-text text-center ml-4 mr-4 text-muted">
          É a tendência do momento usado para revestir paredes e teto pela sua
          versatilidade, plasticidade e acabamento. Ele trás um toque sutil e
          fino, paredes com bom acabamento de Gesso Liso e uma boa tinta é
          notória sua diferença e classe.
        </p>
      </div>

      <div class="row">
        <div class="view overlay zoom col-md-3">
          <figure>
            <img src="@/assets/produtos/forroliso/01.jpeg" class="img-fluid" />
          </figure>
        </div>

        <div class="view overlay zoom col-md-3">
          <figure>
            <img src="@/assets/produtos/forroliso/02.jpeg" class="img-fluid" />
          </figure>
        </div>
        <div class="view overlay zoom col-md-3">
          <figure>
            <img src="@/assets/produtos/forroliso/03.jpeg" class="img-fluid" />
          </figure>
        </div>
        <div class="view overlay zoom col-md-3">
          <figure>
            <img src="@/assets/produtos/forroliso/04.jpeg" class="img-fluid" />
          </figure>
        </div>
        <div class="view overlay zoom col-md-3">
          <figure>
            <img src="@/assets/produtos/forroliso/05.jpeg" class="img-fluid" />
          </figure>
        </div>
        <div class="view overlay zoom col-md-3">
          <figure>
            <img src="@/assets/produtos/forroliso/06.jpeg" class="img-fluid" />
          </figure>
        </div>
        <div class="view overlay zoom col-md-3 ">
          <figure>
            <img src="@/assets/produtos/forroliso/07.jpeg" class="img-fluid" />
          </figure>
        </div>
        <div class="view overlay zoom col-md-3">
          <figure>
            <img src="@/assets/produtos/forroliso/08.jpeg" class="img-fluid" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
