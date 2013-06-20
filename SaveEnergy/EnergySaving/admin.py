from django.contrib import admin
from EnergySaving.models import User,Device,Usage

admin.site.register(User)
admin.site.register(Device)
admin.site.register(Usage)