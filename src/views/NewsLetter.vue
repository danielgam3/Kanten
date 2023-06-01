<template>
  <div class="container-fluid bg-dark">
    <div class="row p-1">
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h3>Description of NewsLetter!!!</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-1">
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h5 class="card-title">1. Stay Updated: </h5>
            <p>
              By subscribing to the newsletter, users will receive regular updates about the latest news, events, and promotions happening at Kanten. They will be the first to know about upcoming parties, live performances, special offers, and any other exciting happenings.
</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h5 class="card-title">2 Exclusive Offers:</h5>
            <p>
              Newsletter subscribers can enjoy exclusive discounts, offers, or early access to tickets for events. It gives them a sense of being a valued member of the club, as they receive special deals not available to the general public.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-1">
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h5 class="card-title">3. Event Reminders:</h5>
            <p>
              Sometimes, people might miss out on events due to a busy schedule. Subscribing to the newsletter ensures that they receive timely reminders about upcoming events, so they don't miss out on their favorite parties, concerts, or theme nights.</p>
            </div>
        </div>
      </div>
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h5 class="card-title">4. Insider Content:</h5>
            <p>
              The newsletter can provide subscribers with behind-the-scenes insights, interviews with artists or DJs, and exclusive content related to the club. This gives them a more intimate connection with Kanten and enhances their overall experience.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-1">
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h5 class="card-title">5. Community Engagement:</h5>
            <p>
              Subscribing to the newsletter can also make users feel like part of a community. It can include user-generated content and highlights of members' experiences at Kanten, fostering a sense of belonging and camaraderie.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h5 class="card-title">6. New Music Recommendations:</h5>
            <p>
              As Kanten is known for its music selection, the newsletter can include curated playlists, recommendations for new tracks, or even access to DJ mixes. This adds value to subscribers who are passionate about discovering new music and enhances their overall enjoyment of the club's atmosphere.
          </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row p-1">
      <div class="col-md-6 mx-auto my-auto">
        <div class="card bg-dark rounded-3" style="width: 100%;">
          <div class="card-body text-bg-dark rounded-3">
            <h5 class="card-title">7. VIP Access:</h5>
            <p>
              Occasionally, the newsletter can provide subscribers with the opportunity to win VIP passes, backstage meetups, or other exclusive experiences. This further incentivizes users to subscribe and increases their chances of enjoying unique privileges as part of the Kanten community.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div class="row bg-dark">
      <div class="col-md-6 mx-auto my-auto">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
        <div id="mc_embed_signup" class="rounded-3">
          <form
            action="https://gmail.us9.list-manage.com/subscribe/post?u=c63325db6b5d7dc6dafa5c736&amp;id=5f2796291f&amp;f_id=00150ce1f0"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
            target="_self">
            <div id="mc_embed_signup_scroll">
              <h2>NewsLetter</h2>
              <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address <span class="asterisk">*</span>
                </label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                  name="b_c63325db6b5d7dc6dafa5c736_5f2796291f" tabindex="-1" value=""></div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>

    </div>
</template>


<script>

export default {
  name: 'NewsLettersKanten',
  props: {
    msg: String
  }
};
</script>

<style scoped>
p {
  color: white;
}

h2 {
  color: white;
}

span {
  color: white;
}

#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  width: 600px;
}
</style>