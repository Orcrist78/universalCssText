/**!
 * @license universalCssText.js v0.2
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

    style = null


  sheet.insertRule("*{}", 0)
  style = sheet.cssRules[0].style

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
