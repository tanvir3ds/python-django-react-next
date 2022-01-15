from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import views, viewsets, generics, mixins, viewsets
from .models import *
from .serializers import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
# Create your views here.


class ProductView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Product.objects.all().order_by("-id")
    serializer_class = ProductSerializers
    lookup_field = "id"

    def get(self, request, id=None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)


class SliderImage(generics.ListAPIView):
    queryset = SliderImage.objects.all()
    serializer_class = ImageSliderSerializers


class ProductCategory(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = ProductCategorySerializer


class CatagoryViewset(viewsets.ViewSet):
    def list(self, request):
        query = Category.objects.all()
        serializer = CatagorySerializer(query, many=True)
        # all_data = []
        # for cata in serializer.data:
        #     catagory_product = Product.objects.filter(category_id=cata['id'])
        #     catagory_product_serilazer = ProductSerializers(catagory_product,many=True)
        #     cata['category_product'] = catagory_product_serilazer.data
        #     all_data.append(cata)
        # return Response(all_data)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        query = Category.objects.get(id=pk)
        serializer = CatagorySerializer(query)
        data_data = serializer.data
        all_data = []
        catagory_product = Product.objects.filter(category_id=data_data['id'])
        catagory_product_serilazer = ProductSerializers(
            catagory_product, many=True)
        data_data['category_product'] = catagory_product_serilazer.data
        all_data.append(data_data)
        return Response(all_data)


class ProfileView(views.APIView):
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

    def get(self, request):
        try:
            query = Profile.objects.get(prouser=request.user)
            serializer = ProfileSerializers(query)
            response_message = {"error": False, "data": serializer.data}
        except:
            response_message = {"error": True, "message": "data is no found"}
        return Response(response_message)
