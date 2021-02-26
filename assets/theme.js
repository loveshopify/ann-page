window.slate = window.slate || {};
window.theme = window.theme || {};
window.broadcast__sections = window.broadcast__sections || {};

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.preloadAfterLoad = true;

/*================ Require ================*/
if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}
(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},h=0,c=0,l=[];function g(e,d,g,i){var c={data:i||(d?d.data:{}),_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};e&&a.extend(c,e,{nodes:[],parent:d});if(g){c.tmpl=g;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++h;(l.length?f:b)[h]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a.fn[d].apply(a(i[h]),k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,l,j){if(d[0]&&d[0].nodeType){var f=a.makeArray(arguments),g=d.length,i=0,h;while(i<g&&!(h=a.data(d[i++],"tmplItem")));if(g>1)f[0]=[a.makeArray(d)];if(h&&c)f[2]=function(b){a.tmpl.afterManip(this,b,j)};r.apply(this,f)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var j,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(i(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);j=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(i(c,null,j)):j},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function i(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:i(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=j(c).concat(b);if(d)b=b.concat(j(d))});return b?b:j(c)}function j(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,j,d,b,c,e){var i=a.tmpl.tag[j],h,f,g;if(!i)throw"Template command not found: "+j;h=i._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=k(b);e=e?","+k(e)+")":c?")":"";f=c?b.indexOf(".")>-1?b+c:"("+b+").call($item"+e:b;g=c?f:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else g=f=h.$1||"null";d=k(d);return"');"+i[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(g).split("$1").join(f).split("$2").join(d?d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(d,c,b,a){a=a?","+a+")":b?")":"";return a?"("+c+").call($item"+a:d}):h.$2||"")+"_.push('"})+"');}return _;")}function n(c,b){c._wrap=i(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function k(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,i;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(i=j.length-1;i>=0;i--)m(j[i]);m(k)}function m(j){var p,i=j,k,e,m;if(m=j.getAttribute(d)){while(i.parentNode&&(i=i.parentNode).nodeType===1&&!(p=i.getAttribute(d)));if(p!==m){i=i.parentNode?i.nodeType===11?0:i.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[i]||f[i],null,true);e.key=++h;b[h]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;i=a.data(j.parentNode,"tmplItem");i=i?i.key:0}if(e){k=e;while(k&&k.key!=i){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent,null,true)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery)

/**
 * Module to show Recently Viewed Products
 *
 * Copyright (c) 2014 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

Shopify.Products = ( function() {

    var config = {
        howManyToShow: 4,
        howManyToStoreInMemory: 10,
        wrapperId: 'recently-viewed-products',
        templateId: 'recently-viewed-product-template',
        onComplete: null
    };

    var productHandleQueue = [];
    var wrapper = null;
    var template = null;

    var cookie = {
        configuration: {
            expires: 90,
            path: '/',
            domain: window.location.hostname
        },
        name: 'shopify_recently_viewed',
        write: function( recentlyViewed ) {
            jQuery.cookie( this.name, recentlyViewed.join( ' ' ), this.configuration );
        },
        read: function() {
            var recentlyViewed = [];
            var cookieValue = jQuery.cookie( this.name );
            var currentProduct = $( '#template-product' ).data( 'product-handle' );
            
            if( cookieValue !== null ) {
                recentlyViewed = cookieValue.split( ' ' );
            }

            // Remove current product from the array
            if ( recentlyViewed.indexOf( currentProduct ) != -1 ) {
                var currentProductIndex = recentlyViewed.indexOf( currentProduct );
                recentlyViewed.splice( currentProductIndex, 1 );
            }

            return recentlyViewed;
        },
        destroy: function() {
            jQuery.cookie( this.name, null, this.configuration );
        },
        remove: function( productHandle ) {
            var recentlyViewed = this.read();
            var position = jQuery.inArray( productHandle, recentlyViewed );
            if( position !== -1 ) {
                recentlyViewed.splice( position, 1 );
                this.write( recentlyViewed );
            }
        }
    };

    var finalize = function() {
        wrapper.show();
        // If we have a callback.
        if( config.onComplete ) {
            try { config.onComplete() } catch( error ) {}
        }
    };

    var moveAlong = function( shown ) {
        if( productHandleQueue.length && shown < config.howManyToShow ) {
            jQuery.ajax( {
                dataType: 'json',
                url: '/products/' + productHandleQueue[ 0 ] + '.js',
                cache: false,
                success: function( product ) {
                    template.tmpl( product ).appendTo( wrapper );
                    productHandleQueue.shift();
                    shown++;
                    moveAlong( shown );
                },
                error: function() {
                    cookie.remove( productHandleQueue[ 0 ] );
                    productHandleQueue.shift();
                    moveAlong( shown);
                }
            } );
        } else {
            finalize();
        }

    };

    return {

        showRecentlyViewed: function( params ) {
            var params = params || {};
            var shown = 0;

            // Update defaults.
            jQuery.extend( config, params );

            // Read cookie.
            productHandleQueue = cookie.read();

            // Template and element where to insert.
            template = jQuery( '#' + config.templateId );
            wrapper = jQuery( '#' + config.wrapperId );

            // How many products to show.
            config.howManyToShow = Math.min( productHandleQueue.length, config.howManyToShow );


            // If we have any to show.
            if( config.howManyToShow && template.length && wrapper.length ) {
                // Getting each product with an Ajax call and rendering it on the page.
                moveAlong( shown );
            }

        },

        getConfig: function() {
            return config;
        },

        clearList: function() {
            cookie.destroy();
        },

        recordRecentlyViewed: function( params ) {
            var params = params || {};

            // Update defaults.
            jQuery.extend( config, params );

            // Read cookie.
            var recentlyViewed = cookie.read();

            // If we are on a product page.
            if( window.location.pathname.indexOf( '/products/' ) !== -1 ) {

                // What is the product handle on this page.
                var productHandle = window.location.pathname.match( /\/products\/([a-z0-9\-]+)/ )[ 1 ];
                // In what position is that product in memory.
                var position = jQuery.inArray( productHandle, recentlyViewed );
                // If not in memory.
                if( position === -1 ) {
                    // Add product at the start of the list.
                    recentlyViewed.unshift( productHandle );
                    // Only keep what we need.
                    recentlyViewed = recentlyViewed.splice( 0, config.howManyToStoreInMemory );
                } else {
                    // Remove the product and place it at start of list.
                    recentlyViewed.splice( position, 1 );
                    recentlyViewed.unshift( productHandle );
                }

                // Update cookie.
                cookie.write( recentlyViewed );

            }

        }

    };

} )();

/*!
 * jQuery Form Plugin
 * version: 2.52 (07-DEC-2010)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function(e) {
			e.preventDefault(); // <-- important
			$(this).ajaxSubmit({
				target: '#output'
			});
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function') {
		options = { success: options };
	}

	var action = this.attr('action');
	var url = (typeof action === 'string') ? $.trim(action) : '';
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}
	url = url || window.location.href || '';

	options = $.extend(true, {
		url:  url,
		type: this.attr('method') || 'GET',
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (n in options.data) {
			if(options.data[n] instanceof Array) {
				for (var k in options.data[n]) {
					a.push( { name: n, value: options.data[n][k] } );
				}
			}
			else {
				v = options.data[n];
				v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
				a.push( { name: n, value: v } );
			}
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var $form = this, callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, fileUpload);
		}
	   else {
		   fileUpload();
		}
   }
   else {
	   $.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}

		var s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		var id = 'jqFormIO' + (new Date().getTime()), fn = '_'+id;
		window[fn] = function() {
			var f = $io.data('form-plugin-onload');
			if (f) {
				f();
				window[fn] = undefined;
				try { delete window[fn]; } catch(e){}
			}
		}
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" onload="window[\'_\'+this.id]()" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
			}
		};

		var g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) {
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		var cbInvoked = false;
		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST') {
				form.setAttribute('method', 'POST');
			}
			if (form.getAttribute('action') != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				setTimeout(function() { timedOut = true; cb(); }, s.timeout);
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
								.appendTo(form)[0]);
					}
				}

				// add iframe to doc and submit the form
				$io.appendTo('body');
				$io.data('form-plugin-onload', cb);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}

		var data, doc, domCheckCount = 50;

		function cb() {
			if (cbInvoked) {
				return;
			}

			$io.removeData('form-plugin-onload');

			var ok = true;
			try {
				if (timedOut) {
					throw 'timeout';
				}
				// extract the server response from the iframe
				doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;

				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					// let this fall through because server response could be an empty document
					//log('Could not access iframe DOM after mutiple tries.');
					//throw 'DOMException: not available';
				}

				//log('response detected');
				cbInvoked = true;
				xhr.responseText = doc.documentElement ? doc.documentElement.innerHTML : null;
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};

				var scr = /(json|script)/.test(s.dataType);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						var b = doc.getElementsByTagName('body')[0];
						if (pre) {
							xhr.responseText = pre.textContent;
						}
						else if (b) {
							xhr.responseText = b.innerHTML;
						}
					}
				}
				else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				data = $.httpData(xhr, s.dataType);
			}
			catch(e){
				log('error caught:',e);
				ok = false;
				xhr.error = e;
				$.handleError(s, xhr, 'error', e);
			}

			if (xhr.aborted) {
				log('upload aborted');
				ok = false;
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				s.success.call(s.context, data, 'success', xhr);
				if (g) {
					$.event.trigger("ajaxSuccess", [xhr, s]);
				}
			}
			if (g) {
				$.event.trigger("ajaxComplete", [xhr, s]);
			}
			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}
			if (s.complete) {
				s.complete.call(s.context, xhr, ok ? 'success' : 'error');
			}

			// clean up
			setTimeout(function() {
				$io.removeData('form-plugin-onload');
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		function toXml(s, doc) {
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
		}
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}

	var i,j,n,v,el,max,jmax;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug) {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};

})(jQuery);


/*
 * jQuery validation plug-in 1.7
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 JÃƒÂ¶rn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.extend($.fn,{validate:function(options){if(!this.length){options&&options.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return;}var validator=$.data(this[0],'validator');if(validator){return validator;}validator=new $.validator(options,this[0]);$.data(this[0],'validator',validator);if(validator.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){validator.cancelSubmit=true;});if(validator.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){validator.submitButton=this;});}this.submit(function(event){if(validator.settings.debug)event.preventDefault();function handle(){if(validator.settings.submitHandler){if(validator.submitButton){var hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);}validator.settings.submitHandler.call(validator,validator.currentForm);if(validator.submitButton){hidden.remove();}return false;}return true;}if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},valid:function(){if($(this[0]).is('form')){return this.validate().form();}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid&=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,'validator').settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages)settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(element),$.validator.classRules(element),$.validator.attributeRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+a.value);},filled:function(a){return!!$.trim(""+a.value);},unchecked:function(a){return!a.checked;}});$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};$.validator.format=function(source,params){if(arguments.length==1)return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};if(arguments.length>2&&params.constructor!=Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!=Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),n);});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(element){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);this.errorsFor(element).hide();}},onfocusout:function(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element){if(element.name in this.submitted||element==this.lastElement){this.element(element);}},onclick:function(element){if(element.name in this.submitted)this.element(element);else if(element.parentNode.name in this.submitted)this.element(element.parentNode);},highlight:function(element,errorClass,validClass){$(element).addClass(errorClass).removeClass(validClass);},unhighlight:function(element,errorClass,validClass){$(element).removeClass(errorClass).addClass(validClass);}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){$.each(value.split(/\s/),function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,"");validator.settings[eventType]&&validator.settings[eventType].call(validator,this[0]);}$(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",delegate).validateDelegate(":radio, :checkbox, select, option","click",delegate);if(this.settings.invalidHandler)$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid())$(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}return this.valid();},element:function(element){element=this.clean(element);this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element);if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){if($.fn.resetForm)$(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj)count++;return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()==0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name==lastActive.name;}).length==1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&validator.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in rulesCache||!validator.objectLength($(this).rules()))return false;rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},check:function(element){element=this.clean(element);if(this.checkable(element)){element=this.findByName(element.name)[0];}var rules=$(element).rules();var dependencyMismatch=false;for(method in rules){var rule={method:method,parameters:rules[method]};try{var result=$.validator.methods[method].call(this,element.value.replace(/\r/g,""),element,rule.parameters);if(result=="dependency-mismatch"){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result=="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){this.settings.debug&&window.console&&console.log("exception occured when checking element "+element.id
+", check the '"+rule.method+"' method",e);throw e;}}if(dependencyMismatch)return;if(this.objectLength(rules))this.successList.push(element);return true;},customMetaMessage:function(element,method){if(!$.metadata)return;var meta=this.settings.meta?$(element).metadata()[this.settings.meta]:$(element).metadata();return meta&&meta.messages&&meta.messages[method];},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor==String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined)return arguments[i];}return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customMetaMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message=="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=jQuery.format(message.replace(theregex,'{$1}'),rule.parameters);}this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper)toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));return toToggle;},defaultShowErrors:function(){for(var i=0;this.errorList[i];i++){var error=this.errorList[i];this.settings.highlight&&this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(var i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(var i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass().addClass(this.settings.errorClass);label.attr("generated")&&label.html(message);}else{label=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(element),generated:true}).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(!this.labelContainer.append(label).length)this.settings.errorPlacement?this.settings.errorPlacement(label,$(element)):label.insertAfter(element);}if(!message&&this.settings.success){label.text("");typeof this.settings.success=="string"?label.addClass(this.settings.success):this.settings.success(label);}this.toShow=this.toShow.add(label);},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr('for')==name;});},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},checkable:function(element){return/radio|checkbox/i.test(element.type);},findByName:function(name){var form=this.currentForm;return $(document.getElementsByName(name)).map(function(index,element){return element.form==form&&element.name==name&&element||null;});},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case'select':return $("option:selected",element).length;case'input':if(this.checkable(element))return this.findByName(element.name).filter(':checked').length;}return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){return!$.validator.methods.required.call(this,$.trim(element.value),element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[element.name];if(valid&&this.pendingRequest==0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest==0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){className.constructor==String?this.classRuleSettings[className]=rules:$.extend(this.classRuleSettings,className);},classRules:function(element){var rules={};var classes=$(element).attr('class');classes&&$.each(classes.split(' '),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(method in $.validator.methods){var value=$element.attr(method);if(value){rules[method]=value;}}if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},metadataRules:function(element){if(!$.metadata)return{};var meta=$.data(element.form,'validator').settings.meta;return meta?$(element).metadata()[meta]:$(element).metadata();},staticRules:function(element){var rules={};var validator=$.data(element.form,'validator');if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength','min','max'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength','range'],function(){if(rules[this]){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}if(rules.messages){delete rules.messages;}return rules;},normalizeRule:function(data){if(typeof data=="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!=undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element))return"dependency-mismatch";switch(element.nodeName.toLowerCase()){case'select':var val=$(element).val();return val&&val.length>0;case'input':if(this.checkable(element))return this.getLength(value,element)>0;default:return $.trim(value).length>0;}},remote:function(value,element,param){if(this.optional(element))return"dependency-mismatch";var previous=this.previousValue(element);if(!this.settings.messages[element.name])this.settings.messages[element.name]={};previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param=="string"&&{url:param}||param;if(previous.old!==value){previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true;if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.showErrors();}else{var errors={};var message=(previous.message=response||validator.defaultMessage(element,"remote"));errors[element.name]=$.isFunction(message)?message(value):message;validator.showErrors(errors);}previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";}else if(this.pending[element.name]){return"pending";}return previous.valid;},minlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)>=param;},maxlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)<=param;},rangelength:function(value,element,param){var length=this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value));},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element))return"dependency-mismatch";if(/[^0-9-]+/.test(value))return false;var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);var nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9)nDigit-=9;}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)==0;},accept:function(value,element,param){param=typeof param=="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";return this.optional(element)||value.match(new RegExp(".("+param+")$","i"));},equalTo:function(value,element,param){var target=$(param).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});return value==target.val();}}});$.format=$.validator.format;})(jQuery);;(function($){var ajax=$.ajax;var pendingRequests={};$.ajax=function(settings){settings=$.extend(settings,$.extend({},$.ajaxSettings,settings));var port=settings.port;if(settings.mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}return(pendingRequests[port]=ajax.apply(this,arguments));}return ajax.apply(this,arguments);};})(jQuery);;(function($){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){$.each({focus:'focusin',blur:'focusout'},function(original,fix){$.event.special[fix]={setup:function(){this.addEventListener(original,handler,true);},teardown:function(){this.removeEventListener(original,handler,true);},handler:function(e){arguments[0]=$.event.fix(e);arguments[0].type=fix;return $.event.handle.apply(this,arguments);}};function handler(e){e=$.event.fix(e);e.type=fix;return $.event.handle.call(this,e);}});};$.extend($.fn,{validateDelegate:function(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});}});})(jQuery);

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
 
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);
/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery throttle / debounce: Sometimes, less is more!
//
// *Version: 1.1, Last updated: 3/7/2010*
// 
// Project Home - http://benalman.com/projects/jquery-throttle-debounce-plugin/
// GitHub       - http://github.com/cowboy/jquery-throttle-debounce/
// Source       - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.js
// (Minified)   - http://github.com/cowboy/jquery-throttle-debounce/raw/master/jquery.ba-throttle-debounce.min.js (0.7kb)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// Throttle - http://benalman.com/code/projects/jquery-throttle-debounce/examples/throttle/
// Debounce - http://benalman.com/code/projects/jquery-throttle-debounce/examples/debounce/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - none, 1.3.2, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-throttle-debounce/unit/
// 
// About: Release History
// 
// 1.1 - (3/7/2010) Fixed a bug in <jQuery.throttle> where trailing callbacks
//       executed later than they should. Reworked a fair amount of internal
//       logic as well.
// 1.0 - (3/6/2010) Initial release as a stand-alone project. Migrated over
//       from jquery-misc repo v0.4 to jquery-throttle repo v1.0, added the
//       no_trailing throttle parameter and debounce functionality.
// 
// Topic: Note for non-jQuery users
// 
// jQuery isn't actually required for this plugin, because nothing internal
// uses any jQuery methods or properties. jQuery is just used as a namespace
// under which these methods can exist.
// 
// Since jQuery isn't actually required for this plugin, if jQuery doesn't exist
// when this plugin is loaded, the method described below will be created in
// the `Cowboy` namespace. Usage will be exactly the same, but instead of
// $.method() or jQuery.method(), you'll need to use Cowboy.method().

(function(window,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  // Since jQuery really isn't required for this plugin, use `jQuery` as the
  // namespace only if it already exists, otherwise use the `Cowboy` namespace,
  // creating it if necessary.
  var $ = window.jQuery || window.Cowboy || ( window.Cowboy = {} ),
    
    // Internal method reference.
    jq_throttle;
  
  // Method: jQuery.throttle
  // 
  // Throttle execution of a function. Especially useful for rate limiting
  // execution of handlers on events like resize and scroll. If you want to
  // rate-limit execution of a function to a single time, see the
  // <jQuery.debounce> method.
  // 
  // In this visualization, | is a throttled-function call and X is the actual
  // callback execution:
  // 
  // > Throttled with `no_trailing` specified as false or unspecified:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X    X    X    X    X    X        X    X    X    X    X    X
  // > 
  // > Throttled with `no_trailing` specified as true:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X    X    X    X    X             X    X    X    X    X
  // 
  // Usage:
  // 
  // > var throttled = jQuery.throttle( delay, [ no_trailing, ] callback );
  // > 
  // > jQuery('selector').bind( 'someevent', throttled );
  // > jQuery('selector').unbind( 'someevent', throttled );
  // 
  // This also works in jQuery 1.4+:
  // 
  // > jQuery('selector').bind( 'someevent', jQuery.throttle( delay, [ no_trailing, ] callback ) );
  // > jQuery('selector').unbind( 'someevent', callback );
  // 
  // Arguments:
  // 
  //  delay - (Number) A zero-or-greater delay in milliseconds. For event
  //    callbacks, values around 100 or 250 (or even higher) are most useful.
  //  no_trailing - (Boolean) Optional, defaults to false. If no_trailing is
  //    true, callback will only execute every `delay` milliseconds while the
  //    throttled-function is being called. If no_trailing is false or
  //    unspecified, callback will be executed one final time after the last
  //    throttled-function call. (After the throttled-function has not been
  //    called for `delay` milliseconds, the internal counter is reset)
  //  callback - (Function) A function to be executed after delay milliseconds.
  //    The `this` context and all arguments are passed through, as-is, to
  //    `callback` when the throttled-function is executed.
  // 
  // Returns:
  // 
  //  (Function) A new, throttled, function.
  
  $.throttle = jq_throttle = function( delay, no_trailing, callback, debounce_mode ) {
    // After wrapper has stopped being called, this timeout ensures that
    // `callback` is executed at the proper times in `throttle` and `end`
    // debounce modes.
    var timeout_id,
      
      // Keep track of the last time `callback` was executed.
      last_exec = 0;
    
    // `no_trailing` defaults to falsy.
    if ( typeof no_trailing !== 'boolean' ) {
      debounce_mode = callback;
      callback = no_trailing;
      no_trailing = undefined;
    }
    
    // The `wrapper` function encapsulates all of the throttling / debouncing
    // functionality and when executed will limit the rate at which `callback`
    // is executed.
    function wrapper() {
      var that = this,
        elapsed = +new Date() - last_exec,
        args = arguments;
      
      // Execute `callback` and update the `last_exec` timestamp.
      function exec() {
        last_exec = +new Date();
        callback.apply( that, args );
      };
      
      // If `debounce_mode` is true (at_begin) this is used to clear the flag
      // to allow future `callback` executions.
      function clear() {
        timeout_id = undefined;
      };
      
      if ( debounce_mode && !timeout_id ) {
        // Since `wrapper` is being called for the first time and
        // `debounce_mode` is true (at_begin), execute `callback`.
        exec();
      }
      
      // Clear any existing timeout.
      timeout_id && clearTimeout( timeout_id );
      
      if ( debounce_mode === undefined && elapsed > delay ) {
        // In throttle mode, if `delay` time has been exceeded, execute
        // `callback`.
        exec();
        
      } else if ( no_trailing !== true ) {
        // In trailing throttle mode, since `delay` time has not been
        // exceeded, schedule `callback` to execute `delay` ms after most
        // recent execution.
        // 
        // If `debounce_mode` is true (at_begin), schedule `clear` to execute
        // after `delay` ms.
        // 
        // If `debounce_mode` is false (at end), schedule `callback` to
        // execute after `delay` ms.
        timeout_id = setTimeout( debounce_mode ? clear : exec, debounce_mode === undefined ? delay - elapsed : delay );
      }
    };
    
    // Set the guid of `wrapper` function to the same of original callback, so
    // it can be removed in jQuery 1.4+ .unbind or .die by using the original
    // callback as a reference.
    if ( $.guid ) {
      wrapper.guid = callback.guid = callback.guid || $.guid++;
    }
    
    // Return the wrapper function.
    return wrapper;
  };
  
  // Method: jQuery.debounce
  // 
  // Debounce execution of a function. Debouncing, unlike throttling,
  // guarantees that a function is only executed a single time, either at the
  // very beginning of a series of calls, or at the very end. If you want to
  // simply rate-limit execution of a function, see the <jQuery.throttle>
  // method.
  // 
  // In this visualization, | is a debounced-function call and X is the actual
  // callback execution:
  // 
  // > Debounced with `at_begin` specified as false or unspecified:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // >                          X                                 X
  // > 
  // > Debounced with `at_begin` specified as true:
  // > ||||||||||||||||||||||||| (pause) |||||||||||||||||||||||||
  // > X                                 X
  // 
  // Usage:
  // 
  // > var debounced = jQuery.debounce( delay, [ at_begin, ] callback );
  // > 
  // > jQuery('selector').bind( 'someevent', debounced );
  // > jQuery('selector').unbind( 'someevent', debounced );
  // 
  // This also works in jQuery 1.4+:
  // 
  // > jQuery('selector').bind( 'someevent', jQuery.debounce( delay, [ at_begin, ] callback ) );
  // > jQuery('selector').unbind( 'someevent', callback );
  // 
  // Arguments:
  // 
  //  delay - (Number) A zero-or-greater delay in milliseconds. For event
  //    callbacks, values around 100 or 250 (or even higher) are most useful.
  //  at_begin - (Boolean) Optional, defaults to false. If at_begin is false or
  //    unspecified, callback will only be executed `delay` milliseconds after
  //    the last debounced-function call. If at_begin is true, callback will be
  //    executed only at the first debounced-function call. (After the
  //    throttled-function has not been called for `delay` milliseconds, the
  //    internal counter is reset)
  //  callback - (Function) A function to be executed after delay milliseconds.
  //    The `this` context and all arguments are passed through, as-is, to
  //    `callback` when the debounced-function is executed.
  // 
  // Returns:
  // 
  //  (Function) A new, debounced, function.
  
  $.debounce = function( delay, at_begin, callback ) {
    return callback === undefined
      ? jq_throttle( delay, at_begin, false )
      : jq_throttle( delay, callback, at_begin !== false );
  };
  
})(this);

isYoutubeAPILoaded = false;

function loadYoutubeAPI() {
	if (isYoutubeAPILoaded) {
		return;
	} else {
		// Load Youtube API script
		var tag = document.createElement('script');
	  tag.src = "https://www.youtube.com/iframe_api";
	  var firstScriptTag = document.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}
}

function onYouTubeIframeAPIReady() {
  isYoutubeAPILoaded = true;
  $('body').trigger('youtubeAPIReady');
}
/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,r,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(r=c,a=u):(r=d.outerWidth(),a=d.outerHeight()),m=(e.width-c)/r,l=(e.height-u)/a,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,r),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),a=document.createElement("img"),r=o(a),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,a.onload=null,r.remove()}.bind(this,i.style.position,i.style.overflow)),a.onload=function(){function t(t){f.init(),f.move(t),r.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(a):!1)}function n(){r.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(a):!1)}var f=o.zoom(i,u,a,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);

/**
 * Module to add a shipping rates calculator to cart page.
 *
 * Copyright (c) 2011-2012 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Modified version -- coupled with Broadcast theme markup
 *
 */

if (typeof Countries === "object") {
  Countries.updateProvinceLabel = function(d, a) {
    if (typeof d === "string" && Countries[d] && Countries[d].provinces) {
      if (typeof a !== "object") {
        a = document.getElementById("address_province_label");
        if (a === null) {
          return
        }
      }
      a.innerHTML = Countries[d].label;
      var c = $(a).parent();
      var b = c.find("select");
      c.find(".custom-style-select-box-inner").html(Countries[d].provinces[0])
    }
  }
}
if (typeof Shopify.Cart === "undefined") {
  Shopify.Cart = {}
}
Shopify.Cart.ShippingCalculator = (function() {
  var _config = {
    submitButton: "Calculate shipping",
    submitButtonDisabled: "Calculating...",
    templateId: "shipping-calculator-response-template",
    wrapperId: "wrapper-response",
    customerIsLoggedIn: false,
    moneyFormat: "$ {{amount}}"
  };
  var _render = function(response) {
    var template = jQuery("#" + _config.templateId);
    var wrapper = jQuery("#" + _config.wrapperId);
    if (template.length && wrapper.length) {
      template.tmpl(response).appendTo(wrapper);
      if (typeof Currency !== "undefined" && typeof Currency.convertAll === "function") {
        var newCurrency = "";
        if (jQuery("[name=currencies]").size()) {
          newCurrency = jQuery("[name=currencies]").val()
        } else {
          if (jQuery("#currencies span.selected").size()) {
            newCurrency = jQuery("#currencies span.selected").attr("data-currency")
          }
        }
        if (newCurrency !== "") {
          Currency.convertAll(shopCurrency, newCurrency, "#wrapper-response span.money, #estimated-shipping em span.money")
        }
      }
    }
  };
  var _enableButtons = function() {
    jQuery(".get-rates").removeAttr("disabled").removeClass("disabled").val(_config.submitButton)
  };
  var _disableButtons = function() {
    jQuery(".get-rates").val(_config.submitButtonDisabled).attr("disabled", "disabled").addClass("disabled")
  };
  var _getCartShippingRatesForDestination = function(shipping_address) {
    var params = {
      type: "GET",
      url: "/cart/shipping_rates.json",
      data: jQuery.param({
        shipping_address: shipping_address
      }),
      dataType: "json",
      success: function(response) {
        rates = response.shipping_rates;
        _onCartShippingRatesUpdate(rates, shipping_address)
      },
      error: function(XMLHttpRequest, textStatus) {
        _onError(XMLHttpRequest, textStatus)
      }
    };
    jQuery.ajax(params)
  };
  var _fullMessagesFromErrors = function(errors) {
    var fullMessages = [];
    jQuery.each(errors, function(attribute, messages) {
      jQuery.each(messages, function(index, message) {
        fullMessages.push(attribute + " " + message)
      })
    });
    return fullMessages
  };
  var _onError = function(XMLHttpRequest, textStatus) {
    jQuery("#estimated-shipping").hide();
    jQuery("#estimated-shipping em").empty();
    _enableButtons();
    var feedback = "";
    var data = eval("(" + XMLHttpRequest.responseText + ")");
    if (!!data.message) {
      feedback = data.message + "(" + data.status + "): " + data.description
    } else {
      feedback = "Error : " + _fullMessagesFromErrors(data).join("; ")
    }
    if (feedback === "Error : country is not supported.") {
      feedback = "We do not ship to this destination."
    }
    _render({
      rates: [],
      errorFeedback: feedback,
      success: false
    });
    jQuery("#" + _config.wrapperId).show()
  };
  var _onCartShippingRatesUpdate = function(rates, shipping_address) {
    _enableButtons();
    var readable_address = "";
    if (shipping_address.zip) {
      readable_address += shipping_address.zip + ", "
    }
    if (shipping_address.province) {
      readable_address += shipping_address.province + ", "
    }
    readable_address += shipping_address.country;
    if (rates.length) {
      if (rates[0].price == "0.00") {
        jQuery("#estimated-shipping em").html("FREE")
      } else {
        jQuery("#estimated-shipping em").html(_formatRate(rates[0].price))
      }
    }
    _render({
      rates: rates,
      address: readable_address,
      success: true
    });
    jQuery("#" + _config.wrapperId + ", #estimated-shipping").fadeIn()
  };
  var _formatRate = function(cents) {
    if (typeof cents == "string") {
      cents = cents.replace(".", "")
    }
    var value = "";
    var patt = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = _config.moneyFormat;

    function addCommas(moneyString) {
      return moneyString.replace(/(\d+)(\d{3}[\.,]?)/, "$1,$2")
    }

    function floatToString(numeric, decimals) {
      var amount = numeric.toFixed(decimals).toString();
      if (amount.match(/^\.\d+/)) {
        return "0" + amount
      } else {
        return amount
      }
    }
    switch (formatString.match(patt)[1]) {
      case "amount":
        value = addCommas(floatToString(cents / 100, 2));
        break;
      case "amount_no_decimals":
        value = addCommas(floatToString(cents / 100, 0));
        break;
      case "amount_with_comma_separator":
        value = floatToString(cents / 100, 2).replace(/\./, ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        value = addCommas(floatToString(cents / 100, 0)).replace(/\./, ",");
        break
    }
    return formatString.replace(patt, value)
  };
  _init = function() {
    new Shopify.CountryProvinceSelector("address_country", "address_province", {
      hideElement: "address_province_container"
    });
    var countriesSelect = jQuery("#address_country");
    var addressProvinceLabelEl = jQuery("#address_province_label").get(0);
    if (typeof Countries !== "undefined") {
      Countries.updateProvinceLabel(countriesSelect.val(), addressProvinceLabelEl);
      countriesSelect.change(function() {
        Countries.updateProvinceLabel(countriesSelect.val(), addressProvinceLabelEl)
      })
    }
    jQuery(".get-rates").off().on('click', function() {
      _disableButtons();
      jQuery("#" + _config.wrapperId).empty().hide();
      var shippingAddress = {};
      shippingAddress.zip = jQuery("#address_zip").val() || "";
      shippingAddress.country = jQuery("#address_country").val() || "";
      shippingAddress.province = jQuery("#address_province").val() || "";
      _getCartShippingRatesForDestination(shippingAddress)
    });
    if (_config.customerIsLoggedIn) {
      jQuery(".get-rates:eq(0)").trigger("click")
    }
  };
  return {
    show: function(params) {
      params = params || {};
      jQuery.extend(_config, params);
      jQuery(function() {
        _init()
      })
    },
    getConfig: function() {
      return _config
    },
    formatRate: function(cents) {
      return _formatRate(cents)
    }
  }
})();


/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=a.requestAnimationFrame||setTimeout,e=function(){var f,g,h,i,j=c.cfg,k={"data-bgset":1,"data-include":1,"data-poster":1,"data-bg":1,"data-script":1},l="(\\s|^)("+j.loadedClass,m=b.documentElement,n=function(a){d(function(){c.rC(a,j.loadedClass),j.unloadedClass&&c.rC(a,j.unloadedClass),c.aC(a,j.lazyClass)})},o=function(a){var b,c,d,e;for(b=0,c=a.length;c>b;b++)d=a[b],e=d.target,e.getAttribute(d.attributeName)&&("source"==e.localName&&e.parentNode&&(e=e.parentNode.querySelector("img")),e&&l.test(e.className)&&n(e))};j.unloadedClass&&(l+="|"+j.unloadedClass),l+="|"+j.loadingClass+")(\\s|$)",l=new RegExp(l),k[j.srcAttr]=1,k[j.srcsetAttr]=1,a.MutationObserver?(h=new MutationObserver(o),f=function(){i||(i=!0,h.observe(m,{subtree:!0,attributes:!0,attributeFilter:Object.keys(k)}))},g=function(){i&&(i=!1,h.disconnect())}):(m.addEventListener("DOMAttrModified",function(){var a,b=[],c=function(){o(b),b=[],a=!1};return function(d){i&&k[d.attrName]&&d.newValue&&(b.push({target:d.target,attributeName:d.attrName}),a||(setTimeout(c),a=!0))}}(),!0),f=function(){i=!0},g=function(){i=!1}),addEventListener("lazybeforeunveil",g,!0),addEventListener("lazybeforeunveil",f),addEventListener("lazybeforesizes",g,!0),addEventListener("lazybeforesizes",f),f(),removeEventListener("lazybeforeunveil",e)};addEventListener("lazybeforeunveil",e)}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+/g,e=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,g=/\(|\)|'/,h={contain:1,cover:1},i=function(a){var b=c.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},j=function(a){var b;return b=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!h[b]&&h[a.style.backgroundSize]&&(b=a.style.backgroundSize),b},k=function(a,c,g){var h=b.createElement("picture"),i=c.getAttribute(lazySizesConfig.sizesAttr),j=c.getAttribute("data-ratio"),k=c.getAttribute("data-optimumx");c._lazybgset&&c._lazybgset.parentNode==c&&c.removeChild(c._lazybgset),Object.defineProperty(g,"_lazybgset",{value:c,writable:!0}),Object.defineProperty(c,"_lazybgset",{value:h,writable:!0}),a=a.replace(d," ").split(e),h.style.display="none",g.className=lazySizesConfig.lazyClass,1!=a.length||i||(i="auto"),a.forEach(function(a){var c=b.createElement("source");i&&"auto"!=i&&c.setAttribute("sizes",i),a.match(f)&&(c.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&c.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),h.appendChild(c)}),i&&(g.setAttribute(lazySizesConfig.sizesAttr,i),c.removeAttribute(lazySizesConfig.sizesAttr),c.removeAttribute("sizes")),k&&g.setAttribute("data-optimumx",k),j&&g.setAttribute("data-ratio",j),h.appendChild(g),c.appendChild(h)},l=function(a){if(a.target._lazybgset){var b=a.target,d=b._lazybgset,e=b.currentSrc||b.src;e&&(d.style.backgroundImage="url("+(g.test(e)?JSON.stringify(e):e)+")"),b._lazybgsetLoading&&(c.fire(d,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var d,e,f;!a.defaultPrevented&&(d=a.target.getAttribute("data-bgset"))&&(f=a.target,e=b.createElement("img"),e.alt="",e._lazybgsetLoading=!0,a.detail.firesLoad=!0,k(d,f,e),setTimeout(function(){c.loader.unveil(e),c.rAF(function(){c.fire(e,"_lazyloaded",{},!0,!0),e.complete&&l({target:e})})}))}),b.addEventListener("load",l,!0),a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c&&a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,d=j(b);h[d]&&(a.target._lazysizesParentFit=d,c.rAF(function(){a.target.setAttribute("data-parent-fit",d),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),b.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&a.detail.instance==c&&(a.detail.width=i(a.target._lazybgset))})}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(d){b(a.lazySizes,d),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c,d){"use strict";function e(a){var b=getComputedStyle(a,null)||{},c=b.fontFamily||"",d=c.match(j)||"",e=d&&c.match(k)||"";return e&&(e=e[1]),{fit:d&&d[1]||"",position:n[e]||e||"center"}}function f(a,b){var d,e=c.cfg,f=a.cloneNode(!1),g=f.style,h=function(){var b=a.currentSrc||a.src;b&&(g.backgroundImage="url("+(m.test(b)?JSON.stringify(b):b)+")",d||(d=!0,c.rC(f,e.loadingClass),c.aC(f,e.loadedClass)))};a._lazysizesParentFit=b.fit,a.addEventListener("load",function(){c.rAF(h)},!0),f.addEventListener("load",function(){var a=f.currentSrc||f.src;a&&a!=l&&(f.src=l,f.srcset="")}),c.rAF(function(){var d=a,i=a.parentNode;"PICTURE"==i.nodeName.toUpperCase()&&(d=i,i=i.parentNode),c.rC(f,e.loadedClass),c.rC(f,e.lazyClass),c.aC(f,e.loadingClass),c.aC(f,e.objectFitClass||"lazysizes-display-clone"),f.getAttribute(e.srcsetAttr)&&f.setAttribute(e.srcsetAttr,""),f.getAttribute(e.srcAttr)&&f.setAttribute(e.srcAttr,""),f.src=l,f.srcset="",g.backgroundRepeat="no-repeat",g.backgroundPosition=b.position,g.backgroundSize=b.fit,d.style.display="none",a.setAttribute("data-parent-fit",b.fit),a.setAttribute("data-parent-container","prev"),i.insertBefore(f,d),a._lazysizesParentFit&&delete a._lazysizesParentFit,a.complete&&h()})}var g=b.createElement("a").style,h="objectFit"in g,i=h&&"objectPosition"in g,j=/object-fit["']*\s*:\s*["']*(contain|cover)/,k=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,l="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",m=/\(|\)|'/,n={center:"center","50% 50%":"center"};if(!h||!i){var o=function(a){if(a.detail.instance==c){var b=a.target,d=e(b);!d.fit||h&&"center"==d.position||f(b,d)}};a.addEventListener("lazyunveilread",o,!0),d&&d.detail&&o(d)}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d,e=/^picture$/i,f=b.documentElement,g=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)(w|h)(\s+(\d+)(w|h))?)/g,c=function(b,c,d,e,f,g,h,i){a.push({c:c,u:d,w:1*("w"==i?h:e)})};return function(d){return a=[],d.replace(b,c),a}}(),h=function(){var a=function(a,b){return a.w-b.w},b=function(b,d){var e={srcset:b.getAttribute(c.cfg.srcsetAttr)||""},f=g(e.srcset);return Object.defineProperty(b,d,{value:e,writable:!0}),e.cands=f,e.index=0,e.dirty=!1,f[0]&&f[0].w?(f.sort(a),e.cSrcset=[f[e.index].c]):(e.cSrcset=e.srcset?[e.srcset]:[],e.cands=[]),e};return function(a,c){var d,f,g,h;if(!a[c]&&(h=a.parentNode||{},a[c]=b(a,c),a[c].isImg=!0,e.test(h.nodeName||"")))for(a[c].picture=!0,d=h.getElementsByTagName("source"),f=0,g=d.length;g>f;f++)b(d[f],c).isImg=!1;return a[c]}}(),i={_lazyOptimumx:function(){var a=function(a,b,c){var d,e,f;return a&&a.d?(f=c>.7?.6:.4,a.d>=c?!1:(e=Math.pow(a.d-f,1.6)||.1,.1>e?e=.1:e>3&&(e=3),d=a.d+(b-c)*e,c>d)):!0};return function(b,c,d){var e,f;for(e=0;e<b.cands.length;e++)if(f=b.cands[e],f.d=(f.w||1)/c,!(b.index>=e)){if(!(f.d<=d||a(b.cands[e-1],f.d,d)))break;b.cSrcset.push(f.c),b.index=e}}}()},j=function(){var a=function(a,b,c,d,e){var f,g=a[e];g&&(f=g.index,i[e](g,b,c),g.dirty&&f==g.index||(g.cSrcset.join(", "),a.setAttribute(d,g.cSrcset.join(", ")),g.dirty=!0))};return function(b,c,d,e,f){var g,h,i,j,k=b[f];if(k.width=c,k.picture&&(h=b.parentNode))for(g=h.getElementsByTagName("source"),j=0,i=g.length;i>j;j++)a(g[j],c,d,e,f);a(b,c,d,e,f)}}(),k=function(a){var b=a.getAttribute("data-optimumx")||a.getAttribute("data-maxdpr");return!b&&d.constrainPixelDensity&&(b="auto"),b&&(b="auto"==b?d.getOptimumX(a):parseFloat(b,10)),b},l=function(){c&&!c.getOptimumX&&(c.getX=k,c.pWS=g,f.removeEventListener("lazybeforeunveil",l))};f.addEventListener("lazybeforeunveil",l),setTimeout(l),d=c&&c.cfg||a.lazySizesConfig,d||(d={},a.lazySizesConfig=d),"function"!=typeof d.getOptimumX&&(d.getOptimumX=function(){var b=a.devicePixelRatio||1;return b>2.6?b*=.6:b>1.9?b*=.8:b-=.01,Math.min(Math.round(100*b)/100,2)}),a.devicePixelRatio&&addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,e,f,g,i=a.target,l=a.detail,m=l.dataAttr;a.defaultPrevented||!(b=k(i))||b>=devicePixelRatio||(!m||!i._lazyOptimumx||l.reloaded||d.unloadedClass&&c.hC(i,d.unloadedClass)||(i._lazyOptimumx=null),e=h(i,"_lazyOptimumx"),f=l.width,f&&(e.width||0)<f&&(g=m?c.cfg.srcsetAttr:"srcset",c.rAF(function(){j(i,f,b,g,"_lazyOptimumx")})))}})}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,e=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,f=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,g=/^picture$/i,h=function(a){return getComputedStyle(a,null)||{}},i={getParent:function(b,c){var d=b,e=b.parentNode;return c&&"prev"!=c||!e||!g.test(e.nodeName||"")||(e=e.parentNode),"self"!=c&&(d="prev"==c?b.previousElementSibling:c&&(e.closest||a.jQuery)?(e.closest?e.closest(c):jQuery(e).closest(c)[0])||e:e),d},getFit:function(a){var b,c,d=h(a),g=d.content||d.fontFamily,j={fit:a._lazysizesParentFit||a.getAttribute("data-parent-fit")};return!j.fit&&g&&(b=g.match(e))&&(j.fit=b[1]),j.fit?(c=a._lazysizesParentContainer||a.getAttribute("data-parent-container"),!c&&g&&(b=g.match(f))&&(c=b[1]),j.parent=i.getParent(a,c)):j.fit=d.objectFit,j},getImageRatio:function(b){var c,e,f,h,i=b.parentNode,j=i&&g.test(i.nodeName||"")?i.querySelectorAll("source, img"):[b];for(c=0;c<j.length;c++)if(b=j[c],e=b.getAttribute(lazySizesConfig.srcsetAttr)||b.getAttribute("srcset")||b.getAttribute("data-pfsrcset")||b.getAttribute("data-risrcset")||"",f=b._lsMedia||b.getAttribute("media"),f=lazySizesConfig.customMedia[b.getAttribute("data-media")||f]||f,e&&(!f||(a.matchMedia&&matchMedia(f)||{}).matches)){h=parseFloat(b.getAttribute("data-aspectratio")),!h&&e.match(d)&&(h="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1);break}return h},calculateSize:function(a,b){var c,d,e,f,g=this.getFit(a),h=g.fit,i=g.parent;return"width"==h||("contain"==h||"cover"==h)&&(e=this.getImageRatio(a))?(i?b=i.clientWidth:i=a,f=b,"width"==h?f=b:(d=i.clientHeight,d>40&&(c=b/d)&&("cover"==h&&e>c||"contain"==h&&c>e)&&(f=b*(e/c))),f):b}};c.parentFit=i,b.addEventListener("lazybeforesizes",function(a){if(!a.defaultPrevented&&a.detail.instance==c){var b=a.target;a.detail.width=i.calculateSize(b,a.detail.width)}})}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes"),require("../fix-ios-sizes/fix-ios-sizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";var d,e=c&&c.cfg||a.lazySizesConfig,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,c=Array.prototype.forEach;return function(d){var e=b.createElement("img"),f=function(b){var c,d=b.getAttribute(lazySizesConfig.srcsetAttr);d&&(d.match(a)&&(c="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1,c&&b.setAttribute("data-aspectratio",c)),b.setAttribute(lazySizesConfig.srcsetAttr,d.replace(h,"")))},g=function(a){var b=a.target.parentNode;b&&"PICTURE"==b.nodeName&&c.call(b.getElementsByTagName("source"),f),f(a.target)},i=function(){e.currentSrc&&b.removeEventListener("lazybeforeunveil",g)};d[1]&&(b.addEventListener("lazybeforeunveil",g),e.onload=i,e.onerror=i,e.srcset="data:,a 1w 1h",e.complete&&i())}}();if(e||(e={},a.lazySizesConfig=e),e.supportsType||(e.supportsType=function(a){return!a}),!a.picturefill&&!e.pf){if(a.HTMLPictureElement&&g)return b.msElementsFromPoint&&i(navigator.userAgent.match(/Edge\/(\d+)/)),void(e.pf=function(){});e.pf=function(b){var c,e;if(!a.picturefill)for(c=0,e=b.elements.length;e>c;c++)d(b.elements[c])},d=function(){var f=function(a,b){return a.w-b.w},i=/^\s*\d+\.*\d*px\s*$/,j=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},k=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s/,d=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(e){return a=[],e=e.trim(),e.replace(h,"").replace(b,d),a.length||!e||c.test(e)||a.push({c:e,u:e,w:99}),a}}(),l=function(){l.init||(l.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;b>a;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},m=function(b,d){var f,g=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!g&&d&&(g=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute(e.srcAttr)||b.getAttribute("src")),b._lazypolyfill&&b._lazypolyfill._set==g||(f=k(g||""),d&&b.parentNode&&(f.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),f.isPicture&&a.matchMedia&&(c.aC(b,"lazymatchmedia"),l())),f._set=g,Object.defineProperty(b,"_lazypolyfill",{value:f,writable:!0}))},n=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.5,d)},o=function(b){return a.matchMedia?(o=function(a){return!a||(matchMedia(a)||{}).matches})(b):!b},p=function(a){var b,d,g,h,k,l,p;if(h=a,m(h,!0),k=h._lazypolyfill,k.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;g>d;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&o(b[d].getAttribute("media"))){h=b[d],m(h),k=h._lazypolyfill;break}return k.length>1?(p=h.getAttribute("sizes")||"",p=i.test(p)&&parseInt(p,10)||c.gW(a,a.parentNode),k.d=n(a),!k.src||!k.w||k.w<p?(k.w=p,l=j(k.sort(f)),k.src=l):l=k.src):l=k[0],l},q=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=p(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return q.parse=k,q}(),e.loadedClass&&e.loadingClass&&!function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}()}});
/*! lazysizes - v4.0.0 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(b,c){var d,e,f,g,h=a.getComputedStyle(b);e=b.parentNode,g={isPicture:!(!e||!m.test(e.nodeName||""))},f=function(a,c){var d=b.getAttribute("data-"+a);if(!d){var e=h.getPropertyValue("--ls-"+a);e&&(d=e.trim())}if(d){if("true"==d)d=!0;else if("false"==d)d=!1;else if(l.test(d))d=parseFloat(d);else if("function"==typeof j[a])d=j[a](b,d);else if(q.test(d))try{d=JSON.parse(d)}catch(f){}g[a]=d}else a in j&&"function"!=typeof j[a]?g[a]=j[a]:c&&"function"==typeof j[a]&&(g[a]=j[a](b,d))};for(d in j)f(d);return c.replace(p,function(a,b){b in g||f(b,!0)}),g}function e(a,b){var c=[],d=function(a,c){return k[typeof b[c]]?b[c]:a};return c.srcset=[],b.absUrl&&(s.setAttribute("href",a),a=s.href),a=((b.prefix||"")+a+(b.postfix||"")).replace(p,d),b.widths.forEach(function(d){var e=b.widthmap[d]||d,f={u:a.replace(n,e).replace(o,b.ratio?Math.round(d*b.ratio):""),w:d};c.push(f),c.srcset.push(f.c=f.u+" "+d+"w")}),c}function f(a,c,d){var f=0,g=0,h=d;if(a){if("container"===c.ratio){for(f=h.scrollWidth,g=h.scrollHeight;!(f&&g||h===b);)h=h.parentNode,f=h.scrollWidth,g=h.scrollHeight;f&&g&&(c.ratio=g/f)}a=e(a,c),a.isPicture=c.isPicture,u&&"IMG"==d.nodeName.toUpperCase()?d.removeAttribute(i.srcsetAttr):d.setAttribute(i.srcsetAttr,a.srcset.join(", ")),Object.defineProperty(d,"_lazyrias",{value:a,writable:!0})}}function g(a,b){var e=d(a,b);return j.modifyOptions.call(a,{target:a,details:e,detail:e}),c.fire(a,"lazyriasmodifyoptions",e),e}function h(a){return a.getAttribute(a.getAttribute("data-srcattr")||j.srcAttr)||a.getAttribute(i.srcsetAttr)||a.getAttribute(i.srcAttr)||a.getAttribute("data-pfsrcset")||""}var i,j,k={string:1,number:1},l=/^\-*\+*\d+\.*\d*$/,m=/^picture$/i,n=/\s*\{\s*width\s*\}\s*/i,o=/\s*\{\s*height\s*\}\s*/i,p=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,q=/^\[.*\]|\{.*\}$/,r=/^(?:auto|\d+(px)?)$/,s=b.createElement("a"),t=b.createElement("img"),u="srcset"in t&&!("sizes"in t),v=!!a.HTMLPictureElement&&!u;!function(){var b,d=function(){},e={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:d,widthmap:{},ratio:!1};i=c&&c.cfg||a.lazySizesConfig,i||(i={},a.lazySizesConfig=i),i.supportsType||(i.supportsType=function(a){return!a}),i.rias||(i.rias={}),j=i.rias,"widths"in j||(j.widths=[],function(a){for(var b,c=0;!b||3e3>b;)c+=5,c>30&&(c+=1),b=36*c,a.push(b)}(j.widths));for(b in e)b in j||(j[b]=e[b])}(),addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,d,e,k,l,m,o,p,q,s,t,u,x;if(b=a.target,a.detail.dataAttr&&!a.defaultPrevented&&!j.disabled&&(q=b.getAttribute(i.sizesAttr)||b.getAttribute("sizes"))&&r.test(q)){if(d=h(b),e=g(b,d),t=n.test(e.prefix)||n.test(e.postfix),e.isPicture&&(k=b.parentNode))for(l=k.getElementsByTagName("source"),m=0,o=l.length;o>m;m++)(t||n.test(p=h(l[m])))&&(f(p,e,l[m]),u=!0);t||n.test(d)?(f(d,e,b),u=!0):u&&(x=[],x.srcset=[],x.isPicture=!0,Object.defineProperty(b,"_lazyrias",{value:x,writable:!0})),u&&(v?b.removeAttribute(i.srcAttr):"auto"!=q&&(s={width:parseInt(q,10)},w({target:b,detail:s})))}}},!0);var w=function(){var d=function(a,b){return a.w-b.w},e=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;d>f;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},f=function(a,b){var d;return!a._lazyrias&&c.pWS&&(d=c.pWS(a.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a,"_lazyrias",{value:d,writable:!0}),b&&a.parentNode&&(d.isPicture="PICTURE"==a.parentNode.nodeName.toUpperCase())),a._lazyrias},g=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.4,d)},h=function(b,c){var h,i,j,k,l,m;if(l=b._lazyrias,l.isPicture&&a.matchMedia)for(i=0,h=b.parentNode.getElementsByTagName("source"),j=h.length;j>i;i++)if(f(h[i])&&!h[i].getAttribute("type")&&(!(k=h[i].getAttribute("media"))||(matchMedia(k)||{}).matches)){l=h[i]._lazyrias;break}return(!l.w||l.w<c)&&(l.w=c,l.d=g(b),m=e(l.sort(d))),m},j=function(d){if(d.detail.instance==c){var e,g=d.target;return!u&&(a.respimage||a.picturefill||lazySizesConfig.pf)?void b.removeEventListener("lazybeforesizes",j):void(("_lazyrias"in g||d.detail.dataAttr&&f(g,!0))&&(e=h(g,d.detail.width),e&&e.u&&g._lazyrias.cur!=e.u&&(g._lazyrias.cur=e.u,e.cached=!0,c.rAF(function(){g.setAttribute(i.srcAttr,e.u),g.setAttribute("src",e.u)}))))}};return v?j=function(){}:addEventListener("lazybeforesizes",j),j}()});
/*! lazysizes - v4.0.2 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});

/*!
 * instafeed.js v1.4.1 - A simple Instagram javascript plugin
 * http://instafeedjs.com
 * repo: https://github.com/stevenschobert/instafeed.js
 * License: MIT (https://github.com/stevenschobert/instafeed.js/blob/master/LICENSE)
 */

