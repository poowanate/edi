import React from 'react'
import axios from 'axios';

import cookie from 'cookie';





export const login = data => {

  return axios({
      method: 'POST',
      url: `http://103.245.164.54:5003/api/EMPLOYEE_AUTHORIZED_CENTER/login`,
      headers: {
    
          'Content-Type': 'application/json'
      },
      data: data
  }).then((result) => {
      console.log('hasil axios', result.data)
      return result.data

  }).catch(err => {
      console.log(err);
      return { error: 'Error......' }
  });
}


export const Authenticate = (data, next) => {
  // console.log(data);
  // setCookie('token', data.users.token)
  // setLocalStorage('user', data.users)
  next()
}
