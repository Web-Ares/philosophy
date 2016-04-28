$(function(){
    'use strict';

    $(function(){

        $(window).on( {
            'load': function() {
                setTimeout( function() {
                    $( '.spinner').addClass( 'hide' );
                }, 1000 );
            }
        } );

        $('.site__title').each( function() {
            new SiteTitle( $(this) );
        } );

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

        $('.news').each( function() {
            new News( $(this) );
        } );

        var collectionTop = $('.collection').offset().top,
            collectionHeight = $('.collection').height(),
            mustHaveTop = $('.must-have').offset().top,
            mustHaveHeight = $('.must-have').height(),
            mostWantedTop = $('.most-wanted').offset().top,
            mostWantedHeight = $('.most-wanted').height(),
            saleTop = $('.sale').offset().top,
            saleHeight = $('.sale').height(),
            headerTop = $('.site__header').offset().top,
            headerHeight = $('.site__header').height(),
            winHeight = $(window).height();

        $( 'body' ).mCustomScrollbar({
            callbacks:{
                whileScrolling:function(){
                    var scrollPosition = parseInt(this.mcs.top*(-1));

                    //collection
                    if ( ( scrollPosition <= ( collectionTop + collectionHeight ) && ( ( winHeight + scrollPosition ) >= collectionTop ) ) ) {
                        paralax( $('.collection .site__title'), 0, scrollPosition - (collectionTop - winHeight), collectionHeight*0.3/(collectionHeight + winHeight));
                        paralax( $('.collection__pic'), 0, scrollPosition - (collectionTop - winHeight), collectionHeight*0.15/(collectionHeight + winHeight));
                        paralax( $('.collection__wrap'), scrollPosition - (collectionTop - winHeight), 0, collectionHeight*0.05/(collectionHeight + winHeight));
                    }

                    //must-have
                    if ( ( scrollPosition <= ( mustHaveTop + mustHaveHeight ) && ( ( winHeight + scrollPosition ) >= mustHaveTop ) ) ) {
                        paralax( $('.must-have .site__title'), 0, scrollPosition - (mustHaveTop - winHeight), mustHaveHeight*0.3/(mustHaveHeight + winHeight));
                        paralax( $('.must-have__bg').eq(0), 0, scrollPosition - (mustHaveTop - winHeight), mustHaveHeight*(-0.1)/(mustHaveHeight + winHeight));
                        paralax( $('.must-have__bg').eq(1), 0, scrollPosition - (mustHaveTop - winHeight), mustHaveHeight*0.1/(mustHaveHeight + winHeight));
                    }

                    //most-wanted
                    if ( ( scrollPosition <= ( mostWantedTop + mostWantedHeight ) && ( ( winHeight + scrollPosition ) >= mostWantedTop ) ) ) {
                        paralax( $('.most-wanted .site__title'), 0, scrollPosition - (mostWantedTop - winHeight), mostWantedHeight*0.3/(mostWantedHeight + winHeight));
                    }

                    //sale
                    if ( ( scrollPosition <= ( saleTop + saleHeight ) && ( ( winHeight + scrollPosition ) >= saleTop ) ) ) {
                        paralax( $('.sale .site__title'), 0, scrollPosition - (saleTop - winHeight), saleHeight*0.3/(saleHeight + winHeight));
                        paralax( $('.sale__bg'), 0, scrollPosition - (saleTop - winHeight), saleHeight*0.15/(saleHeight + winHeight));
                    }

                    //header
                    if ( ( scrollPosition <= ( headerTop + headerHeight ) && ( ( winHeight + scrollPosition ) >= headerTop ) ) ) {
                        paralax( $('.site__header-bg'), 0, scrollPosition, headerHeight*0.5/(headerHeight + winHeight));
                    }

                }
            }
        });

        function paralax( elem, x, y, koef) {

            elem.css( {
                'transform': 'translate(' + x*koef + 'px, ' + y*koef +  'px )'
            } );
        };

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
                        faceElem = '<div class="news__item-face"></div>';

                    curElem.prepend(faceElem);
                    curElem.prepend(curPic.clone());
                    curElem.find('.news__item-face').prepend(curPic.clone());
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
            _site = $( '.site' ),
            _wrap = _obj.find( '.menu__wrap' );

        //private methods
        var _addEvents = function () {
                _obj.on( {
                    click: function() {
                        _obj.toggleClass( 'open' );
                        _site.toggleClass( 'blur' );
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
            _init = function () {
                _addEvents();
            };

        _init();
    };

    var SiteTitle = function(obj) {

        //private properties
        var _obj = obj;

        //private methods
        var _createLine = function() {
                var line = _obj.text().replace(/\s/g, ""),
                    arr = line.split(''),
                    arrLength = arr.length;

                _obj.text('');

                for ( var i = 0; i < arrLength; i++) {
                    _obj.append('<span>' + arr[i] + '</span>');
                }
            },
            _init = function() {
                _createLine(_obj);
            };

        //public properties

        //public methods

        _init();
    };

});
