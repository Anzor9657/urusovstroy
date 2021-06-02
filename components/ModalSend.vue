<template> 
  <b-modal id="modal-send" ref="modal-send" centered hide-footer hide-header>
    <b-row  align-h="center" id="app" data-app>
      <b-col cols="10">
        <b-row align-h="end" class="padding-50">
          <b-img src="../static/images/close-icon.svg" class="outline-none" @click="$refs['modal-send'].hide()"/>
        </b-row>
        <b-row align-h="start">
          <v-col cols="12">
            <span class="big-text margin-50">
              Оставьте заявку и мы свяжемся с Вами
            </span>
          </v-col>
          <v-col xl="7" lg="7" sm="12" md="12">
            <v-text-field label="Ваше имя" v-model="name" dense/>
          </v-col>
          <v-col xl="7" lg="7" sm="12" md="12">
            <v-text-field
              dense
              label="Номер телефона"
              v-model="phone"
              v-mask="'# (###) ###-##-##'"
            />
          </v-col>
          <v-col xl="7" lg="7" sm="12" md="12" class="d-flex">
            <v-select
              dense
              label="Услуга"
              :items="items"
              v-model="service"
            />
          </v-col>
           <v-col xl="7" lg="7" sm="12" md="12" class="d-flex align-items-center justify-content-between">
            <v-btn color="#000" dark class="btn-action" @click="send">
              Отправить заявку
            </v-btn>
            <p v-if="showInfo" class="add-text m-0">Заявка получена! Скоро позвоним</p>
          </v-col>
        </b-row>
      </b-col>
    </b-row>
  </b-modal>
</template>
<script>
import { VueMaskDirective } from 'v-mask'

export default {
  directives: {
    mask: VueMaskDirective
  },
  data() {
    return {
      name: '',
      phone: '',
      service: '',
      showInfo: false,
      items: [
          'Дизайн интерьера',
          'Проектирование',
          'Строительство',
          'Ремонт',
          'Корпусная мебель',
          'Интерьерный салон'
        ],
    }
  },
  watch: {
    showInfo(val) {
      if (val) {
        setTimeout(() => {
          this.showInfo = false
        }, 5000)
      }
    }
  },
  methods: {
    send() {
      // window.open(`mailto:urusov_stroy@gmail.com?subject=${this.service}&body=${this.name}: ${this.phone}`);
      this.$mail.send({
        from: this.name,
        subject: this.service,
        text: `${this.name}: ${this.phone}`,
      })
      this.name = '';
      this.phone = '';
      this.service = '';
      this.showInfo = true;
    }
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 20px;
  height: 20px;
}
.add-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #ADADAD;
  height: fit-content;
}
.btn-action {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-transform: unset;
  width: 300px;
  min-height: 64px;
}
</style>