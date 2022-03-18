<script setup>
import { computed, ref } from "vue";
import VueQuestion from "../assets/questions/questions-vue.json";

const questions = ref(VueQuestion);
const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = computed(() => {
  let value = 0;
  questions.value.map((q) => {
    if (q.selected != null && q.answer == q.selected) {
      console.log("correct");
      value++;
    }
  });
  return value;
});
const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value];
  question.index = currentQuestion.value;
  return question;
});
const SetAnswer = (e) => {
  questions.value[currentQuestion.value].selected = e.target.value;
  e.target.value = null;
};
const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    return;
  }

  quizCompleted.value = true;
};
</script>

<template>
  <main class="qcm-wrapper">
    <section class="qcm" v-if="!quizCompleted">
      <div class="qcm-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score {{ score }}/{{ questions.length }}</span>
      </div>

      <div class="answer-wrapper">
        <label
          :key="index"
          v-for="(option, index) in getCurrentQuestion.options"
          :for="'answer' + index"
          :class="`answer ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer
                ? 'correct'
                : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <input
            type="radio"
            :id="'answer' + index"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="SetAnswer"
          />
          <span>{{ option }}</span>
        </label>
      </div>

      <button @click="NextQuestion" :disabled="!getCurrentQuestion.selected">
        {{
          getCurrentQuestion.index == questions.length - 1
            ? "Finish"
            : getCurrentQuestion.selected == null
            ? "Select an option"
            : "Next question"
        }}
      </button>
    </section>

    <section v-else class="finish-wrapper">
      <h2 class="finish-text">You have finished the quiz!</h2>
      <p class="finish-score">
        Your score is {{ score }}/{{ questions.length }}
      </p>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.qcm-wrapper {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .qcm {
    background-color: #f1f1f1;
    padding: 1rem;
    width: 100%;
    max-width: 640px;
    border: 0 solid;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    .qcm-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      .question {
        color: black;
        font-size: 1.25rem;
      }
      .score {
        color: #fff;
        font-size: 1.25rem;
      }
    }
    .answer-wrapper {
      margin-bottom: 1rem;
      .answer {
        padding: 1rem;
        display: block;
        background-color: rgb(77, 26, 218);
        margin-bottom: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        &:hover {
          background-color: #2d213f;
        }
        &.correct {
          background-color: #2cce7d;
        }
        &.wrong {
          background-color: #ff5a5f;
        }
        &.disabled {
          opacity: 0.5;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
      }
      input {
        display: none;
      }
    }
    button {
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
    .finish-wrapper {
      .finish-text {
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
        color: black;
      }
      .finish-score {
        color: black;
        font-size: 1.5rem;
        text-align: center;
      }
    }
  }
}
</style>
