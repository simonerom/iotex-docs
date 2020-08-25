<template>
  <el-row type="flex" justify="center">
    <el-col justyfy="center">
      <div id="subscribe">
        <el-form
          align="right"
          :inline="true"
          :model="formData"
          :show-message="false"
          size="small"
          :inline-message="true"
        >
          <el-form-item label="Developer Newsletter" />

          <el-form-item>
            <el-input
              v-model="formData.email"
              placeholder="coming soon..."
              disabled
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="submitButton" @click="onSubmit"
              >Subscribe</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: null
      }
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
  mounted() {},
  methods: {
    onSubmit() {
      alert("Developer Newsletter is coming soon!");
    }
  },
  filters: {}
};
</script>

<style lang="stylus">
.el-button
  background $accentColor
  border 1px solid #5e9988
  color white
.el-button:hover
  background lighten($accentColor,5%)
  color white
.title
  margin-bottom 1rem
</style>
