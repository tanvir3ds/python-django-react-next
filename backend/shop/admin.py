from django.contrib import admin
from .models import *

# Register your models here.


class ProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "prouser")


admin.site.register(Profile, ProfileAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", 'title', 'date')


admin.site.register(Category, CategoryAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ("id",  "title", "slug",  "price", "date")


admin.site.register(Product, ProductAdmin)


class CartAdmin(admin.ModelAdmin):
    list_display = ("id", "customer", "total", "complete", "date")


admin.site.register(Cart, CartAdmin)

admin.site.register(CartProduct)


class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "cart", "date")


admin.site.register(Order, OrderAdmin)
admin.site.register(SliderImage)
