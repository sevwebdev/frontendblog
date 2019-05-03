<template>
    <footer id="footer">
        <div class="container">
            <span>
              A front-end blog by SB. Code &amp; design licensed under MIT.
            </span>
        </div>
    </footer>
</template>

<script>
  export default {
    name: 'footer'
  };
</script>

<style scoped lang="scss">
    $primary-color: black;
    $secondary-color: #f4c430;
    $tertiary-color: #888888;
    $white: white;

    $footer-bg: $primary-color;

    footer {
        background-color: $footer-bg;
        color: $white;
        padding: 4em;
    }

</style>