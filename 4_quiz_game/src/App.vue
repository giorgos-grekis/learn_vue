<script setup lang="ts">
// https://opentdb.com/api.php?amount=1&category=18

</script>

<template>
  <div>
    <h1>
      Microphones can be used not only to pick up sound, but also to project sound similar to a speaker.
    </h1>

    <input id="inputOptionTrue" type="radio" name="options" value="True" />
    <label for="inputOptionTrue">True</label>
    <br />

    <input id="inputOptionFalse" type="radio" name="options" value="False" />
    <label for="inputOptionFalse">False</label>
    <br />

    <button class="send" type="button">Send</button>

  </div>
</template>

<style scoped lang="scss">
input[type=radio] {
  margin: 12px 4px;
}

button.send {
  margin-top: 12px;
  height: 40px;
  min-width: 120px;
  padding: 0 16px;
  color: #fff;
  background-color: var(--main-color);
  border: 1px solid var(--main-color);
  cursor: pointer;
}
</style>
