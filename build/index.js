var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/preact/dist/preact.module.js
function w(n2, l3) {
  for (var u4 in l3) n2[u4] = l3[u4];
  return n2;
}
function _(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function g(l3, u4, t3) {
  var i4, r3, o3, e4 = {};
  for (o3 in u4) "key" == o3 ? i4 = u4[o3] : "ref" == o3 ? r3 = u4[o3] : e4[o3] = u4[o3];
  if (arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e4[o3] && (e4[o3] = l3.defaultProps[o3]);
  return m(l3, e4, i4, r3, null);
}
function m(n2, t3, i4, r3, o3) {
  var e4 = { type: n2, props: t3, key: i4, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e4), e4;
}
function k(n2) {
  return n2.children;
}
function x(n2, l3) {
  this.props = n2, this.context = l3;
}
function C(n2, l3) {
  if (null == l3) return n2.__ ? C(n2.__, n2.__i + 1) : null;
  for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n2.type ? C(n2) : null;
}
function S(n2) {
  var l3, u4;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
      n2.__e = n2.__c.base = u4.__e;
      break;
    }
    return S(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(P);
}
function P() {
  var n2, u4, t3, r3, o3, f4, c3, s3;
  for (i.sort(e2); n2 = i.shift(); ) n2.__d && (u4 = i.length, r3 = void 0, f4 = (o3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((r3 = w({}, o3)).__v = o3.__v + 1, l.vnode && l.vnode(r3), j(t3.__P, r3, o3, t3.__n, t3.__P.namespaceURI, 32 & o3.__u ? [f4] : null, c3, null == f4 ? C(o3) : f4, !!(32 & o3.__u), s3), r3.__v = o3.__v, r3.__.__k[r3.__i] = r3, z(c3, r3, s3), r3.__e != f4 && S(r3)), i.length > u4 && i.sort(e2));
  P.__r = 0;
}
function $(n2, l3, u4, t3, i4, r3, o3, e4, f4, c3, s3) {
  var a3, h3, y3, d3, w3, _2, g2 = t3 && t3.__k || v, m3 = l3.length;
  for (f4 = I(u4, l3, g2, f4, m3), a3 = 0; a3 < m3; a3++) null != (y3 = u4.__k[a3]) && (h3 = -1 === y3.__i ? p : g2[y3.__i] || p, y3.__i = a3, _2 = j(n2, y3, h3, i4, r3, o3, e4, f4, c3, s3), d3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && V(h3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), 4 & y3.__u || h3.__k === y3.__k ? f4 = A(y3, f4, n2) : "function" == typeof y3.type && void 0 !== _2 ? f4 = _2 : d3 && (f4 = d3.nextSibling), y3.__u &= -7);
  return u4.__e = w3, f4;
}
function I(n2, l3, u4, t3, i4) {
  var r3, o3, e4, f4, c3, s3 = u4.length, a3 = s3, h3 = 0;
  for (n2.__k = new Array(i4), r3 = 0; r3 < i4; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f4 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : d(o3) ? m(k, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e4 = null, -1 !== (c3 = o3.__i = L(o3, u4, f4, a3)) && (a3--, (e4 = u4[c3]) && (e4.__u |= 2)), null == e4 || null === e4.__v ? (-1 == c3 && h3--, "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
  if (a3) for (r3 = 0; r3 < s3; r3++) null != (e4 = u4[r3]) && 0 == (2 & e4.__u) && (e4.__e == t3 && (t3 = C(e4)), q(e4, e4));
  return t3;
}
function A(n2, l3, u4) {
  var t3, i4;
  if ("function" == typeof n2.type) {
    for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++) t3[i4] && (t3[i4].__ = n2, l3 = A(t3[i4], l3, u4));
    return l3;
  }
  n2.__e != l3 && (l3 && n2.type && !u4.contains(l3) && (l3 = C(n2)), u4.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function L(n2, l3, u4, t3) {
  var i4, r3, o3 = n2.key, e4 = n2.type, f4 = l3[u4];
  if (null === f4 || f4 && o3 == f4.key && e4 === f4.type && 0 == (2 & f4.__u)) return u4;
  if (t3 > (null != f4 && 0 == (2 & f4.__u) ? 1 : 0)) for (i4 = u4 - 1, r3 = u4 + 1; i4 >= 0 || r3 < l3.length; ) {
    if (i4 >= 0) {
      if ((f4 = l3[i4]) && 0 == (2 & f4.__u) && o3 == f4.key && e4 === f4.type) return i4;
      i4--;
    }
    if (r3 < l3.length) {
      if ((f4 = l3[r3]) && 0 == (2 & f4.__u) && o3 == f4.key && e4 === f4.type) return r3;
      r3++;
    }
  }
  return -1;
}
function T(n2, l3, u4) {
  "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || y.test(l3) ? u4 : u4 + "px";
}
function F(n2, l3, u4, t3, i4) {
  var r3;
  n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
  else {
    if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || T(n2.style, l3, "");
    if (u4) for (l3 in u4) t3 && u4[l3] === t3[l3] || T(n2.style, l3, u4[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u4 ? "" : u4;
      break n;
    } catch (n3) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function O(n2) {
  return function(u4) {
    if (this.l) {
      var t3 = this.l[u4.type + n2];
      if (null == u4.t) u4.t = c++;
      else if (u4.t < t3.u) return;
      return t3(l.event ? l.event(u4) : u4);
    }
  };
}
function j(n2, u4, t3, i4, r3, o3, e4, f4, c3, s3) {
  var a3, h3, p3, v3, y3, g2, m3, b2, C3, S2, M2, P2, I2, A3, H2, L2, T3, F2 = u4.type;
  if (void 0 !== u4.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
  n: if ("function" == typeof F2) try {
    if (b2 = u4.props, C3 = "prototype" in F2 && F2.prototype.render, S2 = (a3 = F2.contextType) && i4[a3.__c], M2 = a3 ? S2 ? S2.props.value : a3.__ : i4, t3.__c ? m3 = (h3 = u4.__c = t3.__c).__ = h3.__E : (C3 ? u4.__c = h3 = new F2(b2, M2) : (u4.__c = h3 = new x(b2, M2), h3.constructor = F2, h3.render = B), S2 && S2.sub(h3), h3.props = b2, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i4, p3 = h3.__d = true, h3.__h = [], h3._sb = []), C3 && null == h3.__s && (h3.__s = h3.state), C3 && null != F2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, F2.getDerivedStateFromProps(b2, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u4, p3) C3 && null == F2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), C3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (C3 && null == F2.getDerivedStateFromProps && b2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b2, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b2, h3.__s, M2) || u4.__v == t3.__v)) {
        for (u4.__v != t3.__v && (h3.props = b2, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
          n3 && (n3.__ = u4);
        }), P2 = 0; P2 < h3._sb.length; P2++) h3.__h.push(h3._sb[P2]);
        h3._sb = [], h3.__h.length && e4.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b2, h3.__s, M2), C3 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, y3, g2);
      });
    }
    if (h3.context = M2, h3.props = b2, h3.__P = n2, h3.__e = false, I2 = l.__r, A3 = 0, C3) {
      for (h3.state = h3.__s, h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++) h3.__h.push(h3._sb[H2]);
      h3._sb = [];
    } else do {
      h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A3 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i4 = w(w({}, i4), h3.getChildContext())), C3 && !p3 && null != h3.getSnapshotBeforeUpdate && (g2 = h3.getSnapshotBeforeUpdate(v3, y3)), f4 = $(n2, d(L2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u4, t3, i4, r3, o3, e4, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e4.push(h3), m3 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u4.__v = null, c3 || null != o3) if (n3.then) {
      for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      o3[o3.indexOf(f4)] = null, u4.__e = f4;
    } else for (T3 = o3.length; T3--; ) _(o3[T3]);
    else u4.__e = t3.__e, u4.__k = t3.__k;
    l.__e(n3, u4, t3);
  }
  else null == o3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = N(t3.__e, u4, t3, i4, r3, o3, e4, c3, s3);
  return (a3 = l.diffed) && a3(u4), 128 & u4.__u ? void 0 : f4;
}
function z(n2, u4, t3) {
  for (var i4 = 0; i4 < t3.length; i4++) V(t3[i4], t3[++i4], t3[++i4]);
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function N(u4, t3, i4, r3, o3, e4, f4, c3, s3) {
  var a3, h3, v3, y3, w3, g2, m3, b2 = i4.props, k3 = t3.props, x2 = t3.type;
  if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e4) {
    for (a3 = 0; a3 < e4.length; a3++) if ((w3 = e4[a3]) && "setAttribute" in w3 == !!x2 && (x2 ? w3.localName == x2 : 3 == w3.nodeType)) {
      u4 = w3, e4[a3] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x2) return document.createTextNode(k3);
    u4 = document.createElementNS(o3, x2, k3.is && k3), c3 && (l.__m && l.__m(t3, e4), c3 = false), e4 = null;
  }
  if (null === x2) b2 === k3 || c3 && u4.data === k3 || (u4.data = k3);
  else {
    if (e4 = e4 && n.call(u4.childNodes), b2 = i4.props || p, !c3 && null != e4) for (b2 = {}, a3 = 0; a3 < u4.attributes.length; a3++) b2[(w3 = u4.attributes[a3]).name] = w3.value;
    for (a3 in b2) if (w3 = b2[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) v3 = w3;
    else if (!(a3 in k3)) {
      if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
      F(u4, a3, null, w3, o3);
    }
    for (a3 in k3) w3 = k3[a3], "children" == a3 ? y3 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? g2 = w3 : "checked" == a3 ? m3 = w3 : c3 && "function" != typeof w3 || b2[a3] === w3 || F(u4, a3, w3, b2[a3], o3);
    if (h3) c3 || v3 && (h3.__html === v3.__html || h3.__html === u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
    else if (v3 && (u4.innerHTML = ""), $(u4, d(y3) ? y3 : [y3], t3, i4, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e4, f4, e4 ? e4[0] : i4.__k && C(i4, 0), c3, s3), null != e4) for (a3 = e4.length; a3--; ) _(e4[a3]);
    c3 || (a3 = "value", "progress" == x2 && null == g2 ? u4.removeAttribute("value") : void 0 !== g2 && (g2 !== u4[a3] || "progress" == x2 && !g2 || "option" == x2 && g2 !== b2[a3]) && F(u4, a3, g2, b2[a3], o3), a3 = "checked", void 0 !== m3 && m3 !== u4[a3] && F(u4, a3, m3, b2[a3], o3));
  }
  return u4;
}
function V(n2, u4, t3) {
  try {
    if ("function" == typeof n2) {
      var i4 = "function" == typeof n2.__u;
      i4 && n2.__u(), i4 && null == u4 || (n2.__u = n2(u4));
    } else n2.current = u4;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function q(n2, u4, t3) {
  var i4, r3;
  if (l.unmount && l.unmount(n2), (i4 = n2.ref) && (i4.current && i4.current !== n2.__e || V(i4, null, u4)), null != (i4 = n2.__c)) {
    if (i4.componentWillUnmount) try {
      i4.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u4);
    }
    i4.base = i4.__P = null;
  }
  if (i4 = n2.__k) for (r3 = 0; r3 < i4.length; r3++) i4[r3] && q(i4[r3], u4, t3 || "function" != typeof n2.type);
  t3 || _(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function B(n2, l3, u4) {
  return this.constructor(n2, u4);
}
function D(u4, t3, i4) {
  var r3, o3, e4, f4;
  t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o3 = (r3 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, e4 = [], f4 = [], j(t3, u4 = (!r3 && i4 || t3).__k = g(k, null, [u4]), o3 || p, p, t3.namespaceURI, !r3 && i4 ? [i4] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e4, !r3 && i4 ? i4 : o3 ? o3.__e : t3.firstChild, r3, f4), z(e4, u4, f4);
}
var n, l, u, t, i, r, o, e2, f, c, s, a, h, p, v, y, d;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    "use strict";
    p = {};
    v = [];
    y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    d = Array.isArray;
    n = v.slice, l = { __e: function(n2, l3, u4, t3) {
      for (var i4, r3, o3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
        if ((r3 = i4.constructor) && null != r3.getDerivedStateFromError && (i4.setState(r3.getDerivedStateFromError(n2)), o3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n2, t3 || {}), o3 = i4.__d), o3) return i4.__E = i4;
      } catch (l4) {
        n2 = l4;
      }
      throw n2;
    } }, u = 0, t = function(n2) {
      return null != n2 && null == n2.constructor;
    }, x.prototype.setState = function(n2, l3) {
      var u4;
      u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, u4), this.props)), n2 && w(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
    }, x.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
    }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e2 = function(n2, l3) {
      return n2.__v.__b - l3.__v.__b;
    }, P.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;
  }
});

// src/lib/utils/logging.ts
var DEFAULT_LOG_COLOR, Colors, DISABLED_LOGGER, loggers, getLogger, windowParams, isLogAllMode, logOnly, log, warn, error, Logger;
var init_logging = __esm({
  "src/lib/utils/logging.ts"() {
    "use strict";
    init_preact_module();
    DEFAULT_LOG_COLOR = "yellow";
    Colors = {
      reset: "\x1B[0m",
      bright: "\x1B[1m",
      dim: "\x1B[2m",
      underscore: "\x1B[4m",
      blink: "\x1B[5m",
      reverse: "\x1B[7m",
      hidden: "\x1B[8m",
      black: "\x1B[30m",
      red: "\x1B[31m",
      green: "\x1B[32m",
      yellow: "\x1B[33m",
      blue: "\x1B[34m",
      magenta: "\x1B[35m",
      cyan: "\x1B[36m",
      white: "\x1B[37m",
      BGblack: "\x1B[40m",
      BGred: "\x1B[41m",
      BGgreen: "\x1B[42m",
      BGyellow: "\x1B[43m",
      BGblue: "\x1B[44m",
      BGmagenta: "\x1B[45m",
      BGcyan: "\x1B[46m",
      BGwhite: "\x1B[47m"
    };
    DISABLED_LOGGER = { log: () => {
    }, warn: () => {
    } };
    loggers = {};
    getLogger = function(namespace = "", opts = {}) {
      if (opts.enabled === false) return DISABLED_LOGGER;
      let l3 = loggers[namespace];
      if (!l3) {
        l3 = new Logger(
          namespace,
          opts.color || DEFAULT_LOG_COLOR,
          typeof opts.enabled != "undefined" ? opts.enabled : true
        );
        loggers[namespace] = l3;
      } else if (opts) {
        if (opts.color) l3.color = opts.color;
        if (typeof opts.enabled == "boolean") l3.enabled = opts.enabled;
      }
      return l3;
    };
    isLogAllMode = false;
    logOnly = void 0;
    if (typeof window != "undefined" && typeof URLSearchParams != "undefined") {
      windowParams = new URLSearchParams(window.location.search);
      if (windowParams.get("logAll")) {
        let logWhat = windowParams.get("logAll");
        if (logWhat == "true") {
          isLogAllMode = true;
        } else if (logWhat && logWhat != "true") {
          isLogAllMode = true;
          logOnly = logWhat.split(",");
        }
      }
    }
    log = function(...args) {
      const namespace = args.length > 1 ? args[0] : "";
      args = args.length > 1 ? args.slice(1, args.length) : [];
      let l3 = getLogger(namespace);
      if (l3) {
        if (!isLogAllMode && l3.enabled || isLogAllMode && (!logOnly || logOnly.includes(namespace))) {
          let la = [...args];
          if (namespace) la.unshift(`${Colors[l3.color] || Colors[l3.black]}${namespace || "(no namespace)"}:${Colors["reset"]}`);
          console.log.apply(console, la);
        }
      } else {
        console.log(`Log:`, args);
      }
    };
    warn = function(...args) {
      const namespace = args.length > 1 ? args[0] : "";
      args = args.length > 1 ? args.slice(1, args.length) : [];
      let l3 = getLogger(namespace);
      if (l3) {
        let la = [...args];
        if (namespace) {
          la.unshift(`${Colors[l3.color] || Colors[l3.black]}${namespace || "(no namespace)"}:${Colors["reset"]} \u26A0\uFE0F`);
        }
        console.log.apply(console, la);
      } else {
        console.log(`Warning:`, args);
      }
    };
    error = function(...args) {
      const namespace = args.length > 1 ? args[0] : "";
      args = args.length > 1 ? args.slice(1, args.length) : [];
      let l3 = getLogger(namespace);
      if (l3) {
        let la = [...args];
        if (namespace) la.unshift(`${Colors["red"]}${namespace || "(no namespace)"}:${Colors["reset"]} \u{1F6D1}`);
        console.error.apply(console, la);
      } else {
        console.error(`Error:`, args);
      }
    };
    Logger = class {
      namespace = "";
      color = "yellow";
      enabled = true;
      constructor(namespace, color = DEFAULT_LOG_COLOR, enabled = true) {
        this.namespace = namespace;
        this.color = color;
        this.enabled = enabled;
      }
      // todo: should pass itself or use .call?
      log = (...args) => {
        log(this.namespace, ...args);
        return this;
      };
      // this is like log, but it will show it always
      warn = (...args) => {
        warn(this.namespace, ...args);
        return this;
      };
      // this is like log, but it will show it always
      error = (...args) => {
        error(this.namespace, ...args);
        return this;
      };
      setEnabled(enabled) {
        this.enabled = enabled;
        return this;
      }
    };
  }
});

// src/lib/AudioManager.ts
async function playSound(id) {
  await AudioManager.play(id);
}
var log3, _AudioManager, AudioManager, AudioManager_default;
var init_AudioManager = __esm({
  "src/lib/AudioManager.ts"() {
    "use strict";
    init_preact_module();
    init_logging();
    ({ log: log3 } = getLogger("AudioManager", { color: "red", enabled: false }));
    _AudioManager = class {
      context;
      sounds = /* @__PURE__ */ new Map();
      constructor() {
      }
      async init() {
        log3("init");
        this.context = new AudioContext();
      }
      // Register a sound file by ID without loading it
      register(id, filePath) {
        log3("register", id, filePath);
        this.sounds.set(id, { filePath });
      }
      // Load a sound into memory
      async load(id) {
        if (!this.context) throw new Error(`No audio context.`);
        log3("load", id);
        const sound = this.sounds.get(id);
        if (!sound) throw new Error(`Sound with id ${id} not registered`);
        if (!sound.buffer) {
          const response = await fetch(sound.filePath);
          const arrayBuffer = await response.arrayBuffer();
          sound.buffer = await this.context.decodeAudioData(arrayBuffer);
        }
      }
      // Play a sound by ID, loading it if not already loaded
      async play(id) {
        if (!this.context) await this.init();
        if (!this.context) throw new Error(`No audio context.`);
        log3("play", id);
        const sound = this.sounds.get(id);
        if (!sound) throw new Error(`Sound with id ${id} not registered. Must first call AudioManager.register(id, filePath).`);
        if (!sound.buffer) await this.load(id);
        const source = this.context.createBufferSource();
        source.buffer = sound.buffer;
        source.connect(this.context.destination);
        source.start();
      }
    };
    AudioManager = new _AudioManager();
    AudioManager_default = AudioManager;
  }
});

// src/components/pages/Entry/style.scss
var init_style = __esm({
  "src/components/pages/Entry/style.scss"() {
  }
});

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
function u2(e4, t3, n2, o3, i4, u4) {
  t3 || (t3 = {});
  var a3, c3, p3 = t3;
  if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
  var l3 = { type: e4, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i4, __self: u4 };
  if ("function" == typeof e4 && (a3 = e4.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}
var f2, i2;
var init_jsxRuntime_module = __esm({
  "node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
    "use strict";
    init_preact_module();
    init_preact_module();
    init_preact_module();
    f2 = 0;
    i2 = Array.isArray;
  }
});

// src/components/pages/Entry/index.tsx
var EntryPage, Entry_default;
var init_Entry = __esm({
  "src/components/pages/Entry/index.tsx"() {
    "use strict";
    init_preact_module();
    init_style();
    init_jsxRuntime_module();
    EntryPage = (props) => {
      return /* @__PURE__ */ u2("div", { className: "page", id: "entry", children: "Entry" });
    };
    Entry_default = EntryPage;
  }
});

// src/components/pages/Home/style.scss
var init_style2 = __esm({
  "src/components/pages/Home/style.scss"() {
  }
});

// src/components/pages/Home/index.tsx
var HomePage, Home_default;
var init_Home = __esm({
  "src/components/pages/Home/index.tsx"() {
    "use strict";
    init_preact_module();
    init_style2();
    init_jsxRuntime_module();
    HomePage = (props) => {
      return /* @__PURE__ */ u2("div", { className: "page", id: "home" });
    };
    Home_default = HomePage;
  }
});

// src/components/pages/Info/style.scss
var init_style3 = __esm({
  "src/components/pages/Info/style.scss"() {
  }
});

// src/components/pages/Info/index.tsx
function InfoPage() {
  return /* @__PURE__ */ u2("div", { className: "page", id: "info", children: [
    /* @__PURE__ */ u2("h1", { children: "Info" }),
    /* @__PURE__ */ u2("div", { className: "bio", children: [
      /* @__PURE__ */ u2("div", { className: "section", children: [
        "E-mail: ",
        /* @__PURE__ */ u2("a", { href: "mailto:rw3iss@gmail.com", children: "rw3iss@gmail.com" })
      ] }),
      /* @__PURE__ */ u2("div", { className: "section", children: [
        "Resume: ",
        /* @__PURE__ */ u2("a", { href: "/files/resume-ryan-weiss.pdf", target: "_blank", children: "View" })
      ] })
    ] })
  ] });
}
var Info_default;
var init_Info = __esm({
  "src/components/pages/Info/index.tsx"() {
    "use strict";
    init_preact_module();
    init_style3();
    init_jsxRuntime_module();
    Info_default = InfoPage;
  }
});

// src/components/pages/NotFound/style.scss
var init_style4 = __esm({
  "src/components/pages/NotFound/style.scss"() {
  }
});

// src/components/pages/NotFound/index.tsx
var NotFoundPage, NotFound_default;
var init_NotFound = __esm({
  "src/components/pages/NotFound/index.tsx"() {
    "use strict";
    init_preact_module();
    init_style4();
    init_jsxRuntime_module();
    NotFoundPage = (props) => {
      return /* @__PURE__ */ u2("div", { className: "page center", id: "not-found", children: /* @__PURE__ */ u2("h4", { children: "Page Not Found" }) });
    };
    NotFound_default = NotFoundPage;
  }
});

// src/components/shared/BlobEditor/plugins/PastePlugin.ts
var PastePlugin;
var init_PastePlugin = __esm({
  "src/components/shared/BlobEditor/plugins/PastePlugin.ts"() {
    "use strict";
    init_preact_module();
    PastePlugin = class {
      constructor() {
      }
      initialize(editor, container) {
        container.addEventListener("paste", this.handlePaste);
      }
      handleToolbarPaste = (e4) => {
        console.log(`toolbar paste click.`);
      };
      toolbar = {
        type: "button",
        icon: "/public/icons/icon-paste.svg",
        label: "Paste",
        onClick: this.handleToolbarPaste
      };
      handlePaste = (e4) => {
        e4.preventDefault();
        const clipboardData = e4.clipboardData || window.clipboardData;
        if (!clipboardData) return;
        let pastedContent = clipboardData.getData("text/html") || clipboardData.getData("text/plain");
        console.log(`paste after`, pastedContent);
        if (pastedContent && this.containsHTML(pastedContent)) {
          pastedContent = this.sanitizeContent(pastedContent);
        }
        console.log(`paste after`, pastedContent);
        this.insertSanitizedContent(pastedContent, e4.target);
      };
      containsHTML(content) {
        return /<[^>]+>/i.test(content);
      }
      s;
      sanitizeContent(content) {
        return content.replace(/style=(["'])(?:(?=(\\?))\2.)*?\1/g, "");
      }
      insertSanitizedContent(content, target) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = content;
          let node;
          while (node = tempDiv.firstChild) {
            range.insertNode(node);
          }
          range.collapse(false);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    };
  }
});

// src/components/shared/BlobEditor/plugins/TabPlugin.ts
var TabPlugin;
var init_TabPlugin = __esm({
  "src/components/shared/BlobEditor/plugins/TabPlugin.ts"() {
    "use strict";
    init_preact_module();
    TabPlugin = class {
      initialize(editor, container) {
        container.addEventListener("keydown", this.handleTabKey, true);
        return this;
      }
      handleTabKey = (e4) => {
        if (e4.key === "Tab") {
          e4.preventDefault();
          e4.stopPropagation();
          const selection = window.getSelection();
          if (selection && selection.rangeCount) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            const tabSpaces = document.createTextNode("\xA0\xA0\xA0\xA0");
            range.insertNode(tabSpaces);
            range.setStartAfter(tabSpaces);
            range.setEndAfter(tabSpaces);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
            if (e4.target instanceof HTMLElement) {
              const editor = e4.target.closest(".wysiwyg-container")?.["editor"];
              if (editor) editor.applyChanges();
            }
          }
        }
      };
    };
  }
});

// src/components/shared/BlobEditor/plugins/Dropdown.ts
var Dropdown;
var init_Dropdown = __esm({
  "src/components/shared/BlobEditor/plugins/Dropdown.ts"() {
    "use strict";
    init_preact_module();
    Dropdown = class {
      dropdownButton;
      dropdownMenu;
      items;
      hideTimeout = null;
      isVisible = false;
      constructor(button, items) {
        this.dropdownButton = button;
        this.items = items;
        this.dropdownMenu = this.createDropdownMenu();
      }
      createDropdownMenu() {
        const menu = document.createElement("div");
        menu.className = "dropdown-menu";
        menu.style.display = "none";
        this.items.forEach((item) => {
          if (item.type === "button") {
            const button = document.createElement("button");
            button.className = "dropdown-item";
            if (item.icon) {
              const icon = document.createElement("img");
              icon.src = item.icon;
              icon.alt = item.label;
              button.appendChild(icon);
            }
            if (item.label) {
              const label = document.createElement("span");
              label.textContent = item.label;
              button.appendChild(label);
            }
            if (item.onClick) {
              button.addEventListener("click", (e4) => {
                e4.stopPropagation();
                item.onClick();
              });
            }
            menu.appendChild(button);
          } else {
            this.createToolbarItem(item, menu);
          }
        });
        document.body.appendChild(menu);
        return menu;
      }
      show() {
        if (!this.isVisible) {
          this.positionDropdown();
          this.dropdownMenu.style.display = "flex";
          this.dropdownMenu.style.opacity = "1";
          this.isVisible = true;
          this.dropdownMenu.addEventListener("mouseleave", this.startHideTimer.bind(this));
          this.dropdownMenu.addEventListener("mouseenter", this.clearHideTimer.bind(this));
        }
      }
      positionDropdown() {
        if (!this.isVisible) {
          const buttonRect = this.dropdownButton.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          this.dropdownMenu.style.top = `${buttonRect.bottom + parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue("--dropdown-y-offset"))}px`;
          this.dropdownMenu.style.left = `${buttonRect.left + parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue("--dropdown-x-offset"))}px`;
          if (buttonRect.left + this.dropdownMenu.offsetWidth > windowWidth) {
            this.dropdownMenu.style.left = `${windowWidth - this.dropdownMenu.offsetWidth - parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue("--dropdown-x-offset"))}px`;
          }
        }
      }
      startHideTimer() {
        this.hideTimeout = window.setTimeout(() => {
          this.hideDropdown();
        }, 500);
      }
      clearHideTimer() {
        if (this.hideTimeout) {
          clearTimeout(this.hideTimeout);
          this.hideTimeout = null;
        }
      }
      hideDropdown() {
        this.dropdownMenu.style.display = "none";
        this.dropdownMenu.style.opacity = "0";
        this.isVisible = false;
      }
      createToolbarItem(item, parent) {
        if (item.type === "group") {
          const group = document.createElement("div");
          group.className = "toolbar-group";
          parent.appendChild(group);
          if (Array.isArray(item.items)) {
            item.items.forEach((groupItem) => this.createToolbarItem(groupItem, group));
          }
        } else if (item.type === "dropdown") {
          const nestedDropdownButton = document.createElement("button");
          nestedDropdownButton.className = "toolbar-dropdown-button nested";
          if (item.icon) {
            const icon = document.createElement("img");
            icon.src = item.icon;
            icon.alt = item.label;
            nestedDropdownButton.appendChild(icon);
          }
          if (item.label) {
            const label = document.createElement("span");
            label.textContent = item.label;
            nestedDropdownButton.appendChild(label);
          }
          parent.appendChild(nestedDropdownButton);
        }
      }
    };
  }
});

// src/components/shared/BlobEditor/plugins/ToolbarPlugin.ts
var ToolbarPlugin;
var init_ToolbarPlugin = __esm({
  "src/components/shared/BlobEditor/plugins/ToolbarPlugin.ts"() {
    "use strict";
    init_preact_module();
    init_Dropdown();
    ToolbarPlugin = class _ToolbarPlugin {
      editor;
      toolbarContainer = null;
      isVisible = false;
      constructor() {
      }
      initialize(editor, container) {
        this.editor = editor;
        this.initUI(container);
        container.addEventListener("mouseup", this.checkForSelection);
        container.addEventListener("contextmenu", this.showToolbar);
        document.addEventListener("keydown", this.handleEscapeKey);
      }
      initUI(container) {
        if (!this.toolbarContainer) {
          this.toolbarContainer = document.createElement("div");
          this.toolbarContainer.className = "toolbar-container";
          this.toolbarContainer.style.display = "none";
          container.appendChild(this.toolbarContainer);
        }
        this.toolbarContainer.innerHTML = "";
        let hasItems = false;
        this.editor.plugins.forEach((plugin) => {
          if (plugin instanceof _ToolbarPlugin) return;
          if ("toolbar" in plugin) {
            this.toolbar.items.unshift(plugin.toolbar);
            hasItems = true;
          }
        });
        hasItems = hasItems || this.toolbar.items.length > 0;
        console.log(`creating toolbar`, this.toolbar);
        if (hasItems) {
          this.createToolbarItem(this.toolbar);
        } else {
          this.toolbarContainer.style.display = "none";
        }
      }
      createToolbarItem(item, parent) {
        if (item.type === "button") {
          const button = document.createElement("button");
          button.className = "toolbar-button";
          if (item.icon) {
            const icon = document.createElement("img");
            icon.src = item.icon;
            icon.alt = item.label;
            button.appendChild(icon);
          }
          if (item.label) {
            const label = document.createElement("span");
            label.textContent = item.label;
            button.appendChild(label);
          }
          if (item.onClick) {
            button.addEventListener("click", () => {
              item.onClick.call(this.editor);
              this.hideToolbar();
            });
          }
          (parent || this.toolbarContainer)?.appendChild(button);
        } else if (item.type === "dropdown") {
          const dropdownButton = document.createElement("button");
          dropdownButton.className = "toolbar-dropdown-button";
          if (item.icon) {
            const icon = document.createElement("img");
            icon.src = item.icon;
            icon.alt = item.label;
            dropdownButton.appendChild(icon);
          }
          if (item.label) {
            const label = document.createElement("span");
            label.textContent = item.label;
            dropdownButton.appendChild(label);
          }
          const arrow = document.createElement("span");
          arrow.textContent = "\u25BC";
          dropdownButton.appendChild(arrow);
          const dropdown = new Dropdown(dropdownButton, item.items);
          dropdownButton.addEventListener("click", () => dropdown.show());
          (parent || this.toolbarContainer)?.appendChild(dropdownButton);
        } else if (item.type === "group") {
          const group = document.createElement("div");
          group.className = "toolbar-group";
          (parent || this.toolbarContainer)?.appendChild(group);
          if (Array.isArray(item.items)) {
            item.items.forEach((groupItem) => this.createToolbarItem(groupItem, group));
          }
        }
      }
      checkForSelection = (e4) => {
        if (window.getSelection()?.toString().length > 0) {
          this.showToolbar(e4);
        } else {
          this.hideToolbar();
        }
      };
      showToolbar = (e4) => {
        if (!this.toolbarContainer || this.toolbarContainer.children.length === 0) return;
        const rect = e4.target instanceof Element ? e4.target.getBoundingClientRect() : { top: 0, left: 0 };
        const windowWidth = window.innerWidth;
        this.toolbarContainer.style.top = `${rect.top - this.toolbarContainer.offsetHeight}px`;
        this.toolbarContainer.style.left = `${e4.clientX}px`;
        if (e4.clientX + this.toolbarContainer.offsetWidth > windowWidth) {
          this.toolbarContainer.style.left = `${windowWidth - this.toolbarContainer.offsetWidth}px`;
        }
        this.toolbarContainer.style.display = "flex";
        this.isVisible = true;
      };
      hideToolbar = () => {
        if (!this.toolbarContainer) return;
        this.toolbarContainer.style.display = "none";
        this.isVisible = false;
        Array.from(this.toolbarContainer.querySelectorAll(".dropdown-menu")).forEach((menu) => {
          menu.style.display = "none";
          menu.style.opacity = "0";
        });
      };
      handleEscapeKey = (e4) => {
        if (e4.key === "Escape" && this.isVisible) {
          this.hideToolbar();
        }
      };
      toolbar = {
        type: "group",
        items: [
          {
            type: "dropdown",
            icon: "/public/icons/icon-cog.svg",
            label: "Config",
            items: [
              {
                type: "button",
                icon: "/public/icons/icon-theme.svg",
                label: "Theme",
                onClick: () => console.log("Theme button clicked")
              },
              {
                type: "button",
                icon: "/public/icons/icon-history.svg",
                label: "History",
                onClick: () => console.log("History button clicked")
              }
            ]
          },
          {
            type: "button",
            icon: "/public/icons/icon-close.svg",
            label: "Close",
            onClick: this.hideToolbar
          }
        ]
      };
    };
  }
});

// node_modules/preact/hooks/dist/hooks.module.js
function d2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
}
function h2(n2) {
  return o2 = 1, p2(D2, n2);
}
function p2(n2, u4, i4) {
  var o3 = d2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i4 ? i4(u4) : D2(void 0, u4), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.u)) {
    var f4 = function(n3, t3, r3) {
      if (!o3.__c.__H) return true;
      var u5 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u5.every(function(n4) {
        return !n4.__N;
      })) return !c3 || c3.call(this, n3, t3, r3);
      var i5 = o3.__c.props !== n3;
      return u5.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i5 = true);
        }
      }), c3 && c3.call(this, n3, t3, r3) || i5;
    };
    r2.u = true;
    var c3 = r2.shouldComponentUpdate, e4 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u5 = c3;
        c3 = void 0, f4(n3, t3, r3), c3 = u5;
      }
      e4 && e4.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f4;
  }
  return o3.__N || o3.__;
}
function y2(n2, u4) {
  var i4 = d2(t2++, 3);
  !c2.__s && C2(i4.__H, u4) && (i4.__ = n2, i4.i = u4, r2.__H.__h.push(i4));
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function T2(n2, r3) {
  var u4 = d2(t2++, 7);
  return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
}
function q2(n2, t3) {
  return o2 = 8, T2(function() {
    return n2;
  }, t3);
}
function j2() {
  for (var n2; n2 = f3.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
  } catch (t3) {
    n2.__H.__h = [], c2.__e(t3, n2.__v);
  }
}
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u4 = setTimeout(r3, 100);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u4 = n2.__c;
  "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}
var t2, r2, u3, i3, o2, f3, c2, e3, a2, v2, l2, m2, s2, k2;
var init_hooks_module = __esm({
  "node_modules/preact/hooks/dist/hooks.module.js"() {
    "use strict";
    init_preact_module();
    init_preact_module();
    o2 = 0;
    f3 = [];
    c2 = l;
    e3 = c2.__b;
    a2 = c2.__r;
    v2 = c2.diffed;
    l2 = c2.__c;
    m2 = c2.unmount;
    s2 = c2.__;
    c2.__b = function(n2) {
      r2 = null, e3 && e3(n2);
    }, c2.__ = function(n2, t3) {
      n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
    }, c2.__r = function(n2) {
      a2 && a2(n2), t2 = 0;
      var i4 = (r2 = n2.__c).__H;
      i4 && (u3 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
        n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
      })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u3 = r2;
    }, c2.diffed = function(n2) {
      v2 && v2(n2);
      var t3 = n2.__c;
      t3 && t3.__H && (t3.__H.__h.length && (1 !== f3.push(t3) && i3 === c2.requestAnimationFrame || ((i3 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
        n3.i && (n3.__H = n3.i), n3.i = void 0;
      })), u3 = r2 = null;
    }, c2.__c = function(n2, t3) {
      t3.some(function(n3) {
        try {
          n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
            return !n4.__ || B2(n4);
          });
        } catch (r3) {
          t3.some(function(n4) {
            n4.__h && (n4.__h = []);
          }), t3 = [], c2.__e(r3, n3.__v);
        }
      }), l2 && l2(n2, t3);
    }, c2.unmount = function(n2) {
      m2 && m2(n2);
      var t3, r3 = n2.__c;
      r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
        try {
          z2(n3);
        } catch (n4) {
          t3 = n4;
        }
      }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
    };
    k2 = "function" == typeof requestAnimationFrame;
  }
});

