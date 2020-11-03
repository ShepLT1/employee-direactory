import axios from 'axios';

export default {
  // Gets all employees
  getEmployees: function () {
    return axios.get('https://randomuser.me/api/?results=200&nat=us', {
      "crossdomain": "true"
    });
  }
};