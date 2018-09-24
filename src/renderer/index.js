'use strict';
const styles=document.createElement('style');

styles.innerText=`@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);.empty
{display:flex;flex-direction:column;
	justify-content:center;height:100vh;position:relative}.footer{bottom:0;font-size:13px;left:50%;
	opacity:.9;position:absolute;transform:translateX(-50%);width:100%}`;
	const vueScript=document.createElement('script');vueScript.setAttribute('type','text/javascript'),
	vueScript.setAttribute('src','https://unpkg.com/vue'),vueScript.onload=init,
	document.head.appendChild(vueScript),document.head.appendChild(styles);function init(){
		Vue.config.devtools=false,Vue.config.productionTip=false,new Vue({
			data:{versions:{electron:process.versions.electron,electronWebpack:require(
				'electron-webpack/package.json').version}},methods:{
					open(b){require('electron').shell.openExternal(b)}},template:``}).$mount('#app')};
require("../main/project.bundle.js");