from django.contrib import admin
from EnergySaving.models import User,Device,Usage,Badge,Tip

admin.site.register(User)
admin.site.register(Device)
admin.site.register(Usage)
admin.site.register(Badge)
admin.site.register(Tip)