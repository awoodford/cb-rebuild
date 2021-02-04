<template>
  <footer>
    <div class="footer">
      <div class="container-fluid">
        <div
          class="heading heading__sm heading__underline heading__semi-bold heading__grey heading__uppercase m-b-lg"
          v-html="mainHeading"
        ></div>

        <div class="row m-b-xxl">
          <div class="col-md-8">
            <div
              class="heading heading__lg heading__white"
              v-html="subHeading"
            ></div>
          </div>

          <div class="col-md-4">
            <Cta :data="cta"></Cta>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-3">
            <Logo theme="yellow" class="footer__logo" />

            <div class="footer__social-links-list">
              <a href="" class="footer__social-links-list_item"></a>
            </div>
          </div>

          <div class="col-sm-3">
            <ul class="footer__nav">
              <li
                class="footer__li m-b-md"
                v-for="link in navLinks"
                :key="link.title"
              >
                <router-link
                  :to="link.url"
                  :target="link.target"
                  :title="link.title ? link.title : link.label"
                  class="footer__a animated__link animated__link--yellow"
                  >{{ link.label }}</router-link
                >
              </li>
            </ul>
          </div>

          <div class="col-sm-3">
            <div
              class="footer__contact-info m-b-lg"
              v-for="info in contactInfo"
              :key="info.title"
            >
              <div
                class="heading heading__xs heading__grey heading__semi-bold heading__uppercase m-b-md"
              >
                {{ info.title }}
              </div>
              <a class="footer__contact-info_email">{{ info.email }}</a>
            </div>
          </div>

          <div class="col-sm-3">
            <div
              class="heading heading__sm heading__grey heading__semi-bold heading__uppercase"
            >
              {{ latestBlog.title }}
            </div>

            <a
              :href="latestBlog.post.url"
              :title="latestBlog.post.title"
              class="footer__latest-blog"
            >
              {{ latestBlog.post.title }}
            </a>

            <div class="footer__accreditations-list" v-if="accreditations">
              <router-link
                v-for="accreditation in accreditations"
                :key="accreditation.title"
                :to="accreditation.url"
                class="footer__accreditations-logo"
              >
                <img :src="accreditation.logo" :alt="accreditation.title" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__copyright">
      <div class="container-fluid">
        <div class="row">
          <div class="col text-left" v-html="createCopyrightMessage()"></div>
          <div class="col text-right">
            <router-link to="/privacy-policy" class="footer__copyright_a"
              >Privacy Policy</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/generic/Logo";
import Cta from "@/components/generic/Cta";

export default {
  name: "Footer",
  components: { Logo, Cta },
  data() {
    return {
      mainHeading: "Got a project in mind?",
      subHeading: "Let's make something<br/>great together.",
      cta: {
        type: "modalTrigger",
        modalContent: "", // import modal component into here
        label: "Start a project",
        theme: "yellow",
        animatedBorder: true
      },
      navLinks: [
        {
          label: "About",
          title: "About Cold Banana",
          url: "/about",
          target: ""
        },
        {
          label: "Services",
          title: "Services we offer",
          url: "/services",
          target: ""
        },
        {
          label: "Work",
          title: "Work we have done",
          url: "/work",
          target: ""
        },
        {
          label: "Insight",
          title: "Get Insight into Cold Banana?",
          url: "/insight",
          target: ""
        },
        {
          label: "Connect",
          title: "Connect with us",
          url: "/connect",
          target: ""
        }
      ],
      contactInfo: [
        {
          title: "Say Hello",
          email: "info@coldbananastudio.com"
        },
        {
          title: "We're Hiring",
          email: "info@coldbananastudio.com"
        }
      ],
      latestBlog: {
        title: "Latest Blog",
        post: {
          title: "Our Head of Dev talks headless CMS development using Umbraco",
          url: "/"
        }
      },
      accreditations: [
        {
          title: "RAR Recommended",
          logo: require("~/assets/img/accreditations/rar.png"),
          url: "#"
        },
        {
          title: "Bima",
          logo: require("~/assets/img/accreditations/bima.png"),
          url: "#"
        }
      ]
    };
  },
  methods: {
    createCopyrightMessage() {
      let today = new Date();
      let thisYear = today.getUTCFullYear();
      return "&copy; " + thisYear + " Cold Banana Studio Ltd.";
    }
  }
};
</script>
