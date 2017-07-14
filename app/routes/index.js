import Ember from 'ember';

var questions = [{
  id: 1,
  question: "How old is your best friend?",
  author: "Alexander MK",
  additional notes: "My best friend is called Collins. We have been friends for over 24 years.",

}, {
  id: 2,
  question: "Which is better? The 5.6l, Landcruiser L200 or a 5.6, Lexus LX 570 on off road",
  author: "Kelvvin Kimani",
  additional notes: "Both are great cars. Just tell us which is better among these two 4*4 titans",

}, {
  id: 3,
  question: "Between Angular JS and Ember JS, which was quicker to learn?",
  author: "Emmanuel Michira",
  additional notes: "Angular JS is good for SPAs while Ember JS is used for developing more ambitious and complex applications",
}];


export default Ember.Route.extend({
  model() {
    return questions;
  },
});
