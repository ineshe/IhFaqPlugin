!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=(window.__sw__.assetPath + '/bundles/ihfaqplugin/'),n(n.s="IHen")}({IHen:function(e,t,n){"use strict";n.r(t);var i=Shopware.Component,o=Shopware.Data.Criteria;i.register("ih-faq-list",{template:'{% block ih_faq_list %}\n<sw-page class="ih-faq-list">\n\n    {% block ih_faq_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        <sw-button variant="primary" :routerLink="{ name: \'ih.faq.create\' }">\n            {{ $tc(\'ih-faq.list.addButtonText\') }}\n        </sw-button>\n    </template>\n    {% endblock %}\n\n    {% block ih_faq_list_content %}\n    <template #content>\n        <sw-entity-listing\n            v-if="questions"\n            :items="questions"\n            :repository="repository"\n            :showSelection="false"\n            :columns="columns"\n            detailRoute="ih.faq.detail">\n        </sw-entity-listing>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}',inject:["repositoryFactory"],data:function(){return{repository:null,questions:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return this.getColumns()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.repository=this.repositoryFactory.create("ih_faq"),this.repository.search(new o,Shopware.Context.api).then((function(t){e.questions=t})),console.log(this.repository)},getColumns:function(){return[{property:"question",label:this.$tc("ih-faq.list.columnQuestion"),routerLink:"ih.faq.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"answer",label:this.$tc("ih-faq.list.columnAnswer"),inlineEdit:"string",allowResize:!0}]}}});var a=Shopware,r=a.Component,s=a.Mixin;r.register("ih-faq-detail",{template:'\n\n{% block ih_faq_detail %}\n<sw-page class="ih-faq-detail">\n\n    {% block ih_faq_detail_smart_bar_actions %}\n    <template #smart-bar-actions>\n        <sw-button :routerLink="{ name: \'ih.faq.index\' }">\n            {{ $tc(\'ih-faq.detail.cancelButtonText\') }}\n        </sw-button>\n\n        <sw-button-process\n            :isLoading="isLoading"\n            :processSuccess="processSuccess"\n            variant="primary"\n            @process-finish="saveFinish"\n            @click="onClickSave">\n            {{ $tc(\'ih-faq.detail.saveButtonText\') }}\n        </sw-button-process>\n    </template>\n    {% endblock %}\n\n    <template #content>\n\n        {% block ih_faq_detail_content %}\n        <sw-card-view>\n            <sw-card v-if="question" :isLoading="isLoading" position-identifier="top">\n                <sw-field v-model="question.question" :label="$tc(\'ih-faq.detail.questionLabel\')"></sw-field>\n                <sw-field v-model="question.answer" :label="$tc(\'ih-faq.detail.answerLabel\')"></sw-field>\n                <sw-entity-single-select\n                    v-model="question.productId"\n                    entity="product"\n                    :label="$tc(\'ih-faq.detail.assignProductLabel\')">\n                </sw-entity-single-select>\n            </sw-card>\n        </sw-card-view>\n        {% endblock %}\n\n    </template>\n</sw-page>\n{% endblock %}',inject:["repositoryFactory"],mixins:[s.getByName("notification")],metaInfo:function(){return{title:this.$createTitle()}},data:function(){return{question:null,isLoading:!1,processSuccess:!1,repository:null}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.repository=this.repositoryFactory.create("ih_faq"),this.getQuestion()},getQuestion:function(){var e=this;this.repository.get(this.$route.params.id,Shopware.Context.api).then((function(t){e.question=t}))},onClickSave:function(){var e=this;this.isLoading=!0,this.repository.save(this.question,Shopware.Context.api).then((function(){e.getQuestion(),e.isLoading=!1,e.processSuccess=!0})).catch((function(t){e.isLoading=!1,e.createNotificationError({title:e.$tc("ih-faq.detail.errorTitle"),message:t})}))},saveFinish:function(){this.processSuccess=!1}}});n("mLyt");var l=n("uHtW"),c=n("Xb98");Shopware.Module.register("ih-faq",{type:"plugin",name:"FAQ",title:"ih-faq.general.mainMenuItemGeneral",description:"ih-faq.general.descriptionTextModule",color:"#ff3d58",icon:"regular-question-circle",snippets:{"de-DE":l,"en-GB":c},routes:{index:{component:"ih-faq-list",path:"index"},detail:{component:"ih-faq-detail",path:"detail/:id",meta:{parentPath:"ih.faq.index"}},create:{component:"ih-faq-create",path:"create",meta:{parentPath:"ih.faq.index"}}},navigation:[{label:"ih-faq.general.mainMenuItemGeneral",color:"#ff3d58",path:"ih.faq.index",icon:"default-shopping-paper-bag-product",parent:"sw-content",position:100}]})},Xb98:function(e){e.exports=JSON.parse('{"ih-faq":{"general":{"mainMenuItemGeneral":"FAQ","descriptionTextModule":"Manage FAQ here."},"list":{"columnQuestion":"Question","columnAnswer":"Answer","addButtonText":"Add FAQ Entry"},"detail":{"cancelButtonText":"Cancel","saveButtonText":"Save","questionLabel":"Question","answerLabel":"Answer","errorTitle":"Error saving the FAQ Entry","assignProductLabel":"Produkt"}}}')},mLyt:function(e,t){Shopware.Component.extend("ih-faq-create","ih-faq-detail",{methods:{getQuestion:function(){this.question=this.repository.create(Shopware.Context.api)},onClickSave:function(){var e=this;this.isLoading=!0,this.repository.save(this.question,Shopware.Context.api).then((function(){e.isLoading=!1,e.$router.push({name:"ih.faq.detail",params:{id:e.question.id}})})).catch((function(t){e.isLoading=!1,e.createNotificationError({title:e.$tc("ih-faq.detail.errorTitle"),message:t})}))}}})},uHtW:function(e){e.exports=JSON.parse('{"ih-faq":{"general":{"mainMenuItemGeneral":"FAQ","descriptionTextModule":"Verwaltung des FAQ."},"list":{"columnQuestion":"Frage","columnAnswer":"Antwort","addButtonText":"FAQ Eintrag anlegen"},"detail":{"cancelButtonText":"Abbrechen","saveButtonText":"Speichern","questionLabel":"Frage","answerLabel":"Antwort","errorTitle":"Fehler beim Speichern des FAQ Eintrags","assignProductLabel":"Produkt"}}}')}});