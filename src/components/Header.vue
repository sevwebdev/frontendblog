<template>
    <header>
        <nav class="navbar">
            <div class="navbar-brand is-spaced has-shadow">
                    <!--<a class="navbar-item">-->
                        <!--<img alt="Vue logo" src="../assets/logo.png">-->
                    <!--</a>-->

                    <!--Accessibility-->
                    <b-dropdown
                        v-model="navigation"
                        position="is-bottom-right"
                        aria-role="menu">
                        <a
                            class="navbar-item"
                            slot="trigger"
                            role="button">
                            <span>Accessibility</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item value="accessibility" aria-role="menuitem">
                            <router-link to="/accessibility" class="nav-link" href="">What is web accessibility ?</router-link>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="accessibility#core" aria-role="menuitem">
                            <router-link to="/accessibility#core" class="nav-link" href="">Core Principles</router-link>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="accessibility-audit" aria-role="menuitem">
                            <router-link to="/accessibility#audit" class="nav-link" href="">Auditing accessibility</router-link>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="accessibility-tools" aria-role="menuitem">
                            <router-link to="/accessibility#tools" class="nav-link" href="">Accessibility Developer Tools</router-link>
                        </b-dropdown-item>
                    </b-dropdown>
                    <!--CMS Integration-->
                    <b-dropdown
                        v-model="navigation"
                        position="is-bottom-left"
                        aria-role="menu">
                        <a
                            class="navbar-item"
                            slot="trigger"
                            role="button">
                            <span>CMS Integration</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item has-link aria-role="menuitem">
                            <a href="https://magento-u.magento.com/magento-u/downloads/M2_Certified_Professional_Front_End_Developer_Study_Guide.pdf?_ga=2.265184271.124867183.1537274536-575498854.1523622631" target="_blank">
                                Magento 2 - Front-end Study Guide
                            </a>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="magento2" aria-role="menuitem">
                            Magento 2
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="drupal8" aria-role="menuitem">
                            Drupal 8
                        </b-dropdown-item>
                    </b-dropdown>
                    <!--CSS Preprocessors-->
                    <b-dropdown
                        v-model="navigation"
                        position="is-bottom-left"
                        aria-role="menu">
                        <a
                            class="navbar-item"
                            slot="trigger"
                            role="button">
                            <span>CSS Preprocessors</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item value="less" aria-role="menuitem">
                            LESS
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="sass" aria-role="menuitem">
                            SASS
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="stylus" aria-role="menuitem">
                            Stylus
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="accessibility-tools" aria-role="menuitem">
                            Preprocessors Frameworks
                        </b-dropdown-item>
                    </b-dropdown>
                    <!--Front-end build tools-->
                    <b-dropdown
                        v-model="navigation"
                        position="is-bottom-left"
                        aria-role="menu">
                        <a
                            class="navbar-item"
                            slot="trigger"
                            role="button">
                            <span>Front-end build tools</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item value="package-management" aria-role="menuitem">
                            Package Management
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="task-runners" aria-role="menuitem">
                            Task Runners
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="yeoman" aria-role="menuitem">
                            Yeoman
                        </b-dropdown-item>
                    </b-dropdown>
                    <!--Front-end Frameworks-->
                    <b-dropdown
                        v-model="navigation"
                        position="is-bottom-left"
                        aria-role="menu">
                        <a
                            class="navbar-item"
                            slot="trigger"
                            role="button">
                            <span>Front-end build Frameworks</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item value="Bootstrap" aria-role="menuitem">
                            Bootstrap
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="Bulma" aria-role="menuitem">
                            Bulma
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="foundation" aria-role="menuitem">
                            Foundation
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="materia-design-lite" aria-role="menuitem">
                            Material Design Lite
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="materialize" aria-role="menuitem">
                            Materialize
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="semantic-ui" aria-role="menuitem">
                            Semantic UI
                        </b-dropdown-item>
                    </b-dropdown>
                    <!--Front-end build tools-->
                    <b-dropdown
                        v-model="navigation"
                        position="is-bottom-left"
                        aria-role="menu">
                        <a
                            class="navbar-item"
                            slot="trigger"
                            role="button">
                            <span>JS frameworks</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item value="angular-js" aria-role="menuitem">
                            AngularJS
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="angular-2" aria-role="menuitem">
                            Angular 2
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="backbone.js" aria-role="menuitem">
                            Backbone.js
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="ember.js" aria-role="menuitem">
                            Ember.js
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="meteor.js" aria-role="menuitem">
                            Meteor.js
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="react" aria-role="menuitem">
                            React.js
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="vue.js" aria-role="menuitem">
                            Vue.js
                        </b-dropdown-item>
                    </b-dropdown>
                    <!--Material Design-->
                    <!--<b-dropdown-->
                        <!--v-model="navigation"-->
                        <!--position="is-bottom-left"-->
                        <!--aria-role="menu">-->
                        <!--<a-->
                            <!--class="navbar-item"-->
                            <!--slot="trigger"-->
                            <!--role="button">-->
                            <!--<span>Material Design Frameworks</span>-->
                            <!--<b-icon icon="menu-down"></b-icon>-->
                        <!--</a>-->
                        <!--<b-dropdown-item value="lumX" aria-role="menuitem">-->
                            <!--LumX-->
                        <!--</b-dropdown-item>-->
                        <!--<hr class="dropdown-divider" aria-role="menuitem">-->
                        <!--<b-dropdown-item value="materialize" aria-role="menuitem">-->
                            <!--Materialize-->
                        <!--</b-dropdown-item>-->
                        <!--<hr class="dropdown-divider" aria-role="menuitem">-->
                        <!--<b-dropdown-item value="material-design-lite" aria-role="menuitem">-->
                            <!--Material Design Lite-->
                        <!--</b-dropdown-item>-->
                    <!--</b-dropdown>-->
                    <!--Responsive Design & Layouts-->
                    <b-dropdown
                        v-model="navigation"
                        position="is-bottom-left"
                        aria-role="menu">
                        <a
                            class="navbar-item"
                            slot="trigger"
                            role="button">
                            <span>Responsive Design & Layouts</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item value="media-queries" aria-role="menuitem">
                            Media Queries
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="flexbox" aria-role="menuitem">
                            Materialize
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item value="css grids" aria-role="menuitem">
                            CSS grids
                        </b-dropdown-item>
                    </b-dropdown>
                <b-dropdown
                    v-model="navigation"
                    position="is-bottom-left"
                    aria-role="menu">
                    <a
                        class="navbar-item"
                        slot="trigger"
                        role="button">
                        <span>Front-end Testing</span>
                        <b-icon icon="menu-down"></b-icon>
                    </a>
                    <b-dropdown-item value="syntax-testing" aria-role="menuitem">
                        Syntax & Code Quality Testing
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem">
                    <b-dropdown-item value="perf-testing" aria-role="menuitem">
                        Performance & Cross-browser testing
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem">
                    <b-dropdown-item value="regrassion-testing" aria-role="menuitem">
                        Visual Regression testing
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem">
                    <b-dropdown-item value="functional-testing" aria-role="menuitem">
                        Functional-Integration testing
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem">
                    <b-dropdown-item value="unit-testing" aria-role="menuitem">
                        Unit testing
                    </b-dropdown-item>
                </b-dropdown>
                    <!--Fave blogs-->
                    <b-dropdown
                        v-model="navigation"
                        position="is-bottom-left"
                        aria-role="menu">
                        <a
                            class="navbar-item"
                            slot="trigger"
                            role="button">
                            <span>Resources</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>
                        <b-dropdown-item has-link aria-role="menuitem">
                            <a href="https://frontendmasters.com/books/front-end-handbook/2019/" target="_blank">
                                Front-end Handbook 2019
                            </a>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item has-link aria-role="menuitem">
                            <a href="https://css-tricks.com/" target="_blank">
                                CSS Tricks
                            </a>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item has-link aria-role="menuitem">
                            <a href="http://www.standardista.com/" target="_blank">
                                Standardista (ESTELLE WEYL)
                            </a>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item has-link aria-role="menuitem">
                            <a href="http://jensimmons.com/" target="_blank">
                                Jen Simmons' blog
                            </a>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item has-link aria-role="menuitem">
                            <a href="https://speckyboy.com/" target="_blank">
                                Specky Boy
                            </a>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item has-link aria-role="menuitem">
                            <a href="https://tympanus.net/codrops/" target="_blank">
                                Codrops
                            </a>
                        </b-dropdown-item>
                        <hr class="dropdown-divider" aria-role="menuitem">
                        <b-dropdown-item has-link aria-role="menuitem">
                            <a href="https://ultimatecourses.com/blog" target="_blank">
                                Todd Motto's blog (JS focused)
                            </a>
                        </b-dropdown-item>
                    </b-dropdown>
            </div>
        </nav>
    </header>
</template>

<script>
  export default {
    data() {
      return {
        navigation: 'home'
      }
    }
  }
</script>

<style lang="scss">
    $primary-color: black;
    $secondary-color: #f4c430;

    $hover-color: $secondary-color;

    header {
        nav.navbar {
            background-color: $primary-color;
        }
        .navbar-brand {
            min-width: 100%;
            justify-content: space-evenly;
        }
        a.navbar-item, a.navbar-link {
            color: white;
            &:hover, &.is-active {
                color: $hover-color;
            }
        }
    }
</style>