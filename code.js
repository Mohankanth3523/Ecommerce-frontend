document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".spinner-wrapper").style.opacity = "0";
  setTimeout(function () {
    document.querySelector(".spinner-wrapper").style.display = "none";
  }, 2000);
});

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins&display=swap');
      #logo {
       
        border-radius: 50%; 
        border: 2px solid #333; 
        padding: 2px; 
        
    }
    
      .nav li a{
        color: #000 !important;
        
      }
      .dropdown-menu .dropdown-item{
        color: darkblue;
      }
      .dropdown-menu .dropdown-item a:hover{
        cursor: pointer;
        background-color: gold;
      }
       .navbar .navbar-brand{
        font-family: 'Dancing Script';
        font-size: 30px;
        padding: .5rem 1rem;
        color:gold !important;
      }
      .card-icon .fa{
          color: gold;
      }
      .card-icon .fa:hover{
        color: white;
      }
      .login:hover{
        border-bottom: 4px solid gold;
        
      }
      .dropdown-menu .dropdown-item:hover{
        background-color: gold;
      }
      </style>
      <header>

        <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                <img id="logo" src="images/favicon.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top" >
                SmartStore</a>
                
                <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!--Search input and submit button-->
                    <div class="d-flex w-50 mx-auto">
                        <form class="input-group ">
                            <input class="form-control focus-visible" type="search"
                                placeholder="Products name, Category name,etc." aria-label="Search">
                            <button class="btn btn-warning" type="submit">Search</button>
                        </form>
                    </div>
                    <!-- Login and Cart Buttons -->
                    <div class="d-flex  ">
                        <a href="login.html" class="btn btn-warning login m-2">Login</a>
                        <a href="card.html" class="card-icon"><i class="fa fa-shopping-cart fa-3x "></i></a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container-fluid">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active " href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product.html">All Products</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Women</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="girlsallproducts.html">All Products</a></li>
                        <li><a class="dropdown-item" href="girlsdress.html">Dresses</a></li>
                        <li><a class="dropdown-item" href="girlspants.html">Pants</a></li>
                        <li><a class="dropdown-item" href="girlskrits.html">Skirts</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Men</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="boysallproduct.html">All Products</a></li>
                        <li><a class="dropdown-item" href="boyshirt.html">Shirts</a></li>
                        <li><a class="dropdown-item" href="boyspants.html">Pants</a></li>
                        <li><a class="dropdown-item" href="boyshoodies.html">Hoodies</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="kids.html">Kids</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
      </header>

    
  
    `;
  }
}

customElements.define('header-component', Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      
 footer {
  background-color:rgba(0, 0, 0, 0.8);
  color: white;
 
}
footer h5 {
 font-weight: bold;
 color: white;

}

footer ul {
  list-style-type: none;
  padding: 0;
}

footer ul li {
  margin-top: 10px;
}
.list {
  color: white;
  text-decoration: none; 
  font-weight: bold; 
}
.list:hover{
  color: gold;
}

footer ul li a {
  color: white;
  text-decoration: none;
}
footer ul li a:hover {
  color: gold;
  }


footer p {
  font-size: 14px;

}
   
      </style>
      <footer>
            <div class="container-fluid mt-5">
                  <div class="text-center text-lg-start mt-xl-5 pt-4">
                      <div class="container p-4">
                          <div class="row">
                              <div class="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                  <h5><a href="girlsallproducts.html" class="list">Women</a></h5>
                                  <ul>
                                      <li><a href="girlsallproducts.html">All Products</a></li>
                                      <li><a href="girlsdress.html">Dresses</a></li>
                                      <li><a href="girlspants.html">Pants</a></li>
                                      <li><a href="girlskrits.html">Skirts</a></li>
                                  </ul>
                              </div>
                              <div class="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                  <h5><a href="boysallproduct.html" class="list">Men</a></h5>
                                  <ul>
                                      <li><a href="boysallproduct.html">All Products</a></li>
                                      <li><a href="boyshirt.html">Shirts</a></li>
                                      <li><a href="boyspants.html">Pants</a></li>
                                      <li><a href="boyshoodies.html">Hoodies</a></li>
                                  </ul>
                              </div>
                              <div class="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                  <h5><a href="kids.html" class="list">Kids</a></h5>
      
                              </div>
                              <div class="col-lg-3 col-md-3 mb-4 mb-lg-0">
                                  <h5>Links</h5>
                                  <ul>
                                      <li><a href="index.html">Home</a></li>
                                      <li><a href="contact.html">Contact</a></li>
                                      <li><a href="login.html">Login</a></li>
                                  </ul>
                              </div>
                              <hr>
                              <p class="text-center">&copy; 2023 St6 Mohan. All rights reserved.</p>
                          </div>
      
                      </div>
                  </div>
      
      
              </div>
            </footer>
 

      
    
    `;
  }
}
customElements.define('footer-component', Footer);


   // login form
   document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get entered email and password
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check email and password
    if (email === "admin@admin.com" && password === "123456") {
      alert("Login successful");
    } else {
      alert("Incorrect email or password");
    }
  });


  