from django.contrib import admin
from EnergySaving.models import User,Device,Usage,Badge

admin.site.register(User)
admin.site.register(Device)
admin.site.register(Usage)
admin.site.register(Badge)