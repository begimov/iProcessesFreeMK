<template>
  <div>

    <div class="jumbotron jumbotron-fluid mb-0">
      <div class="container text-center mt-5">
        <!-- <h2 class="d-none d-sm-block mt-5 mb-4"><strong>Получить план улучшения корпоративной культуры!</strong></h2> -->
        <h1><small>Бесплатный мастер-класс</small><br>&laquo;Корпоративная культура: с чего начать&raquo;</h1>
        <p class="lead mb-5"><span class="badge badge-dark">22 июня 11.00 Мск</span></p>
        <h3 class="d-sm-none my-4">Получить план улучшения корпоративной культуры!</h3>
        <div class="rowtext-center">
          <div class="col">
            <Grform
              redirect="false"
              cta="Участвовать бесплатно"
              campaign_token="RCjV"
            />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <p class="lead"><span class="text-success check-mark">&#10004;</span> Какие корпоративные ценности мы хотим внедрить</p>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> Опросы сотрудников - инструмент формирования корпоративной культуры</p>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> Как организовать регулярные опросы сотрудников</p>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> Как работать с результатами опросов</p>
          </div>
        </div>
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
  /*background-image: url("../assets/bg_darker.jpg");
  background-size: cover;*/
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
