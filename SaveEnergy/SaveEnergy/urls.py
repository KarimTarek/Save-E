from django.conf.urls import patterns, include, url
# from haystack.views import SearchView

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from django.views.generic.simple import redirect_to
from django.conf import settings
admin.autodiscover()

urlpatterns = patterns('',
	# Examples:
	# url(r'^$', 'SaveEnergy.views.home', name='home'),    
	url(r'^$', 'EnergySaving.views.home'),
	url(r'^auth/', 'EnergySaving.views.authenti'),
	url(r'^register/', 'EnergySaving.views.UserRegistration'),
	url(r'^login/', 'EnergySaving.views.LoginRequest'),
	url(r'^charts/', 'EnergySaving.views.charts'),
	url(r'^viewCharts/', 'EnergySaving.views.viewCharts'),
	# url(r'^add_device/', 'EnergySaving.views.add_device'),
	url(r'^logout/', 'EnergySaving.views.LogoutRequest'),
	url(r'^profile/(?P<user_id>\d+)/(?P<user_number>[\w\-]+)/', 'EnergySaving.views.profile'),
	# url(r'^SaveEnergy/', include('SaveEnergy.foo.urls')),

	# Uncomment the admin/doc line below to enable admin documentation:
	# url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

	# Uncomment the next line to enable the admin:
	url(r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^static/(?P<path>.*)$', 'django.views.static.serve',
         {'document_root': settings.STATICFILES_DIRS[0], 'show_indexes': True}),
    )
