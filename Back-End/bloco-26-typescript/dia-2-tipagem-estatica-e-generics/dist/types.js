"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direction = exports.door = exports.color = void 0;
var color;
(function (color) {
    color["BLACK"] = "preta";
    color["WHITE"] = "branca";
    color["RED"] = "vermelha";
    color["SILVER"] = "prata";
})(color = exports.color || (exports.color = {}));
var door;
(function (door) {
    door["FRONT_RIGHT"] = "porta da frente direita";
    door["FRONT_LEFT"] = "porta da frente esquerda";
    door["BACK_LEFT"] = "porta de tr\u00E1s esquerda";
    door["BACK_RIGHT"] = "porta de tr\u00E1s direita";
})(door = exports.door || (exports.door = {}));
var direction;
(function (direction) {
    direction["LEFT"] = "esquerda";
    direction["RIGHT"] = "direita";
})(direction = exports.direction || (exports.direction = {}));
//# sourceMappingURL=types.js.map