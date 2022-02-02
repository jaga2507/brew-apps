import './Home.css';
import tick from "../assets/tick.png"
import fire from "../assets/fire.png"
import diamond from "../assets/diamond.png"
import cyclone from "../assets/cyclone.png"
import temple from "../assets/temple.png"
import monkey from "../assets/monkey.png"
import Menu from "../assets/menu.png"
import zidane from "../assets/zidane.jpg"
import { useState } from 'react';

function Home() {

    const [menu, setMenu] = useState(false)

    const data = [
        {
            name:"zidane",
            image:zidane,
            mail:"@jyfuvdkfgy",
            address:"jygfkjufvliu"
        },
        {
            name:"zidane",
            image:zidane,
            mail:"@jyfuvdkfgysfgh",
            address:"jygfkjufvliu"
        },
        {
            name:"zidane",
            image:zidane,
            mail:"@jyfuvdkfgy",
            address:"jygfkjufvliu"
        },
        {
            name:"zidane",
            image:zidane,
            mail:"@jyfuvdkfgy",
            address:"jygfkjufvliu"
        },
        {
            name:"zidane",
            image:zidane,
            mail:"@jyfuvdkfgys",
            address:"jygfkjufvliu"
        },
        {
            name:"zidane",
            image:zidane,
            mail:"@jyfuvdkfgy",
            address:"jygfkjufvliu"
        },
    ]

  return (
    <div className='mainHome' >
        <div className='responsive' >
            <div className='title' >
                Live Spaces
            </div>
            <div className='menu' onClick={()=>setMenu(true)} >
                <img src={Menu} alt='...' />
            </div>
            {
                menu ? 
                <div className='res' >
                    <div className='responsive_tabs' >
                        <div className='active' onClick={()=>setMenu(false)} ><img src={fire} alt='...' /> 24h Trending</div>
                        <div className='non_active' onClick={()=>setMenu(false)} >Latest Show</div>
                        <div className='non_active' onClick={()=>setMenu(false)} >Most Popular</div>
                        <div className='non_active' onClick={()=>setMenu(false)} ><img src={diamond} alt='...' /> In Genesis</div>
                        <div className='non_active' onClick={()=>setMenu(false)} ><img src={cyclone} alt='...' /> In Temle</div>
                        <div className='non_active' onClick={()=>setMenu(false)} ><img src={temple} alt='...' /> In Void</div>
                        <div className='non_active' onClick={()=>setMenu(false)} ><img src={monkey} alt='...' /> #BAYC</div>
                        <div className='non_active' onClick={()=>setMenu(false)} >Close</div>
                    </div>
                </div>
                : null
            }
        </div>
        <div className='subTitle' >
            <img src={tick} alt='...' />All NFTs on Cyber either belong to or were minted by their space creator.
        </div>
        <div className='tabs' >
            <div className='active' ><img src={fire} alt='...' /> 24h Trending</div>
            <div className='non_active' >Latest Show</div>
            <div className='non_active' >Most Popular</div>
            <div className='non_active' ><img src={diamond} alt='...' /> In Genesis</div>
            <div className='non_active' ><img src={cyclone} alt='...' /> In Temle</div>
            <div className='non_active' ><img src={temple} alt='...' /> In Void</div>
            <div className='non_active' ><img src={monkey} alt='...' /> #BAYC</div>
        </div>
        <div className='card_main' >
            {data.map((index)=>(
                <div className='cards' >
                    <div>
                        <img src={index.image} alt="..." />
                    </div>
                    <div className='details' >
                        <div className='card_name' >
                            {index.name}
                        </div>
                        <div className='bottom' >
                            <div className='mail' >{index.mail}</div>
                            <div className='address' >{index.address}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Home;