// node_modules/uuid/dist/esm-browser/stringify.js
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
var byteToHex;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-browser/stringify.js"() {
    "use strict";
    init_preact_module();
    byteToHex = [];
    for (let i4 = 0; i4 < 256; ++i4) {
      byteToHex.push((i4 + 256).toString(16).slice(1));
    }
  }
});

// node_modules/uuid/dist/esm-browser/rng.js
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}
var getRandomValues, rnds8;
var init_rng = __esm({
  "node_modules/uuid/dist/esm-browser/rng.js"() {
    "use strict";
    init_preact_module();
    rnds8 = new Uint8Array(16);
  }
});

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID, native_default;
var init_native = __esm({
  "node_modules/uuid/dist/esm-browser/native.js"() {
    "use strict";
    init_preact_module();
    randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    native_default = { randomUUID };
  }
});

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i4 = 0; i4 < 16; ++i4) {
      buf[offset + i4] = rnds[i4];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default;
var init_v4 = __esm({
  "node_modules/uuid/dist/esm-browser/v4.js"() {
    "use strict";
    init_preact_module();
    init_native();
    init_rng();
    init_stringify();
    v4_default = v4;
  }
});

// node_modules/uuid/dist/esm-browser/index.js
var init_esm_browser = __esm({
  "node_modules/uuid/dist/esm-browser/index.js"() {
    "use strict";
    init_preact_module();
    init_v4();
  }
});

// src/lib/types/Blob.ts
var Blob2;
var init_Blob = __esm({
  "src/lib/types/Blob.ts"() {
    "use strict";
    init_preact_module();
    init_esm_browser();
    Blob2 = class {
      id;
      title;
      dateUpdated;
      content;
      type;
      constructor(params = {}) {
        this.id = params.id || v4_default();
        this.title = params.title || "";
        this.content = params.content || { entries: [] };
        this.dateUpdated = params.dateUpdated || /* @__PURE__ */ new Date();
        this.type = params.type || "blob";
      }
    };
  }
});

// src/lib/utils/throttle.ts
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    const now = Date.now();
    if (!lastRan) {
      func.apply(context, args);
      lastRan = now;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if (now - lastRan >= limit) {
          func.apply(context, args);
          lastRan = now;
        }
      }, limit - (now - lastRan));
    }
  };
}
var init_throttle = __esm({
  "src/lib/utils/throttle.ts"() {
    "use strict";
    init_preact_module();
  }
});

