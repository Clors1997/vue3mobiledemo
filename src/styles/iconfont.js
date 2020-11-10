!(function(e) {
  var t,
    n,
    o,
    i,
    d,
    a,
    c =
      '<svg><symbol id="icon-arrowLeft" viewBox="0 0 1024 1024"><path d="M896 544H193.3312a32 32 0 1 1 0-64H896a32 32 0 0 1 0 64z" fill="#2C2C2C" ></path><path d="M426.5984 798.72a31.8976 31.8976 0 0 1-22.6304-9.3696L126.8736 512 403.968 234.9056a32 32 0 0 1 45.2608 45.2608L217.3952 512l231.8336 231.8336A32 32 0 0 1 426.5984 798.72z" fill="#2C2C2C" ></path></symbol></svg>',
    l = (l = document.getElementsByTagName("script"))[
      l.length - 1
    ].getAttribute("data-injectcss");
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    d || ((d = !0), o());
  }
  (t = function() {
    var e, t, n, o;
    ((o = document.createElement("div")).innerHTML = c),
      (c = null),
      (n = o.getElementsByTagName("svg")[0]) &&
        (n.setAttribute("aria-hidden", "true"),
        (n.style.position = "absolute"),
        (n.style.width = 0),
        (n.style.height = 0),
        (n.style.overflow = "hidden"),
        (e = n),
        (t = document.body).firstChild
          ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n))
          : t.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function() {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (d = !1),
        (a = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(a, 50);
          }
          s();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
