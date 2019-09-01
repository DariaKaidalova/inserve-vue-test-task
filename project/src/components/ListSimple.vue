<template>
<div class="l-list">
  <ul class="b-list">
    <li class="b-list__item" v-for="(item, index) in checkForEmptyItems(list)" :key="index">{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'ListSimple',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  methods: {
    checkForEmptyItems: function (list) {
      return list.filter(function(item) {
        return item.length != 0;
      })
    }
  }
}
</script>

<style lang="sass"></style>
