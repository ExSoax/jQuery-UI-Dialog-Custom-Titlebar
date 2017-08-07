(function() {
  var $;

  $ = jQuery;

  $.widget("ui.dialogExtend", {
    version: "1.0.0",
    modes: {},
    options: {
      "buttons": []
    },
    _initStyles: function(){
      if (!$(".dialog-extend-css").length) {
        style = '';
        style += '<style class="dialog-extend-css" type="text/css">';
        style += ".ui-dialog .ui-dialog-titlebar-genericButton {";
        style += "position: absolute;"
        style += "right: .3em;"
        style += "top: 50%;"
        style += "width: 20px;"
        style += "margin: -10px 0 0 0;"
        style += "padding: 1px;"
        style += "height: 20px;"
        style += "}";
        style += '</style>';
        $(style).appendTo("body");
      }
    },
    _create: function() {
      titlebar = $(this.element[0]).dialog("widget").find(".ui-dialog-titlebar");
      this._initStyles();
      let i = 0;
      for (let currentButton of this.options.buttons) {
        var button =
          $("<button type='button'></button>")
          .button({
            label: $("<a>").text(currentButton.tooltip).html(),
            icon: currentButton.icon,
            showLabel: false
          })
          .css("margin-right", (25+i*25)+"px")
          .appendTo(titlebar);

        this._addClass(button, "ui-dialog-titlebar-genericButton");
        this._on(button, {
          click: function(event) {
            event.preventDefault();
            if (currentButton.click != undefined)
              currentButton.click(event);
          }
        });
        i++;
      }
    }
  });

}).call(this);
