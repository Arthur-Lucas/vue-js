<script setup>
import { ref } from "vue";

const questions = [
  {
    id: "0",
    questionText: "This is a Question,1",
    Answers: [
      {
        isValid: true,
        AnswerText: "asnswer 1",
      },
      {
        isValid: false,
        AnswerText: "asnswer 2",
      },
      {
        isValid: false,
        AnswerText: "asnswer 3",
      },
      {
        isValid: false,
        AnswerText: "asnswer 4",
      },
    ],
  },
  {
    id: "1",
    questionText: "This is a Question 2",
    Answers: [
      {
        isValid: false,
        AnswerText: "asnswer 1",
      },
      {
        isValid: false,
        AnswerText: "asnswer 2",
      },
      {
        isValid: true,
        AnswerText: "asnswer 3",
      },
      {
        isValid: false,
        AnswerText: "asnswer 4",
      },
    ],
  },
];

const formatted = ref(questions);

console.log(formatted.value);
</script>

<template>
  <span>QCM components</span>
  <section>
    <form v-for="question in formatted" :key="question.id">
      <span>{{ question.questionText }}</span>
      <label v-for="answer in question.Answers" :key="answer.isValid">
        <span>{{ answer.AnswerText }}</span>
        <input type="checkbox" />
      </label>
    </form>
  </section>
</template>

<style></style>
