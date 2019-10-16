import React from 'react';
import VideoVW1 from './../Videos/Videos'


class News extends React.Component {
    render() {
        return (
            <div className="container ">

            <div className="my-5 z-depth-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-cascade wider reverse">
                            <div className="view view-cascade overlay">

                                <div className="view view-cascade overlay">
                                    <VideoVW1 />
                                </div>  
                                
                                {/* <div className="card-img-top">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrzwv1G1MbgBkpW-NypVieRKKNjS8T01vyneUi0tv-TM-gUxbj" alt="" />                                
                                </div> */}
                            
                            
                                <div className="card-body card-body-cascade text-center">
                                    <h2 className="font-weight-bold"><a>The first ‘electric car for the masses’</a></h2>
                                    <p>Written by <a><strong>Abby Madison</strong></a>, 26/08/2018</p>
                                   
                                    
                                </div>
                            </div>
                            <div className="mt-3 container">
                                <p>Volkswagen has rolled out the final version of its first affordable 
                                    long-range electric car, the ID.3, at the 2019 Frankfurt Motor Show.
                                     Coming in at “under €30,000” (about $33,180, currently), the ID.3 
                                     will come in three variants that offer between roughly 205 and 340 
                                     miles of range. The EV is slated to be delivered in mid-2020.</p>
                                <p>That “under €30,000” price tag VW is promoting applies to the 
                                    base model of the ID.3, which has a 45kWh battery and offers 330 
                                    kilometers, or 205 miles of range. The company declined to provide 
                                    pricing information for the two larger capacity variants of the car, 
                                    which will feature 58kWh and 77kWh batteries, and will respectively 
                                    offer around 420 and 550 kilometers (or 261 and 340 miles) per charge.</p>
                                    <p>VW says the base version of the ID.3 will only charge at up to 50kW, 
                                        and owners who want to charge faster (up to 100kW) will have to pay extra; 
                                        0kW charging will come standard on the midrange 58kWh version, while 
                                        even faster 125kW charging will be available on the top-tier ID.3. 
                                        The company is also offering an eight year / 160,000 kilometer warranty
                                        on the ID.3’s battery pack.</p>
                                    <p>The ID.3, which resembles the German automaker’s popular Golf hatchback,
                                        has the potential to be a very important car for VW. It will be the 
                                        first vehicle built on the company’s new modular all-electric platform, 
                                        one that will power dozens more cars and SUVs that are waiting in the
                                         wings as part of the larger Volkswagen Group’s multibillion-dollar push
                                        into EVs. (That said, VW has no plans to release the car in the US 
                                        right now, and it’s also unclear whether the company will sell the 
                                        car in China.)</p>

                            </div>

                        </div>
                    </div>

                                        {/* <!--Carousel Wrapper--> */}
                    <div id="carousel-thumb" className="container carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                    {/* <!--Slides--> */}
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/sC2-wmP0AQfMsJ2pQMxh7xYA7Z4=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19181865/Volkswagen_ID.3__Large_10140.jpg"
                                    alt="First slide"/>
                            </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/5duwDtPvLYV7H_G0bBsN3hoCG5g=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19181868/Volkswagen_ID.3__Large_10142.jpg"
                            alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/qybOUlb9S-9mYpbVJX3ETlrnCno=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19181871/Volkswagen_ID.3__Large_10149.jpg"
                            alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/ThabQssufk1tLiyLOM1-I6AHAFY=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19181872/Volkswagen_ID.3__Large_10150.jpg"
                            alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/3EOfJbFJGci_r0SGyT7kgubC-VA=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19181873/Volkswagen_ID.3__Large_10151.jpg"
                            alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/3G-ByYArRSbq7KBMf1TDhX15h0k=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19181875/Volkswagen_ID.3__Large_10136.jpg"
                            alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn.vox-cdn.com/thumbor/TqaZpnpyCGcjloltGwYs1opm6KU=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19181876/Volkswagen_ID.3__Large_10138.jpg"
                            alt="Third slide"/>
                        </div>
                        
                    </div>
                    {/* <!--/.Slides-->
                    <!--Controls--> */}
                    <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    {/* <!--/.Controls--> */}
                    
                    {/* <!--/.Carousel Wrapper--> */}
                  </div> 
                </div> 
                <hr className="mb-5 mt-4"></hr>
            </div>
            </div>
                        )
                    }
                }
                
export default News;
