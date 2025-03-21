var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a3, b2) => (typeof require !== "undefined" ? require : a3)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
function doLog(namespace, args) {
  const logEvent = { namespace, args };
  logModules.forEach((m3) => m3.onLog(logEvent));
  console.log.apply(console, args);
}
var DISABLED_LOGGER, loggers, logModules, addLogModule, DEFAULT_LOG_COLOR, Colors, getLogger, log, warn, error, Logger, windowParams, isLogAllMode, logOnly;
var init_logging = __esm({
  "src/lib/utils/logging.ts"() {
    "use strict";
    init_preact_module();
    DISABLED_LOGGER = { log: () => {
    }, warn: () => {
    } };
    loggers = {};
    logModules = [];
    addLogModule = (m3) => logModules.push(m3);
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
    log = function(...args) {
      const namespace = args.length > 1 ? args[0] : "";
      args = args.length > 1 ? args.slice(1, args.length) : [];
      let l3 = getLogger(namespace);
      if (l3) {
        let la = [...args];
        if (!isLogAllMode && l3.enabled || isLogAllMode && (!logOnly || logOnly.includes(namespace))) {
          if (namespace) la.unshift(`${Colors[l3.color] || Colors[l3.black]}${namespace || "(no namespace)"}:${Colors["reset"]}`);
        }
        doLog(namespace, la);
      } else {
        doLog(namespace, ["Warning:", ...args]);
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
        doLog(namespace, la);
      } else {
        doLog(namespace, ["Warning:", ...args]);
      }
    };
    error = function(...args) {
      const namespace = args.length > 1 ? args[0] : "";
      args = args.length > 1 ? args.slice(1, args.length) : [];
      let l3 = getLogger(namespace);
      if (l3) {
        let la = [...args];
        if (namespace) la.unshift(`${Colors["red"]}${namespace || "(no namespace)"}:${Colors["reset"]} \u{1F6D1}`);
        doLog(namespace, la);
      } else {
        doLog(namespace, ["Error:", ...args]);
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
      var EventBus3 = new EventBusClass();
      return EventBus3;
    });
  }
});

// node_modules/safe-stringify/index.js
function safeStringifyReplacer(seen) {
  return function(key, value) {
    if (typeof value?.toJSON === "function") {
      value = value.toJSON();
    }
    if (!(value !== null && typeof value === "object")) {
      return value;
    }
    if (seen.has(value)) {
      return "[Circular]";
    }
    seen.add(value);
    const newValue = Array.isArray(value) ? [] : {};
    for (const [key2, value2] of Object.entries(value)) {
      newValue[key2] = safeStringifyReplacer(seen)(key2, value2);
    }
    seen.delete(value);
    return newValue;
  };
}
function safeStringify(object, { indentation } = {}) {
  const seen = /* @__PURE__ */ new WeakSet();
  return JSON.stringify(object, safeStringifyReplacer(seen), indentation);
}
var init_safe_stringify = __esm({
  "node_modules/safe-stringify/index.js"() {
    "use strict";
    init_preact_module();
  }
});

// src/components/shared/BlobEditor/lib/utils/domUtils.ts
function makeResizable(container, options = {}) {
  container.querySelectorAll(".resize-handle").forEach((handle) => handle.remove());
  const {
    handles = ["right", "bottom", "bottom-right"],
    maxWidth = Infinity,
    maxHeight = Infinity,
    minWidth = 100,
    minHeight = 100,
    onResize = () => {
    }
  } = options;
  let resizing = false;
  let resizeDirection = null;
  let startX = 0, startY = 0;
  let startWidth = 0, startHeight = 0;
  function createHandle(position) {
    const handle = document.createElement("div");
    handle.classList.add("resize-handle", `resize-${position}`);
    handle.addEventListener("mousedown", (e4) => startResizing(e4, position));
    container.appendChild(handle);
  }
  function startResizing(event, direction) {
    resizing = true;
    resizeDirection = direction;
    startX = event.clientX;
    startY = event.clientY;
    startWidth = container.offsetWidth;
    startHeight = container.offsetHeight;
    event.preventDefault();
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResizing);
  }
  function resize(event) {
    if (!resizing || !resizeDirection) return;
    let newWidth = startWidth;
    let newHeight = startHeight;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (resizeDirection.includes("right")) {
      newWidth = Math.min(Math.max(startWidth + deltaX, minWidth), maxWidth);
    }
    if (resizeDirection.includes("left")) {
      newWidth = Math.min(Math.max(startWidth - deltaX, minWidth), maxWidth);
    }
    if (resizeDirection.includes("bottom")) {
      newHeight = Math.min(Math.max(startHeight + deltaY, minHeight), maxHeight);
    }
    if (resizeDirection.includes("top")) {
      newHeight = Math.min(Math.max(startHeight - deltaY, minHeight), maxHeight);
    }
    container.style.width = `${newWidth}px`;
    container.style.height = `${newHeight}px`;
    onResize(newWidth, newHeight);
  }
  function stopResizing() {
    resizing = false;
    resizeDirection = null;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResizing);
  }
  handles.forEach((handle) => createHandle(handle));
}
function getWindowSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return { width, height };
}
var init_domUtils = __esm({
  "src/components/shared/BlobEditor/lib/utils/domUtils.ts"() {
    "use strict";
    init_preact_module();
  }
});

// node_modules/jsondiffpatch/lib/processor.js
var Processor, processor_default;
var init_processor = __esm({
  "node_modules/jsondiffpatch/lib/processor.js"() {
    "use strict";
    init_preact_module();
    Processor = class {
      constructor(options) {
        this.selfOptions = options || {};
        this.pipes = {};
      }
      options(options) {
        if (options) {
          this.selfOptions = options;
        }
        return this.selfOptions;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pipe(name, pipeArg) {
        let pipe = pipeArg;
        if (typeof name === "string") {
          if (typeof pipe === "undefined") {
            return this.pipes[name];
          } else {
            this.pipes[name] = pipe;
          }
        }
        if (name && name.name) {
          pipe = name;
          if (pipe.processor === this) {
            return pipe;
          }
          this.pipes[pipe.name] = pipe;
        }
        pipe.processor = this;
        return pipe;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      process(input, pipe) {
        let context = input;
        context.options = this.options();
        let nextPipe = pipe || input.pipe || "default";
        let lastPipe;
        while (nextPipe) {
          if (typeof context.nextAfterChildren !== "undefined") {
            context.next = context.nextAfterChildren;
            context.nextAfterChildren = null;
          }
          if (typeof nextPipe === "string") {
            nextPipe = this.pipe(nextPipe);
          }
          nextPipe.process(context);
          lastPipe = nextPipe;
          nextPipe = null;
          if (context) {
            if (context.next) {
              context = context.next;
              nextPipe = context.pipe || lastPipe;
            }
          }
        }
        return context.hasResult ? context.result : void 0;
      }
    };
    processor_default = Processor;
  }
});

// node_modules/jsondiffpatch/lib/pipe.js
var Pipe, pipe_default;
var init_pipe = __esm({
  "node_modules/jsondiffpatch/lib/pipe.js"() {
    "use strict";
    init_preact_module();
    Pipe = class {
      constructor(name) {
        this.name = name;
        this.filters = [];
      }
      process(input) {
        if (!this.processor) {
          throw new Error("add this pipe to a processor before using it");
        }
        const debug = this.debug;
        const length = this.filters.length;
        const context = input;
        for (let index = 0; index < length; index++) {
          const filter = this.filters[index];
          if (debug) {
            this.log(`filter: ${filter.filterName}`);
          }
          filter(context);
          if (typeof context === "object" && context.exiting) {
            context.exiting = false;
            break;
          }
        }
        if (!context.next && this.resultCheck) {
          this.resultCheck(context);
        }
      }
      log(msg) {
        console.log(`[jsondiffpatch] ${this.name} pipe, ${msg}`);
      }
      append(...args) {
        this.filters.push(...args);
        return this;
      }
      prepend(...args) {
        this.filters.unshift(...args);
        return this;
      }
      indexOf(filterName) {
        if (!filterName) {
          throw new Error("a filter name is required");
        }
        for (let index = 0; index < this.filters.length; index++) {
          const filter = this.filters[index];
          if (filter.filterName === filterName) {
            return index;
          }
        }
        throw new Error(`filter not found: ${filterName}`);
      }
      list() {
        return this.filters.map((f4) => f4.filterName);
      }
      after(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index + 1, 0, ...params);
        return this;
      }
      before(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 0, ...params);
        return this;
      }
      replace(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 1, ...params);
        return this;
      }
      remove(filterName) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 1);
        return this;
      }
      clear() {
        this.filters.length = 0;
        return this;
      }
      shouldHaveResult(should) {
        if (should === false) {
          this.resultCheck = null;
          return;
        }
        if (this.resultCheck) {
          return;
        }
        this.resultCheck = (context) => {
          if (!context.hasResult) {
            console.log(context);
            const error5 = new Error(`${this.name} failed`);
            error5.noResult = true;
            throw error5;
          }
        };
        return this;
      }
    };
    pipe_default = Pipe;
  }
});

// node_modules/jsondiffpatch/lib/contexts/context.js
var Context;
var init_context = __esm({
  "node_modules/jsondiffpatch/lib/contexts/context.js"() {
    "use strict";
    init_preact_module();
    Context = class {
      setResult(result) {
        this.result = result;
        this.hasResult = true;
        return this;
      }
      exit() {
        this.exiting = true;
        return this;
      }
      push(child, name) {
        child.parent = this;
        if (typeof name !== "undefined") {
          child.childName = name;
        }
        child.root = this.root || this;
        child.options = child.options || this.options;
        if (!this.children) {
          this.children = [child];
          this.nextAfterChildren = this.next || null;
          this.next = child;
        } else {
          this.children[this.children.length - 1].next = child;
          this.children.push(child);
        }
        child.next = this;
        return this;
      }
    };
  }
});

// node_modules/jsondiffpatch/lib/clone.js
function cloneRegExp(re) {
  const regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString());
  return new RegExp(regexMatch[1], regexMatch[2]);
}
function clone(arg) {
  if (typeof arg !== "object") {
    return arg;
  }
  if (arg === null) {
    return null;
  }
  if (Array.isArray(arg)) {
    return arg.map(clone);
  }
  if (arg instanceof Date) {
    return new Date(arg.getTime());
  }
  if (arg instanceof RegExp) {
    return cloneRegExp(arg);
  }
  const cloned = {};
  for (const name in arg) {
    if (Object.prototype.hasOwnProperty.call(arg, name)) {
      cloned[name] = clone(arg[name]);
    }
  }
  return cloned;
}
var init_clone = __esm({
  "node_modules/jsondiffpatch/lib/clone.js"() {
    "use strict";
    init_preact_module();
  }
});

// node_modules/jsondiffpatch/lib/contexts/diff.js
var DiffContext, diff_default;
var init_diff = __esm({
  "node_modules/jsondiffpatch/lib/contexts/diff.js"() {
    "use strict";
    init_preact_module();
    init_context();
    init_clone();
    DiffContext = class extends Context {
      constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
        this.pipe = "diff";
      }
      setResult(result) {
        if (this.options.cloneDiffValues && typeof result === "object") {
          const clone2 = typeof this.options.cloneDiffValues === "function" ? this.options.cloneDiffValues : clone;
          if (typeof result[0] === "object") {
            result[0] = clone2(result[0]);
          }
          if (typeof result[1] === "object") {
            result[1] = clone2(result[1]);
          }
        }
        return super.setResult(result);
      }
    };
    diff_default = DiffContext;
  }
});

// node_modules/jsondiffpatch/lib/contexts/patch.js
var PatchContext, patch_default;
var init_patch = __esm({
  "node_modules/jsondiffpatch/lib/contexts/patch.js"() {
    "use strict";
    init_preact_module();
    init_context();
    PatchContext = class extends Context {
      constructor(left, delta) {
        super();
        this.left = left;
        this.delta = delta;
        this.pipe = "patch";
      }
    };
    patch_default = PatchContext;
  }
});

// node_modules/jsondiffpatch/lib/contexts/reverse.js
var ReverseContext, reverse_default;
var init_reverse = __esm({
  "node_modules/jsondiffpatch/lib/contexts/reverse.js"() {
    "use strict";
    init_preact_module();
    init_context();
    ReverseContext = class extends Context {
      constructor(delta) {
        super();
        this.delta = delta;
        this.pipe = "reverse";
      }
    };
    reverse_default = ReverseContext;
  }
});

// node_modules/jsondiffpatch/lib/filters/trivial.js
var diffFilter, patchFilter, reverseFilter;
var init_trivial = __esm({
  "node_modules/jsondiffpatch/lib/filters/trivial.js"() {
    "use strict";
    init_preact_module();
    diffFilter = function trivialMatchesDiffFilter(context) {
      if (context.left === context.right) {
        context.setResult(void 0).exit();
        return;
      }
      if (typeof context.left === "undefined") {
        if (typeof context.right === "function") {
          throw new Error("functions are not supported");
        }
        context.setResult([context.right]).exit();
        return;
      }
      if (typeof context.right === "undefined") {
        context.setResult([context.left, 0, 0]).exit();
        return;
      }
      if (typeof context.left === "function" || typeof context.right === "function") {
        throw new Error("functions are not supported");
      }
      context.leftType = context.left === null ? "null" : typeof context.left;
      context.rightType = context.right === null ? "null" : typeof context.right;
      if (context.leftType !== context.rightType) {
        context.setResult([context.left, context.right]).exit();
        return;
      }
      if (context.leftType === "boolean" || context.leftType === "number") {
        context.setResult([context.left, context.right]).exit();
        return;
      }
      if (context.leftType === "object") {
        context.leftIsArray = Array.isArray(context.left);
      }
      if (context.rightType === "object") {
        context.rightIsArray = Array.isArray(context.right);
      }
      if (context.leftIsArray !== context.rightIsArray) {
        context.setResult([context.left, context.right]).exit();
        return;
      }
      if (context.left instanceof RegExp) {
        if (context.right instanceof RegExp) {
          context.setResult([context.left.toString(), context.right.toString()]).exit();
        } else {
          context.setResult([context.left, context.right]).exit();
        }
      }
    };
    diffFilter.filterName = "trivial";
    patchFilter = function trivialMatchesPatchFilter(context) {
      if (typeof context.delta === "undefined") {
        context.setResult(context.left).exit();
        return;
      }
      context.nested = !Array.isArray(context.delta);
      if (context.nested) {
        return;
      }
      const nonNestedDelta = context.delta;
      if (nonNestedDelta.length === 1) {
        context.setResult(nonNestedDelta[0]).exit();
        return;
      }
      if (nonNestedDelta.length === 2) {
        if (context.left instanceof RegExp) {
          const regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(nonNestedDelta[1]);
          if (regexArgs) {
            context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
            return;
          }
        }
        context.setResult(nonNestedDelta[1]).exit();
        return;
      }
      if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
        context.setResult(void 0).exit();
      }
    };
    patchFilter.filterName = "trivial";
    reverseFilter = function trivialReferseFilter(context) {
      if (typeof context.delta === "undefined") {
        context.setResult(context.delta).exit();
        return;
      }
      context.nested = !Array.isArray(context.delta);
      if (context.nested) {
        return;
      }
      const nonNestedDelta = context.delta;
      if (nonNestedDelta.length === 1) {
        context.setResult([nonNestedDelta[0], 0, 0]).exit();
        return;
      }
      if (nonNestedDelta.length === 2) {
        context.setResult([nonNestedDelta[1], nonNestedDelta[0]]).exit();
        return;
      }
      if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
        context.setResult([nonNestedDelta[0]]).exit();
      }
    };
    reverseFilter.filterName = "trivial";
  }
});