// node_modules/eventbusjs/lib/eventbus.min.js
var require_eventbus_min = __commonJS({
  "node_modules/eventbusjs/lib/eventbus.min.js"(exports, module) {
    "use strict";
    init_preact_module();
    (function(root, factory) {
      if (typeof exports === "object" && typeof module === "object") module.exports = factory();
      else if (typeof define === "function" && define.amd) define("EventBus", [], factory);
      else if (typeof exports === "object") exports["EventBus"] = factory();
      else root["EventBus"] = factory();
    })(exports, function() {
      var EventBusClass = {};
      EventBusClass = function() {
        this.listeners = {};
      };
      EventBusClass.prototype = { addEventListener: function(type, callback, scope) {
        var args = [];
        var numOfArgs = arguments.length;
        for (var i4 = 0; i4 < numOfArgs; i4++) {
          args.push(arguments[i4]);
        }
        args = args.length > 3 ? args.splice(3, args.length - 1) : [];
        if (typeof this.listeners[type] != "undefined") {
          this.listeners[type].push({ scope, callback, args });
        } else {
          this.listeners[type] = [{ scope, callback, args }];
        }
      }, removeEventListener: function(type, callback, scope) {
        if (typeof this.listeners[type] != "undefined") {
          var numOfCallbacks = this.listeners[type].length;
          var newArray = [];
          for (var i4 = 0; i4 < numOfCallbacks; i4++) {
            var listener = this.listeners[type][i4];
            if (listener.scope == scope && listener.callback == callback) {
            } else {
              newArray.push(listener);
            }
          }
          this.listeners[type] = newArray;
        }
      }, hasEventListener: function(type, callback, scope) {
        if (typeof this.listeners[type] != "undefined") {
          var numOfCallbacks = this.listeners[type].length;
          if (callback === void 0 && scope === void 0) {
            return numOfCallbacks > 0;
          }
          for (var i4 = 0; i4 < numOfCallbacks; i4++) {
            var listener = this.listeners[type][i4];
            if ((scope ? listener.scope == scope : true) && listener.callback == callback) {
              return true;
            }
          }
        }
        return false;
      }, dispatch: function(type, target) {
        var event = { type, target };
        var args = [];
        var numOfArgs = arguments.length;
        for (var i4 = 0; i4 < numOfArgs; i4++) {
          args.push(arguments[i4]);
        }
        args = args.length > 2 ? args.splice(2, args.length - 1) : [];
        args = [event].concat(args);
        if (typeof this.listeners[type] != "undefined") {
          var listeners = this.listeners[type].slice();
          var numOfCallbacks = listeners.length;
          for (var i4 = 0; i4 < numOfCallbacks; i4++) {
            var listener = listeners[i4];
            if (listener && listener.callback) {
              var concatArgs = args.concat(listener.args);
              listener.callback.apply(listener.scope, concatArgs);
            }
          }
        }
      }, getEvents: function() {
        var str = "";
        for (var type in this.listeners) {
          var numOfCallbacks = this.listeners[type].length;
          for (var i4 = 0; i4 < numOfCallbacks; i4++) {
            var listener = this.listeners[type][i4];
            str += listener.scope && listener.scope.className ? listener.scope.className : "anonymous";
            str += " listen for '" + type + "'\n";
          }
        }
        return str;
      } };
      var EventBus2 = new EventBusClass();
      return EventBus2;
    });
  }
});