(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,function(){return""+o});return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);

//# sourceMappingURL=gmaps.min.js.map
"use strict";!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(["jquery","googlemaps!"],b):a.GMaps=b()}(this,function(){var a=function(a,b){var c;if(a===b)return a;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a},b=function(a,b){var c,d=Array.prototype.slice.call(arguments,2),e=[],f=a.length;if(Array.prototype.map&&a.map===Array.prototype.map)e=Array.prototype.map.call(a,function(a){var c=d.slice(0);return c.splice(0,0,a),b.apply(this,c)});else for(c=0;c<f;c++)callback_params=d,callback_params.splice(0,0,a[c]),e.push(b.apply(this,callback_params));return e},c=function(a){var b,c=[];for(b=0;b<a.length;b++)c=c.concat(a[b]);return c},d=function(a,b){var c=a[0],d=a[1];return b&&(c=a[1],d=a[0]),new google.maps.LatLng(c,d)},f=function(a,b){var c;for(c=0;c<a.length;c++)a[c]instanceof google.maps.LatLng||(a[c].length>0&&"object"==typeof a[c][0]?a[c]=f(a[c],b):a[c]=d(a[c],b));return a},g=function(a,b){var c=a.replace(".","");return"jQuery"in this&&b?$("."+c,b)[0]:document.getElementsByClassName(c)[0]},h=function(a,b){var a=a.replace("#","");return"jQuery"in window&&b?$("#"+a,b)[0]:document.getElementById(a)},i=function(a){var b=0,c=0;if(a.getBoundingClientRect){var d=a.getBoundingClientRect(),e=-(window.scrollX?window.scrollX:window.pageXOffset),f=-(window.scrollY?window.scrollY:window.pageYOffset);return[d.left-e,d.top-f]}if(a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},j=function(b){var c=document,d=function(b){if("object"!=typeof window.google||!window.google.maps)return"object"==typeof window.console&&window.console.error&&console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),function(){};if(!this)return new d(b);b.zoom=b.zoom||15,b.mapType=b.mapType||"roadmap";var e,f=function(a,b){return void 0===a?b:a},j=this,k=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],l=["mousemove","mouseout","mouseover"],m=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],n=b.el||b.div,o=b.markerClusterer,p=google.maps.MapTypeId[b.mapType.toUpperCase()],q=new google.maps.LatLng(b.lat,b.lng),r=f(b.zoomControl,!0),s=b.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},t=s.style||"DEFAULT",u=s.position||"TOP_LEFT",v=f(b.panControl,!0),w=f(b.mapTypeControl,!0),x=f(b.scaleControl,!0),y=f(b.streetViewControl,!0),z=f(z,!0),A={},B={zoom:this.zoom,center:q,mapTypeId:p},C={panControl:v,zoomControl:r,zoomControlOptions:{style:google.maps.ZoomControlStyle[t],position:google.maps.ControlPosition[u]},mapTypeControl:w,scaleControl:x,streetViewControl:y,overviewMapControl:z};if("string"==typeof b.el||"string"==typeof b.div?n.indexOf("#")>-1?this.el=h(n,b.context):this.el=g.apply(this,[n,b.context]):this.el=n,void 0===this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[j.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=b.zoom,this.registered_events={},this.el.style.width=b.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=b.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=b.enableNewStyle,e=0;e<m.length;e++)delete b[m[e]];for(1!=b.disableDefaultUI&&(B=a(B,C)),A=a(B,b),e=0;e<k.length;e++)delete A[k[e]];for(e=0;e<l.length;e++)delete A[l[e]];this.map=new google.maps.Map(this.el,A),o&&(this.markerClusterer=o.apply(this,[this.map]));var D=function(a,b){var c="",d=window.context_menu[j.el.id][a];for(var e in d)if(d.hasOwnProperty(e)){var f=d[e];c+='<li><a id="'+a+"_"+e+'" href="#">'+f.title+"</a></li>"}if(h("gmaps_context_menu")){var g=h("gmaps_context_menu");g.innerHTML=c;var e,k=g.getElementsByTagName("a"),l=k.length;for(e=0;e<l;e++){var m=k[e],n=function(c){c.preventDefault(),d[this.id.replace(a+"_","")].action.apply(j,[b]),j.hideContextMenu()};google.maps.event.clearListeners(m,"click"),google.maps.event.addDomListenerOnce(m,"click",n,!1)}var o=i.apply(this,[j.el]),p=o[0]+b.pixel.x-15,q=o[1]+b.pixel.y-15;g.style.left=p+"px",g.style.top=q+"px"}};this.buildContextMenu=function(a,b){if("marker"===a){b.pixel={};var c=new google.maps.OverlayView;c.setMap(j.map),c.draw=function(){var d=c.getProjection(),e=b.marker.getPosition();b.pixel=d.fromLatLngToContainerPixel(e),D(a,b)}}else D(a,b);var d=h("gmaps_context_menu");setTimeout(function(){d.style.display="block"},0)},this.setContextMenu=function(a){window.context_menu[j.el.id][a.control]={};var b,d=c.createElement("ul");for(b in a.options)if(a.options.hasOwnProperty(b)){var e=a.options[b];window.context_menu[j.el.id][a.control][e.name]={title:e.title,action:e.action}}d.id="gmaps_context_menu",d.style.display="none",d.style.position="absolute",d.style.minWidth="100px",d.style.background="white",d.style.listStyle="none",d.style.padding="8px",d.style.boxShadow="2px 2px 6px #ccc",h("gmaps_context_menu")||c.body.appendChild(d);var f=h("gmaps_context_menu");google.maps.event.addDomListener(f,"mouseout",function(a){a.relatedTarget&&this.contains(a.relatedTarget)||window.setTimeout(function(){f.style.display="none"},400)},!1)},this.hideContextMenu=function(){var a=h("gmaps_context_menu");a&&(a.style.display="none")};var E=function(a,c){google.maps.event.addListener(a,c,function(a){void 0==a&&(a=this),b[c].apply(this,[a]),j.hideContextMenu()})};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var F=0;F<k.length;F++){var G=k[F];G in b&&E(this.map,G)}for(var F=0;F<l.length;F++){var G=l[F];G in b&&E(this.map,G)}google.maps.event.addListener(this.map,"rightclick",function(a){b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[j.el.id].map&&j.buildContextMenu("map",a)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var a,b=[],c=this.markers.length;for(a=0;a<c;a++)"boolean"==typeof this.markers[a].visible&&this.markers[a].visible&&b.push(this.markers[a].getPosition());this.fitLatLngBounds(b)},this.fitLatLngBounds=function(a){var b,c=a.length,d=new google.maps.LatLngBounds;for(b=0;b<c;b++)d.extend(a[b]);this.map.fitBounds(d)},this.setCenter=function(a,b,c){this.map.panTo(new google.maps.LatLng(a,b)),c&&c()},this.getElement=function(){return this.el},this.zoomIn=function(a){a=a||1,this.zoom=this.map.getZoom()+a,this.map.setZoom(this.zoom)},this.zoomOut=function(a){a=a||1,this.zoom=this.map.getZoom()-a,this.map.setZoom(this.zoom)};var H,I=[];for(H in this.map)"function"!=typeof this.map[H]||this[H]||I.push(H);for(e=0;e<I.length;e++)!function(a,b,c){a[c]=function(){return b[c].apply(b,arguments)}}(this,this.map,I[e])};return d}(this);j.prototype.createControl=function(a){var b=document.createElement("div");b.style.cursor="pointer",a.disableDefaultStyles!==!0&&(b.style.fontFamily="Roboto, Arial, sans-serif",b.style.fontSize="11px",b.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");for(var c in a.style)b.style[c]=a.style[c];a.id&&(b.id=a.id),a.title&&(b.title=a.title),a.classes&&(b.className=a.classes),a.content&&("string"==typeof a.content?b.innerHTML=a.content:a.content instanceof HTMLElement&&b.appendChild(a.content)),a.position&&(b.position=google.maps.ControlPosition[a.position.toUpperCase()]);for(var d in a.events)!function(b,c){google.maps.event.addDomListener(b,c,function(){a.events[c].apply(this,[this])})}(b,d);return b.index=1,b},j.prototype.addControl=function(a){var b=this.createControl(a);return this.controls.push(b),this.map.controls[b.position].push(b),b},j.prototype.removeControl=function(a){var b,c=null;for(b=0;b<this.controls.length;b++)this.controls[b]==a&&(c=this.controls[b].position,this.controls.splice(b,1));if(c)for(b=0;b<this.map.controls.length;b++){var d=this.map.controls[a.position];if(d.getAt(b)==a){d.removeAt(b);break}}return a},j.prototype.createMarker=function(b){if(void 0==b.lat&&void 0==b.lng&&void 0==b.position)throw"No latitude or longitude defined.";var c=this,d=b.details,e=b.fences,f=b.outside,g={position:new google.maps.LatLng(b.lat,b.lng),map:null},h=a(g,b);delete h.lat,delete h.lng,delete h.fences,delete h.outside;var i=new google.maps.Marker(h);if(i.fences=e,b.infoWindow){i.infoWindow=new google.maps.InfoWindow(b.infoWindow);for(var j=["closeclick","content_changed","domready","position_changed","zindex_changed"],k=0;k<j.length;k++)!function(a,c){b.infoWindow[c]&&google.maps.event.addListener(a,c,function(a){b.infoWindow[c].apply(this,[a])})}(i.infoWindow,j[k])}for(var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],m=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"],k=0;k<l.length;k++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this,[this])})}(i,l[k]);for(var k=0;k<m.length;k++)!function(a,c,d){b[d]&&google.maps.event.addListener(c,d,function(c){c.pixel||(c.pixel=a.getProjection().fromLatLngToPoint(c.latLng)),b[d].apply(this,[c])})}(this.map,i,m[k]);return google.maps.event.addListener(i,"click",function(){this.details=d,b.click&&b.click.apply(this,[this]),i.infoWindow&&(c.hideInfoWindows(),i.infoWindow.open(c.map,i))}),google.maps.event.addListener(i,"rightclick",function(a){a.marker=this,b.rightclick&&b.rightclick.apply(this,[a]),void 0!=window.context_menu[c.el.id].marker&&c.buildContextMenu("marker",a)}),i.fences&&google.maps.event.addListener(i,"dragend",function(){c.checkMarkerGeofence(i,function(a,b){f(a,b)})}),i},j.prototype.addMarker=function(a){var b;if(a.hasOwnProperty("gm_accessors_"))b=a;else{if(!(a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||a.position))throw"No latitude or longitude defined.";b=this.createMarker(a)}return b.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(b),this.markers.push(b),j.fire("marker_added",b,this),b},j.prototype.addMarkers=function(a){for(var b,c=0;b=a[c];c++)this.addMarker(b);return this.markers},j.prototype.hideInfoWindows=function(){for(var a,b=0;a=this.markers[b];b++)a.infoWindow&&a.infoWindow.close()},j.prototype.removeMarker=function(a){for(var b=0;b<this.markers.length;b++)if(this.markers[b]===a){this.markers[b].setMap(null),this.markers.splice(b,1),this.markerClusterer&&this.markerClusterer.removeMarker(a),j.fire("marker_removed",a,this);break}return a},j.prototype.removeMarkers=function(a){var b=[];if(void 0===a){for(var c=0;c<this.markers.length;c++){var d=this.markers[c];d.setMap(null),j.fire("marker_removed",d,this)}this.markerClusterer&&this.markerClusterer.clearMarkers&&this.markerClusterer.clearMarkers(),this.markers=b}else{for(var c=0;c<a.length;c++){var e=this.markers.indexOf(a[c]);if(e>-1){var d=this.markers[e];d.setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(d),j.fire("marker_removed",d,this)}}for(var c=0;c<this.markers.length;c++){var d=this.markers[c];null!=d.getMap()&&b.push(d)}this.markers=b}},j.prototype.drawOverlay=function(a){var b=new google.maps.OverlayView,c=!0;return b.setMap(this.map),null!=a.auto_show&&(c=a.auto_show),b.onAdd=function(){var c=document.createElement("div");c.style.borderStyle="none",c.style.borderWidth="0px",c.style.position="absolute",c.style.zIndex=100,c.innerHTML=a.content,b.el=c,a.layer||(a.layer="overlayLayer");var d=this.getPanes(),e=d[a.layer],f=["contextmenu","DOMMouseScroll","dblclick","mousedown"];e.appendChild(c);for(var g=0;g<f.length;g++)!function(a,b){google.maps.event.addDomListener(a,b,function(a){navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all?(a.cancelBubble=!0,a.returnValue=!1):a.stopPropagation()})}(c,f[g]);a.click&&(d.overlayMouseTarget.appendChild(b.el),google.maps.event.addDomListener(b.el,"click",function(){a.click.apply(b,[b])})),google.maps.event.trigger(this,"ready")},b.draw=function(){var d=this.getProjection(),e=d.fromLatLngToDivPixel(new google.maps.LatLng(a.lat,a.lng));a.horizontalOffset=a.horizontalOffset||0,a.verticalOffset=a.verticalOffset||0;var f=b.el,g=f.children[0],h=g.clientHeight,i=g.clientWidth;switch(a.verticalAlign){case"top":f.style.top=e.y-h+a.verticalOffset+"px";break;default:case"middle":f.style.top=e.y-h/2+a.verticalOffset+"px";break;case"bottom":f.style.top=e.y+a.verticalOffset+"px"}switch(a.horizontalAlign){case"left":f.style.left=e.x-i+a.horizontalOffset+"px";break;default:case"center":f.style.left=e.x-i/2+a.horizontalOffset+"px";break;case"right":f.style.left=e.x+a.horizontalOffset+"px"}f.style.display=c?"block":"none",c||a.show.apply(this,[f])},b.onRemove=function(){var c=b.el;a.remove?a.remove.apply(this,[c]):(b.el.parentNode.removeChild(b.el),b.el=null)},this.overlays.push(b),b},j.prototype.removeOverlay=function(a){for(var b=0;b<this.overlays.length;b++)if(this.overlays[b]===a){this.overlays[b].setMap(null),this.overlays.splice(b,1);break}},j.prototype.removeOverlays=function(){for(var a,b=0;a=this.overlays[b];b++)a.setMap(null);this.overlays=[]},j.prototype.drawPolyline=function(a){var b=[],c=a.path;if(c.length)if(void 0===c[0][0])b=c;else for(var d,e=0;d=c[e];e++)b.push(new google.maps.LatLng(d[0],d[1]));var f={map:this.map,path:b,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight,geodesic:a.geodesic,clickable:!0,editable:!1,visible:!0};a.hasOwnProperty("clickable")&&(f.clickable=a.clickable),a.hasOwnProperty("editable")&&(f.editable=a.editable),a.hasOwnProperty("icons")&&(f.icons=a.icons),a.hasOwnProperty("zIndex")&&(f.zIndex=a.zIndex);for(var g=new google.maps.Polyline(f),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(b,c){a[c]&&google.maps.event.addListener(b,c,function(b){a[c].apply(this,[b])})}(g,h[i]);return this.polylines.push(g),j.fire("polyline_added",g,this),g},j.prototype.removePolyline=function(a){for(var b=0;b<this.polylines.length;b++)if(this.polylines[b]===a){this.polylines[b].setMap(null),this.polylines.splice(b,1),j.fire("polyline_removed",a,this);break}},j.prototype.removePolylines=function(){for(var a,b=0;a=this.polylines[b];b++)a.setMap(null);this.polylines=[]},j.prototype.drawCircle=function(b){b=a({map:this.map,center:new google.maps.LatLng(b.lat,b.lng)},b),delete b.lat,delete b.lng;for(var c=new google.maps.Circle(b),d=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],e=0;e<d.length;e++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(c,d[e]);return this.polygons.push(c),c},j.prototype.drawRectangle=function(b){b=a({map:this.map},b);var c=new google.maps.LatLngBounds(new google.maps.LatLng(b.bounds[0][0],b.bounds[0][1]),new google.maps.LatLng(b.bounds[1][0],b.bounds[1][1]));b.bounds=c;for(var d=new google.maps.Rectangle(b),e=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],f=0;f<e.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e[f]);return this.polygons.push(d),d},j.prototype.drawPolygon=function(d){var e=!1;d.hasOwnProperty("useGeoJSON")&&(e=d.useGeoJSON),delete d.useGeoJSON,d=a({map:this.map},d),0==e&&(d.paths=[d.paths.slice(0)]),d.paths.length>0&&d.paths[0].length>0&&(d.paths=c(b(d.paths,f,e)));for(var g=new google.maps.Polygon(d),h=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<h.length;i++)!function(a,b){d[b]&&google.maps.event.addListener(a,b,function(a){d[b].apply(this,[a])})}(g,h[i]);return this.polygons.push(g),j.fire("polygon_added",g,this),g},j.prototype.removePolygon=function(a){for(var b=0;b<this.polygons.length;b++)if(this.polygons[b]===a){this.polygons[b].setMap(null),this.polygons.splice(b,1),j.fire("polygon_removed",a,this);break}},j.prototype.removePolygons=function(){for(var a,b=0;a=this.polygons[b];b++)a.setMap(null);this.polygons=[]},j.prototype.getFromFusionTables=function(a){var b=a.events;delete a.events;var c=a,d=new google.maps.FusionTablesLayer(c);for(var e in b)!function(a,c){google.maps.event.addListener(a,c,function(a){b[c].apply(this,[a])})}(d,e);return this.layers.push(d),d},j.prototype.loadFromFusionTables=function(a){var b=this.getFromFusionTables(a);return b.setMap(this.map),b},j.prototype.getFromKML=function(a){var b=a.url,c=a.events;delete a.url,delete a.events;var d=a,e=new google.maps.KmlLayer(b,d);for(var f in c)!function(a,b){google.maps.event.addListener(a,b,function(a){c[b].apply(this,[a])})}(e,f);return this.layers.push(e),e},j.prototype.loadFromKML=function(a){var b=this.getFromKML(a);return b.setMap(this.map),b},j.prototype.addLayer=function(a,b){b=b||{};var c;switch(a){case"weather":this.singleLayers.weather=c=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=c=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=c=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=c=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=c=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=c=new google.maps.panoramio.PanoramioLayer,c.setTag(b.filter),delete b.filter,b.click&&google.maps.event.addListener(c,"click",function(a){b.click(a),delete b.click});break;case"places":if(this.singleLayers.places=c=new google.maps.places.PlacesService(this.map),b.search||b.nearbySearch||b.radarSearch){var d={bounds:b.bounds||null,keyword:b.keyword||null,location:b.location||null,name:b.name||null,radius:b.radius||null,rankBy:b.rankBy||null,types:b.types||null};b.radarSearch&&c.radarSearch(d,b.radarSearch),b.search&&c.search(d,b.search),b.nearbySearch&&c.nearbySearch(d,b.nearbySearch)}if(b.textSearch){var e={bounds:b.bounds||null,location:b.location||null,query:b.query||null,radius:b.radius||null};c.textSearch(e,b.textSearch)}}if(void 0!==c)return"function"==typeof c.setOptions&&c.setOptions(b),"function"==typeof c.setMap&&c.setMap(this.map),c},j.prototype.removeLayer=function(a){if("string"==typeof a&&void 0!==this.singleLayers[a])this.singleLayers[a].setMap(null),delete this.singleLayers[a];else for(var b=0;b<this.layers.length;b++)if(this.layers[b]===a){this.layers[b].setMap(null),this.layers.splice(b,1);break}};var k,l;return j.prototype.getRoutes=function(b){switch(b.travelMode){case"bicycling":k=google.maps.TravelMode.BICYCLING;break;case"transit":k=google.maps.TravelMode.TRANSIT;break;case"driving":k=google.maps.TravelMode.DRIVING;break;default:k=google.maps.TravelMode.WALKING}l="imperial"===b.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var c={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},d=a(c,b);d.origin=/string/.test(typeof b.origin)?b.origin:new google.maps.LatLng(b.origin[0],b.origin[1]),d.destination=/string/.test(typeof b.destination)?b.destination:new google.maps.LatLng(b.destination[0],b.destination[1]),d.travelMode=k,d.unitSystem=l,delete d.callback,delete d.error;var e=[];(new google.maps.DirectionsService).route(d,function(a,c){if(c===google.maps.DirectionsStatus.OK){for(var d in a.routes)a.routes.hasOwnProperty(d)&&e.push(a.routes[d]);b.callback&&b.callback(e,a,c)}else b.error&&b.error(a,c)})},j.prototype.removeRoutes=function(){this.routes.length=0},j.prototype.getElevations=function(d){d=a({locations:[],path:!1,samples:256},d),d.locations.length>0&&d.locations[0].length>0&&(d.locations=c(b([d.locations],f,!1)));var e=d.callback;delete d.callback;var g=new google.maps.ElevationService;if(d.path){var h={path:d.locations,samples:d.samples};g.getElevationAlongPath(h,function(a,b){e&&"function"==typeof e&&e(a,b)})}else delete d.path,delete d.samples,g.getElevationForLocations(d,function(a,b){e&&"function"==typeof e&&e(a,b)})},j.prototype.cleanRoute=j.prototype.removePolylines,j.prototype.renderRoute=function(b,c){var d,e="string"==typeof c.panel?document.getElementById(c.panel.replace("#","")):c.panel;c.panel=e,c=a({map:this.map},c),d=new google.maps.DirectionsRenderer(c),this.getRoutes({origin:b.origin,destination:b.destination,travelMode:b.travelMode,waypoints:b.waypoints,unitSystem:b.unitSystem,error:b.error,avoidHighways:b.avoidHighways,avoidTolls:b.avoidTolls,optimizeWaypoints:b.optimizeWaypoints,callback:function(a,b,c){c===google.maps.DirectionsStatus.OK&&d.setDirections(b)}})},j.prototype.drawRoute=function(a){var b=this;this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,avoidHighways:a.avoidHighways,avoidTolls:a.avoidTolls,optimizeWaypoints:a.optimizeWaypoints,callback:function(c){if(c.length>0){var d={path:c[c.length-1].overview_path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(d.icons=a.icons),b.drawPolyline(d),a.callback&&a.callback(c[c.length-1])}}})},j.prototype.travelRoute=function(a){if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,unitSystem:a.unitSystem,error:a.error,callback:function(b){if(b.length>0&&a.start&&a.start(b[b.length-1]),b.length>0&&a.step){var c=b[b.length-1];if(c.legs.length>0)for(var d,e=c.legs[0].steps,f=0;d=e[f];f++)d.step_number=f,a.step(d,c.legs[0].steps.length-1)}b.length>0&&a.end&&a.end(b[b.length-1])}});else if(a.route&&a.route.legs.length>0)for(var b,c=a.route.legs[0].steps,d=0;b=c[d];d++)b.step_number=d,a.step(b)},j.prototype.drawSteppedRoute=function(a){var b=this;if(a.origin&&a.destination)this.getRoutes({origin:a.origin,destination:a.destination,travelMode:a.travelMode,waypoints:a.waypoints,error:a.error,callback:function(c){if(c.length>0&&a.start&&a.start(c[c.length-1]),c.length>0&&a.step){var d=c[c.length-1];if(d.legs.length>0)for(var e,f=d.legs[0].steps,g=0;e=f[g];g++){e.step_number=g;var h={path:e.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(h.icons=a.icons),b.drawPolyline(h),a.step(e,d.legs[0].steps.length-1)}}c.length>0&&a.end&&a.end(c[c.length-1])}});else if(a.route&&a.route.legs.length>0)for(var c,d=a.route.legs[0].steps,e=0;c=d[e];e++){c.step_number=e;var f={path:c.path,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(f.icons=a.icons),b.drawPolyline(f),a.step(c)}},j.Route=function(a){this.origin=a.origin,this.destination=a.destination,this.waypoints=a.waypoints,this.map=a.map,this.route=a.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length;var b={path:new google.maps.MVCArray,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight};a.hasOwnProperty("icons")&&(b.icons=a.icons),this.polyline=this.map.drawPolyline(b).getPath()},j.Route.prototype.getRoute=function(a){var b=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:a.travelMode,waypoints:this.waypoints||[],error:a.error,callback:function(){b.route=e[0],a.callback&&a.callback.call(b)}})},j.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.pop()}},j.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var a=this.route.legs[0].steps[this.step_count].path;for(var b in a)a.hasOwnProperty(b)&&this.polyline.push(a[b]);this.step_count++}},j.prototype.checkGeofence=function(a,b,c){return c.containsLatLng(new google.maps.LatLng(a,b))},j.prototype.checkMarkerGeofence=function(a,b){if(a.fences)for(var c,d=0;c=a.fences[d];d++){var e=a.getPosition();this.checkGeofence(e.lat(),e.lng(),c)||b(a,c)}},j.prototype.toImage=function(a){var a=a||{},b={};if(b.size=a.size||[this.el.clientWidth,this.el.clientHeight],b.lat=this.getCenter().lat(),b.lng=this.getCenter().lng(),this.markers.length>0){b.markers=[];for(var c=0;c<this.markers.length;c++)b.markers.push({lat:this.markers[c].getPosition().lat(),lng:this.markers[c].getPosition().lng()})}if(this.polylines.length>0){var d=this.polylines[0];b.polyline={},b.polyline.path=google.maps.geometry.encoding.encodePath(d.getPath()),b.polyline.strokeColor=d.strokeColor,b.polyline.strokeOpacity=d.strokeOpacity,b.polyline.strokeWeight=d.strokeWeight}return j.staticMapURL(b)},j.staticMapURL=function(a){function b(a,b){if("#"===a[0]&&(a=a.replace("#","0x"),b)){if(b=parseFloat(b),0===(b=Math.min(1,Math.max(b,0))))return"0x00000000";b=(255*b).toString(16),1===b.length&&(b+=b),a=a.slice(0,8)+b}return a}var c,d=[],e=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";a.url&&(e=a.url,delete a.url),e+="?";var f=a.markers;delete a.markers,!f&&a.marker&&(f=[a.marker],delete a.marker);var g=a.styles;delete a.styles;var h=a.polyline;if(delete a.polyline,a.center)d.push("center="+a.center),delete a.center;else if(a.address)d.push("center="+a.address),delete a.address;else if(a.lat)d.push(["center=",a.lat,",",a.lng].join("")),delete a.lat,delete a.lng;else if(a.visible){var i=encodeURI(a.visible.join("|"));d.push("visible="+i)}var j=a.size;j?(j.join&&(j=j.join("x")),delete a.size):j="630x300",d.push("size="+j),a.zoom||a.zoom===!1||(a.zoom=15);var k=!a.hasOwnProperty("sensor")||!!a.sensor;delete a.sensor,d.push("sensor="+k);for(var l in a)a.hasOwnProperty(l)&&d.push(l+"="+a[l]);if(f)for(var m,n,o=0;c=f[o];o++){m=[],c.size&&"normal"!==c.size?(m.push("size:"+c.size),delete c.size):c.icon&&(m.push("icon:"+encodeURI(c.icon)),delete c.icon),c.color&&(m.push("color:"+c.color.replace("#","0x")),delete c.color),c.label&&(m.push("label:"+c.label[0].toUpperCase()),delete c.label),n=c.address?c.address:c.lat+","+c.lng,delete c.address,delete c.lat,delete c.lng;for(var l in c)c.hasOwnProperty(l)&&m.push(l+":"+c[l]);m.length||0===o?(m.push(n),m=m.join("|"),d.push("markers="+encodeURI(m))):(m=d.pop()+encodeURI("|"+n),d.push(m))}if(g)for(var o=0;o<g.length;o++){var p=[];g[o].featureType&&p.push("feature:"+g[o].featureType.toLowerCase()),g[o].elementType&&p.push("element:"+g[o].elementType.toLowerCase());for(var q=0;q<g[o].stylers.length;q++)for(var r in g[o].stylers[q]){var s=g[o].stylers[q][r];"hue"!=r&&"color"!=r||(s="0x"+s.substring(1)),p.push(r+":"+s)}var t=p.join("|");""!=t&&d.push("style="+t)}if(h){if(c=h,h=[],c.strokeWeight&&h.push("weight:"+parseInt(c.strokeWeight,10)),c.strokeColor){var u=b(c.strokeColor,c.strokeOpacity);h.push("color:"+u)}if(c.fillColor){var v=b(c.fillColor,c.fillOpacity);h.push("fillcolor:"+v)}var w=c.path;if(w.join)for(var x,q=0;x=w[q];q++)h.push(x.join(","));else h.push("enc:"+w);h=h.join("|"),d.push("path="+encodeURI(h))}var y=window.devicePixelRatio||1;return d.push("scale="+y),d=d.join("&"),e+d},j.prototype.addMapType=function(a,b){if(!b.hasOwnProperty("getTileUrl")||"function"!=typeof b.getTileUrl)throw"'getTileUrl' function required.";b.tileSize=b.tileSize||new google.maps.Size(256,256);var c=new google.maps.ImageMapType(b);this.map.mapTypes.set(a,c)},j.prototype.addOverlayMapType=function(a){if(!a.hasOwnProperty("getTile")||"function"!=typeof a.getTile)throw"'getTile' function required.";var b=a.index;delete a.index,this.map.overlayMapTypes.insertAt(b,a)},j.prototype.removeOverlayMapType=function(a){this.map.overlayMapTypes.removeAt(a)},j.prototype.addStyle=function(a){var b=new google.maps.StyledMapType(a.styles,{name:a.styledMapName});this.map.mapTypes.set(a.mapTypeId,b)},j.prototype.setStyle=function(a){this.map.setMapTypeId(a)},j.prototype.createPanorama=function(a){return a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")||(a.lat=this.getCenter().lat(),a.lng=this.getCenter().lng()),this.panorama=j.createPanorama(a),this.map.setStreetView(this.panorama),this.panorama},j.createPanorama=function(b){var c=h(b.el,b.context);b.position=new google.maps.LatLng(b.lat,b.lng),delete b.el,delete b.context,delete b.lat,delete b.lng;for(var d=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],e=a({visible:!0},b),f=0;f<d.length;f++)delete e[d[f]];for(var g=new google.maps.StreetViewPanorama(c,e),f=0;f<d.length;f++)!function(a,c){b[c]&&google.maps.event.addListener(a,c,function(){b[c].apply(this)})}(g,d[f]);return g},j.prototype.on=function(a,b){return j.on(a,this,b)},j.prototype.off=function(a){j.off(a,this)},j.prototype.once=function(a,b){return j.once(a,this,b)},j.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],j.on=function(a,b,c){if(j.custom_events.indexOf(a)==-1)return b instanceof j&&(b=b.map),google.maps.event.addListener(b,a,c);var d={handler:c,eventName:a};return b.registered_events[a]=b.registered_events[a]||[],b.registered_events[a].push(d),d},j.off=function(a,b){j.custom_events.indexOf(a)==-1?(b instanceof j&&(b=b.map),google.maps.event.clearListeners(b,a)):b.registered_events[a]=[]},j.once=function(a,b,c){if(j.custom_events.indexOf(a)==-1)return b instanceof j&&(b=b.map),google.maps.event.addListenerOnce(b,a,c)},j.fire=function(a,b,c){if(j.custom_events.indexOf(a)==-1)google.maps.event.trigger(b,a,Array.prototype.slice.apply(arguments).slice(2));else if(a in c.registered_events)for(var d=c.registered_events[a],e=0;e<d.length;e++)!function(a,b,c){a.apply(b,[c])}(d[e].handler,c,b)},j.geolocate=function(a){var b=a.always||a.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(c){a.success(c),b&&b()},function(c){a.error(c),b&&b()},a.options):(a.not_supported(),b&&b())},j.geocode=function(a){this.geocoder=new google.maps.Geocoder;var b=a.callback;a.hasOwnProperty("lat")&&a.hasOwnProperty("lng")&&(a.latLng=new google.maps.LatLng(a.lat,a.lng)),delete a.lat,delete a.lng,delete a.callback,this.geocoder.geocode(a,function(a,c){b(a,c)})},"object"==typeof window.google&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(a){for(var b,c=new google.maps.LatLngBounds,d=this.getPaths(),e=0;e<d.getLength();e++){b=d.getAt(e);for(var f=0;f<b.getLength();f++)c.extend(b.getAt(f))}return c}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(a){var b=this.getBounds();if(null!==b&&!b.contains(a))return!1;for(var c=!1,d=this.getPaths().getLength(),e=0;e<d;e++)for(var f=this.getPaths().getAt(e),g=f.getLength(),h=g-1,i=0;i<g;i++){var j=f.getAt(i),k=f.getAt(h);(j.lng()<a.lng()&&k.lng()>=a.lng()||k.lng()<a.lng()&&j.lng()>=a.lng())&&j.lat()+(a.lng()-j.lng())/(k.lng()-j.lng())*(k.lat()-j.lat())<a.lat()&&(c=!c),h=i}return c}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(a){return!google.maps.geometry||google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),a)<=this.getRadius()}),google.maps.Rectangle.prototype.containsLatLng=function(a){return this.getBounds().contains(a)},google.maps.LatLngBounds.prototype.containsLatLng=function(a){return this.contains(a)},google.maps.Marker.prototype.setFences=function(a){this.fences=a},google.maps.Marker.prototype.addFence=function(a){this.fences.push(a)},google.maps.Marker.prototype.getId=function(){return this.__gm_id}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);e<c;e++)if(e in b&&b[e]===a)return e;return-1}),j});

/*!
 * enquire.js v2.1.6 - Awesome Media Queries in JavaScript
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT */

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.enquire=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b){this.query=a,this.isUnconditional=b,this.handlers=[],this.mql=window.matchMedia(a);var c=this;this.listener=function(a){c.mql=a.currentTarget||a,c.assess()},this.mql.addListener(this.listener)}var e=a(3),f=a(4).each;d.prototype={constuctor:d,addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var b=this.handlers;f(b,function(c,d){if(c.equals(a))return c.destroy(),!b.splice(d,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){f(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";f(this.handlers,function(b){b[a]()})}},b.exports=d},{3:3,4:4}],2:[function(a,b,c){function d(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var e=a(1),f=a(4),g=f.each,h=f.isFunction,i=f.isArray;d.prototype={constructor:d,register:function(a,b,c){var d=this.queries,f=c&&this.browserIsIncapable;return d[a]||(d[a]=new e(a,f)),h(b)&&(b={match:b}),i(b)||(b=[b]),g(b,function(b){h(b)&&(b={match:b}),d[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},b.exports=d},{1:1,4:4}],3:[function(a,b,c){function d(a){this.options=a,!a.deferSetup&&this.setup()}d.prototype={constructor:d,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},b.exports=d},{}],4:[function(a,b,c){function d(a,b){var c=0,d=a.length;for(c;c<d&&b(a[c],c)!==!1;c++);}function e(a){return"[object Array]"===Object.prototype.toString.apply(a)}function f(a){return"function"==typeof a}b.exports={isFunction:f,isArray:e,each:d}},{}],5:[function(a,b,c){var d=a(2);b.exports=new d},{2:2}]},{},[5])(5)});

/*!
* parallax.js v2.0.0 (http://pixelcog.github.io/parallax.js/)
* @copyright 2017 PixelCog, Inc.
* @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
*/
!function(t){function e(i){if(o[i])return o[i].exports;var r=o[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=jQuery},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),s=o(0),a=i(s),f=o(2),l=i(f),d=function(){function t(e,o){function i(t,e,i){var r=parseInt(o[t]);isNaN(r)?o[t]!==e&&o[t]!==i&&(o.pos+=(o[t]="center")+" "):o.pos+=(o[t]=r)+"px "}r(this,t);var n=(0,a.default)(e);if(o.pos="",i("posX","left","right"),i("posY","top","bottom"),navigator.userAgent.match(o.excludeAgents))o.src&&!n.is("img")&&n.css("background",'url("'+o.src+'") '+o.pos+"/cover");else{o.scrollingSelector&&(t.scrollingElement=(0,a.default)(o.scrollingSelector)[0]),t.isSet||t.init(),t.iList.push(this);var s=(0,a.default)("<div>").addClass("parallax-mirror").css({visibility:"hidden",zIndex:o.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}).prependTo((0,a.default)(o.mirrorSelector)),f=n.find(o.sliderSelector);0===f.length?f=(0,a.default)("<img>").attr("src",o.src):(o.formerParent=f.parent(),o.formerStyles=f.prop("style")),f.addClass("parallax-slider").prependTo(s),f.children("img").add(f).on("load",function(){t.update(!0)}),this.$s=f,this.$m=s}this.$w=n,this.o=o,"function"==typeof o.afterSetup&&o.afterSetup(this)}return n(t,[{key:"refresh",value:function(){var e=this.$w,o=this.o;o.dH=t.dH,o.dW=t.dW;var i=o.scrollingElement;if(i&&i!==document&&(o.dH=i.scrollHeight,o.dW=i.scrollWidth),o){o.aspectRatio||function(t,e){var o=0,i=0,r=0,n=0;if(0===t.children().each(function(){var t=(0,a.default)(this),e=t.offset(),s=e.top+t.outerHeight(),f=e.left+t.outerWidth();o=e.top<o?e.top:o,r=e.left<r?e.left:r,i=s>i?s:i,n=f>n?f:n}).length)e.aspectRatio=t[0].naturalWidth/(t[0].naturalHeight||1);else{var s=t.offset(),f=i-Math.max(o,s.top),l=n-Math.max(r,s.left);e.aspectRatio=l/(f||1)}}(this.$s,o);var r=o.aspectRatio||1;o.boxWidth=e.outerWidth(),o.boxHeight=e.outerHeight()+2*o.bleed,o.boxOffsetTop=e.offset().top-o.bleed,o.boxOffsetLeft=e.offset().left,o.boxOffsetBottom=o.boxOffsetTop+o.boxHeight;var n=t.wH,s=t.dH,f=Math.min(o.boxOffsetTop,s-n),l=Math.max(o.boxOffsetTop+o.boxHeight-n,0),d=o.boxHeight+(f-l)*(1-o.speed)|0,u=(o.boxOffsetTop-f)*(1-o.speed)|0,p=void 0;o.boxWidth<d*r?(o.imageWidth=d*r|0,o.imageHeight=d,o.offsetBaseTop=u,p=o.imageWidth-o.boxWidth,"left"===o.posX?o.offsetLeft=0:"right"===o.posX?o.offsetLeft=-p:isNaN(o.posX)?o.offsetLeft=-p/2|0:o.offsetLeft=Math.max(o.posX,-p)):(o.imageWidth=o.boxWidth,o.imageHeight=o.boxWidth/r|0,o.offsetLeft=0,p=o.imageHeight-d,"top"===o.posY?o.offsetBaseTop=u:"bottom"===o.posY?o.offsetBaseTop=u-p:isNaN(o.posY)?o.offsetBaseTop=u-p/2|0:o.offsetBaseTop=u+Math.max(o.posY,-p)),"function"==typeof o.afterRefresh&&o.afterRefresh(this)}}},{key:"render",value:function(){var e=this.o,o=t.sT,i=t.sL,r=e.overScrollFix?t.overScroll:0,n=o+t.wH;e.boxOffsetBottom>o&&e.boxOffsetTop<=n?(e.visibility="visible",e.mirrorTop=e.boxOffsetTop-o,e.mirrorLeft=e.boxOffsetLeft-i,e.offsetTop=e.offsetBaseTop-e.mirrorTop*(1-e.speed)):e.visibility="hidden",this.$m.css({transform:"translate3d("+e.mirrorLeft+"px, "+(e.mirrorTop-r)+"px, 0px)",visibility:e.visibility,height:e.boxHeight,width:e.boxWidth}),this.$s.css({transform:"translate3d("+e.offsetLeft+"px, "+e.offsetTop+"px, 0px)",position:"absolute",height:e.imageHeight,width:e.imageWidth,maxWidth:"none"}),"function"==typeof e.afterRender&&e.afterRender(this)}},{key:"destroy",value:function(){if(this.$m&&this.$m.remove(),this.$s){for(var e=0;e<t.iList.length;e++)t.iList[e]===this&&t.iList.splice(e,1);this.o.formerParent&&(this.$s.prop("style",this.o.formerStyles),this.o.formerParent.append(this.$s))}0===t.iList.length&&((0,a.default)(window).off("scroll.px.parallax resize.px.parallax load.px.parallax"),t.isSet=!1),"function"==typeof this.o.afterDestroy&&this.o.afterDestroy(this)}}],[{key:"init",value:function(){function e(){t.wH=r.height(),t.wW=r.width(),t.dH=i[0].scrollHeight||i.height(),t.dW=i[0].scrollWidth||i.width()}function o(){var e=n.scrollTop(),o=t.dH-t.wH,i=t.dW-t.wW;t.sT=Math.max(0,Math.min(o,e)),t.sL=Math.max(0,Math.min(i,n.scrollLeft())),t.overScroll=Math.max(e-o,Math.min(e,0))}if(!t.isSet){var i=(0,a.default)(t.scrollingElement||document),r=(0,a.default)(window),n=(0,a.default)(t.scrollingElement||window);r.on("resize.px.parallax load.px.parallax",function(){e(),t.update(!0)}),e(),t.isSet=!0;var s=-1;!function e(){var i=n.scrollTop();s!==i&&(s=i,o(),t.update()),window.requestAnimationFrame(e)}()}}},{key:"update",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&a.default.each(t.iList,function(){this.refresh()}),a.default.each(t.iList,function(){this.render()})}}]),t}();d.DEFAULTS={src:null,speed:.2,bleed:0,zIndex:-100,posX:"center",posY:"center",overScrollFix:!1,excludeAgents:/(iPod|iPhone|iPad|Android)/,aspectRatio:null,sliderSelector:">.parallax-slider",mirrorSelector:"body",scrollingSelector:null,afterRefresh:null,afterRender:null,afterSetup:null,afterDestroy:null},d.AUTOINIT=!0,d.sT=0,d.sL=0,d.wH=0,d.wW=0,d.dH=1<<30,d.dW=1<<30,d.iList=[],d.isSet=!1,(0,a.default)(function(){d.AUTOINIT&&(0,a.default)("[data-parallax]").parallax()}),(0,l.default)("parallax",d)},function(t,e,o){"use strict";function i(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="__"+t,n=s.default.fn[t];s.default.fn[t]=function(t){return this.each(function(){var o=(0,s.default)(this),n=o.data(i);if(n||"destroy"===t)"function"==typeof n.configure&&n.configure(options);else{var a=s.default.extend({},e.DEFAULTS,o.data(),"object"===(void 0===t?"undefined":r(t))&&t);o.data(i,n=new e(this,a))}"string"==typeof t&&("destroy"===t?(n.destroy(),o.data(i,!1)):n[t]())})},o&&(s.default[t]=function(e){return(0,s.default)({})[t](e)}),s.default.fn[t].noConflict=function(){return s.default.fn[t]=n}}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=i;var n=o(0),s=function(t){return t&&t.__esModule?t:{default:t}}(n)}]);

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

/*
 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
/*!
 * Flickity PACKAGED v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,o,a){function l(t,e,n){var s,o="$()."+i+'("'+e+'")';return t.each(function(t,l){var h=a.data(l,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+o);var c=h[e];if(!c||"_"==e.charAt(0))return void r(o+" is not a valid method");var d=c.apply(h,n);s=void 0===s?d:s}),void 0!==s?s:t}function h(t,e){t.each(function(t,n){var s=a.data(n,i);s?(s.option(e),s._init()):(s=new o(n,e),a.data(n,i,s))})}a=a||e||t.jQuery,a&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=s.call(arguments,1);return l(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var s=Array.prototype.slice,o=t.console,r="undefined"==typeof o?function(){}:function(t){o.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return n.indexOf(e)==-1&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return n!=-1&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s],r=n&&n[o];r&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=l[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function s(){if(!c){c=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var s=n(e);r=200==Math.round(t(s.width)),o.isBoxSizeOuter=r,i.removeChild(e)}}function o(e){if(s(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var o=n(e);if("none"==o.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var c=a.isBorderBox="border-box"==o.boxSizing,d=0;d<h;d++){var u=l[d],f=o[u],p=parseFloat(f);a[u]=isNaN(p)?0:p}var g=a.paddingLeft+a.paddingRight,v=a.paddingTop+a.paddingBottom,m=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,b=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,S=c&&r,C=t(o.width);C!==!1&&(a.width=C+(S?0:g+b));var x=t(o.height);return x!==!1&&(a.height=x+(S?0:v+E)),a.innerWidth=a.width-(g+b),a.innerHeight=a.height-(v+E),a.outerWidth=a.width+m,a.outerHeight=a.height+y,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=l.length,c=!1;return o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],s=n+"MatchesSelector";if(t[s])return s}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void s.push(t);e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}}),s},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),l=document.querySelectorAll(".js-"+o),h=i.makeArray(a).concat(i.makeArray(l)),c=r+"-options",d=t.jQuery;h.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(c);try{i=o&&JSON.parse(o)}catch(a){return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+a))}var l=new e(t,i);d&&d.data(t,n,l)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("get-size")):(t.Flickity=t.Flickity||{},t.Flickity.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-selected","false"),this.x=0,this.shift=0},n.destroy=function(){this.element.style.position="";var t=this.parent.originSide;this.element.removeAttribute("aria-selected"),this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.changeSelected(!0)},e.unselect=function(){this.changeSelected(!1)},e.changeSelected=function(t){var e=t?"add":"remove";this.cells.forEach(function(i){i.element.classList[e]("is-selected"),i.element.setAttribute("aria-selected",t.toString())})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("fizzy-ui-utils")):(t.Flickity=t.Flickity||{},t.Flickity.animatePrototype=e(t,t.fizzyUIUtils))}(window,function(t,e){var i={};return i.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},i.animate=function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},i.positionSlider=function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=this.isAnimating?"translate3d("+i+",0,0)":"translateX("+i+")";var n=this.slides[0];if(n){var s=-this.x-n.target,o=s/this.slidesWidth;this.dispatchEvent("scroll",null,[o,s])}},i.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},i.getPositionValue=function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},i.settle=function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},i.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},i._shiftCells=function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=e>0?i:0;s.wrapShift(o),e-=s.size.outerWidth}},i._unshiftCells=function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},i.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},i.applyForce=function(t){this.velocity+=t},i.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},i.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},i.applyDragForce=function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x,e=t-this.velocity;this.applyForce(e)}},i.applySelectedAttraction=function(){var t=this.isDraggable&&this.isPointerDown;if(!t&&!this.isFreeScrolling&&this.slides.length){var e=this.selectedSlide.target*-1-this.x,i=e*this.options.selectedAttraction;this.applyForce(i)}},i}),function(t,e){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(i,n,s,o,r,a){return e(t,i,n,s,o,r,a)});else if("object"==typeof module&&module.exports)module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var i=t.Flickity;t.Flickity=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,i.Cell,i.Slide,i.animatePrototype)}}(window,function(t,e,i,n,s,o,r){function a(t,e){for(t=n.makeArray(t);t.length;)e.appendChild(t.shift())}function l(t,e){var i=n.getQueryElement(t);if(!i)return void(d&&d.error("Bad element for Flickity: "+(i||t)));if(this.element=i,this.element.flickityGUID){var s=f[this.element.flickityGUID];return s.option(e),s}h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e),this._create()}var h=t.jQuery,c=t.getComputedStyle,d=t.console,u=0,f={};l.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},l.createMethods=[];var p=l.prototype;n.extend(p,e.prototype),p._create=function(){var e=this.guid=++u;this.element.flickityGUID=e,f[e]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&t.addEventListener("resize",this);for(var i in this.options.on){var n=this.options.on[i];this.on(i,n)}l.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){n.extend(this.options,t)},p.activate=function(){if(!this.isActive){this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();var t=this._filterFindCellElements(this.element.children);a(t,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate");var e,i=this.options.initialIndex;e=this.isInitActivated?this.selectedIndex:void 0!==i&&this.cells[i]?i:0,this.select(e,!1,!0),this.isInitActivated=!0,this.dispatchEvent("ready")}},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return n.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){var e=this._filterFindCellElements(t),i=e.map(function(t){return new s(t,this)},this);return i},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var t=new o(this);this.slides.push(t);var e="left"==this.originSide,i=e?"marginRight":"marginLeft",n=this._getCanCellFit();this.cells.forEach(function(e,s){if(!t.cells.length)return void t.addCell(e);var r=t.outerWidth-t.firstMargin+(e.size.outerWidth-e.size[i]);n.call(this,s,r)?t.addCell(e):(t.updateTarget(),t=new o(this),this.slides.push(t),t.addCell(e))},this),t.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!==0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=i(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];t>0;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h&&this.$element){t+=this.options.namespaceJQueryEvents?".flickity":"";var s=t;if(e){var o=h.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=n.modulo(t,this.slides.length)),this.slides[t])){var s=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=s&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length,i=this.options.wrapAround&&e>1;if(!i)return t;var s=n.modulo(t,e),o=Math.abs(s-this.selectedIndex),r=Math.abs(s+e-this.selectedIndex),a=Math.abs(s-e-this.selectedIndex);!this.isDragSelect&&r<o?t+=e:!this.isDragSelect&&a<o&&(t-=e),t<0?this.x-=this.slideableWidth:t>=e&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),this.selectedSlide=t,t.select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){var i=this.slides[e],n=i.cells.indexOf(t);if(n!=-1)return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getCell(t);i&&e.push(i)},this),e},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e?e:(t=n.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(1+2*t>=i)return this.getCellElements();for(var s=[],o=e-t;o<=e+t;o++){var r=this.options.wrapAround?n.modulo(o,i):o,a=this.slides[r];a&&(s=s.concat(a.getCellElements()))}return s},p.queryCell=function(t){return"number"==typeof t?this.cells[t]:("string"==typeof t&&(t=this.element.querySelector(t)),this.getCell(t))},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},p.onresize=function(){this.watchCSS(),this.resize()},n.debounceMethod(l,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=n.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){var t=this.options.watchCSS;if(t){var e=c(this.element,":after").content;e.indexOf("flickity")!=-1?this.activate():this.deactivate()}},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=l.keyboardHandlers[t.keyCode];i&&i.call(this)}},l.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var e=t.pageYOffset;this.element.focus({preventScroll:!0}),t.pageYOffset!=e&&t.scrollTo(t.pageXOffset,e)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),a(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.emitEvent("destroy"),h&&this.$element&&h.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete f[this.guid]},n.extend(p,r),l.data=function(t){t=n.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]},n.htmlInit(l,"flickity"),h&&h.bridget&&h.bridget("flickity",l),l.setJQuery=function(t){h=t},l.Cell=s,l}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.Unipointer=e(t,t.EvEmitter)}(window,function(t,e){function i(){}function n(){}var s=n.prototype=Object.create(e.prototype);s.bindStartEvent=function(t){this._bindStartEvent(t,!0)},s.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},s._bindStartEvent=function(e,i){i=void 0===i||i;var n=i?"addEventListener":"removeEventListener",s="mousedown";t.PointerEvent?s="pointerdown":"ontouchstart"in t&&(s="touchstart"),e[n](s,this)},s.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},s.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},s.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},s.onpointerdown=function(t){this._pointerDown(t,t)},s._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},s.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var o={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return s._bindPostStartEvents=function(e){if(e){var i=o[e.type];i.forEach(function(e){t.addEventListener(e,this)},this),this._boundPointerEvents=i}},s._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){t.removeEventListener(e,this)},this),delete this._boundPointerEvents)},s.onmousemove=function(t){this._pointerMove(t,t)},s.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},s.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},s._pointerMove=function(t,e){this.pointerMove(t,e)},s.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},s.onmouseup=function(t){this._pointerUp(t,t)},s.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},s.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},s._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},s.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},s._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},s._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},s.pointerDone=i,s.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},s.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},s._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},s.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.Unidragger=e(t,t.Unipointer)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},n._bindHandles=function(e){e=void 0===e||e;for(var i=e?"addEventListener":"removeEventListener",n=e?this._touchActionValue:"",s=0;s<this.handles.length;s++){var o=this.handles[s];this._bindStartEvent(o,e),o[i]("click",this),t.PointerEvent&&(o.style.touchAction=n)}},n._touchActionValue="none",n.pointerDown=function(t,e){var i=this.okayPointerDown(t);i&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},o={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return n.okayPointerDown=function(t){var e=s[t.target.nodeName],i=o[t.target.type],n=!e||i;return n||this._pointerReset(),n},n.pointerDownBlur=function(){var t=document.activeElement,e=t&&t.blur&&t!=document.body;e&&t.blur()},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},n._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},n._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},n.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},n._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},n._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},i.getPointerPoint=e.getPointerPoint,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):t.Flickity=e(t,t.Flickity,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(){return{x:t.pageXOffset,y:t.pageYOffset}}n.extend(e.defaults,{draggable:">1",dragThreshold:3}),e.createMethods.push("_createDrag");var o=e.prototype;n.extend(o,i.prototype),o._touchActionValue="pan-y";var r="createTouch"in document,a=!1;o._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),r&&!a&&(t.addEventListener("touchmove",function(){}),a=!0)},o.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},o.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},o.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},o.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},o.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},o._uiChangeDrag=function(){delete this.isFreeScrolling},o._childUIPointerDownDrag=function(t){t.preventDefault(),this.pointerDownFocus(t)},o.pointerDown=function(e,i){if(!this.isDraggable)return void this._pointerDownDefault(e,i);var n=this.okayPointerDown(e);n&&(this._pointerDownPreventDefault(e),this.pointerDownFocus(e),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=s(),t.addEventListener("scroll",this),this._pointerDownDefault(e,i))},o._pointerDownDefault=function(t,e){this.pointerDownPointer=e,this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var l={INPUT:!0,TEXTAREA:!0,SELECT:!0};return o.pointerDownFocus=function(t){var e=l[t.target.nodeName];e||this.focus()},o._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=l[t.target.nodeName];e||i||n||t.preventDefault()},o.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},o.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},o.pointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},o.dragStart=function(e,i){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[i]))},o.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},o.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>o?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,
this.dispatchEvent("dragMove",t,[e,i])}},o.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},o.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1),s=i.distance<n.distance?i.index:n.index;return s},o._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,e=this.getSlideDistance(-t,n),null!==e);)e=Math.abs(e);return{distance:s,index:n-i}},o.getSlideDistance=function(t,e){var i=this.slides.length,s=this.options.wrapAround&&i>1,o=s?n.modulo(e,i):e,r=this.slides[o];if(!r)return null;var a=s?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+a)},o.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:t<0&&e<0?-1:0},o.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},o.onscroll=function(){var t=s(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},e}),function(t,e){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function(t,e){function i(t){this.bindTap(t)}var n=i.prototype=Object.create(e.prototype);return n.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},n.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)},n.pointerUp=function(i,n){if(!this.isIgnoringMouseUp||"mouseup"!=i.type){var s=e.getPointerPoint(n),o=this.tapElement.getBoundingClientRect(),r=t.pageXOffset,a=t.pageYOffset,l=s.x>=o.left+r&&s.x<=o.right+r&&s.y>=o.top+a&&s.y<=o.bottom+a;if(l&&this.emitEvent("tap",[i,n]),"mouseup"!=i.type){this.isIgnoringMouseUp=!0;var h=this;setTimeout(function(){delete h.isIgnoringMouseUp},400)}}},n.destroy=function(){this.pointerDone(),this.unbindTap()},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";function s(t,e){this.direction=t,this.parent=e,this._create()}function o(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}var r="http://www.w3.org/2000/svg";s.prototype=Object.create(i.prototype),s.prototype._create=function(){this.isEnabled=!0,this.isPrevious=this.direction==-1;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.on("tap",this.onTap),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.bindTap(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},s.prototype.deactivate=function(){this.parent.element.removeChild(this.element),i.prototype.destroy.call(this),this.element.removeEventListener("click",this)},s.prototype.createSVG=function(){var t=document.createElementNS(r,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(r,"path"),i=o(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},s.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},s.prototype.handleEvent=n.handleEvent,s.prototype.onclick=function(t){var e=document.activeElement;e&&e==this.element&&this.onTap(t,t)},s.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},s.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},s.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&t.length>1)return void this.enable();var e=t.length?t.length-1:0,i=this.isPrevious?0:e,n=this.parent.selectedIndex==i?"disable":"enable";this[n]()},s.prototype.destroy=function(){this.deactivate()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var a=e.prototype;return a._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new s((-1),this),this.nextButton=new s(1,this),this.on("activate",this.activatePrevNextButtons))},a.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},a.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}s.prototype=new i,s.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.on("tap",this.onTap),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),i.prototype.destroy.call(this)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;t>0?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){var e=this.dots.splice(this.dots.length-t,t);e.forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):e(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype=Object.create(t.prototype),n.prototype.play=function(){if("playing"!=this.state){var t=document.hidden;if(t)return void document.addEventListener("visibilitychange",this.onVisibilityPlay);this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()}},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){var t=document.hidden;this[t?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}var s=e.prototype;return s.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var s=this.cells.length;e=void 0===e?s:e;var o=n(i),r=e==s;if(r)this.slider.appendChild(o);else{var a=this.cells[e].element;this.slider.insertBefore(o,a)}if(0===e)this.cells=i.concat(this.cells);else if(r)this.cells=this.cells.concat(i);else{var l=this.cells.splice(e,s-e);this.cells=this.cells.concat(i).concat(l)}this._sizeCells(i),this.cellChange(e,!0)}},s.append=function(t){this.insert(t,this.cells.length)},s.prepend=function(t){this.insert(t,0)},s.remove=function(t){var e=this.getCells(t);if(e&&e.length){var n=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);n=Math.min(e,n),i.removeFrom(this.cells,t)},this),this.cellChange(n,!0)}},s.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},s.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){"use strict";function n(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),n=t.getAttribute("data-flickity-lazyload-src"),s=t.getAttribute("data-flickity-lazyload-srcset");if(e||n||s)return[t]}var o="img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",r=t.querySelectorAll(o);return i.makeArray(r)}function s(t,e){this.img=t,this.flickity=e,this.load()}e.createMethods.push("_createLazyload");var o=e.prototype;return o._createLazyload=function(){this.on("select",this.lazyLoad)},o.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),o=[];i.forEach(function(t){var e=n(t);o=o.concat(e)}),o.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=i.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(t,e){function i(t,e,i){return(e-t)*i+t}t.createMethods.push("_createAsNavFor");var n=t.prototype;return n._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},n.setNavCompanion=function(i){i=e.getQueryElement(i);var n=t.data(i);if(n&&n!=this){this.navCompanion=n;var s=this;this.onNavCompanionSelect=function(){s.navCompanionSelect()},n.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},n.navCompanionSelect=function(t){if(this.navCompanion){var e=this.navCompanion.selectedCells[0],n=this.navCompanion.cells.indexOf(e),s=n+this.navCompanion.selectedCells.length-1,o=Math.floor(i(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,s+1);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},n.changeNavSelectedClass=function(t){this.navSelectedElements.forEach(function(e){e.classList[t]("is-nav-selected")})},n.activateAsNavFor=function(){this.navCompanionSelect(!0)},n.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},n.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},n.deactivateAsNavFor=function(){this.removeNavSelectedElements()},n.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){if(Array.isArray(t))return t;var e="object"==typeof t&&"number"==typeof t.length;return e?h.call(t):[t]}function s(t,e,o){if(!(this instanceof s))return new s(t,e,o);var r=t;return"string"==typeof t&&(r=document.querySelectorAll(t)),r?(this.elements=n(r),this.options=i({},this.options),"function"==typeof e?o=e:i(this.options,e),o&&this.on("always",o),this.getImages(),a&&(this.jqDeferred=new a.Deferred),void setTimeout(this.check.bind(this))):void l.error("Bad element for imagesLoaded "+(r||t))}function o(t){this.img=t}function r(t,e){this.url=t,this.element=e,this.img=new Image}var a=t.jQuery,l=t.console,h=Array.prototype.slice;s.prototype=Object.create(e.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var c={1:!0,9:!0,11:!0};return s.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},s.prototype.addImage=function(t){var e=new o(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var i=new r(t,e);this.images.push(i)},s.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},s.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&l&&l.log("progress: "+i,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},o.prototype=Object.create(e.prototype),o.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},o.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},o.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype=Object.create(o.prototype),r.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},r.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},s.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(a=e,a.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(a(this))})},s.makeJQueryPlugin(),s}),function(t,e){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("flickity"),require("imagesloaded")):t.Flickity=e(t,t.Flickity,t.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){function t(t,i){var n=e.getParentCell(i.img);e.cellSizeChange(n&&n.element),e.options.freeScroll||e.positionSliderAtSelected()}if(this.options.imagesLoaded){var e=this;i(this.slider).on("progress",t)}},e});
(function(){function n(n){var i=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight,t=n.getBoundingClientRect();return t.top>=0&&t.bottom<=r&&t.left>=0&&t.right<=i}function t(n){var i=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight,t=n.getBoundingClientRect(),u=t.left>=0&&t.left<=i||t.right>=0&&t.right<=i,f=t.top>=0&&t.top<=r||t.bottom>=0&&t.bottom<=r;return u&&f}function i(n,i){function r(){var r=t(n);r!=u&&(u=r,typeof i=="function"&&i(r,n))}var u=t(n);window.addEventListener("load",r);window.addEventListener("resize",r);window.addEventListener("scroll",r)}function r(t,i){function r(){var r=n(t);r!=u&&(u=r,typeof i=="function"&&i(r,t))}var u=n(t);window.addEventListener("load",r);window.addEventListener("resize",r);window.addEventListener("scroll",r)}window.visibilityHelper={isElementTotallyVisible:n,isElementPartiallyVisible:t,inViewportPartially:i,inViewportTotally:r}})();
/**!
 * trunk8 v1.3.2
 * https://github.com/rviscomi/trunk8
 * 
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 * 
 * Date: October 21, 2012
 */

(function ($) {
	var methods,
		utils,
		SIDES = {
			/* cen...ter */
			center: 'center',
			/* ...left */
			left: 'left',
			/* right... */
			right: 'right'
		},
		WIDTH = {
			auto: 'auto'
		};
	
	function trunk8(element) {
		this.$element = $(element);
		this.original_text = this.$element.html();
		this.settings = $.extend({}, $.fn.trunk8.defaults);
	}
	
	trunk8.prototype.updateSettings = function (options) {
		this.settings = $.extend(this.settings, options);
	};

	function truncate() {
		var data = this.data('trunk8'),
			settings = data.settings,
			width = settings.width,
			side = settings.side,
			fill = settings.fill,
			line_height = utils.getLineHeight(this) * settings.lines,
			str = data.original_text,
			length = str.length,
			max_bite = '',
			lower, upper,
			bite_size,
			bite;
		
		/* Reset the field to the original string. */
		this.html(str);

		if (width === WIDTH.auto) {
			/* Assuming there is no "overflow: hidden". */
			if (this.height() <= line_height) {
				/* Text is already at the optimal trunkage. */
				return;
			}

			/* Binary search technique for finding the optimal trunkage. */
			/* Find the maximum bite without overflowing. */
			lower = 0;
			upper = length - 1;

			while (lower <= upper) {
				bite_size = lower + ((upper - lower) >> 1);
				
				bite = utils.eatStr(str, side, length - bite_size, fill);
				
				this.html(bite);

				/* Check for overflow. */
				if (this.height() > line_height) {
					upper = bite_size - 1;
				}
				else {
					lower = bite_size + 1;

					/* Save the bigger bite. */
					max_bite = (max_bite.length > bite.length) ? max_bite : bite;
				}
			}

			/* Reset the content to eliminate possible existing scroll bars. */
			this.html('');
			
			/* Display the biggest bite. */
			this.html(max_bite);
			
			if (settings.tooltip) {
				this.attr('title', str);
			}
		}
		else if (!isNaN(width)) {
			bite_size = length - width;

			bite = utils.eatStr(str, side, bite_size, fill);

			this.html(bite);
			
			if (settings.tooltip) {
				this.attr('title', str);
			}
		}
		else {
			$.error('Invalid width "' + width + '".');
		}
	}

	methods = {
		init: function (options) {
			return this.each(function () {
				var $this = $(this),
					data = $this.data('trunk8');
				
				if (!data) {
					$this.data('trunk8', (data = new trunk8(this)));
				}
				
				data.updateSettings(options);
				
				truncate.call($this);
			});
		},

		/** Updates the text value of the elements while maintaining truncation. */
		update: function (new_string) {
			return this.each(function () {
				var $this = $(this);
				
				/* Update text. */
				if (new_string) {
					$this.data('trunk8').original_text = new_string;
				}

				/* Truncate accordingly. */
				truncate.call($this);
			});
		},
		
		revert: function () {
			return this.each(function () {
				/* Get original text. */
				var text = $(this).data('trunk8').original_text;
				
				/* Revert element to original text. */
				$(this).html(text);
			});
		},

		/** Returns this instance's settings object. NOT CHAINABLE. */
		getSettings: function () {
			return this.get(0).data('trunk8').settings;
		}
	};

	utils = {
		/** Replaces [bite_size] [side]-most chars in [str] with [fill]. */
		eatStr: function (str, side, bite_size, fill) {
		    var length = str.length,
		    	key = utils.eatStr.generateKey.apply(null, arguments),
		        half_length,
		        half_bite_size;

	        /* If the result is already in the cache, return it. */
	        if (utils.eatStr.cache[key]) {
				return utils.eatStr.cache[key];
	        }
	        
			/* Common error handling. */
		    if ((typeof str !== 'string') || (length === 0)) {
		    	$.error('Invalid source string "' + str + '".');
		    }
		    if ((bite_size < 0) || (bite_size > length)) {
		    	$.error('Invalid bite size "' + bite_size + '".');
		    }
		    else if (bite_size === 0) {
			    /* No bite should show no truncation. */
				return str;
		    }
		    if (typeof (fill + '') !== 'string') {
				$.error('Fill unable to be converted to a string.');
		    }

			/* Compute the result, store it in the cache, and return it. */
		    switch (side) {
		        case SIDES.right:
			        /* str... */
		            return utils.eatStr.cache[key] =
			            	$.trim(str.substr(0, length - bite_size)) + fill;
		            
		        case SIDES.left:
			        /* ...str */
		            return utils.eatStr.cache[key] =
			            	fill + $.trim(str.substr(bite_size));
		            
		        case SIDES.center:
			        /* Bit-shift to the right by one === Math.floor(x / 2) */
		            half_length = length >> 1; // halve the length
		            half_bite_size = bite_size >> 1; // halve the bite_size

			        /* st...r */
		            return utils.eatStr.cache[key] =
			            	$.trim(utils.eatStr(str.substr(0, length - half_length), SIDES.right, bite_size - half_bite_size, '')) +
		            		fill +
		            		$.trim(utils.eatStr(str.substr(length - half_length), SIDES.left, half_bite_size, ''));
		            
		        default:
		        	$.error('Invalid side "' + side + '".');
		    }
		},
		
		getLineHeight: function (elem) {
	            var $elem = $(elem),
	            	floats = $elem.css('float'),
	            	position = $elem.css('position'),
	            	html = $elem.html(),
			        wrapper_id = 'line-height-test',
			        line_height;
	            
	            if (floats !== 'none') {
	            	$elem.css('float', 'none');
	            }
	            
	            if (position === 'absolute') {
	            	$elem.css('position', 'static');
	            }
	
	            /* Set the content to a small single character and wrap. */
	            $elem.html('i').wrap('<div id="' + wrapper_id + '" />');
	
	            /* Calculate the line height by measuring the wrapper.*/
	            line_height = $('#' + wrapper_id).innerHeight();
	
	            /* Remove the wrapper and reset the style/content. */
	            $elem.html(html).css({
	            	'float': floats,
	            	'position': position
	            }).unwrap();
	
	            return line_height;
	        }
	};

	utils.eatStr.cache = {};
	utils.eatStr.generateKey = function () {
		return Array.prototype.join.call(arguments, '');
	};
	
	$.fn.trunk8 = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}
		else {
			$.error('Method ' + method + ' does not exist on jQuery.trunk8');
		}
	};
	
	/* Default trunk8 settings. */
	$.fn.trunk8.defaults = {
		fill: '&hellip;',
		lines: 1,
		side: SIDES.right,
		tooltip: true,
		width: WIDTH.auto
	};
})(jQuery);

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map