// node_modules/jsondiffpatch/lib/filters/nested.js
var collectChildrenDiffFilter, objectsDiffFilter, patchFilter2, collectChildrenPatchFilter, reverseFilter2, collectChildrenReverseFilter;
var init_nested = __esm({
  "node_modules/jsondiffpatch/lib/filters/nested.js"() {
    "use strict";
    init_preact_module();
    init_diff();
    init_patch();
    init_reverse();
    collectChildrenDiffFilter = (context) => {
      if (!context || !context.children) {
        return;
      }
      const length = context.children.length;
      let child;
      let result = context.result;
      for (let index = 0; index < length; index++) {
        child = context.children[index];
        if (typeof child.result === "undefined") {
          continue;
        }
        result = result || {};
        result[child.childName] = child.result;
      }
      if (result && context.leftIsArray) {
        result._t = "a";
      }
      context.setResult(result).exit();
    };
    collectChildrenDiffFilter.filterName = "collectChildren";
    objectsDiffFilter = (context) => {
      if (context.leftIsArray || context.leftType !== "object") {
        return;
      }
      const left = context.left;
      const right = context.right;
      let name;
      let child;
      const propertyFilter = context.options.propertyFilter;
      for (name in left) {
        if (!Object.prototype.hasOwnProperty.call(left, name)) {
          continue;
        }
        if (propertyFilter && !propertyFilter(name, context)) {
          continue;
        }
        child = new diff_default(left[name], right[name]);
        context.push(child, name);
      }
      for (name in right) {
        if (!Object.prototype.hasOwnProperty.call(right, name)) {
          continue;
        }
        if (propertyFilter && !propertyFilter(name, context)) {
          continue;
        }
        if (typeof left[name] === "undefined") {
          child = new diff_default(void 0, right[name]);
          context.push(child, name);
        }
      }
      if (!context.children || context.children.length === 0) {
        context.setResult(void 0).exit();
        return;
      }
      context.exit();
    };
    objectsDiffFilter.filterName = "objects";
    patchFilter2 = function nestedPatchFilter(context) {
      if (!context.nested) {
        return;
      }
      const nestedDelta = context.delta;
      if (nestedDelta._t) {
        return;
      }
      const objectDelta = nestedDelta;
      let name;
      let child;
      for (name in objectDelta) {
        child = new patch_default(context.left[name], objectDelta[name]);
        context.push(child, name);
      }
      context.exit();
    };
    patchFilter2.filterName = "objects";
    collectChildrenPatchFilter = function collectChildrenPatchFilter2(context) {
      if (!context || !context.children) {
        return;
      }
      const deltaWithChildren = context.delta;
      if (deltaWithChildren._t) {
        return;
      }
      const object = context.left;
      const length = context.children.length;
      let child;
      for (let index = 0; index < length; index++) {
        child = context.children[index];
        const property = child.childName;
        if (Object.prototype.hasOwnProperty.call(context.left, property) && child.result === void 0) {
          delete object[property];
        } else if (object[property] !== child.result) {
          object[property] = child.result;
        }
      }
      context.setResult(object).exit();
    };
    collectChildrenPatchFilter.filterName = "collectChildren";
    reverseFilter2 = function nestedReverseFilter(context) {
      if (!context.nested) {
        return;
      }
      const nestedDelta = context.delta;
      if (nestedDelta._t) {
        return;
      }
      const objectDelta = context.delta;
      let name;
      let child;
      for (name in objectDelta) {
        child = new reverse_default(objectDelta[name]);
        context.push(child, name);
      }
      context.exit();
    };
    reverseFilter2.filterName = "objects";
    collectChildrenReverseFilter = (context) => {
      if (!context || !context.children) {
        return;
      }
      const deltaWithChildren = context.delta;
      if (deltaWithChildren._t) {
        return;
      }
      const length = context.children.length;
      let child;
      const delta = {};
      for (let index = 0; index < length; index++) {
        child = context.children[index];
        const property = child.childName;
        if (delta[property] !== child.result) {
          delta[property] = child.result;
        }
      }
      context.setResult(delta).exit();
    };
    collectChildrenReverseFilter.filterName = "collectChildren";
  }
});

// node_modules/jsondiffpatch/lib/filters/lcs.js
var defaultMatch, lengthMatrix, backtrack, get, lcs_default;
var init_lcs = __esm({
  "node_modules/jsondiffpatch/lib/filters/lcs.js"() {
    "use strict";
    init_preact_module();
    defaultMatch = function(array1, array2, index1, index2) {
      return array1[index1] === array2[index2];
    };
    lengthMatrix = function(array1, array2, match, context) {
      const len1 = array1.length;
      const len2 = array2.length;
      let x2, y3;
      const matrix = new Array(len1 + 1);
      for (x2 = 0; x2 < len1 + 1; x2++) {
        matrix[x2] = new Array(len2 + 1);
        for (y3 = 0; y3 < len2 + 1; y3++) {
          matrix[x2][y3] = 0;
        }
      }
      matrix.match = match;
      for (x2 = 1; x2 < len1 + 1; x2++) {
        for (y3 = 1; y3 < len2 + 1; y3++) {
          if (match(array1, array2, x2 - 1, y3 - 1, context)) {
            matrix[x2][y3] = matrix[x2 - 1][y3 - 1] + 1;
          } else {
            matrix[x2][y3] = Math.max(matrix[x2 - 1][y3], matrix[x2][y3 - 1]);
          }
        }
      }
      return matrix;
    };
    backtrack = function(matrix, array1, array2, context) {
      let index1 = array1.length;
      let index2 = array2.length;
      const subsequence = {
        sequence: [],
        indices1: [],
        indices2: []
      };
      while (index1 !== 0 && index2 !== 0) {
        const sameLetter = matrix.match(array1, array2, index1 - 1, index2 - 1, context);
        if (sameLetter) {
          subsequence.sequence.unshift(array1[index1 - 1]);
          subsequence.indices1.unshift(index1 - 1);
          subsequence.indices2.unshift(index2 - 1);
          --index1;
          --index2;
        } else {
          const valueAtMatrixAbove = matrix[index1][index2 - 1];
          const valueAtMatrixLeft = matrix[index1 - 1][index2];
          if (valueAtMatrixAbove > valueAtMatrixLeft) {
            --index2;
          } else {
            --index1;
          }
        }
      }
      return subsequence;
    };
    get = function(array1, array2, match, context) {
      const innerContext = context || {};
      const matrix = lengthMatrix(array1, array2, match || defaultMatch, innerContext);
      return backtrack(matrix, array1, array2, innerContext);
    };
    lcs_default = {
      get
    };
  }
});

// node_modules/jsondiffpatch/lib/filters/arrays.js
function arraysHaveMatchByRef(array1, array2, len1, len2) {
  for (let index1 = 0; index1 < len1; index1++) {
    const val1 = array1[index1];
    for (let index2 = 0; index2 < len2; index2++) {
      const val2 = array2[index2];
      if (index1 !== index2 && val1 === val2) {
        return true;
      }
    }
  }
}
function matchItems(array1, array2, index1, index2, context) {
  const value1 = array1[index1];
  const value2 = array2[index2];
  if (value1 === value2) {
    return true;
  }
  if (typeof value1 !== "object" || typeof value2 !== "object") {
    return false;
  }
  const objectHash = context.objectHash;
  if (!objectHash) {
    return context.matchByPosition && index1 === index2;
  }
  context.hashCache1 = context.hashCache1 || [];
  let hash1 = context.hashCache1[index1];
  if (typeof hash1 === "undefined") {
    context.hashCache1[index1] = hash1 = objectHash(value1, index1);
  }
  if (typeof hash1 === "undefined") {
    return false;
  }
  context.hashCache2 = context.hashCache2 || [];
  let hash2 = context.hashCache2[index2];
  if (typeof hash2 === "undefined") {
    context.hashCache2[index2] = hash2 = objectHash(value2, index2);
  }
  if (typeof hash2 === "undefined") {
    return false;
  }
  return hash1 === hash2;
}
var ARRAY_MOVE, diffFilter2, compare, patchFilter3, collectChildrenPatchFilter3, reverseFilter3, reverseArrayDeltaIndex, collectChildrenReverseFilter2;
var init_arrays = __esm({
  "node_modules/jsondiffpatch/lib/filters/arrays.js"() {
    "use strict";
    init_preact_module();
    init_diff();
    init_patch();
    init_reverse();
    init_lcs();
    ARRAY_MOVE = 3;
    diffFilter2 = function arraysDiffFilter(context) {
      if (!context.leftIsArray) {
        return;
      }
      const matchContext = {
        objectHash: context.options && context.options.objectHash,
        matchByPosition: context.options && context.options.matchByPosition
      };
      let commonHead = 0;
      let commonTail = 0;
      let index;
      let index1;
      let index2;
      const array1 = context.left;
      const array2 = context.right;
      const len1 = array1.length;
      const len2 = array2.length;
      let child;
      if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== "boolean") {
        matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
      }
      while (commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)) {
        index = commonHead;
        child = new diff_default(array1[index], array2[index]);
        context.push(child, index);
        commonHead++;
      }
      while (commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)) {
        index1 = len1 - 1 - commonTail;
        index2 = len2 - 1 - commonTail;
        child = new diff_default(array1[index1], array2[index2]);
        context.push(child, index2);
        commonTail++;
      }
      let result;
      if (commonHead + commonTail === len1) {
        if (len1 === len2) {
          context.setResult(void 0).exit();
          return;
        }
        result = result || {
          _t: "a"
        };
        for (index = commonHead; index < len2 - commonTail; index++) {
          result[index] = [array2[index]];
        }
        context.setResult(result).exit();
        return;
      }
      if (commonHead + commonTail === len2) {
        result = result || {
          _t: "a"
        };
        for (index = commonHead; index < len1 - commonTail; index++) {
          result[`_${index}`] = [array1[index], 0, 0];
        }
        context.setResult(result).exit();
        return;
      }
      delete matchContext.hashCache1;
      delete matchContext.hashCache2;
      const trimmed1 = array1.slice(commonHead, len1 - commonTail);
      const trimmed2 = array2.slice(commonHead, len2 - commonTail);
      const seq = lcs_default.get(trimmed1, trimmed2, matchItems, matchContext);
      const removedItems = [];
      result = result || {
        _t: "a"
      };
      for (index = commonHead; index < len1 - commonTail; index++) {
        if (seq.indices1.indexOf(index - commonHead) < 0) {
          result[`_${index}`] = [array1[index], 0, 0];
          removedItems.push(index);
        }
      }
      let detectMove = true;
      if (context.options && context.options.arrays && context.options.arrays.detectMove === false) {
        detectMove = false;
      }
      let includeValueOnMove = false;
      if (context.options && context.options.arrays && context.options.arrays.includeValueOnMove) {
        includeValueOnMove = true;
      }
      const removedItemsLength = removedItems.length;
      for (index = commonHead; index < len2 - commonTail; index++) {
        const indexOnArray2 = seq.indices2.indexOf(index - commonHead);
        if (indexOnArray2 < 0) {
          let isMove = false;
          if (detectMove && removedItemsLength > 0) {
            for (let removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++) {
              index1 = removedItems[removeItemIndex1];
              if (matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
                result[`_${index1}`].splice(1, 2, index, ARRAY_MOVE);
                if (!includeValueOnMove) {
                  result[`_${index1}`][0] = "";
                }
                index2 = index;
                child = new diff_default(array1[index1], array2[index2]);
                context.push(child, index2);
                removedItems.splice(removeItemIndex1, 1);
                isMove = true;
                break;
              }
            }
          }
          if (!isMove) {
            result[index] = [array2[index]];
          }
        } else {
          index1 = seq.indices1[indexOnArray2] + commonHead;
          index2 = seq.indices2[indexOnArray2] + commonHead;
          child = new diff_default(array1[index1], array2[index2]);
          context.push(child, index2);
        }
      }
      context.setResult(result).exit();
    };
    diffFilter2.filterName = "arrays";
    compare = {
      numerically(a3, b2) {
        return a3 - b2;
      },
      numericallyBy(name) {
        return (a3, b2) => a3[name] - b2[name];
      }
    };
    patchFilter3 = function nestedPatchFilter2(context) {
      if (!context.nested) {
        return;
      }
      const nestedDelta = context.delta;
      if (nestedDelta._t !== "a") {
        return;
      }
      let index;
      let index1;
      const delta = nestedDelta;
      const array = context.left;
      let toRemove = [];
      let toInsert = [];
      const toModify = [];
      for (index in delta) {
        if (index !== "_t") {
          if (index[0] === "_") {
            const removedOrMovedIndex = index;
            if (delta[removedOrMovedIndex][2] === 0 || delta[removedOrMovedIndex][2] === ARRAY_MOVE) {
              toRemove.push(parseInt(index.slice(1), 10));
            } else {
              throw new Error(`only removal or move can be applied at original array indices, invalid diff type: ${delta[removedOrMovedIndex][2]}`);
            }
          } else {
            const numberIndex = index;
            if (delta[numberIndex].length === 1) {
              toInsert.push({
                index: parseInt(numberIndex, 10),
                value: delta[numberIndex][0]
              });
            } else {
              toModify.push({
                index: parseInt(numberIndex, 10),
                delta: delta[numberIndex]
              });
            }
          }
        }
      }
      toRemove = toRemove.sort(compare.numerically);
      for (index = toRemove.length - 1; index >= 0; index--) {
        index1 = toRemove[index];
        const indexDiff = delta[`_${index1}`];
        const removedValue = array.splice(index1, 1)[0];
        if (indexDiff[2] === ARRAY_MOVE) {
          toInsert.push({
            index: indexDiff[1],
            value: removedValue
          });
        }
      }
      toInsert = toInsert.sort(compare.numericallyBy("index"));
      const toInsertLength = toInsert.length;
      for (index = 0; index < toInsertLength; index++) {
        const insertion = toInsert[index];
        array.splice(insertion.index, 0, insertion.value);
      }
      const toModifyLength = toModify.length;
      let child;
      if (toModifyLength > 0) {
        for (index = 0; index < toModifyLength; index++) {
          const modification = toModify[index];
          child = new patch_default(array[modification.index], modification.delta);
          context.push(child, modification.index);
        }
      }
      if (!context.children) {
        context.setResult(array).exit();
        return;
      }
      context.exit();
    };
    patchFilter3.filterName = "arrays";
    collectChildrenPatchFilter3 = function collectChildrenPatchFilter4(context) {
      if (!context || !context.children) {
        return;
      }
      const deltaWithChildren = context.delta;
      if (deltaWithChildren._t !== "a") {
        return;
      }
      const array = context.left;
      const length = context.children.length;
      let child;
      for (let index = 0; index < length; index++) {
        child = context.children[index];
        const arrayIndex = child.childName;
        array[arrayIndex] = child.result;
      }
      context.setResult(array).exit();
    };
    collectChildrenPatchFilter3.filterName = "arraysCollectChildren";
    reverseFilter3 = function arraysReverseFilter(context) {
      if (!context.nested) {
        const nonNestedDelta = context.delta;
        if (nonNestedDelta[2] === ARRAY_MOVE) {
          const arrayMoveDelta = nonNestedDelta;
          context.newName = `_${arrayMoveDelta[1]}`;
          context.setResult([
            arrayMoveDelta[0],
            parseInt(context.childName.substring(1), 10),
            ARRAY_MOVE
          ]).exit();
        }
        return;
      }
      const nestedDelta = context.delta;
      if (nestedDelta._t !== "a") {
        return;
      }
      const arrayDelta = nestedDelta;
      let name;
      let child;
      for (name in arrayDelta) {
        if (name === "_t") {
          continue;
        }
        child = new reverse_default(arrayDelta[name]);
        context.push(child, name);
      }
      context.exit();
    };
    reverseFilter3.filterName = "arrays";
    reverseArrayDeltaIndex = (delta, index, itemDelta) => {
      if (typeof index === "string" && index[0] === "_") {
        return parseInt(index.substring(1), 10);
      } else if (Array.isArray(itemDelta) && itemDelta[2] === 0) {
        return `_${index}`;
      }
      let reverseIndex = +index;
      for (const deltaIndex in delta) {
        const deltaItem = delta[deltaIndex];
        if (Array.isArray(deltaItem)) {
          if (deltaItem[2] === ARRAY_MOVE) {
            const moveFromIndex = parseInt(deltaIndex.substring(1), 10);
            const moveToIndex = deltaItem[1];
            if (moveToIndex === +index) {
              return moveFromIndex;
            }
            if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
              reverseIndex++;
            } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
              reverseIndex--;
            }
          } else if (deltaItem[2] === 0) {
            const deleteIndex = parseInt(deltaIndex.substring(1), 10);
            if (deleteIndex <= reverseIndex) {
              reverseIndex++;
            }
          } else if (deltaItem.length === 1 && parseInt(deltaIndex, 10) <= reverseIndex) {
            reverseIndex--;
          }
        }
      }
      return reverseIndex;
    };
    collectChildrenReverseFilter2 = (context) => {
      if (!context || !context.children) {
        return;
      }
      const deltaWithChildren = context.delta;
      if (deltaWithChildren._t !== "a") {
        return;
      }
      const arrayDelta = deltaWithChildren;
      const length = context.children.length;
      let child;
      const delta = {
        _t: "a"
      };
      for (let index = 0; index < length; index++) {
        child = context.children[index];
        let name = child.newName;
        if (typeof name === "undefined") {
          name = reverseArrayDeltaIndex(arrayDelta, child.childName, child.result);
        }
        if (delta[name] !== child.result) {
          delta[name] = child.result;
        }
      }
      context.setResult(delta).exit();
    };
    collectChildrenReverseFilter2.filterName = "arraysCollectChildren";
  }
});

