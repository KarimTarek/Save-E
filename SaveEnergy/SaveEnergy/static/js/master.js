var userArray = [ false, false, false, false ];
var userNumberArray = [ 1, 2, 3, 4 ];

if(sessionStorage.noOfUsers == null){
	 sessionStorage.noOfUsers = 0;
	 alert(sessionStorage.noOfUsers);
}
var pusher = new Pusher('35bf6495b4677801c17e');
var channel = pusher.subscribe('private-SaveE');
var channel1 = pusher.subscribe('private-SaveE1');
var channel2 = pusher.subscribe('private-SaveE2');
var channel3 = pusher.subscribe('private-SaveE3');
var channel4 = pusher.subscribe('private-SaveE4');
Pusher.channel_auth_endpoint = '/auth/';
Pusher.channel_auth_transport = 'ajax';

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
				alert(userArray);
				alert(sessionStorage.noOfUsers);
				if(sessionStorage.noOfUsers < 4){
					// sessionStorage.noOfUsers = parseInt(sessionStorage.noOfUsers) + 1;
					var found = false;
					sessionStorage.noOfUsers = parseInt(sessionStorage.noOfUsers) + 1
					for(var i=0 ; i<userArray.length ; i++){
						if(!userArray[i] && !found){
							found = true;
							alert(i);
							sessionStorage.userNumber = userNumberArray[i];
							userArray[i] = true;
						}
					}
					
					// alert(sessionStorage.noOfUsers+" da5al el method");
					var triggered = channel.trigger('client-changeChannelName', {channelName:sessionStorage.userNumber+''});
				}
				else{
					// sessionStorage.noOfUsers = -1;
					alert("Screen full");
				}
		        
			};

var startPage1 = function(data) {
					if(sessionStorage.noOfUsers < 4){
						// alert(sessionStorage.noOfUsers+" da5al el method");
					}
					else{
						alert("Screen full");
					}
					$.ajax({
			            url: "/login/",
			            type: "GET",
			            data: {csrfmiddlewaretoken:csrfToken ,userNumber:sessionStorage.userNumber},
			            success: function(data){
			            	// alert("success");
			            	$('#welcomePage').hide(1000);
			            	$('#one').addClass('glowing-border-1');
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
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
	                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_four" , 1500);
		                            			}
		                            		}
                                    	}
                                    }
		                            
					            }
			            	}
			            	$('#one').show(1000);
					        var triggered = channel1.trigger('client-loadingComplete', {'color':'#1725E8'});
						}
					});
				};

var startPage2 = function(data) {
					if(sessionStorage.noOfUsers < 4){
						alert(sessionStorage.userNumber);
					}
					else{
						alert("Screen full");
					}
					$.ajax({
			            url: "/login/",
			            type: "GET",
			            data: {csrfmiddlewaretoken:csrfToken ,userNumber:sessionStorage.userNumber},
			            success: function(data){
			            	// alert("success");
			            	$('#two').html(data);
			            	$('#two').addClass('glowing-border-2');
                            if(sessionStorage.noOfUsers == 2){
                            	j=0;
                            	for(var i=0 ; i<userArray.length ; i++){
                        			if(userArray[i] == true){
                        				if(userNumberArray[i] == 1){
                        					alert("here in first if");
                        					alert(userNumberArray[i]);
                        					alert(getUserNumber(userNumberArray[i]+'')+"_two");
                        					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                        					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_two" , 1500);
                        				}
                        				else{
                        					if(j%2 == 0){
                        						alert("here in second if");
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_left_two" , 1500);
                            				}
                            				else {
                            					alert("here in third if");
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
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_four" , 1500);
	                            			}
	                            		}
                                	}
                                }
                           	}
                           	$('#two').show(1500);
			            	var triggered = window[ "channel" + "2" ].trigger('client-loadingComplete', {'color':'#F50A0A'});
			        	}
			        });
				};


var startPage3 = function(data) {
					if(sessionStorage.noOfUsers < 4){
						alert(sessionStorage.userNumber);
					}
					else{
						alert("Screen full");
					}
					$.ajax({
			            url: "/login/",
			            type: "GET",
			            data: {csrfmiddlewaretoken:csrfToken,userNumber:sessionStorage.userNumber},
			            success: function(data){
			            	// alert("success");
			            	$('#three').html(data);
			            	$('#three').addClass('glowing-border-3');
			            	if(sessionStorage.noOfUsers == 3){
                                	j=0;
                                    for(var i=0 ; i<userArray.length ; i++){
                            			if(userArray[i] == true){
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
                            					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                            					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_four" , 1500);
	                            			}
	                            		}
                                	}
                                }
                            $('#three').show(1500);
			            	var triggered = window[ "channel" + "3" ].trigger('client-loadingComplete', {'color':'#0285FF'});
			            	
			            }
					});
				};

var startPage4 = function(data) {
					if(sessionStorage.noOfUsers < 4){
						alert(sessionStorage.userNumber);
					}
					else{
						alert("Screen full");
					}
					$.ajax({
			            url: "/login/",
			            type: "GET",
			            data: {csrfmiddlewaretoken:csrfToken,userNumber:sessionStorage.userNumber},
			            success: function(data){
			            	// alert("success");
			            	$('#four').html(data);
			            	$('#four').addClass('glowing-border-4');
			            	if(sessionStorage.noOfUsers == 4){
                                for(var i=0 ; i<userArray.length ; i++){
                        			if(userArray[i] == true){
                    					$('#'+getUserNumber(userNumberArray[i]+'')).removeClass();
                    					$('#'+getUserNumber(userNumberArray[i]+'')).addClass(getUserNumber(userNumberArray[i]+'')+"_four" , 1500);
                        			}
                        		}
                        	}
			            	$('#four').show(1500);
			            	var triggered = window[ "channel" + "4" ].trigger('client-loadingComplete', {'color':'#F5D90C'});
			            }
					});
				};

var migrateContent1 = function(data) {
						var content = $('#one').html();
						var triggered = window[ "channel" + "1" ].trigger('client-migratingContent', {'content':content , 'page':page1});
					};

var migrateContent2 = function(data) {
						var content = $('#two').html();
						var triggered = window[ "channel" + "2" ].trigger('client-migratingContent', {});
					};

var migrateContent3 = function(data) {
						var content = $('#three').html();
						var triggered = window[ "channel" + "3" ].trigger('client-migratingContent', {});
					};

var migrateContent4 = function(data) {
						var content = $('#four').html();
						var triggered = window[ "channel" + "4" ].trigger('client-migratingContent', {});
					};


channel.bind('client-start',start);
channel1.bind('client-startPage',startPage1);
channel1.bind('client-readyToMigrateContent',migrateContent1);
channel2.bind('client-startPage',startPage2);
channel2.bind('client-readyToMigrateContent',migrateContent2);
channel3.bind('client-startPage',startPage3);
channel3.bind('client-readyToMigrateContent',migrateContent3);
channel4.bind('client-startPage',startPage4);
channel4.bind('client-readyToMigrateContent',migrateContent4);