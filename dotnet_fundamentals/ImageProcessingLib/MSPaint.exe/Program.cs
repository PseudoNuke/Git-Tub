using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSPaint
{
    class Program
    {
        static void Main(string[] args)
        {
            //ImageProcessingLib.ImageProcessor obj = new ImageProcessingLib.ImageProcessor();
            //Console.WriteLine(obj.ProcessImage("testcontent"));
            Console.WriteLine("Enter Image Processor Version - Options 1.0.0.0 or 2.0.0.0");
            string versionNumber = Console.ReadLine();

            string dllPath =  @$"C:\Users\320104254\source\repos\dotnet_fundamentals\ImageProcessingLib\ImageProcessingLib\bin\Debug\{versionNumber}"


            System.Reflection.Assembly _dllRef = System.Reflection.Assembly.LoadFile(dllPath);

            System.Type _classRef = dllRef.GetType("ImageProcessorLib.ImageProcessor");

            Object obj = System.Activator.CreateInstance(_classRef);

            System.Reflection.MethodInfo _methodRef =  _classRef.GetMethod("Process");

            string result = _methodRef.Invoke(obj, new Object[] { "test image" });





        }
    }
}
