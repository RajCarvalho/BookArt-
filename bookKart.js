var app=angular.module("bookArt",['ngRoute']);



app.config(function($routeProvider)
{
$routeProvider.when('/books',{
    templateUrl: "/view/books.html",
    controller:"bookListController",
})

.when('/kart',{
    templateUrl: "/view/kart.html",
    controller:"kartListController"
})
.when('/cc',{
    template:
     `
    <form >

    <h3>please Fill your Credit Card details</h3>
    <br>
    <input type="text" class="form-control" placeholder="credit card number." required><br>
    <input type="date" class="form-control"  required><br>
    <input type="text" class="form-control" placeholder="cvv."  required><br>
    <button class="btn btn-info"  >Done</button><br>

    <br>
</form>
    
    `

})
})

app.factory("bookService", function()
{
         var books=
                  [
        {
            imgUrl:"h.png",
            name:"Html",
            price:"120$",
            rating:"3.5",
            binding:"cardboard",
            publisher:"Marlabs",
            release:"1999"

        },
        {
            imgUrl:"js.png",
            name:"javascript",
            price:"219$",
            rating:"5",
            binding:"paperback",
            publisher:"Amazon",
            release:"2003"
        },
        {
            imgUrl:"b.jpg",
            name:"bootstrap",
            price:"188$",
            rating:"4",
            binding:"paperback",
            publisher:"curryon",
            release:"2006"
        }
        ,
        {
            imgUrl:"css.png",
            name:"Css",
            price:"107$",
            rating:"3",
            binding:"paperback",
            publisher:"linkedIn",
            release:"2001"
        }
        ,
        {
            imgUrl:"ajax.jpg",
            name:"Ajax",
            price:"138$",
            rating:"4",
            binding:"paperback",
            publisher:"marlabs",
            release:"1999"
        }
        ,
        {
            imgUrl:"json.png",
            name:"Json",
            price:"78$",
            rating:"3.5",
            binding:"paperback",
            publisher:"Fidelity",
            release:"2002"
        }
        ,
        {
            imgUrl:"a.jpg",
            name:"AngularJs",
            price:"288$",
            rating:"4.5",
            binding:"Cardback",
            publisher:"Walmart",
            release:"2011"
        }
        ,
        {
            imgUrl:"a2.jpg",
            name:"Angular 2",
            price:"388$",
            rating:"4.9",
            binding:"paperback",
            publisher:"Patel",
            release:"2016"
        }
        ,
        {
            imgUrl:"node.png",
            name:"NodeJs",
            price:"288$",
            rating:"4.2",
            binding:"paperback",
            publisher:"amazon",
            release:"2017"
        }
        ,
        {
            imgUrl:"mongo.png",
            name:"MongoDb",
            price:"155$$",
            rating:"3.8",
            binding:"paperback",
            publisher:"shop$stop",
            release:"2014"
        },
        
    ]

 
  return{

      getBooks : function()
      {
          return books;
      },
    
    
    
  }   

});


app.factory("kartService" , function()
{
console.log("hello world")
  var kart=[];

  return{
    

    getKart : function()
    {
        return kart;   
      
    },
   goToKart : function(x)
        {
        
            
            kart.push(x);
            

        },



  buy : function(x)
        {
      alert("thanks for buying book " +x.name +" your total is "+x.price)
        }
    }
})



app.controller("headerController",function($scope,$location)
{
    $scope.appDetails={
        title:"BookArt",
        tagline:"we have more then 1 million Books"
    }

    $scope.btn={};
    $scope.btn.isActive=function(path)
    {
        if(path==$location.path())
        {
            return true;
        }
        else{
            return false;
        }
    }
})

app.controller("bookListController",function($scope,bookService,kartService,$location)
{
   $scope.books=bookService.getBooks();
   console.log($scope.books)
     
   
   $scope.goToKart=function(x)
     {
         $location.path('/kart')
        kartService.goToKart(x);
           
     } 

    
})


app.controller("kartListController",function($scope,kartService,$location)
{

$scope.kart=kartService.getKart();




$scope.buy=function(x)
{
kartService.buy(x)
$location.path('/cc')
}
})