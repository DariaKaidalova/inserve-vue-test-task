<template>
<div class="l-form">
  <form action="" class="b-form">
    <div class="b-form__row">
      <div class="b-form__item">
        <textarea class="b-field" v-model.trim="value" @keyup="onKeyUp($event, value)"></textarea>
      </div>
      <div class="b-form__item">
        <button class="b-button" type="button" @click="onClick(value)">Submit</button>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'FormSimple',
  props: {
    onClick: {
      type: Function,
      default: () => []
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onKeyUp: function (event, value) {
      if(event.key === 'Enter' && event.ctrlKey === true) {
        this.onClick(value);
      }
    }
  }
}
</script>

<style lang="sass"></style>
