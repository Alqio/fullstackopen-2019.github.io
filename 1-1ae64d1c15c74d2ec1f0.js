(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,a,M){"use strict";M.r(a),M.d(a,"graphql",function(){return l}),M.d(a,"StaticQueryContext",function(){return g}),M.d(a,"StaticQuery",function(){return u});var t=M(0),n=M.n(t),N=M(4),i=M.n(N),r=M(147),c=M.n(r);M.d(a,"Link",function(){return c.a}),M.d(a,"withPrefix",function(){return r.withPrefix}),M.d(a,"navigate",function(){return r.navigate}),M.d(a,"push",function(){return r.push}),M.d(a,"replace",function(){return r.replace}),M.d(a,"navigateTo",function(){return r.navigateTo});var s=M(184),o=M.n(s);M.d(a,"PageRenderer",function(){return o.a});var D=M(31);M.d(a,"parsePath",function(){return D.a});var g=n.a.createContext({}),u=function(e){return n.a.createElement(g.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function l(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},142:function(e,a,M){"use strict";M(28);var t=M(143),n=M.n(t),N=(M(255),M(4)),i=M.n(N),r=M(0),c=M.n(r),s=function(e){var a=e.Tag,M=e.children,t=e.className,N=e.flex,i=e.dirColumn,r=e.spaceAround,s=e.spaceBetween,o=e.centered,D=e.autoMargin,g=e.autoBottomMargin,u=e.horizontalHalf,l=e.flexStart,T=e.noWrap,j=e.centeredInDesktop,z=e.relative,w=n()(e,["Tag","children","className","flex","dirColumn","spaceAround","spaceBetween","centered","autoMargin","autoBottomMargin","horizontalHalf","flexStart","noWrap","centeredInDesktop","relative"]),I=[];return N&&I.push("element--flex"),D&&I.push("element--auto-margin"),g&&I.push("element--auto-bottom-margin"),i&&I.push("element--column"),r&&I.push("element--space-around"),s&&I.push("element--space-between"),o&&I.push("element--centered"),u&&I.push("element--horizontal-half"),l&&I.push("element--flex-start"),T&&I.push("element--no-wrap"),j&&I.push("element--centered-in-desktop"),z&&I.push("element--relative"),c.a.createElement(a,Object.assign({className:t+" "+I.join(" ")},w),M)};s.defaultProps={className:"",Tag:"div"},s.propTypes={Tag:i.a.string,children:i.a.node,className:i.a.string,flex:i.a.bool,spaceAround:i.a.bool,spaceBetween:i.a.bool,dirColumn:i.a.bool,centered:i.a.bool,horizontalHalf:i.a.bool,autoMargin:i.a.bool,autoBottomMargin:i.a.bool,flexStart:i.a.bool,noWrap:i.a.bool,centeredInDesktop:i.a.bool,relative:i.a.bool},a.a=s},145:function(e,a,M){"use strict";M.d(a,"a",function(){return s});M(28),M(185);var t=M(143),n=M.n(t),N=(M(257),M(4)),i=M.n(N),r=M(0),c=M.n(r),s=function(e){var a=e.src,M=e.alt,t=(e.hover,e.className),N=e.overlay,i=e.contain,r=e.circle,s=e.extraSmall,o=e.small,D=e.medium,g=e.large,u=e.fullWidth,l=e.actualSize,T=e.squareBig,j=n()(e,["src","alt","hover","className","overlay","contain","circle","extraSmall","small","medium","large","fullWidth","actualSize","squareBig"]),z=[];return i&&z.push("image--contain"),u&&z.push("image--full-width"),r&&z.push("image--circle"),s&&z.push("image--extra-small"),o&&z.push("image--small"),D&&z.push("image--medium"),g&&z.push("image--large"),T&&z.push("image--square-big"),l&&z.push("image--acctual-size"),c.a.createElement("div",Object.assign({className:"image "+t+" "+z.join(" ")},j),c.a.createElement("div",{className:"image__container"},c.a.createElement("img",{style:{backgroundColor:N,backgroundOpacity:"0.5"},className:"image__content",src:a,alt:M})))};s.defaultProps={src:"",alt:"",overlay:"",className:""},s.propTypes={overlay:i.a.string,src:i.a.oneOfType([i.a.string,i.a.object]),alt:i.a.oneOfType([i.a.string,i.a.array]),hover:i.a.string,className:i.a.string,contain:i.a.bool,circle:i.a.bool,extraSmall:i.a.bool,small:i.a.bool,medium:i.a.bool,large:i.a.bool,squareBig:i.a.bool,fullWidth:i.a.bool,actualSize:i.a.bool}},154:function(e,a,M){e.exports=M.p+"static/uoh_centre-3689cf9983a2ebc8089c8f078a9c4769.svg"},158:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ3cHgiIGhlaWdodD0iODJweCIgdmlld0JveD0iMCAwIDI0NyA4MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPmxvZ28vaG91c3RvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAzNi40NjU0MzgxIDAgMzYuNDY1NDM4MSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImxvZ28vaG91c3RvbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImhvdXN0b25fc2ltcGxlLmVwcy1jb3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjU4MTg5MywgMjMuMjYzMDQwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNODIuODA1MTI5OCwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDI1LjUzNjU1MDkgTDg1Ljk5MzYyOSwyNS41MzY1NTA5IEw4NS45OTM2MjksMTMuNTA2NjYwMyBMOTAuNDA2NTQ5MywxMy41MDY2NjAzIEw5MC40MDY1NDkzLDEwLjQ0NTY3ODQgTDc4LjM3NTEwMzYsMTAuNDQ1Njc4NCBMNzguMzc1MTAzNiwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDEzLjUwNjY2MDMgWiBNOTYuNDkxMDQ5NSwxNy45NjM2ODg1IEM5Ni40OTEwNDk1LDIwLjU1OTU1NzIgOTguMzE3ODU1NywyMi43MDc5ODQyIDEwMC44ODYxNTcsMjIuNzA3OTg0MiBDMTAzLjQ1NDg4MiwyMi43MDc5ODQyIDEwNS4yNDcxOTQsMjAuNTk1NDY1NyAxMDUuMjQ3MTk0LDE4LjAxNzk3NTMgTDEwNS4yNDcxOTQsMTguMDAwMDIxMSBDMTA1LjI0NzE5NCwxNS40MDQyOTM3IDEwMy40MjA1MjksMTMuMjU1ODY2NyAxMDAuODUyMjI4LDEzLjI1NTg2NjcgQzk4LjI4MzUwMjMsMTMuMjU1ODY2NyA5Ni40OTEwNDk1LDE1LjM2ODM4NTMgOTYuNDkxMDQ5NSwxNy45NDU3MzQzIEw5Ni40OTEwNDk1LDE3Ljk2MzY4ODUgWiBNOTMuMTQ3MDQxMywxOC4wMTc5NzUzIEw5My4xNDcwNDEzLDE3Ljk4MjA2NjkgQzkzLjE0NzA0MTMsMTMuNjg1NDk1NiA5Ni40MDQ4MTI3LDEwLjE3NjkzMDYgMTAwLjg4NjE1NywxMC4xNzY5MzA2IEMxMDUuMzY3OTI1LDEwLjE3NjkzMDYgMTA4LjU5MTM0MywxMy42NDk3Mjg1IDEwOC41OTEzNDMsMTcuOTQ1NzM0MyBMMTA4LjU5MTM0MywxNy45NjM2ODg1IEMxMDguNTkxMzQzLDIyLjI2MDI1OTggMTA1LjMzMzU3MiwyNS43Njg4MjQ3IDEwMC44NTIyMjgsMjUuNzY4ODI0NyBDOTYuMzcwMzE4LDI1Ljc2ODgyNDcgOTMuMTQ3MDQxMywyMi4zMTQxMjI0IDkzLjE0NzA0MTMsMTguMDE3OTc1MyBMOTMuMTQ3MDQxMywxOC4wMTc5NzUzIFogTTcwLjQxMTkxMzcsMjIuNzk3MDQ4NSBDNjguNzU2ODc0MiwyMi43OTcwNDg1IDY3LjM3ODIxNjYsMjIuMDgxMjgzMSA2Ni4wNjg0MDcsMjAuOTcxNzk3NCBMNjQuMTcyMTg3MiwyMy4zMTY0NDg0IEM2NS45MTMxODA4LDI0LjkyNzk0NTQgNjguMTM2Njc2MiwyNS43MzMzNDA0IDcwLjM0MzA2NTYsMjUuNzMzMzQwNCBDNzMuNDgwMTA1NSwyNS43MzMzNDA0IDc1LjY2OTI0NzYsMjQuMDUwMTY4IDc1LjY2OTI0NzYsMjEuMDYxMDAzIEw3NS42NjkyNDc2LDIxLjAyNTA5NDUgQzc1LjcyMTEzMSwxOC4zOTM0NTg4IDc0LjA0ODU2MTUsMTcuMzAxNzg1OCA3MS4xMDExMDExLDE2LjQ5NTgyNTMgQzY4LjU4NDY4MzQsMTUuODMzOTIyNiA2Ny45NjM5MTk5LDE1LjUxMTMxMjIgNjcuOTYzOTE5OSwxNC41MDg5ODYyIEw2Ny45NjM5MTk5LDE0LjQ3MzA3NzggQzY3Ljk2MzkxOTksMTMuNzM4OTM0MSA2OC42MDIyMTM1LDEzLjE2NjY2MTEgNjkuODI1NjQ0OSwxMy4xNjY2NjExIEM3MS4wNDk2NDE4LDEzLjE2NjY2MTEgNzIuMzA3OTkyMSwxMy43MjA5Nzk5IDczLjYwMDgzNywxNC42NTIwNTQ1IEw3NS4yNTU1OTM4LDEyLjE0NTk1NjkgQzczLjc4OTk5MjUsMTAuOTEwNjUwMiA3MS45ODA3MTY0LDEwLjIzMDM2OTIgNjkuODYwNTYzNywxMC4yMzAzNjkyIEM2Ni44OTU3MTQ3LDEwLjIzMDM2OTIgNjQuNzc1NTYyLDEyLjAzODY1NTcgNjQuNzc1NTYyLDE0Ljc3NzU5MjYgTDY0Ljc3NTU2MiwxNC44MTMwNzY5IEM2NC43NzU1NjIsMTcuODAyNjY2MSA2Ni42NzEwNzQ5LDE4LjY0NDUzNSA2OS41ODQxODE5LDE5LjQzMjExNzMgQzcyLjAxNDY0NTYsMjAuMDc2NjMxMiA3Mi41MTQ2Nzc2LDIwLjUwNjI2MDEgNzIuNTE0Njc3NiwyMS4zNDc3MDQ5IEw3Mi41MTQ2Nzc2LDIxLjM4MzA0NzkgQzcyLjUxNDY3NzYsMjIuMjYwMjU5OCA3MS43MjIyODg4LDIyLjc5NzA0ODUgNzAuNDExOTEzNywyMi43OTcwNDg1IEw3MC40MTE5MTM3LDIyLjc5NzA0ODUgWiBNMzEuMzM2NDY5NywxNy45NjM2ODg1IEMzMS4zMzY0Njk3LDIwLjU1OTU1NzIgMzMuMTYzNywyMi43MDc5ODQyIDM1LjczMTg1OTksMjIuNzA3OTg0MiBDMzguMzAwMTYxMSwyMi43MDc5ODQyIDQwLjA5MjQ3MjYsMjAuNTk1NDY1NyA0MC4wOTI0NzI2LDE4LjAxNzk3NTMgTDQwLjA5MjQ3MjYsMTguMDAwMDIxMSBDNDAuMDkyNDcyNiwxNS40MDQyOTM3IDM4LjI2NTI0MjMsMTMuMjU1ODY2NyAzNS42OTY5NDEsMTMuMjU1ODY2NyBDMzMuMTI5MjA1MywxMy4yNTU4NjY3IDMxLjMzNjQ2OTcsMTUuMzY4Mzg1MyAzMS4zMzY0Njk3LDE3Ljk0NTczNDMgTDMxLjMzNjQ2OTcsMTcuOTYzNjg4NSBaIE0yOC4wMDk3MDg5LDE4LjAxNzk3NTMgTDI4LjAwOTcwODksMTcuOTgyMDY2OSBDMjguMDA5NzA4OSwxMy42ODU0OTU2IDMxLjI2NzQ4MDMsMTAuMTc2OTMwNiAzNS43NDg4MjQ1LDEwLjE3NjkzMDYgQzQwLjIzMDczNDIsMTAuMTc2OTMwNiA0My40MzYxOTgsMTMuNjQ5NzI4NSA0My40NTQwMTA5LDE3Ljk0NTczNDMgTDQzLjQ1NDAxMDksMTcuOTYzNjg4NSBDNDMuNDU0MDEwOSwyMi4yNjAyNTk4IDQwLjE5NjIzOTUsMjUuNzY4ODI0NyAzNS43MTQ4OTUzLDI1Ljc2ODgyNDcgQzMxLjIzMjU2MTUsMjUuNzY4ODI0NyAyOC4wMDk3MDg5LDIyLjMxNDEyMjQgMjguMDA5NzA4OSwxOC4wMTc5NzUzIEwyOC4wMDk3MDg5LDE4LjAxNzk3NTMgWiBNNTMuODMwNDE3MSwyNS43MzMzNDA0IEM1Ny43NDI4ODEyLDI1LjczMzM0MDQgNjAuMjA3ODM5NywyMy40OTU4NDkyIDYwLjIwNzgzOTcsMTguOTMwNjcxNSBMNjAuMjA3ODM5NywxMC40MjcxNTg3IEw1Ny4wMDE4MTAzLDEwLjQyNzE1ODcgTDU3LjAwMTgxMDMsMTkuMDczNzM5OCBDNTcuMDAxODEwMywyMS40NzI2Nzc2IDU1LjgxMjMwODEsMjIuNjkwMDMgNTMuODY0NzcwNCwyMi42OTAwMyBDNTEuOTE3Mzc0MSwyMi42OTAwMyA1MC43Mjc3MzA1LDIxLjQxODk1NjMgNTAuNzI3NzMwNSwxOC45NjY1OCBMNTAuNzI3NzMwNSwxMC40MjcxNTg3IEw0Ny41Mzg2NjU4LDEwLjQyNzE1ODcgTDQ3LjUzODY2NTgsMTkuMDM3ODMxMyBDNDcuNTM4NjY1OCwyMy40Nzc4OTUgNDkuOTE3OTUzLDI1LjczMzM0MDQgNTMuODMwNDE3MSwyNS43MzMzNDA0IEw1My44MzA0MTcxLDI1LjczMzM0MDQgWiBNMy4xNTQ1NywzMy4xOTgxOTQ4IEwxMzUuMDM2NjMyLDMzLjE5ODE5NDggTDEzNS4wMzY2MzIsMy4zMDI0NDQ4OCBMMy4xNTQ1NywzLjMwMjQ0NDg4IEwzLjE1NDU3LDMzLjE5ODE5NDggWiBNMCwzNi40NzM5MjA0IEwxMzguMjA4MTY3LDM2LjQ3MzkyMDQgTDEzOC4yMDgxNjcsMC4wMjY3MTkyNjczIEwwLDAuMDI2NzE5MjY3MyBMMCwzNi40NzM5MjA0IFogTTE0LjgyMzExNDMsMTkuNDg1NDE0NCBMMjAuNzE4NjAwNSwxOS40ODU0MTQ0IEwyMC43MTg2MDA1LDI1LjUzNjU1MDkgTDIzLjkwNzY2NTIsMjUuNTM2NTUwOSBMMjMuOTA3NjY1MiwxMC40NDU2Nzg0IEwyMC43MTg2MDA1LDEwLjQ0NTY3ODQgTDIwLjcxODYwMDUsMTYuNDA2MDU0MiBMMTQuODIzMTE0MywxNi40MDYwNTQyIEwxNC44MjMxMTQzLDEwLjQ0NTY3ODQgTDExLjYzNDc1NjUsMTAuNDQ1Njc4NCBMMTEuNjM0NzU2NSwyNS41MzY1NTA5IEwxNC44MjMxMTQzLDI1LjUzNjU1MDkgTDE0LjgyMzExNDMsMTkuNDg1NDE0NCBaIE0xMTUuODY0OTIyLDE1Ljk0MTUwNjUgTDEyMi44OTc2MDIsMjUuNTM2NTUwOSBMMTI1LjYyMDk4OCwyNS41MzY1NTA5IEwxMjUuNjIwOTg4LDEwLjQ0NTY3ODQgTDEyMi40NjY0MTgsMTAuNDQ1Njc4NCBMMTIyLjQ2NjQxOCwxOS43MzYyMDggTDExNS42NTgzNzcsMTAuNDQ1Njc4NCBMMTEyLjcxMDkxNywxMC40NDU2Nzg0IEwxMTIuNzEwOTE3LDI1LjUzNjU1MDkgTDExNS44NjQ5MjIsMjUuNTM2NTUwOSBMMTE1Ljg2NDkyMiwxNS45NDE1MDY1IEwxMTUuODY0OTIyLDE1Ljk0MTUwNjUgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwMDEwNSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},161:function(e,a,M){"use strict";M.d(a,"a",function(){return r});M(28),M(262);var t=M(4),n=M.n(t),N=M(0),i=M.n(N),r=function(e){var a=e.children,M=e.largeMargin,t=e.className,n=e.childrenClassName,N=e.backgroundColor,r=e.props,c=e.hover;return i.a.createElement("div",Object.assign({className:"triple-border "+t+" "+(M?"triple-border--large-margin":""),style:c?{backgroundColor:"black",color:"white",padding:M?"":"0.2em"}:{padding:M?"":"0.2em"}},r),i.a.createElement("div",{className:"triple-border__container "+n,style:{backgroundColor:N,zIndex:10}},a))};r.defaultProps={className:"",childrenClassName:"",largeMargin:!1,hover:!1,backgroundColor:"transparent"},r.propTypes={children:n.a.node.isRequired,className:n.a.string,childrenClassName:n.a.string,largeMargin:n.a.bool,backgroundColor:n.a.string,hover:n.a.bool}},162:function(e,a,M){"use strict";var t=M(294),n=M(141),N=M(371),i=M.n(N),r=M(4),c=M.n(r),s=M(0),o=M.n(s),D=M(253),g=M.n(D),u=M(254),l=M.n(u);function T(e){var a=e.description,M=e.lang,N=e.meta,r=e.image,c=e.keywords,s=e.title,D=r||g.a;return o.a.createElement(n.StaticQuery,{query:j,render:function(e){var t=a||e.site.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:M},title:s,meta:[{name:"description",content:t},{property:"og:title",content:s},{property:"og:description",content:t},{name:"og:image",content:l.a.resolve(D)},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:t},{name:"twitter:image",content:l.a.resolve(D)},{name:"google-site-verification",content:"ds9pQKiK3kjhRSHHbf5ccoG-oJggn7Lq4A8uHxM3Mkw"}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(N)})},data:t})}T.defaultProps={lang:"fi",image:null,meta:[],keywords:[]},T.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,image:c.a.string,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=T;var j="1025518380"},163:function(e,a,M){"use strict";M(259),M(260);var t=M(6),n=M.n(t),N=(M(261),M(0)),i=M.n(N),r=M(141),c=M(164),s=M(161),o=function(e){function a(a){var M;return(M=e.call(this,a)||this).header=i.a.createRef(),M.handleScroll=function(){var e=window.scrollY;M.setState({top:e,headerClass:M.state.top>10&&e>M.state.top?"header--small":""})},M.state={top:0,headerClass:""},M}n()(a,e);var M=a.prototype;return M.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},M.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},M.render=function(){var e=this.state.headerClass;return i.a.createElement("div",{ref:this.header,className:"header "+e,style:{backgroundColor:""!==e?"transparent":"white"}},i.a.createElement("div",{className:"container",style:{alignItems:"center",justifyContent:"flex-start"}},i.a.createElement(r.Link,{to:"/",className:"header__logo"},""===e?i.a.createElement(s.a,{className:"nav-item-hover",childrenClassName:"triple-border__logo"},"{() => fs}"):i.a.createElement(s.a,{hover:!0,className:"nav-item-hover",childrenClassName:"triple-border__logo"},"fs")),"header--small"!==this.state.headerClass&&i.a.createElement(c.a,null)))},a}(N.Component),D=M(4),g=function(e){var a=e.children;return i.a.createElement("div",{className:"main-wrapper"},i.a.createElement(o,null),a)};g.propTypes={children:M.n(D).a.node.isRequired};a.a=g},164:function(e,a,M){"use strict";M(28);var t=M(6),n=M.n(t),N=(M(258),M(0)),i=M.n(N),r=M(143),c=M.n(r),s=M(141),o=M(4),D=M.n(o),g=function(e){var a=e.text,M=e.path,t=e.className,n=c()(e,["text","path","className"]);return i.a.createElement("li",Object.assign({},n,{className:"navigation__item "+t}),i.a.createElement(s.Link,{className:"nav-item-hover",to:M},a))};g.propTypes={text:D.a.string.isRequired,path:D.a.string.isRequired,className:D.a.string},g.defaultProps={className:""},M.d(a,"b",function(){return u});var u=[{text:"Kurssista",path:"/about"},{text:"Kurssin sisältö",path:"#course-contents"},{text:"FAQ",path:"/faq"},{text:"Kurssilla mukana",path:"/companies"},{text:"Haaste",path:"/challenge"}],l=function(){return document.body.classList.remove("is-open--navigation")},T=function(e){function a(a){var M;return(M=e.call(this,a)||this).state={navigationOpen:!1},M}return n()(a,e),a.prototype.render=function(){var e=this,a=this.props.className;return i.a.createElement("div",{className:"navigation__wrapper "+a},i.a.createElement("button",{"aria-label":"Navigation menu","aria-expanded":this.state.navigationOpen,onClick:function(){e.setState({navigationOpen:!e.state.navigationOpen}),document.body.classList.toggle("is-open--navigation")},className:"navigation__toggle"},i.a.createElement("div",{className:"navigation__toggle-icon"})),i.a.createElement("nav",null,i.a.createElement("ul",{className:"navigation"},u.map(function(e){return i.a.createElement(g,Object.assign({key:e.path},e,{onClick:l}))}))))},a}(N.Component);T.propTypes={className:D.a.string},T.defaultProps={className:""};a.a=T},184:function(e,a,M){var t;e.exports=(t=M(256))&&t.default||t},253:function(e,a,M){e.exports=M.p+"static/seo_image-939e8e249cf62a835ed560f6da4200ad.jpg"},255:function(e,a,M){},256:function(e,a,M){"use strict";M.r(a);M(28);var t=M(0),n=M.n(t),N=M(4),i=M.n(N),r=M(52),c=M(2),s=function(e){var a=e.location,M=c.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(r.a,Object.assign({location:a,pageResources:M},M.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},257:function(e,a,M){},258:function(e,a,M){},259:function(e,a,M){},260:function(e,a,M){},261:function(e,a,M){},262:function(e,a,M){},294:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Open 2019",description:"",author:"Houston Inc. Consulting oy"}}}}}}]);
//# sourceMappingURL=1-1ae64d1c15c74d2ec1f0.js.map