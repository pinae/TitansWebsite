from django.db import models
from django.contrib.auth.models import User


class Page(models.Model):
    path = models.CharField('path', max_length=128, unique=True, primary_key=True)
    created_at = models.DateTimeField(auto_now=True)
    modified_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User)
    text = models.TextField()

    def __str__(self):
        return "<Page: " + self.path + " Author: " + self.author.username + " Text: " + self.text[:50] + ">"
