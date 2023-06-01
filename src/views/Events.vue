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
    <div class="row mt-5 ml-3 justify-content-center">
      <div class="col-md-3">
        <form
        @submit.prevent="addComment"
        >
          <div class="mb-3">
            <input v-model="newComment.user" type="user" class="form-control" id="user" placeholder="user" aria-describedby="user">
          </div>
          <div class="mb-3">
            <textarea v-model="newComment.comment" type="text" class="form-control" id="comments" placeholder="comments" />
          </div>
          <button type="submit" class="btn btn-primary" :disabled="!newComment.user && !newComment.comment">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <h1>Comments</h1>
    </div>
    <div v-for="comment in allComments" :key="comment.id" class="card bg-dark m-auto row" style="width: 50rem;">
      <div class="card-body">
        <h5 class="card-title">{{ comment.user }}</h5>
        <p class="card-text">{{ comment.comments }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs, onSnapshot, addDoc } from "firebase/firestore";
import { db } from '@/firebase';

export default {
  name: 'EventsKanten',
  props: {
    msg: String
  },
  setup() {
    const allEvents = ref([]);
    const allComments = ref([]);
    const newComment = ref({
      user: '',
      comment: ''
    });

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const events = [];
      querySnapshot.forEach((doc) => {
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


    onMounted(async () => {
      onSnapshot(collection(db, 'comments'), (querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
          const comment = {
            id: doc.id,
            user: doc.data().user,
            comments: doc.data().comment
          }
          comments.push(comment)
        });
        allComments.value = comments;
      });
    });
    const addComment = () => {
      addDoc(collection(db, "comments"), {
        user: newComment.value.user,
        comment: newComment.value.comment
      });
      newComment.value.user = '';
      newComment.value.comment = '';
    }
    return { allEvents, allComments, addComment, newComment };
  }
}

</script>

<style scoped>
p {
  color: white;
}
h1 {
  color: white;
}

h5{
  color: white;
}
</style>
  