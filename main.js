

 //  var num1 = 30;
    //  var num2 = 20;
    //  var sum  = num1+num2;
    //  var sub  = num1-num2;
    //  document.write ("Addition " + sum + "<br/><br/>");
    //  document.write("Subtraction " + sub);

      
    document.write("Arithmatic Calculations :" + "<br/><br/>");

    var num1 = prompt("Enter your First Number : ");
    var num2 = prompt ("Enter your Second Number : ");
    
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);

    var  sum, sub, mul, Div, rem;

     var sum  = num1+num2;
    document.write (num1 + " + " + num2 + " = " + sum + "<br/><br/>");


    var sub  = num1-num2;
    document.write (num1 + " - " + num2 + " = " + sub + "<br/><br/>");

    var mul = num1*num2;
    document.write (num1 + " * " + num2 + " = " + mul + "<br/><br/>");

    
    var div = num1/num2;
    document.write (num1 + " / " + num2 + " = " + div + "<br/><br/>");

    
    var rem = num1 % num2;
    document.write (num1 + " % " + num2 + " = " + rem + "<br/><br/><br/><br/>");




    //Shape Area Calculate
    document.write('Shape Area Calculate : ' + '<br/><br/>');

    var base = parseFloat (prompt('Enter your base ='))
    var height = parseFloat(prompt('Enter your height = '));

    var Area = base * height;
    document.write('RectangleArea = ' + Area + '<br/><br/>') ;

    var Area = (base * height) / 2 ;
    document.write('TriangleArea = ' + Area + '<br/><br/>');