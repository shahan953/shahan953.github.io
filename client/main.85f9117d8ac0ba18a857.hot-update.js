webpackHotUpdate("main",{

/***/ "./node_modules/countup.js/dist/countUp.min.js":
false,

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/client/Styles/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/client/Styles/style.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".videos form button {\n  margin-left: -2px; }\n\nheader .navbar-nav .active {\n  color: #060; }\n\n.dropdown .dropdown-menu {\n  top: 20px; }\n\n#user-profile .nav .active {\n  color: #333;\n  font-weight: bold; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/client/Styles/contact.scss":
false,

/***/ "./node_modules/css-loader/index.js!./src/client/Styles/login.scss":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/react-countup/build/index.js":
false,

/***/ "./src/client/Components/AuthNav.js":
/*!******************************************!*\
  !*** ./src/client/Components/AuthNav.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Container = __webpack_require__(/*! ./Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ./Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _UserProfileDropdown = __webpack_require__(/*! ./UserProfileDropdown */ "./src/client/Components/UserProfileDropdown.js");

var _UserProfileDropdown2 = _interopRequireDefault(_UserProfileDropdown);

var _auth = __webpack_require__(/*! ../Actions/auth */ "./src/client/Actions/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

class AuthNav extends _react2.default.Component {
  render() {
    const _props = this.props,
          { isAuthenticated, LogoutUser } = _props,
          props = _objectWithoutProperties(_props, ['isAuthenticated', 'LogoutUser']);
    return _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'col-md-12  my-2' },
          _react2.default.createElement(
            'div',
            { className: 'float-left' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: 'tel:+998888888888', className: 'btn btn-outline-success' },
              'Call Us: +99 888-888-8888'
            )
          ),
          isAuthenticated ? _react2.default.createElement(_UserProfileDropdown2.default, null) : _react2.default.createElement(
            'div',
            { className: 'float-right' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/login', className: 'btn btn-info mr-2 py-1' },
              'Login'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/register', className: 'btn btn-info py-1' },
              'Register'
            )
          )
        )
      )
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.token
});

const mapDispatchToProps = dispatch => ({
  LogoutUser: () => dispatch((0, _auth.LogoutUser)())
});
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AuthNav);

/***/ }),

/***/ "./src/client/Components/Card.js":
/*!***************************************!*\
  !*** ./src/client/Components/Card.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Model from './Model';

const Card = ({ data }) => _react2.default.createElement(
  'div',
  { className: 'card bg-light text-center mb-4' },
  _react2.default.createElement(
    'div',
    { className: 'card-body' },
    _react2.default.createElement(
      'h3',
      null,
      data ? data.firstName + ' ' + data.lastName : 'No Title'
    ),
    _react2.default.createElement(
      'p',
      { className: 'text-secondary' },
      data ? data.email : 'No Email'
    )
  ),
  _react2.default.createElement(
    'div',
    { className: 'card-footer' },
    _react2.default.createElement(
      'button',
      { type: 'button', className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': data ? `#${data._id}` : 'No date' },
      'View Details'
    )
  )
);

exports.default = Card;

/***/ }),

/***/ "./src/client/Components/Dashboard/MyImages.js":
/*!*****************************************************!*\
  !*** ./src/client/Components/Dashboard/MyImages.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _MyImage = __webpack_require__(/*! ./MyImage.Card */ "./src/client/Components/Dashboard/MyImage.Card.js");

var _MyImage2 = _interopRequireDefault(_MyImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MyImages extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { className: 'col-md-9' },
      _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(_MyImage2.default, null),
        _react2.default.createElement(_MyImage2.default, null),
        _react2.default.createElement(_MyImage2.default, null),
        _react2.default.createElement(_MyImage2.default, null),
        _react2.default.createElement(_MyImage2.default, null),
        _react2.default.createElement(_MyImage2.default, null),
        _react2.default.createElement(_MyImage2.default, null),
        _react2.default.createElement(_MyImage2.default, null),
        _react2.default.createElement(_MyImage2.default, null)
      )
    );
  }
}

exports.default = MyImages;

/***/ }),

