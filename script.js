/* ==========================================
   ATLAS — UNIVERSAL SECTOR AGGREGATOR
   JAVASCRIPT APPLICATION
========================================== */


/* ==========================================
   1. SECTOR DATABASE
========================================== */

const sectors = [
    {name:"Agriculture",icon:"🌾",count:"1,240"},
    {name:"Poultry & Livestock",icon:"🐔",count:"860"},
    {name:"Food & Beverage",icon:"🍽️",count:"1,540"},
    {name:"Healthcare",icon:"🏥",count:"920"},
    {name:"Education",icon:"🎓",count:"680"},
    {name:"Construction",icon:"🏗️",count:"1,120"},
    {name:"Manufacturing",icon:"⚙️",count:"1,860"},
    {name:"Logistics",icon:"🚚",count:"740"},
    {name:"Energy",icon:"⚡",count:"520"},
    {name:"Retail & Trade",icon:"🛒",count:"1,950"},
    {name:"Technology",icon:"💻",count:"1,340"},
    {name:"Professional Services",icon:"📊",count:"1,070"}
];


/* ==========================================
   2. MARKETPLACE DATABASE
========================================== */

const listings = [

    {
        name:"Premium Basmati Rice",
        provider:"Greenfield Agro",
        sector:"Agriculture",
        price:68,
        unit:"kg",
        status:"Available"
    },

    {
        name:"Organic Fertilizer",
        provider:"EarthGrow Industries",
        sector:"Agriculture",
        price:24,
        unit:"kg",
        status:"Available"
    },

    {
        name:"Hybrid Vegetable Seeds",
        provider:"AgriNova",
        sector:"Agriculture",
        price:850,
        unit:"pack",
        status:"Limited"
    },

    {
        name:"Broiler Chicks",
        provider:"Sunrise Poultries",
        sector:"Poultry & Livestock",
        price:42,
        unit:"bird",
        status:"Available"
    },

    {
        name:"Commercial Poultry Feed",
        provider:"NutriFeed Solutions",
        sector:"Poultry & Livestock",
        price:36,
        unit:"kg",
        status:"Available"
    },

    {
        name:"Egg Supply",
        provider:"Golden Farms",
        sector:"Poultry & Livestock",
        price:6,
        unit:"egg",
        status:"Available"
    },

    {
        name:"Processed Food Products",
        provider:"FreshFoods India",
        sector:"Food & Beverage",
        price:120,
        unit:"pack",
        status:"Available"
    },

    {
        name:"Restaurant Supply Contract",
        provider:"FoodBridge",
        sector:"Food & Beverage",
        price:250,
        unit:"kg",
        status:"Limited"
    },

    {
        name:"Medical Equipment",
        provider:"MedTech Systems",
        sector:"Healthcare",
        price:45000,
        unit:"unit",
        status:"Available"
    },

    {
        name:"Diagnostic Services",
        provider:"HealthPoint Labs",
        sector:"Healthcare",
        price:850,
        unit:"test",
        status:"Available"
    },

    {
        name:"Educational Software",
        provider:"LearnTech",
        sector:"Education",
        price:12000,
        unit:"license",
        status:"Available"
    },

    {
        name:"Digital Learning Platform",
        provider:"EduConnect",
        sector:"Education",
        price:5000,
        unit:"subscription",
        status:"Available"
    },

    {
        name:"Cement Supply",
        provider:"BuildCore Materials",
        sector:"Construction",
        price:380,
        unit:"bag",
        status:"Available"
    },

    {
        name:"Structural Steel",
        provider:"MetalWorks India",
        sector:"Construction",
        price:65000,
        unit:"ton",
        status:"Limited"
    },

    {
        name:"Industrial Machinery",
        provider:"MechPro Industries",
        sector:"Manufacturing",
        price:250000,
        unit:"unit",
        status:"Available"
    },

    {
        name:"Industrial Components",
        provider:"PrecisionWorks",
        sector:"Manufacturing",
        price:1800,
        unit:"unit",
        status:"Available"
    },

    {
        name:"Bulk Transportation",
        provider:"TransMove Logistics",
        sector:"Logistics",
        price:28,
        unit:"km",
        status:"Available"
    },

    {
        name:"Cold Chain Transportation",
        provider:"ColdRoute",
        sector:"Logistics",
        price:45,
        unit:"km",
        status:"Available"
    },

    {
        name:"Solar Panels",
        provider:"SunVolt Energy",
        sector:"Energy",
        price:22000,
        unit:"panel",
        status:"Available"
    },

    {
        name:"Industrial Power Systems",
        provider:"PowerGrid Solutions",
        sector:"Energy",
        price:85000,
        unit:"unit",
        status:"Limited"
    },

    {
        name:"Wholesale Grocery Supply",
        provider:"TradeLink",
        sector:"Retail & Trade",
        price:15000,
        unit:"lot",
        status:"Available"
    },

    {
        name:"Retail Distribution Services",
        provider:"MarketConnect",
        sector:"Retail & Trade",
        price:2500,
        unit:"service",
        status:"Available"
    },

    {
        name:"Enterprise Software",
        provider:"CodeSphere",
        sector:"Technology",
        price:75000,
        unit:"license",
        status:"Available"
    },

    {
        name:"Cloud Infrastructure",
        provider:"CloudMatrix",
        sector:"Technology",
        price:18000,
        unit:"month",
        status:"Available"
    },

    {
        name:"Business Consulting",
        provider:"StrategicEdge",
        sector:"Professional Services",
        price:15000,
        unit:"project",
        status:"Available"
    },

    {
        name:"Financial Advisory",
        provider:"FinVision",
        sector:"Professional Services",
        price:25000,
        unit:"project",
        status:"Limited"
    }

];


