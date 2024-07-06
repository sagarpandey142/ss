"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const DatabaseConnect_1 = __importDefault(require("./config/DatabaseConnect"));
const transactionRoute_1 = __importDefault(require("./routes/transactionRoute"));
dotenv_1.default.config();
(0, DatabaseConnect_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', transactionRoute_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
