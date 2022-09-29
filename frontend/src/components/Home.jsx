import React from 'react'
import { Section } from './Section'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Navbar from './Navbar';
import { Login } from './Login';
import { LoginContext } from '../context/LoginContext';
export const Home = () => {
    const { token } = React.useContext(LoginContext);
    let arr = [
        {
            title: "About Us",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, totam in. Fuga tempore perferendis tenetur debitis impedit voluptatem non inventore fugit ad omnis temporibus officiis quaerat perspiciatis nobis sequi obcaecati hic reiciendis voluptatibus quod ducimus ratione, eveniet eligendi aliquid corporis. Molestias numquam beatae necessitatibus reiciendis qui perferendis explicabo recusandae obcaecati!"
        }
    ]

    return (
        <div style={{ width: "80%", padding: "2%", marginTop: "10%", margin: "auto"}}>
            {/* <div>
                <Navbar />
            </div> */}
            {
                arr.map((el) => {
                    return <Section title={el.title} description={el.description} key={el.title} ></Section>
                })
            }
             <h1>Connect with Us</h1>
            <div style={{ height: "300px", display:"flex",flexDirection:"row", justifyContent:"space-evenly"}}>
                <div style={{paddingTop:"5%"}}>
                    <div style={{textAlign:"start",paddingTop:"2%"}}><b>Google:</b><a href=''>https://loremimpsum.co.in</a></div>
                    <div style={{textAlign:"start",paddingTop:"2%"}}><b>Address:</b>A2, somebuilding, 4th cross street,Pune,Maharashta, India</div>
                    <div style={{textAlign:"start",paddingTop:"2%"}}><b>Phone:</b>(+91)8346572988</div>
                </div>
                <div>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.512736614294!2d73.9483724148432!3d18.550908787391368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3210674622f%3A0xc3d504488e8fae1e!2sEon%20IT%20Park%20Pune!5e0!3m2!1sen!2sin!4v1664457711909!5m2!1sen!2sin" style={{ width: "100%", height: "300px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            {/* <div>
                <h1>Locate us</h1>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Kharadi,pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{{position:"relative",textAlign:"right", height:"500px", width:"600px"}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>
            </div> */}
            {/* <Login></Login> */}


        </div>
    )
}
