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
    const data = context.response.jsonBody;
    context.assert("Data is a array", data.$).type.equals("array");
    context.assert("Every plant has a ID", data.$).every((plant) => {
        return plant.id;
    });
    context.assert("Every plant has a NAME", data.$).every((plant) => {
        return plant.name;
    });
    context.assert("Some plants are watered", data.$).optional.some((plant) => {
        return plant.isWatered;
    });
    context
        .assert("Plants have at least 1 day left until they need water", data.$)
        .some((plant) => {
        return plant.daysToWaterAgain >= 1;
    });
    context
        .assert("Plants have 0 days and need to be watered", data.$)
        .some((plant) => {
        if (plant.daysToWaterAgain === 0) {
            context.comment(`${plant.name} needs to be watered`);
            return plant.daysToWaterAgain === 0;
        }
    });
}));
