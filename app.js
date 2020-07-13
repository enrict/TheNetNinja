new Vue({
    el: '#app', //declaring the root of the app
    data: {
      title: "Events",
      age: 21,
      x: 0,
      y: 0
    },
    methods: {
      add: function(inc) {
        this.age += inc
      },
      sub: function(dec) {
        this.age -= dec
      },
      mouseMotion: function(event) {
        // console.log(event)
        this.x = event.offsetX
        this.y = event.offsetY
      }
    }
})