/***/ "./src/client/Components/Dashboard/MyVideos.js":
/*!*****************************************************!*\
  !*** ./src/client/Components/Dashboard/MyVideos.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _MyImage = __webpack_require__(/*! ./MyImage.Card */ "./src/client/Components/Dashboard/MyImage.Card.js");

var _MyImage2 = _interopRequireDefault(_MyImage);

var _Loader = __webpack_require__(/*! ../Loader */ "./src/client/Components/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MyVideos extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { className: 'col-md-9' },
      _react2.default.createElement(_Row2.default, null),
      _react2.default.createElement(_Loader2.default, null)
    );
  }
}

exports.default = MyVideos;

/***/ }),

/***/ "./src/client/Components/Footer.js":
/*!*****************************************!*\
  !*** ./src/client/Components/Footer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = () => _react2.default.createElement(
  'footer',
  { className: 'text-center py-3 bg-secondary text-white clearfix' },
  _react2.default.createElement(
    'p',
    { className: 'p-0 m-0' },
    'Copyright \xA9 All Right Reserved'
  )
);

exports.default = Footer;

/***/ }),

/***/ "./src/client/Components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/Components/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _auth = __webpack_require__(/*! ../Actions/auth */ "./src/client/Actions/auth.js");

var _Row = __webpack_require__(/*! ./Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Container = __webpack_require__(/*! ./Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _NavBar = __webpack_require__(/*! ./NavBar */ "./src/client/Components/NavBar.js");

var _NavBar2 = _interopRequireDefault(_NavBar);

var _AuthNav = __webpack_require__(/*! ./AuthNav */ "./src/client/Components/AuthNav.js");

var _AuthNav2 = _interopRequireDefault(_AuthNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = () => _react2.default.createElement(
  'header',
  null,
  _react2.default.createElement(_AuthNav2.default, null),
  _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-expand-lg navbar-dark bg-dark' },
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'navbar-brand', to: '/' },
        'Navbar'
      ),
      _react2.default.createElement(
        'button',
        { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
        _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
      ),
      _react2.default.createElement(_NavBar2.default, null)
    )
  )
);

exports.default = Header;

/***/ }),

/***/ "./src/client/Components/Homepage/BrowseRepo.js":
/*!******************************************************!*\
  !*** ./src/client/Components/Homepage/BrowseRepo.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactOwlCarousel = __webpack_require__(/*! react-owl-carousel */ "./node_modules/react-owl-carousel/lib/OwlCarousel.js");

var _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);

var _Container = __webpack_require__(/*! ../Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BrowseRepo = () => _react2.default.createElement(
  'section',
  { className: 'normal text-center bg-white py-5' },
  _react2.default.createElement(
    _Container2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'col-md-12' },
      _react2.default.createElement(
        'h1',
        { className: 'title' },
        'Video, Gif\'s, Meme Marketing is Crucial in 2018'
      ),
      _react2.default.createElement(
        'h4',
        null,
        'Drive more sales to your business by sharing the ready to share personalised video content'
      ),
      _react2.default.createElement(
        'div',
        { className: '' },
        _react2.default.createElement(
          'p',
          null,
          '2018 is all about the new way of marketing, attract & engage your target audience with the visually applaeaning videos, iamges, gif\'s memes to drive more traction for your business & drive more sales.'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-outline-success' },
          'Browse Our Repository Now'
        )
      )
    )
  )
);
exports.default = BrowseRepo;

/***/ }),

/***/ "./src/client/Components/Homepage/Counter.js":
/*!***************************************************!*\
  !*** ./src/client/Components/Homepage/Counter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ../../Styles/counter.scss */ "./src/client/Styles/counter.scss");

var _Container = __webpack_require__(/*! ../Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _CounterCard = __webpack_require__(/*! ./CounterCard */ "./src/client/Components/Homepage/CounterCard.js");

