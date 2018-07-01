  	
function openSlideMenu(){
  document.getElementById('sidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  document.getElementById('sidebarCollapse').style.display = "none";

}
function closeSlideMenu(){
  document.getElementById('sidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.getElementById('sidebarCollapse').style.display = "block";
}
