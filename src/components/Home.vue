<template>
  <div>

    <div class="container">
      <div class="row text-center mt-5 mb-4" ref="join-block">
        <div class="col">
          <h1>Присоединиться к проекту по развитию корпоративной культуры с 20 июня 2018 года</h1>
        </div>
      </div>
      <div class="row text-center last-row justify-content-center">
        
        <div class="col-lg-4 col-md-6 mt-2">
          <div class="h-100">
            <!-- <div class="card-header bg-danger text-light">
              <span class="lead"><strong>ПАКЕТ &laquo;БАЗОВЫЙ&raquo;</strong></span><br>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Участие в мастер-классах</li>
              <li class="list-group-item">Записи мастер-классов</li>
              <li class="list-group-item">Презентационные материалы</li>
              <li class="list-group-item">Методические материалы, шаблоны, образцы документов</li>
            </ul>
            <div class="card-body"></div> -->
            <div class="bg-white border-top-0 pb-3">
              <h2><span class="badge badge-primary">20&nbsp;000</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="20000"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/promo/pulse_survey"
                WMI_FAIL_URL="https://iteam.ru/promo/pulse_survey"
                campaign_token=""
                product_name="«Проект по развитию корпоративной культуры»"
              />
              <a href="https://iteam.ru/learn/course/proekt-po-razvitiju-korporativnoj-kultury" class="btn btn-dark btn-lg mt-4">Выставить счет</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div class="jumbotron jumbotron-fluid mb-0">
      <div class="container text-center">
        <h2 class="d-none d-sm-block mt-5 mb-4"><strong>Получить план улучшения корпоративной культуры!</strong></h2>
        <h3 class="d-sm-none my-4">Получить план улучшения корпоративной культуры!</h3>
        <div class="rowtext-center mb-5">
          <div class="col">
            <Grform
              redirect="false"
              cta="ПОЛУЧИТЬ"
              campaign_token="nqGx"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="./home.js"></script>

<style scoped>
.check-mark {
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
