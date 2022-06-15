<template>
  <div class="main-block__window">
    <div class="main-block__weather weather">
      <div id="tab-1" class="weather__now">
        <p class="weather__grad grad"></p>
        <img
          alt="Cloud"
          class="weather__img"
          height="59"
          src="/src/assets/img/Cloud.svg"
          width="78"
        />
        <div class="weather__bottom">
          <span class="weather__city"></span>
          <img
            alt="Heart"
            class="weather__add-favorites"
            src="/src/assets/img/Heart.svg"
          />
        </div>
      </div>
      <div id="tab-2" class="weather__details">
        <span class="weather__city">Aktobe</span>
        <ul class="weather__list">
          <li class="weather__item">
            Temperature: <span class="weather__grad grad">14</span>
          </li>
          <li class="weather__item">
            Feels like: <span class="weather__feels-like">10</span>
          </li>
          <li class="weather__item">
            Weather: <span class="weather__weather-now">Clouds</span>
          </li>
          <li class="weather__item">
            Sunrise: <span class="weather__sunrise">03:21</span>
          </li>
          <li class="weather__item">
            Sunset: <span class="weather__sunset">18:54</span>
          </li>
        </ul>
      </div>
      <div id="tab-3" class="weather__forecast">
        <span class="weather__city">Aktobe</span>
        <ul class="weather__card-list">
          <li class="weather__card-item">
            <div class="weather__first-row">
              <span class="weather__date">17 May</span>
              <span class="weather__time">12:00</span>
            </div>
            <div class="weather__second-row">
              <div class="weather__left">
                <span class="weather__temperature"
                  >Temperature: <span class="weather__grad grad">13</span></span
                >
                <span class="weather__temp-feel"
                  >Feels like:
                  <span class="weather__feels-like">10&</span></span
                >
              </div>
              <div class="weather__right">
                <span class="weather__weather-now">Rain</span>
                <img
                  alt="Rain"
                  class="weather__icon"
                  height="31"
                  src="src/assets/img/Rain.svg"
                  width="31"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowWeather",
};
</script>

<style scoped></style>