var _CounterCard2 = _interopRequireDefault(_CounterCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Counter = () => _react2.default.createElement(
  'section',
  { className: 'py-5 bg-dark' },
  _react2.default.createElement(
    'div',
    { className: 'wrapper' },
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(_CounterCard2.default, { to: '18000', title: 'Subject Matter Expertise', speed: '1000', icon: 'code' }),
        _react2.default.createElement(_CounterCard2.default, { to: '18000', title: 'New Videos Daily', speed: '1000', icon: 'video' }),
        _react2.default.createElement(_CounterCard2.default, { to: '18000', title: 'Gif\'s/Meme Daily', speed: '1000', icon: 'spinner' }),
        _react2.default.createElement(_CounterCard2.default, { to: '18000', title: 'Shares Per Day', speed: '1000', icon: 'share-alt' })
      )
    )
  )
);

exports.default = Counter;

/***/ }),

/***/ "./src/client/Components/Homepage/CounterCard.js":
/*!*******************************************************!*\
  !*** ./src/client/Components/Homepage/CounterCard.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CounterCard = props => _react2.default.createElement(
  "div",
  { className: "col-md-3 text-center" },
  _react2.default.createElement(
    "div",
    { className: "counter card p-2" },
    _react2.default.createElement("i", { className: `fa fa-${props.icon} fa-2x p-3` }),
    _react2.default.createElement("h2", { className: "timer count-title count-number", "data-to": props.to, "data-speed": props.speed }),
    _react2.default.createElement(
      "p",
      { className: "count-text " },
      props.title
    )
  )
);

exports.default = CounterCard;

/***/ }),

/***/ "./src/client/Components/Homepage/FeatureContent.js":
/*!**********************************************************!*\
  !*** ./src/client/Components/Homepage/FeatureContent.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactOwlCarousel = __webpack_require__(/*! react-owl-carousel */ "./node_modules/react-owl-carousel/lib/OwlCarousel.js");

var _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);

var _Container = __webpack_require__(/*! ../Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Card = __webpack_require__(/*! ../Card */ "./src/client/Components/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FeatureContent = () => _react2.default.createElement(
  'section',
  { className: 'normal bg-light py-5' },
  _react2.default.createElement(
    _Container2.default,
    null,
    _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-md-2' },
        _react2.default.createElement(
          'ul',
          { className: 'nav nav-pills nav-stacked' },
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-link text-dark', to: '#' },
              'Real Estate'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-link text-dark', to: '#' },
              'Education'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-link text-dark', to: '#' },
              'Entertainment'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-link text-dark', to: '#' },
              'Health/Fitness'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-link text-dark', to: '#' },
              'Entertainment'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-link text-dark', to: '#' },
              'IT/Technology'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-link text-dark', to: '#' },
              'Finance/Investment'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-link text-dark', to: '#' },
              'Others'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-10' },
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_Card2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_Card2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_Card2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_Card2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_Card2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(_Card2.default, null)
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'text-center' },
      _react2.default.createElement(
        'button',
        { className: 'btn btn-outline-dark px-4' },
        'Start Sharing Now'
      )
    )
  )
);
exports.default = FeatureContent;

/***/ }),

/***/ "./src/client/Components/Homepage/FeatureNav.js":
false,

/***/ "./src/client/Components/Homepage/QuickStart.js":
/*!******************************************************!*\
  !*** ./src/client/Components/Homepage/QuickStart.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ../../Styles/counter.scss */ "./src/client/Styles/counter.scss");

var _Container = __webpack_require__(/*! ../Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _CounterCard = __webpack_require__(/*! ./CounterCard */ "./src/client/Components/Homepage/CounterCard.js");

var _CounterCard2 = _interopRequireDefault(_CounterCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QuickStart = () => _react2.default.createElement(
  'section',
  { className: 'normal text-center bg-white py-5 bg-secondary' },
  _react2.default.createElement(
    'div',
    { className: 'wrapper' },
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: 'section-title text-center py-2' },
        _react2.default.createElement(
          'h2',
          null,
          'Quick Start Guide'
        )
      ),
      _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(
            'span',
            { className: 'p-3 d-inline-block rounded-circle bg-dark' },
            _react2.default.createElement('i', { className: 'fa fa-3x fa-paper-plane  text-white' })
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Counter on your website'
          ),
          _react2.default.createElement(
            'p',
            null,
            'At the time of adding bootstrap CSS in your website header, you also need to add font awesome CSS in the header. '
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(
            'span',
            { className: 'p-3 d-inline-block rounded-circle bg-dark' },
            _react2.default.createElement('i', { className: 'fa fa-3x fa-paper-plane  text-white' })
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Counter on your website'
          ),
          _react2.default.createElement(
            'p',
            null,
            'At the time of adding bootstrap CSS in your website header, you also need to add font awesome CSS in the header. '
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(
            'span',
            { className: 'p-3 d-inline-block rounded-circle bg-dark' },
            _react2.default.createElement('i', { className: 'fa fa-3x fa-paper-plane  text-white' })
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Counter on your website'
          ),
          _react2.default.createElement(
            'p',
            null,
            'At the time of adding bootstrap CSS in your website header, you also need to add font awesome CSS in the header. '
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'text-center' },
        _react2.default.createElement(
          'button',
          { className: 'btn btn-success' },
          'Start Now'
        )
      )
    )
  )
);

