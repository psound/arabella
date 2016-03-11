"use strict";

import Promise from "bluebird";
import PromotionSchema from "../model/promotion.model";

let PromotionDAO = {};

PromotionDAO.getAll = () => {
    console.log("Entering PromotionDAO::getAll");
    var _promise = (resolve, reject) => {
        console.log("Entering PromotionDAO::promise");
        PromotionSchema
          .findAll()
          .then((promotions, err) => {
              console.log("Entering PromotionDAO::PromotionSchema::findAll::then");
              err ? reject(err) : resolve(promotions);
          });
    }
    return new Promise(_promise);
}

export default PromotionDAO;
