(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(31),c=t.n(i),o=(t(74),t(14)),s=t(15),r=t(20),m=t(16),d=t(19),u=t(2),f=t(7),h=t(68),p=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(r.a)(this,Object(m.a)(a).call(this))).state={count:0,inFocus:!1},e.increase=e.increase.bind(Object(u.a)(Object(u.a)(e))),e.restart=e.restart.bind(Object(u.a)(Object(u.a)(e))),e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"increase",value:function(){var e=this.props.percent,a=this.state.count+1;a>e?clearTimeout(this.tm):(this.setState({count:a}),this.tm=setTimeout(this.increase,10))}},{key:"restart",value:function(){var e=this;clearTimeout(this.tm),this.setState({count:0},function(){e.increase()})}},{key:"render",value:function(){var e=this,a=this.props.label,t=void 0===a?"HTML":a,n=this.state.count;return l.a.createElement(f.a,{className:"mt2",onEnter:function(){e.increase()}},l.a.createElement("div",{className:"w-100 flex items-center justify-between ph3"},l.a.createElement("span",{className:"w-25 w-10-l tl"},t),l.a.createElement("div",{className:"w-50 w-60-l"},l.a.createElement(h.a,{percent:n,strokeWidth:"7",trailWidth:"0",strokeColor:"#d0e3dc"})),l.a.createElement("span",null,n,"%")))}}]),a}(l.a.Component),b=function(e){var a=e.handleModal,t=e.image;return l.a.createElement("div",{className:"modal fixed h-100 w-100 z-2 pa5 flex items-center justify-center"},l.a.createElement("div",{className:"h-100 w-100 bg-near-black absolute o-80",onClick:function(){a()}}),l.a.createElement("img",{className:"w-100 w-33-l z-3",src:t}))},v=function(e){var a=e.content.map(function(e,a){var t=e.link,n=void 0===t?"":t,i=e.label,c=void 0===i?"":i;return l.a.createElement("a",{href:n,key:a,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"".concat(c," black f3 ph3 social-media")}))});return l.a.createElement("ul",{className:"social-media mt0 mb3 ph0"},a)},w=t(59),g=t.n(w),E=t(60),k=t.n(E),N=t(61),j=t.n(N),y=t(62),x=t.n(y),O=t(63),S=t.n(O),M=t(64),F=t.n(M),I=t(65),C=t.n(I),L=t(66),_=t.n(L),T=t(67),V={name:"Daniel Douangkesone",profile_image:t.n(T).a,skills:[{label:"HTML",percent:90},{label:"Css/Scss",percent:"90"},{label:"Javascript",percent:85},{label:"React",percent:"85"}],sections:[{label:"Recent Web Work",fields:[{image:F.a,label:"Homecity",link:"https://www.homecity.com/"},{image:C.a,label:"Villa",link:"https://www.villarealestate.com/"},{image:_.a,label:"Vince",link:"https://vinceyoungrealty.com"}]},{label:"Recent Design Work",fields:[{image:g.a,label:"Bodega"},{image:k.a,label:"Burn"},{image:j.a,label:"Fast Fridays"},{image:x.a,label:"Lost Pines"},{image:S.a,label:"Farm"}]}],social_media:[{label:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/ddouangkesone/"},{label:"fab fa-github",link:"https://github.com/ddouangkesone"},{label:"far fa-envelope",link:"mailto:ddouangkesone@gmail.com"},{label:"fab fa-instagram",link:"https://www.instagram.com/dosebotsomebot/"}]},W=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).state={inFocus:!1},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.handleModal,n=a.content,i=void 0===n?{}:n,c=i.label,o=void 0===c?"":c,s=i.fields,r=void 0===s?[]:s,m=this.state.inFocus,d=r.map(function(e,a){var n=e.image,i=e.label,c=e.link,o=void 0===c?"":c;return o?l.a.createElement("div",{key:a,className:"w-third-l w-50-m w-100 pa3 mv2 h5"},l.a.createElement("a",{className:"link dt hide-child br2 cover bg-center h-100 shadow-2 fade-in center w-100",target:"_blank",rel:"noreferrer noopener",href:o,style:{backgroundImage:"url(".concat(n,")")}},l.a.createElement("span",{className:"washed-green dtc v-mid child bg-black-40"},i))):l.a.createElement("div",{key:a,className:"w-third-l w-50-m w-100 pa3 mv2 h5",onClick:function(){t(n)}},l.a.createElement("div",{className:"link dt hide-child br2 cover bg-center h-100 shadow-2 fade-in center w-100",style:{background:"url(".concat(n,")")}},l.a.createElement("span",{className:"washed-green dtc v-mid child bg-black-40"},i)))});return l.a.createElement("div",{className:"recent-work pv5 mt3 flex flex-column mb4"},l.a.createElement("div",{className:"w-100 josefin"},l.a.createElement("h1",null,o)),l.a.createElement(f.a,{className:"mt2",onEnter:function(){e.setState({inFocus:!0})}},l.a.createElement("div",{className:"examples flex flex-wrap items-center flex-column-m flex-row-l f4"},m?d:null)))}}]),a}(l.a.Component),D=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).state={modalOpen:!1,modalImage:"",introVisible:!0,removeIntro:!1,navShadow:!0,initialLoad:!1},t.handleModal=t.handleModal.bind(Object(u.a)(Object(u.a)(t))),t.escFunction=t.escFunction.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",this.escFunction,!1),window.addEventListener("scroll",function(){var a=e.state,t=a.introVisible,n=a.removeIntro,l=window.pageYOffset;l>350&&t?e.setState({introVisible:!1}):l<350&&!t?e.setState({introVisible:!0,removeIntro:!1}):l>400&&!n&&e.setState({removeIntro:!0})}),this.setState({initialLoad:!0})}},{key:"handleModal",value:function(e){var a=this.state.modalOpen;this.setState({modalOpen:!a,modalImage:e})}},{key:"escFunction",value:function(e){27===e.keyCode&&this.setState({modalOpen:!1})}},{key:"render",value:function(){var e=this,a=this.state,t=a.modalOpen,n=a.modalImage,i=a.introVisible,c=a.removeIntro,o=a.navShadow,s=a.initialLoad,r=void 0!==s&&s,m=V.name,d=void 0===m?"":m,u=V.sections,h=V.skills,w=void 0===h?[]:h,g=V.social_media,E=void 0===g?[]:g,k=(void 0===u?[]:u).map(function(a,t){return l.a.createElement(W,{key:t,content:a,handleModal:e.handleModal,index:t})}),N=w.map(function(e,a){var t=e.label,n=void 0===t?"":t,i=e.percent;return l.a.createElement(p,{percent:i,key:a,label:n})});return l.a.createElement("div",{className:"App"},t?l.a.createElement(b,{image:n,handleModal:this.handleModal}):null,l.a.createElement("div",{className:"background-landscape"}),c?null:l.a.createElement("div",{className:"fixed top-0 h-100 w-100 flex items-center ph5 white ".concat(i?"fade-in":"fade-out")},l.a.createElement("div",{className:"dtc v-mid tc white ph3 ph4-l w-100 pacifico"},l.a.createElement("h1",null,"Welcome to my portfolio site"),l.a.createElement("p",{className:"josefin"},"Scroll down for more content"))),r?l.a.createElement("div",{className:"pacifico ph5-l ph3 z-1 fixed top-0 w-100 tc name pt3 ".concat(o?"shadow-3":""," black bg-washed-green ").concat(i?"fade-out":"nav-fade-in")},l.a.createElement("h2",{className:"mb3 mt0 f-subheadline-l f1-m f2"},d),l.a.createElement(v,{content:E})):null,l.a.createElement("div",{className:"w-100 w-50-l vh-100 spacer"}),l.a.createElement("div",{className:"w-100 w-50-l fr tc ph4 washed-green-o2"},l.a.createElement("div",{className:"hello vh-75 flex flex-column justify-center f4"},l.a.createElement("h1",{className:"josefin mb4"},"About Me"),l.a.createElement("span",null,"I'm a web designer / developer based out of Austin, Tx. I started taking freelance design jobs and naturally progressed into web development. Making beautiful smart websites is my pride and passion.")),l.a.createElement(f.a,{onEnter:function(){e.setState({removeIntro:!0})}}),k,l.a.createElement("div",{className:"skills flex flex-column vh-75 flex flex-column justify-center f4"},l.a.createElement("div",{className:"w-100 josefin mb4"},l.a.createElement("h1",null,"Related Skills")),N)),l.a.createElement("footer",{className:"w-100 pv4 tc fr bg-washed-green vh-100 relative"},l.a.createElement("div",{className:"footer-top w-100 relative"},l.a.createElement("div",{className:"absolute bottom-0 flex w-100 h-75 pt4"},l.a.createElement("div",{className:"w-50 h-100 flex items-center justify-center pv5 pacifico ph3"},l.a.createElement("h2",null," Thanks for your time and interest!! ")),l.a.createElement("div",{className:"w-50 h-100 flex flex-column justify-center bl pv5 pl4 tl"},l.a.createElement("div",null,l.a.createElement("h3",{className:"mb0"},"Get in touch"),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:ddouangkesone@gmail.com"},"Send me an email"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://docs.google.com/document/d/1K3PVDp56NUnAAbeOxBvs3NfLMDc8aZNaMvqoTF3zq1M/edit"},"Check out my resume")),l.a.createElement("div",{className:"mt5"},l.a.createElement("h3",null,"Find me"),l.a.createElement(v,{content:E})))),l.a.createElement("div",{className:"footer-bottom w-100"},l.a.createElement(f.a,{onEnter:function(){e.setState({navShadow:!1})},onExit:function(){e.setState({navShadow:!0})}})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,a,t){e.exports=t.p+"static/media/bodega.eec2eb3a.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/burn_alleycat.b43cf111.png"},61:function(e,a,t){e.exports=t.p+"static/media/fast_fridays.01ced41d.png"},62:function(e,a,t){e.exports=t.p+"static/media/lost_pines.6c920e5b.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/the_farm.95ff278f.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/homecity.930a3dcf.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/villa.4ae6a766.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/vince.7789b0de.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/back.4003eec9.png"},69:function(e,a,t){e.exports=t(116)},74:function(e,a,t){}},[[69,2,1]]]);
//# sourceMappingURL=main.cce7c5e6.chunk.js.map