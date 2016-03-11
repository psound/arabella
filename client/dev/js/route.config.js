/* globals angular */
;(function(angular) {
    //"use strict";

    angular
        .module('distractology')
        .config(routeConfig);

    function routeConfig($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
// the $rootscope.currentState variable is the fastest hack
// I could think of to get the current route name on the body element
// the body is outside of any current view so to get the $state.current.name
// at that level I think we'd have to rewrite the views.
// not doing that at this late date.

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.home.html',
                    },
                    '': {
                        templateUrl: '../views/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "home";
                }
            })


            // TOUR STATES AND NESTED VIEWS ========================================
            .state('tour', {
                url: '/the-tour',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/tour/tour.html',
                        controller: 'TourController',
                        controllerAs: 'tour',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "tour";
                }
            })

            // CHALLENGE STATES AND NESTED VIEWS ========================================
            .state('challenge', {
                url: '/the-challenge',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/challenge.html',
                        controller: 'ChallengeController',
                        controllerAs: 'challenge'
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "challenge";
                }
            })

            // ELEARNING STATES AND NESTED VIEWS ========================================
            .state('elearning', {
                url: '/elearning',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/elearning/elearning.html',
                        controller: 'ElearningController',
                        controllerAs: 'elearning',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "elearning";
                }
            })

            // nested states
            // url will be nested (/elearning/module-one)
            .state('elearning.module-one', {
                url: '/module-one',
                params: {'hasCode': '', thisCode: '', email: ''},
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/elearning/module.one.html',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "elearning";
                }
            })

            // url will be nested (/elearning/module-two)
            .state('elearning.module-two', {
                url: '/module-two',
                params: {'hasCode': '', thisCode: '', email: ''},
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/elearning/module.two.html',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "elearning";
                }
            })

            // url will be nested (/elearning/module-three)
            .state('elearning.module-three', {
                url: '/module-three',
                params: {'hasCode': '', thisCode: '', email: ''},
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/elearning/module.three.html',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "elearning";
                }
            })

            // url will be nested (/elearning/module-four)
            .state('elearning.module-four', {
                url: '/module-four',
                params: {'hasCode': '', thisCode: '', email: ''},
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/elearning/module.four.html',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "elearning";
                }
            })

            // url will be nested (/elearning/module-five)
            .state('elearning.module-five', {
                url: '/module-five',
                params: {'hasCode': '', thisCode: '', email: ''},
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/elearning/module.five.html',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "elearning";
                }
            })

            // url will be nested (/elearning/module-summary)
            .state('elearning.module-summary', {
                url: '/module-summary',
                params: {'hasCode': '', thisCode: '', email: ''},
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/elearning/module.summary.html',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "elarning";
                }
            })

            // FACTS STATES AND NESTED VIEWS ========================================
            .state('facts', {
                url: '/facts-and-stats',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/facts.html',
                        controller: 'FactsController',
                        controllerAs: 'facts',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "facts";
                }
            })

            // LAWS STATES AND NESTED VIEWS ========================================
            .state('laws', {
                url: '/laws',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/laws.html',
                        controller: 'LawsController',
                        controllerAs: 'laws',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "laws";
                }
            })

            // PRESS STATES AND NESTED VIEWS ========================================
            .state('press', {
                url: '/press',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/press/press.html',
                        controller: 'PressController',
                        controllerAs: 'press',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "press";
                }
            })

            // PRESS.ASSETS STATES AND NESTED VIEWS ========================================
            .state('assets', {
                url: '/photos-videos',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/press/press.assets.html',
                        controller: 'PressAssetsController',
                        controllerAs: 'assets',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "press";
                }
            })

            // PRESS.MEDIA STATES AND NESTED VIEWS ========================================
            .state('media', {
                url: '/media-coverage',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/press/press.media.html',
                        controller: 'PressMediaController',
                        controllerAs: 'media',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "press";
                }
            })

            // FAQ STATES AND NESTED VIEWS ========================================
            .state('faq', {
                url: '/faq',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/faq.html',
                        controller: 'FaqController',
                        controllerAs: 'faq',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "faq";
                }
            })

            // CONTACT STATES AND NESTED VIEWS ========================================
            .state('contact', {
                url: '/contact',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/contact/contact.html',
                        controller: 'ContactController',
                        controllerAs: 'contact',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "contact";
                }
            })

            // CONTACT.CONFIRMATION STATES AND NESTED VIEWS ========================================
            .state('confirmation', {
                url: '/contact-confirmation',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/contact/contact.confirmation.html',
                        controller: 'ContactConfirmationController',
                        controllerAs: 'confirmation',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "contact";
                }
            })

            // EDUCATORS STATES AND NESTED VIEWS ========================================
            .state('educators', {
                url: '/educators',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/educators/educators.html',
                        controller: 'EducatorsController',
                        controllerAs: 'educators',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "educators";
                }
            })

            // EDUCATORS.LANDING STATES AND NESTED VIEWS ========================================
            .state('landing', {
                url: '/educators-landing',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html',
                    },
                    '': {
                        templateUrl: '../views/educators/educators.landing.html',
                        controller: 'EducatorsLandingController',
                        controllerAs: 'landing',
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "educators";
                }
            })

            // SURVEY STATES AND NESTED VIEWS ========================================
            .state('survey-a', {
                url: '/survey-a',
                views: {
                    '': {
                        templateUrl: '../views/survey/survey.html',
                        controller: 'SurveyController',
                        controllerAs: 'survey',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "survey";
                }
            })

            .state('survey-b', {
                url: '/survey-b',
                views: {
                    '': {
                        templateUrl: '../views/survey/survey-b.html',
                        controller: 'SurveyController',
                        controllerAs: 'survey',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "survey";
                }
            })


            // PRIVACY & TERMS STATES AND NESTED VIEWS ========================================
            .state('privacy', {
                url: '/privacy',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html'
                    },
                    '': {
                        templateUrl: '../views/privacy.html'
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html'
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "privacy";
                }
            })

            .state('terms', {
                url: '/terms',
                views: {
                    'header@': {
                        templateUrl: '../views/common/header.inner.html'
                    },
                    '': {
                        templateUrl: '../views/terms.html'
                    },
                    'footer@': {
                        templateUrl: '../views/common/footer.html'
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "terms";
                }
            })

            .state('admin', {
                url: '/admin',
                //abstract: true,
                /*data: {
                    requireLogin: true
                },*/
                views: {
                    '': {
                        templateUrl: '../views/admin/home.html',
                        controller: 'AdminHomeController',
                        controllerAs: 'admin'
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "admin";
                }
            })

            .state('admin-data', {
                url: '/admin/data',
                params: { isAuth: '' },
                views: {
                    'header@': {
                        templateUrl: '../views/admin/admin.header.html'
                    },
                    '': {
                        templateUrl: '../views/admin/admin.data.html',
                        controller: 'AdminDataController',
                        controllerAs: 'admin'
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "admin-data";
                }
            })

            .state('admin-tour', {
                url: '/admin/the-tour',
                params: { isAuth: '' },
                views: {
                    'header@': {
                        templateUrl: '../views/admin/admin.header.html'
                    },
                    '': {
                        templateUrl: '../views/tour/tour.admin.html',
                        controller: 'AdmintourController',
                        controllerAs: 'touradmin',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "admin-tour";
                }
            })

            .state('admin-press', {
                url: '/admin/press',
                params: { isAuth: '' },
                views: {
                    'header@': {
                        templateUrl: '../views/admin/admin.header.html'
                    },
                    '': {
                        templateUrl: '../views/press/press.admin.html',
                        controller: 'PressAdminController',
                        controllerAs: 'pressAdmin',
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "admin-press";
                }
            })

            .state('admin-survey', {
                url: '/admin/survey',
                params: { isAuth: '' },
                views: {
                    'header@': {
                        templateUrl: '../views/admin/admin.header.html'
                    },
                    '': {
                        templateUrl: '../views/survey/admin.html',
                        controller: 'AdminController',
                        controllerAs: 'admin'
                    }
                },
                onEnter : function($rootScope){
                    $rootScope.currentState = "admin-survey";
                }
            });

    }

}(window.angular));
