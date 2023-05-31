<template>
    <div class="container-fluid bg-dark">
      <div class="row mx-auto my-auto p-5">
        <div class="col-md-3 mx-auto my-auto">
          <div class="card" style="width: 18rem;">
            <img src="../assets/merch/Merch1.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Kanten Shirt Primal Design</h5>
              <div class="row">
                <div class="p-1">
                  <button class="btn btn-primary p-1 mr-2" type="submit">SM</button>
                  <button class="btn btn-primary p-1 mr-2" type="submit">MD</button>
                  <button class="btn btn-primary p-1 mr-2" type="submit">XL</button>
                </div>
              </div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto my-auto">
          <div class="card" style="width: 18rem;">
            <img src="../assets/merch/Merch2.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Kanten Shirt Sheesh Design</h5>
              <div class="row">
                <div class="p-1">
                  <button class="btn btn-primary p-1 mr-2" type="submit">SM</button>
                  <button class="btn btn-primary p-1 mr-2" type="submit">MD</button>
                  <button class="btn btn-primary p-1 mr-2" type="submit">XL</button>
                </div>
              </div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Buy
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto my-auto">
          <div class="card" style="width: 18rem;">
            <img src="../assets/merch/Merch3.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Kanten Shirt Minimal Design</h5>
              <div class="row">
                <div class="p-1">
                  <button class="btn btn-primary p-1 mr-2" type="submit">SM</button>
                  <button class="btn btn-primary p-1 mr-2" type="submit">MD</button>
                  <button class="btn btn-primary p-1 mr-2" type="submit">XL</button>
                </div>
              </div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  
  
    <!-- Buy Body -->
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
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
      name: 'MerchKanten',
      props: {
        msg: String
      },
    
    };
    </script>
    <style scoped>
    p{
      color: red;
    }
    
    </style>
    