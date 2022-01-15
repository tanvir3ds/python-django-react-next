from .views import *
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('category', CatagoryViewset, basename="CatagoryViewset")


#import views


urlpatterns = [
    path("", include(router.urls)),
    path("product/", ProductView.as_view(), name="product"),
    path("product/<int:id>/", ProductView.as_view(), name="product"),
    path("image-slider/", SliderImage.as_view(), name="product-image"),
    path("product-category/", ProductCategory.as_view(), name="product-category"),

    path("profile/", ProfileView.as_view(), name="profile"),

]