// src/components/shared/BlobEditor/lib/ApiClient.ts
var ApiClient;
var init_ApiClient = __esm({
  "src/components/shared/BlobEditor/lib/ApiClient.ts"() {
    "use strict";
    init_preact_module();
    ApiClient = class {
      baseUrl = "your-api-endpoint-url";
      // Replace with actual API endpoint
      async fetchBlobs() {
        const response = await fetch(`${this.baseUrl}/blobs`);
        return await response.json();
      }
      async fetchBlob(id) {
        const response = await fetch(`${this.baseUrl}/blobs/${id}`);
        if (!response.ok) return null;
        return await response.json();
      }
      async saveBlob(blob) {
        await fetch(`${this.baseUrl}/blobs/${blob.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blob)
        });
      }
      async deleteBlob(id) {
        await fetch(`${this.baseUrl}/blobs/${id}`, { method: "DELETE" });
      }
    };
  }
});

// node_modules/local-storage-fallback/node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/local-storage-fallback/node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    init_preact_module();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = parse;
    exports.serialize = serialize;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C3 = function() {
      };
      C3.prototype = /* @__PURE__ */ Object.create(null);
      return C3;
    })();
    function parse(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1)
          break;
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        if (obj[key] === void 0) {
          let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          let valEndIdx = endIndex(str, endIdx, valStartIdx);
          const value = dec(str.slice(valStartIdx, valEndIdx));
          obj[key] = value;
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function startIndex(str, index, max) {
      do {
        const code = str.charCodeAt(index);
        if (code !== 32 && code !== 9)
          return index;
      } while (++index < max);
      return max;
    }
    function endIndex(str, index, min) {
      while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9)
          return index + 1;
      }
      return min;
    }
    function serialize(name, val, options) {
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
      }
      let str = name + "=" + value;
      if (!options)
        return str;
      if (options.maxAge !== void 0) {
        if (!Number.isInteger(options.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
      }
      if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
          throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
      }
      if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
          throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
      }
      if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
      }
      if (options.httpOnly) {
        str += "; HttpOnly";
      }
      if (options.secure) {
        str += "; Secure";
      }
      if (options.partitioned) {
        str += "; Partitioned";
      }
      if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
      }
      if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
      }
      return str;
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e4) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// node_modules/local-storage-fallback/lib/CookieStorage.js
var require_CookieStorage = __commonJS({
  "node_modules/local-storage-fallback/lib/CookieStorage.js"(exports) {
    "use strict";
    init_preact_module();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    exports.hasCookies = hasCookies;
    var cookie = _interopRequireWildcard(require_dist());
    function _getRequireWildcardCache(e4) {
      if ("function" != typeof WeakMap) return null;
      var r3 = /* @__PURE__ */ new WeakMap(), t3 = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(e5) {
        return e5 ? t3 : r3;
      })(e4);
    }
    function _interopRequireWildcard(e4, r3) {
      if (!r3 && e4 && e4.__esModule) return e4;
      if (null === e4 || "object" != _typeof(e4) && "function" != typeof e4) return { "default": e4 };
      var t3 = _getRequireWildcardCache(r3);
      if (t3 && t3.has(e4)) return t3.get(e4);
      var n2 = { __proto__: null }, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u4 in e4) if ("default" !== u4 && {}.hasOwnProperty.call(e4, u4)) {
        var i4 = a3 ? Object.getOwnPropertyDescriptor(e4, u4) : null;
        i4 && (i4.get || i4.set) ? Object.defineProperty(n2, u4, i4) : n2[u4] = e4[u4];
      }
      return n2["default"] = e4, t3 && t3.set(e4, n2), n2;
    }
    function _typeof(o3) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o4) {
        return typeof o4;
      } : function(o4) {
        return o4 && "function" == typeof Symbol && o4.constructor === Symbol && o4 !== Symbol.prototype ? "symbol" : typeof o4;
      }, _typeof(o3);
    }
    function _classCallCheck(a3, n2) {
      if (!(a3 instanceof n2)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e4, r3) {
      for (var t3 = 0; t3 < r3.length; t3++) {
        var o3 = r3[t3];
        o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, _toPropertyKey(o3.key), o3);
      }
    }
    function _createClass(e4, r3, t3) {
      return r3 && _defineProperties(e4.prototype, r3), t3 && _defineProperties(e4, t3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
    }
    function _toPropertyKey(t3) {
      var i4 = _toPrimitive(t3, "string");
      return "symbol" == _typeof(i4) ? i4 : i4 + "";
    }
    function _toPrimitive(t3, r3) {
      if ("object" != _typeof(t3) || !t3) return t3;
      var e4 = t3[Symbol.toPrimitive];
      if (void 0 !== e4) {
        var i4 = e4.call(t3, r3 || "default");
        if ("object" != _typeof(i4)) return i4;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r3 ? String : Number)(t3);
    }
    var prefix = "lS_";
    var CookieStorage = exports["default"] = /* @__PURE__ */ function() {
      function CookieStorage2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck(this, CookieStorage2);
        this.cookieOptions = Object.assign({
          path: "/"
        }, options);
        prefix = options.prefix === void 0 ? prefix : options.prefix;
      }
      return _createClass(CookieStorage2, [{
        key: "getItem",
        value: function getItem(key) {
          var cookies = cookie.parse(document.cookie);
          if (!cookies || !cookies[prefix + key]) {
            return null;
          }
          return cookies[prefix + key];
        }
      }, {
        key: "setItem",
        value: function setItem(key, value) {
          document.cookie = cookie.serialize(prefix + key, value, this.cookieOptions);
          return value;
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          var options = Object.assign({}, this.cookieOptions, {
            maxAge: -1
          });
          document.cookie = cookie.serialize(prefix + key, "", options);
          return null;
        }
      }, {
        key: "clear",
        value: function clear() {
          var cookies = cookie.parse(document.cookie);
          for (var key in cookies) {
            if (key.indexOf(prefix) === 0) {
              this.removeItem(key.substr(prefix.length));
            }
          }
          return null;
        }
      }]);
    }();
    function hasCookies() {
      var storage = new CookieStorage();
      try {
        var TEST_KEY = "__test";
        storage.setItem(TEST_KEY, "1");
        var value = storage.getItem(TEST_KEY);
        storage.removeItem(TEST_KEY);
        return value === "1";
      } catch (e4) {
        return false;
      }
    }
  }
});

// node_modules/local-storage-fallback/lib/isSupported.js
var require_isSupported = __commonJS({
  "node_modules/local-storage-fallback/lib/isSupported.js"(exports) {
    "use strict";
    init_preact_module();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = isSupported;
    var _CookieStorage = require_CookieStorage();
    var TEST_KEY = "__test";
    function hasStorage(name) {
      try {
        var storage = window[name];
        storage.setItem(TEST_KEY, "1");
        storage.removeItem(TEST_KEY);
        return true;
      } catch (e4) {
        return false;
      }
    }
    function isSupported() {
      var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "localStorage";
      var storage = String(name).replace(/storage$/i, "").toLowerCase();
      if (storage === "local") {
        return hasStorage("localStorage");
      }
      if (storage === "session") {
        return hasStorage("sessionStorage");
      }
      if (storage === "cookie") {
        return (0, _CookieStorage.hasCookies)();
      }
      if (storage === "memory") {
        return true;
      }
      throw new Error("Storage method `".concat(name, "` is not available.\n    Please use one of the following: localStorage, sessionStorage, cookieStorage, memoryStorage."));
    }
  }
});

// node_modules/local-storage-fallback/lib/MemoryStorage.js
var require_MemoryStorage = __commonJS({
  "node_modules/local-storage-fallback/lib/MemoryStorage.js"(exports) {
    "use strict";
    init_preact_module();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    function _typeof(o3) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o4) {
        return typeof o4;
      } : function(o4) {
        return o4 && "function" == typeof Symbol && o4.constructor === Symbol && o4 !== Symbol.prototype ? "symbol" : typeof o4;
      }, _typeof(o3);
    }
    function _classCallCheck(a3, n2) {
      if (!(a3 instanceof n2)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e4, r3) {
      for (var t3 = 0; t3 < r3.length; t3++) {
        var o3 = r3[t3];
        o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, _toPropertyKey(o3.key), o3);
      }
    }
    function _createClass(e4, r3, t3) {
      return r3 && _defineProperties(e4.prototype, r3), t3 && _defineProperties(e4, t3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
    }
    function _toPropertyKey(t3) {
      var i4 = _toPrimitive(t3, "string");
      return "symbol" == _typeof(i4) ? i4 : i4 + "";
    }
    function _toPrimitive(t3, r3) {
      if ("object" != _typeof(t3) || !t3) return t3;
      var e4 = t3[Symbol.toPrimitive];
      if (void 0 !== e4) {
        var i4 = e4.call(t3, r3 || "default");
        if ("object" != _typeof(i4)) return i4;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r3 ? String : Number)(t3);
    }
    var MemoryStorage = exports["default"] = /* @__PURE__ */ function() {
      function MemoryStorage2() {
        _classCallCheck(this, MemoryStorage2);
        this._data = {};
      }
      return _createClass(MemoryStorage2, [{
        key: "getItem",
        value: function getItem(key) {
          return this._data.hasOwnProperty(key) ? this._data[key] : null;
        }
      }, {
        key: "setItem",
        value: function setItem(key, value) {
          return this._data[key] = String(value);
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          return delete this._data[key];
        }
      }, {
        key: "clear",
        value: function clear() {
          return this._data = {};
        }
      }]);
    }();
  }
});

// node_modules/local-storage-fallback/lib/index.js
var require_lib = __commonJS({
  "node_modules/local-storage-fallback/lib/index.js"(exports) {
    "use strict";
    init_preact_module();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "CookieStorage", {
      enumerable: true,
      get: function get() {
        return _CookieStorage["default"];
      }
    });
    Object.defineProperty(exports, "MemoryStorage", {
      enumerable: true,
      get: function get() {
        return _MemoryStorage["default"];
      }
    });
    exports["default"] = void 0;
    Object.defineProperty(exports, "isSupported", {
      enumerable: true,
      get: function get() {
        return _isSupported["default"];
      }
    });
    exports.storage = void 0;
    var _isSupported = _interopRequireDefault(require_isSupported());
    var _CookieStorage = _interopRequireDefault(require_CookieStorage());
    var _MemoryStorage = _interopRequireDefault(require_MemoryStorage());
    function _interopRequireDefault(e4) {
      return e4 && e4.__esModule ? e4 : { "default": e4 };
    }
    var storage = exports.storage = null;
    if ((0, _isSupported["default"])("localStorage")) {
      exports.storage = storage = window.localStorage;
    } else if ((0, _isSupported["default"])("sessionStorage")) {
      exports.storage = storage = window.sessionStorage;
    } else if ((0, _isSupported["default"])("cookieStorage")) {
      exports.storage = storage = new _CookieStorage["default"]();
    } else {
      exports.storage = storage = new _MemoryStorage["default"]();
    }
    var _default = exports["default"] = storage;
  }
});

// src/components/shared/BlobEditor/lib/CacheService.ts
var import_local_storage_fallback, CacheService;
var init_CacheService = __esm({
  "src/components/shared/BlobEditor/lib/CacheService.ts"() {
    "use strict";
    init_preact_module();
    import_local_storage_fallback = __toESM(require_lib());
    CacheService = class {
      storage;
      prefix;
      constructor(prefix) {
        this.storage = import_local_storage_fallback.default;
        this.prefix = prefix;
      }
      get(key) {
        const item = this.storage.getItem(this.getKey(key));
        return item ? JSON.parse(item) : null;
      }
      set(key, value) {
        this.storage.setItem(this.getKey(key), JSON.stringify(value));
      }
      remove(key) {
        this.storage.removeItem(this.getKey(key));
      }
      getAll() {
        const items = [];
        for (let i4 = 0; i4 < this.storage.length; i4++) {
          const key = this.storage.key(i4);
          if (key && key.startsWith(this.prefix)) {
            items.push(JSON.parse(this.storage.getItem(key) || "{}"));
          }
        }
        return items;
      }
      setAll(items) {
        items.forEach((item) => {
          if ("id" in item) {
            this.set(item.id, item);
          }
        });
      }
      clear() {
        this.getAll().forEach((_2, index) => {
          const key = this.storage.key(index);
          if (key && key.startsWith(this.prefix)) {
            this.storage.removeItem(key);
          }
        });
      }
      getKey(key) {
        return `${this.prefix}:${key}`;
      }
    };
  }
});

// src/components/shared/BlobEditor/lib/BlobService.ts
var import_eventbusjs, BlobService;
var init_BlobService = __esm({
  "src/components/shared/BlobEditor/lib/BlobService.ts"() {
    "use strict";
    init_preact_module();
    import_eventbusjs = __toESM(require_eventbus_min());
    init_ApiClient();
    init_CacheService();
    BlobService = class {
      apiClient;
      cacheService;
      eventBus = import_eventbusjs.default;
      constructor() {
        this.apiClient = new ApiClient();
        this.cacheService = new CacheService("blobService");
      }
      async listBlobs() {
        let blobs = this.cacheService.getAll();
        if (!blobs || blobs.length === 0) {
          blobs = await this.apiClient.fetchBlobs();
          this.cacheService.setAll(blobs);
        }
        return blobs;
      }
      async getBlob(id) {
        let blob = this.cacheService.get(id);
        if (!blob) {
          blob = await this.apiClient.fetchBlob(id);
          if (blob) {
            this.cacheService.set(id, blob);
          }
        }
        return blob;
      }
      async saveBlob(blob) {
        await this.apiClient.saveBlob(blob);
        this.cacheService.set(blob.id, blob);
        this.notifyEvent("blobUpdated", blob);
      }
      async deleteBlob(id) {
        await this.apiClient.deleteBlob(id);
        this.cacheService.remove(id);
        this.notifyEvent("blobDeleted", { id });
      }
      notifyEvent(eventType, data) {
        this.eventBus.dispatch(eventType, data);
      }
      clear() {
        this.cacheService.clear();
      }
    };
  }
});

// src/components/shared/BlobEditor/ContentEntries.tsx
var ContentEntry, TextEntry, GroupEntry, LinkEntry, HeaderEntry, FileEntry, CustomEntry, PreEntry, CodeEntry, BreakEntry, ContentEntries;
var init_ContentEntries = __esm({
  "src/components/shared/BlobEditor/ContentEntries.tsx"() {
    "use strict";
    init_preact_module();
    ContentEntry = class {
      static convertToHTML(entry, parent) {
        throw new Error("Method not implemented");
      }
      static convertNodeToEntry(node) {
        throw new Error("Method not implemented");
      }
    };
    TextEntry = class _TextEntry extends ContentEntry {
      type = "text";
      attributes;
      inner;
      constructor(inner, attributes) {
        super();
        this.inner = inner;
        this.attributes = attributes;
      }
      static convertToHTML(entry, parent) {
        let textNode;
        let wrapper = null;
        if (entry.attributes) {
          if (entry.attributes["bold"]) {
            wrapper = document.createElement("b");
          } else if (entry.attributes["italic"]) {
            wrapper = document.createElement("i");
          } else if (entry.attributes["span"]) {
            wrapper = document.createElement("span");
            if (entry.attributes["class"]) {
              wrapper.className = entry.attributes["class"];
            }
          }
        }
        textNode = document.createTextNode(entry.inner);
        if (wrapper) {
          wrapper.appendChild(textNode);
          if (wrapper.tagName === "SPAN") {
            Object.entries(entry.attributes || {}).forEach(([key, value]) => {
              if (key !== "span" && key !== "class") {
                wrapper.setAttribute(key, value);
              }
            });
          }
          parent.appendChild(wrapper);
        } else {
          parent.appendChild(textNode);
        }
      }
      static convertNodeToEntry(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          return new _TextEntry(node.textContent || "");
        } else if (node instanceof HTMLElement) {
          let attributes = {};
          let textContent = "";
          if (node.tagName === "B") {
            attributes["bold"] = "true";
            textContent = node.textContent || "";
          } else if (node.tagName === "I") {
            attributes["italic"] = "true";
            textContent = node.textContent || "";
          } else if (node.tagName === "SPAN") {
            attributes["span"] = "true";
            textContent = node.textContent || "";
            Array.from(node.attributes).forEach((attr) => {
              attributes[attr.name] = attr.value;
            });
          } else {
            return null;
          }
          return new _TextEntry(textContent, attributes);
        }
        return null;
      }
    };
    GroupEntry = class _GroupEntry extends ContentEntry {
      type = "group";
      attributes;
      inner;
      constructor(attributes, inner = []) {
        super();
        this.attributes = attributes;
        this.inner = inner;
      }
      static convertToHTML(entry, parent) {
        const div = document.createElement("div");
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            div.setAttribute(key, value);
          }
        }
        parent.appendChild(div);
        if (Array.isArray(entry.inner)) {
          entry.inner.forEach((child) => ContentEntries.convertToHTMLByType(child, div));
        }
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const inner = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) inner.push(childEntry);
        });
        return new _GroupEntry(attributes, inner);
      }
    };
    LinkEntry = class _LinkEntry extends ContentEntry {
      type = "link";
      attributes;
      inner;
      constructor(inner, attributes) {
        super();
        this.inner = inner;
        this.attributes = attributes;
      }
      static convertToHTML(entry, parent) {
        const a3 = document.createElement("a");
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            a3.setAttribute(key, value);
          }
        }
        parent.appendChild(a3);
        if (Array.isArray(entry.inner)) {
          entry.inner.forEach((child) => ContentEntries.convertToHTMLByType(child, a3));
        } else {
          a3.textContent = entry.inner;
        }
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        let inner;
        if (node.childNodes.length > 0) {
          if (node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE) {
            inner = node.textContent || "";
          } else {
            inner = Array.from(node.childNodes).map((childNode) => ContentEntries.convertNodeToEntry(childNode)).filter(Boolean);
          }
        } else {
          inner = "";
        }
        return new _LinkEntry(inner, attributes);
      }
    };
    HeaderEntry = class _HeaderEntry extends ContentEntry {
      type = "header";
      attributes;
      inner;
      constructor(inner, attributes) {
        super();
        this.inner = inner;
        this.attributes = attributes;
      }
      static convertToHTML(entry, parent) {
        const level = entry.attributes?.level || "1";
        const h3 = document.createElement(`h${level}`);
        h3.textContent = entry.inner;
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            if (key !== "level") {
              h3.setAttribute(key, value);
            }
          }
        }
        parent.appendChild(h3);
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        return new _HeaderEntry(node.textContent || "", attributes);
      }
    };
    FileEntry = class _FileEntry extends ContentEntry {
      type = "file";
      attributes;
      inner;
      constructor(inner, attributes) {
        super();
        this.inner = inner;
        this.attributes = attributes;
      }
      static convertToHTML(entry, parent) {
        const fileDiv = document.createElement("div");
        fileDiv.textContent = entry.inner;
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            fileDiv.setAttribute(key, value);
          }
        }
        parent.appendChild(fileDiv);
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        return new _FileEntry(node.textContent || "", attributes);
      }
    };
    CustomEntry = class _CustomEntry extends ContentEntry {
      type = "custom";
      attributes;
      inner;
      constructor(attributes, inner = []) {
        super();
        this.attributes = attributes;
        this.inner = inner;
      }
      static convertToHTML(entry, parent) {
        const customDiv = document.createElement("div");
        customDiv.setAttribute("custom", "true");
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            customDiv.setAttribute(key, value);
          }
        }
        parent.appendChild(customDiv);
        entry.inner.forEach((child) => ContentEntries.convertToHTMLByType(child, customDiv));
      }
      static convertNodeToEntry(node) {
        if (node.getAttribute("custom") !== "true") return null;
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const inner = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) inner.push(childEntry);
        });
        return new _CustomEntry(attributes, inner);
      }
    };
    PreEntry = class _PreEntry extends ContentEntry {
      type = "pre";
      attributes;
      inner;
      constructor(attributes, inner = []) {
        super();
        this.attributes = attributes;
        this.inner = inner;
      }
      static convertToHTML(entry, parent) {
        const pre = document.createElement("pre");
        if (entry.attributes) {
          pre.setAttribute("type", entry.type);
          for (const [key, value] of Object.entries(entry.attributes)) {
            pre.setAttribute(key, value);
          }
        }
        parent.appendChild(pre);
        entry.inner.forEach((child) => ContentEntries.convertToHTMLByType(child, pre));
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const inner = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) inner.push(childEntry);
        });
        return new _PreEntry(attributes, inner);
      }
    };
    CodeEntry = class _CodeEntry extends ContentEntry {
      type = "code";
      attributes;
      inner;
      constructor(attributes, inner = []) {
        super();
        this.attributes = attributes;
        this.inner = inner;
      }
      static convertToHTML(entry, parent) {
        const code = document.createElement("code");
        if (entry.attributes) {
          code.setAttribute("type", entry.type);
          for (const [key, value] of Object.entries(entry.attributes)) {
            code.setAttribute(key, value);
          }
        }
        parent.appendChild(code);
        entry.inner.forEach((child) => ContentEntries.convertToHTMLByType(child, code));
      }
      static convertNodeToEntry(node) {
        if (node.tagName !== "CODE") return null;
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const inner = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) inner.push(childEntry);
        });
        return new _CodeEntry(attributes, inner);
      }
    };
    BreakEntry = class _BreakEntry extends ContentEntry {
      type = "break";
      attributes;
      //inner?: ContentEntry[];
      constructor(attributes) {
        super();
        this.attributes = attributes;
      }
      static convertToHTML(entry, parent) {
        const br = document.createElement("br");
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            br.setAttribute(key, value);
          }
        }
        parent.appendChild(br);
      }
      static convertNodeToEntry(node) {
        if (node.tagName === "BR") {
          const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
          }, {});
          return new _BreakEntry(attributes);
        }
        return null;
      }
    };
    ContentEntries = class {
      static convertToHTMLByType(entry, parent) {
        switch (entry.type) {
          case "text":
            TextEntry.convertToHTML(entry, parent);
            break;
          case "group":
            GroupEntry.convertToHTML(entry, parent);
            break;
          case "link":
            LinkEntry.convertToHTML(entry, parent);
            break;
          case "header":
            HeaderEntry.convertToHTML(entry, parent);
            break;
          case "file":
            FileEntry.convertToHTML(entry, parent);
            break;
          case "custom":
            CustomEntry.convertToHTML(entry, parent);
            break;
          case "pre":
            PreEntry.convertToHTML(entry, parent);
            break;
          case "code":
            CodeEntry.convertToHTML(entry, parent);
            break;
          case "break":
            BreakEntry.convertToHTML(entry, parent);
            break;
          default:
            console.warn("Unknown entry type:", entry.type);
        }
      }
      static convertNodeToEntry(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          return TextEntry.convertNodeToEntry(node);
        }
        if (node.nodeName === "DIV") {
          const div = node;
          if (div.getAttribute("custom") === "true") {
            return CustomEntry.convertNodeToEntry(div);
          }
          return GroupEntry.convertNodeToEntry(div);
        }
        if (node.nodeName === "A") {
          return LinkEntry.convertNodeToEntry(node);
        }
        if (/^H[1-6]$/.test(node.nodeName)) {
          return HeaderEntry.convertNodeToEntry(node);
        }
        if (node.nodeName === "B" || node.nodeName === "I" || node.nodeName === "SPAN") {
          return TextEntry.convertNodeToEntry(node);
        }
        if (node.nodeName === "PRE") {
          return PreEntry.convertNodeToEntry(node);
        }
        if (node.nodeName === "CODE") {
          return CodeEntry.convertNodeToEntry(node);
        }
        if (node.nodeName === "BR") {
          return BreakEntry.convertNodeToEntry(node);
        }
        return null;
      }
    };
  }
});

// src/components/shared/BlobEditor/lib/WEditor.ts
var CHANGE_TIMEOUT_MS, WEditor;
var init_WEditor = __esm({
  "src/components/shared/BlobEditor/lib/WEditor.ts"() {
    "use strict";
    init_preact_module();
    init_ContentEntries();
    CHANGE_TIMEOUT_MS = 2e3;
    WEditor = class {
      container;
      blob;
      contentEditable;
      onChangeHandler;
      plugins;
      applyChangesTimeoutId = null;
      autoSaveTimeoutId = null;
      constructor(container, blob, onChange, plugins = []) {
        this.container = container;
        this.blob = blob;
        this.contentEditable = null;
        this.onChangeHandler = onChange;
        this.plugins = plugins || [];
        this.initialize();
        this.initPlugins();
      }
      initialize() {
        if (!this.container) {
          console.error("WEditor initialization failed: Container is null");
          return;
        }
        if (!this.contentEditable) {
          this.contentEditable = document.createElement("div");
          this.contentEditable.setAttribute("contenteditable", "true");
          this.container.appendChild(this.contentEditable);
        }
        this.loadBlob();
        this.setupEventListeners();
      }
      initPlugins() {
        if (!this.container) return;
        this.plugins.forEach((plugin) => {
          plugin.initialize(this, this.container);
        });
      }
      setupEventListeners() {
        if (!this.contentEditable) return;
        this.contentEditable.addEventListener("input", this.handleContentChange);
      }
      handleContentChange = () => {
        console.log(`change.`);
        if (this.applyChangesTimeoutId) clearTimeout(this.applyChangesTimeoutId);
        this.applyChangesTimeoutId = setTimeout(() => {
          this.applyChanges();
        }, CHANGE_TIMEOUT_MS);
        if (!this.autoSaveTimeoutId) {
          this.autoSaveTimeoutId = setTimeout(() => {
            this.applyChanges();
          }, CHANGE_TIMEOUT_MS / 2);
        }
      };
      loadBlob() {
        if (!this.contentEditable) {
          console.error("Cannot load blob: ContentEditable is null");
          return;
        }
        this.contentEditable.innerHTML = "";
        this.convertToHTML(this.blob.content, this.contentEditable);
      }
      convertToHTML(content, parent) {
        content.entries.forEach((entry) => {
          ContentEntries.convertToHTMLByType(entry, parent);
        });
      }
      applyChanges() {
        if (!this.contentEditable) {
          console.error("Cannot apply changes: ContentEditable is null");
          return null;
        }
        if (this.autoSaveTimeoutId) {
          clearTimeout(this.autoSaveTimeoutId);
          this.autoSaveTimeoutId = null;
        }
        const entries = [];
        const nodes = Array.from(this.contentEditable.childNodes);
        nodes.forEach((node) => {
          const entry = ContentEntries.convertNodeToEntry(node);
          if (entry) entries.push(entry);
        });
        const content = { entries };
        this.onChangeHandler(content);
        return content;
      }
      updateContent(newContent) {
      }
    };
  }
});

// src/components/shared/BlobEditor/FilePreviewHandler.ts
var FilePreviewHandler;
var init_FilePreviewHandler = __esm({
  "src/components/shared/BlobEditor/FilePreviewHandler.ts"() {
    "use strict";
    init_preact_module();
    FilePreviewHandler = class {
      editor;
      constructor(editor) {
        this.editor = editor;
      }
      createPreview(file, range) {
        let previewElement;
        if (file.type.startsWith("image/")) {
          previewElement = this.renderImage(file);
        } else if (file.type.startsWith("video/")) {
          previewElement = this.renderVideo(file);
        } else if (file.type.startsWith("audio/")) {
          previewElement = this.renderAudio(file);
        } else {
          previewElement = this.renderGeneric(file);
        }
        previewElement.setAttribute("data-file-type", file.type);
        previewElement.setAttribute("data-file-size", file.size.toString());
        previewElement.setAttribute("data-file-name", file.name);
        range.deleteContents();
        range.insertNode(previewElement);
        range.setStartAfter(previewElement);
        range.collapse(true);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        this.editor.applyChanges();
      }
      renderImage(file) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        return this.wrapPreview(img, "image");
      }
      renderVideo(file) {
        const video = document.createElement("video");
        video.src = URL.createObjectURL(file);
        video.controls = true;
        return this.wrapPreview(video, "video");
      }
      renderAudio(file) {
        const audio = document.createElement("audio");
        audio.src = URL.createObjectURL(file);
        audio.controls = true;
        return this.wrapPreview(audio, "audio");
      }
      renderGeneric(file) {
        const div = document.createElement("div");
        div.textContent = file.name;
        return this.wrapPreview(div, "file");
      }
      wrapPreview(element, type) {
        const wrapper = document.createElement("div");
        wrapper.className = `file-preview ${type}-preview`;
        wrapper.appendChild(element);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.addEventListener("click", () => this.removePreview(wrapper));
        wrapper.appendChild(deleteButton);
        return wrapper;
      }
      removePreview(previewElement) {
        previewElement.remove();
        this.editor.applyChanges();
      }
    };
  }
});

// src/components/shared/BlobEditor/plugins/DragDropPlugin.ts
var DragDropPlugin;
var init_DragDropPlugin = __esm({
  "src/components/shared/BlobEditor/plugins/DragDropPlugin.ts"() {
    "use strict";
    init_preact_module();
    init_FilePreviewHandler();
    DragDropPlugin = class {
      // private editor: WEditor;
      // private container: HTMLElement;
      filePreviewHandler;
      initialize(editor, container) {
        this.filePreviewHandler = new FilePreviewHandler(editor);
        container.addEventListener("dragover", this.handleDragOver);
        container.addEventListener("drop", this.handleDrop);
      }
      handleToolbarFile = (e4) => {
        console.log(`toolbar file click.`);
      };
      toolbar = {
        type: "group",
        items: [
          {
            type: "button",
            icon: "/public/icons/icon-add-file.svg",
            label: "+File",
            onClick: this.handleToolbarFile
          },
          {
            type: "button",
            icon: "/public/icons/icon-test.svg",
            label: "Test",
            onClick: this.handleToolbarFile
          }
        ]
      };
      handleDragOver = (e4) => {
        console.log(`drag over`);
        e4.preventDefault();
      };
      handleDrop = (e4) => {
        e4.preventDefault();
        if (!e4.dataTransfer) return;
        const files = Array.from(e4.dataTransfer.files);
        files.forEach((file) => {
          const selection = window.getSelection();
          if (selection && selection.rangeCount) {
            const range = selection.getRangeAt(0);
            this.filePreviewHandler.createPreview(file, range);
          }
        });
      };
    };
  }
});

// src/components/shared/BlobEditor/styles/BlobEditor.scss
var init_BlobEditor = __esm({
  "src/components/shared/BlobEditor/styles/BlobEditor.scss"() {
  }
});

// src/components/shared/BlobEditor/BlobEditor.tsx
var BlobEditor;
var init_BlobEditor2 = __esm({
  "src/components/shared/BlobEditor/BlobEditor.tsx"() {
    "use strict";
    init_preact_module();
    init_PastePlugin();
    init_TabPlugin();
    init_ToolbarPlugin();
    init_hooks_module();
    init_Blob();
    init_throttle();
    init_BlobService();
    init_WEditor();
    init_DragDropPlugin();
    init_BlobEditor();
    init_jsxRuntime_module();
    BlobEditor = ({ blob: initialBlob }) => {
      const [currentBlob, setCurrentBlob] = h2(initialBlob || null);
      const editorRef = A2(null);
      const containerRef = A2(null);
      const blobService = new BlobService();
      y2(() => {
        const initBlob = async () => {
          if (!initialBlob) {
            try {
              const blobs = await blobService.listBlobs();
              const mostRecentBlob = blobs.reduce(
                (latest, current) => !latest || current.dateUpdated > latest.dateUpdated ? current : latest,
                null
              );
              if (mostRecentBlob) {
                setCurrentBlob(mostRecentBlob);
              } else {
                setCurrentBlob(new Blob2({}));
              }
            } catch (error3) {
              console.error("Failed to load blobs:", error3);
              setCurrentBlob(new Blob2({}));
            }
          }
        };
        initBlob();
      }, [initialBlob]);
      y2(() => {
        if (currentBlob && containerRef.current && !editorRef.current) {
          editorRef.current = new WEditor(
            containerRef.current,
            currentBlob,
            onContentChanged,
            [
              new ToolbarPlugin(),
              new TabPlugin(),
              new DragDropPlugin(),
              new PastePlugin()
            ]
          );
        }
      }, [currentBlob]);
      const saveBlob = (blob) => {
        blobService.saveBlob(blob);
      };
      const saveBlobThrottled = A2(throttle(saveBlob, 2e3)).current;
      const onContentChanged = (content) => {
        if (currentBlob) {
          currentBlob.content = content;
          currentBlob.dateUpdated = /* @__PURE__ */ new Date();
          saveBlobThrottled(currentBlob);
          setCurrentBlob({ ...currentBlob });
        }
      };
      const handleTitleChange = (e4) => {
        if (e4.target instanceof HTMLInputElement && currentBlob) {
          currentBlob.title = e4.target.value;
          currentBlob.dateUpdated = /* @__PURE__ */ new Date();
          saveBlobThrottled(currentBlob);
          setCurrentBlob({ ...currentBlob });
        }
      };
      if (!currentBlob) {
        return /* @__PURE__ */ u2("p", { class: "error-message", children: "Loading..." });
      }
      return /* @__PURE__ */ u2("div", { class: "blob-editor", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ u2("h2", { children: "Blob Editor" }),
        /* @__PURE__ */ u2(
          "input",
          {
            type: "text",
            value: currentBlob.title,
            onChange: handleTitleChange,
            class: "blob-title"
          }
        ),
        /* @__PURE__ */ u2("div", { ref: containerRef, class: "wysiwyg-container", style: { flexGrow: 1 } })
      ] });
    };
  }
});

// src/components/pages/Other/style.scss
var init_style5 = __esm({
  "src/components/pages/Other/style.scss"() {
  }
});

// src/components/pages/Other/index.tsx
var OtherPage, Other_default;
var init_Other = __esm({
  "src/components/pages/Other/index.tsx"() {
    "use strict";
    init_preact_module();
    init_BlobEditor2();
    init_style5();
    init_jsxRuntime_module();
    OtherPage = (props) => {
      return /* @__PURE__ */ u2("div", { className: "page", id: "entry", children: /* @__PURE__ */ u2(BlobEditor, {}) });
    };
    Other_default = OtherPage;
  }
});

// src/components/pages/Play/style.scss
var init_style6 = __esm({
  "src/components/pages/Play/style.scss"() {
  }
});

// src/components/pages/Play/index.tsx
var PlayPage, Play_default;
var init_Play = __esm({
  "src/components/pages/Play/index.tsx"() {
    "use strict";
    init_preact_module();
    init_style6();
    init_jsxRuntime_module();
    PlayPage = (props) => {
      return /* @__PURE__ */ u2("div", { className: "page", id: "play", children: /* @__PURE__ */ u2("h1", { children: "Play" }) });
    };
    Play_default = PlayPage;
  }
});

// src/components/pages/Timeline/Timeline.ts
var events, categories, Timeline;
var init_Timeline = __esm({
  "src/components/pages/Timeline/Timeline.ts"() {
    "use strict";
    init_preact_module();
    events = [
      {
        category: "work",
        name: "Meeting with John",
        notes: "Discussed project XYZ",
        tags: ["project"],
        time: /* @__PURE__ */ new Date("2022-01-01T12:00:00")
      },
      {
        category: "work",
        name: "Meeting with Bob",
        notes: "Discussed project XYZ",
        tags: ["project"],
        time: /* @__PURE__ */ new Date("2022-01-04T12:00:00")
      },
      {
        category: "work",
        name: "Meeting with Jane",
        notes: "Discussed project XYZ",
        tags: ["project"],
        time: /* @__PURE__ */ new Date("2022-01-09T13:00:00")
      },
      {
        category: "personal",
        name: "Birthday party",
        notes: "Celebrating my birthday",
        tags: ["party"],
        time: /* @__PURE__ */ new Date("2022-01-12T17:00:00")
      },
      {
        category: "personal",
        name: "Birthday party",
        notes: "Celebrating my birthday",
        tags: ["party"],
        time: /* @__PURE__ */ new Date("2022-01-11T17:00:00")
      },
      {
        category: "other",
        name: "Something Other",
        notes: "Notes",
        tags: ["something"],
        time: /* @__PURE__ */ new Date("2022-01-03T13:00:00")
      }
      // ... more events here
    ];
    categories = {
      "work": "#3498db",
      "personal": "#e74c3c",
      "other": "#2ecc71"
    };
    Timeline = class {
      constructor(container, events2) {
        this.container = container;
        this.events = events2;
        this.init();
        if (this.events) this.drawTimeline();
      }
      canvas = null;
      ctx = null;
      init() {
        if (!this.container) throw new Error("No container for timeline.");
        this.canvas = document.createElement("canvas");
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
        console.log(`container`, this.container.offsetWidth, this.container.offsetHeight);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.bindEvents();
      }
      bindEvents() {
        this.canvas.addEventListener("wheel", (event) => {
          const delta = event.deltaY * -1;
          if (delta > 0) {
            this.ctx.scale(0.9, 0.9);
          } else {
            this.ctx.scale(1.1, 1.1);
          }
          this.drawTimeline();
        });
        this.canvas.addEventListener("mousemove", (event) => {
          const x2 = event.clientX - this.canvas.offsetLeft;
          const y3 = event.clientY - this.canvas.offsetTop;
          events.forEach((event2) => {
            const eventX = Math.floor((event2.time - /* @__PURE__ */ new Date("2022-01-01T00:00:00")) / (365 * 24 * 60 * 60 * 1e3));
            const eventY = Math.floor(event2.category);
            if (x2 >= eventX - 10 && x2 <= eventX + 10 && y3 >= eventY - 10 && y3 <= eventY + 10) {
              const popup = document.createElement("div");
              popup.textContent = `${event2.name}: ${event2.notes}`;
              popup.style.position = "absolute";
              popup.style.left = `${x2 + 10}px`;
              popup.style.top = `${y3 - 20}px`;
              this.canvas.appendChild(popup);
            }
          });
        });
      }
      // Define a function to calculate the x position for an event based on its time
      getXPosition(event) {
        return Math.floor((event.time - /* @__PURE__ */ new Date("2022-01-01T00:00:00")) / (365 * 24 * 60 * 60 * 1e3)) + 10;
      }
      // Draw the timeline
      drawTimeline() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.events.forEach((event) => {
          const x2 = this.getXPosition(event);
          const y3 = Math.floor(event.category);
          this.ctx.beginPath();
          this.ctx.arc(x2, y3, 10, 0, Math.PI * 2);
          this.ctx.fillStyle = categories[event.category];
          this.ctx.fill();
          const label = document.createElement("span");
          label.textContent = event.name;
          label.style.position = "absolute";
          label.style.left = `${x2}px`;
          label.style.top = `${y3 - 10}px`;
          this.canvas.appendChild(label);
        });
      }
    };
  }
});

// src/components/pages/Timeline/style.scss
var init_style7 = __esm({
  "src/components/pages/Timeline/style.scss"() {
  }
});

// src/components/pages/Timeline/index.tsx
var TimelinePage, Timeline_default;
var init_Timeline2 = __esm({
  "src/components/pages/Timeline/index.tsx"() {
    "use strict";
    init_preact_module();
    init_Timeline();
    init_hooks_module();
    init_style7();
    init_jsxRuntime_module();
    TimelinePage = (props) => {
      y2(() => {
        const el = document.getElementById("timeline");
        if (el) new Timeline(el, events);
      }, []);
      return /* @__PURE__ */ u2("div", { className: "page", id: "timeline-page", children: /* @__PURE__ */ u2("div", { id: "timeline" }) });
    };
    Timeline_default = TimelinePage;
  }
});

// src/components/pages/Work/style.scss
var init_style8 = __esm({
  "src/components/pages/Work/style.scss"() {
  }
});

// src/components/pages/Work/index.tsx
var WorkPage, Work_default;
var init_Work = __esm({
  "src/components/pages/Work/index.tsx"() {
    "use strict";
    init_preact_module();
    init_hooks_module();
    init_AudioManager();
    init_style8();
    init_jsxRuntime_module();
    WorkPage = (props) => {
      const [filters, setFilters] = h2([]);
      const entries = [];
      const clickSubnav = (f4) => {
        playSound("click");
        toggleFilter(f4);
      };
      const toggleFilter = (f4) => {
        if (filters.includes(f4)) setFilters(filters.filter((_f) => _f != f4));
        else setFilters([...filters, f4]);
      };
      const isFiltered = (f4) => {
        return filters.includes(f4);
      };
      return /* @__PURE__ */ u2("div", { className: "page", id: "work", children: [
        /* @__PURE__ */ u2("h1", { children: "Work" }),
        /* @__PURE__ */ u2("div", { className: "sub-nav", children: [
          /* @__PURE__ */ u2(
            "a",
            {
              href: "#freelance",
              onMouseEnter: (e4) => playSound("hover"),
              onClick: (e4) => clickSubnav("freelance"),
              className: isFiltered("freelance") ? " on" : "",
              children: "Freelance"
            }
          ),
          /* @__PURE__ */ u2(
            "a",
            {
              href: "#fulltime",
              onMouseEnter: (e4) => playSound("hover"),
              onClick: (e4) => clickSubnav("fulltime"),
              className: isFiltered("fulltime") ? " on" : "",
              children: "Fulltime"
            }
          )
        ] })
      ] });
    };
    Work_default = WorkPage;
  }
});

// node_modules/vanilla-picker/dist/vanilla-picker.mjs
function printNum(num) {
  var decs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  var str = decs > 0 ? num.toFixed(decs).replace(/0+$/, "").replace(/\.$/, "") : num.toString();
  return str || "0";
}
function parseHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.firstElementChild;
}
function dragTrack(eventBucket, area, callback) {
  var dragging = false;
  function clamp(val, min, max) {
    return Math.max(min, Math.min(val, max));
  }
  function onMove(e4, info, starting) {
    if (starting) {
      dragging = true;
    }
    if (!dragging) {
      return;
    }
    e4.preventDefault();
    var bounds = area.getBoundingClientRect(), w3 = bounds.width, h3 = bounds.height, x2 = info.clientX, y3 = info.clientY;
    var relX = clamp(x2 - bounds.left, 0, w3), relY = clamp(y3 - bounds.top, 0, h3);
    callback(relX / w3, relY / h3);
  }
  function onMouse(e4, starting) {
    var button = e4.buttons === void 0 ? e4.which : e4.buttons;
    if (button === 1) {
      onMove(e4, e4, starting);
    } else {
      dragging = false;
    }
  }
  function onTouch(e4, starting) {
    if (e4.touches.length === 1) {
      onMove(e4, e4.touches[0], starting);
    } else {
      dragging = false;
    }
  }
  eventBucket.add(area, "mousedown", function(e4) {
    onMouse(e4, true);
  });
  eventBucket.add(area, "touchstart", function(e4) {
    onTouch(e4, true);
  });
  eventBucket.add(window, "mousemove", onMouse);
  eventBucket.add(area, "touchmove", onTouch);
  eventBucket.add(window, "mouseup", function(e4) {
    dragging = false;
  });
  eventBucket.add(area, "touchend", function(e4) {
    dragging = false;
  });
  eventBucket.add(area, "touchcancel", function(e4) {
    dragging = false;
  });
}
function $2(selector, context) {
  return (context || document).querySelector(selector);
}
function stopEvent(e4) {
  e4.preventDefault();
  e4.stopPropagation();
}
function onKey(bucket, target, keys, handler, stop) {
  bucket.add(target, EVENT_KEY, function(e4) {
    if (keys.indexOf(e4.key) >= 0) {
      if (stop) {
        stopEvent(e4);
      }
      handler(e4);
    }
  });
}
var classCallCheck, createClass, slicedToArray, colorNames, Color, EventBucket, BG_TRANSP, HUES, EVENT_KEY, EVENT_CLICK_OUTSIDE, EVENT_TAB_MOVE, Picker, style;
var init_vanilla_picker = __esm({
  "node_modules/vanilla-picker/dist/vanilla-picker.mjs"() {
    "use strict";
    init_preact_module();
    classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i4 = 0; i4 < props.length; i4++) {
          var descriptor = props[i4];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i4) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i4 && _arr.length === i4) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i4) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i4);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    String.prototype.startsWith = String.prototype.startsWith || function(needle) {
      return this.indexOf(needle) === 0;
    };
    String.prototype.padStart = String.prototype.padStart || function(len, pad) {
      var str = this;
      while (str.length < len) {
        str = pad + str;
      }
      return str;
    };
    colorNames = { cb: "0f8ff", tqw: "aebd7", q: "-ffff", qmrn: "7fffd4", zr: "0ffff", bg: "5f5dc", bsq: "e4c4", bck: "---", nch: "ebcd", b: "--ff", bvt: "8a2be2", brwn: "a52a2a", brw: "deb887", ctb: "5f9ea0", hrt: "7fff-", chcT: "d2691e", cr: "7f50", rnw: "6495ed", crns: "8dc", crms: "dc143c", cn: "-ffff", Db: "--8b", Dcn: "-8b8b", Dgnr: "b8860b", Dgr: "a9a9a9", Dgrn: "-64-", Dkhk: "bdb76b", Dmgn: "8b-8b", Dvgr: "556b2f", Drng: "8c-", Drch: "9932cc", Dr: "8b--", Dsmn: "e9967a", Dsgr: "8fbc8f", DsTb: "483d8b", DsTg: "2f4f4f", Dtrq: "-ced1", Dvt: "94-d3", ppnk: "1493", pskb: "-bfff", mgr: "696969", grb: "1e90ff", rbrc: "b22222", rwht: "af0", stg: "228b22", chs: "-ff", gnsb: "dcdcdc", st: "8f8ff", g: "d7-", gnr: "daa520", gr: "808080", grn: "-8-0", grnw: "adff2f", hnw: "0fff0", htpn: "69b4", nnr: "cd5c5c", ng: "4b-82", vr: "0", khk: "0e68c", vnr: "e6e6fa", nrb: "0f5", wngr: "7cfc-", mnch: "acd", Lb: "add8e6", Lcr: "08080", Lcn: "e0ffff", Lgnr: "afad2", Lgr: "d3d3d3", Lgrn: "90ee90", Lpnk: "b6c1", Lsmn: "a07a", Lsgr: "20b2aa", Lskb: "87cefa", LsTg: "778899", Lstb: "b0c4de", Lw: "e0", m: "-ff-", mgrn: "32cd32", nn: "af0e6", mgnt: "-ff", mrn: "8--0", mqm: "66cdaa", mmb: "--cd", mmrc: "ba55d3", mmpr: "9370db", msg: "3cb371", mmsT: "7b68ee", "": "-fa9a", mtr: "48d1cc", mmvt: "c71585", mnLb: "191970", ntc: "5fffa", mstr: "e4e1", mccs: "e4b5", vjw: "dead", nv: "--80", c: "df5e6", v: "808-0", vrb: "6b8e23", rng: "a5-", rngr: "45-", rch: "da70d6", pgnr: "eee8aa", pgrn: "98fb98", ptrq: "afeeee", pvtr: "db7093", ppwh: "efd5", pchp: "dab9", pr: "cd853f", pnk: "c0cb", pm: "dda0dd", pwrb: "b0e0e6", prp: "8-080", cc: "663399", r: "--", sbr: "bc8f8f", rb: "4169e1", sbrw: "8b4513", smn: "a8072", nbr: "4a460", sgrn: "2e8b57", ssh: "5ee", snn: "a0522d", svr: "c0c0c0", skb: "87ceeb", sTb: "6a5acd", sTgr: "708090", snw: "afa", n: "-ff7f", stb: "4682b4", tn: "d2b48c", t: "-8080", thst: "d8bfd8", tmT: "6347", trqs: "40e0d0", vt: "ee82ee", whT: "5deb3", wht: "", hts: "5f5f5", w: "-", wgrn: "9acd32" };
    Color = function() {
      function Color2(r3, g2, b2, a3) {
        classCallCheck(this, Color2);
        var that = this;
        function parseString(input) {
          if (input.startsWith("hsl")) {
            var _input$match$map = input.match(/([\-\d\.e]+)/g).map(Number), _input$match$map2 = slicedToArray(_input$match$map, 4), h3 = _input$match$map2[0], s3 = _input$match$map2[1], l3 = _input$match$map2[2], _a = _input$match$map2[3];
            if (_a === void 0) {
              _a = 1;
            }
            h3 /= 360;
            s3 /= 100;
            l3 /= 100;
            that.hsla = [h3, s3, l3, _a];
          } else if (input.startsWith("rgb")) {
            var _input$match$map3 = input.match(/([\-\d\.e]+)/g).map(Number), _input$match$map4 = slicedToArray(_input$match$map3, 4), _r = _input$match$map4[0], _g = _input$match$map4[1], _b = _input$match$map4[2], _a2 = _input$match$map4[3];
            if (_a2 === void 0) {
              _a2 = 1;
            }
            that.rgba = [_r, _g, _b, _a2];
          } else {
            if (input.startsWith("#")) {
              that.rgba = Color2.hexToRgb(input);
            } else {
              that.rgba = Color2.nameToRgb(input) || Color2.hexToRgb(input);
            }
          }
        }
        if (r3 === void 0) ;
        else if (Array.isArray(r3)) {
          this.rgba = r3;
        } else if (b2 === void 0) {
          var color = r3 && "" + r3;
          if (color) {
            parseString(color.toLowerCase());
          }
        } else {
          this.rgba = [r3, g2, b2, a3 === void 0 ? 1 : a3];
        }
      }
      createClass(Color2, [{
        key: "printRGB",
        value: function printRGB(alpha) {
          var rgb = alpha ? this.rgba : this.rgba.slice(0, 3), vals = rgb.map(function(x2, i4) {
            return printNum(x2, i4 === 3 ? 3 : 0);
          });
          return alpha ? "rgba(" + vals + ")" : "rgb(" + vals + ")";
        }
      }, {
        key: "printHSL",
        value: function printHSL(alpha) {
          var mults = [360, 100, 100, 1], suff = ["", "%", "%", ""];
          var hsl = alpha ? this.hsla : this.hsla.slice(0, 3), vals = hsl.map(function(x2, i4) {
            return printNum(x2 * mults[i4], i4 === 3 ? 3 : 1) + suff[i4];
          });
          return alpha ? "hsla(" + vals + ")" : "hsl(" + vals + ")";
        }
      }, {
        key: "printHex",
        value: function printHex(alpha) {
          var hex = this.hex;
          return alpha ? hex : hex.substring(0, 7);
        }
      }, {
        key: "rgba",
        get: function get() {
          if (this._rgba) {
            return this._rgba;
          }
          if (!this._hsla) {
            throw new Error("No color is set");
          }
          return this._rgba = Color2.hslToRgb(this._hsla);
        },
        set: function set(rgb) {
          if (rgb.length === 3) {
            rgb[3] = 1;
          }
          this._rgba = rgb;
          this._hsla = null;
        }
      }, {
        key: "rgbString",
        get: function get() {
          return this.printRGB();
        }
      }, {
        key: "rgbaString",
        get: function get() {
          return this.printRGB(true);
        }
      }, {
        key: "hsla",
        get: function get() {
          if (this._hsla) {
            return this._hsla;
          }
          if (!this._rgba) {
            throw new Error("No color is set");
          }
          return this._hsla = Color2.rgbToHsl(this._rgba);
        },
        set: function set(hsl) {
          if (hsl.length === 3) {
            hsl[3] = 1;
          }
          this._hsla = hsl;
          this._rgba = null;
        }
      }, {
        key: "hslString",
        get: function get() {
          return this.printHSL();
        }
      }, {
        key: "hslaString",
        get: function get() {
          return this.printHSL(true);
        }
      }, {
        key: "hex",
        get: function get() {
          var rgb = this.rgba, hex = rgb.map(function(x2, i4) {
            return i4 < 3 ? x2.toString(16) : Math.round(x2 * 255).toString(16);
          });
          return "#" + hex.map(function(x2) {
            return x2.padStart(2, "0");
          }).join("");
        },
        set: function set(hex) {
          this.rgba = Color2.hexToRgb(hex);
        }
      }], [{
        key: "hexToRgb",
        value: function hexToRgb(input) {
          var hex = (input.startsWith("#") ? input.slice(1) : input).replace(/^(\w{3})$/, "$1F").replace(/^(\w)(\w)(\w)(\w)$/, "$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/, "$1FF");
          if (!hex.match(/^([0-9a-fA-F]{8})$/)) {
            throw new Error("Unknown hex color; " + input);
          }
          var rgba = hex.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function(x2) {
            return parseInt(x2, 16);
          });
          rgba[3] = rgba[3] / 255;
          return rgba;
        }
      }, {
        key: "nameToRgb",
        value: function nameToRgb(input) {
          var hash = input.toLowerCase().replace("at", "T").replace(/[aeiouyldf]/g, "").replace("ght", "L").replace("rk", "D").slice(-5, 4), hex = colorNames[hash];
          return hex === void 0 ? hex : Color2.hexToRgb(hex.replace(/\-/g, "00").padStart(6, "f"));
        }
      }, {
        key: "rgbToHsl",
        value: function rgbToHsl(_ref) {
          var _ref2 = slicedToArray(_ref, 4), r3 = _ref2[0], g2 = _ref2[1], b2 = _ref2[2], a3 = _ref2[3];
          r3 /= 255;
          g2 /= 255;
          b2 /= 255;
          var max = Math.max(r3, g2, b2), min = Math.min(r3, g2, b2);
          var h3 = void 0, s3 = void 0, l3 = (max + min) / 2;
          if (max === min) {
            h3 = s3 = 0;
          } else {
            var d3 = max - min;
            s3 = l3 > 0.5 ? d3 / (2 - max - min) : d3 / (max + min);
            switch (max) {
              case r3:
                h3 = (g2 - b2) / d3 + (g2 < b2 ? 6 : 0);
                break;
              case g2:
                h3 = (b2 - r3) / d3 + 2;
                break;
              case b2:
                h3 = (r3 - g2) / d3 + 4;
                break;
            }
            h3 /= 6;
          }
          return [h3, s3, l3, a3];
        }
      }, {
        key: "hslToRgb",
        value: function hslToRgb(_ref3) {
          var _ref4 = slicedToArray(_ref3, 4), h3 = _ref4[0], s3 = _ref4[1], l3 = _ref4[2], a3 = _ref4[3];
          var r3 = void 0, g2 = void 0, b2 = void 0;
          if (s3 === 0) {
            r3 = g2 = b2 = l3;
          } else {
            var hue2rgb = function hue2rgb2(p4, q4, t3) {
              if (t3 < 0) t3 += 1;
              if (t3 > 1) t3 -= 1;
              if (t3 < 1 / 6) return p4 + (q4 - p4) * 6 * t3;
              if (t3 < 1 / 2) return q4;
              if (t3 < 2 / 3) return p4 + (q4 - p4) * (2 / 3 - t3) * 6;
              return p4;
            };
            var q3 = l3 < 0.5 ? l3 * (1 + s3) : l3 + s3 - l3 * s3, p3 = 2 * l3 - q3;
            r3 = hue2rgb(p3, q3, h3 + 1 / 3);
            g2 = hue2rgb(p3, q3, h3);
            b2 = hue2rgb(p3, q3, h3 - 1 / 3);
          }
          var rgba = [r3 * 255, g2 * 255, b2 * 255].map(Math.round);
          rgba[3] = a3;
          return rgba;
        }
      }]);
      return Color2;
    }();
    EventBucket = function() {
      function EventBucket2() {
        classCallCheck(this, EventBucket2);
        this._events = [];
      }
      createClass(EventBucket2, [{
        key: "add",
        value: function add(target, type, handler) {
          target.addEventListener(type, handler, false);
          this._events.push({
            target,
            type,
            handler
          });
        }
      }, {
        key: "remove",
        value: function remove(target, type, handler) {
          this._events = this._events.filter(function(e4) {
            var isMatch = true;
            if (target && target !== e4.target) {
              isMatch = false;
            }
            if (type && type !== e4.type) {
              isMatch = false;
            }
            if (handler && handler !== e4.handler) {
              isMatch = false;
            }
            if (isMatch) {
              EventBucket2._doRemove(e4.target, e4.type, e4.handler);
            }
            return !isMatch;
          });
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this._events.forEach(function(e4) {
            return EventBucket2._doRemove(e4.target, e4.type, e4.handler);
          });
          this._events = [];
        }
      }], [{
        key: "_doRemove",
        value: function _doRemove(target, type, handler) {
          target.removeEventListener(type, handler, false);
        }
      }]);
      return EventBucket2;
    }();
    BG_TRANSP = "linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,\n                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em";
    HUES = 360;
    EVENT_KEY = "keydown";
    EVENT_CLICK_OUTSIDE = "mousedown";
    EVENT_TAB_MOVE = "focusin";
    Picker = function() {
      function Picker2(options) {
        classCallCheck(this, Picker2);
        this.settings = {
          popup: "right",
          layout: "default",
          alpha: true,
          editor: true,
          editorFormat: "hex",
          cancelButton: false,
          defaultColor: "#0cf"
        };
        this._events = new EventBucket();
        this.onChange = null;
        this.onDone = null;
        this.onOpen = null;
        this.onClose = null;
        this.setOptions(options);
      }
      createClass(Picker2, [{
        key: "setOptions",
        value: function setOptions(options) {
          var _this = this;
          if (!options) {
            return;
          }
          var settings = this.settings;
          function transfer(source, target, skipKeys) {
            for (var key in source) {
              if (skipKeys && skipKeys.indexOf(key) >= 0) {
                continue;
              }
              target[key] = source[key];
            }
          }
          if (options instanceof HTMLElement) {
            settings.parent = options;
          } else {
            if (settings.parent && options.parent && settings.parent !== options.parent) {
              this._events.remove(settings.parent);
              this._popupInited = false;
            }
            transfer(options, settings);
            if (options.onChange) {
              this.onChange = options.onChange;
            }
            if (options.onDone) {
              this.onDone = options.onDone;
            }
            if (options.onOpen) {
              this.onOpen = options.onOpen;
            }
            if (options.onClose) {
              this.onClose = options.onClose;
            }
            var col = options.color || options.colour;
            if (col) {
              this._setColor(col);
            }
          }
          var parent = settings.parent;
          if (parent && settings.popup && !this._popupInited) {
            var openProxy = function openProxy2(e4) {
              return _this.openHandler(e4);
            };
            this._events.add(parent, "click", openProxy);
            onKey(this._events, parent, [" ", "Spacebar", "Enter"], openProxy);
            this._popupInited = true;
          } else if (options.parent && !settings.popup) {
            this.show();
          }
        }
      }, {
        key: "openHandler",
        value: function openHandler(e4) {
          if (this.show()) {
            e4 && e4.preventDefault();
            this.settings.parent.style.pointerEvents = "none";
            var toFocus = e4 && e4.type === EVENT_KEY ? this._domEdit : this.domElement;
            setTimeout(function() {
              return toFocus.focus();
            }, 100);
            if (this.onOpen) {
              this.onOpen(this.colour);
            }
          }
        }
      }, {
        key: "closeHandler",
        value: function closeHandler(e4) {
          var event = e4 && e4.type;
          var doHide = false;
          if (!e4) {
            doHide = true;
          } else if (event === EVENT_CLICK_OUTSIDE || event === EVENT_TAB_MOVE) {
            var knownTime = (this.__containedEvent || 0) + 100;
            if (e4.timeStamp > knownTime) {
              doHide = true;
            }
          } else {
            stopEvent(e4);
            doHide = true;
          }
          if (doHide && this.hide()) {
            this.settings.parent.style.pointerEvents = "";
            if (event !== EVENT_CLICK_OUTSIDE) {
              this.settings.parent.focus();
            }
            if (this.onClose) {
              this.onClose(this.colour);
            }
          }
        }
      }, {
        key: "movePopup",
        value: function movePopup(options, open) {
          this.closeHandler();
          this.setOptions(options);
          if (open) {
            this.openHandler();
          }
        }
      }, {
        key: "setColor",
        value: function setColor(color, silent) {
          this._setColor(color, { silent });
        }
      }, {
        key: "_setColor",
        value: function _setColor(color, flags) {
          if (typeof color === "string") {
            color = color.trim();
          }
          if (!color) {
            return;
          }
          flags = flags || {};
          var c3 = void 0;
          try {
            c3 = new Color(color);
          } catch (ex) {
            if (flags.failSilently) {
              return;
            }
            throw ex;
          }
          if (!this.settings.alpha) {
            var hsla = c3.hsla;
            hsla[3] = 1;
            c3.hsla = hsla;
          }
          this.colour = this.color = c3;
          this._setHSLA(null, null, null, null, flags);
        }
      }, {
        key: "setColour",
        value: function setColour(colour, silent) {
          this.setColor(colour, silent);
        }
      }, {
        key: "show",
        value: function show() {
          var parent = this.settings.parent;
          if (!parent) {
            return false;
          }
          if (this.domElement) {
            var toggled = this._toggleDOM(true);
            this._setPosition();
            return toggled;
          }
          var html = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>';
          var wrapper = parseHTML(html);
          this.domElement = wrapper;
          this._domH = $2(".picker_hue", wrapper);
          this._domSL = $2(".picker_sl", wrapper);
          this._domA = $2(".picker_alpha", wrapper);
          this._domEdit = $2(".picker_editor input", wrapper);
          this._domSample = $2(".picker_sample", wrapper);
          this._domOkay = $2(".picker_done button", wrapper);
          this._domCancel = $2(".picker_cancel button", wrapper);
          wrapper.classList.add("layout_" + this.settings.layout);
          if (!this.settings.alpha) {
            wrapper.classList.add("no_alpha");
          }
          if (!this.settings.editor) {
            wrapper.classList.add("no_editor");
          }
          if (!this.settings.cancelButton) {
            wrapper.classList.add("no_cancel");
          }
          this._ifPopup(function() {
            return wrapper.classList.add("popup");
          });
          this._setPosition();
          if (this.colour) {
            this._updateUI();
          } else {
            this._setColor(this.settings.defaultColor);
          }
          this._bindEvents();
          return true;
        }
      }, {
        key: "hide",
        value: function hide() {
          return this._toggleDOM(false);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this._events.destroy();
          if (this.domElement) {
            this.settings.parent.removeChild(this.domElement);
          }
        }
      }, {
        key: "_bindEvents",
        value: function _bindEvents() {
          var _this2 = this;
          var that = this, dom = this.domElement, events2 = this._events;
          function addEvent(target, type, handler) {
            events2.add(target, type, handler);
          }
          addEvent(dom, "click", function(e4) {
            return e4.preventDefault();
          });
          dragTrack(events2, this._domH, function(x2, y3) {
            return that._setHSLA(x2);
          });
          dragTrack(events2, this._domSL, function(x2, y3) {
            return that._setHSLA(null, x2, 1 - y3);
          });
          if (this.settings.alpha) {
            dragTrack(events2, this._domA, function(x2, y3) {
              return that._setHSLA(null, null, null, 1 - y3);
            });
          }
          var editInput = this._domEdit;
          {
            addEvent(editInput, "input", function(e4) {
              that._setColor(this.value, { fromEditor: true, failSilently: true });
            });
            addEvent(editInput, "focus", function(e4) {
              var input = this;
              if (input.selectionStart === input.selectionEnd) {
                input.select();
              }
            });
          }
          this._ifPopup(function() {
            var popupCloseProxy = function popupCloseProxy2(e4) {
              return _this2.closeHandler(e4);
            };
            addEvent(window, EVENT_CLICK_OUTSIDE, popupCloseProxy);
            addEvent(window, EVENT_TAB_MOVE, popupCloseProxy);
            onKey(events2, dom, ["Esc", "Escape"], popupCloseProxy);
            var timeKeeper = function timeKeeper2(e4) {
              _this2.__containedEvent = e4.timeStamp;
            };
            addEvent(dom, EVENT_CLICK_OUTSIDE, timeKeeper);
            addEvent(dom, EVENT_TAB_MOVE, timeKeeper);
            addEvent(_this2._domCancel, "click", popupCloseProxy);
          });
          var onDoneProxy = function onDoneProxy2(e4) {
            _this2._ifPopup(function() {
              return _this2.closeHandler(e4);
            });
            if (_this2.onDone) {
              _this2.onDone(_this2.colour);
            }
          };
          addEvent(this._domOkay, "click", onDoneProxy);
          onKey(events2, dom, ["Enter"], onDoneProxy);
        }
      }, {
        key: "_setPosition",
        value: function _setPosition() {
          var parent = this.settings.parent, elm = this.domElement;
          if (parent !== elm.parentNode) {
            parent.appendChild(elm);
          }
          this._ifPopup(function(popup) {
            if (getComputedStyle(parent).position === "static") {
              parent.style.position = "relative";
            }
            var cssClass = popup === true ? "popup_right" : "popup_" + popup;
            ["popup_top", "popup_bottom", "popup_left", "popup_right"].forEach(function(c3) {
              if (c3 === cssClass) {
                elm.classList.add(c3);
              } else {
                elm.classList.remove(c3);
              }
            });
            elm.classList.add(cssClass);
          });
        }
      }, {
        key: "_setHSLA",
        value: function _setHSLA(h3, s3, l3, a3, flags) {
          flags = flags || {};
          var col = this.colour, hsla = col.hsla;
          [h3, s3, l3, a3].forEach(function(x2, i4) {
            if (x2 || x2 === 0) {
              hsla[i4] = x2;
            }
          });
          col.hsla = hsla;
          this._updateUI(flags);
          if (this.onChange && !flags.silent) {
            this.onChange(col);
          }
        }
      }, {
        key: "_updateUI",
        value: function _updateUI(flags) {
          if (!this.domElement) {
            return;
          }
          flags = flags || {};
          var col = this.colour, hsl = col.hsla, cssHue = "hsl(" + hsl[0] * HUES + ", 100%, 50%)", cssHSL = col.hslString, cssHSLA = col.hslaString;
          var uiH = this._domH, uiSL = this._domSL, uiA = this._domA, thumbH = $2(".picker_selector", uiH), thumbSL = $2(".picker_selector", uiSL), thumbA = $2(".picker_selector", uiA);
          function posX(parent, child, relX) {
            child.style.left = relX * 100 + "%";
          }
          function posY(parent, child, relY) {
            child.style.top = relY * 100 + "%";
          }
          posX(uiH, thumbH, hsl[0]);
          this._domSL.style.backgroundColor = this._domH.style.color = cssHue;
          posX(uiSL, thumbSL, hsl[1]);
          posY(uiSL, thumbSL, 1 - hsl[2]);
          uiSL.style.color = cssHSL;
          posY(uiA, thumbA, 1 - hsl[3]);
          var opaque = cssHSL, transp = opaque.replace("hsl", "hsla").replace(")", ", 0)"), bg = "linear-gradient(" + [opaque, transp] + ")";
          this._domA.style.background = bg + ", " + BG_TRANSP;
          if (!flags.fromEditor) {
            var format = this.settings.editorFormat, alpha = this.settings.alpha;
            var value = void 0;
            switch (format) {
              case "rgb":
                value = col.printRGB(alpha);
                break;
              case "hsl":
                value = col.printHSL(alpha);
                break;
              default:
                value = col.printHex(alpha);
            }
            this._domEdit.value = value;
          }
          this._domSample.style.color = cssHSLA;
        }
      }, {
        key: "_ifPopup",
        value: function _ifPopup(actionIf, actionElse) {
          if (this.settings.parent && this.settings.popup) {
            actionIf && actionIf(this.settings.popup);
          } else {
            actionElse && actionElse();
          }
        }
      }, {
        key: "_toggleDOM",
        value: function _toggleDOM(toVisible) {
          var dom = this.domElement;
          if (!dom) {
            return false;
          }
          var displayStyle = toVisible ? "" : "none", toggle = dom.style.display !== displayStyle;
          if (toggle) {
            dom.style.display = displayStyle;
          }
          return toggle;
        }
      }]);
      return Picker2;
    }();
    {
      style = document.createElement("style");
      style.textContent = '.picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:"";display:block;width:100%;height:0;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{flex:1 1 auto}.layout_default .picker_sl::before{content:"";display:block;padding-bottom:100%}.layout_default .picker_editor{order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{order:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px #1e90ff}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:#f5f5f5;background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:#fff}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid #fff;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%),linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))}.picker_alpha,.picker_sample{position:relative;background:linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em,linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:"";position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}';
      document.documentElement.firstElementChild.appendChild(style);
      Picker.StyleElement = style;
    }
  }
});

// src/components/pages/Colors/ColorEdit.tsx
var ColorEdit;
var init_ColorEdit = __esm({
  "src/components/pages/Colors/ColorEdit.tsx"() {
    "use strict";
    init_preact_module();
    init_hooks_module();
    init_vanilla_picker();
    init_jsxRuntime_module();
    ColorEdit = ({ color, onChange, hideOtherPickers }) => {
      const [currentColor, setCurrentColor] = h2(color.modifiedColor);
      const [showPopup, setShowPopup] = h2(false);
      const colorPickerRef = A2(null);
      const containerRef = A2(null);
      const hoverTimeout = A2(null);
      y2(() => {
        if (containerRef.current && !colorPickerRef.current) {
          colorPickerRef.current = new Picker({
            parent: containerRef.current,
            color: currentColor,
            popup: "bottom",
            editor: true,
            cancelButton: true,
            editorFormat: "hex",
            onChange: (color2) => {
              setCurrentColor(color2.hex);
            },
            onDone: (color2) => {
              onChange(color2.id, color2.hex);
            },
            onOpen: () => {
              if (colorPickerRef.current) {
                colorPickerRef.current.show();
                colorPickerRef.current.hide();
              }
            }
          });
          const handleMouseEnter = () => {
            if (hoverTimeout.current !== null) {
              clearTimeout(hoverTimeout.current);
              hoverTimeout.current = null;
            }
          };
          const handleMouseLeave = () => {
            hoverTimeout.current = window.setTimeout(() => {
              setShowPopup(false);
            }, 500);
          };
          if (colorPickerRef.current) {
            containerRef.current.addEventListener("mouseenter", handleMouseEnter);
            containerRef.current.addEventListener("mouseleave", handleMouseLeave);
          }
          return () => {
            if (colorPickerRef.current) {
              colorPickerRef.current.destroy();
            }
            if (containerRef.current) {
              containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
              containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
            }
            if (hoverTimeout.current !== null) {
              clearTimeout(hoverTimeout.current);
            }
          };
        }
      }, [currentColor, onChange, hideOtherPickers]);
      const adjustPosition = q2(() => {
        if (colorPickerRef.current && colorPickerRef.current.popup) {
          const rect = containerRef.current.getBoundingClientRect();
          const popupRect = colorPickerRef.current.popup.getBoundingClientRect();
          const { innerWidth, innerHeight } = window;
          let left = rect.left;
          let top = rect.bottom;
          if (left + popupRect.width > innerWidth) left = Math.max(0, innerWidth - popupRect.width);
          if (top + popupRect.height > innerHeight) top = innerHeight - popupRect.height;
          if (left < 0) left = 0;
          if (top < 0) top = 0;
          colorPickerRef.current.popup.style.left = `${left}px`;
          colorPickerRef.current.popup.style.top = `${top}px`;
          colorPickerRef.current.popup.style.position = "fixed";
        }
      }, []);
      y2(() => {
        if (colorPickerRef.current) {
          if (showPopup) {
            colorPickerRef.current.show();
            adjustPosition();
          } else {
            colorPickerRef.current.hide();
          }
        }
      }, [showPopup, adjustPosition]);
      const handleClick = q2(() => {
        hideOtherPickers();
        setShowPopup((prevState) => !prevState);
      }, [hideOtherPickers]);
      return /* @__PURE__ */ u2(
        "div",
        {
          ref: containerRef,
          className: `ColorEdit ${showPopup ? "show-picker" : ""}`,
          children: /* @__PURE__ */ u2(
            "div",
            {
              className: "color-swatch",
              style: { backgroundColor: currentColor, height: "100%" },
              onClick: handleClick
            }
          )
        }
      );
    };
  }
});

// src/components/pages/Colors/ColorEditColumn.tsx
var ColorEditColumn;
var init_ColorEditColumn = __esm({
  "src/components/pages/Colors/ColorEditColumn.tsx"() {
    "use strict";
    init_preact_module();
    init_hooks_module();
    init_ColorEdit();
    init_jsxRuntime_module();
    ColorEditColumn = ({ colors, onColorsChanged }) => {
      const handleColorChange = q2((id, newColor) => {
        const newColors = colors.map(
          (c3) => c3.id === id ? { ...c3, modifiedColor: newColor } : c3
        );
        onColorsChanged(newColors);
      }, [colors, onColorsChanged]);
      const hideOtherPickers = q2(() => {
        document.querySelectorAll(".color-picker .popup").forEach((popup) => {
          const picker = popup.picker;
          if (picker) picker.destroy();
        });
      }, []);
      return /* @__PURE__ */ u2("div", { className: "column ColorEditColumn", children: /* @__PURE__ */ u2("div", { className: "color-list", children: colors.map((color) => /* @__PURE__ */ u2(
        ColorEdit,
        {
          color,
          onChange: (newColor) => handleColorChange(color.id, newColor),
          hideOtherPickers
        },
        color.id
      )) }) });
    };
  }
});

// src/components/pages/Colors/ColorPage.scss
var init_ColorPage = __esm({
  "src/components/pages/Colors/ColorPage.scss"() {
  }
});

// src/components/pages/Colors/Dropdown.tsx
var Dropdown2;
var init_Dropdown2 = __esm({
  "src/components/pages/Colors/Dropdown.tsx"() {
    "use strict";
    init_preact_module();
    init_hooks_module();
    init_jsxRuntime_module();
    Dropdown2 = ({ children }) => {
      const [isOpen, setIsOpen] = h2(false);
      const dropdownRef = A2(null);
      const hoverTimeout = A2(null);
      const handleToggle = q2(() => {
        setIsOpen(!isOpen);
      }, [isOpen]);
      const handleMouseEnter = q2(() => {
        if (hoverTimeout.current !== null) {
          clearTimeout(hoverTimeout.current);
          hoverTimeout.current = null;
        }
      }, []);
      const handleMouseLeave = q2(() => {
      }, []);
      y2(() => {
        if (dropdownRef.current) {
          dropdownRef.current.addEventListener("mouseenter", handleMouseEnter);
          dropdownRef.current.addEventListener("mouseleave", handleMouseLeave);
        }
        return () => {
          if (dropdownRef.current) {
            dropdownRef.current.removeEventListener("mouseenter", handleMouseEnter);
            dropdownRef.current.removeEventListener("mouseleave", handleMouseLeave);
          }
          if (hoverTimeout.current !== null) {
            clearTimeout(hoverTimeout.current);
          }
        };
      }, [handleMouseEnter, handleMouseLeave]);
      return /* @__PURE__ */ u2("div", { className: "dropdown-container", ref: dropdownRef, children: [
        /* @__PURE__ */ u2("button", { className: "dropdown-button", onClick: handleToggle, children: /* @__PURE__ */ u2("span", { children: "Config" }) }),
        isOpen && /* @__PURE__ */ u2("div", { className: "dropdown-menu", style: { position: "absolute", top: "100%", right: 0, zIndex: 1e3 }, children })
      ] });
    };
  }
});

// src/components/pages/Colors/Config.tsx
var Config;
var init_Config = __esm({
  "src/components/pages/Colors/Config.tsx"() {
    "use strict";
    init_preact_module();
    init_hooks_module();
    init_vanilla_picker();
    init_Dropdown2();
    init_jsxRuntime_module();
    Config = ({ config, onConfigChange }) => {
      const [colorPicker, setColorPicker] = h2(null);
      const backgroundSwatchRef = A2(null);
      y2(() => {
        if (backgroundSwatchRef.current && !colorPicker) {
          const newPicker = new Picker({
            parent: backgroundSwatchRef.current,
            color: config.backgroundColor,
            popup: "bottom",
            editor: true,
            onChange: (color) => {
            },
            onDone: (color) => {
              onConfigChange({ backgroundColor: color.hex, colorMode: "dark" });
            }
          });
          setColorPicker(newPicker);
        } else if (colorPicker) {
          colorPicker.setColor(config.backgroundColor);
        }
        return () => {
          if (colorPicker) {
            colorPicker.destroy();
          }
        };
      }, [config.backgroundColor, onConfigChange, colorPicker]);
      const handleCombineSimilarChange = q2((e4) => {
        onConfigChange({ combineSimilar: e4.target.checked });
      }, [onConfigChange]);
      const handleColorModeChange = q2((e4) => {
        const isDark = e4.target.checked;
        onConfigChange({ colorMode: isDark ? "dark" : "light" });
      }, [onConfigChange]);
      return /* @__PURE__ */ u2(Dropdown2, { children: /* @__PURE__ */ u2("div", { style: { display: "flex", flexDirection: "column", padding: "10px" }, children: [
        /* @__PURE__ */ u2("label", { children: [
          /* @__PURE__ */ u2(
            "input",
            {
              type: "checkbox",
              checked: config.combineSimilar,
              onChange: handleCombineSimilarChange
            }
          ),
          "Combine Similar"
        ] }),
        /* @__PURE__ */ u2("label", { children: [
          /* @__PURE__ */ u2(
            "input",
            {
              type: "checkbox",
              checked: config.colorMode === "dark",
              onChange: handleColorModeChange
            }
          ),
          "Dark Mode"
        ] }),
        /* @__PURE__ */ u2("div", { style: { display: "flex", alignItems: "center", marginTop: "10px" }, children: [
          /* @__PURE__ */ u2("span", { children: "Background Color" }),
          /* @__PURE__ */ u2(
            "div",
            {
              ref: backgroundSwatchRef,
              style: {
                width: "24px",
                height: "24px",
                backgroundColor: config.backgroundColor,
                marginLeft: "10px",
                cursor: "pointer"
              },
              onClick: () => colorPicker?.show()
            }
          )
        ] })
      ] }) });
    };
  }
});

// src/components/pages/Colors/utils.ts
function parseAndTokenizeColors(text, combineSimilar) {
  if (text.trim() === "") {
    return { colors: [], tokenizedText: "" };
  }
  const regex = /(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})|rgba?\s*\(\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\))/gi;
  const colors = [];
  let tokenizedText = text;
  let idCounter = 0;
  const colorMap = /* @__PURE__ */ new Map();
  const normalizeColor2 = (color) => {
    let normalized = color.toLowerCase();
    if (normalized.startsWith("rgba")) {
      return normalized.replace(/(rgba\(.+?),(\d+\.?\d*)\)/, (_2, rgbPart, alpha) => {
        return `${rgbPart},${parseFloat(alpha).toFixed(2)})`;
      });
    }
    return normalized;
  };
  let match;
  while ((match = regex.exec(text)) !== null) {
    const originalColor = match[0];
    const normalizedColor = normalizeColor2(originalColor);
    let id;
    if (combineSimilar) {
      id = colorMap.get(normalizedColor) ?? (() => {
        const newId = idCounter++;
        colorMap.set(normalizedColor, newId);
        return newId;
      })();
    } else {
      id = idCounter++;
    }
    if (!colors.some((c3) => c3.id === id)) {
      colors.push({ id, color: originalColor, modifiedColor: originalColor });
    }
    tokenizedText = tokenizedText.slice(0, match.index) + `%%${id}%%` + tokenizedText.slice(match.index + originalColor.length);
    regex.lastIndex = 0;
  }
  return { colors, tokenizedText };
}
function replaceColors(tokenizedText, colors) {
  if (tokenizedText.trim() === "") {
    return "";
  }
  const sortedColors = [...colors].sort((a3, b2) => b2.id - a3.id);
  let outputText = tokenizedText;
  for (const { id, color, modifiedColor } of sortedColors) {
    const token = `%%${id}%%`;
    const formattedColor = formatColor(color, modifiedColor);
    outputText = outputText.replace(new RegExp(token, "g"), formattedColor);
  }
  return outputText;
}
function formatColor(color, modifiedColor) {
  if (color.startsWith("#")) {
    if (color.length === 9) {
      const rgba = hexToRgba(modifiedColor);
      if (rgba) {
        const [, r3, g2, b2, a3] = rgba.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        const newAlpha = Math.round(parseFloat(a3) * 255).toString(16).padStart(2, "0");
        return `#${r3}${g2}${b2}${newAlpha}`;
      }
    }
    return modifiedColor.slice(0, 7);
  } else if (color.startsWith("rgb")) {
    if (color.startsWith("rgba")) {
      return modifiedColor;
    } else {
      return modifiedColor.replace(/rgba\((.+?),[\d.]+\)/, "rgb($1)");
    }
  }
  return modifiedColor;
}
function hexToRgba(hex) {
  let r3 = 0, g2 = 0, b2 = 0, a3 = 1;
  if (hex.length === 4) {
    r3 = parseInt(hex[1] + hex[1], 16);
    g2 = parseInt(hex[2] + hex[2], 16);
    b2 = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7 || hex.length === 9) {
    r3 = parseInt(hex.slice(1, 3), 16);
    g2 = parseInt(hex.slice(3, 5), 16);
    b2 = parseInt(hex.slice(5, 7), 16);
    if (hex.length === 9) {
      a3 = parseInt(hex.slice(7, 9), 16) / 255;
    }
  } else {
    return null;
  }
  return `rgba(${r3},${g2},${b2},${a3.toFixed(2)})`;
}
function isValidColor(color) {
  const isNumberInRange = (num, min, max) => {
    const n2 = Number(num);
    return !isNaN(n2) && n2 >= min && n2 <= max;
  };
  if (color.startsWith("#")) {
    const hexChars = color.slice(1);
    return /^[0-9A-Fa-f]+$/.test(hexChars) && [3, 6, 8].includes(hexChars.length);
  }
  const rgbPattern = /^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\)$/;
  const match = color.match(rgbPattern);
  if (match) {
    const [, r3, g2, b2, a3] = match;
    if (!isNumberInRange(r3, 0, 255) || !isNumberInRange(g2, 0, 255) || !isNumberInRange(b2, 0, 255)) {
      return false;
    }
    if (a3 !== void 0) {
      const alpha = parseFloat(a3);
      return !isNaN(alpha) && alpha >= 0 && alpha <= 1;
    }
    return true;
  }
  return false;
}
function normalizeColor(color) {
  if (color.startsWith("#")) {
    return hexToRgba(color);
  } else {
    const match = color.match(/^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\)$/);
    if (match) {
      const [, r3, g2, b2, a3] = match;
      return `rgba(${r3},${g2},${b2},${a3 ? parseFloat(a3).toFixed(2) : "1.00"})`;
    }
  }
  return null;
}
function parseColorsWithPosition(text) {
  if (!text) return [];
  const lines = text.split("\n");
  const colorsWithPosition = [];
  const regex = /(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})|rgba?\s*\(\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\))/gi;
  lines.forEach((line, lineIndex) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
      const color = match[0];
      if (isValidColor(color)) {
        const start = match.index;
        const end = start + color.length;
        const normalized = normalizeColor(color) || color;
        colorsWithPosition.push({
          color,
          modifiedColor: normalized,
          line: lineIndex,
          start,
          end
        });
      }
    }
  });
  return colorsWithPosition.sort((a3, b2) => {
    if (a3.line !== b2.line) return b2.line - a3.line;
    return b2.start - a3.start;
  });
}
var init_utils = __esm({
  "src/components/pages/Colors/utils.ts"() {
    "use strict";
    init_preact_module();
  }
});