/*!
 * DisableBodyScroll
 *
 * https://codepen.io/thuijssoon/pen/prwNjO
 */
var disableBodyScroll=function(){var e,t=!1,o=!1;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(el))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return el});var n=function(e){!1!==o&&e.target.closest(t)||e.preventDefault()},r=function(t){1===t.targetTouches.length&&(e=t.targetTouches[0].clientY)},c=function(t){if(1===t.targetTouches.length){var n=t.targetTouches[0].clientY-e;0===o.scrollTop&&n>0&&t.preventDefault(),o.scrollHeight-o.scrollTop<=o.clientHeight&&n<0&&t.preventDefault()}};return function(e,l){void 0!==l&&(t=l,o=document.querySelector(l)),!0===e?(!1!==o&&(o.addEventListener("touchstart",r,!1),o.addEventListener("touchmove",c,!1)),document.body.addEventListener("touchmove",n,!1)):(!1!==o&&(o.removeEventListener("touchstart",r,!1),o.removeEventListener("touchmove",c,!1)),document.body.removeEventListener("touchmove",n,!1))}}();
/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.Handlebars=e():t.Handlebars=e()}(this,function(){return function(t){function e(i){if(s[i])return s[i].exports;var r=s[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function i(){var t=v();return t.compile=function(e,s){return l.compile(e,s,t)},t.precompile=function(e,s){return l.precompile(e,s,t)},t.AST=h["default"],t.Compiler=l.Compiler,t.JavaScriptCompiler=u["default"],t.Parser=c.parser,t.parse=c.parse,t}var r=s(8)["default"];e.__esModule=!0;var n=s(1),a=r(n),o=s(2),h=r(o),c=s(3),l=s(4),p=s(5),u=r(p),f=s(6),d=r(f),m=s(7),g=r(m),v=a["default"].create,y=i();y.create=i,g["default"](y),y.Visitor=d["default"],y["default"]=y,e["default"]=y,t.exports=e["default"]},function(t,e,s){"use strict";function i(){var t=new o.HandlebarsEnvironment;return f.extend(t,o),t.SafeString=c["default"],t.Exception=p["default"],t.Utils=f,t.escapeExpression=f.escapeExpression,t.VM=m,t.template=function(e){return m.template(e,t)},t}var r=s(9)["default"],n=s(8)["default"];e.__esModule=!0;var a=s(10),o=r(a),h=s(11),c=n(h),l=s(12),p=n(l),u=s(13),f=r(u),d=s(14),m=r(d),g=s(7),v=n(g),y=i();y.create=i,v["default"](y),y["default"]=y,e["default"]=y,t.exports=e["default"]},function(t,e){"use strict";e.__esModule=!0;var s={Program:function(t,e,s,i){this.loc=i,this.type="Program",this.body=t,this.blockParams=e,this.strip=s},MustacheStatement:function(t,e,s,i,r,n){this.loc=n,this.type="MustacheStatement",this.path=t,this.params=e||[],this.hash=s,this.escaped=i,this.strip=r},BlockStatement:function(t,e,s,i,r,n,a,o,h){this.loc=h,this.type="BlockStatement",this.path=t,this.params=e||[],this.hash=s,this.program=i,this.inverse=r,this.openStrip=n,this.inverseStrip=a,this.closeStrip=o},PartialStatement:function(t,e,s,i,r){this.loc=r,this.type="PartialStatement",this.name=t,this.params=e||[],this.hash=s,this.indent="",this.strip=i},ContentStatement:function(t,e){this.loc=e,this.type="ContentStatement",this.original=this.value=t},CommentStatement:function(t,e,s){this.loc=s,this.type="CommentStatement",this.value=t,this.strip=e},SubExpression:function(t,e,s,i){this.loc=i,this.type="SubExpression",this.path=t,this.params=e||[],this.hash=s},PathExpression:function(t,e,s,i,r){this.loc=r,this.type="PathExpression",this.data=t,this.original=i,this.parts=s,this.depth=e},StringLiteral:function(t,e){this.loc=e,this.type="StringLiteral",this.original=this.value=t},NumberLiteral:function(t,e){this.loc=e,this.type="NumberLiteral",this.original=this.value=Number(t)},BooleanLiteral:function(t,e){this.loc=e,this.type="BooleanLiteral",this.original=this.value="true"===t},UndefinedLiteral:function(t){this.loc=t,this.type="UndefinedLiteral",this.original=this.value=void 0},NullLiteral:function(t){this.loc=t,this.type="NullLiteral",this.original=this.value=null},Hash:function(t,e){this.loc=e,this.type="Hash",this.pairs=t},HashPair:function(t,e,s){this.loc=s,this.type="HashPair",this.key=t,this.value=e},helpers:{helperExpression:function(t){return!("SubExpression"!==t.type&&!t.params.length&&!t.hash)},scopedId:function(t){return/^\.|this\b/.test(t.original)},simpleId:function(t){return 1===t.parts.length&&!s.helpers.scopedId(t)&&!t.depth}}};e["default"]=s,t.exports=e["default"]},function(t,e,s){"use strict";function i(t,e){if("Program"===t.type)return t;o["default"].yy=m,m.locInfo=function(t){return new m.SourceLocation(e&&e.srcName,t)};var s=new p["default"];return s.accept(o["default"].parse(t))}var r=s(8)["default"],n=s(9)["default"];e.__esModule=!0,e.parse=i;var a=s(15),o=r(a),h=s(2),c=r(h),l=s(16),p=r(l),u=s(17),f=n(u),d=s(13);e.parser=o["default"];var m={};d.extend(m,f,c["default"])},function(t,e,s){"use strict";function i(){}function r(t,e,s){if(null==t||"string"!=typeof t&&"Program"!==t.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0),e.compat&&(e.useDepths=!0);var i=s.parse(t,e),r=(new s.Compiler).compile(i,e);return(new s.JavaScriptCompiler).compile(r,e)}function n(t,e,s){function i(){var e=s.parse(t,n),i=(new s.Compiler).compile(e,n),r=(new s.JavaScriptCompiler).compile(i,n,void 0,!0);return s.template(r)}function r(t,e){return a||(a=i()),a.call(this,t,e)}var n=void 0===arguments[1]?{}:arguments[1];if(null==t||"string"!=typeof t&&"Program"!==t.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);"data"in n||(n.data=!0),n.compat&&(n.useDepths=!0);var a=void 0;return r._setup=function(t){return a||(a=i()),a._setup(t)},r._child=function(t,e,s,r){return a||(a=i()),a._child(t,e,s,r)},r}function a(t,e){if(t===e)return!0;if(p.isArray(t)&&p.isArray(e)&&t.length===e.length){for(var s=0;s<t.length;s++)if(!a(t[s],e[s]))return!1;return!0}}function o(t){if(!t.path.parts){var e=t.path;t.path=new f["default"].PathExpression(!1,0,[e.original+""],e.original+"",e.loc)}}var h=s(8)["default"];e.__esModule=!0,e.Compiler=i,e.precompile=r,e.compile=n;var c=s(12),l=h(c),p=s(13),u=s(2),f=h(u),d=[].slice;i.prototype={compiler:i,equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var s=0;e>s;s++){var i=this.opcodes[s],r=t.opcodes[s];if(i.opcode!==r.opcode||!a(i.args,r.args))return!1}e=this.children.length;for(var s=0;e>s;s++)if(!this.children[s].equals(t.children[s]))return!1;return!0},guid:0,compile:function(t,e){this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[];var s=e.knownHelpers;if(e.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},s)for(var i in s)i in s&&(e.knownHelpers[i]=s[i]);return this.accept(t)},compileProgram:function(t){var e=new this.compiler,s=e.compile(t,this.options),i=this.guid++;return this.usePartial=this.usePartial||s.usePartial,this.children[i]=s,this.useDepths=this.useDepths||s.useDepths,i},accept:function(t){this.sourceNode.unshift(t);var e=this[t.type](t);return this.sourceNode.shift(),e},Program:function(t){this.options.blockParams.unshift(t.blockParams);for(var e=t.body,s=e.length,i=0;s>i;i++)this.accept(e[i]);return this.options.blockParams.shift(),this.isSimple=1===s,this.blockParams=t.blockParams?t.blockParams.length:0,this},BlockStatement:function(t){o(t);var e=t.program,s=t.inverse;e=e&&this.compileProgram(e),s=s&&this.compileProgram(s);var i=this.classifySexpr(t);"helper"===i?this.helperSexpr(t,e,s):"simple"===i?(this.simpleSexpr(t),this.opcode("pushProgram",e),this.opcode("pushProgram",s),this.opcode("emptyHash"),this.opcode("blockValue",t.path.original)):(this.ambiguousSexpr(t,e,s),this.opcode("pushProgram",e),this.opcode("pushProgram",s),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},PartialStatement:function(t){this.usePartial=!0;var e=t.params;if(e.length>1)throw new l["default"]("Unsupported number of partial arguments: "+e.length,t);e.length||e.push({type:"PathExpression",parts:[],depth:0});var s=t.name.original,i="SubExpression"===t.name.type;i&&this.accept(t.name),this.setupFullMustacheParams(t,void 0,void 0,!0);var r=t.indent||"";this.options.preventIndent&&r&&(this.opcode("appendContent",r),r=""),this.opcode("invokePartial",i,s,r),this.opcode("append")},MustacheStatement:function(t){this.SubExpression(t),this.opcode(t.escaped&&!this.options.noEscape?"appendEscaped":"append")},ContentStatement:function(t){t.value&&this.opcode("appendContent",t.value)},CommentStatement:function(){},SubExpression:function(t){o(t);var e=this.classifySexpr(t);"simple"===e?this.simpleSexpr(t):"helper"===e?this.helperSexpr(t):this.ambiguousSexpr(t)},ambiguousSexpr:function(t,e,s){var i=t.path,r=i.parts[0],n=null!=e||null!=s;this.opcode("getContext",i.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",s),this.accept(i),this.opcode("invokeAmbiguous",r,n)},simpleSexpr:function(t){this.accept(t.path),this.opcode("resolvePossibleLambda")},helperSexpr:function(t,e,s){var i=this.setupFullMustacheParams(t,e,s),r=t.path,n=r.parts[0];if(this.options.knownHelpers[n])this.opcode("invokeKnownHelper",i.length,n);else{if(this.options.knownHelpersOnly)throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper "+n,t);r.falsy=!0,this.accept(r),this.opcode("invokeHelper",i.length,r.original,f["default"].helpers.simpleId(r))}},PathExpression:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0],s=f["default"].helpers.scopedId(t),i=!t.depth&&!s&&this.blockParamIndex(e);i?this.opcode("lookupBlockParam",i,t.parts):e?t.data?(this.options.data=!0,this.opcode("lookupData",t.depth,t.parts)):this.opcode("lookupOnContext",t.parts,t.falsy,s):this.opcode("pushContext")},StringLiteral:function(t){this.opcode("pushString",t.value)},NumberLiteral:function(t){this.opcode("pushLiteral",t.value)},BooleanLiteral:function(t){this.opcode("pushLiteral",t.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(t){var e=t.pairs,s=0,i=e.length;for(this.opcode("pushHash");i>s;s++)this.pushParam(e[s].value);for(;s--;)this.opcode("assignToHash",e[s].key);this.opcode("popHash")},opcode:function(t){this.opcodes.push({opcode:t,args:d.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(t){t&&(this.useDepths=!0)},classifySexpr:function(t){var e=f["default"].helpers.simpleId(t.path),s=e&&!!this.blockParamIndex(t.path.parts[0]),i=!s&&f["default"].helpers.helperExpression(t),r=!s&&(i||e);if(r&&!i){var n=t.path.parts[0],a=this.options;a.knownHelpers[n]?i=!0:a.knownHelpersOnly&&(r=!1)}return i?"helper":r?"ambiguous":"simple"},pushParams:function(t){for(var e=0,s=t.length;s>e;e++)this.pushParam(t[e])},pushParam:function(t){var e=null!=t.value?t.value:t.original||"";if(this.stringParams)e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),t.depth&&this.addDepth(t.depth),this.opcode("getContext",t.depth||0),this.opcode("pushStringParam",e,t.type),"SubExpression"===t.type&&this.accept(t);else{if(this.trackIds){var s=void 0;if(!t.parts||f["default"].helpers.scopedId(t)||t.depth||(s=this.blockParamIndex(t.parts[0])),s){var i=t.parts.slice(1).join(".");this.opcode("pushId","BlockParam",s,i)}else e=t.original||e,e.replace&&(e=e.replace(/^\.\//g,"").replace(/^\.$/g,"")),this.opcode("pushId",t.type,e)}this.accept(t)}},setupFullMustacheParams:function(t,e,s,i){var r=t.params;return this.pushParams(r),this.opcode("pushProgram",e),this.opcode("pushProgram",s),t.hash?this.accept(t.hash):this.opcode("emptyHash",i),r},blockParamIndex:function(t){for(var e=0,s=this.options.blockParams.length;s>e;e++){var i=this.options.blockParams[e],r=i&&p.indexOf(i,t);if(i&&r>=0)return[e,r]}}}},function(t,e,s){"use strict";function i(t){this.value=t}function r(){}function n(t,e,s,i){var r=e.popStack(),n=0,a=s.length;for(t&&a--;a>n;n++)r=e.nameLookup(r,s[n],i);return t?[e.aliasable("this.strict"),"(",r,", ",e.quotedString(s[n]),")"]:r}var a=s(8)["default"];e.__esModule=!0;var o=s(10),h=s(12),c=a(h),l=s(13),p=s(18),u=a(p);r.prototype={nameLookup:function(t,e){return r.isValidJavaScriptVariableName(e)?[t,".",e]:[t,"['",e,"']"]},depthedLookup:function(t){return[this.aliasable("this.lookup"),'(depths, "',t,'")']},compilerInfo:function(){var t=o.COMPILER_REVISION,e=o.REVISION_CHANGES[t];return[t,e]},appendToBuffer:function(t,e,s){return l.isArray(t)||(t=[t]),t=this.source.wrap(t,e),this.environment.isSimple?["return ",t,";"]:s?["buffer += ",t,";"]:(t.appendToBuffer=!0,t)},initializeBuffer:function(){return this.quotedString("")},compile:function(t,e,s,i){this.environment=t,this.options=e,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!i,this.name=this.environment.name,this.isChild=!!s,this.context=s||{programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(t,e),this.useDepths=this.useDepths||t.useDepths||this.options.compat,this.useBlockParams=this.useBlockParams||t.useBlockParams;var r=t.opcodes,n=void 0,a=void 0,o=void 0,h=void 0;for(o=0,h=r.length;h>o;o++)n=r[o],this.source.currentLocation=n.loc,a=a||n.loc,this[n.opcode].apply(this,n.args);if(this.source.currentLocation=a,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new c["default"]("Compile completed with content left on stack");var l=this.createFunctionContext(i);if(this.isChild)return l;var p={compiler:this.compilerInfo(),main:l},u=this.context.programs;for(o=0,h=u.length;h>o;o++)u[o]&&(p[o]=u[o]);return this.environment.usePartial&&(p.usePartial=!0),this.options.data&&(p.useData=!0),this.useDepths&&(p.useDepths=!0),this.useBlockParams&&(p.useBlockParams=!0),this.options.compat&&(p.compat=!0),i?p.compilerOptions=this.options:(p.compiler=JSON.stringify(p.compiler),this.source.currentLocation={start:{line:1,column:0}},p=this.objectLiteral(p),e.srcName?(p=p.toStringWithSourceMap({file:e.destName}),p.map=p.map&&p.map.toString()):p=p.toString()),p},preamble:function(){this.lastContext=0,this.source=new u["default"](this.options.srcName)},createFunctionContext:function(t){var e="",s=this.stackVars.concat(this.registers.list);s.length>0&&(e+=", "+s.join(", "));var i=0;for(var r in this.aliases){var n=this.aliases[r];this.aliases.hasOwnProperty(r)&&n.children&&n.referenceCount>1&&(e+=", alias"+ ++i+"="+r,n.children[0]="alias"+i)}var a=["depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&a.push("blockParams"),this.useDepths&&a.push("depths");var o=this.mergeSource(e);return t?(a.push(o),Function.apply(this,a)):this.source.wrap(["function(",a.join(","),") {\n  ",o,"}"])},mergeSource:function(t){var e=this.environment.isSimple,s=!this.forceBuffer,i=void 0,r=void 0,n=void 0,a=void 0;return this.source.each(function(t){t.appendToBuffer?(n?t.prepend("  + "):n=t,a=t):(n&&(r?n.prepend("buffer += "):i=!0,a.add(";"),n=a=void 0),r=!0,e||(s=!1))}),s?n?(n.prepend("return "),a.add(";")):r||this.source.push('return "";'):(t+=", buffer = "+(i?"":this.initializeBuffer()),n?(n.prepend("return buffer + "),a.add(";")):this.source.push("return buffer;")),t&&this.source.prepend("var "+t.substring(2)+(i?"":";\n")),this.source.merge()},blockValue:function(t){var e=this.aliasable("helpers.blockHelperMissing"),s=[this.contextName(0)];this.setupHelperArgs(t,0,s);var i=this.popStack();s.splice(1,0,i),this.push(this.source.functionCall(e,"call",s))},ambiguousBlockValue:function(){var t=this.aliasable("helpers.blockHelperMissing"),e=[this.contextName(0)];this.setupHelperArgs("",0,e,!0),this.flushInline();var s=this.topStack();e.splice(1,0,s),this.pushSource(["if (!",this.lastHelper,") { ",s," = ",this.source.functionCall(t,"call",e),"}"])},appendContent:function(t){this.pendingContent?t=this.pendingContent+t:this.pendingLocation=this.source.currentLocation,this.pendingContent=t},append:function(){if(this.isInline())this.replaceStack(function(t){return[" != null ? ",t,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var t=this.popStack();this.pushSource(["if (",t," != null) { ",this.appendToBuffer(t,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("this.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(t){this.lastContext=t},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(t,e,s){var i=0;s||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(t[i++])),this.resolvePath("context",t,i,e)},lookupBlockParam:function(t,e){this.useBlockParams=!0,this.push(["blockParams[",t[0],"][",t[1],"]"]),this.resolvePath("context",e,1)},lookupData:function(t,e){this.pushStackLiteral(t?"this.data(data, "+t+")":"data"),this.resolvePath("data",e,0,!0)},resolvePath:function(t,e,s,i){var r=this;if(this.options.strict||this.options.assumeObjects)return void this.push(n(this.options.strict,this,e,t));for(var a=e.length;a>s;s++)this.replaceStack(function(n){var a=r.nameLookup(n,e[s],t);return i?[" && ",a]:[" != null ? ",a," : ",n]})},resolvePossibleLambda:function(){this.push([this.aliasable("this.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(t,e){this.pushContext(),this.pushString(e),"SubExpression"!==e&&("string"==typeof t?this.pushString(t):this.pushStackLiteral(t))},emptyHash:function(t){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(t?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var t=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(t.ids)),this.stringParams&&(this.push(this.objectLiteral(t.contexts)),this.push(this.objectLiteral(t.types))),this.push(this.objectLiteral(t.values))},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){this.pushStackLiteral(null!=t?this.programExpression(t):null)},invokeHelper:function(t,e,s){var i=this.popStack(),r=this.setupHelper(t,e),n=s?[r.name," || "]:"",a=["("].concat(n,i);this.options.strict||a.push(" || ",this.aliasable("helpers.helperMissing")),a.push(")"),this.push(this.source.functionCall(a,"call",r.callParams))},invokeKnownHelper:function(t,e){var s=this.setupHelper(t,e);this.push(this.source.functionCall(s.name,"call",s.callParams))},invokeAmbiguous:function(t,e){this.useRegister("helper");var s=this.popStack();this.emptyHash();var i=this.setupHelper(0,t,e),r=this.lastHelper=this.nameLookup("helpers",t,"helper"),n=["(","(helper = ",r," || ",s,")"];this.options.strict||(n[0]="(helper = ",n.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))),this.push(["(",n,i.paramsInit?["),(",i.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",i.callParams)," : helper))"])},invokePartial:function(t,e,s){var i=[],r=this.setupParams(e,1,i,!1);t&&(e=this.popStack(),delete r.name),s&&(r.indent=JSON.stringify(s)),r.helpers="helpers",r.partials="partials",i.unshift(t?e:this.nameLookup("partials",e,"partial")),this.options.compat&&(r.depths="depths"),r=this.objectLiteral(r),i.push(r),this.push(this.source.functionCall("this.invokePartial","",i))},assignToHash:function(t){var e=this.popStack(),s=void 0,i=void 0,r=void 0;this.trackIds&&(r=this.popStack()),this.stringParams&&(i=this.popStack(),s=this.popStack());var n=this.hash;s&&(n.contexts[t]=s),i&&(n.types[t]=i),r&&(n.ids[t]=r),n.values[t]=e},pushId:function(t,e,s){"BlockParam"===t?this.pushStackLiteral("blockParams["+e[0]+"].path["+e[1]+"]"+(s?" + "+JSON.stringify("."+s):"")):"PathExpression"===t?this.pushString(e):this.pushStackLiteral("SubExpression"===t?"true":"null")},compiler:r,compileChildren:function(t,e){for(var s=t.children,i=void 0,r=void 0,n=0,a=s.length;a>n;n++){i=s[n],r=new this.compiler;var o=this.matchExistingProgram(i);null==o?(this.context.programs.push(""),o=this.context.programs.length,i.index=o,i.name="program"+o,this.context.programs[o]=r.compile(i,e,this.context,!this.precompile),this.context.environments[o]=i,this.useDepths=this.useDepths||r.useDepths,this.useBlockParams=this.useBlockParams||r.useBlockParams):(i.index=o,i.name="program"+o,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams)}},matchExistingProgram:function(t){for(var e=0,s=this.context.environments.length;s>e;e++){var i=this.context.environments[e];if(i&&i.equals(t))return e}},programExpression:function(t){var e=this.environment.children[t],s=[e.index,"data",e.blockParams];return(this.useBlockParams||this.useDepths)&&s.push("blockParams"),this.useDepths&&s.push("depths"),"this.program("+s.join(", ")+")"},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},push:function(t){return t instanceof i||(t=this.source.wrap(t)),this.inlineStack.push(t),t},pushStackLiteral:function(t){this.push(new i(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),t&&this.source.push(t)},replaceStack:function(t){var e=["("],s=void 0,r=void 0,n=void 0;if(!this.isInline())throw new c["default"]("replaceStack on non-inline");var a=this.popStack(!0);if(a instanceof i)s=[a.value],e=["(",s],n=!0;else{r=!0;var o=this.incrStack();e=["((",this.push(o)," = ",a,")"],s=this.topStack()}var h=t.call(this,s);n||this.popStack(),r&&this.stackSlot--,this.push(e.concat(h,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;this.inlineStack=[];for(var e=0,s=t.length;s>e;e++){var r=t[e];if(r instanceof i)this.compileStack.push(r);else{var n=this.incrStack();this.pushSource([n," = ",r,";"]),this.compileStack.push(n)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var e=this.isInline(),s=(e?this.inlineStack:this.compileStack).pop();if(!t&&s instanceof i)return s.value;if(!e){if(!this.stackSlot)throw new c["default"]("Invalid stack pop");this.stackSlot--}return s},topStack:function(){var t=this.isInline()?this.inlineStack:this.compileStack,e=t[t.length-1];return e instanceof i?e.value:e},contextName:function(t){return this.useDepths&&t?"depths["+t+"]":"depth"+t},quotedString:function(t){return this.source.quotedString(t)},objectLiteral:function(t){return this.source.objectLiteral(t)},aliasable:function(t){var e=this.aliases[t];return e?(e.referenceCount++,e):(e=this.aliases[t]=this.source.wrap(t),e.aliasable=!0,e.referenceCount=1,e)},setupHelper:function(t,e,s){var i=[],r=this.setupHelperArgs(e,t,i,s),n=this.nameLookup("helpers",e,"helper");return{params:i,paramsInit:r,name:n,callParams:[this.contextName(0)].concat(i)}},setupParams:function(t,e,s){var i={},r=[],n=[],a=[],o=void 0;i.name=this.quotedString(t),i.hash=this.popStack(),this.trackIds&&(i.hashIds=this.popStack()),this.stringParams&&(i.hashTypes=this.popStack(),i.hashContexts=this.popStack());var h=this.popStack(),c=this.popStack();(c||h)&&(i.fn=c||"this.noop",i.inverse=h||"this.noop");for(var l=e;l--;)o=this.popStack(),s[l]=o,this.trackIds&&(a[l]=this.popStack()),this.stringParams&&(n[l]=this.popStack(),r[l]=this.popStack());return this.trackIds&&(i.ids=this.source.generateArray(a)),this.stringParams&&(i.types=this.source.generateArray(n),i.contexts=this.source.generateArray(r)),this.options.data&&(i.data="data"),this.useBlockParams&&(i.blockParams="blockParams"),i},setupHelperArgs:function(t,e,s,i){var r=this.setupParams(t,e,s,!0);return r=this.objectLiteral(r),i?(this.useRegister("options"),s.push("options"),["options=",r]):(s.push(r),"")}},function(){for(var t="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=r.RESERVED_WORDS={},s=0,i=t.length;i>s;s++)e[t[s]]=!0}(),r.isValidJavaScriptVariableName=function(t){return!r.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)},e["default"]=r,t.exports=e["default"]},function(t,e,s){"use strict";function i(){this.parents=[]}var r=s(8)["default"];e.__esModule=!0;var n=s(12),a=r(n),o=s(2),h=r(o);i.prototype={constructor:i,mutating:!1,acceptKey:function(t,e){var s=this.accept(t[e]);if(this.mutating){if(s&&(!s.type||!h["default"][s.type]))throw new a["default"]('Unexpected node type "'+s.type+'" found when accepting '+e+" on "+t.type);t[e]=s}},acceptRequired:function(t,e){if(this.acceptKey(t,e),!t[e])throw new a["default"](t.type+" requires "+e)},acceptArray:function(t){for(var e=0,s=t.length;s>e;e++)this.acceptKey(t,e),t[e]||(t.splice(e,1),e--,s--)},accept:function(t){if(t){this.current&&this.parents.unshift(this.current),this.current=t;var e=this[t.type](t);return this.current=this.parents.shift(),!this.mutating||e?e:e!==!1?t:void 0}},Program:function(t){this.acceptArray(t.body)},MustacheStatement:function(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")},BlockStatement:function(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash"),this.acceptKey(t,"program"),this.acceptKey(t,"inverse")},PartialStatement:function(t){this.acceptRequired(t,"name"),this.acceptArray(t.params),this.acceptKey(t,"hash")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:function(t){this.acceptRequired(t,"path"),this.acceptArray(t.params),this.acceptKey(t,"hash")},PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(t){this.acceptArray(t.pairs)},HashPair:function(t){this.acceptRequired(t,"value")}},e["default"]=i,t.exports=e["default"]},function(t,e){(function(s){"use strict";e.__esModule=!0,e["default"]=function(t){var e="undefined"!=typeof s?s:window,i=e.Handlebars;t.noConflict=function(){e.Handlebars===t&&(e.Handlebars=i)}},t.exports=e["default"]}).call(e,function(){return this}())},function(t,e){"use strict";e["default"]=function(t){return t&&t.__esModule?t:{"default":t}},e.__esModule=!0},function(t,e){"use strict";e["default"]=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e["default"]=t,e},e.__esModule=!0},function(t,e,s){"use strict";function i(t,e){this.helpers=t||{},this.partials=e||{},r(this)}function r(t){t.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new p["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),t.registerHelper("blockHelperMissing",function(e,s){var i=s.inverse,r=s.fn;if(e===!0)return r(this);if(e===!1||null==e)return i(this);if(m(e))return e.length>0?(s.ids&&(s.ids=[s.name]),t.helpers.each(e,s)):i(this);if(s.data&&s.ids){var a=n(s.data);a.contextPath=c.appendContextPath(s.data.contextPath,s.name),s={data:a}}return r(e,s)}),t.registerHelper("each",function(t,e){function s(e,s,r){h&&(h.key=e,h.index=s,h.first=0===s,h.last=!!r,l&&(h.contextPath=l+e)),o+=i(t[e],{data:h,blockParams:c.blockParams([t[e],e],[l+e,null])})}if(!e)throw new p["default"]("Must pass iterator to #each");var i=e.fn,r=e.inverse,a=0,o="",h=void 0,l=void 0;if(e.data&&e.ids&&(l=c.appendContextPath(e.data.contextPath,e.ids[0])+"."),g(t)&&(t=t.call(this)),e.data&&(h=n(e.data)),t&&"object"==typeof t)if(m(t))for(var u=t.length;u>a;a++)s(a,a,a===t.length-1);else{var f=void 0;for(var d in t)t.hasOwnProperty(d)&&(f&&s(f,a-1),f=d,a++);f&&s(f,a-1,!0)}return 0===a&&(o=r(this)),o}),t.registerHelper("if",function(t,e){return g(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||c.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,s){return t.helpers["if"].call(this,e,{fn:s.inverse,inverse:s.fn,hash:s.hash})}),t.registerHelper("with",function(t,e){g(t)&&(t=t.call(this));var s=e.fn;if(c.isEmpty(t))return e.inverse(this);if(e.data&&e.ids){var i=n(e.data);i.contextPath=c.appendContextPath(e.data.contextPath,e.ids[0]),e={data:i}}return s(t,e)}),t.registerHelper("log",function(e,s){var i=s.data&&null!=s.data.level?parseInt(s.data.level,10):1;t.log(i,e)}),t.registerHelper("lookup",function(t,e){return t&&t[e]})}function n(t){var e=c.extend({},t);return e._parent=t,e}var a=s(9)["default"],o=s(8)["default"];e.__esModule=!0,e.HandlebarsEnvironment=i,e.createFrame=n;var h=s(13),c=a(h),l=s(12),p=o(l),u="3.0.1";e.VERSION=u;var f=6;e.COMPILER_REVISION=f;var d={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};e.REVISION_CHANGES=d;var m=c.isArray,g=c.isFunction,v=c.toString,y="[object Object]";i.prototype={constructor:i,logger:k,log:S,registerHelper:function(t,e){if(v.call(t)===y){if(e)throw new p["default"]("Arg not supported with multiple helpers");c.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if(v.call(t)===y)c.extend(this.partials,t);else{if("undefined"==typeof e)throw new p["default"]("Attempting to register a partial as undefined");this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]}};var k={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(t,e){if("undefined"!=typeof console&&k.level<=t){var s=k.methodMap[t];(console[s]||console.log).call(console,e)}}};e.logger=k;var S=k.log;e.log=S},function(t,e){"use strict";function s(t){this.string=t}e.__esModule=!0,s.prototype.toString=s.prototype.toHTML=function(){return""+this.string},e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t,e){var r=e&&e.loc,n=void 0,a=void 0;r&&(n=r.start.line,a=r.start.column,t+=" - "+n+":"+a);for(var o=Error.prototype.constructor.call(this,t),h=0;h<i.length;h++)this[i[h]]=o[i[h]];Error.captureStackTrace&&Error.captureStackTrace(this,s),r&&(this.lineNumber=n,this.column=a)}e.__esModule=!0;var i=["description","fileName","lineNumber","message","name","number","stack"];s.prototype=new Error,e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t){return c[t]}function i(t){for(var e=1;e<arguments.length;e++)for(var s in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],s)&&(t[s]=arguments[e][s]);return t}function r(t,e){for(var s=0,i=t.length;i>s;s++)if(t[s]===e)return s;return-1}function n(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return p.test(t)?t.replace(l,s):t}function a(t){return t||0===t?d(t)&&0===t.length?!0:!1:!0}function o(t,e){return t.path=e,t}function h(t,e){return(t?t+".":"")+e}e.__esModule=!0,e.extend=i,e.indexOf=r,e.escapeExpression=n,e.isEmpty=a,e.blockParams=o,e.appendContextPath=h;var c={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},l=/[&<>"'`]/g,p=/[&<>"'`]/,u=Object.prototype.toString;e.toString=u;var f=function(t){return"function"==typeof t};f(/x/)&&(e.isFunction=f=function(t){return"function"==typeof t&&"[object Function]"===u.call(t)});var f;e.isFunction=f;var d=Array.isArray||function(t){return t&&"object"==typeof t?"[object Array]"===u.call(t):!1};e.isArray=d},function(t,e,s){"use strict";function i(t){var e=t&&t[0]||1,s=g.COMPILER_REVISION;if(e!==s){if(s>e){var i=g.REVISION_CHANGES[s],r=g.REVISION_CHANGES[e];throw new m["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+i+") or downgrade your runtime to an older version ("+r+").")}throw new m["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}}function r(t,e){function s(s,i,r){r.hash&&(i=f.extend({},i,r.hash)),s=e.VM.resolvePartial.call(this,s,i,r);var n=e.VM.invokePartial.call(this,s,i,r);if(null==n&&e.compile&&(r.partials[r.name]=e.compile(s,t.compilerOptions,e),n=r.partials[r.name](i,r)),null!=n){if(r.indent){for(var a=n.split("\n"),o=0,h=a.length;h>o&&(a[o]||o+1!==h);o++)a[o]=r.indent+a[o];
n=a.join("\n")}return n}throw new m["default"]("The partial "+r.name+" could not be compiled when running in runtime-only mode")}function i(e){var s=void 0===arguments[1]?{}:arguments[1],n=s.data;i._setup(s),!s.partial&&t.useData&&(n=c(e,n));var a=void 0,o=t.useBlockParams?[]:void 0;return t.useDepths&&(a=s.depths?[e].concat(s.depths):[e]),t.main.call(r,e,r.helpers,r.partials,n,o,a)}if(!e)throw new m["default"]("No environment passed to template");if(!t||!t.main)throw new m["default"]("Unknown template object: "+typeof t);e.VM.checkRevision(t.compiler);var r={strict:function(t,e){if(!(e in t))throw new m["default"]('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var s=t.length,i=0;s>i;i++)if(t[i]&&null!=t[i][e])return t[i][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:f.escapeExpression,invokePartial:s,fn:function(e){return t[e]},programs:[],program:function(t,e,s,i,r){var a=this.programs[t],o=this.fn(t);return e||r||i||s?a=n(this,t,o,e,s,i,r):a||(a=this.programs[t]=n(this,t,o)),a},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var s=t||e;return t&&e&&t!==e&&(s=f.extend({},e,t)),s},noop:e.VM.noop,compilerInfo:t.compiler};return i.isTop=!0,i._setup=function(s){s.partial?(r.helpers=s.helpers,r.partials=s.partials):(r.helpers=r.merge(s.helpers,e.helpers),t.usePartial&&(r.partials=r.merge(s.partials,e.partials)))},i._child=function(e,s,i,a){if(t.useBlockParams&&!i)throw new m["default"]("must pass block params");if(t.useDepths&&!a)throw new m["default"]("must pass parent depths");return n(r,e,t[e],s,0,i,a)},i}function n(t,e,s,i,r,n,a){function o(e){var r=void 0===arguments[1]?{}:arguments[1];return s.call(t,e,t.helpers,t.partials,r.data||i,n&&[r.blockParams].concat(n),a&&[e].concat(a))}return o.program=e,o.depth=a?a.length:0,o.blockParams=r||0,o}function a(t,e,s){return t?t.call||s.name||(s.name=t,t=s.partials[t]):t=s.partials[s.name],t}function o(t,e,s){if(s.partial=!0,void 0===t)throw new m["default"]("The partial "+s.name+" could not be found");return t instanceof Function?t(e,s):void 0}function h(){return""}function c(t,e){return e&&"root"in e||(e=e?g.createFrame(e):{},e.root=t),e}var l=s(9)["default"],p=s(8)["default"];e.__esModule=!0,e.checkRevision=i,e.template=r,e.wrapProgram=n,e.resolvePartial=a,e.invokePartial=o,e.noop=h;var u=s(13),f=l(u),d=s(12),m=p(d),g=s(10)},function(t,e){"use strict";e.__esModule=!0;var s=function(){function t(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,content:12,COMMENT:13,CONTENT:14,openRawBlock:15,END_RAW_BLOCK:16,OPEN_RAW_BLOCK:17,helperName:18,openRawBlock_repetition0:19,openRawBlock_option0:20,CLOSE_RAW_BLOCK:21,openBlock:22,block_option0:23,closeBlock:24,openInverse:25,block_option1:26,OPEN_BLOCK:27,openBlock_repetition0:28,openBlock_option0:29,openBlock_option1:30,CLOSE:31,OPEN_INVERSE:32,openInverse_repetition0:33,openInverse_option0:34,openInverse_option1:35,openInverseChain:36,OPEN_INVERSE_CHAIN:37,openInverseChain_repetition0:38,openInverseChain_option0:39,openInverseChain_option1:40,inverseAndProgram:41,INVERSE:42,inverseChain:43,inverseChain_option0:44,OPEN_ENDBLOCK:45,OPEN:46,mustache_repetition0:47,mustache_option0:48,OPEN_UNESCAPED:49,mustache_repetition1:50,mustache_option1:51,CLOSE_UNESCAPED:52,OPEN_PARTIAL:53,partialName:54,partial_repetition0:55,partial_option0:56,param:57,sexpr:58,OPEN_SEXPR:59,sexpr_repetition0:60,sexpr_option0:61,CLOSE_SEXPR:62,hash:63,hash_repetition_plus0:64,hashSegment:65,ID:66,EQUALS:67,blockParams:68,OPEN_BLOCK_PARAMS:69,blockParams_repetition_plus0:70,CLOSE_BLOCK_PARAMS:71,path:72,dataName:73,STRING:74,NUMBER:75,BOOLEAN:76,UNDEFINED:77,NULL:78,DATA:79,pathSegments:80,SEP:81,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",13:"COMMENT",14:"CONTENT",16:"END_RAW_BLOCK",17:"OPEN_RAW_BLOCK",21:"CLOSE_RAW_BLOCK",27:"OPEN_BLOCK",31:"CLOSE",32:"OPEN_INVERSE",37:"OPEN_INVERSE_CHAIN",42:"INVERSE",45:"OPEN_ENDBLOCK",46:"OPEN",49:"OPEN_UNESCAPED",52:"CLOSE_UNESCAPED",53:"OPEN_PARTIAL",59:"OPEN_SEXPR",62:"CLOSE_SEXPR",66:"ID",67:"EQUALS",69:"OPEN_BLOCK_PARAMS",71:"CLOSE_BLOCK_PARAMS",74:"STRING",75:"NUMBER",76:"BOOLEAN",77:"UNDEFINED",78:"NULL",79:"DATA",81:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[12,1],[10,3],[15,5],[9,4],[9,4],[22,6],[25,6],[36,6],[41,2],[43,3],[43,1],[24,3],[8,5],[8,5],[11,5],[57,1],[57,1],[58,5],[63,1],[65,3],[68,3],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[18,1],[54,1],[54,1],[73,2],[72,1],[80,3],[80,1],[6,0],[6,2],[19,0],[19,2],[20,0],[20,1],[23,0],[23,1],[26,0],[26,1],[28,0],[28,2],[29,0],[29,1],[30,0],[30,1],[33,0],[33,2],[34,0],[34,1],[35,0],[35,1],[38,0],[38,2],[39,0],[39,1],[40,0],[40,1],[44,0],[44,1],[47,0],[47,2],[48,0],[48,1],[50,0],[50,2],[51,0],[51,1],[55,0],[55,2],[56,0],[56,1],[60,0],[60,2],[61,0],[61,1],[64,1],[64,2],[70,1],[70,2]],performAction:function(t,e,s,i,r,n){var a=n.length-1;switch(r){case 1:return n[a-1];case 2:this.$=new i.Program(n[a],null,{},i.locInfo(this._$));break;case 3:this.$=n[a];break;case 4:this.$=n[a];break;case 5:this.$=n[a];break;case 6:this.$=n[a];break;case 7:this.$=n[a];break;case 8:this.$=new i.CommentStatement(i.stripComment(n[a]),i.stripFlags(n[a],n[a]),i.locInfo(this._$));break;case 9:this.$=new i.ContentStatement(n[a],i.locInfo(this._$));break;case 10:this.$=i.prepareRawBlock(n[a-2],n[a-1],n[a],this._$);break;case 11:this.$={path:n[a-3],params:n[a-2],hash:n[a-1]};break;case 12:this.$=i.prepareBlock(n[a-3],n[a-2],n[a-1],n[a],!1,this._$);break;case 13:this.$=i.prepareBlock(n[a-3],n[a-2],n[a-1],n[a],!0,this._$);break;case 14:this.$={path:n[a-4],params:n[a-3],hash:n[a-2],blockParams:n[a-1],strip:i.stripFlags(n[a-5],n[a])};break;case 15:this.$={path:n[a-4],params:n[a-3],hash:n[a-2],blockParams:n[a-1],strip:i.stripFlags(n[a-5],n[a])};break;case 16:this.$={path:n[a-4],params:n[a-3],hash:n[a-2],blockParams:n[a-1],strip:i.stripFlags(n[a-5],n[a])};break;case 17:this.$={strip:i.stripFlags(n[a-1],n[a-1]),program:n[a]};break;case 18:var o=i.prepareBlock(n[a-2],n[a-1],n[a],n[a],!1,this._$),h=new i.Program([o],null,{},i.locInfo(this._$));h.chained=!0,this.$={strip:n[a-2].strip,program:h,chain:!0};break;case 19:this.$=n[a];break;case 20:this.$={path:n[a-1],strip:i.stripFlags(n[a-2],n[a])};break;case 21:this.$=i.prepareMustache(n[a-3],n[a-2],n[a-1],n[a-4],i.stripFlags(n[a-4],n[a]),this._$);break;case 22:this.$=i.prepareMustache(n[a-3],n[a-2],n[a-1],n[a-4],i.stripFlags(n[a-4],n[a]),this._$);break;case 23:this.$=new i.PartialStatement(n[a-3],n[a-2],n[a-1],i.stripFlags(n[a-4],n[a]),i.locInfo(this._$));break;case 24:this.$=n[a];break;case 25:this.$=n[a];break;case 26:this.$=new i.SubExpression(n[a-3],n[a-2],n[a-1],i.locInfo(this._$));break;case 27:this.$=new i.Hash(n[a],i.locInfo(this._$));break;case 28:this.$=new i.HashPair(i.id(n[a-2]),n[a],i.locInfo(this._$));break;case 29:this.$=i.id(n[a-1]);break;case 30:this.$=n[a];break;case 31:this.$=n[a];break;case 32:this.$=new i.StringLiteral(n[a],i.locInfo(this._$));break;case 33:this.$=new i.NumberLiteral(n[a],i.locInfo(this._$));break;case 34:this.$=new i.BooleanLiteral(n[a],i.locInfo(this._$));break;case 35:this.$=new i.UndefinedLiteral(i.locInfo(this._$));break;case 36:this.$=new i.NullLiteral(i.locInfo(this._$));break;case 37:this.$=n[a];break;case 38:this.$=n[a];break;case 39:this.$=i.preparePath(!0,n[a],this._$);break;case 40:this.$=i.preparePath(!1,n[a],this._$);break;case 41:n[a-2].push({part:i.id(n[a]),original:n[a],separator:n[a-1]}),this.$=n[a-2];break;case 42:this.$=[{part:i.id(n[a]),original:n[a]}];break;case 43:this.$=[];break;case 44:n[a-1].push(n[a]);break;case 45:this.$=[];break;case 46:n[a-1].push(n[a]);break;case 53:this.$=[];break;case 54:n[a-1].push(n[a]);break;case 59:this.$=[];break;case 60:n[a-1].push(n[a]);break;case 65:this.$=[];break;case 66:n[a-1].push(n[a]);break;case 73:this.$=[];break;case 74:n[a-1].push(n[a]);break;case 77:this.$=[];break;case 78:n[a-1].push(n[a]);break;case 81:this.$=[];break;case 82:n[a-1].push(n[a]);break;case 85:this.$=[];break;case 86:n[a-1].push(n[a]);break;case 89:this.$=[n[a]];break;case 90:n[a-1].push(n[a]);break;case 91:this.$=[n[a]];break;case 92:n[a-1].push(n[a])}},table:[{3:1,4:2,5:[2,43],6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],46:[2,43],49:[2,43],53:[2,43]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:[1,11],14:[1,18],15:16,17:[1,21],22:14,25:15,27:[1,19],32:[1,20],37:[2,2],42:[2,2],45:[2,2],46:[1,12],49:[1,13],53:[1,17]},{1:[2,1]},{5:[2,44],13:[2,44],14:[2,44],17:[2,44],27:[2,44],32:[2,44],37:[2,44],42:[2,44],45:[2,44],46:[2,44],49:[2,44],53:[2,44]},{5:[2,3],13:[2,3],14:[2,3],17:[2,3],27:[2,3],32:[2,3],37:[2,3],42:[2,3],45:[2,3],46:[2,3],49:[2,3],53:[2,3]},{5:[2,4],13:[2,4],14:[2,4],17:[2,4],27:[2,4],32:[2,4],37:[2,4],42:[2,4],45:[2,4],46:[2,4],49:[2,4],53:[2,4]},{5:[2,5],13:[2,5],14:[2,5],17:[2,5],27:[2,5],32:[2,5],37:[2,5],42:[2,5],45:[2,5],46:[2,5],49:[2,5],53:[2,5]},{5:[2,6],13:[2,6],14:[2,6],17:[2,6],27:[2,6],32:[2,6],37:[2,6],42:[2,6],45:[2,6],46:[2,6],49:[2,6],53:[2,6]},{5:[2,7],13:[2,7],14:[2,7],17:[2,7],27:[2,7],32:[2,7],37:[2,7],42:[2,7],45:[2,7],46:[2,7],49:[2,7],53:[2,7]},{5:[2,8],13:[2,8],14:[2,8],17:[2,8],27:[2,8],32:[2,8],37:[2,8],42:[2,8],45:[2,8],46:[2,8],49:[2,8],53:[2,8]},{18:22,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:33,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{4:34,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],37:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{4:35,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{12:36,14:[1,18]},{18:38,54:37,58:39,59:[1,40],66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],27:[2,9],32:[2,9],37:[2,9],42:[2,9],45:[2,9],46:[2,9],49:[2,9],53:[2,9]},{18:41,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:42,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:43,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{31:[2,73],47:44,59:[2,73],66:[2,73],74:[2,73],75:[2,73],76:[2,73],77:[2,73],78:[2,73],79:[2,73]},{21:[2,30],31:[2,30],52:[2,30],59:[2,30],62:[2,30],66:[2,30],69:[2,30],74:[2,30],75:[2,30],76:[2,30],77:[2,30],78:[2,30],79:[2,30]},{21:[2,31],31:[2,31],52:[2,31],59:[2,31],62:[2,31],66:[2,31],69:[2,31],74:[2,31],75:[2,31],76:[2,31],77:[2,31],78:[2,31],79:[2,31]},{21:[2,32],31:[2,32],52:[2,32],59:[2,32],62:[2,32],66:[2,32],69:[2,32],74:[2,32],75:[2,32],76:[2,32],77:[2,32],78:[2,32],79:[2,32]},{21:[2,33],31:[2,33],52:[2,33],59:[2,33],62:[2,33],66:[2,33],69:[2,33],74:[2,33],75:[2,33],76:[2,33],77:[2,33],78:[2,33],79:[2,33]},{21:[2,34],31:[2,34],52:[2,34],59:[2,34],62:[2,34],66:[2,34],69:[2,34],74:[2,34],75:[2,34],76:[2,34],77:[2,34],78:[2,34],79:[2,34]},{21:[2,35],31:[2,35],52:[2,35],59:[2,35],62:[2,35],66:[2,35],69:[2,35],74:[2,35],75:[2,35],76:[2,35],77:[2,35],78:[2,35],79:[2,35]},{21:[2,36],31:[2,36],52:[2,36],59:[2,36],62:[2,36],66:[2,36],69:[2,36],74:[2,36],75:[2,36],76:[2,36],77:[2,36],78:[2,36],79:[2,36]},{21:[2,40],31:[2,40],52:[2,40],59:[2,40],62:[2,40],66:[2,40],69:[2,40],74:[2,40],75:[2,40],76:[2,40],77:[2,40],78:[2,40],79:[2,40],81:[1,45]},{66:[1,32],80:46},{21:[2,42],31:[2,42],52:[2,42],59:[2,42],62:[2,42],66:[2,42],69:[2,42],74:[2,42],75:[2,42],76:[2,42],77:[2,42],78:[2,42],79:[2,42],81:[2,42]},{50:47,52:[2,77],59:[2,77],66:[2,77],74:[2,77],75:[2,77],76:[2,77],77:[2,77],78:[2,77],79:[2,77]},{23:48,36:50,37:[1,52],41:51,42:[1,53],43:49,45:[2,49]},{26:54,41:55,42:[1,53],45:[2,51]},{16:[1,56]},{31:[2,81],55:57,59:[2,81],66:[2,81],74:[2,81],75:[2,81],76:[2,81],77:[2,81],78:[2,81],79:[2,81]},{31:[2,37],59:[2,37],66:[2,37],74:[2,37],75:[2,37],76:[2,37],77:[2,37],78:[2,37],79:[2,37]},{31:[2,38],59:[2,38],66:[2,38],74:[2,38],75:[2,38],76:[2,38],77:[2,38],78:[2,38],79:[2,38]},{18:58,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{28:59,31:[2,53],59:[2,53],66:[2,53],69:[2,53],74:[2,53],75:[2,53],76:[2,53],77:[2,53],78:[2,53],79:[2,53]},{31:[2,59],33:60,59:[2,59],66:[2,59],69:[2,59],74:[2,59],75:[2,59],76:[2,59],77:[2,59],78:[2,59],79:[2,59]},{19:61,21:[2,45],59:[2,45],66:[2,45],74:[2,45],75:[2,45],76:[2,45],77:[2,45],78:[2,45],79:[2,45]},{18:65,31:[2,75],48:62,57:63,58:66,59:[1,40],63:64,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{66:[1,70]},{21:[2,39],31:[2,39],52:[2,39],59:[2,39],62:[2,39],66:[2,39],69:[2,39],74:[2,39],75:[2,39],76:[2,39],77:[2,39],78:[2,39],79:[2,39],81:[1,45]},{18:65,51:71,52:[2,79],57:72,58:66,59:[1,40],63:73,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{24:74,45:[1,75]},{45:[2,50]},{4:76,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],37:[2,43],42:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{45:[2,19]},{18:77,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{4:78,6:3,13:[2,43],14:[2,43],17:[2,43],27:[2,43],32:[2,43],45:[2,43],46:[2,43],49:[2,43],53:[2,43]},{24:79,45:[1,75]},{45:[2,52]},{5:[2,10],13:[2,10],14:[2,10],17:[2,10],27:[2,10],32:[2,10],37:[2,10],42:[2,10],45:[2,10],46:[2,10],49:[2,10],53:[2,10]},{18:65,31:[2,83],56:80,57:81,58:66,59:[1,40],63:82,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{59:[2,85],60:83,62:[2,85],66:[2,85],74:[2,85],75:[2,85],76:[2,85],77:[2,85],78:[2,85],79:[2,85]},{18:65,29:84,31:[2,55],57:85,58:66,59:[1,40],63:86,64:67,65:68,66:[1,69],69:[2,55],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:65,31:[2,61],34:87,57:88,58:66,59:[1,40],63:89,64:67,65:68,66:[1,69],69:[2,61],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{18:65,20:90,21:[2,47],57:91,58:66,59:[1,40],63:92,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{31:[1,93]},{31:[2,74],59:[2,74],66:[2,74],74:[2,74],75:[2,74],76:[2,74],77:[2,74],78:[2,74],79:[2,74]},{31:[2,76]},{21:[2,24],31:[2,24],52:[2,24],59:[2,24],62:[2,24],66:[2,24],69:[2,24],74:[2,24],75:[2,24],76:[2,24],77:[2,24],78:[2,24],79:[2,24]},{21:[2,25],31:[2,25],52:[2,25],59:[2,25],62:[2,25],66:[2,25],69:[2,25],74:[2,25],75:[2,25],76:[2,25],77:[2,25],78:[2,25],79:[2,25]},{21:[2,27],31:[2,27],52:[2,27],62:[2,27],65:94,66:[1,95],69:[2,27]},{21:[2,89],31:[2,89],52:[2,89],62:[2,89],66:[2,89],69:[2,89]},{21:[2,42],31:[2,42],52:[2,42],59:[2,42],62:[2,42],66:[2,42],67:[1,96],69:[2,42],74:[2,42],75:[2,42],76:[2,42],77:[2,42],78:[2,42],79:[2,42],81:[2,42]},{21:[2,41],31:[2,41],52:[2,41],59:[2,41],62:[2,41],66:[2,41],69:[2,41],74:[2,41],75:[2,41],76:[2,41],77:[2,41],78:[2,41],79:[2,41],81:[2,41]},{52:[1,97]},{52:[2,78],59:[2,78],66:[2,78],74:[2,78],75:[2,78],76:[2,78],77:[2,78],78:[2,78],79:[2,78]},{52:[2,80]},{5:[2,12],13:[2,12],14:[2,12],17:[2,12],27:[2,12],32:[2,12],37:[2,12],42:[2,12],45:[2,12],46:[2,12],49:[2,12],53:[2,12]},{18:98,66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{36:50,37:[1,52],41:51,42:[1,53],43:100,44:99,45:[2,71]},{31:[2,65],38:101,59:[2,65],66:[2,65],69:[2,65],74:[2,65],75:[2,65],76:[2,65],77:[2,65],78:[2,65],79:[2,65]},{45:[2,17]},{5:[2,13],13:[2,13],14:[2,13],17:[2,13],27:[2,13],32:[2,13],37:[2,13],42:[2,13],45:[2,13],46:[2,13],49:[2,13],53:[2,13]},{31:[1,102]},{31:[2,82],59:[2,82],66:[2,82],74:[2,82],75:[2,82],76:[2,82],77:[2,82],78:[2,82],79:[2,82]},{31:[2,84]},{18:65,57:104,58:66,59:[1,40],61:103,62:[2,87],63:105,64:67,65:68,66:[1,69],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{30:106,31:[2,57],68:107,69:[1,108]},{31:[2,54],59:[2,54],66:[2,54],69:[2,54],74:[2,54],75:[2,54],76:[2,54],77:[2,54],78:[2,54],79:[2,54]},{31:[2,56],69:[2,56]},{31:[2,63],35:109,68:110,69:[1,108]},{31:[2,60],59:[2,60],66:[2,60],69:[2,60],74:[2,60],75:[2,60],76:[2,60],77:[2,60],78:[2,60],79:[2,60]},{31:[2,62],69:[2,62]},{21:[1,111]},{21:[2,46],59:[2,46],66:[2,46],74:[2,46],75:[2,46],76:[2,46],77:[2,46],78:[2,46],79:[2,46]},{21:[2,48]},{5:[2,21],13:[2,21],14:[2,21],17:[2,21],27:[2,21],32:[2,21],37:[2,21],42:[2,21],45:[2,21],46:[2,21],49:[2,21],53:[2,21]},{21:[2,90],31:[2,90],52:[2,90],62:[2,90],66:[2,90],69:[2,90]},{67:[1,96]},{18:65,57:112,58:66,59:[1,40],66:[1,32],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,22],13:[2,22],14:[2,22],17:[2,22],27:[2,22],32:[2,22],37:[2,22],42:[2,22],45:[2,22],46:[2,22],49:[2,22],53:[2,22]},{31:[1,113]},{45:[2,18]},{45:[2,72]},{18:65,31:[2,67],39:114,57:115,58:66,59:[1,40],63:116,64:67,65:68,66:[1,69],69:[2,67],72:23,73:24,74:[1,25],75:[1,26],76:[1,27],77:[1,28],78:[1,29],79:[1,31],80:30},{5:[2,23],13:[2,23],14:[2,23],17:[2,23],27:[2,23],32:[2,23],37:[2,23],42:[2,23],45:[2,23],46:[2,23],49:[2,23],53:[2,23]},{62:[1,117]},{59:[2,86],62:[2,86],66:[2,86],74:[2,86],75:[2,86],76:[2,86],77:[2,86],78:[2,86],79:[2,86]},{62:[2,88]},{31:[1,118]},{31:[2,58]},{66:[1,120],70:119},{31:[1,121]},{31:[2,64]},{14:[2,11]},{21:[2,28],31:[2,28],52:[2,28],62:[2,28],66:[2,28],69:[2,28]},{5:[2,20],13:[2,20],14:[2,20],17:[2,20],27:[2,20],32:[2,20],37:[2,20],42:[2,20],45:[2,20],46:[2,20],49:[2,20],53:[2,20]},{31:[2,69],40:122,68:123,69:[1,108]},{31:[2,66],59:[2,66],66:[2,66],69:[2,66],74:[2,66],75:[2,66],76:[2,66],77:[2,66],78:[2,66],79:[2,66]},{31:[2,68],69:[2,68]},{21:[2,26],31:[2,26],52:[2,26],59:[2,26],62:[2,26],66:[2,26],69:[2,26],74:[2,26],75:[2,26],76:[2,26],77:[2,26],78:[2,26],79:[2,26]},{13:[2,14],14:[2,14],17:[2,14],27:[2,14],32:[2,14],37:[2,14],42:[2,14],45:[2,14],46:[2,14],49:[2,14],53:[2,14]},{66:[1,125],71:[1,124]},{66:[2,91],71:[2,91]},{13:[2,15],14:[2,15],17:[2,15],27:[2,15],32:[2,15],42:[2,15],45:[2,15],46:[2,15],49:[2,15],53:[2,15]},{31:[1,126]},{31:[2,70]},{31:[2,29]},{66:[2,92],71:[2,92]},{13:[2,16],14:[2,16],17:[2,16],27:[2,16],32:[2,16],37:[2,16],42:[2,16],45:[2,16],46:[2,16],49:[2,16],53:[2,16]}],defaultActions:{4:[2,1],49:[2,50],51:[2,19],55:[2,52],64:[2,76],73:[2,80],78:[2,17],82:[2,84],92:[2,48],99:[2,18],100:[2,72],105:[2,88],107:[2,58],110:[2,64],111:[2,11],123:[2,70],124:[2,29]},parseError:function(t){throw new Error(t)},parse:function(t){function e(){var t;return t=s.lexer.lex()||1,"number"!=typeof t&&(t=s.symbols_[t]||t),t}var s=this,i=[0],r=[null],n=[],a=this.table,o="",h=0,c=0,l=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var p=this.lexer.yylloc;n.push(p);var u=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var f,d,m,g,v,y,k,S,b,P={};;){if(m=i[i.length-1],this.defaultActions[m]?g=this.defaultActions[m]:((null===f||"undefined"==typeof f)&&(f=e()),g=a[m]&&a[m][f]),"undefined"==typeof g||!g.length||!g[0]){var _="";if(!l){b=[];for(y in a[m])this.terminals_[y]&&y>2&&b.push("'"+this.terminals_[y]+"'");_=this.lexer.showPosition?"Parse error on line "+(h+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(h+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(_,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:p,expected:b})}}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+f);switch(g[0]){case 1:i.push(f),r.push(this.lexer.yytext),n.push(this.lexer.yylloc),i.push(g[1]),f=null,d?(f=d,d=null):(c=this.lexer.yyleng,o=this.lexer.yytext,h=this.lexer.yylineno,p=this.lexer.yylloc,l>0&&l--);break;case 2:if(k=this.productions_[g[1]][1],P.$=r[r.length-k],P._$={first_line:n[n.length-(k||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(k||1)].first_column,last_column:n[n.length-1].last_column},u&&(P._$.range=[n[n.length-(k||1)].range[0],n[n.length-1].range[1]]),v=this.performAction.call(P,o,c,h,this.yy,g[1],r,n),"undefined"!=typeof v)return v;k&&(i=i.slice(0,-1*k*2),r=r.slice(0,-1*k),n=n.slice(0,-1*k)),i.push(this.productions_[g[1]][0]),r.push(P.$),n.push(P._$),S=a[i[i.length-2]][i[i.length-1]],i.push(S);break;case 3:return!0}}return!0}},s=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e-1),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this},more:function(){return this._more=!0,this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,s,i,r;this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),a=0;a<n.length&&(s=this._input.match(this.rules[n[a]]),!s||e&&!(s[0].length>e[0].length)||(e=s,i=a,this.options.flex));a++);return e?(r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],t=this.performAction.call(this,this.yy,this,n[i],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),t?t:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return"undefined"!=typeof t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};return t.options={},t.performAction=function(t,e,s,i){function r(t,s){return e.yytext=e.yytext.substr(t,e.yyleng-s)}switch(s){case 0:if("\\\\"===e.yytext.slice(-2)?(r(0,1),this.begin("mu")):"\\"===e.yytext.slice(-1)?(r(0,1),this.begin("emu")):this.begin("mu"),e.yytext)return 14;break;case 1:return 14;case 2:return this.popState(),14;case 3:return e.yytext=e.yytext.substr(5,e.yyleng-9),this.popState(),16;case 4:return 14;case 5:return this.popState(),13;case 6:return 59;case 7:return 62;case 8:return 17;case 9:return this.popState(),this.begin("raw"),21;case 10:return 53;case 11:return 27;case 12:return 45;case 13:return this.popState(),42;case 14:return this.popState(),42;case 15:return 32;case 16:return 37;case 17:return 49;case 18:return 46;case 19:this.unput(e.yytext),this.popState(),this.begin("com");break;case 20:return this.popState(),13;case 21:return 46;case 22:return 67;case 23:return 66;case 24:return 66;case 25:return 81;case 26:break;case 27:return this.popState(),52;case 28:return this.popState(),31;case 29:return e.yytext=r(1,2).replace(/\\"/g,'"'),74;case 30:return e.yytext=r(1,2).replace(/\\'/g,"'"),74;case 31:return 79;case 32:return 76;case 33:return 76;case 34:return 77;case 35:return 78;case 36:return 75;case 37:return 69;case 38:return 71;case 39:return 66;case 40:return 66;case 41:return"INVALID";case 42:return 5}},t.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],t.conditions={mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,42],inclusive:!0}},t}();return e.lexer=s,t.prototype=e,e.Parser=t,new t}();e["default"]=s,t.exports=e["default"]},function(t,e,s){"use strict";function i(){}function r(t,e,s){void 0===e&&(e=t.length);var i=t[e-1],r=t[e-2];return i?"ContentStatement"===i.type?(r||!s?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(i.original):void 0:s}function n(t,e,s){void 0===e&&(e=-1);var i=t[e+1],r=t[e+2];return i?"ContentStatement"===i.type?(r||!s?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(i.original):void 0:s}function a(t,e,s){var i=t[null==e?0:e+1];if(i&&"ContentStatement"===i.type&&(s||!i.rightStripped)){var r=i.value;i.value=i.value.replace(s?/^\s+/:/^[ \t]*\r?\n?/,""),i.rightStripped=i.value!==r}}function o(t,e,s){var i=t[null==e?t.length-1:e-1];if(i&&"ContentStatement"===i.type&&(s||!i.leftStripped)){var r=i.value;return i.value=i.value.replace(s?/\s+$/:/[ \t]+$/,""),i.leftStripped=i.value!==r,i.leftStripped}}var h=s(8)["default"];e.__esModule=!0;var c=s(6),l=h(c);i.prototype=new l["default"],i.prototype.Program=function(t){var e=!this.isRootSeen;this.isRootSeen=!0;for(var s=t.body,i=0,h=s.length;h>i;i++){var c=s[i],l=this.accept(c);if(l){var p=r(s,i,e),u=n(s,i,e),f=l.openStandalone&&p,d=l.closeStandalone&&u,m=l.inlineStandalone&&p&&u;l.close&&a(s,i,!0),l.open&&o(s,i,!0),m&&(a(s,i),o(s,i)&&"PartialStatement"===c.type&&(c.indent=/([ \t]+$)/.exec(s[i-1].original)[1])),f&&(a((c.program||c.inverse).body),o(s,i)),d&&(a(s,i),o((c.inverse||c.program).body))}}return t},i.prototype.BlockStatement=function(t){this.accept(t.program),this.accept(t.inverse);var e=t.program||t.inverse,s=t.program&&t.inverse,i=s,h=s;if(s&&s.chained)for(i=s.body[0].program;h.chained;)h=h.body[h.body.length-1].program;var c={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:n(e.body),closeStandalone:r((i||e).body)};if(t.openStrip.close&&a(e.body,null,!0),s){var l=t.inverseStrip;l.open&&o(e.body,null,!0),l.close&&a(i.body,null,!0),t.closeStrip.open&&o(h.body,null,!0),r(e.body)&&n(i.body)&&(o(e.body),a(i.body))}else t.closeStrip.open&&o(e.body,null,!0);return c},i.prototype.MustacheStatement=function(t){return t.strip},i.prototype.PartialStatement=i.prototype.CommentStatement=function(t){var e=t.strip||{};return{inlineStandalone:!0,open:e.open,close:e.close}},e["default"]=i,t.exports=e["default"]},function(t,e,s){"use strict";function i(t,e){this.source=t,this.start={line:e.first_line,column:e.first_column},this.end={line:e.last_line,column:e.last_column}}function r(t){return/^\[.*\]$/.test(t)?t.substr(1,t.length-2):t}function n(t,e){return{open:"~"===t.charAt(2),close:"~"===e.charAt(e.length-3)}}function a(t){return t.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function o(t,e,s){s=this.locInfo(s);for(var i=t?"@":"",r=[],n=0,a="",o=0,h=e.length;h>o;o++){var c=e[o].part,l=e[o].original!==c;if(i+=(e[o].separator||"")+c,l||".."!==c&&"."!==c&&"this"!==c)r.push(c);else{if(r.length>0)throw new f["default"]("Invalid path: "+i,{loc:s});".."===c&&(n++,a+="../")}}return new this.PathExpression(t,n,r,i,s)}function h(t,e,s,i,r,n){var a=i.charAt(3)||i.charAt(2),o="{"!==a&&"&"!==a;return new this.MustacheStatement(t,e,s,o,r,this.locInfo(n))}function c(t,e,s,i){if(t.path.original!==s){var r={loc:t.path.loc};throw new f["default"](t.path.original+" doesn't match "+s,r)}i=this.locInfo(i);var n=new this.Program([e],null,{},i);return new this.BlockStatement(t.path,t.params,t.hash,n,void 0,{},{},{},i)}function l(t,e,s,i,r,n){if(i&&i.path&&t.path.original!==i.path.original){var a={loc:t.path.loc};throw new f["default"](t.path.original+" doesn't match "+i.path.original,a)}e.blockParams=t.blockParams;var o=void 0,h=void 0;return s&&(s.chain&&(s.program.body[0].closeStrip=i.strip),h=s.strip,o=s.program),r&&(r=o,o=e,e=r),new this.BlockStatement(t.path,t.params,t.hash,e,o,t.strip,h,i&&i.strip,this.locInfo(n))}var p=s(8)["default"];e.__esModule=!0,e.SourceLocation=i,e.id=r,e.stripFlags=n,e.stripComment=a,e.preparePath=o,e.prepareMustache=h,e.prepareRawBlock=c,e.prepareBlock=l;var u=s(12),f=p(u)},function(t,e,s){"use strict";function i(t,e,s){if(n.isArray(t)){for(var i=[],r=0,a=t.length;a>r;r++)i.push(e.wrap(t[r],s));return i}return"boolean"==typeof t||"number"==typeof t?t+"":t}function r(t){this.srcFile=t,this.source=[]}e.__esModule=!0;var n=s(13),a=void 0;try{}catch(o){}a||(a=function(t,e,s,i){this.src="",i&&this.add(i)},a.prototype={add:function(t){n.isArray(t)&&(t=t.join("")),this.src+=t},prepend:function(t){n.isArray(t)&&(t=t.join("")),this.src=t+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),r.prototype={prepend:function(t,e){this.source.unshift(this.wrap(t,e))},push:function(t,e){this.source.push(this.wrap(t,e))},merge:function(){var t=this.empty();return this.each(function(e){t.add(["  ",e,"\n"])}),t},each:function(t){for(var e=0,s=this.source.length;s>e;e++)t(this.source[e])},empty:function(){var t=void 0===arguments[0]?this.currentLocation||{start:{}}:arguments[0];return new a(t.start.line,t.start.column,this.srcFile)},wrap:function(t){var e=void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return t instanceof a?t:(t=i(t,this,e),new a(e.start.line,e.start.column,this.srcFile,t))},functionCall:function(t,e,s){return s=this.generateList(s),this.wrap([t,e?"."+e+"(":"(",s,")"])},quotedString:function(t){return'"'+(t+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},objectLiteral:function(t){var e=[];for(var s in t)if(t.hasOwnProperty(s)){var r=i(t[s],this);"undefined"!==r&&e.push([this.quotedString(s),":",r])}var n=this.generateList(e);return n.prepend("{"),n.add("}"),n},generateList:function(t,e){for(var s=this.empty(e),r=0,n=t.length;n>r;r++)r&&s.add(","),s.add(i(t[r],this,e));return s},generateArray:function(t,e){var s=this.generateList(t,e);return s.prepend("["),s.add("]"),s}},e["default"]=r,t.exports=e["default"]}])});

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
        
    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});
'use strict';

/* ===================================================================================== @preserve =
 ___  _   _    _
/   || | | |  | |
\__  | | | |  | |  __
/    |/  |/_) |/  /  \_/\/
\___/|__/| \_/|__/\__/  /\_/
              |\
              |/
Ajaxinate
version v2.0.11
https://github.com/Elkfox/Ajaxinate
Copyright (c) 2017 Elkfox Co Pty Ltd
https://elkfox.com
MIT License
================================================================================================= */

var Ajaxinate = function ajaxinateConstructor(config) {
  var settings = config || {};
  /*
    pagination: Selector of pagination container
    method: [options are 'scroll', 'click']
    container: Selector of repeating content
    offset: 0, offset the number of pixels before the bottom to start loading more on scroll
    loadingText: 'Loading', The text changed during loading
    callback: null, function to callback after a new page is loaded
  */
  var defaultSettings = {
    pagination: '.AjaxinatePagination',
    method: 'scroll',
    container: '.AjaxinateLoop',
    offset: 0,
    loadingText: '<div class="loader"><div class="loader-indeterminate"></div></div>',
    callback: null,
    callbackBefore: null
  };
  // Merge configs
  this.settings = Object.assign(defaultSettings, settings);

  // Bind 'this' to applicable prototype functions
  this.addScrollListeners = this.addScrollListeners.bind(this);
  this.addClickListener = this.addClickListener.bind(this);
  this.checkIfPaginationInView = this.checkIfPaginationInView.bind(this);
  this.stopMultipleClicks = this.stopMultipleClicks.bind(this);
  this.destroy = this.destroy.bind(this);

  // Set up our element selectors
  this.containerElement = document.querySelector(this.settings.container);
  this.paginationElement = document.querySelector(this.settings.pagination);

  this.initialize();
};

Ajaxinate.prototype.initialize = function initializeTheCorrectFunctionsBasedOnTheMethod() {
  // Find and initialise the correct function based on the method set in the config
  if (this.containerElement) {
    var initializers = {
      click: this.addClickListener,
      scroll: this.addScrollListeners
    };
    initializers[this.settings.method]();
  }
};

Ajaxinate.prototype.addScrollListeners = function addEventListenersForScrolling() {
  if (this.paginationElement) {
    document.addEventListener('scroll', this.checkIfPaginationInView);
    window.addEventListener('resize', this.checkIfPaginationInView);
    window.addEventListener('orientationchange', this.checkIfPaginationInView);
  }
};

Ajaxinate.prototype.addClickListener = function addEventListenerForClicking() {
  if (this.paginationElement) {
    this.nextPageLinkElement = this.paginationElement.querySelector('a');
    this.clickActive = true;
    if (this.nextPageLinkElement !== null) {
      this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
    }
  }
};

Ajaxinate.prototype.stopMultipleClicks = function handleClickEvent(event) {
  event.preventDefault();
  if (this.clickActive) {
    this.nextPageLinkElement.innerHTML = this.settings.loadingText;
    this.nextPageUrl = this.nextPageLinkElement.href;
    this.clickActive = false;
    this.loadMore();
  }
};

Ajaxinate.prototype.checkIfPaginationInView = function handleScrollEvent() {
  var top = this.paginationElement.getBoundingClientRect().top - this.settings.offset;
  var bottom = this.paginationElement.getBoundingClientRect().bottom + this.settings.offset;
  if (top <= window.innerHeight && bottom >= 0) {
    this.nextPageLinkElement = this.paginationElement.querySelector('a');
    this.removeScrollListener();
    if (this.nextPageLinkElement) {
      this.nextPageLinkElement.innerHTML = this.settings.loadingText;
      this.nextPageUrl = this.nextPageLinkElement.href;
      this.loadMore();
    }
  }
};

Ajaxinate.prototype.loadMore = function getTheHtmlOfTheNextPageWithAnAjaxRequest() {
  this.request = new XMLHttpRequest();
  this.request.onreadystatechange = function success() {
    if (this.request.readyState === 4 && this.request.status === 200) {
      var requestHTML = new DOMParser().parseFromString(this.request.response, "text/html");
      var newContainer = requestHTML.querySelectorAll(this.settings.container)[0];
      var newPagination = requestHTML.querySelectorAll(this.settings.pagination)[0];

      if (this.settings.callbackBefore && typeof this.settings.callbackBefore === 'function') {
        this.settings.callbackBefore(requestHTML);
      }
      this.containerElement.insertAdjacentHTML('beforeend', newContainer.innerHTML);
      this.paginationElement.innerHTML = newPagination.innerHTML;
      if (this.settings.callback && typeof this.settings.callback === 'function') {
        this.settings.callback(requestHTML);
      }
      this.initialize();
    }
  }.bind(this);
  this.request.open('GET', this.nextPageUrl);
  this.request.send();
};

Ajaxinate.prototype.removeClickListener = function removeClickEventListener() {
  this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
};

Ajaxinate.prototype.removeScrollListener = function removeScrollEventListener() {
  document.removeEventListener('scroll', this.checkIfPaginationInView);
  window.removeEventListener('resize', this.checkIfPaginationInView);
  window.removeEventListener('orientationchange', this.checkIfPaginationInView);
};

Ajaxinate.prototype.destroy = function removeEventListenersAndReturnThis() {
  // This method is used to unbind event listeners from the DOM
  // This function is called manually to destroy "this" Ajaxinate instance
  var destroyers = {
    click: this.removeClickListener,
    scroll: this.removeScrollListener
  };
  destroyers[this.settings.method]();
  return this;
};

/*================ Slate ================*/
/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {

  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element.first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element.first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function() {
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function() {
    $('a[href*=#]').on('click', function(evt) {
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).on(eventName, function(evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/**
 * Cart Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Cart template.
 *
 * @namespace cart
 */

slate.cart = {
  
  /**
   * Browser cookies are required to use the cart. This function checks if
   * cookies are enabled in the browser.
   */
  cookiesEnabled: function() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled){
      document.cookie = 'testcookie';
      cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
    }
    return cookieEnabled;
  }
};

/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

slate.utils = {

  /**
   * Return an object from an array of objects that matches the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  findInstance: function(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  },

  /**
   * Remove an object from an array of objects by matching the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  removeInstance: function(array, key, value) {
    var i = array.length;
    while(i--) {
      if (array[i][key] === value) {
        array.splice(i, 1);
        break;
      }
    }

    return array;
  },

  /**
   * _.compact from lodash
   * Remove empty/false items from array
   * Source: https://github.com/lodash/lodash/blob/master/compact.js
   *
   * @param {array} array
   */
  compact: function(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  },

  /**
   * _.defaultTo from lodash
   * Checks `value` to determine whether a default value should be returned in
   * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
   * or `undefined`.
   * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
   *
   * @param {*} value - Value to check
   * @param {*} defaultValue - Default value
   * @returns {*} - Returns the resolved value
   */
  defaultTo: function(value, defaultValue) {
    return (value == null || value !== value) ? defaultValue : value
  }
};

/**
 * Rich Text Editor
 * -----------------------------------------------------------------------------
 * Wrap iframes and tables in div tags to force responsive/scrollable layout.
 *
 * @namespace rte
 */

slate.rte = {
  /**
   * Wrap tables in a container div to make them scrollable when needed
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$tables - jquery object(s) of the table(s) to wrap
   * @param {string} options.tableWrapperClass - table wrapper class name
   */
  wrapTable: function(options) {
    var tableWrapperClass = typeof options.tableWrapperClass === "undefined" ? '' : options.tableWrapperClass;

    options.$tables.wrap('<div class="' + tableWrapperClass + '"></div>');
  },

  /**
   * Wrap iframes in a container div to make them responsive
   *
   * @param {object} options - Options to be used
   * @param {jquery} options.$iframes - jquery object(s) of the iframe(s) to wrap
   * @param {string} options.iframeWrapperClass - class name used on the wrapping div
   */
  wrapIframe: function(options) {
    var iframeWrapperClass = typeof options.iframeWrapperClass === "undefined" ? '' : options.iframeWrapperClass;

    options.$iframes.each(function() {
      // Add wrapper to make video responsive
      $(this).wrap('<div class="' + iframeWrapperClass + '"></div>');
      
      // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar
      this.src = this.src;
    });
  }
};

slate.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:section:reorder', this._onReorder.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

slate.Sections.prototype = $.extend({}, slate.Sections.prototype, {
  _createInstance: function(container, constructors) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructors = constructors || this.constructors[type];

    if (typeof constructors === 'undefined') {
      return;
    }

    for (var i = 0; i < constructors.length; i++) {
      var constructor = constructors[i];
      var instance = $.extend(new constructor(container), {
        id: id,
        type: type,
        container: container
      });
      this.instances.push(instance);
    }
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.originalEvent.detail.sectionId);

    if (!instance) {
      return;
    }

    if (typeof instance.onUnload === 'function') {
      instance.onUnload(evt);
    }

    this.instances = slate.utils.removeInstance(this.instances, 'id', evt.originalEvent.detail.sectionId);
  },

  _onSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.originalEvent.detail.sectionId);

    if (instance && typeof instance.onSelect === 'function') {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.originalEvent.detail.sectionId);

    if (instance && typeof instance.onDeselect === 'function') {
      instance.onDeselect(evt);
    }
  },

  _onReorder: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.originalEvent.detail.sectionId);

    if (instance && typeof instance.onReorder === 'function') {
      instance.onReorder(evt);
    }
  },

  _onBlockSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.originalEvent.detail.sectionId);

    if (instance && typeof instance.onBlockSelect === 'function') {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.originalEvent.detail.sectionId);

    if (instance && typeof instance.onBlockDeselect === 'function') {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructors) {
    if(!Array.isArray(constructors)){
      constructors = [constructors]
    }

    this.constructors[type] = constructors;
    
    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructors);
    }.bind(this));
  }
});

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

slate.Currency = (function() {
  var moneyFormat = '${{amount}}';

  /**
   * Format money values based on your shop currency settings
   * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
   * or 3.00 dollars
   * @param  {String} format - shop money_format setting
   * @return {String} value - formatted value
   */
  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = slate.utils.defaultTo(precision, 2);
      thousands = slate.utils.defaultTo(thousands, ',');
      decimal = slate.utils.defaultTo(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
      case 'amount_with_apostrophe_separator':
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

slate.Image = (function() {

  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  /**
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist. Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {

  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
  }

  Variants.prototype = $.extend({}, Variants.prototype, {

    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');

          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = slate.utils.compact(currentOptions);

      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      var found = false;

      variants.forEach(function(variant) {
        var satisfied = true;

        selectedValues.forEach(function(option) {
          if (satisfied) {
            satisfied = (option.value === variant[option.index]);
          }
        });

        if (satisfied) {
          found = variant;
        }
      });

      return found || null;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    /**
     * Update history state for product deeplinking
     *
     * @param {object} variant - Currently selected variant
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param {object} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container)[0].value = variant.id;
    }
  });

  return Variants;
})();



/*================ Sections ================*/
/**
 * Header Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Header template.
 *
   * @namespace product
 */

theme.Header = (function() {
  /**
   * Header section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function Header(container) {
    this.$container = $(container);
    mainNavigation();
    headerPush();

    if ( $('#header').hasClass( 'header--sticky') ) {
      stickyHeader();
    }

    $( window )
      .on( 'resize', $.debounce( 100, headerPush ) )
      .on( 'load', headerPush );

    $(document).on( 'shopify:section:reorder', headerPush );
  }

  function mainNavigation() {
    // Dropdown Menus
    $('#MainNav li.has-sub-nav').on('mouseenter', function(e) {
      var submenu = $(this).children('.submenu');
      var isThirdLevel = submenu.hasClass('submenu--third-level');

      if (isThirdLevel) {
        setSubmenuPosition(submenu);
      }

      checkAriaStatus(submenu);

      submenu.addClass('open');
    });

    $('#MainNav li.has-sub-nav').on('mouseleave', function(e) {
      $(this).children('.submenu').removeClass('open');

      var submenu = $(this).children('.submenu');
      checkAriaStatus(submenu);
    });

    // Close menu on body click
    $(document).on( 'click', function(e) {
      if ( !$(e.target).is( '.header__wrapper *' ) && $( 'html' ).hasClass( 'mobile-menu--open') ) {
        $('html').removeClass('mobile-menu--open');
        $('.navigation__wrapper').removeClass('active');
        $('.toggle-menus').removeClass( 'toggle-menus--open' );
        $('#NavMenus .submenu').removeClass('active');
        $('.has-sub-nav').removeClass('open');
        $('#SearchToggle, .search').removeClass('search--open');
        disableBodyScroll(false, '#NavMenus');
      }
    });

    // Mobile/responsive menu
    $('.toggle-menus').on('click', function() {
      $('#NavMenus').toggleClass('active');
      $('html, body').toggleClass('mobile-menu--open');
      $(this).toggleClass('toggle-menus--open');

      // submenus shouldn't be visible
      $('#NavMenus .submenu').removeClass('active');
      $('.has-sub-nav').removeClass('open');

      // hide search
      $('#SearchToggle, .search').removeClass('search--open');

      if ( $( 'html' ).hasClass( 'mobile-menu--open') ) {
        disableBodyScroll(true, '#NavMenus');
      } else {
        disableBodyScroll(false, '#NavMenus');
      }

      mobileMenuHeight();
    });

    // Dropwodn menus on hover
    $('.has-sub-nav > a').on('click touchstart', function(e) {
      var isMobile = $(window).width() < 750;
      if (isMobile) {
        e.preventDefault();
        $(this).parent().toggleClass('open').children('.submenu').toggleClass('active');
        $(this).parent().find('.has-sub-nav').removeClass('open').find('.submenu').removeClass('active');

        // hide search
        $('#SearchToggle, .search').removeClass('search--open');

        var submenu = $(this).next();
        checkAriaStatus(submenu);
      }
    });

    $('.navigation__wrapper .main-menu > li > a.nav-link').focus(function() {
      $(this).parent('li').addClass('active').siblings().removeClass('active')
    }).blur(function(){
      $(this).parent('li').siblings().removeClass('active')
    });

    $('.navigation__wrapper .main-menu > li > a.nav-link').hover(function() {
      $(this).parent('li').siblings().removeClass('active')
    });

    navStates();

    $( window ).on( 'resize', $.debounce( 100, mobileMenuHeight ) )
  }

  function checkAriaStatus(submenu){
    var state = submenu.hasClass('open') || submenu.hasClass('active');

    if (state){
      submenu.attr('aria-expanded', true);
    } else {
      submenu.attr('aria-expanded', false);
    }
  }

  function setSubmenuPosition(submenu) {
    var parentOffsetLeft = submenu.parent().offset().left;
    var windowCenter = $(window).width() / 2;
    var offsetLeft = windowCenter - parentOffsetLeft;

    submenu.css('left', offsetLeft);
  }

  // Nav Active States
  function navStates(){
    var links = $('#MainNav .has-sub-nav > a'),
        sub_links = $('#MainNav .has-sub-nav .submenu > li > a');

    links.each(function(){
      var href = $(this).attr('href'),
          location = window.location.pathname;

      if (href === location){
        $(this).closest('.has-sub-nav').addClass('active');
      }
    });

    sub_links.each(function(){
      var href = $(this).attr('href'),
          location = window.location.pathname;

      if (href === location){
        $(this).addClass('active');
        $(this).closest('li').addClass('active');
        $(this).closest('.has-sub-nav').addClass('active');
      }
    });

    $( '.grandparent' ).hover( function() {
      $( '#header' ).addClass( 'meganav--visible' );
    }, function() {
      $( '#header' ).removeClass( 'meganav--visible' );
      $( '#header .main-menu li' ).removeClass( 'active' );
    });
  }

  // Push down the content as much as the height of the header
  function headerPush() {
    var $header = $( '#header' ),
        $headerContent = $header.find( '.header__content' ),
        $headerSearch = $header.find( '.search' ),
        $main = $( '#MainContent' ),
        $nav = $( '#NavMenus' ),
        headerHeight = $headerContent.outerHeight() - $headerSearch.outerHeight(),
        isHeaderTransparent = $header.data( 'overlay' ),
        isFirstSectionFullscreen = $( '.index-sections > .shopify-section:first' ).hasClass( 'section-fullscreen' );
        isMobile = $(window).width() < 750;

    // Remove transparent header styles if there's no collection image
    if ( isHeaderTransparent ) {
      var isCollectionTemplate = $( 'body' ).hasClass('template-collection');
      var hasFeaturedImage = $('.collection__image').length;

      // Disable transparent header on sections without fullscreen background
      if ( !isFirstSectionFullscreen ) {
        isHeaderTransparent = false;
        $header.removeClass( 'header--transparent' );
      } else {
        $header.addClass( 'header--transparent' );
      }

      // No transparent header if collection page has no featured image
      if ( isCollectionTemplate && !hasFeaturedImage ) {
        $header.removeClass( 'header--transparent' );
        $main.css( 'padding-top', headerHeight );
        isHeaderTransparent = false;
      } else {
        $header.addClass( 'header--transparent' );
        isHeaderTransparent = true;
      }
    }

    if ( isMobile || !isHeaderTransparent ) {
      $main.css( 'padding-top', headerHeight );
    } else {
      $main.css( 'padding-top', 0 );
    }

  }

  // Set mobile menu height to fit in the viewport
  function mobileMenuHeight() {
    // Exit if mobile menu is not open
    if ( !$( 'body' ).hasClass( 'mobile-menu--open' ) ) return;

    var headerHeight = $( '.header__content > .wrap' ).outerHeight(),
        $nav = $( '#NavMenus' ),
        isMobile = $(window).width() < 750,
        windowHeight = $(window).height(),
        navHeight = windowHeight - headerHeight;

    if ( isMobile ) {
      $nav.css( 'max-height', navHeight );
    } else {
      $nav.css( 'max-height', 'none' );
    }
  }

  // Sticky header
  function stickyHeader() {
    var $header = $( '#header' );
    var $headerContent = $header.find( '.header__content' );
    var isSticky = $header.hasClass( 'header--sticky' );
    var headerHeight = $headerContent.outerHeight();

    setHeaderState();
    $( window ).on( 'scroll', $.throttle(5, setHeaderState))
               .on( 'load', setHeaderState);

    function setHeaderState() {
      var scrolled = $( window ).scrollTop();
      var topBarHeight = $( '#header .promo' ).outerHeight();

      if ( topBarHeight ) {
        scrolled >= topBarHeight ? $header.addClass( 'is-sticky' ) : $header.removeClass( 'is-sticky' );
      } else {
        scrolled > 0 ? $header.addClass( 'is-sticky' ) : $header.removeClass( 'is-sticky' );
      }
    }
  }

  return Header;
})();
/**
 * Search Script
 * ------------------------------------------------------------------------------
 * 
 *
   * @namespace product
 */

theme.Search = (function() {
  /**
   * Search section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function Search(container) {
    var self = this;
    self.$container = $(container);
    self.search = $('#SearchToggle, .search' );
    self.searchForm = $( '.search__form' );
    self.searchContainer = $( '.search__results-container' );
    self.searchScroller = $( '.search__results-scroller' );
    self.searchResultsContainer = $( '.search__results-list' );
    self.searchOuter = $( '.search-outer' );
    self.searchType = self.searchForm.find( 'input[name="type"]' ).val();
    self.searchRequest = null;
    self.enableEndlessScroll = $( 'body' ).data( 'endless-scroll' );

    self.searchForm.on('submit', function(e) {
      var searchInput = self.searchForm.find('.search-query');
      if (searchInput.val().trim() === '') {
        e.preventDefault();
        return;
      }
    });

    self.searchForm.on( 'keyup', '.search-query', function(e) {
      // Close if escape key pressed
      if (e.keyCode === 27) {
        self.close();
      }

      var query = $(this).val().trim();

      if ( query.length ) {
        self.request(query);
      } else {
        self.clear();
      }
    });

    self.searchContainer.on( 'click', '.js-loadMore', function(e) {
      self.loadMore( this.href );
      e.preventDefault();
    });

    if ( self.enableEndlessScroll ) {
      self.endlessScroll();
    }

    self.init();
  }

  Search.prototype = $.extend({}, Search.prototype, {
    init: function() {
      var self = this;
      
      $('#SearchToggle').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 100);
        self.search.toggleClass('search--open');
        
        // hide mobile menu
        $('.toggle-menus').removeClass('toggle-menus--open');
        $('#NavMenus, .has-sub-nav ul.submenu').removeClass('active');
        $('.has-sub-nav').removeClass('open');
        $('#header .search-query').select();
        
        // Lock body scrolling
        $('html, body').addClass('mobile-menu--open');

        disableBodyScroll(true, '.search__results-scroller');
      });

      // Hide search
      $('.remove-search').on('click', function() {
        self.close();
      });

      $('body').bind('click', function(e){
        var $target = $(e.target);

        if(!$target.hasClass('search-query') && !$target.is('#SearchToggle') && !$target.is('.js-loadMore') && $('.search').hasClass('search--open')) {
          self.searcg.removeClass('search--open');
        }
      });
    },
    endlessScroll: function() {
      // Initialize infinity scroll
      var SearchLoop = '#SearchLoop';
      var SearchPagination = '#SearchPagination';
      var endlessScroll = new Ajaxinate({
          container: SearchLoop,
          pagination: SearchPagination,
          callback: function( data ) {
            if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
                Currency.convertAll(shopCurrency, $('[name=currencies]').val());
            }

            // Trigger scroll in order to fade in the new loaded elements
            $( window ).trigger( 'scroll' );
          }
      });
    },
    request: function( query ) {
      var self = this;
      self.search.addClass( 'search--loading' );
      self.searchResultsContainer.empty();
      self.searchContainer.find( '.pagination' ).remove();

      // Kill previous ajax request
      if (self.searchRequest != null) {
        self.searchRequest.abort();
      }

      // Do a new ajax request
      self.searchRequest = $.ajax({
        method: 'GET',
        url: '/search',
        dataType: 'html',
        data: {
          q: query,
          type: self.searchType
        }
      }).done(function(data) {
        var showAnimations = $( 'body' ).data('animations');
        var $results = $( data ).find( '.product-item' );
        var $searchOuter = $( data ).find( '.search-results-text' );
        var $pagination = $( data ).find( '.pagination' );

        self.searchResultsContainer.empty().append( $results );
        self.searchContainer.append( $pagination );;
        self.searchOuter.empty().append( $searchOuter );

        if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
          Currency.convertAll(shopCurrency, $('[name=currencies]').val());
        }

        self.search.removeClass( 'search--loading' );
        self.search.addClass( 'search--loaded' );
        self.infiniteScroll();
      });
    },

    close: function() {
      this.clear();
      this.search.removeClass( 'search--open' );

        // Unlock body scrolling
        $('html, body').removeClass('mobile-menu--open');

        disableBodyScroll(false, '.search__results-scroller');
    },

    clear: function() {
      this.search.removeClass( 'search--loading search--loaded' );
      this.searchResultsContainer.empty();
      this.searchOuter.empty();
    },

    infiniteScroll: function() {
      var self = this;
      self.searchScroller.on( 'scroll', $.debounce( 100, function() {
        var scrolled = $(this).scrollTop();
        var scrollTriggerPoint = self.searchContainer.height() - self.searchScroller.height() * 2;
        var isSearching = self.search.hasClass( 'search--loading' );

        if (scrolled >= scrollTriggerPoint && !isSearching) {
          self.searchContainer.find( '.js-loadMore' ).trigger( 'click' );
          self.searchScroller.off( 'scroll' );
        }
      }));
    },

    loadMore: function(requestedURL) {
      var self = this;
      self.search.removeClass( 'search--loaded' ).addClass( 'search--loading' );
      self.searchRequest = $.ajax({
        method: 'GET',
        url: requestedURL,
        dataType: 'html'
      }).done(function(data) {
        var $results = $( data ).find( '.product-item' );
        var $nextPageButton = $( data ).find( '.js-loadMore' );

        self.searchResultsContainer.append( $results );
        
        if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
          Currency.convertAll(shopCurrency, $('[name=currencies]').val());
        }

        self.searchContainer.find( '.pagination' ).empty().append( $nextPageButton );
        self.search.removeClass( 'search--loading' ).addClass( 'search--loaded' );
        self.infiniteScroll();
      });
    }
  });

  return Search;
})();

/**
 * Article Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Article template.
 *
   * @namespace product
 */

theme.Article = (function() {
  /**
   * Article section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function Article(container) {
    var $container = this.$container = $(container);
    var hasSidebar = $('.sidebar').length;

    if (hasSidebar) {
      sidebarNav();
    }

    stickyElements($container);

    $( window ).on( 'resize', $.debounce( 100, function() {
      stickyElements( $container );
    } ) );
  }


  function sidebarNav() {
    var isMobile = $(window).width() < 750;
    var hasCategories = $('.widget--categories').length;

    navStates();

    // Dropdown Menus
    $('.widget__links li.has-sub-nav > a').on('click touchstart', function(e) {
      if (!isMobile) {
        var submenu = $(this).next('.submenu');

        submenu.parent().toggleClass('active');
        submenu.stop(true, false).slideToggle().toggleClass('open');
        checkAriaStatus(submenu);

        e.preventDefault();
      }
    });

    if (hasCategories) {
      categories();

      $(window).on('resize', categories);
    }
  }

  function checkAriaStatus( submenu ) {
    var state = submenu.hasClass('open');

    if (state){
      submenu.attr( 'aria-expanded', true );
    } else {
      submenu.attr( 'aria-expanded', false );
    }
  }

  // Nav Active States
  function navStates(){
    var links = $('.widget__links .has-sub-nav > a'),
        sub_links = $('.widget__links .submenu > li > a');

    links.each(function(){
      var href = $(this).attr('href'),
          location = window.location.pathname;

      if (href === location){
        $(this).closest('.has-sub-nav').addClass('active').find('.submenu').show();
      }
    });

    sub_links.each(function(){
      var href = $(this).attr('href'),
          location = window.location.pathname;

      if (href === location){
        $(this).closest('li').addClass('active');
        $(this).closest('.has-sub-nav').addClass('active').find('.submenu').show();
      }
    });
  }

  function stickyElements( $container ) {
    var isMobile = $(window).width() < 750;
    var hasSidebar = $( '.sidebar' ).length;
    var hasSocial = $( '.article__social' ).length;

    if ( hasSidebar ) {
      if ( !isMobile ) {
        var bottomSpacingSidebar = $('.site-footer').outerHeight();

        $container.find( '.sidebar__contents' ).stick_in_parent({
          parent: '.article__wrapper',
          bottomSpacing: 30
        });

      } else {
        // Destroy sticky on mobile
        $container.find('.sidebar__contents').trigger("sticky_kit:detach");
      }
    }

    if (hasSocial) {
      var bottomSpacingSocial = parseInt($(document).height() - $('.article__content').offset().top - $('.article__content').outerHeight());

      if (!isMobile) {
        $container.find('.article__social').stick_in_parent({
          parent: '.article__content__wrapper'
        });
      } else {
        // Destroy sticky on mobile
        $container.find('.article__social').trigger("sticky_kit:detach");
      }
    }
  }

  function categories() {
    var isMobile = $(window).width() < 750;
    var menuCategories = $('.widget--categories .widget__links');
    var activeLink = menuCategories.find('li.active').index();
    var hasSlick = menuCategories.hasClass('slick-initialized');

    navStates();

    if (isMobile) {
      if (!hasSlick) {
        $('.widget--categories').prependTo('.article--single');
        menuCategories.slick({
          initialSlide: activeLink,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow-right" viewBox="0 0 20 38"><path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="#726D75" fill-rule="evenodd"></path></svg></button>',
          nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow-right" viewBox="0 0 20 38"><path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="#726D75" fill-rule="evenodd"></path></svg></button>'
        });
      }
    } else {
      if (hasSlick) {
        menuCategories.slick('unslick');
        $('.widget--categories').prependTo('.sidebar__contents');
      }
    }
  }

  return Article;
})();

/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
   * @namespace product
 */

 theme.variables = {
  productPageSticky   : false,
  bpSmall             : false,
  mediaQueryMediumUp  : 'screen and (min-width: 750px)',
  mediaQuerySmall     : 'screen and (max-width: 749px)',
};

theme.Product = (function() {
  var selectors = {
    addToCart: '[data-add-to-cart]',
    addToCartText: '[data-add-to-cart-text]',
    comparePrice: '[data-compare-price]',
    comparePriceText: '[data-compare-text]',
    formWrapper: '[data-form-wrapper]',
    originalSelectorId: '[data-product-select]',
    priceWrapper: '[data-price-wrapper]',
    productFeaturedImage: '[data-product-featured-image]',
    productSlideshow: '[data-product-slideshow]',
    productPhotoWrapper: '[data-product-photo-wrapper]',
    productImage: '[data-product-image]',
    productJson: '[data-product-json]',
    productPrice: '[data-product-price]',
    productThumbs: '[data-product-thumbs]',
    singleOptionSelector: '[data-single-option-selector]',
    zoomWrapper: '[data-zoom-wrapper]'
  };

  /**
   * Product section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function Product(container) {
    this.container = container;
    this.$container = $(container);
    this.stickyEnabled = this.$container.data('sticky-enabled');
    this.tallLayout = this.$container.data('tall-layout');

    this.tabs();
    this.tabsSpaceCheck();

    // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor
    if (!$(selectors.productJson, this.$container).html()) {
      return;
    }

    this.initZoom();
    this.accordion();
    this.initAdd();
    this.initSlider();
    this.productVideo();
    if (this.stickyEnabled){
      this.stickyScroll();
    }

    var currentScope = this;
    $(window).resize(function() {
      currentScope.tabsSpaceCheck();
    }).resize();

    this.productSingleObject = JSON.parse($(selectors.productJson, this.$container).html());

    var options = {
      $container: this.$container,
      enableHistoryState: this.$container.data('enable-history-state') || false,
      singleOptionSelector: selectors.singleOptionSelector,
      originalSelectorId: selectors.originalSelectorId,
      product: this.productSingleObject
    };

    this.settings = {};
    this.namespace = '.product';
    this.variants = new slate.Variants(options);
    this.$featuredImage = $(selectors.productFeaturedImage, this.$container);

    this.$container.on('variantChange' + this.namespace, this.updateAddToCartState.bind(this));
    this.$container.on('variantPriceChange' + this.namespace, this.updateProductPrices.bind(this));
    this.$container.on('variantImageChange' + this.namespace, this.updateProductImage.bind(this));

    // Show the first available variant
    $( selectors.singleOptionSelector, this.$container).trigger( 'change' );

    var product = this.productSingleObject;
    var showReviews = this.$container.data('reviews');
    var reviewsAppInstalled = typeof(window.SPR) == 'function';

    if (showReviews && reviewsAppInstalled) {
      window.SPR.initDomEls();
      window.SPR.loadBadges();
    }

    var showCartBar = this.showCartBar = this.$container.data('cart-bar');
    if ( showCartBar ) {
      this.cartBar();
      this.$cartBar = $('#cart-bar');
    }
  }

  Product.prototype = $.extend({}, Product.prototype, {

    /**
     * Updates the DOM state of the add to cart button
     *
     * @param {boolean} enabled - Decides whether cart is enabled or disabled
     * @param {string} text - Updates the text notification content of the cart
     */
     updateAddToCartState: function(evt) {
      var variant = evt.variant;

      if (variant) {
        $(selectors.priceWrapper, this.$container).removeClass('hide');

        if (variant.available) {
          $(selectors.addToCart, this.$container).prop('disabled', false);
          $(selectors.addToCartText, this.$container).html(theme.strings.addToCart);
          $(selectors.formWrapper, this.$container).removeClass( "variant--soldout variant--unavailabe" );
        } else {
          $(selectors.addToCart, this.$container).prop('disabled', true);
          $(selectors.addToCartText, this.$container).html(theme.strings.soldOut);
          $(selectors.formWrapper, this.$container).removeClass( "variant--unavailabe" ).addClass( "variant--soldout" );
        }

      } else {
        $(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(theme.strings.unavailable);
        $(selectors.formWrapper, this.$container).removeClass( "variant--soldout" ).addClass( "variant--unavailabe" );
      }

      // Update cart bar form
      if (this.showCartBar) {
        if (variant) {
          $(selectors.priceWrapper, this.$cartBar).removeClass('hide');

          if (variant.available) {
            $(selectors.addToCart, this.$cartBar).prop('disabled', false);
            $(selectors.addToCartText, this.$cartBar).html(theme.strings.addToCart);
            $(selectors.formWrapper, this.$cartBar).removeClass( "variant--soldout variant--unavailabe" );
          } else {
            $(selectors.addToCart, this.$cartBar).prop('disabled', true);
            $(selectors.addToCartText, this.$cartBar).html(theme.strings.soldOut);
            $(selectors.formWrapper, this.$cartBar).removeClass( "variant--unavailabe" ).addClass( "variant--soldout" );
          }
        } else {
          $(selectors.addToCart, this.$cartBar).prop('disabled', true);
          $(selectors.addToCartText, this.$cartBar).html(theme.strings.unavailable);
          $(selectors.formWrapper, this.$cartBar).removeClass( "variant--soldout" ).addClass( "variant--unavailabe" );
        }
      }

      if ( !variant ) return;
    },

    /**
     * Updates the DOM with specified prices
     *
     * @param {string} productPrice - The current price of the product
     * @param {string} comparePrice - The original price of the product
     */
    updateProductPrices: function(evt) {
      var variant = evt.variant;
      var $comparePrice = $(selectors.comparePrice, this.$container);
      var $productPrice =  $(selectors.productPrice, this.$container);
      var $compareEls = $comparePrice.add(selectors.comparePriceText, this.$container);

      $(selectors.productPrice, this.$container)
        .html(slate.Currency.formatMoney(variant.price, theme.moneyFormat));

      if (variant.compare_at_price > variant.price) {
        $comparePrice.html(slate.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat));
        $compareEls.removeClass('hide');
        $productPrice.addClass('product__price--sale');
      } else {
        $comparePrice.html('');
        $compareEls.addClass('hide');
        $productPrice.removeClass('product__price--sale');
      }

      // Update cart bar price and options
      if ( this.showCartBar ) {
        var $comparePriceCartBar = $(selectors.comparePrice, this.$cartBar);
        var $productPriceCartBar =  $(selectors.productPrice, this.$cartBar);
        var $compareElsCartBar = $comparePriceCartBar.add(selectors.comparePriceText, this.$cartBar);

        $(selectors.productPrice, this.$cartBar).html(slate.Currency.formatMoney(variant.price, theme.moneyFormat));

        if (variant.compare_at_price > variant.price) {
          $comparePriceCartBar.html(slate.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat));
          $compareElsCartBar.removeClass('hide');
          $productPriceCartBar.addClass('product__price--sale');
        } else {
          $comparePriceCartBar.html('');
          $compareElsCartBar.addClass('hide');
          $productPriceCartBar.removeClass('product__price--sale');
        }
      }

      if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
        Currency.convertAll(shopCurrency, $('[name=currencies]').val());
      }
    },

    /**
     * Updates the DOM with the specified image URL
     *
     * @param {string} src - Image src URL
     */
    updateProductImage: function(evt) {
      var variant = evt.variant;
      var imageId = variant.featured_image.id;

      if (variant) {

        // Update variant image, if one is set
        if (variant.featured_image) {
          var $newImg = $(selectors.productImage+'[data-image-id="'+ variant.featured_image.id +'"]', this.$container);
          var newPosition = $newImg.parent().parent().attr('data-slick-index');

          // If we have a mobile breakpoint or the tall layout is disabled,
          // just switch the slideshow.
          if (theme.variables.bpSmall || !this.tallLayout ) {
            // Slider not loaded
            if (newPosition === undefined) {
              ;
            }else {
               $(selectors.productSlideshow, this.$container).slick('slickGoTo', newPosition);
            }
          }
          // We know its a tall layout, if it's sticky
          // scroll to the images
          else {
            imageIndex = $newImg.closest('.slick-slide').index();
            // Scroll to/reorder image unless it's the first photo on load
            if (imageIndex !== 0 ) {
              // Scroll to variant image
              $('html, body').animate(
                {
                  scrollTop: $newImg.offset().top
                },
                250
              );
            }
          }
        }
      }
    },
    createSlider: function(){
      $(selectors.productSlideshow, this.$container).slick({
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        fade: true,
        swipe: true,
        appendDots: $(selectors.productThumbs, this.$container),
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            var thumbAlt = $(slider.$slides[i]).find('[data-product-featured-image]').attr('alt');
            return '<img alt="'+thumbAlt+'" src="'+thumb+'">';
        }
      });
    },
    initSlider: function(){
      var self = this;
      if ( this.tallLayout ) {
        enquire.register(theme.variables.mediaQuerySmall, {
          match: function() {
            self.createSlider();
          },
          unmatch: function() {
            var isSlickInitialized = $(selectors.productSlideshow, self.$container).hasClass('slick-initialized');
            if ( isSlickInitialized ) {
              $(selectors.productSlideshow, self.$container).slick('unslick');
            }
          }
        });
      } else {
        self.createSlider();
      }
    },
    productVideo: function() {
      $('.productVideo').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        closeBtnInside: false,
        preloader: false,
        fixedContentPos: false,
        iframe: {
          patterns: {
            youtube: {
              src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
            }
          }
        }
      });
    },
    stickyScroll: function() {

      var sectionId = this.$container.attr('data-section-id');
      var $form = $('.form__wrapper', this.$container )
      var sectionSelector = '#shopify-section-' + sectionId;
      var containerId =  sectionSelector + ' .product__page'
      var innerId = sectionSelector + ' .form__inner__wrapper'
      var $wrapper = $( containerId )

      var noReviews = true;
      if ($form.find('#shopify-product-reviews').length) {
        noReviews = true;
      }

      enquire.register(theme.variables.mediaQueryMediumUp, {
        match: function() {
          var productCopyHeight = $form.outerHeight();
          var productImagesHeight = $(selectors.productSlideshow, this.$container).height();

          // Is the product description and form taller than window space
          var calcLimit = $form.offset().top + $form.height();

          // Is the product description and form taller than window space
          // Is is also shorter than the window and images
          if (
            productCopyHeight < productImagesHeight &&
            productCopyHeight < $(window).height() &&
            noReviews
          ) {
            theme.variables.productPageSticky = true;

            $('.product__page .form__wrapper', this.$container).stick_in_parent({
              offset_top: 30,
              parent: '.product__page'
            });
          } else {
            theme.variables.productPageSticky = false;
          }

        },
        unmatch: function() {
          $('.product__page .form__wrapper', this.$container).trigger("sticky_kit:detach");
        }
      });
    },
    initAdd: function() {
      var $popover = $('#CartPopoverCont'),
          $errors = $('.errors', this.$container),
          popoverTimer,
          item = {},
          source = $('#CartPopover').html(),
          template = Handlebars.compile(source),
          timeout = 6000; // milliseconds

      theme.quantitySelectors();

      $('.add-js').on('click', function(e) {
        const target = $(this);
        const nameField = target.closest('form').find('input#name');
        if(nameField.val() != '') {
          e.preventDefault();
          var quantity = $(this).closest('form').find('.quantity__input').val(),
            productID = $(this).closest('.product__submit').data('product-id'),
            form = $(this).closest('form'),
            form_array = form.serializeArray();
          if (form.find('[type="file"]').length){
            return;
          }
          var form_data = {};
          $.map(form_array, function(val, i){
            form_data[val.name] = val.value;
          });
          addItem(form_data);
        }
      });

      $popover.on( 'click', '.close', function() {
        hideCartNotificationPopup( $popover );
      });

      var addItem = function(data) {
        $.ajax({
          type: 'POST',
          url: '/cart/add.js',
          dataType: 'json',
          data: data,
          success: addToCartOkay,
          error: addToCartFail
        });
      }
      var addToCartOkay = function(product) {
        showCartNotificationPopup(product);

        var addedQuantity = parseInt( $('.quantity__input', this.$container).val() ),
            prevCartQuantity = parseInt($('#CartButton .cart-count-js').text()),
            newTotal = addedQuantity + prevCartQuantity;
        $('#CartButton .cart-count-js').text( newTotal ).show().addClass('pulse-cart-icon');
        setTimeout(function(){
          $('#CartButton .cart-count-js').removeClass('pulse-cart-icon')
        }, 800);
      }
      var addToCartFail = function(obj, status) {
        var errors = '';
        $popover.empty();

        errors += '<div class="errors">' + obj.responseJSON.message + ': '+ obj.responseJSON.description + '<span class="close"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close-thin" viewBox="0 0 27 27"><g stroke="#979797" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M.5.5l26 26M26.5.5l-26 26"></path></g></svg></span></div>';

        $popover.append( errors );

        $popover.addClass('is-visible').addClass('contains-errors');

        // clear popover timer, set at top of Cart object
        clearTimeout(popoverTimer);
        // set new instace of popoverTimer
        popoverTimer = setTimeout(function(){
          hideCartNotificationPopup($popover);
        }, timeout);
      }

      var showCartNotificationPopup = function(product){
        var addedQuantity = parseInt( $('.quantity__input', this.$container).val() );

        item = {
          item_count: addedQuantity,
          image: product.image,
          product_title: function(){
            return product.product_title.length > 20 ? product.product_title.substring(0, 20) + '...' : product.product_title;
          },
          variant: product.variant_title == 'Default Title' ? false : product.variant_title,
          price: product.price,
          price_formatted: Shopify.formatMoney(product.price)
        }

        $popover.empty().append(template(item));

        if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
          Currency.convertAll(shopCurrency, $('[name=currencies]').val());
        }

        // clear popover timer, set at top of Cart object
        clearTimeout(popoverTimer);

        // Popover should be just below header
        var top =  $('.header__content').outerHeight()
        $popover.attr('style','');

        // If it is sticky, just put it at the header height with position: fixed
        if ( $('#header').hasClass('header--sticky') ) {
          $popover.css( 'top', top );
        } else if ( $(window).scrollTop() > top ){
          // header is not visible pin to top
          $popover.css( 'top', 0 );
          $popover.css( 'z-index', '2000' );
        }
        else {
        // otherwise positon: absolute below header
        // or at top if scrolled below header
          top = Math.max( $(window).scrollTop() , top);
          $popover.css( 'position', 'absolute' );
          $popover.css( 'top', top );
        }

        $popover.addClass( 'is-visible' ).removeClass( 'contains-errors');

        // set new instace of popoverTimer
        popoverTimer = setTimeout(function(){
          hideCartNotificationPopup($popover);
        }, timeout);
      }

      var hideCartNotificationPopup = function($popover) {
        $popover.removeClass( 'is-visible' ).removeClass( 'contains-errors' );
      }
    },
    initZoom: function() {

      if ( !Modernizr.touch ){
        $(selectors.zoomWrapper, this.$container).one( "click", function() {
          var $this = $(this);
          $this.zoom({
            on: 'click',
            touch: 'false',
            callback: function(){
              $this.click();
            },
            onZoomIn: function() {
              $this.addClass('zoom--active');
            },
            onZoomOut: function() {
              $this.removeClass('zoom--active');
            }
          });
        });
      }
    },
    tabs: function() {
      var ctx = this.$container;

      $('.tab-content-0', ctx).addClass('current');
      $('.tab-link-0', ctx).addClass('current');

      $('ul.tabs > li', ctx).on('click', function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs > li', ctx).removeClass('current');
        $('.tab-content', ctx).removeClass('current');

        $(this).addClass('current');
        $('.tab-content-' + tab_id, ctx).addClass('current');
      })
    },
    accordion:  function(){
      // mobile accordion for tabs content
      $('.accordion-toggle', this.$container).click(function() {
        if($(this).next('div').is(':visible')){
          $(this).next('div').slideUp('fast');
        } else {
          $(this).next('div').slideDown('fast');
        }
        $(this).find('.accordion__icon').toggleClass('rotate-90');
      });
    },
    tabsSpaceCheck: function(){
      var tabsWidth = $('.tabs', this.$container).width();
      var tabsWrapper = $('.productTabsWrapper', this.$container).width()-31;
      if (tabsWidth >= tabsWrapper){
        $('.product-tabs', this.$container).css({
           'position' : 'absolute',
           'left' : '-9999px',
           'display': 'table'
        });
        $('.product-accordion', this.$container).show();
      } else {
        $('.product-tabs', this.$container).removeAttr( 'style' );
        $('.product-accordion', this.$container).hide();
      }
    },

    /*
     * Sticky Cart Bar
     */
    cartBar: function() {
      var product = JSON.parse($(selectors.productJson, this.$container).html());
      var $cartBar = $('#cart-bar');
      var $cartBarSelectors = $( 'select', $cartBar );
      var $formSelectors = $( selectors.singleOptionSelector, this.$container );
      var $productContainer = $( '#template-product' );
      var $siteFooter = $( '.site-footer-wrapper' );
      var cartBarPosition = $cartBar.data('position');
      var $submit = $(selectors.addToCart, this.$container);
      var enableSwatches = this.$container.find( '.product-form' ).data( 'swatches' );
      var $swatchElement = this.$container.find( '.swatch-element input' );

      // Submit product form on cart bar button click
      $cartBar.on('click', '.product__submit__add', function(e) {
          e.preventDefault();
          $submit.click();
      });

      // Update product form on cart bar variant change
      $cartBarSelectors.on('change', function() {
        var index = $(this).data('index');
        var optionSelected = $(this).val();
        var $formElement = $formSelectors.filter( '[data-index="' + index + '"]');

        if ( $formElement.is( 'select') ) {
          $formElement.val( optionSelected ).triggerHandler( 'change' );
        } else {
          $formElement.filter( '[value="' + optionSelected + '"]' ).prop( 'checked', true ).triggerHandler( 'change' );
        }

        if ( enableSwatches) {
          $swatchElement.filter( '[data-index="' + index + '"][value="' + optionSelected + '"]').prop( 'checked', true ).triggerHandler( 'change' );
        }
      });

      // Update cart bar on product form variant change
      $formSelectors.on( 'change', function() {
        var index = $(this).data('index');
        var optionSelected = $(this).val();

        $cartBar.find('[data-index="' + index+ '"]').val( optionSelected );
      });

      $( window ).on( 'scroll', $.throttle(100, function() {
        var scrolled = $(window).scrollTop();
          
          if ( $productContainer.length && $cartBar.length ) {
            var productContainerOffset = $productContainer.offset().top;

            if ( scrolled > productContainerOffset ) {
              $cartBar.addClass('cart-bar--is-visible');
              $siteFooter.addClass('site-footer--push')
            } else if ( scrolled < productContainerOffset - 50 ) {
              $cartBar.removeClass('cart-bar--is-visible');
              $siteFooter.removeClass('site-footer--push')
            }
          }
      }));

      if ( cartBarPosition == 'top' ) {
        setCartBarPosition();
        $( window )
          .on( 'scroll', $.throttle(5, setCartBarPosition))
          .on( 'load', setCartBarPosition);  
      }

      function setCartBarPosition() {
        var stickyHeader = $('.site-header').hasClass('header--sticky');
        var cartTopPosition = $('.site-header .header__content').outerHeight();

        if ( stickyHeader ) {
          $cartBar.css('top', cartTopPosition );
        } else {
          $cartBar.css('top', 0 );
        }
      }

    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      this.$container.off(this.namespace);
    }
  });

  return Product;
})();

/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
   * @namespace product
 */

theme.variables = {
  productPageSticky   : false,
  bpSmall             : false,
  mediaQueryMediumUp  : 'screen and (min-width: 750px)',
  mediaQuerySmall     : 'screen and (max-width: 749px)',
};

theme.ProductGrid = (function() {
  var selectors = {
    addToCart: '[data-add-to-cart]',
    addToCartText: '[data-add-to-cart-text]',
    comparePrice: '[data-compare-price]',
    comparePriceText: '[data-compare-text]',
    formWrapper: '[data-form-wrapper]',
    originalSelectorId: '[data-product-select]',
    priceWrapper: '[data-price-wrapper]',
    productFeaturedImage: '[data-product-featured-image]',
    productSlideshow: '[data-product-slideshow]',
    productImage: '[data-product-image]',
    productJson: '[data-product-json]',
    productPrice: '[data-product-price]',
    productThumbs: '[data-product-thumbs]',
    singleOptionSelector: '[data-single-option-selector]',
    zoomWrapper: '[data-zoom-wrapper]'
  };

  /**
   * Product section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function ProductGrid(container) {
    var self = this;
    this.container = container;
    this.$container = $(container);
    this.$mobileSlider = this.$container.find( '.product-grid--horizontally' );
    this.tallLayout = false;
    this.initZoom();
    this.mobileCheck();

    $( window )
        .on( 'resize', $.debounce( 100, self.mobileCheck.bind( self ) ) )
        .on( 'load', self.mobileCheck.bind( self ) );

    var enableSwatches = this.$container.data( 'swatches' );
    var showReviews = this.$container.data('reviews');
    var reviewsAppInstalled = typeof(window.SPR) == 'function';

    if (showReviews && reviewsAppInstalled) {
      window.SPR.initDomEls();
      window.SPR.loadBadges();
    }

    var onInit = function() {
      var slider = $( this ).find( '.product__slides' );
      var hasSlider = slider.hasClass( 'slick-initialized' );
      self.productVideo();

      if ( hasSlider ) {
        $(window).trigger( 'resize' );
      } else {
        self.initSlider( slider );
      }
    }

    var onClose = function() {
      var slider = $( this ).find( '.product__slides' );
      var hasSlider = slider.hasClass( 'slick-initialized' );

      if ( hasSlider ) {
        slider.slick( 'unslick' );
      }
    }

    // Remove attached functions to the button in order to prevent multiple calls
    $( document ).off( 'click', '.trigger-quick-view, .modal__outer .prev, .modal__outer .next' );

    // Quick view
    $( document ).on( 'click', '.trigger-quick-view, .modal__outer .prev, .modal__outer .next', function(e) {
      e.preventDefault();
      theme.modal( $(this).data('modal'), onInit, onClose );
    });

    $(document).on( 'keyup', function(e) {
      var $thisModal = $( '.quicklook:visible' );
      if ( e.keyCode == 27 && $thisModal.length ) {
        if ( $thisModal.length ) {
          if ( typeof(onClose) == 'function' ) {
            $thisModal.fadeOut('fast', onClose);
          } else {
            $thisModal.fadeOut('fast');
          }
        }
      } else if ( e.keyCode == 37 && $thisModal.length == 1 ) {
        // On keypress left arrow
        $thisModal.find( '.prev' ).trigger( 'click' );
      } else if ( e.keyCode == 39 && $thisModal.length == 1 ) {
        // On keypress right arrow
        $thisModal.find( '.next' ).trigger( 'click' );
      }
    });

    theme.quantitySelectors();

    this.$container.find('.quicklook').each(function() {

      var productJSON = $(selectors.productJson, this ).html();

      if ( typeof productJSON !== 'undefined' ) {
        var productSingleObject = JSON.parse(productJSON);
        var options = {
          $container: $(this),
          enableHistoryState: $(this).data('enable-history-state') || false,
          singleOptionSelector: $(this).find( selectors.singleOptionSelector ),
          originalSelectorId: $(this).find( selectors.originalSelectorId ),
          product: productSingleObject
        };

        $(this).settings = {};
        $(this).namespace = '.product';
        $(this).variants = new slate.Variants(options);
        $(this).$featuredImage = $(selectors.productFeaturedImage, $(this));

        $(this).on('variantChange', self.updateAddToCartState.bind(this));
        $(this).on('variantPriceChange', self.updateProductPrices.bind(this));
        $(this).on('variantImageChange', self.updateProductImage.bind(this));

        $(this).find( selectors.singleOptionSelector ).triggerHandler( 'change' );
      }

    });

    // Update currencies if currency picker is enabled
    if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
      Currency.convertAll(shopCurrency, $('[name=currencies]').val());
    }
  }

  ProductGrid.prototype = $.extend({}, ProductGrid.prototype, {
    /**
     * Updates the DOM state of the add to cart button
     *
     * @param {boolean} enabled - Decides whether cart is enabled or disabled
     * @param {string} text - Updates the text notification content of the cart
     */
     updateAddToCartState: function(evt) {
      var variant = evt.variant;

      if (variant) {
        $(selectors.priceWrapper, this.$container).removeClass('hide');
      } else {
        $(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(theme.strings.unavailable);
        $(selectors.formWrapper, this.$container).removeClass( "variant--soldout" ).addClass( "variant--unavailabe" );
        return;
      }

      if (variant.available) {
        $(selectors.addToCart, this.$container).prop('disabled', false);
        $(selectors.addToCartText, this.$container).html(theme.strings.addToCart);
        $(selectors.formWrapper, this.$container).removeClass( "variant--soldout variant--unavailabe" );
      } else {
        $(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(theme.strings.soldOut);
        $(selectors.formWrapper, this.$container).removeClass( "variant--unavailabe" ).addClass( "variant--soldout" );
      }
    },

    /**
     * Updates the DOM with specified prices
     *
     * @param {string} productPrice - The current price of the product
     * @param {string} comparePrice - The original price of the product
     */
    updateProductPrices: function(evt) {
      var variant = evt.variant;
      var $comparePrice = $(selectors.comparePrice, this.$container);
      var $productPrice =  $(selectors.productPrice, this.$container);
      var $compareEls = $comparePrice.add(selectors.comparePriceText, this.$container);

      $(selectors.productPrice, this.$container)
        .html(slate.Currency.formatMoney(variant.price, theme.moneyFormat));

      if (variant.compare_at_price > variant.price) {
        $comparePrice.html(slate.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat));
        $compareEls.removeClass('hide');
        $productPrice.addClass('product__price--sale');
      } else {
        $comparePrice.html('');
        $compareEls.addClass('hide');
        $productPrice.removeClass('product__price--sale');
      }

      // Update currencies if currency picker is enabled
      if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
        Currency.convertAll(shopCurrency, $('[name=currencies]').val());
      }
    },

    /**
     * Updates the DOM with the specified image URL
     *
     * @param {string} src - Image src URL
     */
    updateProductImage: function(evt) {
      var variant = evt.variant;
      var imageId = variant.featured_image.id;

      if (variant) {

        // Update variant image, if one is set
        if (variant.featured_image) {
          var $newImg = $(selectors.productImage+'[data-image-id="'+ variant.featured_image.id +'"]', this.$container);
          var newPosition = $newImg.parent().parent().attr('data-slick-index');

          // If we have a mobile breakpoint or the tall layout is disabled,
          // just switch the slideshow.
          if (theme.variables.bpSmall || !this.tallLayout ) {
            // Slider not loaded
            if (newPosition === undefined) {
              ;
            }else {
              var slider = $( selectors.productSlideshow, $(evt.target) );
               slider.slick('slickGoTo', newPosition);
            }
          }
          // We know its a tall layout, if it's sticky
          // scroll to the images
          else if ( theme.variables.productPageSticky ) {
            imageIndex = $newImg.closest('.slick-slide').index();
            // Scroll to/reorder image unless it's the first photo on load
            if (imageIndex !== 0 ) {
              // Scroll to variant image
              $('html, body').animate(
                {
                  scrollTop: $newImg.offset().top
                },
                250
              );
            }
          } else {
            // It's tall but not sticky
            // Swap images
            $newImg
              .closest('.product__photo')
              .prependTo($(selectors.productSlideshow, this.$container.parent()));
          }
        }
      }
    },

    createSlider: function(slider){
      var productThumbs = $( selectors.productThumbs, slider.parent() );

      if ( slider.find( '.product__photo' ).length > 1 ) {
        slider.slick({
          adaptiveHeight: true,
          dots: true,
          arrows: false,
          fade: true,
          swipe: true,
          appendDots: productThumbs,
          customPaging: function(slider, i) {
              var thumb = $(slider.$slides[i]).data('thumb');
              return '<img src="'+thumb+'">';
          }
        });
      } else{
        slider.addClass('product__slides--single');
      }
    },

    initSlider: function(slider){
      var self = this;

      if ( self.tallLayout ) {
        enquire.register(theme.variables.mediaQuerySmall, {
          match: function() {
            self.createSlider( slider );
          },
          unmatch: function() {
            $( selectors.productSlideshow, this.$container ).slick('unslick');
          }
        });
      } else {
        self.createSlider( slider );
      }
    },

    initZoom: function() {
      if ( !Modernizr.touch ){
        $( selectors.zoomWrapper, this.$container.parent() ).one( "click", function() {
          var $this = $(this);
          $this.zoom({
            on: 'click',
            touch: 'false',
            callback: function(){
              $this.click();
            },
            onZoomIn: function() {
              $this.addClass('zoom--active');
            },
            onZoomOut: function() {
              $this.removeClass('zoom--active');
            }
          });
        });
      }
    },
    productVideo: function() {
      $('.productVideo').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        closeBtnInside: false,
        preloader: false,
        fixedContentPos: false,
        iframe: {
          patterns: {
            youtube: {
              src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
            }
          }
        }
      });
    },
    initMobileSlider: function() {
      if ( !this.$mobileSlider.data( 'flickity' ) ) {
        this.$mobileSlider.flickity({
          contain: true,
          pageDots: false,
          arrowShape: 'M4.068 18.649l15.466 16.105c.31.283.466.629.466 1.039 0 .41-.155.77-.466 1.08a1.412 1.412 0 0 1-1.038.424c-.41 0-.756-.141-1.038-.424L.466 19.708A1.373 1.373 0 0 1 0 18.648c0-.423.155-.776.466-1.059L17.458.424A1.412 1.412 0 0 1 18.496 0c.41 0 .755.141 1.038.424.31.282.466.636.466 1.06 0 .423-.155.776-.466 1.059L4.068 18.649z'
        });
      }
    },

    destroyMobileSlider: function() {
      if ( this.$mobileSlider.data( 'flickity' ) ) {
        this.$mobileSlider.flickity( 'destroy' );
      }
    },

    mobileCheck: function() {
      var isMobile = window.innerWidth < 750;

      if ( isMobile ) {
        this.initMobileSlider();
      } else {
        this.destroyMobileSlider();
      }
    }
  });

  return ProductGrid;
})();

