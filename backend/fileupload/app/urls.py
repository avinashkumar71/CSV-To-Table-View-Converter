from django.urls import path
from .views import UploadFileView
urlpatterns = [
    path('',UploadFileView.as_view()),
    path('<int:pk>',UploadFileView.as_view()),
]