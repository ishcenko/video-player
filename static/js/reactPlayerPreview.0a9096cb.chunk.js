(self.webpackChunkvideo_player=self.webpackChunkvideo_player||[]).push([[664],{8275:function(e,t,n){var r,a=n(1109).default,i=n(4575).default,l=n(3913).default,o=n(1506).default,u=n(2205).default,s=n(9842).default,c=n(3269).default,d=Object.create,p=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,m=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,b=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var a,i=c(h(t));try{var l=function(){var i=a.value;y.call(e,i)||i===n||p(e,i,{get:function(){return t[i]},enumerable:!(r=f(t,i))||r.enumerable})};for(i.s();!(a=i.n()).done;)l()}catch(o){i.e(o)}finally{i.f()}}return e},g=function(e,t,n){return function(e,t,n){t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},v={};!function(e,t){for(var n in t)p(e,n,{get:t[n],enumerable:!0})}(v,{default:function(){return x}}),e.exports=(r=v,b(p({},"__esModule",{value:!0}),r));var w=function(e,t,n){return n=null!=e?d(m(e)):{},b(!t&&e&&e.__esModule?n:p(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),k="64px",_={},x=function(e){"use strict";u(n,e);var t=s(n);function n(){var e;return i(this,n),e=t.apply(this,arguments),g(o(e),"mounted",!1),g(o(e),"state",{image:null}),g(o(e),"handleKeyPress",(function(t){"Enter"!==t.key&&" "!==t.key||e.props.onClick()})),e}return l(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchImage(this.props)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.url,r=t.light;e.url===n&&e.light===r||this.fetchImage(this.props)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchImage",value:function(e){var t=this,n=e.url,r=e.light,a=e.oEmbedUrl;if(!w.default.isValidElement(r))if("string"!==typeof r){if(!_[n])return this.setState({image:null}),window.fetch(a.replace("{url}",n)).then((function(e){return e.json()})).then((function(e){if(e.thumbnail_url&&t.mounted){var r=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");t.setState({image:r}),_[n]=r}}));this.setState({image:_[n]})}else this.setState({image:r})}},{key:"render",value:function(){var e=this.props,t=e.light,n=e.onClick,r=e.playIcon,i=e.previewTabIndex,l=e.previewAriaLabel,o=this.state.image,u=w.default.isValidElement(t),s={display:"flex",alignItems:"center",justifyContent:"center"},c={preview:a({width:"100%",height:"100%",backgroundImage:o&&!u?"url(".concat(o,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},s),shadow:a({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:k,width:k,height:k,position:u?"absolute":void 0},s),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},d=w.default.createElement("div",{style:c.shadow,className:"react-player__shadow"},w.default.createElement("div",{style:c.playIcon,className:"react-player__play-icon"}));return w.default.createElement("div",a({style:c.preview,className:"react-player__preview",onClick:n,tabIndex:i,onKeyPress:this.handleKeyPress},l?{"aria-label":l}:{}),u?t:null,r||d)}}]),n}(w.Component)}}]);
//# sourceMappingURL=reactPlayerPreview.0a9096cb.chunk.js.map