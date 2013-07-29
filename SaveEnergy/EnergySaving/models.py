from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User,UserManager
from time import *

# Create your models here.

class Tip(models.Model):
    text = models.CharField(max_length=500)
    def __unicode__(self):
        return self.text
        
class Device(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User)

    def __unicode__(self):
        return self.user.username +" "+self.name

class Badge(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="badges/")

    def __unicode__(self):
        return self.name


class User(User):
    pass
    money = models.CharField(max_length=100,default='200')
    badge = models.ManyToManyField(Badge,null=True,blank=True)
    level = models.CharField(max_length=100,default='1')
    def __unicode__(self):
        return self.username


class Usage(models.Model):
    value = models.CharField(max_length=200)
    device = models.ForeignKey(Device , related_name='UsageS Device')
    date = models.DateTimeField()

    def __unicode__(self):
        return self.device.user.username+" "+self.device.name+" "+self.value

    def save(self, *args, **kwargs):
        if not self.pk:
            user = User.objects.get(device = self.device)
            print user.username
            newMoney = int(user.money) - (int(self.value)/2)
            userMoney = 0
            print newMoney
            ##checking if it is a new month or the same one inorder to add to the user the new amount of money
            print self.date.month
            print self.date.year
            monthCheck = Usage.objects.filter(date__month=self.date.month , date__year=self.date.year)
            print monthCheck
            if monthCheck.count() == 0 and Usage.objects.all().count() != 0:
                monthlyMoney = 200
                user.money = str(newMoney + monthlyMoney)
                userMoney = int(user.money)
            else:
                user.money = newMoney
                userMoney = int(user.money)

            if userMoney >= 200:
                    badge = Badge.objects.get(name='Rookie')
                    if badge not in user.badge.all():
                        user.badge.add(badge)

            if userMoney >= 300:
                badge = Badge.objects.get(name='Champion')
                if badge not in user.badge.all():
                    user.badge.add(badge)

            if userMoney >= 400:
                badge = Badge.objects.get(name='Planet Saver')
                if badge in user.badge.all():
                    user.badge.remove(badge)


            # if userMoney < 300:
            #     badge = Badge.objects.get(name='Champion')
            #     if badge in user.badge.all():
            #         user.badge.remove(badge)

            # if userMoney < 400:
            #     badge = Badge.objects.get(name='Planet Saver')
            #     if badge in user.badge.all():
            #         user.badge.remove(badge)



            if user.badge.all().count() >= 1:
                user.level = '2'
            
            if user.badge.all().count() >= 2:
                user.level = '3'

            if user.badge.all().count() >= 3:
                user.level = '4'

            # if user.badge.all().count() < 1:
            #     user.level = '1'
            
            # if user.badge.all().count() < 2:
            #     user.level = '2'

            # if user.badge.all().count() < 3:
            #     user.level = '3'

            user.save()
        super(Usage, self).save(*args, **kwargs)



class Tips(models.Model):
	tip = models.CharField(max_length=1000)
