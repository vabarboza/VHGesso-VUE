<template>
  <div class="contato">
    <div class="container-sm my-5">
      <div class="card border border-dark rounded-sm bg-transparent">
        <div class="card-body text-center text-capitalize font-weight-bold">FORMULARIO DE CONTATO</div>
      </div>

      <!--Section: Contact v.2-->
      <section class="mb-4">
        <!--Section heading-->
        <h2 class="h1-responsive font-weight-bold text-center my-4">Formulario de Contato</h2>
        <!--Section description-->
        <p class="text-center w-responsive mx-auto mb-5">
          Você tem alguma pergunta? Por favor, não hesite em nos contatar diretamente.
          Nossa equipe entrará em contato com você em questão de horas para ajudá-lo..
        </p>

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
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Sua Mensagem</label>
                  </div>
                </div>
              </div>
              <!--Grid row-->
              <input
                type="hidden"
                id="email1"
                name="email1"
                class="form-control"
                value="contato@vhgesso.com.br"
              />
            </form>

            <div class="text-center text-md-left">
              <a
                class="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >Enviar</a>
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
      </section>
      <!--Section: Contact v.2-->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>