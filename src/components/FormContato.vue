<template>
  <div class="contato">
    <div class="row">
      <!--Grid column-->
      <div class="col-md-9 mb-md-0 mb-5">
        <form>
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="name" name="name" class="form-control" />
                <label for="name" class>Seu Nome</label>
              </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input type="text" id="email" name="email" class="form-control" />
                <label for="email" class>Seu E-Mail</label>
              </div>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->

          <!--Grid row-->
          <div class="row">
            <div class="col-md-12">
              <div class="md-form mb-0">
                <input type="text" id="subject" name="subject" class="form-control" />
                <label for="subject" class>Assunto</label>
              </div>
            </div>
          </div>
          <!--Grid row-->

          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-md-12">
              <div class="md-form">
                <textarea type="text" rows="2" class="form-control md-textarea"></textarea>
                <label for="message">Sua Mensagem</label>
              </div>
            </div>
          </div>
          <!--Grid row-->
        </form>

        <div class="text-center text-md-left">
          <a class="btn btn-primary">Enviar</a>
        </div>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
          <li>
            <i class="fab fa-whatsapp-square mt-4 fa-2x"></i>
            <p>(44) 99821-0967</p>
          </li>

          <li>
            <i class="fas fa-phone mt-4 fa-2x"></i>
            <p>(44) 99821-0967</p>
          </li>

          <li>
            <i class="fas fa-envelope mt-4 fa-2x"></i>
            <p>contato@vhgesso.com.br</p>
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>