theme.Related = (function() {
  function Related(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');

    this.init();
    this.tabs();
    this.recent();
  }

  Related.prototype = $.extend({}, Related.prototype, {
    init: function() {
      var $relatedSection = $('[data-related-section]');
      var productId = $relatedSection.data('product-id');
      var limit = $relatedSection.data('limit');
      var requestUrl = "/recommendations/products?section_id=related&limit="+limit+"&product_id="+productId;

      $.get(requestUrl)
        .done(function(data) {
          var inner = $(data).find('[data-related-section]').html();
          $relatedSection.hide().html(inner).slideDown('slow');
        });
    },

    tabs: function() {
      var ctx = this.$container;

      $('.tab-content-0', ctx).addClass('current');
      $('.tab-link-0', ctx).addClass('current');

      $('ul.tabs > li', ctx).on('click', function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs > li', ctx).removeClass('current');
        $('.tab-content', ctx).removeClass('current');

        $(this).addClass('current');
        $('.tab-content-' + tab_id, ctx).addClass('current');
      })
    },

    recent: function() {
      var howManyToshow = $('#RecentlyViewed').attr('data-limit');

      if($('#RecentlyViewed').length) {
        Shopify.Products.recordRecentlyViewed();
      }

      Shopify.Products.showRecentlyViewed( {
        howManyToShow: howManyToshow || 4,
        onComplete: function() {
          var recentProductsCount = $('#recently-viewed-products .product-item').length;
          if ( recentProductsCount ) {
            $('#RecentlyViewed').fadeIn(100);
            $('.tab-link__recent').removeClass('hide');
          }
        }
      } );
    }
  });

  return Related;
})();

