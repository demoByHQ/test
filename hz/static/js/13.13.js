webpackJsonp([13,15],{77:function(e,t,n){var a,r;a=n(96);var s=n(173);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=a},96:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),s=n(31),o=a(s),u=n(25),i=(a(u),n(13)),d=a(i);t.default={data:function(){return{userID:"",username:""}},created:function(){this.checkPwd()},mounted:function(){},methods:{checkPwd:function(){function e(){function e(e){var t=new RegExp("(^|&?)"+e+"=([^&]*)(&|$)","i"),n=window.location.href,a=n.substr(n.toString().indexOf("?")+1).match(t),r="";return null!=a&&(r=a[2]),t=null,a=null,null==r||""==r||"undefined"==r?"":r}var n=this,a=e("code"),s=e("id");t.userID=s;var u=t.$store.state.devUrl+"wechatUsername";t.$http.post(u,{code:a}).then(function(e){if("E"==e.data.status,"S"==e.data.status){t.username=e.data.data.username;var a=(new Date).getTime().toString(),s=(0,d.default)(e.data.data.pre_token+e.data.data.token_key+a);t.$store.commit("storeToken",s),t.$store.commit("storeStamp",a);var u=t.$store.state.username;""===u&&(t.$store.commit("storename",t.username),t.setToken());var i=t.$store.state.devUrl+"signIn",c={id:t.userID,username:t.username};t.$http.post(i,c).then(function(e){"S"==e.data.status?r.MessageBox.alert("签到成功").then(function(e){o.default.closeWindow()}):(r.MessageBox.alert(e.data.msg),n.$router.push({name:"myTrain"}))});var u=t.$store.state.username;""===u&&t.$store.commit("storename",t.username)}})}this.SDK();var t=this;e()}}}},173:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},staticRenderFns:[]}}});