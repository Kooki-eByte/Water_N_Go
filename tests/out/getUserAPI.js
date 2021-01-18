"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const flagpole_1 = require("flagpole");
const suite = flagpole_1.default("Have User Data");
suite
    .scenario("Get User Data", "json")
    .open("/api/user")
    .next((context) => __awaiter(void 0, void 0, void 0, function* () {
    const data = context.response.jsonBody;
    context.assert("Data is a array", data.$).type.equals("array");
    context.assert("Every user has an ID", data.$).every((user) => {
        return user.id;
    });
    context.assert("Every user has a NAME", data.$).every((user) => {
        return user.name;
    });
    context.assert("Every user has a EMAIL", data.$).every((user) => {
        return user.email;
    });
}));
