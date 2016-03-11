"use strict";

import PromotionController from "../controller/promotion.controller";

export default class PromotionRoutes {
    static init(router) {
        console.log("Entering PromotionRoutes::init");
        router
            .route("/api/promotions")
            .get(PromotionController.findAll);
    }
}