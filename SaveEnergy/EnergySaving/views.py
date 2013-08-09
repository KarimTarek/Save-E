from EnergySaving.models import *
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.shortcuts import get_object_or_404, render_to_response, redirect, render
from django.template import RequestContext, Context ,loader,Template
from django import template
from django.contrib.sessions.models import Session
from django.db.models.query import QuerySet
from django.db.models import Q
from django.contrib import auth
import pusher
import json
from django.core.context_processors import csrf
from django.conf import settings
from django.core.serializers import serialize
from django.utils.simplejson import dumps, loads, JSONEncoder
from django.core import serializers
from django.db.models.query import QuerySet
from django.utils.functional import curry
from django.utils import simplejson
from django.contrib.auth.models import User
from EnergySaving.forms import *
from django.contrib import messages
from datetime import *
import time
import random
p = pusher.Pusher(app_id='42846', key='35bf6495b4677801c17e', secret='7ef9690d99684e1b6b68')

def home(request):
	return render_to_response('home.html',{} ,RequestContext(request))

def profile(request,user_id,user_number,privacy):
	import datetime
	curr_user = User.objects.get(id = user_id)
	all_user_devices = Device.objects.filter(user = curr_user)
	TipIndex = Tip.objects.count() - 1
	randomRecord = random.randint(0, TipIndex)
	tipOfTheDay = Tip.objects.all()[int(randomRecord)]
	total_usage = 0
	deviceUsage = 0
	usages = []
	userLvl = curr_user.level
	userMoney = curr_user.money
	userBadges = curr_user.badge.all()
	for device in all_user_devices:
		newUsage = Usage.objects.filter(device = device)
		for usage in newUsage:
			deviceUsage = deviceUsage + int(usage.value)	
		if deviceUsage != 0:
			usages.append(int(deviceUsage))
		else:
			usages.append(0)
		total_usage = total_usage + deviceUsage
		deviceUsage = 0

	for counter in range(len(usages)):
		usages[counter] = int(((float(usages[counter] / float(total_usage) )) * 100))
	devices_and_usage = {}
	devices_and_usage = zip(all_user_devices , usages)
	# if(request.GET['privacy'] == 'high' and len(usages) > 0 ):
	# 	p['private-SaveE'+user_number].trigger('profile_chart',{'devices_and_usage':devices_and_usage,'usagesLength':len(usages)})		
	return render_to_response('profile.html',{'user_id':user_id,'tipOfTheDay':tipOfTheDay ,'privacyStatus':privacy,'userLvl':userLvl,'userMoney':userMoney ,'userBadges':userBadges, 'userNumber':user_number , 'devices':all_user_devices , 'total_usage':total_usage , 'usages':usages ,'usagesLength':len(usages), 'devices_and_usage' : devices_and_usage},RequestContext(request))
		


def leaderBoard(request):
	curr_user = User.objects.get(id = request.GET['userID'])
	all_users = User.objects.all().order_by('-level')
	rank=0
	for user in all_users:
		if user.id != curr_user.id:
			rank = rank + 1
		else:
			rank = rank + 1
			break
	p['private-SaveE'+request.GET['userNumberInt']].trigger('yourRank',{'rank':rank})
	return render_to_response('leader_board.html',{'userID':curr_user.id,'userNumber':request.GET['userNumber'],'all_users':all_users},RequestContext(request))

@csrf_exempt
def authenti(request):
	channel_name = request.REQUEST['channel_name']
	socket_id = request.REQUEST['socket_id']
	p = pusher.Pusher(app_id='42846', key='35bf6495b4677801c17e', secret='7ef9690d99684e1b6b68')
	auth = p[channel_name].authenticate(socket_id)
	json_data = simplejson.dumps(auth)
	return HttpResponse(json_data, mimetype="application/json")

