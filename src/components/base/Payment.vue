<template>
  <div>
    <form accept-charset="UTF-8" method="POST" id="paymentForm" action="https://wl.walletone.com/checkout/checkout/Index">
      <input type="hidden" name="WMI_MERCHANT_ID" value="132360589069"/>
      <input type="hidden" name="WMI_PAYMENT_AMOUNT" value="990"/>
      <input type="hidden" name="WMI_CURRENCY_ID" value="643"/>
      <input type="hidden" name="WMI_PAYMENT_NO" value=""/>
      <input type="hidden" name="WMI_DESCRIPTION" value="iTeam"/>
      <input type="hidden" name="WMI_AUTO_LOCATION" value="1"/>
      <input type="hidden" name="WMI_SUCCESS_URL" value="https://iteam.ru/promo/2018/01_thank_you.php"/>
      <input type="hidden" name="WMI_FAIL_URL" value="https://iteam.ru/promo/2018/"/>
      <input type="hidden" name="WMI_SIGNATURE" value=""/>
    </form>
    <button type="button" class="btn btn-danger btn-lg" data-toggle="modal" data-target="#set1">КУПИТЬ</button>
                
    <!-- Modal -->
    <div class="modal fade" id="set1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Название продукта</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                  <form action="/grform/payment" method="get" id="grForm">
                      <div class="row">
                          <div class="col">
                            <div class="form-group form-group-lg">
                              <input type="text" class="form-control" name="name" placeholder="Имя">
                            </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col">
                            <div class="form-group form-group-lg">
                              <input type="email" class="form-control" name="email" placeholder="Эл.адрес">
                            </div>
                          </div>
                          <input type="hidden" name="campaign_token" value="nIGYh" />
                          <input type="hidden" name="orderid" value="1" />
                      </div>
                      <a href="#" class="btn btn-danger btn-lg" id="grFormBtn">КУПИТЬ</a>
                  </form>
                  <p class="help-block alert-danger" id="grFormHelpBlock">...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./payment.js"></script>

<style scoped></style>