/* ==========================================
   3. INDUSTRY NEWS DATABASE
   3 SAMPLE ARTICLES PER SECTOR
========================================== */

const newsTopics = {

    "Agriculture":[

        {
            category:"Agricultural Technology",
            title:"Precision farming technologies reshape modern agriculture",
            description:"Digital monitoring, automated irrigation and data-driven crop management are creating new opportunities for agricultural productivity."
        },

        {
            category:"Market Trends",
            title:"Agricultural supply chains face growing demand for efficiency",
            description:"Farmers, distributors and buyers are exploring improved storage, transport and market-access systems."
        },

        {
            category:"Sustainability",
            title:"Water-efficient farming becomes a major development priority",
            description:"Modern irrigation methods and resource-management practices are gaining importance in agricultural planning."
        }

    ],


    "Poultry & Livestock":[

        {
            category:"Poultry Technology",
            title:"Automation is changing commercial poultry production",
            description:"Environment monitoring, automated feeding and connected farm systems are becoming important areas of investment."
        },

        {
            category:"Animal Nutrition",
            title:"Feed efficiency remains central to livestock economics",
            description:"Producers continue to examine ingredient quality, feed conversion and nutrition-management strategies."
        },

        {
            category:"Supply Chain",
            title:"Integrated poultry infrastructure attracts industry attention",
            description:"Breeding, hatcheries, feed production, farming and processing are increasingly considered interconnected operations."
        }

    ],


    "Food & Beverage":[

        {
            category:"Food Processing",
            title:"Food processing companies explore automation",
            description:"Manufacturers are investing in modern production systems, packaging technologies and quality-control processes."
        },

        {
            category:"Consumer Markets",
            title:"Convenience foods influence changing consumption patterns",
            description:"Urban consumers are creating opportunities for packaged food, ready-to-cook products and organised distribution."
        },

        {
            category:"Food Technology",
            title:"Cold-chain infrastructure becomes critical for food distribution",
            description:"Temperature-controlled storage and transportation are essential for reducing spoilage and improving product quality."
        }

    ],


    "Healthcare":[

        {
            category:"Medical Technology",
            title:"Digital healthcare platforms expand patient access",
            description:"Telemedicine and connected healthcare systems are changing how medical services are delivered."
        },

        {
            category:"Healthcare Infrastructure",
            title:"Diagnostic infrastructure remains a major investment area",
            description:"Hospitals and diagnostic providers are examining new technologies to improve speed and accuracy."
        },

        {
            category:"Health Innovation",
            title:"Artificial intelligence enters clinical support systems",
            description:"AI-assisted analysis is creating new possibilities for medical imaging, documentation and operational efficiency."
        }

    ],


    "Education":[

        {
            category:"EdTech",
            title:"Digital learning platforms reshape education delivery",
            description:"Institutions are combining classroom teaching with online learning tools and interactive educational systems."
        },

        {
            category:"Higher Education",
            title:"Industry partnerships become important in technical education",
            description:"Universities are exploring practical training, internships and industry-linked academic programmes."
        },

        {
            category:"Education Technology",
            title:"AI-assisted learning tools gain institutional attention",
            description:"Personalised learning systems are creating opportunities for more adaptive educational experiences."
        }

    ],


    "Construction":[

        {
            category:"Infrastructure",
            title:"Infrastructure development increases demand for modern materials",
            description:"Construction companies are exploring improved building materials and efficient project-delivery systems."
        },

        {
            category:"Construction Technology",
            title:"Digital project management changes construction operations",
            description:"Building information modelling and connected project systems can improve coordination between contractors."
        },

        {
            category:"Sustainability",
            title:"Green construction receives growing industry attention",
            description:"Energy-efficient buildings and sustainable construction materials are becoming important planning priorities."
        }

    ],


    "Manufacturing":[

        {
            category:"Industrial Automation",
            title:"Smart factories transform manufacturing operations",
            description:"Connected machines, sensors and automated production lines are changing industrial manufacturing."
        },

        {
            category:"Supply Chain",
            title:"Manufacturers reassess sourcing and inventory management",
            description:"Companies are exploring more resilient procurement and production-planning systems."
        },

        {
            category:"Industrial Innovation",
            title:"Advanced robotics expand industrial applications",
            description:"Robotic systems are increasingly used in assembly, inspection, packaging and material handling."
        }

    ],


    "Logistics":[

        {
            category:"Transportation",
            title:"Digital freight platforms reshape transportation markets",
            description:"Technology-based logistics platforms are improving visibility across transportation and distribution networks."
        },

        {
            category:"Warehousing",
            title:"Warehouse automation gains importance in distribution",
            description:"Automated storage, inventory tracking and sorting systems are changing warehouse operations."
        },

        {
            category:"Cold Chain",
            title:"Temperature-controlled logistics supports food and pharmaceutical sectors",
            description:"Cold-chain networks play an important role in protecting products during transportation and storage."
        }

    ],


    "Energy":[

        {
            category:"Renewable Energy",
            title:"Solar energy continues to attract infrastructure investment",
            description:"Solar generation, storage systems and distributed energy projects are important areas of development."
        },

        {
            category:"Energy Storage",
            title:"Battery technology becomes central to power-system planning",
            description:"Energy storage can help balance electricity demand and renewable power generation."
        },

        {
            category:"Power Infrastructure",
            title:"Smart grids support modern electricity distribution",
            description:"Digital monitoring and grid-management technologies are changing electricity infrastructure."
        }

    ],


    "Retail & Trade":[

        {
            category:"Retail Technology",
            title:"Omnichannel retail changes customer purchasing behaviour",
            description:"Retailers are integrating physical stores, online platforms and digital payment systems."
        },

        {
            category:"Wholesale Trade",
            title:"Digital B2B marketplaces improve supplier discovery",
            description:"Business buyers are exploring digital platforms to compare suppliers and manage procurement."
        },

        {
            category:"Retail Analytics",
            title:"Data analytics becomes important in retail planning",
            description:"Retailers are using sales and inventory information to improve purchasing and distribution decisions."
        }

    ],


    "Technology":[

        {
            category:"Artificial Intelligence",
            title:"Enterprise AI adoption creates new technology opportunities",
            description:"Businesses are evaluating AI applications in automation, customer service and operational decision-making."
        },

        {
            category:"Cloud Computing",
            title:"Cloud infrastructure supports digital business expansion",
            description:"Organisations are adopting cloud services to improve scalability and access to computing resources."
        },

        {
            category:"Cybersecurity",
            title:"Cybersecurity becomes a core business requirement",
            description:"Digital businesses increasingly require stronger identity, data protection and security-management systems."
        }

    ],


    "Professional Services":[

        {
            category:"Business Consulting",
            title:"Business advisory services adapt to digital transformation",
            description:"Consulting firms are developing new capabilities in technology strategy and operational improvement."
        },

        {
            category:"Financial Services",
            title:"Financial analytics influences business decision-making",
            description:"Organisations are using financial data and performance analysis to improve investment planning."
        },

        {
            category:"Legal & Compliance",
            title:"Regulatory compliance becomes increasingly important for businesses",
            description:"Companies require structured systems for documentation, reporting and regulatory management."
        }

    ]

};


