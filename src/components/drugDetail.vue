<template>
  <div class="page-drug-detail">
    <cell title="药方照片"></cell>
    <div class="img-region">
      <img :src="imgUri[0].src" @click="show"/>
    </div>
    <cell title="药方详情" v-if="list.length>0"></cell>
    <cell-form-preview :list="list"></cell-form-preview>
    <footer>
      <a class="btn btn-submit" @click="back">返&nbsp;回</a>
    </footer>
    <div v-transfer-dom>
      <previewer :list="imgUri" ref="previewer"></previewer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    mapGetters
  } from 'vuex'
  import {
    GETDRUGDETAIL
  } from '../store/type'
  import {Group, Cell, Alert, CellFormPreview, Previewer, TransferDom} from 'vux'

  export default {
    name       : 'NAME',
    directives : {
      TransferDom
    },
    data () {
      return {
        total   : '',
        list    : [],
        drugData: null,
        imgUri  : [{
          src: ''
        }]
      }
    },
    components : {
      Group,
      Cell,
      Alert,
      CellFormPreview,
      Previewer,
      TransferDom
    }, computed: {
      ...mapGetters([
        'getDrugDetail'
      ])
    },
    created () {
      this.$store.dispatch(GETDRUGDETAIL, {id: this.$route.query.id})
      this.imgUri[0].src = '/img/' + this.$route.query.uri;
    },
    methods    : {
      show () {
        this.$refs.previewer.show(0)
      }
    },
    watch      : {
      getDrugDetail(newValue){
        if (newValue.status === 'success') {
          const response = newValue.payload
          if (response.errno === 0) {
            this.drugData = response.data;
            this.total    = this.drugData.total_fee / 100;
            var listData  = [];
            [].forEach.call(this.drugData.drugDetail, (item) => {
              listData.push({
                label: item.name + '[' + item.remark + ']',
                value: item.dosage + item.unit
              })
            })
            this.list = listData;
          } else {
            this.$vux.alert.show({
              title  : '',
              content: response.errmsg,
            })
          }
        }
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  footer
    position fixed
    width 100%
    bottom 1rem
    .agreement
      margin-bottom 1rem

  .img-region
    text-align center
    img
      display inline-block
      width 70%
</style>
<style type="text/stylus" lang="stylus">
  div[aria-hidden=true]
    display none
</style>
