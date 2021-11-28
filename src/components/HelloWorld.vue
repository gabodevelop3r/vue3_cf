<template>
  <h3 v-text="msg"></h3>

  <button @click="evento">Emit</button>
</template>

<script>
export default {
  props : {
    'msg':String
  },
  methods:{
    evento(){
   
      this.$emit("eventos", this.msg)
    }
  }
}
</script>