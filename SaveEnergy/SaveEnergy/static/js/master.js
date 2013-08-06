var userArray = [ false, false, false, false ];
var userNumberArray = [ 1, 2, 3, 4 ];
window["onePrivacy"] = 'low';
window["twoPrivacy"] = 'low';
window["threePrivacy"] = 'low';
window["fourPrivacy"] = 'low';

if(sessionStorage.noOfUsers == null){
	 sessionStorage.noOfUsers = 0;
	 // alert(sessionStorage.noOfUsers);
}
var pusher = new Pusher('35bf6495b4677801c17e');
var channel = pusher.subscribe('private-SaveE');
var channel1 = pusher.subscribe('private-SaveE1');
var channel2 = pusher.subscribe('private-SaveE2');
var channel3 = pusher.subscribe('private-SaveE3');
var channel4 = pusher.subscribe('private-SaveE4');

Pusher.channel_auth_endpoint = '/auth/';
Pusher.channel_auth_transport = 'ajax';

var timeoutId1 = null;
var timeoutId2 = null;
var timeoutId3 = null;
var timeoutId4 = null;

//this function make sure that all the charts are rendered again if any change in the user interface happened
// var iuserd = $('#'+"two").find("div.iuserdProfile").attr('id');
		// $('#'+iuserd+'PieCanvas').empty();
function renderCharts(){
	try{
        var iuserd = $('#'+"one").find("div.iuserdProfile").attr('id');
        $('#'+iuserd+"PieCanvasProfile").empty();
		window['onePiechartProfile'] = new CanvasJS.Chart(iuserd+"PieCanvasProfile", {
                theme: "theme2",//theme1
                title:{
                    text: "Total energy usage"
                },
                data: [              
                    {
                    type: "pie",
                    dataPoints: window[iuserd+"PieChart"]
                    }
                ]
            });
        window['onePiechartProfile'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"one").find("div.iuserdViewCharts").attr('id');
        $('#'+iuserd+"PieCanvas").empty();
        window['onePiechartViewChart'] = new CanvasJS.Chart(iuserd+"PieCanvas", {
            theme: "theme2",//theme1
            title:{
                text: "Total energy usage within the dates entered"              
            },
            data: [              
                {
                type: "pie",
                dataPoints: window[iuserd+"PieChart"]
                }
            ]
        });
		window['onePiechartViewChart'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"one").find("div.iuserdViewCharts").attr('id');
        $('#'+iuserd+"BarCanvas").empty();
        window['oneBarchartViewChart'] = new CanvasJS.Chart(iuserd+"BarCanvas", {
            theme: "theme1",//theme1
            title:{
                text: "Total energy usage within the dates entered sorted monthly"             
            },
            data:window[iuserd+'barDataPoints']
        });
		window['oneBarchartViewChart'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"two").find("div.iuserdProfile").attr('id');
        $('#'+iuserd+"PieCanvasProfile").empty();
        window['twoPiechartProfile'] = new CanvasJS.Chart(iuserd+"PieCanvasProfile", {
                theme: "theme2",//theme1
                title:{
                    text: "Total energy usage"
                },
                data: [              
                    {
                    type: "pie",
                    dataPoints: window[iuserd+"PieChart"]
                    }
                ]
            });
		window['twoPiechartProfile'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"two").find("div.iuserdViewCharts").attr('id');
        $('#'+iuserd+"PieCanvas").empty();
        window['twoPiechartViewChart'] = new CanvasJS.Chart(iuserd+"PieCanvas", {
            theme: "theme2",//theme1
            title:{
                text: "Total energy usage within the dates entered"              
            },
            data: [              
                {
                type: "pie",
                dataPoints: window[iuserd+"PieChart"]
                }
            ]
        });
		window['twoPiechartViewChart'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"two").find("div.iuserdViewCharts").attr('id');
        $('#'+iuserd+"BarCanvas").empty();
        window['twoBarchartViewChart'] = new CanvasJS.Chart(iuserd+"BarCanvas", {
            theme: "theme1",//theme1
            title:{
                text: "Total energy usage within the dates entered sorted monthly"             
            },
            data:window[iuserd+'barDataPoints']
        });
		window['twoBarchartViewChart'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"three").find("div.iuserdProfile").attr('id');
        $('#'+iuserd+"PieCanvasProfile").empty();
        window['threePiechartProfile'] = new CanvasJS.Chart(iuserd+"PieCanvasProfile", {
                theme: "theme2",//theme1
                title:{
                    text: "Total energy usage"
                },
                data: [              
                    {
                    type: "pie",
                    dataPoints: window[iuserd+"PieChart"]
                    }
                ]
            });
		window['threePiechartProfile'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"three").find("div.iuserdViewCharts").attr('id');
        $('#'+iuserd+"PieCanvas").empty();
        window['threePiechartViewChart'] = new CanvasJS.Chart(iuserd+"PieCanvas", {
            theme: "theme2",//theme1
            title:{
                text: "Total energy usage within the dates entered"              
            },
            data: [              
                {
                type: "pie",
                dataPoints: window[iuserd+"PieChart"]
                }
            ]
        });
		window['threePiechartViewChart'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"three").find("div.iuserdViewCharts").attr('id');
        $('#'+iuserd+"BarCanvas").empty();
        window['threeBarchartViewChart'] = new CanvasJS.Chart(iuserd+"BarCanvas", {
            theme: "theme1",//theme1
            title:{
                text: "Total energy usage within the dates entered sorted monthly"             
            },
            data:window[iuserd+'barDataPoints']
        });
		window['threeBarchartViewChart'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"four").find("div.iuserdProfile").attr('id');
        $('#'+iuserd+"PieCanvasProfile").empty();
        window['fourPiechartProfile'] = new CanvasJS.Chart(iuserd+"PieCanvasProfile", {
                theme: "theme2",//theme1
                title:{
                    text: "Total energy usage"
                },
                data: [              
                    {
                    type: "pie",
                    dataPoints: window[iuserd+"PieChart"]
                    }
                ]
            });
		window['fourPiechartProfile'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"four").find("div.iuserdViewCharts").attr('id');
        $('#'+iuserd+"PieCanvas").empty();
        window['fourPiechartViewChart'] = new CanvasJS.Chart(iuserd+"PieCanvas", {
            theme: "theme2",//theme1
            title:{
                text: "Total energy usage within the dates entered"              
            },
            data: [              
                {
                type: "pie",
                dataPoints: window[iuserd+"PieChart"]
                }
            ]
        });
		window['fourPiechartViewChart'].render();
	}
	catch(err){}

	try{
        var iuserd = $('#'+"four").find("div.iuserdViewCharts").attr('id');
        $('#'+iuserd+"BarCanvas").empty();
        window['fourBarchartViewChart'] = new CanvasJS.Chart(iuserd+"BarCanvas", {
            theme: "theme1",//theme1
            title:{
                text: "Total energy usage within the dates entered sorted monthly"             
            },
            data:window[iuserd+'barDataPoints']
        });
		window['fourBarchartViewChart'].render();
	}
	catch(err){}
};

