const businessConfig = {
  whatsapp: "https://wa.me/13050000000",
  instagram: "https://instagram.com/canovaburgers",
  email: "hola@canovaburgers.com",
  orderUrl: "https://example.com/order",
  currency: "USD",
};

const products = [
  { id:"classic", category:"burgers", tag:{es:"FIRMA",en:"SIGNATURE"}, name:{es:"Canova Classic",en:"Canova Classic"}, description:{es:"Doble smash, queso americano, pepinillos, cebolla y salsa Canova.",en:"Double smash, American cheese, pickles, onion and Canova sauce."}, price:14.90, art:"classic" },
  { id:"melt", category:"burgers", tag:{es:"MÁS QUESO",en:"EXTRA CHEESE"}, name:{es:"Double Melt",en:"Double Melt"}, description:{es:"Doble smash, doble queso, cebolla caramelizada y salsa especial.",en:"Double smash, double cheese, caramelized onion and special sauce."}, price:15.90, art:"melt" },
  { id:"heat", category:"burgers", tag:{es:"PICANTE",en:"SPICY"}, name:{es:"Miami Heat",en:"Miami Heat"}, description:{es:"Doble smash, pepper jack, jalapeños y spicy mayo.",en:"Double smash, pepper jack, jalapeños and spicy mayo."}, price:15.50, art:"heat" },
  { id:"bacon", category:"burgers", tag:{es:"CARGADA",en:"LOADED"}, name:{es:"Golden Bacon",en:"Golden Bacon"}, description:{es:"Doble smash, cheddar, bacon crujiente y salsa dorada.",en:"Double smash, cheddar, crispy bacon and golden sauce."}, price:16.50, art:"bacon" },
  { id:"fries", category:"sides", tag:{es:"CRUJIENTES",en:"CRISPY"}, name:{es:"Classic Fries",en:"Classic Fries"}, description:{es:"Papas doradas con sal Canova.",en:"Golden fries with Canova seasoning."}, price:4.50, art:"side" },
  { id:"loaded", category:"sides", tag:{es:"PARA COMPARTIR",en:"TO SHARE"}, name:{es:"Loaded Fries",en:"Loaded Fries"}, description:{es:"Papas, queso, carne smash, cebolla y salsa Canova.",en:"Fries, cheese, smash beef, onion and Canova sauce."}, price:9.90, art:"side" },
  { id:"rings", category:"sides", tag:{es:"EXTRA CRUNCH",en:"EXTRA CRUNCH"}, name:{es:"Onion Rings",en:"Onion Rings"}, description:{es:"Aros de cebolla crujientes con salsa especial.",en:"Crispy onion rings with special sauce."}, price:5.90, art:"side" },
  { id:"bigcombo", category:"combos", tag:{es:"COMBO",en:"COMBO"}, name:{es:"The Big One",en:"The Big One"}, description:{es:"Canova Classic, papas clásicas, salsa y bebida.",en:"Canova Classic, classic fries, sauce and drink."}, price:20.90, art:"combo" },
  { id:"doublecombo", category:"combos", tag:{es:"COMBO",en:"COMBO"}, name:{es:"Double Trouble",en:"Double Trouble"}, description:{es:"Double Melt, loaded fries y bebida.",en:"Double Melt, loaded fries and drink."}, price:24.90, art:"combo" },
  { id:"cola", category:"drinks", tag:{es:"BIEN FRÍA",en:"ICE COLD"}, name:{es:"Soda",en:"Soda"}, description:{es:"Coca-Cola, Coca-Cola Zero o Sprite.",en:"Coca-Cola, Coca-Cola Zero or Sprite."}, price:2.90, art:"drink" },
  { id:"water", category:"drinks", tag:{es:"FRÍA",en:"COLD"}, name:{es:"Agua",en:"Water"}, description:{es:"Agua embotellada.",en:"Bottled water."}, price:2.00, art:"drink" },
];

