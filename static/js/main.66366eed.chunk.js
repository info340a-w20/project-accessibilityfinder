(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{56:function(e,t,a){e.exports=a(85)},61:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(19),i=a.n(s),c=(a(61),a(8)),r=a(46),o=a(10),m=a(9),u=a(12),h=a(11),d=a(13),p=(a(62),a(63),a(24),a(25)),f=a(15),b=(a(64),a(3)),g=a(4),E=a(31),v=(a(70),a(71),function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"category"},l.a.createElement(f.Link,{to:"/list",className:"no-background-btn",type:"button",onClick:function(t){return e.props.handleAmenitySearch("restaurant")}},l.a.createElement("span",{className:"fa-stack fa-3x"},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background"}),l.a.createElement(b.a,{icon:g.u,className:"fa-stack-1x"})),l.a.createElement("br",null),l.a.createElement("span",null,"Restaurant")),l.a.createElement(f.Link,{to:"/list",className:"no-background-btn",type:"button",onClick:function(t){return e.props.handleAmenitySearch("bar")}},l.a.createElement("span",{className:"fa-stack fa-3x"},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background"}),l.a.createElement(b.a,{icon:g.n,className:"fa-stack-1x"})),l.a.createElement("br",null),l.a.createElement("span",null,"Bar")),l.a.createElement(f.Link,{to:"/list",className:"no-background-btn",type:"button",onClick:function(t){return e.props.handleAmenitySearch("cafe")}},l.a.createElement("span",{className:"fa-stack fa-3x"},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background"}),l.a.createElement(b.a,{icon:g.j,className:"fa-stack-1x"})),l.a.createElement("br",null),l.a.createElement("span",null,"Cafe")),l.a.createElement(f.Link,{to:"/list",className:"no-background-btn",type:"button",onClick:function(t){return e.props.handleAmenitySearch("cinema")}},l.a.createElement("span",{className:"fa-stack fa-3x"},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background"}),l.a.createElement(b.a,{icon:g.m,className:"fa-stack-1x"})),l.a.createElement("br",null),l.a.createElement("span",null,"Movie")),l.a.createElement(f.Link,{to:"/list",className:"no-background-btn",type:"button",onClick:function(t){return e.props.handleAmenitySearch("theatre")}},l.a.createElement("span",{className:"fa-stack fa-3x"},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background"}),l.a.createElement(b.a,{icon:g.s,className:"fa-stack-1x"})),l.a.createElement("br",null),l.a.createElement("span",null,"Entertainment")))}}]),t}(n.Component)),y=a(30),k=(a(74),a(75),a(76),a(91)),w=a(54),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={wheelchair:!1,ada:!1,stadium:!1,braille:!1,dn:!1,ad:!1,cc:!1,als:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"color",value:function(e){var t={};t[e]=!this.state[e],this.setState(t)}},{key:"toggleSubmit",value:function(){return!1}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(k.a,{id:"editModal",show:this.props.show1,onHide:this.props.toggleModal1,"aria-labelledby":"editModalLabel","aria-hidden":"true",centered:!0},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,{id:"editModalLabel"},"Submit an edit")),l.a.createElement(k.a.Body,null,l.a.createElement("form",{id:"crowdsource"},l.a.createElement("label",{class:"cs-checkbox"},l.a.createElement("input",{type:"checkbox",name:"features",value:"wheelchair",class:"features"}),l.a.createElement("span",{class:"fa-stack fa-3x",onClick:function(){return e.color("wheelchair")}},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background",style:this.state.wheelchair?{color:"blue"}:{color:"lightgray"}}),l.a.createElement(b.a,{icon:g.v,className:"fa-stack-1x",style:this.state.wheelchair?{color:"white"}:{color:"black"}})),l.a.createElement("br",null),l.a.createElement("span",null,"Wheelchair accessible")),l.a.createElement("label",{class:"cs-checkbox"},l.a.createElement("input",{type:"checkbox",name:"features",value:"ada",class:"features"}),l.a.createElement("span",{class:"fa-stack fa-3x",onClick:function(){return e.color("ada")}},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background",style:this.state.ada?{color:"blue"}:{color:"lightgray"}}),l.a.createElement(b.a,{icon:g.k,className:"fa-stack-1x",style:this.state.ada?{color:"white"}:{color:"black"}})),l.a.createElement("br",null),l.a.createElement("span",null,"ADA doorways")),l.a.createElement("label",{class:"cs-checkbox"},l.a.createElement("input",{type:"checkbox",name:"features",value:"stadium",class:"features"}),l.a.createElement("span",{class:"fa-stack fa-3x",onClick:function(){return e.color("stadium")}},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background",style:this.state.stadium?{color:"blue"}:{color:"lightgray"}}),l.a.createElement(b.a,{icon:g.d,className:"fa-stack-1x",style:this.state.stadium?{color:"white"}:{color:"black"}})),l.a.createElement("br",null),l.a.createElement("span",null,"Stadium seating")),l.a.createElement("label",{class:"cs-checkbox"},l.a.createElement("input",{type:"checkbox",name:"features",value:"braille",class:"features"}),l.a.createElement("span",{class:"fa-stack fa-3x",onClick:function(){return e.color("braille")}},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background",style:this.state.braille?{color:"blue"}:{color:"lightgray"}}),l.a.createElement(b.a,{icon:g.c,className:"fa-stack-1x",style:this.state.braille?{color:"white"}:{color:"black"}})),l.a.createElement("br",null),l.a.createElement("span",null,"Braille")),l.a.createElement("label",{class:"cs-checkbox"},l.a.createElement("input",{type:"checkbox",name:"features",value:"dn",class:"features"}),l.a.createElement("span",{class:"fa-stack fa-3x",onClick:function(){return e.color("dn")}},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background",style:this.state.dn?{color:"blue"}:{color:"lightgray"}}),l.a.createElement(b.a,{icon:g.o,className:"fa-stack-1x",style:this.state.dn?{color:"white"}:{color:"black"}})),l.a.createElement("br",null),l.a.createElement("span",null,"Descriptive narration")),l.a.createElement("label",{class:"cs-checkbox"},l.a.createElement("input",{type:"checkbox",name:"features",value:"ad",class:"features"}),l.a.createElement("span",{class:"fa-stack fa-3x",onClick:function(){return e.color("ad")}},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background",style:this.state.ad?{color:"blue"}:{color:"lightgray"}}),l.a.createElement(b.a,{icon:g.b,className:"fa-stack-1x",style:this.state.ad?{color:"white"}:{color:"black"}})),l.a.createElement("br",null),l.a.createElement("span",null,"Audio description")),l.a.createElement("label",{class:"cs-checkbox"},l.a.createElement("input",{type:"checkbox",name:"features",value:"cc",class:"features"}),l.a.createElement("span",{class:"fa-stack fa-3x",onClick:function(){return e.color("cc")}},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background",style:this.state.cc?{color:"blue"}:{color:"lightgray"}}),l.a.createElement(b.a,{icon:g.i,className:"fa-stack-1x",style:this.state.cc?{color:"white"}:{color:"black"}})),l.a.createElement("br",null),l.a.createElement("span",null,"Closed captioning")),l.a.createElement("label",{class:"cs-checkbox"},l.a.createElement("input",{type:"checkbox",name:"features",value:"als",class:"features"}),l.a.createElement("span",{class:"fa-stack fa-3x",onClick:function(){return e.color("als")}},l.a.createElement(b.a,{icon:g.g,className:"fa-stack-2x icon-background",style:this.state.als?{color:"blue"}:{color:"lightgray"}}),l.a.createElement(b.a,{icon:g.a,className:"fa-stack-1x",style:this.state.als?{color:"white"}:{color:"black"}})),l.a.createElement("br",null),l.a.createElement("span",null,"Assistive listening systems")),l.a.createElement(k.a.Footer,null,l.a.createElement(w.a,{id:"cs-submit",disabled:this.toggleSubmit(),variant:"primary",onClick:function(t){return e.props.toggleBoth()}},"Submit"))))),l.a.createElement(k.a,{id:"thankModal",show:this.props.show2,onHide:this.props.toggleModal2,"aria-labelledby":"thankModalLabel","aria-hidden":"true",centered:!0},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,{id:"thankModalLabel"},"Thanks for the help!")),l.a.createElement(k.a.Body,null,"Thank you for your submission! You'll get an email when it has been reviewed.")))}}]),t}(n.Component),N=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"left-view-home",className:"home-page-info left-view"},l.a.createElement("nav",{class:"navbar navbar-light bg-light navbar-expand index-nav"},l.a.createElement("ul",{class:"navbar-nav"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement(y.HashLink,{to:"#about",class:"nav-link"}," Who We Are")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(y.HashLink,{to:"#mobility",class:"nav-link"},"Mobility")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(y.HashLink,{to:"#vision",class:"nav-link"},"Vision")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(y.HashLink,{to:"#hearing",class:"nav-link"},"Hearing")))),l.a.createElement(v,{handleAmenitySearch:this.props.handleAmenitySearch}),l.a.createElement(E.a,null,l.a.createElement("h2",{id:"about",class:"mainPageHeader"},"Who We Are"),l.a.createElement("p",null,"Accessibility Finder's goal is to give people the ability to enjoy and participate in activities that they love. Our website empowers people to give feedback through both reviews and crowdsourcing in order to share information on accessibility features in various locations."),l.a.createElement("h5",{id:"mobility"},"Mobility"),l.a.createElement("p",null,"Mobility impairment includes physical defects, including upper or lower limb loss or impairment, poor manual dexterity, and damage to one or multiple organs of the body. Disability in mobility can be a congenital or acquired problem or a consequence of disease. People who have a broken skeletal structure also fall into this category.",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Physical_disability"}," (source)")),l.a.createElement("h5",{id:"vision"},"Vision"),l.a.createElement("p",null,"Visual impairment, also known as vision impairment or vision loss, is a decreased ability to see to a degree that causes problems not fixable by usual means, such as glasses. Some also include those who have a decreased ability to see because they do not have access to glasses or contact lenses. The term blindness is used for complete or nearly complete vision loss. Visual impairment may cause people difficulties with normal daily activities such as driving, reading, socializing, and walking.",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Visual_impairment"}," (source)")),l.a.createElement("h5",{id:"hearing"},"Hearing"),l.a.createElement("p",null,"Hearing loss, also known as hearing impairment, is a partial or total inability to hear. A deaf person has little to no hearing. Hearing loss may occur in one or both ears. In children, hearing problems can affect the ability to learn spoken language and in adults it can create difficulties with social interaction and at work. Hearing loss can be temporary or permanent.",l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Hearing_loss"}," (source)")),l.a.createElement(x,null)))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({inputtedText:e.target.value})},a.handleSearch=function(e){e.preventDefault(),a.props.handleSearch(a.state.inputtedText),a.setState({inputtedText:""})},a.handleKeyPress=function(e){"Enter"===e.key&&(a.props.handleSearch(a.state.inputtedText),a.setState({inputtedText:""}),a.props.history.push("/list"))},a.state={inputtedText:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("header",null,l.a.createElement("nav",{class:"navbar universal-nav"},l.a.createElement(f.Link,{to:"/",class:"navbar-brand mb-0 h1 text-white",onClick:function(t){return e.props.renderLocations()}},l.a.createElement("span",{id:"name"},"Accessibility Finder"),l.a.createElement("span",{id:"acronym"},"Access")),l.a.createElement("div",{class:"input-group"},l.a.createElement("input",{type:"text",onKeyPress:this.handleKeyPress,onChange:this.handleChange,onSubmit:this.handleSearch,value:this.state.inputtedText,class:"form-control",id:"search",placeholder:"Search by name of place"}),l.a.createElement("div",{class:"input-group-append"},l.a.createElement(f.Link,{to:"/list",id:"main-places-search",class:"btn btn-outline-light",type:"button",onClick:function(t){e.props.handleSearch(e.state.inputtedText),e.setState({inputtedText:""})}},l.a.createElement(b.a,{icon:g.r,"aria-label":"search"}))))))}}]),t}(n.Component),O=Object(p.o)(j),S=(a(78),a(90)),C=a(92),L=a(93),M=a(94),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).onMapMoveEnd=function(e){a.props.handleMapMovement(e.target.getBounds())},a.createMarkers=function(){a.props.itemsToDisplay.forEach((function(e,t){return l.a.createElement(S.a,{position:(e.lat,e.lon)},l.a.createElement(C.a,null,e.name,".",l.a.createElement("br",null),e.name))}))},a.open=function(e){},a.popup=l.a.createRef(),a.state={zoom:13,lat:47.606209,lng:-122.332069,boundingbox:[],center:[47.606209,-122.332069]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return console.log(this.props),l.a.createElement("div",{className:"map-display"},l.a.createElement(L.a,{id:"leaflet-map",center:this.state.center,zoom:this.state.zoom,ref:"map",onMoveend:this.onMapMoveEnd,items:this.props.itemsToDisplay},l.a.createElement(M.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),this.props.itemsToDisplay?this.props.itemsToDisplay.map((function(t,a){return l.a.createElement(S.a,{position:[t.lat,t.lon]},l.a.createElement(C.a,{ref:e.popup,onOpen:function(t){return e.open()}},t.name,l.a.createElement("br",null),l.a.createElement(f.Link,{to:"/info/"+t.id},"Display ",t.name," full info")))})):l.a.createElement(S.a,{position:this.state.center})))}}]),t}(n.Component),T=(a(79),function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{class:"footer"},l.a.createElement("p",null,"\xa9 2020 Copyright: Amit Galitzky & Jill Nguyen"))}}]),t}(n.Component)),D=(a(80),a(52)),H=(a(81),function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e="/info/"+this.props.id;return l.a.createElement("div",{className:"col"},l.a.createElement(f.Link,{to:e},l.a.createElement("div",{className:"card"},l.a.createElement("img",{class:"card-img-top",src:"/placeholder.png",alt:"location"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h5",{class:"card-title"},this.props.item.name),l.a.createElement("p",{class:"card-text text-secondary"},this.props.item.type,l.a.createElement("br",null),this.props.item.addr),l.a.createElement("div",{class:"features"},l.a.createElement("span",null,this.props.item.mobilityCheck,"Mobility"),l.a.createElement("span",null,l.a.createElement(b.a,{icon:g.t}),"Vision"),l.a.createElement("span",null,l.a.createElement(b.a,{icon:g.t}),"Hearing"))))))}}]),t}(n.Component)),B=Object(p.o)(H),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).createCards=function(){var e=[],t=[];return a.props.itemsToDisplay.forEach((function(n,s){t.push(l.a.createElement(B,{reviewList:a.state.reviewList,key:n.name,item:n,id:n.id})),s%3!=2&&s!=a.props.itemsToDisplay.length-1||(e.push(l.a.createElement("div",{className:"row"},t)),t=[])})),e},a.state={},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"left-view-home",className:"home-page-info left-view"},l.a.createElement(v,{handleAmenitySearch:this.props.handleAmenitySearch}),l.a.createElement("div",{id:"list",class:"container"},this.props.isFetching?l.a.createElement(D.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")):this.props.noElements?l.a.createElement("div",null,l.a.createElement("p",null,"No results were")):this.createCards()))}}]),t}(n.Component),_=a(53),I=(a(82),a(83),function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),s=e.getHours()>12?e.getHours()-12:e.getHours(),i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),c=e.getHours()>=12?"PM":"AM";return l.a.createElement("div",{className:"review"},l.a.createElement("div",{class:"info"},l.a.createElement("div",{class:"flex reviewHeader"},l.a.createElement("h5",null,"Anonymous")),l.a.createElement("p",{class:"timestamp"},a,"/",n,"/",t," ",s,":",i," ",c),l.a.createElement("p",{class:"reviewContent"},this.props.text)))}}]),t}(n.Component)),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).hideModal2=function(){a.setState({show2:!1})},a.toggleBoth=function(){a.toggleModal1(),a.toggleModal2()},a.toggleModal1=function(){a.setState({show1:!a.state.show1})},a.toggleModal2=function(){a.setState({show2:!a.state.show2})},a.toggleReview=function(){a.setState({showTextbox:!a.state.showTextbox})},a.handleChange=function(e){a.setState({reviewText:e.target.value})},a.handleReviews=function(){},a.addReview=function(){var e=a.state.reviewText;a.setState({locationReviews:[e].concat(Object(_.a)(a.state.locationReviews))},(function(){a.props.handleReviews(a.state.locationReviews,a.state.item.name)})),a.setState({reviewText:""})},a.state={item:{},show1:!1,show2:!1,showTextbox:!1,reviewText:"",locationReviews:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname.split("/")[2];this.setState({item:this.props.itemsToDisplay[e]})}},{key:"mobilityCheck",value:function(){return this.state.item.wheelchair?g.e:g.t}},{key:"renderReviews",value:function(){var e=[];console.log(this.props.reviewList);var t=this.state.item.name,a=this.props.reviewList[t];return a&&a.forEach((function(t,a){e.push(l.a.createElement(I,{id:a,text:t}))})),e}},{key:"render",value:function(){var e=this,t=this.state.item;return l.a.createElement("div",{className:"left-view",id:"info-view"},l.a.createElement("div",{className:"infoHeader flex",id:"info-Header"},l.a.createElement("img",{className:"infoImgPlaceholder",src:"/placeholder.png",alt:"location"}),l.a.createElement("div",{className:"locationDetails info"},l.a.createElement(f.Link,{to:"/list",id:"back-button",className:"btn btn-outline-primary rounded-pill"},l.a.createElement(b.a,{icon:g.f})),l.a.createElement("h2",null,t.name),l.a.createElement("h6",{className:"text-secondary"},t.type),l.a.createElement("div",{className:"flex info-details"},l.a.createElement(b.a,{icon:g.p,className:"fa-fw","aria-hidden":"true"}),l.a.createElement("a",{className:"info-link",href:""},t.longAddress)),l.a.createElement("div",{className:"flex info-details"},l.a.createElement(b.a,{icon:g.l,className:"fa-fw","aria-hidden":"true"}),l.a.createElement("a",{className:"info-link",href:""},t.website)),l.a.createElement("div",{className:"flex info-details"},l.a.createElement(b.a,{icon:g.q,className:"fa-fw","aria-hidden":"true"}),l.a.createElement("a",{className:"info-link",href:""},t.phone)),l.a.createElement("div",{className:"flex hours-link info-details"},l.a.createElement(b.a,{icon:g.h,className:"fa-fw","aria-hidden":"true"}),"Hours: ",t.hours))),l.a.createElement("div",{class:"info"},l.a.createElement(w.a,{id:"edit",variant:"outline-primary",className:"rounded-pill",onClick:function(){return e.toggleModal1()}},"Edit"),l.a.createElement(x,{show1:this.state.show1,show2:this.state.show2,toggleModal1:this.toggleModal1,toggleModal2:this.toggleModal2,toggleBoth:this.toggleBoth}),l.a.createElement("div",{className:"flex"},l.a.createElement("h4",null,l.a.createElement(b.a,{icon:this.mobilityCheck(),className:"icon"}),"Mobility related assistance")),l.a.createElement("ul",{className:"list-group list-group-flush nobackground"},l.a.createElement("li",{className:"list-group-item nobackground"},l.a.createElement(b.a,{icon:this.mobilityCheck(),className:"icon"}),"Wheelchair accessible"),l.a.createElement("li",{className:"list-group-item nobackground"},l.a.createElement(b.a,{icon:g.t}),"ADA doorways"),l.a.createElement("li",{className:"list-group-item nobackground"},l.a.createElement(b.a,{icon:g.t}),"Stadium seating")),l.a.createElement("div",{className:"flex"},l.a.createElement("h4",null,l.a.createElement(b.a,{icon:g.t,className:"icon"}),"Vision related assistance")),l.a.createElement("ul",{className:"list-group list-group-flush nobackground"},l.a.createElement("li",{className:"list-group-item nobackground"},l.a.createElement(b.a,{icon:g.t}),"Braille"),l.a.createElement("li",{className:"list-group-item nobackground"},l.a.createElement(b.a,{icon:g.t}),"Descriptive narration")),l.a.createElement("div",{className:"flex"},l.a.createElement("h4",null,l.a.createElement(b.a,{icon:g.t,className:"icon"}),"Hearing related assistance")),l.a.createElement("ul",{className:"list-group list-group-flush nobackground"},l.a.createElement("li",{className:"list-group-item nobackground"},l.a.createElement(b.a,{icon:g.t}),"Audio description"),l.a.createElement("li",{className:"list-group-item nobackground"},l.a.createElement(b.a,{icon:g.t}),"Closed captioning"),l.a.createElement("li",{className:"list-group-item nobackground"},l.a.createElement(b.a,{icon:g.t}),"Assisted listening devices")),l.a.createElement("hr",null),l.a.createElement("div",{className:"photos"},l.a.createElement("h4",null,"Photos"),l.a.createElement("div",{className:"images"},l.a.createElement("img",{className:"infoImg",src:"/placeholder.png",alt:"placeholder"}),l.a.createElement("img",{className:"infoImg",src:"/placeholder.png",alt:"placeholder"}),l.a.createElement("img",{className:"infoImg",src:"/placeholder.png",alt:"placeholder"}),l.a.createElement("img",{className:"infoImg",src:"/placeholder.png",alt:"placeholder"}))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("div",{className:"flex reviewHeader"},l.a.createElement("h4",{className:"reviews-title"},"Reviews"),l.a.createElement("div",{className:"flex reviews-buttons"},l.a.createElement("button",{type:"button",className:"btn btn-outline-primary rounded-pill",id:"write-review",onClick:this.toggleReview},"Write a Review"))),l.a.createElement("form",{id:"review-form",style:this.state.showTextbox?{display:"block"}:{display:"none"}},l.a.createElement("div",{class:"form-group"},l.a.createElement("textarea",{class:"form-control",rows:"3",id:"review-input",onChange:this.handleChange,value:this.state.reviewText}),l.a.createElement("button",{type:"button",class:"btn btn-primary rounded-pill",id:"review-submit",onClick:this.addReview,disabled:""==this.state.reviewText},"Submit"))),l.a.createElement("hr",null),l.a.createElement("div",{id:"reviews"},this.renderReviews()))))}}]),t}(n.Component),P=(a(84),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).renderLocation=function(){a.setState({displayedListItems:[]})},a.handleSearchBar=function(e){a.setState({itemsToDisplay:[],searchText:e,fetchingNominatim:!0})},a.handleReviews=function(e,t){a.setState((function(a){return{reviewList:Object(r.a)({},a.reviewList,Object(c.a)({},t,e))}}))},a.handleAmenitySearch=function(e){a.setState({amenity:e,fetchingAmenity:!0})},a.handleMapMovement=function(e){a.mapBoundNomi(e),a.mapBoundOverpass(e)},a.mapBoundNomi=function(e){var t=[];t.push(e._southWest),t.push(e._northEast);var n=t[0].lng+","+t[0].lat+","+t[1].lng+","+t[1].lat;a.setState({searchLatLong:n})},a.mapBoundOverpass=function(e){var t=[];t.push(e._southWest),t.push(e._northEast);var n=t[0].lat+","+t[0].lng+","+t[1].lat+","+t[1].lng;a.setState({amenityLatLong:n})},a.processData=function(e){if(0!=e.length){var t=[];e.forEach((function(e,a){if(!(a>100)){var n={name:"",type:"",addr:"",mobilityCheck:"",longAddress:"",website:"",phone:"",hours:"",lat:"",lon:"",id:""};null!=e.licence?(n.name=e.address[Object.keys(e.address)[0]],n.type=(e.type.charAt(0).toUpperCase()+e.type.substring(1)).replace(/_/g," "),n.addr=null!=e.address.house_number?e.address.house_number+" "+e.address.road:"Address unavailable",n.mobilityCheck=null!=e.extratags.wheelchair?l.a.createElement(b.a,{icon:g.e}):l.a.createElement(b.a,{icon:g.t}),n.longAddress=e.address.house_number+" "+e.address.road+", "+e.address.city+", "+e.address.state+" "+e.address.postcode,n.website=null!=e.extratags.website?e.extratags.website:"-",n.phone=null!=e.extratags.phone?e.extratags.phone:"-",n.hours=null!=e.extratags.opening_hours?e.extratags.opening_hours:"-",n.wheelchair=e.extratags.wheelchair,n.lat=e.lat,n.lon=e.lon,n.id=a):(n.name=e.tags.name,n.type=e.tags.amenity.charAt(0).toUpperCase()+e.tags.amenity.substring(1),n.addr=null!=e.tags["addr:housenumber"]?e.tags["addr:housenumber"]+" "+e.tags["addr:street"]:"Address unavailable",n.mobilityCheck=null!=e.tags.wheelchair?l.a.createElement(b.a,{icon:g.e}):l.a.createElement(b.a,{icon:g.t}),n.longAddress=e.tags["addr:housenumber"]+" "+e.tags["addr:street"]+", "+e.tags["addr:city"]+" "+e.tags["addr:postcode"],n.website=null!=e.tags.website?e.tags.website:"--",n.phone=null!=e.tags.phone?e.tags.phone:"--",n.hours=null!=e.tags.opening_hours?e.tags.opening_hours:"  --",n.wheelchair=e.tags.wheelchair,n.lat=e.lat,n.lon=e.lon,n.id=a),t.push(n)}})),a.setState({displayedListItems:t})}else a.setState({noElements:!0})},a.state={displayedListItems:[],fetchingAmenity:!1,amenity:"",amenityLatLong:"47.481002,-122.459696,47.734136,-122.224433",searchLatLong:"-122.459696,47.481002,-122.224433,47.734136",noElements:!1,fetchingNominatim:!1,searchText:"",googleFetch:!0,reviewList:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;this.state.fetchingAmenity&&fetch("https://www.overpass-api.de/api/interpreter?data=[timeout:1][out:json];node[amenity="+this.state.amenity+"]("+this.state.amenityLatLong+");out%20meta;").then((function(e){return e.json()})).then((function(t){e.processData(t.elements),e.setState({fetchingAmenity:!1}),e.setState({redirect:!0})})),this.state.fetchingNominatim&&fetch("https://nominatim.openstreetmap.org/search?q="+this.state.searchText+"&format=json&viewbox="+this.state.searchLatLong+"&bounded=1&extratags=1&addressdetails=1").then((function(e){return e.json()})).then((function(t){e.processData(t),e.setState({fetchingNominatim:!1}),e.setState({redirect:!0})}))}},{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("main",null,l.a.createElement(O,{handleSearch:this.handleSearchBar,renderLocations:this.renderLocation}),l.a.createElement(p.g,null,l.a.createElement(p.d,{exact:!0,path:"/",render:function(t){return l.a.createElement(N,Object.assign({},t,{handleAmenitySearch:e.handleAmenitySearch}))}}),l.a.createElement(p.d,{path:"/list",render:function(t){return l.a.createElement(R,Object.assign({},t,{itemsToDisplay:e.state.displayedListItems,handleAmenitySearch:e.handleAmenitySearch,isFetching:e.state.fetchingAmenity||e.state.fetchingNominatim}))}}),l.a.createElement(p.d,{path:"/info/:id",render:function(t){return l.a.createElement(W,Object.assign({},t,{handleReviews:e.handleReviews,reviewList:e.state.reviewList,itemsToDisplay:e.state.displayedListItems}))}})),l.a.createElement(A,{handleMapMovement:this.handleMapMovement,itemsToDisplay:this.state.displayedListItems}),l.a.createElement(T,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(f.HashRouter,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.66366eed.chunk.js.map