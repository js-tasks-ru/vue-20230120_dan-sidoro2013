<template>
  <div class="form-group" v-bind:class="{ 'form-group_inline': checkStyle()}">
    <!-- form-group_inline -->
    <label class="form-group__label">{{ this.$attrs.label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiFormGroup',

  data(){
    return {
      isInline: false,
    }
  },

  methods: {
    checkStyle(){
      if(this.$attrs.inline != undefined){
        this.isInline = true;
      }
      return this.isInline
    }
  },

};
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline + .form-group.form-group_inline {
  margin-left: 16px;
}

.form-group__label {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  margin-bottom: 10px;
  display: block;
}
</style>