/**
 * Testimonials Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Testimonials section.
 *
   * @namespace testimonials
 */


theme.Testimonials = (function() {
  function Testimonials(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var hasImage = this.hasImage = $container.hasClass('testimonials-with-image');
    var slideshow = this.slideshow = '.testimonials__slider--'+sectionId;
    var $slideshow = this.$slideshow = $(this.slideshow);
    this.init();
  }

  Testimonials.prototype = $.extend({}, Testimonials.prototype, {
    init: function() {

      var $container = this.$container;
      var $slideshow = this.$slideshow;
      var slideshowSettings = {
        centerMode: true,
        centerPadding: 0,
        adaptiveHeight: true,
        prevArrow: "<div class = 'testimonials__slider-arrow testimonials__slider-arrow--left'> <svg width='20px' height='38px' viewBox='0 0 20 38' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g   stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g  transform='translate(-190.000000, -326.000000)' fill='#726D75'><g  transform='translate(0.000000, 1.000000)'><path d='M205.932203,343.648649 L190.466102,327.542998 C190.155366,327.260439 190,326.914314 190,326.504608 C190,326.094902 190.155366,325.734646 190.466102,325.423833 C190.748589,325.141274 191.094631,325 191.504238,325 C191.913844,325 192.259886,325.141274 192.542373,325.423833 L209.533896,342.589069 C209.844632,342.871623 210,343.224816 210,343.648649 C210,344.072482 209.844632,344.425675 209.533896,344.708228 L192.542373,361.873464 C192.259886,362.156021 191.913844,362.297297 191.504238,362.297297 C191.094631,362.297297 190.748589,362.156021 190.466102,361.873464 C190.155366,361.590908 190,361.237717 190,360.813882 C190,360.390047 190.155366,360.036856 190.466102,359.7543 L205.932203,343.648649 Z'   transform='translate(200.000000, 343.648649) rotate(180.000000) translate(-200.000000, -343.648649) '></path></g></g></g></svg></div>",
        nextArrow: "<div class = 'testimonials__slider-arrow testimonials__slider-arrow--right'> <svg width='20px' height='38px' viewBox='0 0 20 38' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <g   stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g  transform='translate(-1231.000000, -323.000000)' fill='#726D75'> <g  transform='translate(0.000000, 1.000000)'> <path d='M1246.9322,340.648649 L1231.4661,324.542998 C1231.15537,324.260439 1231,323.914314 1231,323.504608 C1231,323.094902 1231.15537,322.734646 1231.4661,322.423833 C1231.74859,322.141274 1232.09463,322 1232.50424,322 C1232.91384,322 1233.25989,322.141274 1233.54237,322.423833 L1250.5339,339.589069 C1250.84463,339.871623 1251,340.224816 1251,340.648649 C1251,341.072482 1250.84463,341.425675 1250.5339,341.708228 L1233.54237,358.873464 C1233.25989,359.156021 1232.91384,359.297297 1232.50424,359.297297 C1232.09463,359.297297 1231.74859,359.156021 1231.4661,358.873464 C1231.15537,358.590908 1231,358.237717 1231,357.813882 C1231,357.390047 1231.15537,357.036856 1231.4661,356.7543 L1246.9322,340.648649 Z'  ></path> </g> </g> </g> </svg></div>"
      };

      if (!this.hasImage) {
        slideshowSettings = $.extend({}, slideshowSettings, {responsive: [
          {
            breakpoint: 1339,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]})
      }

      $slideshow.slick(slideshowSettings);

      alignArrows( $container, $slideshow );
      $( $slideshow ).on( 'afterChange', function( event, slick, currentSlide, nextSlide ){
        alignArrows( $container, $slideshow );
      });

      $(window).resize( $.debounce(100, function() {
        alignArrows( $container, $slideshow );
      }));

      function alignArrows( container, testimonialsSlider ){
        var currentSlide = $( testimonialsSlider ).find( '.slick-active' );
        var padding = 40;
        var quotesHeight = 51;
        var textHeight = $( currentSlide ).find( 'blockquote' ).height() - quotesHeight;
        var arrows = $( container ).find( '.testimonials__slider-arrow' );
        var arrowsOffset = padding + quotesHeight + ( textHeight / 2 );

        $( arrows ).css( 'top', arrowsOffset );
      }

    },
    onSelect: function(evt) {
      var $container = this.$container;
      var $slideshow = this.$slideshow;
    },
    onBlockSelect: function(evt) {
      var $slideshow = $(this.slideshow);

      // Ignore the cloned version
      var $slide = $('.testimonial__slide--' + evt.detail.blockId + ':not(.slick-cloned)');
      var slideIndex = $slide.data('slick-index');

      // Go to selected slide, pause autoplay
      // TODO: This is a temporary solution, so as not to break the layout when
      //  adding new slide items to the theme editor.
      //$slideshow.slick('slickGoTo', slideIndex).slick('slickPause');
    }
  });
  return Testimonials;
})();


/**
 * Look Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Look section.
 *
   * @namespace look
 */


theme.Look = (function() {
  function Look(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '.look__slider--'+sectionId;
    var $slideshow = this.$slideshow = $(this.slideshow);
    this.init();
    
    var error_image = function(element, link){
      if ( typeof link !== 'undefined' && link != '' && Shopify.designMode == true ){
        $(element).append('<span class="ig-js-error">Invalid link:<br/>' + link + '</span>');
      }
    }
    var initialize_instagram_image = function(element){
      var instagramLink = $(element).attr('data-url')
      var regex = /(instagram.com|instagr.am)\/p\/([^\/\s\?\#]+)/;
      if ( regex.test(instagramLink) ){
        var found = regex.exec(instagramLink);
        var shortcode = found.slice(-1).pop();
        var oembed_url = 'https://instagram.com/p/' + encodeURIComponent( shortcode ) + '/media/?size=l';
        var request = new XMLHttpRequest();
        request.open('GET', oembed_url, true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {

            $(element).css('background-image', 'url(' + request.responseURL + ')' );

          } else {
            error_image(element, instagramLink);
          }
        };
        request.onerror = function() {
          error_image(element, instagramLink);
        };
        request.send();
      } else {
        error_image(element, instagramLink);
      }
    }
    $('.js-instagram', this.$container).each(function(){
      if ( $(this).is('[data-url]') ){
        initialize_instagram_image(this);
      }
    });


    // Quick view
    $( '.js-trigger-instagram-modal').on('click', function(e) {
        e.preventDefault();
        theme.modal( $(this).data('modal') );
    });

    $('.instagram__oembed__post').each( function() {
      var $wrapper = $(this);
      var link = $wrapper.attr('data-url');
      var oembed_url = 'https://api.instagram.com/oembed/?url=' + encodeURIComponent( link );
      $.getJSON(oembed_url, function(data) {
        $wrapper.html(data.html);
      });
    });

  }

  Look.prototype = $.extend({}, Look.prototype, {
    init: function() {
      var $container = this.$container;
      var $slideshow = this.$slideshow;
      $slideshow.slick({
        centerMode: true,
        centerPadding: 0,
        adaptiveHeight: true,
        prevArrow: "<div class = 'look__slider-arrow look__slider-arrow--left'> <svg width='20px' height='38px' viewBox='0 0 20 38' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g   stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g  transform='translate(-190.000000, -326.000000)' fill='#726D75'><g  transform='translate(0.000000, 1.000000)'><path d='M205.932203,343.648649 L190.466102,327.542998 C190.155366,327.260439 190,326.914314 190,326.504608 C190,326.094902 190.155366,325.734646 190.466102,325.423833 C190.748589,325.141274 191.094631,325 191.504238,325 C191.913844,325 192.259886,325.141274 192.542373,325.423833 L209.533896,342.589069 C209.844632,342.871623 210,343.224816 210,343.648649 C210,344.072482 209.844632,344.425675 209.533896,344.708228 L192.542373,361.873464 C192.259886,362.156021 191.913844,362.297297 191.504238,362.297297 C191.094631,362.297297 190.748589,362.156021 190.466102,361.873464 C190.155366,361.590908 190,361.237717 190,360.813882 C190,360.390047 190.155366,360.036856 190.466102,359.7543 L205.932203,343.648649 Z'   transform='translate(200.000000, 343.648649) rotate(180.000000) translate(-200.000000, -343.648649) '></path></g></g></g></svg></div>",
        nextArrow: "<div class = 'look__slider-arrow look__slider-arrow--right'> <svg width='20px' height='38px' viewBox='0 0 20 38' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <g   stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g  transform='translate(-1231.000000, -323.000000)' fill='#726D75'> <g  transform='translate(0.000000, 1.000000)'> <path d='M1246.9322,340.648649 L1231.4661,324.542998 C1231.15537,324.260439 1231,323.914314 1231,323.504608 C1231,323.094902 1231.15537,322.734646 1231.4661,322.423833 C1231.74859,322.141274 1232.09463,322 1232.50424,322 C1232.91384,322 1233.25989,322.141274 1233.54237,322.423833 L1250.5339,339.589069 C1250.84463,339.871623 1251,340.224816 1251,340.648649 C1251,341.072482 1250.84463,341.425675 1250.5339,341.708228 L1233.54237,358.873464 C1233.25989,359.156021 1232.91384,359.297297 1232.50424,359.297297 C1232.09463,359.297297 1231.74859,359.156021 1231.4661,358.873464 C1231.15537,358.590908 1231,358.237717 1231,357.813882 C1231,357.390047 1231.15537,357.036856 1231.4661,356.7543 L1246.9322,340.648649 Z'  ></path> </g> </g> </g> </svg></div>",
      });
    },
    onSelect: function(evt) {
      var $container = this.$container;
      var $slideshow = this.$slideshow;
    },
    onBlockSelect: function(evt) {
      var $slideshow = $(this.slideshow);

      // Ignore the cloned version
      var $slide = $('.look__slide--' + evt.detail.blockId + ':not(.slick-cloned)');
      var slideIndex = $slide.data('slick-index');

      // Go to selected slide, pause autoplay
      $slideshow.slick('slickGoTo', slideIndex).slick('slickPause');
    }
  });
  return Look;
})();

theme.ImageWithText = (function() {
  function ImageWithText(container) {
    var $container = this.$container = $(container);
    var id = this.id =  $container.attr('data-section-id');
    var $videoPlay = $container.find('.image__video__play');

    $videoPlay.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      closeBtnInside: false,
      preloader: false,
      fixedContentPos: false,
      closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close-thin" viewBox="0 0 27 27"><g stroke="#979797" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M.5.5l26 26M26.5.5l-26 26"></path></g></svg></button>',
      iframe: {
        patterns: {
          youtube: {
            src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
          },
          vimeo: {
            src: '//player.vimeo.com/video/%id%?autoplay=1'
          }
        }
      }
    });
  }

  return ImageWithText;
})();

theme.Instagram = (function() {
  function Instagram(container) {
    var $container = this.$container = $(container);
    var id = $container.attr('data-section-id');
    var $instafeedEl = this.instagram = $('#Instafeed-' + id);
    var instafeedId = this.instagram = 'Instafeed-' + id;

    var apiSuccess = 0;
    var imageLimit = $instafeedEl.attr('data-count');

    var pinnedPosts = [];
    var add_pinned_post_to_filter = function(element){
      var oembed_url = 'https://api.instagram.com/oembed/?url=' + encodeURIComponent($(element).attr('data-url'));
      $.getJSON(oembed_url, function(data) {
        pinnedPosts.push(data.media_id);
      });
    }

    var error_image = function(element, link){
      if ( typeof link !== 'undefined' && link != '' && Shopify.designMode == true ){
        $(element).append('<span class="ig-js-error">Invalid link:<br/>' + link + '</span>');
      }
    }

    var initialize_instagram_image = function(element){
      var instagramLink = $(element).attr('data-url')
      var regex = /(instagram.com|instagr.am)\/p\/([^\/\s\?\#]+)/;
      if ( regex.test(instagramLink) ){
        var found = regex.exec(instagramLink);
        var shortcode = found.slice(-1).pop();
        var oembed_url = 'https://instagram.com/p/' + encodeURIComponent( shortcode ) + '/media/?size=l';
        var request = new XMLHttpRequest();
        request.open('GET', oembed_url, true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {

            $(element).css('background-image', 'url(' + request.responseURL + ')' );

          } else {
            error_image(element, instagramLink);
          }
        };
        request.onerror = function() {
          error_image(element, instagramLink);
        };
        request.send();
      } else {
        error_image(element, instagramLink);
      }
    }
    $('.js-instagram', this.$container).each(function(){
      if ( $(this).is('[data-url]') ){
        initialize_instagram_image(this);
        add_pinned_post_to_filter(this);
      }
    });

    var userFeed = new Instafeed({
      get: 'user',
      userId: 'self',
      target: instafeedId,
      accessToken: $instafeedEl.attr('data-access-token'),
      sortBy: 'most-recent',
      resolution: 'standard_resolution',
      template: '<a href="{{link}}" target="_blank" style="background-image: url({{image}});" data-aos="fade-up" class="grid__item instagram--square '+$instafeedEl.attr('data-grid')+'"><span class="visually-hidden">Instagram</span></a>',
      limit: 24,
      filter: function(image) {
          if (image.id && apiSuccess < imageLimit && pinnedPosts.indexOf(image.id ) === -1 ) {
              apiSuccess = apiSuccess + 1;
              return true;
          }
          return false;
      },
      after: function() {
        $instafeedEl.children().unwrap();
      }
    });
    if( typeof userFeed.options.accessToken != "undefined" ){
      userFeed.run();
    }
  }

  Instagram.prototype =  $.extend({}, Instagram.prototype, {});

  return Instagram;
})();

theme.Overflow = (function() {
  function Overflow(container) {
    this.init();
  }
  Overflow.prototype =  $.extend({}, Overflow.prototype, {
    init: function(){
        theme.preventOverflow();
    }
  });
  return Overflow;
})();

theme.Blog = (function() {
  function Blog(container) {
    var self = this;
    var $container = this.$container = $(container);
    var id = this.id =  $container.attr('data-section-id');
    var isBlogSection = $container.hasClass('blog-section');

    this.enableEndlessScroll = $( 'body' ).data( 'endless-scroll' );
    this.truncateAll($container, isBlogSection);
    this.checkMobile();

    if ( this.enableEndlessScroll ) {
      this.endlessScroll();
    }

    $(window).on( 'resize', $.debounce( 100, function() {
      self.truncateAll($container, isBlogSection)
      self.checkMobile();
    } ));
  }

  Blog.prototype = $.extend({}, Blog.prototype, {
    truncateAll: function($container, isBlogSection) {
      $container.find('.article__excerpt').trunk8({
        lines: 3
      });

      if (isBlogSection) {
        $container.find('.article__title > a').trunk8();
      }
    },

    setHeights: function(container){
      var content = $(container).find('.featured-blog__content');
      if(!$(content).hasClass('onboarding-blog-content')){
        var tallestContent = 0;
        $(content).each(function(){
          var titleHeight = $(this).find('.h5').height();
          var dateHeight = $(this).find('.featured-blog__date').height();
          var excerptHeight = $(this).find('.excerpt').height();
          var currentContent = titleHeight + dateHeight + excerptHeight;
          if(currentContent > tallestContent){
            tallestContent = currentContent;
          }
        });
        tallestContent = tallestContent + 75;
        $(content).css('height', tallestContent);
      }
    },

    checkMobile: function() {
      var windowWidth = $(window).width();

      if ( windowWidth < 750 ) {
        this.initSlider();
      } else {
        this.destroySlider();
      }
    },

    initSlider: function() {
      var $slider = this.$container.find('.blog-listing');
      if ( !$slider.hasClass( 'slick-initialized' ) ) {
        $slider.slick({
          arrows: true,
          adaptiveHeight: true,
          prevArrow: '<div class="blog-listing-arrow blog-listing-arrow--left"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow-left" viewBox="0 0 20 38"><path d="M4.068 18.649l15.466 16.105c.31.283.466.629.466 1.039 0 .41-.155.77-.466 1.08a1.412 1.412 0 0 1-1.038.424c-.41 0-.756-.141-1.038-.424L.466 19.708A1.373 1.373 0 0 1 0 18.648c0-.423.155-.776.466-1.059L17.458.424A1.412 1.412 0 0 1 18.496 0c.41 0 .755.141 1.038.424.31.282.466.636.466 1.06 0 .423-.155.776-.466 1.059L4.068 18.649z" fill="#726D75" fill-rule="evenodd"></path></svg></div>',
          nextArrow: '<div class="blog-listing-arrow blog-listing-arrow--right"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-arrow-right" viewBox="0 0 20 38"><path d="M15.932 18.649L.466 2.543A1.35 1.35 0 0 1 0 1.505c0-.41.155-.77.466-1.081A1.412 1.412 0 0 1 1.504 0c.41 0 .756.141 1.038.424l16.992 17.165c.31.283.466.636.466 1.06 0 .423-.155.777-.466 1.06L2.542 36.872a1.412 1.412 0 0 1-1.038.424c-.41 0-.755-.141-1.038-.424A1.373 1.373 0 0 1 0 35.813c0-.423.155-.776.466-1.059L15.932 18.65z" fill="#726D75" fill-rule="evenodd"></path></svg></div>',
        });
      }
    },

    destroySlider: function() {
      var $slider = this.$container.find('.blog-listing');

      if ( $slider.hasClass( 'slick-initialized' ) ) {
        $slider.slick( 'unslick' );
      }
    },

    endlessScroll: function() {
      // Initialize infinity scroll
      var BlogLoop = '#BlogLoop';
      var BlogPagination = '#BlogPagination';
      var endlessScroll = new Ajaxinate({
          container: BlogLoop,
          pagination: BlogPagination,
          callback: function( data ) {
            if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
                Currency.convertAll(shopCurrency, $('[name=currencies]').val());
            }

            // Trigger scroll in order to fade in the new loaded elements
            $( window ).trigger( 'scroll' );
          }
      });
    },

    onBlockSelect: function(evt) {
      var $slider = $(evt.target).parents('.blog-listing');
      var slideIndex = $(evt.target).index();

      if ( $slider.hasClass( 'slick-initialized' ) ) {
        $slider.slick( 'goToSlide', slideIndex );
      }
    },

    onUnload: function(evt) {
      var $slider = $(evt.target).parents('.blog-listing');

      if ( $slider.hasClass( 'slick-initialized' ) ) {
        $slider.slick( 'unslick' );
      }
    }
  });

  return Blog;
})();

/**
 * Editorial Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Editorial section.
 *
   * @namespace editorial
 */


theme.Editorial = (function() {
  function Editorial(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '.editorial__slider--'+sectionId;
    var $slideshow = this.$slideshow = $(this.slideshow);
    this.init();
  }

  Editorial.prototype = $.extend({}, Editorial.prototype, {
    init: function() {
      var $container = this.$container;
      var $slideshow = this.$slideshow;
      $slideshow.slick({
        centerMode: true,
        centerPadding: 0,
        adaptiveHeight: true,
        prevArrow: "<div class = 'editorial__slider-arrow editorial__slider-arrow--left'> <svg width='20px' height='38px' viewBox='0 0 20 38' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g   stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g  transform='translate(-190.000000, -326.000000)' fill='#726D75'><g  transform='translate(0.000000, 1.000000)'><path d='M205.932203,343.648649 L190.466102,327.542998 C190.155366,327.260439 190,326.914314 190,326.504608 C190,326.094902 190.155366,325.734646 190.466102,325.423833 C190.748589,325.141274 191.094631,325 191.504238,325 C191.913844,325 192.259886,325.141274 192.542373,325.423833 L209.533896,342.589069 C209.844632,342.871623 210,343.224816 210,343.648649 C210,344.072482 209.844632,344.425675 209.533896,344.708228 L192.542373,361.873464 C192.259886,362.156021 191.913844,362.297297 191.504238,362.297297 C191.094631,362.297297 190.748589,362.156021 190.466102,361.873464 C190.155366,361.590908 190,361.237717 190,360.813882 C190,360.390047 190.155366,360.036856 190.466102,359.7543 L205.932203,343.648649 Z'   transform='translate(200.000000, 343.648649) rotate(180.000000) translate(-200.000000, -343.648649) '></path></g></g></g></svg></div>",
        nextArrow: "<div class = 'editorial__slider-arrow editorial__slider-arrow--right'> <svg width='20px' height='38px' viewBox='0 0 20 38' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <g   stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g  transform='translate(-1231.000000, -323.000000)' fill='#726D75'> <g  transform='translate(0.000000, 1.000000)'> <path d='M1246.9322,340.648649 L1231.4661,324.542998 C1231.15537,324.260439 1231,323.914314 1231,323.504608 C1231,323.094902 1231.15537,322.734646 1231.4661,322.423833 C1231.74859,322.141274 1232.09463,322 1232.50424,322 C1232.91384,322 1233.25989,322.141274 1233.54237,322.423833 L1250.5339,339.589069 C1250.84463,339.871623 1251,340.224816 1251,340.648649 C1251,341.072482 1250.84463,341.425675 1250.5339,341.708228 L1233.54237,358.873464 C1233.25989,359.156021 1232.91384,359.297297 1232.50424,359.297297 C1232.09463,359.297297 1231.74859,359.156021 1231.4661,358.873464 C1231.15537,358.590908 1231,358.237717 1231,357.813882 C1231,357.390047 1231.15537,357.036856 1231.4661,356.7543 L1246.9322,340.648649 Z'  ></path> </g> </g> </g> </svg></div>",
      });
    },
    onSelect: function(evt) {
      var $container = this.$container;
      var $slideshow = this.$slideshow;
    },
    onBlockSelect: function(evt) {
      var $slideshow = $(this.slideshow);

      // Ignore the cloned version
      var $slide = $('.editorial__slide--' + evt.detail.blockId + ':not(.slick-cloned)');
      var slideIndex = $slide.data('slick-index');

      // Go to selected slide, pause autoplay
      $slideshow.slick('slickGoTo', slideIndex).slick('slickPause');
    }
  });
  return Editorial;
})();

/**
 * FeaturedVideo Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the FeaturedVideo template.
 *
   * @namespace FeaturedVideo
 */

theme.FeaturedVideo = (function() {
  /**
   * FeaturedVideo section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */

  function FeaturedVideo(container) {
    var $container = this.$container = $(container);

    this.setMinHeight();
    $(window).on( 'resize', $.debounce( 250, function() {
      self.setMinHeight();
    } ));
    
    $('.js-video__play', $container).magnificPopup({
      closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close-thin" viewBox="0 0 27 27"><g stroke="#979797" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M.5.5l26 26M26.5.5l-26 26"></path></g></svg></button>',
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0modestbranding=0' // URL that will be set as a source for iframe.
          }
        },
        srcAction: 'iframe_src' // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      }
    });
  }

  FeaturedVideo.prototype = $.extend({}, FeaturedVideo.prototype, {
    setMinHeight: function() {
      var isFirstSection = this.$container.closest( '.shopify-section' ).index() == 0;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var headerHeight = windowWidth >= 750 ? $('.header__content').height() : 0;
      if ( !isFirstSection ) headerHeight = 0;
      var contentHeight = this.$container.find( '.hero__content' ).outerHeight();
      var minHeight = headerHeight + contentHeight;

      this.$container
        .css( 'min-height', minHeight )
        .find( '.hero__content__wrapper' )
          .css( 'padding-top', headerHeight );
    },

    onReorder: function() {
      this.setMinHeight();
    }
  });

  return FeaturedVideo;
})();

