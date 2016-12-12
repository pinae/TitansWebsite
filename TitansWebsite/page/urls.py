from django.conf.urls import url
from page.views import *

urlpatterns = [
    url(r'^get_page/(?P<path>\S*)$', get_page, name="get_page"),
]
