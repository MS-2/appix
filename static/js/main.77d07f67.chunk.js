(this.webpackJsonpappi=this.webpackJsonpappi||[]).push([[0],{22:function(e,t,a){e.exports=a(46)},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),o=a(13),r=a.n(o),c=(a(27),a(14)),l=a(15),u=a(20),s=a(16),h=a(21),p=(a(28),a(6)),m=a.n(p),d=a(18),f=a.n(d);m.a.initializeApp({apiKey:"AIzaSyD118xTsi9yBBetVPLzhhCLV8e-GGgkyQc",authDomain:"appi-a8ecf.firebaseapp.com"});var g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={isSignedIn:!1},a.uiConfig={signInFlow:"popup",signInOptions:[m.a.auth.GoogleAuthProvider.PROVIDER_ID,m.a.auth.FacebookAuthProvider.PROVIDER_ID,m.a.auth.GithubAuthProvider.PROVIDER_ID,m.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},a.componentDidMount=function(){m.a.auth().onAuthStateChanged((function(e){a.setState({isSignedIn:!!e}),console.log("user",e)}))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},this.state.isSignedIn?i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("h2",null,"Conectado como : ",m.a.auth().currentUser.displayName)),i.a.createElement("li",null,i.a.createElement("img",{className:"avatar",alt:"profile pic",src:m.a.auth().currentUser.photoURL})),i.a.createElement("li",null,i.a.createElement("a",{href:"https://api-open.herokuapp.com/",className:"link"},"visitar otro experimento")),i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){return m.a.auth().signOut()},className:"danger"},"cerrar sesion"))):i.a.createElement("div",null,i.a.createElement("h2",null,"Conectate, vamos!"),i.a.createElement(f.a,{uiConfig:this.uiConfig,firebaseAuth:m.a.auth()})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.77d07f67.chunk.js.map