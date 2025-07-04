import react from "react";


const Navbar=({onChangeSearchItem})=>{
    return(
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>onChangeSearchItem(e.target.value)}
      style={{
        outline: 'none',
        boxShadow: 'none',
        borderColor: '#ccc'
      }}/>
    </form>
  </div>
</nav>

    )
}
export default Navbar;