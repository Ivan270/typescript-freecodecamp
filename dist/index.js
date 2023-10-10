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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// Generics
// addId has a generic 'T'. All generic data types are written inside <>
// T extends object-> T by default should be an object
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var userA = {
    name: 'Jack',
};
var result = addId(userA);
var userB = {
    name: 'John',
    data: {
        meta: 'foo',
    },
};
// Generic allows to provide different data types, in this case an array
var userB2 = {
    name: 'James',
    data: ['foo', 'bar', 'baz'],
};
var userC = {
    name: 'Jimmy',
    data: {
        meta: 'foo',
    },
    meta: 'bar',
};
// Enums
// const statuses = {
// 	notStarted: 0,
// 	inProgress: 1,
// 	done: 2,
// };
// console.log(statuses.inProgress) // 1
// It has keys, and the values start from 0 incrementing by 1
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
console.log(Status.InProgress); // 1
var notStartedStatus = Status.NotStarted;
notStartedStatus = Status.Done;
// assign values to enums
var Status2;
(function (Status2) {
    Status2["NotStarted"] = "notStarted";
    Status2["InProgress"] = "inProgress";
    Status2["Done"] = "done";
})(Status2 || (Status2 = {}));
console.log(Status.InProgress); // 1
var notStartedStatus2 = Status2.NotStarted;
notStartedStatus2 = Status2.Done;