exports.default = QuickStart;

/***/ }),

/***/ "./src/client/Components/Homepage/Slider.js":
/*!**************************************************!*\
  !*** ./src/client/Components/Homepage/Slider.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactOwlCarousel = __webpack_require__(/*! react-owl-carousel */ "./node_modules/react-owl-carousel/lib/OwlCarousel.js");

var _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Slider = () => _react2.default.createElement(
    'div',
    { id: 'slider' },
    _react2.default.createElement(
        _reactOwlCarousel2.default,
        {
            className: 'owl-theme',
            loop: true, margin: 0,
            nav: false,
            items: 1
        },
        _react2.default.createElement(
            'div',
            { className: 'item' },
            _react2.default.createElement('img', { src: 'images/slider.png', alt: 'Slider 1' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'item' },
            _react2.default.createElement('img', { src: 'images/slider.png', alt: 'Slider 1' })
        ),
        _react2.default.createElement(
            'div',
            { className: 'item' },
            _react2.default.createElement('img', { src: 'images/slider.png', alt: 'Slider 1' })
        )
    )
);
exports.default = Slider;

/***/ }),

/***/ "./src/client/Components/Images/Content.js":
/*!*************************************************!*\
  !*** ./src/client/Components/Images/Content.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Image = __webpack_require__(/*! ./Image.Card */ "./src/client/Components/Images/Image.Card.js");

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ImageContents extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null),
      _react2.default.createElement(_Image2.default, null)
    );
  }
}

exports.default = ImageContents;

/***/ }),

/***/ "./src/client/Components/Images/Image.Nav.js":
/*!***************************************************!*\
  !*** ./src/client/Components/Images/Image.Nav.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ImageNav extends _react2.default.Component {

  render() {
    return _react2.default.createElement(
      'ul',
      { className: 'nav nav-pills nav-stacked' },
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Real Estate'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Education'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Entertainment'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Health/Fitness'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Entertainment'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'IT/Technology'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Finance/Investment'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Others'
        )
      )
    );
  }
}

exports.default = ImageNav;

/***/ }),

/***/ "./src/client/Components/NavBar.js":
/*!*****************************************!*\
  !*** ./src/client/Components/NavBar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NavBar = () => _react2.default.createElement(
  'div',
  { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
  _react2.default.createElement(
    'ul',
    { className: 'navbar-nav mr-auto' },
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', className: 'nav-link', to: '/', exact: true },
        'Home'
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', className: 'nav-link', to: '/videos' },
        'Videos'
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', className: 'nav-link', to: '/images' },
        'Images'
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', className: 'nav-link', to: '/blog' },
        'Blog'
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', className: 'nav-link', to: '/about' },
        'About'
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { activeClassName: 'active', className: 'nav-link', to: '/contact' },
        'Contact'
      )
    )
  ),
  _react2.default.createElement(
    'button',
    { className: 'btn btn-outline-success my-2 my-sm-0' },
    'Want Personalised Content?'
  )
);

exports.default = NavBar;

/***/ }),

/***/ "./src/client/Components/UserProfileDropdown.js":
/*!******************************************************!*\
  !*** ./src/client/Components/UserProfileDropdown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(/*! ../config */ "./src/client/config.js");

var _config2 = _interopRequireDefault(_config);

