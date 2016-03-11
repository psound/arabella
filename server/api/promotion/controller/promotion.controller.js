"use strict";

import PromotionDAO from "../dao/promotion.dao";

export default class PromotionController {
  static findAll(req, res) {
    console.log("Entering PromotionController::findAll");
    PromotionDAO
      .getAll()
      .then(promotions => res.status(200).json(promotions))
      .catch(error => res.status(400).json(error));
  }
}