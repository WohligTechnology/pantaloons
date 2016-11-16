angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'ui.select', 'ngSanitize'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    ];
})

.controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('DetailsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("details"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Details"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formData = {};
    $scope.detailSubmit = function (input) {
        $scope.saveUser = $.jStorage.set("userDetail", input);
        console.log('$scope.saveUser', $scope.saveUser);
        // NavigationService.formSubmit(input,function(data){
        //   console.log(data);
        //   console.log(input);
        //
        // })
    }
    $scope.ages = [{
        name: 'Below 25'
    }, {
        name: '25 to 30 years'
    }, {
        name: '31 to 35 years'
    }, {
        name: '36 years and above'
    }];

    $scope.tenure = [{
        name: 'Less than 3 months'
    }, {
        name: '3 months to 1 year'
    }, {
        name: '1 to 3 years'
    }, {
        name: '3 to 5 years'
    }, {
        name: '5 years and above'
    }];

    $scope.gender = [{
        gen: 'Male'
    }, {
        gen: 'Female'
    }];

    $scope.storename = [{
        name: 'PT-Kolkata-South City Mall'
    }, {
        name: 'PT-Kolkata-Camac Street'
    }];

    $scope.zone = [{
        name: 'North'
    }, {
        name: 'South'
    }, {
        name: 'East'
    }, {
        name: 'West'
    }];

})


.controller('StepsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    $scope.template = TemplateService.changecontent("steps"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Steps"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.questn = [];
    $scope.myans = '';
    $scope.showDot = function (id) {


        if (id == 1) {
            console.log("inim1");
            $scope.myans = "Strongly Agree";
            $scope.displayDot1 = true;
            $scope.displayDot2 = false;
            $scope.displayDot3 = false;
            $scope.displayDot4 = false;
            $scope.displayDot5 = false;


        } else if (id == 2) {

            $scope.myans = "Agree";
            $scope.displayDot1 = false;
            $scope.displayDot2 = true;
            $scope.displayDot3 = false;
            $scope.displayDot4 = false;
            $scope.displayDot5 = false;

        } else if (id == 3) {
            $scope.myans = "Not Sure";
            $scope.displayDot1 = false;
            $scope.displayDot2 = false;
            $scope.displayDot3 = true;
            $scope.displayDot4 = false;
            $scope.displayDot5 = false;

        } else if (id == 4) {
            $scope.myans = "Disagree";
            $scope.displayDot1 = false;
            $scope.displayDot2 = false;
            $scope.displayDot3 = false;
            $scope.displayDot4 = true;
            $scope.displayDot5 = false;

        } else if (id == 5) {
            $scope.myans = "Strongly Disagree";
            $scope.displayDot1 = false;
            $scope.displayDot2 = false;
            $scope.displayDot3 = false;
            $scope.displayDot4 = false;
            $scope.displayDot5 = true;

        }
    };


    $scope.questions = [{
            question: "1. I am aware of my goals/KRAs and understand them well."
        }, {
            question: "2. My manager provides feedback on my performance regularly."
        }, {
            question: "3. I receive training to understand and do my job well."
        }, {
            question: "4. My manager encourages me to apply the learning in my day to day work."
        }, {
            question: "5. I have good understanding of the incentive scheme. "
        }, {
            question: "6. My manager helps and guides me to improve in my job."
        }, {
            question: "7. In my store, customer service is given the maximum importance."
        }, {
            question: "8. My manager encourages teamwork and expects us to help across departments/functions."
        }, {
            question: "9. I am aware of I Pearl Program selection criteria."
        }, {
            question: "10. I am recognized for good work by my manager."
        }, {
            question: "11. I take my weekly offs on a regular basis."
        }, {
            question: "12. My store manager is open and clear while communicating with us."
        }, {
            question: "13. My store manager connects with us to understand our concerns/challenges."
        }, {
            question: "14. The washroom facilities are clean at the store."
        }, {
            question: "15. I have access to safe drinking water at the store."
        }, {
            question: "16. I get time to rest during my breaks while at work."
        }, {
            question: "17. I am aware of the process to raise a concern related to Value Violation / Harassment."
        }, {
            question: "18. The store environment is safe for me to work in."
        }, {
            question: "19. I am satisfied/happy working with Pantaloons."
        }, {
            question: "20. I will refer Pantaloons as a good place to work to my friends and family members."
        }

    ];
    $scope.myans = {};
    $scope.boy = true;
    $scope.q = 0;
    $scope.nextQtn = function (w) {
        console.log('$scope.q', $scope.q);
        if (w < $scope.questions.length - 1) {
            w++;
            $scope.q = w;

            if (w % 2 == 0) {
                $scope.boy = true;
                $scope.girl = false;
            } else if (w % 2 != 0) {
                $scope.boy = false;
                $scope.girl = true;
            }
        } else {
            $scope.q = 20;
            $state.go("thankyou");
        }

    }
    $scope.userAnswers = [];
    $scope.finalData = {};
    $scope.quesAns = function (ques) {
        $scope.myques = ques;
        console.log('$scope.myques', $scope.myques);
        // if ($scope.displayDot1) {
        //     $scope.myans = "Strongly Agree";
        // }
        // $scope.userAnswers = [];
        // if(_.isEmpty($scope.myques)){
        //   console.log('yes m empty');
        // }
        $scope.userAnswers.push({
            questionString: $scope.myques,
            answerString: $scope.myans
        });
        console.log('$scope.userAnswers', $scope.userAnswers);

        $scope.saveUserDetail = $.jStorage.get("userDetail");
        // console.log('$scope.saveUserDetail', $scope.saveUserDetail);
        $scope.saveUser = $.jStorage.set("userDetailQues", $scope.userAnswers);
        var other = {
            'userAnswers': $scope.saveUser
        };
        // console.log('$scope.saveUser', $scope.saveUser);
        // $scope.finalData =$scope.saveUserDetail + $scope.saveUser;
        $scope.finalData = _.merge($scope.saveUserDetail, other);
        // console.log('$scope.finalData',$scope.finalData);
        if ($scope.q > 18) {
            NavigationService.formSubmit($scope.finalData, function (data) {
                // console.log(data);
                // console.log('$scope.finalData',$scope.finalData);

            })
        }
    }

})

.controller('ThankYouCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("thankyou"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Thank You"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();



})



.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;