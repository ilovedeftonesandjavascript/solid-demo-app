;
(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  System.register(['./index-legacy--SB7AO-A.js'], function (exports, module) {
    'use strict';

    var createSignal, createRenderEffect, on, createRoot, ElementNode, onCleanup, memo, children, createComponent, mergeProps, Text, combineStyles, styles, View, setGlobalBackground, Dynamic, For;
    return {
      setters: [function (module) {
        createSignal = module.c;
        createRenderEffect = module.p;
        on = module.o;
        createRoot = module.q;
        ElementNode = module.E;
        onCleanup = module.n;
        memo = module.m;
        children = module.k;
        createComponent = module.h;
        mergeProps = module.l;
        Text = module.T;
        combineStyles = module.j;
        styles = module.r;
        View = module.V;
        setGlobalBackground = module.s;
        Dynamic = module.D;
        For = module.F;
      }],
      execute: function execute() {
        var Visible = function Visible(props) {
          var _createSignal = createSignal(),
            _createSignal2 = _slicedToArray(_createSignal, 2),
            current = _createSignal2[0],
            setCurrent = _createSignal2[1];
          createRenderEffect(on(function () {
            return props.when;
          }, function (condition) {
            var _current;
            if (condition && !current()) {
              var root = createRoot(function (dispose) {
                return {
                  disposer: dispose,
                  childList: children(function () {
                    return props.children;
                  }).toArray()
                };
              });
              setCurrent(root);
            }
            var isHidden = !condition;
            (_current = current()) === null || _current === void 0 || _current.childList.forEach(function (child) {
              if (child instanceof ElementNode) {
                child.hidden = isHidden;
              }
            });
          }));
          onCleanup(function () {
            var _current2;
            return (_current2 = current()) === null || _current2 === void 0 ? void 0 : _current2.disposer();
          });
          return memo(function () {
            var _current3;
            return (_current3 = current()) === null || _current3 === void 0 ? void 0 : _current3.childList;
          });
        };
        var Button = function Button(props) {
          return createComponent(ButtonContainer, mergeProps(props, {
            get color() {
              return props.backgroundColor;
            },
            get itemSpacing() {
              return props.contentSpacing;
            },
            alignItems: "center",
            forwardStates: true,
            get children() {
              return createComponent(Text, {
                get color() {
                  return props.textColor;
                },
                get contain() {
                  var _props$contain;
                  return (_props$contain = props.contain) !== null && _props$contain !== void 0 ? _props$contain : "width";
                },
                get textAlign() {
                  return props.textAlign;
                },
                get style() {
                  var _props$tone;
                  return combineStyles(styles.Text.tones[(_props$tone = props.tone) !== null && _props$tone !== void 0 ? _props$tone : styles.tone],
                  //
                  styles.Text.base);
                },
                get children() {
                  return props.children;
                }
              });
            }
          }));
        };
        var ButtonContainer = function ButtonContainer(props) {
          return createComponent(View, mergeProps(props, {
            get color() {
              return props.backgroundColor;
            },
            get justifyContent() {
              return props.justify;
            },
            get itemSpacing() {
              return props.contentSpacing;
            },
            get style() {
              var _styles$Container$ton, _props$tone2;
              return combineStyles(props.style, //
              (_styles$Container$ton = styles.Container.tones) === null || _styles$Container$ton === void 0 ? void 0 : _styles$Container$ton[(_props$tone2 = props.tone) !== null && _props$tone2 !== void 0 ? _props$tone2 : styles.tone]);
            },
            forwardStates: true
          }));
        };
        function Square(props) {
          return createComponent(View, mergeProps(props, {
            get width() {
              return props.size || 80;
            },
            get height() {
              return props.size || 80;
            },
            get color() {
              return props.color || 0xE0E0E0FF;
            }
          }));
        }
        function Card(props) {
          return createComponent(View, mergeProps(props, {
            get width() {
              return props.size === "large" ? 400 : 200;
            },
            get height() {
              return props.size === "large" ? 500 : 300;
            },
            transition: true,
            color: 0x0891B2FF,
            get children() {
              return [createComponent(Square, {
                x: 80,
                y: 80
              }), createComponent(Square, {
                x: 20,
                y: 20,
                size: 40
              })];
            }
          }));
        }
        var PositioningPage = exports("default", function () {
          setGlobalBackground(0x1E293BFF);
          var _createSignal3 = createSignal(100),
            _createSignal4 = _slicedToArray(_createSignal3, 2),
            x = _createSignal4[0],
            setX = _createSignal4[1];
          var _createSignal5 = createSignal(true),
            _createSignal6 = _slicedToArray(_createSignal5, 2),
            size = _createSignal6[0],
            setSize = _createSignal6[1];
          var _createSignal7 = createSignal([Square, Card, Square]),
            _createSignal8 = _slicedToArray(_createSignal7, 1),
            dynamicComponents = _createSignal8[0];
          var interval = setInterval(function () {
            setX(function (x2) {
              return x2 === 100 ? 250 : 100;
            });
            setSize(function (size2) {
              return !size2;
            });
          }, 2e3);
          onCleanup(function () {
            return clearInterval(interval);
          });
          return createComponent(View, {
            x: 150,
            autofocus: true,
            get children() {
              return [createComponent(Visible, {
                get when() {
                  return size();
                },
                get children() {
                  return [createComponent(Square, {
                    onDestroy: function onDestroy() {
                      return console.log("destroyed");
                    },
                    x: 100,
                    y: 100,
                    size: 50,
                    color: 0xEF4444FF
                  }), createComponent(Square, {
                    x: 100,
                    y: 200,
                    size: 100,
                    color: 0x22C55EFF
                  }), createComponent(Square, {
                    x: 100,
                    y: 350,
                    size: 200,
                    color: 0x3B82F6FF
                  })];
                }
              }), createComponent(Square, {
                get x() {
                  return x();
                },
                y: 600,
                size: 50,
                transition: {
                  x: {
                    duration: 1e3,
                    easing: "linear"
                  }
                }
              }), createComponent(Card, {
                x: 500,
                y: 100,
                get size() {
                  return size() ? "large" : "small";
                }
              }), createComponent(Card, {
                x: 500,
                y: 500,
                get size() {
                  return size() ? "small" : "large";
                }
              }), createComponent(View, {
                x: 1e3,
                y: 100,
                get children() {
                  return [createComponent(Text, {
                    children: "Dynamic Components"
                  }), createComponent(Dynamic, {
                    component: Button,
                    y: 50,
                    width: 200,
                    children: "Button"
                  }), createComponent(For, {
                    get each() {
                      return dynamicComponents();
                    },
                    children: function children(Component, index) {
                      return createComponent(Dynamic, {
                        component: Component,
                        get x() {
                          return 205 * index();
                        },
                        y: 300,
                        size: 50
                      });
                    }
                  })];
                }
              })];
            }
          });
        });
      }
    };
  });
})();
