"use strict";

import EmailRoutes from '../api/email/routes/email.routes';
import ModuleRoutes from '../api/module/routes/module.routes';
import PromotionRoutes from '../api/promotion/routes/promotion.routes';
import StudentRoutes from '../api/student/routes/student.routes';
import ContactRoutes from '../api/contact/routes/contact.routes';
import EducatorRoutes from '../api/educator/routes/educator.routes';
import TourRoutes from '../api/tour/routes/tour.routes';
import PressRoutes from '../api/press/routes/press.routes';
import WorkflowRoutes from '../api/workflow/routes/workflow.routes';
import AdminRoutes from '../api/admin/routes/admin.routes';
import StaticDispatcher from '../commons/static/index';

export default class Routes {
  static init(app, router) {
    console.log('Entering Router::init');

    EmailRoutes.init(app, router);
    ModuleRoutes.init(router);
    PromotionRoutes.init(router);
    StudentRoutes.init(router);
    ContactRoutes.init(router);
    EducatorRoutes.init(router);
    TourRoutes.init(router);
    PressRoutes.init(router);
    AdminRoutes.init(router);
    WorkflowRoutes.init(router);

    router
      .route('*')
      .get(StaticDispatcher.sendIndex);

    app.use('/', router);
  }
}
