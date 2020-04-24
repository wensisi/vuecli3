<template>
  <div class="home">
    <!-- 验证input=textarea -->
    <el-input type="textarea" v-validate  v-model="msg"></el-input>
    <span class="class_jQurey"></span>
    <!-- 绑定多个class参数 -->
    <div :class="[class1,class2]"></div>
    <div ref="echartsRef" style="width:100%;height:200px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {ContainerMixin,ElementMixin} from 'vue-slicksort';
import $ from 'jquery'
import echarts from 'echarts'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    ContainerMixin,
    ElementMixin
  },
  data(){
    return{
      msg:" ",
      class1:"class1",
      class2:"class2"
    }
  },
  mounted(){

    console.log($(".class_jQurey"));
    //this.$refs[idName][0].scrollIntoView();
    //组件的八个周期：beforeCreate 
    //路由周期钩子：总路由：  全局路由： beforeEach()  afterEach()  组件路由钩子：beforeRouteEnter beforeRouteUpdate  beforeRouteLeave
    //总路由周期  berforeRouteEnter //路由拦截 （to ,from, next）( next(vm => {})) next 钩子里面执行晚于mounted
    //nextTick
    //指令周期:5个（bind,inserted,update,componentUpdated,unbind)


    //解绑定
    // this.$once('hook:beforeDestroy',() => {
    //   console.log('destroy');
    //   window.clearTimeout(this.timer);
    // });
    this.initEcharts();
  },
  methods:{
    initEcharts(){
      // let echarts
     let eDom = echarts.init(this.$refs.echartsRef);
     eDom.setOption({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    },{
      name:"dsd",
      type:"line",
      markLine:{
        symbol:'none',
        tooltip:{
          show:true
        },
        itemStyle:{
          normal:{
            lineStyle:{
              type:"solid",
              color:"red"
            },
            label:{
              show:false,
              position:"left"
            }
          }
        },
        data:[{
          name:"item",
          type:'average'
        },{
          name:"sasd",
          xAxis:"Tue"
        }]
      }
    }]
});
    },
    getStore(name){
      if(!name) return;
      return window.localStorage.getItem(name);
    },
    setStore(name,content){
      if(!name) return;
      if(typeof content !== 'string')
      {
        content = JSON.stringify(content);
      }
      window.localStorage.setItem(name,content);
    },
    renderHeadTitle(h,{
      column,$index
    }){

      return h('span',{
        domProps:{
          title:column.label,
          innerHTML:column.label
        },
        'class':{
          textContent:""
        },
        style:{
          backgroundSize:'15px 15px'
        }
      })
    },
    rederHtml(h){
      return h('span',)
    },
    getByMore(){
      axios.all([this.getInfo(),this.getData()]).then(axios.spread(function(info,data){
        console.log(info,data);
      }))
    }
  }
}
</script>
