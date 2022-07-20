from django.urls import path
from . import views


urlpatterns = [
    path('', views.view_note,name='view_notes'),
    path('add_note/',views.add_note,name='add_note'),
    path('add_note_in_db/',views.add_note_in_db,name='add_note_in_db'),
    path('status_is_done/?P<int:id>/', views.status_is_done,name='status_is_done'),
    path('status_is_not_done/?P<int:id>/', views.status_is_not_done,name='status_is_not_done'),
    path('delete/?P<int:id>/',views.delete,name='delete'),
    path('update/?P<int:id>/',views.update,name='update'),
    path('update_insert/',views.update_insert,name='update_insert'),
    path('serch/', views.serch,name='serch'),
    path('type/', views.type,name='type'),



]