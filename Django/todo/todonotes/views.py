from django.shortcuts import redirect, render
from django.utils import timezone
from todonotes.models import Notes
from django.db.models import Q
def view_note(request):
    notes= Notes.objects.all()
    return render(request, 'view.html', {'notes':notes})



def add_note(request):
    return render(request, 'add_note.html', {})

def add_note_in_db(request):
    from django.contrib.auth.models import User
    me = User.objects.get(username='spatil1')
    note=Notes()
    note.author=me
    note.note_title=request.POST.get('note_title')
    note.text=request.POST.get('text')
    note.created_date=timezone.now()
    note.is_done=False
    note.save()
    return redirect(view_note)


def status_is_done(request,id):

    note=Notes.objects.filter(id=id)
    note.update(is_done=True)
    return redirect(view_note)

def status_is_not_done(request,id):

    note=Notes.objects.filter(id=id)
    note.update(is_done=False)
    return redirect(view_note)

def update(request,id):
    notes= Notes.objects.filter(id=id)
    return render(request, 'update.html', {'notes':notes})

def delete(request,id):
    Notes.objects.filter(id=id).delete()
    return redirect(view_note)

def update_insert(request):
    Notes.objects.filter(id=request.POST.get('id')).update(note_title=request.POST.get('note_title'),text=request.POST.get('text'),created_date=timezone.now())
    return redirect(view_note)

def serch(request):
    note=Notes.objects.filter(Q(note_title__contains=request.POST.get('serch')) | Q(text__contains=request.POST.get('serch')))
    return render(request, 'view.html', {'notes':note}) 

def type(request):
    x=request.POST.get('type')
    if x=='0':
        return redirect(view_note)
    if x=='1':
        notes=Notes.objects.filter(is_done=False)
    if x=='2':
        notes=Notes.objects.filter(is_done=True)
    return render(request, 'view.html', {'notes':notes}) 