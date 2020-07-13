new Vue({
    el: '#app', //declaring the root of the app
    data: {
      name: "Rico",
      job: "Digital Designer {Web Developer/Designer, Video Editor, Graphic Designer}",
      website: "https://github.com/enrict",
      websiteTag: '<a href="https://github.com/enrict">link to github</a>'
    },
    methods: {
      greet: function(time,name) {
        name = this.name
        return 'Good '+ time + ' ' + name
      }
    },
})