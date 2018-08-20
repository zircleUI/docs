<template>
  <div class="home">
    <div class="hero">

      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="Zircle UI" width="250px">
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
     <p class="action">
        <NavLink class="action-button" :item="actionLink"/>
     
        <NavLink class="action-button" :item="actionLink1"/>
     </p>
    </div>
    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <Content custom/>
    <div class="footer">
      <a href="https://twitter.com/zircle_ui" style="color: white"><i class="fab fa-twitter fa-2x"></i></a> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <a href="https://github.com/zircleui/zircleUI" style="color: white;"><i class="fab fa-github fa-2x"></i></a> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <a href="https://www.facebook.com/zircle.page" style="color: white;"><i class="fab fa-facebook-square fa-2x"></i></a>
      <br><br>
      with ❤ by <a href="https://github.com/tinchox5" style="color: white;">@tinchox5</a>
      <br>
       <br>
      <a href="https://raw.githubusercontent.com/zircleUI/zircleUI/master/LICENSE" style="color: white;">MIT Licensed | Copyright © 2017 - present | Juan Martín Muda</a>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    actionLink1 () {
      return {
        link: this.data.actionLink1,
        text: this.data.actionText1
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
.home
  padding 35px 2rem 0
  max-width 100%
  margin 0px auto
  .hero
    text-align center
    img
      max-height 280px
      display block
      margin 0 auto 1.5rem
    h1
      font-size 3rem
      font-weight 400
      color white
      letter-spacing 0.7rem
    h1, .description, .action
      margin 0 auto 1.5rem
    .description
      max-width 35rem
      font-size 1.6rem
      font-weight 300
      line-height 1.3
      color lighten(white, 40%)
    .action-button
      border-color white
      border-radius 2rem
      border-style solid
      border-width 1px
      box-sizing border-box
      color white
      display inline-block
      font-size 1.05rem
      letter-spacing 0.1rem
      margin 0.5rem 1rem
      padding 0.75em 2rem
      text-decoration none
      transition all 0.15s ease
      &:last-child
        background-color white
        color #179cde
        &:hover
          color inherit
          opacity 0.8
      &:hover
        color inherit
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content strech
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-width 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