function otherLogout(otherLogoutUserNumber){
	sessionStorage.noOfUsers = parseInt(sessionStorage.noOfUsers) - 1;
	userArray[parseInt(window[otherLogoutUserNumber])-1] = false;
    if(window[otherLogoutUserNumber] == 1){
        window.clearTimeout(timeoutId1);
    }
    else{
        if(window[otherLogoutUserNumber] == 2){
            window.clearTimeout(timeoutId2);
        }else{
            if(window[otherLogoutUserNumber] == 3){
                window.clearTimeout(timeoutId3);
            }
            else{
                window.clearTimeout(timeoutId4);
            }
        }
    }
	window[otherLogoutUserNumber+"Privacy"] = 'low';
	$('#'+otherLogoutUserNumber).empty();
	$('#'+otherLogoutUserNumber).hide(1000);
	if(sessionStorage.noOfUsers == 0) {
        $('#welcomePage').show(1000);
    }
    else{
        if(sessionStorage.noOfUsers == 1){
    		for(var i=0 ; i<userArray.length ; i++){
    			if(userArray[i] == true){
    				$('#'+getUserNumber(userNumberArray[i]+'')).removeClass()
    				$('#'+getUserNumber(userNumberArray[i]+'')).addClass("one_one" , 1500);
    				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level2').addClass('level');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level2').removeClass('level2');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money2').addClass('money');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money2').removeClass('money2');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges2').addClass('badges');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges2').removeClass('badges2');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas2').addClass('pieCanvas');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas2').removeClass('pieCanvas2');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle2').addClass('NoBadgesTitle');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle2').removeClass('NoBadgesTitle2');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile2').addClass('privacyProtectedTitleProfile');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile2').removeClass('privacyProtectedTitleProfile2');
    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').show();
					}
					else{
						if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas2').addClass('ViewChartsPieCanvas');
        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas2').removeClass('ViewChartsPieCanvas2');
        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas2').addClass('ViewChartsBarCanvas');
        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas2').removeClass('ViewChartsBarCanvas2');
						}
						else{
							if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer2').addClass('preChartContainer');
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer2').removeClass('preChartContainer2');
							}
						}
					}
					break;
    			}
    		}
        }
        else{
            if(sessionStorage.noOfUsers == 2){
            	j=0;
            	for(var i=0 ; i<userArray.length ; i++){
        			if(userArray[i] == true){
        				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
		            		if(sessionStorage.noOfUsers != 1){
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level3').addClass('level'+sessionStorage.noOfUsers);
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level3').removeClass('level3');
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money3').addClass('money'+sessionStorage.noOfUsers);
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money3').removeClass('money3');
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges3').addClass('badges'+sessionStorage.noOfUsers);
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges3').removeClass('badges3');
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas3').addClass('pieCanvas'+sessionStorage.noOfUsers);
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas3').removeClass('pieCanvas3');
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle3').addClass('NoBadgesTitle'+sessionStorage.noOfUsers);
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle3').removeClass('NoBadgesTitle3');
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile3').addClass('privacyProtectedTitleProfile'+sessionStorage.noOfUsers);
    							$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile3').removeClass('privacyProtectedTitleProfile3');
            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
            				}
						}
						else{
							if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
								if(sessionStorage.noOfUsers != 1){
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas3').addClass('ViewChartsPieCanvas'+sessionStorage.noOfUsers);
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas3').removeClass('ViewChartsPieCanvas3');
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas3').addClass('ViewChartsBarCanvas'+sessionStorage.noOfUsers);
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas3').removeClass('ViewChartsBarCanvas3');
                				}
							}
							else{
								if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
									if(sessionStorage.noOfUsers != 1){
                    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer3').addClass('preChartContainer'+sessionStorage.noOfUsers);
                    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer3').removeClass('preChartContainer3');
                    				}
								}
							}
						}
        				if(j%2 == 0){
        					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass()
        					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_left_two" , 1500);
        				}
        				else {
        					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass()
        					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_right_two" , 1500);
        				}
        				j++;
        			}
        		}
            }
            else{
                if(sessionStorage.noOfUsers == 3){
                	j=0;
                    for(var i=0 ; i<userArray.length ; i++){
            			if(userArray[i] == true){
            				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
			            		if(sessionStorage.noOfUsers != 1){
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level4').addClass('level'+sessionStorage.noOfUsers);
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level4').removeClass('level4');
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money4').addClass('money'+sessionStorage.noOfUsers);
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money4').removeClass('money4');
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges4').addClass('badges'+sessionStorage.noOfUsers);
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges4').removeClass('badges4');
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas4').addClass('pieCanvas'+sessionStorage.noOfUsers);
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas4').removeClass('pieCanvas4');
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle4').addClass('NoBadgesTitle'+sessionStorage.noOfUsers);
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle4').removeClass('NoBadgesTitle4');
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile4').addClass('privacyProtectedTitleProfile'+sessionStorage.noOfUsers);
    								$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile4').removeClass('privacyProtectedTitleProfile4');
                					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
                				}
							}
							else{
								if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
									if(sessionStorage.noOfUsers != 1){
                    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas4').addClass('ViewChartsPieCanvas'+sessionStorage.noOfUsers);
                    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas4').removeClass('ViewChartsPieCanvas4');
                    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas4').addClass('ViewChartsBarCanvas'+sessionStorage.noOfUsers);
                    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas4').removeClass('ViewChartsBarCanvas4');
                    				}
								}
								else{
									if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
										if(sessionStorage.noOfUsers != 1){
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer4').addClass('preChartContainer'+sessionStorage.noOfUsers);
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer4').removeClass('preChartContainer4');
                        				}
									}
								}
							}
            				if(j==2){
            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass()
                				$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_middle_three" , 1500);
            				}
            				else{
            					if(j%2 == 0){
                					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass()
                					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_left_three" , 1500);
                				}
                				else {
                					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass()
                					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_right_three" , 1500);
                				}
            				}
            				
            				j++;
            			}
            		}
                }
                else{
                }
            }
        }
    }
	// window[ chan + window["{{userNumber}}"] ].unbind('client-goToAddDevice', goToAddDevice);
	renderCharts();
};

