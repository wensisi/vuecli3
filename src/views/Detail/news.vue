<template>
    <div>
        这是详情页面！woyijshushdiuhidnfkffn
         <button @click="getMsg" class="get-msg">获取数据</button>
    <button @click="cancelGetMsg" class="cancel">取消获取</button>
    <ul>
      <!-- <li v-for="item in items">{{item.name}}</li> -->
    </ul>
        <!-- <el-checkbox v-model="checked">备选项</el-checkbox> -->
    </div>
</template>
<script>
import {Home} from '@/api/index.js';

export default {
    name:"news",
    data(){
        return{
            checked:false
        }
    },
    created(){
        console.log(process.env.NODE_ENV,"ss",process.platform);
        Home.getMockData({name:'wss'}).then((res) => {
            console.log(res);
        });
         Home.getMockData2({name:'wss'}).then((res) => {
            console.log(res);
        })
        
    }
}
</script>