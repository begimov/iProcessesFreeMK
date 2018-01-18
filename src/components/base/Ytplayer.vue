<template>
  <div>
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
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/UCX_HvBLPU8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ytplayer.js"></script>

<style scoped>
</style>
