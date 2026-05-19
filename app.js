
   
    const PRODUCTS = [
      {
        id:'p1',
        title:'Aurora Wireless Headphones',
        price:2499,
        category:'Audio',
        desc:'Comfortable over-ear with noise reduction, 30h battery.',
        img:'https://m.media-amazon.com/images/I/61aQvBFI0uL.jpg'
      },
      {
        id:'p2',
        title:'Nova Smartwatch Series 3',
        price:8999,
        category:'Wearables',
        desc:'Heart-rate, notifications, and 7-day battery in a sleek frame.',
        img:'https://www.pebblecart.com/cdn/shop/products/SMWGNDYGE5SG74ZG_09.jpg?v=1697714718&width=673'
      },
      {
        id:'p3',
        title:'Orbit Bluetooth Speaker',
        price:1799,
        category:'Audio',
        desc:'Portable speaker with clear mids and punchy bass.',
        img:'https://m.media-amazon.com/images/I/51OOKKG+xZL._UF1000,1000_QL80_.jpg'
      },
      {
        id:'p4',
        title:'Flux Mechanical Keyboard',
        price:3499,
        category:'Accessories',
        desc:'Tactile switches, hot-swappable, customizable RGB.',
        img:'data:image/jpeg;base64,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'
      },
      {
        id:'p5',
        title:'Lumen 4K Monitor 27"',
        price:28999,
        category:'Displays',
        desc:'27-inch IPS, 4K UHD, slim bezels.',
        img:'https://i.pcmag.com/imagery/reviews/04kQCW9rtPWTONdS3xZPOQi-4.fit_lim.size_1050x.jpg'
      },
      {
        id:'p6',
        title:'Nimbus Laptop Stand',
        price:1199,
        category:'Accessories',
        desc:'Aluminium stand, ergonomic angle with cable management.',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pxuoan6VpTkFXH7cKc2PHXqJlJiVuGuzGQ&s'
      },
      {
        id:'p7',
        title:'Eclipse Gaming Mouse',
        price:2199,
        category:'Accessories',
        desc:'High DPI sensor, programmable buttons, lightweight.',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvr9FTHxYeZuhdNOU2rr2QjMTS09qkPEiIdLrZ5-rKByDeskG9opz0g_F9sqc-xY6kcpc&usqp=CAU'
      },
      {
        id:'p8',
        title:'Pulse Fitness Band',
        price:1499,
        category:'Wearables',
        desc:'Step tracking, sleep analytics, water resistant.',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRbMWEhG6QiZLdF-xn7Ge1A-tn-0fjcREMA&s'
      }
    ];

  
    const state = {
      products: PRODUCTS,
      query: '',
      category: 'All',
      sort: 'popular',
      cart: loadCart()
    };

    function formatMoney(n){ return '₹' + n.toLocaleString('en-IN'); }

    function saveCart(){ localStorage.setItem('mini_cart_v1', JSON.stringify(state.cart)); updateCartUI(); }
    function loadCart(){ try{ return JSON.parse(localStorage.getItem('mini_cart_v1')) || {}; }catch(e){return{}} }


    const grid = document.getElementById('grid');
    const categoriesEl = document.getElementById('categories');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sort');
    const cartCount = document.getElementById('cartCount');
    const cartList = document.getElementById('cartList');
    const subtotalEl = document.getElementById('subtotal');
    const modalBack = document.getElementById('modalBack');
    const modal = document.getElementById('modal');

  
    const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p=>p.category)))];
    categories.forEach(cat=>{
      const btn = document.createElement('button');
      btn.className = 'chip' + (cat==='All' ? ' active' : '');
      btn.textContent = cat;
      btn.onclick = ()=>{ state.category = cat; document.querySelectorAll('#categories .chip').forEach(c=>c.classList.remove('active')); btn.classList.add('active'); renderGrid(); }
      categoriesEl.appendChild(btn);
    });

    searchInput.addEventListener('input', e=>{ state.query = e.target.value.toLowerCase(); renderGrid(); });
    sortSelect.addEventListener('change', e=>{ state.sort = e.target.value; renderGrid(); });

    function renderGrid(){
      const items = state.products.filter(p=>{
        if(state.category!=='All' && p.category!==state.category) return false;
        if(state.query && !(p.title.toLowerCase().includes(state.query) || p.desc.toLowerCase().includes(state.query))) return false;
        return true;
      });


      if(state.sort==='price-asc') items.sort((a,b)=>a.price-b.price);
      else if(state.sort==='price-desc') items.sort((a,b)=>b.price-a.price);
      else if(state.sort==='alpha') items.sort((a,b)=>a.title.localeCompare(b.title));

      grid.innerHTML = '';
      if(items.length===0){ grid.innerHTML = '<div class="empty">No products found.</div>'; return; }

      for(const p of items){
        const el = document.createElement('article'); el.className='card';
        el.innerHTML = `
          <div class="thumb" role="img" aria-label="${escapeHtml(p.title)} image">
            <img loading="lazy" src="${p.img}" alt="${escapeHtml(p.title)}">
          </div>
          <div>
            <div class="product-title">${escapeHtml(p.title)}</div>
            <div class="muted">${escapeHtml(p.category)}</div>
          </div>
          <div class="price-row">
            <div>
              <div class="price">${formatMoney(p.price)}</div>
              <div class="muted" style="font-size:12px">${escapeHtml(p.desc)}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-end">
              <button class="btn" data-add="${p.id}">Add</button>
              <button class="btn ghost" data-view="${p.id}">View</button>
            </div>
          </div>
        `;
        grid.appendChild(el);
      }

  
      grid.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click', ()=>addToCart(b.getAttribute('data-add'))));
      grid.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click', ()=>openProductModal(b.getAttribute('data-view'))));
    }


    function addToCart(id, qty=1){
      const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
      if(!state.cart[id]) state.cart[id] = {...p, qty:0};
      state.cart[id].qty += qty; saveCart();
      toast(`${p.title} added to cart`);
    }

    function removeFromCart(id){ delete state.cart[id]; saveCart(); }
    function changeQty(id, delta){ if(!state.cart[id]) return; state.cart[id].qty += delta; if(state.cart[id].qty<=0) delete state.cart[id]; saveCart(); }

    function updateCartUI(){
    
      const count = Object.values(state.cart).reduce((s,i)=>s + i.qty, 0);
      cartCount.textContent = `Cart: ${count} item${count!==1?'s':''}`;


      cartList.innerHTML = '';
      const items = Object.values(state.cart);
      if(items.length===0){ cartList.innerHTML = '<div class="empty" id="cartEmpty">Your cart is empty — add something!</div>'; subtotalEl.textContent='₹0'; return; }

      for(const it of items){
        const div = document.createElement('div'); div.className='cart-item';
        div.innerHTML = `
          <div class="mini"><img src="${it.img}" alt="${escapeHtml(it.title)}" style="width:100%;height:100%;object-fit:cover"></div>
          <div style="flex:1">
            <div class="product-title" style="font-size:14px">${escapeHtml(it.title)}</div>
            <div class="muted" style="font-size:13px">${formatMoney(it.price)} × ${it.qty}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
            <div class="qty">
              <button data-dec="${it.id}">-</button>
              <div style="min-width:22px;text-align:center">${it.qty}</div>
              <button data-inc="${it.id}">+</button>
            </div>
            <button class="btn ghost" style="padding:6px 8px;font-size:13px" data-remove="${it.id}">Remove</button>
          </div>
        `;
        cartList.appendChild(div);
      }


      cartList.querySelectorAll('[data-inc]').forEach(b=>b.addEventListener('click', ()=>{ changeQty(b.getAttribute('data-inc'), 1); }));
      cartList.querySelectorAll('[data-dec]').forEach(b=>b.addEventListener('click', ()=>{ changeQty(b.getAttribute('data-dec'), -1); }));
      cartList.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click', ()=>{ removeFromCart(b.getAttribute('data-remove')); }));


      const subtotal = items.reduce((s,i)=>s + (i.price * i.qty), 0);
      subtotalEl.textContent = formatMoney(subtotal);
    }

    document.getElementById('clearCartBtn').addEventListener('click', ()=>{ state.cart={}; saveCart(); toast('Cart cleared'); });

    document.getElementById('checkoutBtn').addEventListener('click', ()=>{ openCheckoutModal(); });

 
    function openProductModal(id){
      const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
      modal.innerHTML = `
        <div class="flex">
          <div style="flex:0 0 48%"><img src="${p.img}" alt="${escapeHtml(p.title)}" style="width:100%;height:260px;object-fit:cover;border-radius:10px"></div>
          <div class="product-meta">
            <h2 style="margin:0 0 8px 0">${escapeHtml(p.title)}</h2>
            <div class="muted" style="margin-bottom:8px">${escapeHtml(p.category)}</div>
            <div style="font-size:20px;font-weight:700;margin-bottom:8px">${formatMoney(p.price)}</div>
            <p class="muted" style="margin-top:0">${escapeHtml(p.desc)}</p>

            <div style="display:flex;gap:8px;margin-top:12px">
              <button class="btn" id="modalAdd">Add to cart</button>
              <button class="btn ghost" id="modalClose">Close</button>
            </div>
          </div>
        </div>
      `;
      modalBack.style.display='flex';
      document.getElementById('modalAdd').addEventListener('click', ()=>{ addToCart(p.id); modalBack.style.display='none'; });
      document.getElementById('modalClose').addEventListener('click', ()=>{ modalBack.style.display='none'; });
    }

    function openCheckoutModal(){
      const items = Object.values(state.cart);
      if(items.length===0){ toast('Cart is empty'); return; }
      const subtotal = items.reduce((s,i)=>s + i.price*i.qty, 0);
      modal.innerHTML = `
        <h2 style="margin-top:0">Checkout</h2>
        <div style="display:flex;gap:12px">
          <div style="flex:1">
            <label class="muted">Full name</label>
            <input id="fullName" style="width:100%;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);margin-bottom:8px;background:transparent;color:inherit">
            <label class="muted">Email</label>
            <input id="email" style="width:100%;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);margin-bottom:8px;background:transparent;color:inherit">
            <label class="muted">Address</label>
            <textarea id="address" rows="3" style="width:100%;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit"></textarea>
          </div>
          <div style="width:260px">
            <div style="background:rgba(255,255,255,0.02);padding:12px;border-radius:8px">
              <div class="muted">Order summary</div>
              <div style="margin:8px 0;">
                ${items.map(i=>`<div style="display:flex;justify-content:space-between;margin:6px 0"><div class="muted">${escapeHtml(i.title)} × ${i.qty}</div><div class="price">${formatMoney(i.price*i.qty)}</div></div>`).join('')}
              </div>
              <hr style="opacity:0.04">
              <div style="display:flex;justify-content:space-between;margin-top:8px"><strong>Total</strong><strong>${formatMoney(subtotal)}</strong></div>
              <button class="btn" id="placeOrder" style="width:100%;margin-top:10px">Place order (mock)</button>
            </div>
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end">
          <button class="btn ghost" id="closeCheckout">Cancel</button>
        </div>
      `;
      modalBack.style.display='flex';
      document.getElementById('closeCheckout').addEventListener('click', ()=>{ modalBack.style.display='none'; });
      document.getElementById('placeOrder').addEventListener('click', ()=>{
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const addr = document.getElementById('address').value.trim();
        if(!name || !email || !addr){ toast('Please fill name, email, and address'); return; }
       
        state.cart = {}; saveCart(); modalBack.style.display='none';
        toast('Order placed successfully — this is a demo (no real payment).');
      });
    }

    modalBack.addEventListener('click', (e)=>{ if(e.target===modalBack) modalBack.style.display='none'; });

  
    function escapeHtml(str){ return String(str).replace(/[&<>"']/g, s=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[s]); }

    let toastTimer=null;
    function toast(msg){
      let t = document.getElementById('mini_toast');
      if(!t){ t = document.createElement('div'); t.id='mini_toast'; t.style.position='fixed'; t.style.right='18px'; t.style.bottom='18px'; t.style.background='linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'; t.style.padding='10px 14px'; t.style.borderRadius='10px'; t.style.border='1px solid rgba(255,255,255,0.04)'; t.style.boxShadow='0 6px 18px rgba(2,6,23,0.6)'; document.body.appendChild(t); }
      t.textContent = msg; t.style.opacity=1; if(toastTimer) clearTimeout(toastTimer); toastTimer=setTimeout(()=>{ t.style.opacity=0; },3000);
    }

    renderGrid(); updateCartUI();

    
    window.addEventListener('keydown', e=>{ if(e.key==='Escape') modalBack.style.display='none'; });

    
    window.__MINISHOP = { state };
  