from django.http import HttpResponse
import json
from page.models import Page


def get_page(request, path):
    try:
        page = Page.objects.get(path=path)
        author_name = page.author.first_name + page.author.last_name
        if not author_name:
            author_name = page.author.username
        return HttpResponse(json.dumps({
            'author': author_name,
            'text': page.text,
            'created_at': page.created_at,
            'modified_at': page.modified_at
        }), content_type='application/json')
    except Page.DoesNotExist:
        try:
            author_name = request.user.first_name + request.user.last_name
            if not author_name:
                author_name = request.user.username
            return HttpResponse(json.dumps({
                'author': author_name,
                'text': ''
            }), content_type='application/json')
        except AttributeError:
            return HttpResponse(json.dumps({
                'error': 'The page ' + path + ' does not exist.'
            }), status=401, content_type='application/json')
