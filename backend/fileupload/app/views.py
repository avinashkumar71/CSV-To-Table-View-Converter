from .models import UploadFileModel
from .serializer import UploadFileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import pandas as pd
# Create your views here.


class UploadFileView(APIView):
    def get(self,request,pk=None):
        if pk is None:
            data = UploadFileModel.objects.all()
            serializer = UploadFileSerializer(data,many=True)
            return Response(serializer.data)
        else:
            try:
                data = UploadFileModel.objects.get(id=pk)
                print(data.filename)
            except:
                return Response({'msg':'error'})
            else:
                df = pd.read_csv(data.filename)
                array = []
                for i in range(0,len(df)):
                    dictionary = {}
                    for col in df.columns:
                        dictionary[col] = df[col][i]
                    array.append(dictionary)
                return Response({'table':array})

    def post(self,request):
        serializer = UploadFileSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data inserted'})
        else:
            return Response({'msg':'data not inserted'})