// src/components/pages/Colors/InputColumn.tsx
var InputColumn;
var init_InputColumn = __esm({
  "src/components/pages/Colors/InputColumn.tsx"() {
    "use strict";
    init_preact_module();
    init_Config();
    init_hooks_module();
    init_utils();
    init_jsxRuntime_module();
    InputColumn = ({ onColorsParsed, config, onConfigChange }) => {
      const [text, setText] = h2("");
      const textAreaRef = A2(null);
      y2(() => {
        const savedText = localStorage.getItem("inputText");
        if (savedText) {
          setText(savedText);
        }
        if (textAreaRef.current) {
          textAreaRef.current.value = savedText || "";
        }
      }, []);
      const handleFileImport = q2((event) => {
        const target = event.target;
        if (target && target.files && target.files[0]) {
          const file = target.files[0];
          const reader = new FileReader();
          reader.onload = (e4) => {
            const fileContent = e4.target.result;
            setText(fileContent);
            if (textAreaRef.current) {
              textAreaRef.current.value = fileContent;
            }
            localStorage.setItem("inputText", fileContent);
          };
          reader.readAsText(file);
        }
      }, []);
      const handleClear = q2(() => {
        setText("");
        if (textAreaRef.current) {
          textAreaRef.current.value = "";
        }
        localStorage.setItem("inputText", "");
      }, []);
      const handleParseColors = q2(() => {
        const textareaContent = textAreaRef.current ? textAreaRef.current.value : "";
        if (textareaContent.trim() !== "") {
          setText(textareaContent);
          const { colors, tokenizedText } = parseAndTokenizeColors(textareaContent, config.combineSimilar);
          onColorsParsed(colors, tokenizedText);
          localStorage.setItem("inputText", textareaContent);
        } else {
          onColorsParsed([], "");
        }
      }, [onColorsParsed, config.combineSimilar]);
      return /* @__PURE__ */ u2("div", { className: "column InputColumn", children: [
        /* @__PURE__ */ u2("div", { className: "button-bar top", children: [
          /* @__PURE__ */ u2("button", { onClick: () => document.getElementById("fileInput")?.click(), children: "Import File" }),
          /* @__PURE__ */ u2("input", { type: "file", id: "fileInput", style: { display: "none" }, onChange: handleFileImport }),
          /* @__PURE__ */ u2("button", { onClick: handleClear, children: "Clear" }),
          /* @__PURE__ */ u2(Config, { config, onConfigChange })
        ] }),
        /* @__PURE__ */ u2(
          "textarea",
          {
            ref: textAreaRef,
            value: text,
            onChange: (e4) => setText(e4.target.value)
          }
        ),
        /* @__PURE__ */ u2("div", { className: "button-bar bottom", children: /* @__PURE__ */ u2("button", { onClick: handleParseColors, children: "Parse Colors" }) })
      ] });
    };
  }
});

