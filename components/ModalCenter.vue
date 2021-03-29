<template> 
    <b-modal id="modal-center" centered title="BootstrapVue">
      <p class="my-4">{{content && content.title}}</p>
    </b-modal>
</template>
<script>
export default {
    props: {
        content: {
            type: Object,
            default: () => {}
        }
    }
}
</script>