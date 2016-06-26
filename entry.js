import { items } from './items'
import $ from 'jquery'
$(() => {
  for (let item of items) {
    $('#items').append(`<li>${item}</li>`)
  }
})
