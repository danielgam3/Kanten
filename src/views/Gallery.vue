<template>
    <div class="container-fluid bg-dark">
        <div class="row">
          <div class="col-3 mx-auto p-5">
            <div class="list-group" id="list-tab" role="tablist">
              <div class="row">
                <div class="col">
                  <a class="list-group-item list-group-item-action active rounded-3" id="list-Photos-list" data-bs-toggle="list" href="#list-Photos" role="tab" aria-controls="list-Photos">Photos</a>
                </div>
                <div class="col">
                  <a class="list-group-item list-group-item-action rounded-3" id="list-Videos-list" data-bs-toggle="list" href="#list-Videos" role="tab" aria-controls="list-Videos">Videos</a>
                </div>
                </div>
            </div>
          </div> 
        </div>
        <div class="row">
          <div class="col-12">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="list-Photos" role="tabpanel" aria-labelledby="list-Photos-list">
                  <div class="row">
                    <div class="col-md-4 mb-4" v-for="image in allImages" :key="image.id">
                      <img :src="image.image" class="img-fluid rounded-3">
                    </div>
                  </div>              
              </div>
              <div class="tab-pane fade" id="list-Videos" role="tabpanel" aria-labelledby="list-Videos-list">
                <div class="row">
                  <div>
                    <div v-for="video in allVideos" :key="video.id">
                      <div class="video-item">
                        <video controls class="video-player">
                          <source :src="video.video" type="video/mp4">
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
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
    name: 'GalleryKanten',
    props: {
      msg: String
    },
    setup() {
      const allImages = ref([]);
      const allVideos = ref([]);
  
      onMounted(async () => {
        // Fetch images
        const imageQuerySnapshot = await getDocs(collection(db, "gallery"));
        const images = [];
        imageQuerySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          const image = {
            id: doc.id,
            image: doc.data().image
          };
          images.push(image);
        });
        allImages.value = images;
  
        // Fetch videos
        const videoQuerySnapshot = await getDocs(collection(db, "videos"));
        const videos = [];
        videoQuerySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          const video = {
            id: doc.id,
            video: doc.data().video
          };
          videos.push(video);
        });
        allVideos.value = videos;
      });
  
      return { allImages, allVideos };
    },
  };
  </script>
  
  <style scoped>
  p{
    color: white;
  }

  .video-player {
    width: 100%; /* Adjust the width as needed */
    height: auto; /* The height will adjust proportionally based on the width */
  }
  
  </style>
  