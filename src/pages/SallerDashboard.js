export default function renderCartPage() {
  return `  <div class="dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <img src="secondPromotex.png" alt="Promotex Logo" />
      </div>

      <nav>
       <ul id="sidebar-menu">
          <li class="active">Statistics</li>
          <!-- <li>Customers</li> -->
          <li>Products</li>
          <li>Orders</li>
       </ul>

      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <div class="header">
        <button class="addproduct"><i class="fa-solid fa-plus"></i>Add Product</button>
        <div class="user">
            
          <div class="avatar"></div>
          <span>Ahmed Mostafa</span>
        </div>
      </div>

      <div class="table-container">
        <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Product Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          
          
           
        </tbody>
      </table>
      </div>
      
    </div>
  </div>`;
}

 const menuItems = document.querySelectorAll('#sidebar-menu li');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active from all
      menuItems.forEach(i => i.classList.remove('active'));
      // Add active to clicked one
      item.classList.add('active');
    });
  });