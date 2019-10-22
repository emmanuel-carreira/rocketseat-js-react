"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.user = "Danilo";
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.user);
    }
  }]);

  return TodoList;
}(List);

var Mathematics =
/*#__PURE__*/
function () {
  function Mathematics() {
    _classCallCheck(this, Mathematics);
  }

  _createClass(Mathematics, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Mathematics;
}();

var my_list = new TodoList();
my_list.showUser();
var number = {
  first: 8,
  second: 2
};
var array = [1, 3, 4, 5, 8, 9];
var new_array = array.map(function (item, index) {
  return item + index;
});
var summed_array = array.reduce(function (total, next) {
  return total + next;
});
var even_array = array.filter(function (item) {
  return item % 2 === 0;
});
var four = array.find(function (item) {
  return item === 4;
});
var map_array = array.map(function (item) {
  return item * 2;
});

var arrow = function arrow() {
  return {
    str: 'arrow function is awesome!'
  };
};

console.log(new_array);
console.log(summed_array);
console.log(even_array);
console.log(four);
console.log(arrow());
number.third = Mathematics.sum(8, 2);
console.log(number);
test(10);
var user = {
  name: 'Woodpicker',
  age: 54,
  address: {
    city: 'Orlando',
    state: 'Florida'
  }
};
var name = user.name,
    age = user.age,
    city = user.address.city;
console.log(name);
console.log(age);
console.log(city);
console.log(showName(user));

var multiply_arrow = function multiply_arrow() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return a * b;
};

function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a * b;
}

function test(x) {
  var y = 5;

  if (x > y) {
    var _y = 4;
    console.log(x + _y);
  }
}

function showName(_ref) {
  var name = _ref.name;
  return name;
}

document.getElementById('newtodo').onclick = function () {
  my_list.add('New Todo');
};

var user_rest = {
  name_rest: "Duck Donald",
  age_rest: 98,
  company_rest: "Walt Disney"
};

var name_rest = user_rest.name_rest,
    rest = _objectWithoutProperties(user_rest, ["name_rest"]);

console.log(name_rest);
console.log(rest);
console.log(sumOverload(1, 1, 2, 3, 5, 8, 13, 21, 34));

function sumOverload() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

var array_odd = [1, 3, 5];
var array_even = [2, 4, 6];
var array_some_naturals = [].concat(array_odd, [array_even]);
var user_spread = {
  name_spread: "Uncle Scrooge",
  age_spread: "156",
  company_spread: "Walt Disney"
};

var user_spread_second = _objectSpread({}, user_spread, {
  age_spread: 184
});

console.log(user_spread_second);
var string = "learning template literals!";
var learning = "Today i was: ".concat(string);
console.log(learning);
var prime_number = 7;
var prime_bool = true;
var prime = {
  prime_number: prime_number,
  prime_bool: prime_bool,
  set: "Naturals"
};
console.log(prime);
