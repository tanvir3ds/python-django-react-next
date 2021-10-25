from .views import *
from django.urls import path, include
from rest_framework import routers

# import staic file from setting
from django.conf import settings
from django.conf.urls.static import static
router = routers.DefaultRouter()


#import views


urlpatterns = [
    path("", include(router.urls)),
    path("product/", ProductView.as_view(), name="product"),

]
urlpatterns = urlpatterns + \
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