// node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "node_modules/seedrandom/lib/alea.js"(exports, module) {
    "use strict";
    init_preact_module();
    (function(global, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t3 = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t3 - (me.c = t3 | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f4, t3) {
        t3.c = f4.c;
        t3.s0 = f4.s0;
        t3.s1 = f4.s1;
        t3.s2 = f4.s2;
        return t3;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n2 = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i4 = 0; i4 < data.length; i4++) {
            n2 += data.charCodeAt(i4);
            var h3 = 0.02519603282416938 * n2;
            n2 = h3 >>> 0;
            h3 -= n2;
            h3 *= n2;
            n2 = h3 >>> 0;
            h3 -= n2;
            n2 += h3 * 4294967296;
          }
          return (n2 >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "node_modules/seedrandom/lib/xor128.js"(exports, module) {
    "use strict";
    init_preact_module();
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t3 = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t3 ^ t3 >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k3 = 0; k3 < strseed.length + 64; k3++) {
          me.x ^= strseed.charCodeAt(k3) | 0;
          me.next();
        }
      }
      function copy(f4, t3) {
        t3.x = f4.x;
        t3.y = f4.y;
        t3.z = f4.z;
        t3.w = f4.w;
        return t3;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    "use strict";
    init_preact_module();
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t3 = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t3 ^ t3 << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k3 = 0; k3 < strseed.length + 64; k3++) {
          me.x ^= strseed.charCodeAt(k3) | 0;
          if (k3 == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f4, t3) {
        t3.x = f4.x;
        t3.y = f4.y;
        t3.z = f4.z;
        t3.w = f4.w;
        t3.v = f4.v;
        t3.d = f4.d;
        return t3;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    "use strict";
    init_preact_module();
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i4 = me.i, t3, v3, w3;
          t3 = X[i4];
          t3 ^= t3 >>> 7;
          v3 = t3 ^ t3 << 24;
          t3 = X[i4 + 1 & 7];
          v3 ^= t3 ^ t3 >>> 10;
          t3 = X[i4 + 3 & 7];
          v3 ^= t3 ^ t3 >>> 3;
          t3 = X[i4 + 4 & 7];
          v3 ^= t3 ^ t3 << 7;
          t3 = X[i4 + 7 & 7];
          t3 = t3 ^ t3 << 13;
          v3 ^= t3 ^ t3 << 9;
          X[i4] = v3;
          me.i = i4 + 1 & 7;
          return v3;
        };
        function init(me2, seed2) {
          var j3, w3, X = [];
          if (seed2 === (seed2 | 0)) {
            w3 = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j3 = 0; j3 < seed2.length; ++j3) {
              X[j3 & 7] = X[j3 & 7] << 15 ^ seed2.charCodeAt(j3) + X[j3 + 1 & 7] << 13;
            }
          }
          while (X.length < 8) X.push(0);
          for (j3 = 0; j3 < 8 && X[j3] === 0; ++j3) ;
          if (j3 == 8) w3 = X[7] = -1;
          else w3 = X[j3];
          me2.x = X;
          me2.i = 0;
          for (j3 = 256; j3 > 0; --j3) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f4, t3) {
        t3.x = f4.x.slice();
        t3.i = f4.i;
        return t3;
      }
      function impl(seed, opts) {
        if (seed == null) seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x) copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    "use strict";
    init_preact_module();
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w3 = me.w, X = me.X, i4 = me.i, t3, v3;
          me.w = w3 = w3 + 1640531527 | 0;
          v3 = X[i4 + 34 & 127];
          t3 = X[i4 = i4 + 1 & 127];
          v3 ^= v3 << 13;
          t3 ^= t3 << 17;
          v3 ^= v3 >>> 15;
          t3 ^= t3 >>> 12;
          v3 = X[i4] = v3 ^ t3;
          me.i = i4;
          return v3 + (w3 ^ w3 >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t3, v3, i4, j3, w3, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v3 = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v3 = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i4 = 0, j3 = -32; j3 < limit; ++j3) {
            if (seed2) v3 ^= seed2.charCodeAt((j3 + 32) % seed2.length);
            if (j3 === 0) w3 = v3;
            v3 ^= v3 << 10;
            v3 ^= v3 >>> 15;
            v3 ^= v3 << 4;
            v3 ^= v3 >>> 13;
            if (j3 >= 0) {
              w3 = w3 + 1640531527 | 0;
              t3 = X[j3 & 127] ^= v3 + w3;
              i4 = 0 == t3 ? i4 + 1 : 0;
            }
          }
          if (i4 >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i4 = 127;
          for (j3 = 4 * 128; j3 > 0; --j3) {
            v3 = X[i4 + 34 & 127];
            t3 = X[i4 = i4 + 1 & 127];
            v3 ^= v3 << 13;
            t3 ^= t3 << 17;
            v3 ^= v3 >>> 15;
            t3 ^= t3 >>> 12;
            X[i4] = v3 ^ t3;
          }
          me2.w = w3;
          me2.X = X;
          me2.i = i4;
        }
        init(me, seed);
      }
      function copy(f4, t3) {
        t3.i = f4.i;
        t3.w = f4.w;
        t3.X = f4.X.slice();
        return t3;
      }
      ;
      function impl(seed, opts) {
        if (seed == null) seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X) copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      exports,
      // window object or global
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "node_modules/seedrandom/lib/tychei.js"(exports, module) {
    "use strict";
    init_preact_module();
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b2 = me.b, c3 = me.c, d3 = me.d, a3 = me.a;
          b2 = b2 << 25 ^ b2 >>> 7 ^ c3;
          c3 = c3 - d3 | 0;
          d3 = d3 << 24 ^ d3 >>> 8 ^ a3;
          a3 = a3 - b2 | 0;
          me.b = b2 = b2 << 20 ^ b2 >>> 12 ^ c3;
          me.c = c3 = c3 - d3 | 0;
          me.d = d3 << 16 ^ c3 >>> 16 ^ a3;
          return me.a = a3 - b2 | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k3 = 0; k3 < strseed.length + 20; k3++) {
          me.b ^= strseed.charCodeAt(k3) | 0;
          me.next();
        }
      }
      function copy(f4, t3) {
        t3.a = f4.a;
        t3.b = f4.b;
        t3.c = f4.c;
        t3.d = f4.d;
        return t3;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object") copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
    "use strict";
    init_preact_module();
  }
});