/* ==========================================
   4. APPLICATION STATE
========================================== */

let currentUser = null;

let activeSector = "All";

let activeNewsSector = "All";

let accounts = [];

let approvals = [

    {
        id:1,
        name:"AgroNova Industries",
        sector:"Agriculture",
        status:"Pending"
    },

    {
        id:2,
        name:"Prime Poultry Systems",
        sector:"Poultry & Livestock",
        status:"Pending"
    },

    {
        id:3,
        name:"MedTech Solutions",
        sector:"Healthcare",
        status:"Pending"
    },

    {
        id:4,
        name:"BuildCore Infrastructure",
        sector:"Construction",
        status:"Pending"
    },

    {
        id:5,
        name:"CloudMatrix Technologies",
        sector:"Technology",
        status:"Pending"
    },

    {
        id:6,
        name:"TransMove Logistics",
        sector:"Logistics",
        status:"Pending"
    },

    {
        id:7,
        name:"FreshFoods India",
        sector:"Food & Beverage",
        status:"Pending"
    },

    {
        id:8,
        name:"StrategicEdge Consulting",
        sector:"Professional Services",
        status:"Pending"
    }

];


/* ==========================================
   5. SECURITY HELPER
========================================== */

function escapeHTML(value){

    return String(value).replace(/[&<>"']/g,function(char){

        const map = {
            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;",
            "'":"&#039;"
        };

        return map[char];

    });

}


