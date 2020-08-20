<template>
  <div>
    <!-- First section: Products integration -->
    <el-row>
      <el-col>
        <h1>{{ data.part1Title }}</h1>
      </el-col>
    </el-row>

    <el-row :gutter="gutter">
      <el-col
        :span="12"
        :xs="24"
        v-for="(detail, idx) in data.part1Body"
        :key="idx"
      >
        <el-card shadow="none" :style="detail.icon | cardStyle" class="card">
          <div class="card-body">
            <div class="card-title">
              <a :href="detail.link">
                <h3>{{ detail.title }}</h3>
              </a>
            </div>
            <div>
              {{ detail.content }}
            </div>
            <div
              v-if="detail.sublinks && detail.sublinks.length"
              class="titleCardLinks flex"
            >
              <div
                v-for="(sublink, index) in detail.sublinks"
                :key="index"
                class="titleCardLink"
              >
                <NavLink
                  v-if="sublink.url"
                  :item="{ link: sublink.url, text: sublink.text }"
                />
                <span v-else>{{ sublink.text }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- Second section: Dev Tools -->
    <el-row>
      <el-col>
        <h1>{{ data.part2Title }}</h1>
      </el-col>
    </el-row>
    <el-row :gutter="gutter">
      <el-col :span="12" :xs="24">
        <el-row v-for="(detail, idx) in data.part2Body" :key="idx">
          <el-card
            shadow="none"
            :style="detail.icon | cardStyle"
            class="card closer"
            @click.native="jump(detail.link)"
          >
            <div class="card-body">
              <div class="card-title">
                <a :href="detail.link">
                  <h3>{{ detail.title }}</h3>
                </a>
              </div>
              <div>
                {{ detail.content }}
              </div>
              <div
                v-if="detail.sublinks && detail.sublinks.length"
                class="titleCardLinks flex"
              >
                <div
                  v-for="(sublink, index) in detail.sublinks"
                  :key="index"
                  class="titleCardLink"
                >
                  <NavLink
                    v-if="sublink.url"
                    :item="{ link: sublink.url, text: sublink.text }"
                  />
                  <span v-else>{{ sublink.text }}</span>
                </div>
              </div>
            </div>
          </el-card>
        </el-row>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-card
          class="topCard"
          shadow="none"
          :style="data.part2TopCard.icon | cardStyle"
          @click.native="jump(data.part2TopCard.link)"
        >
          <img class="thumbnail" :src="data.part2TopCard.image" />
          <div class="card-body">
            <div class="card-title">
              <a :href="data.part2TopCard.link">
                <h3>{{ data.part2TopCard.title }}</h3>
              </a>
            </div>
            <div>{{ data.part2TopCard.content }}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- Third section: Community -->
    <el-row>
      <el-col>
        <h1>{{ data.part3Title }}</h1>
      </el-col>
    </el-row>
    <el-row :gutter="gutter">
      <el-col
        :span="8"
        :xs="24"
        v-for="(detail, idx) in data.part3Body"
        :key="idx"
      >
        <el-card
          shadow="none"
          :style="detail.icon | cardStyle"
          class="card closer"
          @click.native="jump(detail.link)"
        >
          <div class="card-body">
            <div class="card-title">
              <h3>{{ detail.title }}</h3>
            </div>
            <div
              v-if="detail.sublinks && detail.sublinks.length"
              class="titleCardLinks"
            >
              <div
                v-for="(sublink, index) in detail.sublinks"
                :key="index"
                class="titleCardLink"
              >
                <NavLink
                  v-if="sublink.url"
                  :item="{ link: sublink.url, text: sublink.text }"
                />
                <span v-else>{{ sublink.text }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- Fourth section: More links -->
    <el-row>
      <el-col>
        <!-- Just a margin trick to extend the line full-page -->
        <hr class="my-footer-line" />
      </el-col>
    </el-row>
    <el-row :gutter="gutter" class="footer-row">
      <el-col
        :span="6"
        :xs="24"
        v-for="(detail, idx) in data.part4Body"
        :key="idx"
      >
        <el-card
          shadow="none"
          :style="detail.icon | cardStyle"
          class="card closer"
        >
          <div class="card-body no-icon">
            <div class="card-title">
              <h4>{{ detail.title }}</h4>
            </div>
            <div
              v-if="detail.sublinks && detail.sublinks.length"
              class="titleCardLinks"
            >
              <div
                v-for="(sublink, index) in detail.sublinks"
                :key="index"
                class="titleCardLink"
              >
                <NavLink
                  v-if="sublink.url"
                  :item="{ link: sublink.url, text: sublink.text }"
                />
                <span v-else>{{ sublink.text }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <hr />
    <el-row :gutter="gutter">
      <el-col :span="12" :xs="24">
        <Content slot-key="foot1" />
      </el-col>
      <el-col :span="12" :xs="24">
        <Content slot-key="foot2" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "DeveloperHome",

  components: { NavLink },

  data() {
    return {
      gutter: 20
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
  mounted() {},
  methods: {
    jump(url) {
      window.location = url;
    }
  },
  filters: {
    cardStyle(img) {
      return {
        backgroundImage: `url(${img})`,
        backgroundSize: "64px 64px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left"
      };
    }
  }
};
</script>

<style lang="stylus">
.dev-home
  h2
    border none
    padding-top 2rem


.el-card__body
  padding 0px

.card-body:not(.no-icon)
  padding-left 5.5rem

.card-body
  line-height 1.5rem
  .card-title
    h3
      color: $textColor
      margin 0
      margin-bottom 10px
      font-size 1.15rem
    a
      h3
        color: $accentColor
  .sub-title
    margin 30px 0
    font-size 20px

  .titleCardLinks
    margin-top .5rem

  .flex
    .nav-link
      color: $textColor
      font-weight 700
    display flex
    flex-wrap wrap
    align-items flex-start

  .nav-link
    font-size 0.85rem
    font-weight 400
    line-height 1rem
    color $accentColor
    margin-right 1rem
  .nav-link::after
    //content: "\203A";

.el-card
  background none
  border none
  margin-bottom 40px
  cursor pointer

.card
  height auto
  width 100%
  @media only screen and (max-width: 575px)
    height auto

.topCard
  height auto
  width 100%
  @media only screen and (max-width: 575px)
    height auto
  border 1px solid $borderColor
  border-radius 12px
  .card-body
   padding 10px 20px

.footer-row
  .card-body
    .nav-link
      color: $textColor
    .card-title
      color: $textColor

// Hide default footer for this page
.page-edit
  display none

hr:not(.my-footer-line)
  display none

hr
  border-top 2px solid $borderColor
  margin-left -500px

.thumbnail
  padding 0
  bottom: 0
</style>
