<script>
export default {
  data() {
    return {
      duration: 15000,
      passed: 0,
    };
  },
  created() {
    let lastTime = performance.now();
    const update = () => {
      const time = performance.now();
      this.passed += Math.min(time - lastTime, this.duration - this.passed);
      lastTime = time;
      this.handle = requestAnimationFrame(update);
    };
    update();
  },
  unmounted() {
    cancelAnimationFrame(this.handle);
  },
};
</script>

<template>
  <div class="flex body gap">
    <div class="margin padding">
      <p>
        Partie script :
          On defini 2 variables : duration pour la duree du chrono en ms et passed pour le temps ecoule depuis le debut du chrono.<br>
          On va utiliser la methode <mark>create()</mark> nous permet de rajouter plus de parametre d'initialisation de notre page comme on le souhaite<br>
          On definit a l'interieur de cette derniere la fonction de mise a jour du chrono (update) en utilisant <mark>performance.now()</mark> pour recupper le temps ecoule.<br> On utilise ces valeurs comme ci-dessous pour incrementer le chrono et lancer l'animation de ce dernier.
          La methode <mark>unmonted</mark> va nous servir a arreter l'animation.
      </p>
      <img class="padding" src="/public/images/Script_chrono.png" alt="">
      <p>
          Partie "template" :<br>
          on utilise un  label avec la balise <mark>progress</mark>  pour faire la barre de d'ecoule;ent du temps.<br>
          Aussi on utilise la balise <mark>input</mark> pour chenger le temps max du chrono<br>
          De plus on rajoute un bouton pour reset la variable passed pour remettre le chrono a zero.<br>
      </p>
      <img class="padding" src="/public/images/template_chrono.png">
    </div>
    <div class="margin">
      <label>Elapsed Time: <progress :value="passed / duration"></progress></label>

  <div>{{ (passed / 1000).toFixed(1) }}s</div>

  <div>
    Duration: <input type="range" v-model="duration" min="1" max="30000" />
    {{ (duration / 1000).toFixed(1) }}s
  </div>

  <button @click="passed = 0">Reset</button>
  <p v-if="passed >= duration">Time is up !!!</p>
    </div>
  </div>
</template>

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
    gap: 50px;
    height: auto;
  }
  mark{
    font-weight: 700;
    color: greenyellow;
    background-color: #282A36;
  }
  img{
      width: 400px;
  }
  .margin{
    margin: 50px;
  }
  .slider{
    display: flex;
    align-items: center;
    gap: 10px;
    img{
      height: 250px;
    }
    button{
      height: 30px;
      border: none;
      font-size: 30px;
      background-color: #282A36;
      cursor: pointer;
    }
  }
  button{
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
  }
  progress{
    color: rgb(77, 26, 218) ;
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
  
.elapsed-container {
  width: 300px;
}
.button{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px;
    cursor: pointer;
  }
.elapsed-bar {
  height: 10px;
}
.padding{
  padding: 50px 0;
}
</style>