/* ==========================================
   6. LOGIN AND SIGNUP
========================================== */

function showAuthForm(type){

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const forgotForm = document.getElementById("forgotPasswordForm");
    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");
    const authTabs = document.getElementById("authTabs");

    // Always hide the forgot-password form when returning to normal auth.
    forgotForm.style.display = "none";
    authTabs.style.display = "flex";

    if(type === "login"){
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        loginTab.classList.add("active");
        signupTab.classList.remove("active");
        document.getElementById("authTitle").textContent = "Sign in to your account";
        document.getElementById("authSubtitle").textContent = "Access your connected industry network.";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        loginTab.classList.remove("active");
        signupTab.classList.add("active");
        document.getElementById("authTitle").textContent = "Create your account";
        document.getElementById("authSubtitle").textContent = "Join the ATLAS industry network.";
    }
}


function showForgotPassword(){
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "block";
    document.getElementById("authTabs").style.display = "none";
    document.getElementById("authTitle").textContent = "Reset your password";
    document.getElementById("authSubtitle").textContent = "Enter your registered email and choose a new password.";
    document.getElementById("resetEmail").value = document.getElementById("loginEmail").value.trim();
    document.getElementById("resetError").textContent = "";
}


function resetPassword(){

    const email = document.getElementById("resetEmail").value.trim().toLowerCase();
    const newPassword = document.getElementById("resetNewPassword").value;
    const confirmPassword = document.getElementById("resetConfirmPassword").value;
    const error = document.getElementById("resetError");
    error.textContent = "";

    if(newPassword.length < 6){
        error.textContent = "Password must contain at least 6 characters.";
        return;
    }

    if(newPassword !== confirmPassword){
        error.textContent = "Passwords do not match.";
        return;
    }

    if(email === "admin@atlas.com"){
        error.textContent = "The demo admin password cannot be reset here.";
        return;
    }

    const account = accounts.find(function(user){ return user.email === email; });

    if(!account){
        error.textContent = "No registered account found with this email.";
        return;
    }

    account.password = newPassword;
    document.getElementById("forgotPasswordForm").reset();
    showAuthForm("login");
    document.getElementById("loginEmail").value = email;
    document.getElementById("loginPassword").value = "";
    document.getElementById("loginError").textContent = "Password reset successfully. Please sign in with your new password.";
}


