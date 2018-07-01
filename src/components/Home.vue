<template>
  <div class="bg-white">

    <div class="container">
      <div class="row text-center mb-4" ref="join-block">
        <div class="col mt-5">
          <h1>Материалы Интенсива "Мастерская Управления"</h1>
        </div>
      </div>
      <div class="row text-center last-row justify-content-center">
        
        <div class="mt-2">
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
            <p class="lead"><span class="text-success check-mark">&#10004;</span> 5 мастер-классов от Александра Кочнева, автора системы управления Русский Менеджмент</p>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> 5 рабочих тетрадей для проработки задач в вашей компании</p>
            <p class="lead"><span class="text-success check-mark">&#10004;</span> шаблоны и методические материалы для внедрения системы управления Русский Менеджмент</p>
            <div class="bg-white border-top-0 pb-3">
              <h2><del>3&nbsp;500 рублей</del></h2>
              <h2><small>с 9.07 до 15.07</small> <del>790 рублей</del></h2>
              <h2>До 9 июля — <span class="badge badge-primary">290 ~</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="290"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/promo/management_workshop"
                WMI_FAIL_URL="https://iteam.ru/promo/management_workshop"
                campaign_token="ptNqT"
                product_name="Материалы Интенсива «Мастерская Управления»"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <!-- <div class="jumbotron jumbotron-fluid mb-0">
      <div class="container text-center">
        <h2 class="d-none d-sm-block mt-5 mb-4"><strong>Получить план улучшения корпоративной культуры!</strong></h2>
        <h3 class="d-sm-none my-4">Получить план улучшения корпоративной культуры!</h3>
        <div class="rowtext-center">
          <div class="col">
            <Grform
              redirect="false"
              cta="ПОЛУЧИТЬ"
              campaign_token="nqGx"
            />
          </div>
        </div>
      </div>
    </div> -->

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
