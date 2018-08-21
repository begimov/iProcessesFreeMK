<template>
  <div class="bg-white">

    <div class="container">
      <div class="row text-center mb-4" ref="join-block">
        <div class="col my-5">
          <h1 class="mb-3">Оплата</h1>
          <h2><span class="badge badge-primary">13 000 ~</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="12999"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/wopayment"
                WMI_FAIL_URL="https://iteam.ru/wopayment"
                campaign_token="ptMx"
              />
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
