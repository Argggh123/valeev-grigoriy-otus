<template>
  <div>
    <h1>Привет!</h1>
    <p>
      <span>Добро пожаловать на {{currentDate}} тренировачный день</span>
      <br />
      <span>Ваш последний результат - решено {{successCount}} из {{tryCounts}}</span>
      <br />
      <span>Общая точность {{successCounter}}%</span>
    </p>

    <SettingOption />
  </div>
</template>

<script>
  import SettingOption from '../../components/SettingsOption/SettingOption';


  export default {
    name: 'Settings',
    components: {
      SettingOption
    },
    props: {
      successCount: Number,
      tryCounts: Number
    },
    computed: {
      currentDate() {
        const startDate = new Date('2019-10-29 04:00:00');
        const currentDate = new Date();
        return new Date(currentDate - startDate).getDay()
      },
      successCounter() {
        return (this.successCount / this.tryCounts * 100);
      }
    }
  };
</script>

<style scoped>
  p {
    margin-top: 30px;
    margin-bottom: 50px;
  }

</style>
