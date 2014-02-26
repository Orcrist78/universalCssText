
/**!
 * @license universalCssText.js v0.1
 * (c) 2014 Giuseppe Scotto Lavina <mailto:g.scotto@email.it>
 * Available under MIT license 
 */

;(function( name, doc, def ) {

  "use strict"

  var

    sheets = doc.styleSheets,

    sheet  = (function(idx) {

      while(idx--) if(sheets[idx].cssRules) return sheets[idx]

      return (doc.head.appendChild(doc.createElement("style"))).sheet

    })(sheets.length),

    style = sheet.cssRules[sheet.insertRule("*{}", sheet.cssRules.length)].style


  def(this, name, {

    get: function()    { return style.cssText },

    set: function(val) { style.cssText = val },

    enumerable: true
  })

}).call(

  this,

  "universalCssText",

  document,

  Object.defineProperty
)
