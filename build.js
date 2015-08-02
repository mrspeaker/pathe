System.registerDynamic("npm:process@0.10.1/browser.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  function drainQueue() {
    if (draining) {
      return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      var i = -1;
      while (++i < len) {
        currentQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  process.nextTick = function(fun) {
    queue.push(fun);
    if (!draining) {
      setTimeout(drainQueue, 0);
    }
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/PooledClass.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var oneArgumentPooler = function(copyFieldsFrom) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, copyFieldsFrom);
        return instance;
      } else {
        return new Klass(copyFieldsFrom);
      }
    };
    var twoArgumentPooler = function(a1, a2) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2);
        return instance;
      } else {
        return new Klass(a1, a2);
      }
    };
    var threeArgumentPooler = function(a1, a2, a3) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3);
        return instance;
      } else {
        return new Klass(a1, a2, a3);
      }
    };
    var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3, a4, a5);
        return instance;
      } else {
        return new Klass(a1, a2, a3, a4, a5);
      }
    };
    var standardReleaser = function(instance) {
      var Klass = this;
      ("production" !== "production" ? invariant(instance instanceof Klass, 'Trying to release an instance into a pool of a different type.') : invariant(instance instanceof Klass));
      if (instance.destructor) {
        instance.destructor();
      }
      if (Klass.instancePool.length < Klass.poolSize) {
        Klass.instancePool.push(instance);
      }
    };
    var DEFAULT_POOL_SIZE = 10;
    var DEFAULT_POOLER = oneArgumentPooler;
    var addPoolingTo = function(CopyConstructor, pooler) {
      var NewKlass = CopyConstructor;
      NewKlass.instancePool = [];
      NewKlass.getPooled = pooler || DEFAULT_POOLER;
      if (!NewKlass.poolSize) {
        NewKlass.poolSize = DEFAULT_POOL_SIZE;
      }
      NewKlass.release = standardReleaser;
      return NewKlass;
    };
    var PooledClass = {
      addPoolingTo: addPoolingTo,
      oneArgumentPooler: oneArgumentPooler,
      twoArgumentPooler: twoArgumentPooler,
      threeArgumentPooler: threeArgumentPooler,
      fiveArgumentPooler: fiveArgumentPooler
    };
    module.exports = PooledClass;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/Object.assign.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function assign(target, sources) {
    if (target == null) {
      throw new TypeError('Object.assign target cannot be null or undefined');
    }
    var to = Object(target);
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
      var nextSource = arguments[nextIndex];
      if (nextSource == null) {
        continue;
      }
      var from = Object(nextSource);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
    }
    return to;
  }
  module.exports = assign;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/emptyObject.js", ["github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var emptyObject = {};
    if ("production" !== "production") {
      Object.freeze(emptyObject);
    }
    module.exports = emptyObject;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/emptyFunction.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }
  function emptyFunction() {}
  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function() {
    return this;
  };
  emptyFunction.thatReturnsArgument = function(arg) {
    return arg;
  };
  module.exports = emptyFunction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactCurrentOwner.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactCurrentOwner = {current: null};
  module.exports = ReactCurrentOwner;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactRootIndex.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactRootIndexInjection = {injectCreateReactRootIndex: function(_createReactRootIndex) {
      ReactRootIndex.createReactRootIndex = _createReactRootIndex;
    }};
  var ReactRootIndex = {
    createReactRootIndex: null,
    injection: ReactRootIndexInjection
  };
  module.exports = ReactRootIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getIteratorFn.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]));
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  module.exports = getIteratorFn;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactLifeCycle.js", ["github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactLifeCycle = {
      currentlyMountingInstance: null,
      currentlyUnmountingInstance: null
    };
    module.exports = ReactLifeCycle;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactInstanceMap.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactInstanceMap = {
    remove: function(key) {
      key._reactInternalInstance = undefined;
    },
    get: function(key) {
      return key._reactInternalInstance;
    },
    has: function(key) {
      return key._reactInternalInstance !== undefined;
    },
    set: function(key, value) {
      key._reactInternalInstance = value;
    }
  };
  module.exports = ReactInstanceMap;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/CallbackQueue.js", ["npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function CallbackQueue() {
      this._callbacks = null;
      this._contexts = null;
    }
    assign(CallbackQueue.prototype, {
      enqueue: function(callback, context) {
        this._callbacks = this._callbacks || [];
        this._contexts = this._contexts || [];
        this._callbacks.push(callback);
        this._contexts.push(context);
      },
      notifyAll: function() {
        var callbacks = this._callbacks;
        var contexts = this._contexts;
        if (callbacks) {
          ("production" !== "production" ? invariant(callbacks.length === contexts.length, 'Mismatched list of contexts in callback queue') : invariant(callbacks.length === contexts.length));
          this._callbacks = null;
          this._contexts = null;
          for (var i = 0,
              l = callbacks.length; i < l; i++) {
            callbacks[i].call(contexts[i]);
          }
          callbacks.length = 0;
          contexts.length = 0;
        }
      },
      reset: function() {
        this._callbacks = null;
        this._contexts = null;
      },
      destructor: function() {
        this.reset();
      }
    });
    PooledClass.addPoolingTo(CallbackQueue);
    module.exports = CallbackQueue;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactPerf.js", ["github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactPerf = {
      enableMeasure: false,
      storedMeasure: _noMeasure,
      measureMethods: function(object, objectName, methodNames) {
        if ("production" !== "production") {
          for (var key in methodNames) {
            if (!methodNames.hasOwnProperty(key)) {
              continue;
            }
            object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
          }
        }
      },
      measure: function(objName, fnName, func) {
        if ("production" !== "production") {
          var measuredFunc = null;
          var wrapper = function() {
            if (ReactPerf.enableMeasure) {
              if (!measuredFunc) {
                measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
              }
              return measuredFunc.apply(this, arguments);
            }
            return func.apply(this, arguments);
          };
          wrapper.displayName = objName + '_' + fnName;
          return wrapper;
        }
        return func;
      },
      injection: {injectMeasure: function(measure) {
          ReactPerf.storedMeasure = measure;
        }}
    };
    function _noMeasure(objName, fnName, func) {
      return func;
    }
    module.exports = ReactPerf;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactOwner.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var ReactOwner = {
      isValidOwner: function(object) {
        return !!((object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function'));
      },
      addComponentAsRefTo: function(component, ref, owner) {
        ("production" !== "production" ? invariant(ReactOwner.isValidOwner(owner), 'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' + 'usually means that you\'re trying to add a ref to a component that ' + 'doesn\'t have an owner (that is, was not created inside of another ' + 'component\'s `render` method). Try rendering this component inside of ' + 'a new top-level component which will hold the ref.') : invariant(ReactOwner.isValidOwner(owner)));
        owner.attachRef(ref, component);
      },
      removeComponentAsRefFrom: function(component, ref, owner) {
        ("production" !== "production" ? invariant(ReactOwner.isValidOwner(owner), 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' + 'usually means that you\'re trying to remove a ref to a component that ' + 'doesn\'t have an owner (that is, was not created inside of another ' + 'component\'s `render` method). Try rendering this component inside of ' + 'a new top-level component which will hold the ref.') : invariant(ReactOwner.isValidOwner(owner)));
        if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
          owner.detachRef(ref);
        }
      }
    };
    module.exports = ReactOwner;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactPropTypeLocations.js", ["npm:react@0.13.3/lib/keyMirror.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var keyMirror = require("npm:react@0.13.3/lib/keyMirror.js");
  var ReactPropTypeLocations = keyMirror({
    prop: null,
    context: null,
    childContext: null
  });
  module.exports = ReactPropTypeLocations;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactPropTypeLocationNames.js", ["github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactPropTypeLocationNames = {};
    if ("production" !== "production") {
      ReactPropTypeLocationNames = {
        prop: 'prop',
        context: 'context',
        childContext: 'child context'
      };
    }
    module.exports = ReactPropTypeLocationNames;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactNativeComponent.js", ["npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var autoGenerateWrapperClass = null;
    var genericComponentClass = null;
    var tagToComponentClass = {};
    var textComponentClass = null;
    var ReactNativeComponentInjection = {
      injectGenericComponentClass: function(componentClass) {
        genericComponentClass = componentClass;
      },
      injectTextComponentClass: function(componentClass) {
        textComponentClass = componentClass;
      },
      injectComponentClasses: function(componentClasses) {
        assign(tagToComponentClass, componentClasses);
      },
      injectAutoWrapper: function(wrapperFactory) {
        autoGenerateWrapperClass = wrapperFactory;
      }
    };
    function getComponentClassForElement(element) {
      if (typeof element.type === 'function') {
        return element.type;
      }
      var tag = element.type;
      var componentClass = tagToComponentClass[tag];
      if (componentClass == null) {
        tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
      }
      return componentClass;
    }
    function createInternalComponent(element) {
      ("production" !== "production" ? invariant(genericComponentClass, 'There is no registered component for the tag %s', element.type) : invariant(genericComponentClass));
      return new genericComponentClass(element.type, element.props);
    }
    function createInstanceForText(text) {
      return new textComponentClass(text);
    }
    function isTextComponent(component) {
      return component instanceof textComponentClass;
    }
    var ReactNativeComponent = {
      getComponentClassForElement: getComponentClassForElement,
      createInternalComponent: createInternalComponent,
      createInstanceForText: createInstanceForText,
      isTextComponent: isTextComponent,
      injection: ReactNativeComponentInjection
    };
    module.exports = ReactNativeComponent;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/Transaction.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var Mixin = {
      reinitializeTransaction: function() {
        this.transactionWrappers = this.getTransactionWrappers();
        if (!this.wrapperInitData) {
          this.wrapperInitData = [];
        } else {
          this.wrapperInitData.length = 0;
        }
        this._isInTransaction = false;
      },
      _isInTransaction: false,
      getTransactionWrappers: null,
      isInTransaction: function() {
        return !!this._isInTransaction;
      },
      perform: function(method, scope, a, b, c, d, e, f) {
        ("production" !== "production" ? invariant(!this.isInTransaction(), 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(!this.isInTransaction()));
        var errorThrown;
        var ret;
        try {
          this._isInTransaction = true;
          errorThrown = true;
          this.initializeAll(0);
          ret = method.call(scope, a, b, c, d, e, f);
          errorThrown = false;
        } finally {
          try {
            if (errorThrown) {
              try {
                this.closeAll(0);
              } catch (err) {}
            } else {
              this.closeAll(0);
            }
          } finally {
            this._isInTransaction = false;
          }
        }
        return ret;
      },
      initializeAll: function(startIndex) {
        var transactionWrappers = this.transactionWrappers;
        for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          try {
            this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
            this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
          } finally {
            if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
              try {
                this.initializeAll(i + 1);
              } catch (err) {}
            }
          }
        }
      },
      closeAll: function(startIndex) {
        ("production" !== "production" ? invariant(this.isInTransaction(), 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(this.isInTransaction()));
        var transactionWrappers = this.transactionWrappers;
        for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          var initData = this.wrapperInitData[i];
          var errorThrown;
          try {
            errorThrown = true;
            if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
              wrapper.close.call(this, initData);
            }
            errorThrown = false;
          } finally {
            if (errorThrown) {
              try {
                this.closeAll(i + 1);
              } catch (e) {}
            }
          }
        }
        this.wrapperInitData.length = 0;
      }
    };
    var Transaction = {
      Mixin: Mixin,
      OBSERVED_ERROR: {}
    };
    module.exports = Transaction;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactErrorUtils.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var ReactErrorUtils = {guard: function(func, name) {
      return func;
    }};
  module.exports = ReactErrorUtils;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/keyOf.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var keyOf = function(oneKeyObj) {
    var key;
    for (key in oneKeyObj) {
      if (!oneKeyObj.hasOwnProperty(key)) {
        continue;
      }
      return key;
    }
    return null;
  };
  module.exports = keyOf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/mapObject.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function mapObject(object, callback, context) {
    if (!object) {
      return null;
    }
    var result = {};
    for (var name in object) {
      if (hasOwnProperty.call(object, name)) {
        result[name] = callback.call(context, object[name], name, object);
      }
    }
    return result;
  }
  module.exports = mapObject;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/DOMProperty.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function checkMask(value, bitmask) {
      return (value & bitmask) === bitmask;
    }
    var DOMPropertyInjection = {
      MUST_USE_ATTRIBUTE: 0x1,
      MUST_USE_PROPERTY: 0x2,
      HAS_SIDE_EFFECTS: 0x4,
      HAS_BOOLEAN_VALUE: 0x8,
      HAS_NUMERIC_VALUE: 0x10,
      HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
      HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,
      injectDOMPropertyConfig: function(domPropertyConfig) {
        var Properties = domPropertyConfig.Properties || {};
        var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
        var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
        var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
        if (domPropertyConfig.isCustomAttribute) {
          DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
        }
        for (var propName in Properties) {
          ("production" !== "production" ? invariant(!DOMProperty.isStandardName.hasOwnProperty(propName), 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName)));
          DOMProperty.isStandardName[propName] = true;
          var lowerCased = propName.toLowerCase();
          DOMProperty.getPossibleStandardName[lowerCased] = propName;
          if (DOMAttributeNames.hasOwnProperty(propName)) {
            var attributeName = DOMAttributeNames[propName];
            DOMProperty.getPossibleStandardName[attributeName] = propName;
            DOMProperty.getAttributeName[propName] = attributeName;
          } else {
            DOMProperty.getAttributeName[propName] = lowerCased;
          }
          DOMProperty.getPropertyName[propName] = DOMPropertyNames.hasOwnProperty(propName) ? DOMPropertyNames[propName] : propName;
          if (DOMMutationMethods.hasOwnProperty(propName)) {
            DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
          } else {
            DOMProperty.getMutationMethod[propName] = null;
          }
          var propConfig = Properties[propName];
          DOMProperty.mustUseAttribute[propName] = checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
          DOMProperty.mustUseProperty[propName] = checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
          DOMProperty.hasSideEffects[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
          DOMProperty.hasBooleanValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
          DOMProperty.hasNumericValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
          DOMProperty.hasPositiveNumericValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
          DOMProperty.hasOverloadedBooleanValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);
          ("production" !== "production" ? invariant(!DOMProperty.mustUseAttribute[propName] || !DOMProperty.mustUseProperty[propName], 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(!DOMProperty.mustUseAttribute[propName] || !DOMProperty.mustUseProperty[propName]));
          ("production" !== "production" ? invariant(DOMProperty.mustUseProperty[propName] || !DOMProperty.hasSideEffects[propName], 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(DOMProperty.mustUseProperty[propName] || !DOMProperty.hasSideEffects[propName]));
          ("production" !== "production" ? invariant(!!DOMProperty.hasBooleanValue[propName] + !!DOMProperty.hasNumericValue[propName] + !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(!!DOMProperty.hasBooleanValue[propName] + !!DOMProperty.hasNumericValue[propName] + !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1));
        }
      }
    };
    var defaultValueCache = {};
    var DOMProperty = {
      ID_ATTRIBUTE_NAME: 'data-reactid',
      isStandardName: {},
      getPossibleStandardName: {},
      getAttributeName: {},
      getPropertyName: {},
      getMutationMethod: {},
      mustUseAttribute: {},
      mustUseProperty: {},
      hasSideEffects: {},
      hasBooleanValue: {},
      hasNumericValue: {},
      hasPositiveNumericValue: {},
      hasOverloadedBooleanValue: {},
      _isCustomAttributeFunctions: [],
      isCustomAttribute: function(attributeName) {
        for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
          var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
          if (isCustomAttributeFn(attributeName)) {
            return true;
          }
        }
        return false;
      },
      getDefaultValueForProperty: function(nodeName, prop) {
        var nodeDefaults = defaultValueCache[nodeName];
        var testElement;
        if (!nodeDefaults) {
          defaultValueCache[nodeName] = nodeDefaults = {};
        }
        if (!(prop in nodeDefaults)) {
          testElement = document.createElement(nodeName);
          nodeDefaults[prop] = testElement[prop];
        }
        return nodeDefaults[prop];
      },
      injection: DOMPropertyInjection
    };
    module.exports = DOMProperty;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/escapeTextContentForBrowser.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ESCAPE_LOOKUP = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    '\'': '&#x27;'
  };
  var ESCAPE_REGEX = /[&><"']/g;
  function escaper(match) {
    return ESCAPE_LOOKUP[match];
  }
  function escapeTextContentForBrowser(text) {
    return ('' + text).replace(ESCAPE_REGEX, escaper);
  }
  module.exports = escapeTextContentForBrowser;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/CSSProperty.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var isUnitlessNumber = {
    boxFlex: true,
    boxFlexGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    strokeDashoffset: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }
  var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(prefix) {
      isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
  });
  var shorthandPropertyExpansions = {
    background: {
      backgroundImage: true,
      backgroundPosition: true,
      backgroundRepeat: true,
      backgroundColor: true
    },
    border: {
      borderWidth: true,
      borderStyle: true,
      borderColor: true
    },
    borderBottom: {
      borderBottomWidth: true,
      borderBottomStyle: true,
      borderBottomColor: true
    },
    borderLeft: {
      borderLeftWidth: true,
      borderLeftStyle: true,
      borderLeftColor: true
    },
    borderRight: {
      borderRightWidth: true,
      borderRightStyle: true,
      borderRightColor: true
    },
    borderTop: {
      borderTopWidth: true,
      borderTopStyle: true,
      borderTopColor: true
    },
    font: {
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      fontSize: true,
      lineHeight: true,
      fontFamily: true
    }
  };
  var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
  };
  module.exports = CSSProperty;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ExecutionEnvironment.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var canUseDOM = !!((typeof window !== 'undefined' && window.document && window.document.createElement));
  var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM
  };
  module.exports = ExecutionEnvironment;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/camelize.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _hyphenPattern = /-(.)/g;
  function camelize(string) {
    return string.replace(_hyphenPattern, function(_, character) {
      return character.toUpperCase();
    });
  }
  module.exports = camelize;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/dangerousStyleValue.js", ["npm:react@0.13.3/lib/CSSProperty.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var CSSProperty = require("npm:react@0.13.3/lib/CSSProperty.js");
  var isUnitlessNumber = CSSProperty.isUnitlessNumber;
  function dangerousStyleValue(name, value) {
    var isEmpty = value == null || typeof value === 'boolean' || value === '';
    if (isEmpty) {
      return '';
    }
    var isNonNumeric = isNaN(value);
    if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
      return '' + value;
    }
    if (typeof value === 'string') {
      value = value.trim();
    }
    return value + 'px';
  }
  module.exports = dangerousStyleValue;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/hyphenate.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _uppercasePattern = /([A-Z])/g;
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }
  module.exports = hyphenate;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/memoizeStringOnly.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function memoizeStringOnly(callback) {
    var cache = {};
    return function(string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }
  module.exports = memoizeStringOnly;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/toArray.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function toArray(obj) {
      var length = obj.length;
      ("production" !== "production" ? invariant(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function'), 'toArray: Array-like object expected') : invariant(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')));
      ("production" !== "production" ? invariant(typeof length === 'number', 'toArray: Object needs a length property') : invariant(typeof length === 'number'));
      ("production" !== "production" ? invariant(length === 0 || (length - 1) in obj, 'toArray: Object should have keys for indices') : invariant(length === 0 || (length - 1) in obj));
      if (obj.hasOwnProperty) {
        try {
          return Array.prototype.slice.call(obj);
        } catch (e) {}
      }
      var ret = Array(length);
      for (var ii = 0; ii < length; ii++) {
        ret[ii] = obj[ii];
      }
      return ret;
    }
    module.exports = toArray;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getMarkupWrap.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
    var shouldWrap = {
      'circle': true,
      'clipPath': true,
      'defs': true,
      'ellipse': true,
      'g': true,
      'line': true,
      'linearGradient': true,
      'path': true,
      'polygon': true,
      'polyline': true,
      'radialGradient': true,
      'rect': true,
      'stop': true,
      'text': true
    };
    var selectWrap = [1, '<select multiple="true">', '</select>'];
    var tableWrap = [1, '<table>', '</table>'];
    var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
    var svgWrap = [1, '<svg>', '</svg>'];
    var markupWrap = {
      '*': [1, '?<div>', '</div>'],
      'area': [1, '<map>', '</map>'],
      'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      'legend': [1, '<fieldset>', '</fieldset>'],
      'param': [1, '<object>', '</object>'],
      'tr': [2, '<table><tbody>', '</tbody></table>'],
      'optgroup': selectWrap,
      'option': selectWrap,
      'caption': tableWrap,
      'colgroup': tableWrap,
      'tbody': tableWrap,
      'tfoot': tableWrap,
      'thead': tableWrap,
      'td': trWrap,
      'th': trWrap,
      'circle': svgWrap,
      'clipPath': svgWrap,
      'defs': svgWrap,
      'ellipse': svgWrap,
      'g': svgWrap,
      'line': svgWrap,
      'linearGradient': svgWrap,
      'path': svgWrap,
      'polygon': svgWrap,
      'polyline': svgWrap,
      'radialGradient': svgWrap,
      'rect': svgWrap,
      'stop': svgWrap,
      'text': svgWrap
    };
    function getMarkupWrap(nodeName) {
      ("production" !== "production" ? invariant(!!dummyNode, 'Markup wrapping node not initialized') : invariant(!!dummyNode));
      if (!markupWrap.hasOwnProperty(nodeName)) {
        nodeName = '*';
      }
      if (!shouldWrap.hasOwnProperty(nodeName)) {
        if (nodeName === '*') {
          dummyNode.innerHTML = '<link />';
        } else {
          dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
        }
        shouldWrap[nodeName] = !dummyNode.firstChild;
      }
      return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
    }
    module.exports = getMarkupWrap;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactMultiChildUpdateTypes.js", ["npm:react@0.13.3/lib/keyMirror.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var keyMirror = require("npm:react@0.13.3/lib/keyMirror.js");
  var ReactMultiChildUpdateTypes = keyMirror({
    INSERT_MARKUP: null,
    MOVE_EXISTING: null,
    REMOVE_NODE: null,
    TEXT_CONTENT: null
  });
  module.exports = ReactMultiChildUpdateTypes;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/setInnerHTML.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
    var WHITESPACE_TEST = /^[ \r\n\t\f]/;
    var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
    var setInnerHTML = function(node, html) {
      node.innerHTML = html;
    };
    if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
      setInnerHTML = function(node, html) {
        MSApp.execUnsafeLocalFunction(function() {
          node.innerHTML = html;
        });
      };
    }
    if (ExecutionEnvironment.canUseDOM) {
      var testElement = document.createElement('div');
      testElement.innerHTML = ' ';
      if (testElement.innerHTML === '') {
        setInnerHTML = function(node, html) {
          if (node.parentNode) {
            node.parentNode.replaceChild(node, node);
          }
          if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
            node.innerHTML = '\uFEFF' + html;
            var textNode = node.firstChild;
            if (textNode.data.length === 1) {
              node.removeChild(textNode);
            } else {
              textNode.deleteData(0, 1);
            }
          } else {
            node.innerHTML = html;
          }
        };
      }
    }
    module.exports = setInnerHTML;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/EventPluginRegistry.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var EventPluginOrder = null;
    var namesToPlugins = {};
    function recomputePluginOrdering() {
      if (!EventPluginOrder) {
        return;
      }
      for (var pluginName in namesToPlugins) {
        var PluginModule = namesToPlugins[pluginName];
        var pluginIndex = EventPluginOrder.indexOf(pluginName);
        ("production" !== "production" ? invariant(pluginIndex > -1, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(pluginIndex > -1));
        if (EventPluginRegistry.plugins[pluginIndex]) {
          continue;
        }
        ("production" !== "production" ? invariant(PluginModule.extractEvents, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(PluginModule.extractEvents));
        EventPluginRegistry.plugins[pluginIndex] = PluginModule;
        var publishedEvents = PluginModule.eventTypes;
        for (var eventName in publishedEvents) {
          ("production" !== "production" ? invariant(publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName), 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName)));
        }
      }
    }
    function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
      ("production" !== "production" ? invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName), 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)));
      EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
      var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
      if (phasedRegistrationNames) {
        for (var phaseName in phasedRegistrationNames) {
          if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
            var phasedRegistrationName = phasedRegistrationNames[phaseName];
            publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
          }
        }
        return true;
      } else if (dispatchConfig.registrationName) {
        publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
        return true;
      }
      return false;
    }
    function publishRegistrationName(registrationName, PluginModule, eventName) {
      ("production" !== "production" ? invariant(!EventPluginRegistry.registrationNameModules[registrationName], 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(!EventPluginRegistry.registrationNameModules[registrationName]));
      EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
      EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
    }
    var EventPluginRegistry = {
      plugins: [],
      eventNameDispatchConfigs: {},
      registrationNameModules: {},
      registrationNameDependencies: {},
      injectEventPluginOrder: function(InjectedEventPluginOrder) {
        ("production" !== "production" ? invariant(!EventPluginOrder, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(!EventPluginOrder));
        EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
        recomputePluginOrdering();
      },
      injectEventPluginsByName: function(injectedNamesToPlugins) {
        var isOrderingDirty = false;
        for (var pluginName in injectedNamesToPlugins) {
          if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
            continue;
          }
          var PluginModule = injectedNamesToPlugins[pluginName];
          if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
            ("production" !== "production" ? invariant(!namesToPlugins[pluginName], 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(!namesToPlugins[pluginName]));
            namesToPlugins[pluginName] = PluginModule;
            isOrderingDirty = true;
          }
        }
        if (isOrderingDirty) {
          recomputePluginOrdering();
        }
      },
      getPluginModuleForEvent: function(event) {
        var dispatchConfig = event.dispatchConfig;
        if (dispatchConfig.registrationName) {
          return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
        }
        for (var phase in dispatchConfig.phasedRegistrationNames) {
          if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
            continue;
          }
          var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
          if (PluginModule) {
            return PluginModule;
          }
        }
        return null;
      },
      _resetEventPlugins: function() {
        EventPluginOrder = null;
        for (var pluginName in namesToPlugins) {
          if (namesToPlugins.hasOwnProperty(pluginName)) {
            delete namesToPlugins[pluginName];
          }
        }
        EventPluginRegistry.plugins.length = 0;
        var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
        for (var eventName in eventNameDispatchConfigs) {
          if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
            delete eventNameDispatchConfigs[eventName];
          }
        }
        var registrationNameModules = EventPluginRegistry.registrationNameModules;
        for (var registrationName in registrationNameModules) {
          if (registrationNameModules.hasOwnProperty(registrationName)) {
            delete registrationNameModules[registrationName];
          }
        }
      }
    };
    module.exports = EventPluginRegistry;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/accumulateInto.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function accumulateInto(current, next) {
      ("production" !== "production" ? invariant(next != null, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(next != null));
      if (current == null) {
        return next;
      }
      var currentIsArray = Array.isArray(current);
      var nextIsArray = Array.isArray(next);
      if (currentIsArray && nextIsArray) {
        current.push.apply(current, next);
        return current;
      }
      if (currentIsArray) {
        current.push(next);
        return current;
      }
      if (nextIsArray) {
        return [current].concat(next);
      }
      return [current, next];
    }
    module.exports = accumulateInto;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/forEachAccumulated.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var forEachAccumulated = function(arr, cb, scope) {
    if (Array.isArray(arr)) {
      arr.forEach(cb, scope);
    } else if (arr) {
      cb.call(scope, arr);
    }
  };
  module.exports = forEachAccumulated;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactEventEmitterMixin.js", ["npm:react@0.13.3/lib/EventPluginHub.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventPluginHub = require("npm:react@0.13.3/lib/EventPluginHub.js");
  function runEventQueueInBatch(events) {
    EventPluginHub.enqueueEvents(events);
    EventPluginHub.processEventQueue();
  }
  var ReactEventEmitterMixin = {handleTopLevel: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
      runEventQueueInBatch(events);
    }};
  module.exports = ReactEventEmitterMixin;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ViewportMetrics.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ViewportMetrics = {
    currentScrollLeft: 0,
    currentScrollTop: 0,
    refreshScrollValues: function(scrollPosition) {
      ViewportMetrics.currentScrollLeft = scrollPosition.x;
      ViewportMetrics.currentScrollTop = scrollPosition.y;
    }
  };
  module.exports = ViewportMetrics;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/isEventSupported.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
  var useHasFeature;
  if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature('', '') !== true;
  }
  function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
      return false;
    }
    var eventName = 'on' + eventNameSuffix;
    var isSupported = eventName in document;
    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }
    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }
    return isSupported;
  }
  module.exports = isEventSupported;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactEmptyComponent.js", ["npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactInstanceMap.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactInstanceMap = require("npm:react@0.13.3/lib/ReactInstanceMap.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var component;
    var nullComponentIDsRegistry = {};
    var ReactEmptyComponentInjection = {injectEmptyComponent: function(emptyComponent) {
        component = ReactElement.createFactory(emptyComponent);
      }};
    var ReactEmptyComponentType = function() {};
    ReactEmptyComponentType.prototype.componentDidMount = function() {
      var internalInstance = ReactInstanceMap.get(this);
      if (!internalInstance) {
        return;
      }
      registerNullComponentID(internalInstance._rootNodeID);
    };
    ReactEmptyComponentType.prototype.componentWillUnmount = function() {
      var internalInstance = ReactInstanceMap.get(this);
      if (!internalInstance) {
        return;
      }
      deregisterNullComponentID(internalInstance._rootNodeID);
    };
    ReactEmptyComponentType.prototype.render = function() {
      ("production" !== "production" ? invariant(component, 'Trying to return null from a render, but no null placeholder component ' + 'was injected.') : invariant(component));
      return component();
    };
    var emptyElement = ReactElement.createElement(ReactEmptyComponentType);
    function registerNullComponentID(id) {
      nullComponentIDsRegistry[id] = true;
    }
    function deregisterNullComponentID(id) {
      delete nullComponentIDsRegistry[id];
    }
    function isNullComponentID(id) {
      return !!nullComponentIDsRegistry[id];
    }
    var ReactEmptyComponent = {
      emptyElement: emptyElement,
      injection: ReactEmptyComponentInjection,
      isNullComponentID: isNullComponentID
    };
    module.exports = ReactEmptyComponent;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/adler32.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var MOD = 65521;
  function adler32(data) {
    var a = 1;
    var b = 0;
    for (var i = 0; i < data.length; i++) {
      a = (a + data.charCodeAt(i)) % MOD;
      b = (b + a) % MOD;
    }
    return a | (b << 16);
  }
  module.exports = adler32;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/isNode.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  function isNode(object) {
    return !!(object && (((typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'))));
  }
  module.exports = isNode;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getReactRootElementInContainer.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOC_NODE_TYPE = 9;
  function getReactRootElementInContainer(container) {
    if (!container) {
      return null;
    }
    if (container.nodeType === DOC_NODE_TYPE) {
      return container.documentElement;
    } else {
      return container.firstChild;
    }
  }
  module.exports = getReactRootElementInContainer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactComponentEnvironment.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var injected = false;
    var ReactComponentEnvironment = {
      unmountIDFromEnvironment: null,
      replaceNodeWithMarkupByID: null,
      processChildrenUpdates: null,
      injection: {injectEnvironment: function(environment) {
          ("production" !== "production" ? invariant(!injected, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(!injected));
          ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
          ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
          ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
          injected = true;
        }}
    };
    module.exports = ReactComponentEnvironment;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/shouldUpdateReactComponent.js", ["npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var warning = require("npm:react@0.13.3/lib/warning.js");
    function shouldUpdateReactComponent(prevElement, nextElement) {
      if (prevElement != null && nextElement != null) {
        var prevType = typeof prevElement;
        var nextType = typeof nextElement;
        if (prevType === 'string' || prevType === 'number') {
          return (nextType === 'string' || nextType === 'number');
        } else {
          if (nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key) {
            var ownersMatch = prevElement._owner === nextElement._owner;
            var prevName = null;
            var nextName = null;
            var nextDisplayName = null;
            if ("production" !== "production") {
              if (!ownersMatch) {
                if (prevElement._owner != null && prevElement._owner.getPublicInstance() != null && prevElement._owner.getPublicInstance().constructor != null) {
                  prevName = prevElement._owner.getPublicInstance().constructor.displayName;
                }
                if (nextElement._owner != null && nextElement._owner.getPublicInstance() != null && nextElement._owner.getPublicInstance().constructor != null) {
                  nextName = nextElement._owner.getPublicInstance().constructor.displayName;
                }
                if (nextElement.type != null && nextElement.type.displayName != null) {
                  nextDisplayName = nextElement.type.displayName;
                }
                if (nextElement.type != null && typeof nextElement.type === 'string') {
                  nextDisplayName = nextElement.type;
                }
                if (typeof nextElement.type !== 'string' || nextElement.type === 'input' || nextElement.type === 'textarea') {
                  if ((prevElement._owner != null && prevElement._owner._isOwnerNecessary === false) || (nextElement._owner != null && nextElement._owner._isOwnerNecessary === false)) {
                    if (prevElement._owner != null) {
                      prevElement._owner._isOwnerNecessary = true;
                    }
                    if (nextElement._owner != null) {
                      nextElement._owner._isOwnerNecessary = true;
                    }
                    ("production" !== "production" ? warning(false, '<%s /> is being rendered by both %s and %s using the same ' + 'key (%s) in the same place. Currently, this means that ' + 'they don\'t preserve state. This behavior should be very ' + 'rare so we\'re considering deprecating it. Please contact ' + 'the React team and explain your use case so that we can ' + 'take that into consideration.', nextDisplayName || 'Unknown Component', prevName || '[Unknown]', nextName || '[Unknown]', prevElement.key) : null);
                  }
                }
              }
            }
            return ownersMatch;
          }
        }
      }
      return false;
    }
    module.exports = shouldUpdateReactComponent;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/flattenChildren.js", ["npm:react@0.13.3/lib/traverseAllChildren.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var traverseAllChildren = require("npm:react@0.13.3/lib/traverseAllChildren.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    function flattenSingleChildIntoContext(traverseContext, child, name) {
      var result = traverseContext;
      var keyUnique = !result.hasOwnProperty(name);
      if ("production" !== "production") {
        ("production" !== "production" ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : null);
      }
      if (keyUnique && child != null) {
        result[name] = child;
      }
    }
    function flattenChildren(children) {
      if (children == null) {
        return children;
      }
      var result = {};
      traverseAllChildren(children, flattenSingleChildIntoContext, result);
      return result;
    }
    module.exports = flattenChildren;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/EventPropagators.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/EventPluginHub.js", "npm:react@0.13.3/lib/accumulateInto.js", "npm:react@0.13.3/lib/forEachAccumulated.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
    var EventPluginHub = require("npm:react@0.13.3/lib/EventPluginHub.js");
    var accumulateInto = require("npm:react@0.13.3/lib/accumulateInto.js");
    var forEachAccumulated = require("npm:react@0.13.3/lib/forEachAccumulated.js");
    var PropagationPhases = EventConstants.PropagationPhases;
    var getListener = EventPluginHub.getListener;
    function listenerAtPhase(id, event, propagationPhase) {
      var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
      return getListener(id, registrationName);
    }
    function accumulateDirectionalDispatches(domID, upwards, event) {
      if ("production" !== "production") {
        if (!domID) {
          throw new Error('Dispatching id must not be null');
        }
      }
      var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
      var listener = listenerAtPhase(domID, event, phase);
      if (listener) {
        event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
        event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
      }
    }
    function accumulateTwoPhaseDispatchesSingle(event) {
      if (event && event.dispatchConfig.phasedRegistrationNames) {
        EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
      }
    }
    function accumulateDispatches(id, ignoredDirection, event) {
      if (event && event.dispatchConfig.registrationName) {
        var registrationName = event.dispatchConfig.registrationName;
        var listener = getListener(id, registrationName);
        if (listener) {
          event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
          event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
        }
      }
    }
    function accumulateDirectDispatchesSingle(event) {
      if (event && event.dispatchConfig.registrationName) {
        accumulateDispatches(event.dispatchMarker, null, event);
      }
    }
    function accumulateTwoPhaseDispatches(events) {
      forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
    }
    function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
      EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
    }
    function accumulateDirectDispatches(events) {
      forEachAccumulated(events, accumulateDirectDispatchesSingle);
    }
    var EventPropagators = {
      accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
      accumulateDirectDispatches: accumulateDirectDispatches,
      accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
    };
    module.exports = EventPropagators;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getTextContentAccessor.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
  var contentKey = null;
  function getTextContentAccessor() {
    if (!contentKey && ExecutionEnvironment.canUseDOM) {
      contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
    }
    return contentKey;
  }
  module.exports = getTextContentAccessor;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getEventTarget.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function getEventTarget(nativeEvent) {
    var target = nativeEvent.target || nativeEvent.srcElement || window;
    return target.nodeType === 3 ? target.parentNode : target;
  }
  module.exports = getEventTarget;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticInputEvent.js", ["npm:react@0.13.3/lib/SyntheticEvent.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticEvent = require("npm:react@0.13.3/lib/SyntheticEvent.js");
  var InputEventInterface = {data: null};
  function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
  module.exports = SyntheticInputEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/isTextInputElement.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var supportedInputTypes = {
    'color': true,
    'date': true,
    'datetime': true,
    'datetime-local': true,
    'email': true,
    'month': true,
    'number': true,
    'password': true,
    'range': true,
    'search': true,
    'tel': true,
    'text': true,
    'time': true,
    'url': true,
    'week': true
  };
  function isTextInputElement(elem) {
    return elem && ((elem.nodeName === 'INPUT' && supportedInputTypes[elem.type] || elem.nodeName === 'TEXTAREA'));
  }
  module.exports = isTextInputElement;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ClientReactRootIndex.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var nextReactRootIndex = 0;
  var ClientReactRootIndex = {createReactRootIndex: function() {
      return nextReactRootIndex++;
    }};
  module.exports = ClientReactRootIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/DefaultEventPluginOrder.js", ["npm:react@0.13.3/lib/keyOf.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var keyOf = require("npm:react@0.13.3/lib/keyOf.js");
  var DefaultEventPluginOrder = [keyOf({ResponderEventPlugin: null}), keyOf({SimpleEventPlugin: null}), keyOf({TapEventPlugin: null}), keyOf({EnterLeaveEventPlugin: null}), keyOf({ChangeEventPlugin: null}), keyOf({SelectEventPlugin: null}), keyOf({BeforeInputEventPlugin: null}), keyOf({AnalyticsEventPlugin: null}), keyOf({MobileSafariClickEventPlugin: null})];
  module.exports = DefaultEventPluginOrder;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticUIEvent.js", ["npm:react@0.13.3/lib/SyntheticEvent.js", "npm:react@0.13.3/lib/getEventTarget.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticEvent = require("npm:react@0.13.3/lib/SyntheticEvent.js");
  var getEventTarget = require("npm:react@0.13.3/lib/getEventTarget.js");
  var UIEventInterface = {
    view: function(event) {
      if (event.view) {
        return event.view;
      }
      var target = getEventTarget(event);
      if (target != null && target.window === target) {
        return target;
      }
      var doc = target.ownerDocument;
      if (doc) {
        return doc.defaultView || doc.parentWindow;
      } else {
        return window;
      }
    },
    detail: function(event) {
      return event.detail || 0;
    }
  };
  function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
  module.exports = SyntheticUIEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getEventModifierState.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var modifierKeyToProp = {
    'Alt': 'altKey',
    'Control': 'ctrlKey',
    'Meta': 'metaKey',
    'Shift': 'shiftKey'
  };
  function modifierStateGetter(keyArg) {
    var syntheticEvent = this;
    var nativeEvent = syntheticEvent.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(keyArg);
    }
    var keyProp = modifierKeyToProp[keyArg];
    return keyProp ? !!nativeEvent[keyProp] : false;
  }
  function getEventModifierState(nativeEvent) {
    return modifierStateGetter;
  }
  module.exports = getEventModifierState;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/HTMLDOMPropertyConfig.js", ["npm:react@0.13.3/lib/DOMProperty.js", "npm:react@0.13.3/lib/ExecutionEnvironment.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMProperty = require("npm:react@0.13.3/lib/DOMProperty.js");
  var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
  var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
  var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
  var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
  var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
  var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
  var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
  var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
  var hasSVG;
  if (ExecutionEnvironment.canUseDOM) {
    var implementation = document.implementation;
    hasSVG = (implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1'));
  }
  var HTMLDOMPropertyConfig = {
    isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
    Properties: {
      accept: null,
      acceptCharset: null,
      accessKey: null,
      action: null,
      allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      allowTransparency: MUST_USE_ATTRIBUTE,
      alt: null,
      async: HAS_BOOLEAN_VALUE,
      autoComplete: null,
      autoPlay: HAS_BOOLEAN_VALUE,
      cellPadding: null,
      cellSpacing: null,
      charSet: MUST_USE_ATTRIBUTE,
      checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      classID: MUST_USE_ATTRIBUTE,
      className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
      cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      colSpan: null,
      content: null,
      contentEditable: null,
      contextMenu: MUST_USE_ATTRIBUTE,
      controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      coords: null,
      crossOrigin: null,
      data: null,
      dateTime: MUST_USE_ATTRIBUTE,
      defer: HAS_BOOLEAN_VALUE,
      dir: null,
      disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      download: HAS_OVERLOADED_BOOLEAN_VALUE,
      draggable: null,
      encType: null,
      form: MUST_USE_ATTRIBUTE,
      formAction: MUST_USE_ATTRIBUTE,
      formEncType: MUST_USE_ATTRIBUTE,
      formMethod: MUST_USE_ATTRIBUTE,
      formNoValidate: HAS_BOOLEAN_VALUE,
      formTarget: MUST_USE_ATTRIBUTE,
      frameBorder: MUST_USE_ATTRIBUTE,
      headers: null,
      height: MUST_USE_ATTRIBUTE,
      hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      high: null,
      href: null,
      hrefLang: null,
      htmlFor: null,
      httpEquiv: null,
      icon: null,
      id: MUST_USE_PROPERTY,
      label: null,
      lang: null,
      list: MUST_USE_ATTRIBUTE,
      loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      low: null,
      manifest: MUST_USE_ATTRIBUTE,
      marginHeight: null,
      marginWidth: null,
      max: null,
      maxLength: MUST_USE_ATTRIBUTE,
      media: MUST_USE_ATTRIBUTE,
      mediaGroup: null,
      method: null,
      min: null,
      multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      name: null,
      noValidate: HAS_BOOLEAN_VALUE,
      open: HAS_BOOLEAN_VALUE,
      optimum: null,
      pattern: null,
      placeholder: null,
      poster: null,
      preload: null,
      radioGroup: null,
      readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      rel: null,
      required: HAS_BOOLEAN_VALUE,
      role: MUST_USE_ATTRIBUTE,
      rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      rowSpan: null,
      sandbox: null,
      scope: null,
      scoped: HAS_BOOLEAN_VALUE,
      scrolling: null,
      seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      shape: null,
      size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      sizes: MUST_USE_ATTRIBUTE,
      span: HAS_POSITIVE_NUMERIC_VALUE,
      spellCheck: null,
      src: null,
      srcDoc: MUST_USE_PROPERTY,
      srcSet: MUST_USE_ATTRIBUTE,
      start: HAS_NUMERIC_VALUE,
      step: null,
      style: null,
      tabIndex: null,
      target: null,
      title: null,
      type: null,
      useMap: null,
      value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
      width: MUST_USE_ATTRIBUTE,
      wmode: MUST_USE_ATTRIBUTE,
      autoCapitalize: null,
      autoCorrect: null,
      itemProp: MUST_USE_ATTRIBUTE,
      itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      itemType: MUST_USE_ATTRIBUTE,
      itemID: MUST_USE_ATTRIBUTE,
      itemRef: MUST_USE_ATTRIBUTE,
      property: null,
      unselectable: MUST_USE_ATTRIBUTE
    },
    DOMAttributeNames: {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv'
    },
    DOMPropertyNames: {
      autoCapitalize: 'autocapitalize',
      autoComplete: 'autocomplete',
      autoCorrect: 'autocorrect',
      autoFocus: 'autofocus',
      autoPlay: 'autoplay',
      encType: 'encoding',
      hrefLang: 'hreflang',
      radioGroup: 'radiogroup',
      spellCheck: 'spellcheck',
      srcDoc: 'srcdoc',
      srcSet: 'srcset'
    }
  };
  module.exports = HTMLDOMPropertyConfig;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/MobileSafariClickEventPlugin.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/emptyFunction.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
  var emptyFunction = require("npm:react@0.13.3/lib/emptyFunction.js");
  var topLevelTypes = EventConstants.topLevelTypes;
  var MobileSafariClickEventPlugin = {
    eventTypes: null,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      if (topLevelType === topLevelTypes.topTouchStart) {
        var target = nativeEvent.target;
        if (target && !target.onclick) {
          target.onclick = emptyFunction;
        }
      }
    }
  };
  module.exports = MobileSafariClickEventPlugin;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/findDOMNode.js", ["npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/ReactInstanceMap.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/isNode.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var ReactInstanceMap = require("npm:react@0.13.3/lib/ReactInstanceMap.js");
    var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var isNode = require("npm:react@0.13.3/lib/isNode.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    function findDOMNode(componentOrElement) {
      if ("production" !== "production") {
        var owner = ReactCurrentOwner.current;
        if (owner !== null) {
          ("production" !== "production" ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : null);
          owner._warnedAboutRefsInRender = true;
        }
      }
      if (componentOrElement == null) {
        return null;
      }
      if (isNode(componentOrElement)) {
        return componentOrElement;
      }
      if (ReactInstanceMap.has(componentOrElement)) {
        return ReactMount.getNodeFromInstance(componentOrElement);
      }
      ("production" !== "production" ? invariant(componentOrElement.render == null || typeof componentOrElement.render !== 'function', 'Component (with keys: %s) contains `render` method ' + 'but is not mounted in the DOM', Object.keys(componentOrElement)) : invariant(componentOrElement.render == null || typeof componentOrElement.render !== 'function'));
      ("production" !== "production" ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false));
    }
    module.exports = findDOMNode;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDefaultBatchingStrategy.js", ["npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/Transaction.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/emptyFunction.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
  var Transaction = require("npm:react@0.13.3/lib/Transaction.js");
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  var emptyFunction = require("npm:react@0.13.3/lib/emptyFunction.js");
  var RESET_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: function() {
      ReactDefaultBatchingStrategy.isBatchingUpdates = false;
    }
  };
  var FLUSH_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
  };
  var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
  function ReactDefaultBatchingStrategyTransaction() {
    this.reinitializeTransaction();
  }
  assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    }});
  var transaction = new ReactDefaultBatchingStrategyTransaction();
  var ReactDefaultBatchingStrategy = {
    isBatchingUpdates: false,
    batchedUpdates: function(callback, a, b, c, d) {
      var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
      ReactDefaultBatchingStrategy.isBatchingUpdates = true;
      if (alreadyBatchingUpdates) {
        callback(a, b, c, d);
      } else {
        transaction.perform(callback, null, a, b, c, d);
      }
    }
  };
  module.exports = ReactDefaultBatchingStrategy;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/focusNode.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  function focusNode(node) {
    try {
      node.focus();
    } catch (e) {}
  }
  module.exports = focusNode;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/LocalEventTrapMixin.js", ["npm:react@0.13.3/lib/ReactBrowserEventEmitter.js", "npm:react@0.13.3/lib/accumulateInto.js", "npm:react@0.13.3/lib/forEachAccumulated.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactBrowserEventEmitter = require("npm:react@0.13.3/lib/ReactBrowserEventEmitter.js");
    var accumulateInto = require("npm:react@0.13.3/lib/accumulateInto.js");
    var forEachAccumulated = require("npm:react@0.13.3/lib/forEachAccumulated.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function remove(event) {
      event.remove();
    }
    var LocalEventTrapMixin = {
      trapBubbledEvent: function(topLevelType, handlerBaseName) {
        ("production" !== "production" ? invariant(this.isMounted(), 'Must be mounted to trap events') : invariant(this.isMounted()));
        var node = this.getDOMNode();
        ("production" !== "production" ? invariant(node, 'LocalEventTrapMixin.trapBubbledEvent(...): Requires node to be rendered.') : invariant(node));
        var listener = ReactBrowserEventEmitter.trapBubbledEvent(topLevelType, handlerBaseName, node);
        this._localEventListeners = accumulateInto(this._localEventListeners, listener);
      },
      componentWillUnmount: function() {
        if (this._localEventListeners) {
          forEachAccumulated(this._localEventListeners, remove);
        }
      }
    };
    module.exports = LocalEventTrapMixin;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMImg.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/LocalEventTrapMixin.js", "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
  var LocalEventTrapMixin = require("npm:react@0.13.3/lib/LocalEventTrapMixin.js");
  var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
  var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
  var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
  var img = ReactElement.createFactory('img');
  var ReactDOMImg = ReactClass.createClass({
    displayName: 'ReactDOMImg',
    tagName: 'IMG',
    mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],
    render: function() {
      return img(this.props);
    },
    componentDidMount: function() {
      this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
      this.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error');
    }
  });
  module.exports = ReactDOMImg;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMIframe.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/LocalEventTrapMixin.js", "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
  var LocalEventTrapMixin = require("npm:react@0.13.3/lib/LocalEventTrapMixin.js");
  var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
  var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
  var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
  var iframe = ReactElement.createFactory('iframe');
  var ReactDOMIframe = ReactClass.createClass({
    displayName: 'ReactDOMIframe',
    tagName: 'IFRAME',
    mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],
    render: function() {
      return iframe(this.props);
    },
    componentDidMount: function() {
      this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
    }
  });
  module.exports = ReactDOMIframe;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactPropTypes.js", ["npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactFragment.js", "npm:react@0.13.3/lib/ReactPropTypeLocationNames.js", "npm:react@0.13.3/lib/emptyFunction.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
  var ReactFragment = require("npm:react@0.13.3/lib/ReactFragment.js");
  var ReactPropTypeLocationNames = require("npm:react@0.13.3/lib/ReactPropTypeLocationNames.js");
  var emptyFunction = require("npm:react@0.13.3/lib/emptyFunction.js");
  var ANONYMOUS = '<<anonymous>>';
  var elementTypeChecker = createElementTypeChecker();
  var nodeTypeChecker = createNodeChecker();
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: elementTypeChecker,
    instanceOf: createInstanceTypeChecker,
    node: nodeTypeChecker,
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };
  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location) {
      componentName = componentName || ANONYMOUS;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error(("Required " + locationName + " `" + propName + "` was not specified in ") + ("`" + componentName + "`."));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];
        var preciseType = getPreciseType(propValue);
        return new Error(("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") + ("supplied to `" + componentName + "`, expected `" + expectedType + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error(("Invalid " + locationName + " `" + propName + "` of type ") + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error(("Invalid " + locationName + " `" + propName + "` supplied to ") + ("`" + componentName + "`, expected a ReactElement."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        return new Error(("Invalid " + locationName + " `" + propName + "` supplied to ") + ("`" + componentName + "`, expected instance of `" + expectedClassName + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (propValue === expectedValues[i]) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error(("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` ") + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error(("Invalid " + locationName + " `" + propName + "` of type ") + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    function validate(props, propName, componentName, location) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location) == null) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(("Invalid " + locationName + " `" + propName + "` supplied to ") + ("`" + componentName + "`."));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error(("Invalid " + locationName + " `" + propName + "` supplied to ") + ("`" + componentName + "`, expected a ReactNode."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error(("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` ") + ("supplied to `" + componentName + "`, expected `object`."));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }
        propValue = ReactFragment.extractIfFragment(propValue);
        for (var k in propValue) {
          if (!isNode(propValue[k])) {
            return false;
          }
        }
        return true;
      default:
        return false;
    }
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    return propType;
  }
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }
  module.exports = ReactPropTypes;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMOption.js", ["npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
    var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var option = ReactElement.createFactory('option');
    var ReactDOMOption = ReactClass.createClass({
      displayName: 'ReactDOMOption',
      tagName: 'OPTION',
      mixins: [ReactBrowserComponentMixin],
      componentWillMount: function() {
        if ("production" !== "production") {
          ("production" !== "production" ? warning(this.props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : null);
        }
      },
      render: function() {
        return option(this.props, this.props.children);
      }
    });
    module.exports = ReactDOMOption;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMSelect.js", ["npm:react@0.13.3/lib/AutoFocusMixin.js", "npm:react@0.13.3/lib/LinkedValueUtils.js", "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/Object.assign.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var AutoFocusMixin = require("npm:react@0.13.3/lib/AutoFocusMixin.js");
  var LinkedValueUtils = require("npm:react@0.13.3/lib/LinkedValueUtils.js");
  var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
  var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
  var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
  var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  var select = ReactElement.createFactory('select');
  function updateOptionsIfPendingUpdateAndMounted() {
    if (this._pendingUpdate) {
      this._pendingUpdate = false;
      var value = LinkedValueUtils.getValue(this);
      if (value != null && this.isMounted()) {
        updateOptions(this, value);
      }
    }
  }
  function selectValueType(props, propName, componentName) {
    if (props[propName] == null) {
      return null;
    }
    if (props.multiple) {
      if (!Array.isArray(props[propName])) {
        return new Error(("The `" + propName + "` prop supplied to <select> must be an array if ") + ("`multiple` is true."));
      }
    } else {
      if (Array.isArray(props[propName])) {
        return new Error(("The `" + propName + "` prop supplied to <select> must be a scalar ") + ("value if `multiple` is false."));
      }
    }
  }
  function updateOptions(component, propValue) {
    var selectedValue,
        i,
        l;
    var options = component.getDOMNode().options;
    if (component.props.multiple) {
      selectedValue = {};
      for (i = 0, l = propValue.length; i < l; i++) {
        selectedValue['' + propValue[i]] = true;
      }
      for (i = 0, l = options.length; i < l; i++) {
        var selected = selectedValue.hasOwnProperty(options[i].value);
        if (options[i].selected !== selected) {
          options[i].selected = selected;
        }
      }
    } else {
      selectedValue = '' + propValue;
      for (i = 0, l = options.length; i < l; i++) {
        if (options[i].value === selectedValue) {
          options[i].selected = true;
          return;
        }
      }
      if (options.length) {
        options[0].selected = true;
      }
    }
  }
  var ReactDOMSelect = ReactClass.createClass({
    displayName: 'ReactDOMSelect',
    tagName: 'SELECT',
    mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
    propTypes: {
      defaultValue: selectValueType,
      value: selectValueType
    },
    render: function() {
      var props = assign({}, this.props);
      props.onChange = this._handleChange;
      props.value = null;
      return select(props, this.props.children);
    },
    componentWillMount: function() {
      this._pendingUpdate = false;
    },
    componentDidMount: function() {
      var value = LinkedValueUtils.getValue(this);
      if (value != null) {
        updateOptions(this, value);
      } else if (this.props.defaultValue != null) {
        updateOptions(this, this.props.defaultValue);
      }
    },
    componentDidUpdate: function(prevProps) {
      var value = LinkedValueUtils.getValue(this);
      if (value != null) {
        this._pendingUpdate = false;
        updateOptions(this, value);
      } else if (!prevProps.multiple !== !this.props.multiple) {
        if (this.props.defaultValue != null) {
          updateOptions(this, this.props.defaultValue);
        } else {
          updateOptions(this, this.props.multiple ? [] : '');
        }
      }
    },
    _handleChange: function(event) {
      var returnValue;
      var onChange = LinkedValueUtils.getOnChange(this);
      if (onChange) {
        returnValue = onChange.call(this, event);
      }
      this._pendingUpdate = true;
      ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
      return returnValue;
    }
  });
  module.exports = ReactDOMSelect;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMTextarea.js", ["npm:react@0.13.3/lib/AutoFocusMixin.js", "npm:react@0.13.3/lib/DOMPropertyOperations.js", "npm:react@0.13.3/lib/LinkedValueUtils.js", "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var AutoFocusMixin = require("npm:react@0.13.3/lib/AutoFocusMixin.js");
    var DOMPropertyOperations = require("npm:react@0.13.3/lib/DOMPropertyOperations.js");
    var LinkedValueUtils = require("npm:react@0.13.3/lib/LinkedValueUtils.js");
    var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
    var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var textarea = ReactElement.createFactory('textarea');
    function forceUpdateIfMounted() {
      if (this.isMounted()) {
        this.forceUpdate();
      }
    }
    var ReactDOMTextarea = ReactClass.createClass({
      displayName: 'ReactDOMTextarea',
      tagName: 'TEXTAREA',
      mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
      getInitialState: function() {
        var defaultValue = this.props.defaultValue;
        var children = this.props.children;
        if (children != null) {
          if ("production" !== "production") {
            ("production" !== "production" ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : null);
          }
          ("production" !== "production" ? invariant(defaultValue == null, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(defaultValue == null));
          if (Array.isArray(children)) {
            ("production" !== "production" ? invariant(children.length <= 1, '<textarea> can only have at most one child.') : invariant(children.length <= 1));
            children = children[0];
          }
          defaultValue = '' + children;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        var value = LinkedValueUtils.getValue(this);
        return {initialValue: '' + (value != null ? value : defaultValue)};
      },
      render: function() {
        var props = assign({}, this.props);
        ("production" !== "production" ? invariant(props.dangerouslySetInnerHTML == null, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(props.dangerouslySetInnerHTML == null));
        props.defaultValue = null;
        props.value = null;
        props.onChange = this._handleChange;
        return textarea(props, this.state.initialValue);
      },
      componentDidUpdate: function(prevProps, prevState, prevContext) {
        var value = LinkedValueUtils.getValue(this);
        if (value != null) {
          var rootNode = this.getDOMNode();
          DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
        }
      },
      _handleChange: function(event) {
        var returnValue;
        var onChange = LinkedValueUtils.getOnChange(this);
        if (onChange) {
          returnValue = onChange.call(this, event);
        }
        ReactUpdates.asap(forceUpdateIfMounted, this);
        return returnValue;
      }
    });
    module.exports = ReactDOMTextarea;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/EventListener.js", ["npm:react@0.13.3/lib/emptyFunction.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var emptyFunction = require("npm:react@0.13.3/lib/emptyFunction.js");
    var EventListener = {
      listen: function(target, eventType, callback) {
        if (target.addEventListener) {
          target.addEventListener(eventType, callback, false);
          return {remove: function() {
              target.removeEventListener(eventType, callback, false);
            }};
        } else if (target.attachEvent) {
          target.attachEvent('on' + eventType, callback);
          return {remove: function() {
              target.detachEvent('on' + eventType, callback);
            }};
        }
      },
      capture: function(target, eventType, callback) {
        if (!target.addEventListener) {
          if ("production" !== "production") {
            console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
          }
          return {remove: emptyFunction};
        } else {
          target.addEventListener(eventType, callback, true);
          return {remove: function() {
              target.removeEventListener(eventType, callback, true);
            }};
        }
      },
      registerDefault: function() {}
    };
    module.exports = EventListener;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getUnboundedScrollPosition.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  function getUnboundedScrollPosition(scrollable) {
    if (scrollable === window) {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
    return {
      x: scrollable.scrollLeft,
      y: scrollable.scrollTop
    };
  }
  module.exports = getUnboundedScrollPosition;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactInjection.js", ["npm:react@0.13.3/lib/DOMProperty.js", "npm:react@0.13.3/lib/EventPluginHub.js", "npm:react@0.13.3/lib/ReactComponentEnvironment.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactEmptyComponent.js", "npm:react@0.13.3/lib/ReactBrowserEventEmitter.js", "npm:react@0.13.3/lib/ReactNativeComponent.js", "npm:react@0.13.3/lib/ReactDOMComponent.js", "npm:react@0.13.3/lib/ReactPerf.js", "npm:react@0.13.3/lib/ReactRootIndex.js", "npm:react@0.13.3/lib/ReactUpdates.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMProperty = require("npm:react@0.13.3/lib/DOMProperty.js");
  var EventPluginHub = require("npm:react@0.13.3/lib/EventPluginHub.js");
  var ReactComponentEnvironment = require("npm:react@0.13.3/lib/ReactComponentEnvironment.js");
  var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
  var ReactEmptyComponent = require("npm:react@0.13.3/lib/ReactEmptyComponent.js");
  var ReactBrowserEventEmitter = require("npm:react@0.13.3/lib/ReactBrowserEventEmitter.js");
  var ReactNativeComponent = require("npm:react@0.13.3/lib/ReactNativeComponent.js");
  var ReactDOMComponent = require("npm:react@0.13.3/lib/ReactDOMComponent.js");
  var ReactPerf = require("npm:react@0.13.3/lib/ReactPerf.js");
  var ReactRootIndex = require("npm:react@0.13.3/lib/ReactRootIndex.js");
  var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
  var ReactInjection = {
    Component: ReactComponentEnvironment.injection,
    Class: ReactClass.injection,
    DOMComponent: ReactDOMComponent.injection,
    DOMProperty: DOMProperty.injection,
    EmptyComponent: ReactEmptyComponent.injection,
    EventPluginHub: EventPluginHub.injection,
    EventEmitter: ReactBrowserEventEmitter.injection,
    NativeComponent: ReactNativeComponent.injection,
    Perf: ReactPerf.injection,
    RootIndex: ReactRootIndex.injection,
    Updates: ReactUpdates.injection
  };
  module.exports = ReactInjection;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getNodeForCharacterOffset.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function getLeafNode(node) {
    while (node && node.firstChild) {
      node = node.firstChild;
    }
    return node;
  }
  function getSiblingNode(node) {
    while (node) {
      if (node.nextSibling) {
        return node.nextSibling;
      }
      node = node.parentNode;
    }
  }
  function getNodeForCharacterOffset(root, offset) {
    var node = getLeafNode(root);
    var nodeStart = 0;
    var nodeEnd = 0;
    while (node) {
      if (node.nodeType === 3) {
        nodeEnd = nodeStart + node.textContent.length;
        if (nodeStart <= offset && nodeEnd >= offset) {
          return {
            node: node,
            offset: offset - nodeStart
          };
        }
        nodeStart = nodeEnd;
      }
      node = getLeafNode(getSiblingNode(node));
    }
  }
  module.exports = getNodeForCharacterOffset;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getActiveElement.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  function getActiveElement() {
    try {
      return document.activeElement || document.body;
    } catch (e) {
      return document.body;
    }
  }
  module.exports = getActiveElement;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactPutListenerQueue.js", ["npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/ReactBrowserEventEmitter.js", "npm:react@0.13.3/lib/Object.assign.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
  var ReactBrowserEventEmitter = require("npm:react@0.13.3/lib/ReactBrowserEventEmitter.js");
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  function ReactPutListenerQueue() {
    this.listenersToPut = [];
  }
  assign(ReactPutListenerQueue.prototype, {
    enqueuePutListener: function(rootNodeID, propKey, propValue) {
      this.listenersToPut.push({
        rootNodeID: rootNodeID,
        propKey: propKey,
        propValue: propValue
      });
    },
    putListeners: function() {
      for (var i = 0; i < this.listenersToPut.length; i++) {
        var listenerToPut = this.listenersToPut[i];
        ReactBrowserEventEmitter.putListener(listenerToPut.rootNodeID, listenerToPut.propKey, listenerToPut.propValue);
      }
    },
    reset: function() {
      this.listenersToPut.length = 0;
    },
    destructor: function() {
      this.reset();
    }
  });
  PooledClass.addPoolingTo(ReactPutListenerQueue);
  module.exports = ReactPutListenerQueue;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/shallowEqual.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
    var key;
    for (key in objA) {
      if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
        return false;
      }
    }
    for (key in objB) {
      if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  module.exports = shallowEqual;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ServerReactRootIndex.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);
  var ServerReactRootIndex = {createReactRootIndex: function() {
      return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
    }};
  module.exports = ServerReactRootIndex;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticClipboardEvent.js", ["npm:react@0.13.3/lib/SyntheticEvent.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticEvent = require("npm:react@0.13.3/lib/SyntheticEvent.js");
  var ClipboardEventInterface = {clipboardData: function(event) {
      return ('clipboardData' in event ? event.clipboardData : window.clipboardData);
    }};
  function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
  module.exports = SyntheticClipboardEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticFocusEvent.js", ["npm:react@0.13.3/lib/SyntheticUIEvent.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticUIEvent = require("npm:react@0.13.3/lib/SyntheticUIEvent.js");
  var FocusEventInterface = {relatedTarget: null};
  function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
  module.exports = SyntheticFocusEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getEventCharCode.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;
    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode;
      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      charCode = keyCode;
    }
    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }
    return 0;
  }
  module.exports = getEventCharCode;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/getEventKey.js", ["npm:react@0.13.3/lib/getEventCharCode.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var getEventCharCode = require("npm:react@0.13.3/lib/getEventCharCode.js");
  var normalizeKey = {
    'Esc': 'Escape',
    'Spacebar': ' ',
    'Left': 'ArrowLeft',
    'Up': 'ArrowUp',
    'Right': 'ArrowRight',
    'Down': 'ArrowDown',
    'Del': 'Delete',
    'Win': 'OS',
    'Menu': 'ContextMenu',
    'Apps': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'MozPrintableKey': 'Unidentified'
  };
  var translateToKey = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  };
  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
      if (key !== 'Unidentified') {
        return key;
      }
    }
    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent);
      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }
    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }
    return '';
  }
  module.exports = getEventKey;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticDragEvent.js", ["npm:react@0.13.3/lib/SyntheticMouseEvent.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticMouseEvent = require("npm:react@0.13.3/lib/SyntheticMouseEvent.js");
  var DragEventInterface = {dataTransfer: null};
  function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
  module.exports = SyntheticDragEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticTouchEvent.js", ["npm:react@0.13.3/lib/SyntheticUIEvent.js", "npm:react@0.13.3/lib/getEventModifierState.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticUIEvent = require("npm:react@0.13.3/lib/SyntheticUIEvent.js");
  var getEventModifierState = require("npm:react@0.13.3/lib/getEventModifierState.js");
  var TouchEventInterface = {
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: getEventModifierState
  };
  function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
  module.exports = SyntheticTouchEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticWheelEvent.js", ["npm:react@0.13.3/lib/SyntheticMouseEvent.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticMouseEvent = require("npm:react@0.13.3/lib/SyntheticMouseEvent.js");
  var WheelEventInterface = {
    deltaX: function(event) {
      return ('deltaX' in event ? event.deltaX : 'wheelDeltaX' in event ? -event.wheelDeltaX : 0);
    },
    deltaY: function(event) {
      return ('deltaY' in event ? event.deltaY : 'wheelDeltaY' in event ? -event.wheelDeltaY : 'wheelDelta' in event ? -event.wheelDelta : 0);
    },
    deltaZ: null,
    deltaMode: null
  };
  function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
  module.exports = SyntheticWheelEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SVGDOMPropertyConfig.js", ["npm:react@0.13.3/lib/DOMProperty.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMProperty = require("npm:react@0.13.3/lib/DOMProperty.js");
  var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
  var SVGDOMPropertyConfig = {
    Properties: {
      clipPath: MUST_USE_ATTRIBUTE,
      cx: MUST_USE_ATTRIBUTE,
      cy: MUST_USE_ATTRIBUTE,
      d: MUST_USE_ATTRIBUTE,
      dx: MUST_USE_ATTRIBUTE,
      dy: MUST_USE_ATTRIBUTE,
      fill: MUST_USE_ATTRIBUTE,
      fillOpacity: MUST_USE_ATTRIBUTE,
      fontFamily: MUST_USE_ATTRIBUTE,
      fontSize: MUST_USE_ATTRIBUTE,
      fx: MUST_USE_ATTRIBUTE,
      fy: MUST_USE_ATTRIBUTE,
      gradientTransform: MUST_USE_ATTRIBUTE,
      gradientUnits: MUST_USE_ATTRIBUTE,
      markerEnd: MUST_USE_ATTRIBUTE,
      markerMid: MUST_USE_ATTRIBUTE,
      markerStart: MUST_USE_ATTRIBUTE,
      offset: MUST_USE_ATTRIBUTE,
      opacity: MUST_USE_ATTRIBUTE,
      patternContentUnits: MUST_USE_ATTRIBUTE,
      patternUnits: MUST_USE_ATTRIBUTE,
      points: MUST_USE_ATTRIBUTE,
      preserveAspectRatio: MUST_USE_ATTRIBUTE,
      r: MUST_USE_ATTRIBUTE,
      rx: MUST_USE_ATTRIBUTE,
      ry: MUST_USE_ATTRIBUTE,
      spreadMethod: MUST_USE_ATTRIBUTE,
      stopColor: MUST_USE_ATTRIBUTE,
      stopOpacity: MUST_USE_ATTRIBUTE,
      stroke: MUST_USE_ATTRIBUTE,
      strokeDasharray: MUST_USE_ATTRIBUTE,
      strokeLinecap: MUST_USE_ATTRIBUTE,
      strokeOpacity: MUST_USE_ATTRIBUTE,
      strokeWidth: MUST_USE_ATTRIBUTE,
      textAnchor: MUST_USE_ATTRIBUTE,
      transform: MUST_USE_ATTRIBUTE,
      version: MUST_USE_ATTRIBUTE,
      viewBox: MUST_USE_ATTRIBUTE,
      x1: MUST_USE_ATTRIBUTE,
      x2: MUST_USE_ATTRIBUTE,
      x: MUST_USE_ATTRIBUTE,
      y1: MUST_USE_ATTRIBUTE,
      y2: MUST_USE_ATTRIBUTE,
      y: MUST_USE_ATTRIBUTE
    },
    DOMAttributeNames: {
      clipPath: 'clip-path',
      fillOpacity: 'fill-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      gradientTransform: 'gradientTransform',
      gradientUnits: 'gradientUnits',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      patternContentUnits: 'patternContentUnits',
      patternUnits: 'patternUnits',
      preserveAspectRatio: 'preserveAspectRatio',
      spreadMethod: 'spreadMethod',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strokeDasharray: 'stroke-dasharray',
      strokeLinecap: 'stroke-linecap',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      textAnchor: 'text-anchor',
      viewBox: 'viewBox'
    }
  };
  module.exports = SVGDOMPropertyConfig;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/createFullPageComponent.js", ["npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function createFullPageComponent(tag) {
      var elementFactory = ReactElement.createFactory(tag);
      var FullPageComponent = ReactClass.createClass({
        tagName: tag.toUpperCase(),
        displayName: 'ReactFullPageComponent' + tag,
        componentWillUnmount: function() {
          ("production" !== "production" ? invariant(false, '%s tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, <head>, ' + 'and <body>) reliably and efficiently. To fix this, have a single ' + 'top-level component that never unmounts render these elements.', this.constructor.displayName) : invariant(false));
        },
        render: function() {
          return elementFactory(this.props);
        }
      });
      return FullPageComponent;
    }
    module.exports = createFullPageComponent;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDefaultPerfAnalysis.js", ["npm:react@0.13.3/lib/Object.assign.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  var DONT_CARE_THRESHOLD = 1.2;
  var DOM_OPERATION_TYPES = {
    '_mountImageIntoNode': 'set innerHTML',
    INSERT_MARKUP: 'set innerHTML',
    MOVE_EXISTING: 'move',
    REMOVE_NODE: 'remove',
    TEXT_CONTENT: 'set textContent',
    'updatePropertyByID': 'update attribute',
    'deletePropertyByID': 'delete attribute',
    'updateStylesByID': 'update styles',
    'updateInnerHTMLByID': 'set innerHTML',
    'dangerouslyReplaceNodeWithMarkupByID': 'replace'
  };
  function getTotalTime(measurements) {
    var totalTime = 0;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      totalTime += measurement.totalTime;
    }
    return totalTime;
  }
  function getDOMSummary(measurements) {
    var items = [];
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var id;
      for (id in measurement.writes) {
        measurement.writes[id].forEach(function(write) {
          items.push({
            id: id,
            type: DOM_OPERATION_TYPES[write.type] || write.type,
            args: write.args
          });
        });
      }
    }
    return items;
  }
  function getExclusiveSummary(measurements) {
    var candidates = {};
    var displayName;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
      for (var id in allIDs) {
        displayName = measurement.displayNames[id].current;
        candidates[displayName] = candidates[displayName] || {
          componentName: displayName,
          inclusive: 0,
          exclusive: 0,
          render: 0,
          count: 0
        };
        if (measurement.render[id]) {
          candidates[displayName].render += measurement.render[id];
        }
        if (measurement.exclusive[id]) {
          candidates[displayName].exclusive += measurement.exclusive[id];
        }
        if (measurement.inclusive[id]) {
          candidates[displayName].inclusive += measurement.inclusive[id];
        }
        if (measurement.counts[id]) {
          candidates[displayName].count += measurement.counts[id];
        }
      }
    }
    var arr = [];
    for (displayName in candidates) {
      if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
        arr.push(candidates[displayName]);
      }
    }
    arr.sort(function(a, b) {
      return b.exclusive - a.exclusive;
    });
    return arr;
  }
  function getInclusiveSummary(measurements, onlyClean) {
    var candidates = {};
    var inclusiveKey;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
      var cleanComponents;
      if (onlyClean) {
        cleanComponents = getUnchangedComponents(measurement);
      }
      for (var id in allIDs) {
        if (onlyClean && !cleanComponents[id]) {
          continue;
        }
        var displayName = measurement.displayNames[id];
        inclusiveKey = displayName.owner + ' > ' + displayName.current;
        candidates[inclusiveKey] = candidates[inclusiveKey] || {
          componentName: inclusiveKey,
          time: 0,
          count: 0
        };
        if (measurement.inclusive[id]) {
          candidates[inclusiveKey].time += measurement.inclusive[id];
        }
        if (measurement.counts[id]) {
          candidates[inclusiveKey].count += measurement.counts[id];
        }
      }
    }
    var arr = [];
    for (inclusiveKey in candidates) {
      if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
        arr.push(candidates[inclusiveKey]);
      }
    }
    arr.sort(function(a, b) {
      return b.time - a.time;
    });
    return arr;
  }
  function getUnchangedComponents(measurement) {
    var cleanComponents = {};
    var dirtyLeafIDs = Object.keys(measurement.writes);
    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
    for (var id in allIDs) {
      var isDirty = false;
      for (var i = 0; i < dirtyLeafIDs.length; i++) {
        if (dirtyLeafIDs[i].indexOf(id) === 0) {
          isDirty = true;
          break;
        }
      }
      if (!isDirty && measurement.counts[id] > 0) {
        cleanComponents[id] = true;
      }
    }
    return cleanComponents;
  }
  var ReactDefaultPerfAnalysis = {
    getExclusiveSummary: getExclusiveSummary,
    getInclusiveSummary: getInclusiveSummary,
    getDOMSummary: getDOMSummary,
    getTotalTime: getTotalTime
  };
  module.exports = ReactDefaultPerfAnalysis;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/performance.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
  var performance;
  if (ExecutionEnvironment.canUseDOM) {
    performance = window.performance || window.msPerformance || window.webkitPerformance;
  }
  module.exports = performance || {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactServerRenderingTransaction.js", ["npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/CallbackQueue.js", "npm:react@0.13.3/lib/ReactPutListenerQueue.js", "npm:react@0.13.3/lib/Transaction.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/emptyFunction.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
  var CallbackQueue = require("npm:react@0.13.3/lib/CallbackQueue.js");
  var ReactPutListenerQueue = require("npm:react@0.13.3/lib/ReactPutListenerQueue.js");
  var Transaction = require("npm:react@0.13.3/lib/Transaction.js");
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  var emptyFunction = require("npm:react@0.13.3/lib/emptyFunction.js");
  var ON_DOM_READY_QUEUEING = {
    initialize: function() {
      this.reactMountReady.reset();
    },
    close: emptyFunction
  };
  var PUT_LISTENER_QUEUEING = {
    initialize: function() {
      this.putListenerQueue.reset();
    },
    close: emptyFunction
  };
  var TRANSACTION_WRAPPERS = [PUT_LISTENER_QUEUEING, ON_DOM_READY_QUEUEING];
  function ReactServerRenderingTransaction(renderToStaticMarkup) {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = renderToStaticMarkup;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.putListenerQueue = ReactPutListenerQueue.getPooled();
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return this.reactMountReady;
    },
    getPutListenerQueue: function() {
      return this.putListenerQueue;
    },
    destructor: function() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
      ReactPutListenerQueue.release(this.putListenerQueue);
      this.putListenerQueue = null;
    }
  };
  assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactServerRenderingTransaction);
  module.exports = ReactServerRenderingTransaction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/onlyChild.js", ["npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function onlyChild(children) {
      ("production" !== "production" ? invariant(ReactElement.isValidElement(children), 'onlyChild must be passed a children with exactly one child.') : invariant(ReactElement.isValidElement(children)));
      return children;
    }
    module.exports = onlyChild;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.fw.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function($) {
    $.FW = false;
    $.path = $.core;
    return $;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.def.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      global = $.g,
      core = $.core,
      isFunction = $.isFunction;
  function ctx(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }
  $def.F = 1;
  $def.G = 2;
  $def.S = 4;
  $def.P = 8;
  $def.B = 16;
  $def.W = 32;
  function $def(type, name, source) {
    var key,
        own,
        out,
        exp,
        isGlobal = type & $def.G,
        isProto = type & $def.P,
        target = isGlobal ? global : type & $def.S ? global[name] : (global[name] || {}).prototype,
        exports = isGlobal ? core : core[name] || (core[name] = {});
    if (isGlobal)
      source = name;
    for (key in source) {
      own = !(type & $def.F) && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      if (isGlobal && !isFunction(target[key]))
        exp = source[key];
      else if (type & $def.B && own)
        exp = ctx(out, global);
      else if (type & $def.W && target[key] == out)
        !function(C) {
          exp = function(param) {
            return this instanceof C ? new C(param) : C(param);
          };
          exp.prototype = C.prototype;
        }(out);
      else
        exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
      exports[key] = exp;
      if (isProto)
        (exports.prototype || (exports.prototype = {}))[key] = out;
    }
  }
  module.exports = $def;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.get-names.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      toString = {}.toString,
      getNames = $.getNames;
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  function getWindowNames(it) {
    try {
      return getNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  }
  module.exports.get = function getOwnPropertyNames(it) {
    if (windowNames && toString.call(it) == '[object Window]')
      return getWindowNames(it);
    return getNames($.toObject(it));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/fn/object/create.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js");
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.assert.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js");
  function assert(condition, msg1, msg2) {
    if (!condition)
      throw TypeError(msg2 ? msg1 + msg2 : msg1);
  }
  assert.def = $.assertDefined;
  assert.fn = function(it) {
    if (!$.isFunction(it))
      throw TypeError(it + ' is not a function!');
    return it;
  };
  assert.obj = function(it) {
    if (!$.isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  assert.inst = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  module.exports = assert;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.ctx.js", ["npm:core-js@0.9.18/library/modules/$.assert.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var assertFunction = require("npm:core-js@0.9.18/library/modules/$.assert.js").fn;
  module.exports = function(fn, that, length) {
    assertFunction(fn);
    if (~length && that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/fn/object/define-property.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js");
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/helpers/class-call-check.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:querystring@0.2.0/decode.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  module.exports = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr,
          vstr,
          k,
          v;
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
    return obj;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:querystring@0.2.0/encode.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var stringifyPrimitive = function(v) {
    switch (typeof v) {
      case 'string':
        return v;
      case 'boolean':
        return v ? 'true' : 'false';
      case 'number':
        return isFinite(v) ? v : '';
      default:
        return '';
    }
  };
  module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
    if (typeof obj === 'object') {
      return Object.keys(obj).map(function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }
    if (!name)
      return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.js", ["github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(process) {
    ;
    (function(undefined) {
      var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
      };
      var root = (objectTypes[typeof window] && window) || this,
          freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
          freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
          moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
          freeGlobal = objectTypes[typeof global] && global;
      if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
        root = freeGlobal;
      }
      var Rx = {
        internals: {},
        config: {Promise: root.Promise},
        helpers: {}
      };
      var noop = Rx.helpers.noop = function() {},
          notDefined = Rx.helpers.notDefined = function(x) {
            return typeof x === 'undefined';
          },
          identity = Rx.helpers.identity = function(x) {
            return x;
          },
          pluck = Rx.helpers.pluck = function(property) {
            return function(x) {
              return x[property];
            };
          },
          just = Rx.helpers.just = function(value) {
            return function() {
              return value;
            };
          },
          defaultNow = Rx.helpers.defaultNow = Date.now,
          defaultComparer = Rx.helpers.defaultComparer = function(x, y) {
            return isEqual(x, y);
          },
          defaultSubComparer = Rx.helpers.defaultSubComparer = function(x, y) {
            return x > y ? 1 : (x < y ? -1 : 0);
          },
          defaultKeySerializer = Rx.helpers.defaultKeySerializer = function(x) {
            return x.toString();
          },
          defaultError = Rx.helpers.defaultError = function(err) {
            throw err;
          },
          isPromise = Rx.helpers.isPromise = function(p) {
            return !!p && typeof p.subscribe !== 'function' && typeof p.then === 'function';
          },
          asArray = Rx.helpers.asArray = function() {
            return Array.prototype.slice.call(arguments);
          },
          not = Rx.helpers.not = function(a) {
            return !a;
          },
          isFunction = Rx.helpers.isFunction = (function() {
            var isFn = function(value) {
              return typeof value == 'function' || false;
            };
            if (isFn(/x/)) {
              isFn = function(value) {
                return typeof value == 'function' && toString.call(value) == '[object Function]';
              };
            }
            return isFn;
          }());
      function cloneArray(arr) {
        for (var a = [],
            i = 0,
            len = arr.length; i < len; i++) {
          a.push(arr[i]);
        }
        return a;
      }
      Rx.config.longStackSupport = false;
      var hasStacks = false;
      try {
        throw new Error();
      } catch (e) {
        hasStacks = !!e.stack;
      }
      var rStartingLine = captureLine(),
          rFileName;
      var STACK_JUMP_SEPARATOR = "From previous event:";
      function makeStackTraceLong(error, observable) {
        if (hasStacks && observable.stack && typeof error === "object" && error !== null && error.stack && error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1) {
          var stacks = [];
          for (var o = observable; !!o; o = o.source) {
            if (o.stack) {
              stacks.unshift(o.stack);
            }
          }
          stacks.unshift(error.stack);
          var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
          error.stack = filterStackString(concatedStacks);
        }
      }
      function filterStackString(stackString) {
        var lines = stackString.split("\n"),
            desiredLines = [];
        for (var i = 0,
            len = lines.length; i < len; i++) {
          var line = lines[i];
          if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
          }
        }
        return desiredLines.join("\n");
      }
      function isInternalFrame(stackLine) {
        var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
        if (!fileNameAndLineNumber) {
          return false;
        }
        var fileName = fileNameAndLineNumber[0],
            lineNumber = fileNameAndLineNumber[1];
        return fileName === rFileName && lineNumber >= rStartingLine && lineNumber <= rEndingLine;
      }
      function isNodeFrame(stackLine) {
        return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
      }
      function captureLine() {
        if (!hasStacks) {
          return;
        }
        try {
          throw new Error();
        } catch (e) {
          var lines = e.stack.split("\n");
          var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
          var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
          if (!fileNameAndLineNumber) {
            return;
          }
          rFileName = fileNameAndLineNumber[0];
          return fileNameAndLineNumber[1];
        }
      }
      function getFileNameAndLineNumber(stackLine) {
        var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
        if (attempt1) {
          return [attempt1[1], Number(attempt1[2])];
        }
        var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
        if (attempt2) {
          return [attempt2[1], Number(attempt2[2])];
        }
        var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
        if (attempt3) {
          return [attempt3[1], Number(attempt3[2])];
        }
      }
      var EmptyError = Rx.EmptyError = function() {
        this.message = 'Sequence contains no elements.';
        Error.call(this);
      };
      EmptyError.prototype = Error.prototype;
      var ObjectDisposedError = Rx.ObjectDisposedError = function() {
        this.message = 'Object has been disposed';
        Error.call(this);
      };
      ObjectDisposedError.prototype = Error.prototype;
      var ArgumentOutOfRangeError = Rx.ArgumentOutOfRangeError = function() {
        this.message = 'Argument out of range';
        Error.call(this);
      };
      ArgumentOutOfRangeError.prototype = Error.prototype;
      var NotSupportedError = Rx.NotSupportedError = function(message) {
        this.message = message || 'This operation is not supported';
        Error.call(this);
      };
      NotSupportedError.prototype = Error.prototype;
      var NotImplementedError = Rx.NotImplementedError = function(message) {
        this.message = message || 'This operation is not implemented';
        Error.call(this);
      };
      NotImplementedError.prototype = Error.prototype;
      var notImplemented = Rx.helpers.notImplemented = function() {
        throw new NotImplementedError();
      };
      var notSupported = Rx.helpers.notSupported = function() {
        throw new NotSupportedError();
      };
      var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) || '_es6shim_iterator_';
      if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
        $iterator$ = '@@iterator';
      }
      var doneEnumerator = Rx.doneEnumerator = {
        done: true,
        value: undefined
      };
      var isIterable = Rx.helpers.isIterable = function(o) {
        return o[$iterator$] !== undefined;
      };
      var isArrayLike = Rx.helpers.isArrayLike = function(o) {
        return o && o.length !== undefined;
      };
      Rx.helpers.iterator = $iterator$;
      var bindCallback = Rx.internals.bindCallback = function(func, thisArg, argCount) {
        if (typeof thisArg === 'undefined') {
          return func;
        }
        switch (argCount) {
          case 0:
            return function() {
              return func.call(thisArg);
            };
          case 1:
            return function(arg) {
              return func.call(thisArg, arg);
            };
          case 2:
            return function(value, index) {
              return func.call(thisArg, value, index);
            };
          case 3:
            return function(value, index, collection) {
              return func.call(thisArg, value, index, collection);
            };
        }
        return function() {
          return func.apply(thisArg, arguments);
        };
      };
      var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
          dontEnumsLength = dontEnums.length;
      var argsClass = '[object Arguments]',
          arrayClass = '[object Array]',
          boolClass = '[object Boolean]',
          dateClass = '[object Date]',
          errorClass = '[object Error]',
          funcClass = '[object Function]',
          numberClass = '[object Number]',
          objectClass = '[object Object]',
          regexpClass = '[object RegExp]',
          stringClass = '[object String]';
      var toString = Object.prototype.toString,
          hasOwnProperty = Object.prototype.hasOwnProperty,
          supportsArgsClass = toString.call(arguments) == argsClass,
          supportNodeClass,
          errorProto = Error.prototype,
          objectProto = Object.prototype,
          stringProto = String.prototype,
          propertyIsEnumerable = objectProto.propertyIsEnumerable;
      try {
        supportNodeClass = !(toString.call(document) == objectClass && !({'toString': 0} + ''));
      } catch (e) {
        supportNodeClass = true;
      }
      var nonEnumProps = {};
      nonEnumProps[arrayClass] = nonEnumProps[dateClass] = nonEnumProps[numberClass] = {
        'constructor': true,
        'toLocaleString': true,
        'toString': true,
        'valueOf': true
      };
      nonEnumProps[boolClass] = nonEnumProps[stringClass] = {
        'constructor': true,
        'toString': true,
        'valueOf': true
      };
      nonEnumProps[errorClass] = nonEnumProps[funcClass] = nonEnumProps[regexpClass] = {
        'constructor': true,
        'toString': true
      };
      nonEnumProps[objectClass] = {'constructor': true};
      var support = {};
      (function() {
        var ctor = function() {
          this.x = 1;
        },
            props = [];
        ctor.prototype = {
          'valueOf': 1,
          'y': 1
        };
        for (var key in new ctor) {
          props.push(key);
        }
        for (key in arguments) {}
        support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') || propertyIsEnumerable.call(errorProto, 'name');
        support.enumPrototypes = propertyIsEnumerable.call(ctor, 'prototype');
        support.nonEnumArgs = key != 0;
        support.nonEnumShadows = !/valueOf/.test(props);
      }(1));
      var isObject = Rx.internals.isObject = function(value) {
        var type = typeof value;
        return value && (type == 'function' || type == 'object') || false;
      };
      function keysIn(object) {
        var result = [];
        if (!isObject(object)) {
          return result;
        }
        if (support.nonEnumArgs && object.length && isArguments(object)) {
          object = slice.call(object);
        }
        var skipProto = support.enumPrototypes && typeof object == 'function',
            skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error);
        for (var key in object) {
          if (!(skipProto && key == 'prototype') && !(skipErrorProps && (key == 'message' || key == 'name'))) {
            result.push(key);
          }
        }
        if (support.nonEnumShadows && object !== objectProto) {
          var ctor = object.constructor,
              index = -1,
              length = dontEnumsLength;
          if (object === (ctor && ctor.prototype)) {
            var className = object === stringProto ? stringClass : object === errorProto ? errorClass : toString.call(object),
                nonEnum = nonEnumProps[className];
          }
          while (++index < length) {
            key = dontEnums[index];
            if (!(nonEnum && nonEnum[key]) && hasOwnProperty.call(object, key)) {
              result.push(key);
            }
          }
        }
        return result;
      }
      function internalFor(object, callback, keysFunc) {
        var index = -1,
            props = keysFunc(object),
            length = props.length;
        while (++index < length) {
          var key = props[index];
          if (callback(object[key], key, object) === false) {
            break;
          }
        }
        return object;
      }
      function internalForIn(object, callback) {
        return internalFor(object, callback, keysIn);
      }
      function isNode(value) {
        return typeof value.toString != 'function' && typeof(value + '') == 'string';
      }
      var isArguments = function(value) {
        return (value && typeof value == 'object') ? toString.call(value) == argsClass : false;
      };
      if (!supportsArgsClass) {
        isArguments = function(value) {
          return (value && typeof value == 'object') ? hasOwnProperty.call(value, 'callee') : false;
        };
      }
      var isEqual = Rx.internals.isEqual = function(x, y) {
        return deepEquals(x, y, [], []);
      };
      function deepEquals(a, b, stackA, stackB) {
        if (a === b) {
          return a !== 0 || (1 / a == 1 / b);
        }
        var type = typeof a,
            otherType = typeof b;
        if (a === a && (a == null || b == null || (type != 'function' && type != 'object' && otherType != 'function' && otherType != 'object'))) {
          return false;
        }
        var className = toString.call(a),
            otherClass = toString.call(b);
        if (className == argsClass) {
          className = objectClass;
        }
        if (otherClass == argsClass) {
          otherClass = objectClass;
        }
        if (className != otherClass) {
          return false;
        }
        switch (className) {
          case boolClass:
          case dateClass:
            return +a == +b;
          case numberClass:
            return (a != +a) ? b != +b : (a == 0 ? (1 / a == 1 / b) : a == +b);
          case regexpClass:
          case stringClass:
            return a == String(b);
        }
        var isArr = className == arrayClass;
        if (!isArr) {
          if (className != objectClass || (!support.nodeClass && (isNode(a) || isNode(b)))) {
            return false;
          }
          var ctorA = !support.argsObject && isArguments(a) ? Object : a.constructor,
              ctorB = !support.argsObject && isArguments(b) ? Object : b.constructor;
          if (ctorA != ctorB && !(hasOwnProperty.call(a, 'constructor') && hasOwnProperty.call(b, 'constructor')) && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) && ('constructor' in a && 'constructor' in b)) {
            return false;
          }
        }
        var initedStack = !stackA;
        stackA || (stackA = []);
        stackB || (stackB = []);
        var length = stackA.length;
        while (length--) {
          if (stackA[length] == a) {
            return stackB[length] == b;
          }
        }
        var size = 0;
        var result = true;
        stackA.push(a);
        stackB.push(b);
        if (isArr) {
          length = a.length;
          size = b.length;
          result = size == length;
          if (result) {
            while (size--) {
              var index = length,
                  value = b[size];
              if (!(result = deepEquals(a[size], value, stackA, stackB))) {
                break;
              }
            }
          }
        } else {
          internalForIn(b, function(value, key, b) {
            if (hasOwnProperty.call(b, key)) {
              size++;
              return (result = hasOwnProperty.call(a, key) && deepEquals(a[key], value, stackA, stackB));
            }
          });
          if (result) {
            internalForIn(a, function(value, key, a) {
              if (hasOwnProperty.call(a, key)) {
                return (result = --size > -1);
              }
            });
          }
        }
        stackA.pop();
        stackB.pop();
        return result;
      }
      var hasProp = {}.hasOwnProperty,
          slice = Array.prototype.slice;
      var inherits = this.inherits = Rx.internals.inherits = function(child, parent) {
        function __() {
          this.constructor = child;
        }
        __.prototype = parent.prototype;
        child.prototype = new __();
      };
      var addProperties = Rx.internals.addProperties = function(obj) {
        for (var sources = [],
            i = 1,
            len = arguments.length; i < len; i++) {
          sources.push(arguments[i]);
        }
        for (var idx = 0,
            ln = sources.length; idx < ln; idx++) {
          var source = sources[idx];
          for (var prop in source) {
            obj[prop] = source[prop];
          }
        }
      };
      var addRef = Rx.internals.addRef = function(xs, r) {
        return new AnonymousObservable(function(observer) {
          return new CompositeDisposable(r.getDisposable(), xs.subscribe(observer));
        });
      };
      function arrayInitialize(count, factory) {
        var a = new Array(count);
        for (var i = 0; i < count; i++) {
          a[i] = factory();
        }
        return a;
      }
      var errorObj = {e: {}};
      var tryCatchTarget;
      function tryCatcher() {
        try {
          return tryCatchTarget.apply(this, arguments);
        } catch (e) {
          errorObj.e = e;
          return errorObj;
        }
      }
      function tryCatch(fn) {
        if (!isFunction(fn)) {
          throw new TypeError('fn must be a function');
        }
        tryCatchTarget = fn;
        return tryCatcher;
      }
      function thrower(e) {
        throw e;
      }
      function IndexedItem(id, value) {
        this.id = id;
        this.value = value;
      }
      IndexedItem.prototype.compareTo = function(other) {
        var c = this.value.compareTo(other.value);
        c === 0 && (c = this.id - other.id);
        return c;
      };
      var PriorityQueue = Rx.internals.PriorityQueue = function(capacity) {
        this.items = new Array(capacity);
        this.length = 0;
      };
      var priorityProto = PriorityQueue.prototype;
      priorityProto.isHigherPriority = function(left, right) {
        return this.items[left].compareTo(this.items[right]) < 0;
      };
      priorityProto.percolate = function(index) {
        if (index >= this.length || index < 0) {
          return;
        }
        var parent = index - 1 >> 1;
        if (parent < 0 || parent === index) {
          return;
        }
        if (this.isHigherPriority(index, parent)) {
          var temp = this.items[index];
          this.items[index] = this.items[parent];
          this.items[parent] = temp;
          this.percolate(parent);
        }
      };
      priorityProto.heapify = function(index) {
        +index || (index = 0);
        if (index >= this.length || index < 0) {
          return;
        }
        var left = 2 * index + 1,
            right = 2 * index + 2,
            first = index;
        if (left < this.length && this.isHigherPriority(left, first)) {
          first = left;
        }
        if (right < this.length && this.isHigherPriority(right, first)) {
          first = right;
        }
        if (first !== index) {
          var temp = this.items[index];
          this.items[index] = this.items[first];
          this.items[first] = temp;
          this.heapify(first);
        }
      };
      priorityProto.peek = function() {
        return this.items[0].value;
      };
      priorityProto.removeAt = function(index) {
        this.items[index] = this.items[--this.length];
        this.items[this.length] = undefined;
        this.heapify();
      };
      priorityProto.dequeue = function() {
        var result = this.peek();
        this.removeAt(0);
        return result;
      };
      priorityProto.enqueue = function(item) {
        var index = this.length++;
        this.items[index] = new IndexedItem(PriorityQueue.count++, item);
        this.percolate(index);
      };
      priorityProto.remove = function(item) {
        for (var i = 0; i < this.length; i++) {
          if (this.items[i].value === item) {
            this.removeAt(i);
            return true;
          }
        }
        return false;
      };
      PriorityQueue.count = 0;
      var CompositeDisposable = Rx.CompositeDisposable = function() {
        var args = [],
            i,
            len;
        if (Array.isArray(arguments[0])) {
          args = arguments[0];
          len = args.length;
        } else {
          len = arguments.length;
          args = new Array(len);
          for (i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
        }
        for (i = 0; i < len; i++) {
          if (!isDisposable(args[i])) {
            throw new TypeError('Not a disposable');
          }
        }
        this.disposables = args;
        this.isDisposed = false;
        this.length = args.length;
      };
      var CompositeDisposablePrototype = CompositeDisposable.prototype;
      CompositeDisposablePrototype.add = function(item) {
        if (this.isDisposed) {
          item.dispose();
        } else {
          this.disposables.push(item);
          this.length++;
        }
      };
      CompositeDisposablePrototype.remove = function(item) {
        var shouldDispose = false;
        if (!this.isDisposed) {
          var idx = this.disposables.indexOf(item);
          if (idx !== -1) {
            shouldDispose = true;
            this.disposables.splice(idx, 1);
            this.length--;
            item.dispose();
          }
        }
        return shouldDispose;
      };
      CompositeDisposablePrototype.dispose = function() {
        if (!this.isDisposed) {
          this.isDisposed = true;
          var len = this.disposables.length,
              currentDisposables = new Array(len);
          for (var i = 0; i < len; i++) {
            currentDisposables[i] = this.disposables[i];
          }
          this.disposables = [];
          this.length = 0;
          for (i = 0; i < len; i++) {
            currentDisposables[i].dispose();
          }
        }
      };
      var Disposable = Rx.Disposable = function(action) {
        this.isDisposed = false;
        this.action = action || noop;
      };
      Disposable.prototype.dispose = function() {
        if (!this.isDisposed) {
          this.action();
          this.isDisposed = true;
        }
      };
      var disposableCreate = Disposable.create = function(action) {
        return new Disposable(action);
      };
      var disposableEmpty = Disposable.empty = {dispose: noop};
      var isDisposable = Disposable.isDisposable = function(d) {
        return d && isFunction(d.dispose);
      };
      var checkDisposed = Disposable.checkDisposed = function(disposable) {
        if (disposable.isDisposed) {
          throw new ObjectDisposedError();
        }
      };
      var SingleAssignmentDisposable = Rx.SingleAssignmentDisposable = function() {
        this.isDisposed = false;
        this.current = null;
      };
      SingleAssignmentDisposable.prototype.getDisposable = function() {
        return this.current;
      };
      SingleAssignmentDisposable.prototype.setDisposable = function(value) {
        if (this.current) {
          throw new Error('Disposable has already been assigned');
        }
        var shouldDispose = this.isDisposed;
        !shouldDispose && (this.current = value);
        shouldDispose && value && value.dispose();
      };
      SingleAssignmentDisposable.prototype.dispose = function() {
        if (!this.isDisposed) {
          this.isDisposed = true;
          var old = this.current;
          this.current = null;
        }
        old && old.dispose();
      };
      var SerialDisposable = Rx.SerialDisposable = function() {
        this.isDisposed = false;
        this.current = null;
      };
      SerialDisposable.prototype.getDisposable = function() {
        return this.current;
      };
      SerialDisposable.prototype.setDisposable = function(value) {
        var shouldDispose = this.isDisposed;
        if (!shouldDispose) {
          var old = this.current;
          this.current = value;
        }
        old && old.dispose();
        shouldDispose && value && value.dispose();
      };
      SerialDisposable.prototype.dispose = function() {
        if (!this.isDisposed) {
          this.isDisposed = true;
          var old = this.current;
          this.current = null;
        }
        old && old.dispose();
      };
      var RefCountDisposable = Rx.RefCountDisposable = (function() {
        function InnerDisposable(disposable) {
          this.disposable = disposable;
          this.disposable.count++;
          this.isInnerDisposed = false;
        }
        InnerDisposable.prototype.dispose = function() {
          if (!this.disposable.isDisposed && !this.isInnerDisposed) {
            this.isInnerDisposed = true;
            this.disposable.count--;
            if (this.disposable.count === 0 && this.disposable.isPrimaryDisposed) {
              this.disposable.isDisposed = true;
              this.disposable.underlyingDisposable.dispose();
            }
          }
        };
        function RefCountDisposable(disposable) {
          this.underlyingDisposable = disposable;
          this.isDisposed = false;
          this.isPrimaryDisposed = false;
          this.count = 0;
        }
        RefCountDisposable.prototype.dispose = function() {
          if (!this.isDisposed && !this.isPrimaryDisposed) {
            this.isPrimaryDisposed = true;
            if (this.count === 0) {
              this.isDisposed = true;
              this.underlyingDisposable.dispose();
            }
          }
        };
        RefCountDisposable.prototype.getDisposable = function() {
          return this.isDisposed ? disposableEmpty : new InnerDisposable(this);
        };
        return RefCountDisposable;
      })();
      function ScheduledDisposable(scheduler, disposable) {
        this.scheduler = scheduler;
        this.disposable = disposable;
        this.isDisposed = false;
      }
      function scheduleItem(s, self) {
        if (!self.isDisposed) {
          self.isDisposed = true;
          self.disposable.dispose();
        }
      }
      ScheduledDisposable.prototype.dispose = function() {
        this.scheduler.scheduleWithState(this, scheduleItem);
      };
      var ScheduledItem = Rx.internals.ScheduledItem = function(scheduler, state, action, dueTime, comparer) {
        this.scheduler = scheduler;
        this.state = state;
        this.action = action;
        this.dueTime = dueTime;
        this.comparer = comparer || defaultSubComparer;
        this.disposable = new SingleAssignmentDisposable();
      };
      ScheduledItem.prototype.invoke = function() {
        this.disposable.setDisposable(this.invokeCore());
      };
      ScheduledItem.prototype.compareTo = function(other) {
        return this.comparer(this.dueTime, other.dueTime);
      };
      ScheduledItem.prototype.isCancelled = function() {
        return this.disposable.isDisposed;
      };
      ScheduledItem.prototype.invokeCore = function() {
        return this.action(this.scheduler, this.state);
      };
      var Scheduler = Rx.Scheduler = (function() {
        function Scheduler(now, schedule, scheduleRelative, scheduleAbsolute) {
          this.now = now;
          this._schedule = schedule;
          this._scheduleRelative = scheduleRelative;
          this._scheduleAbsolute = scheduleAbsolute;
        }
        Scheduler.isScheduler = function(s) {
          return s instanceof Scheduler;
        };
        function invokeAction(scheduler, action) {
          action();
          return disposableEmpty;
        }
        var schedulerProto = Scheduler.prototype;
        schedulerProto.schedule = function(action) {
          return this._schedule(action, invokeAction);
        };
        schedulerProto.scheduleWithState = function(state, action) {
          return this._schedule(state, action);
        };
        schedulerProto.scheduleWithRelative = function(dueTime, action) {
          return this._scheduleRelative(action, dueTime, invokeAction);
        };
        schedulerProto.scheduleWithRelativeAndState = function(state, dueTime, action) {
          return this._scheduleRelative(state, dueTime, action);
        };
        schedulerProto.scheduleWithAbsolute = function(dueTime, action) {
          return this._scheduleAbsolute(action, dueTime, invokeAction);
        };
        schedulerProto.scheduleWithAbsoluteAndState = function(state, dueTime, action) {
          return this._scheduleAbsolute(state, dueTime, action);
        };
        Scheduler.now = defaultNow;
        Scheduler.normalize = function(timeSpan) {
          timeSpan < 0 && (timeSpan = 0);
          return timeSpan;
        };
        return Scheduler;
      }());
      var normalizeTime = Scheduler.normalize,
          isScheduler = Scheduler.isScheduler;
      (function(schedulerProto) {
        function invokeRecImmediate(scheduler, pair) {
          var state = pair[0],
              action = pair[1],
              group = new CompositeDisposable();
          function recursiveAction(state1) {
            action(state1, function(state2) {
              var isAdded = false,
                  isDone = false,
                  d = scheduler.scheduleWithState(state2, function(scheduler1, state3) {
                    if (isAdded) {
                      group.remove(d);
                    } else {
                      isDone = true;
                    }
                    recursiveAction(state3);
                    return disposableEmpty;
                  });
              if (!isDone) {
                group.add(d);
                isAdded = true;
              }
            });
          }
          recursiveAction(state);
          return group;
        }
        function invokeRecDate(scheduler, pair, method) {
          var state = pair[0],
              action = pair[1],
              group = new CompositeDisposable();
          function recursiveAction(state1) {
            action(state1, function(state2, dueTime1) {
              var isAdded = false,
                  isDone = false,
                  d = scheduler[method](state2, dueTime1, function(scheduler1, state3) {
                    if (isAdded) {
                      group.remove(d);
                    } else {
                      isDone = true;
                    }
                    recursiveAction(state3);
                    return disposableEmpty;
                  });
              if (!isDone) {
                group.add(d);
                isAdded = true;
              }
            });
          }
          ;
          recursiveAction(state);
          return group;
        }
        function scheduleInnerRecursive(action, self) {
          action(function(dt) {
            self(action, dt);
          });
        }
        schedulerProto.scheduleRecursive = function(action) {
          return this.scheduleRecursiveWithState(action, scheduleInnerRecursive);
        };
        schedulerProto.scheduleRecursiveWithState = function(state, action) {
          return this.scheduleWithState([state, action], invokeRecImmediate);
        };
        schedulerProto.scheduleRecursiveWithRelative = function(dueTime, action) {
          return this.scheduleRecursiveWithRelativeAndState(action, dueTime, scheduleInnerRecursive);
        };
        schedulerProto.scheduleRecursiveWithRelativeAndState = function(state, dueTime, action) {
          return this._scheduleRelative([state, action], dueTime, function(s, p) {
            return invokeRecDate(s, p, 'scheduleWithRelativeAndState');
          });
        };
        schedulerProto.scheduleRecursiveWithAbsolute = function(dueTime, action) {
          return this.scheduleRecursiveWithAbsoluteAndState(action, dueTime, scheduleInnerRecursive);
        };
        schedulerProto.scheduleRecursiveWithAbsoluteAndState = function(state, dueTime, action) {
          return this._scheduleAbsolute([state, action], dueTime, function(s, p) {
            return invokeRecDate(s, p, 'scheduleWithAbsoluteAndState');
          });
        };
      }(Scheduler.prototype));
      (function(schedulerProto) {
        Scheduler.prototype.schedulePeriodic = function(period, action) {
          return this.schedulePeriodicWithState(null, period, action);
        };
        Scheduler.prototype.schedulePeriodicWithState = function(state, period, action) {
          if (typeof root.setInterval === 'undefined') {
            throw new NotSupportedError();
          }
          period = normalizeTime(period);
          var s = state,
              id = root.setInterval(function() {
                s = action(s);
              }, period);
          return disposableCreate(function() {
            root.clearInterval(id);
          });
        };
      }(Scheduler.prototype));
      (function(schedulerProto) {
        schedulerProto.catchError = schedulerProto['catch'] = function(handler) {
          return new CatchScheduler(this, handler);
        };
      }(Scheduler.prototype));
      var SchedulePeriodicRecursive = Rx.internals.SchedulePeriodicRecursive = (function() {
        function tick(command, recurse) {
          recurse(0, this._period);
          try {
            this._state = this._action(this._state);
          } catch (e) {
            this._cancel.dispose();
            throw e;
          }
        }
        function SchedulePeriodicRecursive(scheduler, state, period, action) {
          this._scheduler = scheduler;
          this._state = state;
          this._period = period;
          this._action = action;
        }
        SchedulePeriodicRecursive.prototype.start = function() {
          var d = new SingleAssignmentDisposable();
          this._cancel = d;
          d.setDisposable(this._scheduler.scheduleRecursiveWithRelativeAndState(0, this._period, tick.bind(this)));
          return d;
        };
        return SchedulePeriodicRecursive;
      }());
      var immediateScheduler = Scheduler.immediate = (function() {
        function scheduleNow(state, action) {
          return action(this, state);
        }
        return new Scheduler(defaultNow, scheduleNow, notSupported, notSupported);
      }());
      var currentThreadScheduler = Scheduler.currentThread = (function() {
        var queue;
        function runTrampoline() {
          while (queue.length > 0) {
            var item = queue.dequeue();
            !item.isCancelled() && item.invoke();
          }
        }
        function scheduleNow(state, action) {
          var si = new ScheduledItem(this, state, action, this.now());
          if (!queue) {
            queue = new PriorityQueue(4);
            queue.enqueue(si);
            var result = tryCatch(runTrampoline)();
            queue = null;
            if (result === errorObj) {
              return thrower(result.e);
            }
          } else {
            queue.enqueue(si);
          }
          return si.disposable;
        }
        var currentScheduler = new Scheduler(defaultNow, scheduleNow, notSupported, notSupported);
        currentScheduler.scheduleRequired = function() {
          return !queue;
        };
        return currentScheduler;
      }());
      var scheduleMethod,
          clearMethod;
      var localTimer = (function() {
        var localSetTimeout,
            localClearTimeout = noop;
        if (!!root.setTimeout) {
          localSetTimeout = root.setTimeout;
          localClearTimeout = root.clearTimeout;
        } else if (!!root.WScript) {
          localSetTimeout = function(fn, time) {
            root.WScript.Sleep(time);
            fn();
          };
        } else {
          throw new NotSupportedError();
        }
        return {
          setTimeout: localSetTimeout,
          clearTimeout: localClearTimeout
        };
      }());
      var localSetTimeout = localTimer.setTimeout,
          localClearTimeout = localTimer.clearTimeout;
      (function() {
        var nextHandle = 1,
            tasksByHandle = {},
            currentlyRunning = false;
        clearMethod = function(handle) {
          delete tasksByHandle[handle];
        };
        function runTask(handle) {
          if (currentlyRunning) {
            localSetTimeout(function() {
              runTask(handle);
            }, 0);
          } else {
            var task = tasksByHandle[handle];
            if (task) {
              currentlyRunning = true;
              var result = tryCatch(task)();
              clearMethod(handle);
              currentlyRunning = false;
              if (result === errorObj) {
                return thrower(result.e);
              }
            }
          }
        }
        var reNative = RegExp('^' + String(toString).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/toString| for [^\]]+/g, '.*?') + '$');
        var setImmediate = typeof(setImmediate = freeGlobal && moduleExports && freeGlobal.setImmediate) == 'function' && !reNative.test(setImmediate) && setImmediate;
        function postMessageSupported() {
          if (!root.postMessage || root.importScripts) {
            return false;
          }
          var isAsync = false,
              oldHandler = root.onmessage;
          root.onmessage = function() {
            isAsync = true;
          };
          root.postMessage('', '*');
          root.onmessage = oldHandler;
          return isAsync;
        }
        if (isFunction(setImmediate)) {
          scheduleMethod = function(action) {
            var id = nextHandle++;
            tasksByHandle[id] = action;
            setImmediate(function() {
              runTask(id);
            });
            return id;
          };
        } else if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
          scheduleMethod = function(action) {
            var id = nextHandle++;
            tasksByHandle[id] = action;
            process.nextTick(function() {
              runTask(id);
            });
            return id;
          };
        } else if (postMessageSupported()) {
          var MSG_PREFIX = 'ms.rx.schedule' + Math.random();
          function onGlobalPostMessage(event) {
            if (typeof event.data === 'string' && event.data.substring(0, MSG_PREFIX.length) === MSG_PREFIX) {
              runTask(event.data.substring(MSG_PREFIX.length));
            }
          }
          if (root.addEventListener) {
            root.addEventListener('message', onGlobalPostMessage, false);
          } else if (root.attachEvent) {
            root.attachEvent('onmessage', onGlobalPostMessage);
          } else {
            root.onmessage = onGlobalPostMessage;
          }
          scheduleMethod = function(action) {
            var id = nextHandle++;
            tasksByHandle[id] = action;
            root.postMessage(MSG_PREFIX + currentId, '*');
            return id;
          };
        } else if (!!root.MessageChannel) {
          var channel = new root.MessageChannel();
          channel.port1.onmessage = function(e) {
            runTask(e.data);
          };
          scheduleMethod = function(action) {
            var id = nextHandle++;
            tasksByHandle[id] = action;
            channel.port2.postMessage(id);
            return id;
          };
        } else if ('document' in root && 'onreadystatechange' in root.document.createElement('script')) {
          scheduleMethod = function(action) {
            var scriptElement = root.document.createElement('script');
            var id = nextHandle++;
            tasksByHandle[id] = action;
            scriptElement.onreadystatechange = function() {
              runTask(id);
              scriptElement.onreadystatechange = null;
              scriptElement.parentNode.removeChild(scriptElement);
              scriptElement = null;
            };
            root.document.documentElement.appendChild(scriptElement);
            return id;
          };
        } else {
          scheduleMethod = function(action) {
            var id = nextHandle++;
            tasksByHandle[id] = action;
            localSetTimeout(function() {
              runTask(id);
            }, 0);
            return id;
          };
        }
      }());
      var timeoutScheduler = Scheduler.timeout = Scheduler['default'] = (function() {
        function scheduleNow(state, action) {
          var scheduler = this,
              disposable = new SingleAssignmentDisposable();
          var id = scheduleMethod(function() {
            !disposable.isDisposed && disposable.setDisposable(action(scheduler, state));
          });
          return new CompositeDisposable(disposable, disposableCreate(function() {
            clearMethod(id);
          }));
        }
        function scheduleRelative(state, dueTime, action) {
          var scheduler = this,
              dt = Scheduler.normalize(dueTime),
              disposable = new SingleAssignmentDisposable();
          if (dt === 0) {
            return scheduler.scheduleWithState(state, action);
          }
          var id = localSetTimeout(function() {
            !disposable.isDisposed && disposable.setDisposable(action(scheduler, state));
          }, dt);
          return new CompositeDisposable(disposable, disposableCreate(function() {
            localClearTimeout(id);
          }));
        }
        function scheduleAbsolute(state, dueTime, action) {
          return this.scheduleWithRelativeAndState(state, dueTime - this.now(), action);
        }
        return new Scheduler(defaultNow, scheduleNow, scheduleRelative, scheduleAbsolute);
      })();
      var CatchScheduler = (function(__super__) {
        function scheduleNow(state, action) {
          return this._scheduler.scheduleWithState(state, this._wrap(action));
        }
        function scheduleRelative(state, dueTime, action) {
          return this._scheduler.scheduleWithRelativeAndState(state, dueTime, this._wrap(action));
        }
        function scheduleAbsolute(state, dueTime, action) {
          return this._scheduler.scheduleWithAbsoluteAndState(state, dueTime, this._wrap(action));
        }
        inherits(CatchScheduler, __super__);
        function CatchScheduler(scheduler, handler) {
          this._scheduler = scheduler;
          this._handler = handler;
          this._recursiveOriginal = null;
          this._recursiveWrapper = null;
          __super__.call(this, this._scheduler.now.bind(this._scheduler), scheduleNow, scheduleRelative, scheduleAbsolute);
        }
        CatchScheduler.prototype._clone = function(scheduler) {
          return new CatchScheduler(scheduler, this._handler);
        };
        CatchScheduler.prototype._wrap = function(action) {
          var parent = this;
          return function(self, state) {
            try {
              return action(parent._getRecursiveWrapper(self), state);
            } catch (e) {
              if (!parent._handler(e)) {
                throw e;
              }
              return disposableEmpty;
            }
          };
        };
        CatchScheduler.prototype._getRecursiveWrapper = function(scheduler) {
          if (this._recursiveOriginal !== scheduler) {
            this._recursiveOriginal = scheduler;
            var wrapper = this._clone(scheduler);
            wrapper._recursiveOriginal = scheduler;
            wrapper._recursiveWrapper = wrapper;
            this._recursiveWrapper = wrapper;
          }
          return this._recursiveWrapper;
        };
        CatchScheduler.prototype.schedulePeriodicWithState = function(state, period, action) {
          var self = this,
              failed = false,
              d = new SingleAssignmentDisposable();
          d.setDisposable(this._scheduler.schedulePeriodicWithState(state, period, function(state1) {
            if (failed) {
              return null;
            }
            try {
              return action(state1);
            } catch (e) {
              failed = true;
              if (!self._handler(e)) {
                throw e;
              }
              d.dispose();
              return null;
            }
          }));
          return d;
        };
        return CatchScheduler;
      }(Scheduler));
      var Notification = Rx.Notification = (function() {
        function Notification(kind, value, exception, accept, acceptObservable, toString) {
          this.kind = kind;
          this.value = value;
          this.exception = exception;
          this._accept = accept;
          this._acceptObservable = acceptObservable;
          this.toString = toString;
        }
        Notification.prototype.accept = function(observerOrOnNext, onError, onCompleted) {
          return observerOrOnNext && typeof observerOrOnNext === 'object' ? this._acceptObservable(observerOrOnNext) : this._accept(observerOrOnNext, onError, onCompleted);
        };
        Notification.prototype.toObservable = function(scheduler) {
          var self = this;
          isScheduler(scheduler) || (scheduler = immediateScheduler);
          return new AnonymousObservable(function(observer) {
            return scheduler.scheduleWithState(self, function(_, notification) {
              notification._acceptObservable(observer);
              notification.kind === 'N' && observer.onCompleted();
            });
          });
        };
        return Notification;
      })();
      var notificationCreateOnNext = Notification.createOnNext = (function() {
        function _accept(onNext) {
          return onNext(this.value);
        }
        function _acceptObservable(observer) {
          return observer.onNext(this.value);
        }
        function toString() {
          return 'OnNext(' + this.value + ')';
        }
        return function(value) {
          return new Notification('N', value, null, _accept, _acceptObservable, toString);
        };
      }());
      var notificationCreateOnError = Notification.createOnError = (function() {
        function _accept(onNext, onError) {
          return onError(this.exception);
        }
        function _acceptObservable(observer) {
          return observer.onError(this.exception);
        }
        function toString() {
          return 'OnError(' + this.exception + ')';
        }
        return function(e) {
          return new Notification('E', null, e, _accept, _acceptObservable, toString);
        };
      }());
      var notificationCreateOnCompleted = Notification.createOnCompleted = (function() {
        function _accept(onNext, onError, onCompleted) {
          return onCompleted();
        }
        function _acceptObservable(observer) {
          return observer.onCompleted();
        }
        function toString() {
          return 'OnCompleted()';
        }
        return function() {
          return new Notification('C', null, null, _accept, _acceptObservable, toString);
        };
      }());
      var Observer = Rx.Observer = function() {};
      Observer.prototype.toNotifier = function() {
        var observer = this;
        return function(n) {
          return n.accept(observer);
        };
      };
      Observer.prototype.asObserver = function() {
        return new AnonymousObserver(this.onNext.bind(this), this.onError.bind(this), this.onCompleted.bind(this));
      };
      Observer.prototype.checked = function() {
        return new CheckedObserver(this);
      };
      var observerCreate = Observer.create = function(onNext, onError, onCompleted) {
        onNext || (onNext = noop);
        onError || (onError = defaultError);
        onCompleted || (onCompleted = noop);
        return new AnonymousObserver(onNext, onError, onCompleted);
      };
      Observer.fromNotifier = function(handler, thisArg) {
        return new AnonymousObserver(function(x) {
          return handler.call(thisArg, notificationCreateOnNext(x));
        }, function(e) {
          return handler.call(thisArg, notificationCreateOnError(e));
        }, function() {
          return handler.call(thisArg, notificationCreateOnCompleted());
        });
      };
      Observer.prototype.notifyOn = function(scheduler) {
        return new ObserveOnObserver(scheduler, this);
      };
      Observer.prototype.makeSafe = function(disposable) {
        return new AnonymousSafeObserver(this._onNext, this._onError, this._onCompleted, disposable);
      };
      var AbstractObserver = Rx.internals.AbstractObserver = (function(__super__) {
        inherits(AbstractObserver, __super__);
        function AbstractObserver() {
          this.isStopped = false;
          __super__.call(this);
        }
        AbstractObserver.prototype.next = notImplemented;
        AbstractObserver.prototype.error = notImplemented;
        AbstractObserver.prototype.completed = notImplemented;
        AbstractObserver.prototype.onNext = function(value) {
          if (!this.isStopped) {
            this.next(value);
          }
        };
        AbstractObserver.prototype.onError = function(error) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.error(error);
          }
        };
        AbstractObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.completed();
          }
        };
        AbstractObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        AbstractObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.error(e);
            return true;
          }
          return false;
        };
        return AbstractObserver;
      }(Observer));
      var AnonymousObserver = Rx.AnonymousObserver = (function(__super__) {
        inherits(AnonymousObserver, __super__);
        function AnonymousObserver(onNext, onError, onCompleted) {
          __super__.call(this);
          this._onNext = onNext;
          this._onError = onError;
          this._onCompleted = onCompleted;
        }
        AnonymousObserver.prototype.next = function(value) {
          this._onNext(value);
        };
        AnonymousObserver.prototype.error = function(error) {
          this._onError(error);
        };
        AnonymousObserver.prototype.completed = function() {
          this._onCompleted();
        };
        return AnonymousObserver;
      }(AbstractObserver));
      var CheckedObserver = (function(__super__) {
        inherits(CheckedObserver, __super__);
        function CheckedObserver(observer) {
          __super__.call(this);
          this._observer = observer;
          this._state = 0;
        }
        var CheckedObserverPrototype = CheckedObserver.prototype;
        CheckedObserverPrototype.onNext = function(value) {
          this.checkAccess();
          var res = tryCatch(this._observer.onNext).call(this._observer, value);
          this._state = 0;
          res === errorObj && thrower(res.e);
        };
        CheckedObserverPrototype.onError = function(err) {
          this.checkAccess();
          var res = tryCatch(this._observer.onError).call(this._observer, err);
          this._state = 2;
          res === errorObj && thrower(res.e);
        };
        CheckedObserverPrototype.onCompleted = function() {
          this.checkAccess();
          var res = tryCatch(this._observer.onCompleted).call(this._observer);
          this._state = 2;
          res === errorObj && thrower(res.e);
        };
        CheckedObserverPrototype.checkAccess = function() {
          if (this._state === 1) {
            throw new Error('Re-entrancy detected');
          }
          if (this._state === 2) {
            throw new Error('Observer completed');
          }
          if (this._state === 0) {
            this._state = 1;
          }
        };
        return CheckedObserver;
      }(Observer));
      var ScheduledObserver = Rx.internals.ScheduledObserver = (function(__super__) {
        inherits(ScheduledObserver, __super__);
        function ScheduledObserver(scheduler, observer) {
          __super__.call(this);
          this.scheduler = scheduler;
          this.observer = observer;
          this.isAcquired = false;
          this.hasFaulted = false;
          this.queue = [];
          this.disposable = new SerialDisposable();
        }
        ScheduledObserver.prototype.next = function(value) {
          var self = this;
          this.queue.push(function() {
            self.observer.onNext(value);
          });
        };
        ScheduledObserver.prototype.error = function(e) {
          var self = this;
          this.queue.push(function() {
            self.observer.onError(e);
          });
        };
        ScheduledObserver.prototype.completed = function() {
          var self = this;
          this.queue.push(function() {
            self.observer.onCompleted();
          });
        };
        ScheduledObserver.prototype.ensureActive = function() {
          var isOwner = false,
              parent = this;
          if (!this.hasFaulted && this.queue.length > 0) {
            isOwner = !this.isAcquired;
            this.isAcquired = true;
          }
          if (isOwner) {
            this.disposable.setDisposable(this.scheduler.scheduleRecursive(function(self) {
              var work;
              if (parent.queue.length > 0) {
                work = parent.queue.shift();
              } else {
                parent.isAcquired = false;
                return;
              }
              try {
                work();
              } catch (ex) {
                parent.queue = [];
                parent.hasFaulted = true;
                throw ex;
              }
              self();
            }));
          }
        };
        ScheduledObserver.prototype.dispose = function() {
          __super__.prototype.dispose.call(this);
          this.disposable.dispose();
        };
        return ScheduledObserver;
      }(AbstractObserver));
      var ObserveOnObserver = (function(__super__) {
        inherits(ObserveOnObserver, __super__);
        function ObserveOnObserver(scheduler, observer, cancel) {
          __super__.call(this, scheduler, observer);
          this._cancel = cancel;
        }
        ObserveOnObserver.prototype.next = function(value) {
          __super__.prototype.next.call(this, value);
          this.ensureActive();
        };
        ObserveOnObserver.prototype.error = function(e) {
          __super__.prototype.error.call(this, e);
          this.ensureActive();
        };
        ObserveOnObserver.prototype.completed = function() {
          __super__.prototype.completed.call(this);
          this.ensureActive();
        };
        ObserveOnObserver.prototype.dispose = function() {
          __super__.prototype.dispose.call(this);
          this._cancel && this._cancel.dispose();
          this._cancel = null;
        };
        return ObserveOnObserver;
      })(ScheduledObserver);
      var observableProto;
      var Observable = Rx.Observable = (function() {
        function Observable(subscribe) {
          if (Rx.config.longStackSupport && hasStacks) {
            try {
              throw new Error();
            } catch (e) {
              this.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            }
            var self = this;
            this._subscribe = function(observer) {
              var oldOnError = observer.onError.bind(observer);
              observer.onError = function(err) {
                makeStackTraceLong(err, self);
                oldOnError(err);
              };
              return subscribe.call(self, observer);
            };
          } else {
            this._subscribe = subscribe;
          }
        }
        observableProto = Observable.prototype;
        observableProto.subscribe = observableProto.forEach = function(observerOrOnNext, onError, onCompleted) {
          return this._subscribe(typeof observerOrOnNext === 'object' ? observerOrOnNext : observerCreate(observerOrOnNext, onError, onCompleted));
        };
        observableProto.subscribeOnNext = function(onNext, thisArg) {
          return this._subscribe(observerCreate(typeof thisArg !== 'undefined' ? function(x) {
            onNext.call(thisArg, x);
          } : onNext));
        };
        observableProto.subscribeOnError = function(onError, thisArg) {
          return this._subscribe(observerCreate(null, typeof thisArg !== 'undefined' ? function(e) {
            onError.call(thisArg, e);
          } : onError));
        };
        observableProto.subscribeOnCompleted = function(onCompleted, thisArg) {
          return this._subscribe(observerCreate(null, null, typeof thisArg !== 'undefined' ? function() {
            onCompleted.call(thisArg);
          } : onCompleted));
        };
        return Observable;
      })();
      var ObservableBase = Rx.ObservableBase = (function(__super__) {
        inherits(ObservableBase, __super__);
        function fixSubscriber(subscriber) {
          return subscriber && isFunction(subscriber.dispose) ? subscriber : isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
        }
        function setDisposable(s, state) {
          var ado = state[0],
              self = state[1];
          var sub = tryCatch(self.subscribeCore).call(self, ado);
          if (sub === errorObj) {
            if (!ado.fail(errorObj.e)) {
              return thrower(errorObj.e);
            }
          }
          ado.setDisposable(fixSubscriber(sub));
        }
        function subscribe(observer) {
          var ado = new AutoDetachObserver(observer),
              state = [ado, this];
          if (currentThreadScheduler.scheduleRequired()) {
            currentThreadScheduler.scheduleWithState(state, setDisposable);
          } else {
            setDisposable(null, state);
          }
          return ado;
        }
        function ObservableBase() {
          __super__.call(this, subscribe);
        }
        ObservableBase.prototype.subscribeCore = notImplemented;
        return ObservableBase;
      }(Observable));
      var Enumerable = Rx.internals.Enumerable = function() {};
      var ConcatEnumerableObservable = (function(__super__) {
        inherits(ConcatEnumerableObservable, __super__);
        function ConcatEnumerableObservable(sources) {
          this.sources = sources;
          __super__.call(this);
        }
        ConcatEnumerableObservable.prototype.subscribeCore = function(o) {
          var isDisposed,
              subscription = new SerialDisposable();
          var cancelable = immediateScheduler.scheduleRecursiveWithState(this.sources[$iterator$](), function(e, self) {
            if (isDisposed) {
              return;
            }
            var currentItem = tryCatch(e.next).call(e);
            if (currentItem === errorObj) {
              return o.onError(currentItem.e);
            }
            if (currentItem.done) {
              return o.onCompleted();
            }
            var currentValue = currentItem.value;
            isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
            var d = new SingleAssignmentDisposable();
            subscription.setDisposable(d);
            d.setDisposable(currentValue.subscribe(new InnerObserver(o, self, e)));
          });
          return new CompositeDisposable(subscription, cancelable, disposableCreate(function() {
            isDisposed = true;
          }));
        };
        function InnerObserver(o, s, e) {
          this.o = o;
          this.s = s;
          this.e = e;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (!this.isStopped) {
            this.o.onNext(x);
          }
        };
        InnerObserver.prototype.onError = function(err) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(err);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.s(this.e);
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(err) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(err);
            return true;
          }
          return false;
        };
        return ConcatEnumerableObservable;
      }(ObservableBase));
      Enumerable.prototype.concat = function() {
        return new ConcatEnumerableObservable(this);
      };
      var CatchErrorObservable = (function(__super__) {
        inherits(CatchErrorObservable, __super__);
        function CatchErrorObservable(sources) {
          this.sources = sources;
          __super__.call(this);
        }
        CatchErrorObservable.prototype.subscribeCore = function(o) {
          var e = this.sources[$iterator$]();
          var isDisposed,
              subscription = new SerialDisposable();
          var cancelable = immediateScheduler.scheduleRecursiveWithState(null, function(lastException, self) {
            if (isDisposed) {
              return;
            }
            var currentItem = tryCatch(e.next).call(e);
            if (currentItem === errorObj) {
              return o.onError(currentItem.e);
            }
            if (currentItem.done) {
              return lastException !== null ? o.onError(lastException) : o.onCompleted();
            }
            var currentValue = currentItem.value;
            isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
            var d = new SingleAssignmentDisposable();
            subscription.setDisposable(d);
            d.setDisposable(currentValue.subscribe(function(x) {
              o.onNext(x);
            }, self, function() {
              o.onCompleted();
            }));
          });
          return new CompositeDisposable(subscription, cancelable, disposableCreate(function() {
            isDisposed = true;
          }));
        };
        return CatchErrorObservable;
      }(ObservableBase));
      Enumerable.prototype.catchError = function() {
        return new CatchErrorObservable(this);
      };
      Enumerable.prototype.catchErrorWhen = function(notificationHandler) {
        var sources = this;
        return new AnonymousObservable(function(o) {
          var exceptions = new Subject(),
              notifier = new Subject(),
              handled = notificationHandler(exceptions),
              notificationDisposable = handled.subscribe(notifier);
          var e = sources[$iterator$]();
          var isDisposed,
              lastException,
              subscription = new SerialDisposable();
          var cancelable = immediateScheduler.scheduleRecursive(function(self) {
            if (isDisposed) {
              return;
            }
            var currentItem = tryCatch(e.next).call(e);
            if (currentItem === errorObj) {
              return o.onError(currentItem.e);
            }
            if (currentItem.done) {
              if (lastException) {
                o.onError(lastException);
              } else {
                o.onCompleted();
              }
              return;
            }
            var currentValue = currentItem.value;
            isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
            var outer = new SingleAssignmentDisposable();
            var inner = new SingleAssignmentDisposable();
            subscription.setDisposable(new CompositeDisposable(inner, outer));
            outer.setDisposable(currentValue.subscribe(function(x) {
              o.onNext(x);
            }, function(exn) {
              inner.setDisposable(notifier.subscribe(self, function(ex) {
                o.onError(ex);
              }, function() {
                o.onCompleted();
              }));
              exceptions.onNext(exn);
            }, function() {
              o.onCompleted();
            }));
          });
          return new CompositeDisposable(notificationDisposable, subscription, cancelable, disposableCreate(function() {
            isDisposed = true;
          }));
        });
      };
      var RepeatEnumerable = (function(__super__) {
        inherits(RepeatEnumerable, __super__);
        function RepeatEnumerable(v, c) {
          this.v = v;
          this.c = c == null ? -1 : c;
        }
        RepeatEnumerable.prototype[$iterator$] = function() {
          return new RepeatEnumerator(this);
        };
        function RepeatEnumerator(p) {
          this.v = p.v;
          this.l = p.c;
        }
        RepeatEnumerator.prototype.next = function() {
          if (this.l === 0) {
            return doneEnumerator;
          }
          if (this.l > 0) {
            this.l--;
          }
          return {
            done: false,
            value: this.v
          };
        };
        return RepeatEnumerable;
      }(Enumerable));
      var enumerableRepeat = Enumerable.repeat = function(value, repeatCount) {
        return new RepeatEnumerable(value, repeatCount);
      };
      var OfEnumerable = (function(__super__) {
        inherits(OfEnumerable, __super__);
        function OfEnumerable(s, fn, thisArg) {
          this.s = s;
          this.fn = fn ? bindCallback(fn, thisArg, 3) : null;
        }
        OfEnumerable.prototype[$iterator$] = function() {
          return new OfEnumerator(this);
        };
        function OfEnumerator(p) {
          this.i = -1;
          this.s = p.s;
          this.l = this.s.length;
          this.fn = p.fn;
        }
        OfEnumerator.prototype.next = function() {
          return ++this.i < this.l ? {
            done: false,
            value: !this.fn ? this.s[this.i] : this.fn(this.s[this.i], this.i, this.s)
          } : doneEnumerator;
        };
        return OfEnumerable;
      }(Enumerable));
      var enumerableOf = Enumerable.of = function(source, selector, thisArg) {
        return new OfEnumerable(source, selector, thisArg);
      };
      observableProto.observeOn = function(scheduler) {
        var source = this;
        return new AnonymousObservable(function(observer) {
          return source.subscribe(new ObserveOnObserver(scheduler, observer));
        }, source);
      };
      observableProto.subscribeOn = function(scheduler) {
        var source = this;
        return new AnonymousObservable(function(observer) {
          var m = new SingleAssignmentDisposable(),
              d = new SerialDisposable();
          d.setDisposable(m);
          m.setDisposable(scheduler.schedule(function() {
            d.setDisposable(new ScheduledDisposable(scheduler, source.subscribe(observer)));
          }));
          return d;
        }, source);
      };
      var FromPromiseObservable = (function(__super__) {
        inherits(FromPromiseObservable, __super__);
        function FromPromiseObservable(p) {
          this.p = p;
          __super__.call(this);
        }
        FromPromiseObservable.prototype.subscribeCore = function(o) {
          this.p.then(function(data) {
            o.onNext(data);
            o.onCompleted();
          }, function(err) {
            o.onError(err);
          });
          return disposableEmpty;
        };
        return FromPromiseObservable;
      }(ObservableBase));
      var observableFromPromise = Observable.fromPromise = function(promise) {
        return new FromPromiseObservable(promise);
      };
      observableProto.toPromise = function(promiseCtor) {
        promiseCtor || (promiseCtor = Rx.config.Promise);
        if (!promiseCtor) {
          throw new NotSupportedError('Promise type not provided nor in Rx.config.Promise');
        }
        var source = this;
        return new promiseCtor(function(resolve, reject) {
          var value,
              hasValue = false;
          source.subscribe(function(v) {
            value = v;
            hasValue = true;
          }, reject, function() {
            hasValue && resolve(value);
          });
        });
      };
      var ToArrayObservable = (function(__super__) {
        inherits(ToArrayObservable, __super__);
        function ToArrayObservable(source) {
          this.source = source;
          __super__.call(this);
        }
        ToArrayObservable.prototype.subscribeCore = function(o) {
          return this.source.subscribe(new InnerObserver(o));
        };
        function InnerObserver(o) {
          this.o = o;
          this.a = [];
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (!this.isStopped) {
            this.a.push(x);
          }
        };
        InnerObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onNext(this.a);
            this.o.onCompleted();
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        return ToArrayObservable;
      }(ObservableBase));
      observableProto.toArray = function() {
        return new ToArrayObservable(this);
      };
      Observable.create = Observable.createWithDisposable = function(subscribe, parent) {
        return new AnonymousObservable(subscribe, parent);
      };
      var observableDefer = Observable.defer = function(observableFactory) {
        return new AnonymousObservable(function(observer) {
          var result;
          try {
            result = observableFactory();
          } catch (e) {
            return observableThrow(e).subscribe(observer);
          }
          isPromise(result) && (result = observableFromPromise(result));
          return result.subscribe(observer);
        });
      };
      var EmptyObservable = (function(__super__) {
        inherits(EmptyObservable, __super__);
        function EmptyObservable(scheduler) {
          this.scheduler = scheduler;
          __super__.call(this);
        }
        EmptyObservable.prototype.subscribeCore = function(observer) {
          var sink = new EmptySink(observer, this);
          return sink.run();
        };
        function EmptySink(observer, parent) {
          this.observer = observer;
          this.parent = parent;
        }
        function scheduleItem(s, state) {
          state.onCompleted();
        }
        EmptySink.prototype.run = function() {
          return this.parent.scheduler.scheduleWithState(this.observer, scheduleItem);
        };
        return EmptyObservable;
      }(ObservableBase));
      var observableEmpty = Observable.empty = function(scheduler) {
        isScheduler(scheduler) || (scheduler = immediateScheduler);
        return new EmptyObservable(scheduler);
      };
      var FromObservable = (function(__super__) {
        inherits(FromObservable, __super__);
        function FromObservable(iterable, mapper, scheduler) {
          this.iterable = iterable;
          this.mapper = mapper;
          this.scheduler = scheduler;
          __super__.call(this);
        }
        FromObservable.prototype.subscribeCore = function(observer) {
          var sink = new FromSink(observer, this);
          return sink.run();
        };
        return FromObservable;
      }(ObservableBase));
      var FromSink = (function() {
        function FromSink(observer, parent) {
          this.observer = observer;
          this.parent = parent;
        }
        FromSink.prototype.run = function() {
          var list = Object(this.parent.iterable),
              it = getIterable(list),
              observer = this.observer,
              mapper = this.parent.mapper;
          function loopRecursive(i, recurse) {
            try {
              var next = it.next();
            } catch (e) {
              return observer.onError(e);
            }
            if (next.done) {
              return observer.onCompleted();
            }
            var result = next.value;
            if (mapper) {
              try {
                result = mapper(result, i);
              } catch (e) {
                return observer.onError(e);
              }
            }
            observer.onNext(result);
            recurse(i + 1);
          }
          return this.parent.scheduler.scheduleRecursiveWithState(0, loopRecursive);
        };
        return FromSink;
      }());
      var maxSafeInteger = Math.pow(2, 53) - 1;
      function StringIterable(str) {
        this._s = s;
      }
      StringIterable.prototype[$iterator$] = function() {
        return new StringIterator(this._s);
      };
      function StringIterator(str) {
        this._s = s;
        this._l = s.length;
        this._i = 0;
      }
      StringIterator.prototype[$iterator$] = function() {
        return this;
      };
      StringIterator.prototype.next = function() {
        return this._i < this._l ? {
          done: false,
          value: this._s.charAt(this._i++)
        } : doneEnumerator;
      };
      function ArrayIterable(a) {
        this._a = a;
      }
      ArrayIterable.prototype[$iterator$] = function() {
        return new ArrayIterator(this._a);
      };
      function ArrayIterator(a) {
        this._a = a;
        this._l = toLength(a);
        this._i = 0;
      }
      ArrayIterator.prototype[$iterator$] = function() {
        return this;
      };
      ArrayIterator.prototype.next = function() {
        return this._i < this._l ? {
          done: false,
          value: this._a[this._i++]
        } : doneEnumerator;
      };
      function numberIsFinite(value) {
        return typeof value === 'number' && root.isFinite(value);
      }
      function isNan(n) {
        return n !== n;
      }
      function getIterable(o) {
        var i = o[$iterator$],
            it;
        if (!i && typeof o === 'string') {
          it = new StringIterable(o);
          return it[$iterator$]();
        }
        if (!i && o.length !== undefined) {
          it = new ArrayIterable(o);
          return it[$iterator$]();
        }
        if (!i) {
          throw new TypeError('Object is not iterable');
        }
        return o[$iterator$]();
      }
      function sign(value) {
        var number = +value;
        if (number === 0) {
          return number;
        }
        if (isNaN(number)) {
          return number;
        }
        return number < 0 ? -1 : 1;
      }
      function toLength(o) {
        var len = +o.length;
        if (isNaN(len)) {
          return 0;
        }
        if (len === 0 || !numberIsFinite(len)) {
          return len;
        }
        len = sign(len) * Math.floor(Math.abs(len));
        if (len <= 0) {
          return 0;
        }
        if (len > maxSafeInteger) {
          return maxSafeInteger;
        }
        return len;
      }
      var observableFrom = Observable.from = function(iterable, mapFn, thisArg, scheduler) {
        if (iterable == null) {
          throw new Error('iterable cannot be null.');
        }
        if (mapFn && !isFunction(mapFn)) {
          throw new Error('mapFn when provided must be a function');
        }
        if (mapFn) {
          var mapper = bindCallback(mapFn, thisArg, 2);
        }
        isScheduler(scheduler) || (scheduler = currentThreadScheduler);
        return new FromObservable(iterable, mapper, scheduler);
      };
      var FromArrayObservable = (function(__super__) {
        inherits(FromArrayObservable, __super__);
        function FromArrayObservable(args, scheduler) {
          this.args = args;
          this.scheduler = scheduler;
          __super__.call(this);
        }
        FromArrayObservable.prototype.subscribeCore = function(observer) {
          var sink = new FromArraySink(observer, this);
          return sink.run();
        };
        return FromArrayObservable;
      }(ObservableBase));
      function FromArraySink(observer, parent) {
        this.observer = observer;
        this.parent = parent;
      }
      FromArraySink.prototype.run = function() {
        var observer = this.observer,
            args = this.parent.args,
            len = args.length;
        function loopRecursive(i, recurse) {
          if (i < len) {
            observer.onNext(args[i]);
            recurse(i + 1);
          } else {
            observer.onCompleted();
          }
        }
        return this.parent.scheduler.scheduleRecursiveWithState(0, loopRecursive);
      };
      var observableFromArray = Observable.fromArray = function(array, scheduler) {
        isScheduler(scheduler) || (scheduler = currentThreadScheduler);
        return new FromArrayObservable(array, scheduler);
      };
      Observable.generate = function(initialState, condition, iterate, resultSelector, scheduler) {
        isScheduler(scheduler) || (scheduler = currentThreadScheduler);
        return new AnonymousObservable(function(o) {
          var first = true;
          return scheduler.scheduleRecursiveWithState(initialState, function(state, self) {
            var hasResult,
                result;
            try {
              if (first) {
                first = false;
              } else {
                state = iterate(state);
              }
              hasResult = condition(state);
              hasResult && (result = resultSelector(state));
            } catch (e) {
              return o.onError(e);
            }
            if (hasResult) {
              o.onNext(result);
              self(state);
            } else {
              o.onCompleted();
            }
          });
        });
      };
      var NeverObservable = (function(__super__) {
        inherits(NeverObservable, __super__);
        function NeverObservable() {
          __super__.call(this);
        }
        NeverObservable.prototype.subscribeCore = function(observer) {
          return disposableEmpty;
        };
        return NeverObservable;
      }(ObservableBase));
      var observableNever = Observable.never = function() {
        return new NeverObservable();
      };
      function observableOf(scheduler, array) {
        isScheduler(scheduler) || (scheduler = currentThreadScheduler);
        return new FromArrayObservable(array, scheduler);
      }
      Observable.of = function() {
        var len = arguments.length,
            args = new Array(len);
        for (var i = 0; i < len; i++) {
          args[i] = arguments[i];
        }
        return new FromArrayObservable(args, currentThreadScheduler);
      };
      Observable.ofWithScheduler = function(scheduler) {
        var len = arguments.length,
            args = new Array(len - 1);
        for (var i = 1; i < len; i++) {
          args[i - 1] = arguments[i];
        }
        return new FromArrayObservable(args, scheduler);
      };
      var PairsObservable = (function(__super__) {
        inherits(PairsObservable, __super__);
        function PairsObservable(obj, scheduler) {
          this.obj = obj;
          this.keys = Object.keys(obj);
          this.scheduler = scheduler;
          __super__.call(this);
        }
        PairsObservable.prototype.subscribeCore = function(observer) {
          var sink = new PairsSink(observer, this);
          return sink.run();
        };
        return PairsObservable;
      }(ObservableBase));
      function PairsSink(observer, parent) {
        this.observer = observer;
        this.parent = parent;
      }
      PairsSink.prototype.run = function() {
        var observer = this.observer,
            obj = this.parent.obj,
            keys = this.parent.keys,
            len = keys.length;
        function loopRecursive(i, recurse) {
          if (i < len) {
            var key = keys[i];
            observer.onNext([key, obj[key]]);
            recurse(i + 1);
          } else {
            observer.onCompleted();
          }
        }
        return this.parent.scheduler.scheduleRecursiveWithState(0, loopRecursive);
      };
      Observable.pairs = function(obj, scheduler) {
        scheduler || (scheduler = currentThreadScheduler);
        return new PairsObservable(obj, scheduler);
      };
      var RangeObservable = (function(__super__) {
        inherits(RangeObservable, __super__);
        function RangeObservable(start, count, scheduler) {
          this.start = start;
          this.rangeCount = count;
          this.scheduler = scheduler;
          __super__.call(this);
        }
        RangeObservable.prototype.subscribeCore = function(observer) {
          var sink = new RangeSink(observer, this);
          return sink.run();
        };
        return RangeObservable;
      }(ObservableBase));
      var RangeSink = (function() {
        function RangeSink(observer, parent) {
          this.observer = observer;
          this.parent = parent;
        }
        RangeSink.prototype.run = function() {
          var start = this.parent.start,
              count = this.parent.rangeCount,
              observer = this.observer;
          function loopRecursive(i, recurse) {
            if (i < count) {
              observer.onNext(start + i);
              recurse(i + 1);
            } else {
              observer.onCompleted();
            }
          }
          return this.parent.scheduler.scheduleRecursiveWithState(0, loopRecursive);
        };
        return RangeSink;
      }());
      Observable.range = function(start, count, scheduler) {
        isScheduler(scheduler) || (scheduler = currentThreadScheduler);
        return new RangeObservable(start, count, scheduler);
      };
      var RepeatObservable = (function(__super__) {
        inherits(RepeatObservable, __super__);
        function RepeatObservable(value, repeatCount, scheduler) {
          this.value = value;
          this.repeatCount = repeatCount == null ? -1 : repeatCount;
          this.scheduler = scheduler;
          __super__.call(this);
        }
        RepeatObservable.prototype.subscribeCore = function(observer) {
          var sink = new RepeatSink(observer, this);
          return sink.run();
        };
        return RepeatObservable;
      }(ObservableBase));
      function RepeatSink(observer, parent) {
        this.observer = observer;
        this.parent = parent;
      }
      RepeatSink.prototype.run = function() {
        var observer = this.observer,
            value = this.parent.value;
        function loopRecursive(i, recurse) {
          if (i === -1 || i > 0) {
            observer.onNext(value);
            i > 0 && i--;
          }
          if (i === 0) {
            return observer.onCompleted();
          }
          recurse(i);
        }
        return this.parent.scheduler.scheduleRecursiveWithState(this.parent.repeatCount, loopRecursive);
      };
      Observable.repeat = function(value, repeatCount, scheduler) {
        isScheduler(scheduler) || (scheduler = currentThreadScheduler);
        return new RepeatObservable(value, repeatCount, scheduler);
      };
      var JustObservable = (function(__super__) {
        inherits(JustObservable, __super__);
        function JustObservable(value, scheduler) {
          this.value = value;
          this.scheduler = scheduler;
          __super__.call(this);
        }
        JustObservable.prototype.subscribeCore = function(observer) {
          var sink = new JustSink(observer, this);
          return sink.run();
        };
        function JustSink(observer, parent) {
          this.observer = observer;
          this.parent = parent;
        }
        function scheduleItem(s, state) {
          var value = state[0],
              observer = state[1];
          observer.onNext(value);
          observer.onCompleted();
        }
        JustSink.prototype.run = function() {
          return this.parent.scheduler.scheduleWithState([this.parent.value, this.observer], scheduleItem);
        };
        return JustObservable;
      }(ObservableBase));
      var observableReturn = Observable['return'] = Observable.just = Observable.returnValue = function(value, scheduler) {
        isScheduler(scheduler) || (scheduler = immediateScheduler);
        return new JustObservable(value, scheduler);
      };
      var ThrowObservable = (function(__super__) {
        inherits(ThrowObservable, __super__);
        function ThrowObservable(error, scheduler) {
          this.error = error;
          this.scheduler = scheduler;
          __super__.call(this);
        }
        ThrowObservable.prototype.subscribeCore = function(o) {
          var sink = new ThrowSink(o, this);
          return sink.run();
        };
        function ThrowSink(o, p) {
          this.o = o;
          this.p = p;
        }
        function scheduleItem(s, state) {
          var e = state[0],
              o = state[1];
          o.onError(e);
        }
        ThrowSink.prototype.run = function() {
          return this.p.scheduler.scheduleWithState([this.p.error, this.o], scheduleItem);
        };
        return ThrowObservable;
      }(ObservableBase));
      var observableThrow = Observable['throw'] = Observable.throwError = Observable.throwException = function(error, scheduler) {
        isScheduler(scheduler) || (scheduler = immediateScheduler);
        return new ThrowObservable(error, scheduler);
      };
      Observable.using = function(resourceFactory, observableFactory) {
        return new AnonymousObservable(function(observer) {
          var disposable = disposableEmpty,
              resource,
              source;
          try {
            resource = resourceFactory();
            resource && (disposable = resource);
            source = observableFactory(resource);
          } catch (exception) {
            return new CompositeDisposable(observableThrow(exception).subscribe(observer), disposable);
          }
          return new CompositeDisposable(source.subscribe(observer), disposable);
        });
      };
      observableProto.amb = function(rightSource) {
        var leftSource = this;
        return new AnonymousObservable(function(observer) {
          var choice,
              leftChoice = 'L',
              rightChoice = 'R',
              leftSubscription = new SingleAssignmentDisposable(),
              rightSubscription = new SingleAssignmentDisposable();
          isPromise(rightSource) && (rightSource = observableFromPromise(rightSource));
          function choiceL() {
            if (!choice) {
              choice = leftChoice;
              rightSubscription.dispose();
            }
          }
          function choiceR() {
            if (!choice) {
              choice = rightChoice;
              leftSubscription.dispose();
            }
          }
          leftSubscription.setDisposable(leftSource.subscribe(function(left) {
            choiceL();
            choice === leftChoice && observer.onNext(left);
          }, function(err) {
            choiceL();
            choice === leftChoice && observer.onError(err);
          }, function() {
            choiceL();
            choice === leftChoice && observer.onCompleted();
          }));
          rightSubscription.setDisposable(rightSource.subscribe(function(right) {
            choiceR();
            choice === rightChoice && observer.onNext(right);
          }, function(err) {
            choiceR();
            choice === rightChoice && observer.onError(err);
          }, function() {
            choiceR();
            choice === rightChoice && observer.onCompleted();
          }));
          return new CompositeDisposable(leftSubscription, rightSubscription);
        });
      };
      Observable.amb = function() {
        var acc = observableNever(),
            items = [];
        if (Array.isArray(arguments[0])) {
          items = arguments[0];
        } else {
          for (var i = 0,
              len = arguments.length; i < len; i++) {
            items.push(arguments[i]);
          }
        }
        function func(previous, current) {
          return previous.amb(current);
        }
        for (var i = 0,
            len = items.length; i < len; i++) {
          acc = func(acc, items[i]);
        }
        return acc;
      };
      function observableCatchHandler(source, handler) {
        return new AnonymousObservable(function(o) {
          var d1 = new SingleAssignmentDisposable(),
              subscription = new SerialDisposable();
          subscription.setDisposable(d1);
          d1.setDisposable(source.subscribe(function(x) {
            o.onNext(x);
          }, function(e) {
            try {
              var result = handler(e);
            } catch (ex) {
              return o.onError(ex);
            }
            isPromise(result) && (result = observableFromPromise(result));
            var d = new SingleAssignmentDisposable();
            subscription.setDisposable(d);
            d.setDisposable(result.subscribe(o));
          }, function(x) {
            o.onCompleted(x);
          }));
          return subscription;
        }, source);
      }
      observableProto['catch'] = observableProto.catchError = observableProto.catchException = function(handlerOrSecond) {
        return typeof handlerOrSecond === 'function' ? observableCatchHandler(this, handlerOrSecond) : observableCatch([this, handlerOrSecond]);
      };
      var observableCatch = Observable.catchError = Observable['catch'] = Observable.catchException = function() {
        var items = [];
        if (Array.isArray(arguments[0])) {
          items = arguments[0];
        } else {
          for (var i = 0,
              len = arguments.length; i < len; i++) {
            items.push(arguments[i]);
          }
        }
        return enumerableOf(items).catchError();
      };
      observableProto.combineLatest = function() {
        var len = arguments.length,
            args = new Array(len);
        for (var i = 0; i < len; i++) {
          args[i] = arguments[i];
        }
        if (Array.isArray(args[0])) {
          args[0].unshift(this);
        } else {
          args.unshift(this);
        }
        return combineLatest.apply(this, args);
      };
      var combineLatest = Observable.combineLatest = function() {
        var len = arguments.length,
            args = new Array(len);
        for (var i = 0; i < len; i++) {
          args[i] = arguments[i];
        }
        var resultSelector = args.pop();
        Array.isArray(args[0]) && (args = args[0]);
        return new AnonymousObservable(function(o) {
          var n = args.length,
              falseFactory = function() {
                return false;
              },
              hasValue = arrayInitialize(n, falseFactory),
              hasValueAll = false,
              isDone = arrayInitialize(n, falseFactory),
              values = new Array(n);
          function next(i) {
            hasValue[i] = true;
            if (hasValueAll || (hasValueAll = hasValue.every(identity))) {
              try {
                var res = resultSelector.apply(null, values);
              } catch (e) {
                return o.onError(e);
              }
              o.onNext(res);
            } else if (isDone.filter(function(x, j) {
              return j !== i;
            }).every(identity)) {
              o.onCompleted();
            }
          }
          function done(i) {
            isDone[i] = true;
            isDone.every(identity) && o.onCompleted();
          }
          var subscriptions = new Array(n);
          for (var idx = 0; idx < n; idx++) {
            (function(i) {
              var source = args[i],
                  sad = new SingleAssignmentDisposable();
              isPromise(source) && (source = observableFromPromise(source));
              sad.setDisposable(source.subscribe(function(x) {
                values[i] = x;
                next(i);
              }, function(e) {
                o.onError(e);
              }, function() {
                done(i);
              }));
              subscriptions[i] = sad;
            }(idx));
          }
          return new CompositeDisposable(subscriptions);
        }, this);
      };
      observableProto.concat = function() {
        for (var args = [],
            i = 0,
            len = arguments.length; i < len; i++) {
          args.push(arguments[i]);
        }
        args.unshift(this);
        return observableConcat.apply(null, args);
      };
      var ConcatObservable = (function(__super__) {
        inherits(ConcatObservable, __super__);
        function ConcatObservable(sources) {
          this.sources = sources;
          __super__.call(this);
        }
        ConcatObservable.prototype.subscribeCore = function(o) {
          var sink = new ConcatSink(this.sources, o);
          return sink.run();
        };
        function ConcatSink(sources, o) {
          this.sources = sources;
          this.o = o;
        }
        ConcatSink.prototype.run = function() {
          var isDisposed,
              subscription = new SerialDisposable(),
              sources = this.sources,
              length = sources.length,
              o = this.o;
          var cancelable = immediateScheduler.scheduleRecursiveWithState(0, function(i, self) {
            if (isDisposed) {
              return;
            }
            if (i === length) {
              return o.onCompleted();
            }
            var currentValue = sources[i];
            isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
            var d = new SingleAssignmentDisposable();
            subscription.setDisposable(d);
            d.setDisposable(currentValue.subscribe(function(x) {
              o.onNext(x);
            }, function(e) {
              o.onError(e);
            }, function() {
              self(i + 1);
            }));
          });
          return new CompositeDisposable(subscription, cancelable, disposableCreate(function() {
            isDisposed = true;
          }));
        };
        return ConcatObservable;
      }(ObservableBase));
      var observableConcat = Observable.concat = function() {
        var args;
        if (Array.isArray(arguments[0])) {
          args = arguments[0];
        } else {
          args = new Array(arguments.length);
          for (var i = 0,
              len = arguments.length; i < len; i++) {
            args[i] = arguments[i];
          }
        }
        return new ConcatObservable(args);
      };
      observableProto.concatAll = observableProto.concatObservable = function() {
        return this.merge(1);
      };
      var MergeObservable = (function(__super__) {
        inherits(MergeObservable, __super__);
        function MergeObservable(source, maxConcurrent) {
          this.source = source;
          this.maxConcurrent = maxConcurrent;
          __super__.call(this);
        }
        MergeObservable.prototype.subscribeCore = function(observer) {
          var g = new CompositeDisposable();
          g.add(this.source.subscribe(new MergeObserver(observer, this.maxConcurrent, g)));
          return g;
        };
        return MergeObservable;
      }(ObservableBase));
      var MergeObserver = (function() {
        function MergeObserver(o, max, g) {
          this.o = o;
          this.max = max;
          this.g = g;
          this.done = false;
          this.q = [];
          this.activeCount = 0;
          this.isStopped = false;
        }
        MergeObserver.prototype.handleSubscribe = function(xs) {
          var sad = new SingleAssignmentDisposable();
          this.g.add(sad);
          isPromise(xs) && (xs = observableFromPromise(xs));
          sad.setDisposable(xs.subscribe(new InnerObserver(this, sad)));
        };
        MergeObserver.prototype.onNext = function(innerSource) {
          if (this.isStopped) {
            return;
          }
          if (this.activeCount < this.max) {
            this.activeCount++;
            this.handleSubscribe(innerSource);
          } else {
            this.q.push(innerSource);
          }
        };
        MergeObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
          }
        };
        MergeObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.done = true;
            this.activeCount === 0 && this.o.onCompleted();
          }
        };
        MergeObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        MergeObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        function InnerObserver(parent, sad) {
          this.parent = parent;
          this.sad = sad;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (!this.isStopped) {
            this.parent.o.onNext(x);
          }
        };
        InnerObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.parent.o.onError(e);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            var parent = this.parent;
            parent.g.remove(this.sad);
            if (parent.q.length > 0) {
              parent.handleSubscribe(parent.q.shift());
            } else {
              parent.activeCount--;
              parent.done && parent.activeCount === 0 && parent.o.onCompleted();
            }
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.parent.o.onError(e);
            return true;
          }
          return false;
        };
        return MergeObserver;
      }());
      observableProto.merge = function(maxConcurrentOrOther) {
        return typeof maxConcurrentOrOther !== 'number' ? observableMerge(this, maxConcurrentOrOther) : new MergeObservable(this, maxConcurrentOrOther);
      };
      var observableMerge = Observable.merge = function() {
        var scheduler,
            sources = [],
            i,
            len = arguments.length;
        if (!arguments[0]) {
          scheduler = immediateScheduler;
          for (i = 1; i < len; i++) {
            sources.push(arguments[i]);
          }
        } else if (isScheduler(arguments[0])) {
          scheduler = arguments[0];
          for (i = 1; i < len; i++) {
            sources.push(arguments[i]);
          }
        } else {
          scheduler = immediateScheduler;
          for (i = 0; i < len; i++) {
            sources.push(arguments[i]);
          }
        }
        if (Array.isArray(sources[0])) {
          sources = sources[0];
        }
        return observableOf(scheduler, sources).mergeAll();
      };
      var CompositeError = Rx.CompositeError = function(errors) {
        this.name = "NotImplementedError";
        this.innerErrors = errors;
        this.message = 'This contains multiple errors. Check the innerErrors';
        Error.call(this);
      };
      CompositeError.prototype = Error.prototype;
      Observable.mergeDelayError = function() {
        var args;
        if (Array.isArray(arguments[0])) {
          args = arguments[0];
        } else {
          var len = arguments.length;
          args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
        }
        var source = observableOf(null, args);
        return new AnonymousObservable(function(o) {
          var group = new CompositeDisposable(),
              m = new SingleAssignmentDisposable(),
              isStopped = false,
              errors = [];
          function setCompletion() {
            if (errors.length === 0) {
              o.onCompleted();
            } else if (errors.length === 1) {
              o.onError(errors[0]);
            } else {
              o.onError(new CompositeError(errors));
            }
          }
          group.add(m);
          m.setDisposable(source.subscribe(function(innerSource) {
            var innerSubscription = new SingleAssignmentDisposable();
            group.add(innerSubscription);
            isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
            innerSubscription.setDisposable(innerSource.subscribe(function(x) {
              o.onNext(x);
            }, function(e) {
              errors.push(e);
              group.remove(innerSubscription);
              isStopped && group.length === 1 && setCompletion();
            }, function() {
              group.remove(innerSubscription);
              isStopped && group.length === 1 && setCompletion();
            }));
          }, function(e) {
            errors.push(e);
            isStopped = true;
            group.length === 1 && setCompletion();
          }, function() {
            isStopped = true;
            group.length === 1 && setCompletion();
          }));
          return group;
        });
      };
      var MergeAllObservable = (function(__super__) {
        inherits(MergeAllObservable, __super__);
        function MergeAllObservable(source) {
          this.source = source;
          __super__.call(this);
        }
        MergeAllObservable.prototype.subscribeCore = function(observer) {
          var g = new CompositeDisposable(),
              m = new SingleAssignmentDisposable();
          g.add(m);
          m.setDisposable(this.source.subscribe(new MergeAllObserver(observer, g)));
          return g;
        };
        function MergeAllObserver(o, g) {
          this.o = o;
          this.g = g;
          this.isStopped = false;
          this.done = false;
        }
        MergeAllObserver.prototype.onNext = function(innerSource) {
          if (this.isStopped) {
            return;
          }
          var sad = new SingleAssignmentDisposable();
          this.g.add(sad);
          isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
          sad.setDisposable(innerSource.subscribe(new InnerObserver(this, this.g, sad)));
        };
        MergeAllObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
          }
        };
        MergeAllObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.done = true;
            this.g.length === 1 && this.o.onCompleted();
          }
        };
        MergeAllObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        MergeAllObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        function InnerObserver(parent, g, sad) {
          this.parent = parent;
          this.g = g;
          this.sad = sad;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (!this.isStopped) {
            this.parent.o.onNext(x);
          }
        };
        InnerObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.parent.o.onError(e);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            var parent = this.parent;
            this.isStopped = true;
            parent.g.remove(this.sad);
            parent.done && parent.g.length === 1 && parent.o.onCompleted();
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.parent.o.onError(e);
            return true;
          }
          return false;
        };
        return MergeAllObservable;
      }(ObservableBase));
      observableProto.mergeAll = observableProto.mergeObservable = function() {
        return new MergeAllObservable(this);
      };
      observableProto.onErrorResumeNext = function(second) {
        if (!second) {
          throw new Error('Second observable is required');
        }
        return onErrorResumeNext([this, second]);
      };
      var onErrorResumeNext = Observable.onErrorResumeNext = function() {
        var sources = [];
        if (Array.isArray(arguments[0])) {
          sources = arguments[0];
        } else {
          for (var i = 0,
              len = arguments.length; i < len; i++) {
            sources.push(arguments[i]);
          }
        }
        return new AnonymousObservable(function(observer) {
          var pos = 0,
              subscription = new SerialDisposable(),
              cancelable = immediateScheduler.scheduleRecursive(function(self) {
                var current,
                    d;
                if (pos < sources.length) {
                  current = sources[pos++];
                  isPromise(current) && (current = observableFromPromise(current));
                  d = new SingleAssignmentDisposable();
                  subscription.setDisposable(d);
                  d.setDisposable(current.subscribe(observer.onNext.bind(observer), self, self));
                } else {
                  observer.onCompleted();
                }
              });
          return new CompositeDisposable(subscription, cancelable);
        });
      };
      observableProto.skipUntil = function(other) {
        var source = this;
        return new AnonymousObservable(function(o) {
          var isOpen = false;
          var disposables = new CompositeDisposable(source.subscribe(function(left) {
            isOpen && o.onNext(left);
          }, function(e) {
            o.onError(e);
          }, function() {
            isOpen && o.onCompleted();
          }));
          isPromise(other) && (other = observableFromPromise(other));
          var rightSubscription = new SingleAssignmentDisposable();
          disposables.add(rightSubscription);
          rightSubscription.setDisposable(other.subscribe(function() {
            isOpen = true;
            rightSubscription.dispose();
          }, function(e) {
            o.onError(e);
          }, function() {
            rightSubscription.dispose();
          }));
          return disposables;
        }, source);
      };
      var SwitchObservable = (function(__super__) {
        inherits(SwitchObservable, __super__);
        function SwitchObservable(source) {
          this.source = source;
          __super__.call(this);
        }
        SwitchObservable.prototype.subscribeCore = function(o) {
          var inner = new SerialDisposable(),
              s = this.source.subscribe(new SwitchObserver(o, inner));
          return new CompositeDisposable(s, inner);
        };
        function SwitchObserver(o, inner) {
          this.o = o;
          this.inner = inner;
          this.stopped = false;
          this.latest = 0;
          this.hasLatest = false;
          this.isStopped = false;
        }
        SwitchObserver.prototype.onNext = function(innerSource) {
          if (this.isStopped) {
            return;
          }
          var d = new SingleAssignmentDisposable(),
              id = ++this.latest;
          this.hasLatest = true;
          this.inner.setDisposable(d);
          isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
          d.setDisposable(innerSource.subscribe(new InnerObserver(this, id)));
        };
        SwitchObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
          }
        };
        SwitchObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.stopped = true;
            !this.hasLatest && this.o.onCompleted();
          }
        };
        SwitchObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        SwitchObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        function InnerObserver(parent, id) {
          this.parent = parent;
          this.id = id;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (this.isStopped) {
            return;
          }
          this.parent.latest === this.id && this.parent.o.onNext(x);
        };
        InnerObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.parent.latest === this.id && this.parent.o.onError(e);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            if (this.parent.latest === this.id) {
              this.parent.hasLatest = false;
              this.parent.isStopped && this.parent.o.onCompleted();
            }
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.parent.o.onError(e);
            return true;
          }
          return false;
        };
        return SwitchObservable;
      }(ObservableBase));
      observableProto['switch'] = observableProto.switchLatest = function() {
        return new SwitchObservable(this);
      };
      var TakeUntilObservable = (function(__super__) {
        inherits(TakeUntilObservable, __super__);
        function TakeUntilObservable(source, other) {
          this.source = source;
          this.other = isPromise(other) ? observableFromPromise(other) : other;
          __super__.call(this);
        }
        TakeUntilObservable.prototype.subscribeCore = function(o) {
          return new CompositeDisposable(this.source.subscribe(o), this.other.subscribe(new InnerObserver(o)));
        };
        function InnerObserver(o) {
          this.o = o;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (this.isStopped) {
            return;
          }
          this.o.onCompleted();
        };
        InnerObserver.prototype.onError = function(err) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(err);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          !this.isStopped && (this.isStopped = true);
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        return TakeUntilObservable;
      }(ObservableBase));
      observableProto.takeUntil = function(other) {
        return new TakeUntilObservable(this, other);
      };
      function falseFactory() {
        return false;
      }
      observableProto.withLatestFrom = function() {
        var len = arguments.length,
            args = new Array(len);
        for (var i = 0; i < len; i++) {
          args[i] = arguments[i];
        }
        var resultSelector = args.pop(),
            source = this;
        Array.isArray(args[0]) && (args = args[0]);
        return new AnonymousObservable(function(observer) {
          var n = args.length,
              hasValue = arrayInitialize(n, falseFactory),
              hasValueAll = false,
              values = new Array(n);
          var subscriptions = new Array(n + 1);
          for (var idx = 0; idx < n; idx++) {
            (function(i) {
              var other = args[i],
                  sad = new SingleAssignmentDisposable();
              isPromise(other) && (other = observableFromPromise(other));
              sad.setDisposable(other.subscribe(function(x) {
                values[i] = x;
                hasValue[i] = true;
                hasValueAll = hasValue.every(identity);
              }, function(e) {
                observer.onError(e);
              }, noop));
              subscriptions[i] = sad;
            }(idx));
          }
          var sad = new SingleAssignmentDisposable();
          sad.setDisposable(source.subscribe(function(x) {
            var allValues = [x].concat(values);
            if (!hasValueAll) {
              return;
            }
            var res = tryCatch(resultSelector).apply(null, allValues);
            if (res === errorObj) {
              return observer.onError(res.e);
            }
            observer.onNext(res);
          }, function(e) {
            observer.onError(e);
          }, function() {
            observer.onCompleted();
          }));
          subscriptions[n] = sad;
          return new CompositeDisposable(subscriptions);
        }, this);
      };
      function zipArray(second, resultSelector) {
        var first = this;
        return new AnonymousObservable(function(o) {
          var index = 0,
              len = second.length;
          return first.subscribe(function(left) {
            if (index < len) {
              var right = second[index++],
                  res = tryCatch(resultSelector)(left, right);
              if (res === errorObj) {
                return o.onError(res.e);
              }
              o.onNext(res);
            } else {
              o.onCompleted();
            }
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onCompleted();
          });
        }, first);
      }
      function falseFactory() {
        return false;
      }
      function emptyArrayFactory() {
        return [];
      }
      observableProto.zip = function() {
        if (Array.isArray(arguments[0])) {
          return zipArray.apply(this, arguments);
        }
        var len = arguments.length,
            args = new Array(len);
        for (var i = 0; i < len; i++) {
          args[i] = arguments[i];
        }
        var parent = this,
            resultSelector = args.pop();
        args.unshift(parent);
        return new AnonymousObservable(function(o) {
          var n = args.length,
              queues = arrayInitialize(n, emptyArrayFactory),
              isDone = arrayInitialize(n, falseFactory);
          var subscriptions = new Array(n);
          for (var idx = 0; idx < n; idx++) {
            (function(i) {
              var source = args[i],
                  sad = new SingleAssignmentDisposable();
              isPromise(source) && (source = observableFromPromise(source));
              sad.setDisposable(source.subscribe(function(x) {
                queues[i].push(x);
                if (queues.every(function(x) {
                  return x.length > 0;
                })) {
                  var queuedValues = queues.map(function(x) {
                    return x.shift();
                  }),
                      res = tryCatch(resultSelector).apply(parent, queuedValues);
                  if (res === errorObj) {
                    return o.onError(res.e);
                  }
                  o.onNext(res);
                } else if (isDone.filter(function(x, j) {
                  return j !== i;
                }).every(identity)) {
                  o.onCompleted();
                }
              }, function(e) {
                o.onError(e);
              }, function() {
                isDone[i] = true;
                isDone.every(identity) && o.onCompleted();
              }));
              subscriptions[i] = sad;
            })(idx);
          }
          return new CompositeDisposable(subscriptions);
        }, parent);
      };
      Observable.zip = function() {
        var len = arguments.length,
            args = new Array(len);
        for (var i = 0; i < len; i++) {
          args[i] = arguments[i];
        }
        var first = args.shift();
        return first.zip.apply(first, args);
      };
      function falseFactory() {
        return false;
      }
      function arrayFactory() {
        return [];
      }
      Observable.zipArray = function() {
        var sources;
        if (Array.isArray(arguments[0])) {
          sources = arguments[0];
        } else {
          var len = arguments.length;
          sources = new Array(len);
          for (var i = 0; i < len; i++) {
            sources[i] = arguments[i];
          }
        }
        return new AnonymousObservable(function(o) {
          var n = sources.length,
              queues = arrayInitialize(n, arrayFactory),
              isDone = arrayInitialize(n, falseFactory);
          var subscriptions = new Array(n);
          for (var idx = 0; idx < n; idx++) {
            (function(i) {
              subscriptions[i] = new SingleAssignmentDisposable();
              subscriptions[i].setDisposable(sources[i].subscribe(function(x) {
                queues[i].push(x);
                if (queues.every(function(x) {
                  return x.length > 0;
                })) {
                  var res = queues.map(function(x) {
                    return x.shift();
                  });
                  o.onNext(res);
                } else if (isDone.filter(function(x, j) {
                  return j !== i;
                }).every(identity)) {
                  return o.onCompleted();
                }
              }, function(e) {
                o.onError(e);
              }, function() {
                isDone[i] = true;
                isDone.every(identity) && o.onCompleted();
              }));
            })(idx);
          }
          return new CompositeDisposable(subscriptions);
        });
      };
      observableProto.asObservable = function() {
        var source = this;
        return new AnonymousObservable(function(o) {
          return source.subscribe(o);
        }, source);
      };
      observableProto.bufferWithCount = function(count, skip) {
        if (typeof skip !== 'number') {
          skip = count;
        }
        return this.windowWithCount(count, skip).selectMany(function(x) {
          return x.toArray();
        }).where(function(x) {
          return x.length > 0;
        });
      };
      observableProto.dematerialize = function() {
        var source = this;
        return new AnonymousObservable(function(o) {
          return source.subscribe(function(x) {
            return x.accept(o);
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onCompleted();
          });
        }, this);
      };
      observableProto.distinctUntilChanged = function(keySelector, comparer) {
        var source = this;
        comparer || (comparer = defaultComparer);
        return new AnonymousObservable(function(o) {
          var hasCurrentKey = false,
              currentKey;
          return source.subscribe(function(value) {
            var key = value;
            if (keySelector) {
              key = tryCatch(keySelector)(value);
              if (key === errorObj) {
                return o.onError(key.e);
              }
            }
            if (hasCurrentKey) {
              var comparerEquals = tryCatch(comparer)(currentKey, key);
              if (comparerEquals === errorObj) {
                return o.onError(comparerEquals.e);
              }
            }
            if (!hasCurrentKey || !comparerEquals) {
              hasCurrentKey = true;
              currentKey = key;
              o.onNext(value);
            }
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onCompleted();
          });
        }, this);
      };
      var TapObservable = (function(__super__) {
        inherits(TapObservable, __super__);
        function TapObservable(source, observerOrOnNext, onError, onCompleted) {
          this.source = source;
          this.t = !observerOrOnNext || isFunction(observerOrOnNext) ? observerCreate(observerOrOnNext || noop, onError || noop, onCompleted || noop) : observerOrOnNext;
          __super__.call(this);
        }
        TapObservable.prototype.subscribeCore = function(o) {
          return this.source.subscribe(new InnerObserver(o, this.t));
        };
        function InnerObserver(o, t) {
          this.o = o;
          this.t = t;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (this.isStopped) {
            return;
          }
          var res = tryCatch(this.t.onNext).call(this.t, x);
          if (res === errorObj) {
            this.o.onError(res.e);
          }
          this.o.onNext(x);
        };
        InnerObserver.prototype.onError = function(err) {
          if (!this.isStopped) {
            this.isStopped = true;
            var res = tryCatch(this.t.onError).call(this.t, err);
            if (res === errorObj) {
              return this.o.onError(res.e);
            }
            this.o.onError(err);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            var res = tryCatch(this.t.onCompleted).call(this.t);
            if (res === errorObj) {
              return this.o.onError(res.e);
            }
            this.o.onCompleted();
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        return TapObservable;
      }(ObservableBase));
      observableProto['do'] = observableProto.tap = observableProto.doAction = function(observerOrOnNext, onError, onCompleted) {
        return new TapObservable(this, observerOrOnNext, onError, onCompleted);
      };
      observableProto.doOnNext = observableProto.tapOnNext = function(onNext, thisArg) {
        return this.tap(typeof thisArg !== 'undefined' ? function(x) {
          onNext.call(thisArg, x);
        } : onNext);
      };
      observableProto.doOnError = observableProto.tapOnError = function(onError, thisArg) {
        return this.tap(noop, typeof thisArg !== 'undefined' ? function(e) {
          onError.call(thisArg, e);
        } : onError);
      };
      observableProto.doOnCompleted = observableProto.tapOnCompleted = function(onCompleted, thisArg) {
        return this.tap(noop, null, typeof thisArg !== 'undefined' ? function() {
          onCompleted.call(thisArg);
        } : onCompleted);
      };
      observableProto['finally'] = observableProto.ensure = function(action) {
        var source = this;
        return new AnonymousObservable(function(observer) {
          var subscription;
          try {
            subscription = source.subscribe(observer);
          } catch (e) {
            action();
            throw e;
          }
          return disposableCreate(function() {
            try {
              subscription.dispose();
            } catch (e) {
              throw e;
            } finally {
              action();
            }
          });
        }, this);
      };
      observableProto.finallyAction = function(action) {
        return this.ensure(action);
      };
      var IgnoreElementsObservable = (function(__super__) {
        inherits(IgnoreElementsObservable, __super__);
        function IgnoreElementsObservable(source) {
          this.source = source;
          __super__.call(this);
        }
        IgnoreElementsObservable.prototype.subscribeCore = function(o) {
          return this.source.subscribe(new InnerObserver(o));
        };
        function InnerObserver(o) {
          this.o = o;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = noop;
        InnerObserver.prototype.onError = function(err) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(err);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onCompleted();
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.observer.onError(e);
            return true;
          }
          return false;
        };
        return IgnoreElementsObservable;
      }(ObservableBase));
      observableProto.ignoreElements = function() {
        return new IgnoreElementsObservable(this);
      };
      observableProto.materialize = function() {
        var source = this;
        return new AnonymousObservable(function(observer) {
          return source.subscribe(function(value) {
            observer.onNext(notificationCreateOnNext(value));
          }, function(e) {
            observer.onNext(notificationCreateOnError(e));
            observer.onCompleted();
          }, function() {
            observer.onNext(notificationCreateOnCompleted());
            observer.onCompleted();
          });
        }, source);
      };
      observableProto.repeat = function(repeatCount) {
        return enumerableRepeat(this, repeatCount).concat();
      };
      observableProto.retry = function(retryCount) {
        return enumerableRepeat(this, retryCount).catchError();
      };
      observableProto.retryWhen = function(notifier) {
        return enumerableRepeat(this).catchErrorWhen(notifier);
      };
      var ScanObservable = (function(__super__) {
        inherits(ScanObservable, __super__);
        function ScanObservable(source, accumulator, hasSeed, seed) {
          this.source = source;
          this.accumulator = accumulator;
          this.hasSeed = hasSeed;
          this.seed = seed;
          __super__.call(this);
        }
        ScanObservable.prototype.subscribeCore = function(observer) {
          return this.source.subscribe(new ScanObserver(observer, this));
        };
        return ScanObservable;
      }(ObservableBase));
      function ScanObserver(observer, parent) {
        this.observer = observer;
        this.accumulator = parent.accumulator;
        this.hasSeed = parent.hasSeed;
        this.seed = parent.seed;
        this.hasAccumulation = false;
        this.accumulation = null;
        this.hasValue = false;
        this.isStopped = false;
      }
      ScanObserver.prototype.onNext = function(x) {
        if (this.isStopped) {
          return;
        }
        !this.hasValue && (this.hasValue = true);
        try {
          if (this.hasAccumulation) {
            this.accumulation = this.accumulator(this.accumulation, x);
          } else {
            this.accumulation = this.hasSeed ? this.accumulator(this.seed, x) : x;
            this.hasAccumulation = true;
          }
        } catch (e) {
          return this.observer.onError(e);
        }
        this.observer.onNext(this.accumulation);
      };
      ScanObserver.prototype.onError = function(e) {
        if (!this.isStopped) {
          this.isStopped = true;
          this.observer.onError(e);
        }
      };
      ScanObserver.prototype.onCompleted = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          !this.hasValue && this.hasSeed && this.observer.onNext(this.seed);
          this.observer.onCompleted();
        }
      };
      ScanObserver.prototype.dispose = function() {
        this.isStopped = true;
      };
      ScanObserver.prototype.fail = function(e) {
        if (!this.isStopped) {
          this.isStopped = true;
          this.observer.onError(e);
          return true;
        }
        return false;
      };
      observableProto.scan = function() {
        var hasSeed = false,
            seed,
            accumulator,
            source = this;
        if (arguments.length === 2) {
          hasSeed = true;
          seed = arguments[0];
          accumulator = arguments[1];
        } else {
          accumulator = arguments[0];
        }
        return new ScanObservable(this, accumulator, hasSeed, seed);
      };
      observableProto.skipLast = function(count) {
        if (count < 0) {
          throw new ArgumentOutOfRangeError();
        }
        var source = this;
        return new AnonymousObservable(function(o) {
          var q = [];
          return source.subscribe(function(x) {
            q.push(x);
            q.length > count && o.onNext(q.shift());
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onCompleted();
          });
        }, source);
      };
      observableProto.startWith = function() {
        var values,
            scheduler,
            start = 0;
        if (!!arguments.length && isScheduler(arguments[0])) {
          scheduler = arguments[0];
          start = 1;
        } else {
          scheduler = immediateScheduler;
        }
        for (var args = [],
            i = start,
            len = arguments.length; i < len; i++) {
          args.push(arguments[i]);
        }
        return enumerableOf([observableFromArray(args, scheduler), this]).concat();
      };
      observableProto.takeLast = function(count) {
        if (count < 0) {
          throw new ArgumentOutOfRangeError();
        }
        var source = this;
        return new AnonymousObservable(function(o) {
          var q = [];
          return source.subscribe(function(x) {
            q.push(x);
            q.length > count && q.shift();
          }, function(e) {
            o.onError(e);
          }, function() {
            while (q.length > 0) {
              o.onNext(q.shift());
            }
            o.onCompleted();
          });
        }, source);
      };
      observableProto.takeLastBuffer = function(count) {
        var source = this;
        return new AnonymousObservable(function(o) {
          var q = [];
          return source.subscribe(function(x) {
            q.push(x);
            q.length > count && q.shift();
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onNext(q);
            o.onCompleted();
          });
        }, source);
      };
      observableProto.windowWithCount = function(count, skip) {
        var source = this;
        +count || (count = 0);
        Math.abs(count) === Infinity && (count = 0);
        if (count <= 0) {
          throw new ArgumentOutOfRangeError();
        }
        skip == null && (skip = count);
        +skip || (skip = 0);
        Math.abs(skip) === Infinity && (skip = 0);
        if (skip <= 0) {
          throw new ArgumentOutOfRangeError();
        }
        return new AnonymousObservable(function(observer) {
          var m = new SingleAssignmentDisposable(),
              refCountDisposable = new RefCountDisposable(m),
              n = 0,
              q = [];
          function createWindow() {
            var s = new Subject();
            q.push(s);
            observer.onNext(addRef(s, refCountDisposable));
          }
          createWindow();
          m.setDisposable(source.subscribe(function(x) {
            for (var i = 0,
                len = q.length; i < len; i++) {
              q[i].onNext(x);
            }
            var c = n - count + 1;
            c >= 0 && c % skip === 0 && q.shift().onCompleted();
            ++n % skip === 0 && createWindow();
          }, function(e) {
            while (q.length > 0) {
              q.shift().onError(e);
            }
            observer.onError(e);
          }, function() {
            while (q.length > 0) {
              q.shift().onCompleted();
            }
            observer.onCompleted();
          }));
          return refCountDisposable;
        }, source);
      };
      function concatMap(source, selector, thisArg) {
        var selectorFunc = bindCallback(selector, thisArg, 3);
        return source.map(function(x, i) {
          var result = selectorFunc(x, i, source);
          isPromise(result) && (result = observableFromPromise(result));
          (isArrayLike(result) || isIterable(result)) && (result = observableFrom(result));
          return result;
        }).concatAll();
      }
      observableProto.selectConcat = observableProto.concatMap = function(selector, resultSelector, thisArg) {
        if (isFunction(selector) && isFunction(resultSelector)) {
          return this.concatMap(function(x, i) {
            var selectorResult = selector(x, i);
            isPromise(selectorResult) && (selectorResult = observableFromPromise(selectorResult));
            (isArrayLike(selectorResult) || isIterable(selectorResult)) && (selectorResult = observableFrom(selectorResult));
            return selectorResult.map(function(y, i2) {
              return resultSelector(x, y, i, i2);
            });
          });
        }
        return isFunction(selector) ? concatMap(this, selector, thisArg) : concatMap(this, function() {
          return selector;
        });
      };
      observableProto.concatMapObserver = observableProto.selectConcatObserver = function(onNext, onError, onCompleted, thisArg) {
        var source = this,
            onNextFunc = bindCallback(onNext, thisArg, 2),
            onErrorFunc = bindCallback(onError, thisArg, 1),
            onCompletedFunc = bindCallback(onCompleted, thisArg, 0);
        return new AnonymousObservable(function(observer) {
          var index = 0;
          return source.subscribe(function(x) {
            var result;
            try {
              result = onNextFunc(x, index++);
            } catch (e) {
              observer.onError(e);
              return;
            }
            isPromise(result) && (result = observableFromPromise(result));
            observer.onNext(result);
          }, function(err) {
            var result;
            try {
              result = onErrorFunc(err);
            } catch (e) {
              observer.onError(e);
              return;
            }
            isPromise(result) && (result = observableFromPromise(result));
            observer.onNext(result);
            observer.onCompleted();
          }, function() {
            var result;
            try {
              result = onCompletedFunc();
            } catch (e) {
              observer.onError(e);
              return;
            }
            isPromise(result) && (result = observableFromPromise(result));
            observer.onNext(result);
            observer.onCompleted();
          });
        }, this).concatAll();
      };
      observableProto.defaultIfEmpty = function(defaultValue) {
        var source = this;
        defaultValue === undefined && (defaultValue = null);
        return new AnonymousObservable(function(observer) {
          var found = false;
          return source.subscribe(function(x) {
            found = true;
            observer.onNext(x);
          }, function(e) {
            observer.onError(e);
          }, function() {
            !found && observer.onNext(defaultValue);
            observer.onCompleted();
          });
        }, source);
      };
      function arrayIndexOfComparer(array, item, comparer) {
        for (var i = 0,
            len = array.length; i < len; i++) {
          if (comparer(array[i], item)) {
            return i;
          }
        }
        return -1;
      }
      function HashSet(comparer) {
        this.comparer = comparer;
        this.set = [];
      }
      HashSet.prototype.push = function(value) {
        var retValue = arrayIndexOfComparer(this.set, value, this.comparer) === -1;
        retValue && this.set.push(value);
        return retValue;
      };
      observableProto.distinct = function(keySelector, comparer) {
        var source = this;
        comparer || (comparer = defaultComparer);
        return new AnonymousObservable(function(o) {
          var hashSet = new HashSet(comparer);
          return source.subscribe(function(x) {
            var key = x;
            if (keySelector) {
              try {
                key = keySelector(x);
              } catch (e) {
                o.onError(e);
                return;
              }
            }
            hashSet.push(key) && o.onNext(x);
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onCompleted();
          });
        }, this);
      };
      var MapObservable = (function(__super__) {
        inherits(MapObservable, __super__);
        function MapObservable(source, selector, thisArg) {
          this.source = source;
          this.selector = bindCallback(selector, thisArg, 3);
          __super__.call(this);
        }
        function innerMap(selector, self) {
          return function(x, i, o) {
            return selector.call(this, self.selector(x, i, o), i, o);
          };
        }
        MapObservable.prototype.internalMap = function(selector, thisArg) {
          return new MapObservable(this.source, innerMap(selector, this), thisArg);
        };
        MapObservable.prototype.subscribeCore = function(o) {
          return this.source.subscribe(new InnerObserver(o, this.selector, this));
        };
        function InnerObserver(o, selector, source) {
          this.o = o;
          this.selector = selector;
          this.source = source;
          this.i = 0;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (this.isStopped) {
            return;
          }
          var result = tryCatch(this.selector)(x, this.i++, this.source);
          if (result === errorObj) {
            return this.o.onError(result.e);
          }
          this.o.onNext(result);
        };
        InnerObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onCompleted();
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        return MapObservable;
      }(ObservableBase));
      observableProto.map = observableProto.select = function(selector, thisArg) {
        var selectorFn = typeof selector === 'function' ? selector : function() {
          return selector;
        };
        return this instanceof MapObservable ? this.internalMap(selectorFn, thisArg) : new MapObservable(this, selectorFn, thisArg);
      };
      observableProto.pluck = function() {
        var args = arguments,
            len = arguments.length;
        if (len === 0) {
          throw new Error('List of properties cannot be empty.');
        }
        return this.map(function(x) {
          var currentProp = x;
          for (var i = 0; i < len; i++) {
            var p = currentProp[args[i]];
            if (typeof p !== 'undefined') {
              currentProp = p;
            } else {
              return undefined;
            }
          }
          return currentProp;
        });
      };
      observableProto.flatMapObserver = observableProto.selectManyObserver = function(onNext, onError, onCompleted, thisArg) {
        var source = this;
        return new AnonymousObservable(function(observer) {
          var index = 0;
          return source.subscribe(function(x) {
            var result;
            try {
              result = onNext.call(thisArg, x, index++);
            } catch (e) {
              observer.onError(e);
              return;
            }
            isPromise(result) && (result = observableFromPromise(result));
            observer.onNext(result);
          }, function(err) {
            var result;
            try {
              result = onError.call(thisArg, err);
            } catch (e) {
              observer.onError(e);
              return;
            }
            isPromise(result) && (result = observableFromPromise(result));
            observer.onNext(result);
            observer.onCompleted();
          }, function() {
            var result;
            try {
              result = onCompleted.call(thisArg);
            } catch (e) {
              observer.onError(e);
              return;
            }
            isPromise(result) && (result = observableFromPromise(result));
            observer.onNext(result);
            observer.onCompleted();
          });
        }, source).mergeAll();
      };
      function flatMap(source, selector, thisArg) {
        var selectorFunc = bindCallback(selector, thisArg, 3);
        return source.map(function(x, i) {
          var result = selectorFunc(x, i, source);
          isPromise(result) && (result = observableFromPromise(result));
          (isArrayLike(result) || isIterable(result)) && (result = observableFrom(result));
          return result;
        }).mergeAll();
      }
      observableProto.selectMany = observableProto.flatMap = function(selector, resultSelector, thisArg) {
        if (isFunction(selector) && isFunction(resultSelector)) {
          return this.flatMap(function(x, i) {
            var selectorResult = selector(x, i);
            isPromise(selectorResult) && (selectorResult = observableFromPromise(selectorResult));
            (isArrayLike(selectorResult) || isIterable(selectorResult)) && (selectorResult = observableFrom(selectorResult));
            return selectorResult.map(function(y, i2) {
              return resultSelector(x, y, i, i2);
            });
          }, thisArg);
        }
        return isFunction(selector) ? flatMap(this, selector, thisArg) : flatMap(this, function() {
          return selector;
        });
      };
      observableProto.selectSwitch = observableProto.flatMapLatest = observableProto.switchMap = function(selector, thisArg) {
        return this.select(selector, thisArg).switchLatest();
      };
      var SkipObservable = (function(__super__) {
        inherits(SkipObservable, __super__);
        function SkipObservable(source, count) {
          this.source = source;
          this.skipCount = count;
          __super__.call(this);
        }
        SkipObservable.prototype.subscribeCore = function(o) {
          return this.source.subscribe(new InnerObserver(o, this.skipCount));
        };
        function InnerObserver(o, c) {
          this.c = c;
          this.r = c;
          this.o = o;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (this.isStopped) {
            return;
          }
          if (this.r <= 0) {
            this.o.onNext(x);
          } else {
            this.r--;
          }
        };
        InnerObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onCompleted();
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        return SkipObservable;
      }(ObservableBase));
      observableProto.skip = function(count) {
        if (count < 0) {
          throw new ArgumentOutOfRangeError();
        }
        return new SkipObservable(this, count);
      };
      observableProto.skipWhile = function(predicate, thisArg) {
        var source = this,
            callback = bindCallback(predicate, thisArg, 3);
        return new AnonymousObservable(function(o) {
          var i = 0,
              running = false;
          return source.subscribe(function(x) {
            if (!running) {
              try {
                running = !callback(x, i++, source);
              } catch (e) {
                o.onError(e);
                return;
              }
            }
            running && o.onNext(x);
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onCompleted();
          });
        }, source);
      };
      observableProto.take = function(count, scheduler) {
        if (count < 0) {
          throw new ArgumentOutOfRangeError();
        }
        if (count === 0) {
          return observableEmpty(scheduler);
        }
        var source = this;
        return new AnonymousObservable(function(o) {
          var remaining = count;
          return source.subscribe(function(x) {
            if (remaining-- > 0) {
              o.onNext(x);
              remaining <= 0 && o.onCompleted();
            }
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onCompleted();
          });
        }, source);
      };
      observableProto.takeWhile = function(predicate, thisArg) {
        var source = this,
            callback = bindCallback(predicate, thisArg, 3);
        return new AnonymousObservable(function(o) {
          var i = 0,
              running = true;
          return source.subscribe(function(x) {
            if (running) {
              try {
                running = callback(x, i++, source);
              } catch (e) {
                o.onError(e);
                return;
              }
              if (running) {
                o.onNext(x);
              } else {
                o.onCompleted();
              }
            }
          }, function(e) {
            o.onError(e);
          }, function() {
            o.onCompleted();
          });
        }, source);
      };
      var FilterObservable = (function(__super__) {
        inherits(FilterObservable, __super__);
        function FilterObservable(source, predicate, thisArg) {
          this.source = source;
          this.predicate = bindCallback(predicate, thisArg, 3);
          __super__.call(this);
        }
        FilterObservable.prototype.subscribeCore = function(o) {
          return this.source.subscribe(new InnerObserver(o, this.predicate, this));
        };
        function innerPredicate(predicate, self) {
          return function(x, i, o) {
            return self.predicate(x, i, o) && predicate.call(this, x, i, o);
          };
        }
        FilterObservable.prototype.internalFilter = function(predicate, thisArg) {
          return new FilterObservable(this.source, innerPredicate(predicate, this), thisArg);
        };
        function InnerObserver(o, predicate, source) {
          this.o = o;
          this.predicate = predicate;
          this.source = source;
          this.i = 0;
          this.isStopped = false;
        }
        InnerObserver.prototype.onNext = function(x) {
          if (this.isStopped) {
            return;
          }
          var shouldYield = tryCatch(this.predicate)(x, this.i++, this.source);
          if (shouldYield === errorObj) {
            return this.o.onError(shouldYield.e);
          }
          shouldYield && this.o.onNext(x);
        };
        InnerObserver.prototype.onError = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
          }
        };
        InnerObserver.prototype.onCompleted = function() {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onCompleted();
          }
        };
        InnerObserver.prototype.dispose = function() {
          this.isStopped = true;
        };
        InnerObserver.prototype.fail = function(e) {
          if (!this.isStopped) {
            this.isStopped = true;
            this.o.onError(e);
            return true;
          }
          return false;
        };
        return FilterObservable;
      }(ObservableBase));
      observableProto.filter = observableProto.where = function(predicate, thisArg) {
        return this instanceof FilterObservable ? this.internalFilter(predicate, thisArg) : new FilterObservable(this, predicate, thisArg);
      };
      observableProto.transduce = function(transducer) {
        var source = this;
        function transformForObserver(o) {
          return {
            '@@transducer/init': function() {
              return o;
            },
            '@@transducer/step': function(obs, input) {
              return obs.onNext(input);
            },
            '@@transducer/result': function(obs) {
              return obs.onCompleted();
            }
          };
        }
        return new AnonymousObservable(function(o) {
          var xform = transducer(transformForObserver(o));
          return source.subscribe(function(v) {
            try {
              xform['@@transducer/step'](o, v);
            } catch (e) {
              o.onError(e);
            }
          }, function(e) {
            o.onError(e);
          }, function() {
            xform['@@transducer/result'](o);
          });
        }, source);
      };
      var AnonymousObservable = Rx.AnonymousObservable = (function(__super__) {
        inherits(AnonymousObservable, __super__);
        function fixSubscriber(subscriber) {
          return subscriber && isFunction(subscriber.dispose) ? subscriber : isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
        }
        function setDisposable(s, state) {
          var ado = state[0],
              subscribe = state[1];
          var sub = tryCatch(subscribe)(ado);
          if (sub === errorObj) {
            if (!ado.fail(errorObj.e)) {
              return thrower(errorObj.e);
            }
          }
          ado.setDisposable(fixSubscriber(sub));
        }
        function AnonymousObservable(subscribe, parent) {
          this.source = parent;
          function s(observer) {
            var ado = new AutoDetachObserver(observer),
                state = [ado, subscribe];
            if (currentThreadScheduler.scheduleRequired()) {
              currentThreadScheduler.scheduleWithState(state, setDisposable);
            } else {
              setDisposable(null, state);
            }
            return ado;
          }
          __super__.call(this, s);
        }
        return AnonymousObservable;
      }(Observable));
      var AutoDetachObserver = (function(__super__) {
        inherits(AutoDetachObserver, __super__);
        function AutoDetachObserver(observer) {
          __super__.call(this);
          this.observer = observer;
          this.m = new SingleAssignmentDisposable();
        }
        var AutoDetachObserverPrototype = AutoDetachObserver.prototype;
        AutoDetachObserverPrototype.next = function(value) {
          var result = tryCatch(this.observer.onNext).call(this.observer, value);
          if (result === errorObj) {
            this.dispose();
            thrower(result.e);
          }
        };
        AutoDetachObserverPrototype.error = function(err) {
          var result = tryCatch(this.observer.onError).call(this.observer, err);
          this.dispose();
          result === errorObj && thrower(result.e);
        };
        AutoDetachObserverPrototype.completed = function() {
          var result = tryCatch(this.observer.onCompleted).call(this.observer);
          this.dispose();
          result === errorObj && thrower(result.e);
        };
        AutoDetachObserverPrototype.setDisposable = function(value) {
          this.m.setDisposable(value);
        };
        AutoDetachObserverPrototype.getDisposable = function() {
          return this.m.getDisposable();
        };
        AutoDetachObserverPrototype.dispose = function() {
          __super__.prototype.dispose.call(this);
          this.m.dispose();
        };
        return AutoDetachObserver;
      }(AbstractObserver));
      var InnerSubscription = function(subject, observer) {
        this.subject = subject;
        this.observer = observer;
      };
      InnerSubscription.prototype.dispose = function() {
        if (!this.subject.isDisposed && this.observer !== null) {
          var idx = this.subject.observers.indexOf(this.observer);
          this.subject.observers.splice(idx, 1);
          this.observer = null;
        }
      };
      var Subject = Rx.Subject = (function(__super__) {
        function subscribe(observer) {
          checkDisposed(this);
          if (!this.isStopped) {
            this.observers.push(observer);
            return new InnerSubscription(this, observer);
          }
          if (this.hasError) {
            observer.onError(this.error);
            return disposableEmpty;
          }
          observer.onCompleted();
          return disposableEmpty;
        }
        inherits(Subject, __super__);
        function Subject() {
          __super__.call(this, subscribe);
          this.isDisposed = false, this.isStopped = false, this.observers = [];
          this.hasError = false;
        }
        addProperties(Subject.prototype, Observer.prototype, {
          hasObservers: function() {
            return this.observers.length > 0;
          },
          onCompleted: function() {
            checkDisposed(this);
            if (!this.isStopped) {
              this.isStopped = true;
              for (var i = 0,
                  os = cloneArray(this.observers),
                  len = os.length; i < len; i++) {
                os[i].onCompleted();
              }
              this.observers.length = 0;
            }
          },
          onError: function(error) {
            checkDisposed(this);
            if (!this.isStopped) {
              this.isStopped = true;
              this.error = error;
              this.hasError = true;
              for (var i = 0,
                  os = cloneArray(this.observers),
                  len = os.length; i < len; i++) {
                os[i].onError(error);
              }
              this.observers.length = 0;
            }
          },
          onNext: function(value) {
            checkDisposed(this);
            if (!this.isStopped) {
              for (var i = 0,
                  os = cloneArray(this.observers),
                  len = os.length; i < len; i++) {
                os[i].onNext(value);
              }
            }
          },
          dispose: function() {
            this.isDisposed = true;
            this.observers = null;
          }
        });
        Subject.create = function(observer, observable) {
          return new AnonymousSubject(observer, observable);
        };
        return Subject;
      }(Observable));
      var AsyncSubject = Rx.AsyncSubject = (function(__super__) {
        function subscribe(observer) {
          checkDisposed(this);
          if (!this.isStopped) {
            this.observers.push(observer);
            return new InnerSubscription(this, observer);
          }
          if (this.hasError) {
            observer.onError(this.error);
          } else if (this.hasValue) {
            observer.onNext(this.value);
            observer.onCompleted();
          } else {
            observer.onCompleted();
          }
          return disposableEmpty;
        }
        inherits(AsyncSubject, __super__);
        function AsyncSubject() {
          __super__.call(this, subscribe);
          this.isDisposed = false;
          this.isStopped = false;
          this.hasValue = false;
          this.observers = [];
          this.hasError = false;
        }
        addProperties(AsyncSubject.prototype, Observer, {
          hasObservers: function() {
            checkDisposed(this);
            return this.observers.length > 0;
          },
          onCompleted: function() {
            var i,
                len;
            checkDisposed(this);
            if (!this.isStopped) {
              this.isStopped = true;
              var os = cloneArray(this.observers),
                  len = os.length;
              if (this.hasValue) {
                for (i = 0; i < len; i++) {
                  var o = os[i];
                  o.onNext(this.value);
                  o.onCompleted();
                }
              } else {
                for (i = 0; i < len; i++) {
                  os[i].onCompleted();
                }
              }
              this.observers.length = 0;
            }
          },
          onError: function(error) {
            checkDisposed(this);
            if (!this.isStopped) {
              this.isStopped = true;
              this.hasError = true;
              this.error = error;
              for (var i = 0,
                  os = cloneArray(this.observers),
                  len = os.length; i < len; i++) {
                os[i].onError(error);
              }
              this.observers.length = 0;
            }
          },
          onNext: function(value) {
            checkDisposed(this);
            if (this.isStopped) {
              return;
            }
            this.value = value;
            this.hasValue = true;
          },
          dispose: function() {
            this.isDisposed = true;
            this.observers = null;
            this.exception = null;
            this.value = null;
          }
        });
        return AsyncSubject;
      }(Observable));
      var AnonymousSubject = Rx.AnonymousSubject = (function(__super__) {
        inherits(AnonymousSubject, __super__);
        function subscribe(observer) {
          return this.observable.subscribe(observer);
        }
        function AnonymousSubject(observer, observable) {
          this.observer = observer;
          this.observable = observable;
          __super__.call(this, subscribe);
        }
        addProperties(AnonymousSubject.prototype, Observer.prototype, {
          onCompleted: function() {
            this.observer.onCompleted();
          },
          onError: function(error) {
            this.observer.onError(error);
          },
          onNext: function(value) {
            this.observer.onNext(value);
          }
        });
        return AnonymousSubject;
      }(Observable));
      if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        root.Rx = Rx;
        define(function() {
          return Rx;
        });
      } else if (freeExports && freeModule) {
        if (moduleExports) {
          (freeModule.exports = Rx).Rx = Rx;
        } else {
          freeExports.Rx = Rx;
        }
      } else {
        root.Rx = Rx;
      }
      var rEndingLine = captureLine();
    }.call(this));
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.aggregates.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        observableProto = Observable.prototype,
        CompositeDisposable = Rx.CompositeDisposable,
        AnonymousObservable = Rx.AnonymousObservable,
        disposableEmpty = Rx.Disposable.empty,
        isEqual = Rx.internals.isEqual,
        helpers = Rx.helpers,
        not = helpers.not,
        defaultComparer = helpers.defaultComparer,
        identity = helpers.identity,
        defaultSubComparer = helpers.defaultSubComparer,
        isFunction = helpers.isFunction,
        isPromise = helpers.isPromise,
        isArrayLike = helpers.isArrayLike,
        isIterable = helpers.isIterable,
        inherits = Rx.internals.inherits,
        observableFromPromise = Observable.fromPromise,
        observableFrom = Observable.from,
        bindCallback = Rx.internals.bindCallback,
        EmptyError = Rx.EmptyError,
        ObservableBase = Rx.ObservableBase,
        ArgumentOutOfRangeError = Rx.ArgumentOutOfRangeError;
    var errorObj = {e: {}};
    var tryCatchTarget;
    function tryCatcher() {
      try {
        return tryCatchTarget.apply(this, arguments);
      } catch (e) {
        errorObj.e = e;
        return errorObj;
      }
    }
    function tryCatch(fn) {
      if (!isFunction(fn)) {
        throw new TypeError('fn must be a function');
      }
      tryCatchTarget = fn;
      return tryCatcher;
    }
    function thrower(e) {
      throw e;
    }
    function extremaBy(source, keySelector, comparer) {
      return new AnonymousObservable(function(o) {
        var hasValue = false,
            lastKey = null,
            list = [];
        return source.subscribe(function(x) {
          var comparison,
              key;
          try {
            key = keySelector(x);
          } catch (ex) {
            o.onError(ex);
            return;
          }
          comparison = 0;
          if (!hasValue) {
            hasValue = true;
            lastKey = key;
          } else {
            try {
              comparison = comparer(key, lastKey);
            } catch (ex1) {
              o.onError(ex1);
              return;
            }
          }
          if (comparison > 0) {
            lastKey = key;
            list = [];
          }
          if (comparison >= 0) {
            list.push(x);
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          o.onNext(list);
          o.onCompleted();
        });
      }, source);
    }
    function firstOnly(x) {
      if (x.length === 0) {
        throw new EmptyError();
      }
      return x[0];
    }
    observableProto.aggregate = function() {
      var hasSeed = false,
          accumulator,
          seed,
          source = this;
      if (arguments.length === 2) {
        hasSeed = true;
        seed = arguments[0];
        accumulator = arguments[1];
      } else {
        accumulator = arguments[0];
      }
      return new AnonymousObservable(function(o) {
        var hasAccumulation,
            accumulation,
            hasValue;
        return source.subscribe(function(x) {
          !hasValue && (hasValue = true);
          try {
            if (hasAccumulation) {
              accumulation = accumulator(accumulation, x);
            } else {
              accumulation = hasSeed ? accumulator(seed, x) : x;
              hasAccumulation = true;
            }
          } catch (e) {
            return o.onError(e);
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          hasValue && o.onNext(accumulation);
          !hasValue && hasSeed && o.onNext(seed);
          !hasValue && !hasSeed && o.onError(new EmptyError());
          o.onCompleted();
        });
      }, source);
    };
    var ReduceObservable = (function(__super__) {
      inherits(ReduceObservable, __super__);
      function ReduceObservable(source, acc, hasSeed, seed) {
        this.source = source;
        this.acc = acc;
        this.hasSeed = hasSeed;
        this.seed = seed;
        __super__.call(this);
      }
      ReduceObservable.prototype.subscribeCore = function(observer) {
        return this.source.subscribe(new InnerObserver(observer, this));
      };
      function InnerObserver(o, parent) {
        this.o = o;
        this.acc = parent.acc;
        this.hasSeed = parent.hasSeed;
        this.seed = parent.seed;
        this.hasAccumulation = false;
        this.result = null;
        this.hasValue = false;
        this.isStopped = false;
      }
      InnerObserver.prototype.onNext = function(x) {
        if (this.isStopped) {
          return;
        }
        !this.hasValue && (this.hasValue = true);
        if (this.hasAccumulation) {
          this.result = tryCatch(this.acc)(this.result, x);
        } else {
          this.result = this.hasSeed ? tryCatch(this.acc)(this.seed, x) : x;
          this.hasAccumulation = true;
        }
        if (this.result === errorObj) {
          this.o.onError(this.result.e);
        }
      };
      InnerObserver.prototype.onError = function(e) {
        if (!this.isStopped) {
          this.isStopped = true;
          this.o.onError(e);
        }
      };
      InnerObserver.prototype.onCompleted = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this.hasValue && this.o.onNext(this.result);
          !this.hasValue && this.hasSeed && this.o.onNext(this.seed);
          !this.hasValue && !this.hasSeed && this.o.onError(new EmptyError());
          this.o.onCompleted();
        }
      };
      InnerObserver.prototype.dispose = function() {
        this.isStopped = true;
      };
      InnerObserver.prototype.fail = function(e) {
        if (!this.isStopped) {
          this.isStopped = true;
          this.o.onError(e);
          return true;
        }
        return false;
      };
      return ReduceObservable;
    }(ObservableBase));
    observableProto.reduce = function(accumulator) {
      var hasSeed = false;
      if (arguments.length === 2) {
        hasSeed = true;
        var seed = arguments[1];
      }
      return new ReduceObservable(this, accumulator, hasSeed, seed);
    };
    observableProto.some = function(predicate, thisArg) {
      var source = this;
      return predicate ? source.filter(predicate, thisArg).some() : new AnonymousObservable(function(observer) {
        return source.subscribe(function() {
          observer.onNext(true);
          observer.onCompleted();
        }, function(e) {
          observer.onError(e);
        }, function() {
          observer.onNext(false);
          observer.onCompleted();
        });
      }, source);
    };
    observableProto.any = function() {
      return this.some.apply(this, arguments);
    };
    observableProto.isEmpty = function() {
      return this.any().map(not);
    };
    observableProto.every = function(predicate, thisArg) {
      return this.filter(function(v) {
        return !predicate(v);
      }, thisArg).some().map(not);
    };
    observableProto.all = function() {
      return this.every.apply(this, arguments);
    };
    observableProto.includes = function(searchElement, fromIndex) {
      var source = this;
      function comparer(a, b) {
        return (a === 0 && b === 0) || (a === b || (isNaN(a) && isNaN(b)));
      }
      return new AnonymousObservable(function(o) {
        var i = 0,
            n = +fromIndex || 0;
        Math.abs(n) === Infinity && (n = 0);
        if (n < 0) {
          o.onNext(false);
          o.onCompleted();
          return disposableEmpty;
        }
        return source.subscribe(function(x) {
          if (i++ >= n && comparer(x, searchElement)) {
            o.onNext(true);
            o.onCompleted();
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          o.onNext(false);
          o.onCompleted();
        });
      }, this);
    };
    observableProto.contains = function(searchElement, fromIndex) {
      observableProto.includes(searchElement, fromIndex);
    };
    observableProto.count = function(predicate, thisArg) {
      return predicate ? this.filter(predicate, thisArg).count() : this.reduce(function(count) {
        return count + 1;
      }, 0);
    };
    observableProto.indexOf = function(searchElement, fromIndex) {
      var source = this;
      return new AnonymousObservable(function(o) {
        var i = 0,
            n = +fromIndex || 0;
        Math.abs(n) === Infinity && (n = 0);
        if (n < 0) {
          o.onNext(-1);
          o.onCompleted();
          return disposableEmpty;
        }
        return source.subscribe(function(x) {
          if (i >= n && x === searchElement) {
            o.onNext(i);
            o.onCompleted();
          }
          i++;
        }, function(e) {
          o.onError(e);
        }, function() {
          o.onNext(-1);
          o.onCompleted();
        });
      }, source);
    };
    observableProto.sum = function(keySelector, thisArg) {
      return keySelector && isFunction(keySelector) ? this.map(keySelector, thisArg).sum() : this.reduce(function(prev, curr) {
        return prev + curr;
      }, 0);
    };
    observableProto.minBy = function(keySelector, comparer) {
      comparer || (comparer = defaultSubComparer);
      return extremaBy(this, keySelector, function(x, y) {
        return comparer(x, y) * -1;
      });
    };
    observableProto.min = function(comparer) {
      return this.minBy(identity, comparer).map(function(x) {
        return firstOnly(x);
      });
    };
    observableProto.maxBy = function(keySelector, comparer) {
      comparer || (comparer = defaultSubComparer);
      return extremaBy(this, keySelector, comparer);
    };
    observableProto.max = function(comparer) {
      return this.maxBy(identity, comparer).map(function(x) {
        return firstOnly(x);
      });
    };
    observableProto.average = function(keySelector, thisArg) {
      return keySelector && isFunction(keySelector) ? this.map(keySelector, thisArg).average() : this.reduce(function(prev, cur) {
        return {
          sum: prev.sum + cur,
          count: prev.count + 1
        };
      }, {
        sum: 0,
        count: 0
      }).map(function(s) {
        if (s.count === 0) {
          throw new EmptyError();
        }
        return s.sum / s.count;
      });
    };
    observableProto.sequenceEqual = function(second, comparer) {
      var first = this;
      comparer || (comparer = defaultComparer);
      return new AnonymousObservable(function(o) {
        var donel = false,
            doner = false,
            ql = [],
            qr = [];
        var subscription1 = first.subscribe(function(x) {
          var equal,
              v;
          if (qr.length > 0) {
            v = qr.shift();
            try {
              equal = comparer(v, x);
            } catch (e) {
              o.onError(e);
              return;
            }
            if (!equal) {
              o.onNext(false);
              o.onCompleted();
            }
          } else if (doner) {
            o.onNext(false);
            o.onCompleted();
          } else {
            ql.push(x);
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          donel = true;
          if (ql.length === 0) {
            if (qr.length > 0) {
              o.onNext(false);
              o.onCompleted();
            } else if (doner) {
              o.onNext(true);
              o.onCompleted();
            }
          }
        });
        (isArrayLike(second) || isIterable(second)) && (second = observableFrom(second));
        isPromise(second) && (second = observableFromPromise(second));
        var subscription2 = second.subscribe(function(x) {
          var equal;
          if (ql.length > 0) {
            var v = ql.shift();
            try {
              equal = comparer(v, x);
            } catch (exception) {
              o.onError(exception);
              return;
            }
            if (!equal) {
              o.onNext(false);
              o.onCompleted();
            }
          } else if (donel) {
            o.onNext(false);
            o.onCompleted();
          } else {
            qr.push(x);
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          doner = true;
          if (qr.length === 0) {
            if (ql.length > 0) {
              o.onNext(false);
              o.onCompleted();
            } else if (donel) {
              o.onNext(true);
              o.onCompleted();
            }
          }
        });
        return new CompositeDisposable(subscription1, subscription2);
      }, first);
    };
    function elementAtOrDefault(source, index, hasDefault, defaultValue) {
      if (index < 0) {
        throw new ArgumentOutOfRangeError();
      }
      return new AnonymousObservable(function(o) {
        var i = index;
        return source.subscribe(function(x) {
          if (i-- === 0) {
            o.onNext(x);
            o.onCompleted();
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          if (!hasDefault) {
            o.onError(new ArgumentOutOfRangeError());
          } else {
            o.onNext(defaultValue);
            o.onCompleted();
          }
        });
      }, source);
    }
    observableProto.elementAt = function(index) {
      return elementAtOrDefault(this, index, false);
    };
    observableProto.elementAtOrDefault = function(index, defaultValue) {
      return elementAtOrDefault(this, index, true, defaultValue);
    };
    function singleOrDefaultAsync(source, hasDefault, defaultValue) {
      return new AnonymousObservable(function(o) {
        var value = defaultValue,
            seenValue = false;
        return source.subscribe(function(x) {
          if (seenValue) {
            o.onError(new Error('Sequence contains more than one element'));
          } else {
            value = x;
            seenValue = true;
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          if (!seenValue && !hasDefault) {
            o.onError(new EmptyError());
          } else {
            o.onNext(value);
            o.onCompleted();
          }
        });
      }, source);
    }
    observableProto.single = function(predicate, thisArg) {
      return predicate && isFunction(predicate) ? this.where(predicate, thisArg).single() : singleOrDefaultAsync(this, false);
    };
    observableProto.singleOrDefault = function(predicate, defaultValue, thisArg) {
      return predicate && isFunction(predicate) ? this.filter(predicate, thisArg).singleOrDefault(null, defaultValue) : singleOrDefaultAsync(this, true, defaultValue);
    };
    function firstOrDefaultAsync(source, hasDefault, defaultValue) {
      return new AnonymousObservable(function(o) {
        return source.subscribe(function(x) {
          o.onNext(x);
          o.onCompleted();
        }, function(e) {
          o.onError(e);
        }, function() {
          if (!hasDefault) {
            o.onError(new EmptyError());
          } else {
            o.onNext(defaultValue);
            o.onCompleted();
          }
        });
      }, source);
    }
    observableProto.first = function(predicate, thisArg) {
      return predicate ? this.where(predicate, thisArg).first() : firstOrDefaultAsync(this, false);
    };
    observableProto.firstOrDefault = function(predicate, defaultValue, thisArg) {
      return predicate ? this.where(predicate).firstOrDefault(null, defaultValue) : firstOrDefaultAsync(this, true, defaultValue);
    };
    function lastOrDefaultAsync(source, hasDefault, defaultValue) {
      return new AnonymousObservable(function(o) {
        var value = defaultValue,
            seenValue = false;
        return source.subscribe(function(x) {
          value = x;
          seenValue = true;
        }, function(e) {
          o.onError(e);
        }, function() {
          if (!seenValue && !hasDefault) {
            o.onError(new EmptyError());
          } else {
            o.onNext(value);
            o.onCompleted();
          }
        });
      }, source);
    }
    observableProto.last = function(predicate, thisArg) {
      return predicate ? this.where(predicate, thisArg).last() : lastOrDefaultAsync(this, false);
    };
    observableProto.lastOrDefault = function(predicate, defaultValue, thisArg) {
      return predicate ? this.where(predicate, thisArg).lastOrDefault(null, defaultValue) : lastOrDefaultAsync(this, true, defaultValue);
    };
    function findValue(source, predicate, thisArg, yieldIndex) {
      var callback = bindCallback(predicate, thisArg, 3);
      return new AnonymousObservable(function(o) {
        var i = 0;
        return source.subscribe(function(x) {
          var shouldRun;
          try {
            shouldRun = callback(x, i, source);
          } catch (e) {
            o.onError(e);
            return;
          }
          if (shouldRun) {
            o.onNext(yieldIndex ? i : x);
            o.onCompleted();
          } else {
            i++;
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          o.onNext(yieldIndex ? -1 : undefined);
          o.onCompleted();
        });
      }, source);
    }
    observableProto.find = function(predicate, thisArg) {
      return findValue(this, predicate, thisArg, false);
    };
    observableProto.findIndex = function(predicate, thisArg) {
      return findValue(this, predicate, thisArg, true);
    };
    observableProto.toSet = function() {
      if (typeof root.Set === 'undefined') {
        throw new TypeError();
      }
      var source = this;
      return new AnonymousObservable(function(o) {
        var s = new root.Set();
        return source.subscribe(function(x) {
          s.add(x);
        }, function(e) {
          o.onError(e);
        }, function() {
          o.onNext(s);
          o.onCompleted();
        });
      }, source);
    };
    observableProto.toMap = function(keySelector, elementSelector) {
      if (typeof root.Map === 'undefined') {
        throw new TypeError();
      }
      var source = this;
      return new AnonymousObservable(function(o) {
        var m = new root.Map();
        return source.subscribe(function(x) {
          var key;
          try {
            key = keySelector(x);
          } catch (e) {
            o.onError(e);
            return;
          }
          var element = x;
          if (elementSelector) {
            try {
              element = elementSelector(x);
            } catch (e) {
              o.onError(e);
              return;
            }
          }
          m.set(key, element);
        }, function(e) {
          o.onError(e);
        }, function() {
          o.onNext(m);
          o.onCompleted();
        });
      }, source);
    };
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.async.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx.binding", "exports"], function(Rx, exports) {
        root.Rx = factory(root, exports, Rx);
        return root.Rx;
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        observableProto = Observable.prototype,
        observableFromPromise = Observable.fromPromise,
        observableThrow = Observable.throwError,
        AnonymousObservable = Rx.AnonymousObservable,
        AsyncSubject = Rx.AsyncSubject,
        disposableCreate = Rx.Disposable.create,
        CompositeDisposable = Rx.CompositeDisposable,
        immediateScheduler = Rx.Scheduler.immediate,
        timeoutScheduler = Rx.Scheduler['default'],
        isScheduler = Rx.Scheduler.isScheduler,
        slice = Array.prototype.slice;
    var fnString = 'function',
        throwString = 'throw',
        isObject = Rx.internals.isObject;
    function toThunk(obj, ctx) {
      if (Array.isArray(obj)) {
        return objectToThunk.call(ctx, obj);
      }
      if (isGeneratorFunction(obj)) {
        return observableSpawn(obj.call(ctx));
      }
      if (isGenerator(obj)) {
        return observableSpawn(obj);
      }
      if (isObservable(obj)) {
        return observableToThunk(obj);
      }
      if (isPromise(obj)) {
        return promiseToThunk(obj);
      }
      if (typeof obj === fnString) {
        return obj;
      }
      if (isObject(obj) || Array.isArray(obj)) {
        return objectToThunk.call(ctx, obj);
      }
      return obj;
    }
    function objectToThunk(obj) {
      var ctx = this;
      return function(done) {
        var keys = Object.keys(obj),
            pending = keys.length,
            results = new obj.constructor(),
            finished;
        if (!pending) {
          timeoutScheduler.schedule(function() {
            done(null, results);
          });
          return;
        }
        for (var i = 0,
            len = keys.length; i < len; i++) {
          run(obj[keys[i]], keys[i]);
        }
        function run(fn, key) {
          if (finished) {
            return;
          }
          try {
            fn = toThunk(fn, ctx);
            if (typeof fn !== fnString) {
              results[key] = fn;
              return --pending || done(null, results);
            }
            fn.call(ctx, function(err, res) {
              if (finished) {
                return;
              }
              if (err) {
                finished = true;
                return done(err);
              }
              results[key] = res;
              --pending || done(null, results);
            });
          } catch (e) {
            finished = true;
            done(e);
          }
        }
      };
    }
    function observableToThunk(observable) {
      return function(fn) {
        var value,
            hasValue = false;
        observable.subscribe(function(v) {
          value = v;
          hasValue = true;
        }, fn, function() {
          hasValue && fn(null, value);
        });
      };
    }
    function promiseToThunk(promise) {
      return function(fn) {
        promise.then(function(res) {
          fn(null, res);
        }, fn);
      };
    }
    function isObservable(obj) {
      return obj && typeof obj.subscribe === fnString;
    }
    function isGeneratorFunction(obj) {
      return obj && obj.constructor && obj.constructor.name === 'GeneratorFunction';
    }
    function isGenerator(obj) {
      return obj && typeof obj.next === fnString && typeof obj[throwString] === fnString;
    }
    var observableSpawn = Rx.spawn = function(fn) {
      var isGenFun = isGeneratorFunction(fn);
      return function(done) {
        var ctx = this,
            gen = fn;
        if (isGenFun) {
          for (var args = [],
              i = 0,
              len = arguments.length; i < len; i++) {
            args.push(arguments[i]);
          }
          var len = args.length,
              hasCallback = len && typeof args[len - 1] === fnString;
          done = hasCallback ? args.pop() : handleError;
          gen = fn.apply(this, args);
        } else {
          done = done || handleError;
        }
        next();
        function exit(err, res) {
          timeoutScheduler.schedule(done.bind(ctx, err, res));
        }
        function next(err, res) {
          var ret;
          if (arguments.length > 2) {
            for (var res = [],
                i = 1,
                len = arguments.length; i < len; i++) {
              res.push(arguments[i]);
            }
          }
          if (err) {
            try {
              ret = gen[throwString](err);
            } catch (e) {
              return exit(e);
            }
          }
          if (!err) {
            try {
              ret = gen.next(res);
            } catch (e) {
              return exit(e);
            }
          }
          if (ret.done) {
            return exit(null, ret.value);
          }
          ret.value = toThunk(ret.value, ctx);
          if (typeof ret.value === fnString) {
            var called = false;
            try {
              ret.value.call(ctx, function() {
                if (called) {
                  return;
                }
                called = true;
                next.apply(ctx, arguments);
              });
            } catch (e) {
              timeoutScheduler.schedule(function() {
                if (called) {
                  return;
                }
                called = true;
                next.call(ctx, e);
              });
            }
            return;
          }
          next(new TypeError('Rx.spawn only supports a function, Promise, Observable, Object or Array.'));
        }
      };
    };
    function handleError(err) {
      if (!err) {
        return;
      }
      timeoutScheduler.schedule(function() {
        throw err;
      });
    }
    Observable.start = function(func, context, scheduler) {
      return observableToAsync(func, context, scheduler)();
    };
    var observableToAsync = Observable.toAsync = function(func, context, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return function() {
        var args = arguments,
            subject = new AsyncSubject();
        scheduler.schedule(function() {
          var result;
          try {
            result = func.apply(context, args);
          } catch (e) {
            subject.onError(e);
            return;
          }
          subject.onNext(result);
          subject.onCompleted();
        });
        return subject.asObservable();
      };
    };
    Observable.fromCallback = function(func, context, selector) {
      return function() {
        var len = arguments.length,
            args = new Array(len);
        for (var i = 0; i < len; i++) {
          args[i] = arguments[i];
        }
        return new AnonymousObservable(function(observer) {
          function handler() {
            var len = arguments.length,
                results = new Array(len);
            for (var i = 0; i < len; i++) {
              results[i] = arguments[i];
            }
            if (selector) {
              try {
                results = selector.apply(context, results);
              } catch (e) {
                return observer.onError(e);
              }
              observer.onNext(results);
            } else {
              if (results.length <= 1) {
                observer.onNext.apply(observer, results);
              } else {
                observer.onNext(results);
              }
            }
            observer.onCompleted();
          }
          args.push(handler);
          func.apply(context, args);
        }).publishLast().refCount();
      };
    };
    Observable.fromNodeCallback = function(func, context, selector) {
      return function() {
        var len = arguments.length,
            args = new Array(len);
        for (var i = 0; i < len; i++) {
          args[i] = arguments[i];
        }
        return new AnonymousObservable(function(observer) {
          function handler(err) {
            if (err) {
              observer.onError(err);
              return;
            }
            var len = arguments.length,
                results = [];
            for (var i = 1; i < len; i++) {
              results[i - 1] = arguments[i];
            }
            if (selector) {
              try {
                results = selector.apply(context, results);
              } catch (e) {
                return observer.onError(e);
              }
              observer.onNext(results);
            } else {
              if (results.length <= 1) {
                observer.onNext.apply(observer, results);
              } else {
                observer.onNext(results);
              }
            }
            observer.onCompleted();
          }
          args.push(handler);
          func.apply(context, args);
        }).publishLast().refCount();
      };
    };
    function createListener(element, name, handler) {
      if (element.addEventListener) {
        element.addEventListener(name, handler, false);
        return disposableCreate(function() {
          element.removeEventListener(name, handler, false);
        });
      }
      throw new Error('No listener found');
    }
    function createEventListener(el, eventName, handler) {
      var disposables = new CompositeDisposable();
      var toStr = Object.prototype.toString;
      if (toStr.call(el) === '[object NodeList]' || toStr.call(el) === '[object HTMLCollection]') {
        for (var i = 0,
            len = el.length; i < len; i++) {
          disposables.add(createEventListener(el.item(i), eventName, handler));
        }
      } else if (el) {
        disposables.add(createListener(el, eventName, handler));
      }
      return disposables;
    }
    Rx.config.useNativeEvents = false;
    Observable.fromEvent = function(element, eventName, selector) {
      if (element.addListener) {
        return fromEventPattern(function(h) {
          element.addListener(eventName, h);
        }, function(h) {
          element.removeListener(eventName, h);
        }, selector);
      }
      if (!Rx.config.useNativeEvents) {
        if (typeof element.on === 'function' && typeof element.off === 'function') {
          return fromEventPattern(function(h) {
            element.on(eventName, h);
          }, function(h) {
            element.off(eventName, h);
          }, selector);
        }
      }
      return new AnonymousObservable(function(observer) {
        return createEventListener(element, eventName, function handler(e) {
          var results = e;
          if (selector) {
            try {
              results = selector(arguments);
            } catch (err) {
              return observer.onError(err);
            }
          }
          observer.onNext(results);
        });
      }).publish().refCount();
    };
    var fromEventPattern = Observable.fromEventPattern = function(addHandler, removeHandler, selector) {
      return new AnonymousObservable(function(observer) {
        function innerHandler(e) {
          var result = e;
          if (selector) {
            try {
              result = selector(arguments);
            } catch (err) {
              return observer.onError(err);
            }
          }
          observer.onNext(result);
        }
        var returnValue = addHandler(innerHandler);
        return disposableCreate(function() {
          if (removeHandler) {
            removeHandler(innerHandler, returnValue);
          }
        });
      }).publish().refCount();
    };
    Observable.startAsync = function(functionAsync) {
      var promise;
      try {
        promise = functionAsync();
      } catch (e) {
        return observableThrow(e);
      }
      return observableFromPromise(promise);
    };
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.backpressure.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        observableProto = Observable.prototype,
        AnonymousObservable = Rx.AnonymousObservable,
        AbstractObserver = Rx.internals.AbstractObserver,
        CompositeDisposable = Rx.CompositeDisposable,
        Notification = Rx.Notification,
        Subject = Rx.Subject,
        Observer = Rx.Observer,
        disposableEmpty = Rx.Disposable.empty,
        disposableCreate = Rx.Disposable.create,
        inherits = Rx.internals.inherits,
        addProperties = Rx.internals.addProperties,
        timeoutScheduler = Rx.Scheduler.timeout,
        currentThreadScheduler = Rx.Scheduler.currentThread,
        identity = Rx.helpers.identity,
        isScheduler = Rx.Scheduler.isScheduler,
        isFunction = Rx.helpers.isFunction,
        checkDisposed = Rx.Disposable.checkDisposed;
    var errorObj = {e: {}};
    var tryCatchTarget;
    function tryCatcher() {
      try {
        return tryCatchTarget.apply(this, arguments);
      } catch (e) {
        errorObj.e = e;
        return errorObj;
      }
    }
    function tryCatch(fn) {
      if (!isFunction(fn)) {
        throw new TypeError('fn must be a function');
      }
      tryCatchTarget = fn;
      return tryCatcher;
    }
    function thrower(e) {
      throw e;
    }
    Rx.Pauser = (function(__super__) {
      inherits(Pauser, __super__);
      function Pauser() {
        __super__.call(this);
      }
      Pauser.prototype.pause = function() {
        this.onNext(false);
      };
      Pauser.prototype.resume = function() {
        this.onNext(true);
      };
      return Pauser;
    }(Subject));
    var PausableObservable = (function(__super__) {
      inherits(PausableObservable, __super__);
      function subscribe(observer) {
        var conn = this.source.publish(),
            subscription = conn.subscribe(observer),
            connection = disposableEmpty;
        var pausable = this.pauser.distinctUntilChanged().subscribe(function(b) {
          if (b) {
            connection = conn.connect();
          } else {
            connection.dispose();
            connection = disposableEmpty;
          }
        });
        return new CompositeDisposable(subscription, connection, pausable);
      }
      function PausableObservable(source, pauser) {
        this.source = source;
        this.controller = new Subject();
        if (pauser && pauser.subscribe) {
          this.pauser = this.controller.merge(pauser);
        } else {
          this.pauser = this.controller;
        }
        __super__.call(this, subscribe, source);
      }
      PausableObservable.prototype.pause = function() {
        this.controller.onNext(false);
      };
      PausableObservable.prototype.resume = function() {
        this.controller.onNext(true);
      };
      return PausableObservable;
    }(Observable));
    observableProto.pausable = function(pauser) {
      return new PausableObservable(this, pauser);
    };
    function combineLatestSource(source, subject, resultSelector) {
      return new AnonymousObservable(function(o) {
        var hasValue = [false, false],
            hasValueAll = false,
            isDone = false,
            values = new Array(2),
            err;
        function next(x, i) {
          values[i] = x;
          hasValue[i] = true;
          if (hasValueAll || (hasValueAll = hasValue.every(identity))) {
            if (err) {
              return o.onError(err);
            }
            var res = tryCatch(resultSelector).apply(null, values);
            if (res === errorObj) {
              return o.onError(res.e);
            }
            o.onNext(res);
          }
          isDone && values[1] && o.onCompleted();
        }
        return new CompositeDisposable(source.subscribe(function(x) {
          next(x, 0);
        }, function(e) {
          if (values[1]) {
            o.onError(e);
          } else {
            err = e;
          }
        }, function() {
          isDone = true;
          values[1] && o.onCompleted();
        }), subject.subscribe(function(x) {
          next(x, 1);
        }, function(e) {
          o.onError(e);
        }, function() {
          isDone = true;
          next(true, 1);
        }));
      }, source);
    }
    var PausableBufferedObservable = (function(__super__) {
      inherits(PausableBufferedObservable, __super__);
      function subscribe(o) {
        var q = [],
            previousShouldFire;
        function drainQueue() {
          while (q.length > 0) {
            o.onNext(q.shift());
          }
        }
        var subscription = combineLatestSource(this.source, this.pauser.distinctUntilChanged().startWith(false), function(data, shouldFire) {
          return {
            data: data,
            shouldFire: shouldFire
          };
        }).subscribe(function(results) {
          if (previousShouldFire !== undefined && results.shouldFire != previousShouldFire) {
            previousShouldFire = results.shouldFire;
            if (results.shouldFire) {
              drainQueue();
            }
          } else {
            previousShouldFire = results.shouldFire;
            if (results.shouldFire) {
              o.onNext(results.data);
            } else {
              q.push(results.data);
            }
          }
        }, function(err) {
          drainQueue();
          o.onError(err);
        }, function() {
          drainQueue();
          o.onCompleted();
        });
        return subscription;
      }
      function PausableBufferedObservable(source, pauser) {
        this.source = source;
        this.controller = new Subject();
        if (pauser && pauser.subscribe) {
          this.pauser = this.controller.merge(pauser);
        } else {
          this.pauser = this.controller;
        }
        __super__.call(this, subscribe, source);
      }
      PausableBufferedObservable.prototype.pause = function() {
        this.controller.onNext(false);
      };
      PausableBufferedObservable.prototype.resume = function() {
        this.controller.onNext(true);
      };
      return PausableBufferedObservable;
    }(Observable));
    observableProto.pausableBuffered = function(subject) {
      return new PausableBufferedObservable(this, subject);
    };
    var ControlledObservable = (function(__super__) {
      inherits(ControlledObservable, __super__);
      function subscribe(observer) {
        return this.source.subscribe(observer);
      }
      function ControlledObservable(source, enableQueue, scheduler) {
        __super__.call(this, subscribe, source);
        this.subject = new ControlledSubject(enableQueue, scheduler);
        this.source = source.multicast(this.subject).refCount();
      }
      ControlledObservable.prototype.request = function(numberOfItems) {
        return this.subject.request(numberOfItems == null ? -1 : numberOfItems);
      };
      return ControlledObservable;
    }(Observable));
    var ControlledSubject = (function(__super__) {
      function subscribe(observer) {
        return this.subject.subscribe(observer);
      }
      inherits(ControlledSubject, __super__);
      function ControlledSubject(enableQueue, scheduler) {
        enableQueue == null && (enableQueue = true);
        __super__.call(this, subscribe);
        this.subject = new Subject();
        this.enableQueue = enableQueue;
        this.queue = enableQueue ? [] : null;
        this.requestedCount = 0;
        this.requestedDisposable = disposableEmpty;
        this.error = null;
        this.hasFailed = false;
        this.hasCompleted = false;
        this.scheduler = scheduler || currentThreadScheduler;
      }
      addProperties(ControlledSubject.prototype, Observer, {
        onCompleted: function() {
          this.hasCompleted = true;
          if (!this.enableQueue || this.queue.length === 0) {
            this.subject.onCompleted();
          } else {
            this.queue.push(Notification.createOnCompleted());
          }
        },
        onError: function(error) {
          this.hasFailed = true;
          this.error = error;
          if (!this.enableQueue || this.queue.length === 0) {
            this.subject.onError(error);
          } else {
            this.queue.push(Notification.createOnError(error));
          }
        },
        onNext: function(value) {
          var hasRequested = false;
          if (this.requestedCount === 0) {
            this.enableQueue && this.queue.push(Notification.createOnNext(value));
          } else {
            (this.requestedCount !== -1 && this.requestedCount-- === 0) && this.disposeCurrentRequest();
            hasRequested = true;
          }
          hasRequested && this.subject.onNext(value);
        },
        _processRequest: function(numberOfItems) {
          if (this.enableQueue) {
            while ((this.queue.length >= numberOfItems && numberOfItems > 0) || (this.queue.length > 0 && this.queue[0].kind !== 'N')) {
              var first = this.queue.shift();
              first.accept(this.subject);
              if (first.kind === 'N') {
                numberOfItems--;
              } else {
                this.disposeCurrentRequest();
                this.queue = [];
              }
            }
            return {
              numberOfItems: numberOfItems,
              returnValue: this.queue.length !== 0
            };
          }
          return {
            numberOfItems: numberOfItems,
            returnValue: false
          };
        },
        request: function(number) {
          this.disposeCurrentRequest();
          var self = this;
          this.requestedDisposable = this.scheduler.scheduleWithState(number, function(s, i) {
            var r = self._processRequest(i),
                remaining = r.numberOfItems;
            if (!r.returnValue) {
              self.requestedCount = remaining;
              self.requestedDisposable = disposableCreate(function() {
                self.requestedCount = 0;
              });
            }
          });
          return this.requestedDisposable;
        },
        disposeCurrentRequest: function() {
          this.requestedDisposable.dispose();
          this.requestedDisposable = disposableEmpty;
        }
      });
      return ControlledSubject;
    }(Observable));
    observableProto.controlled = function(enableQueue, scheduler) {
      if (enableQueue && isScheduler(enableQueue)) {
        scheduler = enableQueue;
        enableQueue = true;
      }
      if (enableQueue == null) {
        enableQueue = true;
      }
      return new ControlledObservable(this, enableQueue, scheduler);
    };
    var StopAndWaitObservable = (function(__super__) {
      function subscribe(observer) {
        this.subscription = this.source.subscribe(new StopAndWaitObserver(observer, this, this.subscription));
        var self = this;
        timeoutScheduler.schedule(function() {
          self.source.request(1);
        });
        return this.subscription;
      }
      inherits(StopAndWaitObservable, __super__);
      function StopAndWaitObservable(source) {
        __super__.call(this, subscribe, source);
        this.source = source;
      }
      var StopAndWaitObserver = (function(__sub__) {
        inherits(StopAndWaitObserver, __sub__);
        function StopAndWaitObserver(observer, observable, cancel) {
          __sub__.call(this);
          this.observer = observer;
          this.observable = observable;
          this.cancel = cancel;
        }
        var stopAndWaitObserverProto = StopAndWaitObserver.prototype;
        stopAndWaitObserverProto.completed = function() {
          this.observer.onCompleted();
          this.dispose();
        };
        stopAndWaitObserverProto.error = function(error) {
          this.observer.onError(error);
          this.dispose();
        };
        stopAndWaitObserverProto.next = function(value) {
          this.observer.onNext(value);
          var self = this;
          timeoutScheduler.schedule(function() {
            self.observable.source.request(1);
          });
        };
        stopAndWaitObserverProto.dispose = function() {
          this.observer = null;
          if (this.cancel) {
            this.cancel.dispose();
            this.cancel = null;
          }
          __sub__.prototype.dispose.call(this);
        };
        return StopAndWaitObserver;
      }(AbstractObserver));
      return StopAndWaitObservable;
    }(Observable));
    ControlledObservable.prototype.stopAndWait = function() {
      return new StopAndWaitObservable(this);
    };
    var WindowedObservable = (function(__super__) {
      function subscribe(observer) {
        this.subscription = this.source.subscribe(new WindowedObserver(observer, this, this.subscription));
        var self = this;
        timeoutScheduler.schedule(function() {
          self.source.request(self.windowSize);
        });
        return this.subscription;
      }
      inherits(WindowedObservable, __super__);
      function WindowedObservable(source, windowSize) {
        __super__.call(this, subscribe, source);
        this.source = source;
        this.windowSize = windowSize;
      }
      var WindowedObserver = (function(__sub__) {
        inherits(WindowedObserver, __sub__);
        function WindowedObserver(observer, observable, cancel) {
          this.observer = observer;
          this.observable = observable;
          this.cancel = cancel;
          this.received = 0;
        }
        var windowedObserverPrototype = WindowedObserver.prototype;
        windowedObserverPrototype.completed = function() {
          this.observer.onCompleted();
          this.dispose();
        };
        windowedObserverPrototype.error = function(error) {
          this.observer.onError(error);
          this.dispose();
        };
        windowedObserverPrototype.next = function(value) {
          this.observer.onNext(value);
          this.received = ++this.received % this.observable.windowSize;
          if (this.received === 0) {
            var self = this;
            timeoutScheduler.schedule(function() {
              self.observable.source.request(self.observable.windowSize);
            });
          }
        };
        windowedObserverPrototype.dispose = function() {
          this.observer = null;
          if (this.cancel) {
            this.cancel.dispose();
            this.cancel = null;
          }
          __sub__.prototype.dispose.call(this);
        };
        return WindowedObserver;
      }(AbstractObserver));
      return WindowedObservable;
    }(Observable));
    ControlledObservable.prototype.windowed = function(windowSize) {
      return new WindowedObservable(this, windowSize);
    };
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.binding.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        observableProto = Observable.prototype,
        AnonymousObservable = Rx.AnonymousObservable,
        Subject = Rx.Subject,
        AsyncSubject = Rx.AsyncSubject,
        Observer = Rx.Observer,
        ScheduledObserver = Rx.internals.ScheduledObserver,
        disposableCreate = Rx.Disposable.create,
        disposableEmpty = Rx.Disposable.empty,
        CompositeDisposable = Rx.CompositeDisposable,
        currentThreadScheduler = Rx.Scheduler.currentThread,
        isFunction = Rx.helpers.isFunction,
        inherits = Rx.internals.inherits,
        addProperties = Rx.internals.addProperties,
        checkDisposed = Rx.Disposable.checkDisposed;
    function cloneArray(arr) {
      var len = arr.length,
          a = new Array(len);
      for (var i = 0; i < len; i++) {
        a[i] = arr[i];
      }
      return a;
    }
    observableProto.multicast = function(subjectOrSubjectSelector, selector) {
      var source = this;
      return typeof subjectOrSubjectSelector === 'function' ? new AnonymousObservable(function(observer) {
        var connectable = source.multicast(subjectOrSubjectSelector());
        return new CompositeDisposable(selector(connectable).subscribe(observer), connectable.connect());
      }, source) : new ConnectableObservable(source, subjectOrSubjectSelector);
    };
    observableProto.publish = function(selector) {
      return selector && isFunction(selector) ? this.multicast(function() {
        return new Subject();
      }, selector) : this.multicast(new Subject());
    };
    observableProto.share = function() {
      return this.publish().refCount();
    };
    observableProto.publishLast = function(selector) {
      return selector && isFunction(selector) ? this.multicast(function() {
        return new AsyncSubject();
      }, selector) : this.multicast(new AsyncSubject());
    };
    observableProto.publishValue = function(initialValueOrSelector, initialValue) {
      return arguments.length === 2 ? this.multicast(function() {
        return new BehaviorSubject(initialValue);
      }, initialValueOrSelector) : this.multicast(new BehaviorSubject(initialValueOrSelector));
    };
    observableProto.shareValue = function(initialValue) {
      return this.publishValue(initialValue).refCount();
    };
    observableProto.replay = function(selector, bufferSize, windowSize, scheduler) {
      return selector && isFunction(selector) ? this.multicast(function() {
        return new ReplaySubject(bufferSize, windowSize, scheduler);
      }, selector) : this.multicast(new ReplaySubject(bufferSize, windowSize, scheduler));
    };
    observableProto.shareReplay = function(bufferSize, windowSize, scheduler) {
      return this.replay(null, bufferSize, windowSize, scheduler).refCount();
    };
    var InnerSubscription = function(subject, observer) {
      this.subject = subject;
      this.observer = observer;
    };
    InnerSubscription.prototype.dispose = function() {
      if (!this.subject.isDisposed && this.observer !== null) {
        var idx = this.subject.observers.indexOf(this.observer);
        this.subject.observers.splice(idx, 1);
        this.observer = null;
      }
    };
    var BehaviorSubject = Rx.BehaviorSubject = (function(__super__) {
      function subscribe(observer) {
        checkDisposed(this);
        if (!this.isStopped) {
          this.observers.push(observer);
          observer.onNext(this.value);
          return new InnerSubscription(this, observer);
        }
        if (this.hasError) {
          observer.onError(this.error);
        } else {
          observer.onCompleted();
        }
        return disposableEmpty;
      }
      inherits(BehaviorSubject, __super__);
      function BehaviorSubject(value) {
        __super__.call(this, subscribe);
        this.value = value, this.observers = [], this.isDisposed = false, this.isStopped = false, this.hasError = false;
      }
      addProperties(BehaviorSubject.prototype, Observer, {
        getValue: function() {
          checkDisposed(this);
          if (this.hasError) {
            throw this.error;
          }
          return this.value;
        },
        hasObservers: function() {
          return this.observers.length > 0;
        },
        onCompleted: function() {
          checkDisposed(this);
          if (this.isStopped) {
            return;
          }
          this.isStopped = true;
          for (var i = 0,
              os = cloneArray(this.observers),
              len = os.length; i < len; i++) {
            os[i].onCompleted();
          }
          this.observers.length = 0;
        },
        onError: function(error) {
          checkDisposed(this);
          if (this.isStopped) {
            return;
          }
          this.isStopped = true;
          this.hasError = true;
          this.error = error;
          for (var i = 0,
              os = cloneArray(this.observers),
              len = os.length; i < len; i++) {
            os[i].onError(error);
          }
          this.observers.length = 0;
        },
        onNext: function(value) {
          checkDisposed(this);
          if (this.isStopped) {
            return;
          }
          this.value = value;
          for (var i = 0,
              os = cloneArray(this.observers),
              len = os.length; i < len; i++) {
            os[i].onNext(value);
          }
        },
        dispose: function() {
          this.isDisposed = true;
          this.observers = null;
          this.value = null;
          this.exception = null;
        }
      });
      return BehaviorSubject;
    }(Observable));
    var ReplaySubject = Rx.ReplaySubject = (function(__super__) {
      var maxSafeInteger = Math.pow(2, 53) - 1;
      function createRemovableDisposable(subject, observer) {
        return disposableCreate(function() {
          observer.dispose();
          !subject.isDisposed && subject.observers.splice(subject.observers.indexOf(observer), 1);
        });
      }
      function subscribe(observer) {
        var so = new ScheduledObserver(this.scheduler, observer),
            subscription = createRemovableDisposable(this, so);
        checkDisposed(this);
        this._trim(this.scheduler.now());
        this.observers.push(so);
        for (var i = 0,
            len = this.q.length; i < len; i++) {
          so.onNext(this.q[i].value);
        }
        if (this.hasError) {
          so.onError(this.error);
        } else if (this.isStopped) {
          so.onCompleted();
        }
        so.ensureActive();
        return subscription;
      }
      inherits(ReplaySubject, __super__);
      function ReplaySubject(bufferSize, windowSize, scheduler) {
        this.bufferSize = bufferSize == null ? maxSafeInteger : bufferSize;
        this.windowSize = windowSize == null ? maxSafeInteger : windowSize;
        this.scheduler = scheduler || currentThreadScheduler;
        this.q = [];
        this.observers = [];
        this.isStopped = false;
        this.isDisposed = false;
        this.hasError = false;
        this.error = null;
        __super__.call(this, subscribe);
      }
      addProperties(ReplaySubject.prototype, Observer.prototype, {
        hasObservers: function() {
          return this.observers.length > 0;
        },
        _trim: function(now) {
          while (this.q.length > this.bufferSize) {
            this.q.shift();
          }
          while (this.q.length > 0 && (now - this.q[0].interval) > this.windowSize) {
            this.q.shift();
          }
        },
        onNext: function(value) {
          checkDisposed(this);
          if (this.isStopped) {
            return;
          }
          var now = this.scheduler.now();
          this.q.push({
            interval: now,
            value: value
          });
          this._trim(now);
          for (var i = 0,
              os = cloneArray(this.observers),
              len = os.length; i < len; i++) {
            var observer = os[i];
            observer.onNext(value);
            observer.ensureActive();
          }
        },
        onError: function(error) {
          checkDisposed(this);
          if (this.isStopped) {
            return;
          }
          this.isStopped = true;
          this.error = error;
          this.hasError = true;
          var now = this.scheduler.now();
          this._trim(now);
          for (var i = 0,
              os = cloneArray(this.observers),
              len = os.length; i < len; i++) {
            var observer = os[i];
            observer.onError(error);
            observer.ensureActive();
          }
          this.observers.length = 0;
        },
        onCompleted: function() {
          checkDisposed(this);
          if (this.isStopped) {
            return;
          }
          this.isStopped = true;
          var now = this.scheduler.now();
          this._trim(now);
          for (var i = 0,
              os = cloneArray(this.observers),
              len = os.length; i < len; i++) {
            var observer = os[i];
            observer.onCompleted();
            observer.ensureActive();
          }
          this.observers.length = 0;
        },
        dispose: function() {
          this.isDisposed = true;
          this.observers = null;
        }
      });
      return ReplaySubject;
    }(Observable));
    var ConnectableObservable = Rx.ConnectableObservable = (function(__super__) {
      inherits(ConnectableObservable, __super__);
      function ConnectableObservable(source, subject) {
        var hasSubscription = false,
            subscription,
            sourceObservable = source.asObservable();
        this.connect = function() {
          if (!hasSubscription) {
            hasSubscription = true;
            subscription = new CompositeDisposable(sourceObservable.subscribe(subject), disposableCreate(function() {
              hasSubscription = false;
            }));
          }
          return subscription;
        };
        __super__.call(this, function(o) {
          return subject.subscribe(o);
        });
      }
      ConnectableObservable.prototype.refCount = function() {
        var connectableSubscription,
            count = 0,
            source = this;
        return new AnonymousObservable(function(observer) {
          var shouldConnect = ++count === 1,
              subscription = source.subscribe(observer);
          shouldConnect && (connectableSubscription = source.connect());
          return function() {
            subscription.dispose();
            --count === 0 && connectableSubscription.dispose();
          };
        });
      };
      return ConnectableObservable;
    }(Observable));
    observableProto.singleInstance = function() {
      var source = this,
          hasObservable = false,
          observable;
      function getObservable() {
        if (!hasObservable) {
          hasObservable = true;
          observable = source.finally(function() {
            hasObservable = false;
          }).publish().refCount();
        }
        return observable;
      }
      ;
      return new AnonymousObservable(function(o) {
        return getObservable().subscribe(o);
      });
    };
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.coincidence.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        CompositeDisposable = Rx.CompositeDisposable,
        RefCountDisposable = Rx.RefCountDisposable,
        SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
        SerialDisposable = Rx.SerialDisposable,
        Subject = Rx.Subject,
        observableProto = Observable.prototype,
        observableEmpty = Observable.empty,
        observableNever = Observable.never,
        AnonymousObservable = Rx.AnonymousObservable,
        observerCreate = Rx.Observer.create,
        addRef = Rx.internals.addRef,
        defaultComparer = Rx.internals.isEqual,
        inherits = Rx.internals.inherits,
        noop = Rx.helpers.noop,
        identity = Rx.helpers.identity,
        isPromise = Rx.helpers.isPromise,
        observableFromPromise = Observable.fromPromise,
        ArgumentOutOfRangeError = Rx.ArgumentOutOfRangeError;
    var Dictionary = (function() {
      var primes = [1, 3, 7, 13, 31, 61, 127, 251, 509, 1021, 2039, 4093, 8191, 16381, 32749, 65521, 131071, 262139, 524287, 1048573, 2097143, 4194301, 8388593, 16777213, 33554393, 67108859, 134217689, 268435399, 536870909, 1073741789, 2147483647],
          noSuchkey = "no such key",
          duplicatekey = "duplicate key";
      function isPrime(candidate) {
        if ((candidate & 1) === 0) {
          return candidate === 2;
        }
        var num1 = Math.sqrt(candidate),
            num2 = 3;
        while (num2 <= num1) {
          if (candidate % num2 === 0) {
            return false;
          }
          num2 += 2;
        }
        return true;
      }
      function getPrime(min) {
        var index,
            num,
            candidate;
        for (index = 0; index < primes.length; ++index) {
          num = primes[index];
          if (num >= min) {
            return num;
          }
        }
        candidate = min | 1;
        while (candidate < primes[primes.length - 1]) {
          if (isPrime(candidate)) {
            return candidate;
          }
          candidate += 2;
        }
        return min;
      }
      function stringHashFn(str) {
        var hash = 757602046;
        if (!str.length) {
          return hash;
        }
        for (var i = 0,
            len = str.length; i < len; i++) {
          var character = str.charCodeAt(i);
          hash = ((hash << 5) - hash) + character;
          hash = hash & hash;
        }
        return hash;
      }
      function numberHashFn(key) {
        var c2 = 0x27d4eb2d;
        key = (key ^ 61) ^ (key >>> 16);
        key = key + (key << 3);
        key = key ^ (key >>> 4);
        key = key * c2;
        key = key ^ (key >>> 15);
        return key;
      }
      var getHashCode = (function() {
        var uniqueIdCounter = 0;
        return function(obj) {
          if (obj == null) {
            throw new Error(noSuchkey);
          }
          if (typeof obj === 'string') {
            return stringHashFn(obj);
          }
          if (typeof obj === 'number') {
            return numberHashFn(obj);
          }
          if (typeof obj === 'boolean') {
            return obj === true ? 1 : 0;
          }
          if (obj instanceof Date) {
            return numberHashFn(obj.valueOf());
          }
          if (obj instanceof RegExp) {
            return stringHashFn(obj.toString());
          }
          if (typeof obj.valueOf === 'function') {
            var valueOf = obj.valueOf();
            if (typeof valueOf === 'number') {
              return numberHashFn(valueOf);
            }
            if (typeof valueOf === 'string') {
              return stringHashFn(valueOf);
            }
          }
          if (obj.hashCode) {
            return obj.hashCode();
          }
          var id = 17 * uniqueIdCounter++;
          obj.hashCode = function() {
            return id;
          };
          return id;
        };
      }());
      function newEntry() {
        return {
          key: null,
          value: null,
          next: 0,
          hashCode: 0
        };
      }
      function Dictionary(capacity, comparer) {
        if (capacity < 0) {
          throw new ArgumentOutOfRangeError();
        }
        if (capacity > 0) {
          this._initialize(capacity);
        }
        this.comparer = comparer || defaultComparer;
        this.freeCount = 0;
        this.size = 0;
        this.freeList = -1;
      }
      var dictionaryProto = Dictionary.prototype;
      dictionaryProto._initialize = function(capacity) {
        var prime = getPrime(capacity),
            i;
        this.buckets = new Array(prime);
        this.entries = new Array(prime);
        for (i = 0; i < prime; i++) {
          this.buckets[i] = -1;
          this.entries[i] = newEntry();
        }
        this.freeList = -1;
      };
      dictionaryProto.add = function(key, value) {
        this._insert(key, value, true);
      };
      dictionaryProto._insert = function(key, value, add) {
        if (!this.buckets) {
          this._initialize(0);
        }
        var index3,
            num = getHashCode(key) & 2147483647,
            index1 = num % this.buckets.length;
        for (var index2 = this.buckets[index1]; index2 >= 0; index2 = this.entries[index2].next) {
          if (this.entries[index2].hashCode === num && this.comparer(this.entries[index2].key, key)) {
            if (add) {
              throw new Error(duplicatekey);
            }
            this.entries[index2].value = value;
            return;
          }
        }
        if (this.freeCount > 0) {
          index3 = this.freeList;
          this.freeList = this.entries[index3].next;
          --this.freeCount;
        } else {
          if (this.size === this.entries.length) {
            this._resize();
            index1 = num % this.buckets.length;
          }
          index3 = this.size;
          ++this.size;
        }
        this.entries[index3].hashCode = num;
        this.entries[index3].next = this.buckets[index1];
        this.entries[index3].key = key;
        this.entries[index3].value = value;
        this.buckets[index1] = index3;
      };
      dictionaryProto._resize = function() {
        var prime = getPrime(this.size * 2),
            numArray = new Array(prime);
        for (index = 0; index < numArray.length; ++index) {
          numArray[index] = -1;
        }
        var entryArray = new Array(prime);
        for (index = 0; index < this.size; ++index) {
          entryArray[index] = this.entries[index];
        }
        for (var index = this.size; index < prime; ++index) {
          entryArray[index] = newEntry();
        }
        for (var index1 = 0; index1 < this.size; ++index1) {
          var index2 = entryArray[index1].hashCode % prime;
          entryArray[index1].next = numArray[index2];
          numArray[index2] = index1;
        }
        this.buckets = numArray;
        this.entries = entryArray;
      };
      dictionaryProto.remove = function(key) {
        if (this.buckets) {
          var num = getHashCode(key) & 2147483647,
              index1 = num % this.buckets.length,
              index2 = -1;
          for (var index3 = this.buckets[index1]; index3 >= 0; index3 = this.entries[index3].next) {
            if (this.entries[index3].hashCode === num && this.comparer(this.entries[index3].key, key)) {
              if (index2 < 0) {
                this.buckets[index1] = this.entries[index3].next;
              } else {
                this.entries[index2].next = this.entries[index3].next;
              }
              this.entries[index3].hashCode = -1;
              this.entries[index3].next = this.freeList;
              this.entries[index3].key = null;
              this.entries[index3].value = null;
              this.freeList = index3;
              ++this.freeCount;
              return true;
            } else {
              index2 = index3;
            }
          }
        }
        return false;
      };
      dictionaryProto.clear = function() {
        var index,
            len;
        if (this.size <= 0) {
          return;
        }
        for (index = 0, len = this.buckets.length; index < len; ++index) {
          this.buckets[index] = -1;
        }
        for (index = 0; index < this.size; ++index) {
          this.entries[index] = newEntry();
        }
        this.freeList = -1;
        this.size = 0;
      };
      dictionaryProto._findEntry = function(key) {
        if (this.buckets) {
          var num = getHashCode(key) & 2147483647;
          for (var index = this.buckets[num % this.buckets.length]; index >= 0; index = this.entries[index].next) {
            if (this.entries[index].hashCode === num && this.comparer(this.entries[index].key, key)) {
              return index;
            }
          }
        }
        return -1;
      };
      dictionaryProto.count = function() {
        return this.size - this.freeCount;
      };
      dictionaryProto.tryGetValue = function(key) {
        var entry = this._findEntry(key);
        return entry >= 0 ? this.entries[entry].value : undefined;
      };
      dictionaryProto.getValues = function() {
        var index = 0,
            results = [];
        if (this.entries) {
          for (var index1 = 0; index1 < this.size; index1++) {
            if (this.entries[index1].hashCode >= 0) {
              results[index++] = this.entries[index1].value;
            }
          }
        }
        return results;
      };
      dictionaryProto.get = function(key) {
        var entry = this._findEntry(key);
        if (entry >= 0) {
          return this.entries[entry].value;
        }
        throw new Error(noSuchkey);
      };
      dictionaryProto.set = function(key, value) {
        this._insert(key, value, false);
      };
      dictionaryProto.containskey = function(key) {
        return this._findEntry(key) >= 0;
      };
      return Dictionary;
    }());
    observableProto.join = function(right, leftDurationSelector, rightDurationSelector, resultSelector) {
      var left = this;
      return new AnonymousObservable(function(observer) {
        var group = new CompositeDisposable();
        var leftDone = false,
            rightDone = false;
        var leftId = 0,
            rightId = 0;
        var leftMap = new Dictionary(),
            rightMap = new Dictionary();
        group.add(left.subscribe(function(value) {
          var id = leftId++;
          var md = new SingleAssignmentDisposable();
          leftMap.add(id, value);
          group.add(md);
          var expire = function() {
            leftMap.remove(id) && leftMap.count() === 0 && leftDone && observer.onCompleted();
            group.remove(md);
          };
          var duration;
          try {
            duration = leftDurationSelector(value);
          } catch (e) {
            observer.onError(e);
            return;
          }
          md.setDisposable(duration.take(1).subscribe(noop, observer.onError.bind(observer), expire));
          rightMap.getValues().forEach(function(v) {
            var result;
            try {
              result = resultSelector(value, v);
            } catch (exn) {
              observer.onError(exn);
              return;
            }
            observer.onNext(result);
          });
        }, observer.onError.bind(observer), function() {
          leftDone = true;
          (rightDone || leftMap.count() === 0) && observer.onCompleted();
        }));
        group.add(right.subscribe(function(value) {
          var id = rightId++;
          var md = new SingleAssignmentDisposable();
          rightMap.add(id, value);
          group.add(md);
          var expire = function() {
            rightMap.remove(id) && rightMap.count() === 0 && rightDone && observer.onCompleted();
            group.remove(md);
          };
          var duration;
          try {
            duration = rightDurationSelector(value);
          } catch (e) {
            observer.onError(e);
            return;
          }
          md.setDisposable(duration.take(1).subscribe(noop, observer.onError.bind(observer), expire));
          leftMap.getValues().forEach(function(v) {
            var result;
            try {
              result = resultSelector(v, value);
            } catch (exn) {
              observer.onError(exn);
              return;
            }
            observer.onNext(result);
          });
        }, observer.onError.bind(observer), function() {
          rightDone = true;
          (leftDone || rightMap.count() === 0) && observer.onCompleted();
        }));
        return group;
      }, left);
    };
    observableProto.groupJoin = function(right, leftDurationSelector, rightDurationSelector, resultSelector) {
      var left = this;
      return new AnonymousObservable(function(observer) {
        var group = new CompositeDisposable();
        var r = new RefCountDisposable(group);
        var leftMap = new Dictionary(),
            rightMap = new Dictionary();
        var leftId = 0,
            rightId = 0;
        function handleError(e) {
          return function(v) {
            v.onError(e);
          };
        }
        ;
        group.add(left.subscribe(function(value) {
          var s = new Subject();
          var id = leftId++;
          leftMap.add(id, s);
          var result;
          try {
            result = resultSelector(value, addRef(s, r));
          } catch (e) {
            leftMap.getValues().forEach(handleError(e));
            observer.onError(e);
            return;
          }
          observer.onNext(result);
          rightMap.getValues().forEach(function(v) {
            s.onNext(v);
          });
          var md = new SingleAssignmentDisposable();
          group.add(md);
          var expire = function() {
            leftMap.remove(id) && s.onCompleted();
            group.remove(md);
          };
          var duration;
          try {
            duration = leftDurationSelector(value);
          } catch (e) {
            leftMap.getValues().forEach(handleError(e));
            observer.onError(e);
            return;
          }
          md.setDisposable(duration.take(1).subscribe(noop, function(e) {
            leftMap.getValues().forEach(handleError(e));
            observer.onError(e);
          }, expire));
        }, function(e) {
          leftMap.getValues().forEach(handleError(e));
          observer.onError(e);
        }, observer.onCompleted.bind(observer)));
        group.add(right.subscribe(function(value) {
          var id = rightId++;
          rightMap.add(id, value);
          var md = new SingleAssignmentDisposable();
          group.add(md);
          var expire = function() {
            rightMap.remove(id);
            group.remove(md);
          };
          var duration;
          try {
            duration = rightDurationSelector(value);
          } catch (e) {
            leftMap.getValues().forEach(handleError(e));
            observer.onError(e);
            return;
          }
          md.setDisposable(duration.take(1).subscribe(noop, function(e) {
            leftMap.getValues().forEach(handleError(e));
            observer.onError(e);
          }, expire));
          leftMap.getValues().forEach(function(v) {
            v.onNext(value);
          });
        }, function(e) {
          leftMap.getValues().forEach(handleError(e));
          observer.onError(e);
        }));
        return r;
      }, left);
    };
    observableProto.buffer = function(bufferOpeningsOrClosingSelector, bufferClosingSelector) {
      return this.window.apply(this, arguments).selectMany(function(x) {
        return x.toArray();
      });
    };
    observableProto.window = function(windowOpeningsOrClosingSelector, windowClosingSelector) {
      if (arguments.length === 1 && typeof arguments[0] !== 'function') {
        return observableWindowWithBoundaries.call(this, windowOpeningsOrClosingSelector);
      }
      return typeof windowOpeningsOrClosingSelector === 'function' ? observableWindowWithClosingSelector.call(this, windowOpeningsOrClosingSelector) : observableWindowWithOpenings.call(this, windowOpeningsOrClosingSelector, windowClosingSelector);
    };
    function observableWindowWithOpenings(windowOpenings, windowClosingSelector) {
      return windowOpenings.groupJoin(this, windowClosingSelector, observableEmpty, function(_, win) {
        return win;
      });
    }
    function observableWindowWithBoundaries(windowBoundaries) {
      var source = this;
      return new AnonymousObservable(function(observer) {
        var win = new Subject(),
            d = new CompositeDisposable(),
            r = new RefCountDisposable(d);
        observer.onNext(addRef(win, r));
        d.add(source.subscribe(function(x) {
          win.onNext(x);
        }, function(err) {
          win.onError(err);
          observer.onError(err);
        }, function() {
          win.onCompleted();
          observer.onCompleted();
        }));
        isPromise(windowBoundaries) && (windowBoundaries = observableFromPromise(windowBoundaries));
        d.add(windowBoundaries.subscribe(function(w) {
          win.onCompleted();
          win = new Subject();
          observer.onNext(addRef(win, r));
        }, function(err) {
          win.onError(err);
          observer.onError(err);
        }, function() {
          win.onCompleted();
          observer.onCompleted();
        }));
        return r;
      }, source);
    }
    function observableWindowWithClosingSelector(windowClosingSelector) {
      var source = this;
      return new AnonymousObservable(function(observer) {
        var m = new SerialDisposable(),
            d = new CompositeDisposable(m),
            r = new RefCountDisposable(d),
            win = new Subject();
        observer.onNext(addRef(win, r));
        d.add(source.subscribe(function(x) {
          win.onNext(x);
        }, function(err) {
          win.onError(err);
          observer.onError(err);
        }, function() {
          win.onCompleted();
          observer.onCompleted();
        }));
        function createWindowClose() {
          var windowClose;
          try {
            windowClose = windowClosingSelector();
          } catch (e) {
            observer.onError(e);
            return;
          }
          isPromise(windowClose) && (windowClose = observableFromPromise(windowClose));
          var m1 = new SingleAssignmentDisposable();
          m.setDisposable(m1);
          m1.setDisposable(windowClose.take(1).subscribe(noop, function(err) {
            win.onError(err);
            observer.onError(err);
          }, function() {
            win.onCompleted();
            win = new Subject();
            observer.onNext(addRef(win, r));
            createWindowClose();
          }));
        }
        createWindowClose();
        return r;
      }, source);
    }
    observableProto.pairwise = function() {
      var source = this;
      return new AnonymousObservable(function(observer) {
        var previous,
            hasPrevious = false;
        return source.subscribe(function(x) {
          if (hasPrevious) {
            observer.onNext([previous, x]);
          } else {
            hasPrevious = true;
          }
          previous = x;
        }, observer.onError.bind(observer), observer.onCompleted.bind(observer));
      }, source);
    };
    observableProto.partition = function(predicate, thisArg) {
      return [this.filter(predicate, thisArg), this.filter(function(x, i, o) {
        return !predicate.call(thisArg, x, i, o);
      })];
    };
    observableProto.groupBy = function(keySelector, elementSelector, comparer) {
      return this.groupByUntil(keySelector, elementSelector, observableNever, comparer);
    };
    observableProto.groupByUntil = function(keySelector, elementSelector, durationSelector, comparer) {
      var source = this;
      elementSelector || (elementSelector = identity);
      comparer || (comparer = defaultComparer);
      return new AnonymousObservable(function(observer) {
        function handleError(e) {
          return function(item) {
            item.onError(e);
          };
        }
        var map = new Dictionary(0, comparer),
            groupDisposable = new CompositeDisposable(),
            refCountDisposable = new RefCountDisposable(groupDisposable);
        groupDisposable.add(source.subscribe(function(x) {
          var key;
          try {
            key = keySelector(x);
          } catch (e) {
            map.getValues().forEach(handleError(e));
            observer.onError(e);
            return;
          }
          var fireNewMapEntry = false,
              writer = map.tryGetValue(key);
          if (!writer) {
            writer = new Subject();
            map.set(key, writer);
            fireNewMapEntry = true;
          }
          if (fireNewMapEntry) {
            var group = new GroupedObservable(key, writer, refCountDisposable),
                durationGroup = new GroupedObservable(key, writer);
            try {
              duration = durationSelector(durationGroup);
            } catch (e) {
              map.getValues().forEach(handleError(e));
              observer.onError(e);
              return;
            }
            observer.onNext(group);
            var md = new SingleAssignmentDisposable();
            groupDisposable.add(md);
            var expire = function() {
              map.remove(key) && writer.onCompleted();
              groupDisposable.remove(md);
            };
            md.setDisposable(duration.take(1).subscribe(noop, function(exn) {
              map.getValues().forEach(handleError(exn));
              observer.onError(exn);
            }, expire));
          }
          var element;
          try {
            element = elementSelector(x);
          } catch (e) {
            map.getValues().forEach(handleError(e));
            observer.onError(e);
            return;
          }
          writer.onNext(element);
        }, function(ex) {
          map.getValues().forEach(handleError(ex));
          observer.onError(ex);
        }, function() {
          map.getValues().forEach(function(item) {
            item.onCompleted();
          });
          observer.onCompleted();
        }));
        return refCountDisposable;
      }, source);
    };
    var GroupedObservable = (function(__super__) {
      inherits(GroupedObservable, __super__);
      function subscribe(observer) {
        return this.underlyingObservable.subscribe(observer);
      }
      function GroupedObservable(key, underlyingObservable, mergedDisposable) {
        __super__.call(this, subscribe);
        this.key = key;
        this.underlyingObservable = !mergedDisposable ? underlyingObservable : new AnonymousObservable(function(observer) {
          return new CompositeDisposable(mergedDisposable.getDisposable(), underlyingObservable.subscribe(observer));
        });
      }
      return GroupedObservable;
    }(Observable));
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.experimental.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        observableProto = Observable.prototype,
        AnonymousObservable = Rx.AnonymousObservable,
        observableConcat = Observable.concat,
        observableDefer = Observable.defer,
        observableEmpty = Observable.empty,
        disposableEmpty = Rx.Disposable.empty,
        CompositeDisposable = Rx.CompositeDisposable,
        SerialDisposable = Rx.SerialDisposable,
        SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
        Enumerator = Rx.internals.Enumerator,
        Enumerable = Rx.internals.Enumerable,
        enumerableOf = Enumerable.of,
        immediateScheduler = Rx.Scheduler.immediate,
        currentThreadScheduler = Rx.Scheduler.currentThread,
        slice = Array.prototype.slice,
        AsyncSubject = Rx.AsyncSubject,
        Observer = Rx.Observer,
        inherits = Rx.internals.inherits,
        bindCallback = Rx.internals.bindCallback,
        addProperties = Rx.internals.addProperties,
        helpers = Rx.helpers,
        noop = helpers.noop,
        isPromise = helpers.isPromise,
        isScheduler = Rx.Scheduler.isScheduler,
        observableFromPromise = Observable.fromPromise;
    var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) || '_es6shim_iterator_';
    if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
      $iterator$ = '@@iterator';
    }
    var doneEnumerator = Rx.doneEnumerator = {
      done: true,
      value: undefined
    };
    var isIterable = Rx.helpers.isIterable = function(o) {
      return o[$iterator$] !== undefined;
    };
    var isArrayLike = Rx.helpers.isArrayLike = function(o) {
      return o && o.length !== undefined;
    };
    Rx.helpers.iterator = $iterator$;
    var WhileEnumerable = (function(__super__) {
      inherits(WhileEnumerable, __super__);
      function WhileEnumerable(c, s) {
        this.c = c;
        this.s = s;
      }
      WhileEnumerable.prototype[$iterator$] = function() {
        var self = this;
        return {next: function() {
            return self.c() ? {
              done: false,
              value: self.s
            } : {
              done: true,
              value: void 0
            };
          }};
      };
      return WhileEnumerable;
    }(Enumerable));
    function enumerableWhile(condition, source) {
      return new WhileEnumerable(condition, source);
    }
    observableProto.letBind = observableProto['let'] = function(func) {
      return func(this);
    };
    Observable['if'] = Observable.ifThen = function(condition, thenSource, elseSourceOrScheduler) {
      return observableDefer(function() {
        elseSourceOrScheduler || (elseSourceOrScheduler = observableEmpty());
        isPromise(thenSource) && (thenSource = observableFromPromise(thenSource));
        isPromise(elseSourceOrScheduler) && (elseSourceOrScheduler = observableFromPromise(elseSourceOrScheduler));
        typeof elseSourceOrScheduler.now === 'function' && (elseSourceOrScheduler = observableEmpty(elseSourceOrScheduler));
        return condition() ? thenSource : elseSourceOrScheduler;
      });
    };
    Observable['for'] = Observable.forIn = function(sources, resultSelector, thisArg) {
      return enumerableOf(sources, resultSelector, thisArg).concat();
    };
    var observableWhileDo = Observable['while'] = Observable.whileDo = function(condition, source) {
      isPromise(source) && (source = observableFromPromise(source));
      return enumerableWhile(condition, source).concat();
    };
    observableProto.doWhile = function(condition) {
      return observableConcat([this, observableWhileDo(condition, this)]);
    };
    Observable['case'] = Observable.switchCase = function(selector, sources, defaultSourceOrScheduler) {
      return observableDefer(function() {
        isPromise(defaultSourceOrScheduler) && (defaultSourceOrScheduler = observableFromPromise(defaultSourceOrScheduler));
        defaultSourceOrScheduler || (defaultSourceOrScheduler = observableEmpty());
        typeof defaultSourceOrScheduler.now === 'function' && (defaultSourceOrScheduler = observableEmpty(defaultSourceOrScheduler));
        var result = sources[selector()];
        isPromise(result) && (result = observableFromPromise(result));
        return result || defaultSourceOrScheduler;
      });
    };
    observableProto.expand = function(selector, scheduler) {
      isScheduler(scheduler) || (scheduler = immediateScheduler);
      var source = this;
      return new AnonymousObservable(function(observer) {
        var q = [],
            m = new SerialDisposable(),
            d = new CompositeDisposable(m),
            activeCount = 0,
            isAcquired = false;
        var ensureActive = function() {
          var isOwner = false;
          if (q.length > 0) {
            isOwner = !isAcquired;
            isAcquired = true;
          }
          if (isOwner) {
            m.setDisposable(scheduler.scheduleRecursive(function(self) {
              var work;
              if (q.length > 0) {
                work = q.shift();
              } else {
                isAcquired = false;
                return;
              }
              var m1 = new SingleAssignmentDisposable();
              d.add(m1);
              m1.setDisposable(work.subscribe(function(x) {
                observer.onNext(x);
                var result = null;
                try {
                  result = selector(x);
                } catch (e) {
                  observer.onError(e);
                }
                q.push(result);
                activeCount++;
                ensureActive();
              }, observer.onError.bind(observer), function() {
                d.remove(m1);
                activeCount--;
                if (activeCount === 0) {
                  observer.onCompleted();
                }
              }));
              self();
            }));
          }
        };
        q.push(source);
        activeCount++;
        ensureActive();
        return d;
      }, this);
    };
    Observable.forkJoin = function() {
      var allSources = [];
      if (Array.isArray(arguments[0])) {
        allSources = arguments[0];
      } else {
        for (var i = 0,
            len = arguments.length; i < len; i++) {
          allSources.push(arguments[i]);
        }
      }
      return new AnonymousObservable(function(subscriber) {
        var count = allSources.length;
        if (count === 0) {
          subscriber.onCompleted();
          return disposableEmpty;
        }
        var group = new CompositeDisposable(),
            finished = false,
            hasResults = new Array(count),
            hasCompleted = new Array(count),
            results = new Array(count);
        for (var idx = 0; idx < count; idx++) {
          (function(i) {
            var source = allSources[i];
            isPromise(source) && (source = observableFromPromise(source));
            group.add(source.subscribe(function(value) {
              if (!finished) {
                hasResults[i] = true;
                results[i] = value;
              }
            }, function(e) {
              finished = true;
              subscriber.onError(e);
              group.dispose();
            }, function() {
              if (!finished) {
                if (!hasResults[i]) {
                  subscriber.onCompleted();
                  return;
                }
                hasCompleted[i] = true;
                for (var ix = 0; ix < count; ix++) {
                  if (!hasCompleted[ix]) {
                    return;
                  }
                }
                finished = true;
                subscriber.onNext(results);
                subscriber.onCompleted();
              }
            }));
          })(idx);
        }
        return group;
      });
    };
    observableProto.forkJoin = function(second, resultSelector) {
      var first = this;
      return new AnonymousObservable(function(observer) {
        var leftStopped = false,
            rightStopped = false,
            hasLeft = false,
            hasRight = false,
            lastLeft,
            lastRight,
            leftSubscription = new SingleAssignmentDisposable(),
            rightSubscription = new SingleAssignmentDisposable();
        isPromise(second) && (second = observableFromPromise(second));
        leftSubscription.setDisposable(first.subscribe(function(left) {
          hasLeft = true;
          lastLeft = left;
        }, function(err) {
          rightSubscription.dispose();
          observer.onError(err);
        }, function() {
          leftStopped = true;
          if (rightStopped) {
            if (!hasLeft) {
              observer.onCompleted();
            } else if (!hasRight) {
              observer.onCompleted();
            } else {
              var result;
              try {
                result = resultSelector(lastLeft, lastRight);
              } catch (e) {
                observer.onError(e);
                return;
              }
              observer.onNext(result);
              observer.onCompleted();
            }
          }
        }));
        rightSubscription.setDisposable(second.subscribe(function(right) {
          hasRight = true;
          lastRight = right;
        }, function(err) {
          leftSubscription.dispose();
          observer.onError(err);
        }, function() {
          rightStopped = true;
          if (leftStopped) {
            if (!hasLeft) {
              observer.onCompleted();
            } else if (!hasRight) {
              observer.onCompleted();
            } else {
              var result;
              try {
                result = resultSelector(lastLeft, lastRight);
              } catch (e) {
                observer.onError(e);
                return;
              }
              observer.onNext(result);
              observer.onCompleted();
            }
          }
        }));
        return new CompositeDisposable(leftSubscription, rightSubscription);
      }, first);
    };
    observableProto.manySelect = observableProto.extend = function(selector, scheduler) {
      isScheduler(scheduler) || (scheduler = immediateScheduler);
      var source = this;
      return observableDefer(function() {
        var chain;
        return source.map(function(x) {
          var curr = new ChainObservable(x);
          chain && chain.onNext(x);
          chain = curr;
          return curr;
        }).tap(noop, function(e) {
          chain && chain.onError(e);
        }, function() {
          chain && chain.onCompleted();
        }).observeOn(scheduler).map(selector);
      }, source);
    };
    var ChainObservable = (function(__super__) {
      function subscribe(observer) {
        var self = this,
            g = new CompositeDisposable();
        g.add(currentThreadScheduler.schedule(function() {
          observer.onNext(self.head);
          g.add(self.tail.mergeAll().subscribe(observer));
        }));
        return g;
      }
      inherits(ChainObservable, __super__);
      function ChainObservable(head) {
        __super__.call(this, subscribe);
        this.head = head;
        this.tail = new AsyncSubject();
      }
      addProperties(ChainObservable.prototype, Observer, {
        onCompleted: function() {
          this.onNext(Observable.empty());
        },
        onError: function(e) {
          this.onNext(Observable.throwError(e));
        },
        onNext: function(v) {
          this.tail.onNext(v);
          this.tail.onCompleted();
        }
      });
      return ChainObservable;
    }(Observable));
    observableProto.exclusive = function() {
      var sources = this;
      return new AnonymousObservable(function(observer) {
        var hasCurrent = false,
            isStopped = false,
            m = new SingleAssignmentDisposable(),
            g = new CompositeDisposable();
        g.add(m);
        m.setDisposable(sources.subscribe(function(innerSource) {
          if (!hasCurrent) {
            hasCurrent = true;
            isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
            var innerSubscription = new SingleAssignmentDisposable();
            g.add(innerSubscription);
            innerSubscription.setDisposable(innerSource.subscribe(observer.onNext.bind(observer), observer.onError.bind(observer), function() {
              g.remove(innerSubscription);
              hasCurrent = false;
              if (isStopped && g.length === 1) {
                observer.onCompleted();
              }
            }));
          }
        }, observer.onError.bind(observer), function() {
          isStopped = true;
          if (!hasCurrent && g.length === 1) {
            observer.onCompleted();
          }
        }));
        return g;
      }, this);
    };
    observableProto.exclusiveMap = function(selector, thisArg) {
      var sources = this,
          selectorFunc = bindCallback(selector, thisArg, 3);
      return new AnonymousObservable(function(observer) {
        var index = 0,
            hasCurrent = false,
            isStopped = true,
            m = new SingleAssignmentDisposable(),
            g = new CompositeDisposable();
        g.add(m);
        m.setDisposable(sources.subscribe(function(innerSource) {
          if (!hasCurrent) {
            hasCurrent = true;
            innerSubscription = new SingleAssignmentDisposable();
            g.add(innerSubscription);
            isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
            innerSubscription.setDisposable(innerSource.subscribe(function(x) {
              var result;
              try {
                result = selectorFunc(x, index++, innerSource);
              } catch (e) {
                observer.onError(e);
                return;
              }
              observer.onNext(result);
            }, function(e) {
              observer.onError(e);
            }, function() {
              g.remove(innerSubscription);
              hasCurrent = false;
              if (isStopped && g.length === 1) {
                observer.onCompleted();
              }
            }));
          }
        }, function(e) {
          observer.onError(e);
        }, function() {
          isStopped = true;
          if (g.length === 1 && !hasCurrent) {
            observer.onCompleted();
          }
        }));
        return g;
      }, this);
    };
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.joinpatterns.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        observableProto = Observable.prototype,
        AnonymousObservable = Rx.AnonymousObservable,
        observableThrow = Observable.throwError,
        observerCreate = Rx.Observer.create,
        SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
        CompositeDisposable = Rx.CompositeDisposable,
        AbstractObserver = Rx.internals.AbstractObserver,
        noop = Rx.helpers.noop,
        defaultComparer = Rx.internals.isEqual,
        inherits = Rx.internals.inherits,
        Enumerable = Rx.internals.Enumerable,
        Enumerator = Rx.internals.Enumerator,
        $iterator$ = Rx.iterator,
        doneEnumerator = Rx.doneEnumerator;
    var Map = root.Map || (function() {
      function Map() {
        this._keys = [];
        this._values = [];
      }
      Map.prototype.get = function(key) {
        var i = this._keys.indexOf(key);
        return i !== -1 ? this._values[i] : undefined;
      };
      Map.prototype.set = function(key, value) {
        var i = this._keys.indexOf(key);
        i !== -1 && (this._values[i] = value);
        this._values[this._keys.push(key) - 1] = value;
      };
      Map.prototype.forEach = function(callback, thisArg) {
        for (var i = 0,
            len = this._keys.length; i < len; i++) {
          callback.call(thisArg, this._values[i], this._keys[i]);
        }
      };
      return Map;
    }());
    function Pattern(patterns) {
      this.patterns = patterns;
    }
    Pattern.prototype.and = function(other) {
      return new Pattern(this.patterns.concat(other));
    };
    Pattern.prototype.thenDo = function(selector) {
      return new Plan(this, selector);
    };
    function Plan(expression, selector) {
      this.expression = expression;
      this.selector = selector;
    }
    Plan.prototype.activate = function(externalSubscriptions, observer, deactivate) {
      var self = this;
      var joinObservers = [];
      for (var i = 0,
          len = this.expression.patterns.length; i < len; i++) {
        joinObservers.push(planCreateObserver(externalSubscriptions, this.expression.patterns[i], observer.onError.bind(observer)));
      }
      var activePlan = new ActivePlan(joinObservers, function() {
        var result;
        try {
          result = self.selector.apply(self, arguments);
        } catch (e) {
          observer.onError(e);
          return;
        }
        observer.onNext(result);
      }, function() {
        for (var j = 0,
            jlen = joinObservers.length; j < jlen; j++) {
          joinObservers[j].removeActivePlan(activePlan);
        }
        deactivate(activePlan);
      });
      for (i = 0, len = joinObservers.length; i < len; i++) {
        joinObservers[i].addActivePlan(activePlan);
      }
      return activePlan;
    };
    function planCreateObserver(externalSubscriptions, observable, onError) {
      var entry = externalSubscriptions.get(observable);
      if (!entry) {
        var observer = new JoinObserver(observable, onError);
        externalSubscriptions.set(observable, observer);
        return observer;
      }
      return entry;
    }
    function ActivePlan(joinObserverArray, onNext, onCompleted) {
      this.joinObserverArray = joinObserverArray;
      this.onNext = onNext;
      this.onCompleted = onCompleted;
      this.joinObservers = new Map();
      for (var i = 0,
          len = this.joinObserverArray.length; i < len; i++) {
        var joinObserver = this.joinObserverArray[i];
        this.joinObservers.set(joinObserver, joinObserver);
      }
    }
    ActivePlan.prototype.dequeue = function() {
      this.joinObservers.forEach(function(v) {
        v.queue.shift();
      });
    };
    ActivePlan.prototype.match = function() {
      var i,
          len,
          hasValues = true;
      for (i = 0, len = this.joinObserverArray.length; i < len; i++) {
        if (this.joinObserverArray[i].queue.length === 0) {
          hasValues = false;
          break;
        }
      }
      if (hasValues) {
        var firstValues = [],
            isCompleted = false;
        for (i = 0, len = this.joinObserverArray.length; i < len; i++) {
          firstValues.push(this.joinObserverArray[i].queue[0]);
          this.joinObserverArray[i].queue[0].kind === 'C' && (isCompleted = true);
        }
        if (isCompleted) {
          this.onCompleted();
        } else {
          this.dequeue();
          var values = [];
          for (i = 0, len = firstValues.length; i < firstValues.length; i++) {
            values.push(firstValues[i].value);
          }
          this.onNext.apply(this, values);
        }
      }
    };
    var JoinObserver = (function(__super__) {
      inherits(JoinObserver, __super__);
      function JoinObserver(source, onError) {
        __super__.call(this);
        this.source = source;
        this.onError = onError;
        this.queue = [];
        this.activePlans = [];
        this.subscription = new SingleAssignmentDisposable();
        this.isDisposed = false;
      }
      var JoinObserverPrototype = JoinObserver.prototype;
      JoinObserverPrototype.next = function(notification) {
        if (!this.isDisposed) {
          if (notification.kind === 'E') {
            return this.onError(notification.exception);
          }
          this.queue.push(notification);
          var activePlans = this.activePlans.slice(0);
          for (var i = 0,
              len = activePlans.length; i < len; i++) {
            activePlans[i].match();
          }
        }
      };
      JoinObserverPrototype.error = noop;
      JoinObserverPrototype.completed = noop;
      JoinObserverPrototype.addActivePlan = function(activePlan) {
        this.activePlans.push(activePlan);
      };
      JoinObserverPrototype.subscribe = function() {
        this.subscription.setDisposable(this.source.materialize().subscribe(this));
      };
      JoinObserverPrototype.removeActivePlan = function(activePlan) {
        this.activePlans.splice(this.activePlans.indexOf(activePlan), 1);
        this.activePlans.length === 0 && this.dispose();
      };
      JoinObserverPrototype.dispose = function() {
        __super__.prototype.dispose.call(this);
        if (!this.isDisposed) {
          this.isDisposed = true;
          this.subscription.dispose();
        }
      };
      return JoinObserver;
    }(AbstractObserver));
    observableProto.and = function(right) {
      return new Pattern([this, right]);
    };
    observableProto.thenDo = function(selector) {
      return new Pattern([this]).thenDo(selector);
    };
    Observable.when = function() {
      var len = arguments.length,
          plans;
      if (Array.isArray(arguments[0])) {
        plans = arguments[0];
      } else {
        plans = new Array(len);
        for (var i = 0; i < len; i++) {
          plans[i] = arguments[i];
        }
      }
      return new AnonymousObservable(function(o) {
        var activePlans = [],
            externalSubscriptions = new Map();
        var outObserver = observerCreate(function(x) {
          o.onNext(x);
        }, function(err) {
          externalSubscriptions.forEach(function(v) {
            v.onError(err);
          });
          o.onError(err);
        }, function(x) {
          o.onCompleted();
        });
        try {
          for (var i = 0,
              len = plans.length; i < len; i++) {
            activePlans.push(plans[i].activate(externalSubscriptions, outObserver, function(activePlan) {
              var idx = activePlans.indexOf(activePlan);
              activePlans.splice(idx, 1);
              activePlans.length === 0 && o.onCompleted();
            }));
          }
        } catch (e) {
          observableThrow(e).subscribe(o);
        }
        var group = new CompositeDisposable();
        externalSubscriptions.forEach(function(joinObserver) {
          joinObserver.subscribe();
          group.add(joinObserver);
        });
        return group;
      });
    };
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.sorting.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        observableProto = Observable.prototype,
        AnonymousObservable = Rx.AnonymousObservable,
        observableNever = Observable.never,
        isEqual = Rx.internals.isEqual,
        defaultSubComparer = Rx.helpers.defaultSubComparer;
    observableProto.jortSort = function() {
      return this.jortSortUntil(observableNever());
    };
    observableProto.jortSortUntil = function(other) {
      var source = this;
      return new AnonymousObservable(function(observer) {
        var arr = [];
        return source.takeUntil(other).subscribe(arr.push.bind(arr), observer.onError.bind(observer), function() {
          var sorted = arr.slice(0).sort(defaultSubComparer);
          observer.onNext(isEqual(arr, sorted));
          observer.onCompleted();
        });
      }, source);
    };
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.virtualtime.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Scheduler = Rx.Scheduler,
        PriorityQueue = Rx.internals.PriorityQueue,
        ScheduledItem = Rx.internals.ScheduledItem,
        SchedulePeriodicRecursive = Rx.internals.SchedulePeriodicRecursive,
        disposableEmpty = Rx.Disposable.empty,
        inherits = Rx.internals.inherits,
        defaultSubComparer = Rx.helpers.defaultSubComparer,
        notImplemented = Rx.helpers.notImplemented;
    Rx.VirtualTimeScheduler = (function(__super__) {
      function localNow() {
        return this.toDateTimeOffset(this.clock);
      }
      function scheduleNow(state, action) {
        return this.scheduleAbsoluteWithState(state, this.clock, action);
      }
      function scheduleRelative(state, dueTime, action) {
        return this.scheduleRelativeWithState(state, this.toRelative(dueTime), action);
      }
      function scheduleAbsolute(state, dueTime, action) {
        return this.scheduleRelativeWithState(state, this.toRelative(dueTime - this.now()), action);
      }
      function invokeAction(scheduler, action) {
        action();
        return disposableEmpty;
      }
      inherits(VirtualTimeScheduler, __super__);
      function VirtualTimeScheduler(initialClock, comparer) {
        this.clock = initialClock;
        this.comparer = comparer;
        this.isEnabled = false;
        this.queue = new PriorityQueue(1024);
        __super__.call(this, localNow, scheduleNow, scheduleRelative, scheduleAbsolute);
      }
      var VirtualTimeSchedulerPrototype = VirtualTimeScheduler.prototype;
      VirtualTimeSchedulerPrototype.add = notImplemented;
      VirtualTimeSchedulerPrototype.toDateTimeOffset = notImplemented;
      VirtualTimeSchedulerPrototype.toRelative = notImplemented;
      VirtualTimeSchedulerPrototype.schedulePeriodicWithState = function(state, period, action) {
        var s = new SchedulePeriodicRecursive(this, state, period, action);
        return s.start();
      };
      VirtualTimeSchedulerPrototype.scheduleRelativeWithState = function(state, dueTime, action) {
        var runAt = this.add(this.clock, dueTime);
        return this.scheduleAbsoluteWithState(state, runAt, action);
      };
      VirtualTimeSchedulerPrototype.scheduleRelative = function(dueTime, action) {
        return this.scheduleRelativeWithState(action, dueTime, invokeAction);
      };
      VirtualTimeSchedulerPrototype.start = function() {
        if (!this.isEnabled) {
          this.isEnabled = true;
          do {
            var next = this.getNext();
            if (next !== null) {
              this.comparer(next.dueTime, this.clock) > 0 && (this.clock = next.dueTime);
              next.invoke();
            } else {
              this.isEnabled = false;
            }
          } while (this.isEnabled);
        }
      };
      VirtualTimeSchedulerPrototype.stop = function() {
        this.isEnabled = false;
      };
      VirtualTimeSchedulerPrototype.advanceTo = function(time) {
        var dueToClock = this.comparer(this.clock, time);
        if (this.comparer(this.clock, time) > 0) {
          throw new ArgumentOutOfRangeError();
        }
        if (dueToClock === 0) {
          return;
        }
        if (!this.isEnabled) {
          this.isEnabled = true;
          do {
            var next = this.getNext();
            if (next !== null && this.comparer(next.dueTime, time) <= 0) {
              this.comparer(next.dueTime, this.clock) > 0 && (this.clock = next.dueTime);
              next.invoke();
            } else {
              this.isEnabled = false;
            }
          } while (this.isEnabled);
          this.clock = time;
        }
      };
      VirtualTimeSchedulerPrototype.advanceBy = function(time) {
        var dt = this.add(this.clock, time),
            dueToClock = this.comparer(this.clock, dt);
        if (dueToClock > 0) {
          throw new ArgumentOutOfRangeError();
        }
        if (dueToClock === 0) {
          return;
        }
        this.advanceTo(dt);
      };
      VirtualTimeSchedulerPrototype.sleep = function(time) {
        var dt = this.add(this.clock, time);
        if (this.comparer(this.clock, dt) >= 0) {
          throw new ArgumentOutOfRangeError();
        }
        this.clock = dt;
      };
      VirtualTimeSchedulerPrototype.getNext = function() {
        while (this.queue.length > 0) {
          var next = this.queue.peek();
          if (next.isCancelled()) {
            this.queue.dequeue();
          } else {
            return next;
          }
        }
        return null;
      };
      VirtualTimeSchedulerPrototype.scheduleAbsolute = function(dueTime, action) {
        return this.scheduleAbsoluteWithState(action, dueTime, invokeAction);
      };
      VirtualTimeSchedulerPrototype.scheduleAbsoluteWithState = function(state, dueTime, action) {
        var self = this;
        function run(scheduler, state1) {
          self.queue.remove(si);
          return action(scheduler, state1);
        }
        var si = new ScheduledItem(this, state, run, dueTime, this.comparer);
        this.queue.enqueue(si);
        return si.disposable;
      };
      return VirtualTimeScheduler;
    }(Scheduler));
    Rx.HistoricalScheduler = (function(__super__) {
      inherits(HistoricalScheduler, __super__);
      function HistoricalScheduler(initialClock, comparer) {
        var clock = initialClock == null ? 0 : initialClock;
        var cmp = comparer || defaultSubComparer;
        __super__.call(this, clock, cmp);
      }
      var HistoricalSchedulerProto = HistoricalScheduler.prototype;
      HistoricalSchedulerProto.add = function(absolute, relative) {
        return absolute + relative;
      };
      HistoricalSchedulerProto.toDateTimeOffset = function(absolute) {
        return new Date(absolute).getTime();
      };
      HistoricalSchedulerProto.toRelative = function(timeSpan) {
        return timeSpan;
      };
      return HistoricalScheduler;
    }(Rx.VirtualTimeScheduler));
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.testing.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx.virtualtime", "exports"], function(Rx, exports) {
        root.Rx = factory(root, exports, Rx);
        return root.Rx;
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observer = Rx.Observer,
        Observable = Rx.Observable,
        Notification = Rx.Notification,
        VirtualTimeScheduler = Rx.VirtualTimeScheduler,
        Disposable = Rx.Disposable,
        disposableEmpty = Disposable.empty,
        disposableCreate = Disposable.create,
        CompositeDisposable = Rx.CompositeDisposable,
        SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
        inherits = Rx.internals.inherits,
        defaultComparer = Rx.internals.isEqual;
    function OnNextPredicate(predicate) {
      this.predicate = predicate;
    }
    ;
    OnNextPredicate.prototype.equals = function(other) {
      if (other === this) {
        return true;
      }
      if (other == null) {
        return false;
      }
      if (other.kind !== 'N') {
        return false;
      }
      return this.predicate(other.value);
    };
    function OnErrorPredicate(predicate) {
      this.predicate = predicate;
    }
    ;
    OnErrorPredicate.prototype.equals = function(other) {
      if (other === this) {
        return true;
      }
      if (other == null) {
        return false;
      }
      if (other.kind !== 'E') {
        return false;
      }
      return this.predicate(other.exception);
    };
    var ReactiveTest = Rx.ReactiveTest = {
      created: 100,
      subscribed: 200,
      disposed: 1000,
      onNext: function(ticks, value) {
        return typeof value === 'function' ? new Recorded(ticks, new OnNextPredicate(value)) : new Recorded(ticks, Notification.createOnNext(value));
      },
      onError: function(ticks, error) {
        return typeof error === 'function' ? new Recorded(ticks, new OnErrorPredicate(error)) : new Recorded(ticks, Notification.createOnError(error));
      },
      onCompleted: function(ticks) {
        return new Recorded(ticks, Notification.createOnCompleted());
      },
      subscribe: function(start, end) {
        return new Subscription(start, end);
      }
    };
    var Recorded = Rx.Recorded = function(time, value, comparer) {
      this.time = time;
      this.value = value;
      this.comparer = comparer || defaultComparer;
    };
    Recorded.prototype.equals = function(other) {
      return this.time === other.time && this.comparer(this.value, other.value);
    };
    Recorded.prototype.toString = function() {
      return this.value.toString() + '@' + this.time;
    };
    var Subscription = Rx.Subscription = function(start, end) {
      this.subscribe = start;
      this.unsubscribe = end || Number.MAX_VALUE;
    };
    Subscription.prototype.equals = function(other) {
      return this.subscribe === other.subscribe && this.unsubscribe === other.unsubscribe;
    };
    Subscription.prototype.toString = function() {
      return '(' + this.subscribe + ', ' + (this.unsubscribe === Number.MAX_VALUE ? 'Infinite' : this.unsubscribe) + ')';
    };
    var MockDisposable = Rx.MockDisposable = function(scheduler) {
      this.scheduler = scheduler;
      this.disposes = [];
      this.disposes.push(this.scheduler.clock);
    };
    MockDisposable.prototype.dispose = function() {
      this.disposes.push(this.scheduler.clock);
    };
    var MockObserver = (function(__super__) {
      inherits(MockObserver, __super__);
      function MockObserver(scheduler) {
        __super__.call(this);
        this.scheduler = scheduler;
        this.messages = [];
      }
      var MockObserverPrototype = MockObserver.prototype;
      MockObserverPrototype.onNext = function(value) {
        this.messages.push(new Recorded(this.scheduler.clock, Notification.createOnNext(value)));
      };
      MockObserverPrototype.onError = function(exception) {
        this.messages.push(new Recorded(this.scheduler.clock, Notification.createOnError(exception)));
      };
      MockObserverPrototype.onCompleted = function() {
        this.messages.push(new Recorded(this.scheduler.clock, Notification.createOnCompleted()));
      };
      return MockObserver;
    })(Observer);
    function MockPromise(scheduler, messages) {
      var self = this;
      this.scheduler = scheduler;
      this.messages = messages;
      this.subscriptions = [];
      this.observers = [];
      for (var i = 0,
          len = this.messages.length; i < len; i++) {
        var message = this.messages[i],
            notification = message.value;
        (function(innerNotification) {
          scheduler.scheduleAbsoluteWithState(null, message.time, function() {
            var obs = self.observers.slice(0);
            for (var j = 0,
                jLen = obs.length; j < jLen; j++) {
              innerNotification.accept(obs[j]);
            }
            return disposableEmpty;
          });
        })(notification);
      }
    }
    MockPromise.prototype.then = function(onResolved, onRejected) {
      var self = this;
      this.subscriptions.push(new Subscription(this.scheduler.clock));
      var index = this.subscriptions.length - 1;
      var newPromise;
      var observer = Rx.Observer.create(function(x) {
        var retValue = onResolved(x);
        if (retValue && typeof retValue.then === 'function') {
          newPromise = retValue;
        } else {
          var ticks = self.scheduler.clock;
          newPromise = new MockPromise(self.scheduler, [Rx.ReactiveTest.onNext(ticks, undefined), Rx.ReactiveTest.onCompleted(ticks)]);
        }
        var idx = self.observers.indexOf(observer);
        self.observers.splice(idx, 1);
        self.subscriptions[index] = new Subscription(self.subscriptions[index].subscribe, self.scheduler.clock);
      }, function(err) {
        onRejected(err);
        var idx = self.observers.indexOf(observer);
        self.observers.splice(idx, 1);
        self.subscriptions[index] = new Subscription(self.subscriptions[index].subscribe, self.scheduler.clock);
      });
      this.observers.push(observer);
      return newPromise || new MockPromise(this.scheduler, this.messages);
    };
    var HotObservable = (function(__super__) {
      function subscribe(observer) {
        var observable = this;
        this.observers.push(observer);
        this.subscriptions.push(new Subscription(this.scheduler.clock));
        var index = this.subscriptions.length - 1;
        return disposableCreate(function() {
          var idx = observable.observers.indexOf(observer);
          observable.observers.splice(idx, 1);
          observable.subscriptions[index] = new Subscription(observable.subscriptions[index].subscribe, observable.scheduler.clock);
        });
      }
      inherits(HotObservable, __super__);
      function HotObservable(scheduler, messages) {
        __super__.call(this, subscribe);
        var message,
            notification,
            observable = this;
        this.scheduler = scheduler;
        this.messages = messages;
        this.subscriptions = [];
        this.observers = [];
        for (var i = 0,
            len = this.messages.length; i < len; i++) {
          message = this.messages[i];
          notification = message.value;
          (function(innerNotification) {
            scheduler.scheduleAbsoluteWithState(null, message.time, function() {
              var obs = observable.observers.slice(0);
              for (var j = 0,
                  jLen = obs.length; j < jLen; j++) {
                innerNotification.accept(obs[j]);
              }
              return disposableEmpty;
            });
          })(notification);
        }
      }
      return HotObservable;
    })(Observable);
    var ColdObservable = (function(__super__) {
      function subscribe(observer) {
        var message,
            notification,
            observable = this;
        this.subscriptions.push(new Subscription(this.scheduler.clock));
        var index = this.subscriptions.length - 1;
        var d = new CompositeDisposable();
        for (var i = 0,
            len = this.messages.length; i < len; i++) {
          message = this.messages[i];
          notification = message.value;
          (function(innerNotification) {
            d.add(observable.scheduler.scheduleRelativeWithState(null, message.time, function() {
              innerNotification.accept(observer);
              return disposableEmpty;
            }));
          })(notification);
        }
        return disposableCreate(function() {
          observable.subscriptions[index] = new Subscription(observable.subscriptions[index].subscribe, observable.scheduler.clock);
          d.dispose();
        });
      }
      inherits(ColdObservable, __super__);
      function ColdObservable(scheduler, messages) {
        __super__.call(this, subscribe);
        this.scheduler = scheduler;
        this.messages = messages;
        this.subscriptions = [];
      }
      return ColdObservable;
    })(Observable);
    Rx.TestScheduler = (function(__super__) {
      inherits(TestScheduler, __super__);
      function baseComparer(x, y) {
        return x > y ? 1 : (x < y ? -1 : 0);
      }
      function TestScheduler() {
        __super__.call(this, 0, baseComparer);
      }
      TestScheduler.prototype.scheduleAbsoluteWithState = function(state, dueTime, action) {
        dueTime <= this.clock && (dueTime = this.clock + 1);
        return __super__.prototype.scheduleAbsoluteWithState.call(this, state, dueTime, action);
      };
      TestScheduler.prototype.add = function(absolute, relative) {
        return absolute + relative;
      };
      TestScheduler.prototype.toDateTimeOffset = function(absolute) {
        return new Date(absolute).getTime();
      };
      TestScheduler.prototype.toRelative = function(timeSpan) {
        return timeSpan;
      };
      TestScheduler.prototype.startWithTiming = function(create, created, subscribed, disposed) {
        var observer = this.createObserver(),
            source,
            subscription;
        this.scheduleAbsoluteWithState(null, created, function() {
          source = create();
          return disposableEmpty;
        });
        this.scheduleAbsoluteWithState(null, subscribed, function() {
          subscription = source.subscribe(observer);
          return disposableEmpty;
        });
        this.scheduleAbsoluteWithState(null, disposed, function() {
          subscription.dispose();
          return disposableEmpty;
        });
        this.start();
        return observer;
      };
      TestScheduler.prototype.startWithDispose = function(create, disposed) {
        return this.startWithTiming(create, ReactiveTest.created, ReactiveTest.subscribed, disposed);
      };
      TestScheduler.prototype.startWithCreate = function(create) {
        return this.startWithTiming(create, ReactiveTest.created, ReactiveTest.subscribed, ReactiveTest.disposed);
      };
      TestScheduler.prototype.createHotObservable = function() {
        var len = arguments.length,
            args;
        if (Array.isArray(arguments[0])) {
          args = arguments[0];
        } else {
          args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
        }
        return new HotObservable(this, args);
      };
      TestScheduler.prototype.createColdObservable = function() {
        var len = arguments.length,
            args;
        if (Array.isArray(arguments[0])) {
          args = arguments[0];
        } else {
          args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
        }
        return new ColdObservable(this, args);
      };
      TestScheduler.prototype.createResolvedPromise = function(ticks, value) {
        return new MockPromise(this, [Rx.ReactiveTest.onNext(ticks, value), Rx.ReactiveTest.onCompleted(ticks)]);
      };
      TestScheduler.prototype.createRejectedPromise = function(ticks, reason) {
        return new MockPromise(this, [Rx.ReactiveTest.onError(ticks, reason)]);
      };
      TestScheduler.prototype.createObserver = function() {
        return new MockObserver(this);
      };
      return TestScheduler;
    })(VirtualTimeScheduler);
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/dist/rx.time.js", ["npm:rx@2.5.3/dist/rx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(factory) {
    var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
    };
    var root = (objectTypes[typeof window] && window) || this,
        freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports,
        freeModule = objectTypes[typeof module] && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports && freeExports,
        freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      root = freeGlobal;
    }
    if (typeof define === 'function' && define.amd) {
      define(["rx"], function(Rx, exports) {
        return factory(root, exports, Rx);
      });
    } else if (typeof module === 'object' && module && module.exports === freeExports) {
      module.exports = factory(root, module.exports, require("npm:rx@2.5.3/dist/rx.js"));
    } else {
      root.Rx = factory(root, {}, root.Rx);
    }
  }.call(this, function(root, exp, Rx, undefined) {
    var Observable = Rx.Observable,
        observableProto = Observable.prototype,
        AnonymousObservable = Rx.AnonymousObservable,
        observableDefer = Observable.defer,
        observableEmpty = Observable.empty,
        observableNever = Observable.never,
        observableThrow = Observable.throwException,
        observableFromArray = Observable.fromArray,
        timeoutScheduler = Rx.Scheduler['default'],
        SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
        SerialDisposable = Rx.SerialDisposable,
        CompositeDisposable = Rx.CompositeDisposable,
        RefCountDisposable = Rx.RefCountDisposable,
        Subject = Rx.Subject,
        addRef = Rx.internals.addRef,
        normalizeTime = Rx.Scheduler.normalize,
        helpers = Rx.helpers,
        isPromise = helpers.isPromise,
        isFunction = helpers.isFunction,
        isScheduler = Rx.Scheduler.isScheduler,
        observableFromPromise = Observable.fromPromise;
    var errorObj = {e: {}};
    var tryCatchTarget;
    function tryCatcher() {
      try {
        return tryCatchTarget.apply(this, arguments);
      } catch (e) {
        errorObj.e = e;
        return errorObj;
      }
    }
    function tryCatch(fn) {
      if (!isFunction(fn)) {
        throw new TypeError('fn must be a function');
      }
      tryCatchTarget = fn;
      return tryCatcher;
    }
    function thrower(e) {
      throw e;
    }
    function observableTimerDate(dueTime, scheduler) {
      return new AnonymousObservable(function(observer) {
        return scheduler.scheduleWithAbsolute(dueTime, function() {
          observer.onNext(0);
          observer.onCompleted();
        });
      });
    }
    function observableTimerDateAndPeriod(dueTime, period, scheduler) {
      return new AnonymousObservable(function(observer) {
        var d = dueTime,
            p = normalizeTime(period);
        return scheduler.scheduleRecursiveWithAbsoluteAndState(0, d, function(count, self) {
          if (p > 0) {
            var now = scheduler.now();
            d = d + p;
            d <= now && (d = now + p);
          }
          observer.onNext(count);
          self(count + 1, d);
        });
      });
    }
    function observableTimerTimeSpan(dueTime, scheduler) {
      return new AnonymousObservable(function(observer) {
        return scheduler.scheduleWithRelative(normalizeTime(dueTime), function() {
          observer.onNext(0);
          observer.onCompleted();
        });
      });
    }
    function observableTimerTimeSpanAndPeriod(dueTime, period, scheduler) {
      return dueTime === period ? new AnonymousObservable(function(observer) {
        return scheduler.schedulePeriodicWithState(0, period, function(count) {
          observer.onNext(count);
          return count + 1;
        });
      }) : observableDefer(function() {
        return observableTimerDateAndPeriod(scheduler.now() + dueTime, period, scheduler);
      });
    }
    var observableinterval = Observable.interval = function(period, scheduler) {
      return observableTimerTimeSpanAndPeriod(period, period, isScheduler(scheduler) ? scheduler : timeoutScheduler);
    };
    var observableTimer = Observable.timer = function(dueTime, periodOrScheduler, scheduler) {
      var period;
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      if (periodOrScheduler !== undefined && typeof periodOrScheduler === 'number') {
        period = periodOrScheduler;
      } else if (isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
      }
      if (dueTime instanceof Date && period === undefined) {
        return observableTimerDate(dueTime.getTime(), scheduler);
      }
      if (dueTime instanceof Date && period !== undefined) {
        period = periodOrScheduler;
        return observableTimerDateAndPeriod(dueTime.getTime(), period, scheduler);
      }
      return period === undefined ? observableTimerTimeSpan(dueTime, scheduler) : observableTimerTimeSpanAndPeriod(dueTime, period, scheduler);
    };
    function observableDelayTimeSpan(source, dueTime, scheduler) {
      return new AnonymousObservable(function(observer) {
        var active = false,
            cancelable = new SerialDisposable(),
            exception = null,
            q = [],
            running = false,
            subscription;
        subscription = source.materialize().timestamp(scheduler).subscribe(function(notification) {
          var d,
              shouldRun;
          if (notification.value.kind === 'E') {
            q = [];
            q.push(notification);
            exception = notification.value.exception;
            shouldRun = !running;
          } else {
            q.push({
              value: notification.value,
              timestamp: notification.timestamp + dueTime
            });
            shouldRun = !active;
            active = true;
          }
          if (shouldRun) {
            if (exception !== null) {
              observer.onError(exception);
            } else {
              d = new SingleAssignmentDisposable();
              cancelable.setDisposable(d);
              d.setDisposable(scheduler.scheduleRecursiveWithRelative(dueTime, function(self) {
                var e,
                    recurseDueTime,
                    result,
                    shouldRecurse;
                if (exception !== null) {
                  return;
                }
                running = true;
                do {
                  result = null;
                  if (q.length > 0 && q[0].timestamp - scheduler.now() <= 0) {
                    result = q.shift().value;
                  }
                  if (result !== null) {
                    result.accept(observer);
                  }
                } while (result !== null);
                shouldRecurse = false;
                recurseDueTime = 0;
                if (q.length > 0) {
                  shouldRecurse = true;
                  recurseDueTime = Math.max(0, q[0].timestamp - scheduler.now());
                } else {
                  active = false;
                }
                e = exception;
                running = false;
                if (e !== null) {
                  observer.onError(e);
                } else if (shouldRecurse) {
                  self(recurseDueTime);
                }
              }));
            }
          }
        });
        return new CompositeDisposable(subscription, cancelable);
      }, source);
    }
    function observableDelayDate(source, dueTime, scheduler) {
      return observableDefer(function() {
        return observableDelayTimeSpan(source, dueTime - scheduler.now(), scheduler);
      });
    }
    observableProto.delay = function(dueTime, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return dueTime instanceof Date ? observableDelayDate(this, dueTime.getTime(), scheduler) : observableDelayTimeSpan(this, dueTime, scheduler);
    };
    observableProto.debounce = observableProto.throttleWithTimeout = function(dueTime, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      var source = this;
      return new AnonymousObservable(function(observer) {
        var cancelable = new SerialDisposable(),
            hasvalue = false,
            value,
            id = 0;
        var subscription = source.subscribe(function(x) {
          hasvalue = true;
          value = x;
          id++;
          var currentId = id,
              d = new SingleAssignmentDisposable();
          cancelable.setDisposable(d);
          d.setDisposable(scheduler.scheduleWithRelative(dueTime, function() {
            hasvalue && id === currentId && observer.onNext(value);
            hasvalue = false;
          }));
        }, function(e) {
          cancelable.dispose();
          observer.onError(e);
          hasvalue = false;
          id++;
        }, function() {
          cancelable.dispose();
          hasvalue && observer.onNext(value);
          observer.onCompleted();
          hasvalue = false;
          id++;
        });
        return new CompositeDisposable(subscription, cancelable);
      }, this);
    };
    observableProto.throttle = function(dueTime, scheduler) {
      return this.debounce(dueTime, scheduler);
    };
    observableProto.windowWithTime = function(timeSpan, timeShiftOrScheduler, scheduler) {
      var source = this,
          timeShift;
      timeShiftOrScheduler == null && (timeShift = timeSpan);
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      if (typeof timeShiftOrScheduler === 'number') {
        timeShift = timeShiftOrScheduler;
      } else if (isScheduler(timeShiftOrScheduler)) {
        timeShift = timeSpan;
        scheduler = timeShiftOrScheduler;
      }
      return new AnonymousObservable(function(observer) {
        var groupDisposable,
            nextShift = timeShift,
            nextSpan = timeSpan,
            q = [],
            refCountDisposable,
            timerD = new SerialDisposable(),
            totalTime = 0;
        groupDisposable = new CompositeDisposable(timerD), refCountDisposable = new RefCountDisposable(groupDisposable);
        function createTimer() {
          var m = new SingleAssignmentDisposable(),
              isSpan = false,
              isShift = false;
          timerD.setDisposable(m);
          if (nextSpan === nextShift) {
            isSpan = true;
            isShift = true;
          } else if (nextSpan < nextShift) {
            isSpan = true;
          } else {
            isShift = true;
          }
          var newTotalTime = isSpan ? nextSpan : nextShift,
              ts = newTotalTime - totalTime;
          totalTime = newTotalTime;
          if (isSpan) {
            nextSpan += timeShift;
          }
          if (isShift) {
            nextShift += timeShift;
          }
          m.setDisposable(scheduler.scheduleWithRelative(ts, function() {
            if (isShift) {
              var s = new Subject();
              q.push(s);
              observer.onNext(addRef(s, refCountDisposable));
            }
            isSpan && q.shift().onCompleted();
            createTimer();
          }));
        }
        ;
        q.push(new Subject());
        observer.onNext(addRef(q[0], refCountDisposable));
        createTimer();
        groupDisposable.add(source.subscribe(function(x) {
          for (var i = 0,
              len = q.length; i < len; i++) {
            q[i].onNext(x);
          }
        }, function(e) {
          for (var i = 0,
              len = q.length; i < len; i++) {
            q[i].onError(e);
          }
          observer.onError(e);
        }, function() {
          for (var i = 0,
              len = q.length; i < len; i++) {
            q[i].onCompleted();
          }
          observer.onCompleted();
        }));
        return refCountDisposable;
      }, source);
    };
    observableProto.windowWithTimeOrCount = function(timeSpan, count, scheduler) {
      var source = this;
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return new AnonymousObservable(function(observer) {
        var timerD = new SerialDisposable(),
            groupDisposable = new CompositeDisposable(timerD),
            refCountDisposable = new RefCountDisposable(groupDisposable),
            n = 0,
            windowId = 0,
            s = new Subject();
        function createTimer(id) {
          var m = new SingleAssignmentDisposable();
          timerD.setDisposable(m);
          m.setDisposable(scheduler.scheduleWithRelative(timeSpan, function() {
            if (id !== windowId) {
              return;
            }
            n = 0;
            var newId = ++windowId;
            s.onCompleted();
            s = new Subject();
            observer.onNext(addRef(s, refCountDisposable));
            createTimer(newId);
          }));
        }
        observer.onNext(addRef(s, refCountDisposable));
        createTimer(0);
        groupDisposable.add(source.subscribe(function(x) {
          var newId = 0,
              newWindow = false;
          s.onNext(x);
          if (++n === count) {
            newWindow = true;
            n = 0;
            newId = ++windowId;
            s.onCompleted();
            s = new Subject();
            observer.onNext(addRef(s, refCountDisposable));
          }
          newWindow && createTimer(newId);
        }, function(e) {
          s.onError(e);
          observer.onError(e);
        }, function() {
          s.onCompleted();
          observer.onCompleted();
        }));
        return refCountDisposable;
      }, source);
    };
    observableProto.bufferWithTime = function(timeSpan, timeShiftOrScheduler, scheduler) {
      return this.windowWithTime.apply(this, arguments).selectMany(function(x) {
        return x.toArray();
      });
    };
    observableProto.bufferWithTimeOrCount = function(timeSpan, count, scheduler) {
      return this.windowWithTimeOrCount(timeSpan, count, scheduler).selectMany(function(x) {
        return x.toArray();
      });
    };
    observableProto.timeInterval = function(scheduler) {
      var source = this;
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return observableDefer(function() {
        var last = scheduler.now();
        return source.map(function(x) {
          var now = scheduler.now(),
              span = now - last;
          last = now;
          return {
            value: x,
            interval: span
          };
        });
      });
    };
    observableProto.timestamp = function(scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return this.map(function(x) {
        return {
          value: x,
          timestamp: scheduler.now()
        };
      });
    };
    function sampleObservable(source, sampler) {
      return new AnonymousObservable(function(o) {
        var atEnd = false,
            value,
            hasValue = false;
        function sampleSubscribe() {
          if (hasValue) {
            hasValue = false;
            o.onNext(value);
          }
          atEnd && o.onCompleted();
        }
        var sourceSubscription = new SingleAssignmentDisposable();
        sourceSubscription.setDisposable(source.subscribe(function(newValue) {
          hasValue = true;
          value = newValue;
        }, function(e) {
          o.onError(e);
        }, function() {
          atEnd = true;
          sourceSubscription.dispose();
        }));
        return new CompositeDisposable(sourceSubscription, sampler.subscribe(sampleSubscribe, function(e) {
          o.onError(e);
        }, sampleSubscribe));
      }, source);
    }
    observableProto.sample = observableProto.throttleLatest = function(intervalOrSampler, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return typeof intervalOrSampler === 'number' ? sampleObservable(this, observableinterval(intervalOrSampler, scheduler)) : sampleObservable(this, intervalOrSampler);
    };
    observableProto.timeout = function(dueTime, other, scheduler) {
      (other == null || typeof other === 'string') && (other = observableThrow(new Error(other || 'Timeout')));
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      var source = this,
          schedulerMethod = dueTime instanceof Date ? 'scheduleWithAbsolute' : 'scheduleWithRelative';
      return new AnonymousObservable(function(observer) {
        var id = 0,
            original = new SingleAssignmentDisposable(),
            subscription = new SerialDisposable(),
            switched = false,
            timer = new SerialDisposable();
        subscription.setDisposable(original);
        function createTimer() {
          var myId = id;
          timer.setDisposable(scheduler[schedulerMethod](dueTime, function() {
            if (id === myId) {
              isPromise(other) && (other = observableFromPromise(other));
              subscription.setDisposable(other.subscribe(observer));
            }
          }));
        }
        createTimer();
        original.setDisposable(source.subscribe(function(x) {
          if (!switched) {
            id++;
            observer.onNext(x);
            createTimer();
          }
        }, function(e) {
          if (!switched) {
            id++;
            observer.onError(e);
          }
        }, function() {
          if (!switched) {
            id++;
            observer.onCompleted();
          }
        }));
        return new CompositeDisposable(subscription, timer);
      }, source);
    };
    Observable.generateWithAbsoluteTime = function(initialState, condition, iterate, resultSelector, timeSelector, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return new AnonymousObservable(function(observer) {
        var first = true,
            hasResult = false;
        return scheduler.scheduleRecursiveWithAbsoluteAndState(initialState, scheduler.now(), function(state, self) {
          hasResult && observer.onNext(state);
          try {
            if (first) {
              first = false;
            } else {
              state = iterate(state);
            }
            hasResult = condition(state);
            if (hasResult) {
              var result = resultSelector(state);
              var time = timeSelector(state);
            }
          } catch (e) {
            observer.onError(e);
            return;
          }
          if (hasResult) {
            self(result, time);
          } else {
            observer.onCompleted();
          }
        });
      });
    };
    Observable.generateWithRelativeTime = function(initialState, condition, iterate, resultSelector, timeSelector, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return new AnonymousObservable(function(observer) {
        var first = true,
            hasResult = false;
        return scheduler.scheduleRecursiveWithRelativeAndState(initialState, 0, function(state, self) {
          hasResult && observer.onNext(state);
          try {
            if (first) {
              first = false;
            } else {
              state = iterate(state);
            }
            hasResult = condition(state);
            if (hasResult) {
              var result = resultSelector(state);
              var time = timeSelector(state);
            }
          } catch (e) {
            observer.onError(e);
            return;
          }
          if (hasResult) {
            self(result, time);
          } else {
            observer.onCompleted();
          }
        });
      });
    };
    observableProto.delaySubscription = function(dueTime, scheduler) {
      var scheduleMethod = dueTime instanceof Date ? 'scheduleWithAbsolute' : 'scheduleWithRelative';
      var source = this;
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return new AnonymousObservable(function(o) {
        var d = new SerialDisposable();
        d.setDisposable(scheduler[scheduleMethod](dueTime, function() {
          d.setDisposable(source.subscribe(o));
        }));
        return d;
      }, this);
    };
    observableProto.delayWithSelector = function(subscriptionDelay, delayDurationSelector) {
      var source = this,
          subDelay,
          selector;
      if (isFunction(subscriptionDelay)) {
        selector = subscriptionDelay;
      } else {
        subDelay = subscriptionDelay;
        selector = delayDurationSelector;
      }
      return new AnonymousObservable(function(observer) {
        var delays = new CompositeDisposable(),
            atEnd = false,
            subscription = new SerialDisposable();
        function start() {
          subscription.setDisposable(source.subscribe(function(x) {
            var delay = tryCatch(selector)(x);
            if (delay === errorObj) {
              return observer.onError(delay.e);
            }
            var d = new SingleAssignmentDisposable();
            delays.add(d);
            d.setDisposable(delay.subscribe(function() {
              observer.onNext(x);
              delays.remove(d);
              done();
            }, function(e) {
              observer.onError(e);
            }, function() {
              observer.onNext(x);
              delays.remove(d);
              done();
            }));
          }, function(e) {
            observer.onError(e);
          }, function() {
            atEnd = true;
            subscription.dispose();
            done();
          }));
        }
        function done() {
          atEnd && delays.length === 0 && observer.onCompleted();
        }
        if (!subDelay) {
          start();
        } else {
          subscription.setDisposable(subDelay.subscribe(start, function(e) {
            observer.onError(e);
          }, start));
        }
        return new CompositeDisposable(subscription, delays);
      }, this);
    };
    observableProto.timeoutWithSelector = function(firstTimeout, timeoutdurationSelector, other) {
      if (arguments.length === 1) {
        timeoutdurationSelector = firstTimeout;
        firstTimeout = observableNever();
      }
      other || (other = observableThrow(new Error('Timeout')));
      var source = this;
      return new AnonymousObservable(function(observer) {
        var subscription = new SerialDisposable(),
            timer = new SerialDisposable(),
            original = new SingleAssignmentDisposable();
        subscription.setDisposable(original);
        var id = 0,
            switched = false;
        function setTimer(timeout) {
          var myId = id;
          function timerWins() {
            return id === myId;
          }
          var d = new SingleAssignmentDisposable();
          timer.setDisposable(d);
          d.setDisposable(timeout.subscribe(function() {
            timerWins() && subscription.setDisposable(other.subscribe(observer));
            d.dispose();
          }, function(e) {
            timerWins() && observer.onError(e);
          }, function() {
            timerWins() && subscription.setDisposable(other.subscribe(observer));
          }));
        }
        ;
        setTimer(firstTimeout);
        function observerWins() {
          var res = !switched;
          if (res) {
            id++;
          }
          return res;
        }
        original.setDisposable(source.subscribe(function(x) {
          if (observerWins()) {
            observer.onNext(x);
            var timeout;
            try {
              timeout = timeoutdurationSelector(x);
            } catch (e) {
              observer.onError(e);
              return;
            }
            setTimer(isPromise(timeout) ? observableFromPromise(timeout) : timeout);
          }
        }, function(e) {
          observerWins() && observer.onError(e);
        }, function() {
          observerWins() && observer.onCompleted();
        }));
        return new CompositeDisposable(subscription, timer);
      }, source);
    };
    observableProto.debounceWithSelector = function(durationSelector) {
      var source = this;
      return new AnonymousObservable(function(observer) {
        var value,
            hasValue = false,
            cancelable = new SerialDisposable(),
            id = 0;
        var subscription = source.subscribe(function(x) {
          var throttle;
          try {
            throttle = durationSelector(x);
          } catch (e) {
            observer.onError(e);
            return;
          }
          isPromise(throttle) && (throttle = observableFromPromise(throttle));
          hasValue = true;
          value = x;
          id++;
          var currentid = id,
              d = new SingleAssignmentDisposable();
          cancelable.setDisposable(d);
          d.setDisposable(throttle.subscribe(function() {
            hasValue && id === currentid && observer.onNext(value);
            hasValue = false;
            d.dispose();
          }, observer.onError.bind(observer), function() {
            hasValue && id === currentid && observer.onNext(value);
            hasValue = false;
            d.dispose();
          }));
        }, function(e) {
          cancelable.dispose();
          observer.onError(e);
          hasValue = false;
          id++;
        }, function() {
          cancelable.dispose();
          hasValue && observer.onNext(value);
          observer.onCompleted();
          hasValue = false;
          id++;
        });
        return new CompositeDisposable(subscription, cancelable);
      }, source);
    };
    observableProto.throttleWithSelector = function(durationSelector) {
      return this.debounceWithSelector(durationSelector);
    };
    observableProto.skipLastWithTime = function(duration, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      var source = this;
      return new AnonymousObservable(function(o) {
        var q = [];
        return source.subscribe(function(x) {
          var now = scheduler.now();
          q.push({
            interval: now,
            value: x
          });
          while (q.length > 0 && now - q[0].interval >= duration) {
            o.onNext(q.shift().value);
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          var now = scheduler.now();
          while (q.length > 0 && now - q[0].interval >= duration) {
            o.onNext(q.shift().value);
          }
          o.onCompleted();
        });
      }, source);
    };
    observableProto.takeLastWithTime = function(duration, scheduler) {
      var source = this;
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return new AnonymousObservable(function(o) {
        var q = [];
        return source.subscribe(function(x) {
          var now = scheduler.now();
          q.push({
            interval: now,
            value: x
          });
          while (q.length > 0 && now - q[0].interval >= duration) {
            q.shift();
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          var now = scheduler.now();
          while (q.length > 0) {
            var next = q.shift();
            if (now - next.interval <= duration) {
              o.onNext(next.value);
            }
          }
          o.onCompleted();
        });
      }, source);
    };
    observableProto.takeLastBufferWithTime = function(duration, scheduler) {
      var source = this;
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return new AnonymousObservable(function(o) {
        var q = [];
        return source.subscribe(function(x) {
          var now = scheduler.now();
          q.push({
            interval: now,
            value: x
          });
          while (q.length > 0 && now - q[0].interval >= duration) {
            q.shift();
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          var now = scheduler.now(),
              res = [];
          while (q.length > 0) {
            var next = q.shift();
            now - next.interval <= duration && res.push(next.value);
          }
          o.onNext(res);
          o.onCompleted();
        });
      }, source);
    };
    observableProto.takeWithTime = function(duration, scheduler) {
      var source = this;
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return new AnonymousObservable(function(o) {
        return new CompositeDisposable(scheduler.scheduleWithRelative(duration, function() {
          o.onCompleted();
        }), source.subscribe(o));
      }, source);
    };
    observableProto.skipWithTime = function(duration, scheduler) {
      var source = this;
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      return new AnonymousObservable(function(observer) {
        var open = false;
        return new CompositeDisposable(scheduler.scheduleWithRelative(duration, function() {
          open = true;
        }), source.subscribe(function(x) {
          open && observer.onNext(x);
        }, observer.onError.bind(observer), observer.onCompleted.bind(observer)));
      }, source);
    };
    observableProto.skipUntilWithTime = function(startTime, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      var source = this,
          schedulerMethod = startTime instanceof Date ? 'scheduleWithAbsolute' : 'scheduleWithRelative';
      return new AnonymousObservable(function(o) {
        var open = false;
        return new CompositeDisposable(scheduler[schedulerMethod](startTime, function() {
          open = true;
        }), source.subscribe(function(x) {
          open && o.onNext(x);
        }, function(e) {
          o.onError(e);
        }, function() {
          o.onCompleted();
        }));
      }, source);
    };
    observableProto.takeUntilWithTime = function(endTime, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      var source = this,
          schedulerMethod = endTime instanceof Date ? 'scheduleWithAbsolute' : 'scheduleWithRelative';
      return new AnonymousObservable(function(o) {
        return new CompositeDisposable(scheduler[schedulerMethod](endTime, function() {
          o.onCompleted();
        }), source.subscribe(o));
      }, source);
    };
    observableProto.throttleFirst = function(windowDuration, scheduler) {
      isScheduler(scheduler) || (scheduler = timeoutScheduler);
      var duration = +windowDuration || 0;
      if (duration <= 0) {
        throw new RangeError('windowDuration cannot be less or equal zero.');
      }
      var source = this;
      return new AnonymousObservable(function(o) {
        var lastOnNext = 0;
        return source.subscribe(function(x) {
          var now = scheduler.now();
          if (lastOnNext === 0 || now - lastOnNext >= duration) {
            lastOnNext = now;
            o.onNext(x);
          }
        }, function(e) {
          o.onError(e);
        }, function() {
          o.onCompleted();
        });
      }, source);
    };
    return Rx;
  }));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.enum-keys.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js");
  module.exports = function(it) {
    var keys = $.getKeys(it),
        getDesc = $.getDesc,
        getSymbols = $.getSymbols;
    if (getSymbols)
      $.each.call(getSymbols(it), function(key) {
        if (getDesc(it, key).enumerable)
          keys.push(key);
      });
    return keys;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.shared.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      SHARED = '__core-js_shared__',
      store = $.g[SHARED] || ($.g[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.uid.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var sid = 0;
  function uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
  }
  uid.safe = require("npm:core-js@0.9.18/library/modules/$.js").g.Symbol || uid;
  module.exports = uid;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.redef.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@0.9.18/library/modules/$.js").hide;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.string-at.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js");
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String($.assertDefined(that)),
          i = $.toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.iter.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.cof.js", "npm:core-js@0.9.18/library/modules/$.assert.js", "npm:core-js@0.9.18/library/modules/$.wks.js", "npm:core-js@0.9.18/library/modules/$.shared.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      cof = require("npm:core-js@0.9.18/library/modules/$.cof.js"),
      classof = cof.classof,
      assert = require("npm:core-js@0.9.18/library/modules/$.assert.js"),
      assertObject = assert.obj,
      SYMBOL_ITERATOR = require("npm:core-js@0.9.18/library/modules/$.wks.js")('iterator'),
      FF_ITERATOR = '@@iterator',
      Iterators = require("npm:core-js@0.9.18/library/modules/$.shared.js")('iterators'),
      IteratorPrototype = {};
  setIterator(IteratorPrototype, $.that);
  function setIterator(O, value) {
    $.hide(O, SYMBOL_ITERATOR, value);
    if (FF_ITERATOR in [])
      $.hide(O, FF_ITERATOR, value);
  }
  module.exports = {
    BUGGY: 'keys' in [] && !('next' in [].keys()),
    Iterators: Iterators,
    step: function(done, value) {
      return {
        value: value,
        done: !!done
      };
    },
    is: function(it) {
      var O = Object(it),
          Symbol = $.g.Symbol;
      return (Symbol && Symbol.iterator || FF_ITERATOR) in O || SYMBOL_ITERATOR in O || $.has(Iterators, classof(O));
    },
    get: function(it) {
      var Symbol = $.g.Symbol,
          getIter;
      if (it != undefined) {
        getIter = it[Symbol && Symbol.iterator || FF_ITERATOR] || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
      }
      assert($.isFunction(getIter), it, ' is not iterable!');
      return assertObject(getIter.call(it));
    },
    set: setIterator,
    create: function(Constructor, NAME, next, proto) {
      Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
      cof.set(Constructor, NAME + ' Iterator');
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.iter-define.js", ["npm:core-js@0.9.18/library/modules/$.def.js", "npm:core-js@0.9.18/library/modules/$.redef.js", "npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.cof.js", "npm:core-js@0.9.18/library/modules/$.iter.js", "npm:core-js@0.9.18/library/modules/$.wks.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $def = require("npm:core-js@0.9.18/library/modules/$.def.js"),
      $redef = require("npm:core-js@0.9.18/library/modules/$.redef.js"),
      $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      cof = require("npm:core-js@0.9.18/library/modules/$.cof.js"),
      $iter = require("npm:core-js@0.9.18/library/modules/$.iter.js"),
      SYMBOL_ITERATOR = require("npm:core-js@0.9.18/library/modules/$.wks.js")('iterator'),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values',
      Iterators = $iter.Iterators;
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE) {
    $iter.create(Constructor, NAME, next);
    function createMethod(kind) {
      function $$(that) {
        return new Constructor(that, kind);
      }
      switch (kind) {
        case KEYS:
          return function keys() {
            return $$(this);
          };
        case VALUES:
          return function values() {
            return $$(this);
          };
      }
      return function entries() {
        return $$(this);
      };
    }
    var TAG = NAME + ' Iterator',
        proto = Base.prototype,
        _native = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        _default = _native || createMethod(DEFAULT),
        methods,
        key;
    if (_native) {
      var IteratorPrototype = $.getProto(_default.call(new Base));
      cof.set(IteratorPrototype, TAG, true);
      if ($.FW && $.has(proto, FF_ITERATOR))
        $iter.set(IteratorPrototype, $.that);
    }
    if ($.FW || FORCE)
      $iter.set(proto, _default);
    Iterators[NAME] = _default;
    Iterators[TAG] = $.that;
    if (DEFAULT) {
      methods = {
        keys: IS_SET ? _default : createMethod(KEYS),
        values: DEFAULT == VALUES ? _default : createMethod(VALUES),
        entries: DEFAULT != VALUES ? _default : createMethod('entries')
      };
      if (FORCE)
        for (key in methods) {
          if (!(key in proto))
            $redef(proto, key, methods[key]);
        }
      else
        $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.unscope.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function() {};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.iter-call.js", ["npm:core-js@0.9.18/library/modules/$.assert.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var assertObject = require("npm:core-js@0.9.18/library/modules/$.assert.js").obj;
  function close(iterator) {
    var ret = iterator['return'];
    if (ret !== undefined)
      assertObject(ret.call(iterator));
  }
  function call(iterator, fn, value, entries) {
    try {
      return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      close(iterator);
      throw e;
    }
  }
  call.close = close;
  module.exports = call;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.same.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.species.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.wks.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      SPECIES = require("npm:core-js@0.9.18/library/modules/$.wks.js")('species');
  module.exports = function(C) {
    if ($.DESC && !(SPECIES in C))
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: $.that
      });
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.invoke.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
      case 5:
        return un ? fn(args[0], args[1], args[2], args[3], args[4]) : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
    }
    return fn.apply(that, args);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.dom-create.js", ["npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      document = $.g.document,
      isObject = $.isObject,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.mix.js", ["npm:core-js@0.9.18/library/modules/$.redef.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $redef = require("npm:core-js@0.9.18/library/modules/$.redef.js");
  module.exports = function(target, src) {
    for (var key in src)
      $redef(target, key, src[key]);
    return target;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.iter-detect.js", ["npm:core-js@0.9.18/library/modules/$.wks.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var SYMBOL_ITERATOR = require("npm:core-js@0.9.18/library/modules/$.wks.js")('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][SYMBOL_ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec) {
    if (!SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[SYMBOL_ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[SYMBOL_ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:ms@0.7.0/index.js", [], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    if ('string' == typeof val)
      return parse(val);
    return options.long ? long(val) : short(val);
  };
  function parse(str) {
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match)
      return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
    }
  }
  function short(ms) {
    if (ms >= d)
      return Math.round(ms / d) + 'd';
    if (ms >= h)
      return Math.round(ms / h) + 'h';
    if (ms >= m)
      return Math.round(ms / m) + 'm';
    if (ms >= s)
      return Math.round(ms / s) + 's';
    return ms + 'ms';
  }
  function long(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
  }
  function plural(ms, n, name) {
    if (ms < n)
      return;
    if (ms < n * 1.5)
      return Math.floor(ms / n) + ' ' + name;
    return Math.ceil(ms / n) + ' ' + name + 's';
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:process@0.10.1.js", ["npm:process@0.10.1/browser.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:process@0.10.1/browser.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/warning.js", ["npm:react@0.13.3/lib/emptyFunction.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var emptyFunction = require("npm:react@0.13.3/lib/emptyFunction.js");
    var warning = emptyFunction;
    if ("production" !== "production") {
      warning = function(condition, format) {
        for (var args = [],
            $__0 = 2,
            $__1 = arguments.length; $__0 < $__1; $__0++)
          args.push(arguments[$__0]);
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.length < 10 || /^[s\W]*$/.test(format)) {
          throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
        }
        if (format.indexOf('Failed Composite propType: ') === 0) {
          return;
        }
        if (!condition) {
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
          });
          console.warn(message);
          try {
            throw new Error(message);
          } catch (x) {}
        }
      };
    }
    module.exports = warning;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactInstanceHandles.js", ["npm:react@0.13.3/lib/ReactRootIndex.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactRootIndex = require("npm:react@0.13.3/lib/ReactRootIndex.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var SEPARATOR = '.';
    var SEPARATOR_LENGTH = SEPARATOR.length;
    var MAX_TREE_DEPTH = 100;
    function getReactRootIDString(index) {
      return SEPARATOR + index.toString(36);
    }
    function isBoundary(id, index) {
      return id.charAt(index) === SEPARATOR || index === id.length;
    }
    function isValidID(id) {
      return id === '' || (id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR);
    }
    function isAncestorIDOf(ancestorID, descendantID) {
      return (descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length));
    }
    function getParentID(id) {
      return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
    }
    function getNextDescendantID(ancestorID, destinationID) {
      ("production" !== "production" ? invariant(isValidID(ancestorID) && isValidID(destinationID), 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(isValidID(ancestorID) && isValidID(destinationID)));
      ("production" !== "production" ? invariant(isAncestorIDOf(ancestorID, destinationID), 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(isAncestorIDOf(ancestorID, destinationID)));
      if (ancestorID === destinationID) {
        return ancestorID;
      }
      var start = ancestorID.length + SEPARATOR_LENGTH;
      var i;
      for (i = start; i < destinationID.length; i++) {
        if (isBoundary(destinationID, i)) {
          break;
        }
      }
      return destinationID.substr(0, i);
    }
    function getFirstCommonAncestorID(oneID, twoID) {
      var minLength = Math.min(oneID.length, twoID.length);
      if (minLength === 0) {
        return '';
      }
      var lastCommonMarkerIndex = 0;
      for (var i = 0; i <= minLength; i++) {
        if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
          lastCommonMarkerIndex = i;
        } else if (oneID.charAt(i) !== twoID.charAt(i)) {
          break;
        }
      }
      var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
      ("production" !== "production" ? invariant(isValidID(longestCommonID), 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(isValidID(longestCommonID)));
      return longestCommonID;
    }
    function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
      start = start || '';
      stop = stop || '';
      ("production" !== "production" ? invariant(start !== stop, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(start !== stop));
      var traverseUp = isAncestorIDOf(stop, start);
      ("production" !== "production" ? invariant(traverseUp || isAncestorIDOf(start, stop), 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(traverseUp || isAncestorIDOf(start, stop)));
      var depth = 0;
      var traverse = traverseUp ? getParentID : getNextDescendantID;
      for (var id = start; ; id = traverse(id, stop)) {
        var ret;
        if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
          ret = cb(id, traverseUp, arg);
        }
        if (ret === false || id === stop) {
          break;
        }
        ("production" !== "production" ? invariant(depth++ < MAX_TREE_DEPTH, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop) : invariant(depth++ < MAX_TREE_DEPTH));
      }
    }
    var ReactInstanceHandles = {
      createReactRootID: function() {
        return getReactRootIDString(ReactRootIndex.createReactRootIndex());
      },
      createReactID: function(rootID, name) {
        return rootID + name;
      },
      getReactRootIDFromNodeID: function(id) {
        if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
          var index = id.indexOf(SEPARATOR, 1);
          return index > -1 ? id.substr(0, index) : id;
        }
        return null;
      },
      traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
        var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
        if (ancestorID !== leaveID) {
          traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
        }
        if (ancestorID !== enterID) {
          traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
        }
      },
      traverseTwoPhase: function(targetID, cb, arg) {
        if (targetID) {
          traverseParentPath('', targetID, cb, arg, true, false);
          traverseParentPath(targetID, '', cb, arg, false, true);
        }
      },
      traverseAncestors: function(targetID, cb, arg) {
        traverseParentPath('', targetID, cb, arg, true, false);
      },
      _getFirstCommonAncestorID: getFirstCommonAncestorID,
      _getNextDescendantID: getNextDescendantID,
      isAncestorIDOf: isAncestorIDOf,
      SEPARATOR: SEPARATOR
    };
    module.exports = ReactInstanceHandles;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactRef.js", ["npm:react@0.13.3/lib/ReactOwner.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactOwner = require("npm:react@0.13.3/lib/ReactOwner.js");
    var ReactRef = {};
    function attachRef(ref, component, owner) {
      if (typeof ref === 'function') {
        ref(component.getPublicInstance());
      } else {
        ReactOwner.addComponentAsRefTo(component, ref, owner);
      }
    }
    function detachRef(ref, component, owner) {
      if (typeof ref === 'function') {
        ref(null);
      } else {
        ReactOwner.removeComponentAsRefFrom(component, ref, owner);
      }
    }
    ReactRef.attachRefs = function(instance, element) {
      var ref = element.ref;
      if (ref != null) {
        attachRef(ref, instance, element._owner);
      }
    };
    ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
      return (nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref);
    };
    ReactRef.detachRefs = function(instance, element) {
      var ref = element.ref;
      if (ref != null) {
        detachRef(ref, instance, element._owner);
      }
    };
    module.exports = ReactRef;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactElementValidator.js", ["npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactFragment.js", "npm:react@0.13.3/lib/ReactPropTypeLocations.js", "npm:react@0.13.3/lib/ReactPropTypeLocationNames.js", "npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/ReactNativeComponent.js", "npm:react@0.13.3/lib/getIteratorFn.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactFragment = require("npm:react@0.13.3/lib/ReactFragment.js");
    var ReactPropTypeLocations = require("npm:react@0.13.3/lib/ReactPropTypeLocations.js");
    var ReactPropTypeLocationNames = require("npm:react@0.13.3/lib/ReactPropTypeLocationNames.js");
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var ReactNativeComponent = require("npm:react@0.13.3/lib/ReactNativeComponent.js");
    var getIteratorFn = require("npm:react@0.13.3/lib/getIteratorFn.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = ReactCurrentOwner.current.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var ownerHasKeyUseWarning = {};
    var loggedTypeFailures = {};
    var NUMERIC_PROPERTY_REGEX = /^\d+$/;
    function getName(instance) {
      var publicInstance = instance && instance.getPublicInstance();
      if (!publicInstance) {
        return undefined;
      }
      var constructor = publicInstance.constructor;
      if (!constructor) {
        return undefined;
      }
      return constructor.displayName || constructor.name || undefined;
    }
    function getCurrentOwnerDisplayName() {
      var current = ReactCurrentOwner.current;
      return (current && getName(current) || undefined);
    }
    function validateExplicitKey(element, parentType) {
      if (element._store.validated || element.key != null) {
        return;
      }
      element._store.validated = true;
      warnAndMonitorForKeyUse('Each child in an array or iterator should have a unique "key" prop.', element, parentType);
    }
    function validatePropertyKey(name, element, parentType) {
      if (!NUMERIC_PROPERTY_REGEX.test(name)) {
        return;
      }
      warnAndMonitorForKeyUse('Child objects should have non-numeric keys so ordering is preserved.', element, parentType);
    }
    function warnAndMonitorForKeyUse(message, element, parentType) {
      var ownerName = getCurrentOwnerDisplayName();
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
      var useName = ownerName || parentName;
      var memoizer = ownerHasKeyUseWarning[message] || ((ownerHasKeyUseWarning[message] = {}));
      if (memoizer.hasOwnProperty(useName)) {
        return;
      }
      memoizer[useName] = true;
      var parentOrOwnerAddendum = ownerName ? (" Check the render method of " + ownerName + ".") : parentName ? (" Check the React.render call using <" + parentName + ">.") : '';
      var childOwnerAddendum = '';
      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        var childOwnerName = getName(element._owner);
        childOwnerAddendum = (" It was passed a child from " + childOwnerName + ".");
      }
      ("production" !== "production" ? warning(false, message + '%s%s See https://fb.me/react-warning-keys for more information.', parentOrOwnerAddendum, childOwnerAddendum) : null);
    }
    function validateChildKeys(node, parentType) {
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (ReactElement.isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (ReactElement.isValidElement(node)) {
        node._store.validated = true;
      } else if (node) {
        var iteratorFn = getIteratorFn(node);
        if (iteratorFn) {
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (ReactElement.isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        } else if (typeof node === 'object') {
          var fragment = ReactFragment.extractIfFragment(node);
          for (var key in fragment) {
            if (fragment.hasOwnProperty(key)) {
              validatePropertyKey(key, fragment[key], parentType);
            }
          }
        }
      }
    }
    function checkPropTypes(componentName, propTypes, props, location) {
      for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error;
          try {
            ("production" !== "production" ? invariant(typeof propTypes[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(typeof propTypes[propName] === 'function'));
            error = propTypes[propName](props, propName, componentName, location);
          } catch (ex) {
            error = ex;
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var addendum = getDeclarationErrorAddendum(this);
            ("production" !== "production" ? warning(false, 'Failed propType: %s%s', error.message, addendum) : null);
          }
        }
      }
    }
    var warnedPropsMutations = {};
    function warnForPropsMutation(propName, element) {
      var type = element.type;
      var elementName = typeof type === 'string' ? type : type.displayName;
      var ownerName = element._owner ? element._owner.getPublicInstance().constructor.displayName : null;
      var warningKey = propName + '|' + elementName + '|' + ownerName;
      if (warnedPropsMutations.hasOwnProperty(warningKey)) {
        return;
      }
      warnedPropsMutations[warningKey] = true;
      var elementInfo = '';
      if (elementName) {
        elementInfo = ' <' + elementName + ' />';
      }
      var ownerInfo = '';
      if (ownerName) {
        ownerInfo = ' The element was created by ' + ownerName + '.';
      }
      ("production" !== "production" ? warning(false, 'Don\'t set .props.%s of the React component%s. Instead, specify the ' + 'correct value when initially creating the element or use ' + 'React.cloneElement to make a new element with updated props.%s', propName, elementInfo, ownerInfo) : null);
    }
    function is(a, b) {
      if (a !== a) {
        return b !== b;
      }
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      return a === b;
    }
    function checkAndWarnForMutatedProps(element) {
      if (!element._store) {
        return;
      }
      var originalProps = element._store.originalProps;
      var props = element.props;
      for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
          if (!originalProps.hasOwnProperty(propName) || !is(originalProps[propName], props[propName])) {
            warnForPropsMutation(propName, element);
            originalProps[propName] = props[propName];
          }
        }
      }
    }
    function validatePropTypes(element) {
      if (element.type == null) {
        return;
      }
      var componentClass = ReactNativeComponent.getComponentClassForElement(element);
      var name = componentClass.displayName || componentClass.name;
      if (componentClass.propTypes) {
        checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
      }
      if (typeof componentClass.getDefaultProps === 'function') {
        ("production" !== "production" ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : null);
      }
    }
    var ReactElementValidator = {
      checkAndWarnForMutatedProps: checkAndWarnForMutatedProps,
      createElement: function(type, props, children) {
        ("production" !== "production" ? warning(type != null, 'React.createElement: type should not be null or undefined. It should ' + 'be a string (for DOM elements) or a ReactClass (for composite ' + 'components).') : null);
        var element = ReactElement.createElement.apply(this, arguments);
        if (element == null) {
          return element;
        }
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
        validatePropTypes(element);
        return element;
      },
      createFactory: function(type) {
        var validatedFactory = ReactElementValidator.createElement.bind(null, type);
        validatedFactory.type = type;
        if ("production" !== "production") {
          try {
            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function() {
                ("production" !== "production" ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : null);
                Object.defineProperty(this, 'type', {value: type});
                return type;
              }
            });
          } catch (x) {}
        }
        return validatedFactory;
      },
      cloneElement: function(element, props, children) {
        var newElement = ReactElement.cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
    };
    module.exports = ReactElementValidator;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactClass.js", ["npm:react@0.13.3/lib/ReactComponent.js", "npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactErrorUtils.js", "npm:react@0.13.3/lib/ReactInstanceMap.js", "npm:react@0.13.3/lib/ReactLifeCycle.js", "npm:react@0.13.3/lib/ReactPropTypeLocations.js", "npm:react@0.13.3/lib/ReactPropTypeLocationNames.js", "npm:react@0.13.3/lib/ReactUpdateQueue.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/keyMirror.js", "npm:react@0.13.3/lib/keyOf.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactComponent = require("npm:react@0.13.3/lib/ReactComponent.js");
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactErrorUtils = require("npm:react@0.13.3/lib/ReactErrorUtils.js");
    var ReactInstanceMap = require("npm:react@0.13.3/lib/ReactInstanceMap.js");
    var ReactLifeCycle = require("npm:react@0.13.3/lib/ReactLifeCycle.js");
    var ReactPropTypeLocations = require("npm:react@0.13.3/lib/ReactPropTypeLocations.js");
    var ReactPropTypeLocationNames = require("npm:react@0.13.3/lib/ReactPropTypeLocationNames.js");
    var ReactUpdateQueue = require("npm:react@0.13.3/lib/ReactUpdateQueue.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var keyMirror = require("npm:react@0.13.3/lib/keyMirror.js");
    var keyOf = require("npm:react@0.13.3/lib/keyOf.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var MIXINS_KEY = keyOf({mixins: null});
    var SpecPolicy = keyMirror({
      DEFINE_ONCE: null,
      DEFINE_MANY: null,
      OVERRIDE_BASE: null,
      DEFINE_MANY_MERGED: null
    });
    var injectedMixins = [];
    var ReactClassInterface = {
      mixins: SpecPolicy.DEFINE_MANY,
      statics: SpecPolicy.DEFINE_MANY,
      propTypes: SpecPolicy.DEFINE_MANY,
      contextTypes: SpecPolicy.DEFINE_MANY,
      childContextTypes: SpecPolicy.DEFINE_MANY,
      getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
      getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
      getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
      render: SpecPolicy.DEFINE_ONCE,
      componentWillMount: SpecPolicy.DEFINE_MANY,
      componentDidMount: SpecPolicy.DEFINE_MANY,
      componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
      shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
      componentWillUpdate: SpecPolicy.DEFINE_MANY,
      componentDidUpdate: SpecPolicy.DEFINE_MANY,
      componentWillUnmount: SpecPolicy.DEFINE_MANY,
      updateComponent: SpecPolicy.OVERRIDE_BASE
    };
    var RESERVED_SPEC_KEYS = {
      displayName: function(Constructor, displayName) {
        Constructor.displayName = displayName;
      },
      mixins: function(Constructor, mixins) {
        if (mixins) {
          for (var i = 0; i < mixins.length; i++) {
            mixSpecIntoComponent(Constructor, mixins[i]);
          }
        }
      },
      childContextTypes: function(Constructor, childContextTypes) {
        if ("production" !== "production") {
          validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
        }
        Constructor.childContextTypes = assign({}, Constructor.childContextTypes, childContextTypes);
      },
      contextTypes: function(Constructor, contextTypes) {
        if ("production" !== "production") {
          validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
        }
        Constructor.contextTypes = assign({}, Constructor.contextTypes, contextTypes);
      },
      getDefaultProps: function(Constructor, getDefaultProps) {
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
        } else {
          Constructor.getDefaultProps = getDefaultProps;
        }
      },
      propTypes: function(Constructor, propTypes) {
        if ("production" !== "production") {
          validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
        }
        Constructor.propTypes = assign({}, Constructor.propTypes, propTypes);
      },
      statics: function(Constructor, statics) {
        mixStaticSpecIntoComponent(Constructor, statics);
      }
    };
    function validateTypeDef(Constructor, typeDef, location) {
      for (var propName in typeDef) {
        if (typeDef.hasOwnProperty(propName)) {
          ("production" !== "production" ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : null);
        }
      }
    }
    function validateMethodOverride(proto, name) {
      var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
      if (ReactClassMixin.hasOwnProperty(name)) {
        ("production" !== "production" ? invariant(specPolicy === SpecPolicy.OVERRIDE_BASE, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(specPolicy === SpecPolicy.OVERRIDE_BASE));
      }
      if (proto.hasOwnProperty(name)) {
        ("production" !== "production" ? invariant(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED));
      }
    }
    function mixSpecIntoComponent(Constructor, spec) {
      if (!spec) {
        return;
      }
      ("production" !== "production" ? invariant(typeof spec !== 'function', 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(typeof spec !== 'function'));
      ("production" !== "production" ? invariant(!ReactElement.isValidElement(spec), 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(!ReactElement.isValidElement(spec)));
      var proto = Constructor.prototype;
      if (spec.hasOwnProperty(MIXINS_KEY)) {
        RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
      }
      for (var name in spec) {
        if (!spec.hasOwnProperty(name)) {
          continue;
        }
        if (name === MIXINS_KEY) {
          continue;
        }
        var property = spec[name];
        validateMethodOverride(proto, name);
        if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
          RESERVED_SPEC_KEYS[name](Constructor, property);
        } else {
          var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
          var isAlreadyDefined = proto.hasOwnProperty(name);
          var markedDontBind = property && property.__reactDontBind;
          var isFunction = typeof property === 'function';
          var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && !markedDontBind;
          if (shouldAutoBind) {
            if (!proto.__reactAutoBindMap) {
              proto.__reactAutoBindMap = {};
            }
            proto.__reactAutoBindMap[name] = property;
            proto[name] = property;
          } else {
            if (isAlreadyDefined) {
              var specPolicy = ReactClassInterface[name];
              ("production" !== "production" ? invariant(isReactClassMethod && ((specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)), 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(isReactClassMethod && ((specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY))));
              if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
                proto[name] = createMergedResultFunction(proto[name], property);
              } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
                proto[name] = createChainedFunction(proto[name], property);
              }
            } else {
              proto[name] = property;
              if ("production" !== "production") {
                if (typeof property === 'function' && spec.displayName) {
                  proto[name].displayName = spec.displayName + '_' + name;
                }
              }
            }
          }
        }
      }
    }
    function mixStaticSpecIntoComponent(Constructor, statics) {
      if (!statics) {
        return;
      }
      for (var name in statics) {
        var property = statics[name];
        if (!statics.hasOwnProperty(name)) {
          continue;
        }
        var isReserved = name in RESERVED_SPEC_KEYS;
        ("production" !== "production" ? invariant(!isReserved, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(!isReserved));
        var isInherited = name in Constructor;
        ("production" !== "production" ? invariant(!isInherited, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(!isInherited));
        Constructor[name] = property;
      }
    }
    function mergeIntoWithNoDuplicateKeys(one, two) {
      ("production" !== "production" ? invariant(one && two && typeof one === 'object' && typeof two === 'object', 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(one && two && typeof one === 'object' && typeof two === 'object'));
      for (var key in two) {
        if (two.hasOwnProperty(key)) {
          ("production" !== "production" ? invariant(one[key] === undefined, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(one[key] === undefined));
          one[key] = two[key];
        }
      }
      return one;
    }
    function createMergedResultFunction(one, two) {
      return function mergedResult() {
        var a = one.apply(this, arguments);
        var b = two.apply(this, arguments);
        if (a == null) {
          return b;
        } else if (b == null) {
          return a;
        }
        var c = {};
        mergeIntoWithNoDuplicateKeys(c, a);
        mergeIntoWithNoDuplicateKeys(c, b);
        return c;
      };
    }
    function createChainedFunction(one, two) {
      return function chainedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
      };
    }
    function bindAutoBindMethod(component, method) {
      var boundMethod = method.bind(component);
      if ("production" !== "production") {
        boundMethod.__reactBoundContext = component;
        boundMethod.__reactBoundMethod = method;
        boundMethod.__reactBoundArguments = null;
        var componentName = component.constructor.displayName;
        var _bind = boundMethod.bind;
        boundMethod.bind = function(newThis) {
          for (var args = [],
              $__0 = 1,
              $__1 = arguments.length; $__0 < $__1; $__0++)
            args.push(arguments[$__0]);
          if (newThis !== component && newThis !== null) {
            ("production" !== "production" ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : null);
          } else if (!args.length) {
            ("production" !== "production" ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : null);
            return boundMethod;
          }
          var reboundMethod = _bind.apply(boundMethod, arguments);
          reboundMethod.__reactBoundContext = component;
          reboundMethod.__reactBoundMethod = method;
          reboundMethod.__reactBoundArguments = args;
          return reboundMethod;
        };
      }
      return boundMethod;
    }
    function bindAutoBindMethods(component) {
      for (var autoBindKey in component.__reactAutoBindMap) {
        if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
          var method = component.__reactAutoBindMap[autoBindKey];
          component[autoBindKey] = bindAutoBindMethod(component, ReactErrorUtils.guard(method, component.constructor.displayName + '.' + autoBindKey));
        }
      }
    }
    var typeDeprecationDescriptor = {
      enumerable: false,
      get: function() {
        var displayName = this.displayName || this.name || 'Component';
        ("production" !== "production" ? warning(false, '%s.type is deprecated. Use %s directly to access the class.', displayName, displayName) : null);
        Object.defineProperty(this, 'type', {value: this});
        return this;
      }
    };
    var ReactClassMixin = {
      replaceState: function(newState, callback) {
        ReactUpdateQueue.enqueueReplaceState(this, newState);
        if (callback) {
          ReactUpdateQueue.enqueueCallback(this, callback);
        }
      },
      isMounted: function() {
        if ("production" !== "production") {
          var owner = ReactCurrentOwner.current;
          if (owner !== null) {
            ("production" !== "production" ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : null);
            owner._warnedAboutRefsInRender = true;
          }
        }
        var internalInstance = ReactInstanceMap.get(this);
        return (internalInstance && internalInstance !== ReactLifeCycle.currentlyMountingInstance);
      },
      setProps: function(partialProps, callback) {
        ReactUpdateQueue.enqueueSetProps(this, partialProps);
        if (callback) {
          ReactUpdateQueue.enqueueCallback(this, callback);
        }
      },
      replaceProps: function(newProps, callback) {
        ReactUpdateQueue.enqueueReplaceProps(this, newProps);
        if (callback) {
          ReactUpdateQueue.enqueueCallback(this, callback);
        }
      }
    };
    var ReactClassComponent = function() {};
    assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
    var ReactClass = {
      createClass: function(spec) {
        var Constructor = function(props, context) {
          if ("production" !== "production") {
            ("production" !== "production" ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : null);
          }
          if (this.__reactAutoBindMap) {
            bindAutoBindMethods(this);
          }
          this.props = props;
          this.context = context;
          this.state = null;
          var initialState = this.getInitialState ? this.getInitialState() : null;
          if ("production" !== "production") {
            if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {
              initialState = null;
            }
          }
          ("production" !== "production" ? invariant(typeof initialState === 'object' && !Array.isArray(initialState), '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(typeof initialState === 'object' && !Array.isArray(initialState)));
          this.state = initialState;
        };
        Constructor.prototype = new ReactClassComponent();
        Constructor.prototype.constructor = Constructor;
        injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
        mixSpecIntoComponent(Constructor, spec);
        if (Constructor.getDefaultProps) {
          Constructor.defaultProps = Constructor.getDefaultProps();
        }
        if ("production" !== "production") {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps.isReactClassApproved = {};
          }
          if (Constructor.prototype.getInitialState) {
            Constructor.prototype.getInitialState.isReactClassApproved = {};
          }
        }
        ("production" !== "production" ? invariant(Constructor.prototype.render, 'createClass(...): Class specification must implement a `render` method.') : invariant(Constructor.prototype.render));
        if ("production" !== "production") {
          ("production" !== "production" ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : null);
        }
        for (var methodName in ReactClassInterface) {
          if (!Constructor.prototype[methodName]) {
            Constructor.prototype[methodName] = null;
          }
        }
        Constructor.type = Constructor;
        if ("production" !== "production") {
          try {
            Object.defineProperty(Constructor, 'type', typeDeprecationDescriptor);
          } catch (x) {}
        }
        return Constructor;
      },
      injection: {injectMixin: function(mixin) {
          injectedMixins.push(mixin);
        }}
    };
    module.exports = ReactClass;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOM.js", ["npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactElementValidator.js", "npm:react@0.13.3/lib/mapObject.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactElementValidator = require("npm:react@0.13.3/lib/ReactElementValidator.js");
    var mapObject = require("npm:react@0.13.3/lib/mapObject.js");
    function createDOMFactory(tag) {
      if ("production" !== "production") {
        return ReactElementValidator.createFactory(tag);
      }
      return ReactElement.createFactory(tag);
    }
    var ReactDOM = mapObject({
      a: 'a',
      abbr: 'abbr',
      address: 'address',
      area: 'area',
      article: 'article',
      aside: 'aside',
      audio: 'audio',
      b: 'b',
      base: 'base',
      bdi: 'bdi',
      bdo: 'bdo',
      big: 'big',
      blockquote: 'blockquote',
      body: 'body',
      br: 'br',
      button: 'button',
      canvas: 'canvas',
      caption: 'caption',
      cite: 'cite',
      code: 'code',
      col: 'col',
      colgroup: 'colgroup',
      data: 'data',
      datalist: 'datalist',
      dd: 'dd',
      del: 'del',
      details: 'details',
      dfn: 'dfn',
      dialog: 'dialog',
      div: 'div',
      dl: 'dl',
      dt: 'dt',
      em: 'em',
      embed: 'embed',
      fieldset: 'fieldset',
      figcaption: 'figcaption',
      figure: 'figure',
      footer: 'footer',
      form: 'form',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      head: 'head',
      header: 'header',
      hr: 'hr',
      html: 'html',
      i: 'i',
      iframe: 'iframe',
      img: 'img',
      input: 'input',
      ins: 'ins',
      kbd: 'kbd',
      keygen: 'keygen',
      label: 'label',
      legend: 'legend',
      li: 'li',
      link: 'link',
      main: 'main',
      map: 'map',
      mark: 'mark',
      menu: 'menu',
      menuitem: 'menuitem',
      meta: 'meta',
      meter: 'meter',
      nav: 'nav',
      noscript: 'noscript',
      object: 'object',
      ol: 'ol',
      optgroup: 'optgroup',
      option: 'option',
      output: 'output',
      p: 'p',
      param: 'param',
      picture: 'picture',
      pre: 'pre',
      progress: 'progress',
      q: 'q',
      rp: 'rp',
      rt: 'rt',
      ruby: 'ruby',
      s: 's',
      samp: 'samp',
      script: 'script',
      section: 'section',
      select: 'select',
      small: 'small',
      source: 'source',
      span: 'span',
      strong: 'strong',
      style: 'style',
      sub: 'sub',
      summary: 'summary',
      sup: 'sup',
      table: 'table',
      tbody: 'tbody',
      td: 'td',
      textarea: 'textarea',
      tfoot: 'tfoot',
      th: 'th',
      thead: 'thead',
      time: 'time',
      title: 'title',
      tr: 'tr',
      track: 'track',
      u: 'u',
      ul: 'ul',
      'var': 'var',
      video: 'video',
      wbr: 'wbr',
      circle: 'circle',
      clipPath: 'clipPath',
      defs: 'defs',
      ellipse: 'ellipse',
      g: 'g',
      line: 'line',
      linearGradient: 'linearGradient',
      mask: 'mask',
      path: 'path',
      pattern: 'pattern',
      polygon: 'polygon',
      polyline: 'polyline',
      radialGradient: 'radialGradient',
      rect: 'rect',
      stop: 'stop',
      svg: 'svg',
      text: 'text',
      tspan: 'tspan'
    }, createDOMFactory);
    module.exports = ReactDOM;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/quoteAttributeValueForBrowser.js", ["npm:react@0.13.3/lib/escapeTextContentForBrowser.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var escapeTextContentForBrowser = require("npm:react@0.13.3/lib/escapeTextContentForBrowser.js");
  function quoteAttributeValueForBrowser(value) {
    return '"' + escapeTextContentForBrowser(value) + '"';
  }
  module.exports = quoteAttributeValueForBrowser;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/camelizeStyleName.js", ["npm:react@0.13.3/lib/camelize.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var camelize = require("npm:react@0.13.3/lib/camelize.js");
  var msPattern = /^-ms-/;
  function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
  }
  module.exports = camelizeStyleName;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/hyphenateStyleName.js", ["npm:react@0.13.3/lib/hyphenate.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var hyphenate = require("npm:react@0.13.3/lib/hyphenate.js");
  var msPattern = /^ms-/;
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }
  module.exports = hyphenateStyleName;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/createArrayFromMixed.js", ["npm:react@0.13.3/lib/toArray.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var toArray = require("npm:react@0.13.3/lib/toArray.js");
  function hasArrayNature(obj) {
    return (!!obj && (typeof obj == 'object' || typeof obj == 'function') && ('length' in obj) && !('setInterval' in obj) && (typeof obj.nodeType != 'number') && (((Array.isArray(obj) || ('callee' in obj) || 'item' in obj))));
  }
  function createArrayFromMixed(obj) {
    if (!hasArrayNature(obj)) {
      return [obj];
    } else if (Array.isArray(obj)) {
      return obj.slice();
    } else {
      return toArray(obj);
    }
  }
  module.exports = createArrayFromMixed;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/setTextContent.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/escapeTextContentForBrowser.js", "npm:react@0.13.3/lib/setInnerHTML.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
  var escapeTextContentForBrowser = require("npm:react@0.13.3/lib/escapeTextContentForBrowser.js");
  var setInnerHTML = require("npm:react@0.13.3/lib/setInnerHTML.js");
  var setTextContent = function(node, text) {
    node.textContent = text;
  };
  if (ExecutionEnvironment.canUseDOM) {
    if (!('textContent' in document.documentElement)) {
      setTextContent = function(node, text) {
        setInnerHTML(node, escapeTextContentForBrowser(text));
      };
    }
  }
  module.exports = setTextContent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/EventPluginHub.js", ["npm:react@0.13.3/lib/EventPluginRegistry.js", "npm:react@0.13.3/lib/EventPluginUtils.js", "npm:react@0.13.3/lib/accumulateInto.js", "npm:react@0.13.3/lib/forEachAccumulated.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventPluginRegistry = require("npm:react@0.13.3/lib/EventPluginRegistry.js");
    var EventPluginUtils = require("npm:react@0.13.3/lib/EventPluginUtils.js");
    var accumulateInto = require("npm:react@0.13.3/lib/accumulateInto.js");
    var forEachAccumulated = require("npm:react@0.13.3/lib/forEachAccumulated.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var listenerBank = {};
    var eventQueue = null;
    var executeDispatchesAndRelease = function(event) {
      if (event) {
        var executeDispatch = EventPluginUtils.executeDispatch;
        var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
        if (PluginModule && PluginModule.executeDispatch) {
          executeDispatch = PluginModule.executeDispatch;
        }
        EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);
        if (!event.isPersistent()) {
          event.constructor.release(event);
        }
      }
    };
    var InstanceHandle = null;
    function validateInstanceHandle() {
      var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
      ("production" !== "production" ? invariant(valid, 'InstanceHandle not injected before use!') : invariant(valid));
    }
    var EventPluginHub = {
      injection: {
        injectMount: EventPluginUtils.injection.injectMount,
        injectInstanceHandle: function(InjectedInstanceHandle) {
          InstanceHandle = InjectedInstanceHandle;
          if ("production" !== "production") {
            validateInstanceHandle();
          }
        },
        getInstanceHandle: function() {
          if ("production" !== "production") {
            validateInstanceHandle();
          }
          return InstanceHandle;
        },
        injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
        injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
      },
      eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,
      registrationNameModules: EventPluginRegistry.registrationNameModules,
      putListener: function(id, registrationName, listener) {
        ("production" !== "production" ? invariant(!listener || typeof listener === 'function', 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(!listener || typeof listener === 'function'));
        var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
        bankForRegistrationName[id] = listener;
      },
      getListener: function(id, registrationName) {
        var bankForRegistrationName = listenerBank[registrationName];
        return bankForRegistrationName && bankForRegistrationName[id];
      },
      deleteListener: function(id, registrationName) {
        var bankForRegistrationName = listenerBank[registrationName];
        if (bankForRegistrationName) {
          delete bankForRegistrationName[id];
        }
      },
      deleteAllListeners: function(id) {
        for (var registrationName in listenerBank) {
          delete listenerBank[registrationName][id];
        }
      },
      extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
        var events;
        var plugins = EventPluginRegistry.plugins;
        for (var i = 0,
            l = plugins.length; i < l; i++) {
          var possiblePlugin = plugins[i];
          if (possiblePlugin) {
            var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
            if (extractedEvents) {
              events = accumulateInto(events, extractedEvents);
            }
          }
        }
        return events;
      },
      enqueueEvents: function(events) {
        if (events) {
          eventQueue = accumulateInto(eventQueue, events);
        }
      },
      processEventQueue: function() {
        var processingEventQueue = eventQueue;
        eventQueue = null;
        forEachAccumulated(processingEventQueue, executeDispatchesAndRelease);
        ("production" !== "production" ? invariant(!eventQueue, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(!eventQueue));
      },
      __purge: function() {
        listenerBank = {};
      },
      __getListenerBank: function() {
        return listenerBank;
      }
    };
    module.exports = EventPluginHub;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactMarkupChecksum.js", ["npm:react@0.13.3/lib/adler32.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var adler32 = require("npm:react@0.13.3/lib/adler32.js");
  var ReactMarkupChecksum = {
    CHECKSUM_ATTR_NAME: 'data-react-checksum',
    addChecksumToMarkup: function(markup) {
      var checksum = adler32(markup);
      return markup.replace('>', ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">');
    },
    canReuseMarkup: function(markup, element) {
      var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
      existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
      var markupChecksum = adler32(markup);
      return markupChecksum === existingChecksum;
    }
  };
  module.exports = ReactMarkupChecksum;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/isTextNode.js", ["npm:react@0.13.3/lib/isNode.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isNode = require("npm:react@0.13.3/lib/isNode.js");
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }
  module.exports = isTextNode;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactCompositeComponent.js", ["npm:react@0.13.3/lib/ReactComponentEnvironment.js", "npm:react@0.13.3/lib/ReactContext.js", "npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactElementValidator.js", "npm:react@0.13.3/lib/ReactInstanceMap.js", "npm:react@0.13.3/lib/ReactLifeCycle.js", "npm:react@0.13.3/lib/ReactNativeComponent.js", "npm:react@0.13.3/lib/ReactPerf.js", "npm:react@0.13.3/lib/ReactPropTypeLocations.js", "npm:react@0.13.3/lib/ReactPropTypeLocationNames.js", "npm:react@0.13.3/lib/ReactReconciler.js", "npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/emptyObject.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/shouldUpdateReactComponent.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactComponentEnvironment = require("npm:react@0.13.3/lib/ReactComponentEnvironment.js");
    var ReactContext = require("npm:react@0.13.3/lib/ReactContext.js");
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactElementValidator = require("npm:react@0.13.3/lib/ReactElementValidator.js");
    var ReactInstanceMap = require("npm:react@0.13.3/lib/ReactInstanceMap.js");
    var ReactLifeCycle = require("npm:react@0.13.3/lib/ReactLifeCycle.js");
    var ReactNativeComponent = require("npm:react@0.13.3/lib/ReactNativeComponent.js");
    var ReactPerf = require("npm:react@0.13.3/lib/ReactPerf.js");
    var ReactPropTypeLocations = require("npm:react@0.13.3/lib/ReactPropTypeLocations.js");
    var ReactPropTypeLocationNames = require("npm:react@0.13.3/lib/ReactPropTypeLocationNames.js");
    var ReactReconciler = require("npm:react@0.13.3/lib/ReactReconciler.js");
    var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var emptyObject = require("npm:react@0.13.3/lib/emptyObject.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var shouldUpdateReactComponent = require("npm:react@0.13.3/lib/shouldUpdateReactComponent.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    function getDeclarationErrorAddendum(component) {
      var owner = component._currentElement._owner || null;
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var nextMountID = 1;
    var ReactCompositeComponentMixin = {
      construct: function(element) {
        this._currentElement = element;
        this._rootNodeID = null;
        this._instance = null;
        this._pendingElement = null;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._renderedComponent = null;
        this._context = null;
        this._mountOrder = 0;
        this._isTopLevel = false;
        this._pendingCallbacks = null;
      },
      mountComponent: function(rootID, transaction, context) {
        this._context = context;
        this._mountOrder = nextMountID++;
        this._rootNodeID = rootID;
        var publicProps = this._processProps(this._currentElement.props);
        var publicContext = this._processContext(this._currentElement._context);
        var Component = ReactNativeComponent.getComponentClassForElement(this._currentElement);
        var inst = new Component(publicProps, publicContext);
        if ("production" !== "production") {
          ("production" !== "production" ? warning(inst.render != null, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render` in your ' + 'component or you may have accidentally tried to render an element ' + 'whose type is a function that isn\'t a React component.', Component.displayName || Component.name || 'Component') : null);
        }
        inst.props = publicProps;
        inst.context = publicContext;
        inst.refs = emptyObject;
        this._instance = inst;
        ReactInstanceMap.set(inst, this);
        if ("production" !== "production") {
          this._warnIfContextsDiffer(this._currentElement._context, context);
        }
        if ("production" !== "production") {
          ("production" !== "production" ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : null);
          ("production" !== "production" ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : null);
          ("production" !== "production" ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : null);
          ("production" !== "production" ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : null);
          ("production" !== "production" ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', (this.getName() || 'A component')) : null);
        }
        var initialState = inst.state;
        if (initialState === undefined) {
          inst.state = initialState = null;
        }
        ("production" !== "production" ? invariant(typeof initialState === 'object' && !Array.isArray(initialState), '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(typeof initialState === 'object' && !Array.isArray(initialState)));
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        var childContext;
        var renderedElement;
        var previouslyMounting = ReactLifeCycle.currentlyMountingInstance;
        ReactLifeCycle.currentlyMountingInstance = this;
        try {
          if (inst.componentWillMount) {
            inst.componentWillMount();
            if (this._pendingStateQueue) {
              inst.state = this._processPendingState(inst.props, inst.context);
            }
          }
          childContext = this._getValidatedChildContext(context);
          renderedElement = this._renderValidatedComponent(childContext);
        } finally {
          ReactLifeCycle.currentlyMountingInstance = previouslyMounting;
        }
        this._renderedComponent = this._instantiateReactComponent(renderedElement, this._currentElement.type);
        var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._mergeChildContext(context, childContext));
        if (inst.componentDidMount) {
          transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
        }
        return markup;
      },
      unmountComponent: function() {
        var inst = this._instance;
        if (inst.componentWillUnmount) {
          var previouslyUnmounting = ReactLifeCycle.currentlyUnmountingInstance;
          ReactLifeCycle.currentlyUnmountingInstance = this;
          try {
            inst.componentWillUnmount();
          } finally {
            ReactLifeCycle.currentlyUnmountingInstance = previouslyUnmounting;
          }
        }
        ReactReconciler.unmountComponent(this._renderedComponent);
        this._renderedComponent = null;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._pendingCallbacks = null;
        this._pendingElement = null;
        this._context = null;
        this._rootNodeID = null;
        ReactInstanceMap.remove(inst);
      },
      _setPropsInternal: function(partialProps, callback) {
        var element = this._pendingElement || this._currentElement;
        this._pendingElement = ReactElement.cloneAndReplaceProps(element, assign({}, element.props, partialProps));
        ReactUpdates.enqueueUpdate(this, callback);
      },
      _maskContext: function(context) {
        var maskedContext = null;
        if (typeof this._currentElement.type === 'string') {
          return emptyObject;
        }
        var contextTypes = this._currentElement.type.contextTypes;
        if (!contextTypes) {
          return emptyObject;
        }
        maskedContext = {};
        for (var contextName in contextTypes) {
          maskedContext[contextName] = context[contextName];
        }
        return maskedContext;
      },
      _processContext: function(context) {
        var maskedContext = this._maskContext(context);
        if ("production" !== "production") {
          var Component = ReactNativeComponent.getComponentClassForElement(this._currentElement);
          if (Component.contextTypes) {
            this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
          }
        }
        return maskedContext;
      },
      _getValidatedChildContext: function(currentContext) {
        var inst = this._instance;
        var childContext = inst.getChildContext && inst.getChildContext();
        if (childContext) {
          ("production" !== "production" ? invariant(typeof inst.constructor.childContextTypes === 'object', '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(typeof inst.constructor.childContextTypes === 'object'));
          if ("production" !== "production") {
            this._checkPropTypes(inst.constructor.childContextTypes, childContext, ReactPropTypeLocations.childContext);
          }
          for (var name in childContext) {
            ("production" !== "production" ? invariant(name in inst.constructor.childContextTypes, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(name in inst.constructor.childContextTypes));
          }
          return childContext;
        }
        return null;
      },
      _mergeChildContext: function(currentContext, childContext) {
        if (childContext) {
          return assign({}, currentContext, childContext);
        }
        return currentContext;
      },
      _processProps: function(newProps) {
        if ("production" !== "production") {
          var Component = ReactNativeComponent.getComponentClassForElement(this._currentElement);
          if (Component.propTypes) {
            this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
          }
        }
        return newProps;
      },
      _checkPropTypes: function(propTypes, props, location) {
        var componentName = this.getName();
        for (var propName in propTypes) {
          if (propTypes.hasOwnProperty(propName)) {
            var error;
            try {
              ("production" !== "production" ? invariant(typeof propTypes[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(typeof propTypes[propName] === 'function'));
              error = propTypes[propName](props, propName, componentName, location);
            } catch (ex) {
              error = ex;
            }
            if (error instanceof Error) {
              var addendum = getDeclarationErrorAddendum(this);
              if (location === ReactPropTypeLocations.prop) {
                ("production" !== "production" ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : null);
              } else {
                ("production" !== "production" ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : null);
              }
            }
          }
        }
      },
      receiveComponent: function(nextElement, transaction, nextContext) {
        var prevElement = this._currentElement;
        var prevContext = this._context;
        this._pendingElement = null;
        this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
      },
      performUpdateIfNecessary: function(transaction) {
        if (this._pendingElement != null) {
          ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
        }
        if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
          if ("production" !== "production") {
            ReactElementValidator.checkAndWarnForMutatedProps(this._currentElement);
          }
          this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
        }
      },
      _warnIfContextsDiffer: function(ownerBasedContext, parentBasedContext) {
        ownerBasedContext = this._maskContext(ownerBasedContext);
        parentBasedContext = this._maskContext(parentBasedContext);
        var parentKeys = Object.keys(parentBasedContext).sort();
        var displayName = this.getName() || 'ReactCompositeComponent';
        for (var i = 0; i < parentKeys.length; i++) {
          var key = parentKeys[i];
          ("production" !== "production" ? warning(ownerBasedContext[key] === parentBasedContext[key], 'owner-based and parent-based contexts differ ' + '(values: `%s` vs `%s`) for key (%s) while mounting %s ' + '(see: http://fb.me/react-context-by-parent)', ownerBasedContext[key], parentBasedContext[key], key, displayName) : null);
        }
      },
      updateComponent: function(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
        var inst = this._instance;
        var nextContext = inst.context;
        var nextProps = inst.props;
        if (prevParentElement !== nextParentElement) {
          nextContext = this._processContext(nextParentElement._context);
          nextProps = this._processProps(nextParentElement.props);
          if ("production" !== "production") {
            if (nextUnmaskedContext != null) {
              this._warnIfContextsDiffer(nextParentElement._context, nextUnmaskedContext);
            }
          }
          if (inst.componentWillReceiveProps) {
            inst.componentWillReceiveProps(nextProps, nextContext);
          }
        }
        var nextState = this._processPendingState(nextProps, nextContext);
        var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);
        if ("production" !== "production") {
          ("production" !== "production" ? warning(typeof shouldUpdate !== 'undefined', '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : null);
        }
        if (shouldUpdate) {
          this._pendingForceUpdate = false;
          this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
        } else {
          this._currentElement = nextParentElement;
          this._context = nextUnmaskedContext;
          inst.props = nextProps;
          inst.state = nextState;
          inst.context = nextContext;
        }
      },
      _processPendingState: function(props, context) {
        var inst = this._instance;
        var queue = this._pendingStateQueue;
        var replace = this._pendingReplaceState;
        this._pendingReplaceState = false;
        this._pendingStateQueue = null;
        if (!queue) {
          return inst.state;
        }
        if (replace && queue.length === 1) {
          return queue[0];
        }
        var nextState = assign({}, replace ? queue[0] : inst.state);
        for (var i = replace ? 1 : 0; i < queue.length; i++) {
          var partial = queue[i];
          assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
        }
        return nextState;
      },
      _performComponentUpdate: function(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
        var inst = this._instance;
        var prevProps = inst.props;
        var prevState = inst.state;
        var prevContext = inst.context;
        if (inst.componentWillUpdate) {
          inst.componentWillUpdate(nextProps, nextState, nextContext);
        }
        this._currentElement = nextElement;
        this._context = unmaskedContext;
        inst.props = nextProps;
        inst.state = nextState;
        inst.context = nextContext;
        this._updateRenderedComponent(transaction, unmaskedContext);
        if (inst.componentDidUpdate) {
          transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
        }
      },
      _updateRenderedComponent: function(transaction, context) {
        var prevComponentInstance = this._renderedComponent;
        var prevRenderedElement = prevComponentInstance._currentElement;
        var childContext = this._getValidatedChildContext();
        var nextRenderedElement = this._renderValidatedComponent(childContext);
        if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
          ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._mergeChildContext(context, childContext));
        } else {
          var thisID = this._rootNodeID;
          var prevComponentID = prevComponentInstance._rootNodeID;
          ReactReconciler.unmountComponent(prevComponentInstance);
          this._renderedComponent = this._instantiateReactComponent(nextRenderedElement, this._currentElement.type);
          var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, this._mergeChildContext(context, childContext));
          this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
        }
      },
      _replaceNodeWithMarkupByID: function(prevComponentID, nextMarkup) {
        ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
      },
      _renderValidatedComponentWithoutOwnerOrContext: function() {
        var inst = this._instance;
        var renderedComponent = inst.render();
        if ("production" !== "production") {
          if (typeof renderedComponent === 'undefined' && inst.render._isMockFunction) {
            renderedComponent = null;
          }
        }
        return renderedComponent;
      },
      _renderValidatedComponent: function(childContext) {
        var renderedComponent;
        var previousContext = ReactContext.current;
        ReactContext.current = this._mergeChildContext(this._currentElement._context, childContext);
        ReactCurrentOwner.current = this;
        try {
          renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
        } finally {
          ReactContext.current = previousContext;
          ReactCurrentOwner.current = null;
        }
        ("production" !== "production" ? invariant(renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent), '%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)));
        return renderedComponent;
      },
      attachRef: function(ref, component) {
        var inst = this.getPublicInstance();
        var refs = inst.refs === emptyObject ? (inst.refs = {}) : inst.refs;
        refs[ref] = component.getPublicInstance();
      },
      detachRef: function(ref) {
        var refs = this.getPublicInstance().refs;
        delete refs[ref];
      },
      getName: function() {
        var type = this._currentElement.type;
        var constructor = this._instance && this._instance.constructor;
        return (type.displayName || (constructor && constructor.displayName) || type.name || (constructor && constructor.name) || null);
      },
      getPublicInstance: function() {
        return this._instance;
      },
      _instantiateReactComponent: null
    };
    ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
      mountComponent: 'mountComponent',
      updateComponent: 'updateComponent',
      _renderValidatedComponent: '_renderValidatedComponent'
    });
    var ReactCompositeComponent = {Mixin: ReactCompositeComponentMixin};
    module.exports = ReactCompositeComponent;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactChildReconciler.js", ["npm:react@0.13.3/lib/ReactReconciler.js", "npm:react@0.13.3/lib/flattenChildren.js", "npm:react@0.13.3/lib/instantiateReactComponent.js", "npm:react@0.13.3/lib/shouldUpdateReactComponent.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactReconciler = require("npm:react@0.13.3/lib/ReactReconciler.js");
  var flattenChildren = require("npm:react@0.13.3/lib/flattenChildren.js");
  var instantiateReactComponent = require("npm:react@0.13.3/lib/instantiateReactComponent.js");
  var shouldUpdateReactComponent = require("npm:react@0.13.3/lib/shouldUpdateReactComponent.js");
  var ReactChildReconciler = {
    instantiateChildren: function(nestedChildNodes, transaction, context) {
      var children = flattenChildren(nestedChildNodes);
      for (var name in children) {
        if (children.hasOwnProperty(name)) {
          var child = children[name];
          var childInstance = instantiateReactComponent(child, null);
          children[name] = childInstance;
        }
      }
      return children;
    },
    updateChildren: function(prevChildren, nextNestedChildNodes, transaction, context) {
      var nextChildren = flattenChildren(nextNestedChildNodes);
      if (!nextChildren && !prevChildren) {
        return null;
      }
      var name;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        var prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild._currentElement;
        var nextElement = nextChildren[name];
        if (shouldUpdateReactComponent(prevElement, nextElement)) {
          ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
          nextChildren[name] = prevChild;
        } else {
          if (prevChild) {
            ReactReconciler.unmountComponent(prevChild, name);
          }
          var nextChildInstance = instantiateReactComponent(nextElement, null);
          nextChildren[name] = nextChildInstance;
        }
      }
      for (name in prevChildren) {
        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
          ReactReconciler.unmountComponent(prevChildren[name]);
        }
      }
      return nextChildren;
    },
    unmountChildren: function(renderedChildren) {
      for (var name in renderedChildren) {
        var renderedChild = renderedChildren[name];
        ReactReconciler.unmountComponent(renderedChild);
      }
    }
  };
  module.exports = ReactChildReconciler;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/FallbackCompositionState.js", ["npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/getTextContentAccessor.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  var getTextContentAccessor = require("npm:react@0.13.3/lib/getTextContentAccessor.js");
  function FallbackCompositionState(root) {
    this._root = root;
    this._startText = this.getText();
    this._fallbackText = null;
  }
  assign(FallbackCompositionState.prototype, {
    getText: function() {
      if ('value' in this._root) {
        return this._root.value;
      }
      return this._root[getTextContentAccessor()];
    },
    getData: function() {
      if (this._fallbackText) {
        return this._fallbackText;
      }
      var start;
      var startValue = this._startText;
      var startLength = startValue.length;
      var end;
      var endValue = this.getText();
      var endLength = endValue.length;
      for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
          break;
        }
      }
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
          break;
        }
      }
      var sliceTail = end > 1 ? 1 - end : undefined;
      this._fallbackText = endValue.slice(start, sliceTail);
      return this._fallbackText;
    }
  });
  PooledClass.addPoolingTo(FallbackCompositionState);
  module.exports = FallbackCompositionState;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticEvent.js", ["npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/emptyFunction.js", "npm:react@0.13.3/lib/getEventTarget.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  var emptyFunction = require("npm:react@0.13.3/lib/emptyFunction.js");
  var getEventTarget = require("npm:react@0.13.3/lib/getEventTarget.js");
  var EventInterface = {
    type: null,
    target: getEventTarget,
    currentTarget: emptyFunction.thatReturnsNull,
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: null,
    isTrusted: null
  };
  function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    this.dispatchConfig = dispatchConfig;
    this.dispatchMarker = dispatchMarker;
    this.nativeEvent = nativeEvent;
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (!Interface.hasOwnProperty(propName)) {
        continue;
      }
      var normalize = Interface[propName];
      if (normalize) {
        this[propName] = normalize(nativeEvent);
      } else {
        this[propName] = nativeEvent[propName];
      }
    }
    var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
    if (defaultPrevented) {
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    } else {
      this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
    }
    this.isPropagationStopped = emptyFunction.thatReturnsFalse;
  }
  assign(SyntheticEvent.prototype, {
    preventDefault: function() {
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    },
    stopPropagation: function() {
      var event = this.nativeEvent;
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
      this.isPropagationStopped = emptyFunction.thatReturnsTrue;
    },
    persist: function() {
      this.isPersistent = emptyFunction.thatReturnsTrue;
    },
    isPersistent: emptyFunction.thatReturnsFalse,
    destructor: function() {
      var Interface = this.constructor.Interface;
      for (var propName in Interface) {
        this[propName] = null;
      }
      this.dispatchConfig = null;
      this.dispatchMarker = null;
      this.nativeEvent = null;
    }
  });
  SyntheticEvent.Interface = EventInterface;
  SyntheticEvent.augmentClass = function(Class, Interface) {
    var Super = this;
    var prototype = Object.create(Super.prototype);
    assign(prototype, Class.prototype);
    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.Interface = assign({}, Super.Interface, Interface);
    Class.augmentClass = Super.augmentClass;
    PooledClass.addPoolingTo(Class, PooledClass.threeArgumentPooler);
  };
  PooledClass.addPoolingTo(SyntheticEvent, PooledClass.threeArgumentPooler);
  module.exports = SyntheticEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ChangeEventPlugin.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/EventPluginHub.js", "npm:react@0.13.3/lib/EventPropagators.js", "npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/SyntheticEvent.js", "npm:react@0.13.3/lib/isEventSupported.js", "npm:react@0.13.3/lib/isTextInputElement.js", "npm:react@0.13.3/lib/keyOf.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
    var EventPluginHub = require("npm:react@0.13.3/lib/EventPluginHub.js");
    var EventPropagators = require("npm:react@0.13.3/lib/EventPropagators.js");
    var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
    var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
    var SyntheticEvent = require("npm:react@0.13.3/lib/SyntheticEvent.js");
    var isEventSupported = require("npm:react@0.13.3/lib/isEventSupported.js");
    var isTextInputElement = require("npm:react@0.13.3/lib/isTextInputElement.js");
    var keyOf = require("npm:react@0.13.3/lib/keyOf.js");
    var topLevelTypes = EventConstants.topLevelTypes;
    var eventTypes = {change: {
        phasedRegistrationNames: {
          bubbled: keyOf({onChange: null}),
          captured: keyOf({onChangeCapture: null})
        },
        dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
      }};
    var activeElement = null;
    var activeElementID = null;
    var activeElementValue = null;
    var activeElementValueProp = null;
    function shouldUseChangeEvent(elem) {
      return (elem.nodeName === 'SELECT' || (elem.nodeName === 'INPUT' && elem.type === 'file'));
    }
    var doesChangeEventBubble = false;
    if (ExecutionEnvironment.canUseDOM) {
      doesChangeEventBubble = isEventSupported('change') && ((!('documentMode' in document) || document.documentMode > 8));
    }
    function manualDispatchChangeEvent(nativeEvent) {
      var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent);
      EventPropagators.accumulateTwoPhaseDispatches(event);
      ReactUpdates.batchedUpdates(runEventInBatch, event);
    }
    function runEventInBatch(event) {
      EventPluginHub.enqueueEvents(event);
      EventPluginHub.processEventQueue();
    }
    function startWatchingForChangeEventIE8(target, targetID) {
      activeElement = target;
      activeElementID = targetID;
      activeElement.attachEvent('onchange', manualDispatchChangeEvent);
    }
    function stopWatchingForChangeEventIE8() {
      if (!activeElement) {
        return;
      }
      activeElement.detachEvent('onchange', manualDispatchChangeEvent);
      activeElement = null;
      activeElementID = null;
    }
    function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topChange) {
        return topLevelTargetID;
      }
    }
    function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topFocus) {
        stopWatchingForChangeEventIE8();
        startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
      } else if (topLevelType === topLevelTypes.topBlur) {
        stopWatchingForChangeEventIE8();
      }
    }
    var isInputEventSupported = false;
    if (ExecutionEnvironment.canUseDOM) {
      isInputEventSupported = isEventSupported('input') && ((!('documentMode' in document) || document.documentMode > 9));
    }
    var newValueProp = {
      get: function() {
        return activeElementValueProp.get.call(this);
      },
      set: function(val) {
        activeElementValue = '' + val;
        activeElementValueProp.set.call(this, val);
      }
    };
    function startWatchingForValueChange(target, targetID) {
      activeElement = target;
      activeElementID = targetID;
      activeElementValue = target.value;
      activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');
      Object.defineProperty(activeElement, 'value', newValueProp);
      activeElement.attachEvent('onpropertychange', handlePropertyChange);
    }
    function stopWatchingForValueChange() {
      if (!activeElement) {
        return;
      }
      delete activeElement.value;
      activeElement.detachEvent('onpropertychange', handlePropertyChange);
      activeElement = null;
      activeElementID = null;
      activeElementValue = null;
      activeElementValueProp = null;
    }
    function handlePropertyChange(nativeEvent) {
      if (nativeEvent.propertyName !== 'value') {
        return;
      }
      var value = nativeEvent.srcElement.value;
      if (value === activeElementValue) {
        return;
      }
      activeElementValue = value;
      manualDispatchChangeEvent(nativeEvent);
    }
    function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topInput) {
        return topLevelTargetID;
      }
    }
    function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topFocus) {
        stopWatchingForValueChange();
        startWatchingForValueChange(topLevelTarget, topLevelTargetID);
      } else if (topLevelType === topLevelTypes.topBlur) {
        stopWatchingForValueChange();
      }
    }
    function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
        if (activeElement && activeElement.value !== activeElementValue) {
          activeElementValue = activeElement.value;
          return activeElementID;
        }
      }
    }
    function shouldUseClickEvent(elem) {
      return (elem.nodeName === 'INPUT' && (elem.type === 'checkbox' || elem.type === 'radio'));
    }
    function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topClick) {
        return topLevelTargetID;
      }
    }
    var ChangeEventPlugin = {
      eventTypes: eventTypes,
      extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
        var getTargetIDFunc,
            handleEventFunc;
        if (shouldUseChangeEvent(topLevelTarget)) {
          if (doesChangeEventBubble) {
            getTargetIDFunc = getTargetIDForChangeEvent;
          } else {
            handleEventFunc = handleEventsForChangeEventIE8;
          }
        } else if (isTextInputElement(topLevelTarget)) {
          if (isInputEventSupported) {
            getTargetIDFunc = getTargetIDForInputEvent;
          } else {
            getTargetIDFunc = getTargetIDForInputEventIE;
            handleEventFunc = handleEventsForInputEventIE;
          }
        } else if (shouldUseClickEvent(topLevelTarget)) {
          getTargetIDFunc = getTargetIDForClickEvent;
        }
        if (getTargetIDFunc) {
          var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
          if (targetID) {
            var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent);
            EventPropagators.accumulateTwoPhaseDispatches(event);
            return event;
          }
        }
        if (handleEventFunc) {
          handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
        }
      }
    };
    module.exports = ChangeEventPlugin;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticMouseEvent.js", ["npm:react@0.13.3/lib/SyntheticUIEvent.js", "npm:react@0.13.3/lib/ViewportMetrics.js", "npm:react@0.13.3/lib/getEventModifierState.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticUIEvent = require("npm:react@0.13.3/lib/SyntheticUIEvent.js");
  var ViewportMetrics = require("npm:react@0.13.3/lib/ViewportMetrics.js");
  var getEventModifierState = require("npm:react@0.13.3/lib/getEventModifierState.js");
  var MouseEventInterface = {
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: getEventModifierState,
    button: function(event) {
      var button = event.button;
      if ('which' in event) {
        return button;
      }
      return button === 2 ? 2 : button === 4 ? 1 : 0;
    },
    buttons: null,
    relatedTarget: function(event) {
      return event.relatedTarget || (((event.fromElement === event.srcElement ? event.toElement : event.fromElement)));
    },
    pageX: function(event) {
      return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
    },
    pageY: function(event) {
      return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
    }
  };
  function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
  module.exports = SyntheticMouseEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", ["npm:react@0.13.3/lib/findDOMNode.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var findDOMNode = require("npm:react@0.13.3/lib/findDOMNode.js");
  var ReactBrowserComponentMixin = {getDOMNode: function() {
      return findDOMNode(this);
    }};
  module.exports = ReactBrowserComponentMixin;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/AutoFocusMixin.js", ["npm:react@0.13.3/lib/focusNode.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var focusNode = require("npm:react@0.13.3/lib/focusNode.js");
  var AutoFocusMixin = {componentDidMount: function() {
      if (this.props.autoFocus) {
        focusNode(this.getDOMNode());
      }
    }};
  module.exports = AutoFocusMixin;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMForm.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/LocalEventTrapMixin.js", "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
  var LocalEventTrapMixin = require("npm:react@0.13.3/lib/LocalEventTrapMixin.js");
  var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
  var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
  var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
  var form = ReactElement.createFactory('form');
  var ReactDOMForm = ReactClass.createClass({
    displayName: 'ReactDOMForm',
    tagName: 'FORM',
    mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],
    render: function() {
      return form(this.props);
    },
    componentDidMount: function() {
      this.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset');
      this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit');
    }
  });
  module.exports = ReactDOMForm;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/LinkedValueUtils.js", ["npm:react@0.13.3/lib/ReactPropTypes.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactPropTypes = require("npm:react@0.13.3/lib/ReactPropTypes.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var hasReadOnlyValue = {
      'button': true,
      'checkbox': true,
      'image': true,
      'hidden': true,
      'radio': true,
      'reset': true,
      'submit': true
    };
    function _assertSingleLink(input) {
      ("production" !== "production" ? invariant(input.props.checkedLink == null || input.props.valueLink == null, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(input.props.checkedLink == null || input.props.valueLink == null));
    }
    function _assertValueLink(input) {
      _assertSingleLink(input);
      ("production" !== "production" ? invariant(input.props.value == null && input.props.onChange == null, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(input.props.value == null && input.props.onChange == null));
    }
    function _assertCheckedLink(input) {
      _assertSingleLink(input);
      ("production" !== "production" ? invariant(input.props.checked == null && input.props.onChange == null, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(input.props.checked == null && input.props.onChange == null));
    }
    function _handleLinkedValueChange(e) {
      this.props.valueLink.requestChange(e.target.value);
    }
    function _handleLinkedCheckChange(e) {
      this.props.checkedLink.requestChange(e.target.checked);
    }
    var LinkedValueUtils = {
      Mixin: {propTypes: {
          value: function(props, propName, componentName) {
            if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
              return null;
            }
            return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
          },
          checked: function(props, propName, componentName) {
            if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
              return null;
            }
            return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
          },
          onChange: ReactPropTypes.func
        }},
      getValue: function(input) {
        if (input.props.valueLink) {
          _assertValueLink(input);
          return input.props.valueLink.value;
        }
        return input.props.value;
      },
      getChecked: function(input) {
        if (input.props.checkedLink) {
          _assertCheckedLink(input);
          return input.props.checkedLink.value;
        }
        return input.props.checked;
      },
      getOnChange: function(input) {
        if (input.props.valueLink) {
          _assertValueLink(input);
          return _handleLinkedValueChange;
        } else if (input.props.checkedLink) {
          _assertCheckedLink(input);
          return _handleLinkedCheckChange;
        }
        return input.props.onChange;
      }
    };
    module.exports = LinkedValueUtils;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactEventListener.js", ["npm:react@0.13.3/lib/EventListener.js", "npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/ReactInstanceHandles.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/getEventTarget.js", "npm:react@0.13.3/lib/getUnboundedScrollPosition.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventListener = require("npm:react@0.13.3/lib/EventListener.js");
    var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
    var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
    var ReactInstanceHandles = require("npm:react@0.13.3/lib/ReactInstanceHandles.js");
    var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
    var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var getEventTarget = require("npm:react@0.13.3/lib/getEventTarget.js");
    var getUnboundedScrollPosition = require("npm:react@0.13.3/lib/getUnboundedScrollPosition.js");
    function findParent(node) {
      var nodeID = ReactMount.getID(node);
      var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
      var container = ReactMount.findReactContainerForID(rootID);
      var parent = ReactMount.getFirstReactDOM(container);
      return parent;
    }
    function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
      this.topLevelType = topLevelType;
      this.nativeEvent = nativeEvent;
      this.ancestors = [];
    }
    assign(TopLevelCallbackBookKeeping.prototype, {destructor: function() {
        this.topLevelType = null;
        this.nativeEvent = null;
        this.ancestors.length = 0;
      }});
    PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
    function handleTopLevelImpl(bookKeeping) {
      var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;
      var ancestor = topLevelTarget;
      while (ancestor) {
        bookKeeping.ancestors.push(ancestor);
        ancestor = findParent(ancestor);
      }
      for (var i = 0,
          l = bookKeeping.ancestors.length; i < l; i++) {
        topLevelTarget = bookKeeping.ancestors[i];
        var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
        ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent);
      }
    }
    function scrollValueMonitor(cb) {
      var scrollPosition = getUnboundedScrollPosition(window);
      cb(scrollPosition);
    }
    var ReactEventListener = {
      _enabled: true,
      _handleTopLevel: null,
      WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
      setHandleTopLevel: function(handleTopLevel) {
        ReactEventListener._handleTopLevel = handleTopLevel;
      },
      setEnabled: function(enabled) {
        ReactEventListener._enabled = !!enabled;
      },
      isEnabled: function() {
        return ReactEventListener._enabled;
      },
      trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
        var element = handle;
        if (!element) {
          return null;
        }
        return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
      },
      trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
        var element = handle;
        if (!element) {
          return null;
        }
        return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
      },
      monitorScrollValue: function(refresh) {
        var callback = scrollValueMonitor.bind(null, refresh);
        EventListener.listen(window, 'scroll', callback);
      },
      dispatchEvent: function(topLevelType, nativeEvent) {
        if (!ReactEventListener._enabled) {
          return;
        }
        var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
        try {
          ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
        } finally {
          TopLevelCallbackBookKeeping.release(bookKeeping);
        }
      }
    };
    module.exports = ReactEventListener;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMSelection.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/getNodeForCharacterOffset.js", "npm:react@0.13.3/lib/getTextContentAccessor.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
  var getNodeForCharacterOffset = require("npm:react@0.13.3/lib/getNodeForCharacterOffset.js");
  var getTextContentAccessor = require("npm:react@0.13.3/lib/getTextContentAccessor.js");
  function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
    return anchorNode === focusNode && anchorOffset === focusOffset;
  }
  function getIEOffsets(node) {
    var selection = document.selection;
    var selectedRange = selection.createRange();
    var selectedLength = selectedRange.text.length;
    var fromStart = selectedRange.duplicate();
    fromStart.moveToElementText(node);
    fromStart.setEndPoint('EndToStart', selectedRange);
    var startOffset = fromStart.text.length;
    var endOffset = startOffset + selectedLength;
    return {
      start: startOffset,
      end: endOffset
    };
  }
  function getModernOffsets(node) {
    var selection = window.getSelection && window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    var anchorNode = selection.anchorNode;
    var anchorOffset = selection.anchorOffset;
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset;
    var currentRange = selection.getRangeAt(0);
    var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
    var tempRange = currentRange.cloneRange();
    tempRange.selectNodeContents(node);
    tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
    var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
    var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
    var end = start + rangeLength;
    var detectionRange = document.createRange();
    detectionRange.setStart(anchorNode, anchorOffset);
    detectionRange.setEnd(focusNode, focusOffset);
    var isBackward = detectionRange.collapsed;
    return {
      start: isBackward ? end : start,
      end: isBackward ? start : end
    };
  }
  function setIEOffsets(node, offsets) {
    var range = document.selection.createRange().duplicate();
    var start,
        end;
    if (typeof offsets.end === 'undefined') {
      start = offsets.start;
      end = start;
    } else if (offsets.start > offsets.end) {
      start = offsets.end;
      end = offsets.start;
    } else {
      start = offsets.start;
      end = offsets.end;
    }
    range.moveToElementText(node);
    range.moveStart('character', start);
    range.setEndPoint('EndToStart', range);
    range.moveEnd('character', end - start);
    range.select();
  }
  function setModernOffsets(node, offsets) {
    if (!window.getSelection) {
      return;
    }
    var selection = window.getSelection();
    var length = node[getTextContentAccessor()].length;
    var start = Math.min(offsets.start, length);
    var end = typeof offsets.end === 'undefined' ? start : Math.min(offsets.end, length);
    if (!selection.extend && start > end) {
      var temp = end;
      end = start;
      start = temp;
    }
    var startMarker = getNodeForCharacterOffset(node, start);
    var endMarker = getNodeForCharacterOffset(node, end);
    if (startMarker && endMarker) {
      var range = document.createRange();
      range.setStart(startMarker.node, startMarker.offset);
      selection.removeAllRanges();
      if (start > end) {
        selection.addRange(range);
        selection.extend(endMarker.node, endMarker.offset);
      } else {
        range.setEnd(endMarker.node, endMarker.offset);
        selection.addRange(range);
      }
    }
  }
  var useIEOffsets = (ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window));
  var ReactDOMSelection = {
    getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
    setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
  };
  module.exports = ReactDOMSelection;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SelectEventPlugin.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/EventPropagators.js", "npm:react@0.13.3/lib/ReactInputSelection.js", "npm:react@0.13.3/lib/SyntheticEvent.js", "npm:react@0.13.3/lib/getActiveElement.js", "npm:react@0.13.3/lib/isTextInputElement.js", "npm:react@0.13.3/lib/keyOf.js", "npm:react@0.13.3/lib/shallowEqual.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
  var EventPropagators = require("npm:react@0.13.3/lib/EventPropagators.js");
  var ReactInputSelection = require("npm:react@0.13.3/lib/ReactInputSelection.js");
  var SyntheticEvent = require("npm:react@0.13.3/lib/SyntheticEvent.js");
  var getActiveElement = require("npm:react@0.13.3/lib/getActiveElement.js");
  var isTextInputElement = require("npm:react@0.13.3/lib/isTextInputElement.js");
  var keyOf = require("npm:react@0.13.3/lib/keyOf.js");
  var shallowEqual = require("npm:react@0.13.3/lib/shallowEqual.js");
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {select: {
      phasedRegistrationNames: {
        bubbled: keyOf({onSelect: null}),
        captured: keyOf({onSelectCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
    }};
  var activeElement = null;
  var activeElementID = null;
  var lastSelection = null;
  var mouseDown = false;
  function getSelection(node) {
    if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
      return {
        start: node.selectionStart,
        end: node.selectionEnd
      };
    } else if (window.getSelection) {
      var selection = window.getSelection();
      return {
        anchorNode: selection.anchorNode,
        anchorOffset: selection.anchorOffset,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset
      };
    } else if (document.selection) {
      var range = document.selection.createRange();
      return {
        parentElement: range.parentElement(),
        text: range.text,
        top: range.boundingTop,
        left: range.boundingLeft
      };
    }
  }
  function constructSelectEvent(nativeEvent) {
    if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
      return null;
    }
    var currentSelection = getSelection(activeElement);
    if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
      lastSelection = currentSelection;
      var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent);
      syntheticEvent.type = 'select';
      syntheticEvent.target = activeElement;
      EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
      return syntheticEvent;
    }
  }
  var SelectEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      switch (topLevelType) {
        case topLevelTypes.topFocus:
          if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true') {
            activeElement = topLevelTarget;
            activeElementID = topLevelTargetID;
            lastSelection = null;
          }
          break;
        case topLevelTypes.topBlur:
          activeElement = null;
          activeElementID = null;
          lastSelection = null;
          break;
        case topLevelTypes.topMouseDown:
          mouseDown = true;
          break;
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topMouseUp:
          mouseDown = false;
          return constructSelectEvent(nativeEvent);
        case topLevelTypes.topSelectionChange:
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          return constructSelectEvent(nativeEvent);
      }
    }
  };
  module.exports = SelectEventPlugin;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticKeyboardEvent.js", ["npm:react@0.13.3/lib/SyntheticUIEvent.js", "npm:react@0.13.3/lib/getEventCharCode.js", "npm:react@0.13.3/lib/getEventKey.js", "npm:react@0.13.3/lib/getEventModifierState.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticUIEvent = require("npm:react@0.13.3/lib/SyntheticUIEvent.js");
  var getEventCharCode = require("npm:react@0.13.3/lib/getEventCharCode.js");
  var getEventKey = require("npm:react@0.13.3/lib/getEventKey.js");
  var getEventModifierState = require("npm:react@0.13.3/lib/getEventModifierState.js");
  var KeyboardEventInterface = {
    key: getEventKey,
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: getEventModifierState,
    charCode: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      return 0;
    },
    keyCode: function(event) {
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    },
    which: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    }
  };
  function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
  module.exports = SyntheticKeyboardEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/performanceNow.js", ["npm:react@0.13.3/lib/performance.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var performance = require("npm:react@0.13.3/lib/performance.js");
  if (!performance || !performance.now) {
    performance = Date;
  }
  var performanceNow = performance.now.bind(performance);
  module.exports = performanceNow;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactServerRendering.js", ["npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactInstanceHandles.js", "npm:react@0.13.3/lib/ReactMarkupChecksum.js", "npm:react@0.13.3/lib/ReactServerRenderingTransaction.js", "npm:react@0.13.3/lib/emptyObject.js", "npm:react@0.13.3/lib/instantiateReactComponent.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactInstanceHandles = require("npm:react@0.13.3/lib/ReactInstanceHandles.js");
    var ReactMarkupChecksum = require("npm:react@0.13.3/lib/ReactMarkupChecksum.js");
    var ReactServerRenderingTransaction = require("npm:react@0.13.3/lib/ReactServerRenderingTransaction.js");
    var emptyObject = require("npm:react@0.13.3/lib/emptyObject.js");
    var instantiateReactComponent = require("npm:react@0.13.3/lib/instantiateReactComponent.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function renderToString(element) {
      ("production" !== "production" ? invariant(ReactElement.isValidElement(element), 'renderToString(): You must pass a valid ReactElement.') : invariant(ReactElement.isValidElement(element)));
      var transaction;
      try {
        var id = ReactInstanceHandles.createReactRootID();
        transaction = ReactServerRenderingTransaction.getPooled(false);
        return transaction.perform(function() {
          var componentInstance = instantiateReactComponent(element, null);
          var markup = componentInstance.mountComponent(id, transaction, emptyObject);
          return ReactMarkupChecksum.addChecksumToMarkup(markup);
        }, null);
      } finally {
        ReactServerRenderingTransaction.release(transaction);
      }
    }
    function renderToStaticMarkup(element) {
      ("production" !== "production" ? invariant(ReactElement.isValidElement(element), 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(ReactElement.isValidElement(element)));
      var transaction;
      try {
        var id = ReactInstanceHandles.createReactRootID();
        transaction = ReactServerRenderingTransaction.getPooled(true);
        return transaction.perform(function() {
          var componentInstance = instantiateReactComponent(element, null);
          return componentInstance.mountComponent(id, transaction, emptyObject);
        }, null);
      } finally {
        ReactServerRenderingTransaction.release(transaction);
      }
    }
    module.exports = {
      renderToString: renderToString,
      renderToStaticMarkup: renderToStaticMarkup
    };
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.js", ["npm:core-js@0.9.18/library/modules/$.fw.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var global = typeof self != 'undefined' ? self : Function('return this')(),
      core = {},
      defineProperty = Object.defineProperty,
      hasOwnProperty = {}.hasOwnProperty,
      ceil = Math.ceil,
      floor = Math.floor,
      max = Math.max,
      min = Math.min;
  var DESC = !!function() {
    try {
      return defineProperty({}, 'a', {get: function() {
          return 2;
        }}).a == 2;
    } catch (e) {}
  }();
  var hide = createDefiner(1);
  function toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  }
  function desc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  }
  function simpleSet(object, key, value) {
    object[key] = value;
    return object;
  }
  function createDefiner(bitmap) {
    return DESC ? function(object, key, value) {
      return $.setDesc(object, key, desc(bitmap, value));
    } : simpleSet;
  }
  function isObject(it) {
    return it !== null && (typeof it == 'object' || typeof it == 'function');
  }
  function isFunction(it) {
    return typeof it == 'function';
  }
  function assertDefined(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  }
  var $ = module.exports = require("npm:core-js@0.9.18/library/modules/$.fw.js")({
    g: global,
    core: core,
    html: global.document && document.documentElement,
    isObject: isObject,
    isFunction: isFunction,
    that: function() {
      return this;
    },
    toInteger: toInteger,
    toLength: function(it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
    },
    toIndex: function(index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    },
    has: function(it, key) {
      return hasOwnProperty.call(it, key);
    },
    create: Object.create,
    getProto: Object.getPrototypeOf,
    DESC: DESC,
    desc: desc,
    getDesc: Object.getOwnPropertyDescriptor,
    setDesc: defineProperty,
    setDescs: Object.defineProperties,
    getKeys: Object.keys,
    getNames: Object.getOwnPropertyNames,
    getSymbols: Object.getOwnPropertySymbols,
    assertDefined: assertDefined,
    ES5Object: Object,
    toObject: function(it) {
      return $.ES5Object(assertDefined(it));
    },
    hide: hide,
    def: createDefiner(0),
    set: global.Symbol ? simpleSet : hide,
    each: [].forEach
  });
  if (typeof __e != 'undefined')
    __e = core;
  if (typeof __g != 'undefined')
    __g = global;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/es6.object.statics-accept-primitives.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.def.js", "npm:core-js@0.9.18/library/modules/$.get-names.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      $def = require("npm:core-js@0.9.18/library/modules/$.def.js"),
      isObject = $.isObject,
      toObject = $.toObject;
  $.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' + 'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(','), function(KEY, ID) {
    var fn = ($.core.Object || {})[KEY] || Object[KEY],
        forced = 0,
        method = {};
    method[KEY] = ID == 0 ? function freeze(it) {
      return isObject(it) ? fn(it) : it;
    } : ID == 1 ? function seal(it) {
      return isObject(it) ? fn(it) : it;
    } : ID == 2 ? function preventExtensions(it) {
      return isObject(it) ? fn(it) : it;
    } : ID == 3 ? function isFrozen(it) {
      return isObject(it) ? fn(it) : true;
    } : ID == 4 ? function isSealed(it) {
      return isObject(it) ? fn(it) : true;
    } : ID == 5 ? function isExtensible(it) {
      return isObject(it) ? fn(it) : false;
    } : ID == 6 ? function getOwnPropertyDescriptor(it, key) {
      return fn(toObject(it), key);
    } : ID == 7 ? function getPrototypeOf(it) {
      return fn(Object($.assertDefined(it)));
    } : ID == 8 ? function keys(it) {
      return fn(toObject(it));
    } : require("npm:core-js@0.9.18/library/modules/$.get-names.js").get;
    try {
      fn('z');
    } catch (e) {
      forced = 1;
    }
    $def($def.S + $def.F * forced, 'Object', method);
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/core-js/object/create.js", ["npm:core-js@0.9.18/library/fn/object/create.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.18/library/fn/object/create.js"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.set-proto.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.assert.js", "npm:core-js@0.9.18/library/modules/$.ctx.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      assert = require("npm:core-js@0.9.18/library/modules/$.assert.js");
  function check(O, proto) {
    assert.obj(O);
    assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
  }
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(buggy, set) {
      try {
        set = require("npm:core-js@0.9.18/library/modules/$.ctx.js")(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
        set({}, []);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }() : undefined),
    check: check
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/core-js/object/define-property.js", ["npm:core-js@0.9.18/library/fn/object/define-property.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.18/library/fn/object/define-property.js"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:querystring@0.2.0/index.js", ["npm:querystring@0.2.0/decode.js", "npm:querystring@0.2.0/encode.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  exports.decode = exports.parse = require("npm:querystring@0.2.0/decode.js");
  exports.encode = exports.stringify = require("npm:querystring@0.2.0/encode.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3/index.js", ["npm:rx@2.5.3/dist/rx.js", "npm:rx@2.5.3/dist/rx.aggregates.js", "npm:rx@2.5.3/dist/rx.async.js", "npm:rx@2.5.3/dist/rx.backpressure.js", "npm:rx@2.5.3/dist/rx.binding.js", "npm:rx@2.5.3/dist/rx.coincidence.js", "npm:rx@2.5.3/dist/rx.experimental.js", "npm:rx@2.5.3/dist/rx.joinpatterns.js", "npm:rx@2.5.3/dist/rx.sorting.js", "npm:rx@2.5.3/dist/rx.virtualtime.js", "npm:rx@2.5.3/dist/rx.testing.js", "npm:rx@2.5.3/dist/rx.time.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Rx = require("npm:rx@2.5.3/dist/rx.js");
  require("npm:rx@2.5.3/dist/rx.aggregates.js");
  require("npm:rx@2.5.3/dist/rx.async.js");
  require("npm:rx@2.5.3/dist/rx.backpressure.js");
  require("npm:rx@2.5.3/dist/rx.binding.js");
  require("npm:rx@2.5.3/dist/rx.coincidence.js");
  require("npm:rx@2.5.3/dist/rx.experimental.js");
  require("npm:rx@2.5.3/dist/rx.joinpatterns.js");
  require("npm:rx@2.5.3/dist/rx.sorting.js");
  require("npm:rx@2.5.3/dist/rx.virtualtime.js");
  require("npm:rx@2.5.3/dist/rx.testing.js");
  require("npm:rx@2.5.3/dist/rx.time.js");
  module.exports = Rx;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.assign.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.enum-keys.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      enumKeys = require("npm:core-js@0.9.18/library/modules/$.enum-keys.js");
  module.exports = Object.assign || function assign(target, source) {
    var T = Object($.assertDefined(target)),
        l = arguments.length,
        i = 1;
    while (l > i) {
      var S = $.ES5Object(arguments[i++]),
          keys = enumKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j)
        T[key = keys[j++]] = S[key];
    }
    return T;
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.wks.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.shared.js", "npm:core-js@0.9.18/library/modules/$.uid.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var global = require("npm:core-js@0.9.18/library/modules/$.js").g,
      store = require("npm:core-js@0.9.18/library/modules/$.shared.js")('wks');
  module.exports = function(name) {
    return store[name] || (store[name] = global.Symbol && global.Symbol[name] || require("npm:core-js@0.9.18/library/modules/$.uid.js").safe('Symbol.' + name));
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/es6.string.iterator.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.string-at.js", "npm:core-js@0.9.18/library/modules/$.uid.js", "npm:core-js@0.9.18/library/modules/$.iter.js", "npm:core-js@0.9.18/library/modules/$.iter-define.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var set = require("npm:core-js@0.9.18/library/modules/$.js").set,
      $at = require("npm:core-js@0.9.18/library/modules/$.string-at.js")(true),
      ITER = require("npm:core-js@0.9.18/library/modules/$.uid.js").safe('iter'),
      $iter = require("npm:core-js@0.9.18/library/modules/$.iter.js"),
      step = $iter.step;
  require("npm:core-js@0.9.18/library/modules/$.iter-define.js")(String, 'String', function(iterated) {
    set(this, ITER, {
      o: String(iterated),
      i: 0
    });
  }, function() {
    var iter = this[ITER],
        O = iter.o,
        index = iter.i,
        point;
    if (index >= O.length)
      return step(1);
    point = $at(O, index);
    iter.i += point.length;
    return step(0, point);
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/es6.array.iterator.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.unscope.js", "npm:core-js@0.9.18/library/modules/$.uid.js", "npm:core-js@0.9.18/library/modules/$.iter.js", "npm:core-js@0.9.18/library/modules/$.iter-define.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      setUnscope = require("npm:core-js@0.9.18/library/modules/$.unscope.js"),
      ITER = require("npm:core-js@0.9.18/library/modules/$.uid.js").safe('iter'),
      $iter = require("npm:core-js@0.9.18/library/modules/$.iter.js"),
      step = $iter.step,
      Iterators = $iter.Iterators;
  require("npm:core-js@0.9.18/library/modules/$.iter-define.js")(Array, 'Array', function(iterated, kind) {
    $.set(this, ITER, {
      o: $.toObject(iterated),
      i: 0,
      k: kind
    });
  }, function() {
    var iter = this[ITER],
        O = iter.o,
        kind = iter.k,
        index = iter.i++;
    if (!O || index >= O.length) {
      iter.o = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  setUnscope('keys');
  setUnscope('values');
  setUnscope('entries');
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.for-of.js", ["npm:core-js@0.9.18/library/modules/$.ctx.js", "npm:core-js@0.9.18/library/modules/$.iter.js", "npm:core-js@0.9.18/library/modules/$.iter-call.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var ctx = require("npm:core-js@0.9.18/library/modules/$.ctx.js"),
      get = require("npm:core-js@0.9.18/library/modules/$.iter.js").get,
      call = require("npm:core-js@0.9.18/library/modules/$.iter-call.js");
  module.exports = function(iterable, entries, fn, that) {
    var iterator = get(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        step;
    while (!(step = iterator.next()).done) {
      if (call(iterator, f, step.value, entries) === false) {
        return call.close(iterator);
      }
    }
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.task.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.ctx.js", "npm:core-js@0.9.18/library/modules/$.cof.js", "npm:core-js@0.9.18/library/modules/$.invoke.js", "npm:core-js@0.9.18/library/modules/$.dom-create.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
        ctx = require("npm:core-js@0.9.18/library/modules/$.ctx.js"),
        cof = require("npm:core-js@0.9.18/library/modules/$.cof.js"),
        invoke = require("npm:core-js@0.9.18/library/modules/$.invoke.js"),
        cel = require("npm:core-js@0.9.18/library/modules/$.dom-create.js"),
        global = $.g,
        isFunction = $.isFunction,
        html = $.html,
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    function run() {
      var id = +this;
      if ($.has(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    }
    function listner(event) {
      run.call(event.data);
    }
    if (!isFunction(setTask) || !isFunction(clearTask)) {
      setTask = function(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(isFunction(fn) ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function(id) {
        delete queue[id];
      };
      if (cof(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (global.addEventListener && isFunction(global.postMessage) && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id, '*');
        };
        global.addEventListener('message', listner, false);
      } else if (isFunction(MessageChannel)) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:ms@0.7.0.js", ["npm:ms@0.7.0/index.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:ms@0.7.0/index.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.1/index.js", ["npm:process@0.10.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : require("npm:process@0.10.1.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactContext.js", ["npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/emptyObject.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var emptyObject = require("npm:react@0.13.3/lib/emptyObject.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var didWarn = false;
    var ReactContext = {
      current: emptyObject,
      withContext: function(newContext, scopedCallback) {
        if ("production" !== "production") {
          ("production" !== "production" ? warning(didWarn, 'withContext is deprecated and will be removed in a future version. ' + 'Use a wrapper component with getChildContext instead.') : null);
          didWarn = true;
        }
        var result;
        var previousContext = ReactContext.current;
        ReactContext.current = assign({}, previousContext, newContext);
        try {
          result = scopedCallback();
        } finally {
          ReactContext.current = previousContext;
        }
        return result;
      }
    };
    module.exports = ReactContext;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/traverseAllChildren.js", ["npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactFragment.js", "npm:react@0.13.3/lib/ReactInstanceHandles.js", "npm:react@0.13.3/lib/getIteratorFn.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactFragment = require("npm:react@0.13.3/lib/ReactFragment.js");
    var ReactInstanceHandles = require("npm:react@0.13.3/lib/ReactInstanceHandles.js");
    var getIteratorFn = require("npm:react@0.13.3/lib/getIteratorFn.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var SEPARATOR = ReactInstanceHandles.SEPARATOR;
    var SUBSEPARATOR = ':';
    var userProvidedKeyEscaperLookup = {
      '=': '=0',
      '.': '=1',
      ':': '=2'
    };
    var userProvidedKeyEscapeRegex = /[=.:]/g;
    var didWarnAboutMaps = false;
    function userProvidedKeyEscaper(match) {
      return userProvidedKeyEscaperLookup[match];
    }
    function getComponentKey(component, index) {
      if (component && component.key != null) {
        return wrapUserProvidedKey(component.key);
      }
      return index.toString(36);
    }
    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
    }
    function wrapUserProvidedKey(key) {
      return '$' + escapeUserProvidedKey(key);
    }
    function traverseAllChildrenImpl(children, nameSoFar, indexSoFar, callback, traverseContext) {
      var type = typeof children;
      if (type === 'undefined' || type === 'boolean') {
        children = null;
      }
      if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
        callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar, indexSoFar);
        return 1;
      }
      var child,
          nextName,
          nextIndex;
      var subtreeCount = 0;
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = ((nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) + getComponentKey(child, i));
          nextIndex = indexSoFar + subtreeCount;
          subtreeCount += traverseAllChildrenImpl(child, nextName, nextIndex, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);
        if (iteratorFn) {
          var iterator = iteratorFn.call(children);
          var step;
          if (iteratorFn !== children.entries) {
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = ((nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) + getComponentKey(child, ii++));
              nextIndex = indexSoFar + subtreeCount;
              subtreeCount += traverseAllChildrenImpl(child, nextName, nextIndex, callback, traverseContext);
            }
          } else {
            if ("production" !== "production") {
              ("production" !== "production" ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : null);
              didWarnAboutMaps = true;
            }
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                child = entry[1];
                nextName = ((nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0));
                nextIndex = indexSoFar + subtreeCount;
                subtreeCount += traverseAllChildrenImpl(child, nextName, nextIndex, callback, traverseContext);
              }
            }
          }
        } else if (type === 'object') {
          ("production" !== "production" ? invariant(children.nodeType !== 1, 'traverseAllChildren(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(children.nodeType !== 1));
          var fragment = ReactFragment.extract(children);
          for (var key in fragment) {
            if (fragment.hasOwnProperty(key)) {
              child = fragment[key];
              nextName = ((nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) + wrapUserProvidedKey(key) + SUBSEPARATOR + getComponentKey(child, 0));
              nextIndex = indexSoFar + subtreeCount;
              subtreeCount += traverseAllChildrenImpl(child, nextName, nextIndex, callback, traverseContext);
            }
          }
        }
      }
      return subtreeCount;
    }
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }
      return traverseAllChildrenImpl(children, '', 0, callback, traverseContext);
    }
    module.exports = traverseAllChildren;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactReconciler.js", ["npm:react@0.13.3/lib/ReactRef.js", "npm:react@0.13.3/lib/ReactElementValidator.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactRef = require("npm:react@0.13.3/lib/ReactRef.js");
    var ReactElementValidator = require("npm:react@0.13.3/lib/ReactElementValidator.js");
    function attachRefs() {
      ReactRef.attachRefs(this, this._currentElement);
    }
    var ReactReconciler = {
      mountComponent: function(internalInstance, rootID, transaction, context) {
        var markup = internalInstance.mountComponent(rootID, transaction, context);
        if ("production" !== "production") {
          ReactElementValidator.checkAndWarnForMutatedProps(internalInstance._currentElement);
        }
        transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
        return markup;
      },
      unmountComponent: function(internalInstance) {
        ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
        internalInstance.unmountComponent();
      },
      receiveComponent: function(internalInstance, nextElement, transaction, context) {
        var prevElement = internalInstance._currentElement;
        if (nextElement === prevElement && nextElement._owner != null) {
          return;
        }
        if ("production" !== "production") {
          ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
        }
        var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
        if (refsChanged) {
          ReactRef.detachRefs(internalInstance, prevElement);
        }
        internalInstance.receiveComponent(nextElement, transaction, context);
        if (refsChanged) {
          transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
        }
      },
      performUpdateIfNecessary: function(internalInstance, transaction) {
        internalInstance.performUpdateIfNecessary(transaction);
      }
    };
    module.exports = ReactReconciler;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/DOMPropertyOperations.js", ["npm:react@0.13.3/lib/DOMProperty.js", "npm:react@0.13.3/lib/quoteAttributeValueForBrowser.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var DOMProperty = require("npm:react@0.13.3/lib/DOMProperty.js");
    var quoteAttributeValueForBrowser = require("npm:react@0.13.3/lib/quoteAttributeValueForBrowser.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    function shouldIgnoreValue(name, value) {
      return value == null || (DOMProperty.hasBooleanValue[name] && !value) || (DOMProperty.hasNumericValue[name] && isNaN(value)) || (DOMProperty.hasPositiveNumericValue[name] && (value < 1)) || (DOMProperty.hasOverloadedBooleanValue[name] && value === false);
    }
    if ("production" !== "production") {
      var reactProps = {
        children: true,
        dangerouslySetInnerHTML: true,
        key: true,
        ref: true
      };
      var warnedProperties = {};
      var warnUnknownProperty = function(name) {
        if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
          return;
        }
        warnedProperties[name] = true;
        var lowerCasedName = name.toLowerCase();
        var standardName = (DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null);
        ("production" !== "production" ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : null);
      };
    }
    var DOMPropertyOperations = {
      createMarkupForID: function(id) {
        return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
      },
      createMarkupForProperty: function(name, value) {
        if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
          if (shouldIgnoreValue(name, value)) {
            return '';
          }
          var attributeName = DOMProperty.getAttributeName[name];
          if (DOMProperty.hasBooleanValue[name] || (DOMProperty.hasOverloadedBooleanValue[name] && value === true)) {
            return attributeName;
          }
          return attributeName + '=' + quoteAttributeValueForBrowser(value);
        } else if (DOMProperty.isCustomAttribute(name)) {
          if (value == null) {
            return '';
          }
          return name + '=' + quoteAttributeValueForBrowser(value);
        } else if ("production" !== "production") {
          warnUnknownProperty(name);
        }
        return null;
      },
      setValueForProperty: function(node, name, value) {
        if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
          var mutationMethod = DOMProperty.getMutationMethod[name];
          if (mutationMethod) {
            mutationMethod(node, value);
          } else if (shouldIgnoreValue(name, value)) {
            this.deleteValueForProperty(node, name);
          } else if (DOMProperty.mustUseAttribute[name]) {
            node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
          } else {
            var propName = DOMProperty.getPropertyName[name];
            if (!DOMProperty.hasSideEffects[name] || ('' + node[propName]) !== ('' + value)) {
              node[propName] = value;
            }
          }
        } else if (DOMProperty.isCustomAttribute(name)) {
          if (value == null) {
            node.removeAttribute(name);
          } else {
            node.setAttribute(name, '' + value);
          }
        } else if ("production" !== "production") {
          warnUnknownProperty(name);
        }
      },
      deleteValueForProperty: function(node, name) {
        if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
          var mutationMethod = DOMProperty.getMutationMethod[name];
          if (mutationMethod) {
            mutationMethod(node, undefined);
          } else if (DOMProperty.mustUseAttribute[name]) {
            node.removeAttribute(DOMProperty.getAttributeName[name]);
          } else {
            var propName = DOMProperty.getPropertyName[name];
            var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
            if (!DOMProperty.hasSideEffects[name] || ('' + node[propName]) !== defaultValue) {
              node[propName] = defaultValue;
            }
          }
        } else if (DOMProperty.isCustomAttribute(name)) {
          node.removeAttribute(name);
        } else if ("production" !== "production") {
          warnUnknownProperty(name);
        }
      }
    };
    module.exports = DOMPropertyOperations;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/CSSPropertyOperations.js", ["npm:react@0.13.3/lib/CSSProperty.js", "npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/camelizeStyleName.js", "npm:react@0.13.3/lib/dangerousStyleValue.js", "npm:react@0.13.3/lib/hyphenateStyleName.js", "npm:react@0.13.3/lib/memoizeStringOnly.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var CSSProperty = require("npm:react@0.13.3/lib/CSSProperty.js");
    var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
    var camelizeStyleName = require("npm:react@0.13.3/lib/camelizeStyleName.js");
    var dangerousStyleValue = require("npm:react@0.13.3/lib/dangerousStyleValue.js");
    var hyphenateStyleName = require("npm:react@0.13.3/lib/hyphenateStyleName.js");
    var memoizeStringOnly = require("npm:react@0.13.3/lib/memoizeStringOnly.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var processStyleName = memoizeStringOnly(function(styleName) {
      return hyphenateStyleName(styleName);
    });
    var styleFloatAccessor = 'cssFloat';
    if (ExecutionEnvironment.canUseDOM) {
      if (document.documentElement.style.cssFloat === undefined) {
        styleFloatAccessor = 'styleFloat';
      }
    }
    if ("production" !== "production") {
      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
      var badStyleValueWithSemicolonPattern = /;\s*$/;
      var warnedStyleNames = {};
      var warnedStyleValues = {};
      var warnHyphenatedStyleName = function(name) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }
        warnedStyleNames[name] = true;
        ("production" !== "production" ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : null);
      };
      var warnBadVendoredStyleName = function(name) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }
        warnedStyleNames[name] = true;
        ("production" !== "production" ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : null);
      };
      var warnStyleValueWithSemicolon = function(name, value) {
        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
          return;
        }
        warnedStyleValues[value] = true;
        ("production" !== "production" ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : null);
      };
      var warnValidStyle = function(name, value) {
        if (name.indexOf('-') > -1) {
          warnHyphenatedStyleName(name);
        } else if (badVendoredStyleNamePattern.test(name)) {
          warnBadVendoredStyleName(name);
        } else if (badStyleValueWithSemicolonPattern.test(value)) {
          warnStyleValueWithSemicolon(name, value);
        }
      };
    }
    var CSSPropertyOperations = {
      createMarkupForStyles: function(styles) {
        var serialized = '';
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          var styleValue = styles[styleName];
          if ("production" !== "production") {
            warnValidStyle(styleName, styleValue);
          }
          if (styleValue != null) {
            serialized += processStyleName(styleName) + ':';
            serialized += dangerousStyleValue(styleName, styleValue) + ';';
          }
        }
        return serialized || null;
      },
      setValueForStyles: function(node, styles) {
        var style = node.style;
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          if ("production" !== "production") {
            warnValidStyle(styleName, styles[styleName]);
          }
          var styleValue = dangerousStyleValue(styleName, styles[styleName]);
          if (styleName === 'float') {
            styleName = styleFloatAccessor;
          }
          if (styleValue) {
            style[styleName] = styleValue;
          } else {
            var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
            if (expansion) {
              for (var individualStyleName in expansion) {
                style[individualStyleName] = '';
              }
            } else {
              style[styleName] = '';
            }
          }
        }
      }
    };
    module.exports = CSSPropertyOperations;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/createNodesFromMarkup.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/createArrayFromMixed.js", "npm:react@0.13.3/lib/getMarkupWrap.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
    var createArrayFromMixed = require("npm:react@0.13.3/lib/createArrayFromMixed.js");
    var getMarkupWrap = require("npm:react@0.13.3/lib/getMarkupWrap.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
    var nodeNamePattern = /^\s*<(\w+)/;
    function getNodeName(markup) {
      var nodeNameMatch = markup.match(nodeNamePattern);
      return nodeNameMatch && nodeNameMatch[1].toLowerCase();
    }
    function createNodesFromMarkup(markup, handleScript) {
      var node = dummyNode;
      ("production" !== "production" ? invariant(!!dummyNode, 'createNodesFromMarkup dummy not initialized') : invariant(!!dummyNode));
      var nodeName = getNodeName(markup);
      var wrap = nodeName && getMarkupWrap(nodeName);
      if (wrap) {
        node.innerHTML = wrap[1] + markup + wrap[2];
        var wrapDepth = wrap[0];
        while (wrapDepth--) {
          node = node.lastChild;
        }
      } else {
        node.innerHTML = markup;
      }
      var scripts = node.getElementsByTagName('script');
      if (scripts.length) {
        ("production" !== "production" ? invariant(handleScript, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(handleScript));
        createArrayFromMixed(scripts).forEach(handleScript);
      }
      var nodes = createArrayFromMixed(node.childNodes);
      while (node.lastChild) {
        node.removeChild(node.lastChild);
      }
      return nodes;
    }
    module.exports = createNodesFromMarkup;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactBrowserEventEmitter.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/EventPluginHub.js", "npm:react@0.13.3/lib/EventPluginRegistry.js", "npm:react@0.13.3/lib/ReactEventEmitterMixin.js", "npm:react@0.13.3/lib/ViewportMetrics.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/isEventSupported.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
    var EventPluginHub = require("npm:react@0.13.3/lib/EventPluginHub.js");
    var EventPluginRegistry = require("npm:react@0.13.3/lib/EventPluginRegistry.js");
    var ReactEventEmitterMixin = require("npm:react@0.13.3/lib/ReactEventEmitterMixin.js");
    var ViewportMetrics = require("npm:react@0.13.3/lib/ViewportMetrics.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var isEventSupported = require("npm:react@0.13.3/lib/isEventSupported.js");
    var alreadyListeningTo = {};
    var isMonitoringScrollValue = false;
    var reactTopListenersCounter = 0;
    var topEventMapping = {
      topBlur: 'blur',
      topChange: 'change',
      topClick: 'click',
      topCompositionEnd: 'compositionend',
      topCompositionStart: 'compositionstart',
      topCompositionUpdate: 'compositionupdate',
      topContextMenu: 'contextmenu',
      topCopy: 'copy',
      topCut: 'cut',
      topDoubleClick: 'dblclick',
      topDrag: 'drag',
      topDragEnd: 'dragend',
      topDragEnter: 'dragenter',
      topDragExit: 'dragexit',
      topDragLeave: 'dragleave',
      topDragOver: 'dragover',
      topDragStart: 'dragstart',
      topDrop: 'drop',
      topFocus: 'focus',
      topInput: 'input',
      topKeyDown: 'keydown',
      topKeyPress: 'keypress',
      topKeyUp: 'keyup',
      topMouseDown: 'mousedown',
      topMouseMove: 'mousemove',
      topMouseOut: 'mouseout',
      topMouseOver: 'mouseover',
      topMouseUp: 'mouseup',
      topPaste: 'paste',
      topScroll: 'scroll',
      topSelectionChange: 'selectionchange',
      topTextInput: 'textInput',
      topTouchCancel: 'touchcancel',
      topTouchEnd: 'touchend',
      topTouchMove: 'touchmove',
      topTouchStart: 'touchstart',
      topWheel: 'wheel'
    };
    var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);
    function getListeningForDocument(mountAt) {
      if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
        mountAt[topListenersIDKey] = reactTopListenersCounter++;
        alreadyListeningTo[mountAt[topListenersIDKey]] = {};
      }
      return alreadyListeningTo[mountAt[topListenersIDKey]];
    }
    var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {
      ReactEventListener: null,
      injection: {injectReactEventListener: function(ReactEventListener) {
          ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
          ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
        }},
      setEnabled: function(enabled) {
        if (ReactBrowserEventEmitter.ReactEventListener) {
          ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
        }
      },
      isEnabled: function() {
        return !!((ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled()));
      },
      listenTo: function(registrationName, contentDocumentHandle) {
        var mountAt = contentDocumentHandle;
        var isListening = getListeningForDocument(mountAt);
        var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
        var topLevelTypes = EventConstants.topLevelTypes;
        for (var i = 0,
            l = dependencies.length; i < l; i++) {
          var dependency = dependencies[i];
          if (!((isListening.hasOwnProperty(dependency) && isListening[dependency]))) {
            if (dependency === topLevelTypes.topWheel) {
              if (isEventSupported('wheel')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
              } else if (isEventSupported('mousewheel')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
              } else {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
              }
            } else if (dependency === topLevelTypes.topScroll) {
              if (isEventSupported('scroll', true)) {
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
              } else {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
              }
            } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {
              if (isEventSupported('focus', true)) {
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
              } else if (isEventSupported('focusin')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
              }
              isListening[topLevelTypes.topBlur] = true;
              isListening[topLevelTypes.topFocus] = true;
            } else if (topEventMapping.hasOwnProperty(dependency)) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
            }
            isListening[dependency] = true;
          }
        }
      },
      trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
        return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
      },
      trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
        return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
      },
      ensureScrollValueMonitoring: function() {
        if (!isMonitoringScrollValue) {
          var refresh = ViewportMetrics.refreshScrollValues;
          ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
          isMonitoringScrollValue = true;
        }
      },
      eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,
      registrationNameModules: EventPluginHub.registrationNameModules,
      putListener: EventPluginHub.putListener,
      getListener: EventPluginHub.getListener,
      deleteListener: EventPluginHub.deleteListener,
      deleteAllListeners: EventPluginHub.deleteAllListeners
    });
    module.exports = ReactBrowserEventEmitter;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/containsNode.js", ["npm:react@0.13.3/lib/isTextNode.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var isTextNode = require("npm:react@0.13.3/lib/isTextNode.js");
  function containsNode(outerNode, innerNode) {
    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      return containsNode(outerNode, innerNode.parentNode);
    } else if (outerNode.contains) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }
  module.exports = containsNode;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/instantiateReactComponent.js", ["npm:react@0.13.3/lib/ReactCompositeComponent.js", "npm:react@0.13.3/lib/ReactEmptyComponent.js", "npm:react@0.13.3/lib/ReactNativeComponent.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactCompositeComponent = require("npm:react@0.13.3/lib/ReactCompositeComponent.js");
    var ReactEmptyComponent = require("npm:react@0.13.3/lib/ReactEmptyComponent.js");
    var ReactNativeComponent = require("npm:react@0.13.3/lib/ReactNativeComponent.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var ReactCompositeComponentWrapper = function() {};
    assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {_instantiateReactComponent: instantiateReactComponent});
    function isInternalComponentType(type) {
      return (typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function');
    }
    function instantiateReactComponent(node, parentCompositeType) {
      var instance;
      if (node === null || node === false) {
        node = ReactEmptyComponent.emptyElement;
      }
      if (typeof node === 'object') {
        var element = node;
        if ("production" !== "production") {
          ("production" !== "production" ? warning(element && (typeof element.type === 'function' || typeof element.type === 'string'), 'Only functions or strings can be mounted as React components.') : null);
        }
        if (parentCompositeType === element.type && typeof element.type === 'string') {
          instance = ReactNativeComponent.createInternalComponent(element);
        } else if (isInternalComponentType(element.type)) {
          instance = new element.type(element);
        } else {
          instance = new ReactCompositeComponentWrapper();
        }
      } else if (typeof node === 'string' || typeof node === 'number') {
        instance = ReactNativeComponent.createInstanceForText(node);
      } else {
        ("production" !== "production" ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false));
      }
      if ("production" !== "production") {
        ("production" !== "production" ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : null);
      }
      instance.construct(node);
      instance._mountIndex = 0;
      instance._mountImage = null;
      if ("production" !== "production") {
        instance._isOwnerNecessary = false;
        instance._warnedAboutRefsInRender = false;
      }
      if ("production" !== "production") {
        if (Object.preventExtensions) {
          Object.preventExtensions(instance);
        }
      }
      return instance;
    }
    module.exports = instantiateReactComponent;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactMultiChild.js", ["npm:react@0.13.3/lib/ReactComponentEnvironment.js", "npm:react@0.13.3/lib/ReactMultiChildUpdateTypes.js", "npm:react@0.13.3/lib/ReactReconciler.js", "npm:react@0.13.3/lib/ReactChildReconciler.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactComponentEnvironment = require("npm:react@0.13.3/lib/ReactComponentEnvironment.js");
    var ReactMultiChildUpdateTypes = require("npm:react@0.13.3/lib/ReactMultiChildUpdateTypes.js");
    var ReactReconciler = require("npm:react@0.13.3/lib/ReactReconciler.js");
    var ReactChildReconciler = require("npm:react@0.13.3/lib/ReactChildReconciler.js");
    var updateDepth = 0;
    var updateQueue = [];
    var markupQueue = [];
    function enqueueMarkup(parentID, markup, toIndex) {
      updateQueue.push({
        parentID: parentID,
        parentNode: null,
        type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
        markupIndex: markupQueue.push(markup) - 1,
        textContent: null,
        fromIndex: null,
        toIndex: toIndex
      });
    }
    function enqueueMove(parentID, fromIndex, toIndex) {
      updateQueue.push({
        parentID: parentID,
        parentNode: null,
        type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
        markupIndex: null,
        textContent: null,
        fromIndex: fromIndex,
        toIndex: toIndex
      });
    }
    function enqueueRemove(parentID, fromIndex) {
      updateQueue.push({
        parentID: parentID,
        parentNode: null,
        type: ReactMultiChildUpdateTypes.REMOVE_NODE,
        markupIndex: null,
        textContent: null,
        fromIndex: fromIndex,
        toIndex: null
      });
    }
    function enqueueTextContent(parentID, textContent) {
      updateQueue.push({
        parentID: parentID,
        parentNode: null,
        type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
        markupIndex: null,
        textContent: textContent,
        fromIndex: null,
        toIndex: null
      });
    }
    function processQueue() {
      if (updateQueue.length) {
        ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
        clearQueue();
      }
    }
    function clearQueue() {
      updateQueue.length = 0;
      markupQueue.length = 0;
    }
    var ReactMultiChild = {Mixin: {
        mountChildren: function(nestedChildren, transaction, context) {
          var children = ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
          this._renderedChildren = children;
          var mountImages = [];
          var index = 0;
          for (var name in children) {
            if (children.hasOwnProperty(name)) {
              var child = children[name];
              var rootID = this._rootNodeID + name;
              var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
              child._mountIndex = index;
              mountImages.push(mountImage);
              index++;
            }
          }
          return mountImages;
        },
        updateTextContent: function(nextContent) {
          updateDepth++;
          var errorThrown = true;
          try {
            var prevChildren = this._renderedChildren;
            ReactChildReconciler.unmountChildren(prevChildren);
            for (var name in prevChildren) {
              if (prevChildren.hasOwnProperty(name)) {
                this._unmountChildByName(prevChildren[name], name);
              }
            }
            this.setTextContent(nextContent);
            errorThrown = false;
          } finally {
            updateDepth--;
            if (!updateDepth) {
              if (errorThrown) {
                clearQueue();
              } else {
                processQueue();
              }
            }
          }
        },
        updateChildren: function(nextNestedChildren, transaction, context) {
          updateDepth++;
          var errorThrown = true;
          try {
            this._updateChildren(nextNestedChildren, transaction, context);
            errorThrown = false;
          } finally {
            updateDepth--;
            if (!updateDepth) {
              if (errorThrown) {
                clearQueue();
              } else {
                processQueue();
              }
            }
          }
        },
        _updateChildren: function(nextNestedChildren, transaction, context) {
          var prevChildren = this._renderedChildren;
          var nextChildren = ReactChildReconciler.updateChildren(prevChildren, nextNestedChildren, transaction, context);
          this._renderedChildren = nextChildren;
          if (!nextChildren && !prevChildren) {
            return;
          }
          var name;
          var lastIndex = 0;
          var nextIndex = 0;
          for (name in nextChildren) {
            if (!nextChildren.hasOwnProperty(name)) {
              continue;
            }
            var prevChild = prevChildren && prevChildren[name];
            var nextChild = nextChildren[name];
            if (prevChild === nextChild) {
              this.moveChild(prevChild, nextIndex, lastIndex);
              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              prevChild._mountIndex = nextIndex;
            } else {
              if (prevChild) {
                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
                this._unmountChildByName(prevChild, name);
              }
              this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
            }
            nextIndex++;
          }
          for (name in prevChildren) {
            if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
              this._unmountChildByName(prevChildren[name], name);
            }
          }
        },
        unmountChildren: function() {
          var renderedChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(renderedChildren);
          this._renderedChildren = null;
        },
        moveChild: function(child, toIndex, lastIndex) {
          if (child._mountIndex < lastIndex) {
            enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
          }
        },
        createChild: function(child, mountImage) {
          enqueueMarkup(this._rootNodeID, mountImage, child._mountIndex);
        },
        removeChild: function(child) {
          enqueueRemove(this._rootNodeID, child._mountIndex);
        },
        setTextContent: function(textContent) {
          enqueueTextContent(this._rootNodeID, textContent);
        },
        _mountChildByNameAtIndex: function(child, name, index, transaction, context) {
          var rootID = this._rootNodeID + name;
          var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
          child._mountIndex = index;
          this.createChild(child, mountImage);
        },
        _unmountChildByName: function(child, name) {
          this.removeChild(child);
          child._mountIndex = null;
        }
      }};
    module.exports = ReactMultiChild;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SyntheticCompositionEvent.js", ["npm:react@0.13.3/lib/SyntheticEvent.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticEvent = require("npm:react@0.13.3/lib/SyntheticEvent.js");
  var CompositionEventInterface = {data: null};
  function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
  module.exports = SyntheticCompositionEvent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/EnterLeaveEventPlugin.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/EventPropagators.js", "npm:react@0.13.3/lib/SyntheticMouseEvent.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/keyOf.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
  var EventPropagators = require("npm:react@0.13.3/lib/EventPropagators.js");
  var SyntheticMouseEvent = require("npm:react@0.13.3/lib/SyntheticMouseEvent.js");
  var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
  var keyOf = require("npm:react@0.13.3/lib/keyOf.js");
  var topLevelTypes = EventConstants.topLevelTypes;
  var getFirstReactDOM = ReactMount.getFirstReactDOM;
  var eventTypes = {
    mouseEnter: {
      registrationName: keyOf({onMouseEnter: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    },
    mouseLeave: {
      registrationName: keyOf({onMouseLeave: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    }
  };
  var extractedEvents = [null, null];
  var EnterLeaveEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
        return null;
      }
      if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
        return null;
      }
      var win;
      if (topLevelTarget.window === topLevelTarget) {
        win = topLevelTarget;
      } else {
        var doc = topLevelTarget.ownerDocument;
        if (doc) {
          win = doc.defaultView || doc.parentWindow;
        } else {
          win = window;
        }
      }
      var from,
          to;
      if (topLevelType === topLevelTypes.topMouseOut) {
        from = topLevelTarget;
        to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) || win;
      } else {
        from = win;
        to = topLevelTarget;
      }
      if (from === to) {
        return null;
      }
      var fromID = from ? ReactMount.getID(from) : '';
      var toID = to ? ReactMount.getID(to) : '';
      var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent);
      leave.type = 'mouseleave';
      leave.target = from;
      leave.relatedTarget = to;
      var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent);
      enter.type = 'mouseenter';
      enter.target = to;
      enter.relatedTarget = from;
      EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);
      extractedEvents[0] = leave;
      extractedEvents[1] = enter;
      return extractedEvents;
    }
  };
  module.exports = EnterLeaveEventPlugin;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMButton.js", ["npm:react@0.13.3/lib/AutoFocusMixin.js", "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/keyMirror.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var AutoFocusMixin = require("npm:react@0.13.3/lib/AutoFocusMixin.js");
  var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
  var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
  var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
  var keyMirror = require("npm:react@0.13.3/lib/keyMirror.js");
  var button = ReactElement.createFactory('button');
  var mouseListenerNames = keyMirror({
    onClick: true,
    onDoubleClick: true,
    onMouseDown: true,
    onMouseMove: true,
    onMouseUp: true,
    onClickCapture: true,
    onDoubleClickCapture: true,
    onMouseDownCapture: true,
    onMouseMoveCapture: true,
    onMouseUpCapture: true
  });
  var ReactDOMButton = ReactClass.createClass({
    displayName: 'ReactDOMButton',
    tagName: 'BUTTON',
    mixins: [AutoFocusMixin, ReactBrowserComponentMixin],
    render: function() {
      var props = {};
      for (var key in this.props) {
        if (this.props.hasOwnProperty(key) && (!this.props.disabled || !mouseListenerNames[key])) {
          props[key] = this.props[key];
        }
      }
      return button(props, this.props.children);
    }
  });
  module.exports = ReactDOMButton;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMInput.js", ["npm:react@0.13.3/lib/AutoFocusMixin.js", "npm:react@0.13.3/lib/DOMPropertyOperations.js", "npm:react@0.13.3/lib/LinkedValueUtils.js", "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var AutoFocusMixin = require("npm:react@0.13.3/lib/AutoFocusMixin.js");
    var DOMPropertyOperations = require("npm:react@0.13.3/lib/DOMPropertyOperations.js");
    var LinkedValueUtils = require("npm:react@0.13.3/lib/LinkedValueUtils.js");
    var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
    var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
    var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var input = ReactElement.createFactory('input');
    var instancesByReactID = {};
    function forceUpdateIfMounted() {
      if (this.isMounted()) {
        this.forceUpdate();
      }
    }
    var ReactDOMInput = ReactClass.createClass({
      displayName: 'ReactDOMInput',
      tagName: 'INPUT',
      mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
      getInitialState: function() {
        var defaultValue = this.props.defaultValue;
        return {
          initialChecked: this.props.defaultChecked || false,
          initialValue: defaultValue != null ? defaultValue : null
        };
      },
      render: function() {
        var props = assign({}, this.props);
        props.defaultChecked = null;
        props.defaultValue = null;
        var value = LinkedValueUtils.getValue(this);
        props.value = value != null ? value : this.state.initialValue;
        var checked = LinkedValueUtils.getChecked(this);
        props.checked = checked != null ? checked : this.state.initialChecked;
        props.onChange = this._handleChange;
        return input(props, this.props.children);
      },
      componentDidMount: function() {
        var id = ReactMount.getID(this.getDOMNode());
        instancesByReactID[id] = this;
      },
      componentWillUnmount: function() {
        var rootNode = this.getDOMNode();
        var id = ReactMount.getID(rootNode);
        delete instancesByReactID[id];
      },
      componentDidUpdate: function(prevProps, prevState, prevContext) {
        var rootNode = this.getDOMNode();
        if (this.props.checked != null) {
          DOMPropertyOperations.setValueForProperty(rootNode, 'checked', this.props.checked || false);
        }
        var value = LinkedValueUtils.getValue(this);
        if (value != null) {
          DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
        }
      },
      _handleChange: function(event) {
        var returnValue;
        var onChange = LinkedValueUtils.getOnChange(this);
        if (onChange) {
          returnValue = onChange.call(this, event);
        }
        ReactUpdates.asap(forceUpdateIfMounted, this);
        var name = this.props.name;
        if (this.props.type === 'radio' && name != null) {
          var rootNode = this.getDOMNode();
          var queryRoot = rootNode;
          while (queryRoot.parentNode) {
            queryRoot = queryRoot.parentNode;
          }
          var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
          for (var i = 0,
              groupLen = group.length; i < groupLen; i++) {
            var otherNode = group[i];
            if (otherNode === rootNode || otherNode.form !== rootNode.form) {
              continue;
            }
            var otherID = ReactMount.getID(otherNode);
            ("production" !== "production" ? invariant(otherID, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(otherID));
            var otherInstance = instancesByReactID[otherID];
            ("production" !== "production" ? invariant(otherInstance, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(otherInstance));
            ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
          }
        }
        return returnValue;
      }
    });
    module.exports = ReactDOMInput;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactInputSelection.js", ["npm:react@0.13.3/lib/ReactDOMSelection.js", "npm:react@0.13.3/lib/containsNode.js", "npm:react@0.13.3/lib/focusNode.js", "npm:react@0.13.3/lib/getActiveElement.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactDOMSelection = require("npm:react@0.13.3/lib/ReactDOMSelection.js");
  var containsNode = require("npm:react@0.13.3/lib/containsNode.js");
  var focusNode = require("npm:react@0.13.3/lib/focusNode.js");
  var getActiveElement = require("npm:react@0.13.3/lib/getActiveElement.js");
  function isInDocument(node) {
    return containsNode(document.documentElement, node);
  }
  var ReactInputSelection = {
    hasSelectionCapabilities: function(elem) {
      return elem && (((elem.nodeName === 'INPUT' && elem.type === 'text') || elem.nodeName === 'TEXTAREA' || elem.contentEditable === 'true'));
    },
    getSelectionInformation: function() {
      var focusedElem = getActiveElement();
      return {
        focusedElem: focusedElem,
        selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
      };
    },
    restoreSelection: function(priorSelectionInformation) {
      var curFocusedElem = getActiveElement();
      var priorFocusedElem = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
        if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
          ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
        }
        focusNode(priorFocusedElem);
      }
    },
    getSelection: function(input) {
      var selection;
      if ('selectionStart' in input) {
        selection = {
          start: input.selectionStart,
          end: input.selectionEnd
        };
      } else if (document.selection && input.nodeName === 'INPUT') {
        var range = document.selection.createRange();
        if (range.parentElement() === input) {
          selection = {
            start: -range.moveStart('character', -input.value.length),
            end: -range.moveEnd('character', -input.value.length)
          };
        }
      } else {
        selection = ReactDOMSelection.getOffsets(input);
      }
      return selection || {
        start: 0,
        end: 0
      };
    },
    setSelection: function(input, offsets) {
      var start = offsets.start;
      var end = offsets.end;
      if (typeof end === 'undefined') {
        end = start;
      }
      if ('selectionStart' in input) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      } else if (document.selection && input.nodeName === 'INPUT') {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
      } else {
        ReactDOMSelection.setOffsets(input, offsets);
      }
    }
  };
  module.exports = ReactInputSelection;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/SimpleEventPlugin.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/EventPluginUtils.js", "npm:react@0.13.3/lib/EventPropagators.js", "npm:react@0.13.3/lib/SyntheticClipboardEvent.js", "npm:react@0.13.3/lib/SyntheticEvent.js", "npm:react@0.13.3/lib/SyntheticFocusEvent.js", "npm:react@0.13.3/lib/SyntheticKeyboardEvent.js", "npm:react@0.13.3/lib/SyntheticMouseEvent.js", "npm:react@0.13.3/lib/SyntheticDragEvent.js", "npm:react@0.13.3/lib/SyntheticTouchEvent.js", "npm:react@0.13.3/lib/SyntheticUIEvent.js", "npm:react@0.13.3/lib/SyntheticWheelEvent.js", "npm:react@0.13.3/lib/getEventCharCode.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/keyOf.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
    var EventPluginUtils = require("npm:react@0.13.3/lib/EventPluginUtils.js");
    var EventPropagators = require("npm:react@0.13.3/lib/EventPropagators.js");
    var SyntheticClipboardEvent = require("npm:react@0.13.3/lib/SyntheticClipboardEvent.js");
    var SyntheticEvent = require("npm:react@0.13.3/lib/SyntheticEvent.js");
    var SyntheticFocusEvent = require("npm:react@0.13.3/lib/SyntheticFocusEvent.js");
    var SyntheticKeyboardEvent = require("npm:react@0.13.3/lib/SyntheticKeyboardEvent.js");
    var SyntheticMouseEvent = require("npm:react@0.13.3/lib/SyntheticMouseEvent.js");
    var SyntheticDragEvent = require("npm:react@0.13.3/lib/SyntheticDragEvent.js");
    var SyntheticTouchEvent = require("npm:react@0.13.3/lib/SyntheticTouchEvent.js");
    var SyntheticUIEvent = require("npm:react@0.13.3/lib/SyntheticUIEvent.js");
    var SyntheticWheelEvent = require("npm:react@0.13.3/lib/SyntheticWheelEvent.js");
    var getEventCharCode = require("npm:react@0.13.3/lib/getEventCharCode.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var keyOf = require("npm:react@0.13.3/lib/keyOf.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var topLevelTypes = EventConstants.topLevelTypes;
    var eventTypes = {
      blur: {phasedRegistrationNames: {
          bubbled: keyOf({onBlur: true}),
          captured: keyOf({onBlurCapture: true})
        }},
      click: {phasedRegistrationNames: {
          bubbled: keyOf({onClick: true}),
          captured: keyOf({onClickCapture: true})
        }},
      contextMenu: {phasedRegistrationNames: {
          bubbled: keyOf({onContextMenu: true}),
          captured: keyOf({onContextMenuCapture: true})
        }},
      copy: {phasedRegistrationNames: {
          bubbled: keyOf({onCopy: true}),
          captured: keyOf({onCopyCapture: true})
        }},
      cut: {phasedRegistrationNames: {
          bubbled: keyOf({onCut: true}),
          captured: keyOf({onCutCapture: true})
        }},
      doubleClick: {phasedRegistrationNames: {
          bubbled: keyOf({onDoubleClick: true}),
          captured: keyOf({onDoubleClickCapture: true})
        }},
      drag: {phasedRegistrationNames: {
          bubbled: keyOf({onDrag: true}),
          captured: keyOf({onDragCapture: true})
        }},
      dragEnd: {phasedRegistrationNames: {
          bubbled: keyOf({onDragEnd: true}),
          captured: keyOf({onDragEndCapture: true})
        }},
      dragEnter: {phasedRegistrationNames: {
          bubbled: keyOf({onDragEnter: true}),
          captured: keyOf({onDragEnterCapture: true})
        }},
      dragExit: {phasedRegistrationNames: {
          bubbled: keyOf({onDragExit: true}),
          captured: keyOf({onDragExitCapture: true})
        }},
      dragLeave: {phasedRegistrationNames: {
          bubbled: keyOf({onDragLeave: true}),
          captured: keyOf({onDragLeaveCapture: true})
        }},
      dragOver: {phasedRegistrationNames: {
          bubbled: keyOf({onDragOver: true}),
          captured: keyOf({onDragOverCapture: true})
        }},
      dragStart: {phasedRegistrationNames: {
          bubbled: keyOf({onDragStart: true}),
          captured: keyOf({onDragStartCapture: true})
        }},
      drop: {phasedRegistrationNames: {
          bubbled: keyOf({onDrop: true}),
          captured: keyOf({onDropCapture: true})
        }},
      focus: {phasedRegistrationNames: {
          bubbled: keyOf({onFocus: true}),
          captured: keyOf({onFocusCapture: true})
        }},
      input: {phasedRegistrationNames: {
          bubbled: keyOf({onInput: true}),
          captured: keyOf({onInputCapture: true})
        }},
      keyDown: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyDown: true}),
          captured: keyOf({onKeyDownCapture: true})
        }},
      keyPress: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyPress: true}),
          captured: keyOf({onKeyPressCapture: true})
        }},
      keyUp: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyUp: true}),
          captured: keyOf({onKeyUpCapture: true})
        }},
      load: {phasedRegistrationNames: {
          bubbled: keyOf({onLoad: true}),
          captured: keyOf({onLoadCapture: true})
        }},
      error: {phasedRegistrationNames: {
          bubbled: keyOf({onError: true}),
          captured: keyOf({onErrorCapture: true})
        }},
      mouseDown: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseDown: true}),
          captured: keyOf({onMouseDownCapture: true})
        }},
      mouseMove: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseMove: true}),
          captured: keyOf({onMouseMoveCapture: true})
        }},
      mouseOut: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseOut: true}),
          captured: keyOf({onMouseOutCapture: true})
        }},
      mouseOver: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseOver: true}),
          captured: keyOf({onMouseOverCapture: true})
        }},
      mouseUp: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseUp: true}),
          captured: keyOf({onMouseUpCapture: true})
        }},
      paste: {phasedRegistrationNames: {
          bubbled: keyOf({onPaste: true}),
          captured: keyOf({onPasteCapture: true})
        }},
      reset: {phasedRegistrationNames: {
          bubbled: keyOf({onReset: true}),
          captured: keyOf({onResetCapture: true})
        }},
      scroll: {phasedRegistrationNames: {
          bubbled: keyOf({onScroll: true}),
          captured: keyOf({onScrollCapture: true})
        }},
      submit: {phasedRegistrationNames: {
          bubbled: keyOf({onSubmit: true}),
          captured: keyOf({onSubmitCapture: true})
        }},
      touchCancel: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchCancel: true}),
          captured: keyOf({onTouchCancelCapture: true})
        }},
      touchEnd: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchEnd: true}),
          captured: keyOf({onTouchEndCapture: true})
        }},
      touchMove: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchMove: true}),
          captured: keyOf({onTouchMoveCapture: true})
        }},
      touchStart: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchStart: true}),
          captured: keyOf({onTouchStartCapture: true})
        }},
      wheel: {phasedRegistrationNames: {
          bubbled: keyOf({onWheel: true}),
          captured: keyOf({onWheelCapture: true})
        }}
    };
    var topLevelEventsToDispatchConfig = {
      topBlur: eventTypes.blur,
      topClick: eventTypes.click,
      topContextMenu: eventTypes.contextMenu,
      topCopy: eventTypes.copy,
      topCut: eventTypes.cut,
      topDoubleClick: eventTypes.doubleClick,
      topDrag: eventTypes.drag,
      topDragEnd: eventTypes.dragEnd,
      topDragEnter: eventTypes.dragEnter,
      topDragExit: eventTypes.dragExit,
      topDragLeave: eventTypes.dragLeave,
      topDragOver: eventTypes.dragOver,
      topDragStart: eventTypes.dragStart,
      topDrop: eventTypes.drop,
      topError: eventTypes.error,
      topFocus: eventTypes.focus,
      topInput: eventTypes.input,
      topKeyDown: eventTypes.keyDown,
      topKeyPress: eventTypes.keyPress,
      topKeyUp: eventTypes.keyUp,
      topLoad: eventTypes.load,
      topMouseDown: eventTypes.mouseDown,
      topMouseMove: eventTypes.mouseMove,
      topMouseOut: eventTypes.mouseOut,
      topMouseOver: eventTypes.mouseOver,
      topMouseUp: eventTypes.mouseUp,
      topPaste: eventTypes.paste,
      topReset: eventTypes.reset,
      topScroll: eventTypes.scroll,
      topSubmit: eventTypes.submit,
      topTouchCancel: eventTypes.touchCancel,
      topTouchEnd: eventTypes.touchEnd,
      topTouchMove: eventTypes.touchMove,
      topTouchStart: eventTypes.touchStart,
      topWheel: eventTypes.wheel
    };
    for (var type in topLevelEventsToDispatchConfig) {
      topLevelEventsToDispatchConfig[type].dependencies = [type];
    }
    var SimpleEventPlugin = {
      eventTypes: eventTypes,
      executeDispatch: function(event, listener, domID) {
        var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);
        ("production" !== "production" ? warning(typeof returnValue !== 'boolean', 'Returning `false` from an event handler is deprecated and will be ' + 'ignored in a future release. Instead, manually call ' + 'e.stopPropagation() or e.preventDefault(), as appropriate.') : null);
        if (returnValue === false) {
          event.stopPropagation();
          event.preventDefault();
        }
      },
      extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
        var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
        if (!dispatchConfig) {
          return null;
        }
        var EventConstructor;
        switch (topLevelType) {
          case topLevelTypes.topInput:
          case topLevelTypes.topLoad:
          case topLevelTypes.topError:
          case topLevelTypes.topReset:
          case topLevelTypes.topSubmit:
            EventConstructor = SyntheticEvent;
            break;
          case topLevelTypes.topKeyPress:
            if (getEventCharCode(nativeEvent) === 0) {
              return null;
            }
          case topLevelTypes.topKeyDown:
          case topLevelTypes.topKeyUp:
            EventConstructor = SyntheticKeyboardEvent;
            break;
          case topLevelTypes.topBlur:
          case topLevelTypes.topFocus:
            EventConstructor = SyntheticFocusEvent;
            break;
          case topLevelTypes.topClick:
            if (nativeEvent.button === 2) {
              return null;
            }
          case topLevelTypes.topContextMenu:
          case topLevelTypes.topDoubleClick:
          case topLevelTypes.topMouseDown:
          case topLevelTypes.topMouseMove:
          case topLevelTypes.topMouseOut:
          case topLevelTypes.topMouseOver:
          case topLevelTypes.topMouseUp:
            EventConstructor = SyntheticMouseEvent;
            break;
          case topLevelTypes.topDrag:
          case topLevelTypes.topDragEnd:
          case topLevelTypes.topDragEnter:
          case topLevelTypes.topDragExit:
          case topLevelTypes.topDragLeave:
          case topLevelTypes.topDragOver:
          case topLevelTypes.topDragStart:
          case topLevelTypes.topDrop:
            EventConstructor = SyntheticDragEvent;
            break;
          case topLevelTypes.topTouchCancel:
          case topLevelTypes.topTouchEnd:
          case topLevelTypes.topTouchMove:
          case topLevelTypes.topTouchStart:
            EventConstructor = SyntheticTouchEvent;
            break;
          case topLevelTypes.topScroll:
            EventConstructor = SyntheticUIEvent;
            break;
          case topLevelTypes.topWheel:
            EventConstructor = SyntheticWheelEvent;
            break;
          case topLevelTypes.topCopy:
          case topLevelTypes.topCut:
          case topLevelTypes.topPaste:
            EventConstructor = SyntheticClipboardEvent;
            break;
        }
        ("production" !== "production" ? invariant(EventConstructor, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(EventConstructor));
        var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent);
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }
    };
    module.exports = SimpleEventPlugin;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDefaultPerf.js", ["npm:react@0.13.3/lib/DOMProperty.js", "npm:react@0.13.3/lib/ReactDefaultPerfAnalysis.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/ReactPerf.js", "npm:react@0.13.3/lib/performanceNow.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMProperty = require("npm:react@0.13.3/lib/DOMProperty.js");
  var ReactDefaultPerfAnalysis = require("npm:react@0.13.3/lib/ReactDefaultPerfAnalysis.js");
  var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
  var ReactPerf = require("npm:react@0.13.3/lib/ReactPerf.js");
  var performanceNow = require("npm:react@0.13.3/lib/performanceNow.js");
  function roundFloat(val) {
    return Math.floor(val * 100) / 100;
  }
  function addValue(obj, key, val) {
    obj[key] = (obj[key] || 0) + val;
  }
  var ReactDefaultPerf = {
    _allMeasurements: [],
    _mountStack: [0],
    _injected: false,
    start: function() {
      if (!ReactDefaultPerf._injected) {
        ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
      }
      ReactDefaultPerf._allMeasurements.length = 0;
      ReactPerf.enableMeasure = true;
    },
    stop: function() {
      ReactPerf.enableMeasure = false;
    },
    getLastMeasurements: function() {
      return ReactDefaultPerf._allMeasurements;
    },
    printExclusive: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
      console.table(summary.map(function(item) {
        return {
          'Component class name': item.componentName,
          'Total inclusive time (ms)': roundFloat(item.inclusive),
          'Exclusive mount time (ms)': roundFloat(item.exclusive),
          'Exclusive render time (ms)': roundFloat(item.render),
          'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
          'Render time per instance (ms)': roundFloat(item.render / item.count),
          'Instances': item.count
        };
      }));
    },
    printInclusive: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
      console.table(summary.map(function(item) {
        return {
          'Owner > component': item.componentName,
          'Inclusive time (ms)': roundFloat(item.time),
          'Instances': item.count
        };
      }));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    getMeasurementsSummaryMap: function(measurements) {
      var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
      return summary.map(function(item) {
        return {
          'Owner > component': item.componentName,
          'Wasted time (ms)': item.time,
          'Instances': item.count
        };
      });
    },
    printWasted: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    printDOM: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
      console.table(summary.map(function(item) {
        var result = {};
        result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
        result['type'] = item.type;
        result['args'] = JSON.stringify(item.args);
        return result;
      }));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    _recordWrite: function(id, fnName, totalTime, args) {
      var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
      writes[id] = writes[id] || [];
      writes[id].push({
        type: fnName,
        time: totalTime,
        args: args
      });
    },
    measure: function(moduleName, fnName, func) {
      return function() {
        for (var args = [],
            $__0 = 0,
            $__1 = arguments.length; $__0 < $__1; $__0++)
          args.push(arguments[$__0]);
        var totalTime;
        var rv;
        var start;
        if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
          ReactDefaultPerf._allMeasurements.push({
            exclusive: {},
            inclusive: {},
            render: {},
            counts: {},
            writes: {},
            displayNames: {},
            totalTime: 0
          });
          start = performanceNow();
          rv = func.apply(this, args);
          ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
          return rv;
        } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactDOMIDOperations') {
          start = performanceNow();
          rv = func.apply(this, args);
          totalTime = performanceNow() - start;
          if (fnName === '_mountImageIntoNode') {
            var mountID = ReactMount.getID(args[1]);
            ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
          } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
            args[0].forEach(function(update) {
              var writeArgs = {};
              if (update.fromIndex !== null) {
                writeArgs.fromIndex = update.fromIndex;
              }
              if (update.toIndex !== null) {
                writeArgs.toIndex = update.toIndex;
              }
              if (update.textContent !== null) {
                writeArgs.textContent = update.textContent;
              }
              if (update.markupIndex !== null) {
                writeArgs.markup = args[1][update.markupIndex];
              }
              ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
            });
          } else {
            ReactDefaultPerf._recordWrite(args[0], fnName, totalTime, Array.prototype.slice.call(args, 1));
          }
          return rv;
        } else if (moduleName === 'ReactCompositeComponent' && (((fnName === 'mountComponent' || fnName === 'updateComponent' || fnName === '_renderValidatedComponent')))) {
          if (typeof this._currentElement.type === 'string') {
            return func.apply(this, args);
          }
          var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
          var isRender = fnName === '_renderValidatedComponent';
          var isMount = fnName === 'mountComponent';
          var mountStack = ReactDefaultPerf._mountStack;
          var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];
          if (isRender) {
            addValue(entry.counts, rootNodeID, 1);
          } else if (isMount) {
            mountStack.push(0);
          }
          start = performanceNow();
          rv = func.apply(this, args);
          totalTime = performanceNow() - start;
          if (isRender) {
            addValue(entry.render, rootNodeID, totalTime);
          } else if (isMount) {
            var subMountTime = mountStack.pop();
            mountStack[mountStack.length - 1] += totalTime;
            addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
            addValue(entry.inclusive, rootNodeID, totalTime);
          } else {
            addValue(entry.inclusive, rootNodeID, totalTime);
          }
          entry.displayNames[rootNodeID] = {
            current: this.getName(),
            owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
          };
          return rv;
        } else {
          return func.apply(this, args);
        }
      };
    }
  };
  module.exports = ReactDefaultPerf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/fn/object/get-own-property-descriptor.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/es6.object.statics-accept-primitives.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js");
  require("npm:core-js@0.9.18/library/modules/es6.object.statics-accept-primitives.js");
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/es6.object.set-prototype-of.js", ["npm:core-js@0.9.18/library/modules/$.def.js", "npm:core-js@0.9.18/library/modules/$.set-proto.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $def = require("npm:core-js@0.9.18/library/modules/$.def.js");
  $def($def.S, 'Object', {setPrototypeOf: require("npm:core-js@0.9.18/library/modules/$.set-proto.js").set});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/helpers/create-class.js", ["npm:babel-runtime@5.8.5/core-js/object/define-property.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$defineProperty = require("npm:babel-runtime@5.8.5/core-js/object/define-property.js")["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:querystring@0.2.0.js", ["npm:querystring@0.2.0/index.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:querystring@0.2.0/index.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:rx@2.5.3.js", ["npm:rx@2.5.3/index.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:rx@2.5.3/index.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/es6.object.assign.js", ["npm:core-js@0.9.18/library/modules/$.def.js", "npm:core-js@0.9.18/library/modules/$.assign.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $def = require("npm:core-js@0.9.18/library/modules/$.def.js");
  $def($def.S, 'Object', {assign: require("npm:core-js@0.9.18/library/modules/$.assign.js")});
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/$.cof.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.wks.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      TAG = require("npm:core-js@0.9.18/library/modules/$.wks.js")('toStringTag'),
      toString = {}.toString;
  function cof(it) {
    return toString.call(it).slice(8, -1);
  }
  cof.classof = function(it) {
    var O,
        T;
    return it == undefined ? it === undefined ? 'Undefined' : 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
  };
  cof.set = function(it, tag, stat) {
    if (it && !$.has(it = stat ? it : it.prototype, TAG))
      $.hide(it, TAG, tag);
  };
  module.exports = cof;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/web.dom.iterable.js", ["npm:core-js@0.9.18/library/modules/es6.array.iterator.js", "npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.iter.js", "npm:core-js@0.9.18/library/modules/$.wks.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@0.9.18/library/modules/es6.array.iterator.js");
  var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
      Iterators = require("npm:core-js@0.9.18/library/modules/$.iter.js").Iterators,
      ITERATOR = require("npm:core-js@0.9.18/library/modules/$.wks.js")('iterator'),
      ArrayValues = Iterators.Array,
      NL = $.g.NodeList,
      HTC = $.g.HTMLCollection,
      NLProto = NL && NL.prototype,
      HTCProto = HTC && HTC.prototype;
  if ($.FW) {
    if (NL && !(ITERATOR in NLProto))
      $.hide(NLProto, ITERATOR, ArrayValues);
    if (HTC && !(ITERATOR in HTCProto))
      $.hide(HTCProto, ITERATOR, ArrayValues);
  }
  Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/es6.promise.js", ["npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.ctx.js", "npm:core-js@0.9.18/library/modules/$.cof.js", "npm:core-js@0.9.18/library/modules/$.def.js", "npm:core-js@0.9.18/library/modules/$.assert.js", "npm:core-js@0.9.18/library/modules/$.for-of.js", "npm:core-js@0.9.18/library/modules/$.set-proto.js", "npm:core-js@0.9.18/library/modules/$.same.js", "npm:core-js@0.9.18/library/modules/$.species.js", "npm:core-js@0.9.18/library/modules/$.wks.js", "npm:core-js@0.9.18/library/modules/$.uid.js", "npm:core-js@0.9.18/library/modules/$.task.js", "npm:core-js@0.9.18/library/modules/$.mix.js", "npm:core-js@0.9.18/library/modules/$.iter-detect.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var $ = require("npm:core-js@0.9.18/library/modules/$.js"),
        ctx = require("npm:core-js@0.9.18/library/modules/$.ctx.js"),
        cof = require("npm:core-js@0.9.18/library/modules/$.cof.js"),
        $def = require("npm:core-js@0.9.18/library/modules/$.def.js"),
        assert = require("npm:core-js@0.9.18/library/modules/$.assert.js"),
        forOf = require("npm:core-js@0.9.18/library/modules/$.for-of.js"),
        setProto = require("npm:core-js@0.9.18/library/modules/$.set-proto.js").set,
        same = require("npm:core-js@0.9.18/library/modules/$.same.js"),
        species = require("npm:core-js@0.9.18/library/modules/$.species.js"),
        SPECIES = require("npm:core-js@0.9.18/library/modules/$.wks.js")('species'),
        RECORD = require("npm:core-js@0.9.18/library/modules/$.uid.js").safe('record'),
        PROMISE = 'Promise',
        global = $.g,
        process = global.process,
        isNode = cof(process) == 'process',
        asap = process && process.nextTick || require("npm:core-js@0.9.18/library/modules/$.task.js").set,
        P = global[PROMISE],
        isFunction = $.isFunction,
        isObject = $.isObject,
        assertFunction = assert.fn,
        assertObject = assert.obj,
        Wrapper;
    function testResolve(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    }
    var useNative = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = isFunction(P) && isFunction(P.resolve) && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $.DESC) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    function isPromise(it) {
      return isObject(it) && (useNative ? cof.classof(it) == 'Promise' : RECORD in it);
    }
    function sameConstructor(a, b) {
      if (!$.FW && a === P && b === Wrapper)
        return true;
      return same(a, b);
    }
    function getConstructor(C) {
      var S = assertObject(C)[SPECIES];
      return S != undefined ? S : C;
    }
    function isThenable(it) {
      var then;
      if (isObject(it))
        then = it.then;
      return isFunction(then) ? then : false;
    }
    function notify(record) {
      var chain = record.c;
      if (chain.length)
        asap.call(global, function() {
          var value = record.v,
              ok = record.s == 1,
              i = 0;
          function run(react) {
            var cb = ok ? react.ok : react.fail,
                ret,
                then;
            try {
              if (cb) {
                if (!ok)
                  record.h = true;
                ret = cb === true ? value : cb(value);
                if (ret === react.P) {
                  react.rej(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(ret)) {
                  then.call(ret, react.res, react.rej);
                } else
                  react.res(ret);
              } else
                react.rej(value);
            } catch (err) {
              react.rej(err);
            }
          }
          while (chain.length > i)
            run(chain[i++]);
          chain.length = 0;
        });
    }
    function isUnhandled(promise) {
      var record = promise[RECORD],
          chain = record.a || record.c,
          i = 0,
          react;
      if (record.h)
        return false;
      while (chain.length > i) {
        react = chain[i++];
        if (react.fail || !isUnhandled(react.P))
          return false;
      }
      return true;
    }
    function $reject(value) {
      var record = this,
          promise;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      setTimeout(function() {
        asap.call(global, function() {
          if (isUnhandled(promise = record.p)) {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (global.console && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          }
          record.a = undefined;
        });
      }, 1);
      notify(record);
    }
    function $resolve(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (then = isThenable(value)) {
          asap.call(global, function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    }
    if (!useNative) {
      P = function Promise(executor) {
        assertFunction(executor);
        var record = {
          p: assert.inst(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false
        };
        $.hide(this, RECORD, record);
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      require("npm:core-js@0.9.18/library/modules/$.mix.js")(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var S = assertObject(assertObject(this).constructor)[SPECIES];
          var react = {
            ok: isFunction(onFulfilled) ? onFulfilled : true,
            fail: isFunction(onRejected) ? onRejected : false
          };
          var promise = react.P = new (S != undefined ? S : P)(function(res, rej) {
            react.res = assertFunction(res);
            react.rej = assertFunction(rej);
          });
          var record = this[RECORD];
          record.c.push(react);
          if (record.a)
            record.a.push(react);
          if (record.s)
            notify(record);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $def($def.G + $def.W + $def.F * !useNative, {Promise: P});
    cof.set(P, PROMISE);
    species(P);
    species(Wrapper = $.core[PROMISE]);
    $def($def.S + $def.F * !useNative, PROMISE, {reject: function reject(r) {
        return new (getConstructor(this))(function(res, rej) {
          rej(r);
        });
      }});
    $def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        return isPromise(x) && sameConstructor(x.constructor, this) ? x : new this(function(res) {
          res(x);
        });
      }});
    $def($def.S + $def.F * !(useNative && require("npm:core-js@0.9.18/library/modules/$.iter-detect.js")(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            values = [];
        return new C(function(res, rej) {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              C.resolve(promise).then(function(value) {
                results[index] = value;
                --remaining || res(results);
              }, rej);
            });
          else
            res(results);
        });
      },
      race: function race(iterable) {
        var C = getConstructor(this);
        return new C(function(res, rej) {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(res, rej);
          });
        });
      }
    });
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:debug@2.1.3/debug.js", ["npm:ms@0.7.0.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports = module.exports = debug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = require("npm:ms@0.7.0.js");
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevColor = 0;
  var prevTime;
  function selectColor() {
    return exports.colors[prevColor++ % exports.colors.length];
  }
  function debug(namespace) {
    function disabled() {}
    disabled.enabled = false;
    function enabled() {
      var self = enabled;
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      if (null == self.useColors)
        self.useColors = exports.useColors();
      if (null == self.color && self.useColors)
        self.color = selectColor();
      var args = Array.prototype.slice.call(arguments);
      args[0] = exports.coerce(args[0]);
      if ('string' !== typeof args[0]) {
        args = ['%o'].concat(args);
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
        if (match === '%%')
          return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      if ('function' === typeof exports.formatArgs) {
        args = exports.formatArgs.apply(self, args);
      }
      var logFn = enabled.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    enabled.enabled = true;
    var fn = exports.enabled(namespace) ? enabled : disabled;
    fn.namespace = namespace;
    return fn;
  }
  function enable(namespaces) {
    exports.save(namespaces);
    var split = (namespaces || '').split(/[\s,]+/);
    var len = split.length;
    for (var i = 0; i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  function disable() {
    exports.enable('');
  }
  function enabled(name) {
    var i,
        len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  function coerce(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.1.js", ["github:jspm/nodelibs-process@0.1.1/index.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-process@0.1.1/index.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactElement.js", ["npm:react@0.13.3/lib/ReactContext.js", "npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactContext = require("npm:react@0.13.3/lib/ReactContext.js");
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var RESERVED_PROPS = {
      key: true,
      ref: true
    };
    function defineWarningProperty(object, key) {
      Object.defineProperty(object, key, {
        configurable: false,
        enumerable: true,
        get: function() {
          if (!this._store) {
            return null;
          }
          return this._store[key];
        },
        set: function(value) {
          ("production" !== "production" ? warning(false, 'Don\'t set the %s property of the React element. Instead, ' + 'specify the correct value when initially creating the element.', key) : null);
          this._store[key] = value;
        }
      });
    }
    var useMutationMembrane = false;
    function defineMutationMembrane(prototype) {
      try {
        var pseudoFrozenProperties = {props: true};
        for (var key in pseudoFrozenProperties) {
          defineWarningProperty(prototype, key);
        }
        useMutationMembrane = true;
      } catch (x) {}
    }
    var ReactElement = function(type, key, ref, owner, context, props) {
      this.type = type;
      this.key = key;
      this.ref = ref;
      this._owner = owner;
      this._context = context;
      if ("production" !== "production") {
        this._store = {
          props: props,
          originalProps: assign({}, props)
        };
        try {
          Object.defineProperty(this._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true
          });
        } catch (x) {}
        this._store.validated = false;
        if (useMutationMembrane) {
          Object.freeze(this);
          return;
        }
      }
      this.props = props;
    };
    ReactElement.prototype = {_isReactElement: true};
    if ("production" !== "production") {
      defineMutationMembrane(ReactElement.prototype);
    }
    ReactElement.createElement = function(type, config, children) {
      var propName;
      var props = {};
      var key = null;
      var ref = null;
      if (config != null) {
        ref = config.ref === undefined ? null : config.ref;
        key = config.key === undefined ? null : '' + config.key;
        for (propName in config) {
          if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (typeof props[propName] === 'undefined') {
            props[propName] = defaultProps[propName];
          }
        }
      }
      return new ReactElement(type, key, ref, ReactCurrentOwner.current, ReactContext.current, props);
    };
    ReactElement.createFactory = function(type) {
      var factory = ReactElement.createElement.bind(null, type);
      factory.type = type;
      return factory;
    };
    ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
      var newElement = new ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._owner, oldElement._context, newProps);
      if ("production" !== "production") {
        newElement._store.validated = oldElement._store.validated;
      }
      return newElement;
    };
    ReactElement.cloneElement = function(element, config, children) {
      var propName;
      var props = assign({}, element.props);
      var key = element.key;
      var ref = element.ref;
      var owner = element._owner;
      if (config != null) {
        if (config.ref !== undefined) {
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }
        if (config.key !== undefined) {
          key = '' + config.key;
        }
        for (propName in config) {
          if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }
      return new ReactElement(element.type, key, ref, owner, element._context, props);
    };
    ReactElement.isValidElement = function(object) {
      var isElement = !!(object && object._isReactElement);
      return isElement;
    };
    module.exports = ReactElement;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactUpdates.js", ["npm:react@0.13.3/lib/CallbackQueue.js", "npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/ReactPerf.js", "npm:react@0.13.3/lib/ReactReconciler.js", "npm:react@0.13.3/lib/Transaction.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var CallbackQueue = require("npm:react@0.13.3/lib/CallbackQueue.js");
    var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var ReactPerf = require("npm:react@0.13.3/lib/ReactPerf.js");
    var ReactReconciler = require("npm:react@0.13.3/lib/ReactReconciler.js");
    var Transaction = require("npm:react@0.13.3/lib/Transaction.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var dirtyComponents = [];
    var asapCallbackQueue = CallbackQueue.getPooled();
    var asapEnqueued = false;
    var batchingStrategy = null;
    function ensureInjected() {
      ("production" !== "production" ? invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy));
    }
    var NESTED_UPDATES = {
      initialize: function() {
        this.dirtyComponentsLength = dirtyComponents.length;
      },
      close: function() {
        if (this.dirtyComponentsLength !== dirtyComponents.length) {
          dirtyComponents.splice(0, this.dirtyComponentsLength);
          flushBatchedUpdates();
        } else {
          dirtyComponents.length = 0;
        }
      }
    };
    var UPDATE_QUEUEING = {
      initialize: function() {
        this.callbackQueue.reset();
      },
      close: function() {
        this.callbackQueue.notifyAll();
      }
    };
    var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
    function ReactUpdatesFlushTransaction() {
      this.reinitializeTransaction();
      this.dirtyComponentsLength = null;
      this.callbackQueue = CallbackQueue.getPooled();
      this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    }
    assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
      getTransactionWrappers: function() {
        return TRANSACTION_WRAPPERS;
      },
      destructor: function() {
        this.dirtyComponentsLength = null;
        CallbackQueue.release(this.callbackQueue);
        this.callbackQueue = null;
        ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
        this.reconcileTransaction = null;
      },
      perform: function(method, scope, a) {
        return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
      }
    });
    PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
    function batchedUpdates(callback, a, b, c, d) {
      ensureInjected();
      batchingStrategy.batchedUpdates(callback, a, b, c, d);
    }
    function mountOrderComparator(c1, c2) {
      return c1._mountOrder - c2._mountOrder;
    }
    function runBatchedUpdates(transaction) {
      var len = transaction.dirtyComponentsLength;
      ("production" !== "production" ? invariant(len === dirtyComponents.length, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(len === dirtyComponents.length));
      dirtyComponents.sort(mountOrderComparator);
      for (var i = 0; i < len; i++) {
        var component = dirtyComponents[i];
        var callbacks = component._pendingCallbacks;
        component._pendingCallbacks = null;
        ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);
        if (callbacks) {
          for (var j = 0; j < callbacks.length; j++) {
            transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
          }
        }
      }
    }
    var flushBatchedUpdates = function() {
      while (dirtyComponents.length || asapEnqueued) {
        if (dirtyComponents.length) {
          var transaction = ReactUpdatesFlushTransaction.getPooled();
          transaction.perform(runBatchedUpdates, null, transaction);
          ReactUpdatesFlushTransaction.release(transaction);
        }
        if (asapEnqueued) {
          asapEnqueued = false;
          var queue = asapCallbackQueue;
          asapCallbackQueue = CallbackQueue.getPooled();
          queue.notifyAll();
          CallbackQueue.release(queue);
        }
      }
    };
    flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);
    function enqueueUpdate(component) {
      ensureInjected();
      ("production" !== "production" ? warning(ReactCurrentOwner.current == null, 'enqueueUpdate(): Render methods should be a pure function of props ' + 'and state; triggering nested component updates from render is not ' + 'allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.') : null);
      if (!batchingStrategy.isBatchingUpdates) {
        batchingStrategy.batchedUpdates(enqueueUpdate, component);
        return;
      }
      dirtyComponents.push(component);
    }
    function asap(callback, context) {
      ("production" !== "production" ? invariant(batchingStrategy.isBatchingUpdates, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(batchingStrategy.isBatchingUpdates));
      asapCallbackQueue.enqueue(callback, context);
      asapEnqueued = true;
    }
    var ReactUpdatesInjection = {
      injectReconcileTransaction: function(ReconcileTransaction) {
        ("production" !== "production" ? invariant(ReconcileTransaction, 'ReactUpdates: must provide a reconcile transaction class') : invariant(ReconcileTransaction));
        ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
      },
      injectBatchingStrategy: function(_batchingStrategy) {
        ("production" !== "production" ? invariant(_batchingStrategy, 'ReactUpdates: must provide a batching strategy') : invariant(_batchingStrategy));
        ("production" !== "production" ? invariant(typeof _batchingStrategy.batchedUpdates === 'function', 'ReactUpdates: must provide a batchedUpdates() function') : invariant(typeof _batchingStrategy.batchedUpdates === 'function'));
        ("production" !== "production" ? invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean', 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean'));
        batchingStrategy = _batchingStrategy;
      }
    };
    var ReactUpdates = {
      ReactReconcileTransaction: null,
      batchedUpdates: batchedUpdates,
      enqueueUpdate: enqueueUpdate,
      flushBatchedUpdates: flushBatchedUpdates,
      injection: ReactUpdatesInjection,
      asap: asap
    };
    module.exports = ReactUpdates;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/Danger.js", ["npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/createNodesFromMarkup.js", "npm:react@0.13.3/lib/emptyFunction.js", "npm:react@0.13.3/lib/getMarkupWrap.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
    var createNodesFromMarkup = require("npm:react@0.13.3/lib/createNodesFromMarkup.js");
    var emptyFunction = require("npm:react@0.13.3/lib/emptyFunction.js");
    var getMarkupWrap = require("npm:react@0.13.3/lib/getMarkupWrap.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
    var RESULT_INDEX_ATTR = 'data-danger-index';
    function getNodeName(markup) {
      return markup.substring(1, markup.indexOf(' '));
    }
    var Danger = {
      dangerouslyRenderMarkup: function(markupList) {
        ("production" !== "production" ? invariant(ExecutionEnvironment.canUseDOM, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'React.renderToString for server rendering.') : invariant(ExecutionEnvironment.canUseDOM));
        var nodeName;
        var markupByNodeName = {};
        for (var i = 0; i < markupList.length; i++) {
          ("production" !== "production" ? invariant(markupList[i], 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(markupList[i]));
          nodeName = getNodeName(markupList[i]);
          nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
          markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
          markupByNodeName[nodeName][i] = markupList[i];
        }
        var resultList = [];
        var resultListAssignmentCount = 0;
        for (nodeName in markupByNodeName) {
          if (!markupByNodeName.hasOwnProperty(nodeName)) {
            continue;
          }
          var markupListByNodeName = markupByNodeName[nodeName];
          var resultIndex;
          for (resultIndex in markupListByNodeName) {
            if (markupListByNodeName.hasOwnProperty(resultIndex)) {
              var markup = markupListByNodeName[resultIndex];
              markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP, '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
            }
          }
          var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction);
          for (var j = 0; j < renderNodes.length; ++j) {
            var renderNode = renderNodes[j];
            if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
              resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
              renderNode.removeAttribute(RESULT_INDEX_ATTR);
              ("production" !== "production" ? invariant(!resultList.hasOwnProperty(resultIndex), 'Danger: Assigning to an already-occupied result index.') : invariant(!resultList.hasOwnProperty(resultIndex)));
              resultList[resultIndex] = renderNode;
              resultListAssignmentCount += 1;
            } else if ("production" !== "production") {
              console.error('Danger: Discarding unexpected node:', renderNode);
            }
          }
        }
        ("production" !== "production" ? invariant(resultListAssignmentCount === resultList.length, 'Danger: Did not assign to every index of resultList.') : invariant(resultListAssignmentCount === resultList.length));
        ("production" !== "production" ? invariant(resultList.length === markupList.length, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(resultList.length === markupList.length));
        return resultList;
      },
      dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
        ("production" !== "production" ? invariant(ExecutionEnvironment.canUseDOM, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'React.renderToString for server rendering.') : invariant(ExecutionEnvironment.canUseDOM));
        ("production" !== "production" ? invariant(markup, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(markup));
        ("production" !== "production" ? invariant(oldChild.tagName.toLowerCase() !== 'html', 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See React.renderToString().') : invariant(oldChild.tagName.toLowerCase() !== 'html'));
        var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
        oldChild.parentNode.replaceChild(newChild, oldChild);
      }
    };
    module.exports = Danger;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactMount.js", ["npm:react@0.13.3/lib/DOMProperty.js", "npm:react@0.13.3/lib/ReactBrowserEventEmitter.js", "npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactElementValidator.js", "npm:react@0.13.3/lib/ReactEmptyComponent.js", "npm:react@0.13.3/lib/ReactInstanceHandles.js", "npm:react@0.13.3/lib/ReactInstanceMap.js", "npm:react@0.13.3/lib/ReactMarkupChecksum.js", "npm:react@0.13.3/lib/ReactPerf.js", "npm:react@0.13.3/lib/ReactReconciler.js", "npm:react@0.13.3/lib/ReactUpdateQueue.js", "npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/emptyObject.js", "npm:react@0.13.3/lib/containsNode.js", "npm:react@0.13.3/lib/getReactRootElementInContainer.js", "npm:react@0.13.3/lib/instantiateReactComponent.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/setInnerHTML.js", "npm:react@0.13.3/lib/shouldUpdateReactComponent.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var DOMProperty = require("npm:react@0.13.3/lib/DOMProperty.js");
    var ReactBrowserEventEmitter = require("npm:react@0.13.3/lib/ReactBrowserEventEmitter.js");
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactElementValidator = require("npm:react@0.13.3/lib/ReactElementValidator.js");
    var ReactEmptyComponent = require("npm:react@0.13.3/lib/ReactEmptyComponent.js");
    var ReactInstanceHandles = require("npm:react@0.13.3/lib/ReactInstanceHandles.js");
    var ReactInstanceMap = require("npm:react@0.13.3/lib/ReactInstanceMap.js");
    var ReactMarkupChecksum = require("npm:react@0.13.3/lib/ReactMarkupChecksum.js");
    var ReactPerf = require("npm:react@0.13.3/lib/ReactPerf.js");
    var ReactReconciler = require("npm:react@0.13.3/lib/ReactReconciler.js");
    var ReactUpdateQueue = require("npm:react@0.13.3/lib/ReactUpdateQueue.js");
    var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
    var emptyObject = require("npm:react@0.13.3/lib/emptyObject.js");
    var containsNode = require("npm:react@0.13.3/lib/containsNode.js");
    var getReactRootElementInContainer = require("npm:react@0.13.3/lib/getReactRootElementInContainer.js");
    var instantiateReactComponent = require("npm:react@0.13.3/lib/instantiateReactComponent.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var setInnerHTML = require("npm:react@0.13.3/lib/setInnerHTML.js");
    var shouldUpdateReactComponent = require("npm:react@0.13.3/lib/shouldUpdateReactComponent.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var SEPARATOR = ReactInstanceHandles.SEPARATOR;
    var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
    var nodeCache = {};
    var ELEMENT_NODE_TYPE = 1;
    var DOC_NODE_TYPE = 9;
    var instancesByReactRootID = {};
    var containersByReactRootID = {};
    if ("production" !== "production") {
      var rootElementsByReactRootID = {};
    }
    var findComponentRootReusableArray = [];
    function firstDifferenceIndex(string1, string2) {
      var minLen = Math.min(string1.length, string2.length);
      for (var i = 0; i < minLen; i++) {
        if (string1.charAt(i) !== string2.charAt(i)) {
          return i;
        }
      }
      return string1.length === string2.length ? -1 : minLen;
    }
    function getReactRootID(container) {
      var rootElement = getReactRootElementInContainer(container);
      return rootElement && ReactMount.getID(rootElement);
    }
    function getID(node) {
      var id = internalGetID(node);
      if (id) {
        if (nodeCache.hasOwnProperty(id)) {
          var cached = nodeCache[id];
          if (cached !== node) {
            ("production" !== "production" ? invariant(!isValid(cached, id), 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(!isValid(cached, id)));
            nodeCache[id] = node;
          }
        } else {
          nodeCache[id] = node;
        }
      }
      return id;
    }
    function internalGetID(node) {
      return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
    }
    function setID(node, id) {
      var oldID = internalGetID(node);
      if (oldID !== id) {
        delete nodeCache[oldID];
      }
      node.setAttribute(ATTR_NAME, id);
      nodeCache[id] = node;
    }
    function getNode(id) {
      if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
        nodeCache[id] = ReactMount.findReactNodeByID(id);
      }
      return nodeCache[id];
    }
    function getNodeFromInstance(instance) {
      var id = ReactInstanceMap.get(instance)._rootNodeID;
      if (ReactEmptyComponent.isNullComponentID(id)) {
        return null;
      }
      if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
        nodeCache[id] = ReactMount.findReactNodeByID(id);
      }
      return nodeCache[id];
    }
    function isValid(node, id) {
      if (node) {
        ("production" !== "production" ? invariant(internalGetID(node) === id, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(internalGetID(node) === id));
        var container = ReactMount.findReactContainerForID(id);
        if (container && containsNode(container, node)) {
          return true;
        }
      }
      return false;
    }
    function purgeID(id) {
      delete nodeCache[id];
    }
    var deepestNodeSoFar = null;
    function findDeepestCachedAncestorImpl(ancestorID) {
      var ancestor = nodeCache[ancestorID];
      if (ancestor && isValid(ancestor, ancestorID)) {
        deepestNodeSoFar = ancestor;
      } else {
        return false;
      }
    }
    function findDeepestCachedAncestor(targetID) {
      deepestNodeSoFar = null;
      ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);
      var foundNode = deepestNodeSoFar;
      deepestNodeSoFar = null;
      return foundNode;
    }
    function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup) {
      var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, emptyObject);
      componentInstance._isTopLevel = true;
      ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup);
    }
    function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup) {
      var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
      transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup);
      ReactUpdates.ReactReconcileTransaction.release(transaction);
    }
    var ReactMount = {
      _instancesByReactRootID: instancesByReactRootID,
      scrollMonitor: function(container, renderCallback) {
        renderCallback();
      },
      _updateRootComponent: function(prevComponent, nextElement, container, callback) {
        if ("production" !== "production") {
          ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
        }
        ReactMount.scrollMonitor(container, function() {
          ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
          if (callback) {
            ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
          }
        });
        if ("production" !== "production") {
          rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
        }
        return prevComponent;
      },
      _registerComponent: function(nextComponent, container) {
        ("production" !== "production" ? invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)), '_registerComponent(...): Target container is not a DOM element.') : invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE))));
        ReactBrowserEventEmitter.ensureScrollValueMonitoring();
        var reactRootID = ReactMount.registerContainer(container);
        instancesByReactRootID[reactRootID] = nextComponent;
        return reactRootID;
      },
      _renderNewRootComponent: function(nextElement, container, shouldReuseMarkup) {
        ("production" !== "production" ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.') : null);
        var componentInstance = instantiateReactComponent(nextElement, null);
        var reactRootID = ReactMount._registerComponent(componentInstance, container);
        ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup);
        if ("production" !== "production") {
          rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
        }
        return componentInstance;
      },
      render: function(nextElement, container, callback) {
        ("production" !== "production" ? invariant(ReactElement.isValidElement(nextElement), 'React.render(): Invalid component element.%s', (typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '')) : invariant(ReactElement.isValidElement(nextElement)));
        var prevComponent = instancesByReactRootID[getReactRootID(container)];
        if (prevComponent) {
          var prevElement = prevComponent._currentElement;
          if (shouldUpdateReactComponent(prevElement, nextElement)) {
            return ReactMount._updateRootComponent(prevComponent, nextElement, container, callback).getPublicInstance();
          } else {
            ReactMount.unmountComponentAtNode(container);
          }
        }
        var reactRootElement = getReactRootElementInContainer(container);
        var containerHasReactMarkup = reactRootElement && ReactMount.isRenderedByReact(reactRootElement);
        if ("production" !== "production") {
          if (!containerHasReactMarkup || reactRootElement.nextSibling) {
            var rootElementSibling = reactRootElement;
            while (rootElementSibling) {
              if (ReactMount.isRenderedByReact(rootElementSibling)) {
                ("production" !== "production" ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : null);
                break;
              }
              rootElementSibling = rootElementSibling.nextSibling;
            }
          }
        }
        var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;
        var component = ReactMount._renderNewRootComponent(nextElement, container, shouldReuseMarkup).getPublicInstance();
        if (callback) {
          callback.call(component);
        }
        return component;
      },
      constructAndRenderComponent: function(constructor, props, container) {
        var element = ReactElement.createElement(constructor, props);
        return ReactMount.render(element, container);
      },
      constructAndRenderComponentByID: function(constructor, props, id) {
        var domNode = document.getElementById(id);
        ("production" !== "production" ? invariant(domNode, 'Tried to get element with id of "%s" but it is not present on the page.', id) : invariant(domNode));
        return ReactMount.constructAndRenderComponent(constructor, props, domNode);
      },
      registerContainer: function(container) {
        var reactRootID = getReactRootID(container);
        if (reactRootID) {
          reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
        }
        if (!reactRootID) {
          reactRootID = ReactInstanceHandles.createReactRootID();
        }
        containersByReactRootID[reactRootID] = container;
        return reactRootID;
      },
      unmountComponentAtNode: function(container) {
        ("production" !== "production" ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function of ' + 'props and state; triggering nested component updates from render is ' + 'not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.') : null);
        ("production" !== "production" ? invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)), 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE))));
        var reactRootID = getReactRootID(container);
        var component = instancesByReactRootID[reactRootID];
        if (!component) {
          return false;
        }
        ReactMount.unmountComponentFromNode(component, container);
        delete instancesByReactRootID[reactRootID];
        delete containersByReactRootID[reactRootID];
        if ("production" !== "production") {
          delete rootElementsByReactRootID[reactRootID];
        }
        return true;
      },
      unmountComponentFromNode: function(instance, container) {
        ReactReconciler.unmountComponent(instance);
        if (container.nodeType === DOC_NODE_TYPE) {
          container = container.documentElement;
        }
        while (container.lastChild) {
          container.removeChild(container.lastChild);
        }
      },
      findReactContainerForID: function(id) {
        var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
        var container = containersByReactRootID[reactRootID];
        if ("production" !== "production") {
          var rootElement = rootElementsByReactRootID[reactRootID];
          if (rootElement && rootElement.parentNode !== container) {
            ("production" !== "production" ? invariant(internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : invariant(internalGetID(rootElement) === reactRootID));
            var containerChild = container.firstChild;
            if (containerChild && reactRootID === internalGetID(containerChild)) {
              rootElementsByReactRootID[reactRootID] = containerChild;
            } else {
              ("production" !== "production" ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container:', rootElement.parentNode) : null);
            }
          }
        }
        return container;
      },
      findReactNodeByID: function(id) {
        var reactRoot = ReactMount.findReactContainerForID(id);
        return ReactMount.findComponentRoot(reactRoot, id);
      },
      isRenderedByReact: function(node) {
        if (node.nodeType !== 1) {
          return false;
        }
        var id = ReactMount.getID(node);
        return id ? id.charAt(0) === SEPARATOR : false;
      },
      getFirstReactDOM: function(node) {
        var current = node;
        while (current && current.parentNode !== current) {
          if (ReactMount.isRenderedByReact(current)) {
            return current;
          }
          current = current.parentNode;
        }
        return null;
      },
      findComponentRoot: function(ancestorNode, targetID) {
        var firstChildren = findComponentRootReusableArray;
        var childIndex = 0;
        var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;
        firstChildren[0] = deepestAncestor.firstChild;
        firstChildren.length = 1;
        while (childIndex < firstChildren.length) {
          var child = firstChildren[childIndex++];
          var targetChild;
          while (child) {
            var childID = ReactMount.getID(child);
            if (childID) {
              if (targetID === childID) {
                targetChild = child;
              } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
                firstChildren.length = childIndex = 0;
                firstChildren.push(child.firstChild);
              }
            } else {
              firstChildren.push(child.firstChild);
            }
            child = child.nextSibling;
          }
          if (targetChild) {
            firstChildren.length = 0;
            return targetChild;
          }
        }
        firstChildren.length = 0;
        ("production" !== "production" ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false));
      },
      _mountImageIntoNode: function(markup, container, shouldReuseMarkup) {
        ("production" !== "production" ? invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)), 'mountComponentIntoNode(...): Target container is not valid.') : invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE))));
        if (shouldReuseMarkup) {
          var rootElement = getReactRootElementInContainer(container);
          if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
            return;
          } else {
            var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
            rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
            var rootMarkup = rootElement.outerHTML;
            rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
            var diffIndex = firstDifferenceIndex(markup, rootMarkup);
            var difference = ' (client) ' + markup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
            ("production" !== "production" ? invariant(container.nodeType !== DOC_NODE_TYPE, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(container.nodeType !== DOC_NODE_TYPE));
            if ("production" !== "production") {
              ("production" !== "production" ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : null);
            }
          }
        }
        ("production" !== "production" ? invariant(container.nodeType !== DOC_NODE_TYPE, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See React.renderToString() for server rendering.') : invariant(container.nodeType !== DOC_NODE_TYPE));
        setInnerHTML(container, markup);
      },
      getReactRootID: getReactRootID,
      getID: getID,
      setID: setID,
      getNode: getNode,
      getNodeFromInstance: getNodeFromInstance,
      purgeID: purgeID
    };
    ReactPerf.measureMethods(ReactMount, 'ReactMount', {
      _renderNewRootComponent: '_renderNewRootComponent',
      _mountImageIntoNode: '_mountImageIntoNode'
    });
    module.exports = ReactMount;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMComponent.js", ["npm:react@0.13.3/lib/CSSPropertyOperations.js", "npm:react@0.13.3/lib/DOMProperty.js", "npm:react@0.13.3/lib/DOMPropertyOperations.js", "npm:react@0.13.3/lib/ReactBrowserEventEmitter.js", "npm:react@0.13.3/lib/ReactComponentBrowserEnvironment.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/ReactMultiChild.js", "npm:react@0.13.3/lib/ReactPerf.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/escapeTextContentForBrowser.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/isEventSupported.js", "npm:react@0.13.3/lib/keyOf.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var CSSPropertyOperations = require("npm:react@0.13.3/lib/CSSPropertyOperations.js");
    var DOMProperty = require("npm:react@0.13.3/lib/DOMProperty.js");
    var DOMPropertyOperations = require("npm:react@0.13.3/lib/DOMPropertyOperations.js");
    var ReactBrowserEventEmitter = require("npm:react@0.13.3/lib/ReactBrowserEventEmitter.js");
    var ReactComponentBrowserEnvironment = require("npm:react@0.13.3/lib/ReactComponentBrowserEnvironment.js");
    var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
    var ReactMultiChild = require("npm:react@0.13.3/lib/ReactMultiChild.js");
    var ReactPerf = require("npm:react@0.13.3/lib/ReactPerf.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var escapeTextContentForBrowser = require("npm:react@0.13.3/lib/escapeTextContentForBrowser.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var isEventSupported = require("npm:react@0.13.3/lib/isEventSupported.js");
    var keyOf = require("npm:react@0.13.3/lib/keyOf.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var deleteListener = ReactBrowserEventEmitter.deleteListener;
    var listenTo = ReactBrowserEventEmitter.listenTo;
    var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;
    var CONTENT_TYPES = {
      'string': true,
      'number': true
    };
    var STYLE = keyOf({style: null});
    var ELEMENT_NODE_TYPE = 1;
    var BackendIDOperations = null;
    function assertValidProps(props) {
      if (!props) {
        return;
      }
      if (props.dangerouslySetInnerHTML != null) {
        ("production" !== "production" ? invariant(props.children == null, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(props.children == null));
        ("production" !== "production" ? invariant(typeof props.dangerouslySetInnerHTML === 'object' && '__html' in props.dangerouslySetInnerHTML, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(typeof props.dangerouslySetInnerHTML === 'object' && '__html' in props.dangerouslySetInnerHTML));
      }
      if ("production" !== "production") {
        ("production" !== "production" ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : null);
        ("production" !== "production" ? warning(!props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : null);
      }
      ("production" !== "production" ? invariant(props.style == null || typeof props.style === 'object', 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.') : invariant(props.style == null || typeof props.style === 'object'));
    }
    function putListener(id, registrationName, listener, transaction) {
      if ("production" !== "production") {
        ("production" !== "production" ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : null);
      }
      var container = ReactMount.findReactContainerForID(id);
      if (container) {
        var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
        listenTo(registrationName, doc);
      }
      transaction.getPutListenerQueue().enqueuePutListener(id, registrationName, listener);
    }
    var omittedCloseTags = {
      'area': true,
      'base': true,
      'br': true,
      'col': true,
      'embed': true,
      'hr': true,
      'img': true,
      'input': true,
      'keygen': true,
      'link': true,
      'meta': true,
      'param': true,
      'source': true,
      'track': true,
      'wbr': true
    };
    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var validatedTagCache = {};
    var hasOwnProperty = {}.hasOwnProperty;
    function validateDangerousTag(tag) {
      if (!hasOwnProperty.call(validatedTagCache, tag)) {
        ("production" !== "production" ? invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag) : invariant(VALID_TAG_REGEX.test(tag)));
        validatedTagCache[tag] = true;
      }
    }
    function ReactDOMComponent(tag) {
      validateDangerousTag(tag);
      this._tag = tag;
      this._renderedChildren = null;
      this._previousStyleCopy = null;
      this._rootNodeID = null;
    }
    ReactDOMComponent.displayName = 'ReactDOMComponent';
    ReactDOMComponent.Mixin = {
      construct: function(element) {
        this._currentElement = element;
      },
      mountComponent: function(rootID, transaction, context) {
        this._rootNodeID = rootID;
        assertValidProps(this._currentElement.props);
        var closeTag = omittedCloseTags[this._tag] ? '' : '</' + this._tag + '>';
        return (this._createOpenTagMarkupAndPutListeners(transaction) + this._createContentMarkup(transaction, context) + closeTag);
      },
      _createOpenTagMarkupAndPutListeners: function(transaction) {
        var props = this._currentElement.props;
        var ret = '<' + this._tag;
        for (var propKey in props) {
          if (!props.hasOwnProperty(propKey)) {
            continue;
          }
          var propValue = props[propKey];
          if (propValue == null) {
            continue;
          }
          if (registrationNameModules.hasOwnProperty(propKey)) {
            putListener(this._rootNodeID, propKey, propValue, transaction);
          } else {
            if (propKey === STYLE) {
              if (propValue) {
                propValue = this._previousStyleCopy = assign({}, props.style);
              }
              propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
            }
            var markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
            if (markup) {
              ret += ' ' + markup;
            }
          }
        }
        if (transaction.renderToStaticMarkup) {
          return ret + '>';
        }
        var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
        return ret + ' ' + markupForID + '>';
      },
      _createContentMarkup: function(transaction, context) {
        var prefix = '';
        if (this._tag === 'listing' || this._tag === 'pre' || this._tag === 'textarea') {
          prefix = '\n';
        }
        var props = this._currentElement.props;
        var innerHTML = props.dangerouslySetInnerHTML;
        if (innerHTML != null) {
          if (innerHTML.__html != null) {
            return prefix + innerHTML.__html;
          }
        } else {
          var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
          var childrenToUse = contentToUse != null ? null : props.children;
          if (contentToUse != null) {
            return prefix + escapeTextContentForBrowser(contentToUse);
          } else if (childrenToUse != null) {
            var mountImages = this.mountChildren(childrenToUse, transaction, context);
            return prefix + mountImages.join('');
          }
        }
        return prefix;
      },
      receiveComponent: function(nextElement, transaction, context) {
        var prevElement = this._currentElement;
        this._currentElement = nextElement;
        this.updateComponent(transaction, prevElement, nextElement, context);
      },
      updateComponent: function(transaction, prevElement, nextElement, context) {
        assertValidProps(this._currentElement.props);
        this._updateDOMProperties(prevElement.props, transaction);
        this._updateDOMChildren(prevElement.props, transaction, context);
      },
      _updateDOMProperties: function(lastProps, transaction) {
        var nextProps = this._currentElement.props;
        var propKey;
        var styleName;
        var styleUpdates;
        for (propKey in lastProps) {
          if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
            continue;
          }
          if (propKey === STYLE) {
            var lastStyle = this._previousStyleCopy;
            for (styleName in lastStyle) {
              if (lastStyle.hasOwnProperty(styleName)) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            this._previousStyleCopy = null;
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            deleteListener(this._rootNodeID, propKey);
          } else if (DOMProperty.isStandardName[propKey] || DOMProperty.isCustomAttribute(propKey)) {
            BackendIDOperations.deletePropertyByID(this._rootNodeID, propKey);
          }
        }
        for (propKey in nextProps) {
          var nextProp = nextProps[propKey];
          var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
          if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
            continue;
          }
          if (propKey === STYLE) {
            if (nextProp) {
              nextProp = this._previousStyleCopy = assign({}, nextProp);
            } else {
              this._previousStyleCopy = null;
            }
            if (lastProp) {
              for (styleName in lastProp) {
                if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = '';
                }
              }
              for (styleName in nextProp) {
                if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = nextProp[styleName];
                }
              }
            } else {
              styleUpdates = nextProp;
            }
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            putListener(this._rootNodeID, propKey, nextProp, transaction);
          } else if (DOMProperty.isStandardName[propKey] || DOMProperty.isCustomAttribute(propKey)) {
            BackendIDOperations.updatePropertyByID(this._rootNodeID, propKey, nextProp);
          }
        }
        if (styleUpdates) {
          BackendIDOperations.updateStylesByID(this._rootNodeID, styleUpdates);
        }
      },
      _updateDOMChildren: function(lastProps, transaction, context) {
        var nextProps = this._currentElement.props;
        var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
        var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
        var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
        var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
        var lastChildren = lastContent != null ? null : lastProps.children;
        var nextChildren = nextContent != null ? null : nextProps.children;
        var lastHasContentOrHtml = lastContent != null || lastHtml != null;
        var nextHasContentOrHtml = nextContent != null || nextHtml != null;
        if (lastChildren != null && nextChildren == null) {
          this.updateChildren(null, transaction, context);
        } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
          this.updateTextContent('');
        }
        if (nextContent != null) {
          if (lastContent !== nextContent) {
            this.updateTextContent('' + nextContent);
          }
        } else if (nextHtml != null) {
          if (lastHtml !== nextHtml) {
            BackendIDOperations.updateInnerHTMLByID(this._rootNodeID, nextHtml);
          }
        } else if (nextChildren != null) {
          this.updateChildren(nextChildren, transaction, context);
        }
      },
      unmountComponent: function() {
        this.unmountChildren();
        ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
        ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
        this._rootNodeID = null;
      }
    };
    ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
      mountComponent: 'mountComponent',
      updateComponent: 'updateComponent'
    });
    assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
    ReactDOMComponent.injection = {injectIDOperations: function(IDOperations) {
        ReactDOMComponent.BackendIDOperations = BackendIDOperations = IDOperations;
      }};
    module.exports = ReactDOMComponent;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/BeforeInputEventPlugin.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/EventPropagators.js", "npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/FallbackCompositionState.js", "npm:react@0.13.3/lib/SyntheticCompositionEvent.js", "npm:react@0.13.3/lib/SyntheticInputEvent.js", "npm:react@0.13.3/lib/keyOf.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
  var EventPropagators = require("npm:react@0.13.3/lib/EventPropagators.js");
  var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
  var FallbackCompositionState = require("npm:react@0.13.3/lib/FallbackCompositionState.js");
  var SyntheticCompositionEvent = require("npm:react@0.13.3/lib/SyntheticCompositionEvent.js");
  var SyntheticInputEvent = require("npm:react@0.13.3/lib/SyntheticInputEvent.js");
  var keyOf = require("npm:react@0.13.3/lib/keyOf.js");
  var END_KEYCODES = [9, 13, 27, 32];
  var START_KEYCODE = 229;
  var canUseCompositionEvent = (ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window);
  var documentMode = null;
  if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
    documentMode = document.documentMode;
  }
  var canUseTextInputEvent = (ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto());
  var useFallbackCompositionData = (ExecutionEnvironment.canUseDOM && ((!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11)));
  function isPresto() {
    var opera = window.opera;
    return (typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12);
  }
  var SPACEBAR_CODE = 32;
  var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: keyOf({onBeforeInput: null}),
        captured: keyOf({onBeforeInputCapture: null})
      },
      dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionEnd: null}),
        captured: keyOf({onCompositionEndCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionStart: null}),
        captured: keyOf({onCompositionStartCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionUpdate: null}),
        captured: keyOf({onCompositionUpdateCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    }
  };
  var hasSpaceKeypress = false;
  function isKeypressCommand(nativeEvent) {
    return ((nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey));
  }
  function getCompositionEventType(topLevelType) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionStart:
        return eventTypes.compositionStart;
      case topLevelTypes.topCompositionEnd:
        return eventTypes.compositionEnd;
      case topLevelTypes.topCompositionUpdate:
        return eventTypes.compositionUpdate;
    }
  }
  function isFallbackCompositionStart(topLevelType, nativeEvent) {
    return (topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE);
  }
  function isFallbackCompositionEnd(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topKeyUp:
        return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
      case topLevelTypes.topKeyDown:
        return (nativeEvent.keyCode !== START_KEYCODE);
      case topLevelTypes.topKeyPress:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topBlur:
        return true;
      default:
        return false;
    }
  }
  function getDataFromCustomEvent(nativeEvent) {
    var detail = nativeEvent.detail;
    if (typeof detail === 'object' && 'data' in detail) {
      return detail.data;
    }
    return null;
  }
  var currentComposition = null;
  function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
    var eventType;
    var fallbackData;
    if (canUseCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }
    if (!eventType) {
      return null;
    }
    if (useFallbackCompositionData) {
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          fallbackData = currentComposition.getData();
        }
      }
    }
    var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent);
    if (fallbackData) {
      event.data = fallbackData;
    } else {
      var customData = getDataFromCustomEvent(nativeEvent);
      if (customData !== null) {
        event.data = customData;
      }
    }
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  function getNativeBeforeInputChars(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionEnd:
        return getDataFromCustomEvent(nativeEvent);
      case topLevelTypes.topKeyPress:
        var which = nativeEvent.which;
        if (which !== SPACEBAR_CODE) {
          return null;
        }
        hasSpaceKeypress = true;
        return SPACEBAR_CHAR;
      case topLevelTypes.topTextInput:
        var chars = nativeEvent.data;
        if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
          return null;
        }
        return chars;
      default:
        return null;
    }
  }
  function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
    if (currentComposition) {
      if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
        var chars = currentComposition.getData();
        FallbackCompositionState.release(currentComposition);
        currentComposition = null;
        return chars;
      }
      return null;
    }
    switch (topLevelType) {
      case topLevelTypes.topPaste:
        return null;
      case topLevelTypes.topKeyPress:
        if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
          return String.fromCharCode(nativeEvent.which);
        }
        return null;
      case topLevelTypes.topCompositionEnd:
        return useFallbackCompositionData ? null : nativeEvent.data;
      default:
        return null;
    }
  }
  function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
    var chars;
    if (canUseTextInputEvent) {
      chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
    } else {
      chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
    }
    if (!chars) {
      return null;
    }
    var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent);
    event.data = chars;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  var BeforeInputEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent)];
    }
  };
  module.exports = BeforeInputEventPlugin;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactReconcileTransaction.js", ["npm:react@0.13.3/lib/CallbackQueue.js", "npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/ReactBrowserEventEmitter.js", "npm:react@0.13.3/lib/ReactInputSelection.js", "npm:react@0.13.3/lib/ReactPutListenerQueue.js", "npm:react@0.13.3/lib/Transaction.js", "npm:react@0.13.3/lib/Object.assign.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var CallbackQueue = require("npm:react@0.13.3/lib/CallbackQueue.js");
  var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
  var ReactBrowserEventEmitter = require("npm:react@0.13.3/lib/ReactBrowserEventEmitter.js");
  var ReactInputSelection = require("npm:react@0.13.3/lib/ReactInputSelection.js");
  var ReactPutListenerQueue = require("npm:react@0.13.3/lib/ReactPutListenerQueue.js");
  var Transaction = require("npm:react@0.13.3/lib/Transaction.js");
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  var SELECTION_RESTORATION = {
    initialize: ReactInputSelection.getSelectionInformation,
    close: ReactInputSelection.restoreSelection
  };
  var EVENT_SUPPRESSION = {
    initialize: function() {
      var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
      ReactBrowserEventEmitter.setEnabled(false);
      return currentlyEnabled;
    },
    close: function(previouslyEnabled) {
      ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
    }
  };
  var ON_DOM_READY_QUEUEING = {
    initialize: function() {
      this.reactMountReady.reset();
    },
    close: function() {
      this.reactMountReady.notifyAll();
    }
  };
  var PUT_LISTENER_QUEUEING = {
    initialize: function() {
      this.putListenerQueue.reset();
    },
    close: function() {
      this.putListenerQueue.putListeners();
    }
  };
  var TRANSACTION_WRAPPERS = [PUT_LISTENER_QUEUEING, SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
  function ReactReconcileTransaction() {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = false;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.putListenerQueue = ReactPutListenerQueue.getPooled();
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return this.reactMountReady;
    },
    getPutListenerQueue: function() {
      return this.putListenerQueue;
    },
    destructor: function() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
      ReactPutListenerQueue.release(this.putListenerQueue);
      this.putListenerQueue = null;
    }
  };
  assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactReconcileTransaction);
  module.exports = ReactReconcileTransaction;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/core-js/object/get-own-property-descriptor.js", ["npm:core-js@0.9.18/library/fn/object/get-own-property-descriptor.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.18/library/fn/object/get-own-property-descriptor.js"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/fn/object/set-prototype-of.js", ["npm:core-js@0.9.18/library/modules/es6.object.set-prototype-of.js", "npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@0.9.18/library/modules/es6.object.set-prototype-of.js");
  module.exports = require("npm:core-js@0.9.18/library/modules/$.js").core.Object.setPrototypeOf;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/fn/object/assign.js", ["npm:core-js@0.9.18/library/modules/es6.object.assign.js", "npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@0.9.18/library/modules/es6.object.assign.js");
  module.exports = require("npm:core-js@0.9.18/library/modules/$.js").core.Object.assign;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/modules/es6.object.to-string.js", ["npm:core-js@0.9.18/library/modules/$.cof.js", "npm:core-js@0.9.18/library/modules/$.wks.js", "npm:core-js@0.9.18/library/modules/$.js", "npm:core-js@0.9.18/library/modules/$.redef.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var cof = require("npm:core-js@0.9.18/library/modules/$.cof.js"),
      tmp = {};
  tmp[require("npm:core-js@0.9.18/library/modules/$.wks.js")('toStringTag')] = 'z';
  if (require("npm:core-js@0.9.18/library/modules/$.js").FW && cof(tmp) != 'z') {
    require("npm:core-js@0.9.18/library/modules/$.redef.js")(Object.prototype, 'toString', function toString() {
      return '[object ' + cof.classof(this) + ']';
    }, true);
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:debug@2.1.3/browser.js", ["npm:debug@2.1.3/debug.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports = module.exports = require("npm:debug@2.1.3/debug.js");
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  var storage;
  if (typeof chrome !== 'undefined' && typeof chrome.storage !== 'undefined')
    storage = chrome.storage.local;
  else
    storage = localstorage();
  exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
  function useColors() {
    return ('WebkitAppearance' in document.documentElement.style) || (window.console && (console.firebug || (console.exception && console.table))) || (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
  }
  exports.formatters.j = function(v) {
    return JSON.stringify(v);
  };
  function formatArgs() {
    var args = arguments;
    var useColors = this.useColors;
    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
    if (!useColors)
      return args;
    var c = 'color: ' + this.color;
    args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-z%]/g, function(match) {
      if ('%%' === match)
        return;
      index++;
      if ('%c' === match) {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
    return args;
  }
  function log() {
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function save(namespaces) {
    try {
      if (null == namespaces) {
        storage.removeItem('debug');
      } else {
        storage.debug = namespaces;
      }
    } catch (e) {}
  }
  function load() {
    var r;
    try {
      r = storage.debug;
    } catch (e) {}
    return r;
  }
  exports.enable(load());
  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/invariant.js", ["github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var invariant = function(condition, format, a, b, c, d, e, f) {
      if ("production" !== "production") {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      }
      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error('Invariant Violation: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactFragment.js", ["npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    if ("production" !== "production") {
      var fragmentKey = '_reactFragment';
      var didWarnKey = '_reactDidWarn';
      var canWarnForReactFragment = false;
      try {
        var dummy = function() {
          return 1;
        };
        Object.defineProperty({}, fragmentKey, {
          enumerable: false,
          value: true
        });
        Object.defineProperty({}, 'key', {
          enumerable: true,
          get: dummy
        });
        canWarnForReactFragment = true;
      } catch (x) {}
      var proxyPropertyAccessWithWarning = function(obj, key) {
        Object.defineProperty(obj, key, {
          enumerable: true,
          get: function() {
            ("production" !== "production" ? warning(this[didWarnKey], 'A ReactFragment is an opaque type. Accessing any of its ' + 'properties is deprecated. Pass it to one of the React.Children ' + 'helpers.') : null);
            this[didWarnKey] = true;
            return this[fragmentKey][key];
          },
          set: function(value) {
            ("production" !== "production" ? warning(this[didWarnKey], 'A ReactFragment is an immutable opaque type. Mutating its ' + 'properties is deprecated.') : null);
            this[didWarnKey] = true;
            this[fragmentKey][key] = value;
          }
        });
      };
      var issuedWarnings = {};
      var didWarnForFragment = function(fragment) {
        var fragmentCacheKey = '';
        for (var key in fragment) {
          fragmentCacheKey += key + ':' + (typeof fragment[key]) + ',';
        }
        var alreadyWarnedOnce = !!issuedWarnings[fragmentCacheKey];
        issuedWarnings[fragmentCacheKey] = true;
        return alreadyWarnedOnce;
      };
    }
    var ReactFragment = {
      create: function(object) {
        if ("production" !== "production") {
          if (typeof object !== 'object' || !object || Array.isArray(object)) {
            ("production" !== "production" ? warning(false, 'React.addons.createFragment only accepts a single object.', object) : null);
            return object;
          }
          if (ReactElement.isValidElement(object)) {
            ("production" !== "production" ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : null);
            return object;
          }
          if (canWarnForReactFragment) {
            var proxy = {};
            Object.defineProperty(proxy, fragmentKey, {
              enumerable: false,
              value: object
            });
            Object.defineProperty(proxy, didWarnKey, {
              writable: true,
              enumerable: false,
              value: false
            });
            for (var key in object) {
              proxyPropertyAccessWithWarning(proxy, key);
            }
            Object.preventExtensions(proxy);
            return proxy;
          }
        }
        return object;
      },
      extract: function(fragment) {
        if ("production" !== "production") {
          if (canWarnForReactFragment) {
            if (!fragment[fragmentKey]) {
              ("production" !== "production" ? warning(didWarnForFragment(fragment), 'Any use of a keyed object should be wrapped in ' + 'React.addons.createFragment(object) before being passed as a ' + 'child.') : null);
              return fragment;
            }
            return fragment[fragmentKey];
          }
        }
        return fragment;
      },
      extractIfFragment: function(fragment) {
        if ("production" !== "production") {
          if (canWarnForReactFragment) {
            if (fragment[fragmentKey]) {
              return fragment[fragmentKey];
            }
            for (var key in fragment) {
              if (fragment.hasOwnProperty(key) && ReactElement.isValidElement(fragment[key])) {
                return ReactFragment.extract(fragment);
              }
            }
          }
        }
        return fragment;
      }
    };
    module.exports = ReactFragment;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactUpdateQueue.js", ["npm:react@0.13.3/lib/ReactLifeCycle.js", "npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactInstanceMap.js", "npm:react@0.13.3/lib/ReactUpdates.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactLifeCycle = require("npm:react@0.13.3/lib/ReactLifeCycle.js");
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactInstanceMap = require("npm:react@0.13.3/lib/ReactInstanceMap.js");
    var ReactUpdates = require("npm:react@0.13.3/lib/ReactUpdates.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    function enqueueUpdate(internalInstance) {
      if (internalInstance !== ReactLifeCycle.currentlyMountingInstance) {
        ReactUpdates.enqueueUpdate(internalInstance);
      }
    }
    function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
      ("production" !== "production" ? invariant(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.', callerName) : invariant(ReactCurrentOwner.current == null));
      var internalInstance = ReactInstanceMap.get(publicInstance);
      if (!internalInstance) {
        if ("production" !== "production") {
          ("production" !== "production" ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted ' + 'component. This is a no-op.', callerName, callerName) : null);
        }
        return null;
      }
      if (internalInstance === ReactLifeCycle.currentlyUnmountingInstance) {
        return null;
      }
      return internalInstance;
    }
    var ReactUpdateQueue = {
      enqueueCallback: function(publicInstance, callback) {
        ("production" !== "production" ? invariant(typeof callback === 'function', 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(typeof callback === 'function'));
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
        if (!internalInstance || internalInstance === ReactLifeCycle.currentlyMountingInstance) {
          return null;
        }
        if (internalInstance._pendingCallbacks) {
          internalInstance._pendingCallbacks.push(callback);
        } else {
          internalInstance._pendingCallbacks = [callback];
        }
        enqueueUpdate(internalInstance);
      },
      enqueueCallbackInternal: function(internalInstance, callback) {
        ("production" !== "production" ? invariant(typeof callback === 'function', 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(typeof callback === 'function'));
        if (internalInstance._pendingCallbacks) {
          internalInstance._pendingCallbacks.push(callback);
        } else {
          internalInstance._pendingCallbacks = [callback];
        }
        enqueueUpdate(internalInstance);
      },
      enqueueForceUpdate: function(publicInstance) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');
        if (!internalInstance) {
          return;
        }
        internalInstance._pendingForceUpdate = true;
        enqueueUpdate(internalInstance);
      },
      enqueueReplaceState: function(publicInstance, completeState) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');
        if (!internalInstance) {
          return;
        }
        internalInstance._pendingStateQueue = [completeState];
        internalInstance._pendingReplaceState = true;
        enqueueUpdate(internalInstance);
      },
      enqueueSetState: function(publicInstance, partialState) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
        if (!internalInstance) {
          return;
        }
        var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
        queue.push(partialState);
        enqueueUpdate(internalInstance);
      },
      enqueueSetProps: function(publicInstance, partialProps) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setProps');
        if (!internalInstance) {
          return;
        }
        ("production" !== "production" ? invariant(internalInstance._isTopLevel, 'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(internalInstance._isTopLevel));
        var element = internalInstance._pendingElement || internalInstance._currentElement;
        var props = assign({}, element.props, partialProps);
        internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(element, props);
        enqueueUpdate(internalInstance);
      },
      enqueueReplaceProps: function(publicInstance, props) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
        if (!internalInstance) {
          return;
        }
        ("production" !== "production" ? invariant(internalInstance._isTopLevel, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(internalInstance._isTopLevel));
        var element = internalInstance._pendingElement || internalInstance._currentElement;
        internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(element, props);
        enqueueUpdate(internalInstance);
      },
      enqueueElementInternal: function(internalInstance, newElement) {
        internalInstance._pendingElement = newElement;
        enqueueUpdate(internalInstance);
      }
    };
    module.exports = ReactUpdateQueue;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/DOMChildrenOperations.js", ["npm:react@0.13.3/lib/Danger.js", "npm:react@0.13.3/lib/ReactMultiChildUpdateTypes.js", "npm:react@0.13.3/lib/setTextContent.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var Danger = require("npm:react@0.13.3/lib/Danger.js");
    var ReactMultiChildUpdateTypes = require("npm:react@0.13.3/lib/ReactMultiChildUpdateTypes.js");
    var setTextContent = require("npm:react@0.13.3/lib/setTextContent.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    function insertChildAt(parentNode, childNode, index) {
      parentNode.insertBefore(childNode, parentNode.childNodes[index] || null);
    }
    var DOMChildrenOperations = {
      dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,
      updateTextContent: setTextContent,
      processUpdates: function(updates, markupList) {
        var update;
        var initialChildren = null;
        var updatedChildren = null;
        for (var i = 0; i < updates.length; i++) {
          update = updates[i];
          if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
            var updatedIndex = update.fromIndex;
            var updatedChild = update.parentNode.childNodes[updatedIndex];
            var parentID = update.parentID;
            ("production" !== "production" ? invariant(updatedChild, 'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.', updatedIndex, parentID) : invariant(updatedChild));
            initialChildren = initialChildren || {};
            initialChildren[parentID] = initialChildren[parentID] || [];
            initialChildren[parentID][updatedIndex] = updatedChild;
            updatedChildren = updatedChildren || [];
            updatedChildren.push(updatedChild);
          }
        }
        var renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
        if (updatedChildren) {
          for (var j = 0; j < updatedChildren.length; j++) {
            updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
          }
        }
        for (var k = 0; k < updates.length; k++) {
          update = updates[k];
          switch (update.type) {
            case ReactMultiChildUpdateTypes.INSERT_MARKUP:
              insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
              break;
            case ReactMultiChildUpdateTypes.MOVE_EXISTING:
              insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
              break;
            case ReactMultiChildUpdateTypes.TEXT_CONTENT:
              setTextContent(update.parentNode, update.textContent);
              break;
            case ReactMultiChildUpdateTypes.REMOVE_NODE:
              break;
          }
        }
      }
    };
    module.exports = DOMChildrenOperations;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDefaultInjection.js", ["npm:react@0.13.3/lib/BeforeInputEventPlugin.js", "npm:react@0.13.3/lib/ChangeEventPlugin.js", "npm:react@0.13.3/lib/ClientReactRootIndex.js", "npm:react@0.13.3/lib/DefaultEventPluginOrder.js", "npm:react@0.13.3/lib/EnterLeaveEventPlugin.js", "npm:react@0.13.3/lib/ExecutionEnvironment.js", "npm:react@0.13.3/lib/HTMLDOMPropertyConfig.js", "npm:react@0.13.3/lib/MobileSafariClickEventPlugin.js", "npm:react@0.13.3/lib/ReactBrowserComponentMixin.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactComponentBrowserEnvironment.js", "npm:react@0.13.3/lib/ReactDefaultBatchingStrategy.js", "npm:react@0.13.3/lib/ReactDOMComponent.js", "npm:react@0.13.3/lib/ReactDOMButton.js", "npm:react@0.13.3/lib/ReactDOMForm.js", "npm:react@0.13.3/lib/ReactDOMImg.js", "npm:react@0.13.3/lib/ReactDOMIDOperations.js", "npm:react@0.13.3/lib/ReactDOMIframe.js", "npm:react@0.13.3/lib/ReactDOMInput.js", "npm:react@0.13.3/lib/ReactDOMOption.js", "npm:react@0.13.3/lib/ReactDOMSelect.js", "npm:react@0.13.3/lib/ReactDOMTextarea.js", "npm:react@0.13.3/lib/ReactDOMTextComponent.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactEventListener.js", "npm:react@0.13.3/lib/ReactInjection.js", "npm:react@0.13.3/lib/ReactInstanceHandles.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/ReactReconcileTransaction.js", "npm:react@0.13.3/lib/SelectEventPlugin.js", "npm:react@0.13.3/lib/ServerReactRootIndex.js", "npm:react@0.13.3/lib/SimpleEventPlugin.js", "npm:react@0.13.3/lib/SVGDOMPropertyConfig.js", "npm:react@0.13.3/lib/createFullPageComponent.js", "npm:react@0.13.3/lib/ReactDefaultPerf.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var BeforeInputEventPlugin = require("npm:react@0.13.3/lib/BeforeInputEventPlugin.js");
    var ChangeEventPlugin = require("npm:react@0.13.3/lib/ChangeEventPlugin.js");
    var ClientReactRootIndex = require("npm:react@0.13.3/lib/ClientReactRootIndex.js");
    var DefaultEventPluginOrder = require("npm:react@0.13.3/lib/DefaultEventPluginOrder.js");
    var EnterLeaveEventPlugin = require("npm:react@0.13.3/lib/EnterLeaveEventPlugin.js");
    var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
    var HTMLDOMPropertyConfig = require("npm:react@0.13.3/lib/HTMLDOMPropertyConfig.js");
    var MobileSafariClickEventPlugin = require("npm:react@0.13.3/lib/MobileSafariClickEventPlugin.js");
    var ReactBrowserComponentMixin = require("npm:react@0.13.3/lib/ReactBrowserComponentMixin.js");
    var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
    var ReactComponentBrowserEnvironment = require("npm:react@0.13.3/lib/ReactComponentBrowserEnvironment.js");
    var ReactDefaultBatchingStrategy = require("npm:react@0.13.3/lib/ReactDefaultBatchingStrategy.js");
    var ReactDOMComponent = require("npm:react@0.13.3/lib/ReactDOMComponent.js");
    var ReactDOMButton = require("npm:react@0.13.3/lib/ReactDOMButton.js");
    var ReactDOMForm = require("npm:react@0.13.3/lib/ReactDOMForm.js");
    var ReactDOMImg = require("npm:react@0.13.3/lib/ReactDOMImg.js");
    var ReactDOMIDOperations = require("npm:react@0.13.3/lib/ReactDOMIDOperations.js");
    var ReactDOMIframe = require("npm:react@0.13.3/lib/ReactDOMIframe.js");
    var ReactDOMInput = require("npm:react@0.13.3/lib/ReactDOMInput.js");
    var ReactDOMOption = require("npm:react@0.13.3/lib/ReactDOMOption.js");
    var ReactDOMSelect = require("npm:react@0.13.3/lib/ReactDOMSelect.js");
    var ReactDOMTextarea = require("npm:react@0.13.3/lib/ReactDOMTextarea.js");
    var ReactDOMTextComponent = require("npm:react@0.13.3/lib/ReactDOMTextComponent.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactEventListener = require("npm:react@0.13.3/lib/ReactEventListener.js");
    var ReactInjection = require("npm:react@0.13.3/lib/ReactInjection.js");
    var ReactInstanceHandles = require("npm:react@0.13.3/lib/ReactInstanceHandles.js");
    var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
    var ReactReconcileTransaction = require("npm:react@0.13.3/lib/ReactReconcileTransaction.js");
    var SelectEventPlugin = require("npm:react@0.13.3/lib/SelectEventPlugin.js");
    var ServerReactRootIndex = require("npm:react@0.13.3/lib/ServerReactRootIndex.js");
    var SimpleEventPlugin = require("npm:react@0.13.3/lib/SimpleEventPlugin.js");
    var SVGDOMPropertyConfig = require("npm:react@0.13.3/lib/SVGDOMPropertyConfig.js");
    var createFullPageComponent = require("npm:react@0.13.3/lib/createFullPageComponent.js");
    function autoGenerateWrapperClass(type) {
      return ReactClass.createClass({
        tagName: type.toUpperCase(),
        render: function() {
          return new ReactElement(type, null, null, null, null, this.props);
        }
      });
    }
    function inject() {
      ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
      ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
      ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
      ReactInjection.EventPluginHub.injectMount(ReactMount);
      ReactInjection.EventPluginHub.injectEventPluginsByName({
        SimpleEventPlugin: SimpleEventPlugin,
        EnterLeaveEventPlugin: EnterLeaveEventPlugin,
        ChangeEventPlugin: ChangeEventPlugin,
        MobileSafariClickEventPlugin: MobileSafariClickEventPlugin,
        SelectEventPlugin: SelectEventPlugin,
        BeforeInputEventPlugin: BeforeInputEventPlugin
      });
      ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);
      ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);
      ReactInjection.NativeComponent.injectAutoWrapper(autoGenerateWrapperClass);
      ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);
      ReactInjection.NativeComponent.injectComponentClasses({
        'button': ReactDOMButton,
        'form': ReactDOMForm,
        'iframe': ReactDOMIframe,
        'img': ReactDOMImg,
        'input': ReactDOMInput,
        'option': ReactDOMOption,
        'select': ReactDOMSelect,
        'textarea': ReactDOMTextarea,
        'html': createFullPageComponent('html'),
        'head': createFullPageComponent('head'),
        'body': createFullPageComponent('body')
      });
      ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
      ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
      ReactInjection.EmptyComponent.injectEmptyComponent('noscript');
      ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
      ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
      ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);
      ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
      ReactInjection.DOMComponent.injectIDOperations(ReactDOMIDOperations);
      if ("production" !== "production") {
        var url = (ExecutionEnvironment.canUseDOM && window.location.href) || '';
        if ((/[?&]react_perf\b/).test(url)) {
          var ReactDefaultPerf = require("npm:react@0.13.3/lib/ReactDefaultPerf.js");
          ReactDefaultPerf.start();
        }
      }
    }
    module.exports = {inject: inject};
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/helpers/get.js", ["npm:babel-runtime@5.8.5/core-js/object/get-own-property-descriptor.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$getOwnPropertyDescriptor = require("npm:babel-runtime@5.8.5/core-js/object/get-own-property-descriptor.js")["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      desc = parent = getter = undefined;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/core-js/object/set-prototype-of.js", ["npm:core-js@0.9.18/library/fn/object/set-prototype-of.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.18/library/fn/object/set-prototype-of.js"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/core-js/object/assign.js", ["npm:core-js@0.9.18/library/fn/object/assign.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.18/library/fn/object/assign.js"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@0.9.18/library/fn/promise.js", ["npm:core-js@0.9.18/library/modules/es6.object.to-string.js", "npm:core-js@0.9.18/library/modules/es6.string.iterator.js", "npm:core-js@0.9.18/library/modules/web.dom.iterable.js", "npm:core-js@0.9.18/library/modules/es6.promise.js", "npm:core-js@0.9.18/library/modules/$.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  require("npm:core-js@0.9.18/library/modules/es6.object.to-string.js");
  require("npm:core-js@0.9.18/library/modules/es6.string.iterator.js");
  require("npm:core-js@0.9.18/library/modules/web.dom.iterable.js");
  require("npm:core-js@0.9.18/library/modules/es6.promise.js");
  module.exports = require("npm:core-js@0.9.18/library/modules/$.js").core.Promise;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:debug@2.1.3.js", ["npm:debug@2.1.3/browser.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:debug@2.1.3/browser.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/keyMirror.js", ["npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var keyMirror = function(obj) {
      var ret = {};
      var key;
      ("production" !== "production" ? invariant(obj instanceof Object && !Array.isArray(obj), 'keyMirror(...): Argument must be an object.') : invariant(obj instanceof Object && !Array.isArray(obj)));
      for (key in obj) {
        if (!obj.hasOwnProperty(key)) {
          continue;
        }
        ret[key] = key;
      }
      return ret;
    };
    module.exports = keyMirror;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactChildren.js", ["npm:react@0.13.3/lib/PooledClass.js", "npm:react@0.13.3/lib/ReactFragment.js", "npm:react@0.13.3/lib/traverseAllChildren.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var PooledClass = require("npm:react@0.13.3/lib/PooledClass.js");
    var ReactFragment = require("npm:react@0.13.3/lib/ReactFragment.js");
    var traverseAllChildren = require("npm:react@0.13.3/lib/traverseAllChildren.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    var twoArgumentPooler = PooledClass.twoArgumentPooler;
    var threeArgumentPooler = PooledClass.threeArgumentPooler;
    function ForEachBookKeeping(forEachFunction, forEachContext) {
      this.forEachFunction = forEachFunction;
      this.forEachContext = forEachContext;
    }
    PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
    function forEachSingleChild(traverseContext, child, name, i) {
      var forEachBookKeeping = traverseContext;
      forEachBookKeeping.forEachFunction.call(forEachBookKeeping.forEachContext, child, i);
    }
    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }
      var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      ForEachBookKeeping.release(traverseContext);
    }
    function MapBookKeeping(mapResult, mapFunction, mapContext) {
      this.mapResult = mapResult;
      this.mapFunction = mapFunction;
      this.mapContext = mapContext;
    }
    PooledClass.addPoolingTo(MapBookKeeping, threeArgumentPooler);
    function mapSingleChildIntoContext(traverseContext, child, name, i) {
      var mapBookKeeping = traverseContext;
      var mapResult = mapBookKeeping.mapResult;
      var keyUnique = !mapResult.hasOwnProperty(name);
      if ("production" !== "production") {
        ("production" !== "production" ? warning(keyUnique, 'ReactChildren.map(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : null);
      }
      if (keyUnique) {
        var mappedChild = mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
        mapResult[name] = mappedChild;
      }
    }
    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }
      var mapResult = {};
      var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      MapBookKeeping.release(traverseContext);
      return ReactFragment.create(mapResult);
    }
    function forEachSingleChildDummy(traverseContext, child, name, i) {
      return null;
    }
    function countChildren(children, context) {
      return traverseAllChildren(children, forEachSingleChildDummy, null);
    }
    var ReactChildren = {
      forEach: forEachChildren,
      map: mapChildren,
      count: countChildren
    };
    module.exports = ReactChildren;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactComponent.js", ["npm:react@0.13.3/lib/ReactUpdateQueue.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/warning.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactUpdateQueue = require("npm:react@0.13.3/lib/ReactUpdateQueue.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var warning = require("npm:react@0.13.3/lib/warning.js");
    function ReactComponent(props, context) {
      this.props = props;
      this.context = context;
    }
    ReactComponent.prototype.setState = function(partialState, callback) {
      ("production" !== "production" ? invariant(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null));
      if ("production" !== "production") {
        ("production" !== "production" ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : null);
      }
      ReactUpdateQueue.enqueueSetState(this, partialState);
      if (callback) {
        ReactUpdateQueue.enqueueCallback(this, callback);
      }
    };
    ReactComponent.prototype.forceUpdate = function(callback) {
      ReactUpdateQueue.enqueueForceUpdate(this);
      if (callback) {
        ReactUpdateQueue.enqueueCallback(this, callback);
      }
    };
    if ("production" !== "production") {
      var deprecatedAPIs = {
        getDOMNode: ['getDOMNode', 'Use React.findDOMNode(component) instead.'],
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceProps: ['replaceProps', 'Instead, call React.render again at the top level.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
        setProps: ['setProps', 'Instead, call React.render again at the top level.']
      };
      var defineDeprecationWarning = function(methodName, info) {
        try {
          Object.defineProperty(ReactComponent.prototype, methodName, {get: function() {
              ("production" !== "production" ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : null);
              return undefined;
            }});
        } catch (x) {}
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }
    module.exports = ReactComponent;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMIDOperations.js", ["npm:react@0.13.3/lib/CSSPropertyOperations.js", "npm:react@0.13.3/lib/DOMChildrenOperations.js", "npm:react@0.13.3/lib/DOMPropertyOperations.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/ReactPerf.js", "npm:react@0.13.3/lib/invariant.js", "npm:react@0.13.3/lib/setInnerHTML.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var CSSPropertyOperations = require("npm:react@0.13.3/lib/CSSPropertyOperations.js");
    var DOMChildrenOperations = require("npm:react@0.13.3/lib/DOMChildrenOperations.js");
    var DOMPropertyOperations = require("npm:react@0.13.3/lib/DOMPropertyOperations.js");
    var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
    var ReactPerf = require("npm:react@0.13.3/lib/ReactPerf.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var setInnerHTML = require("npm:react@0.13.3/lib/setInnerHTML.js");
    var INVALID_PROPERTY_ERRORS = {
      dangerouslySetInnerHTML: '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
      style: '`style` must be set using `updateStylesByID()`.'
    };
    var ReactDOMIDOperations = {
      updatePropertyByID: function(id, name, value) {
        var node = ReactMount.getNode(id);
        ("production" !== "production" ? invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name), 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
        if (value != null) {
          DOMPropertyOperations.setValueForProperty(node, name, value);
        } else {
          DOMPropertyOperations.deleteValueForProperty(node, name);
        }
      },
      deletePropertyByID: function(id, name, value) {
        var node = ReactMount.getNode(id);
        ("production" !== "production" ? invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name), 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
        DOMPropertyOperations.deleteValueForProperty(node, name, value);
      },
      updateStylesByID: function(id, styles) {
        var node = ReactMount.getNode(id);
        CSSPropertyOperations.setValueForStyles(node, styles);
      },
      updateInnerHTMLByID: function(id, html) {
        var node = ReactMount.getNode(id);
        setInnerHTML(node, html);
      },
      updateTextContentByID: function(id, content) {
        var node = ReactMount.getNode(id);
        DOMChildrenOperations.updateTextContent(node, content);
      },
      dangerouslyReplaceNodeWithMarkupByID: function(id, markup) {
        var node = ReactMount.getNode(id);
        DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
      },
      dangerouslyProcessChildrenUpdates: function(updates, markup) {
        for (var i = 0; i < updates.length; i++) {
          updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
        }
        DOMChildrenOperations.processUpdates(updates, markup);
      }
    };
    ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
      updatePropertyByID: 'updatePropertyByID',
      deletePropertyByID: 'deletePropertyByID',
      updateStylesByID: 'updateStylesByID',
      updateInnerHTMLByID: 'updateInnerHTMLByID',
      updateTextContentByID: 'updateTextContentByID',
      dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
      dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
    });
    module.exports = ReactDOMIDOperations;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/helpers/inherits.js", ["npm:babel-runtime@5.8.5/core-js/object/create.js", "npm:babel-runtime@5.8.5/core-js/object/set-prototype-of.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$create = require("npm:babel-runtime@5.8.5/core-js/object/create.js")["default"];
  var _Object$setPrototypeOf = require("npm:babel-runtime@5.8.5/core-js/object/set-prototype-of.js")["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.5/core-js/promise.js", ["npm:core-js@0.9.18/library/fn/promise.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.18/library/fn/promise.js"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jsonp@0.2.0/index.js", ["npm:debug@2.1.3.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  var debug = require("npm:debug@2.1.3.js")('jsonp');
  module.exports = jsonp;
  var count = 0;
  function noop() {}
  function jsonp(url, opts, fn) {
    if ('function' == typeof opts) {
      fn = opts;
      opts = {};
    }
    if (!opts)
      opts = {};
    var prefix = opts.prefix || '__jp';
    var id = opts.name || (prefix + (count++));
    var param = opts.param || 'callback';
    var timeout = null != opts.timeout ? opts.timeout : 60000;
    var enc = encodeURIComponent;
    var target = document.getElementsByTagName('script')[0] || document.head;
    var script;
    var timer;
    if (timeout) {
      timer = setTimeout(function() {
        cleanup();
        if (fn)
          fn(new Error('Timeout'));
      }, timeout);
    }
    function cleanup() {
      if (script.parentNode)
        script.parentNode.removeChild(script);
      window[id] = noop;
      if (timer)
        clearTimeout(timer);
    }
    function cancel() {
      if (window[id]) {
        cleanup();
      }
    }
    window[id] = function(data) {
      debug('jsonp got', data);
      cleanup();
      if (fn)
        fn(null, data);
    };
    url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
    url = url.replace('?&', '?');
    debug('jsonp req "%s"', url);
    script = document.createElement('script');
    script.src = url;
    target.parentNode.insertBefore(script, target);
    return cancel;
  }
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/EventConstants.js", ["npm:react@0.13.3/lib/keyMirror.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var keyMirror = require("npm:react@0.13.3/lib/keyMirror.js");
  var PropagationPhases = keyMirror({
    bubbled: null,
    captured: null
  });
  var topLevelTypes = keyMirror({
    topBlur: null,
    topChange: null,
    topClick: null,
    topCompositionEnd: null,
    topCompositionStart: null,
    topCompositionUpdate: null,
    topContextMenu: null,
    topCopy: null,
    topCut: null,
    topDoubleClick: null,
    topDrag: null,
    topDragEnd: null,
    topDragEnter: null,
    topDragExit: null,
    topDragLeave: null,
    topDragOver: null,
    topDragStart: null,
    topDrop: null,
    topError: null,
    topFocus: null,
    topInput: null,
    topKeyDown: null,
    topKeyPress: null,
    topKeyUp: null,
    topLoad: null,
    topMouseDown: null,
    topMouseMove: null,
    topMouseOut: null,
    topMouseOver: null,
    topMouseUp: null,
    topPaste: null,
    topReset: null,
    topScroll: null,
    topSelectionChange: null,
    topSubmit: null,
    topTextInput: null,
    topTouchCancel: null,
    topTouchEnd: null,
    topTouchMove: null,
    topTouchStart: null,
    topWheel: null
  });
  var EventConstants = {
    topLevelTypes: topLevelTypes,
    PropagationPhases: PropagationPhases
  };
  module.exports = EventConstants;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactComponentBrowserEnvironment.js", ["npm:react@0.13.3/lib/ReactDOMIDOperations.js", "npm:react@0.13.3/lib/ReactMount.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactDOMIDOperations = require("npm:react@0.13.3/lib/ReactDOMIDOperations.js");
    var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
    var ReactComponentBrowserEnvironment = {
      processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
      replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,
      unmountIDFromEnvironment: function(rootNodeID) {
        ReactMount.purgeID(rootNodeID);
      }
    };
    module.exports = ReactComponentBrowserEnvironment;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:jsonp@0.2.0.js", ["npm:jsonp@0.2.0/index.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:jsonp@0.2.0/index.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/EventPluginUtils.js", ["npm:react@0.13.3/lib/EventConstants.js", "npm:react@0.13.3/lib/invariant.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.3/lib/EventConstants.js");
    var invariant = require("npm:react@0.13.3/lib/invariant.js");
    var injection = {
      Mount: null,
      injectMount: function(InjectedMount) {
        injection.Mount = InjectedMount;
        if ("production" !== "production") {
          ("production" !== "production" ? invariant(InjectedMount && InjectedMount.getNode, 'EventPluginUtils.injection.injectMount(...): Injected Mount module ' + 'is missing getNode.') : invariant(InjectedMount && InjectedMount.getNode));
        }
      }
    };
    var topLevelTypes = EventConstants.topLevelTypes;
    function isEndish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
    }
    function isMoveish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
    }
    function isStartish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
    }
    var validateEventDispatches;
    if ("production" !== "production") {
      validateEventDispatches = function(event) {
        var dispatchListeners = event._dispatchListeners;
        var dispatchIDs = event._dispatchIDs;
        var listenersIsArr = Array.isArray(dispatchListeners);
        var idsIsArr = Array.isArray(dispatchIDs);
        var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
        var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
        ("production" !== "production" ? invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen));
      };
    }
    function forEachEventDispatch(event, cb) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchIDs = event._dispatchIDs;
      if ("production" !== "production") {
        validateEventDispatches(event);
      }
      if (Array.isArray(dispatchListeners)) {
        for (var i = 0; i < dispatchListeners.length; i++) {
          if (event.isPropagationStopped()) {
            break;
          }
          cb(event, dispatchListeners[i], dispatchIDs[i]);
        }
      } else if (dispatchListeners) {
        cb(event, dispatchListeners, dispatchIDs);
      }
    }
    function executeDispatch(event, listener, domID) {
      event.currentTarget = injection.Mount.getNode(domID);
      var returnValue = listener(event, domID);
      event.currentTarget = null;
      return returnValue;
    }
    function executeDispatchesInOrder(event, cb) {
      forEachEventDispatch(event, cb);
      event._dispatchListeners = null;
      event._dispatchIDs = null;
    }
    function executeDispatchesInOrderStopAtTrueImpl(event) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchIDs = event._dispatchIDs;
      if ("production" !== "production") {
        validateEventDispatches(event);
      }
      if (Array.isArray(dispatchListeners)) {
        for (var i = 0; i < dispatchListeners.length; i++) {
          if (event.isPropagationStopped()) {
            break;
          }
          if (dispatchListeners[i](event, dispatchIDs[i])) {
            return dispatchIDs[i];
          }
        }
      } else if (dispatchListeners) {
        if (dispatchListeners(event, dispatchIDs)) {
          return dispatchIDs;
        }
      }
      return null;
    }
    function executeDispatchesInOrderStopAtTrue(event) {
      var ret = executeDispatchesInOrderStopAtTrueImpl(event);
      event._dispatchIDs = null;
      event._dispatchListeners = null;
      return ret;
    }
    function executeDirectDispatch(event) {
      if ("production" !== "production") {
        validateEventDispatches(event);
      }
      var dispatchListener = event._dispatchListeners;
      var dispatchID = event._dispatchIDs;
      ("production" !== "production" ? invariant(!Array.isArray(dispatchListener), 'executeDirectDispatch(...): Invalid `event`.') : invariant(!Array.isArray(dispatchListener)));
      var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
      event._dispatchListeners = null;
      event._dispatchIDs = null;
      return res;
    }
    function hasDispatches(event) {
      return !!event._dispatchListeners;
    }
    var EventPluginUtils = {
      isEndish: isEndish,
      isMoveish: isMoveish,
      isStartish: isStartish,
      executeDirectDispatch: executeDirectDispatch,
      executeDispatch: executeDispatch,
      executeDispatchesInOrder: executeDispatchesInOrder,
      executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
      hasDispatches: hasDispatches,
      injection: injection,
      useTouchEvents: false
    };
    module.exports = EventPluginUtils;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/ReactDOMTextComponent.js", ["npm:react@0.13.3/lib/DOMPropertyOperations.js", "npm:react@0.13.3/lib/ReactComponentBrowserEnvironment.js", "npm:react@0.13.3/lib/ReactDOMComponent.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/escapeTextContentForBrowser.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMPropertyOperations = require("npm:react@0.13.3/lib/DOMPropertyOperations.js");
  var ReactComponentBrowserEnvironment = require("npm:react@0.13.3/lib/ReactComponentBrowserEnvironment.js");
  var ReactDOMComponent = require("npm:react@0.13.3/lib/ReactDOMComponent.js");
  var assign = require("npm:react@0.13.3/lib/Object.assign.js");
  var escapeTextContentForBrowser = require("npm:react@0.13.3/lib/escapeTextContentForBrowser.js");
  var ReactDOMTextComponent = function(props) {};
  assign(ReactDOMTextComponent.prototype, {
    construct: function(text) {
      this._currentElement = text;
      this._stringText = '' + text;
      this._rootNodeID = null;
      this._mountIndex = 0;
    },
    mountComponent: function(rootID, transaction, context) {
      this._rootNodeID = rootID;
      var escapedText = escapeTextContentForBrowser(this._stringText);
      if (transaction.renderToStaticMarkup) {
        return escapedText;
      }
      return ('<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>');
    },
    receiveComponent: function(nextText, transaction) {
      if (nextText !== this._currentElement) {
        this._currentElement = nextText;
        var nextStringText = '' + nextText;
        if (nextStringText !== this._stringText) {
          this._stringText = nextStringText;
          ReactDOMComponent.BackendIDOperations.updateTextContentByID(this._rootNodeID, nextStringText);
        }
      }
    },
    unmountComponent: function() {
      ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
    }
  });
  module.exports = ReactDOMTextComponent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/lib/React.js", ["npm:react@0.13.3/lib/EventPluginUtils.js", "npm:react@0.13.3/lib/ReactChildren.js", "npm:react@0.13.3/lib/ReactComponent.js", "npm:react@0.13.3/lib/ReactClass.js", "npm:react@0.13.3/lib/ReactContext.js", "npm:react@0.13.3/lib/ReactCurrentOwner.js", "npm:react@0.13.3/lib/ReactElement.js", "npm:react@0.13.3/lib/ReactElementValidator.js", "npm:react@0.13.3/lib/ReactDOM.js", "npm:react@0.13.3/lib/ReactDOMTextComponent.js", "npm:react@0.13.3/lib/ReactDefaultInjection.js", "npm:react@0.13.3/lib/ReactInstanceHandles.js", "npm:react@0.13.3/lib/ReactMount.js", "npm:react@0.13.3/lib/ReactPerf.js", "npm:react@0.13.3/lib/ReactPropTypes.js", "npm:react@0.13.3/lib/ReactReconciler.js", "npm:react@0.13.3/lib/ReactServerRendering.js", "npm:react@0.13.3/lib/Object.assign.js", "npm:react@0.13.3/lib/findDOMNode.js", "npm:react@0.13.3/lib/onlyChild.js", "npm:react@0.13.3/lib/ExecutionEnvironment.js", "github:jspm/nodelibs-process@0.1.1.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventPluginUtils = require("npm:react@0.13.3/lib/EventPluginUtils.js");
    var ReactChildren = require("npm:react@0.13.3/lib/ReactChildren.js");
    var ReactComponent = require("npm:react@0.13.3/lib/ReactComponent.js");
    var ReactClass = require("npm:react@0.13.3/lib/ReactClass.js");
    var ReactContext = require("npm:react@0.13.3/lib/ReactContext.js");
    var ReactCurrentOwner = require("npm:react@0.13.3/lib/ReactCurrentOwner.js");
    var ReactElement = require("npm:react@0.13.3/lib/ReactElement.js");
    var ReactElementValidator = require("npm:react@0.13.3/lib/ReactElementValidator.js");
    var ReactDOM = require("npm:react@0.13.3/lib/ReactDOM.js");
    var ReactDOMTextComponent = require("npm:react@0.13.3/lib/ReactDOMTextComponent.js");
    var ReactDefaultInjection = require("npm:react@0.13.3/lib/ReactDefaultInjection.js");
    var ReactInstanceHandles = require("npm:react@0.13.3/lib/ReactInstanceHandles.js");
    var ReactMount = require("npm:react@0.13.3/lib/ReactMount.js");
    var ReactPerf = require("npm:react@0.13.3/lib/ReactPerf.js");
    var ReactPropTypes = require("npm:react@0.13.3/lib/ReactPropTypes.js");
    var ReactReconciler = require("npm:react@0.13.3/lib/ReactReconciler.js");
    var ReactServerRendering = require("npm:react@0.13.3/lib/ReactServerRendering.js");
    var assign = require("npm:react@0.13.3/lib/Object.assign.js");
    var findDOMNode = require("npm:react@0.13.3/lib/findDOMNode.js");
    var onlyChild = require("npm:react@0.13.3/lib/onlyChild.js");
    ReactDefaultInjection.inject();
    var createElement = ReactElement.createElement;
    var createFactory = ReactElement.createFactory;
    var cloneElement = ReactElement.cloneElement;
    if ("production" !== "production") {
      createElement = ReactElementValidator.createElement;
      createFactory = ReactElementValidator.createFactory;
      cloneElement = ReactElementValidator.cloneElement;
    }
    var render = ReactPerf.measure('React', 'render', ReactMount.render);
    var React = {
      Children: {
        map: ReactChildren.map,
        forEach: ReactChildren.forEach,
        count: ReactChildren.count,
        only: onlyChild
      },
      Component: ReactComponent,
      DOM: ReactDOM,
      PropTypes: ReactPropTypes,
      initializeTouchEvents: function(shouldUseTouch) {
        EventPluginUtils.useTouchEvents = shouldUseTouch;
      },
      createClass: ReactClass.createClass,
      createElement: createElement,
      cloneElement: cloneElement,
      createFactory: createFactory,
      createMixin: function(mixin) {
        return mixin;
      },
      constructAndRenderComponent: ReactMount.constructAndRenderComponent,
      constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
      findDOMNode: findDOMNode,
      render: render,
      renderToString: ReactServerRendering.renderToString,
      renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
      unmountComponentAtNode: ReactMount.unmountComponentAtNode,
      isValidElement: ReactElement.isValidElement,
      withContext: ReactContext.withContext,
      __spread: assign
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        CurrentOwner: ReactCurrentOwner,
        InstanceHandles: ReactInstanceHandles,
        Mount: ReactMount,
        Reconciler: ReactReconciler,
        TextComponent: ReactDOMTextComponent
      });
    }
    if ("production" !== "production") {
      var ExecutionEnvironment = require("npm:react@0.13.3/lib/ExecutionEnvironment.js");
      if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
        if (navigator.userAgent.indexOf('Chrome') > -1) {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
            console.debug('Download the React DevTools for a better development experience: ' + 'https://fb.me/react-devtools');
          }
        }
        var expectedFeatures = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim, Object.create, Object.freeze];
        for (var i = 0; i < expectedFeatures.length; i++) {
          if (!expectedFeatures[i]) {
            console.error('One or more ES5 shim/shams expected by React are not available: ' + 'https://fb.me/react-warning-polyfills');
            break;
          }
        }
      }
    }
    React.version = '0.13.3';
    module.exports = React;
  })(require("github:jspm/nodelibs-process@0.1.1.js"));
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3/react.js", ["npm:react@0.13.3/lib/React.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:react@0.13.3/lib/React.js");
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:react@0.13.3.js", ["npm:react@0.13.3/react.js"], true, function(require, exports, module) {
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:react@0.13.3/react.js");
  global.define = __define;
  return module.exports;
});

System.register("src/lib/rand.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (array) {
        var out = array.slice(0);
        var count = out.length;
        var rand = undefined,
            temp = undefined;
        while (count) {
          rand = Math.random() * count-- | 0;
          temp = out[count];
          out[count] = out[rand];
          out[rand] = temp;
        }
        return out;
      });
    }
  };
});
System.register("src/Nav.js", ["npm:babel-runtime@5.8.5/helpers/get.js", "npm:babel-runtime@5.8.5/helpers/inherits.js", "npm:babel-runtime@5.8.5/helpers/create-class.js", "npm:babel-runtime@5.8.5/helpers/class-call-check.js", "npm:react@0.13.3.js"], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, React, Component, Nav;

  return {
    setters: [function (_npmBabelRuntime585HelpersGetJs) {
      _get = _npmBabelRuntime585HelpersGetJs["default"];
    }, function (_npmBabelRuntime585HelpersInheritsJs) {
      _inherits = _npmBabelRuntime585HelpersInheritsJs["default"];
    }, function (_npmBabelRuntime585HelpersCreateClassJs) {
      _createClass = _npmBabelRuntime585HelpersCreateClassJs["default"];
    }, function (_npmBabelRuntime585HelpersClassCallCheckJs) {
      _classCallCheck = _npmBabelRuntime585HelpersClassCallCheckJs["default"];
    }, function (_npmReact0133Js) {
      React = _npmReact0133Js["default"];
    }],
    execute: function () {
      "use strict";

      Component = React.Component;

      Nav = (function (_Component) {
        _inherits(Nav, _Component);

        function Nav() {
          _classCallCheck(this, Nav);

          _get(Object.getPrototypeOf(Nav.prototype), "constructor", this).apply(this, arguments);
        }

        _createClass(Nav, [{
          key: "render",
          value: function render() {
            var _props = this.props;
            var onPrev = _props.onPrev;
            var onNext = _props.onNext;

            return React.createElement(
              "span",
              { className: "nav" },
              React.createElement(
                "span",
                { className: "prev", onClick: onPrev },
                "⏪"
              ),
              " ",
              React.createElement(
                "span",
                { className: "next", onClick: onNext },
                "⏩"
              )
            );
          }
        }]);

        return Nav;
      })(Component);

      _export("default", Nav);
    }
  };
});
System.register("src/InfoBox.js", ["npm:babel-runtime@5.8.5/helpers/get.js", "npm:babel-runtime@5.8.5/helpers/inherits.js", "npm:babel-runtime@5.8.5/helpers/create-class.js", "npm:babel-runtime@5.8.5/helpers/class-call-check.js", "npm:react@0.13.3.js"], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, React, Component, InfoBox;

  return {
    setters: [function (_npmBabelRuntime585HelpersGetJs) {
      _get = _npmBabelRuntime585HelpersGetJs["default"];
    }, function (_npmBabelRuntime585HelpersInheritsJs) {
      _inherits = _npmBabelRuntime585HelpersInheritsJs["default"];
    }, function (_npmBabelRuntime585HelpersCreateClassJs) {
      _createClass = _npmBabelRuntime585HelpersCreateClassJs["default"];
    }, function (_npmBabelRuntime585HelpersClassCallCheckJs) {
      _classCallCheck = _npmBabelRuntime585HelpersClassCallCheckJs["default"];
    }, function (_npmReact0133Js) {
      React = _npmReact0133Js["default"];
    }],
    execute: function () {
      "use strict";

      Component = React.Component;

      InfoBox = (function (_Component) {
        _inherits(InfoBox, _Component);

        function InfoBox() {
          _classCallCheck(this, InfoBox);

          _get(Object.getPrototypeOf(InfoBox.prototype), "constructor", this).apply(this, arguments);
        }

        _createClass(InfoBox, [{
          key: "render",
          value: function render() {
            var content = this.props.content;

            return React.createElement(
              "pre",
              { className: "description" },
              content
            );
          }
        }]);

        return InfoBox;
      })(Component);

      _export("default", InfoBox);
    }
  };
});
System.register('src/constants/index.js', [], function (_export) {
  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', {
        APIKEY: 'AIzaSyBf4tHbkDLYC85PNoFS35GbJIMWtm4NkHw'
      });
    }
  };
});
System.register('src/lib/RxFuncSubject.js', ['npm:babel-runtime@5.8.5/core-js/object/assign.js', 'npm:rx@2.5.3.js'], function (_export) {
  var _Object$assign, Rx, RxFuncSubject;

  return {
    setters: [function (_npmBabelRuntime585CoreJsObjectAssignJs) {
      _Object$assign = _npmBabelRuntime585CoreJsObjectAssignJs['default'];
    }, function (_npmRx253Js) {
      Rx = _npmRx253Js['default'];
    }],
    execute: function () {

      /*
        Plain functions as Subjects. When invoked, it calls the internal
        Subject's `onNext` method:
      
          const clicker = RxFuncSubject();
          clicker.subscribe(() => console.log('clicked!'));
          clicker(); // clicked!
      
        Made to be used in a react component, without using real DOM events:
      
          <MyComponent onClick={clicker} />
      */
      'use strict';

      RxFuncSubject = function RxFuncSubject() {
        var subject = _Object$assign(function () {
          return subject.onNext.apply(subject, arguments);
        }, Rx.Observable.prototype, Rx.Subject.prototype);

        Rx.Subject.call(subject);

        return subject;
      };

      _export('default', RxFuncSubject);
    }
  };
});
System.register('src/lib/youtubePlayer.js', ['npm:babel-runtime@5.8.5/core-js/promise.js'], function (_export) {
  var _Promise, tag, firstScriptTag, ytPromise, ytPlayer;

  return {
    setters: [function (_npmBabelRuntime585CoreJsPromiseJs) {
      _Promise = _npmBabelRuntime585CoreJsPromiseJs['default'];
    }],
    execute: function () {
      'use strict';

      tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag = document.getElementsByTagName('script')[0];

      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      ytPromise = new _Promise(function (res) {
        window.onYouTubeIframeAPIReady = res;
      });

      ytPlayer = function ytPlayer(w, h, vidId, onStateChange) {
        if (w === undefined) w = 640;
        if (h === undefined) h = 390;
        return ytPromise.then(function () {
          return new _Promise(function (res, rej) {

            var options = {
              height: '' + h,
              width: '' + w,
              events: {
                'onReady': function onReady() {
                  return res(player);
                },
                'onStateChange': onStateChange || function () {}
              },
              playerVars: {
                controls: 1,
                autohide: 1,
                rel: 0
              }
            };
            if (vidId) options.videoId = '' + vidId;
            var player = new window.YT.Player('player', options);
          });
        });
      };

      _export('default', ytPlayer);
    }
  };
});
System.register('src/lib/getVideoInfo.js', ['npm:jsonp@0.2.0.js', 'src/constants/index.js'], function (_export) {
  'use strict';

  var jsonp, constants;
  return {
    setters: [function (_npmJsonp020Js) {
      jsonp = _npmJsonp020Js['default'];
    }, function (_srcConstantsIndexJs) {
      constants = _srcConstantsIndexJs['default'];
    }],
    execute: function () {
      _export('default', function (vidId, cb) {
        var base = 'https://www.googleapis.com/youtube/v3/videos';
        var url = base + '?id=' + vidId + '&key=' + constants.APIKEY + '&part=snippet&';
        jsonp(url, function (err, data) {
          if (data && data.items) {
            cb(data.items[0].snippet);
          }
        });
      });
    }
  };
});
System.register('src/Player.js', ['npm:babel-runtime@5.8.5/helpers/get.js', 'npm:babel-runtime@5.8.5/helpers/inherits.js', 'npm:babel-runtime@5.8.5/helpers/create-class.js', 'npm:babel-runtime@5.8.5/helpers/class-call-check.js', 'npm:react@0.13.3.js', 'src/lib/youtubePlayer.js', 'src/lib/getVideoInfo.js'], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, React, player, getVideoInfo, Component, Player;

  return {
    setters: [function (_npmBabelRuntime585HelpersGetJs) {
      _get = _npmBabelRuntime585HelpersGetJs['default'];
    }, function (_npmBabelRuntime585HelpersInheritsJs) {
      _inherits = _npmBabelRuntime585HelpersInheritsJs['default'];
    }, function (_npmBabelRuntime585HelpersCreateClassJs) {
      _createClass = _npmBabelRuntime585HelpersCreateClassJs['default'];
    }, function (_npmBabelRuntime585HelpersClassCallCheckJs) {
      _classCallCheck = _npmBabelRuntime585HelpersClassCallCheckJs['default'];
    }, function (_npmReact0133Js) {
      React = _npmReact0133Js['default'];
    }, function (_srcLibYoutubePlayerJs) {
      player = _srcLibYoutubePlayerJs['default'];
    }, function (_srcLibGetVideoInfoJs) {
      getVideoInfo = _srcLibGetVideoInfoJs['default'];
    }],
    execute: function () {
      'use strict';

      Component = React.Component;

      Player = (function (_Component) {
        _inherits(Player, _Component);

        function Player(props) {
          _classCallCheck(this, Player);

          _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, props);

          this.player = player(700, 450, null, this.vidStateChange.bind(this));
          this.loadVid(props.vidID);
        }

        _createClass(Player, [{
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(_ref) {
            var vidID = _ref.vidID;

            if (vidID !== this.props.vidID) {
              this.loadVid(vidID);
            }
          }
        }, {
          key: 'loadVid',
          value: function loadVid(vidId) {
            var onInfoLoad = this.props.onInfoLoad;

            this.player.then(function (p) {
              return p.loadVideoById({
                videoId: vidId,
                startSeconds: 3
              });
            });

            getVideoInfo(vidId, function (snippet) {
              return onInfoLoad(snippet);
            });
          }
        }, {
          key: 'vidStateChange',
          value: function vidStateChange(state) {
            if (state.data === 0 /* ended */) {
                this.props.onEnd();
              }
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement('div', { id: "player" });
          }
        }]);

        return Player;
      })(Component);

      _export('default', Player);
    }
  };
});
System.register('src/App.js', ['npm:babel-runtime@5.8.5/helpers/get.js', 'npm:babel-runtime@5.8.5/helpers/inherits.js', 'npm:babel-runtime@5.8.5/helpers/create-class.js', 'npm:babel-runtime@5.8.5/helpers/class-call-check.js', 'npm:react@0.13.3.js', 'npm:querystring@0.2.0.js', 'npm:rx@2.5.3.js', 'src/lib/RxFuncSubject.js', 'src/lib/rand.js', 'src/Nav.js', 'src/InfoBox.js', 'src/Player.js'], function (_export) {
  var _get, _inherits, _createClass, _classCallCheck, React, querystring, Rx, RxFunc, rand, Nav, InfoBox, Player, randVids, App;

  return {
    setters: [function (_npmBabelRuntime585HelpersGetJs) {
      _get = _npmBabelRuntime585HelpersGetJs['default'];
    }, function (_npmBabelRuntime585HelpersInheritsJs) {
      _inherits = _npmBabelRuntime585HelpersInheritsJs['default'];
    }, function (_npmBabelRuntime585HelpersCreateClassJs) {
      _createClass = _npmBabelRuntime585HelpersCreateClassJs['default'];
    }, function (_npmBabelRuntime585HelpersClassCallCheckJs) {
      _classCallCheck = _npmBabelRuntime585HelpersClassCallCheckJs['default'];
    }, function (_npmReact0133Js) {
      React = _npmReact0133Js['default'];
    }, function (_npmQuerystring020Js) {
      querystring = _npmQuerystring020Js['default'];
    }, function (_npmRx253Js) {
      Rx = _npmRx253Js['default'];
    }, function (_srcLibRxFuncSubjectJs) {
      RxFunc = _srcLibRxFuncSubjectJs['default'];
    }, function (_srcLibRandJs) {
      rand = _srcLibRandJs['default'];
    }, function (_srcNavJs) {
      Nav = _srcNavJs['default'];
    }, function (_srcInfoBoxJs) {
      InfoBox = _srcInfoBoxJs['default'];
    }, function (_srcPlayerJs) {
      Player = _srcPlayerJs['default'];
    }],
    execute: function () {

      // TODO: Randomizes the huge global array of vid ids. Fix this, eh.
      'use strict';

      randVids = rand(window.allVids);

      App = (function (_React$Component) {
        _inherits(App, _React$Component);

        function App(props) {
          _classCallCheck(this, App);

          _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);

          var qs = querystring.decode(window.location.search);
          var vidId = qs['v'] || qs['?v'] || randVids[randVids.length - 1];

          this.state = {
            title: '-',
            description: '-',
            vidId: vidId
          };

          this.handlers = {
            next: RxFunc(),
            prev: RxFunc(),
            end: RxFunc()
          };

          this.stream = this.createVidIDStream(vidId);
          this.onInfoLoad = this.onInfoLoad.bind(this);
        }

        _createClass(App, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this = this;

            this.stream.subscribe(function (v) {
              return _this.onVideoChanged(v);
            });
          }
        }, {
          key: 'createVidIDStream',
          value: function createVidIDStream(initVidId) {
            var _handlers = this.handlers;
            var next = _handlers.next;
            var prev = _handlers.prev;
            var end = _handlers.end;

            var fwd = function fwd() {
              return +1;
            };
            var back = function back() {
              return -1;
            };

            return Rx.Observable.merge(next.map(fwd), prev.map(back), end.map(fwd), Rx.Observable.fromEvent(window, 'popstate').map(back)).scan(0, function (ac, e) {
              return Math.max(0, ac + e);
            }).startWith(0).map(function (i) {
              return i == 0 ? initVidId : randVids[i - 1];
            });
          }
        }, {
          key: 'onVideoChanged',
          value: function onVideoChanged(v) {
            this.setState({
              title: '...loading...',
              description: '',
              vidId: v
            });

            window.history.pushState({ v: v }, v, '?v=' + v);
          }
        }, {
          key: 'onInfoLoad',
          value: function onInfoLoad(_ref) {
            var title = _ref.title;
            var description = _ref.description;

            this.setState({
              title: title,
              description: description.replace(/\n\n/g, '\n')
            });
            document.title = title;
          }
        }, {
          key: 'render',
          value: function render() {
            var _state = this.state;
            var title = _state.title;
            var description = _state.description;
            var vidId = _state.vidId;
            var _handlers2 = this.handlers;
            var next = _handlers2.next;
            var prev = _handlers2.prev;
            var end = _handlers2.end;

            return React.createElement(
              'div',
              { id: "app" },
              React.createElement(
                'div',
                { className: "header" },
                React.createElement(
                  'span',
                  null,
                  '🎥'
                ),
                ' ',
                React.createElement(
                  'a',
                  { className: "title", href: 'https://www.youtube.com/watch?v=' + vidId },
                  title
                ),
                React.createElement(Nav, { onNext: next, onPrev: prev })
              ),
              React.createElement(Player, { vidID: vidId, onEnd: end, onInfoLoad: this.onInfoLoad }),
              React.createElement(Nav, { onNext: next, onPrev: prev }),
              React.createElement(InfoBox, { content: description }),
              React.createElement(
                'div',
                { id: "credits" },
                'by ',
                React.createElement(
                  'a',
                  { href: "http://www.mrspeaker.net/" },
                  'Mr Speaker'
                )
              )
            );
          }
        }]);

        return App;
      })(React.Component);

      _export('default', App);
    }
  };
});
System.register('src/main.js', ['npm:react@0.13.3.js', 'src/App.js'], function (_export) {
  'use strict';

  var React, App, render;
  return {
    setters: [function (_npmReact0133Js) {
      React = _npmReact0133Js['default'];
    }, function (_srcAppJs) {
      App = _srcAppJs['default'];
    }],
    execute: function () {
      render = React.render;

      _export('default', render(React.createElement(App, null), document.querySelector('#app')));
    }
  };
});
//# sourceMappingURL=build.js.map