// node_modules/jsondiffpatch/lib/filters/dates.js
var diffFilter3;
var init_dates = __esm({
  "node_modules/jsondiffpatch/lib/filters/dates.js"() {
    "use strict";
    init_preact_module();
    diffFilter3 = function datesDiffFilter(context) {
      if (context.left instanceof Date) {
        if (context.right instanceof Date) {
          if (context.left.getTime() !== context.right.getTime()) {
            context.setResult([context.left, context.right]);
          } else {
            context.setResult(void 0);
          }
        } else {
          context.setResult([context.left, context.right]);
        }
        context.exit();
      } else if (context.right instanceof Date) {
        context.setResult([context.left, context.right]).exit();
      }
    };
    diffFilter3.filterName = "dates";
  }
});

// node_modules/jsondiffpatch/lib/filters/texts.js
function getDiffMatchPatch(options, required) {
  var _a;
  if (!cachedDiffPatch) {
    let instance;
    if ((_a = options === null || options === void 0 ? void 0 : options.textDiff) === null || _a === void 0 ? void 0 : _a.diffMatchPatch) {
      instance = new options.textDiff.diffMatchPatch();
    } else {
      if (!required) {
        return null;
      }
      const error5 = new Error("The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point.");
      error5.diff_match_patch_not_found = true;
      throw error5;
    }
    cachedDiffPatch = {
      diff: function(txt1, txt2) {
        return instance.patch_toText(instance.patch_make(txt1, txt2));
      },
      patch: function(txt1, patch2) {
        const results = instance.patch_apply(instance.patch_fromText(patch2), txt1);
        for (let i4 = 0; i4 < results[1].length; i4++) {
          if (!results[1][i4]) {
            const error5 = new Error("text patch failed");
            error5.textPatchFailed = true;
          }
        }
        return results[0];
      }
    };
  }
  return cachedDiffPatch;
}
var TEXT_DIFF, DEFAULT_MIN_LENGTH, cachedDiffPatch, diffFilter4, patchFilter4, textDeltaReverse, reverseFilter4;
var init_texts = __esm({
  "node_modules/jsondiffpatch/lib/filters/texts.js"() {
    "use strict";
    init_preact_module();
    TEXT_DIFF = 2;
    DEFAULT_MIN_LENGTH = 60;
    cachedDiffPatch = null;
    diffFilter4 = function textsDiffFilter(context) {
      if (context.leftType !== "string") {
        return;
      }
      const left = context.left;
      const right = context.right;
      const minLength = context.options && context.options.textDiff && context.options.textDiff.minLength || DEFAULT_MIN_LENGTH;
      if (left.length < minLength || right.length < minLength) {
        context.setResult([left, right]).exit();
        return;
      }
      const diffMatchPatch = getDiffMatchPatch(context.options);
      if (!diffMatchPatch) {
        context.setResult([left, right]).exit();
        return;
      }
      const diff2 = diffMatchPatch.diff;
      context.setResult([diff2(left, right), 0, TEXT_DIFF]).exit();
    };
    diffFilter4.filterName = "texts";
    patchFilter4 = function textsPatchFilter(context) {
      if (context.nested) {
        return;
      }
      const nonNestedDelta = context.delta;
      if (nonNestedDelta[2] !== TEXT_DIFF) {
        return;
      }
      const textDiffDelta = nonNestedDelta;
      const patch2 = getDiffMatchPatch(context.options, true).patch;
      context.setResult(patch2(context.left, textDiffDelta[0])).exit();
    };
    patchFilter4.filterName = "texts";
    textDeltaReverse = function(delta) {
      let i4;
      let l3;
      let line;
      let lineTmp;
      let header = null;
      const headerRegex = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
      let lineHeader;
      const lines = delta.split("\n");
      for (i4 = 0, l3 = lines.length; i4 < l3; i4++) {
        line = lines[i4];
        const lineStart = line.slice(0, 1);
        if (lineStart === "@") {
          header = headerRegex.exec(line);
          lineHeader = i4;
          lines[lineHeader] = "@@ -" + header[3] + "," + header[4] + " +" + header[1] + "," + header[2] + " @@";
        } else if (lineStart === "+") {
          lines[i4] = "-" + lines[i4].slice(1);
          if (lines[i4 - 1].slice(0, 1) === "+") {
            lineTmp = lines[i4];
            lines[i4] = lines[i4 - 1];
            lines[i4 - 1] = lineTmp;
          }
        } else if (lineStart === "-") {
          lines[i4] = "+" + lines[i4].slice(1);
        }
      }
      return lines.join("\n");
    };
    reverseFilter4 = function textsReverseFilter(context) {
      if (context.nested) {
        return;
      }
      const nonNestedDelta = context.delta;
      if (nonNestedDelta[2] !== TEXT_DIFF) {
        return;
      }
      const textDiffDelta = nonNestedDelta;
      context.setResult([textDeltaReverse(textDiffDelta[0]), 0, TEXT_DIFF]).exit();
    };
    reverseFilter4.filterName = "texts";
  }
});

// node_modules/jsondiffpatch/lib/diffpatcher.js
var DiffPatcher, diffpatcher_default;
var init_diffpatcher = __esm({
  "node_modules/jsondiffpatch/lib/diffpatcher.js"() {
    "use strict";
    init_preact_module();
    init_processor();
    init_pipe();
    init_diff();
    init_patch();
    init_reverse();
    init_clone();
    init_trivial();
    init_nested();
    init_arrays();
    init_dates();
    init_texts();
    DiffPatcher = class {
      constructor(options) {
        this.processor = new processor_default(options);
        this.processor.pipe(new pipe_default("diff").append(collectChildrenDiffFilter, diffFilter, diffFilter3, diffFilter4, objectsDiffFilter, diffFilter2).shouldHaveResult());
        this.processor.pipe(new pipe_default("patch").append(collectChildrenPatchFilter, collectChildrenPatchFilter3, patchFilter, patchFilter4, patchFilter2, patchFilter3).shouldHaveResult());
        this.processor.pipe(new pipe_default("reverse").append(collectChildrenReverseFilter, collectChildrenReverseFilter2, reverseFilter, reverseFilter4, reverseFilter2, reverseFilter3).shouldHaveResult());
      }
      options(options) {
        return this.processor.options(options);
      }
      diff(left, right) {
        return this.processor.process(new diff_default(left, right));
      }
      patch(left, delta) {
        return this.processor.process(new patch_default(left, delta));
      }
      reverse(delta) {
        return this.processor.process(new reverse_default(delta));
      }
      unpatch(right, delta) {
        return this.patch(right, this.reverse(delta));
      }
      clone(value) {
        return clone(value);
      }
    };
    diffpatcher_default = DiffPatcher;
  }
});

// node_modules/jsondiffpatch/lib/index.js
function diff(left, right) {
  if (!defaultInstance) {
    defaultInstance = new diffpatcher_default();
  }
  return defaultInstance.diff(left, right);
}
function patch(left, delta) {
  if (!defaultInstance) {
    defaultInstance = new diffpatcher_default();
  }
  return defaultInstance.patch(left, delta);
}
var defaultInstance;
var init_lib = __esm({
  "node_modules/jsondiffpatch/lib/index.js"() {
    "use strict";
    init_preact_module();
    init_diffpatcher();
  }
});

// src/components/shared/BlobEditor/lib/JsonView.ts
var DEFAULT_OPTIONS, JsonView;
var init_JsonView = __esm({
  "src/components/shared/BlobEditor/lib/JsonView.ts"() {
    "use strict";
    init_preact_module();
    init_lib();
    DEFAULT_OPTIONS = () => ({
      expandAll: false,
      expandObjects: [],
      useViewState: true
    });
    JsonView = class {
      json;
      parentContainer;
      options;
      viewStates = {};
      // viewstate tree for retaining view during state updates
      constructor(json, parentContainer, options) {
        this.json = json;
        this.parentContainer = parentContainer;
        this.options = Object.assign({}, DEFAULT_OPTIONS(), options || {});
        this.render();
      }
      render() {
        this.parentContainer.innerHTML = "";
        const rootNode = this.drawJsonNode(this.json);
        this.parentContainer.appendChild(rootNode);
      }
      drawJsonNode(jsonObj, currPath = "") {
        const nodeContainer = document.createElement("div");
        nodeContainer.classList.add("json-node");
        const propertiesContainer = document.createElement("div");
        propertiesContainer.classList.add("json-properties");
        for (const key in jsonObj) {
          if (Object.prototype.hasOwnProperty.call(jsonObj, key)) {
            const keyPath = `${currPath}${key}`;
            const propertyRow = document.createElement("div");
            propertyRow.classList.add("json-property");
            propertyRow.setAttribute("data-path", keyPath);
            const label = document.createElement("span");
            label.classList.add("json-key");
            label.textContent = key + ": ";
            const valueContainer = document.createElement("div");
            valueContainer.classList.add("json-value");
            const value = jsonObj[key];
            const isObject = typeof value === "object" && value !== null;
            const isArray = Array.isArray(value);
            if (isObject) {
              if (isArray) label.textContent = `${key} (${value.length})`;
              else label.textContent = key;
              const hasChildren = isArray && value.length > 0 ? true : Object.keys(value).length > 0;
              propertyRow.classList.add("object");
              const toggleButton = document.createElement("button");
              toggleButton.classList.add("json-toggle");
              const childNode = this.drawJsonNode(value, keyPath + "/");
              if (this.options.expandAll) {
                toggleButton.textContent = "[-]";
              } else {
                let expand = false;
                if (isArray && hasChildren) {
                  expand = true;
                } else {
                  this.options.expandObjs?.forEach((e4) => {
                    if (new RegExp(e4).test(keyPath)) expand = true;
                  });
                }
                if (this.options.useViewState) {
                  if (typeof this.viewStates[keyPath] != "undefined") expand = !this.viewStates[keyPath];
                }
                if (expand) {
                  toggleButton.textContent = "[-]";
                } else {
                  toggleButton.textContent = "[+]";
                  childNode.classList.add("collapsed");
                }
              }
              toggleButton.onclick = () => {
                const isCollapsed = childNode.classList.contains("collapsed");
                childNode.classList.toggle("collapsed", !isCollapsed);
                this.viewStates[keyPath] = !isCollapsed;
                console.log(`viewStates updated.`, this.viewStates);
                toggleButton.textContent = isCollapsed ? "[-]" : "[+]";
              };
              propertyRow.appendChild(toggleButton);
              valueContainer.appendChild(childNode);
            } else {
              valueContainer.textContent = String(value);
            }
            propertyRow.appendChild(label);
            propertyRow.appendChild(valueContainer);
            propertiesContainer.appendChild(propertyRow);
          }
        }
        nodeContainer.appendChild(propertiesContainer);
        return nodeContainer;
      }
      updateJson(newJson) {
        const delta = diff(this.json, newJson);
        patch(this.json, delta);
        this.render();
      }
    };
  }
});