// node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "node_modules/seedrandom/seedrandom.js"(exports, module) {
    "use strict";
    init_preact_module();
    (function(global, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten(
          options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n2 = arc4.g(chunks), d3 = startdenom, x2 = 0;
          while (n2 < significance) {
            n2 = (n2 + x2) * width;
            d3 *= width;
            x2 = arc4.g(1);
          }
          while (n2 >= overflow) {
            n2 /= 2;
            d3 /= 2;
            x2 >>>= 1;
          }
          return (n2 + x2) / d3;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t3, keylen = key.length, me = this, i4 = 0, j3 = me.i = me.j = 0, s3 = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i4 < width) {
          s3[i4] = i4++;
        }
        for (i4 = 0; i4 < width; i4++) {
          s3[i4] = s3[j3 = mask & j3 + key[i4 % keylen] + (t3 = s3[i4])];
          s3[j3] = t3;
        }
        (me.g = function(count) {
          var t4, r3 = 0, i5 = me.i, j4 = me.j, s4 = me.S;
          while (count--) {
            t4 = s4[i5 = mask & i5 + 1];
            r3 = r3 * width + s4[mask & (s4[i5] = s4[j4 = mask & j4 + t4]) + (s4[j4] = t4)];
          }
          me.i = i5;
          me.j = j4;
          return r3;
        })(width);
      }
      function copy(f4, t3) {
        t3.i = f4.i;
        t3.j = f4.j;
        t3.S = f4.S.slice();
        return t3;
      }
      ;
      function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten(obj[prop], depth - 1));
            } catch (e4) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j3 = 0;
        while (j3 < stringseed.length) {
          key[mask & j3] = mask & (smear ^= key[mask & j3] * 19) + stringseed.charCodeAt(j3++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e4) {
          var browser = global.navigator, plugins = browser && browser.plugins;
          return [+/* @__PURE__ */ new Date(), global, plugins, global.screen, tostring(pool)];
        }
      }
      function tostring(a3) {
        return String.fromCharCode.apply(0, a3);
      }
      mixkey(math.random(), pool);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom2;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom2;
        });
      } else {
        math["seed" + rngname] = seedrandom2;
      }
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self !== "undefined" ? self : exports,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  }
});