function startInactivityCheck1() {
    timeoutId1 = window.setTimeout(function(){
    	if($('#one').find($("div.devicesContainer")).length > 0){
    		var iuserd = $('#'+"one").find("div.iuserdProfile").attr('id');
    		window[iuserd+'logOutProfile']("");
    	}
    	else{
    		if($('#one').find($("div.chartContainer")).length > 0){
    			var iuserd = $('#'+"one").find("div.iuserdViewCharts").attr('id');
    			window[iuserd+'logOutViewCharts']("");
    		}
    		else{
    			if($('#one').find($("div.preChartContainer")).length > 0){
    				var iuserd = $('#'+"one").find("div.iuserdPreCharts").attr('id');
    				window[iuserd+'logoutPreChart']("");
    			}
    			else{
    				if($('#one').find($("div.leaderBoard")).length > 0){
    					var iuserd = $('#'+"one").find("div.iuserdLb").attr('id');
    					window[iuserd+'logOutLB']("");
    				}
    				else{
    					otherLogout("one");
    				}
    			}
    		}
    	}
        window[ chan + 1 ].trigger('client-logoutMobile',{});
    }, 2 * 60 * 1000); // called after 2 minutes
};


// called by something that detects user activity
function userActivityDetected1(){
    if(timeoutId1 !== null) {
        window.clearTimeout(timeoutId1);
    }

    startInactivityCheck1();
};

function startInactivityCheck2() {
    timeoutId2 = window.setTimeout(function(){
    	if($('#two').find($("div.devicesContainer")).length > 0){
    		var iuserd = $('#'+"two").find("div.iuserdProfile").attr('id');
    		window[iuserd+'logOutProfile']("");
    	}
    	else{
    		if($('#two').find($("div.chartContainer")).length > 0){
    			var iuserd = $('#'+"two").find("div.iuserdViewCharts").attr('id');
    			window[iuserd+'logOutViewCharts']("");
    		}
    		else{
    			if($('#two').find($("div.preChartContainer")).length > 0){
    				var iuserd = $('#'+"two").find("div.iuserdPreCharts").attr('id');
    				window[iuserd+'logoutPreChart']("");
    			}
    			else{
    				if($('#two').find($("div.leaderBoard")).length > 0){
    					var iuserd = $('#'+"two").find("div.iuserdPreCharts").attr('id');
    					window[iuserd+'logOutLB']();
    				}
    				else{
    					otherLogout("two");
    				}
    			}
    		}
    	}
        var triggered = channel2.trigger('client-logoutMobile',{});
    }, 2 * 60 * 1000); // called after 2 minutes
};

// called by something that detects user activity
function userActivityDetected2(){
    if(timeoutId2 !== null) {
        window.clearTimeout(timeoutId2);
    }

    startInactivityCheck2();
};

function startInactivityCheck3() {
    timeoutId3 = window.setTimeout(function(){
        if($('#three').find($("div.devicesContainer")).length > 0){
    		var iuserd = $('#'+"three").find("div.iuserdProfile").attr('id');
    		window[iuserd+'logOutProfile']("");
    	}
    	else{
    		if($('#three').find($("div.chartContainer")).length > 0){
    			var iuserd = $('#'+"three").find("div.iuserdViewCharts").attr('id');
    			window[iuserd+'logOutViewCharts']("");
    		}
    		else{
    			if($('#three').find($("div.preChartContainer")).length > 0){
    				var iuserd = $('#'+"three").find("div.iuserdPreCharts").attr('id');
    				window[iuserd+'logoutPreChart']("");
    			}
    			else{
    				if($('#three').find($("div.leaderBoard")).length > 0){
    					var iuserd = $('#'+"three").find("div.iuserdPreCharts").attr('id');
    					window[iuserd+'logOutLB']();
    				}
    				else{
    					otherLogout("three");
    				}
    			}
    		}
    	}
        var triggered = channel3.trigger('client-logoutMobile',{});
    }, 2 * 60 * 1000); // called after 2 minutes
};

// called by something that detects user activity
function userActivityDetected3(){
    if(timeoutId3 !== null) {
        window.clearTimeout(timeoutId3);
    }

    startInactivityCheck3();
};

function startInactivityCheck4() {
    timeoutId4 = window.setTimeout(function(){
    	if($('#four').find($("div.devicesContainer")).length > 0){
    		var iuserd = $('#'+"four").find("div.iuserdProfile").attr('id');
    		window[iuserd+'logOutProfile']("");
    	}
    	else{
    		if($('#four').find($("div.chartContainer")).length > 0){
    			var iuserd = $('#'+"four").find("div.iuserdViewCharts").attr('id');
    			window[iuserd+'logOutViewCharts']("");
    		}
    		else{
    			if($('#four').find($("div.preChartContainer")).length > 0){
    				var iuserd = $('#'+"four").find("div.iuserdPreCharts").attr('id');
    				window[iuserd+'logoutPreChart']("");
    			}
    			else{
    				if($('#four').find($("div.leaderBoard")).length > 0){
    					var iuserd = $('#'+"four").find("div.iuserdPreCharts").attr('id');
    					window[iuserd+'logOutLB']();
    				}
    				else{
    					otherLogout("four");
    				}
    			}
    		}
    	}
        var triggered = channel4.trigger('client-logoutMobile',{});
    }, 2 * 60 * 1000); // called after 2 minutes
};

// called by something that detects user activity
function userActivityDetected4(){
    if(timeoutId4 !== null) {
        window.clearTimeout(timeoutId4);
    }

    startInactivityCheck4();
};

