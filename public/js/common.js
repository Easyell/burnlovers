/**
 * Created by zyg on 15/11/10.
 */
module.exports = {
  isSupportWebGL: function () {
    if (!!window.WebGLRenderingContext) {
      var canvas = document.createElement("canvas"),
        names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
        context = false;

      for (var i = 0; i < 4; i++) {
        try {
          context = canvas.getContext(names[i]);
          if (context && typeof context.getParameter == "function") {
            // else, return just true
            return true;
          }
        } catch (e) {
        }
      }

      // WebGL is supported, but disabled
      return false;
    }

    // WebGL not supported
    return false;
  }
};