// node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "node_modules/seedrandom/index.js"(exports, module) {
    "use strict";
    init_preact_module();
    var alea = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// src/components/pages/Colors/OutputColumn.tsx
var import_seedrandom, OutputColumn;
var init_OutputColumn = __esm({
  "src/components/pages/Colors/OutputColumn.tsx"() {
    "use strict";
    init_preact_module();
    init_hooks_module();
    init_utils();
    import_seedrandom = __toESM(require_seedrandom2());
    init_jsxRuntime_module();
    OutputColumn = ({ colors, inputText, importedFileName }) => {
      const [activeTab, setActiveTab] = h2("swatches");
      const [outputTextModified, setOutputTextModified] = h2("");
      const [colorsWithPosition, setColorsWithPosition] = h2([]);
      const [showOriginal, setShowOriginal] = h2(false);
      const [showModified, setShowModified] = h2(true);
      const sessionSeed = T2(() => Math.random().toString(36).substring(7), []);
      const rng2 = T2(() => (0, import_seedrandom.default)(sessionSeed), [sessionSeed]);
      const generateRandomSentences = T2(() => {
        const sentences = [
          "The quick brown fox jumps.",
          "Now is the time for all.",
          "Pack my box with five.",
          "Sphinx of black quartz, judge.",
          "Razorback frogs level six.",
          "Waltz, nymph, for quick jigs.",
          "Five boxing wizards jump.",
          "Extra pluck and zeal from.",
          "Fredericka bought exquisite opal.",
          "The job requires young wage."
        ];
        return Array.from({ length: colors.length }, () => sentences[Math.floor(rng2() * sentences.length)]);
      }, [colors.length, rng2]);
      y2(() => {
        const parsedColors = parseColorsWithPosition(inputText);
        setColorsWithPosition(parsedColors);
        const updatedColorsWithPosition = parsedColors.map((parsed) => {
          const match = colors.find((c3) => c3.color === parsed.color);
          return match ? { ...parsed, modifiedColor: match.modifiedColor } : parsed;
        });
        const modifiedText = replaceColors(inputText, updatedColorsWithPosition);
        setOutputTextModified(modifiedText);
      }, [colors, inputText]);
      const handleSave = q2(() => {
        const blob = new Blob([outputTextModified], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        let fileName = "output.txt";
        if (importedFileName) {
          fileName = importedFileName.replace(/\.[^/.]+$/, "") + "_modified.txt";
        }
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
      }, [outputTextModified, importedFileName]);
      const renderColumn = (isOriginal) => /* @__PURE__ */ u2("div", { className: activeTab === "text" ? "text-content" : "column-content", style: { flex: 1, overflowY: "auto" }, children: activeTab === "swatches" ? colors.map((color, index) => /* @__PURE__ */ u2("div", { className: "color-swatch", style: { backgroundColor: isOriginal ? color.color : color.modifiedColor } }, index)) : colors.map((color, index) => /* @__PURE__ */ u2("div", { style: { color: isOriginal ? color.color : color.modifiedColor }, children: generateRandomSentences[index] }, index)) });
      return /* @__PURE__ */ u2("div", { className: "column OutputColumn", children: [
        /* @__PURE__ */ u2("div", { className: "tab-bar", children: [
          /* @__PURE__ */ u2(
            "button",
            {
              className: activeTab === "swatches" ? "active" : "",
              onClick: () => setActiveTab("swatches"),
              children: "Swatches"
            }
          ),
          /* @__PURE__ */ u2(
            "button",
            {
              className: activeTab === "text" ? "active" : "",
              onClick: () => setActiveTab("text"),
              children: "Text"
            }
          ),
          /* @__PURE__ */ u2(
            "button",
            {
              className: activeTab === "output" ? "active" : "",
              onClick: () => setActiveTab("output"),
              style: { marginLeft: "auto" },
              children: "Output"
            }
          )
        ] }),
        /* @__PURE__ */ u2("div", { className: "tab-content", style: { height: "100%", overflowY: "auto" }, children: activeTab !== "output" ? /* @__PURE__ */ u2("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: [
          /* @__PURE__ */ u2("div", { className: "checkbox-container", children: [
            /* @__PURE__ */ u2("label", { children: [
              /* @__PURE__ */ u2(
                "input",
                {
                  type: "checkbox",
                  checked: showOriginal,
                  onChange: () => setShowOriginal(!showOriginal)
                }
              ),
              "Original"
            ] }),
            /* @__PURE__ */ u2("label", { children: [
              /* @__PURE__ */ u2(
                "input",
                {
                  type: "checkbox",
                  checked: showModified,
                  onChange: () => setShowModified(!showModified)
                }
              ),
              "Modified"
            ] })
          ] }),
          /* @__PURE__ */ u2("div", { style: { display: "flex", flex: 1 }, children: [
            showOriginal && renderColumn(true),
            showModified && renderColumn(false)
          ] })
        ] }) : /* @__PURE__ */ u2("div", { className: "output-preview", style: { height: "100%" }, children: /* @__PURE__ */ u2(
          "textarea",
          {
            value: outputTextModified,
            readOnly: true,
            style: { width: "100%", height: "100%", padding: "var(--item-padding)" }
          }
        ) }) }),
        /* @__PURE__ */ u2("div", { className: "button-bar", children: /* @__PURE__ */ u2("button", { onClick: handleSave, children: "Save" }) })
      ] });
    };
  }
});

// src/components/pages/Colors/ColorPage.tsx
var ColorPage;
var init_ColorPage2 = __esm({
  "src/components/pages/Colors/ColorPage.tsx"() {
    "use strict";
    init_preact_module();
    init_hooks_module();
    init_ColorEditColumn();
    init_ColorPage();
    init_InputColumn();
    init_OutputColumn();
    init_jsxRuntime_module();
    ColorPage = () => {
      const [colors, setColors] = h2([]);
      const [modifiedColors, setModifiedColors] = h2([]);
      const [tokenizedText, setTokenizedText] = h2("");
      const [config, setConfig] = h2({
        combineSimilar: false,
        colorMode: "dark",
        backgroundColor: "#123",
        fontColor: "#fed"
      });
      y2(() => {
        const savedConfig = localStorage.getItem("config");
        if (savedConfig) {
          setConfig(JSON.parse(savedConfig));
        }
      }, []);
      const handleColorsParsed = (parsedColors, text) => {
        setColors(parsedColors);
        setModifiedColors(parsedColors);
        setTokenizedText(text);
      };
      const handleColorsChanged = (newColors) => {
        setModifiedColors(newColors);
      };
      const handleConfigChange = (newConfig) => {
        setConfig((prev) => ({ ...prev, ...newConfig }));
        localStorage.setItem("config", JSON.stringify({ ...config, ...newConfig }));
      };
      return /* @__PURE__ */ u2(
        "div",
        {
          className: `ColorPage ${config.colorMode === "dark" ? "dark-mode" : ""}`,
          style: {
            backgroundColor: config.backgroundColor,
            color: config.fontColor
          },
          children: [
            /* @__PURE__ */ u2(
              InputColumn,
              {
                onColorsParsed: handleColorsParsed,
                config,
                onConfigChange: handleConfigChange
              }
            ),
            /* @__PURE__ */ u2(ColorEditColumn, { colors: modifiedColors, onColorsChanged: handleColorsChanged }),
            /* @__PURE__ */ u2(OutputColumn, { colors: modifiedColors, tokenizedText })
          ]
        }
      );
    };
  }
});

// src/config/routes.tsx
var routes_default;
var init_routes = __esm({
  "src/config/routes.tsx"() {
    "use strict";
    init_preact_module();
    init_Entry();
    init_Home();
    init_Info();
    init_NotFound();
    init_Other();
    init_Play();
    init_Timeline2();
    init_Work();
    init_ColorPage2();
    init_jsxRuntime_module();
    routes_default = {
      "/": (p3) => /* @__PURE__ */ u2(Home_default, {}),
      "/work": (p3) => /* @__PURE__ */ u2(Work_default, {}),
      "/play": (p3) => /* @__PURE__ */ u2(Play_default, {}),
      "/info": (p3) => /* @__PURE__ */ u2(Info_default, {}),
      "/editor": (p3) => /* @__PURE__ */ u2(Other_default, {}),
      "/colors": (p3) => /* @__PURE__ */ u2(ColorPage, {}),
      "/timeline": (p3) => /* @__PURE__ */ u2(Timeline_default, {}),
      "/entries/:slug": (p3) => /* @__PURE__ */ u2(Entry_default, {}),
      "*": (p3) => /* @__PURE__ */ u2(NotFound_default, {})
    };
  }
});

// src/config/config.ts
var require_config = __commonJS({
  "src/config/config.ts"(exports, module) {
    "use strict";
    init_preact_module();
    init_routes();
    module.exports = {
      DEFAULT_ROUTE: "/colors",
      routes: routes_default
    };
  }
});

// src/index.tsx
init_preact_module();

// src/Application.ts
init_preact_module();

// src/config/idb.config.ts
init_preact_module();
var idbTables = [
  {
    name: "work",
    options: {},
    indexes: ["id"]
  }
];

// env-ns:env
var APP_ID = "rw";

// src/lib/IndexedDBManager.ts
init_preact_module();
init_logging();
var { log: log2, warn: warn2, error: error2 } = getLogger("IndexedDBManager", { color: "yellow", enabled: false });
var IndexedDBManager = class _IndexedDBManager {
  static dbs = [];
  // global DB index
  db = null;
  dbName;
  version;
  stores = {};
  constructor(dbName, initialVersion = 1) {
    this.dbName = dbName;
    this.version = this.getVersionFromLocalStorage() || initialVersion;
    _IndexedDBManager.dbs.push(this);
  }
  // static accessor for clients to retrieve an instance of a DB from anywhere.
  static getDb(name = APP_ID) {
    let db = _IndexedDBManager.dbs.find((d3) => d3.dbName == APP_ID);
    if (!db) db = new _IndexedDBManager(APP_ID);
    return db;
  }
  getVersionFromLocalStorage() {
    const versionString = localStorage.getItem(`${this.dbName}_version`);
    return versionString ? parseInt(versionString, 10) : null;
  }
  setVersionInLocalStorage(version) {
    localStorage.setItem(`${this.dbName}_version`, version.toString());
  }
  openDB() {
    return new Promise((resolve, reject) => {
      log2(`openDB()`, this.version);
      const request = indexedDB.open(this.dbName, this.version);
      request.onerror = (event) => {
        error2(`openDB() error:`, error2);
        if (event.target?.error?.name === "VersionError") {
          this.version++;
          this.setVersionInLocalStorage(this.version);
          resolve(this.openDB());
        } else {
          reject(`Database error: ${event.target?.error}`);
        }
      };
      request.onsuccess = (event) => {
        log2(`openDB() onsuccess:`, event);
        this.db = event.target.result;
        resolve(this.db);
      };
      request.onupgradeneeded = (event) => {
        warn2(`openDB() onupgradeneeded:`, event);
        this.db = event.target.result;
        this.upgradeDB(event);
      };
    });
  }
  upgradeDB(event) {
    log2(`upgradeDB():`, event);
    const db = event.target.result;
    const newVersion = event.newVersion || this.version;
    for (const [storeName, indexes] of Object.entries(this.stores)) {
      if (!db.objectStoreNames.contains(storeName)) {
        log2(`creating new objectStore:`, storeName);
        const objectStore = db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
        for (const index of indexes) {
          objectStore.createIndex(index, index, { unique: false });
        }
      }
    }
    this.setVersionInLocalStorage(newVersion);
  }
  addStore(storeName, indexNames) {
    log2(`addStore():`, storeName);
    this.stores[storeName] = indexNames;
  }
  handleMissingStore(storeName) {
    log2(`handleMissingStore():`, storeName);
    return new Promise((resolve, reject) => {
      this.version++;
      this.setVersionInLocalStorage(this.version);
      const request = indexedDB.open(this.dbName, this.version);
      request.onupgradeneeded = (event) => {
        warn2(`handleMissingStore() onupgradeneeded:`, storeName);
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
          const objectStore = db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
          if (this.stores[storeName]) {
            for (const index of this.stores[storeName]) {
              objectStore.createIndex(index, index, { unique: false });
            }
          }
        }
        resolve();
      };
      request.onerror = (event) => reject(`Error creating store: ${event.target?.error}`);
    });
  }
  async put(storeName, value) {
    log2(`put()`, storeName, value);
    if (!this.db) await this.openDB();
    try {
      const transaction = this.db.transaction(storeName, "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.put(value);
      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = (e4) => {
          log2(`put() request error`, storeName, e4);
          if (request.error?.name === "NotFoundError") {
            this.handleMissingStore(storeName).then(() => this.put(storeName, value).then(resolve).catch(reject));
          } else {
            reject(request.error);
          }
        };
      });
    } catch (e4) {
      log2(`put() error`, storeName, value);
      if (e4.name === "NotFoundError") {
        await this.handleMissingStore(storeName);
        return this.put(storeName, value);
      }
      throw e4;
    }
  }
  async get(storeName, key) {
    log2(`get()`, storeName, key);
    if (!this.db) await this.openDB();
    try {
      const transaction = this.db.transaction(storeName, "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(key);
      return new Promise((resolve) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => {
          log2(`get() request error`, storeName, e);
          if (request.error?.name === "NotFoundError") {
            this.handleMissingStore(storeName).then(() => this.get(storeName, key).then(resolve));
          }
        };
      });
    } catch (e4) {
      log2(`get() error`, storeName, e4);
      if (e4.name === "NotFoundError") {
        await this.handleMissingStore(storeName);
        return this.get(storeName, key);
      }
      return void 0;
    }
  }
  closeDB() {
    log2(`closeDB()`);
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
};

// src/Application.ts
init_AudioManager();
var _Application = class {
  constructor() {
  }
  // Things to initialize before client can start...
  // Don't take too long... App waits for this method until it mounts.
  async init() {
    const dbManager = new IndexedDBManager(APP_ID, 1);
    if (idbTables) for (var t3 of idbTables) dbManager.addStore(t3.name, t3.indexes);
    AudioManager_default.register("hover", "/public/sounds/click.wav");
    AudioManager_default.register("click", "/public/sounds/cool-click.wav");
  }
};
var Application = new _Application();
var Application_default = Application;

// src/index.tsx
init_preact_module();

// src/components/app/App.tsx
init_preact_module();

// src/components/shared/RouteContext/RouteContext.tsx
init_preact_module();
var import_config = __toESM(require_config());

// src/lib/hooks/useRouter.ts
init_preact_module();

// src/lib/EventService.ts
init_preact_module();
var eventbus = __toESM(require_eventbus_min());
var _EventService = class {
  debug = false;
  // fire event
  dispatch(name, data) {
    if (this.debug)
      console.log("EVENT:", name, data);
    eventbus.dispatch(name, data);
  }
  subscribe(event, cb) {
    eventbus.addEventListener(event, cb);
  }
  unsubscribe(event, cb) {
    eventbus.removeEventListener(event, cb);
  }
};
var EventService = new _EventService();
var EventService_default = EventService;

// src/lib/hooks/useRouter.ts
init_hooks_module();
var ROUTE_CHANGE_EVENT = "route-change";
function useRouter() {
  const [route, setRoute] = h2(void 0);
  const [routeParams, setRouteParams] = h2(void 0);
  const [routeArgs, setRouteArgs] = h2(void 0);
  y2(() => {
    function handleRouteChange(e4) {
      setRoute(e4.target.route);
      setRouteParams(e4.target.params);
    }
    EventService_default.subscribe(ROUTE_CHANGE_EVENT, handleRouteChange);
    return () => {
      EventService_default.unsubscribe(ROUTE_CHANGE_EVENT, handleRouteChange);
    };
  });
  const navigate = (to) => {
    console.log(`navigate`, to);
    setRoute(to);
    setRouteParams(void 0);
    setRouteArgs(void 0);
  };
  return { route, routeParams, navigate };
}

// src/components/shared/RouteContext/RouteContext.tsx
init_hooks_module();
function RouteContext() {
  const { route, routeParams, navigate } = useRouter();
  y2(() => {
    console.log(`route to:`, location.pathname, import_config.DEFAULT_ROUTE);
    let l3 = location.pathname;
    if (l3 == "/" || l3 == "") l3 = import_config.DEFAULT_ROUTE;
    if (!route) navigate(l3);
  }, []);
  return route ? typeof import_config.routes[route] != "undefined" ? import_config.routes[route](routeParams) : "Not found." : "";
}

// src/components/app/App.tsx
init_jsxRuntime_module();
var App = (props) => {
  return /* @__PURE__ */ u2("main", { id: "app", children: /* @__PURE__ */ u2("div", { className: "content-wrapper", children: /* @__PURE__ */ u2("div", { className: "page", children: /* @__PURE__ */ u2("div", { className: "container", children: /* @__PURE__ */ u2("div", { className: "stage", children: /* @__PURE__ */ u2("div", { className: "stage-content", children: /* @__PURE__ */ u2(RouteContext, {}) }) }) }) }) }) });
};
var App_default = App;

// src/index.tsx
init_jsxRuntime_module();
var initApp = async () => {
  await Application_default.init();
  D(/* @__PURE__ */ u2(App_default, {}), document.body);
};
initApp();
/*! Bundled license information:

vanilla-picker/dist/vanilla-picker.mjs:
  (*!
   * vanilla-picker v2.12.3
   * https://vanilla-picker.js.org
   *
   * Copyright 2017-2024 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
   * Released under the ISC license.
   *)
*/
//# sourceMappingURL=index.js.map