def charts(request):
	curr_user = User.objects.get(id = request.GET['userID'])
	all_user_devices = Device.objects.filter(user = curr_user)
	total_usage = 0
	deviceUsage = 0
	usages = []
	months=[]
	years=[]
	for device in all_user_devices:
		newUsage = Usage.objects.filter(device = device)
		for usage in newUsage:
			deviceUsage = deviceUsage + int(usage.value)
			if usage.date.strftime('%B') not in months:
				months.append(usage.date.strftime('%B'))
			if usage.date.year not in years:
				years.append(usage.date.year)
		total_usage = total_usage + deviceUsage
		if total_usage != 0:
			usages.append(int(deviceUsage))
		else:
			usages.append(0)
		deviceUsage = 0

	for counter in range(len(usages)):
		usages[counter] = ((float(usages[counter] / float(total_usage) )) * 100)
	p['private-SaveE'+request.GET['userNo']].trigger('dates',{'months':months,'years':years})
	devices_and_usage = {}
	devices_and_usage = zip(all_user_devices , usages)
	return render_to_response('preCharts.html',{'devices':all_user_devices ,'devices_and_usage' : devices_and_usage ,'userNumber':request.GET['userNumber'] ,'userID':curr_user.id ,'total_usage':float(total_usage)} ,RequestContext(request))

def viewCharts(request):
	privacy = request.GET['privacyStatus']
	FromMonth = request.GET['FromMonth']
	ToMonth = request.GET['ToMonth']
	FromYear = request.GET['FromYear']
	ToYear = request.GET['ToYear']
	FromDay = request.GET['FromDay']
	ToDay = request.GET['ToDay']
	FromDate = datetime.strptime(FromDay+" "+FromMonth+" "+FromYear, '%d %B %Y')
	ToDate = datetime.strptime(ToDay+" "+ToMonth+" "+ToYear, '%d %B %Y')
	curr_user = User.objects.get(id = request.GET['userID'])
	all_user_devices = Device.objects.filter(user = curr_user)
	total_usage = 0
	deviceUsage = 0
	MonthlydeviceUsage = 0
	usages=[]
	monthsChosenString =[]
	monthsChosenInt =[]
	devicesMonthlyUsage = [[] for _ in range(12)]
	monthAndYear = []

	#####Filtering the usages by Device within the period defined by the user######
	for device in all_user_devices:
		newUsage = Usage.objects.filter(device = device , date__gte=FromYear+"-"+FromDate.strftime('%m')+"-"+FromDay+" "+"00:00:00" , date__lte=ToYear+"-"+ToDate.strftime('%m')+"-"+ToDay+" "+"23:59:59")
		for usage in newUsage:
			deviceUsage = deviceUsage + int(usage.value)
		if deviceUsage != 0:
			usages.append(int(deviceUsage))
		else:
			usages.append(0)
		total_usage = total_usage + deviceUsage
		deviceUsage = 0

	for counter in range(len(usages)):
		if total_usage != 0:
			usages[counter] = ((float(usages[counter] / float(total_usage) )) * 100)

	#####Filtering the usages by Month within the period defined by the user######
	if int(FromDate.strftime('%m')) == int(ToDate.strftime('%m')) :
		monthsChosenString.append(getMonthName(int(FromDate.strftime('%m')))) 
		monthsChosenInt.append(int(FromDate.strftime('%m'))) 
	else:
		for month in range(int(FromDate.strftime('%m')),int(ToDate.strftime('%m'))+1):
			monthsChosenString.append(getMonthName(month))
			monthsChosenInt.append(month)

	devicesName = []
	for counter in range(len(monthsChosenInt)):
		for device in all_user_devices:
			devicesName.append(device.name)
			MonthlyUsage = Usage.objects.filter(device = device , date__gte=FromYear+"-"+str(monthsChosenInt[counter])+"-"+'1'+" "+"00:00:00" , date__lte=ToYear+"-"+str(monthsChosenInt[counter])+"-"+getLastDayInMonth(monthsChosenInt[counter])+" "+"23:59:59")
			for usage in MonthlyUsage:
				MonthlydeviceUsage = MonthlydeviceUsage + int(usage.value)
			if MonthlydeviceUsage != 0:
				devicesMonthlyUsage[counter].append(int(MonthlydeviceUsage))
			else:
				devicesMonthlyUsage[counter].append(0)
			MonthlydeviceUsage = 0

	MonthsloopCounter = [i for i in range(len(monthsChosenString))]
	devicesLoopCounter = [i for i in range(len(all_user_devices))]
	devicesMonthlyUsage = json.dumps(devicesMonthlyUsage)
	devices_and_usage = {}
	devices_and_usage = zip(all_user_devices , usages)
	# print devices_and_usage
	return render_to_response('viewCharts.html',{'devices':all_user_devices ,'privacyStatus':privacy,'usagesLength':len(usages),'devicesLoopCounter':devicesLoopCounter,'devicesName':simplejson.dumps(devicesName),'MonthsloopCounter':MonthsloopCounter ,'devicesMonthlyUsage':devicesMonthlyUsage,'monthsChosenString':simplejson.dumps(monthsChosenString),'devices_and_usage' : devices_and_usage ,'userNumber':request.GET['userNumber'] ,'userID':request.GET['userID'] ,'total_usage':float(total_usage)} ,RequestContext(request))

