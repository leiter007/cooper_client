(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(e,t,a){e.exports=a(334)},334:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(38),i=a.n(s),o=(a(191),a(62)),c=a(15),l=a.n(c),u=a(21),p=a(47),d=a(48),m=a(51),h=a(49),g=a(52),f=function(e,t,a){var n,r=function(e){switch(!0){case e>=13&&e<=14:return"13-14";case e>=15&&e<=16:return"15-16";case e>=17&&e<=19:return"17-19";case e>=20&&e<=29:return"20-29";case e>=30&&e<=39:return"30-39";case e>=40&&e<=49:return"40-49";case e>=50:return"50+";default:return"invalid range"}}(parseInt(a));return"invalid range"===r?"Invalid age range":({female:{"13-14":[">2000","1900-1999","1600-1899","1500-1599","<1500"],"15-16":[">2100","2000-2099","1700-1999","1600-1699","<1600"],"17-19":[">2300","2100-2299","1800-2099","1700-1799","<1700"],"20-29":[">2700","2200-2699","1800-2199","1500-1799","<1500"],"30-39":[">2500","2000-2499","1700-1999","1400-1699","<1400"],"40-49":[">2300","1900-2299","1500-1899","1200-1499","<1200"],"50+":[">2200","1700-2199","1400-1699","1100-1399","<1100"]},male:{"13-14":[">2700","2400-2699","2200-2399","2100-2199","<2100"],"15-16":[">2800","2500-2799","2300-2499","2200-2299","<2200"],"17-19":[">3000","2700-2999","2500-2699","2300-2499","<2300"],"20-29":[">2800","2400-2799","2200-2399","1600-2199","<1600"],"30-39":[">2700","2300-2699","1900-2299","1500-1999","<1500"],"40-49":[">2500","2100-2499","1700-2099","1400-1699","<1400"],"50+":[">2400","2000-2399","1600-1999","1300-1599","<1300"]}}[t.toLowerCase()][r].forEach(function(t,a){if(t.match(/>\d*/)&&e>=parseInt(t.slice(1),10)||t.match(/<\d*/)&&e<parseInt(t.slice(1),10))n=a;else{var r=t.split("-"),s=parseInt(r[0],10),i=parseInt(r[1],10);e>=s&&e<=i&&(n=a)}}),["Excellent","Above average","Average","Below average","Poor"][n])},v=a(106),E=a(53),b=a.n(E),y="https://cooper-felix-george.herokuapp.com/api/v1",x=function(){var e=Object(u.a)(l.a.mark(function e(t,a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return y+"/auth/sign_in",e.prev=1,e.next=4,b.a.post("https://cooper-felix-george.herokuapp.com/api/v1/auth/sign_in",{email:t,password:a});case 4:return n=e.sent,e.next=7,C(n);case 7:return sessionStorage.setItem("current_user",JSON.stringify({id:n.data.data.id})),e.abrupt("return",{authenticated:!0});case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{authenticated:!1,message:e.t0.response.data.errors[0]});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark(function e(t,a,n){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return y+"/auth/",e.prev=1,e.next=4,b.a.post("https://cooper-felix-george.herokuapp.com/api/v1/auth/",{email:t,password:a,password_confirmation:n});case 4:return r=e.sent,e.next=7,C(r);case 7:return sessionStorage.setItem("current_user",JSON.stringify({id:r.data.data.id})),e.abrupt("return",{authenticated:!0});case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{authenticated:!1,message:e.t0.response.data.errors.full_messages[0]});case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t,a,n){return e.apply(this,arguments)}}(),C=function(e){e.data;var t=e.headers;return new Promise(function(e){var a=t.uid,n=t.client,r=t["access-token"],s=t.expiry;sessionStorage.setItem("credentials",JSON.stringify({uid:a,client:n,access_token:r,expiry:s,token_type:"Bearer"})),e(!0)})},S=function(){var e=Object(u.a)(l.a.mark(function e(t,a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.getItem("credentials");case 2:return n=e.sent,n=JSON.parse(n),n=Object(v.a)({},n,{"Content-type":"application/json",Accept:"application/json"}),"https://cooper-felix-george.herokuapp.com/api/v1/performance_data",e.abrupt("return",new Promise(function(e,r){b.a.post("https://cooper-felix-george.herokuapp.com/api/v1/performance_data",{performance_data:{data:{message:t,distance:a}}},{headers:n}).then(function(t){C(t),e(t.data.message)})}));case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.getItem("credentials");case 2:return t=e.sent,t=JSON.parse(t),t=Object(v.a)({},t,{"Content-type":"application/json",Accept:"application/json"}),"https://cooper-felix-george.herokuapp.com/api/v1/performance_data",e.abrupt("return",new Promise(function(e,a){b.a.get("https://cooper-felix-george.herokuapp.com/api/v1/performance_data",{headers:t}).then(function(t){C(t),e(t)})}));case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=a(346),j=a(345),D=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"calculate",value:function(){return f(this.props.distance,this.props.gender,this.props.age)}},{key:"saveCooperData",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.calculate(),e.prev=1,e.next=4,S(t,this.props.distance);case 4:this.props.entryHandler(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t;return!0===this.props.authenticated&&!1===this.props.entrySaved?t=r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{compact:!0,color:"teal",id:"save-result",onClick:this.saveCooperData.bind(this)},"Save entry")):!0===this.props.authenticated&&!0===this.props.entrySaved&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("p",null,"Your entry was saved")))),""!==this.props.age&&""!==this.props.distance&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,this.props.age," y/o ",this.props.gender," running ",this.props.distance," meters."),r.a.createElement("p",null,"Result: ",this.calculate()),t)),r.a.createElement("div",null,e)}}]),t}(n.Component),F=a(343),I=a(344),A=a(85),H=a(341),U=function(e){var t=[{text:"Female",value:"female"},{text:"Male",value:"male"}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{type:"medium"},r.a.createElement(F.a.Field,{inline:!0},r.a.createElement(I.a,{selection:!0,id:"gender",defaultValue:t[0].value,options:t,onChange:function(t,a){var n=a.value;return e.handleGenderChange(n)}}),r.a.createElement(A.a,{pointing:"left"},"Choose your gender")),r.a.createElement(H.a,{horizontal:!0},"Fill in distance you ran in 12 minutes, and your age"),r.a.createElement(F.a.Input,{fluid:!0,id:"distance",placeholder:"Distance (metres)",onChange:e.inputChangeHandler}),r.a.createElement(F.a.Input,{fluid:!0,id:"age",placeholder:"Age (years)",onChange:e.inputChangeHandler})))},P=function(e){return r.a.createElement(F.a,{type:"medium",id:"login-form"},r.a.createElement(F.a.Input,{fluid:!0,id:"email",placeholder:"Email",onChange:e.inputChangeHandler}),r.a.createElement(F.a.Input,{fluid:!0,id:"password",placeholder:"Password",onChange:e.inputChangeHandler}),r.a.createElement(O.a,{compact:!0,color:"teal",onClick:function(t){return e.loginHandler(t)},id:"submit"},"Submit"))},L=function(e){return r.a.createElement(F.a,{type:"medium",id:"sign-up-form"},r.a.createElement(F.a.Input,{fluid:!0,id:"email",placeholder:"Email",onChange:e.inputChangeHandler}),r.a.createElement(F.a.Input,{fluid:!0,id:"password",placeholder:"Password",onChange:e.inputChangeHandler}),r.a.createElement(F.a.Input,{fluid:!0,id:"passwordConfirmation",placeholder:"Password Confirmation",onChange:e.inputChangeHandler}),r.a.createElement(O.a,{compact:!0,color:"teal",onClick:function(t){return e.signUpHandler(t)},id:"submit"},"Submit"))},_=a(350),B=a(349),J=a(347),N=a(110),Y=a(105),M=a.n(Y),z=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={performanceData:null},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getPerformanceData()}},{key:"getPerformanceData",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t,a=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({performanceData:t.data.entries},function(){a.props.indexUpdated()});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,n,s,i,o,c,l,u,p=[],d=[],m=[],h={labels:["Excellent","Above Average","Average","Below Average","Poor"],datasets:[{data:m,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]},g={datasets:[{data:p}],labels:d};if(!0===this.props.updateIndex&&this.getPerformanceData(),null!=this.state.performanceData){this.state.performanceData.forEach(function(e){var t=e.created_at,a=new Date(t),n=M()(a).format("YY-MM-DD");p.push(e.data.distance),d.push(n)}),t=0;for(var f=0;f<this.state.performanceData.length;f++)"Excellent"===this.state.performanceData[f].data.message&&t++;a=0;for(var v=0;v<this.state.performanceData.length;v++)"Above average"===this.state.performanceData[v].data.message&&a++;n=0;for(var E=0;E<this.state.performanceData.length;E++)"Average"===this.state.performanceData[E].data.message&&n++;s=0;for(var b=0;b<this.state.performanceData.length;b++)"Below average"===this.state.performanceData[b].data.message&&s++;i=0;for(var y=0;y<this.state.performanceData.length;y++)"Poor"===this.state.performanceData[y].data.message&&i++;m.push(t),m.push(a),m.push(n),m.push(s),m.push(i),e=r.a.createElement("div",null,this.state.performanceData.map(function(e){return r.a.createElement("div",{key:e.id},"Your result of ",r.a.createElement("b",null,e.data.distance)," meters is ",r.a.createElement("b",null,e.data.message))})),o=this.state.performanceData.length,c=0===p.length?0:(p.reduce(function(e,t){return(Number(e)||0)+(Number(t)||0)})/1e3).toFixed(2),l=m.indexOf(Math.max.apply(Math,m)),u=0===p.length&&0===l?"still to be discovered":0===l?"Excellent":1===l?"Above Average":2===l?"Average":3===l?"Below Average":4===l?"Poor":""}var x={width:200,height:80};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{horizontal:!0},r.a.createElement(_.a,{as:"h3"},"RESULT DASHBOARD")),r.a.createElement(B.a,null,r.a.createElement(J.a,{container:!0,columns:2},r.a.createElement(J.a.Column,null,r.a.createElement(j.a,null,r.a.createElement(_.a,{as:"h3"},"Result log"),r.a.createElement(H.a,null),e)),r.a.createElement(J.a.Column,null,r.a.createElement(B.a,null,r.a.createElement(_.a,{textAlign:"right",as:"h3"},"Your total distance covered is"),r.a.createElement(H.a,null),r.a.createElement(B.a,{circular:!0,inverted:!0,style:x,color:"teal"},r.a.createElement(_.a,{as:"h1"},c,"km")),r.a.createElement(_.a,{textAlign:"right",as:"h3"},"Your total number of runs is"),r.a.createElement(H.a,null),r.a.createElement(B.a,{circular:!0,inverted:!0,style:x,color:"teal"},r.a.createElement(_.a,{as:"h1"},o)),r.a.createElement(_.a,{textAlign:"right",as:"h3"},"Your most frequent result is"),r.a.createElement(H.a,null),r.a.createElement(B.a,{circular:!0,inverted:!0,style:x,color:"teal"},r.a.createElement(_.a,{as:"h1"},u)))))),r.a.createElement(B.a,null,r.a.createElement(J.a,{container:!0,columns:2},r.a.createElement(J.a.Column,null,r.a.createElement(N.b,{data:g,options:{legend:{display:!1},title:{display:!0,text:"Distance over time",fontSize:16},scales:{yAxes:[{ticks:{beginAtZero:!0,min:0}}]}}})),r.a.createElement(J.a.Column,null,r.a.createElement(N.a,{data:h,options:{responsive:!0,legend:{display:!1},title:{display:!0,text:"Performance Status",fontSize:16},scales:{yAxes:[{ticks:{beginAtZero:!0,min:0}}]}}})))))}}]),t}(n.Component),R=a(342),G=a(56),T=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={distance:"",gender:"female",age:"",renderLoginForm:!1,renderSignUpForm:!1,authenticated:!1,email:"",password:"",passwordConfirmation:"",message:"",entrySaved:!1,renderIndex:!1,updateIndex:""},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"onLogin",value:function(){var e=Object(u.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x(this.state.email,this.state.password);case 3:!0===(a=e.sent).authenticated?this.setState({authenticated:!0}):this.setState({message:a.message,renderLoginForm:!1});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onSignUp",value:function(){var e=Object(u.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,w(this.state.email,this.state.password,this.state.passwordConfirmation);case 3:!0===(a=e.sent).authenticated?this.setState({authenticated:!0}):this.setState({message:a.message,renderSignUpForm:!1});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"entryHandler",value:function(){this.setState({entrySaved:!0,updateIndex:!0})}},{key:"indexUpdated",value:function(){this.setState({updateIndex:!1})}},{key:"handleGenderChange",value:function(e){this.setState({gender:e})}},{key:"onChange",value:function(e){var t;this.setState((t={},Object(o.a)(t,e.target.id,e.target.value),Object(o.a)(t,"entrySaved",!1),t))}},{key:"render",value:function(){var e,t,a,n,s=this;return!0===this.state.authenticated?(a=JSON.parse(sessionStorage.getItem("credentials")).uid,e=r.a.createElement("p",null,"Hi ",a),n=!0===this.state.renderIndex?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{updateIndex:this.state.updateIndex,indexUpdated:this.indexUpdated.bind(this)}),r.a.createElement(O.a,{compact:!0,color:"teal",onClick:function(){return s.setState({renderIndex:!1})}},"Hide past entries")):r.a.createElement(O.a,{compact:!0,color:"teal",id:"show-index",onClick:function(){return s.setState({renderIndex:!0})}},"Show past entries")):!0===this.state.renderLoginForm&&!1===this.state.renderSignUpForm?(e=r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{loginHandler:this.onLogin.bind(this),inputChangeHandler:this.onChange.bind(this)})),t=r.a.createElement(O.a,{compact:!0,color:"teal",id:"sign-up",onClick:function(){return s.setState({renderSignUpForm:!0,renderLoginForm:!1})}},"Sign Up")):!1===this.state.renderLoginForm&&!0===this.state.renderSignUpForm?(e=r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{compact:!0,color:"teal",id:"login",onClick:function(){return s.setState({renderLoginForm:!0,renderSignUpForm:!1})}},"Login")),t=r.a.createElement(L,{signUpHandler:this.onSignUp.bind(this),inputChangeHandler:this.onChange.bind(this)})):(e=r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{compact:!0,color:"teal",id:"login",onClick:function(){return s.setState({renderLoginForm:!0,renderSignUpForm:!1})}},"Login")),t=r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{compact:!0,color:"teal",id:"sign-up",onClick:function(){return s.setState({renderSignUpForm:!0,renderLoginForm:!1})}},"Sign Up"))),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement(_.a,{as:"h1"},r.a.createElement(G.a,{name:"doctor"}),r.a.createElement(_.a.Content,null,"THE COOPER TEST")),r.a.createElement(H.a,null),r.a.createElement(j.a,null,e),r.a.createElement(j.a,null,t),r.a.createElement(j.a,null,r.a.createElement("p",null,this.state.message)),r.a.createElement(B.a,null,r.a.createElement(U,{inputChangeHandler:this.onChange.bind(this),handleGenderChange:this.handleGenderChange.bind(this)})),r.a.createElement(H.a,{horizontal:!0},"Wait for your physical assessment..."),r.a.createElement(B.a,null,r.a.createElement(j.a,{color:"teal"},r.a.createElement(D,{distance:this.state.distance,gender:this.state.gender,age:this.state.age,authenticated:this.state.authenticated,entrySaved:this.state.entrySaved,entryHandler:this.entryHandler.bind(this)}))),n))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[186,1,2]]]);
//# sourceMappingURL=main.4bc08ed2.chunk.js.map