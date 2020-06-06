"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            age: 21
        };
        return _this;
    }
    MyClass.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "my name is ",
                this.props.name,
                " and I am ",
                this.state.age,
                " years old"),
            React.createElement("p", null,
                this.props.lastName,
                " ")));
    };
    MyClass.defaultProps = {
        name: "gabriel",
        lastName: "fono"
    };
    return MyClass;
}(React.Component));
exports["default"] = MyClass;