function getUserNumber(num){
		var number;
		switch(num)
		{
			case '1':
			  	number='one';
			  	break;
			case '2':
			  	number='two';
			  	break;
			case '3':
				number='three';
				break;
			case '4':
				number='four';
				break;
		}
		return number;
	}

var start = function(data) {
				// alert(userArray);
				// alert(sessionStorage.noOfUsers);
				if(sessionStorage.noOfUsers < 4){
					// sessionStorage.noOfUsers = parseInt(sessionStorage.noOfUsers) + 1;
					var found = false;
					sessionStorage.noOfUsers = parseInt(sessionStorage.noOfUsers) + 1
					for(var i=0 ; i<userArray.length ; i++){
						if(!userArray[i] && !found){
							found = true;
							// alert(i);
							sessionStorage.userNumber = userNumberArray[i];
							userArray[i] = true;
						}
					}
					
					// alert(sessionStorage.noOfUsers+" da5al el method");
					var triggered = channel.trigger('client-changeChannelName', {channelName:sessionStorage.userNumber+''});
				}
				else{
					// sessionStorage.noOfUsers = -1;
					var triggered = channel.trigger('client-screenFull', {});
				}
		        
			};

var startPage1 = function(data) {
					// if(sessionStorage.noOfUsers < 4){
					// }
					// else{
					// 	alert("Screen full");
					// }
					$.ajax({
			            url: "/login/",
			            type: "GET",
			            data: {csrfmiddlewaretoken:csrfToken ,userNumber:sessionStorage.userNumber},
			            success: function(data){
			            	$('#welcomePage').hide(1000);
			            	$('#'+'one'+"ColorDiv").addClass('glowing-box-1');
			            	$('#one').html(data);
			    			if(sessionStorage.noOfUsers == 1){
								$('#one').removeClass();
								$('#one').addClass("one_one" , 1000);
                            }
                            else{
                                if(sessionStorage.noOfUsers == 2){
                                	j=0;
                                	for(var i=0 ; i<userArray.length ; i++){
                            			if(userArray[i] == true){
                            				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
                            					try{
                            						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
                            					}
                            					catch(err){}
                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level').addClass('level2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level').removeClass('level');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money').addClass('money2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money').removeClass('money');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges').addClass('badges2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges').removeClass('badges');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas').addClass('pieCanvas2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas').removeClass('pieCanvas');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle').addClass('NoBadgesTitle2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle').removeClass('NoBadgesTitle');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile').addClass('privacyProtectedTitleProfile2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile').removeClass('privacyProtectedTitleProfile');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
											}
											else{
												if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas').addClass('ViewChartsPieCanvas2');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas').removeClass('ViewChartsPieCanvas');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas').addClass('ViewChartsBarCanvas2');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas').removeClass('ViewChartsBarCanvas');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart').addClass('privacyProtectedViewChart2');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart').removeClass('privacyProtectedViewChart');
												}
												else{
													if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer').addClass('preChartContainer2');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer').removeClass('preChartContainer');
													}
												}
											}
                            				if(userNumberArray[i] == 1){
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_two" , 1500);
                            				}
                            				else{
                            					if(j%2 == 0){
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_left_two" , 1500);
	                            				}
	                            				else {
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_right_two" , 1500);
	                            				}
                            				}
                            				j++;
                            			}
                            		}
                                }
                                else{
                                    if(sessionStorage.noOfUsers == 3){
                                    	j=0;
                                        for(var i=0 ; i<userArray.length ; i++){
	                            			if(userArray[i] == true){
	                            				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
	                            					try{
	                            						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
	                            					}
	                            					catch(err){}
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==1) ? "" : "2").addClass('level3');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==1) ? "" : "2").removeClass('level'+(userNumberArray[i]==1) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==1) ? "" : "2").addClass('money3');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==1) ? "" : "2").removeClass('money'+(userNumberArray[i]==1) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==1) ? "" : "2").addClass('badges3');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==1) ? "" : "2").removeClass('badges'+(userNumberArray[i]==1) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==1) ? "" : "2").addClass('pieCanvas3');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==1) ? "" : "2").removeClass('pieCanvas'+(userNumberArray[i]==1) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==1) ? "" : "2").addClass('privacyProtectedTitleProfile3');
	                        						$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==1) ? "" : "2").removeClass('privacyProtectedTitleProfile'+(userNumberArray[i]==1) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
												}
												else{
													if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==1) ? "" : "2").addClass('ViewChartsPieCanvas3');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==1) ? "" : "2").removeClass('ViewChartsPieCanvas'+(userNumberArray[i]==1) ? "" : "2");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==1) ? "" : "2").addClass('ViewChartsBarCanvas3');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==1) ? "" : "2").removeClass('ViewChartsBarCanvas'+(userNumberArray[i]==1) ? "" : "2");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==1) ? "" : "2").addClass('privacyProtectedViewChart3');
		                        						$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==1) ? "" : "2").removeClass('privacyProtectedViewChart'+(userNumberArray[i]==1) ? "" : "2");
													}
													else{
														if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
			                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==1) ? "" : "2").addClass('preChartContainer3');
				                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==1) ? "" : "2").removeClass('preChartContainer'+(userNumberArray[i]==1) ? "" : "2");
														}
													}
												}
	                            				if(userNumberArray[i] == 1){
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_three" , 1500);
	                            				}
	                            				else{
	                            					if(j==2){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
			                            				$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_middle_three" , 1500);
		                            				}
	                            					if(j%2 == 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_left_three" , 1500);
		                            				}
		                            				else {
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_right_three" , 1500);
		                            				}
	                            				}
	                            				j++;
	                            			}
	                            		}
                                    }
                                    else{
                                    	if(sessionStorage.noOfUsers == 4){
	                                        for(var i=0 ; i<userArray.length ; i++){
		                            			if(userArray[i] == true){
		                            				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
		                            					try{
		                            						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
		                            					}
		                            					catch(err){}
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==1) ? "" : "3").addClass('level4');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==1) ? "" : "3").removeClass('level'+(userNumberArray[i]==1) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==1) ? "" : "3").addClass('money4');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==1) ? "" : "3").removeClass('money'+(userNumberArray[i]==1) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==1) ? "" : "3").addClass('badges4');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==1) ? "" : "3").removeClass('badges'+(userNumberArray[i]==1) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==1) ? "" : "3").addClass('pieCanvas4');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==1) ? "" : "3").removeClass('pieCanvas'+(userNumberArray[i]==1) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==1) ? "" : "3").addClass('privacyProtectedTitleProfile4');
	                        							$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==1) ? "" : "3").removeClass('privacyProtectedTitleProfile'+(userNumberArray[i]==1) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
													}
													else{
														if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
			                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==1) ? "" : "3").addClass('ViewChartsPieCanvas4');
				                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==1) ? "" : "3").removeClass('ViewChartsPieCanvas'+(userNumberArray[i]==1) ? "" : "3");
				                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==1) ? "" : "3").addClass('ViewChartsBarCanvas4');
				                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==1) ? "" : "3").removeClass('ViewChartsBarCanvas'+(userNumberArray[i]==1) ? "" : "3");
				                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==1) ? "" : "3").addClass('privacyProtectedViewChart4');
		                        							$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==1) ? "" : "3").removeClass('privacyProtectedViewChart'+(userNumberArray[i]==1) ? "" : "3");
														}
														else{
															if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
				                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==1) ? "" : "3").addClass('preChartContainer4');
					                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==1) ? "" : "3").removeClass('preChartContainer'+(userNumberArray[i]==1) ? "" : "3");
															}
														}
													}
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_four" , 1500);
		                            			}
		                            		}
                                    	}
                                    }
		                            
					            }
			            	}
			            	$('#one').show(1000);
			            	try{
			            		window['onebadgesStyles']();
			            	}
			            	catch(err){}
			            	renderCharts();
					        var triggered = channel1.trigger('client-loadingComplete', {'color':'#1725E8'});
					        startInactivityCheck1();
						}
					});
				};

