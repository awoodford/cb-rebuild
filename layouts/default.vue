<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export default {
  components: {
    Header,
    Footer
  }
}
</script>