function loginUser(){

    const email = document.getElementById("loginEmail")
        .value.trim().toLowerCase();

    const password = document.getElementById("loginPassword")
        .value;

    const error = document.getElementById("loginError");


    error.textContent = "";


    // DEMO ADMIN ACCOUNT

    if(
        email === "admin@atlas.com" &&
        password === "Atlas@123"
    ){

        currentUser = {

            name:"ATLAS Administrator",

            email:email,

            role:"Admin",

            organisation:"ATLAS Headquarters"

        };

        enterApplication();

        return;

    }


    // DEMO REGISTERED ACCOUNTS

    const account = accounts.find(function(user){

        return user.email === email &&
               user.password === password;

    });


    if(account){

        currentUser = account;

        enterApplication();

    }

    else{

        error.textContent =
            "Incorrect email or password. Please try again.";

    }

}


function signupUser(){

    const name = document.getElementById("signupName")
        .value.trim();

    const organisation = document.getElementById("signupOrg")
        .value.trim();

    const email = document.getElementById("signupEmail")
        .value.trim().toLowerCase();

    const role = document.getElementById("signupRole")
        .value;

    const password = document.getElementById("signupPassword")
        .value;

    const error = document.getElementById("signupError");


    error.textContent = "";


    if(!name || !organisation || !email || !password){

        error.textContent = "Please complete all fields.";

        return;

    }


    if(password.length < 6){

        error.textContent =
            "Password must contain at least 6 characters.";

        return;

    }


    if(email === "admin@atlas.com"){

        error.textContent =
            "This email is reserved for the demo administrator.";

        return;

    }


    if(accounts.some(function(user){

        return user.email === email;

    })){

        error.textContent =
            "An account with this email already exists.";

        return;

    }


    const newAccount = {

        name:name,

        organisation:organisation,

        email:email,

        role:role,

        password:password,

        status:"Registered"

    };


    accounts.push(newAccount);


    document.getElementById("signupForm").reset();


    notify("Account created successfully. Please sign in.");


    showAuthForm("login");

    document.getElementById("loginEmail").value = email;

}


/* ==========================================
   7. ENTER APPLICATION
========================================== */

function enterApplication(){

    document.getElementById("authGate")
        .classList.add("hidden");

    document.getElementById("mainView")
        .classList.remove("hidden");

    document.getElementById("adminView")
        .classList.remove("active");


    document.getElementById("profileButton").textContent =
        currentUser.name.charAt(0).toUpperCase();


    document.getElementById("menuIdentity").textContent =
        currentUser.name + " · " + currentUser.role;


    const adminButton = document.getElementById("adminMenuButton");

    if(currentUser.role === "Admin"){

        adminButton.style.display = "block";

    }

    else{

        adminButton.style.display = "none";

    }


    document.getElementById("userMenu").classList.remove("open");


    animateCounters();

    renderListings();

    renderAccounts();

    renderApprovals();

    drawChart();

    notify("Welcome to ATLAS, " + currentUser.name + ".");

}


function logoutUser(){

    currentUser = null;


    document.getElementById("mainView")
        .classList.add("hidden");

    document.getElementById("adminView")
        .classList.remove("active");

    document.getElementById("authGate")
        .classList.remove("hidden");


    document.getElementById("loginPassword").value = "";

    document.getElementById("loginError").textContent = "";

    showAuthForm("login");

    notify("You have signed out.");

}


/* ==========================================
   8. USER MENU
========================================== */

function toggleUserMenu(){

    document.getElementById("userMenu")
        .classList.toggle("open");

}


document.addEventListener("click",function(event){

    const menu = document.querySelector(".user-menu");

    if(menu && !menu.contains(event.target)){

        document.getElementById("userMenu")
            .classList.remove("open");

    }

});


/* ==========================================
   9. ADMIN DASHBOARD
========================================== */

function openAdmin(){

    if(!currentUser || currentUser.role !== "Admin"){

        notify("Administrator access required.");

        return;

    }


    document.getElementById("mainView")
        .classList.add("hidden");

    document.getElementById("adminView")
        .classList.add("active");

    document.getElementById("userMenu")
        .classList.remove("open");


    renderApprovals();

    renderAccounts();

    window.scrollTo(0,0);

}


function showMain(){

    document.getElementById("adminView")
        .classList.remove("active");

    document.getElementById("mainView")
        .classList.remove("hidden");

    window.scrollTo(0,0);

}


/* ==========================================
   10. ADMIN APPROVAL QUEUE
========================================== */

