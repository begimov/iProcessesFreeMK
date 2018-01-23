<template>
  <div>

    <div class="container-fluid bg-dark text-light changes-block">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h2>Спасибо, вы&nbsp;зарегистрированы!</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>
              В&nbsp;ближайшее время вам придет письмо с&nbsp;подтверждением. Если письма нет, пожалуйста, проверьте папку &laquo;спам&raquo; или напишите нам на&nbsp;info@iteam.ru
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="row text-center">
        <div class="col">
          <h2>Наши дополнительные предложения:</h2>
        </div>
      </div>
      <div class="row last-row text-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-danger text-light">
              <span class="lead"><strong>ПАКЕТ &laquo;МАТЕРИАЛЫ&raquo;</strong></span>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Участие в&nbsp;мастер-классах бесплатное!</li>
              <li class="list-group-item">Вы&nbsp;можете купить записи и&nbsp;дополнительные материалы (презентация, шаблоны и&nbsp;проекты документов).</li>
              <li class="list-group-item">Материалы будут приходить на&nbsp;указанную вами почту еженедельно, по&nbsp;мере прохождения мастер-классов.</li>
            </ul>
            <div class="card-body">
              <p>8 комплектов материалов</p>
              <h2><span class="badge badge-primary">6&thinsp;400&nbsp;&#8381;</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="1"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/promo/marafon"
                WMI_FAIL_URL="https://iteam.ru/promo/marafon"
                campaign_token="nIGYh"
                product_name="ПАКЕТ «МАТЕРИАЛЫ»"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-danger text-light">
              <span class="lead"><strong>ПАКЕТ &laquo;КОНСУЛЬТАНТ&raquo;</strong></span>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Пакет &laquo;Консультант&raquo;&nbsp;&mdash; это индивидуальное сопровождение управляющего партнера iTeam Александра Кочнева.</li>
              <li class="list-group-item">8&nbsp;консультаций в&nbsp;удобное для вас и&nbsp;вашей команды время после каждого мастер-класса.</li>
              <li class="list-group-item">Результат&nbsp;&mdash; готовый эффективный план проведения изменений. Управляемая и&nbsp;эффективная компания. Шаблоны и&nbsp;проекты документов входят в&nbsp;стоимость.</li>
            </ul>
            <div class="card-body">
              <h2><span class="badge badge-primary">128&thinsp;000&nbsp;&#8381;</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="1"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/promo/marafon"
                WMI_FAIL_URL="https://iteam.ru/promo/marafon"
                campaign_token="NONE"
                product_name="ПАКЕТ «КОНСУЛЬТАНТ»"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <h2>FAQ</h2>
        </div>
      </div>
      <div class="row last-row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Какие методы оплаты доступны?</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Оплата на&nbsp;вашем сайте безопасна?</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Вы&nbsp;принимаете карты стран СНГ?</a>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <p>Мы&nbsp;осуществляем оплату с&nbsp;помощью платежного сервиса WalletOne. Вы&nbsp;можете оплатить продукт практически любым доступным сегодня способом. Все способы вы&nbsp;можете <a href="https://www.walletone.com/ru/merchant/payments/#country=RU&amp;section=cash" target="_blank">увидеть здесь.</a></p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <p>Wallet One использует стандарт безопасности PCI&nbsp;DSS, SSL-протокол, системы безопасности Verified by&nbsp;Visa и&nbsp;MasterCard SecureCode.</p>
                      <p><a href="https://www.walletone.com/ru/merchant/security/" target="_blank">Подробнее здесь</a></p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                      <p>Да, мы&nbsp;принимаем карты, выпущенные на&nbsp;территории Украины, Беларуси, Казахстана и&nbsp;ряда других стран. Список всех стран и&nbsp;вариантов оплаты можно <a href="https://www.walletone.com/ru/merchant/payments/#country=RU&amp;section=cash" target="_blank">увидеть по&nbsp;ссылке</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./purchase.js"></script>

<style scoped>
.last-row {
  margin-bottom: 50px;
}
h2 {
  margin-bottom: 20px;
}
.container-fluid {
  padding: 20px 10px;
  margin-bottom: 50px;
}
.changes-block {
  background-image: url("../../assets/bg.jpg");
  background-size: cover;
}
</style>
