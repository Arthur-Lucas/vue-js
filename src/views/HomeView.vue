<template>
<div class="body">
  <div class="carousel-form">
    <div class="documentation">
      <p> Dans un premier temps, on code simplement une "div" 
        contenant deux <mark>button</mark> et une balise <mark>img</mark>:
      </p>
      <img src="/public/images/Capture.png">
      <p> Dans le script je déclare une première fonction <mark>getRandomInt</mark>
        qui me permetra de choisir une valeur aléatoire en fonction d'une valeur maximum.<br>
        Maintenant que cette fonction est écrite, je commence à coder mon <mark>export default</mark>.<br>
        Pour commencer on définit deux variables dans la methode <mark>data</mark>, qui permet de definir des variables,<br>
        <mark>urlpick (null)</mark> et <mark>url (array[])</mark>: 
      </p>
      <img src="/public/images/Capture2.png">
      <p>
        On utilise ensuite la methode <mark>created</mark> qui permet d'agir sur un objet dès sa création,
        on donne donc une valeur à "urlpick" avec getRandomInt.
        Dans un second temps on déclare deux fonctions <mark>clickBefore</mark> et <mark>clickAfter</mark> dans la propriété methods (permet de déclarer des fonctions).
        Ces deux fonctions permettent d'inrémenter la valeur de urlpick et donc de modifier la valeur de l'url
      </p>
      <img src="/public/images/Capture3.png">
      <p>
        Pour finir, on déclare les fonctions utilisées directememnt dans les balises button du template, 
        on utilise les propriété <mark>@click</mark> de vue pour déclarer les fonctions <mark>clickBefore</mark> et <mark>clickAfter</mark>. 
        On précise également l'url de l'image grâce à la propriété vue <mark>v-bind</mark>, ici (<mark>:</mark> src), 
        qui permet de lier une variable du script à notre img du template.  
      </p>
      <img src="/public/images/Capture4.png">
  </div>

  <div class="carousel-form button">
        <form @submit.prevent="display">
            <button type="submit">Testez vos connaissances</button>
        </form>
  </div>
  </div>

  <div>
    <h2>Rendu final</h2>
    <div class="slider">
      <button @click="clickBefore"> 	&lt; </button>
      <img :src="url[urlpick]">
      <button @click="clickAfter"> > </button>
    </div>
  </div> 
</div>
    

</template>

<script>
export default {

  data() {
    return{
      urlpick: 1,
      url: ['https://images.unsplash.com/photo-1532501854787-31ce43c2b281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
      'https://wallpapercave.com/wp/wp2952650.jpg',
      'https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1428277.jpg&fm=jpg',
      'https://p4.wallpaperbetter.com/wallpaper/748/380/62/desert-rocks-macos-mojave-stock-5k-wallpaper-preview.jpg']
      }
  },

  methods: {
    display: function () {
      let array = document.querySelectorAll(".carousel-form");
      console.log(array);
      array.forEach((element) => {
        element.parentNode.removeChild(element);
      });
      this.$router.push("/skilltest");
    },
    clickAfter: function(){
        this.urlpick += 1
        if(this.urlpick == 3){
          this.urlpick = 0;
          }
      },
     clickBefore: function(){
       console.log('test');
         this.urlpick -= 1
         if(this.urlpick == 0){
         this.urlpick = 3;
         }
     }
  },
};
</script>

<style lang="scss">
  *{
    font-family: 'poppins';
    
    color: white;
  }
  h2{
    text-align: center;
  }
  .body{
    display: flex;
    align-items: flex-start;
    background-color: #282A36;
    padding: 100px 50px;
    gap: 50px;
  }
  mark{
    font-weight: 700;
    color: greenyellow;
    background-color: #282A36;
  }
  img{
      width: 400px;
  }
  
  .slider{
    display: flex;
    align-items: center;
    img{
      height: 250px;
    }
    button{
      height: 30px;
      border: none;
      font-size: 30px;
      background-color: #282A36;
    }
  }

  form button{
      appearance: none;
      outline: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem 1rem;
      background-color: rgb(77, 26, 218);
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.2rem;
      border-radius: 0.5rem;
      &:disabled {
        opacity: 0.5;
      }
  }
  .button{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px;
  }
</style>
