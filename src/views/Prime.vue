<template>
    <div class="container-fluid bg-dark">
      <div class="row p-1">
        <div class="col-md-6 mx-auto my-auto">
          <div class="card bg-dark rounded-3" style="width: 100%;">
            <div class="card-body text-bg-dark rounded-3">
              <h1 class="card-title">Become Prime today for 90Dkk per Year!!</h1>
              <h3>Advantages of being a Prime Member:</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-2">
        <div class="col-md-4 mx-auto my-auto">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" style="width:50%;" data-bs-target="#exampleModal">
            Become Prime now!
          </button>
        </div>
      </div>
      <div class="row p-1">
        <div class="col-md-6 mx-auto my-auto">
          <div class="card bg-dark rounded-3" style="width: 100%;">
            <div class="card-body text-bg-dark rounded-3">
              <h5 class="card-title">1. Event Discounts:</h5>
              <p>
                 As a paid member, you can enjoy discounted ticket prices for events organized by Kanten. This provides an opportunity to attend performances and concerts at a more affordable rate.
                </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mx-auto my-auto">
          <div class="card bg-dark rounded-3" style="width: 100%;">
            <div class="card-body text-bg-dark rounded-3">
              <h5 class="card-title">2. Affordable Drinks: </h5>
              <p>
                 Members of Kanten receive special pricing on drinks, making it more cost-effective to enjoy beverages during events and private gatherings.
               </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-1">
        <div class="col-md-6 mx-auto my-auto">
          <div class="card bg-dark rounded-3" style="width: 100%;">
            <div class="card-body text-bg-dark rounded-3">
              <h5 class="card-title">3. Access to Private Events:</h5>
              <p>
               Being a paid member grants you access to exclusive private events organized by Kanten. These events may include special performances,
                gatherings, or workshops tailored for members, creating a more intimate and exclusive experience.
             </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mx-auto my-auto">
          <div class="card bg-dark rounded-3" style="width: 100%;">
            <div class="card-body text-bg-dark rounded-3">
              <h5 class="card-title">4. Supporting the Local Scene:</h5>
              <p>
                 By paying the annual fee, you actively support Kanten's mission of nurturing the local music and creative community. Your contribution helps sustain and improve the facilities, services, and opportunities provided by Kanten. 
               </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-1">
        <div class="col-md-6 mx-auto my-auto">
          <div class="card bg-dark rounded-3" style="width: 100%;">
            <div class="card-body text-bg-dark rounded-3">
              <h5 class="card-title">5. Enhanced Cultural Engagement:</h5>
              <p>
                 As a member, you become more deeply engaged with Kanten's activities and initiatives. This can lead to increased involvement in the cultural scene, fostering a stronger sense of connection and belonging within the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Became a member:</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="col-md-7 col-lg-8 mx-auto my-auto">
              <form class="needs-validation" novalidate="">
                <h4 class="mb-3">Payment</h4>
      
                <div class="my-3">
                  <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
                    <label class="form-check-label" for="credit">Credit card</label>
                  </div>
                  <div class="form-check">
                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
                    <label class="form-check-label" for="debit">Debit card</label>
                  </div>
                  <div class="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
                    <label class="form-check-label" for="paypal">PayPal</label>
                  </div>
                </div>
      
                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="cc-name" class="form-label">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                    <small class="text-body-secondary">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
      
                  <div class="col-md-6">
                    <label for="cc-number" class="form-label">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
      
                  <div class="col-md-3">
                    <label for="cc-expiration" class="form-label">Expiration</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                    <div class="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
      
                  <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                    <div class="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
            <button class="w-75 btn btn-primary btn-lg m-3" data-bs-dismiss="modal" type="submit">Continue to checkout</button>    
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>
  
  <script>
  
  export default {
    name: 'PrimeKanten',
    props: {
      msg: String
    },
  
  };
  </script>
  <style scoped>
  p{
    color: white;
  }
  
  </style>