// src/lib/utils/debug/DebugPanel.ts
function renderLogEntry(message) {
  return Array.isArray(message) ? message.join(" ") : typeof message == "object" ? safeStringify(message) : `${message}`;
}
function debugState(id, state) {
  import_eventbusjs.default.dispatch("debug-state", { id, state });
}
var import_eventbusjs, log4, warn3, DebugPanelLogModule, DEBUG_STATE_NAMESPACE, DebugPanel;
var init_DebugPanel = __esm({
  "src/lib/utils/debug/DebugPanel.ts"() {
    "use strict";
    init_preact_module();
    import_eventbusjs = __toESM(require_eventbus_min());
    init_logging();
    init_safe_stringify();
    init_domUtils();
    init_JsonView();
    ({ log: log4, warn: warn3 } = getLogger("DebugPanel", { color: "red", enabled: true }));
    DebugPanelLogModule = class {
      name = "DebugPanel";
      debugPanel;
      constructor(opts = {}) {
        this.debugPanel = new DebugPanel(document.body);
        if (opts.show) this.debugPanel.show();
      }
      onLog(log10) {
        this.debugPanel.addLog(log10.namespace, log10.args);
      }
    };
    DEBUG_STATE_NAMESPACE = "objects";
    DebugPanel = class {
      container;
      tabContainer;
      contentContainer;
      tabEntries = {};
      debugStates = {};
      activeTab = "global";
      constructor(parent) {
        this.container = this.createContainer();
        this.tabContainer = this.createTabContainer();
        this.contentContainer = this.createContentContainer();
        this.container.appendChild(this.tabContainer);
        this.container.appendChild(this.contentContainer);
        parent.appendChild(this.container);
        this.addTab(DEBUG_STATE_NAMESPACE);
        this.addTab("global");
        this.setupResizable();
        this.setupEventListeners();
      }
      createContainer() {
        const container = document.createElement("div");
        container.classList.add("debug-panel");
        return container;
      }
      createTabContainer() {
        const tabContainer = document.createElement("div");
        tabContainer.classList.add("debug-panel-tabs");
        return tabContainer;
      }
      createContentContainer() {
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("debug-panel-content");
        return contentContainer;
      }
      setupResizable() {
        const { width, height } = getWindowSize();
        makeResizable(this.container, {
          handles: ["left", "top", "top-left"],
          maxWidth: width - 20,
          maxHeight: height - 20,
          minWidth: 200,
          minHeight: 150
          //onResize: (width, height) => console.log(`Resized: ${width}x${height}`)
        });
      }
      setupEventListeners() {
        import_eventbusjs.default.addEventListener("log", (event) => {
          const { namespace, message } = event.target;
          this.addLog(namespace, message);
        });
        import_eventbusjs.default.addEventListener("debug-state", (event) => {
          const { id, state } = event.target;
          if (!id || !state) return console.log("Invalid event data for debug-state. Expected {id,state}, got:", event);
          this.handleDebugState(id, state);
        });
      }
      // display an object for debugging.
      handleDebugState(id, state) {
        const safeState = safeStringify(state);
        state = JSON.parse(safeState);
        const updateDebugState = (id2, state2) => {
          const content = this.contentContainer.querySelector(
            `[data-namespace=${DEBUG_STATE_NAMESPACE}]`
          );
          if (!content) return console.error("No content for debug namespace.");
          const debugWrapper = content.querySelector(`#debug-state-${id2}`);
          if (!debugWrapper) return console.error(`No debug state found for ${id2}.`);
          const jsonWrapper = debugWrapper.querySelector(".json-wrapper");
          if (!jsonWrapper) return console.error(`No json wrapper found for existing state ${id2}`);
          jsonWrapper.innerHTML = "";
          this.debugStates[id2].state = state2;
          this.debugStates[id2].jsonView.updateJson(state2);
        };
        const addDebugState = (id2, state2) => {
          const content = this.contentContainer.querySelector(
            `[data-namespace=${DEBUG_STATE_NAMESPACE}]`
          );
          if (!content) return console.error("No content for debug namespace.");
          const debugWrapper = document.createElement("div");
          debugWrapper.classList.add("debug-state");
          debugWrapper.setAttribute("id", `debug-state-${id2}`);
          const toggleButton = document.createElement("button");
          toggleButton.classList.add("json-toggle");
          toggleButton.textContent = "[-]";
          toggleButton.onclick = () => {
            const isCollapsed = debugWrapper.classList.contains("collapsed");
            debugWrapper.classList.toggle("collapsed", !isCollapsed);
            toggleButton.textContent = isCollapsed ? "[-]" : "[+]";
          };
          debugWrapper.appendChild(toggleButton);
          const label = document.createElement("div");
          label.classList.add("debug-state-label");
          label.innerText = `${id2}`;
          debugWrapper.appendChild(label);
          const jsonWrapper = document.createElement("div");
          jsonWrapper.classList.add("json-wrapper");
          debugWrapper.appendChild(jsonWrapper);
          const jsonView = new JsonView(
            state2,
            jsonWrapper,
            {
              expandObjs: [
                /children/,
                /children\/(.*)/,
                /entry/
              ]
            }
          );
          this.debugStates[id2] = { state: state2, jsonView };
          content.appendChild(debugWrapper);
        };
        if (this.debugStates[id]) updateDebugState(id, state);
        else addDebugState(id, state);
      }
      addTab(namespace) {
        if (this.tabEntries[namespace]) return;
        this.tabEntries[namespace] = [];
        const tab = document.createElement("button");
        tab.classList.add("debug-tab");
        tab.textContent = namespace;
        tab.onclick = () => this.switchTab(namespace);
        this.tabContainer.appendChild(tab);
        const content = document.createElement("div");
        content.classList.add("debug-tab-content");
        content.dataset.namespace = namespace;
        this.contentContainer.appendChild(content);
        if (namespace === "global") {
          this.addClearButton(content, true);
        } else {
          this.addClearButton(content);
        }
        if (Object.keys(this.tabEntries).length === 1) {
          this.switchTab(namespace);
        }
      }
      switchTab(namespace) {
        this.activeTab = namespace;
        document.querySelectorAll(".debug-tab-content").forEach((el) => el.style.display = "none");
        const activeContent = this.contentContainer.querySelector(
          `[data-namespace="${namespace}"]`
        );
        if (activeContent) activeContent.style.display = "block";
      }
      addClearButton(content, isGlobal = false) {
        const clearButton = document.createElement("button");
        clearButton.classList.add("debug-clear-button");
        clearButton.textContent = "Clear";
        clearButton.onclick = () => {
          if (isGlobal) {
            Object.keys(this.tabEntries).forEach((key) => {
              this.tabEntries[key] = [];
              const tabContent = this.contentContainer.querySelector(
                `[data-namespace="${key}"]`
              );
              if (tabContent) tabContent.innerHTML = "";
            });
          } else {
            const namespace = content.dataset.namespace;
            if (namespace) {
              if (namespace == DEBUG_STATE_NAMESPACE) {
                this.debugStates = {};
              } else {
                content.innerHTML = "";
                this.tabEntries[namespace] = [];
              }
            }
          }
        };
        content.appendChild(clearButton);
      }
      addLog(namespace, message) {
        if (!this.tabEntries[namespace]) {
          this.addTab(namespace);
        }
        const logEntry = {
          id: `${namespace}-${Date.now()}-${Math.random()}`,
          message,
          timestamp: /* @__PURE__ */ new Date()
        };
        this.tabEntries[namespace].push(logEntry);
        const content = this.contentContainer.querySelector(
          `[data-namespace="${namespace}"]`
        );
        if (!content) return;
        const logElement = this.createLogElement(logEntry, namespace);
        content.appendChild(logElement);
        if (namespace != "global") this.addLog("global", message);
      }
      createLogElement(logEntry, namespace) {
        const logElement = document.createElement("div");
        logElement.classList.add("debug-log-entry");
        logElement.dataset.logId = logEntry.id;
        const logText = document.createElement("div");
        logText.innerText = `[${logEntry.timestamp.toLocaleTimeString()}] ${renderLogEntry(logEntry.message)}`;
        logText.classList.add("debug-log-entry-text");
        const copyButton = document.createElement("button");
        copyButton.innerText = "\u{1F4CB}";
        copyButton.classList.add("debug-copy-button");
        copyButton.onclick = () => navigator.clipboard.writeText(logText.innerHTML);
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "\u274C";
        deleteButton.classList.add("debug-delete-button");
        deleteButton.onclick = () => this.removeLogEntry(namespace, logEntry.id, logElement);
        logElement.appendChild(logText);
        logElement.appendChild(copyButton);
        logElement.appendChild(deleteButton);
        return logElement;
      }
      removeLogEntry(namespace, logId, logElement) {
        this.tabEntries[namespace] = this.tabEntries[namespace].filter(
          (entry) => entry.id !== logId
        );
        logElement.remove();
      }
      show() {
        this.container.classList.add("visible");
      }
      hide() {
        this.container.classList.remove("visible");
      }
    };
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
      config;
      constructor(config) {
        this.config = config;
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
        if (pastedContent && this.containsHTML(pastedContent) && this.config.sanitize) {
          pastedContent = this.sanitizeContent(pastedContent);
        }
        console.log(`paste`, pastedContent);
        this.insertContent(pastedContent, e4.target);
      };
      containsHTML(content) {
        return /<[^>]+>/i.test(content);
      }
      s;
      sanitizeContent(content) {
        return content.replace(/style=(["'])(?:(?=(\\?))\2.)*?\1/g, "");
      }
      insertContent(content, target) {
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
          const space = document.createTextNode(" ");
          const br = document.createElement("br");
          range.insertNode(space);
          range.insertNode(br);
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

// src/lib/utils/debounce.ts
function debounce(func, delay) {
  let timeoutId = null;
  return function(...args) {
    const context = this;
    const later = () => {
      timeoutId = null;
      func.apply(context, args);
    };
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
  };
}
var init_debounce = __esm({
  "src/lib/utils/debounce.ts"() {
    "use strict";
    init_preact_module();
  }
});

// src/components/shared/BlobEditor/plugins/toolbar/Dropdown.ts
var Dropdown;
var init_Dropdown = __esm({
  "src/components/shared/BlobEditor/plugins/toolbar/Dropdown.ts"() {
    "use strict";
    init_preact_module();
    init_ToolbarPlugin();
    Dropdown = class {
      dropdownButton;
      dropdownMenu;
      items;
      toolbar;
      hideTimeout = null;
      isVisible = false;
      constructor(button, items, toolbar) {
        this.dropdownButton = button;
        this.items = items;
        this.toolbar = toolbar;
        this.dropdownMenu = this.createDropdownMenu();
      }
      createDropdownMenu() {
        const menu = document.createElement("div");
        menu.className = "dropdown-menu";
        menu.style.display = "none";
        this.items.forEach((item) => {
          createToolbarItem(item, menu, this.toolbar);
        });
        this.dropdownButton.appendChild(menu);
        menu.addEventListener("mouseleave", this.startHideTimer.bind(this));
        menu.addEventListener("mouseenter", this.clearHideTimer.bind(this));
        this.dropdownButton.addEventListener("click", (e4) => {
          e4.preventDefault();
          e4.stopPropagation();
          console.log(`click`, e4.target);
          if (this.dropdownMenu.style.display == "flex") this.hide();
          else this.show();
        });
        return menu;
      }
      show() {
        console.log(`show dropdown`, this.isVisible);
        this.positionDropdown();
        this.dropdownMenu.style.display = "flex";
        this.dropdownMenu.style.opacity = "1";
        this.isVisible = true;
      }
      positionDropdown() {
        if (!this.isVisible) {
          const buttonRect = this.dropdownButton.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          if (buttonRect.left + this.dropdownMenu.offsetWidth > windowWidth) {
            this.dropdownMenu.style.left = `${windowWidth - this.dropdownMenu.offsetWidth - parseFloat(getComputedStyle(this.dropdownMenu).getPropertyValue("--dropdown-x-offset"))}px`;
          }
        }
      }
      startHideTimer() {
        this.hideTimeout = window.setTimeout(() => {
          this.hide();
        }, 500);
      }
      clearHideTimer() {
        if (this.hideTimeout) {
          clearTimeout(this.hideTimeout);
          this.hideTimeout = null;
        }
      }
      hide() {
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

// src/components/shared/BlobEditor/plugins/toolbar/ToolbarPlugin.ts
function createToolbarItem(item, parent, toolbar) {
  this.toolbar = toolbar;
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
      button.addEventListener("click", (e4) => {
        e4.preventDefault();
        e4.stopImmediatePropagation();
        e4.stopPropagation();
        item.onClick.call(this.toolbar);
        this.toolbar.hideToolbar();
      });
    }
    parent.appendChild(button);
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
    const dropdown = new Dropdown(dropdownButton, item.items, toolbar);
    parent.appendChild(dropdownButton);
  } else if (item.type === "group") {
    const group = document.createElement("div");
    group.className = "toolbar-group";
    if (Array.isArray(item.items)) {
      item.items.forEach((groupItem) => createToolbarItem(groupItem, group, toolbar));
    }
    parent.appendChild(group);
  }
  return parent;
}
var ToolbarPlugin;
var init_ToolbarPlugin = __esm({
  "src/components/shared/BlobEditor/plugins/toolbar/ToolbarPlugin.ts"() {
    "use strict";
    init_preact_module();
    init_debounce();
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
        container.addEventListener("mouseup", debounce(this.checkForSelection, 200));
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
        this.editor.plugins.forEach((plugin) => {
          if (plugin instanceof _ToolbarPlugin) return;
          if ("toolbar" in plugin) {
            this.toolbar.items.unshift(plugin.toolbar);
          }
        });
        if (this.toolbar.items.length > 0) {
          createToolbarItem(this.toolbar, this.toolbarContainer, this);
        } else {
          this.toolbarContainer.style.display = "none";
        }
      }
      checkForSelection = (e4) => {
        const s3 = window.getSelection()?.toString().length;
        if (s3 > 0 || e4.button == 2) {
          this.showToolbar(e4);
        } else {
          this.hideToolbar();
        }
      };
      showToolbar = (e4) => {
        if (!this.toolbarContainer || this.toolbarContainer.children.length === 0) return;
        if (this.isVisible) return;
        e4.preventDefault();
        e4.stopPropagation();
        const rect = e4.target instanceof Element ? e4.target.getBoundingClientRect() : { top: 0, left: 0 };
        const windowWidth = window.innerWidth;
        this.toolbarContainer.style.top = `${rect.top - this.toolbarContainer.offsetHeight}px`;
        this.toolbarContainer.style.left = `${e4.clientX + 10}px`;
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
      funcs = {
        clearAll: () => {
          this.editor.clearContent(true);
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
                onClick: (t3) => {
                  console.log("Theme button clicked");
                }
              },
              {
                type: "button",
                icon: "/public/icons/icon-history.svg",
                label: "History",
                onClick: (t3) => console.log("History button clicked")
              }
            ]
          },
          {
            type: "button",
            icon: "/public/icons/icon-clear.svg",
            label: "Clear",
            onClick: this.funcs.clearAll
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

// src/components/shared/BlobEditor/lib/ApiClient.ts
var ApiClient;
var init_ApiClient = __esm({
  "src/components/shared/BlobEditor/lib/ApiClient.ts"() {
    "use strict";
    init_preact_module();
    ApiClient = class {
      //private baseUrl = ''; // Replace with actual API endpoint
      async fetchBlobs() {
        return [];
      }
      async fetchBlob(id) {
        return null;
      }
      async saveBlob(blob) {
        return Promise.resolve();
      }
      async deleteBlob(id) {
        return Promise.resolve();
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
    exports.parse = parse2;
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
    function parse2(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode3;
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
    function decode3(str) {
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
      get: function get2() {
        return _CookieStorage["default"];
      }
    });
    Object.defineProperty(exports, "MemoryStorage", {
      enumerable: true,
      get: function get2() {
        return _MemoryStorage["default"];
      }
    });
    exports["default"] = void 0;
    Object.defineProperty(exports, "isSupported", {
      enumerable: true,
      get: function get2() {
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
var import_eventbusjs2, BlobService;
var init_BlobService = __esm({
  "src/components/shared/BlobEditor/lib/BlobService.ts"() {
    "use strict";
    init_preact_module();
    import_eventbusjs2 = __toESM(require_eventbus_min());
    init_ApiClient();
    init_CacheService();
    BlobService = class {
      apiClient;
      cacheService;
      eventBus = import_eventbusjs2.default;
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
        console.log(`save`, blob.content.entries);
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

// src/components/shared/BlobEditor/lib/NodeEntryCache/ContentEntries.ts
var log5, warn4, ContentEntry, TextEntry, HeaderEntry, FileEntry, BreakEntry, PreEntry, CodeEntry, GroupEntry, LinkEntry, CustomEntry, ContentEntries;
var init_ContentEntries = __esm({
  "src/components/shared/BlobEditor/lib/NodeEntryCache/ContentEntries.ts"() {
    "use strict";
    init_preact_module();
    init_logging();
    ({ log: log5, warn: warn4 } = getLogger("ContentEntries", { color: "red", enabled: false }));
    ContentEntry = class {
      id;
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
      children;
      constructor(children, attributes) {
        super();
        if (typeof children != "string") throw "Error: TextEntry expects children to be a string.";
        this.children = children;
        this.attributes = attributes || {};
      }
      static convertToHTML(entry, parent) {
        let textNode;
        let wrapper = null;
        let node;
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
        textNode = node = document.createTextNode(entry.children);
        if (wrapper) {
          wrapper.appendChild(textNode);
          if (wrapper.tagName === "SPAN") {
            Object.entries(entry.attributes || {}).forEach(([key, value]) => {
              if (key !== "span" && key !== "class") {
                wrapper.setAttribute(key, value);
              }
            });
          }
          node = wrapper;
        }
        parent.appendChild(node);
        const ner = NER(node, entry, [], parent);
        return ner;
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
    HeaderEntry = class _HeaderEntry extends ContentEntry {
      type = "header";
      attributes;
      children;
      constructor(children, attributes) {
        super();
        this.children = children;
        this.attributes = attributes;
      }
      static convertToHTML(entry, parent) {
        const level = entry.attributes?.level || "1";
        const h3 = document.createElement(`h${level}`);
        h3.textContent = entry.children;
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
      children;
      constructor(children, attributes) {
        super();
        this.children = children;
        this.attributes = attributes;
      }
      static convertToHTML(entry, parent) {
        const fileDiv = document.createElement("div");
        fileDiv.textContent = entry.children;
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
    BreakEntry = class _BreakEntry extends ContentEntry {
      type = "break";
      attributes;
      children = [];
      //children?: ContentEntry[];
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
    PreEntry = class _PreEntry extends ContentEntry {
      type = "pre";
      attributes;
      children;
      constructor(attributes, children = []) {
        super();
        this.attributes = attributes;
        this.children = children;
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
        entry.children.forEach((child) => ContentEntries.convertToHTMLByType(child, pre));
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const children = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) children.push(childEntry);
        });
        return new _PreEntry(attributes, children);
      }
    };
    CodeEntry = class _CodeEntry extends ContentEntry {
      type = "code";
      attributes;
      children;
      constructor(attributes, children = []) {
        super();
        this.attributes = attributes;
        this.children = children;
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
        entry.children.forEach((child) => ContentEntries.convertToHTMLByType(child, code));
      }
      static convertNodeToEntry(node) {
        if (node.tagName !== "CODE") return null;
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const children = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) children.push(childEntry);
        });
        return new _CodeEntry(attributes, children);
      }
    };
    GroupEntry = class _GroupEntry extends ContentEntry {
      type = "group";
      attributes;
      children;
      constructor(attributes, children = []) {
        super();
        this.attributes = attributes;
        this.children = children;
      }
      static convertToHTML(entry, parent) {
        const div = document.createElement("div");
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            div.setAttribute(key, value);
          }
        }
        parent.appendChild(div);
        if (Array.isArray(entry.children)) {
          entry.children.forEach((child) => ContentEntries.convertToHTMLByType(child, div));
        } else if (entry.children) {
          div.childrenText = entry.children;
        }
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const children = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) children.push(childEntry);
        });
        return new _GroupEntry(attributes, children);
      }
    };
    LinkEntry = class _LinkEntry extends ContentEntry {
      type = "link";
      attributes;
      children;
      constructor(children, attributes) {
        super();
        this.children = children;
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
        if (Array.isArray(entry.children)) {
          entry.children.forEach((child) => ContentEntries.convertToHTMLByType(child, a3));
        } else {
          a3.textContent = entry.children;
        }
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        let children;
        if (node.childNodes.length > 0) {
          if (node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE) {
            children = node.textContent || "";
          } else {
            children = Array.from(node.childNodes).map((childNode) => ContentEntries.convertNodeToEntry(childNode)).filter(Boolean);
          }
        } else {
          children = "";
        }
        return new _LinkEntry(children, attributes);
      }
    };
    CustomEntry = class _CustomEntry extends ContentEntry {
      type = "custom";
      attributes;
      children;
      constructor(attributes, children = []) {
        super();
        this.attributes = attributes;
        this.children = children;
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
        entry.children.forEach((child) => ContentEntries.convertToHTMLByType(child, customDiv));
      }
      static convertNodeToEntry(node) {
        if (node.getAttribute("custom") !== "true") return null;
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const children = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) children.push(childEntry);
        });
        return new _CustomEntry(attributes, children);
      }
    };
    ContentEntries = class _ContentEntries {
      static nextId = 0;
      // make an html node from entry, append to parent, return NER for { node, entry, children } which is appended to current node in node cache nodeTree.
      static convertToHTMLByType(entry, parent) {
        console.trace();
        throw "DO NOT USE";
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
        if (!node || !node.nodeType) throw `${node ? "Invalid" : "No"} node given to convertNodeToEntry`;
        let entry;
        log5(`convertNodeToEntry(), node:`, node.nodeType, node.tagName, node);
        if (node.nodeType === Node.TEXT_NODE) {
          entry = TextEntry.convertNodeToEntry(node);
          log5(`made text node`, node, entry);
        } else if (node.nodeName === "DIV") {
          const div = node;
          if (div.getAttribute("custom") === "true") {
            entry = CustomEntry.convertNodeToEntry(div);
          } else {
            log5(`making group:`, node);
            entry = GroupEntry.convertNodeToEntry(div);
          }
        } else if (node.nodeName === "A") {
          entry = LinkEntry.convertNodeToEntry(node);
        } else if (/^H[1-6]$/.test(node.nodeName)) {
          entry = HeaderEntry.convertNodeToEntry(node);
        } else if (node.nodeName === "B" || node.nodeName === "I" || node.nodeName === "SPAN") {
          entry = TextEntry.convertNodeToEntry(node);
        } else if (node.nodeName === "PRE") {
          entry = PreEntry.convertNodeToEntry(node);
        } else if (node.nodeName === "CODE") {
          entry = CodeEntry.convertNodeToEntry(node);
        } else if (node.nodeName === "BR") {
          entry = BreakEntry.convertNodeToEntry(node);
          log5(`made break node`, node.tagName, node, entry);
        }
        if (!entry) throw "Could not convert node type to entry: " + node.nodeType;
        entry.id = _ContentEntries.nextId++;
        return entry;
      }
    };
  }
});

// src/components/shared/BlobEditor/lib/NodeEntryCache/NodeEntries.ts
var log6, warn5, NER2, GroupNode, TextNode, BreakNode;
var init_NodeEntries = __esm({
  "src/components/shared/BlobEditor/lib/NodeEntryCache/NodeEntries.ts"() {
    "use strict";
    init_preact_module();
    init_logging();
    init_ContentEntries();
    ({ log: log6, warn: warn5 } = getLogger("NodeEntries", { color: "yellow", enabled: true }));
    NER2 = (node, entry, children, parent) => ({ node, entry, children, parent });
    GroupNode = class extends ContentEntry {
      type = "group";
      attributes;
      children;
      constructor(attributes, children = []) {
        super();
        this.attributes = attributes;
        this.children = children;
      }
      static createNERFromEntry(entry, parent, nodeCache) {
        const ner = {
          entry,
          node: document.createElement("div"),
          children: [],
          parent
        };
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            ner.node.setAttribute(key, value);
          }
        }
        if (Array.isArray(entry.children)) {
          entry.children.forEach((child) => nodeCache.createNERFromEntry(child, ner));
        } else {
          throw "Expected array for GroupNode.children but received: " + typeof entry.children;
        }
        return ner;
      }
      static convertNodeToEntry(node) {
        const attributes = Array.from(node.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        const children = [];
        Array.from(node.childNodes).forEach((childNode) => {
          const childEntry = ContentEntries.convertNodeToEntry(childNode);
          if (childEntry) children.push(childEntry);
        });
        return new GroupEntry(attributes, children);
      }
    };
    TextNode = class extends ContentEntry {
      type = "text";
      attributes;
      children;
      constructor(children, attributes) {
        super();
        if (typeof children != "string") throw "Error: TextEntry expects children to be a string.";
        this.children = children;
        this.attributes = attributes || {};
      }
      static createNERFromEntry(entry, parent, nodeCache) {
        const ner = NER2(document.createTextNode(entry.children), entry, [], parent);
        if (entry.attributes) {
          if (entry.attributes["bold"]) {
            ner.node.classList.add("bold");
          }
          if (entry.attributes["italic"]) {
            ner.node.classList.add("italic");
          }
        }
        return ner;
      }
      static convertNodeToEntry(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          return new TextEntry(node.textContent || "");
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
          return new TextEntry(textContent, attributes);
        }
        return null;
      }
    };
    BreakNode = class extends ContentEntry {
      type = "break";
      attributes;
      children = [];
      //children?: ContentEntry[];
      constructor(attributes) {
        super();
        this.attributes = attributes;
      }
      static createNERFromEntry(entry, parent, nodeCache) {
        const ner = NER2(document.createElement("br"), entry, [], parent);
        if (entry.attributes) {
          for (const [key, value] of Object.entries(entry.attributes)) {
            ner.node.setAttribute(key, value);
          }
        }
        return ner;
      }
      static convertNodeToEntry(node) {
        if (node.tagName === "BR") {
          const attributes = Array.from(node.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
          }, {});
          return new BreakEntry(attributes);
        }
        return null;
      }
    };
  }
});

// src/components/shared/BlobEditor/lib/NodeEntryCache/nerUtils.ts
function getParentPath(node, stopNode, cache) {
  let lookupPath = [];
  let currNode = node;
  while (currNode) {
    lookupPath.push(currNode);
    if (currNode == cache.rootNER.node || currNode == stopNode) break;
    currNode = currNode.parentNode;
  }
  return lookupPath;
}
function findNER(node, cache, parent) {
  if (!node) throw "No node given to findNode()";
  if (!cache.rootNER?.node) throw "No rootNER found on NodeEntryCache. Did you forget to call hydrateContent()?";
  if (cache.lastNER?.node == node) return cache.lastNER;
  if (cache.lastNER?.parent?.node == node) return cache.lastNER.parent;
  if (cache.rootNER.node == node) return cache.rootNER;
  let lookupPath = nerUtils.getParentPath(node, parent?.node, cache);
  let currNER = parent || cache.rootNER;
  let currNode = lookupPath.pop();
  let nextNode = lookupPath.pop();
  while (currNode) {
    const isTarget = currNode == node;
    const isParent = nextNode == node;
    if (isTarget) {
      warn6(`IS TARGET?`, currNode, nextNode);
      return currNER;
    }
    for (const c3 of currNER.children) {
      if (c3.node == node) return c3;
      if (c3.node == nextNode) {
        currNER = c3;
        break;
      }
    }
    ;
    if (isParent) return void 0;
    currNode = nextNode;
    nextNode = lookupPath.pop();
  }
  return void 0;
}
function createNERFromEntry(entry, parent, nodeCache, insertPos) {
  if (!entry) throw "No entry given to createNERFromEntry";
  if (!parent) throw "No parent given to createNERFromEntry";
  let ner;
  switch (entry.type) {
    case "text":
      console.log(`creating text NER.`);
      ner = TextNode.createNERFromEntry(entry, parent, this);
      break;
    case "group":
      console.log(`creating group NER.`);
      ner = GroupNode.createNERFromEntry(entry, parent, this);
      break;
    case "break":
      console.log(`creating break NER.`);
      ner = BreakNode.createNERFromEntry(entry, parent, this);
      break;
    default:
      break;
  }
  if (!ner) throw "Error: Could not create NER from entry type: " + entry.type;
  if (insertPos) {
    parent.children.splice(insertPos, 0, ner);
    const childNodes = Array.from(parent.node.childNodes);
    if (!childNodes.length) parent.node.appendChild(ner.node);
    else {
      if (insertPos == 0) parent.node.insertBefore(ner.node, parent.node.firstChild);
      else {
        const prevNode = childNodes[insertPos - 1];
        if (!prevNode) {
          console.log(`No previous node?`, insertPos, childNodes, parent);
          throw "No prevNode found at pos: " + (insertPos - 1);
        }
        console.log(`inserting node after:`, prevNode, `new node (ID: ${ner.id}):`, ner.node, "at:", insertPos);
        prevNode.after(ner.node);
      }
    }
  } else {
    parent.children.push(ner);
    parent.node.appendChild(ner.node);
  }
  return ner;
}
function createNERFromNodeEntry(node, entry, parent) {
  const ner = NER2(node, entry, [], parent);
  if (Array.isArray(entry.children)) {
    entry.children.forEach((childEntry, i4) => {
      const childNode = node.childNodes[i4];
      createNERFromNodeEntry(childNode, childEntry, ner);
    });
  }
  parent.children.push(ner);
  return ner;
}
function createNERFromNode(node, parent, cache) {
  if (!parent?.node) throw "Error: No node found on parent NER to insert to.";
  const entry = ContentEntries.convertNodeToEntry(node);
  const ner = createNERFromNodeEntry(node, entry, parent);
  if (Array.isArray(parent.entry?.children)) {
    const pos = Array.from(parent.node.childNodes).findIndex((c3) => c3 == node);
    console.log(`Inserting entry (ID: ${entry.id}) into parent at POS:`, pos + 1);
    parent.entry.children.splice(pos + 1, 0, entry);
  }
  log7(`NER created:`, ner);
  return ner;
}
function createNERAfterNode(node, entry, parent, cache) {
  const pos = Array.from(parent.node.childNodes).findIndex((n2) => n2 == node);
  return createNERFromEntry(entry, parent, cache, pos + 1);
}
function updateNER(ner, cache) {
  if (ner.node.nodeType == Node.TEXT_NODE) {
    ner.entry.children = ner.node.textContent;
  } else {
    reconcileNodeChildren(ner, cache);
  }
  log7(`UPDATE node finished:`, ner);
  return ner;
}
function reconcileNodeChildren(ner, nodeCache) {
  console.log(`reconcile children`, ner);
  if (ner.node.nodeType != Node.TEXT_NODE) {
    const nodeChildren = Array.from(ner.node.childNodes);
    let noMoreChanges = false;
    while (!noMoreChanges) {
      noMoreChanges = true;
      ner.children.forEach((c3, i4) => {
        const exists = nodeChildren.find((nc) => nc == c3.node);
        if (!exists) {
          console.log(`DANGLING NER, REMOVING...`, c3, i4);
          if (Array.isArray(ner.entry?.children)) ner.entry.children.splice(i4, 1);
          ner.children.splice(i4, 1);
          noMoreChanges = false;
        }
      });
    }
    noMoreChanges = false;
    while (!noMoreChanges) {
      noMoreChanges = true;
      let nodeChildren2 = Array.from(ner.node.childNodes);
      nodeChildren2.forEach((nc) => {
        const exists = ner.children.find((c3) => c3.node == nc);
        if (!exists) {
          console.log(`CREATING NER CHILD for node:`, nc);
          let childNer = createNERFromNode(nc, ner, nodeCache);
          noMoreChanges = false;
        }
      });
    }
  }
}
function deleteNER(node, cache) {
  log7(`deleteNode:`, node);
}
function clearCache(cache) {
  if (Array.isArray(cache.entries)) while (cache.entries.pop()) {
  }
  ;
  if (cache.lastNER != cache.rootNER) cache.lastNER = void 0;
  if (cache.rootNER) {
    cache.rootNER.children = [];
    if (cache.rootNER.entry?.children) {
      if (Array.isArray(cache.rootNER.entry.children)) {
        while (cache.rootNER.entry.children.pop()) {
        }
        ;
      }
    }
  }
  cache.rootNER.entry.children.push(...DEFAULT_ENTRIES());
}
var log7, warn6, nerUtils;
var init_nerUtils = __esm({
  "src/components/shared/BlobEditor/lib/NodeEntryCache/nerUtils.ts"() {
    "use strict";
    init_preact_module();
    init_logging();
    init_ContentEntries();
    init_NodeEntryCache();
    init_NodeEntries();
    ({ log: log7, warn: warn6 } = getLogger("nerUtils", { color: "yellow", enabled: true }));
    nerUtils = {
      getParentPath,
      findNER,
      createNERFromEntry,
      createNERFromNode,
      createNERAfterNode,
      updateNER,
      deleteNER,
      clearCache
    };
  }
});

// src/components/shared/BlobEditor/lib/NodeEntryCache/NodeEntryCache.ts
var log8, error3, DEFAULT_ENTRIES, NodeEntryCache2;
var init_NodeEntryCache = __esm({
  "src/components/shared/BlobEditor/lib/NodeEntryCache/NodeEntryCache.ts"() {
    "use strict";
    init_preact_module();
    init_ContentEntries();
    init_nerUtils();
    init_logging();
    init_NodeEntries();
    ({ log: log8, error: error3 } = getLogger("NodeEntryCache", { color: "yellow", enabled: true }));
    DEFAULT_ENTRIES = () => [
      {
        id: ContentEntries.nextId++,
        type: "break",
        attributes: {},
        children: []
      }
    ];
    NodeEntryCache2 = class {
      entries;
      rootNER;
      lastNER = void 0;
      // reference to last-edited node for faster/immdiate lookups
      lastInputType;
      // keeps track of previous input, so we can better manage removing duplicate breaks upon new text
      // Creates elements from the given list of entries, and insert them into the node tree.
      hydrateContent(entries, node) {
        this.entries = entries || DEFAULT_ENTRIES();
        this.rootNER = NER2(node, void 0, [], void 0);
        this.rootNER.entry = ContentEntries.convertNodeToEntry(node);
        this.rootNER.entry.children = this.entries;
        this.rootNER.entry.children.forEach((e4) => this.createNERFromEntry(e4, this.rootNER));
        log8(`hydrated.`, entries, this.rootNER);
      }
      // From a given entry... creates the dom reference for it, and adds to the parent if given, or root.
      // If the entry has children... the child dom elements will also be created and added recursively.
      createNERFromEntry(entry, parent) {
        if (!this.rootNER) throw "rootNER has not been created. Create a root node or call hydrateContent first.";
        if (!parent) parent = this.rootNER;
        const ner = nerUtils.createNERFromEntry(entry, parent, this);
        if (!ner?.node) throw "Node->entry node could not be created from type: " + entry.type;
        return ner;
      }
      // Locate an NER in the tree by a dom node reference.
      findNER(node, parent) {
        return nerUtils.findNER(node, this, parent);
        ;
      }
      // Locates and updates the NER for the node, of it exists, or inserts a new one.
      updateOrInsert(node, inputType) {
        if (!node.parentNode) throw "node.parentNode does not exist. Invalid node?";
        const isRootNode = node == this.rootNER?.node;
        let parent = isRootNode ? this.rootNER : this.findNER(node.parentNode);
        if (!parent && node.parentNode.parentNode) {
          parent = this.findNER(node.parentNode.parentNode);
          console.log(`Looking for parent ancestor: `, parent, node.parentNode.parentNode);
        }
        let ner = isRootNode ? this.rootNER : this.findNER(node, parent);
        if (!ner && node.nodeType == Node.TEXT_NODE) {
          const ns = node.nextSibling;
          console.log(`NEW TEXT:`, node, `nextSibling:`, ns, "prevSibling:", node.previousSibling, "prevPrev:", node.previousSibling?.previousSibling, "inputType:", inputType, "lastInputType", this.lastInputType);
        }
        if (ner) nerUtils.updateNER(ner, this);
        else if (parent) ner = nerUtils.createNERFromNode(node, parent, this);
        else {
          console.log(`Parent NER not found for node:`, node, node.parentNode, ner);
          throw "Parent NER not found for updateOrInsert.";
        }
        return this.lastNER = ner;
      }
      // Finds the node in the tree and removes the entry from it, and the dom node as well.
      deleteNER(node) {
        return nerUtils.deleteNER(node, this);
      }
      // Called when a change is detected on the node. Finds the given node in the tree and updates it's entry.
      // If the node does not exist the NER is inserted in its relative dom position.
      applyChange(node, inputType) {
        try {
          return this.lastNER = this.updateOrInsert(node, inputType);
          this.lastInputType = inputType;
        } catch (e4) {
          log8(`Exception in applyChange():`, e4);
        }
      }
      clear = () => {
        nerUtils.clearCache(this);
      };
      getEntries = () => {
        return this.entries;
      };
    };
  }
});

// src/components/shared/BlobEditor/lib/WEditor.ts
var log9, error4, CHANGE_TIMEOUT_MS, AUTOSAVE_TIMEOUT_MS, CONTENT_ROOT_CLASS, DEFAULT_CONFIG, WEditor;
var init_WEditor = __esm({
  "src/components/shared/BlobEditor/lib/WEditor.ts"() {
    "use strict";
    init_preact_module();
    init_NodeEntryCache();
    init_nerUtils();
    init_logging();
    init_DebugPanel();
    ({ log: log9, error: error4 } = getLogger("WEditor", { color: "blue", enabled: true }));
    CHANGE_TIMEOUT_MS = 500;
    AUTOSAVE_TIMEOUT_MS = 3e3;
    CONTENT_ROOT_CLASS = "w-content";
    DEFAULT_CONFIG = () => ({
      focusOnStart: false
    });
    WEditor = class {
      constructor(container, onChangeHandler, plugins = [], config = DEFAULT_CONFIG()) {
        this.container = container;
        this.onChangeHandler = onChangeHandler;
        this.plugins = plugins;
        this.config = config;
        this.nodeCache = new NodeEntryCache2();
        this.initialize();
      }
      contentEditable;
      applyChangesTimeoutId = null;
      autoSaveTimeoutId = null;
      blob;
      nodeCache;
      lastContentChangeType;
      initialize() {
        if (!this.container) return console.error("WEditor initialization failed: Container is null");
        if (!this.contentEditable) {
          this.contentEditable = document.createElement("div");
          this.contentEditable.setAttribute("contenteditable", "true");
          this.contentEditable.classList.add(CONTENT_ROOT_CLASS);
          this.container.appendChild(this.contentEditable);
        }
        this.plugins.forEach((plugin) => plugin.initialize(this, this.container));
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
        this.contentEditable.addEventListener("input", this.handleContentChange);
        if (this.config.focusOnStart) {
          this.contentEditable.focus();
        }
      }
      loadBlob(blob) {
        if (blob) this.blob = blob;
        if (!this.contentEditable) return console.error("Cannot load blob: ContentEditable is null");
        if (!this.blob) return console.error("No blob given to load.");
        this.contentEditable.innerHTML = "";
        this.nodeCache.hydrateContent(this.blob.content.entries, this.contentEditable);
        this.debugState();
      }
      handleKeyDown = (e4) => {
        if (e4.target == this.contentEditable) {
          e4.stopPropagation();
          if (e4.key == "Enter") {
            this.handleEnter(e4);
          } else if (e4.key == "Backspace") {
            this.handleBackspace(e4);
          }
        }
      };
      // todo: on shift+enter... should manually insert the break entry after the current node in it's parent
      // ... so that it does not trigger a full re-build of the parent node and it's content.
      // todo: on enter... should create the group node but without the break?
      // bug: multiple break chilren arent added to ner.children but are seen in entry.children.
      handleKeyUp = (e4) => {
        if (e4.target == this.contentEditable) {
          if (e4.key == "Enter") {
          } else if (e4.key == "Backspace") {
          }
        }
      };
      handleEnter = (e4) => {
        const node = this.getCurrentEditingNode();
        log9(`Enter`, node, e4);
        this.lastEnterNode = node;
        if (e4.shiftKey) {
        }
      };
      // TODO: Detect backspace on keydown... if the current node is empty, delete the node in entry and ner tree, and allow the event to continue deleting it in the dom.
      handleBackspace = (e4) => {
        const node = this.getCurrentEditingNode();
        const childNodes = Array.from(node.childNodes);
        if (node) {
          if (node.nodeType != Node.TEXT_NODE) {
            log9(`backspace on edit node:`, node, childNodes, node.innerHTML);
            return;
            const ner = nerUtils.findNER(node, this.nodeCache);
            if (ner) {
              setTimeout(() => {
                log9(`nodes after timeout:`, node, childNodes, node.innerHTML);
                ner.children.forEach((c3, i4) => {
                  const exists = Array.from(node.childNodes).find((cn) => c3.node == cn);
                  if (!exists) {
                    const childEntry = c3.entry;
                    if (Array.isArray(ner.entry?.children)) {
                      const di = ner.entry.children.findIndex((ec) => ec == childEntry);
                      log9(`DELETING child entry:`, di, childEntry);
                      if (di > -1) ner.entry.children.splice(di, 1);
                    }
                    log9(`DELETING NER:`, i4, c3);
                    ner.children.splice(i4, 1);
                  }
                  {
                    log9(`node still exists.`, c3, i4);
                  }
                });
              }, 0);
            } else {
              console.error(`NER not found on backspace??`);
            }
            if (node.classList.contains(CONTENT_ROOT_CLASS)) {
            }
            this.nodeCache.deleteNER(node);
          } else {
            log9(`backspace on text node:`, node);
            return;
            let ner = nerUtils.findNER(node, this.nodeCache);
            if (ner) log9(`Text node FOUND:`, ner);
            else {
              log9(`! Text node NOT found !`, node);
            }
          }
        }
      };
      handleContentChange = (e4) => {
        let editNode = this.getCurrentEditingNode();
        log9(`handleContentChange(): ${e4.inputType}`, editNode);
        switch (e4.inputType) {
          case "insertText":
            break;
          case "deleteContentBackward":
            break;
          case "insertParagraph":
            break;
          case "insertLineBreak":
            break;
          case "insertFromPaste":
            break;
          case "deleteByCut":
            break;
          default:
            console.log(`Unknown input type:`, e4, editNode);
            throw new Error("UNKNOWN INPUT TYPE: " + e4.inputType);
        }
        if (window.getSelection) {
          let range = window.getSelection()?.getRangeAt(0);
          editNode = range?.commonAncestorContainer;
        }
        this.applyChanges(editNode, e4.inputType);
        this.lastContentChangeType = e4.inputType;
        this.debugState();
      };
      debugState() {
        debugState("entryTree", this.nodeCache.rootNER?.entry);
        debugState("nerTree", this.nodeCache.rootNER);
      }
      // updates the given node's entry with it's changed content
      applyChanges(node, inputType) {
        if (!node) throw "No node given to applyChanges()";
        const change = this.nodeCache.applyChange(node, inputType);
        if (this.applyChangesTimeoutId) clearTimeout(this.applyChangesTimeoutId);
        this.applyChangesTimeoutId = setTimeout(() => {
          this.commitChanges();
        }, CHANGE_TIMEOUT_MS);
        if (!this.autoSaveTimeoutId) {
          this.autoSaveTimeoutId = setTimeout(() => {
            this.commitChanges();
          }, AUTOSAVE_TIMEOUT_MS);
        }
      }
      // Converts content area HTML to JSON. Any html elements associated with custom "types" will be ignored convert to JSON through their handlers.
      commitChanges() {
        if (!this.contentEditable) throw "Cannot apply changes: ContentEditable is null";
        if (this.autoSaveTimeoutId) this.autoSaveTimeoutId = clearTimeout(this.autoSaveTimeoutId);
        if (this.applyChangesTimeoutId) this.applyChangesTimeoutId = clearTimeout(this.applyChangesTimeoutId);
        const content = { entries: this.nodeCache.getEntries() };
        this.onChangeHandler(content);
        return content;
      }
      // helper to clear all content (for dev)
      clearContent(commit) {
        if (this.contentEditable) {
          this.contentEditable.innerHTML = "";
          this.nodeCache.clear();
          if (commit) this.commitChanges();
          this.debugState();
        }
      }
      getCurrentEditingNode() {
        if (window.getSelection) {
          let range = window.getSelection()?.getRangeAt(0);
          return range?.commonAncestorContainer;
        }
      }
    };
  }
});

// src/components/shared/BlobEditor/FilePreviewHandler.ts
var rowLabelEl, printBytes, FilePreviewHandler;
var init_FilePreviewHandler = __esm({
  "src/components/shared/BlobEditor/FilePreviewHandler.ts"() {
    "use strict";
    init_preact_module();
    rowLabelEl = (label, innerHtml) => {
      const el = document.createElement("div");
      el.className = "row-label";
      el.innerHTML = `<span class="label">${label}</span><div class="inner">${innerHtml}</div>`;
      return el;
    };
    printBytes = (b2) => {
      let kb = b2 / 1024;
      let mb = kb / 1024;
      if (mb >= 1) {
        let kbr = kb - mb * 1024;
        return `${mb.toFixed(0)}Mb${kbr > 0 ? `${kbr}Kb` : ``}`;
      } else {
        if (kb >= 1) {
          let br = b2 - kb * 1024;
          return `${kb.toFixed(0)}Kb${br > 0 ? `${br}B` : ``}`;
        }
        return `${b2}B`;
      }
    };
    FilePreviewHandler = class {
      editor;
      constructor(editor) {
        this.editor = editor;
      }
      createPreview(file, range) {
        let previewElement;
        console.log(`insert file`, file.type);
        if (file.type.startsWith("image/")) {
          previewElement = this.renderImage(file);
        } else if (file.type.startsWith("video/")) {
          previewElement = this.renderVideo(file);
        } else if (file.type.startsWith("audio/")) {
          previewElement = this.renderAudio(file);
        } else if (file.type.startsWith("text/")) {
          previewElement = this.renderText(file);
        } else {
          previewElement = this.renderGeneric(file);
        }
        previewElement.setAttribute("data-file-type", file.type);
        previewElement.setAttribute("data-file-size", file.size.toString());
        previewElement.setAttribute("data-file-name", file.name);
        range.insertNode(previewElement);
        range.setStartAfter(previewElement);
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
        return this.wrapPreview(img, file, "image");
      }
      renderVideo(file) {
        const video = document.createElement("video");
        video.src = URL.createObjectURL(file);
        video.controls = true;
        return this.wrapPreview(video, file, "video");
      }
      renderAudio(file) {
        const audio = document.createElement("audio");
        audio.src = URL.createObjectURL(file);
        audio.controls = true;
        return this.wrapPreview(audio, file, "audio");
      }
      renderText(file) {
        const div = document.createElement("div");
        div.textContent = file.name;
        return this.wrapPreview(div, file, "text");
      }
      renderGeneric(file) {
        const div = document.createElement("div");
        div.textContent = file.name;
        return this.wrapPreview(div, file, "file");
      }
      wrapPreview(element, file, type) {
        const wrapper = document.createElement("div");
        wrapper.setAttribute("contenteditable", "false");
        wrapper.className = `file-preview ${type}-preview`;
        const thumb = document.createElement("div");
        thumb.classList.add("file-thumb");
        thumb.appendChild(element);
        wrapper.appendChild(thumb);
        const meta = document.createElement("div");
        meta.className = "file-options";
        const info = document.createElement("div");
        info.className = "file-info";
        info.appendChild(rowLabelEl("Name:", file.name));
        info.appendChild(rowLabelEl("Size:", printBytes(file.size)));
        meta.appendChild(info);
        const deleteButton = document.createElement("button");
        deleteButton.className = "remove-button";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => this.removePreview(wrapper));
        meta.appendChild(deleteButton);
        wrapper.appendChild(meta);
        console.log(`add file`, file);
        return wrapper;
      }
      removePreview(previewElement) {
        previewElement.remove();
        this.editor.applyChanges();
      }
    };
  }
});

// src/components/shared/BlobEditor/plugins/FilePlugin.ts
var FilePlugin;
var init_FilePlugin = __esm({
  "src/components/shared/BlobEditor/plugins/FilePlugin.ts"() {
    "use strict";
    init_preact_module();
    init_FilePreviewHandler();
    FilePlugin = class {
      // private editor: WEditor;
      // private container: HTMLElement;
      filePreviewHandler;
      input;
      initialize(editor, container) {
        this.filePreviewHandler = new FilePreviewHandler(editor);
        container.addEventListener("mousedown", this.handleMouseDown);
        container.addEventListener("dragstart", this.handleDragStart);
        container.addEventListener("dragover", this.handleDragOver);
        container.addEventListener("drop", this.handleDrop);
        this.input = document.createElement("input");
        this.input.type = "file";
        this.input.multiple = true;
        this.input.style.display = "none";
        this.input.addEventListener("change", (e4) => {
          this.insertFiles(Array.from(e4.target.files));
        });
        container.appendChild(this.input);
      }
      handleToolbarFile = (e4) => {
        this.input.click();
      };
      toolbar = {
        type: "button",
        icon: "/public/icons/icon-add-file.svg",
        label: "File",
        onClick: this.handleToolbarFile
      };
      handleDragOver = (event) => {
        console.log(`drag over`, event);
        event.preventDefault();
      };
      handleMouseDown = (event) => {
      };
      handleDragStart = (event) => {
        const target = event.target;
        const filePreview = target.closest(".file-preview");
        if (filePreview) {
          console.log("Dragging file preview:", filePreview);
          const dragPreview = filePreview.cloneNode(true);
          dragPreview.style.position = "absolute";
          dragPreview.style.top = "-9999px";
          document.body.appendChild(dragPreview);
          event.dataTransfer.setDragImage(dragPreview, 10, 10);
          setTimeout(() => document.body.removeChild(dragPreview), 0);
        }
      };
      insertFiles = (files) => {
        files.forEach((file) => {
          const selection = window.getSelection();
          console.log(`insert`, file, selection);
          if (selection && selection.rangeCount) {
            const range = selection.getRangeAt(0);
            this.filePreviewHandler.createPreview(file, range);
          }
        });
      };
      handleDrop = (e4) => {
        e4.preventDefault();
        if (!e4.dataTransfer) return;
        const files = Array.from(e4.dataTransfer.files);
        this.insertFiles(files);
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
    init_BlobService();
    init_WEditor();
    init_FilePlugin();
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
            let loadBlob;
            try {
              const blobs = await blobService.listBlobs();
              const mostRecentBlob = blobs.reduce(
                (latest, current) => !latest || current.dateUpdated > latest.dateUpdated ? current : latest,
                null
              );
              loadBlob = mostRecentBlob || new Blob2();
            } catch (error5) {
              console.error("Failed to load blobs:", error5);
              loadBlob = new Blob2();
            }
            setCurrentBlob(loadBlob);
          }
        };
        initBlob();
      }, [initialBlob]);
      y2(() => {
        if (currentBlob && containerRef.current && !editorRef.current) {
          editorRef.current = new WEditor(
            containerRef.current,
            onContentChanged,
            [
              new ToolbarPlugin(),
              new TabPlugin(),
              new FilePlugin(),
              new PastePlugin({ sanitize: false })
            ]
          );
          editorRef.current.loadBlob(currentBlob);
        }
      }, [currentBlob]);
      const saveBlob = (blob) => {
        blobService.saveBlob(blob);
      };
      const onContentChanged = (content) => {
        if (currentBlob) {
          currentBlob.content = content;
          currentBlob.dateUpdated = /* @__PURE__ */ new Date();
          saveBlob(currentBlob);
          setCurrentBlob({ ...currentBlob });
        }
      };
      const handleTitleChange = (e4) => {
        if (e4.target instanceof HTMLInputElement && currentBlob) {
          currentBlob.title = e4.target.value;
          currentBlob.dateUpdated = /* @__PURE__ */ new Date();
          saveBlob(currentBlob);
          setCurrentBlob({ ...currentBlob });
        }
      };
      if (!currentBlob) {
        return /* @__PURE__ */ u2("p", { class: "error-message", children: "Loading..." });
      }
      return /* @__PURE__ */ u2("div", { class: "blob-editor", style: { width: "100%", height: "100%", display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ u2(
          "input",
          {
            type: "text",
            value: currentBlob.title,
            onChange: handleTitleChange,
            class: "blob-title"
          }
        ),
        /* @__PURE__ */ u2("div", { ref: containerRef, class: "w-editor", style: { flexGrow: 1 } })
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
        get: function get2() {
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
        get: function get2() {
          return this.printRGB();
        }
      }, {
        key: "rgbaString",
        get: function get2() {
          return this.printRGB(true);
        }
      }, {
        key: "hsla",
        get: function get2() {
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
        get: function get2() {
          return this.printHSL();
        }
      }, {
        key: "hslaString",
        get: function get2() {
          return this.printHSL(true);
        }
      }, {
        key: "hex",
        get: function get2() {
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

// src/components/pages/Colors/utils.ts
function parseAndTokenizeText(text, config) {
  if (text.trim() === "") {
    return { colors: [], tokenizedText: "" };
  }
  const colorRegexes = [
    /#(?:[0-9a-fA-F]{8})/gi,
    // 8-character hex
    /#(?:[0-9a-fA-F]{6})/gi,
    // 6-character hex
    /rgba?\s*\(\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*,\s*(?:\d{1,3})\s*(?:\s*,\s*(?:[01](?:\.\d+)?|\.\d+|[01]))?\s*\)/gi,
    // RGBA/RGB
    /#(?:[0-9a-fA-F]{3})/gi
    // 3-character hex
  ];
  const colors = [];
  let tokenizedText = text;
  let idCounter = 0;
  const colorMap = /* @__PURE__ */ new Map();
  for (const regex of colorRegexes) {
    let match;
    while ((match = regex.exec(tokenizedText)) !== null) {
      const originalColor = match[0];
      const normalizedColor = normalizeColor(originalColor);
      let id;
      if (config?.combineSimilar) {
        id = colorMap.get(normalizedColor) ?? (() => {
          const newId = idCounter++;
          colorMap.set(normalizedColor, newId);
          return newId;
        })();
      } else {
        id = idCounter++;
      }
      const colorIndex = colors.findIndex((c3) => c3.id === id);
      if (colorIndex === -1) {
        colors.push({ id, color: originalColor });
      }
      const token2 = COLOR_TOKEN(id);
      const start = match.index;
      const end = start + originalColor.length;
      tokenizedText = tokenizedText.slice(0, start) + token2 + tokenizedText.slice(end);
      regex.lastIndex = start + token2.length;
    }
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
    const token2 = COLOR_TOKEN(id);
    const formattedColor = formatColor(color, modifiedColor);
    outputText = outputText.replace(new RegExp(token2, "g"), formattedColor);
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
  let normalized = color.toLowerCase();
  if (normalized.startsWith("rgba")) {
    return normalized.replace(/(rgba\(.+?),(\d+\.?\d*)\)/, (_2, rgbPart, alpha) => {
      return `${rgbPart},${parseFloat(alpha).toFixed(2)})`;
    });
  }
  if (normalized.startsWith("#")) {
    const rgba = hexToRgba(normalized);
    if (rgba) {
      normalized = rgba;
    }
  }
  return normalized;
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
var COLOR_TOKEN;
var init_utils = __esm({
  "src/components/pages/Colors/utils.ts"() {
    "use strict";
    init_preact_module();
    COLOR_TOKEN = (id) => `%%${id}%%`;
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
    Dropdown2 = ({ show, onShow, children }) => {
      const [isOpen, setIsOpen] = h2(show || false);
      const dropdownRef = A2(null);
      const hoverTimeout = A2(null);
      const handleToggle = q2(() => {
        setIsOpen(!isOpen);
        onShow(!isOpen);
      }, [isOpen]);
      const handleMouseEnter = q2(() => {
        if (hoverTimeout.current !== null) {
          clearTimeout(hoverTimeout.current);
          hoverTimeout.current = null;
        }
      }, []);
      y2(() => {
        setIsOpen(show);
      }, [show]);
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
      const [tempConfig, setTempConfig] = h2(config);
      const [backgroundPicker, setBackgroundPicker] = h2(null);
      const [textPicker, setTextPicker] = h2(null);
      const [showConfig, setShowConfig] = h2(false);
      const backgroundSwatchRef = A2(null);
      const textSwatchRef = A2(null);
      y2(() => {
        setTempConfig(config);
        if (backgroundSwatchRef.current && !backgroundPicker) {
          const newPicker = new Picker({
            parent: backgroundSwatchRef.current,
            color: tempConfig.colorMode === "dark" ? tempConfig.backgroundColorDark : tempConfig.backgroundColorLight,
            popup: "bottom",
            editor: true,
            onChange: (color) => {
              setTempConfig((prev) => ({
                ...prev,
                [prev.colorMode === "dark" ? "backgroundColorDark" : "backgroundColorLight"]: color.hex
              }));
            },
            onDone: (color) => {
              setTempConfig((prev) => ({
                ...prev,
                [prev.colorMode === "dark" ? "backgroundColorDark" : "backgroundColorLight"]: color.hex
              }));
            }
          });
          setBackgroundPicker(newPicker);
        } else if (backgroundPicker) {
          backgroundPicker.setColor(tempConfig.colorMode === "dark" ? tempConfig.backgroundColorDark : tempConfig.backgroundColorLight);
        }
        if (textSwatchRef.current && !textPicker) {
          const newTextPicker = new Picker({
            parent: textSwatchRef.current,
            color: tempConfig.colorMode === "dark" ? tempConfig.fontColorDark : tempConfig.fontColorLight,
            popup: "bottom",
            editor: true,
            onChange: (color) => {
              setTempConfig((prev) => ({
                ...prev,
                [prev.colorMode === "dark" ? "fontColorDark" : "fontColorLight"]: color.hex
              }));
            },
            onDone: (color) => {
              setTempConfig((prev) => ({
                ...prev,
                [prev.colorMode === "dark" ? "fontColorDark" : "fontColorLight"]: color.hex
              }));
            }
          });
          setTextPicker(newTextPicker);
        } else if (textPicker) {
          textPicker.setColor(tempConfig.colorMode === "dark" ? tempConfig.fontColorDark : tempConfig.fontColorLight);
        }
        return () => {
          backgroundPicker?.destroy();
          textPicker?.destroy();
        };
      }, [config, tempConfig]);
      const handleCombineSimilarChange = q2((e4) => {
        setTempConfig((prev) => ({ ...prev, combineSimilar: e4.target.checked }));
      }, []);
      const handleColorModeChange = q2((e4) => {
        const isDark = e4.target.checked;
        setTempConfig((prev) => ({ ...prev, colorMode: isDark ? "dark" : "light" }));
      }, []);
      const handleSave = q2(() => {
        onConfigChange(tempConfig);
        setShowConfig(false);
      }, [tempConfig, onConfigChange]);
      const handleCancel = q2(() => {
        setShowConfig(false);
        console.log(`cancel`);
      }, []);
      return /* @__PURE__ */ u2(Dropdown2, { onClose: handleCancel, show: showConfig, onShow: (s3) => setShowConfig(s3), children: [
        "  // Assuming Dropdown component can take an onClose prop",
        /* @__PURE__ */ u2("div", { style: { display: "flex", flexDirection: "column", padding: "10px" }, children: [
          /* @__PURE__ */ u2("label", { children: [
            /* @__PURE__ */ u2(
              "input",
              {
                type: "checkbox",
                checked: tempConfig.combineSimilar,
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
                checked: tempConfig.colorMode === "dark",
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
                  backgroundColor: tempConfig.colorMode === "dark" ? tempConfig.backgroundColorDark : tempConfig.backgroundColorLight,
                  marginLeft: "10px",
                  cursor: "pointer"
                },
                onClick: () => backgroundPicker?.show()
              }
            )
          ] }),
          /* @__PURE__ */ u2("div", { style: { display: "flex", alignItems: "center", marginTop: "10px" }, children: [
            /* @__PURE__ */ u2("span", { children: "Text Color" }),
            /* @__PURE__ */ u2(
              "div",
              {
                ref: textSwatchRef,
                style: {
                  color: tempConfig.colorMode === "dark" ? tempConfig.fontColorDark : tempConfig.fontColorLight,
                  marginLeft: "10px",
                  cursor: "pointer"
                },
                children: "Sample"
              }
            ),
            /* @__PURE__ */ u2(
              "button",
              {
                style: {
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: "inherit",
                  fontSize: "inherit"
                },
                onClick: () => textPicker?.show(),
                children: "Sample"
              }
            )
          ] }),
          /* @__PURE__ */ u2("div", { style: { display: "flex", justifyContent: "space-between", marginTop: "10px" }, children: [
            /* @__PURE__ */ u2("button", { onClick: handleCancel, children: "Cancel" }),
            /* @__PURE__ */ u2("button", { onClick: handleSave, children: "Save" })
          ] })
        ] })
      ] });
    };
  }
});

// src/components/pages/Colors/InputColumn.tsx
var InputColumn;
var init_InputColumn = __esm({
  "src/components/pages/Colors/InputColumn.tsx"() {
    "use strict";
    init_preact_module();
    init_utils();
    init_hooks_module();
    init_Config();
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
          const { colors, tokenizedText } = parseAndTokenizeText(textareaContent, config);
          console.log(`parsed`, colors, tokenizedText);
          localStorage.setItem("inputText", textareaContent);
          onColorsParsed(colors, tokenizedText);
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
    (function(global2, module2, define2) {
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
    (function(global2, module2, define2) {
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
    (function(global2, module2, define2) {
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
    (function(global2, module2, define2) {
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
    (function(global2, module2, define2) {
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
    (function(global2, module2, define2) {
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
    (function(global2, pool, math) {
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
            (global2.crypto || global2.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e4) {
          var browser = global2.navigator, plugins = browser && browser.plugins;
          return [+/* @__PURE__ */ new Date(), global2, plugins, global2.screen, tostring(pool)];
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
    import_seedrandom = __toESM(require_seedrandom2());
    init_utils();
    init_jsxRuntime_module();
    OutputColumn = ({ colors, tokenizedText, importedFileName }) => {
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
        const parsedColors = parseColorsWithPosition(tokenizedText);
        setColorsWithPosition(parsedColors);
        const updatedColorsWithPosition = parsedColors.map((parsed) => {
          const match = colors.find((c3) => c3.color === parsed.color);
          return match ? { ...parsed, modifiedColor: match.modifiedColor } : parsed;
        });
        const modifiedText = replaceColors(tokenizedText, updatedColorsWithPosition);
        setOutputTextModified(modifiedText);
      }, [colors, tokenizedText]);
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
        backgroundColorLight: "#f4f4f4",
        // Default light background
        backgroundColorDark: "#123",
        // Default dark background
        fontColorLight: "#333",
        // Default light text color
        fontColorDark: "#fed"
        // Default dark text color
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
            backgroundColor: config.colorMode == "dark" ? config.backgroundColorDark : config.backgroundColorLight,
            color: config.colorMode == "dark" ? config.fontColorDark : config.fontColorLight
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
            /* @__PURE__ */ u2(
              ColorEditColumn,
              {
                colors: modifiedColors,
                onColorsChanged: handleColorsChanged,
                config
              }
            ),
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
      DEFAULT_ROUTE: "/editor",
      routes: routes_default
    };
  }
});

// node_modules/routes/dist/routes.js
var require_routes = __commonJS({
  "node_modules/routes/dist/routes.js"(exports, module) {
    "use strict";
    init_preact_module();
    !function(e4) {
      if ("object" == typeof exports) module.exports = e4();
      else if ("function" == typeof define && define.amd) define(e4);
      else {
        var f4;
        "undefined" != typeof window ? f4 = window : "undefined" != typeof window ? f4 = window : "undefined" != typeof self && (f4 = self), f4.routes = e4();
      }
    }(function() {
      var define2, module2, exports2;
      return function e4(t3, n2, r3) {
        function s3(o4, u4) {
          if (!n2[o4]) {
            if (!t3[o4]) {
              var a3 = typeof __require == "function" && __require;
              if (!u4 && a3) return a3(o4, true);
              if (i4) return i4(o4, true);
              throw new Error("Cannot find module '" + o4 + "'");
            }
            var f4 = n2[o4] = { exports: {} };
            t3[o4][0].call(f4.exports, function(e5) {
              var n3 = t3[o4][1][e5];
              return s3(n3 ? n3 : e5);
            }, f4, f4.exports, e4, t3, n2, r3);
          }
          return n2[o4].exports;
        }
        var i4 = typeof __require == "function" && __require;
        for (var o3 = 0; o3 < r3.length; o3++) s3(r3[o3]);
        return s3;
      }({ 1: [function(_dereq_, module3, exports3) {
        var localRoutes = [];
        var Route = function(path) {
          var src, re, keys = [];
          if (path instanceof RegExp) {
            re = path;
            src = path.toString();
          } else {
            re = pathToRegExp(path, keys);
            src = path;
          }
          return {
            re,
            src: path.toString(),
            keys
          };
        };
        var pathToRegExp = function(path, keys) {
          path = path.concat("/?").replace(/\/\(/g, "(?:/").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, function(_2, slash, format, key, capture, optional) {
            if (_2 === "*") {
              keys.push(void 0);
              return _2;
            }
            keys.push(key);
            slash = slash || "";
            return "" + (optional ? "" : slash) + "(?:" + (optional ? slash : "") + (format || "") + (capture || "([^/]+?)") + ")" + (optional || "");
          }).replace(/([\/.])/g, "\\$1").replace(/\*/g, "(.*)");
          return new RegExp("^" + path + "$", "i");
        };
        var match = function(routes3, uri, startAt) {
          var captures, i4 = startAt || 0;
          for (var len = routes3.length; i4 < len; ++i4) {
            var route = routes3[i4], re = route.re, keys = route.keys, splats = [], params = {};
            if (captures = uri.match(re)) {
              for (var j3 = 1, len = captures.length; j3 < len; ++j3) {
                var key = keys[j3 - 1], val = typeof captures[j3] === "string" ? unescape(captures[j3]) : captures[j3];
                if (key) {
                  params[key] = val;
                } else {
                  splats.push(val);
                }
              }
              return {
                params,
                splats,
                route: route.src,
                next: i4 + 1
              };
            }
          }
        };
        var Router2 = function() {
          return {
            routes: [],
            routeMap: {},
            addRoute: function(path, fn) {
              if (!path) throw new Error(" route requires a path");
              if (!fn) throw new Error(" route " + path.toString() + " requires a callback");
              if (this.routeMap[path]) {
                throw new Error("path is already defined: " + path);
              }
              var route = Route(path);
              route.fn = fn;
              this.routes.push(route);
              this.routeMap[path] = fn;
            },
            removeRoute: function(path) {
              if (!path) throw new Error(" route requires a path");
              if (!this.routeMap[path]) {
                throw new Error("path does not exist: " + path);
              }
              var match2;
              var newRoutes = [];
              for (var i4 = 0; i4 < this.routes.length; i4++) {
                var route = this.routes[i4];
                if (route.src !== path) {
                  newRoutes.push(route);
                }
              }
              this.routes = newRoutes;
              delete this.routeMap[path];
            },
            match: function(pathname, startAt) {
              var route = match(this.routes, pathname, startAt);
              if (route) {
                route.fn = this.routeMap[route.route];
                route.next = this.match.bind(this, pathname, route.next);
              }
              return route;
            }
          };
        };
        Router2.Route = Route;
        Router2.pathToRegExp = pathToRegExp;
        Router2.match = match;
        Router2.Router = Router2;
        module3.exports = Router2;
      }, {}] }, {}, [1])(1);
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
init_DebugPanel();
init_logging();
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
    addLogModule(new DebugPanelLogModule({ show: true }));
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
var import_config2 = __toESM(require_config());

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

// src/lib/Router.ts
init_preact_module();
var import_config = __toESM(require_config());

// node_modules/query-string/index.js
init_preact_module();

// node_modules/query-string/base.js
var base_exports = {};
__export(base_exports, {
  exclude: () => exclude,
  extract: () => extract,
  parse: () => parse,
  parseUrl: () => parseUrl,
  pick: () => pick,
  stringify: () => stringify,
  stringifyUrl: () => stringifyUrl
});
init_preact_module();

// node_modules/decode-uri-component/index.js
init_preact_module();
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
  try {
    return [decodeURIComponent(components.join(""))];
  } catch {
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;
  const left = components.slice(0, split);
  const right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch {
    let tokens = input.match(singleMatcher) || [];
    for (let i4 = 1; i4 < tokens.length; i4++) {
      input = decodeComponents(tokens, i4).join("");
      tokens = input.match(singleMatcher) || [];
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  const replaceMap = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  };
  let match = multiMatcher.exec(input);
  while (match) {
    try {
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch {
      const result = decode(match[0]);
      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }
    match = multiMatcher.exec(input);
  }
  replaceMap["%C2"] = "\uFFFD";
  const entries = Object.keys(replaceMap);
  for (const key of entries) {
    input = input.replace(new RegExp(key, "g"), replaceMap[key]);
  }
  return input;
}
function decodeUriComponent(encodedURI) {
  if (typeof encodedURI !== "string") {
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
  }
  try {
    return decodeURIComponent(encodedURI);
  } catch {
    return customDecodeURIComponent(encodedURI);
  }
}

// node_modules/filter-obj/index.js
init_preact_module();
function includeKeys(object, predicate) {
  const result = {};
  if (Array.isArray(predicate)) {
    for (const key of predicate) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor?.enumerable) {
        Object.defineProperty(result, key, descriptor);
      }
    }
  } else {
    for (const key of Reflect.ownKeys(object)) {
      const descriptor = Object.getOwnPropertyDescriptor(object, key);
      if (descriptor.enumerable) {
        const value = object[key];
        if (predicate(key, value, object)) {
          Object.defineProperty(result, key, descriptor);
        }
      }
    }
  }
  return result;
}

// node_modules/split-on-first/index.js
init_preact_module();
function splitOnFirst(string, separator) {
  if (!(typeof string === "string" && typeof separator === "string")) {
    throw new TypeError("Expected the arguments to be of type `string`");
  }
  if (string === "" || separator === "") {
    return [];
  }
  const separatorIndex = string.indexOf(separator);
  if (separatorIndex === -1) {
    return [];
  }
  return [
    string.slice(0, separatorIndex),
    string.slice(separatorIndex + separator.length)
  ];
}

// node_modules/query-string/base.js
var isNullOrUndefined = (value) => value === null || value === void 0;
var strictUriEncode = (string) => encodeURIComponent(string).replaceAll(/[!'()*]/g, (x2) => `%${x2.charCodeAt(0).toString(16).toUpperCase()}`);
var encodeFragmentIdentifier = Symbol("encodeFragmentIdentifier");
function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case "index": {
      return (key) => (result, value) => {
        const index = result.length;
        if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
          return result;
        }
        if (value === null) {
          return [
            ...result,
            [encode(key, options), "[", index, "]"].join("")
          ];
        }
        return [
          ...result,
          [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
        ];
      };
    }
    case "bracket": {
      return (key) => (result, value) => {
        if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
          return result;
        }
        if (value === null) {
          return [
            ...result,
            [encode(key, options), "[]"].join("")
          ];
        }
        return [
          ...result,
          [encode(key, options), "[]=", encode(value, options)].join("")
        ];
      };
    }
    case "colon-list-separator": {
      return (key) => (result, value) => {
        if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
          return result;
        }
        if (value === null) {
          return [
            ...result,
            [encode(key, options), ":list="].join("")
          ];
        }
        return [
          ...result,
          [encode(key, options), ":list=", encode(value, options)].join("")
        ];
      };
    }
    case "comma":
    case "separator":
    case "bracket-separator": {
      const keyValueSeparator = options.arrayFormat === "bracket-separator" ? "[]=" : "=";
      return (key) => (result, value) => {
        if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
          return result;
        }
        value = value === null ? "" : value;
        if (result.length === 0) {
          return [[encode(key, options), keyValueSeparator, encode(value, options)].join("")];
        }
        return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
      };
    }
    default: {
      return (key) => (result, value) => {
        if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
          return result;
        }
        if (value === null) {
          return [
            ...result,
            encode(key, options)
          ];
        }
        return [
          ...result,
          [encode(key, options), "=", encode(value, options)].join("")
        ];
      };
    }
  }
}
function parserForArrayFormat(options) {
  let result;
  switch (options.arrayFormat) {
    case "index": {
      return (key, value, accumulator) => {
        result = /\[(\d*)]$/.exec(key);
        key = key.replace(/\[\d*]$/, "");
        if (!result) {
          accumulator[key] = value;
          return;
        }
        if (accumulator[key] === void 0) {
          accumulator[key] = {};
        }
        accumulator[key][result[1]] = value;
      };
    }
    case "bracket": {
      return (key, value, accumulator) => {
        result = /(\[])$/.exec(key);
        key = key.replace(/\[]$/, "");
        if (!result) {
          accumulator[key] = value;
          return;
        }
        if (accumulator[key] === void 0) {
          accumulator[key] = [value];
          return;
        }
        accumulator[key] = [...accumulator[key], value];
      };
    }
    case "colon-list-separator": {
      return (key, value, accumulator) => {
        result = /(:list)$/.exec(key);
        key = key.replace(/:list$/, "");
        if (!result) {
          accumulator[key] = value;
          return;
        }
        if (accumulator[key] === void 0) {
          accumulator[key] = [value];
          return;
        }
        accumulator[key] = [...accumulator[key], value];
      };
    }
    case "comma":
    case "separator": {
      return (key, value, accumulator) => {
        const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
        const isEncodedArray = typeof value === "string" && !isArray && decode2(value, options).includes(options.arrayFormatSeparator);
        value = isEncodedArray ? decode2(value, options) : value;
        const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
        accumulator[key] = newValue;
      };
    }
    case "bracket-separator": {
      return (key, value, accumulator) => {
        const isArray = /(\[])$/.test(key);
        key = key.replace(/\[]$/, "");
        if (!isArray) {
          accumulator[key] = value ? decode2(value, options) : value;
          return;
        }
        const arrayValue = value === null ? [] : decode2(value, options).split(options.arrayFormatSeparator);
        if (accumulator[key] === void 0) {
          accumulator[key] = arrayValue;
          return;
        }
        accumulator[key] = [...accumulator[key], ...arrayValue];
      };
    }
    default: {
      return (key, value, accumulator) => {
        if (accumulator[key] === void 0) {
          accumulator[key] = value;
          return;
        }
        accumulator[key] = [...[accumulator[key]].flat(), value];
      };
    }
  }
}
function validateArrayFormatSeparator(value) {
  if (typeof value !== "string" || value.length !== 1) {
    throw new TypeError("arrayFormatSeparator must be single character string");
  }
}
function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }
  return value;
}
function decode2(value, options) {
  if (options.decode) {
    return decodeUriComponent(value);
  }
  return value;
}
function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }
  if (typeof input === "object") {
    return keysSorter(Object.keys(input)).sort((a3, b2) => Number(a3) - Number(b2)).map((key) => input[key]);
  }
  return input;
}
function removeHash(input) {
  const hashStart = input.indexOf("#");
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }
  return input;
}
function getHash(url) {
  let hash = "";
  const hashStart = url.indexOf("#");
  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }
  return hash;
}
function parseValue(value, options, type) {
  if (type === "string" && typeof value === "string") {
    return value;
  }
  if (typeof type === "function" && typeof value === "string") {
    return type(value);
  }
  if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
    return value.toLowerCase() === "true";
  }
  if (type === "number" && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
    return Number(value);
  }
  if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
    return Number(value);
  }
  return value;
}
function extract(input) {
  input = removeHash(input);
  const queryStart = input.indexOf("?");
  if (queryStart === -1) {
    return "";
  }
  return input.slice(queryStart + 1);
}
function parse(query, options) {
  options = {
    decode: true,
    sort: true,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    parseNumbers: false,
    parseBooleans: false,
    types: /* @__PURE__ */ Object.create(null),
    ...options
  };
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  const formatter = parserForArrayFormat(options);
  const returnValue = /* @__PURE__ */ Object.create(null);
  if (typeof query !== "string") {
    return returnValue;
  }
  query = query.trim().replace(/^[?#&]/, "");
  if (!query) {
    return returnValue;
  }
  for (const parameter of query.split("&")) {
    if (parameter === "") {
      continue;
    }
    const parameter_ = options.decode ? parameter.replaceAll("+", " ") : parameter;
    let [key, value] = splitOnFirst(parameter_, "=");
    if (key === void 0) {
      key = parameter_;
    }
    value = value === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(options.arrayFormat) ? value : decode2(value, options);
    formatter(decode2(key, options), value, returnValue);
  }
  for (const [key, value] of Object.entries(returnValue)) {
    if (typeof value === "object" && value !== null && options.types[key] !== "string") {
      for (const [key2, value2] of Object.entries(value)) {
        const type = options.types[key] ? options.types[key].replace("[]", "") : void 0;
        value[key2] = parseValue(value2, options, type);
      }
    } else if (typeof value === "object" && value !== null && options.types[key] === "string") {
      returnValue[key] = Object.values(value).join(options.arrayFormatSeparator);
    } else {
      returnValue[key] = parseValue(value, options, options.types[key]);
    }
  }
  if (options.sort === false) {
    return returnValue;
  }
  return (options.sort === true ? Object.keys(returnValue).sort() : Object.keys(returnValue).sort(options.sort)).reduce((result, key) => {
    const value = returnValue[key];
    result[key] = Boolean(value) && typeof value === "object" && !Array.isArray(value) ? keysSorter(value) : value;
    return result;
  }, /* @__PURE__ */ Object.create(null));
}
function stringify(object, options) {
  if (!object) {
    return "";
  }
  options = {
    encode: true,
    strict: true,
    arrayFormat: "none",
    arrayFormatSeparator: ",",
    ...options
  };
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
  const formatter = encoderForArrayFormat(options);
  const objectCopy = {};
  for (const [key, value] of Object.entries(object)) {
    if (!shouldFilter(key)) {
      objectCopy[key] = value;
    }
  }
  const keys = Object.keys(objectCopy);
  if (options.sort !== false) {
    keys.sort(options.sort);
  }
  return keys.map((key) => {
    const value = object[key];
    if (value === void 0) {
      return "";
    }
    if (value === null) {
      return encode(key, options);
    }
    if (Array.isArray(value)) {
      if (value.length === 0 && options.arrayFormat === "bracket-separator") {
        return encode(key, options) + "[]";
      }
      return value.reduce(formatter(key), []).join("&");
    }
    return encode(key, options) + "=" + encode(value, options);
  }).filter((x2) => x2.length > 0).join("&");
}
function parseUrl(url, options) {
  options = {
    decode: true,
    ...options
  };
  let [url_, hash] = splitOnFirst(url, "#");
  if (url_ === void 0) {
    url_ = url;
  }
  return {
    url: url_?.split("?")?.[0] ?? "",
    query: parse(extract(url), options),
    ...options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode2(hash, options) } : {}
  };
}
function stringifyUrl(object, options) {
  options = {
    encode: true,
    strict: true,
    [encodeFragmentIdentifier]: true,
    ...options
  };
  const url = removeHash(object.url).split("?")[0] || "";
  const queryFromUrl = extract(object.url);
  const query = {
    ...parse(queryFromUrl, { sort: false }),
    ...object.query
  };
  let queryString = stringify(query, options);
  queryString &&= `?${queryString}`;
  let hash = getHash(object.url);
  if (typeof object.fragmentIdentifier === "string") {
    const urlObjectForFragmentEncode = new URL(url);
    urlObjectForFragmentEncode.hash = object.fragmentIdentifier;
    hash = options[encodeFragmentIdentifier] ? urlObjectForFragmentEncode.hash : `#${object.fragmentIdentifier}`;
  }
  return `${url}${queryString}${hash}`;
}
function pick(input, filter, options) {
  options = {
    parseFragmentIdentifier: true,
    [encodeFragmentIdentifier]: false,
    ...options
  };
  const { url, query, fragmentIdentifier } = parseUrl(input, options);
  return stringifyUrl({
    url,
    query: includeKeys(query, filter),
    fragmentIdentifier
  }, options);
}
function exclude(input, filter, options) {
  const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
  return pick(input, exclusionFilter, options);
}

// node_modules/query-string/index.js
var query_string_default = base_exports;

// src/lib/Router.ts
var import_routes = __toESM(require_routes());
var ROUTE_CHANGE_EVENT = "route-change";
var Router = class {
  parser = void 0;
  routes = import_config.routes;
  route = void 0;
  routeParams = void 0;
  routeArgs;
  constructor() {
    this.parser = (0, import_routes.default)();
    this.registerRoutes(import_config.routes);
    window.addEventListener("popstate", (e4) => {
      if (e4.state?.url) this.navigate(e4.state?.url);
    });
  }
  registerRoutes = (routes3) => {
    if (this.parser) {
      Object.keys(routes3).forEach((r3) => this.parser.addRoute(r3, this._onRouteChange));
    }
  };
  // try to find and load a route, change page url, and emit route-change event
  navigate = (url, emit = true) => {
    let r3 = this.loadUrl(url);
    if (!r3 && url != "/page-not-found") return this.navigate("/page-not-found");
    window.history.pushState({ url, params: r3.params }, "", url);
    if (emit) EventService_default.dispatch(ROUTE_CHANGE_EVENT, r3);
  };
  // given a url, try to match a route and set variables.
  loadUrl = (url) => {
    let qp = url.indexOf("?");
    let r3 = this.parser.match(qp != -1 ? url.slice(0, qp) : url);
    if (r3) {
      let args = qp != -1 ? url.slice(qp, url.length) : "";
      r3.args = query_string_default.parse(args);
      r3.fn(r3);
      return r3;
    } else {
      return false;
    }
  };
  // auto-change handler from url change.
  _onRouteChange = (r3) => {
    this.route = r3.route;
    this.routeParams = r3.params;
  };
};
var router = new Router();

// src/lib/hooks/useRouter.ts
init_hooks_module();
function useRouter() {
  const [route, setRoute] = h2(void 0);
  const [routeParams, setRouteParams] = h2(void 0);
  const [routeArgs, setRouteArgs] = h2(void 0);
  function handleRouteChange(e4) {
    setRoute(e4.target.route);
    setRouteParams(e4.target.params);
    setRouteArgs(e4.target.args);
  }
  y2(() => {
    EventService_default.subscribe(ROUTE_CHANGE_EVENT, handleRouteChange);
    return () => {
      EventService_default.unsubscribe(ROUTE_CHANGE_EVENT, handleRouteChange);
    };
  }, []);
  return { route, routeParams, routeArgs, navigate: router.navigate };
}

// src/components/shared/RouteContext/RouteContext.tsx
init_hooks_module();
function RouteContext() {
  const { route, routeParams, navigate } = useRouter();
  y2(() => {
    let l3 = location.pathname;
    if (l3 == "/" || l3 == "") l3 = import_config2.DEFAULT_ROUTE;
    else l3 += location.search;
    if (!route) navigate(l3);
  }, []);
  return route ? typeof import_config2.routes[route] != "undefined" ? import_config2.routes[route](routeParams) : "Not found." : "";
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