const translations = {
  es:{navMenu:"Menú",navStory:"Historia",navExperience:"Experiencia",navContact:"Contacto",cart:"Carrito",orderNow:"Pedir ahora",heroEyebrow:"SMASH BURGERS · MIAMI",heroLine1:"BIG FLAVOR.",heroLine2:"NO EXCUSES.",heroLead:"Hamburguesas grandes para antojos grandes. Carne smash caramelizada, queso fundido y salsas que se recuerdan.",seeMenu:"Ver menú",knowStory:"Conoce Canova",doubleSmash:"doble smash",realFlavor:"sabor real",madeHere:"hecho aquí",menuEyebrow:"MENÚ DE LANZAMIENTO",menuTitle:"Aquí se viene a comer.",menuIntro:"Menú corto, producto serio. Cada receta está pensada para llegar caliente, firme y tan provocadora como en la foto.",filterAll:"Todo",filterBurgers:"Burgers",filterSides:"Acompañantes",filterCombos:"Combos",filterDrinks:"Bebidas",priceNote:"Precios de lanzamiento de referencia en USD. Editables antes de abrir ventas.",comboEyebrow:"ARMA EL COMBO",comboTitle:"Tu hambre. Tus reglas.",comboText:"Elige tu burger, súmale papas crujientes, salsa extra y una bebida fría. Sin vueltas. Sin porciones tímidas.",comboOne:"Papas clásicas o loaded fries",comboTwo:"Salsa Canova o spicy mayo",comboThree:"Bebida helada",comboFour:"Empaque probado para delivery",buildCombo:"Armar mi combo",whyEyebrow:"POR QUÉ CANOVA",whyTitle:"Lo que ves debe ser lo que recibes.",valueOneTitle:"Smash de verdad",valueOneText:"Caramelización intensa, bordes crujientes y carne jugosa.",valueTwoTitle:"Porciones honestas",valueTwoText:"El tamaño de la foto debe ser el tamaño que llega a tu puerta.",valueThreeTitle:"Delivery probado",valueThreeText:"Pan, armado y empaque pensados para resistir el trayecto.",valueFourTitle:"Sabor que firma",valueFourText:"Salsas propias y combinaciones fáciles de recordar.",storyEyebrow:"NUESTRA HISTORIA",storyTitle:"Actitud rebelde por fuera. Cuidado familiar por dentro.",storyP1:"Canova nace de una familia que entiende que una buena comida puede cambiar por completo un momento cotidiano.",storyP2:"Mezclamos la generosidad latina —donde servir mucho también es una forma de querer— con la energía urbana de Miami. El resultado: hamburguesas hechas para abrir la caja y saber que elegiste bien.",packEyebrow:"HECHO PARA LLEGAR BIEN",packTitle:"La experiencia empieza antes del primer bocado.",testEyebrow:"PRUEBA DE LANZAMIENTO",testTitle:"Así queremos que se sienta Canova.",testDisclaimer:"Testimonios de muestra para visualizar el tono. Deben reemplazarse por reseñas verificadas después del lanzamiento.",sample:"MUESTRA",waitEyebrow:"PRÓXIMAMENTE EN MIAMI",waitTitle:"Sé de los primeros en probar Canova.",waitText:"Únete a la lista de lanzamiento para recibir la fecha de apertura, zona de cobertura y promoción inaugural.",name:"Nombre",email:"Correo",zip:"ZIP code",joinList:"Quiero estar en la lista",faqTitle:"Antes de pedir.",faq1q:"¿Dónde entrega Canova?",faq1a:"La zona exacta de cobertura se publicará antes del lanzamiento. Empezaremos con un radio limitado en Miami para cuidar tiempos y temperatura.",faq2q:"¿Habrá pickup?",faq2a:"Sí. El sitio mostrará dirección y horarios en cuanto el punto de recogida esté confirmado.",faq3q:"¿Manejan alérgenos?",faq3a:"Los productos pueden contener gluten, lácteos, huevo, soya y otros alérgenos. La ficha final estará disponible antes de comprar.",faq4q:"¿Aceptan pedidos grandes?",faq4a:"Sí, con reserva previa y disponibilidad operativa. Contáctanos por WhatsApp.",footerClaim:"Hamburguesas grandes para antojos grandes.",footerExplore:"Explora",footerInfo:"Información",allergens:"Alérgenos",privacy:"Privacidad",footerService:"Delivery & pickup\nZona y horarios por confirmar",yourOrder:"Tu pedido",emptyCart:"Tu carrito está esperando algo grande.",delivery:"Delivery",notes:"Notas del pedido",subtotal:"Subtotal",checkout:"Continuar pedido",checkoutNote:"Demo: el enlace final de pedidos se configura antes del lanzamiento.",add:"Agregar"},
  en:{navMenu:"Menu",navStory:"Story",navExperience:"Experience",navContact:"Contact",cart:"Cart",orderNow:"Order now",heroEyebrow:"SMASH BURGERS · MIAMI",heroLine1:"BIG FLAVOR.",heroLine2:"NO EXCUSES.",heroLead:"Big burgers for big cravings. Caramelized smash beef, melted cheese and sauces you remember.",seeMenu:"See menu",knowStory:"Meet Canova",doubleSmash:"double smash",realFlavor:"real flavor",madeHere:"made here",menuEyebrow:"LAUNCH MENU",menuTitle:"Come hungry.",menuIntro:"A short menu with serious product. Every recipe is built to arrive hot, firm and as tempting as the photo.",filterAll:"All",filterBurgers:"Burgers",filterSides:"Sides",filterCombos:"Combos",filterDrinks:"Drinks",priceNote:"Reference launch prices in USD. Editable before sales open.",comboEyebrow:"BUILD YOUR COMBO",comboTitle:"Your hunger. Your rules.",comboText:"Choose your burger, add crispy fries, extra sauce and an ice-cold drink. No detours. No timid portions.",comboOne:"Classic fries or loaded fries",comboTwo:"Canova sauce or spicy mayo",comboThree:"Ice-cold drink",comboFour:"Delivery-tested packaging",buildCombo:"Build my combo",whyEyebrow:"WHY CANOVA",whyTitle:"What you see is what you should get.",valueOneTitle:"Real smash",valueOneText:"Deep caramelization, crispy edges and juicy beef.",valueTwoTitle:"Honest portions",valueTwoText:"The size in the photo should be the size at your door.",valueThreeTitle:"Delivery tested",valueThreeText:"Bread, build and packaging designed for the trip.",valueFourTitle:"Signature flavor",valueFourText:"House sauces and combinations that are easy to remember.",storyEyebrow:"OUR STORY",storyTitle:"Rebel attitude outside. Family care inside.",storyP1:"Canova was born from a family that knows a great meal can transform an ordinary moment.",storyP2:"We mix Latin generosity —where serving plenty is also a way to care— with Miami's urban energy. The result: burgers that make you open the box and know you chose right.",packEyebrow:"BUILT TO ARRIVE RIGHT",packTitle:"The experience starts before the first bite.",testEyebrow:"LAUNCH TEST",testTitle:"This is how Canova should feel.",testDisclaimer:"Sample testimonials to visualize the tone. Replace them with verified reviews after launch.",sample:"SAMPLE",waitEyebrow:"COMING SOON TO MIAMI",waitTitle:"Be among the first to try Canova.",waitText:"Join the launch list for opening date, delivery area and inaugural promotion.",name:"Name",email:"Email",zip:"ZIP code",joinList:"Join the launch list",faqTitle:"Before you order.",faq1q:"Where does Canova deliver?",faq1a:"The exact service area will be announced before launch. We will begin with a limited Miami radius to protect time and temperature.",faq2q:"Will pickup be available?",faq2a:"Yes. The site will show the address and hours once the pickup point is confirmed.",faq3q:"How do you handle allergens?",faq3a:"Products may contain gluten, dairy, egg, soy and other allergens. Final details will be available before purchase.",faq4q:"Do you accept large orders?",faq4a:"Yes, with advance notice and operational availability. Contact us on WhatsApp.",footerClaim:"Big burgers for big cravings.",footerExplore:"Explore",footerInfo:"Information",allergens:"Allergens",privacy:"Privacy",footerService:"Delivery & pickup\nArea and hours to be confirmed",yourOrder:"Your order",emptyCart:"Your cart is waiting for something big.",delivery:"Delivery",notes:"Order notes",subtotal:"Subtotal",checkout:"Continue order",checkoutNote:"Demo: the final ordering link will be configured before launch.",add:"Add"}
};

