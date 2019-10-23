import React from 'react';
import VideoVW1 from './../Videos/Videos'
import DB from '../../DB'


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
                                    <p>Volkswagen has rolled out the final version of its first affordable long-range electric car, the ID.3, at the 2019 Frankfurt Motor Show. Coming in at “under €30,000” (about $33,180, currently), the ID.3 will come in three variants that offer between roughly 205 and 340 miles of range. The EV is slated to be delivered in mid-2020.
                                    <br/><br/>That “under €30,000” price tag VW is promoting applies to the base model of the ID.3, which has a 45kWh battery and offers 330 kilometers, or 205 miles of range. The company declined to provide  information for the two larger capacity variants of the car, which will feature 58kWh and 77kWh batteries, and will respectively
                                    offer around 420 and 550 kilometers (or 261 and 340 miles) per charge.
                                    <br /><br /> VW says the base version of the ID.3 will only charge at up to 50kW, and owners who want to charge faster (up to 100kW) will have to pay extra; 0kW charging will come standard on the midrange 58kWh version, while even faster 125kW charging will be available on the top-tier ID.3. The company is also offering an eight year / 160,000 kilometer warranty on the ID.3’s battery pack.
                                    <br/><br/> The ID.3, which resembles the German automaker’s popular Golf hatchback, has the potential to be a very important car for VW. It will be the first vehicle built on the company’s new modular all-electric platform, one that will power dozens more cars and SUVs that are waiting in the wings as part of the larger Volkswagen Group’s multibillion-dollar push into EVs. (That said, VW has no plans to release the car in the US right now, and it’s also unclear whether the company will sell the car in China.)</p>
                                </div>

                            </div>
                        </div>

                        
                    </div>
                    <hr className="mb-5 mt-4"></hr>
                </div>
            </div>
        )
    }
}

export default News;
