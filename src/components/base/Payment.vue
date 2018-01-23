<template>
  <div>
    <form accept-charset="UTF-8" method="POST" id="paymentForm" action="https://wl.walletone.com/checkout/checkout/Index">
      <input type="hidden" name="WMI_MERCHANT_ID" v-model="payment.WMI_MERCHANT_ID"/>
      <input type="hidden" name="WMI_PAYMENT_AMOUNT" v-model="payment.WMI_PAYMENT_AMOUNT"/>
      <input type="hidden" name="WMI_CURRENCY_ID" v-model="payment.WMI_CURRENCY_ID"/>
      <input type="hidden" name="WMI_PAYMENT_NO" v-model="payment.WMI_PAYMENT_NO"/>
      <input type="hidden" name="WMI_DESCRIPTION" v-model="payment.WMI_DESCRIPTION"/>
      <input type="hidden" name="WMI_AUTO_LOCATION" v-model="payment.WMI_AUTO_LOCATION"/>
      <input type="hidden" name="WMI_SUCCESS_URL" v-model="payment.WMI_SUCCESS_URL"/>
      <input type="hidden" name="WMI_FAIL_URL" v-model="payment.WMI_FAIL_URL"/>
      <input type="hidden" name="WMI_SIGNATURE" v-model="payment.WMI_SIGNATURE"/>
    </form>
    <button type="button" class="btn btn-danger btn-lg" data-toggle="modal" :data-target="'#payment' + campaign_token">КУПИТЬ</button>
                
    <!-- Modal -->
    <div class="modal fade" :id="'payment' + campaign_token" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ product_name }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                  <form action="/grform/payment" method="get" id="grForm">
                      <!-- <div class="row">
                          <div class="col text-left">
                            <p>Описание</p>
                          </div>
                      </div> -->
                      <div class="row">
                          <div class="col">
                            <div class="form-group form-group-lg">
                              <input type="text" class="form-control" name="name" placeholder="Имя" v-model="modal.name">
                            </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col">
                            <div class="form-group form-group-lg">
                              <input type="email" class="form-control" name="email" placeholder="Эл.адрес" v-model="modal.email">
                            </div>
                          </div>
                          <input type="hidden" name="campaign_token" v-model="modal.campaign_token" />
                          <input type="hidden" name="orderid" v-model="modal.orderid" />
                      </div>
                      <a href="#" class="btn btn-danger btn-lg disabled" id="grFormBtn" v-if="isLoading">ОТПРАВКА...</a>
                      <a href="#" class="btn btn-danger btn-lg" id="grFormBtn" v-else @click.prevent="buy">КУПИТЬ</a>
                  </form>
                  <p class="help-block alert-danger" id="grFormHelpBlock" v-if="error">{{ error }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./payment.js"></script>

<style scoped>
.help-block {
  margin-top: 20px;
  padding: 5px;
}
</style>
