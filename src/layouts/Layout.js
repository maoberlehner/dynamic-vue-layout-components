import Vue from 'vue';

export default {
  name: `Layout`,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  created() {
    // Check if layout component
    // has already been registered.
    if (!Vue.options.components[this.name]) {
      Vue.component(
        this.name,
        () => import(`../layouts/${this.name}.vue`),
      );
    }

    this.$parent.$emit(`update:layout`, this.name);
  },
  render() {
    return this.$slots.default[0];
  },
};