var _auth = __webpack_require__(/*! ../Actions/auth */ "./src/client/Actions/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import { LogoutUser, setUser } from '../../Actions/auth';


class UserProfileDropdown extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      data: false
    }, _temp;
  }

  componentDidMount() {
    _axios2.default.get(`${_config2.default.server}/api/user/me`, {
      headers: {
        'authorization': localStorage.getItem('auth')
      }
    }).then(res => {
      // this.props.userData(res.data)
      this.setState({
        data: res.data
      });
    }).catch(e => {
      localStorage.clear();
      // this.props.LogoutUser();
      console.log(e);
    });
  }

  render() {
    const _props = this.props,
          { token, LogoutUser, userData } = _props,
          props = _objectWithoutProperties(_props, ['token', 'LogoutUser', 'userData']);
    const data = this.state.data;
    return _react2.default.createElement(
      'div',
      { className: 'float-right' },
      data ? _react2.default.createElement(
        'div',
        { className: 'dropdown p-2' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '#', 'data-toggle': 'dropdown' },
          'Hi, ',
          data.user.firstname,
          ' ',
          data.user.lastname,
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-arrow-down' })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu  dropdown-menu-right p-0 mt-10', style: { top: 20 } },
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { activeClassName: 'active', to: '/myaccount', className: 'nav-link text-info' },
              _react2.default.createElement('i', { className: 'fa fa-user' }),
              ' My Account'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { activeClassName: 'active', to: '/myaccount/settings', className: 'nav-link text-info' },
              _react2.default.createElement('i', { className: 'fa fa-key' }),
              ' Account Setting'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { onClick: () => {
                  localStorage.clear();
                  LogoutUser();
                }, activeClassName: 'active', to: '#', className: 'nav-link text-info' },
              _react2.default.createElement('i', { className: 'fa fa-sign-out' }),
              ' Logout'
            )
          )
        )
      ) : _react2.default.createElement(
        'span',
        { className: 'text-light p-2' },
        '\'Please Wait...\''
      )
    );
  }
}
const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  LogoutUser: () => dispatch((0, _auth.LogoutUser)()),
  userData: data => dispatch(setUser(data))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserProfileDropdown);

/***/ }),

/***/ "./src/client/Components/Videos/Content.js":
/*!*************************************************!*\
  !*** ./src/client/Components/Videos/Content.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Video = __webpack_require__(/*! ./Video.Card */ "./src/client/Components/Videos/Video.Card.js");

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Contents extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      _Row2.default,
      null,
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null),
      _react2.default.createElement(_Video2.default, null)
    );
  }
}

exports.default = Contents;

/***/ }),

/***/ "./src/client/Components/Videos/Video.Card.js":
/*!****************************************************!*\
  !*** ./src/client/Components/Videos/Video.Card.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(/*! ../Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VideoCard extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      { className: 'col-md-4 mb-3' },
      _react2.default.createElement(
        'div',
        { className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-body p-0' },
          _react2.default.createElement('img', { src: '/images/g5.jpg', className: 'img-fluid' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-footer' },
          _react2.default.createElement(
            'div',
            { className: 'd-flex flex-row' },
            _react2.default.createElement(
              'div',
              { className: 'd-flex' },
              _react2.default.createElement(
                'div',
                { className: 'px-2' },
                _react2.default.createElement('i', { className: 'fas fa-play float-left' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'progress w-75' },
              _react2.default.createElement('div', { className: 'progress-bar bg-success', role: 'progressbar', style: { width: "25%" }, 'aria-valuenow': '25', 'aria-valuemin': '0', 'aria-valuemax': '100' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'd-flex' },
              _react2.default.createElement(
                'div',
                { className: 'px-2' },
                _react2.default.createElement('i', { className: 'fas fa-volume-up' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'px-2' },
                _react2.default.createElement('i', { className: 'fas fa-expand' })
              )
            )
          )
        )
      )
    );
  }
}

exports.default = VideoCard;

/***/ }),

