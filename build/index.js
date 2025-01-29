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
  var a3, h3, p3, v3, y3, g2, m3, b2, C3, S2, M2, P2, I2, A2, H2, L2, T2, F2 = u4.type;
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
    if (h3.context = M2, h3.props = b2, h3.__P = n2, h3.__e = false, I2 = l.__r, A2 = 0, C3) {
      for (h3.state = h3.__s, h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++) h3.__h.push(h3._sb[H2]);
      h3._sb = [];
    } else do {
      h3.__d = false, I2 && I2(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i4 = w(w({}, i4), h3.getChildContext())), C3 && !p3 && null != h3.getSnapshotBeforeUpdate && (g2 = h3.getSnapshotBeforeUpdate(v3, y3)), f4 = $(n2, d(L2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u4, t3, i4, r3, o3, e4, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e4.push(h3), m3 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u4.__v = null, c3 || null != o3) if (n3.then) {
      for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      o3[o3.indexOf(f4)] = null, u4.__e = f4;
    } else for (T2 = o3.length; T2--; ) _(o3[T2]);
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

// src/components/shared/BlobEditor/Blob.ts
var Blob;
var init_Blob = __esm({
  "src/components/shared/BlobEditor/Blob.ts"() {
    "use strict";
    init_preact_module();
    Blob = class {
      id;
      type;
      title;
      content;
      constructor(id, type, title, content) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.content = content;
      }
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

// src/components/shared/BlobEditor/BlobMenu.tsx
function BlobMenu({ onBlobChange }) {
  const [blobs, setBlobs] = h2([]);
  function getAllBlobs() {
    const _blobs = [];
    for (let i4 = 0; i4 < localStorage.length; i4++) {
      const key = localStorage.key(i4);
      const blobData = JSON.parse(localStorage.getItem(key));
      if (blobData) {
        _blobs.push(blobData);
      }
    }
    setBlobs(_blobs);
  }
  y2(() => {
    getAllBlobs();
  }, []);
  function handleChange(event) {
    const selectedBlobId = event.target.value;
    onBlobChange(selectedBlobId);
  }
  return /* @__PURE__ */ u2("select", { onChange: handleChange, children: blobs.map(
    (blob) => /* @__PURE__ */ u2("option", { value: blob.id, children: blob.title })
  ) });
}
var init_BlobMenu = __esm({
  "src/components/shared/BlobEditor/BlobMenu.tsx"() {
    "use strict";
    init_preact_module();
    init_hooks_module();
    init_jsxRuntime_module();
  }
});

// src/components/shared/BlobEditor/DragAndDropPlugin.ts
var DragAndDropPlugin;
var init_DragAndDropPlugin = __esm({
  "src/components/shared/BlobEditor/DragAndDropPlugin.ts"() {
    "use strict";
    init_preact_module();
    DragAndDropPlugin = class {
      constructor(container, editor) {
        this.container = container;
        this.editor = editor;
        this.init();
      }
      init() {
        this.container.addEventListener("dragover", (e4) => {
          e4.preventDefault();
        });
        this.container.addEventListener("drop", (e4) => {
          e4.preventDefault();
          const files = e4.dataTransfer.files;
          if (files.length > 0) {
            this.handleFiles(files);
          }
        });
      }
      async handleFiles(files) {
        for (const file of files) {
          const fileData = await this.readFile(file);
          const preview = this.renderPreview(fileData);
          if (preview) {
            this.container.appendChild(preview);
            this.saveFileToBlob(fileData);
          }
        }
      }
      readFile(file) {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({
              name: file.name,
              type: file.type,
              size: file.size,
              data: reader.result
            });
          };
          reader.readAsDataURL(file);
        });
      }
      renderPreview(fileData) {
        const previewContainer = document.createElement("div");
        previewContainer.style.width = "150px";
        previewContainer.style.height = "150px";
        previewContainer.style.margin = "5px";
        previewContainer.style.display = "inline-block";
        previewContainer.style.border = "1px solid #ccc";
        if (fileData.type.startsWith("image/")) {
          const img = document.createElement("img");
          img.src = fileData.data;
          img.style.width = "100%";
          img.style.height = "100%";
          img.style.objectFit = "cover";
          previewContainer.appendChild(img);
        } else if (fileData.type.startsWith("video/")) {
          const video = document.createElement("video");
          video.src = fileData.data;
          video.controls = true;
          video.style.width = "100%";
          video.style.height = "100%";
          previewContainer.appendChild(video);
        } else if (fileData.type.startsWith("audio/")) {
          const audio = document.createElement("audio");
          audio.src = fileData.data;
          audio.controls = true;
          audio.style.width = "100%";
          audio.style.height = "100%";
          previewContainer.appendChild(audio);
        } else if (fileData.type === "model/stl" || fileData.type === "application/sla") {
          const canvas = document.createElement("canvas");
          canvas.width = 150;
          canvas.height = 150;
          previewContainer.appendChild(canvas);
          this.renderSTLPreview(canvas, fileData.data);
        } else {
          const unsupported = document.createElement("div");
          unsupported.textContent = "Unsupported file type";
          unsupported.style.textAlign = "center";
          unsupported.style.lineHeight = "150px";
          previewContainer.appendChild(unsupported);
        }
        return previewContainer;
      }
      renderSTLPreview(canvas, data) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ccc";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText("3D Preview", canvas.width / 2, canvas.height / 2);
      }
      saveFileToBlob(fileData) {
        const fileObject = {
          type: "file",
          name: fileData.name,
          mimeType: fileData.type,
          size: fileData.size,
          data: fileData.data
        };
        this.editor.blob.content.push(fileObject);
        this.editor.saveEdits();
      }
    };
  }
});

// src/components/shared/BlobEditor/Editor.ts
var WYSIWYGEditor;
var init_Editor = __esm({
  "src/components/shared/BlobEditor/Editor.ts"() {
    "use strict";
    init_preact_module();
    init_Blob();
    init_DragAndDropPlugin();
    WYSIWYGEditor = class {
      constructor(container, titleContainer, initialBlob) {
        this.container = container;
        this.titleContainer = titleContainer;
        this.throttledOnChange = this.throttle(this.onChange.bind(this), 2e3);
        this.init();
        this.dragAndDropPlugin = new DragAndDropPlugin(this.container, this);
        if (initialBlob) {
          this.loadBlob(initialBlob);
        } else this.loadMostRecentBlob();
      }
      init() {
        this.titleInput = document.createElement("input");
        this.titleInput.type = "text";
        this.titleInput.addEventListener("keyup", () => {
          this.blob.title = this.titleInput.value;
          this.saveEdits();
        });
        this.titleContainer.appendChild(this.titleInput);
        this.container.contentEditable = true;
        this.container.addEventListener("input", () => {
          console.log("Input event fired");
          this.throttledOnChange();
        });
        this.container.addEventListener("contextmenu", this.showContextMenu.bind(this));
      }
      loadMostRecentBlob() {
        let mostRecentBlob = null;
        let mostRecentDate = null;
        for (let i4 = 0; i4 < localStorage.length; i4++) {
          const key = localStorage.key(i4);
          const blobData = JSON.parse(localStorage.getItem(key));
          if (blobData && blobData.lastSaved) {
            const blobDate = new Date(blobData.lastSaved);
            if (!mostRecentDate || blobDate > mostRecentDate) {
              mostRecentBlob = blobData;
              mostRecentDate = blobDate;
            }
          }
        }
        if (mostRecentBlob) {
          this.loadBlob(mostRecentBlob);
          console.log("Loaded most recent Blob:", this.blob);
        } else {
          console.log("No Blobs found in localStorage.");
        }
      }
      throttle(func, limit) {
        let inThrottle;
        return function(...args) {
          if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
          }
        };
      }
      triggerInputEvent() {
        const event = new Event("input", { bubbles: true });
        this.container.dispatchEvent(event);
        this.applyEdits();
      }
      onChange() {
        this.applyEdits();
        this.saveEdits();
      }
      parseContentToHTML(content) {
        let html = "";
        content.forEach((item) => {
          if (item.type === "file") {
            html += this.renderFilePreview(item);
          } else {
            html += this.parseElementToHTML(item);
          }
        });
        return html;
      }
      renderFilePreview(file) {
        let previewHTML = "";
        if (file.mimeType.startsWith("image/")) {
          previewHTML = `<img src="${file.data}" style="width: 100%; height: 100%; object-fit: cover;" />`;
        } else if (file.mimeType.startsWith("video/")) {
          previewHTML = `<video src="${file.data}" controls style="width: 100%; height: 100%;"></video>`;
        } else if (file.mimeType.startsWith("audio/")) {
          previewHTML = `<audio src="${file.data}" controls style="width: 100%; height: 100%;"></audio>`;
        } else if (file.mimeType === "model/stl" || file.mimeType === "application/sla") {
          previewHTML = `<canvas width="150" height="150"></canvas>`;
        } else {
          previewHTML = `<div style="text-align: center; line-height: 150px;">Unsupported file type</div>`;
        }
        return `
            <div style="width: 150px; height: 150px; margin: 5px; display: inline-block; border: 1px solid #ccc;">
                ${previewHTML}
            </div>
        `;
      }
      parseElementToHTML(element) {
        let attrs = "";
        if (element.attributes) {
          attrs = Object.entries(element.attributes).map(([key, value]) => `${key}="${value}"`).join(" ");
        }
        let children = "";
        if (Array.isArray(element.children)) {
          children = element.children.map((child) => this.parseElementToHTML(child)).join("");
        } else {
          children = element.children || "";
        }
        return `<${element.type} ${attrs}>${children}</${element.type}>`;
      }
      applyEdits() {
        const content = this.parseHTMLToContent(this.container.innerHTML);
        this.blob.content = content;
      }
      saveEdits() {
        this.blob.lastSaved = (/* @__PURE__ */ new Date()).toISOString();
        localStorage.setItem(this.blob.id, JSON.stringify(this.blob));
        console.log("Saved Blob:", this.blob);
      }
      parseHTMLToContent(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        return this.parseNodeToContent(doc.body);
      }
      parseNodeToContent(node) {
        return Array.from(node.childNodes).map((child) => {
          if (child.nodeType === Node.TEXT_NODE) {
            return {
              type: "text",
              children: child.textContent
            };
          } else if (child.tagName.toLowerCase() === "img") {
            return {
              type: "file",
              name: "image",
              mimeType: "image/png",
              // Placeholder
              size: 0,
              // Placeholder
              data: child.src
            };
          } else if (child.tagName.toLowerCase() === "video") {
            return {
              type: "file",
              name: "video",
              mimeType: "video/mp4",
              // Placeholder
              size: 0,
              // Placeholder
              data: child.src
            };
          } else if (child.tagName.toLowerCase() === "audio") {
            return {
              type: "file",
              name: "audio",
              mimeType: "audio/mp3",
              // Placeholder
              size: 0,
              // Placeholder
              data: child.src
            };
          } else {
            return {
              type: child.tagName.toLowerCase(),
              attributes: Array.from(child.attributes).reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
              }, {}),
              children: this.parseNodeToContent(child)
            };
          }
        });
      }
      loadBlob(id) {
        const blobData = JSON.parse(localStorage.getItem(id));
        if (blobData) {
          this.blob = new Blob(blobData.id, blobData.type, blobData.title, blobData.content);
          this.titleInput.value = this.blob.title;
          this.container.innerHTML = this.parseContentToHTML(this.blob.content);
          console.log("Loaded Blob:", this.blob);
        }
      }
      showContextMenu(event) {
        event.preventDefault();
        const menu = document.createElement("div");
        menu.style.position = "absolute";
        menu.style.left = `${event.pageX}px`;
        menu.style.top = `${event.pageY}px`;
        menu.style.backgroundColor = "white";
        menu.style.border = "1px solid black";
        menu.style.padding = "5px";
        menu.innerHTML = `
            <button onclick="editor.applyFormatting('bold')">B</button>
            <button onclick="editor.applyFormatting('italic')">I</button>
            <button onclick="editor.applyFormatting('ul')">UL</button>
            <button onclick="editor.removeFormatting()">Remove Formatting</button>
        `;
        document.body.appendChild(menu);
        setTimeout(() => document.body.removeChild(menu), 2e3);
      }
      applyFormatting(format) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const newNode = document.createElement(format === "ul" ? "ul" : "span");
          newNode.style.fontWeight = format === "bold" ? "bold" : "normal";
          newNode.style.fontStyle = format === "italic" ? "italic" : "normal";
          if (format === "ul") {
            const li = document.createElement("li");
            li.appendChild(range.extractContents());
            newNode.appendChild(li);
          } else {
            newNode.appendChild(range.extractContents());
          }
          range.insertNode(newNode);
        }
        this.triggerInputEvent();
      }
      removeFormatting() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const text = range.extractContents().textContent;
          range.insertNode(document.createTextNode(text));
        }
        this.triggerInputEvent();
      }
    };
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

