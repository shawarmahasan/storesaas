(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,o=void 0,o=function(e,i){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,i||"default");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(a,"string"),"symbol"===t(o)?o:String(o)),n)}var a,o}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.template=$("#product_attribute_template").html(),this.totalItem=$(".swatches-container .swatches-list tr").length,this.deletedItems=[],this.handleForm()}var i,r,n;return i=t,(r=[{key:"addNewAttribute",value:function(){var t=this,e=t.template.replace(/__id__/gi,0).replace(/__position__/gi,0).replace(/__checked__/gi,0==t.totalItem?"checked":"").replace(/__title__/gi,"").replace(/__color__/gi,"").replace(/__image__/gi,"");$(".swatches-container .swatches-list").append(e),t.totalItem++,Botble.initMediaIntegrate()}},{key:"exportData",value:function(){var t=[];return $(".swatches-container .swatches-list tr").each((function(e,i){var r=$(i);t.push({id:r.data("id"),is_default:r.find("input[type=radio]").is(":checked")?1:0,order:r.index(),title:r.find('input[name="swatch-title"]').val(),color:r.find('input[name="swatch-value"]').val(),image:r.find('input[name="swatch-image"]').val()})})),t}},{key:"handleForm",value:function(){var t=this;$(".swatches-container .swatches-list").sortable(),$("body").on("submit",".update-attribute-set-form",(function(){var e=t.exportData();$("#attributes").val(JSON.stringify(e)),$("#deleted_attributes").val(JSON.stringify(t.deletedItems))})).on("click",".js-add-new-attribute",(function(e){e.preventDefault(),t.addNewAttribute(),Botble.initColorPicker()})).on("click",".swatches-container .swatches-list tr .remove-item",(function(e){e.preventDefault();var i=$(e.currentTarget).closest("tr");t.deletedItems.push(i.data("id")),i.fadeOut("fast",(function(){return i.remove()}))}))}}])&&e(i.prototype,r),n&&e(i,n),Object.defineProperty(i,"prototype",{writable:!1}),t}();$(window).on("load",(function(){new i}))})();