let language = localStorage.getItem("canova-language") || "es";
let activeFilter = "all";
let cart = JSON.parse(localStorage.getItem("canova-cart") || "[]");

const menuGrid = document.getElementById("menuGrid");
const template = document.getElementById("productTemplate");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");

function money(value){return new Intl.NumberFormat(language === "es" ? "es-US" : "en-US",{style:"currency",currency:businessConfig.currency}).format(value)}

function renderProducts(){
  menuGrid.innerHTML="";
  products.filter(p=>activeFilter==="all"||p.category===activeFilter).forEach((product,index)=>{
    const node=template.content.cloneNode(true);
    const card=node.querySelector(".product-card");
    card.dataset.id=product.id;
    card.querySelector(".product-tag").textContent=product.tag[language];
    card.querySelector("h3").textContent=product.name[language];
    card.querySelector(".product-description").textContent=product.description[language];
    card.querySelector(".product-price").textContent=money(product.price);
    card.querySelector(".add-product").addEventListener("click",()=>addToCart(product.id));
    card.style.transitionDelay=`${Math.min(index*45,220)}ms`;
    if(product.art==="heat") card.querySelector(".product-art").style.background="linear-gradient(135deg,#2b0907,#6f120c)";
    if(product.art==="melt") card.querySelector(".product-art").style.background="linear-gradient(135deg,#261b09,#6d4a08)";
    if(product.art==="bacon") card.querySelector(".product-art").style.background="linear-gradient(135deg,#261108,#6f2f13)";
    if(product.category!=="burgers"){
      card.querySelector(".mini-burger").innerHTML=`<div style="font-family:var(--display);font-size:5rem;font-weight:900;color:var(--cheese);text-align:center">${product.category==="drinks"?"COLD":product.category==="combos"?"BIG":"CRUNCH"}</div>`;
    }
    menuGrid.appendChild(node);
  });
  observeReveals();
}

