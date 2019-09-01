import axios from "axios";

export default {

  sendText(value) {
    const options = {
      method: 'POST',
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      data: `text=${value}`,
      url: '/process.php',
    };

    return axios(options).then(result => {
      return result.data;
    }, error => {
      console.error(error);
    });
  } 
}