def getLastDayInMonth(month):
	return {
		1:'31',
        2:'28',
        3:'31',
        4:'30',
        5:'May',
        6:'30',
        7:'31',
        8:'31',
        9:'30',
        10:'31',
        11:'30',
        12:'31',
	}.get(month)

def getMonthName(month):
    return {
        1: 'January',
        2:'February',
        3:'March',
        4:'April',
        5:'May',
        6:'June',
        7:'July',
        8:'August',
        9:'September',
        10:'October',
        11:'November',
        12:'December',
    }.get(month)

def UserRegistration(request):
	import datetime
	if request.method == 'POST':
		privacy = request.POST['privacyStatus']
		data = request.POST.copy()
		data['date_joined'] = datetime.date.today()
		data['last_login'] = datetime.datetime.now()
		form = RegistrationForm(data)
		if form.is_valid():
			user = User.objects.create(username=form.cleaned_data['username'], email = form.cleaned_data['email'])
			user.set_password(form.cleaned_data['password'])
			user.save()
			user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
			login(request, user)
			userID = str(request.user.id)
			if(request.POST['userNumber'] == "one"):
				userNumber = "one"
				return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/'+privacy+'/')

			elif(request.POST['userNumber'] == "two"):
				userNumber = "two"
				return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/'+privacy+'/')

			elif(request.POST['userNumber'] == "three"):
				userNumber = "three"
				return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/'+privacy+'/')

			elif(request.POST['userNumber'] == "four"):
				userNumber = "four"
				return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/'+privacy+'/')
		else:
			if(request.POST['userNumber'] == "one"):
				userNumber = "one"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('register.html', context, context_instance=RequestContext(request))

			elif(request.POST['userNumber'] == "two"):
				userNumber = "two"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('register.html', context, context_instance=RequestContext(request))

			elif(request.POST['userNumber'] == "three"):
				userNumber = "three"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('register.html', context, context_instance=RequestContext(request))

			elif(request.POST['userNumber'] == "four"):
				userNumber = "four"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('register.html', context, context_instance=RequestContext(request))
	else:
		if(request.GET['userNumber'] == "one"):
			form = RegistrationForm(prefix="user_one")
			userNumber = "one"
			context = {'form': form , 'userNumber' : userNumber}
			return render_to_response('register.html', context, context_instance=RequestContext(request))

		elif(request.GET['userNumber'] == "two"):
			form = RegistrationForm(prefix="user_two")
			userNumber = "two"
			context = {'form': form , 'userNumber' : userNumber}
			return render_to_response('register.html', context, context_instance=RequestContext(request))

		elif(request.GET['userNumber'] == "three"):
			form = RegistrationForm(prefix="user_three")
			userNumber = "three"
			context = {'form': form , 'userNumber' : userNumber}
			return render_to_response('register.html', context, context_instance=RequestContext(request))

		elif(request.GET['userNumber'] == "four"):
			form = RegistrationForm(prefix="user_four")
			userNumber = "four"
			context = {'form': form , 'userNumber' : userNumber}
			return render_to_response('register.html', context, context_instance=RequestContext(request))

