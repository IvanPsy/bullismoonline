/**handles:warta-script-init**/

;!function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,n=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(e||t||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e=document.getElementById(location.hash.substring(1));e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)}();
;+function(e){"use strict";new e.CarouselAnimation(".carousel-large, .carousel-medium")}(jQuery);
;+function(t){"use strict";t(".slider-tabs").each(function(){var i=t(this).attr("id");t(this).find(".tab-content .tab-pane").each(function(){new t.Slider({widget:"#"+i,tab:"#"+t(this).attr("id")})})})}(jQuery);
;+function(e){"use strict";e(" .da-thumbs > li ").each(function(){e(this).hoverdir({hoverDelay:75})}),e(".entry-content, .featured-media.gallery").find(".images .da-thumbs").each(function(i,t){e(t).find("li a").imagesLoaded(function(){var i=e(this.elements),t=0;i.each(function(i,n){var a=e(n).height();(0===t||t>a)&&(t=a)}),t>0&&i.height(t)})})}(jQuery);
;+function(a){"use strict";a("a[data-lightbox-gallery], a[data-lightbox]").nivoLightbox({effect:"fadeScale"})}(jQuery);
;+function(t){"use strict";t(".flickr-feed").each(function(){var a=t(this);new t.FlickrFeed({element:a,items:a.data("count"),id:a.data("id"),ids:a.data("ids"),tags:a.data("tags"),tagmode:a.data("tagmode")})})}(jQuery);
;+function(e){"use strict";e(".breaking-news .content").marquee({delayBeforeStart:0,duplicated:!0,gap:0,pauseOnHover:!0})}(jQuery);
;+function(a){"use strict";if("undefined"!=typeof GMaps){var t=a("#map").height(a(window).height()/2);new GMaps({div:"#map",lat:t.data("lat"),lng:t.data("long"),scrollwheel:!1}).addMarker({lat:t.data("lat"),lng:t.data("long"),title:t.data("marker")})}}(jQuery);
;+function(t){"use strict";t(".rateit").rateit({step:.5,resetable:!1}).on("over",function(e,a){t(this).attr("title",a?parseFloat(a).toFixed(1):0)}).on("rated",function(e,a){var i=t(this);a=a?parseFloat(a).toFixed(1):0,t.getJSON(ajax_object.ajax_url,{action:"warta_review_user_rating",id:i.data("id"),value:a},function(t){var e=i.closest(".user-rating");i.rateit("readonly",!0).attr("title",a),e.find(".after-vote").css("display","block"),e.find(".vote-value").text(t.value),e.find(".vote-count").text(t.count)})})}(jQuery);
;+function(t){"use strict";t(".twitter-feed").each(function(){var e=t(this);e.twittie({username:e.data("username"),apiPath:ajax_object.ajax_url,template:e.find('script[type="text/template"]').html(),dateFormat:e.data("date-format"),count:e.data("count"),loadingText:e.data("loading-text")})}),t(".twitter-feed").on("click","a:has(.fa-reply)",function(e){e.preventDefault(),window.open(t(this).attr("href"),"","width=710,height=540")})}(jQuery);
;+function(t){"use strict";var a=t("[data-share-buttons]");a.length>0&&t.post(ajax_object.ajax_url,{action:"warta_share_buttons",permalink:a.data("permalink"),title:a.data("title")},function(e){e&&(a.addClass("share-post").append(e),t(".share-post a").click(function(a){var e=t(this).attr("href");/^http.+$/.test(e)&&(window.open(e,"","width=800,height=550"),a.preventDefault())}))})}(jQuery);
;+function(t){"use strict";if(t("html").is(".ajax-post-views")){{var s=t("body");t(".post-view-count")}s.is(".single-post")&&t.post(ajax_object.ajax_url,{action:"warta_set_post_views",id:s.attr("class").match(/postid-(\d*)/)[1]})}}(jQuery);
;!function(t){"use strict";t(".entry-content table, .post-comments .comment table").wrap('<div class="table-responsive"></div>')}(jQuery,window,document);