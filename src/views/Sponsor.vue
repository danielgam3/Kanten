<template>
  <div class="container-fluid bg-dark">
    <div class="row p-1">
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h1 class="card-title">Become a sponsor of Kanten.</h1>
            <h3>Help our community and promote your company!!</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-1">
      <div class="col-md-12 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h1 class="card-title">Get in contact with us, we will negotiate the terms and conditions.</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-1">
      <div class="col-md-5 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h1 class="card-title">Here some of our actual sponsors:</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-5 pb-5">
      <div class="col-md-3">
        <a href="https://www.tuborgfondet.dk"  target="_blank"> <img class="rounded-3" src="../assets/sponsor1.jpeg" id="sponsor"> </a>
      </div>
      <div class="col-md-3">
        <a href="https://www.kuuf.dk"  target="_blank"> <img class="rounded-3" src="../assets/sponsor2.jpeg" id="sponsor"> </a>
      </div>
      <div class="col-md-3">
        <a href="https://www.sparnord.dk"  target="_blank"> <img class="rounded-3" src="../assets/sponsor3.png" id="sponsor3"></a>
       </div>
       <div class="col-md-3">
        <a href="https://lauritzenfonden.com"  target="_blank"> <img class="rounded-3" src="../assets/sponsor4.jpeg" id="sponsor2"> </a>
      </div>
    </div>
  </div>
  
  </template>
  
  <script>
  
  export default {
    name: 'SponsorKanten',
    props: {
      msg: String
    },
  
  };
  </script>
  <style scoped>
  
  #sponsor{
    width: 80%;
  }
  #sponsor2{
    width: 50%;
  }
  #sponsor3{
    width: 50%;
  }
  
  </style>
  