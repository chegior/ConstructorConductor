//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.


  //code here

  function reverse(){
    var string = this;
    var arr = [];
    var newArr = [];
    arr = string.split(' ');
    //console.log('arr', arr);
    for( var i = arr.length-1; i > 0; i--){
      newArr.push(arr[i]);
    }
    string = newArr.join(' ');
    return string;
  }

String.prototype.reverse = reverse;
