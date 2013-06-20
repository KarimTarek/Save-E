from django.db import models
from django.contrib import admin
from django.contrib.auth.models import User,UserManager
from time import *

# Create your models here.

class Device(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User)

    def __unicode__(self):
        return self.name

class Usage(models.Model):
    value = models.CharField(max_length=200)
    device = models.ForeignKey(Device , related_name='UsageS Device')
    date = models.DateTimeField()

    def __unicode__(self):
        return self.device.user.username+" "+self.device.name+" "+self.value

class User(User):
    pass
    def __unicode__(self):
        return self.first_name +" "+ self.last_name

class Tips(models.Model):
	tip = models.CharField(max_length=1000)