/***/ "./src/client/Components/Videos/Video.Nav.js":
/*!***************************************************!*\
  !*** ./src/client/Components/Videos/Video.Nav.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VideosNav extends _react2.default.Component {

  render() {
    return _react2.default.createElement(
      'ul',
      { className: 'nav nav-pills nav-stacked' },
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Real Estate'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Education'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Entertainment'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Health/Fitness'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Entertainment'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'IT/Technology'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Finance/Investment'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { className: 'nav-link text-dark', to: '#' },
          'Others'
        )
      )
    );
  }
}

exports.default = VideosNav;

/***/ }),

/***/ "./src/client/Routes/index.js":
/*!************************************!*\
  !*** ./src/client/Routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Homepage = __webpack_require__(/*! ../Views/Homepage */ "./src/client/Views/Homepage.js");

var _Homepage2 = _interopRequireDefault(_Homepage);

var _Header = __webpack_require__(/*! ../Components/Header */ "./src/client/Components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ../Components/Footer */ "./src/client/Components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _NotFound = __webpack_require__(/*! ../Views/NotFound */ "./src/client/Views/NotFound.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Category = __webpack_require__(/*! ../Views/Category */ "./src/client/Views/Category.js");

var _Category2 = _interopRequireDefault(_Category);

var _About = __webpack_require__(/*! ../Views/About */ "./src/client/Views/About.js");

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(/*! ../Views/Contact */ "./src/client/Views/Contact.js");

var _Contact2 = _interopRequireDefault(_Contact);

var _Single = __webpack_require__(/*! ../Views/Single */ "./src/client/Views/Single.js");

var _Single2 = _interopRequireDefault(_Single);

var _Login = __webpack_require__(/*! ../Views/Login */ "./src/client/Views/Login.js");

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(/*! ../Views/Register */ "./src/client/Views/Register.js");

var _Register2 = _interopRequireDefault(_Register);

var _Dashboard = __webpack_require__(/*! ../Views/Dashboard */ "./src/client/Views/Dashboard.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _PrivateRoute = __webpack_require__(/*! ./PrivateRoute */ "./src/client/Routes/PrivateRoute.js");

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _PublicRoute = __webpack_require__(/*! ./PublicRoute */ "./src/client/Routes/PublicRoute.js");

var _PublicRoute2 = _interopRequireDefault(_PublicRoute);

var _CategorySingle = __webpack_require__(/*! ../Components/Categories/CategorySingle */ "./src/client/Components/Categories/CategorySingle.js");

var _CategorySingle2 = _interopRequireDefault(_CategorySingle);

var _AddNewContent = __webpack_require__(/*! ../Components/Dashboard/AddNewContent */ "./src/client/Components/Dashboard/AddNewContent.js");

var _AddNewContent2 = _interopRequireDefault(_AddNewContent);

var _MyAccount = __webpack_require__(/*! ../Components/Dashboard/MyAccount */ "./src/client/Components/Dashboard/MyAccount.js");

var _MyAccount2 = _interopRequireDefault(_MyAccount);

var _Videos = __webpack_require__(/*! ../Views/Videos */ "./src/client/Views/Videos.js");

var _Videos2 = _interopRequireDefault(_Videos);

var _Images = __webpack_require__(/*! ../Views/Images */ "./src/client/Views/Images.js");

var _Images2 = _interopRequireDefault(_Images);

var _MyImages = __webpack_require__(/*! ../Components/Dashboard/MyImages */ "./src/client/Components/Dashboard/MyImages.js");

var _MyImages2 = _interopRequireDefault(_MyImages);

var _MyVideos = __webpack_require__(/*! ../Components/Dashboard/MyVideos */ "./src/client/Components/Dashboard/MyVideos.js");

var _MyVideos2 = _interopRequireDefault(_MyVideos);

var _MyMemes = __webpack_require__(/*! ../Components/Dashboard/MyMemes */ "./src/client/Components/Dashboard/MyMemes.js");

var _MyMemes2 = _interopRequireDefault(_MyMemes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const history = exports.history = (0, _createBrowserHistory2.default)();
// import indexRouter from './router'


const AppRouter = () => _react2.default.createElement(
  _reactRouterDom.Router,
  { history: history },
  _react2.default.createElement(
    'div',
    { className: 'wrap' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Homepage2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/category', component: _Category2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/category/:id', component: _CategorySingle2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/single/:id', component: _Single2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/videos', component: _Videos2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/images', component: _Images2.default }),
      _react2.default.createElement(_PublicRoute2.default, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_PublicRoute2.default, { path: '/register', component: _Register2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/myaccount', exact: true, component: _MyAccount2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/mycontent/post', component: _AddNewContent2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/myaccount/downloads/images', exact: true, component: _MyImages2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/myaccount/downloads/videos', exact: true, component: _MyVideos2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/myaccount/downloads/memes', exact: true, component: _MyMemes2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/myaccount/orders/images', exact: true, component: _MyImages2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/myaccount/orders/videos', exact: true, component: _MyVideos2.default }),
      _react2.default.createElement(_PrivateRoute2.default, { path: '/myaccount/orders/memes', exact: true, component: _MyMemes2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
    ),
    _react2.default.createElement(_Footer2.default, null)
  )
);

exports.default = AppRouter;

/***/ }),

/***/ "./src/client/Views/Contact.js":
/*!*************************************!*\
  !*** ./src/client/Views/Contact.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Contact = () => _react2.default.createElement(
  'p',
  null,
  'hi'
);

exports.default = Contact;

/***/ }),

/***/ "./src/client/Views/Images.js":
/*!************************************!*\
  !*** ./src/client/Views/Images.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(/*! ../Components/Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Search = __webpack_require__(/*! ../Components/Videos/Search */ "./src/client/Components/Videos/Search.js");

var _Search2 = _interopRequireDefault(_Search);

var _Row = __webpack_require__(/*! ../Components/Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Content = __webpack_require__(/*! ../Components/Videos/Content */ "./src/client/Components/Videos/Content.js");

var _Content2 = _interopRequireDefault(_Content);

var _Image = __webpack_require__(/*! ../Components/Images/Image.Nav */ "./src/client/Components/Images/Image.Nav.js");

var _Image2 = _interopRequireDefault(_Image);

var _Content3 = __webpack_require__(/*! ../Components/Images/Content */ "./src/client/Components/Images/Content.js");

var _Content4 = _interopRequireDefault(_Content3);

var _Counter = __webpack_require__(/*! ../Components/Homepage/Counter */ "./src/client/Components/Homepage/Counter.js");

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Videos extends _react2.default.Component {

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'section',
        { className: 'videos' },
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(_Search2.default, null),
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'col-md-2' },
              _react2.default.createElement(_Image2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-10' },
              _react2.default.createElement(_Content4.default, null)
            )
          )
        )
      ),
      _react2.default.createElement(_Counter2.default, null)
    );
  }
}

