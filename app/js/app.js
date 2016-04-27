$(function(){
    'use strict';

    $(function(){

        $(window).on( {
            'load': function() {
                $( '.spinner').addClass( 'hide' );
            }
        } );

        $('.collection').each( function() {
            new Collection( $(this) );
        } );

        $('.site__header').each( function() {
            new Header( $(this) );
        } );

        $('.site__title').each( function() {
            new SiteTitle( $(this) );
        } );

        $('.menu__btn').each( function() {
            new Menu( $(this) );
        } );

        $('.must-have').each( function() {
            new MustHave( $(this) );
        } );

        $('.most-wanted').each( function() {
            new MostWanted( $(this) );
        } );

        $('.sale').each( function() {
            new Sale( $(this) );
        } );

        $('.news').each( function() {
            new News( $(this) );
        } );

    });

    var Collection = function(obj) {

        //private properties
        var _obj = obj,
            _siteTitle = _obj.find('.site__title'),
            _collectionPic = _obj.find('.collection__pic'),
            _collectionWrap = _obj.find('.collection__wrap'),
            _collectionPicKoef = 0.15,
            _collectionWrapKoef = 0.05,
            _siteTitleKoef = 0.3;

        //private methods
        var _addEvents = function() {

                $(window).on( {
                    'scroll': function() {
                        var scrollPos = $(this).scrollTop();

                        _siteTitle.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_siteTitleKoef +  'px )'
                        } );

                        _collectionPic.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_collectionPicKoef +  'px )'
                        } );

                        _collectionWrap.css( {
                            'transform': 'translate(' + scrollPos*_collectionWrapKoef + 'px, ' + 0 +  'px )'
                        } );

                    }
                } );

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var News = function(obj) {

        //private properties
        var _obj = obj,
            _item = _obj.find( '.news__item' );

        //private methods
        var _addEvents = function() {

            },
            _create = function() {

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

    var MustHave = function(obj) {

        //private properties
        var _obj = obj,
            _objTop = _obj.offset().top,
            _siteTitle = _obj.find('.site__title'),
            _mustHaveItem1 = _obj.find('.must-have__item').eq(0),
            _mustHaveItem2 = _obj.find('.must-have__item').eq(1),
            _mustHaveItemKoef1 = -0.1,
            _mustHaveItemKoef2 = 0.1,
            _siteTitleKoef = 0.3;

        _mustHaveItem1 = _mustHaveItem1.find('.must-have__bg');

        _mustHaveItem2 = _mustHaveItem2.find('.must-have__bg');

        //private methods
        var _addEvents = function() {

                $(window).on( {
                    'scroll': function() {

                        var scrollPos = $(this).scrollTop() - _objTop + $(window).height();

                        _siteTitle.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_siteTitleKoef +  'px )'
                        } );

                        _mustHaveItem1.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_mustHaveItemKoef1 +  'px )'
                        } );

                        _mustHaveItem2.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_mustHaveItemKoef2 +  'px )'
                        } );
                    }
                } );

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var MostWanted = function(obj) {

        //private properties
        var _obj = obj,
            _objTop = _obj.offset().top,
            _siteTitle = _obj.find('.site__title'),
            _siteTitleKoef = 0.3;

        //private methods
        var _addEvents = function() {

                $(window).on( {
                    'scroll': function() {

                        var scrollPos = $(this).scrollTop() - _objTop + $(window).height();

                        _siteTitle.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_siteTitleKoef +  'px )'
                        } );
                    }
                } );

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Sale = function(obj) {

        //private properties
        var _obj = obj,
            _objTop = _obj.offset().top,
            _siteTitle = _obj.find('.site__title'),
            _saleBg = _obj.find('.sale__bg'),
            _saleItem = _obj.find('.sale__item'),
            _siteTitleKoef = 0.3,
            _saleBgKoef = 0.15;

        //private methods
        var _addEvents = function() {

                $(window).on( {
                    'scroll': function() {

                        var scrollPos = $(this).scrollTop() - _objTop + $(window).height();

                        _siteTitle.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_siteTitleKoef +  'px )'
                        } );

                        _saleBg.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_saleBgKoef +  'px )'
                        } );
                    }
                } );

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Menu = function( obj ) {

        //private properties
        var _obj = obj,
            _site = $('.site'),
            _menu = _obj.parent();

        //private methods
        var _addEvents = function () {
                _obj.on( {
                    click: function() {
                        _menu.addClass( 'open' );
                        _site.addClass( 'blur' );
                    }
                } );

                $('body').on( {
                    click: function() {
                        _menu.removeClass( 'open' );
                        _site.removeClass( 'blur' );
                    }
                } );

                _menu.on( {
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

    var Header = function(obj) {

        //private properties
        var _obj = obj,
            _siteHeaderBg = _obj.find('.site__header-bg'),
            _siteHeaderKoef = 0.5,
            _philosophy = _obj.find('.philosophy');

        //private methods
        var _addEvents = function() {

                $(window).on( {
                    'scroll': function() {
                        var scrollPos = $(this).scrollTop();

                        _siteHeaderBg.css( {
                            'transform': 'translate(' + 0 + 'px, ' + scrollPos*_siteHeaderKoef +  'px )'
                        } );

                        _textShow(scrollPos);
                    }
                } );

            },
            _textShow = function(pos) {
                if ( pos >= _obj.scrollTop() && pos < _obj.height() ) {
                    _philosophy.addClass('philosophy_show');
                } else {
                    _philosophy.removeClass('philosophy_show');
                }
            },
            _init = function() {
                _addEvents();
                _textShow($(window).scrollTop());
            };

        //public properties

        //public methods

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
