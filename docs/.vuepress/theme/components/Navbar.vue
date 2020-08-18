<template>
  <header class="navbar">
    <div class="banner">
      <div class="banner-text">
        <a href="https://halo.iotex.io">
          <b>Halo</b>Grants are
          <div class="neon">open</div>
          <div class="subtitle">Get your next project funded</div>
        </a>
      </div>
    </div>
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink :to="$localePath" class="home-link">
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span
      >
    </RouterLink>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px'
            }
          : {}
      "
    >
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox
        v-else-if="
          $site.themeConfig.search !== false &&
            $page.frontmatter.search !== false
        "
      />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "@SearchBox";
import SidebarButton from "@theme/components/SidebarButton.vue";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
  name: "Navbar",

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox
  },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 3rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem

  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
.banner-text {
  margin: auto;
  margin-top .1rem
  text-align center
}
@media screen and (min-width: 0px) and (max-width: 720px) {
  .subtitle{ display: none; }
}

.subtitle
  display inline
.banner
  position: fixed;
  top: 0px;
  left: 0rem;
  right 0
  z-index 20
  width: 1278;
  height: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5)
  background: rgb(33,0,36);
  background: linear-gradient(90deg, rgba(33,0,36,1) 3%, rgba(9,100,121,1) 40%, rgba(115,201,145,1) 100%);
  .neon
    font-weight: 400;
    font-style: italic;
    font-size .85rem
    color: #fff;
    padding: 3px 5px;
    margin-left .2rem
    margin-right .3rem
    display inline
    border: 1px solid #fff;
    border-radius: 6px;
    text-transform: uppercase;
    text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #ff0080, 0 0 12px #ff0080, 0 0 18px #ff0080, 0 0 25px #ff0080, 0 0 35px #ff0080;
  a
    font-weight 300
    color #cafff7
    display inline
    margin-left 1rem
  a::after
    margin-left: .3rem
    content: "\203A";
</style>
