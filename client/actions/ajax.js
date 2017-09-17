

// encapsulate ajax methods

import axios from 'axios'


export function getAjax(url, cb) {
    axios.get(url)
    .then(function(response){
        cb(response);
    })
    .catch(function(err) {
        console.log(err);
    });
}

export function putAjax(url, cb) {
    axios.put(url)
    .then(function(response){
        cb(response);
    })
    .catch(function(err) {
        console.log(err);
    });
}

export function deleteAjax(url, cb) {
    axios.delete(url)
    .then(function(response){
        cb(response);
    })
    .catch(function(err) {
        console.log(err);
    });
}

export function postAjax(url, cb) {
    axios.post(url)
    .then(function(response){
        cb(response);
    })
    .catch(function(err) {
        console.log(err);
    });
}