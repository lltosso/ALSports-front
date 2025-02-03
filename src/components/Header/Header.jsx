import "./Header.css";

  function Header() {
    const breadcrumbMap = {
      app: "Dashboard",
      books: "Catálogo",
      "new-book": "Añadir libro",
    };
  
  
  return (
    <header className="header">
    <Breadcrumb icon={ FaHome } breadcrumbMap={breadcrumbMap}/>
    <BtnLogOut className="btn-logout" text="Login"/>
</header>
    
  )
}

export default Header