function renderApprovals(){

    const tbody = document.getElementById("approvalRows");

    tbody.innerHTML = "";


    approvals.forEach(function(item){

        const row = document.createElement("tr");


        const nameCell = document.createElement("td");

        nameCell.textContent = item.name;


        const sectorCell = document.createElement("td");

        sectorCell.textContent = item.sector;


        const statusCell = document.createElement("td");

        statusCell.textContent = item.status;


        const actionCell = document.createElement("td");


        if(item.status === "Pending"){

            const approveButton = document.createElement("button");

            approveButton.textContent = "Approve";

            approveButton.onclick = function(){

                changeApproval(item.id,"Approved");

            };


            const rejectButton = document.createElement("button");

            rejectButton.textContent = "Reject";

            rejectButton.className = "danger";

            rejectButton.style.marginLeft = "5px";

            rejectButton.onclick = function(){

                changeApproval(item.id,"Rejected");

            };


            actionCell.appendChild(approveButton);

            actionCell.appendChild(rejectButton);

        }

        else{

            actionCell.textContent = "Completed";

        }


        row.appendChild(nameCell);

        row.appendChild(sectorCell);

        row.appendChild(statusCell);

        row.appendChild(actionCell);


        tbody.appendChild(row);

    });


    const pending = approvals.filter(function(item){

        return item.status === "Pending";

    }).length;


    document.getElementById("pendingCount").textContent =
        String(pending).padStart(2,"0");

}


function changeApproval(id,status){

    const item = approvals.find(function(entry){

        return entry.id === id;

    });


    if(!item){

        return;

    }


    item.status = status;


    renderApprovals();


    notify(item.name + " — " + status + ".");

}


/* ==========================================
   11. ADMIN ACCOUNT REGISTRATION TABLE
========================================== */

function renderAccounts(){

    const tbody = document.getElementById("accountRows");

    tbody.innerHTML = "";


    if(accounts.length === 0){

        const row = document.createElement("tr");

        const cell = document.createElement("td");

        cell.colSpan = 5;

        cell.textContent = "No new registrations yet.";

        row.appendChild(cell);

        tbody.appendChild(row);

    }


    accounts.forEach(function(account){

        const row = document.createElement("tr");

        const values = [

            account.name,

            account.organisation,

            account.email,

            account.role,

            account.status

        ];


        values.forEach(function(value){

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });


        tbody.appendChild(row);

    });


    document.getElementById("adminUsers").textContent =
        (12840 + accounts.length).toLocaleString("en-IN");

}


/* ==========================================
   12. SECTOR CARDS
========================================== */

function renderSectors(){

    const grid = document.getElementById("sectorGrid");

    const filter = document.getElementById("sectorFilter");


    grid.innerHTML = "";

    filter.innerHTML = '<option value="All">All sectors</option>';


    sectors.forEach(function(sector){

        const card = document.createElement("button");

        card.className = "sector";

        card.innerHTML = `

            <span class="emoji">${sector.icon}</span>

            <b>${escapeHTML(sector.name)}</b>

            <small>Industry network</small>

            <span class="count">
                ${sector.count} partners →
            </span>

        `;


        card.onclick = function(){

            activeSector = sector.name;

            filter.value = sector.name;

            renderListings();

            document.getElementById("marketplace")
                .scrollIntoView({behavior:"smooth"});

        };


        grid.appendChild(card);


        const option = document.createElement("option");

        option.value = sector.name;

        option.textContent = sector.name;

        filter.appendChild(option);

    });

}


/* ==========================================
   13. MARKETPLACE FILTERING
========================================== */

