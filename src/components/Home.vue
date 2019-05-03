<template>
    <section class="home">
        <h1 class="title h1">The Front-end Bible</h1>
                <div class="container flex">
                    <div>
                        <h2 class="title">CSS3, JS, HTML5, & ALL FRONT-END DEVELOPMENT EXPLAINED</h2>
                        <p>This is a blog about front-end development. Front-end is messy and complicated these days!
                            So here, You'll find useful insights on the latest front-end tools & web technologies.
                            As a front-end developer, it's crucial that you find a way to be up to date to improve your work.
                            So Visit this blog regularly to keep learning new hacks and trends.
                            For each tool and technologie I talk about, I use it as a separate project within the blog, so I can test and have an opinion on each topic I cover here.
                            You can find a list of the most important subjects and tools in the menu to the left. But here is a link to an article that lists all the front-end tools you should install to start a project:
                        </p>
                    </div>
                    <div class="box">
                        <h3 class="title">Essential Tools for Front-end Development 2019</h3>
                        <p>You should grow some understanding of why one tool would be better suited than an other, and remember hip and trendy never means best suited for the job.</p>
                        <a href="" class="button primary">Read further</a>
                    </div>
                </div>
    </section>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h2 {
        margin-bottom: 2em;
    }
    .container {
        padding: 5em 0 10em;
        & > div:not(.box) {
            margin-right: 6em;
        }
    }
</style>
