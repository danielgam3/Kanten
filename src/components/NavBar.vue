<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Kanten
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-auto" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" aria-current="page" href="/">Home</a>
          <a class="nav-link" href="/events">Events</a>
          <a class="nav-link" href="/newsletter">Newsletter</a>
          <a class="nav-link" href="/prime">Prime Member</a>
          <a class="nav-link" href="/volunteers">Volunteers</a>
          <a class="nav-link" href="/gallery">Gallery</a>
          <a class="nav-link" href="/sponsor">Become Sponsor</a>
        </div>
        <button type="button" class="btn btn-primary login" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</button>
      </div>
    </div>
  </nav>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control mx-auto" style="width:80%;" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control mx-auto" style="width:80%;" id="exampleInputPassword1">
          </div>
          <div class="modal-footer">
            <div class="mx-auto">
            <button type="button" class="btn btn-secondary m-1" data-bs-dismiss="modal">Log in</button>
            <button type="button" class="btn btn-primary m-1" data-bs-dismiss="modal">Sign up!</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'NavBar'
}
</script>


<style scoped>
h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .login{
    margin-left: auto;
  }

</style>