var startPage2 = function(data) {
					// if(sessionStorage.noOfUsers < 4){
					// 	alert(sessionStorage.userNumber);
					// }
					// else{
					// 	alert("Screen full");
					// }
					$.ajax({
			            url: "/login/",
			            type: "GET",
			            data: {csrfmiddlewaretoken:csrfToken ,userNumber:sessionStorage.userNumber},
			            success: function(data){
			            	// alert("success");
			            	$('#two').html(data);
			            	$('#'+'two'+"ColorDiv").addClass('glowing-box-2');
                            if(sessionStorage.noOfUsers == 2){
                            	j=0;
                            	for(var i=0 ; i<userArray.length ; i++){
                        			if(userArray[i] == true){
                        				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
                        					try{
                        						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
                        					}
                        					catch(err){}
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level').addClass('level2');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level').removeClass('level');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money').addClass('money2');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money').removeClass('money');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges').addClass('badges2');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges').removeClass('badges');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas').addClass('pieCanvas2');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas').removeClass('pieCanvas');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle').addClass('NoBadgesTitle2');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.NoBadgesTitle').removeClass('NoBadgesTitle');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile').addClass('privacyProtectedTitleProfile2');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile').removeClass('privacyProtectedTitleProfile');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
										}
										else{
											if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas').addClass('ViewChartsPieCanvas2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas').removeClass('ViewChartsPieCanvas');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas').addClass('ViewChartsBarCanvas2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas').removeClass('ViewChartsBarCanvas');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart').addClass('privacyProtectedViewChart2');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart').removeClass('privacyProtectedViewChart');
											}
											else{
												if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer').addClass('preChartContainer2');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer').removeClass('preChartContainer');
												}
											}
										}
                        				if(userNumberArray[i] == 1){
                        					// alert("here in first if");
                        					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                        					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_two" , 1500);
                        				}
                        				else{
                        					if(j%2 == 0){
                        						// alert("here in second if");
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_left_two" , 1500);
                            				}
                            				else {
                            					// alert("here in third if");
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_right_two" , 1500);
                            				}
                        				}
                        				j++;
                        			}
                        		}
                            }
                            else{
                                if(sessionStorage.noOfUsers == 3){
                                	j=0;
                                    for(var i=0 ; i<userArray.length ; i++){
                            			if(userArray[i] == true){
	                        				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
	                        					try{
	                        						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
	                        					}
	                        					catch(err){}
		                    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==2) ? "" : "2").addClass('level3');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==2) ? "" : "2").removeClass('level'+(userNumberArray[i]==2) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==2) ? "" : "2").addClass('money3');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==2) ? "" : "2").removeClass('money'+(userNumberArray[i]==2) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==2) ? "" : "2").addClass('badges3');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==2) ? "" : "2").removeClass('badges'+(userNumberArray[i]==2) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==2) ? "" : "2").addClass('pieCanvas3');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==2) ? "" : "2").removeClass('pieCanvas'+(userNumberArray[i]==2) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==2) ? "" : "2").addClass('privacyProtectedTitleProfile3');
                        						$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==2) ? "" : "2").removeClass('privacyProtectedTitleProfile'+(userNumberArray[i]==2) ? "" : "2");
		                    					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
											}
											else{
												if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==2) ? "" : "2").addClass('ViewChartsPieCanvas3');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==2) ? "" : "2").removeClass('ViewChartsPieCanvas'+(userNumberArray[i]==2) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==2) ? "" : "2").addClass('ViewChartsBarCanvas3');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==2) ? "" : "2").removeClass('ViewChartsBarCanvas'+(userNumberArray[i]==2) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==2) ? "" : "2").addClass('privacyProtectedViewChart3');
	                        						$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==2) ? "" : "2").removeClass('privacyProtectedViewChart'+(userNumberArray[i]==2) ? "" : "2");
												}
												else{
													if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==2) ? "" : "2").addClass('preChartContainer3');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==2) ? "" : "2").removeClass('preChartContainer'+(userNumberArray[i]==2) ? "" : "2");
													}
												}
											}
                            				if(userNumberArray[i] == 1){
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_three" , 1500);
                            				}
                            				else{
                            					if(j==2){
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
		                            				$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_middle_three" , 1500);
	                            				}
	                            				else{
	                            					if(j%2 == 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_left_three" , 1500);
		                            				}
		                            				else {
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_right_three" , 1500);
		                            				}
	                            				}
                            				}
                            				j++;
                            			}
                            		}
                                }
                                else{
                                	if(sessionStorage.noOfUsers == 4){
                                        for(var i=0 ; i<userArray.length ; i++){
	                            			if(userArray[i] == true){
	                            				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
	                            					try{
		                        						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
		                        					}
		                        					catch(err){}
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==2) ? "" : "3").addClass('level4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==2) ? "" : "3").removeClass('level'+(userNumberArray[i]==2) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==2) ? "" : "3").addClass('money4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==2) ? "" : "3").removeClass('money'+(userNumberArray[i]==2) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==2) ? "" : "3").addClass('badges4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==2) ? "" : "3").removeClass('badges'+(userNumberArray[i]==2) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==2) ? "" : "3").addClass('pieCanvas4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==2) ? "" : "3").removeClass('pieCanvas'+(userNumberArray[i]==2) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==2) ? "" : "3").addClass('privacyProtectedTitleProfile4');
                    								$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==2) ? "" : "3").removeClass('privacyProtectedTitleProfile'+(userNumberArray[i]==2) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
												}
												else{
													if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==2) ? "" : "3").addClass('ViewChartsPieCanvas4');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==2) ? "" : "3").removeClass('ViewChartsPieCanvas'+(userNumberArray[i]==2) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==2) ? "" : "3").addClass('ViewChartsBarCanvas4');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==2) ? "" : "3").removeClass('ViewChartsBarCanvas'+(userNumberArray[i]==2) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==2) ? "" : "3").addClass('privacyProtectedViewChart4');
	                        							$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==2) ? "" : "3").removeClass('privacyProtectedViewChart'+(userNumberArray[i]==2) ? "" : "3");
													}
													else{
														if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
			                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==2) ? "" : "3").addClass('preChartContainer4');
				                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==2) ? "" : "3").removeClass('preChartContainer'+(userNumberArray[i]==2) ? "" : "3");
														}
													}
												}
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_four" , 1500);
	                            			}
	                            		}
                                	}
                                }
                           	}
                           	$('#two').show(1500);
                           	try{
			            		window['twobadgesStyles']();
			            	}
			            	catch(err){}
                           	renderCharts();
			            	var triggered = window[ "channel" + "2" ].trigger('client-loadingComplete', {'color':'#F50A0A'});
			            	startInactivityCheck2();
			        	}
			        });
				};


