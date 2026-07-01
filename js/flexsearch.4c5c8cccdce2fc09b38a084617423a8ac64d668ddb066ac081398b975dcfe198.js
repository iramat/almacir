(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __pow = Math.pow;
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // (disabled):worker_threads
  var require_worker_threads = __commonJS({
    "(disabled):worker_threads"() {
    }
  });

  // node_modules/flexsearch/dist/flexsearch.bundle.module.min.mjs
  var import_meta = {};
  var w;
  function H(a, c, b) {
    const e = typeof b, d = typeof a;
    if (e !== "undefined") {
      if (d !== "undefined") {
        if (b) {
          if (d === "function" && e === d) return function(k) {
            return a(b(k));
          };
          c = a.constructor;
          if (c === b.constructor) {
            if (c === Array) return b.concat(a);
            if (c === Map) {
              var f = new Map(b);
              for (var g of a) f.set(g[0], g[1]);
              return f;
            }
            if (c === Set) {
              g = new Set(b);
              for (f of a.values()) g.add(f);
              return g;
            }
          }
        }
        return a;
      }
      return b;
    }
    return d === "undefined" ? c : a;
  }
  function aa(a, c) {
    return typeof a === "undefined" ? c : a;
  }
  function I() {
    return /* @__PURE__ */ Object.create(null);
  }
  function M(a) {
    return typeof a === "string";
  }
  function ba(a) {
    return typeof a === "object";
  }
  function ca(a, c) {
    if (M(c)) a = a[c];
    else for (let b = 0; a && b < c.length; b++) a = a[c[b]];
    return a;
  }
  var ea = /[^\p{L}\p{N}]+/u;
  var fa = /(\d{3})/g;
  var ha = /(\D)(\d{3})/g;
  var ia = /(\d{3})(\D)/g;
  var ja = /[\u0300-\u036f]/g;
  function ka(a = {}) {
    if (!this || this.constructor !== ka) return new ka(...arguments);
    if (arguments.length) for (a = 0; a < arguments.length; a++) this.assign(arguments[a]);
    else this.assign(a);
  }
  w = ka.prototype;
  w.assign = function(a) {
    this.normalize = H(a.normalize, true, this.normalize);
    let c = a.include, b = c || a.exclude || a.split, e;
    if (b || b === "") {
      if (typeof b === "object" && b.constructor !== RegExp) {
        let d = "";
        e = !c;
        c || (d += "\\p{Z}");
        b.letter && (d += "\\p{L}");
        b.number && (d += "\\p{N}", e = !!c);
        b.symbol && (d += "\\p{S}");
        b.punctuation && (d += "\\p{P}");
        b.control && (d += "\\p{C}");
        if (b = b.char) d += typeof b === "object" ? b.join("") : b;
        try {
          this.split = new RegExp("[" + (c ? "^" : "") + d + "]+", "u");
        } catch (f) {
          this.split = /\s+/;
        }
      } else this.split = b, e = b === false || "a1a".split(b).length < 2;
      this.numeric = H(a.numeric, e);
    } else {
      try {
        this.split = H(this.split, ea);
      } catch (d) {
        this.split = /\s+/;
      }
      this.numeric = H(a.numeric, H(this.numeric, true));
    }
    this.prepare = H(a.prepare, null, this.prepare);
    this.finalize = H(a.finalize, null, this.finalize);
    b = a.filter;
    this.filter = typeof b === "function" ? b : H(b && new Set(b), null, this.filter);
    this.dedupe = H(a.dedupe, true, this.dedupe);
    this.matcher = H((b = a.matcher) && new Map(b), null, this.matcher);
    this.mapper = H((b = a.mapper) && new Map(b), null, this.mapper);
    this.stemmer = H(
      (b = a.stemmer) && new Map(b),
      null,
      this.stemmer
    );
    this.replacer = H(a.replacer, null, this.replacer);
    this.minlength = H(a.minlength, 1, this.minlength);
    this.maxlength = H(a.maxlength, 1024, this.maxlength);
    this.rtl = H(a.rtl, false, this.rtl);
    if (this.cache = b = H(a.cache, true, this.cache)) this.F = null, this.L = typeof b === "number" ? b : 2e5, this.B = /* @__PURE__ */ new Map(), this.D = /* @__PURE__ */ new Map(), this.I = this.H = 128;
    this.h = "";
    this.J = null;
    this.A = "";
    this.K = null;
    if (this.matcher) for (const d of this.matcher.keys()) this.h += (this.h ? "|" : "") + d;
    if (this.stemmer) for (const d of this.stemmer.keys()) this.A += (this.A ? "|" : "") + d;
    return this;
  };
  w.addStemmer = function(a, c) {
    this.stemmer || (this.stemmer = /* @__PURE__ */ new Map());
    this.stemmer.set(a, c);
    this.A += (this.A ? "|" : "") + a;
    this.K = null;
    this.cache && Q(this);
    return this;
  };
  w.addFilter = function(a) {
    typeof a === "function" ? this.filter = a : (this.filter || (this.filter = /* @__PURE__ */ new Set()), this.filter.add(a));
    this.cache && Q(this);
    return this;
  };
  w.addMapper = function(a, c) {
    if (typeof a === "object") return this.addReplacer(a, c);
    if (a.length > 1) return this.addMatcher(a, c);
    this.mapper || (this.mapper = /* @__PURE__ */ new Map());
    this.mapper.set(a, c);
    this.cache && Q(this);
    return this;
  };
  w.addMatcher = function(a, c) {
    if (typeof a === "object") return this.addReplacer(a, c);
    if (a.length < 2 && (this.dedupe || this.mapper)) return this.addMapper(a, c);
    this.matcher || (this.matcher = /* @__PURE__ */ new Map());
    this.matcher.set(a, c);
    this.h += (this.h ? "|" : "") + a;
    this.J = null;
    this.cache && Q(this);
    return this;
  };
  w.addReplacer = function(a, c) {
    if (typeof a === "string") return this.addMatcher(a, c);
    this.replacer || (this.replacer = []);
    this.replacer.push(a, c);
    this.cache && Q(this);
    return this;
  };
  w.encode = function(a, c) {
    if (this.cache && a.length <= this.H) if (this.F) {
      if (this.B.has(a)) return this.B.get(a);
    } else this.F = setTimeout(Q, 50, this);
    this.normalize && (typeof this.normalize === "function" ? a = this.normalize(a) : a = ja ? a.normalize("NFKD").replace(ja, "").toLowerCase() : a.toLowerCase());
    this.prepare && (a = this.prepare(a));
    this.numeric && a.length > 3 && (a = a.replace(ha, "$1 $2").replace(ia, "$1 $2").replace(fa, "$1 "));
    const b = !(this.dedupe || this.mapper || this.filter || this.matcher || this.stemmer || this.replacer);
    let e = [], d = I(), f, g, k = this.split || this.split === "" ? a.split(this.split) : [a];
    for (let l = 0, m, p; l < k.length; l++) if ((m = p = k[l]) && !(m.length < this.minlength || m.length > this.maxlength)) {
      if (c) {
        if (d[m]) continue;
        d[m] = 1;
      } else {
        if (f === m) continue;
        f = m;
      }
      if (b) e.push(m);
      else if (!this.filter || (typeof this.filter === "function" ? this.filter(m) : !this.filter.has(m))) {
        if (this.cache && m.length <= this.I) if (this.F) {
          var h = this.D.get(m);
          if (h || h === "") {
            h && e.push(h);
            continue;
          }
        } else this.F = setTimeout(Q, 50, this);
        if (this.stemmer) {
          this.K || (this.K = new RegExp("(?!^)(" + this.A + ")$"));
          let u;
          for (; u !== m && m.length > 2; ) u = m, m = m.replace(this.K, (r) => this.stemmer.get(r));
        }
        if (m && (this.mapper || this.dedupe && m.length > 1)) {
          h = "";
          for (let u = 0, r = "", t, n; u < m.length; u++) t = m.charAt(u), t === r && this.dedupe || ((n = this.mapper && this.mapper.get(t)) || n === "" ? n === r && this.dedupe || !(r = n) || (h += n) : h += r = t);
          m = h;
        }
        this.matcher && m.length > 1 && (this.J || (this.J = new RegExp("(" + this.h + ")", "g")), m = m.replace(this.J, (u) => this.matcher.get(u)));
        if (m && this.replacer) for (h = 0; m && h < this.replacer.length; h += 2) m = m.replace(
          this.replacer[h],
          this.replacer[h + 1]
        );
        this.cache && p.length <= this.I && (this.D.set(p, m), this.D.size > this.L && (this.D.clear(), this.I = this.I / 1.1 | 0));
        if (m) {
          if (m !== p) if (c) {
            if (d[m]) continue;
            d[m] = 1;
          } else {
            if (g === m) continue;
            g = m;
          }
          e.push(m);
        }
      }
    }
    this.finalize && (e = this.finalize(e) || e);
    this.cache && a.length <= this.H && (this.B.set(a, e), this.B.size > this.L && (this.B.clear(), this.H = this.H / 1.1 | 0));
    return e;
  };
  function Q(a) {
    a.F = null;
    a.B.clear();
    a.D.clear();
  }
  function la(a, c, b) {
    b || (c || typeof a !== "object" ? typeof c === "object" && (b = c, c = 0) : b = a);
    b && (a = b.query || a, c = b.limit || c);
    let e = "" + (c || 0);
    b && (e += (b.offset || 0) + !!b.context + !!b.suggest + (b.resolve !== false) + (b.resolution || this.resolution) + (b.boost || 0));
    a = ("" + a).toLowerCase();
    this.cache || (this.cache = new ma());
    let d = this.cache.get(a + e);
    if (!d) {
      const f = b && b.cache;
      f && (b.cache = false);
      d = this.search(a, c, b);
      f && (b.cache = f);
      this.cache.set(a + e, d);
    }
    return d;
  }
  function ma(a) {
    this.limit = a && a !== true ? a : 1e3;
    this.cache = /* @__PURE__ */ new Map();
    this.h = "";
  }
  ma.prototype.set = function(a, c) {
    this.cache.set(this.h = a, c);
    this.cache.size > this.limit && this.cache.delete(this.cache.keys().next().value);
  };
  ma.prototype.get = function(a) {
    const c = this.cache.get(a);
    c && this.h !== a && (this.cache.delete(a), this.cache.set(this.h = a, c));
    return c;
  };
  ma.prototype.remove = function(a) {
    for (const c of this.cache) {
      const b = c[0];
      c[1].includes(a) && this.cache.delete(b);
    }
  };
  ma.prototype.clear = function() {
    this.cache.clear();
    this.h = "";
  };
  var na = { normalize: false, numeric: false, dedupe: false };
  var oa = {};
  var ra = /* @__PURE__ */ new Map([["b", "p"], ["v", "f"], ["w", "f"], ["z", "s"], ["x", "s"], ["d", "t"], ["n", "m"], ["c", "k"], ["g", "k"], ["j", "k"], ["q", "k"], ["i", "e"], ["y", "e"], ["u", "o"]]);
  var sa = /* @__PURE__ */ new Map([["ae", "a"], ["oe", "o"], ["sh", "s"], ["kh", "k"], ["th", "t"], ["ph", "f"], ["pf", "f"]]);
  var ta = [/([^aeo])h(.)/g, "$1$2", /([aeo])h([^aeo]|$)/g, "$1$2", /(.)\1+/g, "$1"];
  var ua = { a: "", e: "", i: "", o: "", u: "", y: "", b: 1, f: 1, p: 1, v: 1, c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2, "\xDF": 2, d: 3, t: 3, l: 4, m: 5, n: 5, r: 6 };
  var va = { Exact: na, Default: oa, Normalize: oa, LatinBalance: { mapper: ra }, LatinAdvanced: { mapper: ra, matcher: sa, replacer: ta }, LatinExtra: { mapper: ra, replacer: ta.concat([/(?!^)[aeo]/g, ""]), matcher: sa }, LatinSoundex: { dedupe: false, include: { letter: true }, finalize: function(a) {
    for (let b = 0; b < a.length; b++) {
      var c = a[b];
      let e = c.charAt(0), d = ua[e];
      for (let f = 1, g; f < c.length && (g = c.charAt(f), g === "h" || g === "w" || !(g = ua[g]) || g === d || (e += g, d = g, e.length !== 4)); f++) ;
      a[b] = e;
    }
  } }, CJK: { split: "" }, LatinExact: na, LatinDefault: oa, LatinSimple: oa };
  function wa(a, c, b, e) {
    let d = [];
    for (let f = 0, g; f < a.index.length; f++) if (g = a.index[f], c >= g.length) c -= g.length;
    else {
      c = g[e ? "splice" : "slice"](c, b);
      const k = c.length;
      if (k && (d = d.length ? d.concat(c) : c, b -= k, e && (a.length -= k), !b)) break;
      c = 0;
    }
    return d;
  }
  function xa(a) {
    if (!this || this.constructor !== xa) return new xa(a);
    this.index = a ? [a] : [];
    this.length = a ? a.length : 0;
    const c = this;
    return new Proxy([], { get(b, e) {
      if (e === "length") return c.length;
      if (e === "push") return function(d) {
        c.index[c.index.length - 1].push(d);
        c.length++;
      };
      if (e === "pop") return function() {
        if (c.length) return c.length--, c.index[c.index.length - 1].pop();
      };
      if (e === "indexOf") return function(d) {
        let f = 0;
        for (let g = 0, k, h; g < c.index.length; g++) {
          k = c.index[g];
          h = k.indexOf(d);
          if (h >= 0) return f + h;
          f += k.length;
        }
        return -1;
      };
      if (e === "includes") return function(d) {
        for (let f = 0; f < c.index.length; f++) if (c.index[f].includes(d)) return true;
        return false;
      };
      if (e === "slice") return function(d, f) {
        return wa(c, d || 0, f || c.length, false);
      };
      if (e === "splice") return function(d, f) {
        return wa(c, d || 0, f || c.length, true);
      };
      if (e === "constructor") return Array;
      if (typeof e !== "symbol") return (b = c.index[e / __pow(2, 31) | 0]) && b[e];
    }, set(b, e, d) {
      b = e / __pow(2, 31) | 0;
      (c.index[b] || (c.index[b] = []))[e] = d;
      c.length++;
      return true;
    } });
  }
  xa.prototype.clear = function() {
    this.index.length = 0;
  };
  xa.prototype.push = function() {
  };
  function R(a = 8) {
    if (!this || this.constructor !== R) return new R(a);
    this.index = I();
    this.h = [];
    this.size = 0;
    a > 32 ? (this.B = Aa, this.A = BigInt(a)) : (this.B = Ba, this.A = a);
  }
  R.prototype.get = function(a) {
    const c = this.index[this.B(a)];
    return c && c.get(a);
  };
  R.prototype.set = function(a, c) {
    var b = this.B(a);
    let e = this.index[b];
    e ? (b = e.size, e.set(a, c), (b -= e.size) && this.size++) : (this.index[b] = e = /* @__PURE__ */ new Map([[a, c]]), this.h.push(e), this.size++);
  };
  function S(a = 8) {
    if (!this || this.constructor !== S) return new S(a);
    this.index = I();
    this.h = [];
    this.size = 0;
    a > 32 ? (this.B = Aa, this.A = BigInt(a)) : (this.B = Ba, this.A = a);
  }
  S.prototype.add = function(a) {
    var c = this.B(a);
    let b = this.index[c];
    b ? (c = b.size, b.add(a), (c -= b.size) && this.size++) : (this.index[c] = b = /* @__PURE__ */ new Set([a]), this.h.push(b), this.size++);
  };
  w = R.prototype;
  w.has = S.prototype.has = function(a) {
    const c = this.index[this.B(a)];
    return c && c.has(a);
  };
  w.delete = S.prototype.delete = function(a) {
    const c = this.index[this.B(a)];
    c && c.delete(a) && this.size--;
  };
  w.clear = S.prototype.clear = function() {
    this.index = I();
    this.h = [];
    this.size = 0;
  };
  w.values = S.prototype.values = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].values()) yield c;
  };
  w.keys = S.prototype.keys = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].keys()) yield c;
  };
  w.entries = S.prototype.entries = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].entries()) yield c;
  };
  function Ba(a) {
    let c = __pow(2, this.A) - 1;
    if (typeof a == "number") return a & c;
    let b = 0, e = this.A + 1;
    for (let d = 0; d < a.length; d++) b = (b * e ^ a.charCodeAt(d)) & c;
    return this.A === 32 ? b + __pow(2, 31) : b;
  }
  function Aa(a) {
    let c = __pow(BigInt(2), this.A) - BigInt(1);
    var b = typeof a;
    if (b === "bigint") return a & c;
    if (b === "number") return BigInt(a) & c;
    b = BigInt(0);
    let e = this.A + BigInt(1);
    for (let d = 0; d < a.length; d++) b = (b * e ^ BigInt(a.charCodeAt(d))) & c;
    return b;
  }
  var Ca;
  var Da;
  function Ea(a) {
    return __async(this, null, function* () {
      a = a.data;
      var c = a.task;
      const b = a.id;
      let e = a.args;
      switch (c) {
        case "init":
          Da = a.options || {};
          (c = a.factory) ? (Function("return " + c)()(self), Ca = new self.FlexSearch.Index(Da), delete self.FlexSearch) : Ca = new T(Da);
          postMessage({ id: b });
          break;
        default:
          let d;
          c === "export" && (e[1] ? (e[0] = Da.export, e[2] = 0, e[3] = 1) : e = null);
          c === "import" ? e[0] && (a = yield Da.import.call(Ca, e[0]), Ca.import(e[0], a)) : ((d = e && Ca[c].apply(Ca, e)) && d.then && (d = yield d), d && d.await && (d = yield d.await), c === "search" && d.result && (d = d.result));
          postMessage(c === "search" ? { id: b, msg: d } : { id: b });
      }
    });
  }
  function Fa(a) {
    Ga.call(a, "add");
    Ga.call(a, "append");
    Ga.call(a, "search");
    Ga.call(a, "update");
    Ga.call(a, "remove");
    Ga.call(a, "searchCache");
  }
  var Ha;
  var Ia;
  var Ja;
  function Ka() {
    Ha = Ja = 0;
  }
  function Ga(a) {
    this[a + "Async"] = function() {
      const c = arguments;
      var b = c[c.length - 1];
      let e;
      typeof b === "function" && (e = b, delete c[c.length - 1]);
      Ha ? Ja || (Ja = Date.now() - Ia >= this.priority * this.priority * 3) : (Ha = setTimeout(Ka, 0), Ia = Date.now());
      if (Ja) {
        const f = this;
        return new Promise((g) => {
          setTimeout(function() {
            g(f[a + "Async"].apply(f, c));
          }, 0);
        });
      }
      const d = this[a].apply(this, c);
      b = d.then ? d : new Promise((f) => f(d));
      e && b.then(e);
      return b;
    };
  }
  var V = 0;
  function La(a = {}, c) {
    function b(k) {
      function h(l) {
        l = l.data || l;
        const m = l.id, p = m && f.h[m];
        p && (p(l.msg), delete f.h[m]);
      }
      this.worker = k;
      this.h = I();
      if (this.worker) {
        d ? this.worker.on("message", h) : this.worker.onmessage = h;
        if (a.config) return new Promise(function(l) {
          V > 1e9 && (V = 0);
          f.h[++V] = function() {
            l(f);
          };
          f.worker.postMessage({ id: V, task: "init", factory: e, options: a });
        });
        this.priority = a.priority || 4;
        this.encoder = c || null;
        this.worker.postMessage({ task: "init", factory: e, options: a });
        return this;
      }
    }
    if (!this || this.constructor !== La) return new La(a);
    let e = typeof self !== "undefined" ? self._factory : typeof window !== "undefined" ? window._factory : null;
    e && (e = e.toString());
    const d = typeof window === "undefined", f = this, g = Ma(e, d, a.worker);
    return g.then ? g.then(function(k) {
      return b.call(f, k);
    }) : b.call(this, g);
  }
  W("add");
  W("append");
  W("search");
  W("update");
  W("remove");
  W("clear");
  W("export");
  W("import");
  La.prototype.searchCache = la;
  Fa(La.prototype);
  function W(a) {
    La.prototype[a] = function() {
      const c = this, b = [].slice.call(arguments);
      var e = b[b.length - 1];
      let d;
      typeof e === "function" && (d = e, b.pop());
      e = new Promise(function(f) {
        a === "export" && typeof b[0] === "function" && (b[0] = null);
        V > 1e9 && (V = 0);
        c.h[++V] = f;
        c.worker.postMessage({ task: a, id: V, args: b });
      });
      return d ? (e.then(d), this) : e;
    };
  }
  function Ma(a, c, b) {
    return c ? typeof module !== "undefined" ? new (require_worker_threads())["Worker"](__dirname + "/worker/node.js") : Promise.resolve().then(() => __toESM(require_worker_threads(), 1)).then(function(worker) {
      return new worker["Worker"](import_meta.dirname + "/node/node.mjs");
    }) : a ? new window.Worker(URL.createObjectURL(new Blob(["onmessage=" + Ea.toString()], { type: "text/javascript" }))) : new window.Worker(typeof b === "string" ? b : import_meta.url.replace("/worker.js", "/worker/worker.js").replace(
      "flexsearch.bundle.module.min.js",
      "module/worker/worker.js"
    ).replace("flexsearch.bundle.module.min.mjs", "module/worker/worker.js"), { type: "module" });
  }
  Na.prototype.add = function(a, c, b) {
    ba(a) && (c = a, a = ca(c, this.key));
    if (c && (a || a === 0)) {
      if (!b && this.reg.has(a)) return this.update(a, c);
      for (let k = 0, h; k < this.field.length; k++) {
        h = this.B[k];
        var e = this.index.get(this.field[k]);
        if (typeof h === "function") {
          var d = h(c);
          d && e.add(a, d, b, true);
        } else if (d = h.G, !d || d(c)) h.constructor === String ? h = ["" + h] : M(h) && (h = [h]), Qa(c, h, this.D, 0, e, a, h[0], b);
      }
      if (this.tag) for (e = 0; e < this.A.length; e++) {
        var f = this.A[e];
        d = this.tag.get(this.F[e]);
        let k = I();
        if (typeof f === "function") {
          if (f = f(c), !f) continue;
        } else {
          var g = f.G;
          if (g && !g(c)) continue;
          f.constructor === String && (f = "" + f);
          f = ca(c, f);
        }
        if (d && f) {
          M(f) && (f = [f]);
          for (let h = 0, l, m; h < f.length; h++) if (l = f[h], !k[l] && (k[l] = 1, (g = d.get(l)) ? m = g : d.set(l, m = []), !b || !m.includes(a))) {
            if (m.length === __pow(2, 31) - 1) {
              g = new xa(m);
              if (this.fastupdate) for (let p of this.reg.values()) p.includes(m) && (p[p.indexOf(m)] = g);
              d.set(l, m = g);
            }
            m.push(a);
            this.fastupdate && ((g = this.reg.get(a)) ? g.push(m) : this.reg.set(a, [m]));
          }
        }
      }
      if (this.store && (!b || !this.store.has(a))) {
        let k;
        if (this.h) {
          k = I();
          for (let h = 0, l; h < this.h.length; h++) {
            l = this.h[h];
            if ((b = l.G) && !b(c)) continue;
            let m;
            if (typeof l === "function") {
              m = l(c);
              if (!m) continue;
              l = [l.O];
            } else if (M(l) || l.constructor === String) {
              k[l] = c[l];
              continue;
            }
            Ra(c, k, l, 0, l[0], m);
          }
        }
        this.store.set(a, k || c);
      }
      this.worker && (this.fastupdate || this.reg.add(a));
    }
    return this;
  };
  function Ra(a, c, b, e, d, f) {
    a = a[d];
    if (e === b.length - 1) c[d] = f || a;
    else if (a) if (a.constructor === Array) for (c = c[d] = Array(a.length), d = 0; d < a.length; d++) Ra(a, c, b, e, d);
    else c = c[d] || (c[d] = I()), d = b[++e], Ra(a, c, b, e, d);
  }
  function Qa(a, c, b, e, d, f, g, k) {
    if (a = a[g]) if (e === c.length - 1) {
      if (a.constructor === Array) {
        if (b[e]) {
          for (c = 0; c < a.length; c++) d.add(f, a[c], true, true);
          return;
        }
        a = a.join(" ");
      }
      d.add(f, a, k, true);
    } else if (a.constructor === Array) for (g = 0; g < a.length; g++) Qa(a, c, b, e, d, f, g, k);
    else g = c[++e], Qa(a, c, b, e, d, f, g, k);
  }
  function Sa(a, c, b, e) {
    if (!a.length) return a;
    if (a.length === 1) return a = a[0], a = b || a.length > c ? a.slice(b, b + c) : a, e ? Ta.call(this, a) : a;
    let d = [];
    for (let f = 0, g, k; f < a.length; f++) if ((g = a[f]) && (k = g.length)) {
      if (b) {
        if (b >= k) {
          b -= k;
          continue;
        }
        g = g.slice(b, b + c);
        k = g.length;
        b = 0;
      }
      k > c && (g = g.slice(0, c), k = c);
      if (!d.length && k >= c) return e ? Ta.call(this, g) : g;
      d.push(g);
      c -= k;
      if (!c) break;
    }
    d = d.length > 1 ? [].concat.apply([], d) : d[0];
    return e ? Ta.call(this, d) : d;
  }
  function Ua(a, c, b, e) {
    var d = e[0];
    if (d[0] && d[0].query) return a[c].apply(a, d);
    if (!(c !== "and" && c !== "not" || a.result.length || a.await || d.suggest)) return e.length > 1 && (d = e[e.length - 1]), (e = d.resolve) ? a.await || a.result : a;
    let f = [], g = 0, k = 0, h, l, m, p, u;
    for (c = 0; c < e.length; c++) if (d = e[c]) {
      var r = void 0;
      if (d.constructor === X) r = d.await || d.result;
      else if (d.then || d.constructor === Array) r = d;
      else {
        g = d.limit || 0;
        k = d.offset || 0;
        m = d.suggest;
        l = d.resolve;
        h = ((p = d.highlight || a.highlight) || d.enrich) && l;
        r = d.queue;
        let t = d.async || r, n = d.index, q = d.query;
        n ? a.index || (a.index = n) : n = a.index;
        if (q || d.tag) {
          const x = d.field || d.pluck;
          x && (!q || a.query && !p || (a.query = q, a.field = x, a.highlight = p), n = n.index.get(x));
          if (r && (u || a.await)) {
            u = 1;
            let v;
            const A = a.C.length, D = new Promise(function(F) {
              v = F;
            });
            (function(F, E) {
              D.h = function() {
                E.index = null;
                E.resolve = false;
                let B = t ? F.searchAsync(E) : F.search(E);
                if (B.then) return B.then(function(z) {
                  a.C[A] = z = z.result || z;
                  v(z);
                  return z;
                });
                B = B.result || B;
                v(B);
                return B;
              };
            })(n, Object.assign({}, d));
            a.C.push(D);
            f[c] = D;
            continue;
          } else d.resolve = false, d.index = null, r = t ? n.searchAsync(d) : n.search(d), d.resolve = l, d.index = n;
        } else if (d.and) r = Va(d, "and", n);
        else if (d.or) r = Va(d, "or", n);
        else if (d.not) r = Va(d, "not", n);
        else if (d.xor) r = Va(d, "xor", n);
        else continue;
      }
      r.await ? (u = 1, r = r.await) : r.then ? (u = 1, r = r.then(function(t) {
        return t.result || t;
      })) : r = r.result || r;
      f[c] = r;
    }
    u && !a.await && (a.await = new Promise(function(t) {
      a.return = t;
    }));
    if (u) {
      const t = Promise.all(f).then(function(n) {
        for (let q = 0; q < a.C.length; q++) if (a.C[q] === t) {
          a.C[q] = function() {
            return b.call(a, n, g, k, h, l, m, p);
          };
          break;
        }
        Wa(a);
      });
      a.C.push(t);
    } else if (a.await) a.C.push(function() {
      return b.call(a, f, g, k, h, l, m, p);
    });
    else return b.call(a, f, g, k, h, l, m, p);
    return l ? a.await || a.result : a;
  }
  function Va(a, c, b) {
    a = a[c];
    const e = a[0] || a;
    e.index || (e.index = b);
    b = new X(e);
    a.length > 1 && (b = b[c].apply(b, a.slice(1)));
    return b;
  }
  X.prototype.or = function() {
    return Ua(this, "or", Xa, arguments);
  };
  function Xa(a, c, b, e, d, f, g) {
    a.length && (this.result.length && a.push(this.result), a.length < 2 ? this.result = a[0] : (this.result = Ya(a, c, b, false, this.h), b = 0));
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g) : this;
  }
  X.prototype.and = function() {
    return Ua(this, "and", Za, arguments);
  };
  function Za(a, c, b, e, d, f, g) {
    if (!f && !this.result.length) return d ? this.result : this;
    let k;
    if (a.length) if (this.result.length && a.unshift(this.result), a.length < 2) this.result = a[0];
    else {
      let h = 0;
      for (let l = 0, m, p; l < a.length; l++) if ((m = a[l]) && (p = m.length)) h < p && (h = p);
      else if (!f) {
        h = 0;
        break;
      }
      h ? (this.result = $a(a, h, c, b, f, this.h, d), k = true) : this.result = [];
    }
    else f || (this.result = a);
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, k) : this;
  }
  X.prototype.xor = function() {
    return Ua(this, "xor", ab, arguments);
  };
  function ab(a, c, b, e, d, f, g) {
    if (a.length) if (this.result.length && a.unshift(this.result), a.length < 2) this.result = a[0];
    else {
      a: {
        f = b;
        var k = this.h;
        const h = [], l = I();
        let m = 0;
        for (let p = 0, u; p < a.length; p++) if (u = a[p]) {
          m < u.length && (m = u.length);
          for (let r = 0, t; r < u.length; r++) if (t = u[r]) for (let n = 0, q; n < t.length; n++) q = t[n], l[q] = l[q] ? 2 : 1;
        }
        for (let p = 0, u, r = 0; p < m; p++) for (let t = 0, n; t < a.length; t++) if (n = a[t]) {
          if (u = n[p]) {
            for (let q = 0, x; q < u.length; q++) if (x = u[q], l[x] === 1) if (f) f--;
            else if (d) {
              if (h.push(x), h.length === c) {
                a = h;
                break a;
              }
            } else {
              const v = p + (t ? k : 0);
              h[v] || (h[v] = []);
              h[v].push(x);
              if (++r === c) {
                a = h;
                break a;
              }
            }
          }
        }
        a = h;
      }
      this.result = a;
      k = true;
    }
    else f || (this.result = a);
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, k) : this;
  }
  X.prototype.not = function() {
    return Ua(this, "not", bb, arguments);
  };
  function bb(a, c, b, e, d, f, g) {
    if (!f && !this.result.length) return d ? this.result : this;
    if (a.length && this.result.length) {
      a: {
        f = b;
        var k = [];
        a = new Set(a.flat().flat());
        for (let h = 0, l, m = 0; h < this.result.length; h++) if (l = this.result[h]) {
          for (let p = 0, u; p < l.length; p++) if (u = l[p], !a.has(u)) {
            if (f) f--;
            else if (d) {
              if (k.push(u), k.length === c) {
                a = k;
                break a;
              }
            } else if (k[h] || (k[h] = []), k[h].push(u), ++m === c) {
              a = k;
              break a;
            }
          }
        }
        a = k;
      }
      this.result = a;
      k = true;
    }
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, k) : this;
  }
  function cb(a, c, b, e, d) {
    let f, g, k;
    typeof d === "string" ? (f = d, d = "") : f = d.template;
    g = f.indexOf("$1");
    k = f.substring(g + 2);
    g = f.substring(0, g);
    let h = d && d.boundary, l = !d || d.clip !== false, m = d && d.merge && k && g && new RegExp(k + " " + g, "g");
    d = d && d.ellipsis;
    var p = 0;
    if (typeof d === "object") {
      var u = d.template;
      p = u.length - 2;
      d = d.pattern;
    }
    typeof d !== "string" && (d = d === false ? "" : "...");
    p && (d = u.replace("$1", d));
    u = d.length - p;
    let r, t;
    typeof h === "object" && (r = h.before, r === 0 && (r = -1), t = h.after, t === 0 && (t = -1), h = h.total || 9e5);
    p = /* @__PURE__ */ new Map();
    for (let Oa = 0, da, db, pa; Oa < c.length; Oa++) {
      let qa;
      if (e) qa = c, pa = e;
      else {
        var n = c[Oa];
        pa = n.field;
        if (!pa) continue;
        qa = n.result;
      }
      db = b.get(pa);
      da = db.encoder;
      n = p.get(da);
      typeof n !== "string" && (n = da.encode(a), p.set(da, n));
      for (let ya = 0; ya < qa.length; ya++) {
        var q = qa[ya].doc;
        if (!q) continue;
        q = ca(q, pa);
        if (!q) continue;
        var x = q.trim().split(/\s+/);
        if (!x.length) continue;
        q = "";
        var v = [];
        let za = [];
        var A = -1, D = -1, F = 0;
        for (var E = 0; E < x.length; E++) {
          var B = x[E], z = da.encode(B);
          z = z.length > 1 ? z.join(" ") : z[0];
          let y;
          if (z && B) {
            var C = B.length, J = (da.split ? B.replace(da.split, "") : B).length - z.length, G = "", N = 0;
            for (var O = 0; O < n.length; O++) {
              var P = n[O];
              if (P) {
                var L = P.length;
                L += J < 0 ? 0 : J;
                N && L <= N || (P = z.indexOf(P), P > -1 && (G = (P ? B.substring(0, P) : "") + g + B.substring(P, P + L) + k + (P + L < C ? B.substring(P + L) : ""), N = L, y = true));
              }
            }
            G && (h && (A < 0 && (A = q.length + (q ? 1 : 0)), D = q.length + (q ? 1 : 0) + G.length, F += C, za.push(v.length), v.push({ match: G })), q += (q ? " " : "") + G);
          }
          if (!y) B = x[E], q += (q ? " " : "") + B, h && v.push({ text: B });
          else if (h && F >= h) break;
        }
        F = za.length * (f.length - 2);
        if (r || t || h && q.length - F > h) if (F = h + F - u * 2, E = D - A, r > 0 && (E += r), t > 0 && (E += t), E <= F) x = r ? A - (r > 0 ? r : 0) : A - ((F - E) / 2 | 0), v = t ? D + (t > 0 ? t : 0) : x + F, l || (x > 0 && q.charAt(x) !== " " && q.charAt(x - 1) !== " " && (x = q.indexOf(" ", x), x < 0 && (x = 0)), v < q.length && q.charAt(v - 1) !== " " && q.charAt(v) !== " " && (v = q.lastIndexOf(" ", v), v < D ? v = D : ++v)), q = (x ? d : "") + q.substring(x, v) + (v < q.length ? d : "");
        else {
          D = [];
          A = {};
          F = {};
          E = {};
          B = {};
          z = {};
          G = J = C = 0;
          for (O = N = 1; ; ) {
            var U = void 0;
            for (let y = 0, K; y < za.length; y++) {
              K = za[y];
              if (G) if (J !== G) {
                if (E[y + 1]) continue;
                K += G;
                if (A[K]) {
                  C -= u;
                  F[y + 1] = 1;
                  E[y + 1] = 1;
                  continue;
                }
                if (K >= v.length - 1) {
                  if (K >= v.length) {
                    E[y + 1] = 1;
                    K >= x.length && (F[y + 1] = 1);
                    continue;
                  }
                  C -= u;
                }
                q = v[K].text;
                if (L = t && z[y]) if (L > 0) {
                  if (q.length > L) if (E[y + 1] = 1, l) q = q.substring(0, L);
                  else continue;
                  (L -= q.length) || (L = -1);
                  z[y] = L;
                } else {
                  E[y + 1] = 1;
                  continue;
                }
                if (C + q.length + 1 <= h) q = " " + q, D[y] += q;
                else if (l) U = h - C - 1, U > 0 && (q = " " + q.substring(0, U), D[y] += q), E[y + 1] = 1;
                else {
                  E[y + 1] = 1;
                  continue;
                }
              } else {
                if (E[y]) continue;
                K -= J;
                if (A[K]) {
                  C -= u;
                  E[y] = 1;
                  F[y] = 1;
                  continue;
                }
                if (K <= 0) {
                  if (K < 0) {
                    E[y] = 1;
                    F[y] = 1;
                    continue;
                  }
                  C -= u;
                }
                q = v[K].text;
                if (L = r && B[y]) if (L > 0) {
                  if (q.length > L) if (E[y] = 1, l) q = q.substring(q.length - L);
                  else continue;
                  (L -= q.length) || (L = -1);
                  B[y] = L;
                } else {
                  E[y] = 1;
                  continue;
                }
                if (C + q.length + 1 <= h) q += " ", D[y] = q + D[y];
                else if (l) U = q.length + 1 - (h - C), U >= 0 && U < q.length && (q = q.substring(U) + " ", D[y] = q + D[y]), E[y] = 1;
                else {
                  E[y] = 1;
                  continue;
                }
              }
              else {
                q = v[K].match;
                r && (B[y] = r);
                t && (z[y] = t);
                y && C++;
                let Pa;
                K ? !y && u && (C += u) : (F[y] = 1, E[y] = 1);
                K >= x.length - 1 ? Pa = 1 : K < v.length - 1 && v[K + 1].match ? Pa = 1 : u && (C += u);
                C -= f.length - 2;
                if (!y || C + q.length <= h) D[y] = q;
                else {
                  U = N = O = F[y] = 0;
                  break;
                }
                Pa && (F[y + 1] = 1, E[y + 1] = 1);
              }
              C += q.length;
              U = A[K] = 1;
            }
            if (U) J === G ? G++ : J++;
            else {
              J === G ? N = 0 : O = 0;
              if (!N && !O) break;
              N ? (J++, G = J) : G++;
            }
          }
          q = "";
          for (let y = 0, K; y < D.length; y++) K = (F[y] ? y ? " " : "" : (y && !d ? " " : "") + d) + D[y], q += K;
          d && !F[D.length] && (q += d);
        }
        m && (q = q.replace(m, " "));
        qa[ya].highlight = q;
      }
      if (e) break;
    }
    return c;
  }
  function X(a, c) {
    if (!this || this.constructor !== X) return new X(a, c);
    let b = 0, e, d, f, g, k, h;
    if (a && a.index) {
      const l = a;
      c = l.index;
      b = l.boost || 0;
      if (d = l.query) {
        f = l.field || l.pluck;
        g = l.highlight;
        const m = l.resolve;
        a = l.async || l.queue;
        l.resolve = false;
        l.index = null;
        a = a ? c.searchAsync(l) : c.search(l);
        l.resolve = m;
        l.index = c;
        a = a.result || a;
      } else a = [];
    }
    if (a && a.then) {
      const l = this;
      a = a.then(function(m) {
        l.C[0] = l.result = m.result || m;
        Wa(l);
      });
      e = [a];
      a = [];
      k = new Promise(function(m) {
        h = m;
      });
    }
    this.index = c || null;
    this.result = a || [];
    this.h = b;
    this.C = e || [];
    this.await = k || null;
    this.return = h || null;
    this.highlight = g || null;
    this.query = d || "";
    this.field = f || "";
  }
  w = X.prototype;
  w.limit = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.limit(a).result;
      });
    } else if (this.result.length) {
      const c = [];
      for (let b = 0, e; b < this.result.length; b++) if (e = this.result[b]) if (e.length <= a) {
        if (c[b] = e, a -= e.length, !a) break;
      } else {
        c[b] = e.slice(0, a);
        break;
      }
      this.result = c;
    }
    return this;
  };
  w.offset = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.offset(a).result;
      });
    } else if (this.result.length) {
      const c = [];
      for (let b = 0, e; b < this.result.length; b++) if (e = this.result[b]) e.length <= a ? a -= e.length : (c[b] = e.slice(a), a = 0);
      this.result = c;
    }
    return this;
  };
  w.boost = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.boost(a).result;
      });
    } else this.h += a;
    return this;
  };
  function Wa(a, c) {
    let b = a.result;
    var e = a.await;
    a.await = null;
    for (let d = 0, f; d < a.C.length; d++) if (f = a.C[d]) {
      if (typeof f === "function") b = f(), a.C[d] = b = b.result || b, d--;
      else if (f.h) b = f.h(), a.C[d] = b = b.result || b, d--;
      else if (f.then) return a.await = e;
    }
    e = a.return;
    a.C = [];
    a.return = null;
    c || e(b);
    return b;
  }
  w.resolve = function(a, c, b, e, d) {
    let f = this.await ? Wa(this, true) : this.result;
    if (f.then) {
      const g = this;
      return f.then(function() {
        return g.resolve(a, c, b, e, d);
      });
    }
    f.length && (typeof a === "object" ? (e = a.highlight || this.highlight, b = !!e || a.enrich, c = a.offset, a = a.limit) : (e = e || this.highlight, b = !!e || b), f = d ? b ? Ta.call(this.index, f) : f : Sa.call(this.index, f, a || 100, c, b));
    return this.finalize(f, e);
  };
  w.finalize = function(a, c) {
    if (a.then) {
      const e = this;
      return a.then(function(d) {
        return e.finalize(d, c);
      });
    }
    c && a.length && this.query && (a = cb(this.query, a, this.index.index, this.field, c));
    const b = this.return;
    this.highlight = this.index = this.result = this.C = this.await = this.return = null;
    this.query = this.field = "";
    b && b(a);
    return a;
  };
  function $a(a, c, b, e, d, f, g) {
    const k = a.length;
    let h = [], l, m;
    l = I();
    for (let p = 0, u, r, t, n; p < c; p++) for (let q = 0; q < k; q++) if (t = a[q], p < t.length && (u = t[p])) for (let x = 0; x < u.length; x++) {
      r = u[x];
      (m = l[r]) ? l[r]++ : (m = 0, l[r] = 1);
      n = h[m] || (h[m] = []);
      if (!g) {
        let v = p + (q || !d ? 0 : f || 0);
        n = n[v] || (n[v] = []);
      }
      n.push(r);
      if (g && b && m === k - 1 && n.length - e === b) return e ? n.slice(e) : n;
    }
    if (a = h.length) if (d) h = h.length > 1 ? Ya(h, b, e, g, f) : (h = h[0]) && b && h.length > b || e ? h.slice(e, b + e) : h;
    else {
      if (a < k) return [];
      h = h[a - 1];
      if (b || e) if (g) {
        if (h.length > b || e) h = h.slice(e, b + e);
      } else {
        d = [];
        for (let p = 0, u; p < h.length; p++) if (u = h[p]) if (e && u.length > e) e -= u.length;
        else {
          if (b && u.length > b || e) u = u.slice(e, b + e), b -= u.length, e && (e -= u.length);
          d.push(u);
          if (!b) break;
        }
        h = d;
      }
    }
    return h;
  }
  function Ya(a, c, b, e, d) {
    const f = [], g = I();
    let k;
    var h = a.length;
    let l;
    if (e) for (d = h - 1; d >= 0; d--) {
      if (l = (e = a[d]) && e.length) {
        for (h = 0; h < l; h++) if (k = e[h], !g[k]) {
          if (g[k] = 1, b) b--;
          else if (f.push(k), f.length === c) return f;
        }
      }
    }
    else for (let m = h - 1, p, u = 0; m >= 0; m--) {
      p = a[m];
      for (let r = 0; r < p.length; r++) if (l = (e = p[r]) && e.length) {
        for (let t = 0; t < l; t++) if (k = e[t], !g[k]) if (g[k] = 1, b) b--;
        else {
          let n = (r + (m < h - 1 ? d || 0 : 0)) / (m + 1) | 0;
          (f[n] || (f[n] = [])).push(k);
          if (++u === c) return f;
        }
      }
    }
    return f;
  }
  function eb(a, c, b, e, d) {
    const f = I(), g = [];
    for (let k = 0, h; k < c.length; k++) {
      h = c[k];
      for (let l = 0; l < h.length; l++) f[h[l]] = 1;
    }
    if (d) for (let k = 0, h; k < a.length; k++) {
      if (h = a[k], f[h]) {
        if (e) e--;
        else if (g.push(h), f[h] = 0, b && --b === 0) break;
      }
    }
    else for (let k = 0, h, l; k < a.result.length; k++) for (h = a.result[k], c = 0; c < h.length; c++) l = h[c], f[l] && ((g[k] || (g[k] = [])).push(l), f[l] = 0);
    return g;
  }
  I();
  Na.prototype.search = function(a, c, b, e) {
    b || (!c && ba(a) ? (b = a, a = "") : ba(c) && (b = c, c = 0));
    let d = [];
    var f = [];
    let g;
    let k, h, l, m, p;
    let u = 0, r = true, t;
    if (b) {
      b.constructor === Array && (b = { index: b });
      a = b.query || a;
      g = b.pluck;
      k = b.merge;
      l = b.boost;
      p = g || b.field || (p = b.index) && (p.index ? null : p);
      var n = this.tag && b.tag;
      h = b.suggest;
      r = b.resolve !== false;
      m = b.cache;
      t = r && this.store && b.highlight;
      var q = !!t || r && this.store && b.enrich;
      c = b.limit || c;
      var x = b.offset || 0;
      c || (c = r ? 100 : 0);
      if (n && (!this.db || !e)) {
        n.constructor !== Array && (n = [n]);
        var v = [];
        for (let B = 0, z; B < n.length; B++) if (z = n[B], z.field && z.tag) {
          var A = z.tag;
          if (A.constructor === Array) for (var D = 0; D < A.length; D++) v.push(z.field, A[D]);
          else v.push(z.field, A);
        } else {
          A = Object.keys(z);
          for (let C = 0, J, G; C < A.length; C++) if (J = A[C], G = z[J], G.constructor === Array) for (D = 0; D < G.length; D++) v.push(J, G[D]);
          else v.push(J, G);
        }
        n = v;
        if (!a) {
          f = [];
          if (v.length) for (n = 0; n < v.length; n += 2) {
            if (this.db) {
              e = this.index.get(v[n]);
              if (!e) continue;
              f.push(e = e.db.tag(v[n + 1], c, x, q));
            } else e = fb.call(this, v[n], v[n + 1], c, x, q);
            d.push(r ? { field: v[n], tag: v[n + 1], result: e } : [e]);
          }
          if (f.length) {
            const B = this;
            return Promise.all(f).then(function(z) {
              for (let C = 0; C < z.length; C++) r ? d[C].result = z[C] : d[C] = z[C];
              return r ? d : new X(d.length > 1 ? $a(d, 1, 0, 0, h, l) : d[0], B);
            });
          }
          return r ? d : new X(d.length > 1 ? $a(d, 1, 0, 0, h, l) : d[0], this);
        }
      }
      r || g || !(p = p || this.field) || (M(p) ? g = p : (p.constructor === Array && p.length === 1 && (p = p[0]), g = p.field || p.index));
      p && p.constructor !== Array && (p = [p]);
    }
    p || (p = this.field);
    let F;
    v = (this.worker || this.db) && !e && [];
    for (let B = 0, z, C, J; B < p.length; B++) {
      C = p[B];
      if (this.db && this.tag && !this.B[B]) continue;
      let G;
      M(C) || (G = C, C = G.field, a = G.query || a, c = aa(G.limit, c), x = aa(G.offset, x), h = aa(G.suggest, h), t = r && this.store && aa(G.highlight, t), q = !!t || r && this.store && aa(G.enrich, q), m = aa(G.cache, m));
      if (e) z = e[B];
      else {
        A = G || b || {};
        D = A.enrich;
        var E = this.index.get(C);
        n && (this.db && (A.tag = n, A.field = p, F = E.db.support_tag_search), !F && D && (A.enrich = false), F || (A.limit = 0, A.offset = 0));
        z = m ? E.searchCache(a, n && !F ? 0 : c, A) : E.search(a, n && !F ? 0 : c, A);
        n && !F && (A.limit = c, A.offset = x);
        D && (A.enrich = D);
        if (v) {
          v[B] = z;
          continue;
        }
      }
      J = (z = z.result || z) && z.length;
      if (n && J) {
        A = [];
        D = 0;
        if (this.db && e) {
          if (!F) for (E = p.length; E < e.length; E++) {
            let N = e[E];
            if (N && N.length) D++, A.push(N);
            else if (!h) return r ? d : new X(d, this);
          }
        } else for (let N = 0, O, P; N < n.length; N += 2) {
          O = this.tag.get(n[N]);
          if (!O) if (h) continue;
          else return r ? d : new X(d, this);
          if (P = (O = O && O.get(n[N + 1])) && O.length) D++, A.push(O);
          else if (!h) return r ? d : new X(d, this);
        }
        if (D) {
          z = eb(z, A, c, x, r);
          J = z.length;
          if (!J && !h) return r ? z : new X(z, this);
          D--;
        }
      }
      if (J) f[u] = C, d.push(z), u++;
      else if (p.length === 1) return r ? d : new X(
        d,
        this
      );
    }
    if (v) {
      if (this.db && n && n.length && !F) for (q = 0; q < n.length; q += 2) {
        f = this.index.get(n[q]);
        if (!f) if (h) continue;
        else return r ? d : new X(d, this);
        v.push(f.db.tag(n[q + 1], c, x, false));
      }
      const B = this;
      return Promise.all(v).then(function(z) {
        b && (b.resolve = r);
        z.length && (z = B.search(a, c, b, z));
        return z;
      });
    }
    if (!u) return r ? d : new X(d, this);
    if (g && (!q || !this.store)) return d = d[0], r ? d : new X(d, this);
    v = [];
    for (x = 0; x < f.length; x++) {
      n = d[x];
      q && n.length && typeof n[0].doc === "undefined" && (this.db ? v.push(n = this.index.get(this.field[0]).db.enrich(n)) : n = Ta.call(this, n));
      if (g) return r ? t ? cb(a, n, this.index, g, t) : n : new X(n, this);
      d[x] = { field: f[x], result: n };
    }
    if (q && this.db && v.length) {
      const B = this;
      return Promise.all(v).then(function(z) {
        for (let C = 0; C < z.length; C++) d[C].result = z[C];
        t && (d = cb(a, d, B.index, g, t));
        return k ? gb(d) : d;
      });
    }
    t && (d = cb(a, d, this.index, g, t));
    return k ? gb(d) : d;
  };
  function gb(a) {
    const c = [], b = I(), e = I();
    for (let d = 0, f, g, k, h, l, m, p; d < a.length; d++) {
      f = a[d];
      g = f.field;
      k = f.result;
      for (let u = 0; u < k.length; u++) if (l = k[u], typeof l !== "object" ? l = { id: h = l } : h = l.id, (m = b[h]) ? m.push(g) : (l.field = b[h] = [g], c.push(l)), p = l.highlight) m = e[h], m || (e[h] = m = {}, l.highlight = m), m[g] = p;
    }
    return c;
  }
  function fb(a, c, b, e, d) {
    a = this.tag.get(a);
    if (!a) return [];
    a = a.get(c);
    if (!a) return [];
    c = a.length - e;
    if (c > 0) {
      if (b && c > b || e) a = a.slice(e, e + b);
      d && (a = Ta.call(this, a));
    }
    return a;
  }
  function Ta(a) {
    if (!this || !this.store) return a;
    if (this.db) return this.index.get(this.field[0]).db.enrich(a);
    const c = Array(a.length);
    for (let b = 0, e; b < a.length; b++) e = a[b], c[b] = { id: e, doc: this.store.get(e) };
    return c;
  }
  function Na(a) {
    if (!this || this.constructor !== Na) return new Na(a);
    const c = a.document || a.doc || a;
    let b, e;
    this.B = [];
    this.field = [];
    this.D = [];
    this.key = (b = c.key || c.id) && hb(b, this.D) || "id";
    (e = a.keystore || 0) && (this.keystore = e);
    this.fastupdate = !!a.fastupdate;
    this.reg = !this.fastupdate || a.worker || a.db ? e ? new S(e) : /* @__PURE__ */ new Set() : e ? new R(e) : /* @__PURE__ */ new Map();
    this.h = (b = c.store || null) && b && b !== true && [];
    this.store = b ? e ? new R(e) : /* @__PURE__ */ new Map() : null;
    this.cache = (b = a.cache || null) && new ma(b);
    a.cache = false;
    this.worker = a.worker || false;
    this.priority = a.priority || 4;
    this.index = ib.call(this, a, c);
    this.tag = null;
    if (b = c.tag) {
      if (typeof b === "string" && (b = [b]), b.length) {
        this.tag = /* @__PURE__ */ new Map();
        this.A = [];
        this.F = [];
        for (let d = 0, f, g; d < b.length; d++) {
          f = b[d];
          g = f.field || f;
          if (!g) throw Error("The tag field from the document descriptor is undefined.");
          f.custom ? this.A[d] = f.custom : (this.A[d] = hb(g, this.D), f.filter && (typeof this.A[d] === "string" && (this.A[d] = new String(this.A[d])), this.A[d].G = f.filter));
          this.F[d] = g;
          this.tag.set(g, /* @__PURE__ */ new Map());
        }
      }
    }
    if (this.worker) {
      this.fastupdate = false;
      a = [];
      for (const d of this.index.values()) d.then && a.push(d);
      if (a.length) {
        const d = this;
        return Promise.all(a).then(function(f) {
          let g = 0;
          for (const k of d.index.entries()) {
            const h = k[0];
            let l = k[1];
            l.then && (l = f[g], d.index.set(h, l), g++);
          }
          return d;
        });
      }
    } else a.db && (this.fastupdate = false, this.mount(a.db));
  }
  w = Na.prototype;
  w.mount = function(a) {
    let c = this.field;
    if (this.tag) for (let f = 0, g; f < this.F.length; f++) {
      g = this.F[f];
      var b = void 0;
      this.index.set(g, b = new T({}, this.reg));
      c === this.field && (c = c.slice(0));
      c.push(g);
      b.tag = this.tag.get(g);
    }
    b = [];
    const e = { db: a.db, type: a.type, fastupdate: a.fastupdate };
    for (let f = 0, g, k; f < c.length; f++) {
      e.field = k = c[f];
      g = this.index.get(k);
      const h = new a.constructor(a.id, e);
      h.id = a.id;
      b[f] = h.mount(g);
      g.document = true;
      f ? g.bypass = true : g.store = this.store;
    }
    const d = this;
    return this.db = Promise.all(b).then(function() {
      d.db = true;
    });
  };
  w.commit = function() {
    return __async(this, null, function* () {
      const a = [];
      for (const c of this.index.values()) a.push(c.commit());
      yield Promise.all(a);
      this.reg.clear();
    });
  };
  w.destroy = function() {
    const a = [];
    for (const c of this.index.values()) a.push(c.destroy());
    return Promise.all(a);
  };
  function ib(a, c) {
    const b = /* @__PURE__ */ new Map();
    let e = c.index || c.field || c;
    M(e) && (e = [e]);
    for (let f = 0, g, k; f < e.length; f++) {
      g = e[f];
      M(g) || (k = g, g = g.field);
      k = ba(k) ? Object.assign({}, a, k) : a;
      if (this.worker) {
        var d = void 0;
        d = (d = k.encoder) && d.encode ? d : new ka(typeof d === "string" ? va[d] : d || {});
        d = new La(k, d);
        b.set(g, d);
      }
      this.worker || b.set(g, new T(k, this.reg));
      k.custom ? this.B[f] = k.custom : (this.B[f] = hb(g, this.D), k.filter && (typeof this.B[f] === "string" && (this.B[f] = new String(this.B[f])), this.B[f].G = k.filter));
      this.field[f] = g;
    }
    if (this.h) {
      a = c.store;
      M(a) && (a = [a]);
      for (let f = 0, g, k; f < a.length; f++) g = a[f], k = g.field || g, g.custom ? (this.h[f] = g.custom, g.custom.O = k) : (this.h[f] = hb(k, this.D), g.filter && (typeof this.h[f] === "string" && (this.h[f] = new String(this.h[f])), this.h[f].G = g.filter));
    }
    return b;
  }
  function hb(a, c) {
    const b = a.split(":");
    let e = 0;
    for (let d = 0; d < b.length; d++) a = b[d], a[a.length - 1] === "]" && (a = a.substring(0, a.length - 2)) && (c[e] = true), a && (b[e++] = a);
    e < b.length && (b.length = e);
    return e > 1 ? b : b[0];
  }
  w.append = function(a, c) {
    return this.add(a, c, true);
  };
  w.update = function(a, c) {
    return this.remove(a).add(a, c);
  };
  w.remove = function(a) {
    ba(a) && (a = ca(a, this.key));
    for (var c of this.index.values()) c.remove(a, true);
    if (this.reg.has(a)) {
      if (this.tag && !this.fastupdate) for (let b of this.tag.values()) for (let e of b) {
        c = e[0];
        const d = e[1], f = d.indexOf(a);
        f > -1 && (d.length > 1 ? d.splice(f, 1) : b.delete(c));
      }
      this.store && this.store.delete(a);
      this.reg.delete(a);
    }
    this.cache && this.cache.remove(a);
    return this;
  };
  w.clear = function() {
    const a = [];
    for (const c of this.index.values()) {
      const b = c.clear();
      b.then && a.push(b);
    }
    if (this.tag) for (const c of this.tag.values()) c.clear();
    this.store && this.store.clear();
    this.cache && this.cache.clear();
    return a.length ? Promise.all(a) : this;
  };
  w.contain = function(a) {
    return this.db ? this.index.get(this.field[0]).db.has(a) : this.reg.has(a);
  };
  w.cleanup = function() {
    for (const a of this.index.values()) a.cleanup();
    return this;
  };
  w.get = function(a) {
    return this.db ? this.index.get(this.field[0]).db.enrich(a).then(function(c) {
      return c[0] && c[0].doc || null;
    }) : this.store.get(a) || null;
  };
  w.set = function(a, c) {
    typeof a === "object" && (c = a, a = ca(c, this.key));
    this.store.set(a, c);
    return this;
  };
  w.searchCache = la;
  w.export = jb;
  w.import = kb;
  Fa(Na.prototype);
  function lb(a, c = 0) {
    let b = [], e = [];
    c && (c = 25e4 / c * 5e3 | 0);
    for (const d of a.entries()) e.push(d), e.length === c && (b.push(e), e = []);
    e.length && b.push(e);
    return b;
  }
  function mb(a, c) {
    c || (c = /* @__PURE__ */ new Map());
    for (let b = 0, e; b < a.length; b++) e = a[b], c.set(e[0], e[1]);
    return c;
  }
  function nb(a, c = 0) {
    let b = [], e = [];
    c && (c = 25e4 / c * 1e3 | 0);
    for (const d of a.entries()) e.push([d[0], lb(d[1])[0] || []]), e.length === c && (b.push(e), e = []);
    e.length && b.push(e);
    return b;
  }
  function ob(a, c) {
    c || (c = /* @__PURE__ */ new Map());
    for (let b = 0, e, d; b < a.length; b++) e = a[b], d = c.get(e[0]), c.set(e[0], mb(e[1], d));
    return c;
  }
  function pb(a) {
    let c = [], b = [];
    for (const e of a.keys()) b.push(e), b.length === 25e4 && (c.push(b), b = []);
    b.length && c.push(b);
    return c;
  }
  function qb(a, c) {
    c || (c = /* @__PURE__ */ new Set());
    for (let b = 0; b < a.length; b++) c.add(a[b]);
    return c;
  }
  function rb(a, c, b, e, d, f, g = 0) {
    const k = e && e.constructor === Array;
    var h = k ? e.shift() : e;
    if (!h) return this.export(a, c, d, f + 1);
    if ((h = a((c ? c + "." : "") + (g + 1) + "." + b, JSON.stringify(h))) && h.then) {
      const l = this;
      return h.then(function() {
        return rb.call(l, a, c, b, k ? e : null, d, f, g + 1);
      });
    }
    return rb.call(this, a, c, b, k ? e : null, d, f, g + 1);
  }
  function jb(a, c, b = 0, e = 0) {
    if (b < this.field.length) {
      const g = this.field[b];
      if ((c = this.index.get(g).export(a, g, b, e = 1)) && c.then) {
        const k = this;
        return c.then(function() {
          return k.export(a, g, b + 1);
        });
      }
      return this.export(a, g, b + 1);
    }
    let d, f;
    switch (e) {
      case 0:
        d = "reg";
        f = pb(this.reg);
        c = null;
        break;
      case 1:
        d = "tag";
        f = this.tag && nb(this.tag, this.reg.size);
        c = null;
        break;
      case 2:
        d = "doc";
        f = this.store && lb(this.store);
        c = null;
        break;
      default:
        return;
    }
    return rb.call(this, a, c, d, f || null, b, e);
  }
  function kb(a, c) {
    var b = a.split(".");
    b[b.length - 1] === "json" && b.pop();
    const e = b.length > 2 ? b[0] : "";
    b = b.length > 2 ? b[2] : b[1];
    if (this.worker && e) return this.index.get(e).import(a);
    if (c) {
      typeof c === "string" && (c = JSON.parse(c));
      if (e) return this.index.get(e).import(b, c);
      switch (b) {
        case "reg":
          this.fastupdate = false;
          this.reg = qb(c, this.reg);
          for (let d = 0, f; d < this.field.length; d++) f = this.index.get(this.field[d]), f.fastupdate = false, f.reg = this.reg;
          if (this.worker) {
            c = [];
            for (const d of this.index.values()) c.push(d.import(a));
            return Promise.all(c);
          }
          break;
        case "tag":
          this.tag = ob(c, this.tag);
          break;
        case "doc":
          this.store = mb(c, this.store);
      }
    }
  }
  function sb(a, c) {
    let b = "";
    for (const e of a.entries()) {
      a = e[0];
      const d = e[1];
      let f = "";
      for (let g = 0, k; g < d.length; g++) {
        k = d[g] || [""];
        let h = "";
        for (let l = 0; l < k.length; l++) h += (h ? "," : "") + (c === "string" ? '"' + k[l] + '"' : k[l]);
        h = "[" + h + "]";
        f += (f ? "," : "") + h;
      }
      f = '["' + a + '",[' + f + "]]";
      b += (b ? "," : "") + f;
    }
    return b;
  }
  T.prototype.remove = function(a, c) {
    const b = this.reg.size && (this.fastupdate ? this.reg.get(a) : this.reg.has(a));
    if (b) {
      if (this.fastupdate) for (let e = 0, d, f; e < b.length; e++) {
        if ((d = b[e]) && (f = d.length)) if (d[f - 1] === a) d.pop();
        else {
          const g = d.indexOf(a);
          g >= 0 && d.splice(g, 1);
        }
      }
      else tb(this.map, a), this.depth && tb(this.ctx, a);
      c || this.reg.delete(a);
    }
    this.db && (this.commit_task.push({ del: a }), this.M && ub(this));
    this.cache && this.cache.remove(a);
    return this;
  };
  function tb(a, c) {
    let b = 0;
    var e = typeof c === "undefined";
    if (a.constructor === Array) for (let d = 0, f, g, k; d < a.length; d++) {
      if ((f = a[d]) && f.length) {
        if (e) return 1;
        g = f.indexOf(c);
        if (g >= 0) {
          if (f.length > 1) return f.splice(g, 1), 1;
          delete a[d];
          if (b) return 1;
          k = 1;
        } else {
          if (k) return 1;
          b++;
        }
      }
    }
    else for (let d of a.entries()) e = d[0], tb(d[1], c) ? b++ : a.delete(e);
    return b;
  }
  var vb = { memory: { resolution: 1 }, performance: { resolution: 3, fastupdate: true, context: { depth: 1, resolution: 1 } }, match: { tokenize: "forward" }, score: { resolution: 9, context: { depth: 2, resolution: 3 } } };
  T.prototype.add = function(a, c, b, e) {
    if (c && (a || a === 0)) {
      if (!e && !b && this.reg.has(a)) return this.update(a, c);
      e = this.depth;
      c = this.encoder.encode(c, !e);
      const l = c.length;
      if (l) {
        const m = I(), p = I(), u = this.resolution;
        for (let r = 0; r < l; r++) {
          let t = c[this.rtl ? l - 1 - r : r];
          var d = t.length;
          if (d && (e || !p[t])) {
            var f = this.score ? this.score(c, t, r, null, 0) : wb(u, l, r), g = "";
            switch (this.tokenize) {
              case "tolerant":
                Y(this, p, t, f, a, b);
                if (d > 2) {
                  for (let n = 1, q, x, v, A; n < d - 1; n++) q = t.charAt(n), x = t.charAt(n + 1), v = t.substring(0, n) + x, A = t.substring(n + 2), g = v + q + A, Y(this, p, g, f, a, b), g = v + A, Y(this, p, g, f, a, b);
                  Y(this, p, t.substring(0, t.length - 1), f, a, b);
                }
                break;
              case "full":
                if (d > 2) {
                  for (let n = 0, q; n < d; n++) for (f = d; f > n; f--) {
                    g = t.substring(n, f);
                    q = this.rtl ? d - 1 - n : n;
                    var k = this.score ? this.score(c, t, r, g, q) : wb(u, l, r, d, q);
                    Y(this, p, g, k, a, b);
                  }
                  break;
                }
              case "bidirectional":
              case "reverse":
                if (d > 1) {
                  for (k = d - 1; k > 0; k--) {
                    g = t[this.rtl ? d - 1 - k : k] + g;
                    var h = this.score ? this.score(c, t, r, g, k) : wb(u, l, r, d, k);
                    Y(this, p, g, h, a, b);
                  }
                  g = "";
                }
              case "forward":
                if (d > 1) {
                  for (k = 0; k < d; k++) g += t[this.rtl ? d - 1 - k : k], Y(
                    this,
                    p,
                    g,
                    f,
                    a,
                    b
                  );
                  break;
                }
              default:
                if (Y(this, p, t, f, a, b), e && l > 1 && r < l - 1) for (d = this.N, g = t, f = Math.min(e + 1, this.rtl ? r + 1 : l - r), k = 1; k < f; k++) {
                  t = c[this.rtl ? l - 1 - r - k : r + k];
                  h = this.bidirectional && t > g;
                  const n = this.score ? this.score(c, g, r, t, k - 1) : wb(d + (l / 2 > d ? 0 : 1), l, r, f - 1, k - 1);
                  Y(this, m, h ? g : t, n, a, b, h ? t : g);
                }
            }
          }
        }
        this.fastupdate || this.reg.add(a);
      }
    }
    this.db && (this.commit_task.push(b ? { ins: a } : { del: a }), this.M && ub(this));
    return this;
  };
  function Y(a, c, b, e, d, f, g) {
    let k, h;
    if (!(k = c[b]) || g && !k[g]) {
      g ? (c = k || (c[b] = I()), c[g] = 1, h = a.ctx, (k = h.get(g)) ? h = k : h.set(g, h = a.keystore ? new R(a.keystore) : /* @__PURE__ */ new Map())) : (h = a.map, c[b] = 1);
      (k = h.get(b)) ? h = k : h.set(b, h = k = []);
      if (f) {
        for (let l = 0, m; l < k.length; l++) if ((m = k[l]) && m.includes(d)) {
          if (l <= e) return;
          m.splice(m.indexOf(d), 1);
          a.fastupdate && (c = a.reg.get(d)) && c.splice(c.indexOf(m), 1);
          break;
        }
      }
      h = h[e] || (h[e] = []);
      h.push(d);
      if (h.length === __pow(2, 31) - 1) {
        c = new xa(h);
        if (a.fastupdate) for (let l of a.reg.values()) l.includes(h) && (l[l.indexOf(h)] = c);
        k[e] = h = c;
      }
      a.fastupdate && ((e = a.reg.get(d)) ? e.push(h) : a.reg.set(d, [h]));
    }
  }
  function wb(a, c, b, e, d) {
    return b && a > 1 ? c + (e || 0) <= a ? b + (d || 0) : (a - 1) / (c + (e || 0)) * (b + (d || 0)) + 1 | 0 : 0;
  }
  T.prototype.search = function(a, c, b) {
    b || (c || typeof a !== "object" ? typeof c === "object" && (b = c, c = 0) : (b = a, a = ""));
    if (b && b.cache) return b.cache = false, a = this.searchCache(a, c, b), b.cache = true, a;
    let e = [], d, f, g, k = 0, h, l, m, p, u;
    b && (a = b.query || a, c = b.limit || c, k = b.offset || 0, f = b.context, g = b.suggest, u = (h = b.resolve) && b.enrich, m = b.boost, p = b.resolution, l = this.db && b.tag);
    typeof h === "undefined" && (h = this.resolve);
    f = this.depth && f !== false;
    let r = this.encoder.encode(a, !f);
    d = r.length;
    c = c || (h ? 100 : 0);
    if (d === 1) return xb.call(
      this,
      r[0],
      "",
      c,
      k,
      h,
      u,
      l
    );
    if (d === 2 && f && !g) return xb.call(this, r[1], r[0], c, k, h, u, l);
    let t = I(), n = 0, q;
    f && (q = r[0], n = 1);
    p || p === 0 || (p = q ? this.N : this.resolution);
    if (this.db) {
      if (this.db.search && (b = this.db.search(this, r, c, k, g, h, u, l), b !== false)) return b;
      const x = this;
      return function() {
        return __async(this, null, function* () {
          for (let v, A; n < d; n++) {
            if ((A = r[n]) && !t[A]) {
              t[A] = 1;
              v = yield yb(x, A, q, 0, 0, false, false);
              if (v = zb(v, e, g, p)) {
                e = v;
                break;
              }
              q && (g && v && e.length || (q = A));
            }
            g && q && n === d - 1 && !e.length && (p = x.resolution, q = "", n = -1, t = I());
          }
          return Ab(e, p, c, k, g, m, h);
        });
      }();
    }
    for (let x, v; n < d; n++) {
      if ((v = r[n]) && !t[v]) {
        t[v] = 1;
        x = yb(this, v, q, 0, 0, false, false);
        if (x = zb(x, e, g, p)) {
          e = x;
          break;
        }
        q && (g && x && e.length || (q = v));
      }
      g && q && n === d - 1 && !e.length && (p = this.resolution, q = "", n = -1, t = I());
    }
    return Ab(e, p, c, k, g, m, h);
  };
  function Ab(a, c, b, e, d, f, g) {
    let k = a.length, h = a;
    if (k > 1) h = $a(a, c, b, e, d, f, g);
    else if (k === 1) return g ? Sa.call(null, a[0], b, e) : new X(a[0], this);
    return g ? h : new X(h, this);
  }
  function xb(a, c, b, e, d, f, g) {
    a = yb(this, a, c, b, e, d, f, g);
    return this.db ? a.then(function(k) {
      return d ? k || [] : new X(k, this);
    }) : a && a.length ? d ? Sa.call(this, a, b, e) : new X(a, this) : d ? [] : new X([], this);
  }
  function zb(a, c, b, e) {
    let d = [];
    if (a && a.length) {
      if (a.length <= e) {
        c.push(a);
        return;
      }
      for (let f = 0, g; f < e; f++) if (g = a[f]) d[f] = g;
      if (d.length) {
        c.push(d);
        return;
      }
    }
    if (!b) return d;
  }
  function yb(a, c, b, e, d, f, g, k) {
    let h;
    b && (h = a.bidirectional && c > b) && (h = b, b = c, c = h);
    if (a.db) return a.db.get(c, b, e, d, f, g, k);
    a = b ? (a = a.ctx.get(b)) && a.get(c) : a.map.get(c);
    return a;
  }
  function T(a, c) {
    if (!this || this.constructor !== T) return new T(a);
    if (a) {
      var b = M(a) ? a : a.preset;
      b && (a = Object.assign({}, vb[b], a));
    } else a = {};
    b = a.context;
    const e = b === true ? { depth: 1 } : b || {}, d = M(a.encoder) ? va[a.encoder] : a.encode || a.encoder || {};
    this.encoder = d.encode ? d : typeof d === "object" ? new ka(d) : { encode: d };
    this.resolution = a.resolution || 9;
    this.tokenize = b = (b = a.tokenize) && b !== "default" && b !== "exact" && b || "strict";
    this.depth = b === "strict" && e.depth || 0;
    this.bidirectional = e.bidirectional !== false;
    this.fastupdate = !!a.fastupdate;
    this.score = a.score || null;
    (b = a.keystore || 0) && (this.keystore = b);
    this.map = b ? new R(b) : /* @__PURE__ */ new Map();
    this.ctx = b ? new R(b) : /* @__PURE__ */ new Map();
    this.reg = c || (this.fastupdate ? b ? new R(b) : /* @__PURE__ */ new Map() : b ? new S(b) : /* @__PURE__ */ new Set());
    this.N = e.resolution || 3;
    this.rtl = d.rtl || a.rtl || false;
    this.cache = (b = a.cache || null) && new ma(b);
    this.resolve = a.resolve !== false;
    if (b = a.db) this.db = this.mount(b);
    this.M = a.commit !== false;
    this.commit_task = [];
    this.commit_timer = null;
    this.priority = a.priority || 4;
  }
  w = T.prototype;
  w.mount = function(a) {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return a.mount(this);
  };
  w.commit = function() {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return this.db.commit(this);
  };
  w.destroy = function() {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return this.db.destroy();
  };
  function ub(a) {
    a.commit_timer || (a.commit_timer = setTimeout(function() {
      a.commit_timer = null;
      a.db.commit(a);
    }, 1));
  }
  w.clear = function() {
    this.map.clear();
    this.ctx.clear();
    this.reg.clear();
    this.cache && this.cache.clear();
    return this.db ? (this.commit_timer && clearTimeout(this.commit_timer), this.commit_timer = null, this.commit_task = [], this.db.clear()) : this;
  };
  w.append = function(a, c) {
    return this.add(a, c, true);
  };
  w.contain = function(a) {
    return this.db ? this.db.has(a) : this.reg.has(a);
  };
  w.update = function(a, c) {
    const b = this, e = this.remove(a);
    return e && e.then ? e.then(() => b.add(a, c)) : this.add(a, c);
  };
  w.cleanup = function() {
    if (!this.fastupdate) return this;
    tb(this.map);
    this.depth && tb(this.ctx);
    return this;
  };
  w.searchCache = la;
  w.export = function(a, c, b = 0, e = 0) {
    let d, f;
    switch (e) {
      case 0:
        d = "reg";
        f = pb(this.reg);
        break;
      case 1:
        d = "cfg";
        f = null;
        break;
      case 2:
        d = "map";
        f = lb(this.map, this.reg.size);
        break;
      case 3:
        d = "ctx";
        f = nb(this.ctx, this.reg.size);
        break;
      default:
        return;
    }
    return rb.call(this, a, c, d, f, b, e);
  };
  w.import = function(a, c) {
    if (c) switch (typeof c === "string" && (c = JSON.parse(c)), a = a.split("."), a[a.length - 1] === "json" && a.pop(), a.length === 3 && a.shift(), a = a.length > 1 ? a[1] : a[0], a) {
      case "reg":
        this.fastupdate = false;
        this.reg = qb(c, this.reg);
        break;
      case "map":
        this.map = mb(c, this.map);
        break;
      case "ctx":
        this.ctx = ob(c, this.ctx);
    }
  };
  w.serialize = function(a = true) {
    let c = "", b = "", e = "";
    if (this.reg.size) {
      let f;
      for (var d of this.reg.keys()) f || (f = typeof d), c += (c ? "," : "") + (f === "string" ? '"' + d + '"' : d);
      c = "index.reg=new Set([" + c + "]);";
      b = sb(this.map, f);
      b = "index.map=new Map([" + b + "]);";
      for (const g of this.ctx.entries()) {
        d = g[0];
        let k = sb(g[1], f);
        k = "new Map([" + k + "])";
        k = '["' + d + '",' + k + "]";
        e += (e ? "," : "") + k;
      }
      e = "index.ctx=new Map([" + e + "]);";
    }
    return a ? "function inject(index){" + c + b + e + "}" : c + b + e;
  };
  Fa(T.prototype);
  var Bb = typeof window !== "undefined" && (window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
  var Cb = ["map", "ctx", "tag", "reg", "cfg"];
  var Db = I();
  function Eb(a, c = {}) {
    if (!this || this.constructor !== Eb) return new Eb(a, c);
    typeof a === "object" && (c = a, a = a.name);
    a || console.info("Default storage space was used, because a name was not passed.");
    this.id = "flexsearch" + (a ? ":" + a.toLowerCase().replace(/[^a-z0-9_\-]/g, "") : "");
    this.field = c.field ? c.field.toLowerCase().replace(/[^a-z0-9_\-]/g, "") : "";
    this.type = c.type;
    this.fastupdate = this.support_tag_search = false;
    this.db = null;
    this.h = {};
  }
  w = Eb.prototype;
  w.mount = function(a) {
    if (a.index) return a.mount(this);
    a.db = this;
    return this.open();
  };
  w.open = function() {
    if (this.db) return this.db;
    let a = this;
    navigator.storage && navigator.storage.persist && navigator.storage.persist();
    Db[a.id] || (Db[a.id] = []);
    Db[a.id].push(a.field);
    const c = Bb.open(a.id, 1);
    c.onupgradeneeded = function() {
      const b = a.db = this.result;
      for (let e = 0, d; e < Cb.length; e++) {
        d = Cb[e];
        for (let f = 0, g; f < Db[a.id].length; f++) g = Db[a.id][f], b.objectStoreNames.contains(d + (d !== "reg" ? g ? ":" + g : "" : "")) || b.createObjectStore(d + (d !== "reg" ? g ? ":" + g : "" : ""));
      }
    };
    return a.db = Z(c, function(b) {
      a.db = b;
      a.db.onversionchange = function() {
        a.close();
      };
    });
  };
  w.close = function() {
    this.db && this.db.close();
    this.db = null;
  };
  w.destroy = function() {
    const a = Bb.deleteDatabase(this.id);
    return Z(a);
  };
  w.clear = function() {
    const a = [];
    for (let b = 0, e; b < Cb.length; b++) {
      e = Cb[b];
      for (let d = 0, f; d < Db[this.id].length; d++) f = Db[this.id][d], a.push(e + (e !== "reg" ? f ? ":" + f : "" : ""));
    }
    const c = this.db.transaction(a, "readwrite");
    for (let b = 0; b < a.length; b++) c.objectStore(a[b]).clear();
    return Z(c);
  };
  w.get = function(a, c, b = 0, e = 0, d = true, f = false) {
    a = this.db.transaction((c ? "ctx" : "map") + (this.field ? ":" + this.field : ""), "readonly").objectStore((c ? "ctx" : "map") + (this.field ? ":" + this.field : "")).get(c ? c + ":" + a : a);
    const g = this;
    return Z(a).then(function(k) {
      let h = [];
      if (!k || !k.length) return h;
      if (d) {
        if (!b && !e && k.length === 1) return k[0];
        for (let l = 0, m; l < k.length; l++) if ((m = k[l]) && m.length) {
          if (e >= m.length) {
            e -= m.length;
            continue;
          }
          const p = b ? e + Math.min(m.length - e, b) : m.length;
          for (let u = e; u < p; u++) h.push(m[u]);
          e = 0;
          if (h.length === b) break;
        }
        return f ? g.enrich(h) : h;
      }
      return k;
    });
  };
  w.tag = function(a, c = 0, b = 0, e = false) {
    a = this.db.transaction("tag" + (this.field ? ":" + this.field : ""), "readonly").objectStore("tag" + (this.field ? ":" + this.field : "")).get(a);
    const d = this;
    return Z(a).then(function(f) {
      if (!f || !f.length || b >= f.length) return [];
      if (!c && !b) return f;
      f = f.slice(b, b + c);
      return e ? d.enrich(f) : f;
    });
  };
  w.enrich = function(a) {
    typeof a !== "object" && (a = [a]);
    const c = this.db.transaction("reg", "readonly").objectStore("reg"), b = [];
    for (let e = 0; e < a.length; e++) b[e] = Z(c.get(a[e]));
    return Promise.all(b).then(function(e) {
      for (let d = 0; d < e.length; d++) e[d] = { id: a[d], doc: e[d] ? JSON.parse(e[d]) : null };
      return e;
    });
  };
  w.has = function(a) {
    a = this.db.transaction("reg", "readonly").objectStore("reg").getKey(a);
    return Z(a).then(function(c) {
      return !!c;
    });
  };
  w.search = null;
  w.info = function() {
  };
  w.transaction = function(a, c, b) {
    a += a !== "reg" ? this.field ? ":" + this.field : "" : "";
    let e = this.h[a + ":" + c];
    if (e) return b.call(this, e);
    let d = this.db.transaction(a, c);
    this.h[a + ":" + c] = e = d.objectStore(a);
    const f = b.call(this, e);
    this.h[a + ":" + c] = null;
    return Z(d).finally(function() {
      return f;
    });
  };
  w.commit = function(a) {
    return __async(this, null, function* () {
      let c = a.commit_task, b = [];
      a.commit_task = [];
      for (let e = 0, d; e < c.length; e++) d = c[e], d.del && b.push(d.del);
      b.length && (yield this.remove(b));
      a.reg.size && (yield this.transaction("map", "readwrite", function(e) {
        for (const d of a.map) {
          const f = d[0], g = d[1];
          g.length && (e.get(f).onsuccess = function() {
            let k = this.result;
            var h;
            if (k && k.length) {
              const l = Math.max(k.length, g.length);
              for (let m = 0, p, u; m < l; m++) if ((u = g[m]) && u.length) {
                if ((p = k[m]) && p.length) for (h = 0; h < u.length; h++) p.push(u[h]);
                else k[m] = u;
                h = 1;
              }
            } else k = g, h = 1;
            h && e.put(k, f);
          });
        }
      }), yield this.transaction("ctx", "readwrite", function(e) {
        for (const d of a.ctx) {
          const f = d[0], g = d[1];
          for (const k of g) {
            const h = k[0], l = k[1];
            l.length && (e.get(f + ":" + h).onsuccess = function() {
              let m = this.result;
              var p;
              if (m && m.length) {
                const u = Math.max(m.length, l.length);
                for (let r = 0, t, n; r < u; r++) if ((n = l[r]) && n.length) {
                  if ((t = m[r]) && t.length) for (p = 0; p < n.length; p++) t.push(n[p]);
                  else m[r] = n;
                  p = 1;
                }
              } else m = l, p = 1;
              p && e.put(m, f + ":" + h);
            });
          }
        }
      }), a.store ? yield this.transaction(
        "reg",
        "readwrite",
        function(e) {
          for (const d of a.store) {
            const f = d[0], g = d[1];
            e.put(typeof g === "object" ? JSON.stringify(g) : 1, f);
          }
        }
      ) : a.bypass || (yield this.transaction("reg", "readwrite", function(e) {
        for (const d of a.reg.keys()) e.put(1, d);
      })), a.tag && (yield this.transaction("tag", "readwrite", function(e) {
        for (const d of a.tag) {
          const f = d[0], g = d[1];
          g.length && (e.get(f).onsuccess = function() {
            let k = this.result;
            k = k && k.length ? k.concat(g) : g;
            e.put(k, f);
          });
        }
      })), a.map.clear(), a.ctx.clear(), a.tag && a.tag.clear(), a.store && a.store.clear(), a.document || a.reg.clear());
    });
  };
  function Fb(a, c, b) {
    const e = a.value;
    let d, f = 0;
    for (let g = 0, k; g < e.length; g++) {
      if (k = b ? e : e[g]) {
        for (let h = 0, l, m; h < c.length; h++) if (m = c[h], l = k.indexOf(m), l >= 0) if (d = 1, k.length > 1) k.splice(l, 1);
        else {
          e[g] = [];
          break;
        }
        f += k.length;
      }
      if (b) break;
    }
    f ? d && a.update(e) : a.delete();
    a.continue();
  }
  w.remove = function(a) {
    typeof a !== "object" && (a = [a]);
    return Promise.all([this.transaction("map", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a);
      };
    }), this.transaction("ctx", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a);
      };
    }), this.transaction("tag", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a, true);
      };
    }), this.transaction("reg", "readwrite", function(c) {
      for (let b = 0; b < a.length; b++) c.delete(a[b]);
    })]);
  };
  function Z(a, c) {
    return new Promise((b, e) => {
      a.onsuccess = a.oncomplete = function() {
        c && c(this.result);
        c = null;
        b(this.result);
      };
      a.onerror = a.onblocked = e;
      a = null;
    });
  }
  var flexsearch_bundle_module_min_default = { Index: T, Charset: va, Encoder: ka, Document: Na, Worker: La, Resolver: X, IndexedDB: Eb, Language: {} };

  // <stdin>
  (function() {
    "use strict";
    const index = new flexsearch_bundle_module_min_default.Document({
      tokenize: "forward",
      document: {
        id: "id",
        index: [
          {
            field: "title"
          },
          {
            field: "tags"
          },
          {
            field: "content"
          },
          {
            field: "date",
            tokenize: "strict",
            encode: false
          }
        ],
        store: ["title", "summary", "date", "permalink"]
      }
    });
    function showResults(items) {
      const template = document.querySelector("template").content;
      const fragment = document.createDocumentFragment();
      const results = document.querySelector(".search-results");
      results.textContent = "";
      const itemsLength = Object.keys(items).length;
      if (itemsLength === 0 && query.value === "") {
        document.querySelector(".search-no-results").classList.add("d-none");
        document.querySelector(".search-no-recent").classList.remove("d-none");
      } else if (itemsLength === 0 && query.value !== "") {
        document.querySelector(".search-no-recent").classList.add("d-none");
        const queryNoResults = document.querySelector(".query-no-results");
        queryNoResults.innerText = query.value;
        document.querySelector(".search-no-results").classList.remove("d-none");
      } else {
        document.querySelector(".search-no-recent").classList.add("d-none");
        document.querySelector(".search-no-results").classList.add("d-none");
      }
      for (const id in items) {
        const item = items[id];
        const result = template.cloneNode(true);
        const a = result.querySelector("a");
        const time = result.querySelector("time");
        const content = result.querySelector(".content");
        a.innerHTML = item.title;
        a.href = item.permalink;
        time.innerText = item.date;
        content.innerHTML = item.summary;
        fragment.appendChild(result);
      }
      results.appendChild(fragment);
    }
    function doSearch() {
      const query2 = document.querySelector(".search-text").value.trim();
      const limit = 99;
      const results = index.search({
        query: query2,
        enrich: true,
        limit
      });
      const items = {};
      results.forEach(function(result) {
        result.result.forEach(function(r) {
          items[r.id] = r.doc;
        });
      });
      showResults(items);
    }
    function enableUI() {
      const searchform = document.querySelector(".search-form");
      searchform.addEventListener("submit", function(e) {
        e.preventDefault();
        doSearch();
      });
      searchform.addEventListener("input", function() {
        doSearch();
      });
      document.querySelector(".search-loading").classList.add("d-none");
      document.querySelector(".search-input").classList.remove("d-none");
      document.querySelector(".search-text").focus();
    }
    function buildIndex() {
      document.querySelector(".search-loading").classList.remove("d-none");
      fetch("https://iramat.github.io/almacir/search-index.json").then(function(response) {
        return response.json();
      }).then(function(data) {
        data.forEach(function(item) {
          index.add(item);
        });
      });
    }
    buildIndex();
    enableUI();
  })();
})();
/*!
 * FlexSearch for Bootstrap based Thulite sites
 * Copyright 2021-2024 Thulite
 * Licensed under the MIT License
 * Based on https://github.com/frjo/hugo-theme-zen/blob/main/assets/js/search.js
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2ZsZXhzZWFyY2gvZGlzdC9mbGV4c2VhcmNoLmJ1bmRsZS5tb2R1bGUubWluLm1qcyIsICI8c3RkaW4+Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiohXHJcbiAqIEZsZXhTZWFyY2guanMgdjAuOC4yMTIgKEJ1bmRsZS9Nb2R1bGUpXHJcbiAqIEF1dGhvciBhbmQgQ29weXJpZ2h0OiBUaG9tYXMgV2lsa2VybGluZ1xyXG4gKiBMaWNlbmNlOiBBcGFjaGUtMi4wXHJcbiAqIEhvc3RlZCBieSBOZXh0YXBwcyBHbWJIXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZXh0YXBwcy1kZS9mbGV4c2VhcmNoXHJcbiAqL1xudmFyIHc7ZnVuY3Rpb24gSChhLGMsYil7Y29uc3QgZT10eXBlb2YgYixkPXR5cGVvZiBhO2lmKGUhPT1cInVuZGVmaW5lZFwiKXtpZihkIT09XCJ1bmRlZmluZWRcIil7aWYoYil7aWYoZD09PVwiZnVuY3Rpb25cIiYmZT09PWQpcmV0dXJuIGZ1bmN0aW9uKGspe3JldHVybiBhKGIoaykpfTtjPWEuY29uc3RydWN0b3I7aWYoYz09PWIuY29uc3RydWN0b3Ipe2lmKGM9PT1BcnJheSlyZXR1cm4gYi5jb25jYXQoYSk7aWYoYz09PU1hcCl7dmFyIGY9bmV3IE1hcChiKTtmb3IodmFyIGcgb2YgYSlmLnNldChnWzBdLGdbMV0pO3JldHVybiBmfWlmKGM9PT1TZXQpe2c9bmV3IFNldChiKTtmb3IoZiBvZiBhLnZhbHVlcygpKWcuYWRkKGYpO3JldHVybiBnfX19cmV0dXJuIGF9cmV0dXJuIGJ9cmV0dXJuIGQ9PT1cInVuZGVmaW5lZFwiP2M6YX1mdW5jdGlvbiBhYShhLGMpe3JldHVybiB0eXBlb2YgYT09PVwidW5kZWZpbmVkXCI/YzphfWZ1bmN0aW9uIEkoKXtyZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKX1cbmZ1bmN0aW9uIE0oYSl7cmV0dXJuIHR5cGVvZiBhPT09XCJzdHJpbmdcIn1mdW5jdGlvbiBiYShhKXtyZXR1cm4gdHlwZW9mIGE9PT1cIm9iamVjdFwifWZ1bmN0aW9uIGNhKGEsYyl7aWYoTShjKSlhPWFbY107ZWxzZSBmb3IobGV0IGI9MDthJiZiPGMubGVuZ3RoO2IrKylhPWFbY1tiXV07cmV0dXJuIGF9O2NvbnN0IGVhPS9bXlxccHtMfVxccHtOfV0rL3UsZmE9LyhcXGR7M30pL2csaGE9LyhcXEQpKFxcZHszfSkvZyxpYT0vKFxcZHszfSkoXFxEKS9nLGphPS9bXFx1MDMwMC1cXHUwMzZmXS9nO2Z1bmN0aW9uIGthKGE9e30pe2lmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09a2EpcmV0dXJuIG5ldyBrYSguLi5hcmd1bWVudHMpO2lmKGFyZ3VtZW50cy5sZW5ndGgpZm9yKGE9MDthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKXRoaXMuYXNzaWduKGFyZ3VtZW50c1thXSk7ZWxzZSB0aGlzLmFzc2lnbihhKX13PWthLnByb3RvdHlwZTtcbncuYXNzaWduPWZ1bmN0aW9uKGEpe3RoaXMubm9ybWFsaXplPUgoYS5ub3JtYWxpemUsITAsdGhpcy5ub3JtYWxpemUpO2xldCBjPWEuaW5jbHVkZSxiPWN8fGEuZXhjbHVkZXx8YS5zcGxpdCxlO2lmKGJ8fGI9PT1cIlwiKXtpZih0eXBlb2YgYj09PVwib2JqZWN0XCImJmIuY29uc3RydWN0b3IhPT1SZWdFeHApe2xldCBkPVwiXCI7ZT0hYztjfHwoZCs9XCJcXFxccHtafVwiKTtiLmxldHRlciYmKGQrPVwiXFxcXHB7TH1cIik7Yi5udW1iZXImJihkKz1cIlxcXFxwe059XCIsZT0hIWMpO2Iuc3ltYm9sJiYoZCs9XCJcXFxccHtTfVwiKTtiLnB1bmN0dWF0aW9uJiYoZCs9XCJcXFxccHtQfVwiKTtiLmNvbnRyb2wmJihkKz1cIlxcXFxwe0N9XCIpO2lmKGI9Yi5jaGFyKWQrPXR5cGVvZiBiPT09XCJvYmplY3RcIj9iLmpvaW4oXCJcIik6Yjt0cnl7dGhpcy5zcGxpdD1uZXcgUmVnRXhwKFwiW1wiKyhjP1wiXlwiOlwiXCIpK2QrXCJdK1wiLFwidVwiKX1jYXRjaChmKXt0aGlzLnNwbGl0PS9cXHMrL319ZWxzZSB0aGlzLnNwbGl0PWIsZT1iPT09ITF8fFwiYTFhXCIuc3BsaXQoYikubGVuZ3RoPFxuMjt0aGlzLm51bWVyaWM9SChhLm51bWVyaWMsZSl9ZWxzZXt0cnl7dGhpcy5zcGxpdD1IKHRoaXMuc3BsaXQsZWEpfWNhdGNoKGQpe3RoaXMuc3BsaXQ9L1xccysvfXRoaXMubnVtZXJpYz1IKGEubnVtZXJpYyxIKHRoaXMubnVtZXJpYywhMCkpfXRoaXMucHJlcGFyZT1IKGEucHJlcGFyZSxudWxsLHRoaXMucHJlcGFyZSk7dGhpcy5maW5hbGl6ZT1IKGEuZmluYWxpemUsbnVsbCx0aGlzLmZpbmFsaXplKTtiPWEuZmlsdGVyO3RoaXMuZmlsdGVyPXR5cGVvZiBiPT09XCJmdW5jdGlvblwiP2I6SChiJiZuZXcgU2V0KGIpLG51bGwsdGhpcy5maWx0ZXIpO3RoaXMuZGVkdXBlPUgoYS5kZWR1cGUsITAsdGhpcy5kZWR1cGUpO3RoaXMubWF0Y2hlcj1IKChiPWEubWF0Y2hlcikmJm5ldyBNYXAoYiksbnVsbCx0aGlzLm1hdGNoZXIpO3RoaXMubWFwcGVyPUgoKGI9YS5tYXBwZXIpJiZuZXcgTWFwKGIpLG51bGwsdGhpcy5tYXBwZXIpO3RoaXMuc3RlbW1lcj1IKChiPWEuc3RlbW1lcikmJm5ldyBNYXAoYiksXG5udWxsLHRoaXMuc3RlbW1lcik7dGhpcy5yZXBsYWNlcj1IKGEucmVwbGFjZXIsbnVsbCx0aGlzLnJlcGxhY2VyKTt0aGlzLm1pbmxlbmd0aD1IKGEubWlubGVuZ3RoLDEsdGhpcy5taW5sZW5ndGgpO3RoaXMubWF4bGVuZ3RoPUgoYS5tYXhsZW5ndGgsMTAyNCx0aGlzLm1heGxlbmd0aCk7dGhpcy5ydGw9SChhLnJ0bCwhMSx0aGlzLnJ0bCk7aWYodGhpcy5jYWNoZT1iPUgoYS5jYWNoZSwhMCx0aGlzLmNhY2hlKSl0aGlzLkY9bnVsbCx0aGlzLkw9dHlwZW9mIGI9PT1cIm51bWJlclwiP2I6MkU1LHRoaXMuQj1uZXcgTWFwLHRoaXMuRD1uZXcgTWFwLHRoaXMuST10aGlzLkg9MTI4O3RoaXMuaD1cIlwiO3RoaXMuSj1udWxsO3RoaXMuQT1cIlwiO3RoaXMuSz1udWxsO2lmKHRoaXMubWF0Y2hlcilmb3IoY29uc3QgZCBvZiB0aGlzLm1hdGNoZXIua2V5cygpKXRoaXMuaCs9KHRoaXMuaD9cInxcIjpcIlwiKStkO2lmKHRoaXMuc3RlbW1lcilmb3IoY29uc3QgZCBvZiB0aGlzLnN0ZW1tZXIua2V5cygpKXRoaXMuQSs9XG4odGhpcy5BP1wifFwiOlwiXCIpK2Q7cmV0dXJuIHRoaXN9O3cuYWRkU3RlbW1lcj1mdW5jdGlvbihhLGMpe3RoaXMuc3RlbW1lcnx8KHRoaXMuc3RlbW1lcj1uZXcgTWFwKTt0aGlzLnN0ZW1tZXIuc2V0KGEsYyk7dGhpcy5BKz0odGhpcy5BP1wifFwiOlwiXCIpK2E7dGhpcy5LPW51bGw7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307dy5hZGRGaWx0ZXI9ZnVuY3Rpb24oYSl7dHlwZW9mIGE9PT1cImZ1bmN0aW9uXCI/dGhpcy5maWx0ZXI9YToodGhpcy5maWx0ZXJ8fCh0aGlzLmZpbHRlcj1uZXcgU2V0KSx0aGlzLmZpbHRlci5hZGQoYSkpO3RoaXMuY2FjaGUmJlEodGhpcyk7cmV0dXJuIHRoaXN9O1xudy5hZGRNYXBwZXI9ZnVuY3Rpb24oYSxjKXtpZih0eXBlb2YgYT09PVwib2JqZWN0XCIpcmV0dXJuIHRoaXMuYWRkUmVwbGFjZXIoYSxjKTtpZihhLmxlbmd0aD4xKXJldHVybiB0aGlzLmFkZE1hdGNoZXIoYSxjKTt0aGlzLm1hcHBlcnx8KHRoaXMubWFwcGVyPW5ldyBNYXApO3RoaXMubWFwcGVyLnNldChhLGMpO3RoaXMuY2FjaGUmJlEodGhpcyk7cmV0dXJuIHRoaXN9O3cuYWRkTWF0Y2hlcj1mdW5jdGlvbihhLGMpe2lmKHR5cGVvZiBhPT09XCJvYmplY3RcIilyZXR1cm4gdGhpcy5hZGRSZXBsYWNlcihhLGMpO2lmKGEubGVuZ3RoPDImJih0aGlzLmRlZHVwZXx8dGhpcy5tYXBwZXIpKXJldHVybiB0aGlzLmFkZE1hcHBlcihhLGMpO3RoaXMubWF0Y2hlcnx8KHRoaXMubWF0Y2hlcj1uZXcgTWFwKTt0aGlzLm1hdGNoZXIuc2V0KGEsYyk7dGhpcy5oKz0odGhpcy5oP1wifFwiOlwiXCIpK2E7dGhpcy5KPW51bGw7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307XG53LmFkZFJlcGxhY2VyPWZ1bmN0aW9uKGEsYyl7aWYodHlwZW9mIGE9PT1cInN0cmluZ1wiKXJldHVybiB0aGlzLmFkZE1hdGNoZXIoYSxjKTt0aGlzLnJlcGxhY2VyfHwodGhpcy5yZXBsYWNlcj1bXSk7dGhpcy5yZXBsYWNlci5wdXNoKGEsYyk7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307XG53LmVuY29kZT1mdW5jdGlvbihhLGMpe2lmKHRoaXMuY2FjaGUmJmEubGVuZ3RoPD10aGlzLkgpaWYodGhpcy5GKXtpZih0aGlzLkIuaGFzKGEpKXJldHVybiB0aGlzLkIuZ2V0KGEpfWVsc2UgdGhpcy5GPXNldFRpbWVvdXQoUSw1MCx0aGlzKTt0aGlzLm5vcm1hbGl6ZSYmKHR5cGVvZiB0aGlzLm5vcm1hbGl6ZT09PVwiZnVuY3Rpb25cIj9hPXRoaXMubm9ybWFsaXplKGEpOmE9amE/YS5ub3JtYWxpemUoXCJORktEXCIpLnJlcGxhY2UoamEsXCJcIikudG9Mb3dlckNhc2UoKTphLnRvTG93ZXJDYXNlKCkpO3RoaXMucHJlcGFyZSYmKGE9dGhpcy5wcmVwYXJlKGEpKTt0aGlzLm51bWVyaWMmJmEubGVuZ3RoPjMmJihhPWEucmVwbGFjZShoYSxcIiQxICQyXCIpLnJlcGxhY2UoaWEsXCIkMSAkMlwiKS5yZXBsYWNlKGZhLFwiJDEgXCIpKTtjb25zdCBiPSEodGhpcy5kZWR1cGV8fHRoaXMubWFwcGVyfHx0aGlzLmZpbHRlcnx8dGhpcy5tYXRjaGVyfHx0aGlzLnN0ZW1tZXJ8fHRoaXMucmVwbGFjZXIpO2xldCBlPVxuW10sZD1JKCksZixnLGs9dGhpcy5zcGxpdHx8dGhpcy5zcGxpdD09PVwiXCI/YS5zcGxpdCh0aGlzLnNwbGl0KTpbYV07Zm9yKGxldCBsPTAsbSxwO2w8ay5sZW5ndGg7bCsrKWlmKChtPXA9a1tsXSkmJiEobS5sZW5ndGg8dGhpcy5taW5sZW5ndGh8fG0ubGVuZ3RoPnRoaXMubWF4bGVuZ3RoKSl7aWYoYyl7aWYoZFttXSljb250aW51ZTtkW21dPTF9ZWxzZXtpZihmPT09bSljb250aW51ZTtmPW19aWYoYillLnB1c2gobSk7ZWxzZSBpZighdGhpcy5maWx0ZXJ8fCh0eXBlb2YgdGhpcy5maWx0ZXI9PT1cImZ1bmN0aW9uXCI/dGhpcy5maWx0ZXIobSk6IXRoaXMuZmlsdGVyLmhhcyhtKSkpe2lmKHRoaXMuY2FjaGUmJm0ubGVuZ3RoPD10aGlzLkkpaWYodGhpcy5GKXt2YXIgaD10aGlzLkQuZ2V0KG0pO2lmKGh8fGg9PT1cIlwiKXtoJiZlLnB1c2goaCk7Y29udGludWV9fWVsc2UgdGhpcy5GPXNldFRpbWVvdXQoUSw1MCx0aGlzKTtpZih0aGlzLnN0ZW1tZXIpe3RoaXMuS3x8KHRoaXMuSz1uZXcgUmVnRXhwKFwiKD8hXikoXCIrXG50aGlzLkErXCIpJFwiKSk7bGV0IHU7Zm9yKDt1IT09bSYmbS5sZW5ndGg+MjspdT1tLG09bS5yZXBsYWNlKHRoaXMuSyxyPT50aGlzLnN0ZW1tZXIuZ2V0KHIpKX1pZihtJiYodGhpcy5tYXBwZXJ8fHRoaXMuZGVkdXBlJiZtLmxlbmd0aD4xKSl7aD1cIlwiO2ZvcihsZXQgdT0wLHI9XCJcIix0LG47dTxtLmxlbmd0aDt1KyspdD1tLmNoYXJBdCh1KSx0PT09ciYmdGhpcy5kZWR1cGV8fCgobj10aGlzLm1hcHBlciYmdGhpcy5tYXBwZXIuZ2V0KHQpKXx8bj09PVwiXCI/bj09PXImJnRoaXMuZGVkdXBlfHwhKHI9bil8fChoKz1uKTpoKz1yPXQpO209aH10aGlzLm1hdGNoZXImJm0ubGVuZ3RoPjEmJih0aGlzLkp8fCh0aGlzLko9bmV3IFJlZ0V4cChcIihcIit0aGlzLmgrXCIpXCIsXCJnXCIpKSxtPW0ucmVwbGFjZSh0aGlzLkosdT0+dGhpcy5tYXRjaGVyLmdldCh1KSkpO2lmKG0mJnRoaXMucmVwbGFjZXIpZm9yKGg9MDttJiZoPHRoaXMucmVwbGFjZXIubGVuZ3RoO2grPTIpbT1tLnJlcGxhY2UodGhpcy5yZXBsYWNlcltoXSxcbnRoaXMucmVwbGFjZXJbaCsxXSk7dGhpcy5jYWNoZSYmcC5sZW5ndGg8PXRoaXMuSSYmKHRoaXMuRC5zZXQocCxtKSx0aGlzLkQuc2l6ZT50aGlzLkwmJih0aGlzLkQuY2xlYXIoKSx0aGlzLkk9dGhpcy5JLzEuMXwwKSk7aWYobSl7aWYobSE9PXApaWYoYyl7aWYoZFttXSljb250aW51ZTtkW21dPTF9ZWxzZXtpZihnPT09bSljb250aW51ZTtnPW19ZS5wdXNoKG0pfX19dGhpcy5maW5hbGl6ZSYmKGU9dGhpcy5maW5hbGl6ZShlKXx8ZSk7dGhpcy5jYWNoZSYmYS5sZW5ndGg8PXRoaXMuSCYmKHRoaXMuQi5zZXQoYSxlKSx0aGlzLkIuc2l6ZT50aGlzLkwmJih0aGlzLkIuY2xlYXIoKSx0aGlzLkg9dGhpcy5ILzEuMXwwKSk7cmV0dXJuIGV9O2Z1bmN0aW9uIFEoYSl7YS5GPW51bGw7YS5CLmNsZWFyKCk7YS5ELmNsZWFyKCl9O2Z1bmN0aW9uIGxhKGEsYyxiKXtifHwoY3x8dHlwZW9mIGEhPT1cIm9iamVjdFwiP3R5cGVvZiBjPT09XCJvYmplY3RcIiYmKGI9YyxjPTApOmI9YSk7YiYmKGE9Yi5xdWVyeXx8YSxjPWIubGltaXR8fGMpO2xldCBlPVwiXCIrKGN8fDApO2ImJihlKz0oYi5vZmZzZXR8fDApKyEhYi5jb250ZXh0KyEhYi5zdWdnZXN0KyhiLnJlc29sdmUhPT0hMSkrKGIucmVzb2x1dGlvbnx8dGhpcy5yZXNvbHV0aW9uKSsoYi5ib29zdHx8MCkpO2E9KFwiXCIrYSkudG9Mb3dlckNhc2UoKTt0aGlzLmNhY2hlfHwodGhpcy5jYWNoZT1uZXcgbWEpO2xldCBkPXRoaXMuY2FjaGUuZ2V0KGErZSk7aWYoIWQpe2NvbnN0IGY9YiYmYi5jYWNoZTtmJiYoYi5jYWNoZT0hMSk7ZD10aGlzLnNlYXJjaChhLGMsYik7ZiYmKGIuY2FjaGU9Zik7dGhpcy5jYWNoZS5zZXQoYStlLGQpfXJldHVybiBkfWZ1bmN0aW9uIG1hKGEpe3RoaXMubGltaXQ9YSYmYSE9PSEwP2E6MUUzO3RoaXMuY2FjaGU9bmV3IE1hcDt0aGlzLmg9XCJcIn1cbm1hLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxjKXt0aGlzLmNhY2hlLnNldCh0aGlzLmg9YSxjKTt0aGlzLmNhY2hlLnNpemU+dGhpcy5saW1pdCYmdGhpcy5jYWNoZS5kZWxldGUodGhpcy5jYWNoZS5rZXlzKCkubmV4dCgpLnZhbHVlKX07bWEucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtjb25zdCBjPXRoaXMuY2FjaGUuZ2V0KGEpO2MmJnRoaXMuaCE9PWEmJih0aGlzLmNhY2hlLmRlbGV0ZShhKSx0aGlzLmNhY2hlLnNldCh0aGlzLmg9YSxjKSk7cmV0dXJuIGN9O21hLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSl7Zm9yKGNvbnN0IGMgb2YgdGhpcy5jYWNoZSl7Y29uc3QgYj1jWzBdO2NbMV0uaW5jbHVkZXMoYSkmJnRoaXMuY2FjaGUuZGVsZXRlKGIpfX07bWEucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5jYWNoZS5jbGVhcigpO3RoaXMuaD1cIlwifTtjb25zdCBuYT17bm9ybWFsaXplOiExLG51bWVyaWM6ITEsZGVkdXBlOiExfTtjb25zdCBvYT17fTtjb25zdCByYT1uZXcgTWFwKFtbXCJiXCIsXCJwXCJdLFtcInZcIixcImZcIl0sW1wid1wiLFwiZlwiXSxbXCJ6XCIsXCJzXCJdLFtcInhcIixcInNcIl0sW1wiZFwiLFwidFwiXSxbXCJuXCIsXCJtXCJdLFtcImNcIixcImtcIl0sW1wiZ1wiLFwia1wiXSxbXCJqXCIsXCJrXCJdLFtcInFcIixcImtcIl0sW1wiaVwiLFwiZVwiXSxbXCJ5XCIsXCJlXCJdLFtcInVcIixcIm9cIl1dKTtjb25zdCBzYT1uZXcgTWFwKFtbXCJhZVwiLFwiYVwiXSxbXCJvZVwiLFwib1wiXSxbXCJzaFwiLFwic1wiXSxbXCJraFwiLFwia1wiXSxbXCJ0aFwiLFwidFwiXSxbXCJwaFwiLFwiZlwiXSxbXCJwZlwiLFwiZlwiXV0pLHRhPVsvKFteYWVvXSloKC4pL2csXCIkMSQyXCIsLyhbYWVvXSloKFteYWVvXXwkKS9nLFwiJDEkMlwiLC8oLilcXDErL2csXCIkMVwiXTtjb25zdCB1YT17YTpcIlwiLGU6XCJcIixpOlwiXCIsbzpcIlwiLHU6XCJcIix5OlwiXCIsYjoxLGY6MSxwOjEsdjoxLGM6MixnOjIsajoyLGs6MixxOjIsczoyLHg6Mix6OjIsXCJcXHUwMGRmXCI6MixkOjMsdDozLGw6NCxtOjUsbjo1LHI6Nn07dmFyIHZhPXtFeGFjdDpuYSxEZWZhdWx0Om9hLE5vcm1hbGl6ZTpvYSxMYXRpbkJhbGFuY2U6e21hcHBlcjpyYX0sTGF0aW5BZHZhbmNlZDp7bWFwcGVyOnJhLG1hdGNoZXI6c2EscmVwbGFjZXI6dGF9LExhdGluRXh0cmE6e21hcHBlcjpyYSxyZXBsYWNlcjp0YS5jb25jYXQoWy8oPyFeKVthZW9dL2csXCJcIl0pLG1hdGNoZXI6c2F9LExhdGluU291bmRleDp7ZGVkdXBlOiExLGluY2x1ZGU6e2xldHRlcjohMH0sZmluYWxpemU6ZnVuY3Rpb24oYSl7Zm9yKGxldCBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07bGV0IGU9Yy5jaGFyQXQoMCksZD11YVtlXTtmb3IobGV0IGY9MSxnO2Y8Yy5sZW5ndGgmJihnPWMuY2hhckF0KGYpLGc9PT1cImhcInx8Zz09PVwid1wifHwhKGc9dWFbZ10pfHxnPT09ZHx8KGUrPWcsZD1nLGUubGVuZ3RoIT09NCkpO2YrKyk7YVtiXT1lfX19LENKSzp7c3BsaXQ6XCJcIn0sTGF0aW5FeGFjdDpuYSxMYXRpbkRlZmF1bHQ6b2EsTGF0aW5TaW1wbGU6b2F9O2Z1bmN0aW9uIHdhKGEsYyxiLGUpe2xldCBkPVtdO2ZvcihsZXQgZj0wLGc7ZjxhLmluZGV4Lmxlbmd0aDtmKyspaWYoZz1hLmluZGV4W2ZdLGM+PWcubGVuZ3RoKWMtPWcubGVuZ3RoO2Vsc2V7Yz1nW2U/XCJzcGxpY2VcIjpcInNsaWNlXCJdKGMsYik7Y29uc3Qgaz1jLmxlbmd0aDtpZihrJiYoZD1kLmxlbmd0aD9kLmNvbmNhdChjKTpjLGItPWssZSYmKGEubGVuZ3RoLT1rKSwhYikpYnJlYWs7Yz0wfXJldHVybiBkfVxuZnVuY3Rpb24geGEoYSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT14YSlyZXR1cm4gbmV3IHhhKGEpO3RoaXMuaW5kZXg9YT9bYV06W107dGhpcy5sZW5ndGg9YT9hLmxlbmd0aDowO2NvbnN0IGM9dGhpcztyZXR1cm4gbmV3IFByb3h5KFtdLHtnZXQoYixlKXtpZihlPT09XCJsZW5ndGhcIilyZXR1cm4gYy5sZW5ndGg7aWYoZT09PVwicHVzaFwiKXJldHVybiBmdW5jdGlvbihkKXtjLmluZGV4W2MuaW5kZXgubGVuZ3RoLTFdLnB1c2goZCk7Yy5sZW5ndGgrK307aWYoZT09PVwicG9wXCIpcmV0dXJuIGZ1bmN0aW9uKCl7aWYoYy5sZW5ndGgpcmV0dXJuIGMubGVuZ3RoLS0sYy5pbmRleFtjLmluZGV4Lmxlbmd0aC0xXS5wb3AoKX07aWYoZT09PVwiaW5kZXhPZlwiKXJldHVybiBmdW5jdGlvbihkKXtsZXQgZj0wO2ZvcihsZXQgZz0wLGssaDtnPGMuaW5kZXgubGVuZ3RoO2crKyl7az1jLmluZGV4W2ddO2g9ay5pbmRleE9mKGQpO2lmKGg+PTApcmV0dXJuIGYraDtmKz1rLmxlbmd0aH1yZXR1cm4tMX07XG5pZihlPT09XCJpbmNsdWRlc1wiKXJldHVybiBmdW5jdGlvbihkKXtmb3IobGV0IGY9MDtmPGMuaW5kZXgubGVuZ3RoO2YrKylpZihjLmluZGV4W2ZdLmluY2x1ZGVzKGQpKXJldHVybiEwO3JldHVybiExfTtpZihlPT09XCJzbGljZVwiKXJldHVybiBmdW5jdGlvbihkLGYpe3JldHVybiB3YShjLGR8fDAsZnx8Yy5sZW5ndGgsITEpfTtpZihlPT09XCJzcGxpY2VcIilyZXR1cm4gZnVuY3Rpb24oZCxmKXtyZXR1cm4gd2EoYyxkfHwwLGZ8fGMubGVuZ3RoLCEwKX07aWYoZT09PVwiY29uc3RydWN0b3JcIilyZXR1cm4gQXJyYXk7aWYodHlwZW9mIGUhPT1cInN5bWJvbFwiKXJldHVybihiPWMuaW5kZXhbZS8yKiozMXwwXSkmJmJbZV19LHNldChiLGUsZCl7Yj1lLzIqKjMxfDA7KGMuaW5kZXhbYl18fChjLmluZGV4W2JdPVtdKSlbZV09ZDtjLmxlbmd0aCsrO3JldHVybiEwfX0pfXhhLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuaW5kZXgubGVuZ3RoPTB9O3hhLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKCl7fTtcbmZ1bmN0aW9uIFIoYT04KXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PVIpcmV0dXJuIG5ldyBSKGEpO3RoaXMuaW5kZXg9SSgpO3RoaXMuaD1bXTt0aGlzLnNpemU9MDthPjMyPyh0aGlzLkI9QWEsdGhpcy5BPUJpZ0ludChhKSk6KHRoaXMuQj1CYSx0aGlzLkE9YSl9Ui5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2NvbnN0IGM9dGhpcy5pbmRleFt0aGlzLkIoYSldO3JldHVybiBjJiZjLmdldChhKX07Ui5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYyl7dmFyIGI9dGhpcy5CKGEpO2xldCBlPXRoaXMuaW5kZXhbYl07ZT8oYj1lLnNpemUsZS5zZXQoYSxjKSwoYi09ZS5zaXplKSYmdGhpcy5zaXplKyspOih0aGlzLmluZGV4W2JdPWU9bmV3IE1hcChbW2EsY11dKSx0aGlzLmgucHVzaChlKSx0aGlzLnNpemUrKyl9O1xuZnVuY3Rpb24gUyhhPTgpe2lmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09UylyZXR1cm4gbmV3IFMoYSk7dGhpcy5pbmRleD1JKCk7dGhpcy5oPVtdO3RoaXMuc2l6ZT0wO2E+MzI/KHRoaXMuQj1BYSx0aGlzLkE9QmlnSW50KGEpKToodGhpcy5CPUJhLHRoaXMuQT1hKX1TLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcy5CKGEpO2xldCBiPXRoaXMuaW5kZXhbY107Yj8oYz1iLnNpemUsYi5hZGQoYSksKGMtPWIuc2l6ZSkmJnRoaXMuc2l6ZSsrKToodGhpcy5pbmRleFtjXT1iPW5ldyBTZXQoW2FdKSx0aGlzLmgucHVzaChiKSx0aGlzLnNpemUrKyl9O3c9Ui5wcm90b3R5cGU7dy5oYXM9Uy5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGEpe2NvbnN0IGM9dGhpcy5pbmRleFt0aGlzLkIoYSldO3JldHVybiBjJiZjLmhhcyhhKX07XG53LmRlbGV0ZT1TLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oYSl7Y29uc3QgYz10aGlzLmluZGV4W3RoaXMuQihhKV07YyYmYy5kZWxldGUoYSkmJnRoaXMuc2l6ZS0tfTt3LmNsZWFyPVMucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5pbmRleD1JKCk7dGhpcy5oPVtdO3RoaXMuc2l6ZT0wfTt3LnZhbHVlcz1TLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24qKCl7Zm9yKGxldCBhPTA7YTx0aGlzLmgubGVuZ3RoO2ErKylmb3IobGV0IGMgb2YgdGhpcy5oW2FdLnZhbHVlcygpKXlpZWxkIGN9O3cua2V5cz1TLnByb3RvdHlwZS5rZXlzPWZ1bmN0aW9uKigpe2ZvcihsZXQgYT0wO2E8dGhpcy5oLmxlbmd0aDthKyspZm9yKGxldCBjIG9mIHRoaXMuaFthXS5rZXlzKCkpeWllbGQgY307dy5lbnRyaWVzPVMucHJvdG90eXBlLmVudHJpZXM9ZnVuY3Rpb24qKCl7Zm9yKGxldCBhPTA7YTx0aGlzLmgubGVuZ3RoO2ErKylmb3IobGV0IGMgb2YgdGhpcy5oW2FdLmVudHJpZXMoKSl5aWVsZCBjfTtcbmZ1bmN0aW9uIEJhKGEpe2xldCBjPTIqKnRoaXMuQS0xO2lmKHR5cGVvZiBhPT1cIm51bWJlclwiKXJldHVybiBhJmM7bGV0IGI9MCxlPXRoaXMuQSsxO2ZvcihsZXQgZD0wO2Q8YS5sZW5ndGg7ZCsrKWI9KGIqZV5hLmNoYXJDb2RlQXQoZCkpJmM7cmV0dXJuIHRoaXMuQT09PTMyP2IrMioqMzE6Yn1mdW5jdGlvbiBBYShhKXtsZXQgYz1CaWdJbnQoMikqKnRoaXMuQS1CaWdJbnQoMSk7dmFyIGI9dHlwZW9mIGE7aWYoYj09PVwiYmlnaW50XCIpcmV0dXJuIGEmYztpZihiPT09XCJudW1iZXJcIilyZXR1cm4gQmlnSW50KGEpJmM7Yj1CaWdJbnQoMCk7bGV0IGU9dGhpcy5BK0JpZ0ludCgxKTtmb3IobGV0IGQ9MDtkPGEubGVuZ3RoO2QrKyliPShiKmVeQmlnSW50KGEuY2hhckNvZGVBdChkKSkpJmM7cmV0dXJuIGJ9O2xldCBDYSxEYTtcbmFzeW5jIGZ1bmN0aW9uIEVhKGEpe2E9YS5kYXRhO3ZhciBjPWEudGFzaztjb25zdCBiPWEuaWQ7bGV0IGU9YS5hcmdzO3N3aXRjaChjKXtjYXNlIFwiaW5pdFwiOkRhPWEub3B0aW9uc3x8e307KGM9YS5mYWN0b3J5KT8oRnVuY3Rpb24oXCJyZXR1cm4gXCIrYykoKShzZWxmKSxDYT1uZXcgc2VsZi5GbGV4U2VhcmNoLkluZGV4KERhKSxkZWxldGUgc2VsZi5GbGV4U2VhcmNoKTpDYT1uZXcgVChEYSk7cG9zdE1lc3NhZ2Uoe2lkOmJ9KTticmVhaztkZWZhdWx0OmxldCBkO2M9PT1cImV4cG9ydFwiJiYoZVsxXT8oZVswXT1EYS5leHBvcnQsZVsyXT0wLGVbM109MSk6ZT1udWxsKTtjPT09XCJpbXBvcnRcIj9lWzBdJiYoYT1hd2FpdCBEYS5pbXBvcnQuY2FsbChDYSxlWzBdKSxDYS5pbXBvcnQoZVswXSxhKSk6KChkPWUmJkNhW2NdLmFwcGx5KENhLGUpKSYmZC50aGVuJiYoZD1hd2FpdCBkKSxkJiZkLmF3YWl0JiYoZD1hd2FpdCBkLmF3YWl0KSxjPT09XCJzZWFyY2hcIiYmZC5yZXN1bHQmJihkPWQucmVzdWx0KSk7XG5wb3N0TWVzc2FnZShjPT09XCJzZWFyY2hcIj97aWQ6Yixtc2c6ZH06e2lkOmJ9KX19O2Z1bmN0aW9uIEZhKGEpe0dhLmNhbGwoYSxcImFkZFwiKTtHYS5jYWxsKGEsXCJhcHBlbmRcIik7R2EuY2FsbChhLFwic2VhcmNoXCIpO0dhLmNhbGwoYSxcInVwZGF0ZVwiKTtHYS5jYWxsKGEsXCJyZW1vdmVcIik7R2EuY2FsbChhLFwic2VhcmNoQ2FjaGVcIil9bGV0IEhhLElhLEphO2Z1bmN0aW9uIEthKCl7SGE9SmE9MH1cbmZ1bmN0aW9uIEdhKGEpe3RoaXNbYStcIkFzeW5jXCJdPWZ1bmN0aW9uKCl7Y29uc3QgYz1hcmd1bWVudHM7dmFyIGI9Y1tjLmxlbmd0aC0xXTtsZXQgZTt0eXBlb2YgYj09PVwiZnVuY3Rpb25cIiYmKGU9YixkZWxldGUgY1tjLmxlbmd0aC0xXSk7SGE/SmF8fChKYT1EYXRlLm5vdygpLUlhPj10aGlzLnByaW9yaXR5KnRoaXMucHJpb3JpdHkqMyk6KEhhPXNldFRpbWVvdXQoS2EsMCksSWE9RGF0ZS5ub3coKSk7aWYoSmEpe2NvbnN0IGY9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoZz0+e3NldFRpbWVvdXQoZnVuY3Rpb24oKXtnKGZbYStcIkFzeW5jXCJdLmFwcGx5KGYsYykpfSwwKX0pfWNvbnN0IGQ9dGhpc1thXS5hcHBseSh0aGlzLGMpO2I9ZC50aGVuP2Q6bmV3IFByb21pc2UoZj0+ZihkKSk7ZSYmYi50aGVuKGUpO3JldHVybiBifX07bGV0IFY9MDtcbmZ1bmN0aW9uIExhKGE9e30sYyl7ZnVuY3Rpb24gYihrKXtmdW5jdGlvbiBoKGwpe2w9bC5kYXRhfHxsO2NvbnN0IG09bC5pZCxwPW0mJmYuaFttXTtwJiYocChsLm1zZyksZGVsZXRlIGYuaFttXSl9dGhpcy53b3JrZXI9azt0aGlzLmg9SSgpO2lmKHRoaXMud29ya2VyKXtkP3RoaXMud29ya2VyLm9uKFwibWVzc2FnZVwiLGgpOnRoaXMud29ya2VyLm9ubWVzc2FnZT1oO2lmKGEuY29uZmlnKXJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihsKXtWPjFFOSYmKFY9MCk7Zi5oWysrVl09ZnVuY3Rpb24oKXtsKGYpfTtmLndvcmtlci5wb3N0TWVzc2FnZSh7aWQ6Vix0YXNrOlwiaW5pdFwiLGZhY3Rvcnk6ZSxvcHRpb25zOmF9KX0pO3RoaXMucHJpb3JpdHk9YS5wcmlvcml0eXx8NDt0aGlzLmVuY29kZXI9Y3x8bnVsbDt0aGlzLndvcmtlci5wb3N0TWVzc2FnZSh7dGFzazpcImluaXRcIixmYWN0b3J5OmUsb3B0aW9uczphfSk7cmV0dXJuIHRoaXN9fWlmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09TGEpcmV0dXJuIG5ldyBMYShhKTtcbmxldCBlPXR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmLl9mYWN0b3J5OnR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiP3dpbmRvdy5fZmFjdG9yeTpudWxsO2UmJihlPWUudG9TdHJpbmcoKSk7Y29uc3QgZD10eXBlb2Ygd2luZG93PT09XCJ1bmRlZmluZWRcIixmPXRoaXMsZz1NYShlLGQsYS53b3JrZXIpO3JldHVybiBnLnRoZW4/Zy50aGVuKGZ1bmN0aW9uKGspe3JldHVybiBiLmNhbGwoZixrKX0pOmIuY2FsbCh0aGlzLGcpfVcoXCJhZGRcIik7VyhcImFwcGVuZFwiKTtXKFwic2VhcmNoXCIpO1coXCJ1cGRhdGVcIik7VyhcInJlbW92ZVwiKTtXKFwiY2xlYXJcIik7VyhcImV4cG9ydFwiKTtXKFwiaW1wb3J0XCIpO0xhLnByb3RvdHlwZS5zZWFyY2hDYWNoZT1sYTtGYShMYS5wcm90b3R5cGUpO1xuZnVuY3Rpb24gVyhhKXtMYS5wcm90b3R5cGVbYV09ZnVuY3Rpb24oKXtjb25zdCBjPXRoaXMsYj1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7dmFyIGU9YltiLmxlbmd0aC0xXTtsZXQgZDt0eXBlb2YgZT09PVwiZnVuY3Rpb25cIiYmKGQ9ZSxiLnBvcCgpKTtlPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGYpe2E9PT1cImV4cG9ydFwiJiZ0eXBlb2YgYlswXT09PVwiZnVuY3Rpb25cIiYmKGJbMF09bnVsbCk7Vj4xRTkmJihWPTApO2MuaFsrK1ZdPWY7Yy53b3JrZXIucG9zdE1lc3NhZ2Uoe3Rhc2s6YSxpZDpWLGFyZ3M6Yn0pfSk7cmV0dXJuIGQ/KGUudGhlbihkKSx0aGlzKTplfX1cbmZ1bmN0aW9uIE1hKGEsYyxiKXtyZXR1cm4gYz90eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIj9uZXcocmVxdWlyZShcIndvcmtlcl90aHJlYWRzXCIpW1wiV29ya2VyXCJdKShfX2Rpcm5hbWUrXCIvd29ya2VyL25vZGUuanNcIik6aW1wb3J0KFwid29ya2VyX3RocmVhZHNcIikudGhlbihmdW5jdGlvbih3b3JrZXIpe3JldHVybiBuZXcgd29ya2VyW1wiV29ya2VyXCJdKGltcG9ydC5tZXRhLmRpcm5hbWUrXCIvbm9kZS9ub2RlLm1qc1wiKX0pOmE/bmV3IHdpbmRvdy5Xb3JrZXIoVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbXCJvbm1lc3NhZ2U9XCIrRWEudG9TdHJpbmcoKV0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKSk6bmV3IHdpbmRvdy5Xb3JrZXIodHlwZW9mIGI9PT1cInN0cmluZ1wiP2I6aW1wb3J0Lm1ldGEudXJsLnJlcGxhY2UoXCIvd29ya2VyLmpzXCIsXCIvd29ya2VyL3dvcmtlci5qc1wiKS5yZXBsYWNlKFwiZmxleHNlYXJjaC5idW5kbGUubW9kdWxlLm1pbi5qc1wiLFxuXCJtb2R1bGUvd29ya2VyL3dvcmtlci5qc1wiKS5yZXBsYWNlKFwiZmxleHNlYXJjaC5idW5kbGUubW9kdWxlLm1pbi5tanNcIixcIm1vZHVsZS93b3JrZXIvd29ya2VyLmpzXCIpLHt0eXBlOlwibW9kdWxlXCJ9KX07TmEucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhLGMsYil7YmEoYSkmJihjPWEsYT1jYShjLHRoaXMua2V5KSk7aWYoYyYmKGF8fGE9PT0wKSl7aWYoIWImJnRoaXMucmVnLmhhcyhhKSlyZXR1cm4gdGhpcy51cGRhdGUoYSxjKTtmb3IobGV0IGs9MCxoO2s8dGhpcy5maWVsZC5sZW5ndGg7aysrKXtoPXRoaXMuQltrXTt2YXIgZT10aGlzLmluZGV4LmdldCh0aGlzLmZpZWxkW2tdKTtpZih0eXBlb2YgaD09PVwiZnVuY3Rpb25cIil7dmFyIGQ9aChjKTtkJiZlLmFkZChhLGQsYiwhMCl9ZWxzZSBpZihkPWguRywhZHx8ZChjKSloLmNvbnN0cnVjdG9yPT09U3RyaW5nP2g9W1wiXCIraF06TShoKSYmKGg9W2hdKSxRYShjLGgsdGhpcy5ELDAsZSxhLGhbMF0sYil9aWYodGhpcy50YWcpZm9yKGU9MDtlPHRoaXMuQS5sZW5ndGg7ZSsrKXt2YXIgZj10aGlzLkFbZV07ZD10aGlzLnRhZy5nZXQodGhpcy5GW2VdKTtsZXQgaz1JKCk7aWYodHlwZW9mIGY9PT1cImZ1bmN0aW9uXCIpe2lmKGY9ZihjKSwhZiljb250aW51ZX1lbHNle3ZhciBnPVxuZi5HO2lmKGcmJiFnKGMpKWNvbnRpbnVlO2YuY29uc3RydWN0b3I9PT1TdHJpbmcmJihmPVwiXCIrZik7Zj1jYShjLGYpfWlmKGQmJmYpe00oZikmJihmPVtmXSk7Zm9yKGxldCBoPTAsbCxtO2g8Zi5sZW5ndGg7aCsrKWlmKGw9ZltoXSwha1tsXSYmKGtbbF09MSwoZz1kLmdldChsKSk/bT1nOmQuc2V0KGwsbT1bXSksIWJ8fCFtLmluY2x1ZGVzKGEpKSl7aWYobS5sZW5ndGg9PT0yKiozMS0xKXtnPW5ldyB4YShtKTtpZih0aGlzLmZhc3R1cGRhdGUpZm9yKGxldCBwIG9mIHRoaXMucmVnLnZhbHVlcygpKXAuaW5jbHVkZXMobSkmJihwW3AuaW5kZXhPZihtKV09Zyk7ZC5zZXQobCxtPWcpfW0ucHVzaChhKTt0aGlzLmZhc3R1cGRhdGUmJigoZz10aGlzLnJlZy5nZXQoYSkpP2cucHVzaChtKTp0aGlzLnJlZy5zZXQoYSxbbV0pKX19fWlmKHRoaXMuc3RvcmUmJighYnx8IXRoaXMuc3RvcmUuaGFzKGEpKSl7bGV0IGs7aWYodGhpcy5oKXtrPUkoKTtmb3IobGV0IGg9MCxsO2g8dGhpcy5oLmxlbmd0aDtoKyspe2w9XG50aGlzLmhbaF07aWYoKGI9bC5HKSYmIWIoYykpY29udGludWU7bGV0IG07aWYodHlwZW9mIGw9PT1cImZ1bmN0aW9uXCIpe209bChjKTtpZighbSljb250aW51ZTtsPVtsLk9dfWVsc2UgaWYoTShsKXx8bC5jb25zdHJ1Y3Rvcj09PVN0cmluZyl7a1tsXT1jW2xdO2NvbnRpbnVlfVJhKGMsayxsLDAsbFswXSxtKX19dGhpcy5zdG9yZS5zZXQoYSxrfHxjKX10aGlzLndvcmtlciYmKHRoaXMuZmFzdHVwZGF0ZXx8dGhpcy5yZWcuYWRkKGEpKX1yZXR1cm4gdGhpc307ZnVuY3Rpb24gUmEoYSxjLGIsZSxkLGYpe2E9YVtkXTtpZihlPT09Yi5sZW5ndGgtMSljW2RdPWZ8fGE7ZWxzZSBpZihhKWlmKGEuY29uc3RydWN0b3I9PT1BcnJheSlmb3IoYz1jW2RdPUFycmF5KGEubGVuZ3RoKSxkPTA7ZDxhLmxlbmd0aDtkKyspUmEoYSxjLGIsZSxkKTtlbHNlIGM9Y1tkXXx8KGNbZF09SSgpKSxkPWJbKytlXSxSYShhLGMsYixlLGQpfVxuZnVuY3Rpb24gUWEoYSxjLGIsZSxkLGYsZyxrKXtpZihhPWFbZ10paWYoZT09PWMubGVuZ3RoLTEpe2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSl7aWYoYltlXSl7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKylkLmFkZChmLGFbY10sITAsITApO3JldHVybn1hPWEuam9pbihcIiBcIil9ZC5hZGQoZixhLGssITApfWVsc2UgaWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihnPTA7ZzxhLmxlbmd0aDtnKyspUWEoYSxjLGIsZSxkLGYsZyxrKTtlbHNlIGc9Y1srK2VdLFFhKGEsYyxiLGUsZCxmLGcsayl9O2Z1bmN0aW9uIFNhKGEsYyxiLGUpe2lmKCFhLmxlbmd0aClyZXR1cm4gYTtpZihhLmxlbmd0aD09PTEpcmV0dXJuIGE9YVswXSxhPWJ8fGEubGVuZ3RoPmM/YS5zbGljZShiLGIrYyk6YSxlP1RhLmNhbGwodGhpcyxhKTphO2xldCBkPVtdO2ZvcihsZXQgZj0wLGcsaztmPGEubGVuZ3RoO2YrKylpZigoZz1hW2ZdKSYmKGs9Zy5sZW5ndGgpKXtpZihiKXtpZihiPj1rKXtiLT1rO2NvbnRpbnVlfWc9Zy5zbGljZShiLGIrYyk7az1nLmxlbmd0aDtiPTB9az5jJiYoZz1nLnNsaWNlKDAsYyksaz1jKTtpZighZC5sZW5ndGgmJms+PWMpcmV0dXJuIGU/VGEuY2FsbCh0aGlzLGcpOmc7ZC5wdXNoKGcpO2MtPWs7aWYoIWMpYnJlYWt9ZD1kLmxlbmd0aD4xP1tdLmNvbmNhdC5hcHBseShbXSxkKTpkWzBdO3JldHVybiBlP1RhLmNhbGwodGhpcyxkKTpkfTtmdW5jdGlvbiBVYShhLGMsYixlKXt2YXIgZD1lWzBdO2lmKGRbMF0mJmRbMF0ucXVlcnkpcmV0dXJuIGFbY10uYXBwbHkoYSxkKTtpZighKGMhPT1cImFuZFwiJiZjIT09XCJub3RcInx8YS5yZXN1bHQubGVuZ3RofHxhLmF3YWl0fHxkLnN1Z2dlc3QpKXJldHVybiBlLmxlbmd0aD4xJiYoZD1lW2UubGVuZ3RoLTFdKSwoZT1kLnJlc29sdmUpP2EuYXdhaXR8fGEucmVzdWx0OmE7bGV0IGY9W10sZz0wLGs9MCxoLGwsbSxwLHU7Zm9yKGM9MDtjPGUubGVuZ3RoO2MrKylpZihkPWVbY10pe3ZhciByPXZvaWQgMDtpZihkLmNvbnN0cnVjdG9yPT09WClyPWQuYXdhaXR8fGQucmVzdWx0O2Vsc2UgaWYoZC50aGVufHxkLmNvbnN0cnVjdG9yPT09QXJyYXkpcj1kO2Vsc2V7Zz1kLmxpbWl0fHwwO2s9ZC5vZmZzZXR8fDA7bT1kLnN1Z2dlc3Q7bD1kLnJlc29sdmU7aD0oKHA9ZC5oaWdobGlnaHR8fGEuaGlnaGxpZ2h0KXx8ZC5lbnJpY2gpJiZsO3I9ZC5xdWV1ZTtsZXQgdD1kLmFzeW5jfHxyLG49ZC5pbmRleCxcbnE9ZC5xdWVyeTtuP2EuaW5kZXh8fChhLmluZGV4PW4pOm49YS5pbmRleDtpZihxfHxkLnRhZyl7Y29uc3QgeD1kLmZpZWxkfHxkLnBsdWNrO3gmJighcXx8YS5xdWVyeSYmIXB8fChhLnF1ZXJ5PXEsYS5maWVsZD14LGEuaGlnaGxpZ2h0PXApLG49bi5pbmRleC5nZXQoeCkpO2lmKHImJih1fHxhLmF3YWl0KSl7dT0xO2xldCB2O2NvbnN0IEE9YS5DLmxlbmd0aCxEPW5ldyBQcm9taXNlKGZ1bmN0aW9uKEYpe3Y9Rn0pOyhmdW5jdGlvbihGLEUpe0QuaD1mdW5jdGlvbigpe0UuaW5kZXg9bnVsbDtFLnJlc29sdmU9ITE7bGV0IEI9dD9GLnNlYXJjaEFzeW5jKEUpOkYuc2VhcmNoKEUpO2lmKEIudGhlbilyZXR1cm4gQi50aGVuKGZ1bmN0aW9uKHope2EuQ1tBXT16PXoucmVzdWx0fHx6O3Yoeik7cmV0dXJuIHp9KTtCPUIucmVzdWx0fHxCO3YoQik7cmV0dXJuIEJ9fSkobixPYmplY3QuYXNzaWduKHt9LGQpKTthLkMucHVzaChEKTtmW2NdPUQ7Y29udGludWV9ZWxzZSBkLnJlc29sdmU9ITEsXG5kLmluZGV4PW51bGwscj10P24uc2VhcmNoQXN5bmMoZCk6bi5zZWFyY2goZCksZC5yZXNvbHZlPWwsZC5pbmRleD1ufWVsc2UgaWYoZC5hbmQpcj1WYShkLFwiYW5kXCIsbik7ZWxzZSBpZihkLm9yKXI9VmEoZCxcIm9yXCIsbik7ZWxzZSBpZihkLm5vdClyPVZhKGQsXCJub3RcIixuKTtlbHNlIGlmKGQueG9yKXI9VmEoZCxcInhvclwiLG4pO2Vsc2UgY29udGludWV9ci5hd2FpdD8odT0xLHI9ci5hd2FpdCk6ci50aGVuPyh1PTEscj1yLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIHQucmVzdWx0fHx0fSkpOnI9ci5yZXN1bHR8fHI7ZltjXT1yfXUmJiFhLmF3YWl0JiYoYS5hd2FpdD1uZXcgUHJvbWlzZShmdW5jdGlvbih0KXthLnJldHVybj10fSkpO2lmKHUpe2NvbnN0IHQ9UHJvbWlzZS5hbGwoZikudGhlbihmdW5jdGlvbihuKXtmb3IobGV0IHE9MDtxPGEuQy5sZW5ndGg7cSsrKWlmKGEuQ1txXT09PXQpe2EuQ1txXT1mdW5jdGlvbigpe3JldHVybiBiLmNhbGwoYSxuLGcsayxoLGwsbSxwKX07YnJlYWt9V2EoYSl9KTtcbmEuQy5wdXNoKHQpfWVsc2UgaWYoYS5hd2FpdClhLkMucHVzaChmdW5jdGlvbigpe3JldHVybiBiLmNhbGwoYSxmLGcsayxoLGwsbSxwKX0pO2Vsc2UgcmV0dXJuIGIuY2FsbChhLGYsZyxrLGgsbCxtLHApO3JldHVybiBsP2EuYXdhaXR8fGEucmVzdWx0OmF9ZnVuY3Rpb24gVmEoYSxjLGIpe2E9YVtjXTtjb25zdCBlPWFbMF18fGE7ZS5pbmRleHx8KGUuaW5kZXg9Yik7Yj1uZXcgWChlKTthLmxlbmd0aD4xJiYoYj1iW2NdLmFwcGx5KGIsYS5zbGljZSgxKSkpO3JldHVybiBifTtYLnByb3RvdHlwZS5vcj1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwib3JcIixYYSxhcmd1bWVudHMpfTtmdW5jdGlvbiBYYShhLGMsYixlLGQsZixnKXthLmxlbmd0aCYmKHRoaXMucmVzdWx0Lmxlbmd0aCYmYS5wdXNoKHRoaXMucmVzdWx0KSxhLmxlbmd0aDwyP3RoaXMucmVzdWx0PWFbMF06KHRoaXMucmVzdWx0PVlhKGEsYyxiLCExLHRoaXMuaCksYj0wKSk7ZCYmKHRoaXMuYXdhaXQ9bnVsbCk7cmV0dXJuIGQ/dGhpcy5yZXNvbHZlKGMsYixlLGcpOnRoaXN9O1gucHJvdG90eXBlLmFuZD1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwiYW5kXCIsWmEsYXJndW1lbnRzKX07ZnVuY3Rpb24gWmEoYSxjLGIsZSxkLGYsZyl7aWYoIWYmJiF0aGlzLnJlc3VsdC5sZW5ndGgpcmV0dXJuIGQ/dGhpcy5yZXN1bHQ6dGhpcztsZXQgaztpZihhLmxlbmd0aClpZih0aGlzLnJlc3VsdC5sZW5ndGgmJmEudW5zaGlmdCh0aGlzLnJlc3VsdCksYS5sZW5ndGg8Mil0aGlzLnJlc3VsdD1hWzBdO2Vsc2V7bGV0IGg9MDtmb3IobGV0IGw9MCxtLHA7bDxhLmxlbmd0aDtsKyspaWYoKG09YVtsXSkmJihwPW0ubGVuZ3RoKSloPHAmJihoPXApO2Vsc2UgaWYoIWYpe2g9MDticmVha31oPyh0aGlzLnJlc3VsdD0kYShhLGgsYyxiLGYsdGhpcy5oLGQpLGs9ITApOnRoaXMucmVzdWx0PVtdfWVsc2UgZnx8KHRoaXMucmVzdWx0PWEpO2QmJih0aGlzLmF3YWl0PW51bGwpO3JldHVybiBkP3RoaXMucmVzb2x2ZShjLGIsZSxnLGspOnRoaXN9O1gucHJvdG90eXBlLnhvcj1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwieG9yXCIsYWIsYXJndW1lbnRzKX07XG5mdW5jdGlvbiBhYihhLGMsYixlLGQsZixnKXtpZihhLmxlbmd0aClpZih0aGlzLnJlc3VsdC5sZW5ndGgmJmEudW5zaGlmdCh0aGlzLnJlc3VsdCksYS5sZW5ndGg8Mil0aGlzLnJlc3VsdD1hWzBdO2Vsc2V7YTp7Zj1iO3ZhciBrPXRoaXMuaDtjb25zdCBoPVtdLGw9SSgpO2xldCBtPTA7Zm9yKGxldCBwPTAsdTtwPGEubGVuZ3RoO3ArKylpZih1PWFbcF0pe208dS5sZW5ndGgmJihtPXUubGVuZ3RoKTtmb3IobGV0IHI9MCx0O3I8dS5sZW5ndGg7cisrKWlmKHQ9dVtyXSlmb3IobGV0IG49MCxxO248dC5sZW5ndGg7bisrKXE9dFtuXSxsW3FdPWxbcV0/MjoxfWZvcihsZXQgcD0wLHUscj0wO3A8bTtwKyspZm9yKGxldCB0PTAsbjt0PGEubGVuZ3RoO3QrKylpZihuPWFbdF0paWYodT1uW3BdKWZvcihsZXQgcT0wLHg7cTx1Lmxlbmd0aDtxKyspaWYoeD11W3FdLGxbeF09PT0xKWlmKGYpZi0tO2Vsc2UgaWYoZCl7aWYoaC5wdXNoKHgpLGgubGVuZ3RoPT09Yyl7YT1oO2JyZWFrIGF9fWVsc2V7Y29uc3Qgdj1cbnArKHQ/azowKTtoW3ZdfHwoaFt2XT1bXSk7aFt2XS5wdXNoKHgpO2lmKCsrcj09PWMpe2E9aDticmVhayBhfX1hPWh9dGhpcy5yZXN1bHQ9YTtrPSEwfWVsc2UgZnx8KHRoaXMucmVzdWx0PWEpO2QmJih0aGlzLmF3YWl0PW51bGwpO3JldHVybiBkP3RoaXMucmVzb2x2ZShjLGIsZSxnLGspOnRoaXN9O1gucHJvdG90eXBlLm5vdD1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwibm90XCIsYmIsYXJndW1lbnRzKX07XG5mdW5jdGlvbiBiYihhLGMsYixlLGQsZixnKXtpZighZiYmIXRoaXMucmVzdWx0Lmxlbmd0aClyZXR1cm4gZD90aGlzLnJlc3VsdDp0aGlzO2lmKGEubGVuZ3RoJiZ0aGlzLnJlc3VsdC5sZW5ndGgpe2E6e2Y9Yjt2YXIgaz1bXTthPW5ldyBTZXQoYS5mbGF0KCkuZmxhdCgpKTtmb3IobGV0IGg9MCxsLG09MDtoPHRoaXMucmVzdWx0Lmxlbmd0aDtoKyspaWYobD10aGlzLnJlc3VsdFtoXSlmb3IobGV0IHA9MCx1O3A8bC5sZW5ndGg7cCsrKWlmKHU9bFtwXSwhYS5oYXModSkpaWYoZilmLS07ZWxzZSBpZihkKXtpZihrLnB1c2godSksay5sZW5ndGg9PT1jKXthPWs7YnJlYWsgYX19ZWxzZSBpZihrW2hdfHwoa1toXT1bXSksa1toXS5wdXNoKHUpLCsrbT09PWMpe2E9azticmVhayBhfWE9a310aGlzLnJlc3VsdD1hO2s9ITB9ZCYmKHRoaXMuYXdhaXQ9bnVsbCk7cmV0dXJuIGQ/dGhpcy5yZXNvbHZlKGMsYixlLGcsayk6dGhpc307ZnVuY3Rpb24gY2IoYSxjLGIsZSxkKXtsZXQgZixnLGs7dHlwZW9mIGQ9PT1cInN0cmluZ1wiPyhmPWQsZD1cIlwiKTpmPWQudGVtcGxhdGU7Zz1mLmluZGV4T2YoXCIkMVwiKTtrPWYuc3Vic3RyaW5nKGcrMik7Zz1mLnN1YnN0cmluZygwLGcpO2xldCBoPWQmJmQuYm91bmRhcnksbD0hZHx8ZC5jbGlwIT09ITEsbT1kJiZkLm1lcmdlJiZrJiZnJiZuZXcgUmVnRXhwKGsrXCIgXCIrZyxcImdcIik7ZD1kJiZkLmVsbGlwc2lzO3ZhciBwPTA7aWYodHlwZW9mIGQ9PT1cIm9iamVjdFwiKXt2YXIgdT1kLnRlbXBsYXRlO3A9dS5sZW5ndGgtMjtkPWQucGF0dGVybn10eXBlb2YgZCE9PVwic3RyaW5nXCImJihkPWQ9PT0hMT9cIlwiOlwiLi4uXCIpO3AmJihkPXUucmVwbGFjZShcIiQxXCIsZCkpO3U9ZC5sZW5ndGgtcDtsZXQgcix0O3R5cGVvZiBoPT09XCJvYmplY3RcIiYmKHI9aC5iZWZvcmUscj09PTAmJihyPS0xKSx0PWguYWZ0ZXIsdD09PTAmJih0PS0xKSxoPWgudG90YWx8fDlFNSk7cD1uZXcgTWFwO2ZvcihsZXQgT2E9MCxcbmRhLGRiLHBhO09hPGMubGVuZ3RoO09hKyspe2xldCBxYTtpZihlKXFhPWMscGE9ZTtlbHNle3ZhciBuPWNbT2FdO3BhPW4uZmllbGQ7aWYoIXBhKWNvbnRpbnVlO3FhPW4ucmVzdWx0fWRiPWIuZ2V0KHBhKTtkYT1kYi5lbmNvZGVyO249cC5nZXQoZGEpO3R5cGVvZiBuIT09XCJzdHJpbmdcIiYmKG49ZGEuZW5jb2RlKGEpLHAuc2V0KGRhLG4pKTtmb3IobGV0IHlhPTA7eWE8cWEubGVuZ3RoO3lhKyspe3ZhciBxPXFhW3lhXS5kb2M7aWYoIXEpY29udGludWU7cT1jYShxLHBhKTtpZighcSljb250aW51ZTt2YXIgeD1xLnRyaW0oKS5zcGxpdCgvXFxzKy8pO2lmKCF4Lmxlbmd0aCljb250aW51ZTtxPVwiXCI7dmFyIHY9W107bGV0IHphPVtdO3ZhciBBPS0xLEQ9LTEsRj0wO2Zvcih2YXIgRT0wO0U8eC5sZW5ndGg7RSsrKXt2YXIgQj14W0VdLHo9ZGEuZW5jb2RlKEIpO3o9ei5sZW5ndGg+MT96LmpvaW4oXCIgXCIpOnpbMF07bGV0IHk7aWYoeiYmQil7dmFyIEM9Qi5sZW5ndGgsSj0oZGEuc3BsaXQ/XG5CLnJlcGxhY2UoZGEuc3BsaXQsXCJcIik6QikubGVuZ3RoLXoubGVuZ3RoLEc9XCJcIixOPTA7Zm9yKHZhciBPPTA7TzxuLmxlbmd0aDtPKyspe3ZhciBQPW5bT107aWYoUCl7dmFyIEw9UC5sZW5ndGg7TCs9SjwwPzA6SjtOJiZMPD1OfHwoUD16LmluZGV4T2YoUCksUD4tMSYmKEc9KFA/Qi5zdWJzdHJpbmcoMCxQKTpcIlwiKStnK0Iuc3Vic3RyaW5nKFAsUCtMKStrKyhQK0w8Qz9CLnN1YnN0cmluZyhQK0wpOlwiXCIpLE49TCx5PSEwKSl9fUcmJihoJiYoQTwwJiYoQT1xLmxlbmd0aCsocT8xOjApKSxEPXEubGVuZ3RoKyhxPzE6MCkrRy5sZW5ndGgsRis9Qyx6YS5wdXNoKHYubGVuZ3RoKSx2LnB1c2goe21hdGNoOkd9KSkscSs9KHE/XCIgXCI6XCJcIikrRyl9aWYoIXkpQj14W0VdLHErPShxP1wiIFwiOlwiXCIpK0IsaCYmdi5wdXNoKHt0ZXh0OkJ9KTtlbHNlIGlmKGgmJkY+PWgpYnJlYWt9Rj16YS5sZW5ndGgqKGYubGVuZ3RoLTIpO2lmKHJ8fHR8fGgmJnEubGVuZ3RoLUY+aClpZihGPWgrRi11KjIsRT1ELVxuQSxyPjAmJihFKz1yKSx0PjAmJihFKz10KSxFPD1GKXg9cj9BLShyPjA/cjowKTpBLSgoRi1FKS8yfDApLHY9dD9EKyh0PjA/dDowKTp4K0YsbHx8KHg+MCYmcS5jaGFyQXQoeCkhPT1cIiBcIiYmcS5jaGFyQXQoeC0xKSE9PVwiIFwiJiYoeD1xLmluZGV4T2YoXCIgXCIseCkseDwwJiYoeD0wKSksdjxxLmxlbmd0aCYmcS5jaGFyQXQodi0xKSE9PVwiIFwiJiZxLmNoYXJBdCh2KSE9PVwiIFwiJiYodj1xLmxhc3RJbmRleE9mKFwiIFwiLHYpLHY8RD92PUQ6Kyt2KSkscT0oeD9kOlwiXCIpK3Euc3Vic3RyaW5nKHgsdikrKHY8cS5sZW5ndGg/ZDpcIlwiKTtlbHNle0Q9W107QT17fTtGPXt9O0U9e307Qj17fTt6PXt9O0c9Sj1DPTA7Zm9yKE89Tj0xOzspe3ZhciBVPXZvaWQgMDtmb3IobGV0IHk9MCxLO3k8emEubGVuZ3RoO3krKyl7Sz16YVt5XTtpZihHKWlmKEohPT1HKXtpZihFW3krMV0pY29udGludWU7Sys9RztpZihBW0tdKXtDLT11O0ZbeSsxXT0xO0VbeSsxXT0xO2NvbnRpbnVlfWlmKEs+PXYubGVuZ3RoLVxuMSl7aWYoSz49di5sZW5ndGgpe0VbeSsxXT0xO0s+PXgubGVuZ3RoJiYoRlt5KzFdPTEpO2NvbnRpbnVlfUMtPXV9cT12W0tdLnRleHQ7aWYoTD10JiZ6W3ldKWlmKEw+MCl7aWYocS5sZW5ndGg+TClpZihFW3krMV09MSxsKXE9cS5zdWJzdHJpbmcoMCxMKTtlbHNlIGNvbnRpbnVlOyhMLT1xLmxlbmd0aCl8fChMPS0xKTt6W3ldPUx9ZWxzZXtFW3krMV09MTtjb250aW51ZX1pZihDK3EubGVuZ3RoKzE8PWgpcT1cIiBcIitxLERbeV0rPXE7ZWxzZSBpZihsKVU9aC1DLTEsVT4wJiYocT1cIiBcIitxLnN1YnN0cmluZygwLFUpLERbeV0rPXEpLEVbeSsxXT0xO2Vsc2V7RVt5KzFdPTE7Y29udGludWV9fWVsc2V7aWYoRVt5XSljb250aW51ZTtLLT1KO2lmKEFbS10pe0MtPXU7RVt5XT0xO0ZbeV09MTtjb250aW51ZX1pZihLPD0wKXtpZihLPDApe0VbeV09MTtGW3ldPTE7Y29udGludWV9Qy09dX1xPXZbS10udGV4dDtpZihMPXImJkJbeV0paWYoTD4wKXtpZihxLmxlbmd0aD5MKWlmKEVbeV09MSxcbmwpcT1xLnN1YnN0cmluZyhxLmxlbmd0aC1MKTtlbHNlIGNvbnRpbnVlOyhMLT1xLmxlbmd0aCl8fChMPS0xKTtCW3ldPUx9ZWxzZXtFW3ldPTE7Y29udGludWV9aWYoQytxLmxlbmd0aCsxPD1oKXErPVwiIFwiLERbeV09cStEW3ldO2Vsc2UgaWYobClVPXEubGVuZ3RoKzEtKGgtQyksVT49MCYmVTxxLmxlbmd0aCYmKHE9cS5zdWJzdHJpbmcoVSkrXCIgXCIsRFt5XT1xK0RbeV0pLEVbeV09MTtlbHNle0VbeV09MTtjb250aW51ZX19ZWxzZXtxPXZbS10ubWF0Y2g7ciYmKEJbeV09cik7dCYmKHpbeV09dCk7eSYmQysrO2xldCBQYTtLPyF5JiZ1JiYoQys9dSk6KEZbeV09MSxFW3ldPTEpO0s+PXgubGVuZ3RoLTE/UGE9MTpLPHYubGVuZ3RoLTEmJnZbSysxXS5tYXRjaD9QYT0xOnUmJihDKz11KTtDLT1mLmxlbmd0aC0yO2lmKCF5fHxDK3EubGVuZ3RoPD1oKURbeV09cTtlbHNle1U9Tj1PPUZbeV09MDticmVha31QYSYmKEZbeSsxXT0xLEVbeSsxXT0xKX1DKz1xLmxlbmd0aDtVPUFbS109MX1pZihVKUo9PT1cbkc/RysrOkorKztlbHNle0o9PT1HP049MDpPPTA7aWYoIU4mJiFPKWJyZWFrO04/KEorKyxHPUopOkcrK319cT1cIlwiO2ZvcihsZXQgeT0wLEs7eTxELmxlbmd0aDt5KyspSz0oRlt5XT95P1wiIFwiOlwiXCI6KHkmJiFkP1wiIFwiOlwiXCIpK2QpK0RbeV0scSs9SztkJiYhRltELmxlbmd0aF0mJihxKz1kKX1tJiYocT1xLnJlcGxhY2UobSxcIiBcIikpO3FhW3lhXS5oaWdobGlnaHQ9cX1pZihlKWJyZWFrfXJldHVybiBjfTtmdW5jdGlvbiBYKGEsYyl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1YKXJldHVybiBuZXcgWChhLGMpO2xldCBiPTAsZSxkLGYsZyxrLGg7aWYoYSYmYS5pbmRleCl7Y29uc3QgbD1hO2M9bC5pbmRleDtiPWwuYm9vc3R8fDA7aWYoZD1sLnF1ZXJ5KXtmPWwuZmllbGR8fGwucGx1Y2s7Zz1sLmhpZ2hsaWdodDtjb25zdCBtPWwucmVzb2x2ZTthPWwuYXN5bmN8fGwucXVldWU7bC5yZXNvbHZlPSExO2wuaW5kZXg9bnVsbDthPWE/Yy5zZWFyY2hBc3luYyhsKTpjLnNlYXJjaChsKTtsLnJlc29sdmU9bTtsLmluZGV4PWM7YT1hLnJlc3VsdHx8YX1lbHNlIGE9W119aWYoYSYmYS50aGVuKXtjb25zdCBsPXRoaXM7YT1hLnRoZW4oZnVuY3Rpb24obSl7bC5DWzBdPWwucmVzdWx0PW0ucmVzdWx0fHxtO1dhKGwpfSk7ZT1bYV07YT1bXTtrPW5ldyBQcm9taXNlKGZ1bmN0aW9uKG0pe2g9bX0pfXRoaXMuaW5kZXg9Y3x8bnVsbDt0aGlzLnJlc3VsdD1hfHxbXTt0aGlzLmg9Yjt0aGlzLkM9XG5lfHxbXTt0aGlzLmF3YWl0PWt8fG51bGw7dGhpcy5yZXR1cm49aHx8bnVsbDt0aGlzLmhpZ2hsaWdodD1nfHxudWxsO3RoaXMucXVlcnk9ZHx8XCJcIjt0aGlzLmZpZWxkPWZ8fFwiXCJ9dz1YLnByb3RvdHlwZTt3LmxpbWl0PWZ1bmN0aW9uKGEpe2lmKHRoaXMuYXdhaXQpe2NvbnN0IGM9dGhpczt0aGlzLkMucHVzaChmdW5jdGlvbigpe3JldHVybiBjLmxpbWl0KGEpLnJlc3VsdH0pfWVsc2UgaWYodGhpcy5yZXN1bHQubGVuZ3RoKXtjb25zdCBjPVtdO2ZvcihsZXQgYj0wLGU7Yjx0aGlzLnJlc3VsdC5sZW5ndGg7YisrKWlmKGU9dGhpcy5yZXN1bHRbYl0paWYoZS5sZW5ndGg8PWEpe2lmKGNbYl09ZSxhLT1lLmxlbmd0aCwhYSlicmVha31lbHNle2NbYl09ZS5zbGljZSgwLGEpO2JyZWFrfXRoaXMucmVzdWx0PWN9cmV0dXJuIHRoaXN9O1xudy5vZmZzZXQ9ZnVuY3Rpb24oYSl7aWYodGhpcy5hd2FpdCl7Y29uc3QgYz10aGlzO3RoaXMuQy5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMub2Zmc2V0KGEpLnJlc3VsdH0pfWVsc2UgaWYodGhpcy5yZXN1bHQubGVuZ3RoKXtjb25zdCBjPVtdO2ZvcihsZXQgYj0wLGU7Yjx0aGlzLnJlc3VsdC5sZW5ndGg7YisrKWlmKGU9dGhpcy5yZXN1bHRbYl0pZS5sZW5ndGg8PWE/YS09ZS5sZW5ndGg6KGNbYl09ZS5zbGljZShhKSxhPTApO3RoaXMucmVzdWx0PWN9cmV0dXJuIHRoaXN9O3cuYm9vc3Q9ZnVuY3Rpb24oYSl7aWYodGhpcy5hd2FpdCl7Y29uc3QgYz10aGlzO3RoaXMuQy5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMuYm9vc3QoYSkucmVzdWx0fSl9ZWxzZSB0aGlzLmgrPWE7cmV0dXJuIHRoaXN9O1xuZnVuY3Rpb24gV2EoYSxjKXtsZXQgYj1hLnJlc3VsdDt2YXIgZT1hLmF3YWl0O2EuYXdhaXQ9bnVsbDtmb3IobGV0IGQ9MCxmO2Q8YS5DLmxlbmd0aDtkKyspaWYoZj1hLkNbZF0paWYodHlwZW9mIGY9PT1cImZ1bmN0aW9uXCIpYj1mKCksYS5DW2RdPWI9Yi5yZXN1bHR8fGIsZC0tO2Vsc2UgaWYoZi5oKWI9Zi5oKCksYS5DW2RdPWI9Yi5yZXN1bHR8fGIsZC0tO2Vsc2UgaWYoZi50aGVuKXJldHVybiBhLmF3YWl0PWU7ZT1hLnJldHVybjthLkM9W107YS5yZXR1cm49bnVsbDtjfHxlKGIpO3JldHVybiBifVxudy5yZXNvbHZlPWZ1bmN0aW9uKGEsYyxiLGUsZCl7bGV0IGY9dGhpcy5hd2FpdD9XYSh0aGlzLCEwKTp0aGlzLnJlc3VsdDtpZihmLnRoZW4pe2NvbnN0IGc9dGhpcztyZXR1cm4gZi50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGcucmVzb2x2ZShhLGMsYixlLGQpfSl9Zi5sZW5ndGgmJih0eXBlb2YgYT09PVwib2JqZWN0XCI/KGU9YS5oaWdobGlnaHR8fHRoaXMuaGlnaGxpZ2h0LGI9ISFlfHxhLmVucmljaCxjPWEub2Zmc2V0LGE9YS5saW1pdCk6KGU9ZXx8dGhpcy5oaWdobGlnaHQsYj0hIWV8fGIpLGY9ZD9iP1RhLmNhbGwodGhpcy5pbmRleCxmKTpmOlNhLmNhbGwodGhpcy5pbmRleCxmLGF8fDEwMCxjLGIpKTtyZXR1cm4gdGhpcy5maW5hbGl6ZShmLGUpfTtcbncuZmluYWxpemU9ZnVuY3Rpb24oYSxjKXtpZihhLnRoZW4pe2NvbnN0IGU9dGhpcztyZXR1cm4gYS50aGVuKGZ1bmN0aW9uKGQpe3JldHVybiBlLmZpbmFsaXplKGQsYyl9KX1jJiZhLmxlbmd0aCYmdGhpcy5xdWVyeSYmKGE9Y2IodGhpcy5xdWVyeSxhLHRoaXMuaW5kZXguaW5kZXgsdGhpcy5maWVsZCxjKSk7Y29uc3QgYj10aGlzLnJldHVybjt0aGlzLmhpZ2hsaWdodD10aGlzLmluZGV4PXRoaXMucmVzdWx0PXRoaXMuQz10aGlzLmF3YWl0PXRoaXMucmV0dXJuPW51bGw7dGhpcy5xdWVyeT10aGlzLmZpZWxkPVwiXCI7YiYmYihhKTtyZXR1cm4gYX07ZnVuY3Rpb24gJGEoYSxjLGIsZSxkLGYsZyl7Y29uc3Qgaz1hLmxlbmd0aDtsZXQgaD1bXSxsLG07bD1JKCk7Zm9yKGxldCBwPTAsdSxyLHQsbjtwPGM7cCsrKWZvcihsZXQgcT0wO3E8aztxKyspaWYodD1hW3FdLHA8dC5sZW5ndGgmJih1PXRbcF0pKWZvcihsZXQgeD0wO3g8dS5sZW5ndGg7eCsrKXtyPXVbeF07KG09bFtyXSk/bFtyXSsrOihtPTAsbFtyXT0xKTtuPWhbbV18fChoW21dPVtdKTtpZighZyl7bGV0IHY9cCsocXx8IWQ/MDpmfHwwKTtuPW5bdl18fChuW3ZdPVtdKX1uLnB1c2gocik7aWYoZyYmYiYmbT09PWstMSYmbi5sZW5ndGgtZT09PWIpcmV0dXJuIGU/bi5zbGljZShlKTpufWlmKGE9aC5sZW5ndGgpaWYoZCloPWgubGVuZ3RoPjE/WWEoaCxiLGUsZyxmKTooaD1oWzBdKSYmYiYmaC5sZW5ndGg+Ynx8ZT9oLnNsaWNlKGUsYitlKTpoO2Vsc2V7aWYoYTxrKXJldHVybltdO2g9aFthLTFdO2lmKGJ8fGUpaWYoZyl7aWYoaC5sZW5ndGg+Ynx8ZSloPWguc2xpY2UoZSxiK1xuZSl9ZWxzZXtkPVtdO2ZvcihsZXQgcD0wLHU7cDxoLmxlbmd0aDtwKyspaWYodT1oW3BdKWlmKGUmJnUubGVuZ3RoPmUpZS09dS5sZW5ndGg7ZWxzZXtpZihiJiZ1Lmxlbmd0aD5ifHxlKXU9dS5zbGljZShlLGIrZSksYi09dS5sZW5ndGgsZSYmKGUtPXUubGVuZ3RoKTtkLnB1c2godSk7aWYoIWIpYnJlYWt9aD1kfX1yZXR1cm4gaH1cbmZ1bmN0aW9uIFlhKGEsYyxiLGUsZCl7Y29uc3QgZj1bXSxnPUkoKTtsZXQgazt2YXIgaD1hLmxlbmd0aDtsZXQgbDtpZihlKWZvcihkPWgtMTtkPj0wO2QtLSl7aWYobD0oZT1hW2RdKSYmZS5sZW5ndGgpZm9yKGg9MDtoPGw7aCsrKWlmKGs9ZVtoXSwhZ1trXSlpZihnW2tdPTEsYiliLS07ZWxzZSBpZihmLnB1c2goayksZi5sZW5ndGg9PT1jKXJldHVybiBmfWVsc2UgZm9yKGxldCBtPWgtMSxwLHU9MDttPj0wO20tLSl7cD1hW21dO2ZvcihsZXQgcj0wO3I8cC5sZW5ndGg7cisrKWlmKGw9KGU9cFtyXSkmJmUubGVuZ3RoKWZvcihsZXQgdD0wO3Q8bDt0KyspaWYoaz1lW3RdLCFnW2tdKWlmKGdba109MSxiKWItLTtlbHNle2xldCBuPShyKyhtPGgtMT9kfHwwOjApKS8obSsxKXwwOyhmW25dfHwoZltuXT1bXSkpLnB1c2goayk7aWYoKyt1PT09YylyZXR1cm4gZn19cmV0dXJuIGZ9XG5mdW5jdGlvbiBlYihhLGMsYixlLGQpe2NvbnN0IGY9SSgpLGc9W107Zm9yKGxldCBrPTAsaDtrPGMubGVuZ3RoO2srKyl7aD1jW2tdO2ZvcihsZXQgbD0wO2w8aC5sZW5ndGg7bCsrKWZbaFtsXV09MX1pZihkKWZvcihsZXQgaz0wLGg7azxhLmxlbmd0aDtrKyspe2lmKGg9YVtrXSxmW2hdKWlmKGUpZS0tO2Vsc2UgaWYoZy5wdXNoKGgpLGZbaF09MCxiJiYtLWI9PT0wKWJyZWFrfWVsc2UgZm9yKGxldCBrPTAsaCxsO2s8YS5yZXN1bHQubGVuZ3RoO2srKylmb3IoaD1hLnJlc3VsdFtrXSxjPTA7YzxoLmxlbmd0aDtjKyspbD1oW2NdLGZbbF0mJigoZ1trXXx8KGdba109W10pKS5wdXNoKGwpLGZbbF09MCk7cmV0dXJuIGd9O0koKTtOYS5wcm90b3R5cGUuc2VhcmNoPWZ1bmN0aW9uKGEsYyxiLGUpe2J8fCghYyYmYmEoYSk/KGI9YSxhPVwiXCIpOmJhKGMpJiYoYj1jLGM9MCkpO2xldCBkPVtdO3ZhciBmPVtdO2xldCBnO2xldCBrLGgsbCxtLHA7bGV0IHU9MCxyPSEwLHQ7aWYoYil7Yi5jb25zdHJ1Y3Rvcj09PUFycmF5JiYoYj17aW5kZXg6Yn0pO2E9Yi5xdWVyeXx8YTtnPWIucGx1Y2s7az1iLm1lcmdlO2w9Yi5ib29zdDtwPWd8fGIuZmllbGR8fChwPWIuaW5kZXgpJiYocC5pbmRleD9udWxsOnApO3ZhciBuPXRoaXMudGFnJiZiLnRhZztoPWIuc3VnZ2VzdDtyPWIucmVzb2x2ZSE9PSExO209Yi5jYWNoZTt0PXImJnRoaXMuc3RvcmUmJmIuaGlnaGxpZ2h0O3ZhciBxPSEhdHx8ciYmdGhpcy5zdG9yZSYmYi5lbnJpY2g7Yz1iLmxpbWl0fHxjO3ZhciB4PWIub2Zmc2V0fHwwO2N8fChjPXI/MTAwOjApO2lmKG4mJighdGhpcy5kYnx8IWUpKXtuLmNvbnN0cnVjdG9yIT09QXJyYXkmJihuPVtuXSk7dmFyIHY9W107Zm9yKGxldCBCPVxuMCx6O0I8bi5sZW5ndGg7QisrKWlmKHo9bltCXSx6LmZpZWxkJiZ6LnRhZyl7dmFyIEE9ei50YWc7aWYoQS5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcih2YXIgRD0wO0Q8QS5sZW5ndGg7RCsrKXYucHVzaCh6LmZpZWxkLEFbRF0pO2Vsc2Ugdi5wdXNoKHouZmllbGQsQSl9ZWxzZXtBPU9iamVjdC5rZXlzKHopO2ZvcihsZXQgQz0wLEosRztDPEEubGVuZ3RoO0MrKylpZihKPUFbQ10sRz16W0pdLEcuY29uc3RydWN0b3I9PT1BcnJheSlmb3IoRD0wO0Q8Ry5sZW5ndGg7RCsrKXYucHVzaChKLEdbRF0pO2Vsc2Ugdi5wdXNoKEosRyl9bj12O2lmKCFhKXtmPVtdO2lmKHYubGVuZ3RoKWZvcihuPTA7bjx2Lmxlbmd0aDtuKz0yKXtpZih0aGlzLmRiKXtlPXRoaXMuaW5kZXguZ2V0KHZbbl0pO2lmKCFlKWNvbnRpbnVlO2YucHVzaChlPWUuZGIudGFnKHZbbisxXSxjLHgscSkpfWVsc2UgZT1mYi5jYWxsKHRoaXMsdltuXSx2W24rMV0sYyx4LHEpO2QucHVzaChyP3tmaWVsZDp2W25dLHRhZzp2W24rXG4xXSxyZXN1bHQ6ZX06W2VdKX1pZihmLmxlbmd0aCl7Y29uc3QgQj10aGlzO3JldHVybiBQcm9taXNlLmFsbChmKS50aGVuKGZ1bmN0aW9uKHope2ZvcihsZXQgQz0wO0M8ei5sZW5ndGg7QysrKXI/ZFtDXS5yZXN1bHQ9eltDXTpkW0NdPXpbQ107cmV0dXJuIHI/ZDpuZXcgWChkLmxlbmd0aD4xPyRhKGQsMSwwLDAsaCxsKTpkWzBdLEIpfSl9cmV0dXJuIHI/ZDpuZXcgWChkLmxlbmd0aD4xPyRhKGQsMSwwLDAsaCxsKTpkWzBdLHRoaXMpfX1yfHxnfHwhKHA9cHx8dGhpcy5maWVsZCl8fChNKHApP2c9cDoocC5jb25zdHJ1Y3Rvcj09PUFycmF5JiZwLmxlbmd0aD09PTEmJihwPXBbMF0pLGc9cC5maWVsZHx8cC5pbmRleCkpO3AmJnAuY29uc3RydWN0b3IhPT1BcnJheSYmKHA9W3BdKX1wfHwocD10aGlzLmZpZWxkKTtsZXQgRjt2PSh0aGlzLndvcmtlcnx8dGhpcy5kYikmJiFlJiZbXTtmb3IobGV0IEI9MCx6LEMsSjtCPHAubGVuZ3RoO0IrKyl7Qz1wW0JdO2lmKHRoaXMuZGImJnRoaXMudGFnJiZcbiF0aGlzLkJbQl0pY29udGludWU7bGV0IEc7TShDKXx8KEc9QyxDPUcuZmllbGQsYT1HLnF1ZXJ5fHxhLGM9YWEoRy5saW1pdCxjKSx4PWFhKEcub2Zmc2V0LHgpLGg9YWEoRy5zdWdnZXN0LGgpLHQ9ciYmdGhpcy5zdG9yZSYmYWEoRy5oaWdobGlnaHQsdCkscT0hIXR8fHImJnRoaXMuc3RvcmUmJmFhKEcuZW5yaWNoLHEpLG09YWEoRy5jYWNoZSxtKSk7aWYoZSl6PWVbQl07ZWxzZXtBPUd8fGJ8fHt9O0Q9QS5lbnJpY2g7dmFyIEU9dGhpcy5pbmRleC5nZXQoQyk7biYmKHRoaXMuZGImJihBLnRhZz1uLEEuZmllbGQ9cCxGPUUuZGIuc3VwcG9ydF90YWdfc2VhcmNoKSwhRiYmRCYmKEEuZW5yaWNoPSExKSxGfHwoQS5saW1pdD0wLEEub2Zmc2V0PTApKTt6PW0/RS5zZWFyY2hDYWNoZShhLG4mJiFGPzA6YyxBKTpFLnNlYXJjaChhLG4mJiFGPzA6YyxBKTtuJiYhRiYmKEEubGltaXQ9YyxBLm9mZnNldD14KTtEJiYoQS5lbnJpY2g9RCk7aWYodil7dltCXT16O2NvbnRpbnVlfX1KPSh6PVxuei5yZXN1bHR8fHopJiZ6Lmxlbmd0aDtpZihuJiZKKXtBPVtdO0Q9MDtpZih0aGlzLmRiJiZlKXtpZighRilmb3IoRT1wLmxlbmd0aDtFPGUubGVuZ3RoO0UrKyl7bGV0IE49ZVtFXTtpZihOJiZOLmxlbmd0aClEKyssQS5wdXNoKE4pO2Vsc2UgaWYoIWgpcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpfX1lbHNlIGZvcihsZXQgTj0wLE8sUDtOPG4ubGVuZ3RoO04rPTIpe089dGhpcy50YWcuZ2V0KG5bTl0pO2lmKCFPKWlmKGgpY29udGludWU7ZWxzZSByZXR1cm4gcj9kOm5ldyBYKGQsdGhpcyk7aWYoUD0oTz1PJiZPLmdldChuW04rMV0pKSYmTy5sZW5ndGgpRCsrLEEucHVzaChPKTtlbHNlIGlmKCFoKXJldHVybiByP2Q6bmV3IFgoZCx0aGlzKX1pZihEKXt6PWViKHosQSxjLHgscik7Sj16Lmxlbmd0aDtpZighSiYmIWgpcmV0dXJuIHI/ejpuZXcgWCh6LHRoaXMpO0QtLX19aWYoSilmW3VdPUMsZC5wdXNoKHopLHUrKztlbHNlIGlmKHAubGVuZ3RoPT09MSlyZXR1cm4gcj9kOm5ldyBYKGQsXG50aGlzKX1pZih2KXtpZih0aGlzLmRiJiZuJiZuLmxlbmd0aCYmIUYpZm9yKHE9MDtxPG4ubGVuZ3RoO3ErPTIpe2Y9dGhpcy5pbmRleC5nZXQobltxXSk7aWYoIWYpaWYoaCljb250aW51ZTtlbHNlIHJldHVybiByP2Q6bmV3IFgoZCx0aGlzKTt2LnB1c2goZi5kYi50YWcobltxKzFdLGMseCwhMSkpfWNvbnN0IEI9dGhpcztyZXR1cm4gUHJvbWlzZS5hbGwodikudGhlbihmdW5jdGlvbih6KXtiJiYoYi5yZXNvbHZlPXIpO3oubGVuZ3RoJiYoej1CLnNlYXJjaChhLGMsYix6KSk7cmV0dXJuIHp9KX1pZighdSlyZXR1cm4gcj9kOm5ldyBYKGQsdGhpcyk7aWYoZyYmKCFxfHwhdGhpcy5zdG9yZSkpcmV0dXJuIGQ9ZFswXSxyP2Q6bmV3IFgoZCx0aGlzKTt2PVtdO2Zvcih4PTA7eDxmLmxlbmd0aDt4Kyspe249ZFt4XTtxJiZuLmxlbmd0aCYmdHlwZW9mIG5bMF0uZG9jPT09XCJ1bmRlZmluZWRcIiYmKHRoaXMuZGI/di5wdXNoKG49dGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFswXSkuZGIuZW5yaWNoKG4pKTpcbm49VGEuY2FsbCh0aGlzLG4pKTtpZihnKXJldHVybiByP3Q/Y2IoYSxuLHRoaXMuaW5kZXgsZyx0KTpuOm5ldyBYKG4sdGhpcyk7ZFt4XT17ZmllbGQ6Zlt4XSxyZXN1bHQ6bn19aWYocSYmdGhpcy5kYiYmdi5sZW5ndGgpe2NvbnN0IEI9dGhpcztyZXR1cm4gUHJvbWlzZS5hbGwodikudGhlbihmdW5jdGlvbih6KXtmb3IobGV0IEM9MDtDPHoubGVuZ3RoO0MrKylkW0NdLnJlc3VsdD16W0NdO3QmJihkPWNiKGEsZCxCLmluZGV4LGcsdCkpO3JldHVybiBrP2diKGQpOmR9KX10JiYoZD1jYihhLGQsdGhpcy5pbmRleCxnLHQpKTtyZXR1cm4gaz9nYihkKTpkfTtcbmZ1bmN0aW9uIGdiKGEpe2NvbnN0IGM9W10sYj1JKCksZT1JKCk7Zm9yKGxldCBkPTAsZixnLGssaCxsLG0scDtkPGEubGVuZ3RoO2QrKyl7Zj1hW2RdO2c9Zi5maWVsZDtrPWYucmVzdWx0O2ZvcihsZXQgdT0wO3U8ay5sZW5ndGg7dSsrKWlmKGw9a1t1XSx0eXBlb2YgbCE9PVwib2JqZWN0XCI/bD17aWQ6aD1sfTpoPWwuaWQsKG09YltoXSk/bS5wdXNoKGcpOihsLmZpZWxkPWJbaF09W2ddLGMucHVzaChsKSkscD1sLmhpZ2hsaWdodCltPWVbaF0sbXx8KGVbaF09bT17fSxsLmhpZ2hsaWdodD1tKSxtW2ddPXB9cmV0dXJuIGN9ZnVuY3Rpb24gZmIoYSxjLGIsZSxkKXthPXRoaXMudGFnLmdldChhKTtpZighYSlyZXR1cm5bXTthPWEuZ2V0KGMpO2lmKCFhKXJldHVybltdO2M9YS5sZW5ndGgtZTtpZihjPjApe2lmKGImJmM+Ynx8ZSlhPWEuc2xpY2UoZSxlK2IpO2QmJihhPVRhLmNhbGwodGhpcyxhKSl9cmV0dXJuIGF9XG5mdW5jdGlvbiBUYShhKXtpZighdGhpc3x8IXRoaXMuc3RvcmUpcmV0dXJuIGE7aWYodGhpcy5kYilyZXR1cm4gdGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFswXSkuZGIuZW5yaWNoKGEpO2NvbnN0IGM9QXJyYXkoYS5sZW5ndGgpO2ZvcihsZXQgYj0wLGU7YjxhLmxlbmd0aDtiKyspZT1hW2JdLGNbYl09e2lkOmUsZG9jOnRoaXMuc3RvcmUuZ2V0KGUpfTtyZXR1cm4gY307ZnVuY3Rpb24gTmEoYSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1OYSlyZXR1cm4gbmV3IE5hKGEpO2NvbnN0IGM9YS5kb2N1bWVudHx8YS5kb2N8fGE7bGV0IGIsZTt0aGlzLkI9W107dGhpcy5maWVsZD1bXTt0aGlzLkQ9W107dGhpcy5rZXk9KGI9Yy5rZXl8fGMuaWQpJiZoYihiLHRoaXMuRCl8fFwiaWRcIjsoZT1hLmtleXN0b3JlfHwwKSYmKHRoaXMua2V5c3RvcmU9ZSk7dGhpcy5mYXN0dXBkYXRlPSEhYS5mYXN0dXBkYXRlO3RoaXMucmVnPSF0aGlzLmZhc3R1cGRhdGV8fGEud29ya2VyfHxhLmRiP2U/bmV3IFMoZSk6bmV3IFNldDplP25ldyBSKGUpOm5ldyBNYXA7dGhpcy5oPShiPWMuc3RvcmV8fG51bGwpJiZiJiZiIT09ITAmJltdO3RoaXMuc3RvcmU9Yj9lP25ldyBSKGUpOm5ldyBNYXA6bnVsbDt0aGlzLmNhY2hlPShiPWEuY2FjaGV8fG51bGwpJiZuZXcgbWEoYik7YS5jYWNoZT0hMTt0aGlzLndvcmtlcj1hLndvcmtlcnx8ITE7dGhpcy5wcmlvcml0eT1hLnByaW9yaXR5fHxcbjQ7dGhpcy5pbmRleD1pYi5jYWxsKHRoaXMsYSxjKTt0aGlzLnRhZz1udWxsO2lmKGI9Yy50YWcpaWYodHlwZW9mIGI9PT1cInN0cmluZ1wiJiYoYj1bYl0pLGIubGVuZ3RoKXt0aGlzLnRhZz1uZXcgTWFwO3RoaXMuQT1bXTt0aGlzLkY9W107Zm9yKGxldCBkPTAsZixnO2Q8Yi5sZW5ndGg7ZCsrKXtmPWJbZF07Zz1mLmZpZWxkfHxmO2lmKCFnKXRocm93IEVycm9yKFwiVGhlIHRhZyBmaWVsZCBmcm9tIHRoZSBkb2N1bWVudCBkZXNjcmlwdG9yIGlzIHVuZGVmaW5lZC5cIik7Zi5jdXN0b20/dGhpcy5BW2RdPWYuY3VzdG9tOih0aGlzLkFbZF09aGIoZyx0aGlzLkQpLGYuZmlsdGVyJiYodHlwZW9mIHRoaXMuQVtkXT09PVwic3RyaW5nXCImJih0aGlzLkFbZF09bmV3IFN0cmluZyh0aGlzLkFbZF0pKSx0aGlzLkFbZF0uRz1mLmZpbHRlcikpO3RoaXMuRltkXT1nO3RoaXMudGFnLnNldChnLG5ldyBNYXApfX1pZih0aGlzLndvcmtlcil7dGhpcy5mYXN0dXBkYXRlPSExO2E9W107Zm9yKGNvbnN0IGQgb2YgdGhpcy5pbmRleC52YWx1ZXMoKSlkLnRoZW4mJlxuYS5wdXNoKGQpO2lmKGEubGVuZ3RoKXtjb25zdCBkPXRoaXM7cmV0dXJuIFByb21pc2UuYWxsKGEpLnRoZW4oZnVuY3Rpb24oZil7bGV0IGc9MDtmb3IoY29uc3QgayBvZiBkLmluZGV4LmVudHJpZXMoKSl7Y29uc3QgaD1rWzBdO2xldCBsPWtbMV07bC50aGVuJiYobD1mW2ddLGQuaW5kZXguc2V0KGgsbCksZysrKX1yZXR1cm4gZH0pfX1lbHNlIGEuZGImJih0aGlzLmZhc3R1cGRhdGU9ITEsdGhpcy5tb3VudChhLmRiKSl9dz1OYS5wcm90b3R5cGU7XG53Lm1vdW50PWZ1bmN0aW9uKGEpe2xldCBjPXRoaXMuZmllbGQ7aWYodGhpcy50YWcpZm9yKGxldCBmPTAsZztmPHRoaXMuRi5sZW5ndGg7ZisrKXtnPXRoaXMuRltmXTt2YXIgYj12b2lkIDA7dGhpcy5pbmRleC5zZXQoZyxiPW5ldyBUKHt9LHRoaXMucmVnKSk7Yz09PXRoaXMuZmllbGQmJihjPWMuc2xpY2UoMCkpO2MucHVzaChnKTtiLnRhZz10aGlzLnRhZy5nZXQoZyl9Yj1bXTtjb25zdCBlPXtkYjphLmRiLHR5cGU6YS50eXBlLGZhc3R1cGRhdGU6YS5mYXN0dXBkYXRlfTtmb3IobGV0IGY9MCxnLGs7ZjxjLmxlbmd0aDtmKyspe2UuZmllbGQ9az1jW2ZdO2c9dGhpcy5pbmRleC5nZXQoayk7Y29uc3QgaD1uZXcgYS5jb25zdHJ1Y3RvcihhLmlkLGUpO2guaWQ9YS5pZDtiW2ZdPWgubW91bnQoZyk7Zy5kb2N1bWVudD0hMDtmP2cuYnlwYXNzPSEwOmcuc3RvcmU9dGhpcy5zdG9yZX1jb25zdCBkPXRoaXM7cmV0dXJuIHRoaXMuZGI9UHJvbWlzZS5hbGwoYikudGhlbihmdW5jdGlvbigpe2QuZGI9XG4hMH0pfTt3LmNvbW1pdD1hc3luYyBmdW5jdGlvbigpe2NvbnN0IGE9W107Zm9yKGNvbnN0IGMgb2YgdGhpcy5pbmRleC52YWx1ZXMoKSlhLnB1c2goYy5jb21taXQoKSk7YXdhaXQgUHJvbWlzZS5hbGwoYSk7dGhpcy5yZWcuY2xlYXIoKX07dy5kZXN0cm95PWZ1bmN0aW9uKCl7Y29uc3QgYT1bXTtmb3IoY29uc3QgYyBvZiB0aGlzLmluZGV4LnZhbHVlcygpKWEucHVzaChjLmRlc3Ryb3koKSk7cmV0dXJuIFByb21pc2UuYWxsKGEpfTtcbmZ1bmN0aW9uIGliKGEsYyl7Y29uc3QgYj1uZXcgTWFwO2xldCBlPWMuaW5kZXh8fGMuZmllbGR8fGM7TShlKSYmKGU9W2VdKTtmb3IobGV0IGY9MCxnLGs7ZjxlLmxlbmd0aDtmKyspe2c9ZVtmXTtNKGcpfHwoaz1nLGc9Zy5maWVsZCk7az1iYShrKT9PYmplY3QuYXNzaWduKHt9LGEsayk6YTtpZih0aGlzLndvcmtlcil7dmFyIGQ9dm9pZCAwO2Q9KGQ9ay5lbmNvZGVyKSYmZC5lbmNvZGU/ZDpuZXcga2EodHlwZW9mIGQ9PT1cInN0cmluZ1wiP3ZhW2RdOmR8fHt9KTtkPW5ldyBMYShrLGQpO2Iuc2V0KGcsZCl9dGhpcy53b3JrZXJ8fGIuc2V0KGcsbmV3IFQoayx0aGlzLnJlZykpO2suY3VzdG9tP3RoaXMuQltmXT1rLmN1c3RvbToodGhpcy5CW2ZdPWhiKGcsdGhpcy5EKSxrLmZpbHRlciYmKHR5cGVvZiB0aGlzLkJbZl09PT1cInN0cmluZ1wiJiYodGhpcy5CW2ZdPW5ldyBTdHJpbmcodGhpcy5CW2ZdKSksdGhpcy5CW2ZdLkc9ay5maWx0ZXIpKTt0aGlzLmZpZWxkW2ZdPWd9aWYodGhpcy5oKXthPVxuYy5zdG9yZTtNKGEpJiYoYT1bYV0pO2ZvcihsZXQgZj0wLGcsaztmPGEubGVuZ3RoO2YrKylnPWFbZl0saz1nLmZpZWxkfHxnLGcuY3VzdG9tPyh0aGlzLmhbZl09Zy5jdXN0b20sZy5jdXN0b20uTz1rKToodGhpcy5oW2ZdPWhiKGssdGhpcy5EKSxnLmZpbHRlciYmKHR5cGVvZiB0aGlzLmhbZl09PT1cInN0cmluZ1wiJiYodGhpcy5oW2ZdPW5ldyBTdHJpbmcodGhpcy5oW2ZdKSksdGhpcy5oW2ZdLkc9Zy5maWx0ZXIpKX1yZXR1cm4gYn1mdW5jdGlvbiBoYihhLGMpe2NvbnN0IGI9YS5zcGxpdChcIjpcIik7bGV0IGU9MDtmb3IobGV0IGQ9MDtkPGIubGVuZ3RoO2QrKylhPWJbZF0sYVthLmxlbmd0aC0xXT09PVwiXVwiJiYoYT1hLnN1YnN0cmluZygwLGEubGVuZ3RoLTIpKSYmKGNbZV09ITApLGEmJihiW2UrK109YSk7ZTxiLmxlbmd0aCYmKGIubGVuZ3RoPWUpO3JldHVybiBlPjE/YjpiWzBdfXcuYXBwZW5kPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMuYWRkKGEsYywhMCl9O1xudy51cGRhdGU9ZnVuY3Rpb24oYSxjKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSkuYWRkKGEsYyl9O3cucmVtb3ZlPWZ1bmN0aW9uKGEpe2JhKGEpJiYoYT1jYShhLHRoaXMua2V5KSk7Zm9yKHZhciBjIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYy5yZW1vdmUoYSwhMCk7aWYodGhpcy5yZWcuaGFzKGEpKXtpZih0aGlzLnRhZyYmIXRoaXMuZmFzdHVwZGF0ZSlmb3IobGV0IGIgb2YgdGhpcy50YWcudmFsdWVzKCkpZm9yKGxldCBlIG9mIGIpe2M9ZVswXTtjb25zdCBkPWVbMV0sZj1kLmluZGV4T2YoYSk7Zj4tMSYmKGQubGVuZ3RoPjE/ZC5zcGxpY2UoZiwxKTpiLmRlbGV0ZShjKSl9dGhpcy5zdG9yZSYmdGhpcy5zdG9yZS5kZWxldGUoYSk7dGhpcy5yZWcuZGVsZXRlKGEpfXRoaXMuY2FjaGUmJnRoaXMuY2FjaGUucmVtb3ZlKGEpO3JldHVybiB0aGlzfTtcbncuY2xlYXI9ZnVuY3Rpb24oKXtjb25zdCBhPVtdO2Zvcihjb25zdCBjIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpe2NvbnN0IGI9Yy5jbGVhcigpO2IudGhlbiYmYS5wdXNoKGIpfWlmKHRoaXMudGFnKWZvcihjb25zdCBjIG9mIHRoaXMudGFnLnZhbHVlcygpKWMuY2xlYXIoKTt0aGlzLnN0b3JlJiZ0aGlzLnN0b3JlLmNsZWFyKCk7dGhpcy5jYWNoZSYmdGhpcy5jYWNoZS5jbGVhcigpO3JldHVybiBhLmxlbmd0aD9Qcm9taXNlLmFsbChhKTp0aGlzfTt3LmNvbnRhaW49ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGI/dGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFswXSkuZGIuaGFzKGEpOnRoaXMucmVnLmhhcyhhKX07dy5jbGVhbnVwPWZ1bmN0aW9uKCl7Zm9yKGNvbnN0IGEgb2YgdGhpcy5pbmRleC52YWx1ZXMoKSlhLmNsZWFudXAoKTtyZXR1cm4gdGhpc307XG53LmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5kYj90aGlzLmluZGV4LmdldCh0aGlzLmZpZWxkWzBdKS5kYi5lbnJpY2goYSkudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gY1swXSYmY1swXS5kb2N8fG51bGx9KTp0aGlzLnN0b3JlLmdldChhKXx8bnVsbH07dy5zZXQ9ZnVuY3Rpb24oYSxjKXt0eXBlb2YgYT09PVwib2JqZWN0XCImJihjPWEsYT1jYShjLHRoaXMua2V5KSk7dGhpcy5zdG9yZS5zZXQoYSxjKTtyZXR1cm4gdGhpc307dy5zZWFyY2hDYWNoZT1sYTt3LmV4cG9ydD1qYjt3LmltcG9ydD1rYjtGYShOYS5wcm90b3R5cGUpO2Z1bmN0aW9uIGxiKGEsYz0wKXtsZXQgYj1bXSxlPVtdO2MmJihjPTI1RTQvYyo1RTN8MCk7Zm9yKGNvbnN0IGQgb2YgYS5lbnRyaWVzKCkpZS5wdXNoKGQpLGUubGVuZ3RoPT09YyYmKGIucHVzaChlKSxlPVtdKTtlLmxlbmd0aCYmYi5wdXNoKGUpO3JldHVybiBifWZ1bmN0aW9uIG1iKGEsYyl7Y3x8KGM9bmV3IE1hcCk7Zm9yKGxldCBiPTAsZTtiPGEubGVuZ3RoO2IrKyllPWFbYl0sYy5zZXQoZVswXSxlWzFdKTtyZXR1cm4gY31mdW5jdGlvbiBuYihhLGM9MCl7bGV0IGI9W10sZT1bXTtjJiYoYz0yNUU0L2MqMUUzfDApO2Zvcihjb25zdCBkIG9mIGEuZW50cmllcygpKWUucHVzaChbZFswXSxsYihkWzFdKVswXXx8W11dKSxlLmxlbmd0aD09PWMmJihiLnB1c2goZSksZT1bXSk7ZS5sZW5ndGgmJmIucHVzaChlKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIG9iKGEsYyl7Y3x8KGM9bmV3IE1hcCk7Zm9yKGxldCBiPTAsZSxkO2I8YS5sZW5ndGg7YisrKWU9YVtiXSxkPWMuZ2V0KGVbMF0pLGMuc2V0KGVbMF0sbWIoZVsxXSxkKSk7cmV0dXJuIGN9ZnVuY3Rpb24gcGIoYSl7bGV0IGM9W10sYj1bXTtmb3IoY29uc3QgZSBvZiBhLmtleXMoKSliLnB1c2goZSksYi5sZW5ndGg9PT0yNUU0JiYoYy5wdXNoKGIpLGI9W10pO2IubGVuZ3RoJiZjLnB1c2goYik7cmV0dXJuIGN9ZnVuY3Rpb24gcWIoYSxjKXtjfHwoYz1uZXcgU2V0KTtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyljLmFkZChhW2JdKTtyZXR1cm4gY31cbmZ1bmN0aW9uIHJiKGEsYyxiLGUsZCxmLGc9MCl7Y29uc3Qgaz1lJiZlLmNvbnN0cnVjdG9yPT09QXJyYXk7dmFyIGg9az9lLnNoaWZ0KCk6ZTtpZighaClyZXR1cm4gdGhpcy5leHBvcnQoYSxjLGQsZisxKTtpZigoaD1hKChjP2MrXCIuXCI6XCJcIikrKGcrMSkrXCIuXCIrYixKU09OLnN0cmluZ2lmeShoKSkpJiZoLnRoZW4pe2NvbnN0IGw9dGhpcztyZXR1cm4gaC50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHJiLmNhbGwobCxhLGMsYixrP2U6bnVsbCxkLGYsZysxKX0pfXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGIsaz9lOm51bGwsZCxmLGcrMSl9XG5mdW5jdGlvbiBqYihhLGMsYj0wLGU9MCl7aWYoYjx0aGlzLmZpZWxkLmxlbmd0aCl7Y29uc3QgZz10aGlzLmZpZWxkW2JdO2lmKChjPXRoaXMuaW5kZXguZ2V0KGcpLmV4cG9ydChhLGcsYixlPTEpKSYmYy50aGVuKXtjb25zdCBrPXRoaXM7cmV0dXJuIGMudGhlbihmdW5jdGlvbigpe3JldHVybiBrLmV4cG9ydChhLGcsYisxKX0pfXJldHVybiB0aGlzLmV4cG9ydChhLGcsYisxKX1sZXQgZCxmO3N3aXRjaChlKXtjYXNlIDA6ZD1cInJlZ1wiO2Y9cGIodGhpcy5yZWcpO2M9bnVsbDticmVhaztjYXNlIDE6ZD1cInRhZ1wiO2Y9dGhpcy50YWcmJm5iKHRoaXMudGFnLHRoaXMucmVnLnNpemUpO2M9bnVsbDticmVhaztjYXNlIDI6ZD1cImRvY1wiO2Y9dGhpcy5zdG9yZSYmbGIodGhpcy5zdG9yZSk7Yz1udWxsO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGQsZnx8bnVsbCxiLGUpfVxuZnVuY3Rpb24ga2IoYSxjKXt2YXIgYj1hLnNwbGl0KFwiLlwiKTtiW2IubGVuZ3RoLTFdPT09XCJqc29uXCImJmIucG9wKCk7Y29uc3QgZT1iLmxlbmd0aD4yP2JbMF06XCJcIjtiPWIubGVuZ3RoPjI/YlsyXTpiWzFdO2lmKHRoaXMud29ya2VyJiZlKXJldHVybiB0aGlzLmluZGV4LmdldChlKS5pbXBvcnQoYSk7aWYoYyl7dHlwZW9mIGM9PT1cInN0cmluZ1wiJiYoYz1KU09OLnBhcnNlKGMpKTtpZihlKXJldHVybiB0aGlzLmluZGV4LmdldChlKS5pbXBvcnQoYixjKTtzd2l0Y2goYil7Y2FzZSBcInJlZ1wiOnRoaXMuZmFzdHVwZGF0ZT0hMTt0aGlzLnJlZz1xYihjLHRoaXMucmVnKTtmb3IobGV0IGQ9MCxmO2Q8dGhpcy5maWVsZC5sZW5ndGg7ZCsrKWY9dGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFtkXSksZi5mYXN0dXBkYXRlPSExLGYucmVnPXRoaXMucmVnO2lmKHRoaXMud29ya2VyKXtjPVtdO2Zvcihjb25zdCBkIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYy5wdXNoKGQuaW1wb3J0KGEpKTtyZXR1cm4gUHJvbWlzZS5hbGwoYyl9YnJlYWs7XG5jYXNlIFwidGFnXCI6dGhpcy50YWc9b2IoYyx0aGlzLnRhZyk7YnJlYWs7Y2FzZSBcImRvY1wiOnRoaXMuc3RvcmU9bWIoYyx0aGlzLnN0b3JlKX19fWZ1bmN0aW9uIHNiKGEsYyl7bGV0IGI9XCJcIjtmb3IoY29uc3QgZSBvZiBhLmVudHJpZXMoKSl7YT1lWzBdO2NvbnN0IGQ9ZVsxXTtsZXQgZj1cIlwiO2ZvcihsZXQgZz0wLGs7ZzxkLmxlbmd0aDtnKyspe2s9ZFtnXXx8W1wiXCJdO2xldCBoPVwiXCI7Zm9yKGxldCBsPTA7bDxrLmxlbmd0aDtsKyspaCs9KGg/XCIsXCI6XCJcIikrKGM9PT1cInN0cmluZ1wiPydcIicra1tsXSsnXCInOmtbbF0pO2g9XCJbXCIraCtcIl1cIjtmKz0oZj9cIixcIjpcIlwiKStofWY9J1tcIicrYSsnXCIsWycrZitcIl1dXCI7Yis9KGI/XCIsXCI6XCJcIikrZn1yZXR1cm4gYn07VC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEsYyl7Y29uc3QgYj10aGlzLnJlZy5zaXplJiYodGhpcy5mYXN0dXBkYXRlP3RoaXMucmVnLmdldChhKTp0aGlzLnJlZy5oYXMoYSkpO2lmKGIpe2lmKHRoaXMuZmFzdHVwZGF0ZSlmb3IobGV0IGU9MCxkLGY7ZTxiLmxlbmd0aDtlKyspe2lmKChkPWJbZV0pJiYoZj1kLmxlbmd0aCkpaWYoZFtmLTFdPT09YSlkLnBvcCgpO2Vsc2V7Y29uc3QgZz1kLmluZGV4T2YoYSk7Zz49MCYmZC5zcGxpY2UoZywxKX19ZWxzZSB0Yih0aGlzLm1hcCxhKSx0aGlzLmRlcHRoJiZ0Yih0aGlzLmN0eCxhKTtjfHx0aGlzLnJlZy5kZWxldGUoYSl9dGhpcy5kYiYmKHRoaXMuY29tbWl0X3Rhc2sucHVzaCh7ZGVsOmF9KSx0aGlzLk0mJnViKHRoaXMpKTt0aGlzLmNhY2hlJiZ0aGlzLmNhY2hlLnJlbW92ZShhKTtyZXR1cm4gdGhpc307XG5mdW5jdGlvbiB0YihhLGMpe2xldCBiPTA7dmFyIGU9dHlwZW9mIGM9PT1cInVuZGVmaW5lZFwiO2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSlmb3IobGV0IGQ9MCxmLGcsaztkPGEubGVuZ3RoO2QrKyl7aWYoKGY9YVtkXSkmJmYubGVuZ3RoKXtpZihlKXJldHVybiAxO2c9Zi5pbmRleE9mKGMpO2lmKGc+PTApe2lmKGYubGVuZ3RoPjEpcmV0dXJuIGYuc3BsaWNlKGcsMSksMTtkZWxldGUgYVtkXTtpZihiKXJldHVybiAxO2s9MX1lbHNle2lmKGspcmV0dXJuIDE7YisrfX19ZWxzZSBmb3IobGV0IGQgb2YgYS5lbnRyaWVzKCkpZT1kWzBdLHRiKGRbMV0sYyk/YisrOmEuZGVsZXRlKGUpO3JldHVybiBifTtjb25zdCB2Yj17bWVtb3J5OntyZXNvbHV0aW9uOjF9LHBlcmZvcm1hbmNlOntyZXNvbHV0aW9uOjMsZmFzdHVwZGF0ZTohMCxjb250ZXh0OntkZXB0aDoxLHJlc29sdXRpb246MX19LG1hdGNoOnt0b2tlbml6ZTpcImZvcndhcmRcIn0sc2NvcmU6e3Jlc29sdXRpb246OSxjb250ZXh0OntkZXB0aDoyLHJlc29sdXRpb246M319fTtULnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxjLGIsZSl7aWYoYyYmKGF8fGE9PT0wKSl7aWYoIWUmJiFiJiZ0aGlzLnJlZy5oYXMoYSkpcmV0dXJuIHRoaXMudXBkYXRlKGEsYyk7ZT10aGlzLmRlcHRoO2M9dGhpcy5lbmNvZGVyLmVuY29kZShjLCFlKTtjb25zdCBsPWMubGVuZ3RoO2lmKGwpe2NvbnN0IG09SSgpLHA9SSgpLHU9dGhpcy5yZXNvbHV0aW9uO2ZvcihsZXQgcj0wO3I8bDtyKyspe2xldCB0PWNbdGhpcy5ydGw/bC0xLXI6cl07dmFyIGQ9dC5sZW5ndGg7aWYoZCYmKGV8fCFwW3RdKSl7dmFyIGY9dGhpcy5zY29yZT90aGlzLnNjb3JlKGMsdCxyLG51bGwsMCk6d2IodSxsLHIpLGc9XCJcIjtzd2l0Y2godGhpcy50b2tlbml6ZSl7Y2FzZSBcInRvbGVyYW50XCI6WSh0aGlzLHAsdCxmLGEsYik7aWYoZD4yKXtmb3IobGV0IG49MSxxLHgsdixBO248ZC0xO24rKylxPXQuY2hhckF0KG4pLHg9dC5jaGFyQXQobisxKSx2PXQuc3Vic3RyaW5nKDAsbikreCxBPXQuc3Vic3RyaW5nKG4rXG4yKSxnPXYrcStBLFkodGhpcyxwLGcsZixhLGIpLGc9ditBLFkodGhpcyxwLGcsZixhLGIpO1kodGhpcyxwLHQuc3Vic3RyaW5nKDAsdC5sZW5ndGgtMSksZixhLGIpfWJyZWFrO2Nhc2UgXCJmdWxsXCI6aWYoZD4yKXtmb3IobGV0IG49MCxxO248ZDtuKyspZm9yKGY9ZDtmPm47Zi0tKXtnPXQuc3Vic3RyaW5nKG4sZik7cT10aGlzLnJ0bD9kLTEtbjpuO3ZhciBrPXRoaXMuc2NvcmU/dGhpcy5zY29yZShjLHQscixnLHEpOndiKHUsbCxyLGQscSk7WSh0aGlzLHAsZyxrLGEsYil9YnJlYWt9Y2FzZSBcImJpZGlyZWN0aW9uYWxcIjpjYXNlIFwicmV2ZXJzZVwiOmlmKGQ+MSl7Zm9yKGs9ZC0xO2s+MDtrLS0pe2c9dFt0aGlzLnJ0bD9kLTEtazprXStnO3ZhciBoPXRoaXMuc2NvcmU/dGhpcy5zY29yZShjLHQscixnLGspOndiKHUsbCxyLGQsayk7WSh0aGlzLHAsZyxoLGEsYil9Zz1cIlwifWNhc2UgXCJmb3J3YXJkXCI6aWYoZD4xKXtmb3Ioaz0wO2s8ZDtrKyspZys9dFt0aGlzLnJ0bD9kLTEtazprXSxZKHRoaXMsXG5wLGcsZixhLGIpO2JyZWFrfWRlZmF1bHQ6aWYoWSh0aGlzLHAsdCxmLGEsYiksZSYmbD4xJiZyPGwtMSlmb3IoZD10aGlzLk4sZz10LGY9TWF0aC5taW4oZSsxLHRoaXMucnRsP3IrMTpsLXIpLGs9MTtrPGY7aysrKXt0PWNbdGhpcy5ydGw/bC0xLXItazpyK2tdO2g9dGhpcy5iaWRpcmVjdGlvbmFsJiZ0Pmc7Y29uc3Qgbj10aGlzLnNjb3JlP3RoaXMuc2NvcmUoYyxnLHIsdCxrLTEpOndiKGQrKGwvMj5kPzA6MSksbCxyLGYtMSxrLTEpO1kodGhpcyxtLGg/Zzp0LG4sYSxiLGg/dDpnKX19fX10aGlzLmZhc3R1cGRhdGV8fHRoaXMucmVnLmFkZChhKX19dGhpcy5kYiYmKHRoaXMuY29tbWl0X3Rhc2sucHVzaChiP3tpbnM6YX06e2RlbDphfSksdGhpcy5NJiZ1Yih0aGlzKSk7cmV0dXJuIHRoaXN9O1xuZnVuY3Rpb24gWShhLGMsYixlLGQsZixnKXtsZXQgayxoO2lmKCEoaz1jW2JdKXx8ZyYmIWtbZ10pe2c/KGM9a3x8KGNbYl09SSgpKSxjW2ddPTEsaD1hLmN0eCwoaz1oLmdldChnKSk/aD1rOmguc2V0KGcsaD1hLmtleXN0b3JlP25ldyBSKGEua2V5c3RvcmUpOm5ldyBNYXApKTooaD1hLm1hcCxjW2JdPTEpOyhrPWguZ2V0KGIpKT9oPWs6aC5zZXQoYixoPWs9W10pO2lmKGYpZm9yKGxldCBsPTAsbTtsPGsubGVuZ3RoO2wrKylpZigobT1rW2xdKSYmbS5pbmNsdWRlcyhkKSl7aWYobDw9ZSlyZXR1cm47bS5zcGxpY2UobS5pbmRleE9mKGQpLDEpO2EuZmFzdHVwZGF0ZSYmKGM9YS5yZWcuZ2V0KGQpKSYmYy5zcGxpY2UoYy5pbmRleE9mKG0pLDEpO2JyZWFrfWg9aFtlXXx8KGhbZV09W10pO2gucHVzaChkKTtpZihoLmxlbmd0aD09PTIqKjMxLTEpe2M9bmV3IHhhKGgpO2lmKGEuZmFzdHVwZGF0ZSlmb3IobGV0IGwgb2YgYS5yZWcudmFsdWVzKCkpbC5pbmNsdWRlcyhoKSYmKGxbbC5pbmRleE9mKGgpXT1cbmMpO2tbZV09aD1jfWEuZmFzdHVwZGF0ZSYmKChlPWEucmVnLmdldChkKSk/ZS5wdXNoKGgpOmEucmVnLnNldChkLFtoXSkpfX1mdW5jdGlvbiB3YihhLGMsYixlLGQpe3JldHVybiBiJiZhPjE/YysoZXx8MCk8PWE/YisoZHx8MCk6KGEtMSkvKGMrKGV8fDApKSooYisoZHx8MCkpKzF8MDowfTtULnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24oYSxjLGIpe2J8fChjfHx0eXBlb2YgYSE9PVwib2JqZWN0XCI/dHlwZW9mIGM9PT1cIm9iamVjdFwiJiYoYj1jLGM9MCk6KGI9YSxhPVwiXCIpKTtpZihiJiZiLmNhY2hlKXJldHVybiBiLmNhY2hlPSExLGE9dGhpcy5zZWFyY2hDYWNoZShhLGMsYiksYi5jYWNoZT0hMCxhO2xldCBlPVtdLGQsZixnLGs9MCxoLGwsbSxwLHU7YiYmKGE9Yi5xdWVyeXx8YSxjPWIubGltaXR8fGMsaz1iLm9mZnNldHx8MCxmPWIuY29udGV4dCxnPWIuc3VnZ2VzdCx1PShoPWIucmVzb2x2ZSkmJmIuZW5yaWNoLG09Yi5ib29zdCxwPWIucmVzb2x1dGlvbixsPXRoaXMuZGImJmIudGFnKTt0eXBlb2YgaD09PVwidW5kZWZpbmVkXCImJihoPXRoaXMucmVzb2x2ZSk7Zj10aGlzLmRlcHRoJiZmIT09ITE7bGV0IHI9dGhpcy5lbmNvZGVyLmVuY29kZShhLCFmKTtkPXIubGVuZ3RoO2M9Y3x8KGg/MTAwOjApO2lmKGQ9PT0xKXJldHVybiB4Yi5jYWxsKHRoaXMsclswXSxcIlwiLGMsXG5rLGgsdSxsKTtpZihkPT09MiYmZiYmIWcpcmV0dXJuIHhiLmNhbGwodGhpcyxyWzFdLHJbMF0sYyxrLGgsdSxsKTtsZXQgdD1JKCksbj0wLHE7ZiYmKHE9clswXSxuPTEpO3B8fHA9PT0wfHwocD1xP3RoaXMuTjp0aGlzLnJlc29sdXRpb24pO2lmKHRoaXMuZGIpe2lmKHRoaXMuZGIuc2VhcmNoJiYoYj10aGlzLmRiLnNlYXJjaCh0aGlzLHIsYyxrLGcsaCx1LGwpLGIhPT0hMSkpcmV0dXJuIGI7Y29uc3QgeD10aGlzO3JldHVybiBhc3luYyBmdW5jdGlvbigpe2ZvcihsZXQgdixBO248ZDtuKyspe2lmKChBPXJbbl0pJiYhdFtBXSl7dFtBXT0xO3Y9YXdhaXQgeWIoeCxBLHEsMCwwLCExLCExKTtpZih2PXpiKHYsZSxnLHApKXtlPXY7YnJlYWt9cSYmKGcmJnYmJmUubGVuZ3RofHwocT1BKSl9ZyYmcSYmbj09PWQtMSYmIWUubGVuZ3RoJiYocD14LnJlc29sdXRpb24scT1cIlwiLG49LTEsdD1JKCkpfXJldHVybiBBYihlLHAsYyxrLGcsbSxoKX0oKX1mb3IobGV0IHgsdjtuPGQ7bisrKXtpZigodj1cbnJbbl0pJiYhdFt2XSl7dFt2XT0xO3g9eWIodGhpcyx2LHEsMCwwLCExLCExKTtpZih4PXpiKHgsZSxnLHApKXtlPXg7YnJlYWt9cSYmKGcmJngmJmUubGVuZ3RofHwocT12KSl9ZyYmcSYmbj09PWQtMSYmIWUubGVuZ3RoJiYocD10aGlzLnJlc29sdXRpb24scT1cIlwiLG49LTEsdD1JKCkpfXJldHVybiBBYihlLHAsYyxrLGcsbSxoKX07ZnVuY3Rpb24gQWIoYSxjLGIsZSxkLGYsZyl7bGV0IGs9YS5sZW5ndGgsaD1hO2lmKGs+MSloPSRhKGEsYyxiLGUsZCxmLGcpO2Vsc2UgaWYoaz09PTEpcmV0dXJuIGc/U2EuY2FsbChudWxsLGFbMF0sYixlKTpuZXcgWChhWzBdLHRoaXMpO3JldHVybiBnP2g6bmV3IFgoaCx0aGlzKX1cbmZ1bmN0aW9uIHhiKGEsYyxiLGUsZCxmLGcpe2E9eWIodGhpcyxhLGMsYixlLGQsZixnKTtyZXR1cm4gdGhpcy5kYj9hLnRoZW4oZnVuY3Rpb24oayl7cmV0dXJuIGQ/a3x8W106bmV3IFgoayx0aGlzKX0pOmEmJmEubGVuZ3RoP2Q/U2EuY2FsbCh0aGlzLGEsYixlKTpuZXcgWChhLHRoaXMpOmQ/W106bmV3IFgoW10sdGhpcyl9ZnVuY3Rpb24gemIoYSxjLGIsZSl7bGV0IGQ9W107aWYoYSYmYS5sZW5ndGgpe2lmKGEubGVuZ3RoPD1lKXtjLnB1c2goYSk7cmV0dXJufWZvcihsZXQgZj0wLGc7ZjxlO2YrKylpZihnPWFbZl0pZFtmXT1nO2lmKGQubGVuZ3RoKXtjLnB1c2goZCk7cmV0dXJufX1pZighYilyZXR1cm4gZH1cbmZ1bmN0aW9uIHliKGEsYyxiLGUsZCxmLGcsayl7bGV0IGg7YiYmKGg9YS5iaWRpcmVjdGlvbmFsJiZjPmIpJiYoaD1iLGI9YyxjPWgpO2lmKGEuZGIpcmV0dXJuIGEuZGIuZ2V0KGMsYixlLGQsZixnLGspO2E9Yj8oYT1hLmN0eC5nZXQoYikpJiZhLmdldChjKTphLm1hcC5nZXQoYyk7cmV0dXJuIGF9O2Z1bmN0aW9uIFQoYSxjKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PVQpcmV0dXJuIG5ldyBUKGEpO2lmKGEpe3ZhciBiPU0oYSk/YTphLnByZXNldDtiJiYoYT1PYmplY3QuYXNzaWduKHt9LHZiW2JdLGEpKX1lbHNlIGE9e307Yj1hLmNvbnRleHQ7Y29uc3QgZT1iPT09ITA/e2RlcHRoOjF9OmJ8fHt9LGQ9TShhLmVuY29kZXIpP3ZhW2EuZW5jb2Rlcl06YS5lbmNvZGV8fGEuZW5jb2Rlcnx8e307dGhpcy5lbmNvZGVyPWQuZW5jb2RlP2Q6dHlwZW9mIGQ9PT1cIm9iamVjdFwiP25ldyBrYShkKTp7ZW5jb2RlOmR9O3RoaXMucmVzb2x1dGlvbj1hLnJlc29sdXRpb258fDk7dGhpcy50b2tlbml6ZT1iPShiPWEudG9rZW5pemUpJiZiIT09XCJkZWZhdWx0XCImJmIhPT1cImV4YWN0XCImJmJ8fFwic3RyaWN0XCI7dGhpcy5kZXB0aD1iPT09XCJzdHJpY3RcIiYmZS5kZXB0aHx8MDt0aGlzLmJpZGlyZWN0aW9uYWw9ZS5iaWRpcmVjdGlvbmFsIT09ITE7dGhpcy5mYXN0dXBkYXRlPSEhYS5mYXN0dXBkYXRlO1xudGhpcy5zY29yZT1hLnNjb3JlfHxudWxsOyhiPWEua2V5c3RvcmV8fDApJiYodGhpcy5rZXlzdG9yZT1iKTt0aGlzLm1hcD1iP25ldyBSKGIpOm5ldyBNYXA7dGhpcy5jdHg9Yj9uZXcgUihiKTpuZXcgTWFwO3RoaXMucmVnPWN8fCh0aGlzLmZhc3R1cGRhdGU/Yj9uZXcgUihiKTpuZXcgTWFwOmI/bmV3IFMoYik6bmV3IFNldCk7dGhpcy5OPWUucmVzb2x1dGlvbnx8Mzt0aGlzLnJ0bD1kLnJ0bHx8YS5ydGx8fCExO3RoaXMuY2FjaGU9KGI9YS5jYWNoZXx8bnVsbCkmJm5ldyBtYShiKTt0aGlzLnJlc29sdmU9YS5yZXNvbHZlIT09ITE7aWYoYj1hLmRiKXRoaXMuZGI9dGhpcy5tb3VudChiKTt0aGlzLk09YS5jb21taXQhPT0hMTt0aGlzLmNvbW1pdF90YXNrPVtdO3RoaXMuY29tbWl0X3RpbWVyPW51bGw7dGhpcy5wcmlvcml0eT1hLnByaW9yaXR5fHw0fXc9VC5wcm90b3R5cGU7XG53Lm1vdW50PWZ1bmN0aW9uKGEpe3RoaXMuY29tbWl0X3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuY29tbWl0X3RpbWVyKSx0aGlzLmNvbW1pdF90aW1lcj1udWxsKTtyZXR1cm4gYS5tb3VudCh0aGlzKX07dy5jb21taXQ9ZnVuY3Rpb24oKXt0aGlzLmNvbW1pdF90aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLmNvbW1pdF90aW1lciksdGhpcy5jb21taXRfdGltZXI9bnVsbCk7cmV0dXJuIHRoaXMuZGIuY29tbWl0KHRoaXMpfTt3LmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmNvbW1pdF90aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLmNvbW1pdF90aW1lciksdGhpcy5jb21taXRfdGltZXI9bnVsbCk7cmV0dXJuIHRoaXMuZGIuZGVzdHJveSgpfTtmdW5jdGlvbiB1YihhKXthLmNvbW1pdF90aW1lcnx8KGEuY29tbWl0X3RpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmNvbW1pdF90aW1lcj1udWxsO2EuZGIuY29tbWl0KGEpfSwxKSl9XG53LmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5tYXAuY2xlYXIoKTt0aGlzLmN0eC5jbGVhcigpO3RoaXMucmVnLmNsZWFyKCk7dGhpcy5jYWNoZSYmdGhpcy5jYWNoZS5jbGVhcigpO3JldHVybiB0aGlzLmRiPyh0aGlzLmNvbW1pdF90aW1lciYmY2xlYXJUaW1lb3V0KHRoaXMuY29tbWl0X3RpbWVyKSx0aGlzLmNvbW1pdF90aW1lcj1udWxsLHRoaXMuY29tbWl0X3Rhc2s9W10sdGhpcy5kYi5jbGVhcigpKTp0aGlzfTt3LmFwcGVuZD1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmFkZChhLGMsITApfTt3LmNvbnRhaW49ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGI/dGhpcy5kYi5oYXMoYSk6dGhpcy5yZWcuaGFzKGEpfTt3LnVwZGF0ZT1mdW5jdGlvbihhLGMpe2NvbnN0IGI9dGhpcyxlPXRoaXMucmVtb3ZlKGEpO3JldHVybiBlJiZlLnRoZW4/ZS50aGVuKCgpPT5iLmFkZChhLGMpKTp0aGlzLmFkZChhLGMpfTtcbncuY2xlYW51cD1mdW5jdGlvbigpe2lmKCF0aGlzLmZhc3R1cGRhdGUpcmV0dXJuIHRoaXM7dGIodGhpcy5tYXApO3RoaXMuZGVwdGgmJnRiKHRoaXMuY3R4KTtyZXR1cm4gdGhpc307dy5zZWFyY2hDYWNoZT1sYTt3LmV4cG9ydD1mdW5jdGlvbihhLGMsYj0wLGU9MCl7bGV0IGQsZjtzd2l0Y2goZSl7Y2FzZSAwOmQ9XCJyZWdcIjtmPXBiKHRoaXMucmVnKTticmVhaztjYXNlIDE6ZD1cImNmZ1wiO2Y9bnVsbDticmVhaztjYXNlIDI6ZD1cIm1hcFwiO2Y9bGIodGhpcy5tYXAsdGhpcy5yZWcuc2l6ZSk7YnJlYWs7Y2FzZSAzOmQ9XCJjdHhcIjtmPW5iKHRoaXMuY3R4LHRoaXMucmVnLnNpemUpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGQsZixiLGUpfTtcbncuaW1wb3J0PWZ1bmN0aW9uKGEsYyl7aWYoYylzd2l0Y2godHlwZW9mIGM9PT1cInN0cmluZ1wiJiYoYz1KU09OLnBhcnNlKGMpKSxhPWEuc3BsaXQoXCIuXCIpLGFbYS5sZW5ndGgtMV09PT1cImpzb25cIiYmYS5wb3AoKSxhLmxlbmd0aD09PTMmJmEuc2hpZnQoKSxhPWEubGVuZ3RoPjE/YVsxXTphWzBdLGEpe2Nhc2UgXCJyZWdcIjp0aGlzLmZhc3R1cGRhdGU9ITE7dGhpcy5yZWc9cWIoYyx0aGlzLnJlZyk7YnJlYWs7Y2FzZSBcIm1hcFwiOnRoaXMubWFwPW1iKGMsdGhpcy5tYXApO2JyZWFrO2Nhc2UgXCJjdHhcIjp0aGlzLmN0eD1vYihjLHRoaXMuY3R4KX19O1xudy5zZXJpYWxpemU9ZnVuY3Rpb24oYT0hMCl7bGV0IGM9XCJcIixiPVwiXCIsZT1cIlwiO2lmKHRoaXMucmVnLnNpemUpe2xldCBmO2Zvcih2YXIgZCBvZiB0aGlzLnJlZy5rZXlzKCkpZnx8KGY9dHlwZW9mIGQpLGMrPShjP1wiLFwiOlwiXCIpKyhmPT09XCJzdHJpbmdcIj8nXCInK2QrJ1wiJzpkKTtjPVwiaW5kZXgucmVnPW5ldyBTZXQoW1wiK2MrXCJdKTtcIjtiPXNiKHRoaXMubWFwLGYpO2I9XCJpbmRleC5tYXA9bmV3IE1hcChbXCIrYitcIl0pO1wiO2Zvcihjb25zdCBnIG9mIHRoaXMuY3R4LmVudHJpZXMoKSl7ZD1nWzBdO2xldCBrPXNiKGdbMV0sZik7az1cIm5ldyBNYXAoW1wiK2srXCJdKVwiO2s9J1tcIicrZCsnXCIsJytrK1wiXVwiO2UrPShlP1wiLFwiOlwiXCIpK2t9ZT1cImluZGV4LmN0eD1uZXcgTWFwKFtcIitlK1wiXSk7XCJ9cmV0dXJuIGE/XCJmdW5jdGlvbiBpbmplY3QoaW5kZXgpe1wiK2MrYitlK1wifVwiOmMrYitlfTtGYShULnByb3RvdHlwZSk7Y29uc3QgQmI9dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCImJih3aW5kb3cuaW5kZXhlZERCfHx3aW5kb3cubW96SW5kZXhlZERCfHx3aW5kb3cud2Via2l0SW5kZXhlZERCfHx3aW5kb3cubXNJbmRleGVkREIpLENiPVtcIm1hcFwiLFwiY3R4XCIsXCJ0YWdcIixcInJlZ1wiLFwiY2ZnXCJdLERiPUkoKTtcbmZ1bmN0aW9uIEViKGEsYz17fSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1FYilyZXR1cm4gbmV3IEViKGEsYyk7dHlwZW9mIGE9PT1cIm9iamVjdFwiJiYoYz1hLGE9YS5uYW1lKTthfHxjb25zb2xlLmluZm8oXCJEZWZhdWx0IHN0b3JhZ2Ugc3BhY2Ugd2FzIHVzZWQsIGJlY2F1c2UgYSBuYW1lIHdhcyBub3QgcGFzc2VkLlwiKTt0aGlzLmlkPVwiZmxleHNlYXJjaFwiKyhhP1wiOlwiK2EudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV9cXC1dL2csXCJcIik6XCJcIik7dGhpcy5maWVsZD1jLmZpZWxkP2MuZmllbGQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV9cXC1dL2csXCJcIik6XCJcIjt0aGlzLnR5cGU9Yy50eXBlO3RoaXMuZmFzdHVwZGF0ZT10aGlzLnN1cHBvcnRfdGFnX3NlYXJjaD0hMTt0aGlzLmRiPW51bGw7dGhpcy5oPXt9fXc9RWIucHJvdG90eXBlO3cubW91bnQ9ZnVuY3Rpb24oYSl7aWYoYS5pbmRleClyZXR1cm4gYS5tb3VudCh0aGlzKTthLmRiPXRoaXM7cmV0dXJuIHRoaXMub3BlbigpfTtcbncub3Blbj1mdW5jdGlvbigpe2lmKHRoaXMuZGIpcmV0dXJuIHRoaXMuZGI7bGV0IGE9dGhpcztuYXZpZ2F0b3Iuc3RvcmFnZSYmbmF2aWdhdG9yLnN0b3JhZ2UucGVyc2lzdCYmbmF2aWdhdG9yLnN0b3JhZ2UucGVyc2lzdCgpO0RiW2EuaWRdfHwoRGJbYS5pZF09W10pO0RiW2EuaWRdLnB1c2goYS5maWVsZCk7Y29uc3QgYz1CYi5vcGVuKGEuaWQsMSk7Yy5vbnVwZ3JhZGVuZWVkZWQ9ZnVuY3Rpb24oKXtjb25zdCBiPWEuZGI9dGhpcy5yZXN1bHQ7Zm9yKGxldCBlPTAsZDtlPENiLmxlbmd0aDtlKyspe2Q9Q2JbZV07Zm9yKGxldCBmPTAsZztmPERiW2EuaWRdLmxlbmd0aDtmKyspZz1EYlthLmlkXVtmXSxiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZCsoZCE9PVwicmVnXCI/Zz9cIjpcIitnOlwiXCI6XCJcIikpfHxiLmNyZWF0ZU9iamVjdFN0b3JlKGQrKGQhPT1cInJlZ1wiP2c/XCI6XCIrZzpcIlwiOlwiXCIpKX19O3JldHVybiBhLmRiPVooYyxmdW5jdGlvbihiKXthLmRiPWI7YS5kYi5vbnZlcnNpb25jaGFuZ2U9XG5mdW5jdGlvbigpe2EuY2xvc2UoKX19KX07dy5jbG9zZT1mdW5jdGlvbigpe3RoaXMuZGImJnRoaXMuZGIuY2xvc2UoKTt0aGlzLmRiPW51bGx9O3cuZGVzdHJveT1mdW5jdGlvbigpe2NvbnN0IGE9QmIuZGVsZXRlRGF0YWJhc2UodGhpcy5pZCk7cmV0dXJuIFooYSl9O3cuY2xlYXI9ZnVuY3Rpb24oKXtjb25zdCBhPVtdO2ZvcihsZXQgYj0wLGU7YjxDYi5sZW5ndGg7YisrKXtlPUNiW2JdO2ZvcihsZXQgZD0wLGY7ZDxEYlt0aGlzLmlkXS5sZW5ndGg7ZCsrKWY9RGJbdGhpcy5pZF1bZF0sYS5wdXNoKGUrKGUhPT1cInJlZ1wiP2Y/XCI6XCIrZjpcIlwiOlwiXCIpKX1jb25zdCBjPXRoaXMuZGIudHJhbnNhY3Rpb24oYSxcInJlYWR3cml0ZVwiKTtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyljLm9iamVjdFN0b3JlKGFbYl0pLmNsZWFyKCk7cmV0dXJuIFooYyl9O1xudy5nZXQ9ZnVuY3Rpb24oYSxjLGI9MCxlPTAsZD0hMCxmPSExKXthPXRoaXMuZGIudHJhbnNhY3Rpb24oKGM/XCJjdHhcIjpcIm1hcFwiKSsodGhpcy5maWVsZD9cIjpcIit0aGlzLmZpZWxkOlwiXCIpLFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoKGM/XCJjdHhcIjpcIm1hcFwiKSsodGhpcy5maWVsZD9cIjpcIit0aGlzLmZpZWxkOlwiXCIpKS5nZXQoYz9jK1wiOlwiK2E6YSk7Y29uc3QgZz10aGlzO3JldHVybiBaKGEpLnRoZW4oZnVuY3Rpb24oayl7bGV0IGg9W107aWYoIWt8fCFrLmxlbmd0aClyZXR1cm4gaDtpZihkKXtpZighYiYmIWUmJmsubGVuZ3RoPT09MSlyZXR1cm4ga1swXTtmb3IobGV0IGw9MCxtO2w8ay5sZW5ndGg7bCsrKWlmKChtPWtbbF0pJiZtLmxlbmd0aCl7aWYoZT49bS5sZW5ndGgpe2UtPW0ubGVuZ3RoO2NvbnRpbnVlfWNvbnN0IHA9Yj9lK01hdGgubWluKG0ubGVuZ3RoLWUsYik6bS5sZW5ndGg7Zm9yKGxldCB1PWU7dTxwO3UrKyloLnB1c2gobVt1XSk7ZT0wO2lmKGgubGVuZ3RoPT09YilicmVha31yZXR1cm4gZj9cbmcuZW5yaWNoKGgpOmh9cmV0dXJuIGt9KX07dy50YWc9ZnVuY3Rpb24oYSxjPTAsYj0wLGU9ITEpe2E9dGhpcy5kYi50cmFuc2FjdGlvbihcInRhZ1wiKyh0aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIiksXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcInRhZ1wiKyh0aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIikpLmdldChhKTtjb25zdCBkPXRoaXM7cmV0dXJuIFooYSkudGhlbihmdW5jdGlvbihmKXtpZighZnx8IWYubGVuZ3RofHxiPj1mLmxlbmd0aClyZXR1cm5bXTtpZighYyYmIWIpcmV0dXJuIGY7Zj1mLnNsaWNlKGIsYitjKTtyZXR1cm4gZT9kLmVucmljaChmKTpmfSl9O1xudy5lbnJpY2g9ZnVuY3Rpb24oYSl7dHlwZW9mIGEhPT1cIm9iamVjdFwiJiYoYT1bYV0pO2NvbnN0IGM9dGhpcy5kYi50cmFuc2FjdGlvbihcInJlZ1wiLFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJyZWdcIiksYj1bXTtmb3IobGV0IGU9MDtlPGEubGVuZ3RoO2UrKyliW2VdPVooYy5nZXQoYVtlXSkpO3JldHVybiBQcm9taXNlLmFsbChiKS50aGVuKGZ1bmN0aW9uKGUpe2ZvcihsZXQgZD0wO2Q8ZS5sZW5ndGg7ZCsrKWVbZF09e2lkOmFbZF0sZG9jOmVbZF0/SlNPTi5wYXJzZShlW2RdKTpudWxsfTtyZXR1cm4gZX0pfTt3Lmhhcz1mdW5jdGlvbihhKXthPXRoaXMuZGIudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwicmVnXCIpLmdldEtleShhKTtyZXR1cm4gWihhKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiEhY30pfTt3LnNlYXJjaD1udWxsO3cuaW5mbz1mdW5jdGlvbigpe307XG53LnRyYW5zYWN0aW9uPWZ1bmN0aW9uKGEsYyxiKXthKz1hIT09XCJyZWdcIj90aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIjpcIlwiO2xldCBlPXRoaXMuaFthK1wiOlwiK2NdO2lmKGUpcmV0dXJuIGIuY2FsbCh0aGlzLGUpO2xldCBkPXRoaXMuZGIudHJhbnNhY3Rpb24oYSxjKTt0aGlzLmhbYStcIjpcIitjXT1lPWQub2JqZWN0U3RvcmUoYSk7Y29uc3QgZj1iLmNhbGwodGhpcyxlKTt0aGlzLmhbYStcIjpcIitjXT1udWxsO3JldHVybiBaKGQpLmZpbmFsbHkoZnVuY3Rpb24oKXtyZXR1cm4gZn0pfTtcbncuY29tbWl0PWFzeW5jIGZ1bmN0aW9uKGEpe2xldCBjPWEuY29tbWl0X3Rhc2ssYj1bXTthLmNvbW1pdF90YXNrPVtdO2ZvcihsZXQgZT0wLGQ7ZTxjLmxlbmd0aDtlKyspZD1jW2VdLGQuZGVsJiZiLnB1c2goZC5kZWwpO2IubGVuZ3RoJiZhd2FpdCB0aGlzLnJlbW92ZShiKTthLnJlZy5zaXplJiYoYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcIm1hcFwiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5tYXApe2NvbnN0IGY9ZFswXSxnPWRbMV07Zy5sZW5ndGgmJihlLmdldChmKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtsZXQgaz10aGlzLnJlc3VsdDt2YXIgaDtpZihrJiZrLmxlbmd0aCl7Y29uc3QgbD1NYXRoLm1heChrLmxlbmd0aCxnLmxlbmd0aCk7Zm9yKGxldCBtPTAscCx1O208bDttKyspaWYoKHU9Z1ttXSkmJnUubGVuZ3RoKXtpZigocD1rW21dKSYmcC5sZW5ndGgpZm9yKGg9MDtoPHUubGVuZ3RoO2grKylwLnB1c2godVtoXSk7ZWxzZSBrW21dPXU7aD1cbjF9fWVsc2Ugaz1nLGg9MTtoJiZlLnB1dChrLGYpfSl9fSksYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcImN0eFwiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5jdHgpe2NvbnN0IGY9ZFswXSxnPWRbMV07Zm9yKGNvbnN0IGsgb2YgZyl7Y29uc3QgaD1rWzBdLGw9a1sxXTtsLmxlbmd0aCYmKGUuZ2V0KGYrXCI6XCIraCkub25zdWNjZXNzPWZ1bmN0aW9uKCl7bGV0IG09dGhpcy5yZXN1bHQ7dmFyIHA7aWYobSYmbS5sZW5ndGgpe2NvbnN0IHU9TWF0aC5tYXgobS5sZW5ndGgsbC5sZW5ndGgpO2ZvcihsZXQgcj0wLHQsbjtyPHU7cisrKWlmKChuPWxbcl0pJiZuLmxlbmd0aCl7aWYoKHQ9bVtyXSkmJnQubGVuZ3RoKWZvcihwPTA7cDxuLmxlbmd0aDtwKyspdC5wdXNoKG5bcF0pO2Vsc2UgbVtyXT1uO3A9MX19ZWxzZSBtPWwscD0xO3AmJmUucHV0KG0sZitcIjpcIitoKX0pfX19KSxhLnN0b3JlP2F3YWl0IHRoaXMudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWR3cml0ZVwiLFxuZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5zdG9yZSl7Y29uc3QgZj1kWzBdLGc9ZFsxXTtlLnB1dCh0eXBlb2YgZz09PVwib2JqZWN0XCI/SlNPTi5zdHJpbmdpZnkoZyk6MSxmKX19KTphLmJ5cGFzc3x8YXdhaXQgdGhpcy50cmFuc2FjdGlvbihcInJlZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5yZWcua2V5cygpKWUucHV0KDEsZCl9KSxhLnRhZyYmYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcInRhZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS50YWcpe2NvbnN0IGY9ZFswXSxnPWRbMV07Zy5sZW5ndGgmJihlLmdldChmKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtsZXQgaz10aGlzLnJlc3VsdDtrPWsmJmsubGVuZ3RoP2suY29uY2F0KGcpOmc7ZS5wdXQoayxmKX0pfX0pLGEubWFwLmNsZWFyKCksYS5jdHguY2xlYXIoKSxhLnRhZyYmYS50YWcuY2xlYXIoKSxhLnN0b3JlJiZhLnN0b3JlLmNsZWFyKCksYS5kb2N1bWVudHx8XG5hLnJlZy5jbGVhcigpKX07ZnVuY3Rpb24gRmIoYSxjLGIpe2NvbnN0IGU9YS52YWx1ZTtsZXQgZCxmPTA7Zm9yKGxldCBnPTAsaztnPGUubGVuZ3RoO2crKyl7aWYoaz1iP2U6ZVtnXSl7Zm9yKGxldCBoPTAsbCxtO2g8Yy5sZW5ndGg7aCsrKWlmKG09Y1toXSxsPWsuaW5kZXhPZihtKSxsPj0wKWlmKGQ9MSxrLmxlbmd0aD4xKWsuc3BsaWNlKGwsMSk7ZWxzZXtlW2ddPVtdO2JyZWFrfWYrPWsubGVuZ3RofWlmKGIpYnJlYWt9Zj9kJiZhLnVwZGF0ZShlKTphLmRlbGV0ZSgpO2EuY29udGludWUoKX1cbncucmVtb3ZlPWZ1bmN0aW9uKGEpe3R5cGVvZiBhIT09XCJvYmplY3RcIiYmKGE9W2FdKTtyZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMudHJhbnNhY3Rpb24oXCJtYXBcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGMpe2Mub3BlbkN1cnNvcigpLm9uc3VjY2Vzcz1mdW5jdGlvbigpe2NvbnN0IGI9dGhpcy5yZXN1bHQ7YiYmRmIoYixhKX19KSx0aGlzLnRyYW5zYWN0aW9uKFwiY3R4XCIsXCJyZWFkd3JpdGVcIixmdW5jdGlvbihjKXtjLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtjb25zdCBiPXRoaXMucmVzdWx0O2ImJkZiKGIsYSl9fSksdGhpcy50cmFuc2FjdGlvbihcInRhZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oYyl7Yy5vcGVuQ3Vyc29yKCkub25zdWNjZXNzPWZ1bmN0aW9uKCl7Y29uc3QgYj10aGlzLnJlc3VsdDtiJiZGYihiLGEsITApfX0pLHRoaXMudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGMpe2ZvcihsZXQgYj0wO2I8YS5sZW5ndGg7YisrKWMuZGVsZXRlKGFbYl0pfSldKX07XG5mdW5jdGlvbiBaKGEsYyl7cmV0dXJuIG5ldyBQcm9taXNlKChiLGUpPT57YS5vbnN1Y2Nlc3M9YS5vbmNvbXBsZXRlPWZ1bmN0aW9uKCl7YyYmYyh0aGlzLnJlc3VsdCk7Yz1udWxsO2IodGhpcy5yZXN1bHQpfTthLm9uZXJyb3I9YS5vbmJsb2NrZWQ9ZTthPW51bGx9KX07ZXhwb3J0IGRlZmF1bHQge0luZGV4OlQsQ2hhcnNldDp2YSxFbmNvZGVyOmthLERvY3VtZW50Ok5hLFdvcmtlcjpMYSxSZXNvbHZlcjpYLEluZGV4ZWREQjpFYixMYW5ndWFnZTp7fX07XG5leHBvcnQgY29uc3QgSW5kZXg9VDtleHBvcnQgY29uc3QgQ2hhcnNldD12YTtleHBvcnQgY29uc3QgRW5jb2Rlcj1rYTtleHBvcnQgY29uc3QgRG9jdW1lbnQ9TmE7ZXhwb3J0IGNvbnN0IFdvcmtlcj1MYTtleHBvcnQgY29uc3QgUmVzb2x2ZXI9WDtleHBvcnQgY29uc3QgSW5kZXhlZERCPUViO2V4cG9ydCBjb25zdCBMYW5ndWFnZT17fTsiLCAiLyohXHJcbiAqIEZsZXhTZWFyY2ggZm9yIEJvb3RzdHJhcCBiYXNlZCBUaHVsaXRlIHNpdGVzXHJcbiAqIENvcHlyaWdodCAyMDIxLTIwMjQgVGh1bGl0ZVxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zyam8vaHVnby10aGVtZS16ZW4vYmxvYi9tYWluL2Fzc2V0cy9qcy9zZWFyY2guanNcclxuICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiwgZ3VhcmQtZm9yLWluICovXHJcblxyXG4vKipcclxuICogQGZpbGVcclxuICogQSBKYXZhU2NyaXB0IGZpbGUgZm9yIGZsZXhzZWFyY2guXHJcbiAqL1xyXG5cclxuLy8gaW1wb3J0ICogYXMgRmxleFNlYXJjaCBmcm9tICdmbGV4c2VhcmNoJztcclxuaW1wb3J0IEluZGV4IGZyb20gJ2ZsZXhzZWFyY2gnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBjb25zdCBpbmRleCA9IG5ldyBGbGV4U2VhcmNoLkRvY3VtZW50KHtcclxuICBjb25zdCBpbmRleCA9IG5ldyBJbmRleC5Eb2N1bWVudCh7XHJcbiAgICB0b2tlbml6ZTogJ2ZvcndhcmQnLFxyXG4gICAgZG9jdW1lbnQ6IHtcclxuICAgICAgaWQ6ICdpZCcsXHJcbiAgICAgIGluZGV4OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6ICd0aXRsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAndGFncydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAnY29udGVudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAgJ2RhdGUnLFxyXG4gICAgICAgICAgdG9rZW5pemU6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgZW5jb2RlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgc3RvcmU6IFsndGl0bGUnLCdzdW1tYXJ5JywnZGF0ZScsJ3Blcm1hbGluayddXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dSZXN1bHRzKGl0ZW1zKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJykuY29udGVudDtcclxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgIHJlc3VsdHMudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBjb25zdCBpdGVtc0xlbmd0aCA9IE9iamVjdC5rZXlzKGl0ZW1zKS5sZW5ndGg7XHJcblxyXG4gICAgLy8gU2hvdy9oaWRlIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgYW5kIFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlc1xyXG4gICAgaWYgKChpdGVtc0xlbmd0aCA9PT0gMCkgJiYgKHF1ZXJ5LnZhbHVlID09PSAnJykpIHtcclxuICAgICAgLy8gSGlkZSBcIk5vIHNlYXJjaCByZXN1bHRzXCIgbWVzc2FnZVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgLy8gU2hvdyBcIk5vIHJlY2VudCBzZWFyY2hlc1wiIG1lc3NhZ2VcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZWNlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH0gZWxzZSBpZiAoKGl0ZW1zTGVuZ3RoID09PSAwKSAmJiAocXVlcnkudmFsdWUgIT09ICcnKSkge1xyXG4gICAgICAvLyBIaWRlIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgbWVzc2FnZVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAvLyBTaG93IFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHF1ZXJ5Tm9SZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXJ5LW5vLXJlc3VsdHMnKTtcclxuICAgICAgcXVlcnlOb1Jlc3VsdHMuaW5uZXJUZXh0ID0gcXVlcnkudmFsdWU7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVzdWx0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGlkZSBib3RoIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgYW5kIFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlc1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGlkIGluIGl0ZW1zKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpZF07XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgY29uc3QgYSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSByZXN1bHQucXVlcnlTZWxlY3RvcigndGltZScpO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgIGEuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcclxuICAgICAgYS5ocmVmID0gaXRlbS5wZXJtYWxpbms7XHJcbiAgICAgIHRpbWUuaW5uZXJUZXh0ID0gaXRlbS5kYXRlO1xyXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IGl0ZW0uc3VtbWFyeTtcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHRzLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRvU2VhcmNoKCkge1xyXG4gICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRleHQnKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBsaW1pdCA9IDk5O1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGluZGV4LnNlYXJjaCh7XHJcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcclxuICAgICAgZW5yaWNoOiB0cnVlLFxyXG4gICAgICBsaW1pdDogbGltaXQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGl0ZW1zID0ge307XHJcblxyXG4gICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgcmVzdWx0LnJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgaXRlbXNbci5pZF0gPSByLmRvYztcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93UmVzdWx0cyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmFibGVVSSgpIHtcclxuICAgIGNvbnN0IHNlYXJjaGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm0nKTtcclxuICAgIHNlYXJjaGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb1NlYXJjaCgpO1xyXG4gICAgfSk7XHJcbiAgICBzZWFyY2hmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb1NlYXJjaCgpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvYWRpbmcnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtdGV4dCcpLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBidWlsZEluZGV4KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2FkaW5nJykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vaXJhbWF0LmdpdGh1Yi5pby9hbG1hY2lyL3NlYXJjaC1pbmRleC5qc29uXCIpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpbmRleC5hZGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRJbmRleCgpO1xyXG4gIGVuYWJsZVVJKCk7XHJcbn0pKCk7XHJcbiJd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LEVBQUUsS0FBSyxFQUFFLElBQUU7QUFBRSxZQUFHO0FBQUMsZUFBSyxRQUFNLElBQUksT0FBTyxPQUFLLElBQUUsTUFBSSxNQUFJLElBQUUsTUFBSyxHQUFHO0FBQUEsUUFBQyxTQUFPLEdBQUU7QUFBQyxlQUFLLFFBQU07QUFBQSxRQUFLO0FBQUEsTUFBQyxNQUFNLE1BQUssUUFBTSxHQUFFLElBQUUsTUFBSSxTQUFJLE1BQU0sTUFBTSxDQUFDLEVBQUUsU0FDM2Y7QUFBRSxXQUFLLFVBQVEsRUFBRSxFQUFFLFNBQVEsQ0FBQztBQUFBLElBQUMsT0FBSztBQUFDLFVBQUc7QUFBQyxhQUFLLFFBQU0sRUFBRSxLQUFLLE9BQU0sRUFBRTtBQUFBLE1BQUMsU0FBTyxHQUFFO0FBQUMsYUFBSyxRQUFNO0FBQUEsTUFBSztBQUFDLFdBQUssVUFBUSxFQUFFLEVBQUUsU0FBUSxFQUFFLEtBQUssU0FBUSxJQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsU0FBSyxVQUFRLEVBQUUsRUFBRSxTQUFRLE1BQUssS0FBSyxPQUFPO0FBQUUsU0FBSyxXQUFTLEVBQUUsRUFBRSxVQUFTLE1BQUssS0FBSyxRQUFRO0FBQUUsUUFBRSxFQUFFO0FBQU8sU0FBSyxTQUFPLE9BQU8sTUFBSSxhQUFXLElBQUUsRUFBRSxLQUFHLElBQUksSUFBSSxDQUFDLEdBQUUsTUFBSyxLQUFLLE1BQU07QUFBRSxTQUFLLFNBQU8sRUFBRSxFQUFFLFFBQU8sTUFBRyxLQUFLLE1BQU07QUFBRSxTQUFLLFVBQVEsR0FBRyxJQUFFLEVBQUUsWUFBVSxJQUFJLElBQUksQ0FBQyxHQUFFLE1BQUssS0FBSyxPQUFPO0FBQUUsU0FBSyxTQUFPLEdBQUcsSUFBRSxFQUFFLFdBQVMsSUFBSSxJQUFJLENBQUMsR0FBRSxNQUFLLEtBQUssTUFBTTtBQUFFLFNBQUssVUFBUTtBQUFBLE9BQUcsSUFBRSxFQUFFLFlBQVUsSUFBSSxJQUFJLENBQUM7QUFBQSxNQUN6ZjtBQUFBLE1BQUssS0FBSztBQUFBLElBQU87QUFBRSxTQUFLLFdBQVMsRUFBRSxFQUFFLFVBQVMsTUFBSyxLQUFLLFFBQVE7QUFBRSxTQUFLLFlBQVUsRUFBRSxFQUFFLFdBQVUsR0FBRSxLQUFLLFNBQVM7QUFBRSxTQUFLLFlBQVUsRUFBRSxFQUFFLFdBQVUsTUFBSyxLQUFLLFNBQVM7QUFBRSxTQUFLLE1BQUksRUFBRSxFQUFFLEtBQUksT0FBRyxLQUFLLEdBQUc7QUFBRSxRQUFHLEtBQUssUUFBTSxJQUFFLEVBQUUsRUFBRSxPQUFNLE1BQUcsS0FBSyxLQUFLLEVBQUUsTUFBSyxJQUFFLE1BQUssS0FBSyxJQUFFLE9BQU8sTUFBSSxXQUFTLElBQUUsS0FBSSxLQUFLLElBQUUsb0JBQUksT0FBSSxLQUFLLElBQUUsb0JBQUksT0FBSSxLQUFLLElBQUUsS0FBSyxJQUFFO0FBQUksU0FBSyxJQUFFO0FBQUcsU0FBSyxJQUFFO0FBQUssU0FBSyxJQUFFO0FBQUcsU0FBSyxJQUFFO0FBQUssUUFBRyxLQUFLLFFBQVEsWUFBVSxLQUFLLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBSyxNQUFJLEtBQUssSUFBRSxNQUFJLE1BQUk7QUFBRSxRQUFHLEtBQUssUUFBUSxZQUFVLEtBQUssS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFLLE1BQ3ZmLEtBQUssSUFBRSxNQUFJLE1BQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsYUFBVyxTQUFTLEdBQUUsR0FBRTtBQUFDLFNBQUssWUFBVSxLQUFLLFVBQVEsb0JBQUk7QUFBSyxTQUFLLFFBQVEsSUFBSSxHQUFFLENBQUM7QUFBRSxTQUFLLE1BQUksS0FBSyxJQUFFLE1BQUksTUFBSTtBQUFFLFNBQUssSUFBRTtBQUFLLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsWUFBVSxTQUFTLEdBQUU7QUFBQyxXQUFPLE1BQUksYUFBVyxLQUFLLFNBQU8sS0FBRyxLQUFLLFdBQVMsS0FBSyxTQUFPLG9CQUFJLFFBQUssS0FBSyxPQUFPLElBQUksQ0FBQztBQUFHLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUMvVSxJQUFFLFlBQVUsU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFHLE9BQU8sTUFBSSxTQUFTLFFBQU8sS0FBSyxZQUFZLEdBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxTQUFPLEVBQUUsUUFBTyxLQUFLLFdBQVcsR0FBRSxDQUFDO0FBQUUsU0FBSyxXQUFTLEtBQUssU0FBTyxvQkFBSTtBQUFLLFNBQUssT0FBTyxJQUFJLEdBQUUsQ0FBQztBQUFFLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsYUFBVyxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUcsT0FBTyxNQUFJLFNBQVMsUUFBTyxLQUFLLFlBQVksR0FBRSxDQUFDO0FBQUUsUUFBRyxFQUFFLFNBQU8sTUFBSSxLQUFLLFVBQVEsS0FBSyxRQUFRLFFBQU8sS0FBSyxVQUFVLEdBQUUsQ0FBQztBQUFFLFNBQUssWUFBVSxLQUFLLFVBQVEsb0JBQUk7QUFBSyxTQUFLLFFBQVEsSUFBSSxHQUFFLENBQUM7QUFBRSxTQUFLLE1BQUksS0FBSyxJQUFFLE1BQUksTUFBSTtBQUFFLFNBQUssSUFBRTtBQUFLLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUNyZSxJQUFFLGNBQVksU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFHLE9BQU8sTUFBSSxTQUFTLFFBQU8sS0FBSyxXQUFXLEdBQUUsQ0FBQztBQUFFLFNBQUssYUFBVyxLQUFLLFdBQVMsQ0FBQztBQUFHLFNBQUssU0FBUyxLQUFLLEdBQUUsQ0FBQztBQUFFLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUN4SyxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFHLEtBQUssU0FBTyxFQUFFLFVBQVEsS0FBSyxFQUFFLEtBQUcsS0FBSyxHQUFFO0FBQUMsVUFBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsUUFBTyxLQUFLLEVBQUUsSUFBSSxDQUFDO0FBQUEsSUFBQyxNQUFNLE1BQUssSUFBRSxXQUFXLEdBQUUsSUFBRyxJQUFJO0FBQUUsU0FBSyxjQUFZLE9BQU8sS0FBSyxjQUFZLGFBQVcsSUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFFLElBQUUsS0FBRyxFQUFFLFVBQVUsTUFBTSxFQUFFLFFBQVEsSUFBRyxFQUFFLEVBQUUsWUFBWSxJQUFFLEVBQUUsWUFBWTtBQUFHLFNBQUssWUFBVSxJQUFFLEtBQUssUUFBUSxDQUFDO0FBQUcsU0FBSyxXQUFTLEVBQUUsU0FBTyxNQUFJLElBQUUsRUFBRSxRQUFRLElBQUcsT0FBTyxFQUFFLFFBQVEsSUFBRyxPQUFPLEVBQUUsUUFBUSxJQUFHLEtBQUs7QUFBRyxVQUFNLElBQUUsRUFBRSxLQUFLLFVBQVEsS0FBSyxVQUFRLEtBQUssVUFBUSxLQUFLLFdBQVMsS0FBSyxXQUFTLEtBQUs7QUFBVSxRQUFJLElBQ3JmLENBQUMsR0FBRSxJQUFFLEVBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxLQUFLLFNBQU8sS0FBSyxVQUFRLEtBQUcsRUFBRSxNQUFNLEtBQUssS0FBSyxJQUFFLENBQUMsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE1BQUksSUFBRSxJQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsRUFBRSxTQUFPLEtBQUssYUFBVyxFQUFFLFNBQU8sS0FBSyxZQUFXO0FBQUMsVUFBRyxHQUFFO0FBQUMsWUFBRyxFQUFFLENBQUMsRUFBRTtBQUFTLFVBQUUsQ0FBQyxJQUFFO0FBQUEsTUFBQyxPQUFLO0FBQUMsWUFBRyxNQUFJLEVBQUU7QUFBUyxZQUFFO0FBQUEsTUFBQztBQUFDLFVBQUcsRUFBRSxHQUFFLEtBQUssQ0FBQztBQUFBLGVBQVUsQ0FBQyxLQUFLLFdBQVMsT0FBTyxLQUFLLFdBQVMsYUFBVyxLQUFLLE9BQU8sQ0FBQyxJQUFFLENBQUMsS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFHO0FBQUMsWUFBRyxLQUFLLFNBQU8sRUFBRSxVQUFRLEtBQUssRUFBRSxLQUFHLEtBQUssR0FBRTtBQUFDLGNBQUksSUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0FBQUUsY0FBRyxLQUFHLE1BQUksSUFBRztBQUFDLGlCQUFHLEVBQUUsS0FBSyxDQUFDO0FBQUU7QUFBQSxVQUFRO0FBQUEsUUFBQyxNQUFNLE1BQUssSUFBRSxXQUFXLEdBQUUsSUFBRyxJQUFJO0FBQUUsWUFBRyxLQUFLLFNBQVE7QUFBQyxlQUFLLE1BQUksS0FBSyxJQUFFLElBQUksT0FBTyxXQUM1ZixLQUFLLElBQUUsSUFBSTtBQUFHLGNBQUk7QUFBRSxpQkFBSyxNQUFJLEtBQUcsRUFBRSxTQUFPLElBQUcsS0FBRSxHQUFFLElBQUUsRUFBRSxRQUFRLEtBQUssR0FBRSxPQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQztBQUFBLFFBQUM7QUFBQyxZQUFHLE1BQUksS0FBSyxVQUFRLEtBQUssVUFBUSxFQUFFLFNBQU8sSUFBRztBQUFDLGNBQUU7QUFBRyxtQkFBUSxJQUFFLEdBQUUsSUFBRSxJQUFHLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxNQUFJLEtBQUcsS0FBSyxZQUFVLElBQUUsS0FBSyxVQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsTUFBSSxNQUFJLEtBQUcsTUFBSSxLQUFHLEtBQUssVUFBUSxFQUFFLElBQUUsT0FBSyxLQUFHLEtBQUcsS0FBRyxJQUFFO0FBQUcsY0FBRTtBQUFBLFFBQUM7QUFBQyxhQUFLLFdBQVMsRUFBRSxTQUFPLE1BQUksS0FBSyxNQUFJLEtBQUssSUFBRSxJQUFJLE9BQU8sTUFBSSxLQUFLLElBQUUsS0FBSSxHQUFHLElBQUcsSUFBRSxFQUFFLFFBQVEsS0FBSyxHQUFFLE9BQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDO0FBQUcsWUFBRyxLQUFHLEtBQUssU0FBUyxNQUFJLElBQUUsR0FBRSxLQUFHLElBQUUsS0FBSyxTQUFTLFFBQU8sS0FBRyxFQUFFLEtBQUUsRUFBRTtBQUFBLFVBQVEsS0FBSyxTQUFTLENBQUM7QUFBQSxVQUM3ZixLQUFLLFNBQVMsSUFBRSxDQUFDO0FBQUEsUUFBQztBQUFFLGFBQUssU0FBTyxFQUFFLFVBQVEsS0FBSyxNQUFJLEtBQUssRUFBRSxJQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUssRUFBRSxPQUFLLEtBQUssTUFBSSxLQUFLLEVBQUUsTUFBTSxHQUFFLEtBQUssSUFBRSxLQUFLLElBQUUsTUFBSTtBQUFJLFlBQUcsR0FBRTtBQUFDLGNBQUcsTUFBSSxFQUFFLEtBQUcsR0FBRTtBQUFDLGdCQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQVMsY0FBRSxDQUFDLElBQUU7QUFBQSxVQUFDLE9BQUs7QUFBQyxnQkFBRyxNQUFJLEVBQUU7QUFBUyxnQkFBRTtBQUFBLFVBQUM7QUFBQyxZQUFFLEtBQUssQ0FBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssYUFBVyxJQUFFLEtBQUssU0FBUyxDQUFDLEtBQUc7QUFBRyxTQUFLLFNBQU8sRUFBRSxVQUFRLEtBQUssTUFBSSxLQUFLLEVBQUUsSUFBSSxHQUFFLENBQUMsR0FBRSxLQUFLLEVBQUUsT0FBSyxLQUFLLE1BQUksS0FBSyxFQUFFLE1BQU0sR0FBRSxLQUFLLElBQUUsS0FBSyxJQUFFLE1BQUk7QUFBSSxXQUFPO0FBQUEsRUFBQztBQUFFLFdBQVMsRUFBRSxHQUFFO0FBQUMsTUFBRSxJQUFFO0FBQUssTUFBRSxFQUFFLE1BQU07QUFBRSxNQUFFLEVBQUUsTUFBTTtBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFJLEtBQUcsT0FBTyxNQUFJLFdBQVMsT0FBTyxNQUFJLGFBQVcsSUFBRSxHQUFFLElBQUUsS0FBRyxJQUFFO0FBQUcsVUFBSSxJQUFFLEVBQUUsU0FBTyxHQUFFLElBQUUsRUFBRSxTQUFPO0FBQUcsUUFBSSxJQUFFLE1BQUksS0FBRztBQUFHLFVBQUksTUFBSSxFQUFFLFVBQVEsS0FBRyxDQUFDLENBQUMsRUFBRSxVQUFRLENBQUMsQ0FBQyxFQUFFLFdBQVMsRUFBRSxZQUFVLFVBQUssRUFBRSxjQUFZLEtBQUssZUFBYSxFQUFFLFNBQU87QUFBSSxTQUFHLEtBQUcsR0FBRyxZQUFZO0FBQUUsU0FBSyxVQUFRLEtBQUssUUFBTSxJQUFJO0FBQUksUUFBSSxJQUFFLEtBQUssTUFBTSxJQUFJLElBQUUsQ0FBQztBQUFFLFFBQUcsQ0FBQyxHQUFFO0FBQUMsWUFBTSxJQUFFLEtBQUcsRUFBRTtBQUFNLFlBQUksRUFBRSxRQUFNO0FBQUksVUFBRSxLQUFLLE9BQU8sR0FBRSxHQUFFLENBQUM7QUFBRSxZQUFJLEVBQUUsUUFBTTtBQUFHLFdBQUssTUFBTSxJQUFJLElBQUUsR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFLLFFBQU0sS0FBRyxNQUFJLE9BQUcsSUFBRTtBQUFJLFNBQUssUUFBTSxvQkFBSTtBQUFJLFNBQUssSUFBRTtBQUFBLEVBQUU7QUFDNTRCLEtBQUcsVUFBVSxNQUFJLFNBQVMsR0FBRSxHQUFFO0FBQUMsU0FBSyxNQUFNLElBQUksS0FBSyxJQUFFLEdBQUUsQ0FBQztBQUFFLFNBQUssTUFBTSxPQUFLLEtBQUssU0FBTyxLQUFLLE1BQU0sT0FBTyxLQUFLLE1BQU0sS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBVSxNQUFJLFNBQVMsR0FBRTtBQUFDLFVBQU0sSUFBRSxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBQUUsU0FBRyxLQUFLLE1BQUksTUFBSSxLQUFLLE1BQU0sT0FBTyxDQUFDLEdBQUUsS0FBSyxNQUFNLElBQUksS0FBSyxJQUFFLEdBQUUsQ0FBQztBQUFHLFdBQU87QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFVLFNBQU8sU0FBUyxHQUFFO0FBQUMsZUFBVSxLQUFLLEtBQUssT0FBTTtBQUFDLFlBQU0sSUFBRSxFQUFFLENBQUM7QUFBRSxRQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBRyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBRSxLQUFHLFVBQVUsUUFBTSxXQUFVO0FBQUMsU0FBSyxNQUFNLE1BQU07QUFBRSxTQUFLLElBQUU7QUFBQSxFQUFFO0FBQUUsTUFBTSxLQUFHLEVBQUMsV0FBVSxPQUFHLFNBQVEsT0FBRyxRQUFPLE1BQUU7QUFBRSxNQUFNLEtBQUcsQ0FBQztBQUFFLE1BQU0sS0FBRyxvQkFBSSxJQUFJLENBQUMsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxDQUFDLENBQUM7QUFBRSxNQUFNLEtBQUcsb0JBQUksSUFBSSxDQUFDLENBQUMsTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLEdBQUcsR0FBRSxDQUFDLE1BQUssR0FBRyxHQUFFLENBQUMsTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLEdBQUcsR0FBRSxDQUFDLE1BQUssR0FBRyxHQUFFLENBQUMsTUFBSyxHQUFHLENBQUMsQ0FBQztBQUEvRixNQUFpRyxLQUFHLENBQUMsaUJBQWdCLFFBQU8sdUJBQXNCLFFBQU8sV0FBVSxJQUFJO0FBQUUsTUFBTSxLQUFHLEVBQUMsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsUUFBUyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFDO0FBQUUsTUFBSSxLQUFHLEVBQUMsT0FBTSxJQUFHLFNBQVEsSUFBRyxXQUFVLElBQUcsY0FBYSxFQUFDLFFBQU8sR0FBRSxHQUFFLGVBQWMsRUFBQyxRQUFPLElBQUcsU0FBUSxJQUFHLFVBQVMsR0FBRSxHQUFFLFlBQVcsRUFBQyxRQUFPLElBQUcsVUFBUyxHQUFHLE9BQU8sQ0FBQyxlQUFjLEVBQUUsQ0FBQyxHQUFFLFNBQVEsR0FBRSxHQUFFLGNBQWEsRUFBQyxRQUFPLE9BQUcsU0FBUSxFQUFDLFFBQU8sS0FBRSxHQUFFLFVBQVMsU0FBUyxHQUFFO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFJLElBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxJQUFFLEdBQUcsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFdBQVMsSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLE1BQUksT0FBSyxNQUFJLE9BQUssRUFBRSxJQUFFLEdBQUcsQ0FBQyxNQUFJLE1BQUksTUFBSSxLQUFHLEdBQUUsSUFBRSxHQUFFLEVBQUUsV0FBUyxLQUFJLElBQUk7QUFBQyxRQUFFLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQSxFQUFDLEVBQUMsR0FBRSxLQUFJLEVBQUMsT0FBTSxHQUFFLEdBQUUsWUFBVyxJQUFHLGNBQWEsSUFBRyxhQUFZLEdBQUU7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsS0FBRyxFQUFFLE9BQU8sTUFBRyxFQUFFO0FBQUEsU0FBVztBQUFDLFVBQUUsRUFBRSxJQUFFLFdBQVMsT0FBTyxFQUFFLEdBQUUsQ0FBQztBQUFFLFlBQU0sSUFBRSxFQUFFO0FBQU8sVUFBRyxNQUFJLElBQUUsRUFBRSxTQUFPLEVBQUUsT0FBTyxDQUFDLElBQUUsR0FBRSxLQUFHLEdBQUUsTUFBSSxFQUFFLFVBQVEsSUFBRyxDQUFDLEdBQUc7QUFBTSxVQUFFO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQy9vRCxXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLEtBQUssZ0JBQWMsR0FBRyxRQUFPLElBQUksR0FBRyxDQUFDO0FBQUUsU0FBSyxRQUFNLElBQUUsQ0FBQyxDQUFDLElBQUUsQ0FBQztBQUFFLFNBQUssU0FBTyxJQUFFLEVBQUUsU0FBTztBQUFFLFVBQU0sSUFBRTtBQUFLLFdBQU8sSUFBSSxNQUFNLENBQUMsR0FBRSxFQUFDLElBQUksR0FBRSxHQUFFO0FBQUMsVUFBRyxNQUFJLFNBQVMsUUFBTyxFQUFFO0FBQU8sVUFBRyxNQUFJLE9BQU8sUUFBTyxTQUFTLEdBQUU7QUFBQyxVQUFFLE1BQU0sRUFBRSxNQUFNLFNBQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUFFLFVBQUU7QUFBQSxNQUFRO0FBQUUsVUFBRyxNQUFJLE1BQU0sUUFBTyxXQUFVO0FBQUMsWUFBRyxFQUFFLE9BQU8sUUFBTyxFQUFFLFVBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFPLENBQUMsRUFBRSxJQUFJO0FBQUEsTUFBQztBQUFFLFVBQUcsTUFBSSxVQUFVLFFBQU8sU0FBUyxHQUFFO0FBQUMsWUFBSSxJQUFFO0FBQUUsaUJBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxRQUFPLEtBQUk7QUFBQyxjQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsY0FBRSxFQUFFLFFBQVEsQ0FBQztBQUFFLGNBQUcsS0FBRyxFQUFFLFFBQU8sSUFBRTtBQUFFLGVBQUcsRUFBRTtBQUFBLFFBQU07QUFBQyxlQUFNO0FBQUEsTUFBRTtBQUMxZixVQUFHLE1BQUksV0FBVyxRQUFPLFNBQVMsR0FBRTtBQUFDLGlCQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxRQUFPLElBQUksS0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQU07QUFBRyxlQUFNO0FBQUEsTUFBRTtBQUFFLFVBQUcsTUFBSSxRQUFRLFFBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxlQUFPLEdBQUcsR0FBRSxLQUFHLEdBQUUsS0FBRyxFQUFFLFFBQU8sS0FBRTtBQUFBLE1BQUM7QUFBRSxVQUFHLE1BQUksU0FBUyxRQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsZUFBTyxHQUFHLEdBQUUsS0FBRyxHQUFFLEtBQUcsRUFBRSxRQUFPLElBQUU7QUFBQSxNQUFDO0FBQUUsVUFBRyxNQUFJLGNBQWMsUUFBTztBQUFNLFVBQUcsT0FBTyxNQUFJLFNBQVMsU0FBTyxJQUFFLEVBQUUsTUFBTSxJQUFFLFNBQUcsTUFBRyxDQUFDLE1BQUksRUFBRSxDQUFDO0FBQUEsSUFBQyxHQUFFLElBQUksR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFFLElBQUUsU0FBRyxNQUFHO0FBQUUsT0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFJLEVBQUUsTUFBTSxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsSUFBRTtBQUFFLFFBQUU7QUFBUyxhQUFNO0FBQUEsSUFBRSxFQUFDLENBQUM7QUFBQSxFQUFDO0FBQUMsS0FBRyxVQUFVLFFBQU0sV0FBVTtBQUFDLFNBQUssTUFBTSxTQUFPO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBVSxPQUFLLFdBQVU7QUFBQSxFQUFDO0FBQzlmLFdBQVMsRUFBRSxJQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsUUFBTSxLQUFLLGdCQUFjLEVBQUUsUUFBTyxJQUFJLEVBQUUsQ0FBQztBQUFFLFNBQUssUUFBTSxFQUFFO0FBQUUsU0FBSyxJQUFFLENBQUM7QUFBRSxTQUFLLE9BQUs7QUFBRSxRQUFFLE1BQUksS0FBSyxJQUFFLElBQUcsS0FBSyxJQUFFLE9BQU8sQ0FBQyxNQUFJLEtBQUssSUFBRSxJQUFHLEtBQUssSUFBRTtBQUFBLEVBQUU7QUFBQyxJQUFFLFVBQVUsTUFBSSxTQUFTLEdBQUU7QUFBQyxVQUFNLElBQUUsS0FBSyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBRSxXQUFPLEtBQUcsRUFBRSxJQUFJLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFVLE1BQUksU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSyxFQUFFLENBQUM7QUFBRSxRQUFJLElBQUUsS0FBSyxNQUFNLENBQUM7QUFBRSxTQUFHLElBQUUsRUFBRSxNQUFLLEVBQUUsSUFBSSxHQUFFLENBQUMsSUFBRyxLQUFHLEVBQUUsU0FBTyxLQUFLLFdBQVMsS0FBSyxNQUFNLENBQUMsSUFBRSxJQUFFLG9CQUFJLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUUsS0FBSztBQUFBLEVBQU87QUFDelosV0FBUyxFQUFFLElBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLEtBQUssZ0JBQWMsRUFBRSxRQUFPLElBQUksRUFBRSxDQUFDO0FBQUUsU0FBSyxRQUFNLEVBQUU7QUFBRSxTQUFLLElBQUUsQ0FBQztBQUFFLFNBQUssT0FBSztBQUFFLFFBQUUsTUFBSSxLQUFLLElBQUUsSUFBRyxLQUFLLElBQUUsT0FBTyxDQUFDLE1BQUksS0FBSyxJQUFFLElBQUcsS0FBSyxJQUFFO0FBQUEsRUFBRTtBQUFDLElBQUUsVUFBVSxNQUFJLFNBQVMsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLLEVBQUUsQ0FBQztBQUFFLFFBQUksSUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFFLFNBQUcsSUFBRSxFQUFFLE1BQUssRUFBRSxJQUFJLENBQUMsSUFBRyxLQUFHLEVBQUUsU0FBTyxLQUFLLFdBQVMsS0FBSyxNQUFNLENBQUMsSUFBRSxJQUFFLG9CQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUUsS0FBSztBQUFBLEVBQU87QUFBRSxNQUFFLEVBQUU7QUFBVSxJQUFFLE1BQUksRUFBRSxVQUFVLE1BQUksU0FBUyxHQUFFO0FBQUMsVUFBTSxJQUFFLEtBQUssTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBTyxLQUFHLEVBQUUsSUFBSSxDQUFDO0FBQUEsRUFBQztBQUNyYSxJQUFFLFNBQU8sRUFBRSxVQUFVLFNBQU8sU0FBUyxHQUFFO0FBQUMsVUFBTSxJQUFFLEtBQUssTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsU0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFHLEtBQUs7QUFBQSxFQUFNO0FBQUUsSUFBRSxRQUFNLEVBQUUsVUFBVSxRQUFNLFdBQVU7QUFBQyxTQUFLLFFBQU0sRUFBRTtBQUFFLFNBQUssSUFBRSxDQUFDO0FBQUUsU0FBSyxPQUFLO0FBQUEsRUFBQztBQUFFLElBQUUsU0FBTyxFQUFFLFVBQVUsU0FBTyxhQUFXO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxLQUFLLEVBQUUsUUFBTyxJQUFJLFVBQVEsS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFNO0FBQUEsRUFBQztBQUFFLElBQUUsT0FBSyxFQUFFLFVBQVUsT0FBSyxhQUFXO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxLQUFLLEVBQUUsUUFBTyxJQUFJLFVBQVEsS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFNO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBUSxFQUFFLFVBQVUsVUFBUSxhQUFXO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxLQUFLLEVBQUUsUUFBTyxJQUFJLFVBQVEsS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFNO0FBQUEsRUFBQztBQUM1ZixXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxTQUFHLEtBQUssS0FBRTtBQUFFLFFBQUcsT0FBTyxLQUFHLFNBQVMsUUFBTyxJQUFFO0FBQUUsUUFBSSxJQUFFLEdBQUUsSUFBRSxLQUFLLElBQUU7QUFBRSxhQUFRLElBQUUsR0FB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QUFBLE1BQUM7QUFBQyxXQUFLLFdBQVMsS0FBSyxjQUFZLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBQSxJQUFFO0FBQUMsV0FBTztBQUFBLEVBQUk7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUcsTUFBSSxFQUFFLFNBQU8sRUFBRSxHQUFFLENBQUMsSUFBRSxLQUFHO0FBQUEsYUFBVSxFQUFFLEtBQUcsRUFBRSxnQkFBYyxNQUFNLE1BQUksSUFBRSxFQUFFLENBQUMsSUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsUUFBTyxLQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQzdjLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLElBQUUsRUFBRSxDQUFDLEVBQUUsS0FBRyxNQUFJLEVBQUUsU0FBTyxHQUFFO0FBQUMsVUFBRyxFQUFFLGdCQUFjLE9BQU07QUFBQyxZQUFHLEVBQUUsQ0FBQyxHQUFFO0FBQUMsZUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLElBQUksR0FBRSxFQUFFLENBQUMsR0FBRSxNQUFHLElBQUU7QUFBRTtBQUFBLFFBQU07QUFBQyxZQUFFLEVBQUUsS0FBSyxHQUFHO0FBQUEsTUFBQztBQUFDLFFBQUUsSUFBSSxHQUFFLEdBQUUsR0FBRSxJQUFFO0FBQUEsSUFBQyxXQUFTLEVBQUUsZ0JBQWMsTUFBTSxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsUUFBTyxLQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsRUFBRSxPQUFPLFFBQU87QUFBRSxRQUFHLEVBQUUsV0FBUyxFQUFFLFFBQU8sSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEtBQUcsRUFBRSxTQUFPLElBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLElBQUUsR0FBRSxJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUMsSUFBRTtBQUFFLFFBQUksSUFBRSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBSSxJQUFFLEVBQUUsQ0FBQyxPQUFLLElBQUUsRUFBRSxTQUFRO0FBQUMsVUFBRyxHQUFFO0FBQUMsWUFBRyxLQUFHLEdBQUU7QUFBQyxlQUFHO0FBQUU7QUFBQSxRQUFRO0FBQUMsWUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUM7QUFBRSxZQUFFLEVBQUU7QUFBTyxZQUFFO0FBQUEsTUFBQztBQUFDLFVBQUUsTUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUcsVUFBRyxDQUFDLEVBQUUsVUFBUSxLQUFHLEVBQUUsUUFBTyxJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUMsSUFBRTtBQUFFLFFBQUUsS0FBSyxDQUFDO0FBQUUsV0FBRztBQUFFLFVBQUcsQ0FBQyxFQUFFO0FBQUEsSUFBSztBQUFDLFFBQUUsRUFBRSxTQUFPLElBQUUsQ0FBQyxFQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLFdBQU8sSUFBRSxHQUFHLEtBQUssTUFBSyxDQUFDLElBQUU7QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRyxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLFFBQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFFLENBQUM7QUFBRSxRQUFHLEVBQUUsTUFBSSxTQUFPLE1BQUksU0FBTyxFQUFFLE9BQU8sVUFBUSxFQUFFLFNBQU8sRUFBRSxTQUFTLFFBQU8sRUFBRSxTQUFPLE1BQUksSUFBRSxFQUFFLEVBQUUsU0FBTyxDQUFDLEtBQUksSUFBRSxFQUFFLFdBQVMsRUFBRSxTQUFPLEVBQUUsU0FBTztBQUFFLFFBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUUsU0FBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUU7QUFBQyxVQUFJLElBQUU7QUFBTyxVQUFHLEVBQUUsZ0JBQWMsRUFBRSxLQUFFLEVBQUUsU0FBTyxFQUFFO0FBQUEsZUFBZSxFQUFFLFFBQU0sRUFBRSxnQkFBYyxNQUFNLEtBQUU7QUFBQSxXQUFNO0FBQUMsWUFBRSxFQUFFLFNBQU87QUFBRSxZQUFFLEVBQUUsVUFBUTtBQUFFLFlBQUUsRUFBRTtBQUFRLFlBQUUsRUFBRTtBQUFRLGNBQUksSUFBRSxFQUFFLGFBQVcsRUFBRSxjQUFZLEVBQUUsV0FBUztBQUFFLFlBQUUsRUFBRTtBQUFNLFlBQUksSUFBRSxFQUFFLFNBQU8sR0FBRSxJQUFFLEVBQUUsT0FDbHJDLElBQUUsRUFBRTtBQUFNLFlBQUUsRUFBRSxVQUFRLEVBQUUsUUFBTSxLQUFHLElBQUUsRUFBRTtBQUFNLFlBQUcsS0FBRyxFQUFFLEtBQUk7QUFBQyxnQkFBTSxJQUFFLEVBQUUsU0FBTyxFQUFFO0FBQU0sZ0JBQUksQ0FBQyxLQUFHLEVBQUUsU0FBTyxDQUFDLE1BQUksRUFBRSxRQUFNLEdBQUUsRUFBRSxRQUFNLEdBQUUsRUFBRSxZQUFVLElBQUcsSUFBRSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQUcsY0FBRyxNQUFJLEtBQUcsRUFBRSxRQUFPO0FBQUMsZ0JBQUU7QUFBRSxnQkFBSTtBQUFFLGtCQUFNLElBQUUsRUFBRSxFQUFFLFFBQU8sSUFBRSxJQUFJLFFBQVEsU0FBUyxHQUFFO0FBQUMsa0JBQUU7QUFBQSxZQUFDLENBQUM7QUFBRSxhQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsZ0JBQUUsSUFBRSxXQUFVO0FBQUMsa0JBQUUsUUFBTTtBQUFLLGtCQUFFLFVBQVE7QUFBRyxvQkFBSSxJQUFFLElBQUUsRUFBRSxZQUFZLENBQUMsSUFBRSxFQUFFLE9BQU8sQ0FBQztBQUFFLG9CQUFHLEVBQUUsS0FBSyxRQUFPLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxvQkFBRSxFQUFFLENBQUMsSUFBRSxJQUFFLEVBQUUsVUFBUTtBQUFFLG9CQUFFLENBQUM7QUFBRSx5QkFBTztBQUFBLGdCQUFDLENBQUM7QUFBRSxvQkFBRSxFQUFFLFVBQVE7QUFBRSxrQkFBRSxDQUFDO0FBQUUsdUJBQU87QUFBQSxjQUFDO0FBQUEsWUFBQyxHQUFHLEdBQUUsT0FBTyxPQUFPLENBQUMsR0FBRSxDQUFDLENBQUM7QUFBRSxjQUFFLEVBQUUsS0FBSyxDQUFDO0FBQUUsY0FBRSxDQUFDLElBQUU7QUFBRTtBQUFBLFVBQVEsTUFBTSxHQUFFLFVBQVEsT0FDcGYsRUFBRSxRQUFNLE1BQUssSUFBRSxJQUFFLEVBQUUsWUFBWSxDQUFDLElBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxFQUFFLFVBQVEsR0FBRSxFQUFFLFFBQU07QUFBQSxRQUFDLFdBQVMsRUFBRSxJQUFJLEtBQUUsR0FBRyxHQUFFLE9BQU0sQ0FBQztBQUFBLGlCQUFVLEVBQUUsR0FBRyxLQUFFLEdBQUcsR0FBRSxNQUFLLENBQUM7QUFBQSxpQkFBVSxFQUFFLElBQUksS0FBRSxHQUFHLEdBQUUsT0FBTSxDQUFDO0FBQUEsaUJBQVUsRUFBRSxJQUFJLEtBQUUsR0FBRyxHQUFFLE9BQU0sQ0FBQztBQUFBLFlBQU87QUFBQSxNQUFRO0FBQUMsUUFBRSxTQUFPLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBTyxFQUFFLFFBQU0sSUFBRSxHQUFFLElBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGVBQU8sRUFBRSxVQUFRO0FBQUEsTUFBQyxDQUFDLEtBQUcsSUFBRSxFQUFFLFVBQVE7QUFBRSxRQUFFLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQyxTQUFHLENBQUMsRUFBRSxVQUFRLEVBQUUsUUFBTSxJQUFJLFFBQVEsU0FBUyxHQUFFO0FBQUMsUUFBRSxTQUFPO0FBQUEsSUFBQyxDQUFDO0FBQUcsUUFBRyxHQUFFO0FBQUMsWUFBTSxJQUFFLFFBQVEsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxpQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsRUFBRSxFQUFFLENBQUMsTUFBSSxHQUFFO0FBQUMsWUFBRSxFQUFFLENBQUMsSUFBRSxXQUFVO0FBQUMsbUJBQU8sRUFBRSxLQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLFVBQUM7QUFBRTtBQUFBLFFBQUs7QUFBQyxXQUFHLENBQUM7QUFBQSxNQUFDLENBQUM7QUFDaGdCLFFBQUUsRUFBRSxLQUFLLENBQUM7QUFBQSxJQUFDLFdBQVMsRUFBRSxNQUFNLEdBQUUsRUFBRSxLQUFLLFdBQVU7QUFBQyxhQUFPLEVBQUUsS0FBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxJQUFDLENBQUM7QUFBQSxRQUFPLFFBQU8sRUFBRSxLQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLFdBQU8sSUFBRSxFQUFFLFNBQU8sRUFBRSxTQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUUsRUFBRSxDQUFDO0FBQUUsVUFBTSxJQUFFLEVBQUUsQ0FBQyxLQUFHO0FBQUUsTUFBRSxVQUFRLEVBQUUsUUFBTTtBQUFHLFFBQUUsSUFBSSxFQUFFLENBQUM7QUFBRSxNQUFFLFNBQU8sTUFBSSxJQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQUcsV0FBTztBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsS0FBRyxXQUFVO0FBQUMsV0FBTyxHQUFHLE1BQUssTUFBSyxJQUFHLFNBQVM7QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFFLFdBQVMsS0FBSyxPQUFPLFVBQVEsRUFBRSxLQUFLLEtBQUssTUFBTSxHQUFFLEVBQUUsU0FBTyxJQUFFLEtBQUssU0FBTyxFQUFFLENBQUMsS0FBRyxLQUFLLFNBQU8sR0FBRyxHQUFFLEdBQUUsR0FBRSxPQUFHLEtBQUssQ0FBQyxHQUFFLElBQUU7QUFBSSxVQUFJLEtBQUssUUFBTTtBQUFNLFdBQU8sSUFBRSxLQUFLLFFBQVEsR0FBRSxHQUFFLEdBQUUsQ0FBQyxJQUFFO0FBQUEsRUFBSTtBQUFFLElBQUUsVUFBVSxNQUFJLFdBQVU7QUFBQyxXQUFPLEdBQUcsTUFBSyxPQUFNLElBQUcsU0FBUztBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxLQUFHLENBQUMsS0FBSyxPQUFPLE9BQU8sUUFBTyxJQUFFLEtBQUssU0FBTztBQUFLLFFBQUk7QUFBRSxRQUFHLEVBQUUsT0FBTyxLQUFHLEtBQUssT0FBTyxVQUFRLEVBQUUsUUFBUSxLQUFLLE1BQU0sR0FBRSxFQUFFLFNBQU8sRUFBRSxNQUFLLFNBQU8sRUFBRSxDQUFDO0FBQUEsU0FBTTtBQUFDLFVBQUksSUFBRTtBQUFFLGVBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE1BQUksSUFBRSxFQUFFLENBQUMsT0FBSyxJQUFFLEVBQUUsUUFBUSxLQUFFLE1BQUksSUFBRTtBQUFBLGVBQVcsQ0FBQyxHQUFFO0FBQUMsWUFBRTtBQUFFO0FBQUEsTUFBSztBQUFDLFdBQUcsS0FBSyxTQUFPLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEtBQUssR0FBRSxDQUFDLEdBQUUsSUFBRSxRQUFJLEtBQUssU0FBTyxDQUFDO0FBQUEsSUFBQztBQUFBLFFBQU0sT0FBSSxLQUFLLFNBQU87QUFBRyxVQUFJLEtBQUssUUFBTTtBQUFNLFdBQU8sSUFBRSxLQUFLLFFBQVEsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUU7QUFBQSxFQUFJO0FBQUUsSUFBRSxVQUFVLE1BQUksV0FBVTtBQUFDLFdBQU8sR0FBRyxNQUFLLE9BQU0sSUFBRyxTQUFTO0FBQUEsRUFBQztBQUNyakMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsT0FBTyxLQUFHLEtBQUssT0FBTyxVQUFRLEVBQUUsUUFBUSxLQUFLLE1BQU0sR0FBRSxFQUFFLFNBQU8sRUFBRSxNQUFLLFNBQU8sRUFBRSxDQUFDO0FBQUEsU0FBTTtBQUFDLFNBQUU7QUFBQyxZQUFFO0FBQUUsWUFBSSxJQUFFLEtBQUs7QUFBRSxjQUFNLElBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRTtBQUFFLFlBQUksSUFBRTtBQUFFLGlCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFO0FBQUMsY0FBRSxFQUFFLFdBQVMsSUFBRSxFQUFFO0FBQVEsbUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEVBQUUsVUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxDQUFDLElBQUUsSUFBRTtBQUFBLFFBQUM7QUFBQyxpQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksVUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUM7QUFBRSxjQUFHLElBQUUsRUFBRSxDQUFDO0FBQUUscUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxLQUFHLEVBQUU7QUFBQSxxQkFBWSxHQUFFO0FBQUMsa0JBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsR0FBRTtBQUFDLG9CQUFFO0FBQUUsc0JBQU07QUFBQSxjQUFDO0FBQUEsWUFBQyxPQUFLO0FBQUMsb0JBQU0sSUFDL2YsS0FBRyxJQUFFLElBQUU7QUFBRyxnQkFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQztBQUFHLGdCQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7QUFBRSxrQkFBRyxFQUFFLE1BQUksR0FBRTtBQUFDLG9CQUFFO0FBQUUsc0JBQU07QUFBQSxjQUFDO0FBQUEsWUFBQztBQUFBO0FBQUE7QUFBQyxZQUFFO0FBQUEsTUFBQztBQUFDLFdBQUssU0FBTztBQUFFLFVBQUU7QUFBQSxJQUFFO0FBQUEsUUFBTSxPQUFJLEtBQUssU0FBTztBQUFHLFVBQUksS0FBSyxRQUFNO0FBQU0sV0FBTyxJQUFFLEtBQUssUUFBUSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsSUFBRTtBQUFBLEVBQUk7QUFBRSxJQUFFLFVBQVUsTUFBSSxXQUFVO0FBQUMsV0FBTyxHQUFHLE1BQUssT0FBTSxJQUFHLFNBQVM7QUFBQSxFQUFDO0FBQ3hPLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLEtBQUcsQ0FBQyxLQUFLLE9BQU8sT0FBTyxRQUFPLElBQUUsS0FBSyxTQUFPO0FBQUssUUFBRyxFQUFFLFVBQVEsS0FBSyxPQUFPLFFBQU87QUFBQyxTQUFFO0FBQUMsWUFBRTtBQUFFLFlBQUksSUFBRSxDQUFDO0FBQUUsWUFBRSxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0FBQUUsaUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsS0FBSyxPQUFPLFFBQU8sSUFBSSxLQUFHLElBQUUsS0FBSyxPQUFPLENBQUM7QUFBRSxtQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQUUsZ0JBQUcsRUFBRTtBQUFBLHFCQUFZLEdBQUU7QUFBQyxrQkFBRyxFQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsV0FBUyxHQUFFO0FBQUMsb0JBQUU7QUFBRSxzQkFBTTtBQUFBLGNBQUM7QUFBQSxZQUFDLFdBQVMsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsTUFBSSxHQUFFO0FBQUMsa0JBQUU7QUFBRSxvQkFBTTtBQUFBLFlBQUM7QUFBQTtBQUFBO0FBQUMsWUFBRTtBQUFBLE1BQUM7QUFBQyxXQUFLLFNBQU87QUFBRSxVQUFFO0FBQUEsSUFBRTtBQUFDLFVBQUksS0FBSyxRQUFNO0FBQU0sV0FBTyxJQUFFLEtBQUssUUFBUSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsSUFBRTtBQUFBLEVBQUk7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxHQUFFLEdBQUU7QUFBRSxXQUFPLE1BQUksWUFBVSxJQUFFLEdBQUUsSUFBRSxNQUFJLElBQUUsRUFBRTtBQUFTLFFBQUUsRUFBRSxRQUFRLElBQUk7QUFBRSxRQUFFLEVBQUUsVUFBVSxJQUFFLENBQUM7QUFBRSxRQUFFLEVBQUUsVUFBVSxHQUFFLENBQUM7QUFBRSxRQUFJLElBQUUsS0FBRyxFQUFFLFVBQVMsSUFBRSxDQUFDLEtBQUcsRUFBRSxTQUFPLE9BQUcsSUFBRSxLQUFHLEVBQUUsU0FBTyxLQUFHLEtBQUcsSUFBSSxPQUFPLElBQUUsTUFBSSxHQUFFLEdBQUc7QUFBRSxRQUFFLEtBQUcsRUFBRTtBQUFTLFFBQUksSUFBRTtBQUFFLFFBQUcsT0FBTyxNQUFJLFVBQVM7QUFBQyxVQUFJLElBQUUsRUFBRTtBQUFTLFVBQUUsRUFBRSxTQUFPO0FBQUUsVUFBRSxFQUFFO0FBQUEsSUFBTztBQUFDLFdBQU8sTUFBSSxhQUFXLElBQUUsTUFBSSxRQUFHLEtBQUc7QUFBTyxVQUFJLElBQUUsRUFBRSxRQUFRLE1BQUssQ0FBQztBQUFHLFFBQUUsRUFBRSxTQUFPO0FBQUUsUUFBSSxHQUFFO0FBQUUsV0FBTyxNQUFJLGFBQVcsSUFBRSxFQUFFLFFBQU8sTUFBSSxNQUFJLElBQUUsS0FBSSxJQUFFLEVBQUUsT0FBTSxNQUFJLE1BQUksSUFBRSxLQUFJLElBQUUsRUFBRSxTQUFPO0FBQUssUUFBRSxvQkFBSTtBQUFJLGFBQVEsS0FBRyxHQUN6OEIsSUFBRyxJQUFHLElBQUcsS0FBRyxFQUFFLFFBQU8sTUFBSztBQUFDLFVBQUk7QUFBRyxVQUFHLEVBQUUsTUFBRyxHQUFFLEtBQUc7QUFBQSxXQUFNO0FBQUMsWUFBSSxJQUFFLEVBQUUsRUFBRTtBQUFFLGFBQUcsRUFBRTtBQUFNLFlBQUcsQ0FBQyxHQUFHO0FBQVMsYUFBRyxFQUFFO0FBQUEsTUFBTTtBQUFDLFdBQUcsRUFBRSxJQUFJLEVBQUU7QUFBRSxXQUFHLEdBQUc7QUFBUSxVQUFFLEVBQUUsSUFBSSxFQUFFO0FBQUUsYUFBTyxNQUFJLGFBQVcsSUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFFLEVBQUUsSUFBSSxJQUFHLENBQUM7QUFBRyxlQUFRLEtBQUcsR0FBRSxLQUFHLEdBQUcsUUFBTyxNQUFLO0FBQUMsWUFBSSxJQUFFLEdBQUcsRUFBRSxFQUFFO0FBQUksWUFBRyxDQUFDLEVBQUU7QUFBUyxZQUFFLEdBQUcsR0FBRSxFQUFFO0FBQUUsWUFBRyxDQUFDLEVBQUU7QUFBUyxZQUFJLElBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFLO0FBQUUsWUFBRyxDQUFDLEVBQUUsT0FBTztBQUFTLFlBQUU7QUFBRyxZQUFJLElBQUUsQ0FBQztBQUFFLFlBQUksS0FBRyxDQUFDO0FBQUUsWUFBSSxJQUFFLElBQUcsSUFBRSxJQUFHLElBQUU7QUFBRSxpQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLGNBQUksSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEdBQUcsT0FBTyxDQUFDO0FBQUUsY0FBRSxFQUFFLFNBQU8sSUFBRSxFQUFFLEtBQUssR0FBRyxJQUFFLEVBQUUsQ0FBQztBQUFFLGNBQUk7QUFBRSxjQUFHLEtBQUcsR0FBRTtBQUFDLGdCQUFJLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRyxRQUNoZixFQUFFLFFBQVEsR0FBRyxPQUFNLEVBQUUsSUFBRSxHQUFHLFNBQU8sRUFBRSxRQUFPLElBQUUsSUFBRyxJQUFFO0FBQUUscUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxrQkFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLGtCQUFHLEdBQUU7QUFBQyxvQkFBSSxJQUFFLEVBQUU7QUFBTyxxQkFBRyxJQUFFLElBQUUsSUFBRTtBQUFFLHFCQUFHLEtBQUcsTUFBSSxJQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUUsSUFBRSxPQUFLLEtBQUcsSUFBRSxFQUFFLFVBQVUsR0FBRSxDQUFDLElBQUUsTUFBSSxJQUFFLEVBQUUsVUFBVSxHQUFFLElBQUUsQ0FBQyxJQUFFLEtBQUcsSUFBRSxJQUFFLElBQUUsRUFBRSxVQUFVLElBQUUsQ0FBQyxJQUFFLEtBQUksSUFBRSxHQUFFLElBQUU7QUFBQSxjQUFJO0FBQUEsWUFBQztBQUFDLGtCQUFJLE1BQUksSUFBRSxNQUFJLElBQUUsRUFBRSxVQUFRLElBQUUsSUFBRSxLQUFJLElBQUUsRUFBRSxVQUFRLElBQUUsSUFBRSxLQUFHLEVBQUUsUUFBTyxLQUFHLEdBQUUsR0FBRyxLQUFLLEVBQUUsTUFBTSxHQUFFLEVBQUUsS0FBSyxFQUFDLE9BQU0sRUFBQyxDQUFDLElBQUcsTUFBSSxJQUFFLE1BQUksTUFBSTtBQUFBLFVBQUU7QUFBQyxjQUFHLENBQUMsRUFBRSxLQUFFLEVBQUUsQ0FBQyxHQUFFLE1BQUksSUFBRSxNQUFJLE1BQUksR0FBRSxLQUFHLEVBQUUsS0FBSyxFQUFDLE1BQUssRUFBQyxDQUFDO0FBQUEsbUJBQVUsS0FBRyxLQUFHLEVBQUU7QUFBQSxRQUFLO0FBQUMsWUFBRSxHQUFHLFVBQVEsRUFBRSxTQUFPO0FBQUcsWUFBRyxLQUFHLEtBQUcsS0FBRyxFQUFFLFNBQU8sSUFBRSxFQUFFLEtBQUcsSUFBRSxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsSUFDcGYsR0FBRSxJQUFFLE1BQUksS0FBRyxJQUFHLElBQUUsTUFBSSxLQUFHLElBQUcsS0FBRyxFQUFFLEtBQUUsSUFBRSxLQUFHLElBQUUsSUFBRSxJQUFFLEtBQUcsTUFBSSxJQUFFLEtBQUcsSUFBRSxJQUFHLElBQUUsSUFBRSxLQUFHLElBQUUsSUFBRSxJQUFFLEtBQUcsSUFBRSxHQUFFLE1BQUksSUFBRSxLQUFHLEVBQUUsT0FBTyxDQUFDLE1BQUksT0FBSyxFQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUksUUFBTSxJQUFFLEVBQUUsUUFBUSxLQUFJLENBQUMsR0FBRSxJQUFFLE1BQUksSUFBRSxLQUFJLElBQUUsRUFBRSxVQUFRLEVBQUUsT0FBTyxJQUFFLENBQUMsTUFBSSxPQUFLLEVBQUUsT0FBTyxDQUFDLE1BQUksUUFBTSxJQUFFLEVBQUUsWUFBWSxLQUFJLENBQUMsR0FBRSxJQUFFLElBQUUsSUFBRSxJQUFFLEVBQUUsS0FBSSxLQUFHLElBQUUsSUFBRSxNQUFJLEVBQUUsVUFBVSxHQUFFLENBQUMsS0FBRyxJQUFFLEVBQUUsU0FBTyxJQUFFO0FBQUEsYUFBUTtBQUFDLGNBQUUsQ0FBQztBQUFFLGNBQUUsQ0FBQztBQUFFLGNBQUUsQ0FBQztBQUFFLGNBQUUsQ0FBQztBQUFFLGNBQUUsQ0FBQztBQUFFLGNBQUUsQ0FBQztBQUFFLGNBQUUsSUFBRSxJQUFFO0FBQUUsZUFBSSxJQUFFLElBQUUsT0FBSTtBQUFDLGdCQUFJLElBQUU7QUFBTyxxQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUcsUUFB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SUFBSztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUUsV0FBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLEtBQUssZ0JBQWMsRUFBRSxRQUFPLElBQUksRUFBRSxHQUFFLENBQUM7QUFBRSxRQUFJLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBRSxRQUFHLEtBQUcsRUFBRSxPQUFNO0FBQUMsWUFBTSxJQUFFO0FBQUUsVUFBRSxFQUFFO0FBQU0sVUFBRSxFQUFFLFNBQU87QUFBRSxVQUFHLElBQUUsRUFBRSxPQUFNO0FBQUMsWUFBRSxFQUFFLFNBQU8sRUFBRTtBQUFNLFlBQUUsRUFBRTtBQUFVLGNBQU0sSUFBRSxFQUFFO0FBQVEsWUFBRSxFQUFFLFNBQU8sRUFBRTtBQUFNLFVBQUUsVUFBUTtBQUFHLFVBQUUsUUFBTTtBQUFLLFlBQUUsSUFBRSxFQUFFLFlBQVksQ0FBQyxJQUFFLEVBQUUsT0FBTyxDQUFDO0FBQUUsVUFBRSxVQUFRO0FBQUUsVUFBRSxRQUFNO0FBQUUsWUFBRSxFQUFFLFVBQVE7QUFBQSxNQUFDLE1BQU0sS0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUcsS0FBRyxFQUFFLE1BQUs7QUFBQyxZQUFNLElBQUU7QUFBSyxVQUFFLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxVQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsU0FBTyxFQUFFLFVBQVE7QUFBRSxXQUFHLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBRSxVQUFFLENBQUMsQ0FBQztBQUFFLFVBQUUsQ0FBQztBQUFFLFVBQUUsSUFBSSxRQUFRLFNBQVMsR0FBRTtBQUFDLFlBQUU7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsU0FBSyxRQUFNLEtBQUc7QUFBSyxTQUFLLFNBQU8sS0FBRyxDQUFDO0FBQUUsU0FBSyxJQUFFO0FBQUUsU0FBSyxJQUN6dEIsS0FBRyxDQUFDO0FBQUUsU0FBSyxRQUFNLEtBQUc7QUFBSyxTQUFLLFNBQU8sS0FBRztBQUFLLFNBQUssWUFBVSxLQUFHO0FBQUssU0FBSyxRQUFNLEtBQUc7QUFBRyxTQUFLLFFBQU0sS0FBRztBQUFBLEVBQUU7QUFBQyxNQUFFLEVBQUU7QUFBVSxJQUFFLFFBQU0sU0FBUyxHQUFFO0FBQUMsUUFBRyxLQUFLLE9BQU07QUFBQyxZQUFNLElBQUU7QUFBSyxXQUFLLEVBQUUsS0FBSyxXQUFVO0FBQUMsZUFBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0FBQUEsTUFBTSxDQUFDO0FBQUEsSUFBQyxXQUFTLEtBQUssT0FBTyxRQUFPO0FBQUMsWUFBTSxJQUFFLENBQUM7QUFBRSxlQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsS0FBSyxPQUFPLFFBQU8sSUFBSSxLQUFHLElBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxLQUFHLEVBQUUsVUFBUSxHQUFFO0FBQUMsWUFBRyxFQUFFLENBQUMsSUFBRSxHQUFFLEtBQUcsRUFBRSxRQUFPLENBQUMsRUFBRTtBQUFBLE1BQUssT0FBSztBQUFDLFVBQUUsQ0FBQyxJQUFFLEVBQUUsTUFBTSxHQUFFLENBQUM7QUFBRTtBQUFBLE1BQUs7QUFBQyxXQUFLLFNBQU87QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUk7QUFDN1osSUFBRSxTQUFPLFNBQVMsR0FBRTtBQUFDLFFBQUcsS0FBSyxPQUFNO0FBQUMsWUFBTSxJQUFFO0FBQUssV0FBSyxFQUFFLEtBQUssV0FBVTtBQUFDLGVBQU8sRUFBRSxPQUFPLENBQUMsRUFBRTtBQUFBLE1BQU0sQ0FBQztBQUFBLElBQUMsV0FBUyxLQUFLLE9BQU8sUUFBTztBQUFDLFlBQU0sSUFBRSxDQUFDO0FBQUUsZUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEtBQUssT0FBTyxRQUFPLElBQUksS0FBRyxJQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsR0FBRSxVQUFRLElBQUUsS0FBRyxFQUFFLFVBQVEsRUFBRSxDQUFDLElBQUUsRUFBRSxNQUFNLENBQUMsR0FBRSxJQUFFO0FBQUcsV0FBSyxTQUFPO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFJO0FBQUUsSUFBRSxRQUFNLFNBQVMsR0FBRTtBQUFDLFFBQUcsS0FBSyxPQUFNO0FBQUMsWUFBTSxJQUFFO0FBQUssV0FBSyxFQUFFLEtBQUssV0FBVTtBQUFDLGVBQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtBQUFBLE1BQU0sQ0FBQztBQUFBLElBQUMsTUFBTSxNQUFLLEtBQUc7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUMzWSxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUU7QUFBTyxRQUFJLElBQUUsRUFBRTtBQUFNLE1BQUUsUUFBTTtBQUFLLGFBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUcsT0FBTyxNQUFJLFdBQVcsS0FBRSxFQUFFLEdBQUUsRUFBRSxFQUFFLENBQUMsSUFBRSxJQUFFLEVBQUUsVUFBUSxHQUFFO0FBQUEsZUFBWSxFQUFFLEVBQUUsS0FBRSxFQUFFLEVBQUUsR0FBRSxFQUFFLEVBQUUsQ0FBQyxJQUFFLElBQUUsRUFBRSxVQUFRLEdBQUU7QUFBQSxlQUFZLEVBQUUsS0FBSyxRQUFPLEVBQUUsUUFBTTtBQUFBO0FBQUUsUUFBRSxFQUFFO0FBQU8sTUFBRSxJQUFFLENBQUM7QUFBRSxNQUFFLFNBQU87QUFBSyxTQUFHLEVBQUUsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQzNSLElBQUUsVUFBUSxTQUFTLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLLFFBQU0sR0FBRyxNQUFLLElBQUUsSUFBRSxLQUFLO0FBQU8sUUFBRyxFQUFFLE1BQUs7QUFBQyxZQUFNLElBQUU7QUFBSyxhQUFPLEVBQUUsS0FBSyxXQUFVO0FBQUMsZUFBTyxFQUFFLFFBQVEsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLE1BQUUsV0FBUyxPQUFPLE1BQUksWUFBVSxJQUFFLEVBQUUsYUFBVyxLQUFLLFdBQVUsSUFBRSxDQUFDLENBQUMsS0FBRyxFQUFFLFFBQU8sSUFBRSxFQUFFLFFBQU8sSUFBRSxFQUFFLFVBQVEsSUFBRSxLQUFHLEtBQUssV0FBVSxJQUFFLENBQUMsQ0FBQyxLQUFHLElBQUcsSUFBRSxJQUFFLElBQUUsR0FBRyxLQUFLLEtBQUssT0FBTSxDQUFDLElBQUUsSUFBRSxHQUFHLEtBQUssS0FBSyxPQUFNLEdBQUUsS0FBRyxLQUFJLEdBQUUsQ0FBQztBQUFHLFdBQU8sS0FBSyxTQUFTLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFDbFgsSUFBRSxXQUFTLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBRyxFQUFFLE1BQUs7QUFBQyxZQUFNLElBQUU7QUFBSyxhQUFPLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxlQUFPLEVBQUUsU0FBUyxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsU0FBRyxFQUFFLFVBQVEsS0FBSyxVQUFRLElBQUUsR0FBRyxLQUFLLE9BQU0sR0FBRSxLQUFLLE1BQU0sT0FBTSxLQUFLLE9BQU0sQ0FBQztBQUFHLFVBQU0sSUFBRSxLQUFLO0FBQU8sU0FBSyxZQUFVLEtBQUssUUFBTSxLQUFLLFNBQU8sS0FBSyxJQUFFLEtBQUssUUFBTSxLQUFLLFNBQU87QUFBSyxTQUFLLFFBQU0sS0FBSyxRQUFNO0FBQUcsU0FBRyxFQUFFLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEVBQUU7QUFBTyxRQUFJLElBQUUsQ0FBQyxHQUFFLEdBQUU7QUFBRSxRQUFFLEVBQUU7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFJLFVBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsV0FBUyxJQUFFLEVBQUUsQ0FBQyxHQUFHLFVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLE9BQUMsSUFBRSxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsT0FBSyxJQUFFLEdBQUUsRUFBRSxDQUFDLElBQUU7QUFBRyxVQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLENBQUM7QUFBRyxVQUFHLENBQUMsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFHLEtBQUcsQ0FBQyxJQUFFLElBQUUsS0FBRztBQUFHLFlBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQztBQUFBLE1BQUU7QUFBQyxRQUFFLEtBQUssQ0FBQztBQUFFLFVBQUcsS0FBRyxLQUFHLE1BQUksSUFBRSxLQUFHLEVBQUUsU0FBTyxNQUFJLEVBQUUsUUFBTyxJQUFFLEVBQUUsTUFBTSxDQUFDLElBQUU7QUFBQSxJQUFDO0FBQUMsUUFBRyxJQUFFLEVBQUUsT0FBTyxLQUFHLEVBQUUsS0FBRSxFQUFFLFNBQU8sSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxLQUFHLElBQUUsRUFBRSxDQUFDLE1BQUksS0FBRyxFQUFFLFNBQU8sS0FBRyxJQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxJQUFFO0FBQUEsU0FBTTtBQUFDLFVBQUcsSUFBRSxFQUFFLFFBQU0sQ0FBQztBQUFFLFVBQUUsRUFBRSxJQUFFLENBQUM7QUFBRSxVQUFHLEtBQUcsRUFBRSxLQUFHLEdBQUU7QUFBQyxZQUFHLEVBQUUsU0FBTyxLQUFHLEVBQUUsS0FBRSxFQUFFLE1BQU0sR0FBRSxJQUM1eUIsQ0FBQztBQUFBLE1BQUMsT0FBSztBQUFDLFlBQUUsQ0FBQztBQUFFLGlCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUcsS0FBRyxFQUFFLFNBQU8sRUFBRSxNQUFHLEVBQUU7QUFBQSxhQUFXO0FBQUMsY0FBRyxLQUFHLEVBQUUsU0FBTyxLQUFHLEVBQUUsS0FBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxLQUFHLEVBQUUsUUFBTyxNQUFJLEtBQUcsRUFBRTtBQUFRLFlBQUUsS0FBSyxDQUFDO0FBQUUsY0FBRyxDQUFDLEVBQUU7QUFBQSxRQUFLO0FBQUMsWUFBRTtBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFDM0wsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFO0FBQUUsUUFBSTtBQUFFLFFBQUksSUFBRSxFQUFFO0FBQU8sUUFBSTtBQUFFLFFBQUcsRUFBRSxNQUFJLElBQUUsSUFBRSxHQUFFLEtBQUcsR0FBRSxLQUFJO0FBQUMsVUFBRyxLQUFHLElBQUUsRUFBRSxDQUFDLE1BQUksRUFBRTtBQUFPLGFBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQztBQUFFLGNBQUcsRUFBRSxDQUFDLElBQUUsR0FBRSxFQUFFO0FBQUEsbUJBQVksRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsRUFBRSxRQUFPO0FBQUE7QUFBQTtBQUFBLElBQUM7QUFBQSxRQUFNLFVBQVEsSUFBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsS0FBRyxHQUFFLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxLQUFHLElBQUUsRUFBRSxDQUFDLE1BQUksRUFBRTtBQUFPLGlCQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFHLEVBQUUsQ0FBQyxJQUFFLEdBQUUsRUFBRTtBQUFBLGFBQVE7QUFBQyxjQUFJLEtBQUcsS0FBRyxJQUFFLElBQUUsSUFBRSxLQUFHLElBQUUsT0FBSyxJQUFFLEtBQUc7QUFBRSxXQUFDLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLENBQUMsSUFBSSxLQUFLLENBQUM7QUFBRSxjQUFHLEVBQUUsTUFBSSxFQUFFLFFBQU87QUFBQSxRQUFDO0FBQUE7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFDMWIsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxFQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsRUFBRSxDQUFDLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQyxRQUFHLEVBQUUsVUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQztBQUFFLFlBQUcsRUFBRTtBQUFBLGlCQUFZLEVBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUUsR0FBRSxLQUFHLEVBQUUsTUFBSSxFQUFFO0FBQUE7QUFBQSxJQUFLO0FBQUEsUUFBTSxVQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLE9BQU8sUUFBTyxJQUFJLE1BQUksSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLE9BQUssRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUcsV0FBTztBQUFBLEVBQUM7QUFBRSxJQUFFO0FBQUUsS0FBRyxVQUFVLFNBQU8sU0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsSUFBRSxHQUFFLElBQUUsTUFBSSxHQUFHLENBQUMsTUFBSSxJQUFFLEdBQUUsSUFBRTtBQUFJLFFBQUksSUFBRSxDQUFDO0FBQUUsUUFBSSxJQUFFLENBQUM7QUFBRSxRQUFJO0FBQUUsUUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUUsUUFBSSxJQUFFLEdBQUUsSUFBRSxNQUFHO0FBQUUsUUFBRyxHQUFFO0FBQUMsUUFBRSxnQkFBYyxVQUFRLElBQUUsRUFBQyxPQUFNLEVBQUM7QUFBRyxVQUFFLEVBQUUsU0FBTztBQUFFLFVBQUUsRUFBRTtBQUFNLFVBQUUsRUFBRTtBQUFNLFVBQUUsRUFBRTtBQUFNLFVBQUUsS0FBRyxFQUFFLFVBQVEsSUFBRSxFQUFFLFdBQVMsRUFBRSxRQUFNLE9BQUs7QUFBRyxVQUFJLElBQUUsS0FBSyxPQUFLLEVBQUU7QUFBSSxVQUFFLEVBQUU7QUFBUSxVQUFFLEVBQUUsWUFBVTtBQUFHLFVBQUUsRUFBRTtBQUFNLFVBQUUsS0FBRyxLQUFLLFNBQU8sRUFBRTtBQUFVLFVBQUksSUFBRSxDQUFDLENBQUMsS0FBRyxLQUFHLEtBQUssU0FBTyxFQUFFO0FBQU8sVUFBRSxFQUFFLFNBQU87QUFBRSxVQUFJLElBQUUsRUFBRSxVQUFRO0FBQUUsWUFBSSxJQUFFLElBQUUsTUFBSTtBQUFHLFVBQUcsTUFBSSxDQUFDLEtBQUssTUFBSSxDQUFDLElBQUc7QUFBQyxVQUFFLGdCQUFjLFVBQVEsSUFBRSxDQUFDLENBQUM7QUFBRyxZQUFJLElBQUUsQ0FBQztBQUFFLGlCQUFRLElBQzkxQixHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxTQUFPLEVBQUUsS0FBSTtBQUFDLGNBQUksSUFBRSxFQUFFO0FBQUksY0FBRyxFQUFFLGdCQUFjLE1BQU0sVUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLEtBQUssRUFBRSxPQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQUEsY0FBTyxHQUFFLEtBQUssRUFBRSxPQUFNLENBQUM7QUFBQSxRQUFDLE9BQUs7QUFBQyxjQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUUsbUJBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsZ0JBQWMsTUFBTSxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsS0FBSyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUEsY0FBTyxHQUFFLEtBQUssR0FBRSxDQUFDO0FBQUEsUUFBQztBQUFDLFlBQUU7QUFBRSxZQUFHLENBQUMsR0FBRTtBQUFDLGNBQUUsQ0FBQztBQUFFLGNBQUcsRUFBRSxPQUFPLE1BQUksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRTtBQUFDLGdCQUFHLEtBQUssSUFBRztBQUFDLGtCQUFFLEtBQUssTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQUUsa0JBQUcsQ0FBQyxFQUFFO0FBQVMsZ0JBQUUsS0FBSyxJQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLENBQUMsQ0FBQztBQUFBLFlBQUMsTUFBTSxLQUFFLEdBQUcsS0FBSyxNQUFLLEVBQUUsQ0FBQyxHQUFFLEVBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxjQUFFLEtBQUssSUFBRSxFQUFDLE9BQU0sRUFBRSxDQUFDLEdBQUUsS0FBSSxFQUFFLElBQ3RmLENBQUMsR0FBRSxRQUFPLEVBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxjQUFHLEVBQUUsUUFBTztBQUFDLGtCQUFNLElBQUU7QUFBSyxtQkFBTyxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsdUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsRUFBRSxTQUFPLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLHFCQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsRUFBRSxTQUFPLElBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUM7QUFBQSxZQUFDLENBQUM7QUFBQSxVQUFDO0FBQUMsaUJBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxFQUFFLFNBQU8sSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBSTtBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUMsV0FBRyxLQUFHLEVBQUUsSUFBRSxLQUFHLEtBQUssV0FBUyxFQUFFLENBQUMsSUFBRSxJQUFFLEtBQUcsRUFBRSxnQkFBYyxTQUFPLEVBQUUsV0FBUyxNQUFJLElBQUUsRUFBRSxDQUFDLElBQUcsSUFBRSxFQUFFLFNBQU8sRUFBRTtBQUFRLFdBQUcsRUFBRSxnQkFBYyxVQUFRLElBQUUsQ0FBQyxDQUFDO0FBQUEsSUFBRTtBQUFDLFVBQUksSUFBRSxLQUFLO0FBQU8sUUFBSTtBQUFFLFNBQUcsS0FBSyxVQUFRLEtBQUssT0FBSyxDQUFDLEtBQUcsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUcsS0FBSyxNQUFJLEtBQUssT0FDdGYsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0FBQVMsVUFBSTtBQUFFLFFBQUUsQ0FBQyxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsT0FBTSxJQUFFLEVBQUUsU0FBTyxHQUFFLElBQUUsR0FBRyxFQUFFLE9BQU0sQ0FBQyxHQUFFLElBQUUsR0FBRyxFQUFFLFFBQU8sQ0FBQyxHQUFFLElBQUUsR0FBRyxFQUFFLFNBQVEsQ0FBQyxHQUFFLElBQUUsS0FBRyxLQUFLLFNBQU8sR0FBRyxFQUFFLFdBQVUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxDQUFDLEtBQUcsS0FBRyxLQUFLLFNBQU8sR0FBRyxFQUFFLFFBQU8sQ0FBQyxHQUFFLElBQUUsR0FBRyxFQUFFLE9BQU0sQ0FBQztBQUFHLFVBQUcsRUFBRSxLQUFFLEVBQUUsQ0FBQztBQUFBLFdBQU07QUFBQyxZQUFFLEtBQUcsS0FBRyxDQUFDO0FBQUUsWUFBRSxFQUFFO0FBQU8sWUFBSSxJQUFFLEtBQUssTUFBTSxJQUFJLENBQUM7QUFBRSxjQUFJLEtBQUssT0FBSyxFQUFFLE1BQUksR0FBRSxFQUFFLFFBQU0sR0FBRSxJQUFFLEVBQUUsR0FBRyxxQkFBb0IsQ0FBQyxLQUFHLE1BQUksRUFBRSxTQUFPLFFBQUksTUFBSSxFQUFFLFFBQU0sR0FBRSxFQUFFLFNBQU87QUFBSSxZQUFFLElBQUUsRUFBRSxZQUFZLEdBQUUsS0FBRyxDQUFDLElBQUUsSUFBRSxHQUFFLENBQUMsSUFBRSxFQUFFLE9BQU8sR0FBRSxLQUFHLENBQUMsSUFBRSxJQUFFLEdBQUUsQ0FBQztBQUFFLGFBQUcsQ0FBQyxNQUFJLEVBQUUsUUFBTSxHQUFFLEVBQUUsU0FBTztBQUFHLGNBQUksRUFBRSxTQUFPO0FBQUcsWUFBRyxHQUFFO0FBQUMsWUFBRSxDQUFDLElBQUU7QUFBRTtBQUFBLFFBQVE7QUFBQSxNQUFDO0FBQUMsV0FBRyxJQUNuZixFQUFFLFVBQVEsTUFBSSxFQUFFO0FBQU8sVUFBRyxLQUFHLEdBQUU7QUFBQyxZQUFFLENBQUM7QUFBRSxZQUFFO0FBQUUsWUFBRyxLQUFLLE1BQUksR0FBRTtBQUFDLGNBQUcsQ0FBQyxFQUFFLE1BQUksSUFBRSxFQUFFLFFBQU8sSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLGdCQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsZ0JBQUcsS0FBRyxFQUFFLE9BQU8sTUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLHFCQUFVLENBQUMsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUEsVUFBQztBQUFBLFFBQUMsTUFBTSxVQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsY0FBRSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUFFLGNBQUcsQ0FBQyxFQUFFLEtBQUcsRUFBRTtBQUFBLGNBQWMsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLGNBQUcsS0FBRyxJQUFFLEtBQUcsRUFBRSxJQUFJLEVBQUUsSUFBRSxDQUFDLENBQUMsTUFBSSxFQUFFLE9BQU8sTUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLG1CQUFVLENBQUMsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUEsUUFBQztBQUFDLFlBQUcsR0FBRTtBQUFDLGNBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxjQUFFLEVBQUU7QUFBTyxjQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFO0FBQUEsUUFBRztBQUFBLE1BQUM7QUFBQyxVQUFHLEVBQUUsR0FBRSxDQUFDLElBQUUsR0FBRSxFQUFFLEtBQUssQ0FBQyxHQUFFO0FBQUEsZUFBWSxFQUFFLFdBQVMsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFJO0FBQUEsUUFBRTtBQUFBLFFBQ3RmO0FBQUEsTUFBSTtBQUFBLElBQUM7QUFBQyxRQUFHLEdBQUU7QUFBQyxVQUFHLEtBQUssTUFBSSxLQUFHLEVBQUUsVUFBUSxDQUFDLEVBQUUsTUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsWUFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztBQUFFLFlBQUcsQ0FBQyxFQUFFLEtBQUcsRUFBRTtBQUFBLFlBQWMsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLFVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxLQUFFLENBQUM7QUFBQSxNQUFDO0FBQUMsWUFBTSxJQUFFO0FBQUssYUFBTyxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsY0FBSSxFQUFFLFVBQVE7QUFBRyxVQUFFLFdBQVMsSUFBRSxFQUFFLE9BQU8sR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFHLGVBQU87QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxDQUFDLEVBQUUsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLFFBQUcsTUFBSSxDQUFDLEtBQUcsQ0FBQyxLQUFLLE9BQU8sUUFBTyxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUUsUUFBRSxDQUFDO0FBQUUsU0FBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUUsRUFBRSxDQUFDO0FBQUUsV0FBRyxFQUFFLFVBQVEsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFNLGdCQUFjLEtBQUssS0FBRyxFQUFFLEtBQUssSUFBRSxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUM3ZixJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUM7QUFBRyxVQUFHLEVBQUUsUUFBTyxJQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsS0FBSyxPQUFNLEdBQUUsQ0FBQyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLFFBQUUsQ0FBQyxJQUFFLEVBQUMsT0FBTSxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxLQUFHLEtBQUssTUFBSSxFQUFFLFFBQU87QUFBQyxZQUFNLElBQUU7QUFBSyxhQUFPLFFBQVEsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxpQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLENBQUMsRUFBRSxTQUFPLEVBQUUsQ0FBQztBQUFFLGNBQUksSUFBRSxHQUFHLEdBQUUsR0FBRSxFQUFFLE9BQU0sR0FBRSxDQUFDO0FBQUcsZUFBTyxJQUFFLEdBQUcsQ0FBQyxJQUFFO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFVBQUksSUFBRSxHQUFHLEdBQUUsR0FBRSxLQUFLLE9BQU0sR0FBRSxDQUFDO0FBQUcsV0FBTyxJQUFFLEdBQUcsQ0FBQyxJQUFFO0FBQUEsRUFBQztBQUMxVCxXQUFTLEdBQUcsR0FBRTtBQUFDLFVBQU0sSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxVQUFFLEVBQUU7QUFBTSxVQUFFLEVBQUU7QUFBTyxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxPQUFPLE1BQUksV0FBUyxJQUFFLEVBQUMsSUFBRyxJQUFFLEVBQUMsSUFBRSxJQUFFLEVBQUUsS0FBSSxJQUFFLEVBQUUsQ0FBQyxLQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUcsRUFBRSxRQUFNLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsS0FBSyxDQUFDLElBQUcsSUFBRSxFQUFFLFVBQVUsS0FBRSxFQUFFLENBQUMsR0FBRSxNQUFJLEVBQUUsQ0FBQyxJQUFFLElBQUUsQ0FBQyxHQUFFLEVBQUUsWUFBVSxJQUFHLEVBQUUsQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztBQUFFLFFBQUcsQ0FBQyxFQUFFLFFBQU0sQ0FBQztBQUFFLFFBQUUsRUFBRSxJQUFJLENBQUM7QUFBRSxRQUFHLENBQUMsRUFBRSxRQUFNLENBQUM7QUFBRSxRQUFFLEVBQUUsU0FBTztBQUFFLFFBQUcsSUFBRSxHQUFFO0FBQUMsVUFBRyxLQUFHLElBQUUsS0FBRyxFQUFFLEtBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDO0FBQUUsWUFBSSxJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUM7QUFBQSxJQUFFO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFDN2MsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFHLENBQUMsUUFBTSxDQUFDLEtBQUssTUFBTSxRQUFPO0FBQUUsUUFBRyxLQUFLLEdBQUcsUUFBTyxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFBRSxVQUFNLElBQUUsTUFBTSxFQUFFLE1BQU07QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsSUFBRSxFQUFDLElBQUcsR0FBRSxLQUFJLEtBQUssTUFBTSxJQUFJLENBQUMsRUFBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFHLENBQUMsUUFBTSxLQUFLLGdCQUFjLEdBQUcsUUFBTyxJQUFJLEdBQUcsQ0FBQztBQUFFLFVBQU0sSUFBRSxFQUFFLFlBQVUsRUFBRSxPQUFLO0FBQUUsUUFBSSxHQUFFO0FBQUUsU0FBSyxJQUFFLENBQUM7QUFBRSxTQUFLLFFBQU0sQ0FBQztBQUFFLFNBQUssSUFBRSxDQUFDO0FBQUUsU0FBSyxPQUFLLElBQUUsRUFBRSxPQUFLLEVBQUUsT0FBSyxHQUFHLEdBQUUsS0FBSyxDQUFDLEtBQUc7QUFBSyxLQUFDLElBQUUsRUFBRSxZQUFVLE9BQUssS0FBSyxXQUFTO0FBQUcsU0FBSyxhQUFXLENBQUMsQ0FBQyxFQUFFO0FBQVcsU0FBSyxNQUFJLENBQUMsS0FBSyxjQUFZLEVBQUUsVUFBUSxFQUFFLEtBQUcsSUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFFLG9CQUFJLFFBQUksSUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFFLG9CQUFJO0FBQUksU0FBSyxLQUFHLElBQUUsRUFBRSxTQUFPLFNBQU8sS0FBRyxNQUFJLFFBQUksQ0FBQztBQUFFLFNBQUssUUFB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QVUsRUFBRSxTQUFPLElBQUUsSUFBSSxHQUFHLE9BQU8sTUFBSSxXQUFTLEdBQUcsQ0FBQyxJQUFFLEtBQUcsQ0FBQyxDQUFDO0FBQUUsWUFBRSxJQUFJLEdBQUcsR0FBRSxDQUFDO0FBQUUsVUFBRSxJQUFJLEdBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQyxXQUFLLFVBQVEsRUFBRSxJQUFJLEdBQUUsSUFBSSxFQUFFLEdBQUUsS0FBSyxHQUFHLENBQUM7QUFBRSxRQUFFLFNBQU8sS0FBSyxFQUFFLENBQUMsSUFBRSxFQUFFLFVBQVEsS0FBSyxFQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLE9BQU8sS0FBSyxFQUFFLENBQUMsTUFBSSxhQUFXLEtBQUssRUFBRSxDQUFDLElBQUUsSUFBSSxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUUsRUFBRTtBQUFTLFdBQUssTUFBTSxDQUFDLElBQUU7QUFBQSxJQUFDO0FBQUMsUUFBRyxLQUFLLEdBQUU7QUFBQyxVQUN4ZixFQUFFO0FBQU0sUUFBRSxDQUFDLE1BQUksSUFBRSxDQUFDLENBQUM7QUFBRyxlQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxTQUFPLEdBQUUsRUFBRSxVQUFRLEtBQUssRUFBRSxDQUFDLElBQUUsRUFBRSxRQUFPLEVBQUUsT0FBTyxJQUFFLE1BQUksS0FBSyxFQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLE9BQU8sS0FBSyxFQUFFLENBQUMsTUFBSSxhQUFXLEtBQUssRUFBRSxDQUFDLElBQUUsSUFBSSxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUUsRUFBRTtBQUFBLElBQVE7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsRUFBRSxNQUFNLEdBQUc7QUFBRSxRQUFJLElBQUU7QUFBRSxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxFQUFFLFNBQU8sQ0FBQyxNQUFJLFFBQU0sSUFBRSxFQUFFLFVBQVUsR0FBRSxFQUFFLFNBQU8sQ0FBQyxPQUFLLEVBQUUsQ0FBQyxJQUFFLE9BQUksTUFBSSxFQUFFLEdBQUcsSUFBRTtBQUFHLFFBQUUsRUFBRSxXQUFTLEVBQUUsU0FBTztBQUFHLFdBQU8sSUFBRSxJQUFFLElBQUUsRUFBRSxDQUFDO0FBQUEsRUFBQztBQUFDLElBQUUsU0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFdBQU8sS0FBSyxJQUFJLEdBQUUsR0FBRSxJQUFFO0FBQUEsRUFBQztBQUMzZSxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxXQUFPLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxTQUFPLFNBQVMsR0FBRTtBQUFDLE9BQUcsQ0FBQyxNQUFJLElBQUUsR0FBRyxHQUFFLEtBQUssR0FBRztBQUFHLGFBQVEsS0FBSyxLQUFLLE1BQU0sT0FBTyxFQUFFLEdBQUUsT0FBTyxHQUFFLElBQUU7QUFBRSxRQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRTtBQUFDLFVBQUcsS0FBSyxPQUFLLENBQUMsS0FBSyxXQUFXLFVBQVEsS0FBSyxLQUFLLElBQUksT0FBTyxFQUFFLFVBQVEsS0FBSyxHQUFFO0FBQUMsWUFBRSxFQUFFLENBQUM7QUFBRSxjQUFNLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQVEsQ0FBQztBQUFFLFlBQUUsT0FBSyxFQUFFLFNBQU8sSUFBRSxFQUFFLE9BQU8sR0FBRSxDQUFDLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBQSxNQUFFO0FBQUMsV0FBSyxTQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFBRSxXQUFLLElBQUksT0FBTyxDQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssU0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFDdmEsSUFBRSxRQUFNLFdBQVU7QUFBQyxVQUFNLElBQUUsQ0FBQztBQUFFLGVBQVUsS0FBSyxLQUFLLE1BQU0sT0FBTyxHQUFFO0FBQUMsWUFBTSxJQUFFLEVBQUUsTUFBTTtBQUFFLFFBQUUsUUFBTSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUM7QUFBQyxRQUFHLEtBQUssSUFBSSxZQUFVLEtBQUssS0FBSyxJQUFJLE9BQU8sRUFBRSxHQUFFLE1BQU07QUFBRSxTQUFLLFNBQU8sS0FBSyxNQUFNLE1BQU07QUFBRSxTQUFLLFNBQU8sS0FBSyxNQUFNLE1BQU07QUFBRSxXQUFPLEVBQUUsU0FBTyxRQUFRLElBQUksQ0FBQyxJQUFFO0FBQUEsRUFBSTtBQUFFLElBQUUsVUFBUSxTQUFTLEdBQUU7QUFBQyxXQUFPLEtBQUssS0FBRyxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBUSxXQUFVO0FBQUMsZUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLEVBQUUsR0FBRSxRQUFRO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFDN2EsSUFBRSxNQUFJLFNBQVMsR0FBRTtBQUFDLFdBQU8sS0FBSyxLQUFHLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsYUFBTyxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsRUFBRSxPQUFLO0FBQUEsSUFBSSxDQUFDLElBQUUsS0FBSyxNQUFNLElBQUksQ0FBQyxLQUFHO0FBQUEsRUFBSTtBQUFFLElBQUUsTUFBSSxTQUFTLEdBQUUsR0FBRTtBQUFDLFdBQU8sTUFBSSxhQUFXLElBQUUsR0FBRSxJQUFFLEdBQUcsR0FBRSxLQUFLLEdBQUc7QUFBRyxTQUFLLE1BQU0sSUFBSSxHQUFFLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsY0FBWTtBQUFHLElBQUUsU0FBTztBQUFHLElBQUUsU0FBTztBQUFHLEtBQUcsR0FBRyxTQUFTO0FBQUUsV0FBUyxHQUFHLEdBQUUsSUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRSxVQUFJLElBQUUsT0FBSyxJQUFFLE1BQUk7QUFBRyxlQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsTUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFFLElBQUUsQ0FBQztBQUFHLE1BQUUsVUFBUSxFQUFFLEtBQUssQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxvQkFBSTtBQUFLLGFBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsSUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRSxVQUFJLElBQUUsT0FBSyxJQUFFLE1BQUk7QUFBRyxlQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFFLEVBQUUsV0FBUyxNQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUcsTUFBRSxVQUFRLEVBQUUsS0FBSyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFDN3NCLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsb0JBQUk7QUFBSyxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUUsZUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLFNBQU8sRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRyxNQUFFLFVBQVEsRUFBRSxLQUFLLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsb0JBQUk7QUFBSyxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQ2pVLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsS0FBRyxFQUFFLGdCQUFjO0FBQU0sUUFBSSxJQUFFLElBQUUsRUFBRSxNQUFNLElBQUU7QUFBRSxRQUFHLENBQUMsRUFBRSxRQUFPLEtBQUssT0FBTyxHQUFFLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBRSxTQUFJLElBQUUsR0FBRyxJQUFFLElBQUUsTUFBSSxPQUFLLElBQUUsS0FBRyxNQUFJLEdBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQyxNQUFJLEVBQUUsTUFBSztBQUFDLFlBQU0sSUFBRTtBQUFLLGFBQU8sRUFBRSxLQUFLLFdBQVU7QUFBQyxlQUFPLEdBQUcsS0FBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsSUFBRSxNQUFLLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsV0FBTyxHQUFHLEtBQUssTUFBSyxHQUFFLEdBQUUsR0FBRSxJQUFFLElBQUUsTUFBSyxHQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUEsRUFBQztBQUNoVCxXQUFTLEdBQUcsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUU7QUFBQyxRQUFHLElBQUUsS0FBSyxNQUFNLFFBQU87QUFBQyxZQUFNLElBQUUsS0FBSyxNQUFNLENBQUM7QUFBRSxXQUFJLElBQUUsS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRSxHQUFFLEdBQUUsSUFBRSxDQUFDLE1BQUksRUFBRSxNQUFLO0FBQUMsY0FBTSxJQUFFO0FBQUssZUFBTyxFQUFFLEtBQUssV0FBVTtBQUFDLGlCQUFPLEVBQUUsT0FBTyxHQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQztBQUFDLGFBQU8sS0FBSyxPQUFPLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBSSxHQUFFO0FBQUUsWUFBTyxHQUFFO0FBQUEsTUFBQyxLQUFLO0FBQUUsWUFBRTtBQUFNLFlBQUUsR0FBRyxLQUFLLEdBQUc7QUFBRSxZQUFFO0FBQUs7QUFBQSxNQUFNLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRSxLQUFLLE9BQUssR0FBRyxLQUFLLEtBQUksS0FBSyxJQUFJLElBQUk7QUFBRSxZQUFFO0FBQUs7QUFBQSxNQUFNLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRSxLQUFLLFNBQU8sR0FBRyxLQUFLLEtBQUs7QUFBRSxZQUFFO0FBQUs7QUFBQSxNQUFNO0FBQVE7QUFBQSxJQUFNO0FBQUMsV0FBTyxHQUFHLEtBQUssTUFBSyxHQUFFLEdBQUUsR0FBRSxLQUFHLE1BQUssR0FBRSxDQUFDO0FBQUEsRUFBQztBQUN0YyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFHO0FBQUUsTUFBRSxFQUFFLFNBQU8sQ0FBQyxNQUFJLFVBQVEsRUFBRSxJQUFJO0FBQUUsVUFBTSxJQUFFLEVBQUUsU0FBTyxJQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUcsUUFBRSxFQUFFLFNBQU8sSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBRSxRQUFHLEtBQUssVUFBUSxFQUFFLFFBQU8sS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQztBQUFFLFFBQUcsR0FBRTtBQUFDLGFBQU8sTUFBSSxhQUFXLElBQUUsS0FBSyxNQUFNLENBQUM7QUFBRyxVQUFHLEVBQUUsUUFBTyxLQUFLLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTyxHQUFFLENBQUM7QUFBRSxjQUFPLEdBQUU7QUFBQSxRQUFDLEtBQUs7QUFBTSxlQUFLLGFBQVc7QUFBRyxlQUFLLE1BQUksR0FBRyxHQUFFLEtBQUssR0FBRztBQUFFLG1CQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsS0FBSyxNQUFNLFFBQU8sSUFBSSxLQUFFLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsR0FBRSxFQUFFLGFBQVcsT0FBRyxFQUFFLE1BQUksS0FBSztBQUFJLGNBQUcsS0FBSyxRQUFPO0FBQUMsZ0JBQUUsQ0FBQztBQUFFLHVCQUFVLEtBQUssS0FBSyxNQUFNLE9BQU8sRUFBRSxHQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUFFLG1CQUFPLFFBQVEsSUFBSSxDQUFDO0FBQUEsVUFBQztBQUFDO0FBQUEsUUFDemdCLEtBQUs7QUFBTSxlQUFLLE1BQUksR0FBRyxHQUFFLEtBQUssR0FBRztBQUFFO0FBQUEsUUFBTSxLQUFLO0FBQU0sZUFBSyxRQUFNLEdBQUcsR0FBRSxLQUFLLEtBQUs7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFO0FBQUcsZUFBVSxLQUFLLEVBQUUsUUFBUSxHQUFFO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxZQUFNLElBQUUsRUFBRSxDQUFDO0FBQUUsVUFBSSxJQUFFO0FBQUcsZUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsWUFBRSxFQUFFLENBQUMsS0FBRyxDQUFDLEVBQUU7QUFBRSxZQUFJLElBQUU7QUFBRyxpQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxPQUFJLElBQUUsTUFBSSxPQUFLLE1BQUksV0FBUyxNQUFJLEVBQUUsQ0FBQyxJQUFFLE1BQUksRUFBRSxDQUFDO0FBQUcsWUFBRSxNQUFJLElBQUU7QUFBSSxjQUFJLElBQUUsTUFBSSxNQUFJO0FBQUEsTUFBQztBQUFDLFVBQUUsT0FBSyxJQUFFLFFBQU0sSUFBRTtBQUFLLFlBQUksSUFBRSxNQUFJLE1BQUk7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsU0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxLQUFLLElBQUksU0FBTyxLQUFLLGFBQVcsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFFLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBRyxRQUFHLEdBQUU7QUFBQyxVQUFHLEtBQUssV0FBVyxVQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLGFBQUksSUFBRSxFQUFFLENBQUMsT0FBSyxJQUFFLEVBQUUsUUFBUSxLQUFHLEVBQUUsSUFBRSxDQUFDLE1BQUksRUFBRSxHQUFFLElBQUk7QUFBQSxhQUFNO0FBQUMsZ0JBQU0sSUFBRSxFQUFFLFFBQVEsQ0FBQztBQUFFLGVBQUcsS0FBRyxFQUFFLE9BQU8sR0FBRSxDQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBQSxVQUFNLElBQUcsS0FBSyxLQUFJLENBQUMsR0FBRSxLQUFLLFNBQU8sR0FBRyxLQUFLLEtBQUksQ0FBQztBQUFFLFdBQUcsS0FBSyxJQUFJLE9BQU8sQ0FBQztBQUFBLElBQUM7QUFBQyxTQUFLLE9BQUssS0FBSyxZQUFZLEtBQUssRUFBQyxLQUFJLEVBQUMsQ0FBQyxHQUFFLEtBQUssS0FBRyxHQUFHLElBQUk7QUFBRyxTQUFLLFNBQU8s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QUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUcsSUFBRSxLQUFHLElBQUUsSUFBRSxFQUFFLE1BQUksSUFBRSxLQUFLLEdBQUUsSUFBRSxHQUFFLElBQUUsS0FBSyxJQUFJLElBQUUsR0FBRSxLQUFLLE1BQUksSUFBRSxJQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLHNCQUFFLEVBQUUsS0FBSyxNQUFJLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxDQUFDO0FBQUUsc0JBQUUsS0FBSyxpQkFBZSxJQUFFO0FBQUUsd0JBQU0sSUFBRSxLQUFLLFFBQU0sS0FBSyxNQUFNLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxDQUFDLElBQUUsR0FBRyxLQUFHLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsQ0FBQztBQUFFLG9CQUFFLE1BQUssR0FBRSxJQUFFLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLElBQUUsQ0FBQztBQUFBLGdCQUFDO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQSxRQUFDO0FBQUMsYUFBSyxjQUFZLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssT0FBSyxLQUFLLFlBQVksS0FBSyxJQUFFLEVBQUMsS0FBSSxFQUFDLElBQUUsRUFBQyxLQUFJLEVBQUMsQ0FBQyxHQUFFLEtBQUssS0FBRyxHQUFHLElBQUk7QUFBRyxXQUFPO0FBQUEsRUFBSTtBQUN6WSxXQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksR0FBRTtBQUFFLFFBQUcsRUFBRSxJQUFFLEVBQUUsQ0FBQyxNQUFJLEtBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRTtBQUFDLFdBQUcsSUFBRSxNQUFJLEVBQUUsQ0FBQyxJQUFFLEVBQUUsSUFBRyxFQUFFLENBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFLLElBQUUsRUFBRSxJQUFJLENBQUMsS0FBRyxJQUFFLElBQUUsRUFBRSxJQUFJLEdBQUUsSUFBRSxFQUFFLFdBQVMsSUFBSSxFQUFFLEVBQUUsUUFBUSxJQUFFLG9CQUFJLEtBQUcsTUFBSSxJQUFFLEVBQUUsS0FBSSxFQUFFLENBQUMsSUFBRTtBQUFHLE9BQUMsSUFBRSxFQUFFLElBQUksQ0FBQyxLQUFHLElBQUUsSUFBRSxFQUFFLElBQUksR0FBRSxJQUFFLElBQUUsQ0FBQyxDQUFDO0FBQUUsVUFBRztBQUFFLGlCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBSSxJQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUU7QUFBQyxjQUFHLEtBQUcsRUFBRTtBQUFPLFlBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFFLENBQUM7QUFBRSxZQUFFLGVBQWEsSUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUUsQ0FBQztBQUFFO0FBQUEsUUFBSztBQUFBO0FBQUMsVUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBRSxDQUFDO0FBQUcsUUFBRSxLQUFLLENBQUM7QUFBRSxVQUFHLEVBQUUsV0FBUyxTQUFHLE1BQUcsR0FBRTtBQUFDLFlBQUUsSUFBSSxHQUFHLENBQUM7QUFBRSxZQUFHLEVBQUUsV0FBVyxVQUFRLEtBQUssRUFBRSxJQUFJLE9BQU8sRUFBRSxHQUFFLFNBQVMsQ0FBQyxNQUFJLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUM5ZjtBQUFHLFVBQUUsQ0FBQyxJQUFFLElBQUU7QUFBQSxNQUFDO0FBQUMsUUFBRSxnQkFBYyxJQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQSxJQUFFO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFPLEtBQUcsSUFBRSxJQUFFLEtBQUcsS0FBRyxNQUFJLElBQUUsS0FBRyxLQUFHLE1BQUksSUFBRSxNQUFJLEtBQUcsS0FBRyxPQUFLLEtBQUcsS0FBRyxNQUFJLElBQUUsSUFBRTtBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsU0FBTyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxLQUFHLE9BQU8sTUFBSSxXQUFTLE9BQU8sTUFBSSxhQUFXLElBQUUsR0FBRSxJQUFFLE1BQUksSUFBRSxHQUFFLElBQUU7QUFBSyxRQUFHLEtBQUcsRUFBRSxNQUFNLFFBQU8sRUFBRSxRQUFNLE9BQUcsSUFBRSxLQUFLLFlBQVksR0FBRSxHQUFFLENBQUMsR0FBRSxFQUFFLFFBQU0sTUFBRztBQUFFLFFBQUksSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBRSxVQUFJLElBQUUsRUFBRSxTQUFPLEdBQUUsSUFBRSxFQUFFLFNBQU8sR0FBRSxJQUFFLEVBQUUsVUFBUSxHQUFFLElBQUUsRUFBRSxTQUFRLElBQUUsRUFBRSxTQUFRLEtBQUcsSUFBRSxFQUFFLFlBQVUsRUFBRSxRQUFPLElBQUUsRUFBRSxPQUFNLElBQUUsRUFBRSxZQUFXLElBQUUsS0FBSyxNQUFJLEVBQUU7QUFBSyxXQUFPLE1BQUksZ0JBQWMsSUFBRSxLQUFLO0FBQVMsUUFBRSxLQUFLLFNBQU8sTUFBSTtBQUFHLFFBQUksSUFBRSxLQUFLLFFBQVEsT0FBTyxHQUFFLENBQUMsQ0FBQztBQUFFLFFBQUUsRUFBRTtBQUFPLFFBQUUsTUFBSSxJQUFFLE1BQUk7QUFBRyxRQUFHLE1BQUksRUFBRSxRQUFPLEdBQUc7QUFBQSxNQUFLO0FBQUEsTUFBSyxFQUFFLENBQUM7QUFBQSxNQUFFO0FBQUEsTUFBRztBQUFBLE1BQ3pwQjtBQUFBLE1BQUU7QUFBQSxNQUFFO0FBQUEsTUFBRTtBQUFBLElBQUM7QUFBRSxRQUFHLE1BQUksS0FBRyxLQUFHLENBQUMsRUFBRSxRQUFPLEdBQUcsS0FBSyxNQUFLLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLFFBQUksSUFBRSxFQUFFLEdBQUUsSUFBRSxHQUFFO0FBQUUsVUFBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUU7QUFBRyxTQUFHLE1BQUksTUFBSSxJQUFFLElBQUUsS0FBSyxJQUFFLEtBQUs7QUFBWSxRQUFHLEtBQUssSUFBRztBQUFDLFVBQUcsS0FBSyxHQUFHLFdBQVMsSUFBRSxLQUFLLEdBQUcsT0FBTyxNQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsR0FBRSxNQUFJLE9BQUksUUFBTztBQUFFLFlBQU0sSUFBRTtBQUFLLGFBQU8sV0FBZ0I7QUFBQTtBQUFDLG1CQUFRLEdBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLGlCQUFJLElBQUUsRUFBRSxDQUFDLE1BQUksQ0FBQyxFQUFFLENBQUMsR0FBRTtBQUFDLGdCQUFFLENBQUMsSUFBRTtBQUFFLGtCQUFFLE1BQU0sR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsT0FBRyxLQUFFO0FBQUUsa0JBQUcsSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLENBQUMsR0FBRTtBQUFDLG9CQUFFO0FBQUU7QUFBQSxjQUFLO0FBQUMsb0JBQUksS0FBRyxLQUFHLEVBQUUsV0FBUyxJQUFFO0FBQUEsWUFBRztBQUFDLGlCQUFHLEtBQUcsTUFBSSxJQUFFLEtBQUcsQ0FBQyxFQUFFLFdBQVMsSUFBRSxFQUFFLFlBQVcsSUFBRSxJQUFHLElBQUUsSUFBRyxJQUFFLEVBQUU7QUFBQSxVQUFFO0FBQUMsaUJBQU8sR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsUUFBQztBQUFBLFFBQUU7QUFBQSxJQUFDO0FBQUMsYUFBUSxHQUFFLEdBQUUsSUFBRSxHQUFFLEtBQUk7QUFBQyxXQUFJLElBQ3ZmLEVBQUUsQ0FBQyxNQUFJLENBQUMsRUFBRSxDQUFDLEdBQUU7QUFBQyxVQUFFLENBQUMsSUFBRTtBQUFFLFlBQUUsR0FBRyxNQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsT0FBRyxLQUFFO0FBQUUsWUFBRyxJQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsQ0FBQyxHQUFFO0FBQUMsY0FBRTtBQUFFO0FBQUEsUUFBSztBQUFDLGNBQUksS0FBRyxLQUFHLEVBQUUsV0FBUyxJQUFFO0FBQUEsTUFBRztBQUFDLFdBQUcsS0FBRyxNQUFJLElBQUUsS0FBRyxDQUFDLEVBQUUsV0FBUyxJQUFFLEtBQUssWUFBVyxJQUFFLElBQUcsSUFBRSxJQUFHLElBQUUsRUFBRTtBQUFBLElBQUU7QUFBQyxXQUFPLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLFFBQU8sSUFBRTtBQUFFLFFBQUcsSUFBRSxFQUFFLEtBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsYUFBVSxNQUFJLEVBQUUsUUFBTyxJQUFFLEdBQUcsS0FBSyxNQUFLLEVBQUUsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxJQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRSxJQUFJO0FBQUUsV0FBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFBLEVBQUM7QUFDN1YsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFFLEdBQUcsTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsV0FBTyxLQUFLLEtBQUcsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGFBQU8sSUFBRSxLQUFHLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUEsSUFBQyxDQUFDLElBQUUsS0FBRyxFQUFFLFNBQU8sSUFBRSxHQUFHLEtBQUssTUFBSyxHQUFFLEdBQUUsQ0FBQyxJQUFFLElBQUksRUFBRSxHQUFFLElBQUksSUFBRSxJQUFFLENBQUMsSUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFFLElBQUk7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBQztBQUFFLFFBQUcsS0FBRyxFQUFFLFFBQU87QUFBQyxVQUFHLEVBQUUsVUFBUSxHQUFFO0FBQUMsVUFBRSxLQUFLLENBQUM7QUFBRTtBQUFBLE1BQU07QUFBQyxlQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsRUFBRSxHQUFFLENBQUMsSUFBRTtBQUFFLFVBQUcsRUFBRSxRQUFPO0FBQUMsVUFBRSxLQUFLLENBQUM7QUFBRTtBQUFBLE1BQU07QUFBQSxJQUFDO0FBQUMsUUFBRyxDQUFDLEVBQUUsUUFBTztBQUFBLEVBQUM7QUFDNVYsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUk7QUFBRSxVQUFJLElBQUUsRUFBRSxpQkFBZSxJQUFFLE9BQUssSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFO0FBQUcsUUFBRyxFQUFFLEdBQUcsUUFBTyxFQUFFLEdBQUcsSUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsUUFBRSxLQUFHLElBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFJLEVBQUUsSUFBSSxDQUFDLElBQUUsRUFBRSxJQUFJLElBQUksQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUUsV0FBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLEtBQUssZ0JBQWMsRUFBRSxRQUFPLElBQUksRUFBRSxDQUFDO0FBQUUsUUFBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFFLElBQUUsRUFBRTtBQUFPLFlBQUksSUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFFLEdBQUcsQ0FBQyxHQUFFLENBQUM7QUFBQSxJQUFFLE1BQU0sS0FB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QUM7QUFBRSxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsTUFBSyxJQUFFLEtBQUssT0FBTyxDQUFDO0FBQUUsV0FBTyxLQUFHLEVBQUUsT0FBSyxFQUFFLEtBQUssTUFBSSxFQUFFLElBQUksR0FBRSxDQUFDLENBQUMsSUFBRSxLQUFLLElBQUksR0FBRSxDQUFDO0FBQUEsRUFBQztBQUN6YyxJQUFFLFVBQVEsV0FBVTtBQUFDLFFBQUcsQ0FBQyxLQUFLLFdBQVcsUUFBTztBQUFLLE9BQUcsS0FBSyxHQUFHO0FBQUUsU0FBSyxTQUFPLEdBQUcsS0FBSyxHQUFHO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFBRSxJQUFFLGNBQVk7QUFBRyxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRTtBQUFDLFFBQUksR0FBRTtBQUFFLFlBQU8sR0FBRTtBQUFBLE1BQUMsS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFLEdBQUcsS0FBSyxHQUFHO0FBQUU7QUFBQSxNQUFNLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRTtBQUFLO0FBQUEsTUFBTSxLQUFLO0FBQUUsWUFBRTtBQUFNLFlBQUUsR0FBRyxLQUFLLEtBQUksS0FBSyxJQUFJLElBQUk7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFLEdBQUcsS0FBSyxLQUFJLEtBQUssSUFBSSxJQUFJO0FBQUU7QUFBQSxNQUFNO0FBQVE7QUFBQSxJQUFNO0FBQUMsV0FBTyxHQUFHLEtBQUssTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFDN1gsSUFBRSxTQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBRyxFQUFFLFNBQU8sT0FBTyxNQUFJLGFBQVcsSUFBRSxLQUFLLE1BQU0sQ0FBQyxJQUFHLElBQUUsRUFBRSxNQUFNLEdBQUcsR0FBRSxFQUFFLEVBQUUsU0FBTyxDQUFDLE1BQUksVUFBUSxFQUFFLElBQUksR0FBRSxFQUFFLFdBQVMsS0FBRyxFQUFFLE1BQU0s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QVMsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsT0FBRztBQUFDLFFBQUUsS0FBSyxHQUFHLFlBQVksU0FBTyxLQUFLLFFBQU0sTUFBSSxLQUFLLFFBQU0sS0FBSSxVQUFVLEVBQUUsWUFBWSxTQUFPLEtBQUssUUFBTSxNQUFJLEtBQUssUUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDO0FBQUUsVUFBTSxJQUFFO0FBQUssV0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLFVBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxVQUFRLEtBQUcsRUFBRSxPQUFPLFFBQU0sQ0FBQztBQUFFLFVBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxRQUFPO0FBQUUsVUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUM7QUFBRSxhQUFPLElBQUUsRUFBRSxPQUFPLENBQUMsSUFBRTtBQUFBLElBQUMsQ0FBQztBQUFBLEVBQUM7QUFDdFUsSUFBRSxTQUFPLFNBQVMsR0FBRTtBQUFDLFdBQU8sTUFBSSxhQUFXLElBQUUsQ0FBQyxDQUFDO0FBQUcsVUFBTSxJQUFFLEtBQUssR0FBRyxZQUFZLE9BQU0sVUFBVSxFQUFFLFlBQVksS0FBSyxHQUFFLElBQUUsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxDQUFDLElBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFFLFdBQU8sUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxDQUFDLElBQUUsRUFBQyxJQUFHLEVBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxDQUFDLElBQUUsS0FBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUUsS0FBSTtBQUFFLGFBQU87QUFBQSxJQUFDLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxNQUFJLFNBQVMsR0FBRTtBQUFDLFFBQUUsS0FBSyxHQUFHLFlBQVksT0FBTSxV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LFVBQVUsT0FBTyxjQUFjLFVBQVU7QUFDL0MsVUFBRSxZQUFZLEtBQUs7QUFDbkIsVUFBRSxPQUFPLEtBQUs7QUFDZCxhQUFLLFlBQVksS0FBSztBQUN0QixnQkFBUSxZQUFZLEtBQUs7QUFDekIsaUJBQVMsWUFBWSxNQUFNO0FBQUEsTUFDN0I7QUFFQSxjQUFRLFlBQVksUUFBUTtBQUFBLElBQzlCO0FBRUEsYUFBUyxXQUFXO0FBQ2xCLFlBQU1BLFNBQVEsU0FBUyxjQUFjLGNBQWMsRUFBRSxNQUFNLEtBQUs7QUFDaEUsWUFBTSxRQUFRO0FBQ2QsWUFBTSxVQUFVLE1BQU0sT0FBTztBQUFBLFFBQzNCLE9BQU9BO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUjtBQUFBLE1BQ0YsQ0FBQztBQUNELFlBQU0sUUFBUSxDQUFDO0FBRWYsY0FBUSxRQUFRLFNBQVUsUUFBUTtBQUNoQyxlQUFPLE9BQU8sUUFBUSxTQUFVLEdBQUc7QUFDakMsZ0JBQU0sRUFBRSxFQUFFLElBQUksRUFBRTtBQUFBLFFBQ2xCLENBQUM7QUFBQSxNQUNILENBQUM7QUFFRCxrQkFBWSxLQUFLO0FBQUEsSUFDbkI7QUFFQSxhQUFTLFdBQVc7QUFDbEIsWUFBTSxhQUFhLFNBQVMsY0FBYyxjQUFjO0FBQ3hELGlCQUFXLGlCQUFpQixVQUFVLFNBQVUsR0FBRztBQUNqRCxVQUFFLGVBQWU7QUFDakIsaUJBQVM7QUFBQSxNQUNYLENBQUM7QUFDRCxpQkFBVyxpQkFBaUIsU0FBUyxXQUFZO0FBQy9DLGlCQUFTO0FBQUEsTUFDWCxDQUFDO0FBQ0QsZUFBUyxjQUFjLGlCQUFpQixFQUFFLFVBQVUsSUFBSSxRQUFRO0FBQ2hFLGVBQVMsY0FBYyxlQUFlLEVBQUUsVUFBVSxPQUFPLFFBQVE7QUFDakUsZUFBUyxjQUFjLGNBQWMsRUFBRSxNQUFNO0FBQUEsSUFDL0M7QUFFQSxhQUFTLGFBQWE7QUFDcEIsZUFBUyxjQUFjLGlCQUFpQixFQUFFLFVBQVUsT0FBTyxRQUFRO0FBQ25FLFlBQU0sb0RBQW9ELEVBQ3ZELEtBQUssU0FBVSxVQUFVO0FBQ3hCLGVBQU8sU0FBUyxLQUFLO0FBQUEsTUFDdkIsQ0FBQyxFQUNBLEtBQUssU0FBVSxNQUFNO0FBQ3BCLGFBQUssUUFBUSxTQUFVLE1BQU07QUFDM0IsZ0JBQU0sSUFBSSxJQUFJO0FBQUEsUUFDaEIsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUFBLElBQ0w7QUFFQSxlQUFXO0FBQ1gsYUFBUztBQUFBLEVBQ1gsR0FBRzsiLAogICJuYW1lcyI6IFsicXVlcnkiXQp9Cg==
