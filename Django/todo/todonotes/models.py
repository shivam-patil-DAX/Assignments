from django.db import models
from django.utils import timezone
from django.conf import settings

# Create your models here.


class Notes(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    note_title = models.CharField(max_length=200)
    text = models.TextField()
    is_done=models.BooleanField(default=False)
    created_date = models.DateTimeField(blank=True, null=True)



    def __str__(self):
        return self.note_title