function renderListings(){

    const tbody = document.getElementById("listingRows");

    if(!tbody){

        return;

    }


    const search = document.getElementById("search")
        .value.trim().toLowerCase();

    const sector = document.getElementById("sectorFilter").value;

    const sort = document.getElementById("sort").value;


    let filtered = listings.filter(function(item){

        const matchesSearch =

            item.name.toLowerCase().includes(search) ||

            item.provider.toLowerCase().includes(search) ||

            item.sector.toLowerCase().includes(search);


        const matchesSector =

            sector === "All" || item.sector === sector;


        return matchesSearch && matchesSector;

    });


    if(sort === "price"){

        filtered.sort(function(a,b){

            return a.price - b.price;

        });

    }


    tbody.innerHTML = "";


    if(filtered.length === 0){

        const row = document.createElement("tr");

        const cell = document.createElement("td");

        cell.colSpan = 4;

        cell.textContent = "No matching listings found.";

        row.appendChild(cell);

        tbody.appendChild(row);

        return;

    }


    filtered.forEach(function(item){

        const row = document.createElement("tr");


        const productCell = document.createElement("td");

        productCell.innerHTML = `

            <span class="product">
                ${escapeHTML(item.name)}
            </span>

            <span class="sub">
                ${escapeHTML(item.provider)}
            </span>

        `;


        const sectorCell = document.createElement("td");

        sectorCell.textContent = item.sector;


        const priceCell = document.createElement("td");

        priceCell.textContent =
            "₹" + item.price.toLocaleString("en-IN") +
            " / " + item.unit;


        const statusCell = document.createElement("td");

        const tag = document.createElement("span");

        tag.className = item.status === "Available"
            ? "tag"
            : "tag warn";

        tag.textContent = item.status;

        statusCell.appendChild(tag);


        row.appendChild(productCell);

        row.appendChild(sectorCell);

        row.appendChild(priceCell);

        row.appendChild(statusCell);


        tbody.appendChild(row);

    });

}


/* ==========================================
   14. INDUSTRY NEWS GENERATOR
========================================== */

function renderNewsFilters(){

    const container = document.getElementById("newsFilters");

    container.innerHTML = "";


    const allButton = document.createElement("button");

    allButton.className = "news-filter active";

    allButton.textContent = "All sectors";

    allButton.onclick = function(){

        activeNewsSector = "All";

        renderNews();

    };


    container.appendChild(allButton);


    sectors.forEach(function(sector){

        const button = document.createElement("button");

        button.className = "news-filter";

        button.textContent = sector.name;

        button.onclick = function(){

            activeNewsSector = sector.name;

            renderNews();

        };


        container.appendChild(button);

    });


    renderNews();

}


function renderNews(){

    const grid = document.getElementById("newsGrid");

    const filters = document.getElementById("newsFilters");


    grid.innerHTML = "";


    const selectedSectors = activeNewsSector === "All"
        ? sectors
        : sectors.filter(function(sector){

            return sector.name === activeNewsSector;

        });


    filters.querySelectorAll("button").forEach(function(button){

        const isActive =

            button.textContent === "All sectors"
                ? activeNewsSector === "All"
                : button.textContent === activeNewsSector;


        button.classList.toggle("active",isActive);

    });


    selectedSectors.forEach(function(sector){

        const articles = newsTopics[sector.name] || [];


        articles.forEach(function(article,index){

            const card = document.createElement("article");

            card.className = "news-card";


            card.innerHTML = `

                <div class="news-meta">

                    <span>${escapeHTML(sector.name)}</span>

                    <span>0${index + 1} / 03</span>

                </div>


                <h3>
                    ${escapeHTML(article.title)}
                </h3>


                <p>
                    ${escapeHTML(article.description)}
                </p>


                <div class="news-foot">

                    <span>
                        ${escapeHTML(article.category)}
                    </span>

                    <button type="button">
                        DEMO ARTICLE ↗
                    </button>

                </div>

            `;


            card.querySelector("button").onclick = function(){

                notify("Illustrative demo article. No live publisher is connected.");

            };


            grid.appendChild(card);

        });

    });

}


/* ==========================================
   15. ANIMATED STATISTICS
========================================== */

function animateCounters(){

    const counters = document.querySelectorAll("[data-count]");


    counters.forEach(function(counter){

        const target = Number(counter.dataset.count);

        const prefix = counter.dataset.prefix || "";

        const suffix = counter.dataset.suffix || "";

        const duration = 1200;

        const startTime = performance.now();


        function updateCounter(now){

            const progress = Math.min(
                (now - startTime) / duration,
                1
            );


            const eased = 1 - Math.pow(1-progress,3);

            const value = target * eased;


            let formatted;


            if(suffix === " Cr"){

                formatted = value.toFixed(1);

            }

            else{

                formatted = Math.floor(value).toLocaleString("en-IN");

            }


            counter.textContent = prefix + formatted + suffix;


            if(progress < 1){

                requestAnimationFrame(updateCounter);

            }

        }


        requestAnimationFrame(updateCounter);

    });

}


/* ==========================================
   16. NETWORK SIGNAL ANIMATION
========================================== */

