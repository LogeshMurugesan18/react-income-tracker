import "./Header.css";
function header(){
   return (
    <div className="head">
        <img  id="one" src="https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png" alt="react" />
       
       <div className="h2"> 
            <a href="/home">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/contact">Contact Us</a>
        
        </div>
    </div>
   )
}
export default header;