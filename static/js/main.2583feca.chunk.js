(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{28:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(22),r=a.n(i),s=(a(28),a(3)),o=a(6),l=a.n(o),d=a(4),u=a(23),j=a.p+"static/media/thunder.19ff3c30.svg",h=a.p+"static/media/cloudy.24f9a474.svg",b=a.p+"static/media/day.c33ef664.svg",O=a.p+"static/media/rainy-4.9988edfd.svg",p=a.p+"static/media/snowy-1.27113af0.svg",v=a(0),x=function(e){var t=e.data,a=Object(n.useState)(void 0),c=Object(s.a)(a,2),i=c[0],r=c[1],o=Object(n.useState)(void 0),l=Object(s.a)(o,2),u=l[0],x=l[1],m=Object(n.useRef)(null);function f(e){switch(e.weather[0].main){case"Haze":case"Clouds":return h;case"Clear":return b;case"Rain":return O;case"Snow":return p;default:return j}}function y(e){return(9*(e-273.15)/5+32).toFixed(1)}return Object(n.useEffect)((function(){d.a.from(m.current,{delay:1.1,y:200,duration:1,opacity:0}),function(e){for(var t=[],a=0;a<6;a++)t.push(e.daily[a]);r(t.slice(1))}(t),function(e){switch((new Date).getDay()){case 0:x(["Mon","Tues","Wed","Thur","Fri"]);break;case 1:x(["Tues","Wed","Thur","Fri","Sat"]);break;case 2:x(["Wed","Thur","Fri","Sat","Sun"]);break;case 3:x(["Thur","Fri","Sat","Sun","Mon"]);break;case 4:x(["Fri","Sat","Sun","Mon","Tues"]);break;case 5:x(["Sat","Sun","Mon","Tues","Wed"]);break;case 6:x(["Sun","Mon","Tues","Wed","Thur"]);break;default:;}}()}),[t]),Object(v.jsx)("section",{className:"seven-day-section",children:Object(v.jsx)("div",{className:"seven-day-container",ref:m,children:void 0!==i&&void 0!==u&&i.map((function(e,t){return Object(v.jsxs)("div",{className:"weekday-container",children:[Object(v.jsx)("h2",{className:"weekday",children:u[t]}),Object(v.jsx)("img",{src:f(e),alt:e.weather[0].main,className:"weekday-image"}),Object(v.jsxs)("div",{className:"weekday-temp-container",children:[Object(v.jsxs)("h3",{className:"weekday-celsius",children:[(a=e.temp.day,(a-273.15).toFixed(2)),"\xb0 C"]}),Object(v.jsxs)("h3",{className:"weekday-fahrenheit",children:[y(e.temp.day),"\xb0 F"]})]})]},t);var a}))})})},m=function(e){var t,a=e.current,i=e.week,r=e.lon,o=e.lat,l=Object(n.useState)(void 0),m=Object(s.a)(l,2),f=m[0],y=m[1],w=Object(n.useState)({}),N=Object(s.a)(w,2),g=(N[0],N[1]),k=Object(n.useRef)(null),S=Object(n.useRef)(null),F=Object(n.useRef)(null),C=Object(n.useRef)(null);return Object(n.useEffect)((function(){d.a.from(k.current,{delay:.5,y:200,duration:1,opacity:0}),d.a.from(S.current,{delay:.8,y:200,duration:1,opacity:0}),d.a.from(F.current,{delay:1.1,y:200,duration:1,opacity:0}),function(e){for(;e.firstChild;){if(void 0===e)return;e.removeChild(e.firstChild)}}(C.current),y(function(){switch((new Date).getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return}}()),function(){var e=u.map({key:"QFuH9GAzs8lu80rEHhmPm0ShlbWQkgIv",container:C.current,center:{lat:o,lng:r},zoom:12});g(e)}()}),[a]),Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsxs)("main",{className:"current-weather-section",children:[Object(v.jsxs)("div",{className:"current-weather-container",ref:k,children:[Object(v.jsxs)("h2",{className:"current-weather-location",children:[a.name,", ",a.sys.country]}),Object(v.jsxs)("div",{className:"weather",children:[Object(v.jsx)("div",{className:"weather-image",children:Object(v.jsx)("img",{src:function(){switch(a.weather[0].main){case"Haze":case"Clouds":return h;case"Clear":return b;case"Rain":return O;case"Snow":return p;default:return j}}(),alt:""})}),Object(v.jsxs)("div",{className:"weather-info",children:[Object(v.jsxs)("div",{className:"day-container",children:[Object(v.jsx)("h2",{children:f}),Object(v.jsx)("h3",{children:a.weather[0].main})]}),Object(v.jsxs)("div",{className:"temp-container",children:[Object(v.jsxs)("h4",{children:[(t=a.main.temp,(t-273.15).toFixed(2)),"\xb0 C"]}),Object(v.jsxs)("h4",{children:[function(e){return(9*(e-273.15)/5+32).toFixed(1)}(a.main.temp),"\xb0 F"]})]})]})]})]}),Object(v.jsx)("div",{className:"extra-weather-container",ref:S,children:Object(v.jsx)("div",{className:"weather-map-container",ref:C,style:{width:"650px",height:"350px"}})})]}),Object(v.jsx)(x,{data:i})]})},f=function(){var e=Object(n.useState)(void 0),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(void 0),o=Object(s.a)(r,2),d=o[0],u=o[1],j=Object(n.useState)(void 0),h=Object(s.a)(j,2),b=h[0],O=h[1],p=Object(n.useRef)(null),x=Object(n.useRef)(null),f=Object(n.useRef)(null),y=Object(n.useRef)(null),w=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(void 0!==a){var e="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a.coord.lat,"&lon=").concat(a.coord.lon,"&&appid=").concat("ae0aad49efd890348b878da1481b397c");l.a.post(e).then((function(e){return u(e.data)})).catch((function(e){return console.log(e)}))}}),[a]),Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)("nav",{className:"navigation-bar",children:Object(v.jsxs)("form",{className:"input-fields",children:[Object(v.jsx)("div",{className:"us-world-container",children:Object(v.jsxs)("select",{name:"us-world",className:"us-world dropdown",ref:p,onChange:function(e){return function(e){"world"===e.target.value?(O("world"),y.current.style.visibility="hidden",x.current.disabled=!1):(O("us"),y.current.style.visibility="visible",x.current.disabled=!0)}(e)},children:[Object(v.jsx)("option",{value:"us",children:"United States"}),Object(v.jsx)("option",{value:"world",children:"World"})]})}),Object(v.jsxs)("div",{className:"city-container input-containers",children:[Object(v.jsx)("label",{htmlFor:"city",children:"City: "}),Object(v.jsx)("input",{type:"text",name:"city",ref:f})]}),Object(v.jsxs)("div",{className:"country-container input-containers",children:[Object(v.jsx)("label",{htmlFor:"country",children:"Country: "}),Object(v.jsx)("input",{type:"text",name:"country",disabled:"disabled",className:"country",ref:x})]}),Object(v.jsxs)("div",{className:"state-container input-containers",ref:y,children:[Object(v.jsx)("label",{htmlFor:"state",children:"State: "}),Object(v.jsxs)("select",{name:"state",className:"state dropdown",ref:w,children:[Object(v.jsx)("option",{value:"al",children:"Alabama"}),Object(v.jsx)("option",{value:"ak",children:"Alaska"}),Object(v.jsx)("option",{value:"az",children:"Arizona"}),Object(v.jsx)("option",{value:"ar",children:"Arkansas"}),Object(v.jsx)("option",{value:"ca",children:"California"}),Object(v.jsx)("option",{value:"co",children:"Colorado"}),Object(v.jsx)("option",{value:"ct",children:"Connecticut"}),Object(v.jsx)("option",{value:"de",children:"Delaware"}),Object(v.jsx)("option",{value:"fl",children:"Florida"}),Object(v.jsx)("option",{value:"ga",children:"Georgia"}),Object(v.jsx)("option",{value:"hi",children:"Hawaii"}),Object(v.jsx)("option",{value:"id",children:"Idaho"}),Object(v.jsx)("option",{value:"il",children:"Illinois"}),Object(v.jsx)("option",{value:"in",children:"Indiana"}),Object(v.jsx)("option",{value:"ia",children:"Iowa"}),Object(v.jsx)("option",{value:"ks",children:"Kansas"}),Object(v.jsx)("option",{value:"ky",children:"Kentucky"}),Object(v.jsx)("option",{value:"la",children:"Louisiana"}),Object(v.jsx)("option",{value:"me",children:"Maine"}),Object(v.jsx)("option",{value:"md",children:"Maryland"}),Object(v.jsx)("option",{value:"ma",children:"Massachusetts"}),Object(v.jsx)("option",{value:"mi",children:"Michagan"}),Object(v.jsx)("option",{value:"mn",children:"Minnesota"}),Object(v.jsx)("option",{value:"ms",children:"Mississippi"}),Object(v.jsx)("option",{value:"mo",children:"Misssouri"}),Object(v.jsx)("option",{value:"mt",children:"Montana"}),Object(v.jsx)("option",{value:"ne",children:"Nebraska"}),Object(v.jsx)("option",{value:"nv",children:"Nevada"}),Object(v.jsx)("option",{value:"nh",children:"New Hampshire"}),Object(v.jsx)("option",{value:"nj",children:"New Jersey"}),Object(v.jsx)("option",{value:"nm",children:"New Mexico"}),Object(v.jsx)("option",{value:"ny",children:"New York"}),Object(v.jsx)("option",{value:"nc",children:"North Carolina"}),Object(v.jsx)("option",{value:"nd",children:"North Dakota"}),Object(v.jsx)("option",{value:"oh",children:"Ohio"}),Object(v.jsx)("option",{value:"ok",children:"Oklahoma"}),Object(v.jsx)("option",{value:"or",children:"Oregon"}),Object(v.jsx)("option",{value:"pa",children:"Pennsylvania"}),Object(v.jsx)("option",{value:"ri",children:"Rhode Island"}),Object(v.jsx)("option",{value:"sc",children:"South Carolina"}),Object(v.jsx)("option",{value:"sd",children:"South Dakota"}),Object(v.jsx)("option",{value:"tn",children:"Tennessee"}),Object(v.jsx)("option",{value:"tx",children:"Texas"}),Object(v.jsx)("option",{value:"ut",children:"Utah"}),Object(v.jsx)("option",{value:"vt",children:"Vermont"}),Object(v.jsx)("option",{value:"va",children:"Virginia"}),Object(v.jsx)("option",{value:"wa",children:"Washington"}),Object(v.jsx)("option",{value:"wv",children:"West Virginia"}),Object(v.jsx)("option",{value:"wi",children:"Wisconsin"}),Object(v.jsx)("option",{value:"wy",children:"Wyoming"})]})]}),Object(v.jsx)("div",{className:"search-container",children:Object(v.jsx)("button",{type:"button",className:"search",onClick:function(){if("world"===b){var e="https://api.openweathermap.org/data/2.5/weather?q=".concat(f.current.value,",").concat(x.current.value,"&appid=").concat("ae0aad49efd890348b878da1481b397c");l.a.post(e).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}else{var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(f.current.value,",").concat(w.current.value,",us&appid=").concat("ae0aad49efd890348b878da1481b397c");l.a.post(t).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}},children:"Search"})})]})}),void 0!==d&&Object(v.jsx)(m,{current:a,week:d,lon:a.coord.lon,lat:a.coord.lat})]})},y=function(){return Object(v.jsx)(c.a.Fragment,{children:Object(v.jsx)(f,{})})};r.a.render(Object(v.jsx)(y,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.2583feca.chunk.js.map