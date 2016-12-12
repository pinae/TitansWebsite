from __future__ import division, print_function, unicode_literals
from TitansWebsite.project_path import project_path
from django.http import HttpResponse


def home(request):
    with open(project_path("common_static/index.html"), 'r') as index_html_file:
        return HttpResponse(index_html_file.read(), content_type='text/html')
