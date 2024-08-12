import { createProduct, addProductToService } from "./src/product";
import { createOrder, addOrderToService } from "./src/order";

createProduct("Waschmaschine", 800);
addProductToService("Wash Mash Store", "Waschmaschine");

createOrder(["Waschmaschine", "Toaster"]);
addOrderToService("Wash Mash Store", "Order666");
