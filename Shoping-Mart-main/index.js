
        "use strict"
        var categories = ["Select a Book Category","Action and Adventures","Classic","Comic Book","Detective and Mystery","Fantasy","Historical Fiction","Horror"];
        var Action = ["Select Action and Adventure Book","Tresure Island","Tarzan of the Apes","The Three Musketeers","Journey to the Center of the Earth"];
        var Classic = ["Select Classic Book","Pride and Prejudice","To Kill a Mockingbird","The Great Gatsby","One Hundred Years of Solitude","In Cold Blood"];
        var Comic = ["Select Comic Book","Nimona","Watchmen","Maus: A Survivors Tale","Daytripper"];
        
        var Detective=["Select Dectetive Book","And Then There Were None"];
        var Fantasy=["Select Fantasy Book","Alice’s Adventures in Wonderland"];
        var Historical=["Select History Book","All the Light We Cannot See"];
        var Horror=["Select Horror Book","Pet Sematary"] 
        var data = [
            {
                Name : "Tresure Island",
                Price :"300",
                Photo : "./images/Tresure_island.jpg"
            },
            {
                Name :"Tarzan of the Apes",
                Price :"250",
                Photo : "./images/Tarzan of the Apes.jpg"
            },
            {
                Name :"The Three Musketeers by Alexandre Dumas",
                Price :"270",
                Photo : "./images/Three_Mosquiters.jpg"
            },    
            {
                Name :"Journey to the Center of the Earth by Jules Verne",
                Price :"400",
                Photo : "./images/Journey_to_the_center_of _the _earth.jpg"
            },
            {
                Name :"Pride and Prejudice",
                Price :"365",
                Photo : "./images/pride.jpg"
            },
            {
                Name :"To Kill a Mockingbird",
                Price :"468",
                Photo : "./images/to kill.jpg"
            },
            {
                Name :"The Great Gatsby",
                Price :"520",
                Photo : "./images/the great.jpg"
            },
            {
                Name :"One Hundred Years of Solitude",
                Price :"230",
                Photo : "./images/one hundred.jpg"
            },
            {
                Name :"In Cold Blood",
                Price :"264",
                Photo : "./images/in cold.jpg"
            },
            {
                Name :"Nimona",
                Price :"259",
                Photo : "./images/nimona.webp"
            },
            {
                Name :"Watchmen",
                Price :"674",
                Photo : "./images/watchmen.webp"
            },
            {
                Name :"Maus: A Survivors Tale",
                Price :"392",
                Photo : "./images/maus.webp"
            },
            {
                Name :"Daytripper",
                Price :"424",
                Photo : "./images/daytripper.webp"
            },
            {
                Name :"And Then There Were None",
                Price :"393",
                Photo : "./images/and then.jpg"
            },
            {
                Name :"Alice’s Adventures in Wonderland",
                Price :"570",
                Photo : "./images/Alice’s Adventures in Wonderland.jpg"
            },
            {
                Name :"All the Light We Cannot See",
                Price :"454",
                Photo : "./images/all the light.jpg"
            },
            {
                Name :"Pet Sematary",
                Price :"424",
                Photo : "./images/Pet Sematary.jpg"

            }
            
        ]
    
        function bodyLoad(){
            var lstCategory = document.getElementById("lstCategory");
            for(var item of categories){
                var option = document.createElement("option");
                option.text = item;
                option.value = item;
                lstCategory.appendChild(option);
            }
        }
        var products = [];
        function loadProducts(){
            var lstProducts = document.getElementById("lstProducts");
            lstProducts.innerHTML="";
            for( var item of products){
                var option = document.createElement("option");
                option.text = item;
                option.value = item;
                lstProducts.appendChild(option);
            }

        }
        function selectedCategoryChanged(){
            var ProdCategory = document.getElementById("lstCategory").value;
            switch (ProdCategory){
                case "Action and Adventures":
                    products = Action;
                    loadProducts();
                    break;
                case "Classic":
                    products = Classic;
                    loadProducts();
                    break;
                case "Comic Book":
                    products = Comic;
                    loadProducts();
                    break;
                case "Detective and Mystery":
                    products = Detective;
                    loadProducts();
                    break;
                case "Fantasy":
                    products = Fantasy;
                    loadProducts();
                    break;    
                case "Historical Fiction":
                    products = Historical;
                    loadProducts();
                    break;
                case "Horror":
                    products = Horror;
                    loadProducts();
                    break;    
                default:
                    products = ["Select a Product"];
                    loadProducts();
                    break;     
            }
            
        }
        var searchedProduct;

        function selectedProductChanged() {
            var productName = document.getElementById("lstProducts").value;
                searchedProduct = data.find(function (item) {
                return item.Name == productName;
            })
            document.getElementById("prodName").innerHTML = searchedProduct.Name;
            document.getElementById("prodPrice").innerHTML = "&#8377;" + searchedProduct.Price;
            document.getElementById("prodPhoto").src = searchedProduct.Photo;
        }
        var cartItems = [];

        function GetCartCount() {
            document.getElementById("cartCount").innerHTML = cartItems.length;
        }

        function AddtoCartClick() {
            cartItems.push(searchedProduct);
            GetCartCount();
            alert("Item Added to Cart");
        }

        function AddCartItemsToTable() {
            var tbody = document.getElementById("tbody");
            tbody.innerHTML = "";
            for (var item of cartItems) {
                var tr = document.createElement("tr");
                var tdName = document.createElement("td");
                var tdPrice = document.createElement("td");
                var tdPhoto = document.createElement("td");

                tdName.innerHTML = item.Name;
                tdPrice.innerHTML = item.Price;

                var img = document.createElement("img");
                img.src = item.Photo;
                img.height = "50";
                img.width = "50";

                tdPhoto.appendChild(img);

                tr.appendChild(tdName);
                tr.appendChild(tdPrice);
                tr.appendChild(tdPhoto);

                tbody.appendChild(tr);

            }
        }
