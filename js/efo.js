(function($, undefined){
  'use strict';
  /**
   * 継承実装
   * */
  Function.prototype.extend = function (Class){
    var f = function (){};
    f.prototype = Class.prototype;
    this.prototype = new f();
    this.prototype.__super__ = Class.prototype;
    this.prototype.__super__.constructor = Class;
    this.prototype.constructor = this;
  };

  /**
   * Efo
   */
  window.Efo = (function(){
    /*
    * EFOコントローラー
    * */
    function Efo(options){
      this.options = $.extend(true, {}, options || {});
      this.el = options.el || window.document;
      this.$el = $(this.el);
      this.$forms = $("input ,select, textarea");
      this.nodes = [];

      this.init.apply(this);
    }
    Efo.event = {
      COMPLETE:'COMPLETE'
    };

    Efo.prototype.init = function(){

    };

    Efo.autoAddNode = function(){

    };

    Efo.addNode = function(element){

    };

    Efo.removeNodeByNode = function(node){

    };

    Efo.removeNodeByKey = function(key){

    };

    Efo.analysis = function(){

    };

    Efo.forceAnalysis = function(){

    };

    /**
     * 正誤判別のフォーム1まとまり
     */
    Efo.Node = (function(){
      function Node(el, options){
        this.options = $.extend(true, {}, options || {});
        this.el = el;
        this.$el = $(this.el);
      }

      return Node;
    })();

    /**
     * Nodeのかたまり
     */
    Efo.NodeCollection = (function(){
      function NodeCollection(){
        this.nodes = [];
      }

      NodeCollection.addNode = function(node){

      };

      NodeCollection.removeNodeByNode = function(node){

      };

      NodeCollection.removeNodeByKey = function(key){

      };

      return NodeCollection;
    })();

    Efo.errmsg = {
      noInput : "項目に入力してください。",
      noSelect : "項目から選択してください。"
    };

    /**
     * 正誤判別ロジック
     */
    Efo.Discriminant = (function(){
      function Discriminant(){
      }

      Discriminant.isInput = function($inputs, callback){
        var $input;
        var tagName;
        var type;
        var is;
        $inputs.each(_.bind(function(i, input){
          $input = $(input);
          tagName = $input.get(0).tagName.toLowerCase();
          if (_tagName == 'input') {
            type = $input.attr('type');
            if(type === 'text' || type === 'password'){
              is = !!($input.val().length > 0);
              if (is) return false;
            }
            else if (type === 'checkbox' || type === 'radio') {
              is = $input.is(':checked');
              if (is) return false;
            }
          }
          else if (tagName === 'select') {
            is = !!($input.find('option:selected').val().length);
            if (is) return false;
          }
        }, this));

        if (type == 'text' || type == 'password') callback(is, [Efo.errmsg.noInput]);
        else callback(is, [Efo.errmsg.noSelect]);
      };

      return Discriminant;
    })();

    return Efo;
  })();


})(jQuery);
