"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index_controller = void 0;
class IndexController {
    saludoIndex(req, res) {
        res.send('hello');
    }
}
exports.index_controller = new IndexController();
