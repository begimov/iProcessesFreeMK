<template>
  <div>
    <button type="button" class="btn btn-danger btn-lg" data-toggle="modal" data-backdrop="static" data-target="#set1" @click.prevent="onPlay">КУПИТЬ</button>        
    <!-- Modal -->
    <div class="modal fade" id="set1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <a href="#" @click.prevent="onClose"><span aria-hidden="true">&times;</span></a>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                  <iframe width="100%" height="315" :src="videoUrl" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
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