/**
 * FeaturedBackgroundVideo Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the FeaturedBackgroundVideo template.
 *
   * @namespace FeaturedBackgroundVideo
 */

theme.FeaturedBackgroundVideo = (function() {
  /**
   * FeaturedBackgroundVideo section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */

  var players = [];
  var isYoutubeAPIReady = false;
  var defaultYoutubeOptions = {
      height: '720',
      width: '1280',
      playerVars: {
        cc_load_policy: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        autohide: 0,
        controls: 0,
        branding: 0,
        showinfo: 0,
        rel: 0,
        fs: 0,
        wmode: 'opaque'
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
  };

  function FeaturedBackgroundVideo(container) {
    var self = this;
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.attr('data-section-id');
    var $player = this.$player = $container.find('.video__iframe');

    this.setMinHeight();
    $(window).on( 'resize', $.debounce( 250, function() {
      self.setMinHeight();
    } ));

    if ($player.length) {
      this.playerID = $player.find('[data-youtube-wrapper]').attr('id');
      this.videoID = $player.data('video-id');
      this.videoType = $player.data('video-type');
      this.init();
    }

    $container.on('touchstart', '.video-wrapper', function(e) {
      var playerID = $(this).find('.video__iframe').attr('id');
      players[playerID].playVideo();
    });
  }

  function onPlayerReady(event) {
    var id = $(event.target.a).attr('id');
    var enableSound = $( '#' + id ).data( 'enable-sound' );

    $(event.target.a).attr('tabindex', '-1');
    
    if ( enableSound ) {
      event.target.unMute();
    } else {
      event.target.mute();
    }
    event.target.playVideo();

    checkPlayerVisibility(id);

    $(window).on('scroll.' + id, { id: id }, $.throttle(150, checkPlayerVisibility));
  }

  function onPlayerStateChange(event) {
    // Loop video if state is ended
    if (event.data == 0) {
      event.target.playVideo();
    }
    if (event.data == 1) {
      // video is playing
      $(event.target.a).parent().addClass('loaded');
    }
  }

  function checkPlayerVisibility(id) {
    if ( typeof id === 'string' ) {
      var playerID = id;
    } else if ( id.data != undefined ) {
      var playerID = id.data.id;
    } else {
      return false;
    }

    var playerElement = document.getElementById(playerID + '-container');
    var player = players[playerID];
    var box = playerElement.getBoundingClientRect();
    var isVisible = visibilityHelper.isElementPartiallyVisible(playerElement) || visibilityHelper.isElementTotallyVisible(playerElement);

    // Fix the issue when element height is bigger than the viewport height
    if (box.top < 0 && playerElement.clientHeight + box.top >= 0) {
      isVisible = true;
    }

    if (isVisible && player && typeof player.playVideo === 'function') {
      player.playVideo();
    } else if (!isVisible && player && typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
  }

  FeaturedBackgroundVideo.prototype = $.extend({}, FeaturedBackgroundVideo.prototype, {
    init: function() {

      if ( this.videoType == 'youtube'){

        if ( isYoutubeAPIReady ) {
          this.loadYoutubePlayer();
        } else {
          // Load Youtube API if not loaded yet
          window.loadYoutubeAPI();
          $('body').on('youtubeAPIReady', this.loadYoutubePlayer.bind(this));
        }
      }
      else if ( this.videoType == 'vimeo'){
        var oembed_url = 'https://vimeo.com/api/oembed.json'
        var vimeo_url = 'https://vimeo.com/' + this.videoID;

        var params = {
          url: vimeo_url,
          background: true,
          muted: true,
          autoplay: true
        }
        var state = this;
        $.getJSON(oembed_url, params, function(data) {
          state.$player.html(data.html);
          setTimeout(function() {
            state.$player.parent().addClass('loaded');
          }, 1000);
        })
      }
    },

    setMinHeight: function() {
      var isFirstSection = this.$container.closest( '.shopify-section' ).index() == 0;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var headerHeight = windowWidth >= 750 ? $('.header__content').height() : 0;
      if ( !isFirstSection ) headerHeight = 0;
      var contentHeight = this.$container.find( '.hero__content' ).outerHeight();
      var minHeight = headerHeight + contentHeight;

      this.$container
        .css( 'min-height', minHeight )
        .find( '.hero__content__wrapper' )
          .css( 'padding-top', headerHeight );
    },

    loadYoutubePlayer: function() {
      var currentYoutubeOptions = $.extend({}, defaultYoutubeOptions);
      currentYoutubeOptions.videoId = this.videoID;
      if (this.videoID.length){
        players[this.playerID] = new YT.Player( this.playerID , currentYoutubeOptions );
      }
      isYoutubeAPIReady = true;
    },

    onReorder: function() {
      this.setMinHeight();
    },

    onUnload: function(evt) {
      var playerID = 'youtube-' + this.$container.data('section-id');
      players[playerID].destroy();
    }
  });

  return FeaturedBackgroundVideo;
})();

theme.Hero = (function() {
  function Hero(container) {
    var self = this;
    var $container = this.$container = $(container);
    var id = this.id =  $container.attr('data-section-id');
    var $featuredImage = this.$featuredImage = $('#FeaturedImage-'+id);
    var featuredImageSelector = this.featuredImageSelector = '#FeaturedImage-'+id;
    var parallaxSliderSelector = this.parallaxSliderSelector = '#FeaturedImage-'+id + " .parallax-slider";

    this.init();
    this.setMinHeight();
    $(window).on( 'resize', $.debounce( 250, function() {
      self.setMinHeight();
    } ));
  }

  Hero.prototype =  $.extend({}, Hero.prototype, {
    init: function(){
      var parallaxSliderSelector = this.parallaxSliderSelector = '#FeaturedImage-'+ this.id + " .parallax-slider";
      if (this.$featuredImage.attr('data-parallax-src')) {
        this.$featuredImage.parallax({
          src: this.$featuredImage.data('parallax-src'),
          parallax: 'scroll',
          bleed: 55,
          excludeAgents: /(iPod)/,
          mirrorSelector: this.featuredImageSelector
        });

        var parallaxSlider = this.parallaxSliderSelector;
        $.each( $(this.featuredImageSelector).data(), function(key,val){
          if (key == 'widths' ){
           val = "[" + val + "]"
          }
          var kebabKey = "data-" + key;
          kebabKey = kebabKey.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
          $(parallaxSlider).attr( kebabKey, val );
        });
        $(parallaxSlider).addClass('lazyload');
      }
    },

    setMinHeight: function() {
      var isFirstSection = this.$container.closest( '.shopify-section' ).index() == 0;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var isHeaderTransparent = $('.site-header').hasClass( 'header--transparent' );
      var headerHeight = windowWidth >= 750 ? $('.header__content').height() : 0;
      if ( !isFirstSection ) headerHeight = 0;
      var contentHeight = this.$container.find( '.hero__content' ).outerHeight();
      var minHeight = headerHeight + contentHeight;

      if ( isHeaderTransparent) {
        this.$container
          .find( '.collection__image' )
            .css( 'min-height', minHeight )
          .end()
          .find( '.hero__content__wrapper' )
            .css( 'padding-top', headerHeight );
      } else {
        this.$container
          .find( '.hero__content__wrapper' )
            .css( 'padding-top', 0 );
      }
    },

    onReorder: function() {
      this.setMinHeight();
    },

    onUnload: function() {
      if (this.$featuredImage.attr('data-img-src')) {
        this.$featuredImage.parallax('destroy');
      }
    }
  });
  return Hero;
})();

theme.Map = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];

  function Map(container) {
    theme.$currentMapContainer = this.$container = $(container);
    var key = this.$container.data('api-key');
    var zoom = this.zoom = this.$container.data('zoom');
    var style = this.style = this.$container.data('style');
    this.init();

    if (typeof key !== 'string' || key === '') {
      return;
    }

    if (apiStatus === 'loaded') {
      var self = this;

      // Check if the script has previously been loaded with this key
      var $script = $('script[src*="' + key + '&"]');
      if ($script.length === 0) {
        $.getScript(
          'https://maps.googleapis.com/maps/api/js?key=' + key
        ).then(function() {
          apiStatus = 'loaded';
          self.createMap();
        });
      } else {
        this.createMap();
      }
    } else {
      mapsToLoad.push(this);
      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          $.getScript(
            'https://maps.googleapis.com/maps/api/js?key=' + key
          ).then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {

      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data('address-setting');

    geocoder.geocode({ address: address }, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = $.extend({}, Map.prototype, {
    init: function(){
      theme.preventOverflow();
    },
    createMap: function() {
      var $map = this.$container.find('.map-section__container');

      var standard =[];
      var silver =[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];
      var retro =[{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}];
      var dark =[{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}];
      var night =[{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}];
      var aubergine =[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}];

      var styles = '';
      if(this.style == 'standard'){
        styles = standard;
      } else if (this.style == 'silver'){
        styles = silver;
      } else if (this.style == 'retro'){
        styles = retro;
      } else if (this.style == 'dark'){
        styles = dark;
      } else if (this.style == 'night'){
        styles = night;
      } else {
        styles = aubergine;
      }

      return geolocate($map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: this.zoom,
              styles: styles,
              center: results[0].geometry.location,
              draggable: true,
              clickableIcons: false,
              scrollwheel: false,
              zoomControl: true,
              disableDefaultUI: true
            };

            var map = (this.map = new google.maps.Map($map[0], mapOptions));
            var center = (this.center = map.getCenter());

            //eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: center
            });

            google.maps.event.addDomListener(window, 'resize', function() {
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center);
            });
          }.bind(this)
        )
        .fail(function() {
          var errorMessage;

          switch (status) {
            case 'ZERO_RESULTS':
              errorMessage = theme.strings.addressNoResults;
              break;
            case 'OVER_QUERY_LIMIT':
              errorMessage = theme.strings.addressQueryLimit;
              break;
            default:
              errorMessage = theme.strings.addressError;
              break;
          }

          // Only show error in the theme editor
          if (Shopify.designMode) {
            var $mapContainer = $map.parents('.map-section');

            $mapContainer.addClass('page-width map-section--load-error');
            $mapContainer
              .find('.map-section__wrapper')
              .html(
                '<div class="errors text-center">' + errorMessage + '</div>'
              );
          }
        });
    },

    onUnload: function() {
      if (typeof window.google !== 'undefined') {
        google.maps.event.clearListeners(this.map, 'resize');
      }
    }
  });

  return Map;
})();

