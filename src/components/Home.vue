<template>
  <div>

    <div class="jumbotron jumbotron-fluid mb-0">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 align-self-center">
            <img src="https://iteam.ru/images/icons/book/11_4.png" class="img-fluid">
          </div>
          <div class="col-md-8 align-self-center">
            <Grform
              redirect="true"
              cta="ПОЛУЧИТЬ"
              campaign_token=""
            />
          </div>
        </div>

        <!-- <div class="row mt-5">
          <div class="col">
            <h3>Специальное предложение для вас!</h3>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> Какие корпоративные ценности мы хотим внедрить</p>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> Опросы сотрудников - инструмент формирования корпоративной культуры</p>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> Как организовать регулярные опросы сотрудников</p>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> Как работать с результатами опросов</p>
          </div>
        </div> -->
      </div>
    </div>

  </div>
</template>

<script src="./home.js"></script>

<style scoped>
.check-mark {
    color:#fff;
    font-family: sans-serif;
}
.header-title {
  margin-top: 30px;
}
.header-date {
  margin-top: 20px;
  margin-bottom: 10px;
}
.badge {
  font-size: 1.1em;
}
.last-row {
  margin-bottom: 50px;
}
h2 {
  margin-bottom: 20px;
}
.jumbotron {
  padding-top: 20px;
  background-image: url("../assets/bg_darker.jpg");
  background-size: cover;
}
.container-fluid {
  padding: 20px 10px;
  margin-bottom: 50px;
}
.nav-tabs-links a {
  color: #fff;
  text-decoration: underline;
}
.logo {
  margin-bottom: 20px;
}
.card-accent {
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  border-width: 2px;
}
.mp-is-block {
  background-image: url("../assets/mp.jpg");
  background-size: cover;
  min-height: 150px;
}
.mp-is-usefull-block {
  background-image: url("../assets/usefull.jpg");
  background-size: cover;
}


@media (max-width: 767.98px) {
  .header-title {
    margin-top: 20px;
  }
}
@media (max-width: 575.98px) {
  .header-title {
    margin-top: 10px;
  }
}
</style>
