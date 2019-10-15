import React from 'react';
import VideoVW1 from './../Videos/Videos'


class News extends React.Component {
    render() {
        return (
            <div className="container">

            <div className="my-5">
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
                                    <h2 className="font-weight-bold"><a>Title of the news</a></h2>
                                    <p>Written by <a><strong>Abby Madison</strong></a>, 26/08/2018</p>
                                   
                                    
                                </div>
                            </div>
                            <div className="mt-3 container">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui praesentium voluptatum deleniti atque
                                  corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                                  sunt in culpa nemo enim ipsam voluptatem quia voluptas sit qui officia deserunt mollitia animi, id
                                  est laborum et dolorum fuga quidem rerum facilis est distinctio.</p>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                                  maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Quis autem vel
                                  eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Temporibus
                                  autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                                  repudiandae sint et molestiae non recusandae itaque earum rerum.</p>

                            </div>

                        </div>
                    </div>
                  </div> 
                </div> 
                <hr className="mb-5 mt-4"></hr>
            </div>
                        )
                    }
                }
                
export default News;