var startPage3 = function(data) {
					// if(sessionStorage.noOfUsers < 4){
					// 	alert(sessionStorage.userNumber);
					// }
					// else{
					// 	alert("Screen full");
					// }
					$.ajax({
			            url: "/login/",
			            type: "GET",
			            data: {csrfmiddlewaretoken:csrfToken,userNumber:sessionStorage.userNumber},
			            success: function(data){
			            	// alert("success");
			            	$('#three').html(data);
			            	$('#'+'three'+"ColorDiv").addClass('glowing-box-3');
			            	if(sessionStorage.noOfUsers == 3){
                                	j=0;
                                    for(var i=0 ; i<userArray.length ; i++){
                            			if(userArray[i] == true){
                            				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
                            					try{
	                        						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
	                        					}
	                        					catch(err){}
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==3) ? "" : "2").addClass('level3');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==3) ? "" : "2").removeClass('level'+(userNumberArray[i]==3) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==3) ? "" : "2").addClass('money3');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==3) ? "" : "2").removeClass('money'+(userNumberArray[i]==3) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==3) ? "" : "2").addClass('badges3');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==3) ? "" : "2").removeClass('badges'+(userNumberArray[i]==3) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==3) ? "" : "2").addClass('pieCanvas3');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==3) ? "" : "2").removeClass('pieCanvas'+(userNumberArray[i]==3) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==3) ? "" : "2").addClass('privacyProtectedTitleProfile3');
                        						$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==3) ? "" : "2").removeClass('privacyProtectedTitleProfile'+(userNumberArray[i]==3) ? "" : "2");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
											}
											else{
												if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==3) ? "" : "2").addClass('ViewChartsPieCanvas3');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==3) ? "" : "2").removeClass('ViewChartsPieCanvas'+(userNumberArray[i]==3) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==3) ? "" : "2").addClass('ViewChartsBarCanvas3');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==3) ? "" : "2").removeClass('ViewChartsBarCanvas'+(userNumberArray[i]==3) ? "" : "2");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==3) ? "" : "2").addClass('privacyProtectedViewChart3');
	                        						$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==3) ? "" : "2").removeClass('privacyProtectedViewChart'+(userNumberArray[i]==3) ? "" : "2");
												}
												else{
													if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==3) ? "" : "2").addClass('preChartContainer3');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==3) ? "" : "2").removeClass('preChartContainer'+(userNumberArray[i]==3) ? "" : "2");
													}
												}
											}
                            				if(userNumberArray[i] == 1){
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_three" , 1500);
                            				}
                            				else{
                            					if(j==2){
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
		                            				$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_middle_three" , 1500);
	                            				}
	                            				else{
	                            					if(j%2 == 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_left_three" , 1500);
		                            				}
		                            				else {
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_right_three" , 1500);
		                            				}
	                            				}
                            				}
                            				j++;
                            			}
                            		}
                                }
                                else{
                                	if(sessionStorage.noOfUsers == 4){
                                        for(var i=0 ; i<userArray.length ; i++){
	                            			if(userArray[i] == true){
	                            				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
	                            					try{
		                        						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
		                        					}
		                        					catch(err){}
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==3) ? "" : "3").addClass('level4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==3) ? "" : "3").removeClass('level'+(userNumberArray[i]==3) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==3) ? "" : "3").addClass('money4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==3) ? "" : "3").removeClass('money'+(userNumberArray[i]==3) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==3) ? "" : "3").addClass('badges4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==3) ? "" : "3").removeClass('badges'+(userNumberArray[i]==3) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==3) ? "" : "3").addClass('pieCanvas4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==3) ? "" : "3").removeClass('pieCanvas'+(userNumberArray[i]==3) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==3) ? "" : "3").addClass('privacyProtectedTitleProfile4');
                        							$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==3) ? "" : "3").removeClass('privacyProtectedTitleProfile'+(userNumberArray[i]==3) ? "" : "3");
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
												}
												else{
													if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
		                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==3) ? "" : "3").addClass('ViewChartsPieCanvas4');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==3) ? "" : "3").removeClass('ViewChartsPieCanvas'+(userNumberArray[i]==3) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==3) ? "" : "3").addClass('ViewChartsBarCanvas4');
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==3) ? "" : "3").removeClass('ViewChartsBarCanvas'+(userNumberArray[i]==3) ? "" : "3");
			                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==3) ? "" : "3").addClass('privacyProtectedViewChart4');
	                        							$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==3) ? "" : "3").removeClass('privacyProtectedViewChart'+(userNumberArray[i]==3) ? "" : "3");
													}
													else{
														if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
			                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==3) ? "" : "3").addClass('preChartContainer4');
				                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==3) ? "" : "3").removeClass('preChartContainer'+(userNumberArray[i]==3) ? "" : "3");
														}
													}
												}
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_four" , 1500);
	                            			}
	                            		}
                                	}
                                }
                            $('#three').show(1500);
                            try{
			            		window['threebadgesStyles']();
			            	}
			            	catch(err){}
                            renderCharts();
			            	var triggered = window[ "channel" + "3" ].trigger('client-loadingComplete', {'color':'#0285FF'});
			            	startInactivityCheck3();
			            }
					});
				};

