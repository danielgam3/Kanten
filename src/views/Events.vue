<template>
  <div class="container-fluid bg-dark">
    <div class="row justify-content-center">
      <div v-for="event in allEvents" :key="event.id" class="card bg-dark m-2" style="width: 18rem;">
        <img :src="event.logo" class="card-img-top" alt="Event Image">
        <div class="card-body">
          <h5 class="card-title">{{ event.title }}</h5>
          <p class="card-text">{{ event.content }}</p>
          <img :src="event.poster" class="card-img-top m-2" alt="Event Image">
          <a href="https://billetto.dk/users/kanten" target="_blank" class="btn btn-primary">Buy Ticket</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase';

export default {
  name: 'EventsKanten',
  props: {
    msg: String
  },
  setup() {
    const allEvents = ref([]);

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const events = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const event = {
          id: doc.id,
          content: doc.data().content,
          title: doc.data().title,
          logo: doc.data().logo,
          poster: doc.data().poster
        };
        events.push(event);
      });
      allEvents.value = events;
    });

    return { allEvents };
  }
}
</script>

  <style scoped>
  p{
    color: white;
  }
  
  </style>
  