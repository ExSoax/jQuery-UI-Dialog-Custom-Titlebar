# jQuery UI Dialog Extend Custom Titlebar
Extension for jQuery UI for making windows-like dialogs

## Compatibility
1. jQuery UI v1.12.1
1. jQuery 1.7+

## General
This extension is designed for adding custom buttons to jQuery's dialogs titlebar.
Just add a reference to the script 'jquery.ui.dialog.js', after the place where is located the jQueryUI library in your HTML page.

## Usage

```
$("<div />")
  .dialog({ autoOpen: true })
  .dialogExtend({
    buttons: [
      {
        icon: "ui-icon-newwin",
        tooltip: "New Window",
        click: function(event){
          /* your code */
          console.log(event);
        }
      },
      {
        icon: "ui-icon-close",
        click: function(event){
          /* your code */
          console.log(event);
        }
      }
    ]
  });
```

Pass buttons as option for the 'dialogExtend' call.
Every button has icon, tooltip and click properties.

1. icon : string that points to jQuery UI icons set.
1. tooltip: string that will be shown as tooltip on the button.
1. click: callback on button's click event.