exports.default = Videos;

/***/ }),

/***/ "./src/client/Views/Videos.js":
/*!************************************!*\
  !*** ./src/client/Views/Videos.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(/*! ../Components/Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Search = __webpack_require__(/*! ../Components/Videos/Search */ "./src/client/Components/Videos/Search.js");

var _Search2 = _interopRequireDefault(_Search);

var _Row = __webpack_require__(/*! ../Components/Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _Content = __webpack_require__(/*! ../Components/Videos/Content */ "./src/client/Components/Videos/Content.js");

var _Content2 = _interopRequireDefault(_Content);

var _Video = __webpack_require__(/*! ../Components/Videos/Video.Nav */ "./src/client/Components/Videos/Video.Nav.js");

var _Video2 = _interopRequireDefault(_Video);

var _Counter = __webpack_require__(/*! ../Components/Homepage/Counter */ "./src/client/Components/Homepage/Counter.js");

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Videos extends _react2.default.Component {

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'section',
        { className: 'videos' },
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(_Search2.default, null),
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'col-md-2' },
              _react2.default.createElement(_Video2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-10' },
              _react2.default.createElement(_Content2.default, null)
            )
          )
        )
      ),
      _react2.default.createElement(_Counter2.default, null)
    );
  }
}

exports.default = Videos;

/***/ }),

/***/ "./src/client/config.js":
/*!******************************!*\
  !*** ./src/client/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const conf = {
  server: 'http://localhost:3000'
};

exports.default = conf;

/***/ })

})
//# sourceMappingURL=main.85f9117d8ac0ba18a857.hot-update.js.map