// Global function called by Google on auth errors.
// Show an auto error message on all map instances.
// eslint-disable-next-line camelcase, no-unused-vars
function gm_authFailure() {
  if (!Shopify.designMode) return;

  theme.$currentMapContainer.addClass('page-width map-section--load-error');
  theme.$currentMapContainer
    .find('.map-section__wrapper')
    .html(
      '<div class="errors text-center">' + theme.strings.authError + '</div>'
    );
}

theme.Slideshow = (function() {
  function Slideshow(container) {
    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');
    var slideshow = this.slideshow = '#slideshow-'+sectionId;
    var $slideshow = this.$slideshow = $(this.slideshow);

    this.init();
  }

  Slideshow.prototype = $.extend({}, Slideshow.prototype, {
    init: function() {
      var self = this;
      var $container = this.$container;
      var $slideshow = this.$slideshow;
      var isFirstSection = $slideshow.index() == 0;

      $slideshow.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $slider = slick.$slider;
        var $currentSlide = $slider.find('.slick-current');
        var $nextSlide = $slider.find('.slideshow__slide[data-slick-index="' + nextSlide + '"]');

        slick.$prevArrow.removeClass('text-light text-dark');
        slick.$prevArrow.addClass($nextSlide.data("color"));

        slick.$nextArrow.removeClass('text-light text-dark');
        slick.$nextArrow.addClass($nextSlide.data("color"));

        $container.removeClass('transparent__wrapper');
        if ( $nextSlide.find('.hero__content__wrapper').hasClass('hero__content--transparent') ){
          $container.addClass('transparent__wrapper');
        }

        if ( isFirstSection ) {
          var slideHeight = $nextSlide.outerHeight();
          $slideshow.parent().css( 'min-height', slideHeight );
        }
      });
      $slideshow.slick({
        autoplay: $slideshow.data('autoplay'),
        autoplaySpeed: $slideshow.data('speed'),
        prevArrow: $container.find('[data-prev-arrow]'),
        nextArrow: $container.find('[data-next-arrow]'),
        dots: $slideshow.data('dots'),
        adaptiveHeight: true,
      });

      this.setSlideshowHeight();

      $(window).on( 'resize', $.debounce( 250, function() {
        self.setSlideshowHeight();
      } ));
    },

    setSlideshowHeight: function() {
      var $slideshow = this.$slideshow;

      $slideshow.find( '.slick-current' ).each( function() {
        var $slide = $(this);
        var slideAspectRatio = $slide.find( '.slide-image-img' ).data( 'aspectratio' );
        var slideWidth = $slide.width();
        var slideHeight = parseInt( slideWidth / slideAspectRatio );

        if ( slideHeight ) {
          $slide.height( slideHeight );
          $slideshow.parent().css( 'min-height', slideHeight );
        }
      });

      this.setMinHeight();
    },

    setMinHeight: function() {
      var $slideshow = this.$slideshow;
      var isFirstSection = this.$slideshow.index() == 0;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if ( isFirstSection ) {
        
        var headerHeight = windowWidth >= 750 ? $('.header__content').height() : 0;
        var sliderHeight = this.$slideshow.find( '.slick-current .hero__content' ).outerHeight();
        var extraPadding = windowWidth >= 750 ? 120 : 40;
        var minHeight = headerHeight + sliderHeight + extraPadding;

        $slideshow.find( '.hero__content__wrapper' ).css({ 
          'padding-top': headerHeight,
          'margin-top': 0
        });
      }

      $slideshow.find( '.slick-slide' ).each( function() {
        var $slide = $(this);
        var slideAspectRatio = $slide.find( '.slide-image-img' ).data( 'aspectratio' );
        var slideWidth = $slide.width();
        var slideHeight = parseInt( slideWidth / slideAspectRatio ) || 0;
        var isCurrentSlide = $slide.hasClass( 'slick-current' );

        if ( isFirstSection && slideHeight < minHeight ) {
          slideHeight = minHeight;
        }

        $slide.css( 'min-height', slideHeight );
        $slide.find( '.hero__content__wrapper' ).css( 'min-height', slideHeight );

        if ( isCurrentSlide ) {
          $slideshow.parent().css( 'min-height', slideHeight );  

          if ( $slideshow.hasClass( 'slick-initialized' ) ) {
            $slideshow.slick('setPosition');
          }
        }
      });
    },

    onUnload: function() {
      var $slideshow = $(this.slideshow);
      $slideshow.slick( 'unslick' );
    },
    onBlockSelect: function(evt) {
      var $slideshow = $(this.slideshow);

      // Ignore the cloned version
      var $slide = $('.slideshow__slide--' + evt.detail.blockId + ':not(.slick-cloned)');
      var slideIndex = $slide.data('slick-index');

      // Go to selected slide, pause autoplay
      $slideshow.slick('slickGoTo', slideIndex).slick('slickPause');
    }
  });
  return Slideshow;
})();