function createSignal(){

    const signal = document.getElementById("signal");

    signal.innerHTML = "";


    for(let i=0;i<32;i++){

        const bar = document.createElement("i");

        const height = 15 + Math.random()*85;

        bar.style.height = height + "%";

        bar.style.animationDelay =
            (Math.random()*.8) + "s";


        signal.appendChild(bar);

    }

}


/* ==========================================
   17. ACTIVITY FEED
========================================== */

function renderActivity(){

    const activities = [

        {
            icon:"🌾",
            title:"Agricultural supplier registered",
            description:"A new agricultural supplier joined the network.",
            time:"2 min ago"
        },

        {
            icon:"🚚",
            title:"Logistics enquiry received",
            description:"A transport enquiry was submitted.",
            time:"8 min ago"
        },

        {
            icon:"💻",
            title:"Technology listing updated",
            description:"An enterprise software listing was updated.",
            time:"15 min ago"
        },

        {
            icon:"🏭",
            title:"Manufacturing opportunity",
            description:"A new industrial supply opportunity was added.",
            time:"28 min ago"
        }

    ];


    const container = document.getElementById("activity");

    container.innerHTML = "";


    activities.forEach(function(item){

        const element = document.createElement("div");

        element.className = "activity";


        element.innerHTML = `

            <div class="activity-icon">
                ${item.icon}
            </div>

            <div>

                <b>${escapeHTML(item.title)}</b>

                <p>${escapeHTML(item.description)}</p>

            </div>

            <time>${escapeHTML(item.time)}</time>

        `;


        container.appendChild(element);

    });

}


/* ==========================================
   18. NETWORK CHART
========================================== */

function drawChart(){

    const canvas = document.getElementById("chart");

    if(!canvas){

        return;

    }


    const ctx = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();

    const width = Math.max(rect.width,250);

    const height = Math.max(rect.height,150);

    const ratio = window.devicePixelRatio || 1;


    canvas.width = width * ratio;

    canvas.height = height * ratio;


    ctx.setTransform(ratio,0,0,ratio,0,0);


    const padding = 20;

    const chartWidth = width - padding*2;

    const chartHeight = height - padding*2;


    ctx.clearRect(0,0,width,height);


    // GRID LINES

    ctx.strokeStyle = "#e8edf1";

    ctx.lineWidth = 1;


    for(let i=0;i<5;i++){

        const y = padding + chartHeight*i/4;

        ctx.beginPath();

        ctx.moveTo(padding,y);

        ctx.lineTo(width-padding,y);

        ctx.stroke();

    }


    const values1 = [35,48,40,70,58,82,90];

    const values2 = [20,32,28,42,39,57,66];


    function drawLine(values,color){

        ctx.beginPath();

        ctx.strokeStyle = color;

        ctx.lineWidth = 2.5;


        values.forEach(function(value,index){

            const x = padding +
                (chartWidth*index)/(values.length-1);

            const y = height-padding -
                (chartHeight*value/100);


            if(index === 0){

                ctx.moveTo(x,y);

            }

            else{

                ctx.lineTo(x,y);

            }

        });


        ctx.stroke();


        values.forEach(function(value,index){

            const x = padding +
                (chartWidth*index)/(values.length-1);

            const y = height-padding -
                (chartHeight*value/100);


            ctx.beginPath();

            ctx.arc(x,y,3,0,Math.PI*2);

            ctx.fillStyle = color;

            ctx.fill();

        });

    }


    drawLine(values1,"#1266f1");

    drawLine(values2,"#45d5e8");

}


/* ==========================================
   19. TOAST NOTIFICATIONS
========================================== */

let toastTimer;


function notify(message){

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(function(){

        toast.classList.remove("show");

    },3000);

}


/* ==========================================
   20. APPLICATION INITIALISATION
========================================== */

document.addEventListener("DOMContentLoaded",function(){

    renderSectors();

    renderNewsFilters();

    renderActivity();

    createSignal();


    window.addEventListener("resize",function(){

        if(!document.getElementById("mainView")
            .classList.contains("hidden")){

            drawChart();

        }

    });


    // Keep the login screen visible until authentication.

    document.getElementById("authGate")
        .classList.remove("hidden");


    document.getElementById("mainView")
        .classList.add("hidden");


    document.getElementById("adminView")
        .classList.remove("active");

});