var startPage4 = function(data) {
					// if(sessionStorage.noOfUsers < 4){
					// 	alert(sessionStorage.userNumber);
					// }
					// else{
					// 	alert("Screen full");
					// }
					$.ajax({
			            url: "/login/",
			            type: "GET",
			            data: {csrfmiddlewaretoken:csrfToken,userNumber:sessionStorage.userNumber},
			            success: function(data){
			            	// alert("success");
			            	$('#four').html(data);
			            	$('#'+'four'+"ColorDiv").addClass('glowing-box-4');
			            	if(sessionStorage.noOfUsers == 4){
                                for(var i=0 ; i<userArray.length ; i++){
                        			if(userArray[i] == true){
                        				if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.devicesContainer")).length > 0){
                        					try{
                        						window[getUserNumber(userNumberArray[i]+'')+'badgesStyles']();	
                        					}
                        					catch(err){}
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==4) ? "" : "3").addClass('level4');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.level'+(userNumberArray[i]==4) ? "" : "3").removeClass('level'+(userNumberArray[i]==4) ? "" : "3");
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==4) ? "" : "3").addClass('money4');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.money'+(userNumberArray[i]==4) ? "" : "3").removeClass('money'+(userNumberArray[i]==4) ? "" : "3");
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==4) ? "" : "3").addClass('badges4');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badges'+(userNumberArray[i]==4) ? "" : "3").removeClass('badges'+(userNumberArray[i]==4) ? "" : "3");
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==4) ? "" : "3").addClass('pieCanvas4');
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.pieCanvas'+(userNumberArray[i]==4) ? "" : "3").removeClass('pieCanvas'+(userNumberArray[i]==4) ? "" : "3");
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==4) ? "" : "3").addClass('privacyProtectedTitleProfile4');
                							$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedTitleProfile'+(userNumberArray[i]==4) ? "" : "3").removeClass('privacyProtectedTitleProfile'+(userNumberArray[i]==4) ? "" : "3");
                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.badgesTitle').hide();
										}
										else{
											if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.chartContainer")).length > 0){
                            					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==4) ? "" : "3").addClass('ViewChartsPieCanvas4');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsPieCanvas'+(userNumberArray[i]==4) ? "" : "3").removeClass('ViewChartsPieCanvas'+(userNumberArray[i]==4) ? "" : "3");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==4) ? "" : "3").addClass('ViewChartsBarCanvas4');
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.ViewChartsBarCanvas'+(userNumberArray[i]==4) ? "" : "3").removeClass('ViewChartsBarCanvas'+(userNumberArray[i]==4) ? "" : "3");
	                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==4) ? "" : "3").addClass('privacyProtectedViewChart4');
                    							$('#'+getUserNumber(userNumberArray[i]+'')).find('.privacyProtectedViewChart'+(userNumberArray[i]==4) ? "" : "3").removeClass('privacyProtectedViewChart'+(userNumberArray[i]==4) ? "" : "3");
											}
											else{
												if($('#'+getUserNumber(userNumberArray[i]+'')).find($("div.preChartContainer")).length > 0){
                            						$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==4) ? "" : "3").addClass('preChartContainer4');
		                        					$('#'+getUserNumber(userNumberArray[i]+'')).find('.preChartContainer'+(userNumberArray[i]==4) ? "" : "3").removeClass('preChartContainer'+(userNumberArray[i]==4) ? "" : "3");
												}
											}
										}
                    					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                    					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_four" , 1500);
                        			}
                        		}
                        	}
			            	$('#four').show(1500);
			            	try{
			            		window['fourbadgesStyles']();
			            	}
			            	catch(err){}
			            	renderCharts();
			            	var triggered = window[ "channel" + "4" ].trigger('client-loadingComplete', {'color':'#F5D90C'});
			            	startInactivityCheck4();
			            }
					});
				};

var setHighPrivacy1 = function(data) {
						if(window["onePrivacy"] == 'low'){
							window["onePrivacy"] = 'high';
							if($('#'+"one").find($("div.devicesContainer")).length > 0){
								var iuserd = $('#'+"one").find("div.iuserdProfile").attr('id');
								var tempName = iuserd+'privacyProtected';
								$('#'+"one").find("div.pieCanvas"+((sessionStorage.noOfUsers == '1')? "" : sessionStorage.noOfUsers)+'').replaceWith('<div id="'+tempName+'" class="privacyProtectedProfile"><h1 class="privacyProtectedTitleProfile"'+((sessionStorage.noOfUsers == '1')? "" : sessionStorage.noOfUsers)+''+'>PRIVACY PROTECTED!</h1></div>');
								var triggered = window[ chan + window["one"] ].trigger('client-profile_chart', {'profileChartData': window[iuserd+"PieChart"]});
							}
							else{
								if($('#'+"one").find($("div.chartContainer")).length > 0){
									var iuserd = $('#'+"one").find("div.iuserdViewCharts").attr('id');
									var tempName = iuserd+'privacyProtected';
									$('#'+"one").find("#"+iuserd+"viewCharts").replaceWith('<div id="'+tempName+'" class="privacyProtectedViewChart"><h1>PRIVACY PROTECTED!</h1></div>');
									var triggered = window[ chan + window["one"] ].trigger('client-view_charts', {'viewChartPieData': window[iuserd+"PieChart"] , 'viewChartBarData':window[iuserd+'barDataPoints']});
								}
								else{
									
								}
							}
						}
					};

