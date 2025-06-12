export default function renderAdminDashboarbPage() {
  return `<div class="dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <img src="secondPromotex.png" alt="Promotex Logo" />
      </div>

      <nav>
       <ul id="sidebar-menu">
          <li class="active">New Sellers</li>
          <li>Customers</li>
          <li>Products</li>
          <li>Orders</li>
       </ul>

      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <div class="header">
        <div class="user">
          <div class="avatar"></div>
          <span>Ahmed Mostafa</span>
        </div>
      </div>

      <div class="table-container">
       <table>

        <thead>   
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