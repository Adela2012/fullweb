<template>
  <div class="home">
    HOME 
    {{a}}<br>{{aCom}}
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      a: 1,
      c: 2
    }
  },
  mounted() {
    // setTimeout(() => {
    //    this.a++
    // }, 1000);
    // setTimeout(() => {
    //   this.a--
    // }, 1000);
  },
  computed: {
    aCom() {
      console.log('aCom')
      this.a
      this.c
      return new Date()
    }
  }
}
</script>