function addToCart(id){
  const item=cart.find(i=>i.id===id);
  if(item)item.qty+=1;else cart.push({id,qty:1});
  persistCart();renderCart();openCart();
}
function updateQty(id,delta){
  const item=cart.find(i=>i.id===id);if(!item)return;
  item.qty+=delta;if(item.qty<=0)cart=cart.filter(i=>i.id!==id);
  persistCart();renderCart();
}
function removeItem(id){cart=cart.filter(i=>i.id!==id);persistCart();renderCart()}
function persistCart(){localStorage.setItem("canova-cart",JSON.stringify(cart))}
function renderCart(){
  cartItems.innerHTML="";
  let total=0,count=0;
  cart.forEach(item=>{
    const p=products.find(x=>x.id===item.id);if(!p)return;
    total+=p.price*item.qty;count+=item.qty;
    const el=document.createElement("div");el.className="cart-item";
    el.innerHTML=`<div><h4>${p.name[language]}</h4><small>${money(p.price)} c/u</small><div class="quantity"><button aria-label="Restar">−</button><strong>${item.qty}</strong><button aria-label="Sumar">＋</button></div><button class="remove-item">${language==="es"?"Eliminar":"Remove"}</button></div><strong>${money(p.price*item.qty)}</strong>`;
    const buttons=el.querySelectorAll(".quantity button");buttons[0].onclick=()=>updateQty(item.id,-1);buttons[1].onclick=()=>updateQty(item.id,1);el.querySelector(".remove-item").onclick=()=>removeItem(item.id);
    cartItems.appendChild(el);
  });
  cartCount.textContent=count;cartSubtotal.textContent=money(total);
}
function openCart(){cartDrawer.classList.add("open");cartDrawer.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeCart(){cartDrawer.classList.remove("open");cartDrawer.setAttribute("aria-hidden","true");document.body.style.overflow=""}

function setLanguage(lang){
  language=lang;localStorage.setItem("canova-language",lang);document.documentElement.lang=lang;
  document.getElementById("langToggle").textContent=lang==="es"?"EN":"ES";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key]!==undefined)el.textContent=translations[lang][key]});
  renderProducts();renderCart();
}

function observeReveals(){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll(".reveal:not(.visible)").forEach(el=>observer.observe(el));
}

document.querySelectorAll(".menu-tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".menu-tab").forEach(t=>{t.classList.remove("active");t.setAttribute("aria-selected","false")});tab.classList.add("active");tab.setAttribute("aria-selected","true");activeFilter=tab.dataset.filter;renderProducts()}));

document.getElementById("cartButton").addEventListener("click",openCart);
document.querySelectorAll("[data-close-cart]").forEach(el=>el.addEventListener("click",closeCart));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeCart()});
document.getElementById("langToggle").addEventListener("click",()=>setLanguage(language==="es"?"en":"es"));

document.querySelector(".nav-toggle").addEventListener("click",e=>{const nav=document.getElementById("main-nav");const open=nav.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("main-nav").classList.remove("open")));

document.getElementById("checkoutButton").addEventListener("click",()=>{
  if(!cart.length){document.getElementById("cartEmpty").animate([{transform:"scale(1)"},{transform:"scale(1.06)"},{transform:"scale(1)"}],{duration:350});return}
  const method=document.querySelector('input[name="method"]:checked').value;
  const summary=cart.map(item=>{const p=products.find(x=>x.id===item.id);return `${item.qty}x ${p.name[language]}`}).join(", ");
  const notes=document.getElementById("orderNotes").value.trim();
  const url=new URL(businessConfig.orderUrl);url.searchParams.set("method",method);url.searchParams.set("items",summary);if(notes)url.searchParams.set("notes",notes);
  window.open(url.toString(),"_blank","noopener");
});

document.getElementById("waitlistForm").addEventListener("submit",e=>{
  e.preventDefault();const form=e.currentTarget;const status=document.getElementById("waitlistStatus");
  if(!form.checkValidity()){status.className="form-status error";status.textContent=language==="es"?"Revisa los campos obligatorios.":"Please check the required fields.";form.reportValidity();return}
  status.className="form-status success";status.textContent=language==="es"?"¡Listo! Te avisaremos cuando Canova abra.":"You're in! We'll let you know when Canova opens.";form.reset();
});

document.getElementById("whatsappLink").href=businessConfig.whatsapp;
document.getElementById("instagramLink").href=businessConfig.instagram;
document.getElementById("emailLink").href=`mailto:${businessConfig.email}`;
document.getElementById("year").textContent=new Date().getFullYear();

setLanguage(language);renderCart();observeReveals();
