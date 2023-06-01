import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/Main.vue";
import Events from "../views/Events.vue";
import Gallery from "../views/Gallery.vue";
import Merch from "../views/Merch.vue";
import Newsletter from "../views/NewsLetter.vue";
import Prime from "../views/Prime.vue";
import Sponsor from "../views/Sponsor.vue";
import Volunteers from "../views/Volunteers.vue";

const routes = [
  {
    path: "/",
    name: "MainView",
    component: Main,
  },
  { path: "/events", name: "EventsView", component: Events },
  { path: "/gallery", name: "GalleryView", component: Gallery },
  { path: "/merch", name: "MerchView", component: Merch },
  { path: "/newsletter", name: "NewsletterView", component: Newsletter },
  { path: "/prime", name: "PrimeView", component: Prime },
  { path: "/sponsor", name: "SponsorView", component: Sponsor },
  { path: "/volunteers", name: "VolunteersView", component: Volunteers },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
