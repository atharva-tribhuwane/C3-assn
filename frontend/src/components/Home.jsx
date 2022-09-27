import React from 'react'
import { Section } from './Section'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
export const Home = () => {
    let arr = [
        {
           title:"About Us",
           description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, totam in. Fuga tempore perferendis tenetur debitis impedit voluptatem non inventore fugit ad omnis temporibus officiis quaerat perspiciatis nobis sequi obcaecati hic reiciendis voluptatibus quod ducimus ratione, eveniet eligendi aliquid corporis. Molestias numquam beatae necessitatibus reiciendis qui perferendis explicabo recusandae obcaecati!"
        }
    ]

  return (
    <div>
        <div>Navbar</div>
        {
            arr.map((el)=>{
               return <Section title={el.title} description={el.description} key={el.title}></Section>
            })
        }
        <div>
            <h2>Connect with Us</h2>
            <div>Google:<a href=''>https://loremimpsum.co.in</a></div>
            <div>Adress:A2, somebuilding, 4th cross street,Pune,Maharashta, India</div>
        </div>
        <div>
            <h1>Locate us</h1>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    </div>
  )
}
