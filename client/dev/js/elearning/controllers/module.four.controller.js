;(function(angular) {
    "use strict";

    angular
        .module('distractology')
        .controller('ModuleFourController', ['$log', '$stateParams', '$state', '$http', '$sce', function($log, $stateParams, $state, $http, $sce) {

            var self = this;
            self.steps = ['one', 'two'];
            self.step = 0;

            self.hasCode = $stateParams.hasCode;
            self.thisCode = $stateParams.thisCode;
            self.email = $stateParams.email;

            self.showContinueButton = false;

            self.finished = function() {
                self.showContinueButton = true;
            };

            self.config = {
				sources: [
                    {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_4.mp4"), type: "video/mp4"},
                    {src: $sce.trustAsResourceUrl("http://arbella.media.jackmorton.net/video/2016_Arbella_Module_4.ogv"), type: "video/ogg"}
				],
                    responsive: true,
				theme: {
                    url:"http://www.videogular.com/styles/themes/default/latest/videogular.css",
                                playIcon: "&#xe000;",
                                pauseIcon: "&#xe001;",
                                volumeLevel3Icon: "&#xe002;",
                                volumeLevel2Icon: "&#xe003;",
                                volumeLevel1Icon: "&#xe004;",
                                volumeLevel0Icon: "&#xe005;",
                                muteIcon: "&#xe006;",
                                enterFullScreenIcon: "&#xe007;",
                                exitFullScreenIcon: "&#xe008;"
                },
				plugins: {
					poster: "http://arbella.media.jackmorton.net/video/posters/2016_Arbella_Module_4_frame1.png",
                    controls: {
                        autoHide: true,
                        autoHideTime: 2000
                    }
				}
			};

            self.isFirstStep = function () {
                return self.step === 0;
            };

            self.isLastStep = function () {
                return self.step === (self.steps.length - 1);
            };

            self.isCurrentStep = function (step) {
                return self.step === step;
            };

            self.setCurrentStep = function (step) {
                self.step = step;
            };

            self.getCurrentStep = function () {
                return self.steps[self.step];
            };

            self.getNextLabel = function () {
                return (self.isLastStep()) ? 'Continue' : 'Continue';
            };

            self.handlePrevious = function () {
                self.step -= (self.isFirstStep()) ? 0 : 1;
            };

            self.handleNext = function () {
                if (self.isLastStep()) {
                    var moduleDetails = {studentCode: self.thisCode, module: 4 };
                    if(self.hasCode == true && self.thisCode != 'agent') {
                    $http
                        .post('/api/workflows/update', moduleDetails)

                        $log.info('WorkFlowController-Update :: Starting');
                    }
                    $state.go("elearning.module-five", {hasCode: self.hasCode, thisCode: self.thisCode, email: self.email});
                } else {
                    self.step += 1;
                    self.showContinueButton = false;
                }
            };


        }])

       .directive('draggable', [function () {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    // TODO put link related things here.
                    //console.log("We've made it here"  + element);


                    var questionGroupIndex = 1; //for testing change this index to go directly to question group
                    var questionIndex = 1;//this gets reset every time the questionGroupIndex is changed
                    var activeModel;
                    var playInstructionAudio = true;
                    var dragDropManager = new uiDragDropManager();
					var lastPlayedAudio;

					//Drop Targets
					var ddItem1Targets = {
					  dropTargets : [ {x:720, y:67}, {x:360, y:158}, {x:510, y:47}],
					  posOrigin : [{y:37, x:95}],
					  messagePos:[{x:10,y:125}],
					  instructions:[{copy:"Drag the sign to the place on the screen where the hazard is hidden", audio:"set1_instruction"},
					  {copy:"Drag the sign to the place on the screen where you should be slowing down"},
					  {copy:"Drag the sign to the place on the screen where hazard will first become visible to you"}],
					  drgIncorrect: [
									{incorrect:[{copy:"<p style='margin-top:-4.33%;'>You should have placed the button here. Something could be in the road, stop sign may be obscured by vegetation</p>", audio:"set1_q0_wrong"},
										{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set1_q0_wrong"},
										{copy:"You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles", audio:"set1_q0_wrong"}]},
									{
									    incorrect: [{ copy: "<p style='margin-top:4.33%;'>You should have placed the button here. You should slow down as you enter any blind curve.</p>", audio: "set1_q1_wrong" },
										{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set1_q1_wrong"},
										{ copy: "<p style='margin-top:-4.33%;'>You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles</p>", audio: "set1_q1_wrong" }]
									},
									{
									    incorrect: [{ copy: "<p style='margin-top:-4.33%;'>You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles</p>", audio: "set1_q2_wrong" },
										{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set1_q2_wrong"},
										{copy:"You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles", audio:"set1_q2_wrong"}]}
									],
					  drgCorrect: [
								  {correct:[{copy:"<span>Great Job!</span>", audio:"set1_q0_correct"}]},
								  {correct:[{copy:"<span>Great Job!</span>", audio:"set1_q1_correct"}]},
								  {correct:[{copy:"<span>Great Job!</span>", audio:"set1_q2_correct"}]}
								  ],
					  audioCorrect: [],
					  audioIncorrect: []
					}

					var ddItem2Targets = {
					  dropTargets : [{x:645, y:143},  {x:775, y:234}, {x:775, y:141}],
					  posOrigin : [{y:262, x:255}],
					  messagePos:[{x:170,y:350}],
					  instructions:[{copy:"Drag the sign to the place on the screen where the hazard is hidden.", audio:"set2_instruction"},
					  {copy:"Drag the sign to the place on the screen where you should be slowing down.", audio:"set2_instruction"},
					  {copy:"Drag the sign to the place on the screen where the hazard will first become visible to you.", audio: "set2_instruction"}],
					  drgIncorrect: [
									{incorrect:[{copy:"<p style='margin-top:-15.84%;width:115%'>You should have placed the button here.  When there are cars in the left lane lined up in front of the crosswalk, you can't see whether someone is walking or even cycling across the road.</a>", audio:"set2_q0_wrong"},
									{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set2_q0_wrong"},
									{copy:"You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles", audio:"set2_q0_wrong"}]},
									{incorrect:[{copy:"<p style='margin-top:-35%;width:115%' >Nope. You should have placed the button here. The crosswalk sign and the painted lines on the road tell you to approach cautiously. The line of cars obscuring your view makes it even more important to go slow.</p>", audio: "set2_q1_wrong"},
									{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set2_q1_wrong"},
									{copy:"You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles", audio:"set2_q1_wrong"}]},
									{incorrect:[{copy:"<p style='margin-top:-35%;width:115%'>Nah uh. You should have placed the button here. As you approach the crosswalk, anyone coming from the street will appear here first. Don't cross those lines until you're sure it's clear.</p>", audio:"set2_q2_wrong"},
									{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set2_q2_wrong"},
									{copy:"You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles", audio:"set2_q2_wrong"}]}
									],
					  drgCorrect: [
								  {correct:[{copy:"<p style='margin-top:-25%;'><span>Great Job!</span></p>", audio:"set2_q0_correct"}]},
								  {correct:[{copy:"<p style='margin-top:-25%;'><span>Great Job!</span></p>", audio:"set2_q1_correct"}]},
								  {correct:[{copy:"<p style='margin-top:-25%;'><span>Great Job!</span></p>", audio:"set2_q2_correct"}]}
								  ],
					  audioCorrect: [],
					  audioIncorrect: []
					}

					var ddItem3Targets = {

					  dropTargets : [{x:472, y:7}, {x:593, y:225}, {x:474, y:144}],
					  posOrigin : [{y:17, x:68}],
					  messagePos:[{x:160,y:25}],
					  instructions:[{copy:"Drag to the place on the screen where the hazard is hidden", audio:"set3_instruction"},
					  {copy:"Drag to the place on the screen where you should be slowing down", audio:"set3_instruction"},
					  {copy:"Drag to the place on the screen where hazard will first become visible to you", audio: "set3_instruction"}],
					  drgIncorrect: [
									{incorrect:[{copy:"<p style='margin-top:2.60%;width:90.54%;margin-left:-8.93%;'>You should have placed the button here. When there are cars in the oncoming left lane, you can't see whether there is traffic approaching the intersection in the far lane.</p>", audio:"set3_q0_wrong"},
										{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set3_q0_wrong"},
										{copy:"You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles", audio:"set3_q0_wrong"}]},
									{incorrect:[{copy:"<p style='margin-top:12px;width:300px;margin-left:-85px;'>You should have placed the button here. In a situation like this, you're actually going to slow down and stop before making your left turn. Approach the turn slowly and proceed slowly, finishing your turn only after the coast is clear.</p>", audio: "set3_q1_wrong"},
										{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set3_q1_wrong"},
										{copy:"You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles", audio:"set3_q1_wrong"}]},
									{incorrect:[{copy:"<p style='margin-top:12px;width:300px;margin-left:-85px;'>You should have placed the button here. The truck is obscuring your view into the left lane, so you have to keep looking around it as best you can to see if there is any oncoming traffic.</p>", audio:"set3_q2_wrong"},
										{copy:"You should have placed the button here. You should slow down as you enter any blind curve.", audio: "set3_q2_wrong"},
										{copy:"You should have placed the button here. You should continuously monitor the side of the road for hidden hazards or obstacles", audio:"set3_q2_wrong"}]}
									],
					  drgCorrect: [
								  { correct: [{ copy: "<p style='margin-left:-25%;'><span>Great Job!</span></p>", audio: "set3_q0_correct" }] },
								  { correct: [{ copy: "<p style='margin-left:-25%;'><span>Great Job!</span></p>", audio: "set3_q1_correct" }] },
								  { correct: [{ copy: "<p style='margin-left:-25%;'><span>Great Job!</span></p>", audio: "set3_q2_correct" }] }
								  ],
					  audioCorrect: [],
					  audioIncorrect: []
					}

                    /*------------- LOADING INTERACTIVE DRAG AND DROP -----------------------------------------*/

					function initDDui() {
					    element.draggable({
					        revert: function (socketObj) {
					            //if false then no socket object drop occurred.
					            if (socketObj === false) {
					                //revert the peg by returning true
					                //typically this would return true but because we want to display correct
					                //even if they got it wrong we will overwrite defaul behavior here
					                dragDropManager.handleReverts(this, socketObj);
					                return false;
					            }
					            else {
					                //socket object was returned,
					                //we can perform additional checks here if we like
					                var ddtargetRef = socketObj.attr('class').split(' ')[0];
					                dragDropManager.handleReverts(this, ddtargetRef);
					                //return false so that the peg does not revert
					                return false;
					            }
					        }
					    });

					    $('.ddtarget1').droppable({
					        accept: "#draggables",
					        drop: function (event, ui) {
					            var topOrigin = activeModel.dropTargets[questionIndex - 1].y;
					            var leftOrigin = activeModel.dropTargets[questionIndex - 1].x;
					            var dragged = $(ui.draggable).attr('id');
					            var _x = scaleXCoordinate(leftOrigin);
					            var _y = scaleYCoordinate(topOrigin);
					            $('#' + dragged).css({ left: _x + '%' });
					            $('#' + dragged).css({ top: _y + '%' });

					            var coordObj = DDtargetOffset(leftOrigin, topOrigin);
								
								//play audio for iphones
								
								//audioPlayBack(strAudioID)
								
								$('.disableClicks').show();
					        },
					        over: function (event, ui) {
					            $(this).find('div').addClass("active_hazzard");
					        },
					        out: function (event, ui) {
					            $(this).find('div').removeClass("active_hazzard");
					            var dragged = $(ui.draggable).attr('id');
					            var _x = scaleXCoordinate(activeModel.dropTargets[questionIndex - 1].x);
					            var _y = scaleYCoordinate(activeModel.dropTargets[questionIndex - 1].y);

					            $('#' + dragged).css({ left: _x + '%' });
					            $('#' + dragged).css({ top: _y + '%' });
					        }
					    });

					    $('.ddtarget2').droppable({
					        accept: "#draggables",
					        drop: function (event, ui) {
					            var topOrigin = activeModel.dropTargets[questionIndex - 1].y;
					            var leftOrigin = activeModel.dropTargets[questionIndex - 1].x;

					            var _x = scaleXCoordinate(leftOrigin);
					            var _y = scaleYCoordinate(topOrigin);

					            var dragged = $(ui.draggable).attr('id');

					            $('#' + dragged).css({ left: _x + '%' });
					            $('#' + dragged).css({ top: _y + '%' });
								
								$('.disableClicks').show();
					        },
					        over: function (event, ui) {
					            $(this).find('div').addClass("active_hazzard");
					        },
					        out: function (event, ui) {
					            $(this).find('div').removeClass("active_hazzard");
					            var dragged = $(ui.draggable).attr('id');

					            var _x = scaleXCoordinate(activeModel.dropTargets[questionIndex - 1].x);
					            var _y = scaleYCoordinate(activeModel.dropTargets[questionIndex - 1].y);

					            $('#' + dragged).css({ left: _x + '%' });
					            $('#' + dragged).css({ top: _y + '%' });
					        }
					    });

					    $('.ddtarget3').droppable({
					        accept: "#draggables",
					        drop: function (event, ui) {
					            var topOrigin = activeModel.dropTargets[questionIndex - 1].y;
					            var leftOrigin = activeModel.dropTargets[questionIndex - 1].x;

					            var _x = scaleXCoordinate(leftOrigin);
					            var _y = scaleYCoordinate(topOrigin);

					            var dragged = $(ui.draggable).attr('id');

					            $('#' + dragged).css({ left: _x + '%' });
					            $('#' + dragged).css({ top: _y + '%' });
								
								$('.disableClicks').show();

					        },
					        over: function (event, ui) {
					            $(this).find('div').addClass("active_hazzard");
					        },
					        out: function (event, ui) {
					            $(this).find('div').removeClass("active_hazzard");
					            var dragged = $(ui.draggable).attr('id');
					            var _x = scaleXCoordinate(activeModel.dropTargets[questionIndex - 1].x);
					            var _y = scaleYCoordinate(activeModel.dropTargets[questionIndex - 1].y);

					            $('#' + dragged).css({ left: _x + '%' });
					            $('#' + dragged).css({ top: _y + '%' });
					        }
					    });

					    $('.next_btn').click(function () { dragDropManager.getNextQuestion() });
					    $('.next_btn').hide();

					    dragDropManager.setupQuestions();
					}



                    //update Messages
					function updateMessage(ddInteractiveIndex, qIndex, isAnswerCorrect, wrongAnswerIndex, instrctIndex) {

					    //var instructionCopy  = activeModel.instructions[ddInteractiveIndex-1].copy;
					    var instructionCopy = (instrctIndex !== undefined && instrctIndex !== null) ? activeModel.instructions[instrctIndex - 1].copy : "";
					    var audio = activeModel.instructions[ddInteractiveIndex - 1].audio;
						
						console.log("instrctIndex: "+ instrctIndex + " instructionCopy : "+ instructionCopy + " audio: "+ audio + " qIndex: "+ qIndex + " playInstructionAudio: "+ playInstructionAudio)
					    $('.messages').html(instructionCopy);

					    if (qIndex > -1) {
					        var correctAnswer = activeModel.drgCorrect[qIndex].correct[0].copy;

					        if (wrongAnswerIndex != "undefined" && wrongAnswerIndex != null) {
					            var incorrectAnswer = activeModel.drgIncorrect[qIndex].incorrect[0].copy;
					            audio = activeModel.drgIncorrect[qIndex].incorrect[wrongAnswerIndex].audio;
					        }

					        if (isAnswerCorrect === true) {
					            $('.messages').html(correctAnswer);
					            console.log("AnswerCorrect: " + correctAnswer)
					            audio = activeModel.drgCorrect[qIndex].correct[0].audio;

					        } else {
					            $('.messages').html(incorrectAnswer);
					            console.log("wrongAnswerIndex: " + wrongAnswerIndex + ", qIndex: " + qIndex)
					            console.log(activeModel.drgIncorrect[qIndex].incorrect[wrongAnswerIndex].audio);
					        }

					        //Play our Audio
					        if (audio != null && audio != "undefined") audioPlayBack(audio);						
							
					        //consider adding timer her and/or wait for audio to finish playing before showing next button
					        

					    } else {

					        if (playInstructionAudio === true) {
					            //this will always be an instruction audio
					            if (audio != null && audio != "undefined") audioPlayBack(audio);
					        }

					        playInstructionAudio = false;
					    }
					}

                    //start the assumption we're at questionGroupIndex 1
					function uiDragDropManager() {

					    this.getNextQuestion = function () {
					        this.updateDroppables(questionIndex);
					        questionIndex++;
					        if (questionIndex > 3) {
					            questionGroupIndex++;
					            //console.log("questionGroupIndex: " + questionGroupIndex)
					            if (questionGroupIndex >= 4) {
					                $('.a-right').show();
					                this.disableDrags();
                                    var scope = angular.element($("#moduleFour")).scope();
                                        scope.$apply(function(){
                                        console.log('entering scope.apply()');
                                        scope.modal.showContinueButton = true;
                                    });

					                return;
					            }

					            questionIndex = 1;
					            activeModel = null;
					            this.buildInteractiveQuestions();
					        }
					        this.hideAllDraggables();
					        this.showCurrentDraggable(questionIndex);
					    };

					    this.setupQuestions = function () {
					        // if(questionGroupIndex == 1){
					        this.hideAllDraggables();
					        this.showCurrentDraggable(questionIndex);
					        //}
					    };

					    this.updateDroppables = function (index) {
					        $('.ddtarget' + index).droppable('disable');
					    }

					    this.hideAllQuestionGroups = function () { };

					    this.hideAllDraggables = function () {
					        $('#draggable1').hide();
					        $('#draggable2').hide();
					        $('#draggable3').hide();
					        this.clearStage();
					    };

					    this.showCurrentDraggable = function (index) {
					        $('#draggable' + index).show();
					        var _x = scaleXCoordinate(activeModel.posOrigin[0].x);
					        var _y = scaleYCoordinate(activeModel.posOrigin[0].y);

					        $('#draggables').css({ top: _y + '%' });
					        $('#draggables').css({ left: _x + '%' });

					        DDtargetOffset();
					        updateMessage(questionGroupIndex, -1, false, undefined, questionIndex);
					    };

					    this.clearStage = function () {
					        $('.next_btn').hide();

					        //re-enable all dd targets so can display highlights
					        $('.ddtarget1').droppable('enable');
					        $('.ddtarget2').droppable('enable');
					        $('.ddtarget3').droppable('enable');

					        $('.messages').html('');
					    };

					    this.disableDrags = function () {
					        $('.next_btn').hide();
					        $('.ddtarget1').droppable('disable');
					        $('.ddtarget2').droppable('disable');
					        $('.ddtarget3').droppable('disable');
							$( '#draggables' ).draggable({
							  disabled: true
							});
					    }


					    this.handleReverts = function (dragObj, dropTargetObj) {
					        var dragged = $(dragObj).attr('id');
					        var draggedItem = $(dragObj).children().eq(questionIndex - 1);

					        if (dropTargetObj === false) {
					            var _x = scaleXCoordinate(activeModel.dropTargets[questionIndex - 1].x);
					            var _y = scaleYCoordinate(activeModel.dropTargets[questionIndex - 1].y);

					            $('#' + dragged).css({ left: _x + '%' });
					            $('#' + dragged).css({ top: _y + '%' });

					            updateMessage(questionGroupIndex, 0, false, 0);

					        } else {
					            //console.log("else handleReverts:: dropTargetObj "+ dropTargetObj );
					            //evaluate drop target for correct answer
					            var correct = Number(draggedItem.attr('data-correct'));

					            //original buggy code
					            //var correctRef = Number($('.' + dropTargetObj).attr('data-ref'));
					            //Fixed
					            var _ddtarget = $('#ddItem' + questionGroupIndex).find('.' + dropTargetObj);
					            var correctRef = Number(_ddtarget.attr('data-ref'));//Number($('.' + dropTargetObj).attr('data-ref'));

					            if (correct == correctRef) {
					                updateMessage(questionGroupIndex, (questionIndex - 1), true);
					            } else {
					                var getNumIndex = Number(dropTargetObj.toString().substring(dropTargetObj.toString().length - 1));
					                //console.log("questionGroupIndex: " + questionGroupIndex + "  questionIndex: "+ (questionIndex-1)+ "    " + getNumIndex) ;
					                updateMessage(questionGroupIndex, (questionIndex - 1), false, (getNumIndex - 1));
					            }

					            //now hide the drop target
					            //TBD

					            $('.' + dropTargetObj).find('div').removeClass("active_hazzard");
					        }
					    };


					    this.buildInteractiveQuestions = function () {
					        //first we'll hide everything to ensure none displays by mistake
					        for (var i = 1; i <= 3; i++) {
					            var strItem = "ddItem" + i;
					            $("#" + strItem).hide();
					        }
					        //data to use
					        activeModel = eval('ddItem' + questionGroupIndex + 'Targets');

					        //now display the one we care about
					        $('#' + 'ddItem' + questionGroupIndex).show();
							playInstructionAudio = true;

					        var _x = scaleXCoordinate(activeModel.messagePos[0].x);
					        var _y = scaleYCoordinate(activeModel.messagePos[0].y);

					        $('#ddItem1-message').css({ top: _y + '%' });
					        $('#ddItem1-message').css({ left: _x + '%' });
					        if (questionGroupIndex <= 1) $(initDDui());
					    }
					}
                    //End of uiDragDropManager

                    //Audio PLayback
					function audioPlayBack(strAudioID) {
						if(lastPlayedAudio != null){
							lastPlayedAudio.pause();
							lastPlayedAudio.currentTime = 0;
						}
					
						var isInstruction = (strAudioID.substr(4).indexOf("instruction") >-1)? true : false;
						//console.log("audioID: "+ strAudioID + " isInstruction: " + isInstruction);
					    var mediaElement = document.getElementById(strAudioID);
						lastPlayedAudio = mediaElement;
					    //mediaElement.play();
					    $('.disableClicks').show();
						
						//remove any onclick event set by iphone sniffer
						$('#iphone-Audio').unbind('click');

					    mediaElement.addEventListener("ended", onAudioEnd);
						
						if((navigator.userAgent.match(/iPhone/i))) { // || (navigator.userAgent.match(/iPod/i))
							 //Code
							if(lastPlayedAudio != null){
								lastPlayedAudio.pause();
								lastPlayedAudio.currentTime = 0;
								lastPlayedAudio = null;
							}
							 
							$('#iphone-Audio').click(function(){							 
								var mediaElement = document.getElementById(strAudioID);
								lastPlayedAudio = mediaElement;
								mediaElement.play();
								//alert("Now playing "+ strAudioID + " media Element: "+ mediaElement);								
							});
							
							$('#iphone-Audio').click();
							 
							setTimeout(function(){
								mediaElement.removeEventListener("ended", onAudioEnd);
								$('.disableClicks').hide();
								if(!isInstruction)$('.next_btn').show();
							}, 2000);
							
							
						}
						
						mediaElement.play();
						
					    function onAudioEnd(e) {
							mediaElement = null;
					        e.target.removeEventListener("ended", onAudioEnd);
					        $('.disableClicks').hide();
							if(!isInstruction)$('.next_btn').show();
					    }
					}

					function scaleYCoordinate(target) {
					    //target/context
					    var contextHeight = 461;
					    return ((target / contextHeight) * 100);
					}

					function scaleXCoordinate(target) {
					    var contextWidth = 951;
					    return ((target / contextWidth) * 100);
					}

					function DDtargetOffset(targetx, targety) {
					    //get the tage width && height before calculation
					    var stage_w = $("#skyview1")[0].getBoundingClientRect().width;
					    var stage_h = $("#skyview1")[0].getBoundingClientRect().height;

					    var defpercent_w = scaleXCoordinate(targetx);
					    var defpercent_h = scaleXCoordinate(targety);
					    var coordx = defpercent_w / stage_w;
					    var coordy = defpercent_h / stage_h;

					    //console.log("coordx W: " + (coordx * 100) + " coordy H: " + (coordy * 100) + "  duece");
					    return { x: coordx, y: coordy };
					}


					dragDropManager.buildInteractiveQuestions();

                }
            }
        }]);

}(window.angular));
