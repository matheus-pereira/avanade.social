(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{UIoA:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=function(){return function(){}}(),o=e("pMnS"),i=e("Ip0R"),r=e("dU8u"),s=e("DeF2"),a=e("/HtF"),c=e("69F6"),p=e("ryO2"),f=function(){function n(n,l,e,t){this.activatedRoute=n,this.router=l,this.userService=e,this.postService=t,this.hasMore=!0}return n.prototype.ngOnInit=function(){var n=this;(this.activatedRoute.snapshot.params&&this.activatedRoute.snapshot.params.id?this.userService.getUserAsync(this.activatedRoute.snapshot.params.id):this.userService.getUser()).subscribe(function(l){n.user=l,n.postService.getPosts({userId:n.user.id}).subscribe(function(l){return n.posts=l})},function(l){n.router.navigate(["not-found"])})},n.prototype.onScroll=function(){var n=this;this.postService.getPosts({userId:this.user.id,fromDate:this.posts[this.posts.length-1].createdAt.toString()}).subscribe(function(l){if(!l)return n.hasMore=!1;n.posts=n.posts.concat(l)})},n}(),b=e("ZYCi"),d=t.nb({encapsulation:0,styles:[[".profile[_ngcontent-%COMP%]{background:#fff}.profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0}.profile__userCard[_ngcontent-%COMP%]{display:flex;padding:15px;justify-items:center;align-items:center;border-bottom:1px solid #eee}.profile__userImg[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%;overflow:hidden;margin-right:15px}.profile__userImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.profile__userName[_ngcontent-%COMP%]{font-size:1.375em;align-self:flex-start}@media (min-width:992px){.profile__userImg[_ngcontent-%COMP%]{width:100px;height:100px}.profile__userName[_ngcontent-%COMP%]{font-size:1.75em}}.profile__userEmail[_ngcontent-%COMP%]{color:#bababa}"]],data:{}});function g(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,7,"section",[["class","profile__userCard"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"div",[["class","profile__userImg"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,0,"img",[["alt","Avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t.pb(3,0,null,null,4,"div",[["class","profile__userDesc"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,1,"p",[["class","profile__userName"]],null,null,null,null,null)),(n()(),t.Db(5,null,["",""])),(n()(),t.pb(6,0,null,null,1,"p",[["class","profile__userEmail"]],null,null,null,null,null)),(n()(),t.Db(7,null,["",""]))],null,function(n,l){var e=l.component;n(l,2,0,e.user.avatar),n(l,5,0,e.user.name?e.user.name:e.user.fullName),n(l,7,0,e.user.email)})}function h(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,6,"main",[["class","profile"]],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,g)),t.ob(2,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(3,0,null,null,3,"section",[["id","profile__postList"],["infiniteScroll",""]],null,[[null,"scrolled"]],function(n,l,e){var t=!0;return"scrolled"===l&&(t=!1!==n.component.onScroll()&&t),t},null,null)),t.ob(4,4866048,null,0,r.a,[t.k,t.z],{infiniteScrollDisabled:[0,"infiniteScrollDisabled"]},{scrolled:"scrolled"}),(n()(),t.pb(5,0,null,null,1,"app-post-list",[],null,null,null,s.b,s.a)),t.ob(6,114688,null,0,a.a,[c.a],{posts:[0,"posts"]},null)],function(n,l){var e=l.component;n(l,2,0,e.user),n(l,4,0,!e.hasMore),n(l,6,0,e.posts)},null)}function m(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,1,"app-profile",[],null,null,null,h,d)),t.ob(1,114688,null,0,f,[b.a,b.k,p.a,c.a],null,null)],function(n,l){n(l,1,0)},null)}var _=t.lb("app-profile",f,m,{},{},[]),v=e("gIcY"),w=function(){return function(){}}(),M=e("1XP4");e.d(l,"ProfileModuleNgFactory",function(){return C});var C=t.mb(u,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[o.a,_]],[3,t.j],t.x]),t.wb(4608,i.m,i.l,[t.u,[2,i.s]]),t.wb(4608,v.q,v.q,[]),t.wb(1073742336,i.c,i.c,[]),t.wb(1073742336,b.m,b.m,[[2,b.s],[2,b.k]]),t.wb(1073742336,w,w,[]),t.wb(1073742336,v.o,v.o,[]),t.wb(1073742336,v.e,v.e,[]),t.wb(1073742336,M.a,M.a,[]),t.wb(1073742336,r.b,r.b,[]),t.wb(1073742336,u,u,[]),t.wb(1024,b.i,function(){return[[{path:"",component:f},{path:":id",component:f}]]},[])])})}}]);