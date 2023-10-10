var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Working with DOM
var someElement = document.querySelector('.foo');
// listener
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log(target.value);
});
// Classes
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
var usuario = new User('Juan', 'Perez');
console.log(usuario.getFullName());
var Musician = /** @class */ (function () {
    function Musician(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    Musician.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Musician.maxAge = 50;
    return Musician;
}());
// Heritage
var Drummer = /** @class */ (function (_super) {
    __extends(Drummer, _super);
    function Drummer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drummer.prototype.setBrand = function (brand) {
        this.drumBrand = brand;
    };
    Drummer.prototype.getBrand = function () {
        return this.drumBrand;
    };
    return Drummer;
}(Musician));
var drummer = new Drummer('Joaquin', 'Verdugo');
