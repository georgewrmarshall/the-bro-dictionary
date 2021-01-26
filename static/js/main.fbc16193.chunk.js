(this["webpackJsonpbro-dictionary"]=this["webpackJsonpbro-dictionary"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var o=n(4),i=n(0),r=n.n(i),a=n(28),c=n.n(a),s=n(130),l=n(30),d=n(5),b=n(135),h=n(133),j=n(127),x=n(89),u=n(11),f=n(19),p=n(132),g=n(131),m=n(134),O=n(42),w=n(123),v=n(124),y=n(125),B=function(e){var t=e.isOpen,n=(e.onOpen,e.onClose),r=e.setSlidesData,a=e.slidesData,c=Object(p.a)(),s=Object(i.useState)({word:"",definition:"",example:""}),b=Object(d.a)(s,2),h=b[0],j=b[1],B=function(e){var t=e.target.id,n=e.target.value;j(Object(l.a)(Object(l.a)({},h),{},Object(u.a)({},t,n))),console.log("values",h)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(g.a,{isOpen:t,onClose:n,size:"lg",children:[Object(o.jsx)(g.f,{}),Object(o.jsxs)(g.d,{style:{borderRadius:"0.5rem"},children:[Object(o.jsx)(g.e,{children:"Add Bro-word"}),Object(o.jsx)(g.c,{}),Object(o.jsx)(g.b,{mb:5,children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=a;t.unshift(h),r(Object(f.a)(t)),j({word:"",definition:"",example:""}),n(),c({title:"".concat(h.word," was added!"),description:"".concat(h.word," was added to the Bro Dictionary"),status:"success",duration:9e3,isClosable:!0})},children:Object(o.jsxs)(m.a,{spacing:3,children:[Object(o.jsxs)(O.a,{children:[Object(o.jsx)(w.a,{htmlFor:"word",children:"Bro-word"}),Object(o.jsx)(v.a,{id:"word",value:h.word,onChange:B,placeholder:"Enter the bro-word",size:"lg",isRequired:!0}),Object(o.jsx)(O.b,{id:"word-helper-text",children:'Must contain the word "bro"'})]}),Object(o.jsxs)(O.a,{children:[Object(o.jsx)(w.a,{htmlFor:"definition",children:"Definition"}),Object(o.jsx)(v.a,{id:"definition",value:h.definition,onChange:B,placeholder:"Enter the definition",size:"lg",isRequired:!0}),Object(o.jsx)(O.b,{id:"word-helper-text",children:"Define your word (what is it?)"})]}),Object(o.jsxs)(O.a,{children:[Object(o.jsx)(w.a,{htmlFor:"example",children:"Example"}),Object(o.jsx)(y.a,{id:"example",value:h.example,onChange:B,placeholder:"Write an example on how to use your bro-word",size:"lg",isRequired:!0}),Object(o.jsx)(O.b,{id:"word-helper-text",children:"Give an example of your bro-word out in the wild"})]}),Object(o.jsx)(x.a,{colorScheme:"teal",type:"submit",children:"Submit"})]})})})]})]})})},S=n(128),z=n(92),C=n(126),D=n(70),k=function(e){var t=Object(z.c)().toggleColorMode,n=Object(z.d)("dark","light"),i=Object(z.d)(D.a,D.b);return Object(o.jsx)(C.a,Object(l.a)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(n," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(o.jsx)(i,{})},e))},W=n(63),T=n(64);function E(){var e=Object(W.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n"]);return E=function(){return e},e}var I=T.a.div(E()),F=function(){return Object(o.jsxs)(I,{children:[Object(o.jsxs)(j.a,{p:3,textAlign:"center",maxW:"sm",ml:"auto",children:[Object(o.jsx)(S.a,{fontSize:"3xl",fontWeight:"black",mb:3,children:"The Bro Dictionary"}),Object(o.jsx)(S.a,{color:"gray.400",fontSize:"md",children:"A collection of brocabulary to use when you're checking on your bros."})]}),Object(o.jsx)(k,{ml:"auto",mb:"auto"})]})},J=n(13),R=n(8),A=(n(113),function(e){var t=e.data,n=void 0===t?{word:"Word",definition:"Definition",example:"Example"}:t;return Object(o.jsxs)(j.a,{borderWidth:"1px",rounded:"lg",p:[6,6,12],textAlign:"center",children:[Object(o.jsx)(S.a,{style:{textTransform:"capitalize"},fontSize:["3xl","4xl","6xl"],fontWeight:"black",mb:3,children:n.word}),Object(o.jsx)(S.a,{color:"gray.400",fontSize:["lg","xl","2xl"],mb:3,children:Object(o.jsxs)("em",{children:["/ ",n.phonetic," /"]})}),Object(o.jsx)(S.a,{fontSize:["lg","xl","2xl"],mb:3,children:n.definition}),Object(o.jsx)(j.a,{mt:[4,9],mb:[4,9],borderBottom:"1px",borderColor:"gray.200",maxW:"425px",mx:"auto"}),Object(o.jsx)(S.a,{color:"gray.400",textTransform:"uppercase",fontWeight:"bold",fontSize:"sm",mb:3,children:Object(o.jsx)("em",{children:"Example"})}),Object(o.jsx)(S.a,{fontWeight:"bold",fontSize:["lg","lg","2xl"],children:Object(o.jsxs)("em",{children:['"',n.example,'"']})})]})}),M=n(47),N={enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{zIndex:0,x:e<0?1e3:-1e3,opacity:0}}},q=function(e){var t=e.slidesData,n=void 0===t?M:t,r=Object(i.useState)([0,0]),a=Object(d.a)(r,2),c=Object(d.a)(a[0],2),s=c[0],l=c[1],b=a[1];console.log("slidesData",n),console.log("data",M);var h=Object(R.y)(0,n.length,s),x=function(e){b([s+e,e])};return Object(o.jsx)(j.a,{position:"relative",h:"480px",children:Object(o.jsx)(J.a,{initial:!1,custom:l,children:Object(o.jsx)(J.b.div,{custom:l,variants:N,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var n=t.offset,o=t.velocity,i=function(e,t){return Math.abs(e)*t}(n.x,o.x);i<-1e4?x(1):i>1e4&&x(-1)},className:"slide",children:Object(o.jsx)(j.a,{maxW:["90%","720px"],m:"0 auto",children:Object(o.jsx)(A,{data:n[h]})})},s)})})},K=n(129),L=Object(K.a)({fonts:{body:"Roboto, sans-serif",heading:"Roboto, sans-serif"},fontSizes:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"20px","2xl":"24px","3xl":"28px","4xl":"36px","5xl":"48px","6xl":"64px"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900}});function P(){var e=Object(W.a)(["\n  /* height: 100vh;\n  position: relative; */\n  display: flex;\n  align-items: center;\n  height: 100vh;\n\n  > div {\n    flex: 0 0 100%;\n    width: 100%;\n  }\n"]);return P=function(){return e},e}var G=T.a.div(P());var H=function(e){var t=Object(b.a)(),n=t.isOpen,i=t.onOpen,a=t.onClose,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.serialize,i=void 0===o?JSON.stringify:o,a=n.deserialize,c=void 0===a?JSON.parse:a,s=r.a.useState((function(){var n=window.localStorage.getItem(e);if(n)try{return c(n)}catch(o){window.localStorage.removeItem(e)}return"function"===typeof t?t():t})),l=Object(d.a)(s,2),b=l[0],h=l[1],j=r.a.useRef(e);return r.a.useEffect((function(){var t=j.current;t!==e&&window.localStorage.removeItem(t),j.current=e,window.localStorage.setItem(e,i(b))}),[e,b,i]),[b,h]}("slides-data",M),s=Object(d.a)(c,2),u=s[0],f=s[1];return console.log("slidesData",typeof u,u),Object(o.jsx)(h.a,{theme:L,children:Object(o.jsxs)(G,Object(l.a)(Object(l.a)({},e),{},{children:[Object(o.jsx)(F,{}),Object(o.jsxs)(j.a,{children:[Object(o.jsx)(q,{slidesData:u}),Object(o.jsxs)(j.a,{display:"flex",justifyContent:"center",children:[Object(o.jsx)(x.a,{color:"white",bgColor:"gray.700",onClick:i,size:"lg",children:"Add"}),Object(o.jsx)(x.a,{ml:1,color:"white",bgColor:"gray.700",size:"lg",children:"Copy"})]})]}),Object(o.jsx)(B,{isOpen:n,onClose:a,setSlidesData:f,slidesData:u})]}))})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),r(e),a(e)}))};c.a.render(Object(o.jsxs)(i.StrictMode,{children:[Object(o.jsx)(s.a,{}),Object(o.jsx)(H,{})]}),document.getElementById("root")),Q()},47:function(e){e.exports=JSON.parse('[{"word":"Broasaurus","phonetic":"Ba\u026alb\u0254\u026a\u0259 Bd\u0292g\u0254\u026ans","definition":"A bro that\'s been around for ages","example":"What you been up to Brosaurus? Haven\'t heard from you in a while"},{"word":"Bilbro Baggins","phonetic":"Ba\u026alb\u0254\u026a\u0259 Bd\u0292g\u0254\u026ans","definition":"The bro that likes to go on adventures","example":"Keen for an adventure today Bilbro Baggins?"},{"word":"Brohphet","phonetic":"Ba\u026alb\u0254\u026a\u0259 Bd\u0292g\u0254\u026ans","definition":"The bro who can tell the future","example":"Who\'s gonna win the game tonight Brophet. Keen to watch it somewhere?"},{"word":"Bro Jay Simpson","phonetic":"Ba\u026alb\u0254\u026a\u0259 Bd\u0292g\u0254\u026ans","definition":"The bro who gets away with murder.","example":"Don\'t know how you managed to get away with that last night Bro Jay Simpson."},{"word":"Broheim","phonetic":"Ba\u026alb\u0254\u026a\u0259 Bd\u0292g\u0254\u026ans","definition":"The bro from back home","example":"Just got back to the motherland. Keen for a catchup Broheim"},{"word":"Saint Broseph","phonetic":"Ba\u026alb\u0254\u026a\u0259 Bd\u0292g\u0254\u026ans","definition":"The very virtuous, kind, or patient Bro","example":"Thanks for doing that for me Saint Broseph. It is much appreciated!"}]')}},[[114,1,2]]]);
//# sourceMappingURL=main.fbc16193.chunk.js.map