(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40939c46"],{"0a5b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"blog-container"},[s("div",{staticClass:"blog-pages"},[s("router-view"),s("div",{staticClass:"col-md-3 main-col pull-left"},[s("div",{staticClass:"panel panel-default corner-radius"},[s("div",{staticClass:"panel-body text-center topic-author-box blog-info"},[s("div",{staticClass:"image blog-cover"},[s("router-link",{attrs:{to:"/"+t.userName}},[s("img",{staticClass:"avatar-112 avatar img-thumbnail",attrs:{src:t.userAvatar}})])],1),s("div",{staticClass:"blog-name"},[s("h4",[s("router-link",{attrs:{to:"/"+t.userName}},[t._v(t._s(t.userName)+" 的专栏")])],1)]),s("hr"),s("router-link",{attrs:{to:"/"+t.userName}},[s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"text-md fa fa-list-ul"}),t._v(" 专栏文章（"+t._s(t.articleNum)+"）")])])],1)])])],1)])},r=[],i=(s("b0c0"),s("5530")),u=s("2f62"),l={name:"Column",data:function(){return{userName:"",userAvatar:"",articles:[]}},computed:Object(i["a"])({},Object(u["b"])(["user"]),{articleNum:function(){return this.articles.length}}),beforeRouteEnter:function(t,a,s){s((function(a){a.setDataByParams(t.params)}))},watch:{$route:function(t){this.setDataByParams(t.params)}},methods:{setDataByParams:function(t){var a=t.user,s=t.articleId,e=this.$store.getters.getArticleById(s);if(e)this.userName=e.uname,this.userAvatar=e.uavatar,this.articles=this.$store.getters.getArticlesByUid(null,e.uname);else if(a){var r=this.$store.getters.getArticlesByUid(null,a);r.length?(this.userName=r[0].uname,this.userAvatar=r[0].uavatar):this.user&&(this.userName=this.user.name,this.userAvatar=this.user.avatar),this.articles=r}}}},n=l,c=(s("b85d"),s("2877")),o=Object(c["a"])(n,e,r,!1,null,"f5c71646",null);a["default"]=o.exports},b85d:function(t,a,s){"use strict";var e=s("bd42"),r=s.n(e);r.a},bd42:function(t,a,s){}}]);
//# sourceMappingURL=chunk-40939c46.2d19b37c.js.map