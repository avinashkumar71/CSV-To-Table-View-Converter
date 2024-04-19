from django.db import models

# Create your models here.

class UploadFileModel(models.Model):
    filename = models.FileField(upload_to='')

    def __str__(self):
        return str(self.filename)
