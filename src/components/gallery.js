import b1 from "../assets/images/b1.jpeg"
import b2 from "../assets/images/b2.jpeg"
import b3 from "../assets/images/b3.jpeg"
import b4 from "../assets/images/b4.jpeg"
import b5 from "../assets/images/b5.jpeg"
import b6 from "../assets/images/b6.jpeg"
import b7 from "../assets/images/b7.jpeg"
import b8 from "../assets/images/b8.jpeg"


function Gallery() {
    return(
    
        
        <div class="products">
            
            <div class="box">
            <img src={b1} alt="one"></img>
            <p>CAR1</p>
           </div>
           <div class="box">
            <img src={b2} alt="one"></img>
            <p>CAR2</p>
            </div>
            <div class="box">
            
            <img src={b3} alt="one"></img>
            <p>CAR3</p>
            </div>
            <div class="box">
            <img src={b4} alt="one"></img>
            <p>CAR4</p>
            </div>
            <div class="box">
            <img src={b5} alt="one"></img>
            <p>CAR5</p>
            </div>
            <div class="box">
            <img src={b6} alt="one"></img>
            <p>CAR6</p>
            </div>
            <div class="box">
            <img src={b7} alt="one"></img>
            <p>CAR7</p>
            </div>
            <div class="box"> 
            <img src={b8} alt="one"></img>
            <p>CAR8 </p>
            </div>
        </div>

    )
    
}
export default Gallery