// src/components/shared/BlobEditor/BlobEditor.tsx
var BlobEditor, BlobEditor_default;
var init_BlobEditor = __esm({
  "src/components/shared/BlobEditor/BlobEditor.tsx"() {
    "use strict";
    init_preact_module();
    init_Blob();
    init_BlobMenu();
    init_Editor();
    init_hooks_module();
    init_esm_browser();
    init_jsxRuntime_module();
    BlobEditor = (props) => {
      y2(() => {
        console.log(`BE`);
        const initialBlob = new Blob(v4_default(), "blob", "Initial Title", [
          {
            type: "div",
            attributes: { class: "div-class" },
            children: "Some text"
          },
          {
            type: "ul",
            attributes: { class: "ul-class" },
            children: [
              {
                type: "li",
                attributes: { class: "li-class" },
                children: "some text"
              }
            ]
          }
        ]);
        const editor = new WYSIWYGEditor(document.getElementById("editor-container"), document.getElementById("title-container"));
        window.editor = editor;
      }, []);
      function onBlobChange(b2) {
        window.editor.loadBlob(b2);
      }
      return /* @__PURE__ */ u2(k, { children: [
        /* @__PURE__ */ u2(BlobMenu, { onBlobChange }),
        /* @__PURE__ */ u2("div", { id: "title-container" }),
        /* @__PURE__ */ u2("div", { id: "editor-container", children: "EDITOR" })
      ] });
    };
    BlobEditor_default = BlobEditor;
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
    init_BlobEditor();
    init_style5();
    init_jsxRuntime_module();
    OtherPage = (props) => {
      return /* @__PURE__ */ u2("div", { className: "page", id: "entry", children: /* @__PURE__ */ u2(BlobEditor_default, {}) });
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

// src/components/pages/Work/style.scss
var init_style7 = __esm({
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
    init_style7();
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
    init_Work();
    init_jsxRuntime_module();
    routes_default = {
      "/": (p3) => /* @__PURE__ */ u2(Home_default, {}),
      "/work": (p3) => /* @__PURE__ */ u2(Work_default, {}),
      "/play": (p3) => /* @__PURE__ */ u2(Play_default, {}),
      "/info": (p3) => /* @__PURE__ */ u2(Info_default, {}),
      "/other": (p3) => /* @__PURE__ */ u2(Other_default, {}),
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
    console.log(`R`, routes_default);
    module.exports = {
      DEFAUlT_ROUTE: "/roast",
      routes: routes_default
    };
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
      var EventBus = new EventBusClass();
      return EventBus;
    });
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
    if (!route) navigate(import_config.DEFAULT_ROUTE || location.pathname);
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
//# sourceMappingURL=index.js.map
