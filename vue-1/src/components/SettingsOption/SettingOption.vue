<template>
  <div>
    <h2>Настройки</h2>
    <v-card
      flat
      color="transparent">
      <v-list-item v-for="(slider, index) in sliderOptions" :key="`slider-${index}`" two-line>
        <v-list-item-content>
          <v-list-item-title>
            <v-slider :max="slider.max"
                      :min="slider.min"
                      v-model="slider.selectedValue"
                      style="width: 300px"
                      :prepend-icon="`${slider.min}`"
                      :append-icon="`${slider.max}`"
            />
          </v-list-item-title>
          <v-list-item-subtitle v-if="index === 0">
            Длительность {{slider.selectedValue}} минут
          </v-list-item-subtitle>
          <v-list-item-subtitle v-if="index === 1">
            Сложность {{slider.selectedValue}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="(option, index) in options" :key="`checkbox-${index}`">
        <v-checkbox :label="option.label" v-model="option.value" />
      </v-list-item>
      <v-row justify="end">
        <v-col cols="12" sm="4" justify-self="end">
          <v-btn>Play!</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'SettingOption',
    data: () => ({
      options: [{
        label: 'Суммирование',
        value: false,
      }, {
        label: 'Разность',
        value: false,
      }, {
        label: 'Умножение',
        value: false,
      }, {
        label: 'Деление',
        value: false,
      }, {
        label: 'Возведение в степень',
        value: false,
      }],
      sliderOptions: [{
        label: 'Длительность',
        min: 1,
        max: 15,
        selectedValue: 0,
      }, {
        label: 'Сложность',
        min: 1,
        max: 10,
        selectedValue: 0,
      }]
    }),
    methods: {
      onChange(option) {
        option.value = !option.value;
      }
    },
  };
</script>

<style scoped>
  h2 {
    margin-bottom: 15px;
  }
</style>
