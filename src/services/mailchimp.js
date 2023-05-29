import axios from 'axios';

const apiKey = process.env.VUE_APP_MAILCHIMP_API_KEY;
//const listId = process.env.VUE_APP_MAILCHIMP_LIST_ID;

const mailchimpService = {
  subscribe(email) {
    const data = {
      email_address: email,
      status: 'subscribed'
    };
    return axios.post(
      `https://us19.api.mailchimp.com/3.0/lists/1/members`,
      data,
      {
        auth: {
          username: 'apikey',
          password: apiKey
        }
      }
    );
  }
};

export default mailchimpService;



