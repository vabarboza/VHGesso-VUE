<template>
  <div class="contato">
    <div class="row">
      <!--Grid column-->
      <div class="col-md-9 mb-md-0 mb-5">
        <Toast ref='toast'/>
        <form ref="form" @submit.prevent="sendEmail">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input v-model="nome"  type="text" name="from_name" class="form-control" required />
                <label for="name" class>Seu Nome</label>
              </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input v-model="email" type="text" name="reply_to" class="form-control" required/>
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
                <input v-model="assunto" type="text" name="from_assunto" class="form-control" required/>
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
                <textarea v-model="mensagem" name="message" type="text" rows="2" class="form-control md-textarea" required></textarea>
                <label for="message">Sua Mensagem</label>
              </div>
            </div>
          </div>
          <!--Grid row-->
        

        <div class="text-center text-md-left">
          <button class="btn btn-elegant btn-rounded">Enviar</button>
        </div>

        </form>
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
import emailjs from 'emailjs-com';
import Toast from './Toast.vue';

export default {
  data: () => ({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  }),
  methods: {
    sendEmail() {
      emailjs.sendForm('service_xmvgouq', 'template_um5hqqo', this.$refs.form, 'user_c9iXupC4Ihl4fZHbsKMVw')
        .then((result) => {
          console.log('SUCCESS!', result.text);
          this.$refs.toast.showToast()
          this.nome = "",
            this.email = "",
            this.assunto = "",
            this.mensagem = ""
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    }
  },
  components: {
    Toast
  }
}
</script>

<style>
</style>