def LoginRequest(request):
	# if request.user.is_authenticated():
	# 	return HttpResponseRedirect('/profile/')
	if request.method == 'POST':
		privacy = request.POST['privacyStatus']
		form = LoginForm(request.POST)
		if form.is_valid():
			username = form.cleaned_data['username']
			password = form.cleaned_data['password']
			user = authenticate(username=username, password=password)
			if user is not None:
				login(request, user)
				userID = str(request.user.id)
				if(request.POST['userNumber'] == "one"):
					userNumber = "one"
					return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/'+privacy+'/')

				elif(request.POST['userNumber'] == "two"):
					userNumber = "two"
					return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/'+privacy+'/')

				elif(request.POST['userNumber'] == "three"):
					userNumber = "three"
					return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/'+privacy+'/')

				elif(request.POST['userNumber'] == "four"):
					userNumber = "four"
					return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/'+privacy+'/')
			else:
				# p = pusher.Pusher(app_id='42846', key='35bf6495b4677801c17e', secret='7ef9690d99684e1b6b68')
				
				if(request.POST['userNumber'] == "one"):
					p['private-SaveE1'].trigger('loginStatus',{})
					userNumber = "one"
					context = {'form': form , 'userNumber' : userNumber}
					return render_to_response('loginFailed.html', context, context_instance=RequestContext(request))

				elif(request.POST['userNumber'] == "two"):
					p['private-SaveE2'].trigger('loginStatus',{})
					userNumber = "two"
					context = {'form': form , 'userNumber' : userNumber}
					return render_to_response('loginFailed.html', context, context_instance=RequestContext(request))

				elif(request.POST['userNumber'] == "three"):
					p['private-SaveE3'].trigger('loginStatus',{})
					userNumber = "three"
					context = {'form': form , 'userNumber' : userNumber}
					return render_to_response('loginFailed.html', context, context_instance=RequestContext(request))

				elif(request.POST['userNumber'] == "four"):
					p['private-SaveE4'].trigger('loginStatus',{})
					userNumber = "four"
					context = {'form': form , 'userNumber' : userNumber}
					return render_to_response('loginFailed.html', context, context_instance=RequestContext(request))
		else:
			if(request.POST['userNumber'] == "one"):
				p['private-SaveE1'].trigger('loginStatus',{})
				userNumber = "one"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('loginFailed.html', context, context_instance=RequestContext(request))

			elif(request.POST['userNumber'] == "two"):
				p['private-SaveE2'].trigger('loginStatus',{})
				userNumber = "two"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('loginFailed.html', context, context_instance=RequestContext(request))

			elif(request.POST['userNumber'] == "three"):
				p['private-SaveE3'].trigger('loginStatus',{})
				userNumber = "three"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('loginFailed.html', context, context_instance=RequestContext(request))

			elif(request.POST['userNumber'] == "four"):
				p['private-SaveE4'].trigger('loginStatus',{})
				userNumber = "four"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('loginFailed.html', context, context_instance=RequestContext(request))
	else:
		try:
			#handling which user take which template
			if(request.GET['userNumber'] == "1"):
				form = LoginForm(prefix="user_one")
				userNumber = "one"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('login.html', context, context_instance=RequestContext(request))

			elif(request.GET['userNumber'] == "2"):
				form = LoginForm(prefix="user_two")
				userNumber = "two"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('login.html', context, context_instance=RequestContext(request))

			elif(request.GET['userNumber'] == "3"):
				form = LoginForm(prefix="user_three")
				userNumber = "three"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('login.html', context, context_instance=RequestContext(request))
			elif(request.GET['userNumber'] == "4"):
				form = LoginForm(prefix="user_four")
				userNumber = "four"
				context = {'form': form , 'userNumber' : userNumber}
				return render_to_response('login.html', context, context_instance=RequestContext(request))
			
		except:
			form = LoginForm()
			context = {'form': form}
			return render_to_response('login.html', context, context_instance=RequestContext(request))

