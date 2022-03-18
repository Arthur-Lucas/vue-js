<template>
    <div class="carousel-form">
      <p>Lorem ipsum dolor sit amet. Sed voluptates perspiciatis non cumque incidunt qui minus quia qui repellendus voluptatibus sed iusto totam sit rerum aspernatur sit voluptas quaerat. A incidunt nisi ea illo tempore At nihil sint. Et exercitationem earum At saepe animi ab quos nobis. Et eius quae sed quis quia ut culpa voluptatem sit minima nesciunt in porro quas et exercitationem voluptas.

Et earum eius a nisi quas ut tenetur tempora. Ut atque expedita et laboriosam corporis vel adipisci pariatur ad esse dolorem et omnis culpa sed dolorem iusto vel pariatur atque. A quam eaque a assumenda velit eum repellendus nisi ab veniam exercitationem est architecto dolores. Et quae totam non aperiam soluta 33 quidem soluta.

A expedita veritatis id omnis natus non voluptates commodi nam autem molestiae qui harum sint qui adipisci maxime hic nemo facilis. Ea quia deserunt quo quia debitis ad labore nesciunt.</p>
    </div>
    <div class="carousel-form button">
        <form @submit.prevent="display">
            <button type="submit">Testez vos connaissances</button>
        </form>
    </div>
    <div :style="dn">
      <p>QCM</p>
    </div>


</template>

<script>
export default {
   data(){
     return{
       dn: 'display:none'
     }
   },
   methods:{
     display: function(){
        let array = document.querySelectorAll('.carousel-form')
        console.log(array)
        array.forEach(element => {
            element.parentNode.removeChild(element)
        });
        this.dn = 'display:block';
     }
   }
}
</script>

<style>

</style>