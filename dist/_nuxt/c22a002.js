(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10],{213:function(t,e,l){t.exports=l.p+"img/whale.b7a07ef.jpg"},215:function(t,e,l){t.exports=l.p+"img/diver.c749111.jpg"},216:function(t,e,l){t.exports=l.p+"img/sign-bg.c9a5361.jpg"},217:function(t,e,l){t.exports=l.p+"img/baseball2.c021a14.jpg"},218:function(t,e,l){t.exports=l.p+"img/winter-path.d4ebda4.jpg"},219:function(t,e,l){t.exports=l.p+"img/ski.f77f943.jpg"},222:function(t,e,l){t.exports=l.p+"img/elephants.852ff34.jpg"},224:function(t,e,l){var content=l(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(36).default)("1e064a3a",content,!0,{sourceMap:!1})},231:function(t,e,l){"use strict";l(224)},232:function(t,e,l){var r=l(35)(!1);r.push([t.i,".slider-wrapper{position:relative}.slider-wrapper nav{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;padding:0 10px;pointer-events:none}.slider-wrapper nav div{width:40px;height:40px;background-color:#82ca9c;color:#fff;font-size:21px;box-shadow:0 0 6px 1px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background-color .1s ease-out;pointer-events:all}.slider-wrapper nav div:hover{background-color:#444}.slider-wrapper nav div.disabled{opacity:0;pointer-events:none}.slider{width:100%;overflow-x:scroll}.slider .wrapper{display:flex;flex-wrap:wrap}.slider .slide{width:360px;padding-left:15px;padding-right:15px}.slider .slide img{width:400px;height:400px}.rounded{position:relative}.rounded h1,.rounded h5{position:absolute;margin-left:45px;color:#fff}@media only screen and (max-width:768px){.slider .slide{width:50vw}}@media only screen and (min-width:768px){.slider-wrapper{overflow:hidden;width:100%}.slider{position:relative;bottom:-18px}}",""]),t.exports=r},250:function(t,e,l){"use strict";l.r(e);l(57);var r={methods:{slajderPrvi:function(){var t=document.querySelectorAll(".slider-wrapper");window.addEventListener("resize",(function(){for(var i=0;i<t.length;i++)r(t[i])}));for(var e=function(i){var e=t[i].querySelector(".slider"),d=e.querySelector(".wrapper");r(t[i]);var n=t[i].querySelector("nav .right"),o=t[i].querySelector("nav .left");e.addEventListener("scroll",(function(){0===e.scrollLeft?o.classList.add("disabled"):o.classList.remove("disabled"),e.scrollLeft>=d.clientWidth-e.clientWidth?n.classList.add("disabled"):n.classList.remove("disabled")})),n&&n.addEventListener("click",(function(t){o.classList.remove("disabled"),l(e,0,e.clientWidth,"right",(function(){e.scrollLeft>=d.clientWidth-e.clientWidth&&n.classList.add("disabled")}))})),o&&o.addEventListener("click",(function(t){n.classList.remove("disabled"),l(e,0,e.clientWidth,"left",(function(){0==e.scrollLeft&&o.classList.add("disabled")}))}))},i=0;i<t.length;i++)e(i);function l(t,e,l,r,d){var n=e,o=30,c=setInterval((function(){n>=l&&(clearInterval(c),o=l-n,d()),t.scrollLeft="right"===r?t.scrollLeft+o:t.scrollLeft-o,n+=o}),15)}function r(t){var e=t.querySelector(".slider").querySelector(".wrapper"),l=e.querySelectorAll(".slide");e.style.width=l.length*l[0].clientWidth+"px"}}},computed:{page:function(){return this.$store.getters.getPageByName(this.$route.params.pages)}}},d=(l(231),l(11)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-wrapper",on:{mouseenter:function(e){return t.slajderPrvi()}}},[r("div",{staticClass:"slider items"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[1].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[1].opis))]),t._v(" "),r("img",{attrs:{src:l(217),alt:"alt"}})])]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[0].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[0].opis))]),t._v(" "),r("img",{attrs:{src:l(218),alt:"alt"}})])]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[4].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[4].opis))]),t._v(" "),r("img",{attrs:{src:l(213),alt:"alt"}})])]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[3].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[3].opis))])]),t._v(" "),r("img",{attrs:{src:l(219),alt:"alt"}})]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[2].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[2].opis))]),t._v(" "),r("img",{attrs:{src:l(216),alt:"alt"}})])]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[1].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[1].opis))]),t._v(" "),r("img",{attrs:{src:l(222),alt:"alt"}})])]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[0].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[0].opis))]),t._v(" "),r("img",{attrs:{src:l(215),alt:"alt"}})])]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[4].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[4].opis))])]),t._v(" "),r("img",{attrs:{src:l(217),alt:"alt"}})]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[3].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[3].opis))])]),t._v(" "),r("img",{attrs:{src:l(219),alt:"alt"}})]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[2].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[2].opis))])]),t._v(" "),r("img",{attrs:{src:l(213),alt:"alt"}})]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[1].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[1].opis))]),t._v(" "),r("img",{attrs:{src:l(218),alt:"alt"}})])]),t._v(" "),r("div",{staticClass:"item slide category"},[r("div",{staticClass:"rounded"},[r("h1",[t._v(t._s(t.page.artikli[0].naslov))]),t._v(" "),r("h5",[t._v(t._s(t.page.artikli[0].opis))])]),t._v(" "),r("img",{attrs:{src:l(216),alt:"alt"}})])])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nav",[l("div",{staticClass:"left disabled"},[l("i",{staticClass:"fas fa-chevron-left"})]),t._v(" "),l("div",{staticClass:"right"},[l("i",{staticClass:"fas fa-chevron-right"})])])}],!1,null,null,null);e.default=component.exports},292:function(t,e,l){"use strict";l.r(e);var r={},d=l(11),component=Object(d.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("SlajderPrvi")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SlajderPrvi:l(250).default})}}]);