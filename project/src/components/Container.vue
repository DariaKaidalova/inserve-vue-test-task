<template>
<div class="l-container">
  <div class="b-container">
    <form-simple :onClick="onClick"></form-simple>
    <list-simple :list="list"></list-simple>
  </div>
</div>
</template>

<script>
import RestService from '@/services/restService'
import FormSimple from '@/components/FormSimple'
import ListSimple from '@/components/ListSimple'

export default {
  name: 'Container',
  components: {
    ListSimple,
    FormSimple
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    onClick: function (value) {
      RestService.sendText(value).then((data) => {
        this.list = data;
      })
    }
  }
}
</script>

<style lang="sass"></style>
