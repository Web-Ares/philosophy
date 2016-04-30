$(function(){
    'use strict';

    $(function(){

        new Page();

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

        $('.news').each( function() {
            new News( $(this) );
        } );

    });

    var News = function(obj) {

        //private properties
        var _obj = obj,
            _item = _obj.find( '.news__item' );

        //private methods
        var _create = function() {

                _item.each( function() {
                    var curElem = $( this),
                        curPic = curElem.find( 'img'),
                        wrapElem = curElem.find( '.news__item-wrap' );

                    //curElem.prepend(faceElem);
                    //curElem.prepend(curPic.clone());
                    wrapElem.prepend(curPic.clone());
                } );

            },
            _init = function() {
                _create();
            };

        //public properties

        //public methods

        _init();
    };

    var Menu = function( obj ) {

        //private properties
        var _obj = obj,
            _btn = $( '.menu-btn' ),
            _site = $( '.site' ),
            _wrap = _obj.find( '.menu__wrap'),
            _className = 'blur';

        //private methods
        var _addEvents = function () {
                _obj.on( {
                    click: function() {
                        _obj.removeClass( 'open' );
                        _site.removeClass( _className );
                    }
                } );

                _btn.on( {
                    click: function() {
                        _obj.addClass( 'open' );
                        _site.addClass( _className );
                    }
                } );

                _wrap.on( {
                    click: function( event ) {
                        var event = event || window.event;

                        if ( event.stopPropagation ) {
                            event.stopPropagation()
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                } );

            },
            _detectBrowser = function () {
                var ua = window.navigator.userAgent.toLowerCase(),
                    is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua) || (/edge/gi).test(ua);

                if (is_ie) {
                    _className = 'light';
                }
            },
            _init = function () {
                _addEvents();
                _detectBrowser();
                _wrap.mCustomScrollbar();
            };

        _init();
    };

    var Page = function(obj) {

        //private properties
        var _self = this,
            _siteTitle = $( '.site__title'),
            _spinner = $( '.spinner'),
            _body = $( 'body' );

        //private methods
        var _addEvents = function() {
                $(window).on( {
                    'load': function() {
                        setTimeout( function() {
                            _spinner.addClass( 'hide' );
                            setTimeout(function(){
                                _spinner.remove();
                            },500);
                        }, 1000 );
                    },
                    'resize': function() {
                        _addCustomScroll();
                    }
                } );
            },
            _addCustomScroll = function() {
                var collectionTop = $('.collection').offset().top,
                    collectionHeight = $('.collection').height(),
                    mustHaveTop = $('.must-have').offset().top,
                    mustHaveHeight = $('.must-have').height(),
                    mustHaveBg1Top = $('.must-have__bg').eq(0).offset().top,
                    mustHaveBg1Height = $('.must-have__bg').eq(0).height(),
                    mustHaveBg2Top = $('.must-have__bg').eq(1).offset().top,
                    mustHaveBg2Height = $('.must-have__bg').eq(1).height(),
                    mostWantedTop = $('.most-wanted').offset().top,
                    mostWantedHeight = $('.most-wanted').height(),
                    saleTop = $('.sale').offset().top,
                    saleHeight = $('.sale').height(),
                    headerTop = $('.site__header').offset().top,
                    headerHeight = $('.site__header').height(),
                    winHeight = $(window).height();


                _body.mCustomScrollbar({
                    callbacks:{
                        whileScrolling:function(){
                            var scrollPosition = parseInt(this.mcs.top*(-1));

                            //collection
                            if ( ( scrollPosition <= ( collectionTop + collectionHeight ) && ( ( winHeight + scrollPosition ) >= collectionTop ) ) ) {
                                _paralax( $('.collection .site__title'), 0, scrollPosition, collectionHeight*0.3/(collectionHeight + winHeight));
                                _paralax( $('.collection__pic'), 0, scrollPosition, collectionHeight*0.15/(collectionHeight + winHeight));
                                _paralax( $('.collection__wrap'), scrollPosition, 0, collectionHeight*0.05/(collectionHeight + winHeight));
                            }

                            //must-have
                            if ( ( scrollPosition <= ( mustHaveTop + mustHaveHeight ) && ( ( winHeight + scrollPosition ) >= mustHaveTop ) ) ) {
                                _paralax( $('.must-have .site__title'), 0, scrollPosition - (mustHaveTop - winHeight), mustHaveHeight*0.3/(mustHaveHeight + winHeight));
                            }

                            //must-have-bg1
                            if ( ( scrollPosition <= ( mustHaveBg1Top + mustHaveBg1Height ) && ( ( winHeight + scrollPosition ) >= mustHaveBg1Top ) ) ) {
                                _paralax( $('.must-have__bg').eq(0), 0, scrollPosition - (mustHaveBg1Top - winHeight), mustHaveBg1Height*(-0.1)/(mustHaveBg1Height + winHeight));
                            }

                            //must-have-bg2
                            if ( ( scrollPosition <= ( mustHaveBg2Top + mustHaveBg2Height ) && ( ( winHeight + scrollPosition ) >= mustHaveBg2Top ) ) ) {
                                _paralax( $('.must-have__bg').eq(1), 0, scrollPosition - (mustHaveTop - winHeight), mustHaveBg2Height*0.1/(mustHaveBg2Height + winHeight));
                            }

                            //most-wanted
                            if ( ( scrollPosition <= ( mostWantedTop + mostWantedHeight ) && ( ( winHeight + scrollPosition ) >= mostWantedTop ) ) ) {
                                _paralax( $('.most-wanted .site__title'), 0, scrollPosition - (mostWantedTop - winHeight), mostWantedHeight*0.3/(mostWantedHeight + winHeight));
                            }

                            //sale
                            if ( ( scrollPosition <= ( saleTop + saleHeight ) && ( ( winHeight + scrollPosition ) >= saleTop ) ) ) {
                                _paralax( $('.sale .site__title'), 0, scrollPosition - (saleTop - winHeight), saleHeight*0.3/(saleHeight + winHeight));
                                _paralax( $('.sale__bg'), 0, scrollPosition - (saleTop - winHeight), saleHeight*0.2/(saleHeight + winHeight));
                            }

                            //header
                            if ( ( scrollPosition <= ( headerTop + headerHeight ) && ( ( winHeight + scrollPosition ) >= headerTop ) ) ) {
                                _paralax( $('.site__header-bg'), 0, scrollPosition, headerHeight*0.5/(headerHeight + winHeight));
                            }

                        }
                    }
                });
            },
            _createTitle = function( elem ) {
                var line = elem.text().replace(/\s/g, ""),
                    arr = line.split(''),
                    arrLength = arr.length;

                elem.text('');

                for ( var i = 0; i < arrLength; i++) {
                    elem.append('<span>' + arr[i] + '</span>');
                }
            },
            _paralax = function( elem, x, y, koef ) {
                elem.css( {
                    'transform': 'translate(' + x*koef + 'px, ' + y*koef +  'px )'
                } );
            },
            _init = function() {
                _addEvents();
                _addCustomScroll();

                _siteTitle.each( function() {
                    _createTitle( $(this) );
                });
            };

        //public properties

        //public methods

        _init();
    };

});
