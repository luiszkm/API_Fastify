"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const users_routes_1 = require("./users.routes");
async function Routes(app) {
    (0, users_routes_1.transactionsRoutes)(app);
}
exports.Routes = Routes;
