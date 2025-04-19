import { Image } from "react-bootstrap"
import './Explore.css';
import Navbar from './navbar.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Explore(){
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const imageStyle = { width: "550px", display: "block", margin: "auto" };
    return(
            <>
             <div className="sticky-top">
               <Navbar />
            </div>
            
                <div className='bg-dark text-white fluid' style={{ width: "100%" }}>
                        <div className="d-flex bg-dark text-white m-auto exp">
                            <h1 className="mb-5 pt-5 mt-4" style={{ fontFamily: "monospace", textAlign: "center" }} data-aos="fade-up">
                                Is Global Warming the Same as Climate Change
                            </h1>
                            <div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/ccvsgw.jpg" data-aos="fade-up" />
                            <p className="par" data-aos="fade-up" data-aos-delay="400"> Have you ever listened to someone talk about their job and been left absolutely confused by what they said? Or had a friend who spoke about their new hobby but used words and phrases that made your head spin?<br /><br />
                                Understanding the difference between climate change and global warming can leave some of us feeling the same way, causing confusion about what is happening and how we can make a positive impact. But we’re here to help.<br /><br />
                                Global warming and climate change are often used interchangeably but are two different things altogether. Global warming refers to the rise in global temperature, while climate change refers to the changes in climate patterns over time and includes a number of factors beyond temperature.<br /><br />
                                In this article, we’ll talk about global warming and climate change and their long-term effects. We’ll also discuss how you can help protect the environment and make real change for our planet.<br /><br />
                            </p>
                        </div>
                        <h1 className="mb-5" style={{ fontFamily: "monospace", textAlign: "center" }} data-aos="fade-up" data-aos-delay="600">
                            <span style={{ textDecoration: "underline", textDecorationColor: "rgb(150, 181, 206)", color: "white" }}>Global Warming</span> versus <span style={{ textDecoration: "underline", textDecorationColor: "rgb(150, 181, 206)", color: "white" }}>Climate Change</span></h1>
                        <div className="mb-5">
                            <p className="par">
                                Global warming refers to the rising global temperature since the pre-Industrial period (1850 – 1900) due to human activities. Since that time period, human activities have increased Earth’s global average temperature by 1 degree Celsius. And each decade, this number increases by 0.2 degrees Celsius.<br /><br />
                                On the other hand, climate change is the long-term changes in weather patterns that define our local, regional, and global climates, which have a broad range of effects. This includes rising sea levels, rapid sea ice melting, and increases in precipitation.<br /><br />
                                For many people, hearing about global warming first raises their awareness of climate change as a whole. After all, rising temperatures, which create things like heatwaves, are something that everyone has more or less experienced.<br /> <br />
                                Climate change and global warming are serious issues that need to be dealt with to protect our planet’s future. While that statement might seem dramatic, it’s unfortunately very true. Fighting global warming and climate change will take time, and without action taken soon to limit the global temperature rise, we will reach a point of no return.
                            </p>
                        </div>
                        <h1 className="mb-5" style={{ fontFamily: "monospace", textAlign: "center" }}>Compelling before-and-after satellite photos of climate change</h1>
                        <div>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa1.jpg" />
                            <p className="par">
                                Scientists have linked climate change to more intense and deadly wildfires, droughts, floods, hurricanes, cyclones, tornadoes and melting glaciers.<br /><br />
                                The phenomenon can also spur famines, rising seas and eroding coastlines, not to mention hurt the global economy. <br />
                                The result? While no single disaster can be definitively linked to climate issues, the overall impact of climate change is growing more visible. Many experts fear time is running out to avoid catastrophic heating of the earth.<br /><br />
                                Here are 50 before-and-after satellite photos, provided by imaging company Maxar, that show how climate change may be making disasters worse.<br /><br />
                                In this June 12, 2021, photo, the Lake Mead National Recreation Area in Nevada is heavily affected by the ongoing, climate-change-linked megadrought in the western United States. <br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Flooding in Yellowstone National Park</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa2.jpg" />
                            <p className="par">
                                Here's a view of a road before flooding south of Yellowstone National Park in Montana on March 30. <br /><br />
                                Warming temperatures and flooding in the park have been attributed to climate change by experts.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Historic flooding causes road washouts</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa3.jpg" />
                            <p className="par">
                                Here's a view of road washouts south of Yellowstone National Park due to flooding. The photo was taken June 15.<br /><br />
                                That summer, Yellowstone National Park experienced historic flooding.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Overview of Indus River before floods</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa4.jpg" />
                            <p className="par">
                                Here's a March 24 image of the Indus River before floods hit Rajanpur, Pakistan. <br /><br />
                                Areas in Pakistan continue to feel the devastating effects of the catastrophic floods that started in the summer of 2022 and made international news.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>1,700 killed, more than 33 million affected</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa5.jpg" />
                            <p className="par">
                                An overview of the Indus River flooding in Rajanpur, Pakistan from Aug. 28. <br /><br />
                                The climate-driven floods in Pakistan have killed hundreds of people and submerged much of southern Pakistan. <br /><br />
                                The floods affected 33 million people, weakened agriculture and killed more than a million heads of livestock.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Village and fields before Pakistan floods</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa6.jpg" />
                            <p className="par">
                                A village and fields on March 24 before the floods hit Rajanpur, Pakistan.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Floodwaters surround Pakistan</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa7.jpg" />
                            <p className="par">
                                This photo taken Aug. 28 features the same village surrounded by floodwaters in Rajapur, Pakistan.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Holiday Lakes, Texas, before catastrophic flooding</h2>
                            <images className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa8.jpg" />
                            <p className="par">
                                This April 3, 2017, photo features Holiday Lakes, Texas, before Hurricane Harvey caused catastrophic flooding. <br /><br />
                                Months later, in September 2017, Texas officials announced at least 82 people died as a result of Hurricane Harvey and its massive flooding.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Overview of flooded Texas town</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa9.jpg" />
                            <p className="par">
                                In this Aug. 30, 2017, photo, you can see an overview of Holiday Lakes, Texas during the flooding. <br /><br />
                                In a statement, the Environmental Defense Fund outlined the issue: "As our climate warms, we're experiencing stronger winds, higher storm surges and record rainfalls during hurricane season — which is also why these storms are becoming more destructive and costly."<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Drought hits lake in San Gabriel, California</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa10.jpg" />
                            <p className="par">
                                Here's an overview of a lake in San Gabriel, California,  taken Sept, 26, 2018. <br /><br />
                                In 2021, California experienced its worst drought in over four years. <br /><br />
                                The next slide reveals how the very same drought appears to have drained the same lake.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Drought drains California lake</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa11.jpg" />
                            <p className="par">
                                Here's the same lake in San Gabriel, California that was taken on May 18, 2021. <br /><br />
                                Just one month later, the lake dried up so much that a plane that crashed in 1965 was finally discovered by officials.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Neumayer Glacier sensitive to climate change</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa19.jpg" />
                            <p className="par">
                                This photo of the Neumayer Glacier was taken Dec. 23, 2011. <br /><br />
                                The Neumayer Glacier is the largest tidewater glacier in the British-held territory of South Georgia, in the South Atlantic Ocean.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Neumayer Glacier melting away</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa20.jpg" />
                            <p className="par">
                                Here's a view of the Neumayer Glacier that was taken on March 11, 2014. <br /><br />
                                The photo appears to show how much ice has melted off the glacier since the 2011 photo.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Neumayer Glacier retreating over years</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa21.jpg" />
                            <p className="par">
                                A photo of the mouth of the Neumayer Glacier is shown in this photo from Dec. 28, 2004. <br /><br />
                                In the next slides, you can see how much the glacier has retreated over the years.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Melting ice on Colonia Glacier</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa26.jpg" />
                            <p className="par">
                                This photo offers an up-close look at the melting ice on the Colonia Glacier in Patagonia, Chile. <br /><br />
                                The Colonia Glacier has long been known for its fast-melting ice, captured here.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Paradise Pines, California, before wildfire</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa31.jpg" />
                            <p className="par">
                                Paradise Pines was one of the California communities affected by the deadly Camp Fire. <br /><br />
                                The beautiful greenery in this area of Paradise Pines was completely destroyed by the wildfire, as the next slides show.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Camp Fire scorches Paradise Pines</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa32.jpg" />
                            <p className="par">
                                In this Nov. 9, 2018, photo, Paradise Pines burns during the Camp Fire wildfire. <br /><br />
                                In 2018, more than 7,571 wildfires burned more than 1.8 million acres in California, according to the California Department of Forestry and Fire Protection.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Bridge before Hurricane Fiona</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa46.jpg" />
                            <p className="par">
                                This is a bridge in Toa Alta, Puerto Rico, on June 18, 2022 before the area was completely devastated by Hurricane Fiona. <br /><br />
                                Dozens of lives were lost in the aftermath.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Puerto Rico bridge after Hurricane Fiona</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa47.jpg" />
                            <p className="par">
                                This is the same bridge in Toa Alta, Puerto Rico, after Hurricane Fiona on Sept. 20. <br /><br />
                                President Biden announced $60 million in aid to help victims of the tragedy. <br /><br />
                                Experts say hurricanes and storms such as Fiona are getting more intense and frequent because of the warming planet. <br /><br />
                                Hurricane Fiona struck Puerto Rico five years after Hurricane Maria devastated the island and killed 3,000.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Wrath of Hurricane Dorian</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa42.jpg" />
                            <p className="par">
                                This is downtown Marsh Harbour, a town in Abaco Islands, Bahamas on Oct. 25, 2018.<br /><br />
                                The image was captured before Hurricane Dorian struck the area.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Downtown Marsh Harbour after Hurricane Dorian</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa43.jpg" />
                            <p className="par">
                                This Sept. 5, 2019, image features the downtown area of the Bahamas town Marsh Harbour after Hurricane Dorian ravaged it. <br /><br />
                                "All the buildings, all the main buildings – gone," longtime resident Robert Cornea told "CBS Evening News" anchor Norah O'Donnell at the time. "Everything. Gone."<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>Before cyclone Batsirai</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/ba44.jpg" />
                            <p className="par">
                                This Dec. 5, 2021, photo features an overview of Mananjary, Madagascar, before Cyclone Batsirai caused massive destruction.<br /><br />
                                Cyclone season in Madagascar is usually between November and March.<br /><br />
                            </p>
                        </div>
                        <div>
                            <h2>92 dead, 17,000 homes damaged</h2>
                            <Image className="mb-4" style={{ width: "550px", display: "block", margin: "auto" }} src="../images/baa45.jpg" />
                            <p className="par">
                                This Feb. 7, 2022, photo features an overview of Mananjary, a city in Madagascar, after cyclone Batsirai struck the island country. <br /><br />
                                At the time, the United Nations aid agencies warned Madagascar was bracing for its fourth such cyclone in a month. <br /><br />
                                Days after this photo was taken, the UN tweeted that Batsirai in Madagascar left 92 people dead, damaged 17,000 homes and affected 112,000 people.<br /><br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </>   
    )
}
