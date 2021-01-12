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
const suite = flagpole_1.default("Get Plant info from the Rest API");
suite
    .scenario("Have Plant Data", "json")
    .open("/api/plant")
    .next((context) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield context.find("plant");
    context.assert(data.$).exists();
    context.assert("The data is a object", data.$).type.equals("object");
    context.assert("All plants have a name", data.$).every((plant) => {
        return plant.name;
    });
}));