var setHighPrivacy2 = function(data) {
						if(window["onePrivacy"] == 'low'){
							window["onePrivacy"] = 'high';
							if($('#'+"two").find($("div.devicesContainer")).length > 0){
								var iuserd = $('#'+"two").find("div.iuserdProfile").attr('id');
								var tempName = iuserd+'privacyProtected';
								$('#'+"two").find("div.pieCanvas"+((sessionStorage.noOfUsers == '1')? "" : sessionStorage.noOfUsers)+'').replaceWith('<div id="'+tempName+'" class="privacyProtectedProfile"><h1 class="privacyProtectedTitleProfile"'+((sessionStorage.noOfUsers == '1')? "" : sessionStorage.noOfUsers)+''+'>PRIVACY PROTECTED!</h1></div>');
								var triggered = window[ chan + window["two"] ].trigger('client-profile_chart', {'profileChartData': window[iuserd+"PieChart"]});
							}
							else{
								if($('#'+"two").find($("div.chartContainer")).length > 0){
									var iuserd = $('#'+"two").find("div.iuserdViewCharts").attr('id');
									var tempName = iuserd+'privacyProtected';
									$('#'+"two").find("#"+iuserd+"viewCharts").replaceWith('<div id="'+tempName+'" class="privacyProtectedViewChart"><h1>PRIVACY PROTECTED!</h1></div>');
									var triggered = window[ chan + window["two"] ].trigger('client-view_charts', {'viewChartPieData': window[iuserd+"PieChart"] , 'viewChartBarData':window[iuserd+'barDataPoints']});
								}
								else{
									
								}
							}
						}
					};

var setHighPrivacy3 = function(data) {
						if(window["onePrivacy"] == 'low'){
							window["onePrivacy"] = 'high';
							if($('#'+"three").find($("div.devicesContainer")).length > 0){
								var iuserd = $('#'+"three").find("div.iuserdProfile").attr('id');
								var tempName = iuserd+'privacyProtected';
								$('#'+"three").find("div.pieCanvas"+((sessionStorage.noOfUsers == '1')? "" : sessionStorage.noOfUsers)+'').replaceWith('<div id="'+tempName+'" class="privacyProtectedProfile"><h1 class="privacyProtectedTitleProfile"'+((sessionStorage.noOfUsers == '1')? "" : sessionStorage.noOfUsers)+''+'>PRIVACY PROTECTED!</h1></div>');
								var triggered = window[ chan + window["three"] ].trigger('client-profile_chart', {'profileChartData': window[iuserd+"PieChart"]});
							}
							else{
								if($('#'+"three").find($("div.chartContainer")).length > 0){
									var iuserd = $('#'+"three").find("div.iuserdViewCharts").attr('id');
									var tempName = iuserd+'privacyProtected';
									$('#'+"three").find("#"+iuserd+"viewCharts").replaceWith('<div id="'+tempName+'" class="privacyProtectedViewChart"><h1>PRIVACY PROTECTED!</h1></div>');
									var triggered = window[ chan + window["three"] ].trigger('client-view_charts', {'viewChartPieData': window[iuserd+"PieChart"] , 'viewChartBarData':window[iuserd+'barDataPoints']});
								}
								else{
									
								}
							}
						}
					};

var setHighPrivacy4 = function(data) {
						if(window["onePrivacy"] == 'low'){
							window["onePrivacy"] = 'high';
							if($('#'+"four").find($("div.devicesContainer")).length > 0){
								var iuserd = $('#'+"four").find("div.iuserdProfile").attr('id');
								var tempName = iuserd+'privacyProtected';
								$('#'+"four").find("div.pieCanvas"+((sessionStorage.noOfUsers == '1')? "" : sessionStorage.noOfUsers)+'').replaceWith('<div id="'+tempName+'" class="privacyProtectedProfile"><h1 class="privacyProtectedTitleProfile"'+((sessionStorage.noOfUsers == '1')? "" : sessionStorage.noOfUsers)+''+'>PRIVACY PROTECTED!</h1></div>');
								var triggered = window[ chan + window["four"] ].trigger('client-profile_chart', {'profileChartData': window[iuserd+"PieChart"]});
							}
							else{
								if($('#'+"four").find($("div.chartContainer")).length > 0){
									var iuserd = $('#'+"four").find("div.iuserdViewCharts").attr('id');
									var tempName = iuserd+'privacyProtected';
									$('#'+"four").find("#"+iuserd+"viewCharts").replaceWith('<div id="'+tempName+'" class="privacyProtectedViewChart"><h1>PRIVACY PROTECTED!</h1></div>');
									var triggered = window[ chan + window["four"] ].trigger('client-view_charts', {'viewChartPieData': window[iuserd+"PieChart"] , 'viewChartBarData':window[iuserd+'barDataPoints']});
								}
								else{
									
								}
							}
						}
					};

var setLowPrivacy1 = function(data) {
						window["onePrivacy"] = 'low';
					};

var setLowPrivacy2 = function(data) {
						window["twoPrivacy"] = 'low';
					};

var setLowPrivacy3 = function(data) {
						window["threePrivacy"] = 'low';
					};

var setLowPrivacy4 = function(data) {
						window["fourPrivacy"] = 'low';
					};


channel.bind('client-start',start);
channel1.bind('client-startPage',startPage1);
channel1.bind('client-setHighPrivacy',setHighPrivacy1);
channel1.bind('client-setLowPrivacy',setLowPrivacy1);
channel2.bind('client-startPage',startPage2);
channel2.bind('client-setHighPrivacy',setHighPrivacy2);
channel2.bind('client-setLowPrivacy',setLowPrivacy2);
channel3.bind('client-startPage',startPage3);
channel3.bind('client-setHighPrivacy',setHighPrivacy3);
channel3.bind('client-setLowPrivacy',setLowPrivacy3);
channel4.bind('client-startPage',startPage4);
channel4.bind('client-setHighPrivacy',setHighPrivacy4)
channel4.bind('client-setLowPrivacy',setLowPrivacy4);