theme.LogoList = (function() {
  function LogoList(container) {
    var $container = this.$container = $(container);
    var sectionId = this.sectionId = $container.data( 'section-id' );
    var $slideshowText = this.$slideshowText = $(container).find( '.js-logo-list__slider-text' );
    var $slideshowNav = this.$slideshowNav = $(container).find( '.js-logo-list__slider' );

    this.init();
  }

  LogoList.prototype = $.extend({}, LogoList.prototype, {
    init: function() {
      var $container = this.$container;
      var $slideshowText = this.$slideshowText;
      var $slideshowNav = this.$slideshowNav;

      var options = {
        vertical: true,
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 1,
        dots: false,
        arrows: false        
      }
      
      $slideshowText.slick( options );

      $slideshowNav.on( 'click', '.logo-list__slide', function() {
        var index = $(this).data( 'slick-index' );
        
        $(this).addClass( 'is-active' ).siblings().removeClass( 'is-active' );
        $slideshowText.slick( 'slickGoTo', index );
      } );

      this.initSlideshowNav();
    },
    onUnload: function() {
      var slickInitialized = this.$slideshowNav.hasClass( 'slick-initialized' );
      if ( slickInitialized ) {
        this.$slideshowNav.slick( 'unslick' );
      }

      this.$slideshowText.slick( 'unslick' );
    },
    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = this.$slideshowText.find( '.logo-list__slide--' + evt.detail.blockId + ':not(.slick-cloned)' );
      var slideIndex = $slide.data( 'slick-index' );
      var slickInitialized = this.$slideshowNav.hasClass( 'slick-initialized' );
      if ( slickInitialized ) {
        this.$slideshowNav.slick( 'slickGoTo', slideIndex ).slick( 'slickPause' );
      }

      // Go to selected slide, pause autoplay
      this.$slideshowText.slick( 'slickGoTo', slideIndex ).slick( 'slickPause' );
      this.$slideshowNav.find( '.logo-list__slide' ).eq( slideIndex ).addClass( 'is-active' ).siblings().removeClass( 'is-active' );
    },
    onBlockDeselect: function(evt) {
      var slickInitialized = this.$slideshowNav.hasClass( 'slick-initialized' );
      if ( slickInitialized ) {
        this.$slideshowNav.slick( 'slickPlay' );
      }
    },
    initSlideshowNav: function() {
      var self = this;
      var options = {
        infinite: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 8,
        swipe: false,
        dots: false,
        arrows: true,
        prevArrow: self.$container.find('[data-prev-arrow]'),
        nextArrow: self.$container.find('[data-next-arrow]'),
        asNavFor: '#logo-list__slider-text--' + self.sectionId,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 6
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };

      setSlideshowNavState();
      $( window ).on( 'resize', $.debounce( 100, setSlideshowNavState ) );

      function setSlideshowNavState() {
        var slidesCount = self.$slideshowNav.find( '.logo-list__slide' ).length;
        var slideWidth = 160;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var slidesWidth = slidesCount * slideWidth;
        var slickInitialized = self.$slideshowNav.hasClass( 'slick-initialized' );

        if ( slidesWidth > windowWidth ) {
          if ( !slickInitialized ) {
            self.$slideshowNav.slick( options );
            self.$slideshowNav.on( 'afterChange', function(slick, currentSlide, nextSlide ) {
                self.$slideshowNav.find( '.slick-current' ).addClass( 'is-active' ).siblings().removeClass( 'is-active' );
            });
          }
        } else if ( slickInitialized ) {
          self.$slideshowNav.slick( 'unslick' );
        }
      }
    }
  });
  return LogoList;
})();

theme.$body = $('body');
theme.bodyHeight = theme.$body.height();

theme.Footer = (function() {
  function Footer(container) {
    var $container = this.$container = $(container);
    var id = this.id =  $container.attr('data-section-id');
    var $featuredImage = this.$featuredImage = $('#FeaturedImage-'+id);
    var featuredImageSelector = this.featuredImageSelector = '#FeaturedImage-'+id;
    var parallaxSliderSelector = this.parallaxSliderSelector = '#FeaturedImage-'+id + " .parallax-slider";

    stickyFooter();
    $(window).resize(function() {
        stickyFooter();
    });
    this.init();
  }

  function stickyFooter() {
    var $siteContainer = $('#SiteContainer');
    $siteContainer.css('min-height', $(window).height() - $('#Footer').height());
  }

  Footer.prototype =  $.extend({}, Footer.prototype, {

    init: function(){
      var parallaxSliderSelector = this.parallaxSliderSelector = '#FeaturedImage-'+ this.id + " .parallax-slider";
      if (this.$featuredImage.attr('data-parallax-src')) {
        this.$featuredImage.parallax({
          src: this.$featuredImage.data('parallax-src'),
          parallax: 'scroll',
          bleed: 55,
          excludeAgents: /(iPod)/,
          mirrorSelector: this.featuredImageSelector
        });

        var parallaxSlider = this.parallaxSliderSelector;
        $.each( $(this.featuredImageSelector).data(), function(key,val){
          if (key == 'widths' ){
           val = "[" + val + "]"
          }
          var kebabKey = "data-" + key;
          kebabKey = kebabKey.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
          $(parallaxSlider).attr( kebabKey, val );
        });
        $('.image-overlay', this.$container).appendTo( $('.parallax-mirror', this.$container) );
        $(parallaxSlider).addClass('lazyload');
      }

      function watchBodyHeight(){
        if ( theme.bodyHeight != theme.$body.height() )
          {
              $(window).resize();
              theme.bodyHeight = theme.$body.height();
          }
          setTimeout(watchBodyHeight, 3000);
      }
      watchBodyHeight();

    },
    onUnload: function() {
      if (this.$featuredImage.attr('data-img-src')) {
        this.$featuredImage.parallax('destroy');
      }
    }
  });

  return Footer;
})();

/**
 * Cart functions
 * ------------------------------------------------------------------------------
 * Functions that should execute everywhere
 *
 */

theme.Cart = (function() {
  function Cart(container) {
    this.init();
    $('[data-cart-additional]').appendTo('[data-additional-insert]').slideDown('slow');

  }
  Cart.prototype =  $.extend({}, Cart.prototype, {
    init: function(){
      this.initQuantity();

      $('.show-calculator').off().on('click', function() {
        $('#ShippingCalculator').slideToggle();
        $(this).toggleClass('open');
      });
      $('.show-note').off().on('click', function() {
        $('#NoteForSeller').slideToggle();
        $(this).toggleClass('open');
      });

      Shopify.Cart.ShippingCalculator.show( {
        submitButton: theme.strings.shippingCalcSubmitButton,
        submitButtonDisabled: theme.strings.shippingCalcSubmitButtonDisabled,
        customerIsLoggedIn: theme.strings.shippingCalcCustomerIsLoggedIn,
        moneyFormat: theme.strings.shippingCalcMoneyFormat
      });

      if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
        Currency.convertAll(shopCurrency, $('[name=currencies]').val());
      }
    },
    initQuantity: function() {
      var instance = this;
      $('.js-qty__adjust').off().on('click', function() {
        var $element = $(this);

        $element.prop('disabled', true)
          .parents('.js-qty').addClass('qty--disabled')
          .end()
          .siblings().prop('disabled', true);

        if ($element.hasClass('js-qty__adjust--plus')){
          var addVariant = $element.data('variant');
          // we use the add endpoint because it returns stockout errors
          instance.changeQuantity('/cart/add.js', 1, addVariant);
        } else {
          var newQuantity = parseInt($element.data('new-quantity'));
          var itemKey = $element.data('line-key');
          // stockout is not an issue for decrease so we use change with the item key
          instance.changeQuantity('/cart/change.js', newQuantity, itemKey);
        }
      });
    },
    changeQuantity: function(endpoint, quantity, id) {
      var instance = this;
      var data = {
        quantity: quantity,
        id: id
      }
      var params = {
        type: 'POST',
        url: endpoint,
        data: data,
        dataType: 'json',
        error: function(XMLHttpRequest, textStatus) {
          var $errors = $('[data-form-errors]');
          $errors.slideUp('fast');
          $errors.empty().html(XMLHttpRequest.responseJSON.description).slideDown('fast');
        },
        complete: function(jqxhr, text) {
          $.get('/cart?view=ajax')
           .done(function(data) {
             // data-cart-additional -- we move the section-settings generated
             // markup around because it cannot be included in our ajax request
             $('[data-cart-additional]').slideUp().appendTo('[data-cart-holder]');
             $('[data-cart-form-wrapper]').empty().html(data);
             $('[data-cart-additional]').appendTo('[data-additional-insert]').slideDown('slow');
             instance.init();
          });
        }
      }
      jQuery.ajax(params);
    }
  });
  return Cart;
})();



/*================ Templates ================*/
/**
 * Global functions
 * ------------------------------------------------------------------------------
 * Functions that should execute everywhere
 *
 */

 /**
  * If the element has ariaToggle then toggle the expanded class for whatever ID is set in aria-controls
  */
theme.ariaToggle = function() {
  $(document).on('click', '.ariaToggle', function(event){
    event.preventDefault();
    var $currentTarget = $(event.currentTarget);
    $currentTarget.attr('aria-expanded', $currentTarget.attr('aria-expanded')=='false' ? 'true' : 'false');
    var toggleID = $currentTarget.attr('aria-controls');
    $( '#'+ toggleID ).toggleClass('expanded');
  });
};

theme.floatLabels = function() {
  $(function () {
    $('input, textarea').on('checkval', function () {
      var label = $(this).prev('label');
      if(this.value !== '') {
        label.addClass('label--float ');
      } else {
        label.removeClass('label--float ');
      }
    }).on('keyup', function () {
      $(this).trigger('checkval');
    });
    $('input, textarea').val(function( index, value ) {
      if( value.length ){
        var label = $(this).prev('label');
        label.addClass('label--float ');
      }
      return value;
    });
  });
};

theme.smoothScroll = function() {
  $('a[href*="#"]:not([href="#"])').click(function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         event.preventDefault();
         $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
};


theme.videoPopups = function(){
  $('[data-video-popup]').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    closeBtnInside: false,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      patterns: {
        youtube: {
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0'
        }
      }
    }
  });
};

theme.preventOverflow = function() {
  $('.js-overflow-container').css('min-height', function() {
    return $(this).find('.js-overflow-content').outerHeight(true);
  });
},

theme.lazyImageBackgrounds = function() {
  document.addEventListener('lazyloaded', function(e){
    $(e.target).parent('.lazy-image').css( "background-image", "none" );
  });
};

theme.fullHeight = function(){
  var windowHeight = $(window).height();
  var navHeight = ($('.header__wrapper').height());
  var heroHeight = windowHeight - navHeight;
  $('.index-sections > .shopify-section:first-child > .screen-height-full').height(heroHeight).css('min-height', 'initial');
  $('.index-sections > .shopify-section:first-child > .screen-height-full.homepage-slideshow .slideshow__slide').height(heroHeight);
};


theme.setBreakpoints = function() {
  enquire.register(theme.variables.mediaQuerySmall, {
    match: function() {
      theme.variables.bpSmall = true;
    },
    unmatch: function() {
      theme.variables.bpSmall = false;
    }
  });
};

theme.quantitySelectors = function() {
  // Setup listeners to add/subtract from the input
  $('.js-qty__adjust').off().on('click', function() {
    var el = $(this),
        qtySelector = el.siblings('.js-qty__num'),
        qty = parseInt(qtySelector.val().replace(/\D/g, ''));

        // Make sure we have a valid integer
        if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
          // We have a number!
        } else {
          // Not a number. Default to 1.
          qty = 1;
        }
  // Add or subtract from the current quantity
    if (el.hasClass('js-qty__adjust--plus')) {
      qty = qty + 1;
    } else {
      qty = qty - 1;
      if (qty <= 1) qty = 1;
    }
    // Update the input's number
    qtySelector.val(qty).trigger('change');
  });
};

theme.modal = function(modalID, onInit, onClose) {
  var $thisModal = $('#' + modalID);

  if ( modalID.indexOf( 'prev' ) > -1 )  {
    modalID = modalID.replace( '--prev', '' );
    $thisModal = $('#' + modalID).prevAll('.quicklook:first');

    // If first show last
    if ( !$thisModal.length ) {
      $thisModal = $('#' + modalID).nextAll('.quicklook:last');
    }
  } else if ( modalID.indexOf( 'next' ) > -1 ) {
    modalID = modalID.replace( '--next', '' );
    $thisModal = $('#' + modalID).nextAll('.quicklook:first');

    // If last show first
    if ( !$thisModal.length ) {
      $thisModal = $('#' + modalID).prevAll('.quicklook:last');
    }
  }
  
  if ( typeof(onInit) == 'function' ) {
    $thisModal.fadeIn('fast', onInit);
  } else {
    $thisModal.fadeIn('fast');
  }

  $thisModal.on('click', function(e) {
    var $target = $(e.target);
    if( $target.hasClass('close') || $target.hasClass('modal__wrapper') ) {
      if ( typeof(onClose) == 'function' ) {
        $thisModal.stop(true).fadeOut('fast', onClose);
      } else {
        $thisModal.stop(true).fadeOut('fast');
      }
    }
  });
};

theme.promo = function() {
  var promoDevMode = $('#PromoModal').data('dev-mode');
  var PromoCookie = {};
  PromoCookie.cookie = {
    configuration: {
      expires: null, //session cookie
      path: '/',
      domain: window.location.hostname
    },
    name: 'promo',
    write: function(promo) {
      $.cookie(this.name, promo, this.configuration);
    },
    read: function() {
      return $.cookie(this.name);
    },
    destroy: function() {
      $.cookie(this.name, null, this.configuration);
    }
  };

  var cookieExists = promoDevMode ? false : PromoCookie.cookie.read();

  if(!cookieExists) {
    if (!promoDevMode) {
      PromoCookie.cookie.write('promo');
    }

    var $thisModal = $('#PromoModal'),
        $close = $thisModal.find('.close');

    $thisModal.fadeIn('fast');
    $close.on('click', function(e) {
      var $target = $(e.target);
      $thisModal.fadeOut('fast');
    });

    // Close on overlay click
    $thisModal.on( 'click', function(e) {
      if ( $(e.target)[0] == $thisModal.find('.modal__wrapper')[0] )  {
        $thisModal.fadeOut('fast');
      }
    });
  }
};

theme.detectIframe = function() {
  if (window.self !== window.top){
    $('html').addClass('iframe')
  }
};

theme.init = function () {
  theme.floatLabels();
  theme.detectIframe();
  theme.lazyImageBackgrounds();
  theme.setBreakpoints();
  theme.fullHeight();
  theme.videoPopups();
  theme.ariaToggle();
  theme.smoothScroll();
  theme.preventOverflow();
  $( window ).on( 'resize', $.debounce( 100, theme.preventOverflow ) );
};

$(theme.init);

/**
 * Collection functions
 * ------------------------------------------------------------------------------
 * Functions that should execute everywhere
 *
 */

theme.Collection = (function() {
  function Collection(container) {
    var $container = (this.$container = $(container));
    const enableEndlessScroll = this.enableEndlessScroll = $( 'body' ).data( 'endless-scroll' );
    const endlessCollection = this.endlessCollection;
    const filterProductsRequest = this.filterProductsRequest;

    this.init();
  }

  Collection.prototype = $.extend({}, Collection.prototype, {

    init: function() {
      var self = this;

      this.stringOverrides();
      this.preventOverflow();
      this.collectionFilters();

      if ( this.$container.data('sort') ) {
        this.collectionSorting();
        this.sortingDropdown();
      }

      $( window )
        .on( 'resize', $.debounce( 100, self.preventOverflow ) )
        .on( 'load', self.preventOverflow );

      if ( this.enableEndlessScroll ) {
        this.endlessScroll();
      }
    },
    stringOverrides: function() {
      // Override defaults in theme.strings with potential
      // template overrides

      theme.collectionStrings = theme.collectionStrings || {};
      $.extend(theme.strings, theme.collectionStrings);
    },
    sortingDropdown: function() {
      $('.collection__sorting .js-dropdown__label').text(function(){
        return $(this).next('ul')
          .find("[data-value='" + theme.strings.sortBy + "']")
          .text();
      });
      $('#sort_by li').click(function() {
        Shopify.queryParams.sort_by = $(this).data('value');
        location.search = jQuery.param(Shopify.queryParams);
      });

      $('.js-dropdown__label').on('click', function() {
        $('#filter_by').removeClass('visible');
        $('#sort_by').toggleClass('visible');
      });

      $('.filter-tag--mobile').on('click', function() {
        $('#sort_by').removeClass('visible');
        $(this).toggleClass('visible');
      });
    },
    preventOverflow: function(){
      $('.preventOverflow').css('min-height', function() {
        return $(this).find('.preventOverflowContent').outerHeight(true);
      });
    },
    collectionSorting: function() {
      Shopify.queryParams = {};
      if (location.search.length && location.search.indexOf('sort_by')) {
        for (
          var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++
        ) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            Shopify.queryParams[
              decodeURIComponent(aKeyValue[0])
            ] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
    },
    collectionFilters: function() {
      var self = this;
      var $filtersContainer = this.$container.find( '.collection__filters' );
      var $collectionProducts = this.$container.find( '.collection__products' );
      var $collectionPagination = this.$container.find( '.pagination' );
      var tags = this.$container.data( 'tags' );
      var collection = this.$container.data( 'collection' );
      var sort = this.$container.data( 'sort' );

      // Mobile dropdown
      $('.filter-tag--mobile').on('click', function() {
        $(this).next('ul').toggleClass('visible');
      });

      /* Bind toggle buttons */
      $filtersContainer.on( 'click', '.collection__filter-title', function() {
        var activeGroupIndex = $(this).index() - 1;
        var $filter = $filtersContainer.find( '.collection__filter' );
        var $filterTitle = $(this);

        $filterTitle.toggleClass( 'is-expanded' ).attr( 'aria-expanded', true ).siblings().removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
        $filter.eq( activeGroupIndex ).stop().slideToggle( 300 ).toggleClass( 'is-expanded' ).attr( 'aria-expanded', true ).siblings().stop().slideUp( 300 ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );

        if ( $filtersContainer.find( '.collection__filter.is-expanded' ).length ) {
          $filtersContainer.addClass( 'has-tags-expanded' );
        } else {
          $filtersContainer.removeClass( 'has-tags-expanded' );
        }
      });

      /* Close dropdowns on click outside their container */
      $( document ).on( 'click', function(e) {
        if ( !$( e.target ).is( '#collection__filters *' ) ) {
          $filtersContainer.find( '.collection__filter-title' ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
          $filtersContainer.find( '.collection__filter' ).stop().slideUp( 300 ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
          $filtersContainer.removeClass( 'has-tags-expanded' );
        }
      });

      $filtersContainer.on( 'click', '.collection__filter button', function(e) {
        e.preventDefault();

        var selectedTag = $( this ).data( 'tag' );
        var isTagSelected = $( this ).parent().hasClass( 'is-active' );

        if ( isTagSelected ) {
          var tagIndex = tags.indexOf( selectedTag );

          $( this ).parent().removeClass( 'is-active' );

          if ( tagIndex > -1 ) {
            tags.splice( tagIndex, 1 );
          }
        } else {
          $( this ).parent().addClass( 'is-active' );

          tags.push( selectedTag );
        }

        self.$container.attr( 'data-tags', tags );

        var requestedURL = collection + '/' + tags.join( '+' ) + '?sort_by=' + sort;

        requestFilteredProducts( requestedURL, tags );

        // Close dropdown when filter selected
        $filtersContainer.find( '.collection__filter-title' ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
        $filtersContainer.find( '.collection__filter' ).stop().slideUp( 300 ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
        $filtersContainer.removeClass( 'has-tags-expanded' );
      });

      /* Reset filters */
      self.$container.find( '.js-reset-filters' ).on( 'click', function(e) {
          var requestedURL = collection + '/?sort_by=' + sort;

          $filtersContainer.find( '.collection__filter-tags > li' ).removeClass( 'is-active' )
          $filtersContainer.find( '.collection__filter-title' ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
          $filtersContainer.find( '.collection__filter' ).stop().slideUp( 300 ).removeClass( 'is-expanded' ).attr( 'aria-expanded', false );
          $filtersContainer.removeClass( 'has-tags-expanded' );

          // Reset saved tags
          tags = [];
          self.$container.attr( 'data-tags', false );

          requestFilteredProducts( requestedURL, tags );
      } );

      function requestFilteredProducts( requestedURL, tags ) {
        var enableReviews = self.$container.data( 'reviews' );

        $collectionProducts.empty();
        self.$container.addClass( 'is-loading' );

        // Kill previous ajax request
        if ( self.filterProductsRequest != null ) {
          self.filterProductsRequest.abort();
        }
        if ( typeof(self.endlessCollection) == 'object' ) {
          self.endlessCollection.destroy();
        }

        if ( !tags.length ) {
          self.$container.find( '.js-reset-filters' ).stop().slideUp( 300 );
        }

        self.filterProductsRequest = $.ajax({
          method: 'GET',
          url: requestedURL,
          dataType: 'html',
        }).done(function(data) {
          var filteredItems = $( data ).find( '.collection__products' ).html();
          var productsFound = $( data ).find( '.products-found' ).html();

          $collectionProducts.html( filteredItems );
          self.$container.find( '.products-found' ).html( productsFound );

          // Update page URL if supported by the browser
          if (history.replaceState) {
            window.history.pushState( { path: requestedURL }, '', requestedURL );
          }

          // Initialize endless scroll
          if ( self.enableEndlessScroll ) {
            self.endlessScroll();
          }

          // Show reset button if there are tags selected
          if ( tags.length ) {
            self.$container.find( '.js-reset-filters' ).stop().slideDown( 300 );
          }

          // Show reviews badges
          if ( enableReviews && typeof( window.SPR ) == 'function' ) {
            window.SPR.initDomEls();
            window.SPR.loadBadges();
          }

          // Stop loading animation
          self.$container.removeClass( 'is-loading' );
        }).fail( function( jqXHR, textStatus, errorThrown ) {
          self.$container.removeClass( 'is-loading' );
        });
      }
    },
    endlessScroll: function() {
      // Initialize infinity scroll
      let CollectionLoop = '#CollectionLoop';
      let CollectionPagination = '#CollectionPagination';
      var showReviews = this.$container.data('reviews');

      this.endlessCollection = new Ajaxinate({
          container: CollectionLoop,
          pagination: CollectionPagination,
          callback: function( data ) {
            var reviewsAppInstalled = typeof(window.SPR) == 'function';
            if (showReviews && reviewsAppInstalled) {
              window.SPR.initDomEls();
              window.SPR.loadBadges();
            }
            var hasMoreItems = $( CollectionPagination ).find( '.js-loadMore' ).length;
            if ( typeof(Currency) != 'undefined' && typeof(Currency.convertAll) != 'undefined' && Currency ){
                Currency.convertAll(shopCurrency, $('[name=currencies]').val());
            }

            $( CollectionLoop ).find( '.product-item.visually-hidden:eq(0)' ).removeClass( 'visually-hidden' );

            if ( !hasMoreItems ) {
              $( CollectionLoop ).find( '.product-item.visually-hidden' ).removeClass( 'visually-hidden' );
            }
          }
      });
    }
  });

  return Collection;
})();

/**
 * Account page functions
 * ------------------------------------------------------------------------------
 * Functions that should execute everywhere
 *
 */

theme.Account = function() {
	// Mobile dropdown
	$('.account-sidebar--mobile').on('click', function() {
		$(this).next('ul').toggleClass('visible');
	});
}


/**
 * Customer Addresses Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Customer Addresses
 * template.
 *
 * @namespace customerAddresses
 */

theme.customerAddresses = (function() {
  var $newAddressForm = $('#AddressNewForm');

  if (!$newAddressForm.length) {
    return;
  }

	$(document).ready(function() {
	  // Initialize observers on address selectors, defined in shopify_common.js
	  if (Shopify.CountryProvinceSelector) {
	    new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
	      hideElement: 'AddressProvinceContainerNew'
	    });
	  }

	  // Initialize each edit form's country/province selector
	  $('.address-country-option').each(function() {
	    var formId = $(this).data('form-id');
	    var countrySelector = 'AddressCountry_' + formId;
	    var provinceSelector = 'AddressProvince_' + formId;
	    var containerSelector = 'AddressProvinceContainer_' + formId;

	    new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
	      hideElement: containerSelector
	    });
	  });
	});

  // Toggle new/edit address forms
  $('.address-new-toggle').on('click', function() {
    $newAddressForm.toggleClass('hide');
  });

  $('.address-edit-toggle').on('click', function() {
    var formId = $(this).data('form-id');
    $('#EditAddress_' + formId).toggleClass('hide');
  });

  $('.address-delete').on('click', function() {
    var $el = $(this);
    var formId = $el.data('form-id');
    var confirmMessage = $el.data('confirm-message');
    if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
    }
  });
})();



$(document).ready(function() {
  var sections = new slate.Sections();
  sections.register('header', [theme.Header, theme.Search]);
  sections.register('product', [theme.Product]);
  sections.register('related', [theme.Related, theme.ProductGrid]);
  sections.register('collection', [theme.Collection, theme.ProductGrid, theme.Hero]);
  sections.register('featured-products', [theme.ProductGrid]);
  sections.register('search', theme.ProductGrid);
  sections.register('testimonials', theme.Testimonials);
  sections.register('look', [theme.Look, theme.ProductGrid]);
  sections.register('slideshow', theme.Slideshow);
  sections.register('logo-list', theme.LogoList);
  sections.register('image-with-text', theme.ImageWithText);
  sections.register('instagram', theme.Instagram);
  sections.register('newsletter', theme.Overflow);
  sections.register('blog-template', [theme.Editorial, theme.Blog]);
  sections.register('blog', theme.Blog);
  sections.register('article', theme.Article);
  sections.register('featured-video', theme.FeaturedVideo);
  sections.register('featured-background-video', theme.FeaturedBackgroundVideo);
  sections.register('hero', theme.Hero);
  sections.register('map', theme.Map);
  sections.register('footer', theme.Footer);
  sections.register('cart', theme.Cart);

  window.broadcast__sections = sections;

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  var tableSelectors = '.rte table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }

  // Promo modal
  var showPromoModal = $('body').data('promo');
  if( showPromoModal ) {
    theme.promo();
  }

  // Account Page
  if($('.customer-logged-in .account').length) {
    theme.Account();
  }

  // Animate on scroll
  var showAnimations = $('body').data('animations');
  if( showAnimations &&  window.AOS ) {
    AOS.init({ once: true });
    $('body').addClass('aos-initialized');
  }

});

$(document).ajaxComplete(function() {
  $(window).resize();
});