# def add_device(request):
# 	if request.method == 'POST':
# 		data = request.POST.copy()
# 		form = AddDeviceForm(data)
# 		user = User.objects.get(id = request.POST['userID'])
# 		userID = str(user.id)
# 		if form.is_valid():
# 			device = Device.objects.create(name=form.cleaned_data['name'], user=user)
# 			device.save()
# 			if(request.POST['userNumber'] == "one"):
# 				userNumber = "one"
# 				return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/')

# 			elif(request.POST['userNumber'] == "two"):
# 				userNumber = "two"
# 				return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/')

# 			elif(request.POST['userNumber'] == "three"):
# 				userNumber = "three"
# 				return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/')

# 			elif(request.POST['userNumber'] == "four"):
# 				userNumber = "four"
# 				return HttpResponseRedirect('/profile/'+userID+'/'+userNumber+'/')
# 		else:
# 			if(request.GET['userNumber'] == "one"):
# 				userNumber = "one"
# 				context = {'form': form ,'userID':request.POST['userID'],'userNumber' : userNumber}
# 				return render_to_response('add_device.html', context, context_instance=RequestContext(request))

# 			elif(request.GET['userNumber'] == "two"):
# 				userNumber = "two"
# 				context = {'form': form , 'userID':request.POST['userID'],'userNumber' : userNumber}
# 				return render_to_response('add_device.html', context, context_instance=RequestContext(request))

# 			elif(request.GET['userNumber'] == "three"):
# 				userNumber = "three"
# 				context = {'form': form , 'userID':request.POST['userID'],'userNumber' : userNumber}
# 				return render_to_response('add_device.html', context, context_instance=RequestContext(request))

# 			elif(request.GET['userNumber'] == "four"):
# 				userNumber = "four"
# 				context = {'form': form , 'userID':request.POST['userID'],'userNumber' : userNumber}
# 				return render_to_response('add_device.html', context, context_instance=RequestContext(request))
# 	else:
# 		if(request.GET['userNumber'] == "one"):
# 			form = AddDeviceForm(prefix="user_one")
# 			userNumber = "one"
# 			context = {'form': form , 'userID':request.GET['userID'], 'userNumber' : userNumber}
# 			return render_to_response('add_device.html', context, context_instance=RequestContext(request))

# 		elif(request.GET['userNumber'] == "two"):
# 			form = AddDeviceForm(prefix="user_two")
# 			userNumber = "two"
# 			context = {'form': form , 'userID':request.GET['userID'],'userNumber' : userNumber}
# 			return render_to_response('add_device.html', context, context_instance=RequestContext(request))

# 		elif(request.GET['userNumber'] == "three"):
# 			form = AddDeviceForm(prefix="user_three")
# 			userNumber = "three"
# 			context = {'form': form ,'userID':request.GET['userID'], 'userNumber' : userNumber}
# 			return render_to_response('add_device.html', context, context_instance=RequestContext(request))

# 		elif(request.GET['userNumber'] == "four"):
# 			form = AddDeviceForm(prefix="user_four")
# 			userNumber = "four"
# 			context = {'form': form ,'userID':request.GET['userID'], 'userNumber' : userNumber}
# 			return render_to_response('add_device.html', context, context_instance=RequestContext(request))

def LogoutRequest(request):
	print 'test 1'
	print request.POST['userID']
	user = User.objects.get(id=request.POST['userID'])
	[s.delete() for s in Session.objects.all() if s.get_decoded().get('_auth_user_id') == user.id]
	context = {}
	return render_to_response('home.html', context, context_instance=RequestContext(request))