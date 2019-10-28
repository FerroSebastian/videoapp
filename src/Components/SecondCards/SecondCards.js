import React from 'react';
import TutorialButton from '../TutorialButton/TutorialButton'
import DB from '../../DB'
import VideoVW1 from '../Videos/Videos'

class SecondCards extends React.Component {
    render() {
        
        return (
            <div className="container card-group">
                {DB.JavaScript.map(function (value, index) {
                    return ([
                        <div className="card">
                            <div className="text-center mt-3"><img src={value.Image} class="w-50" alt="..." /></div>
                            <div className="card-body">
                                <h5 class="card-title text-center"><strong>{value.Title}</strong></h5>
                                <div className="card-text">
                                    <p>{value.Description}</p>
                                </div>
                                <div className="text-center"><TutorialButton url={value.VideoUrl} /></div>
                            </div>
                        </div> 
                    ]
                    )
                })}
                {/* <div className="card col-sm-4">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.Brand}</h5>
                        <p className="card-text">{this.props.Subtitle}</p>
                        <NewsButton />
                    </div>
                </div> */}

            </div>


        )
    }
}

export default SecondCards;


// render(){
//     let db = DB();
//     return(
//         <div className="row mt-3 text-center">
//             {db.map(function(value,index){
//                 return([
//                     <div className="col-md-4 p-3 my-3">
//                         <a class="card bg-dark text-white zoom" data-toggle="collapse"
//                             href={"#collapse"+index} role="button" aria-expanded="false"
//                             aria-controls={"collapse"+index}>
//                             <img src={value.src} class="card-img" alt="..."/>
//                             <div class="card-img-overlay d-flex flex-column justify-content-between">
//                                 <h5 class="card-title">{value.titulo}</h5>
//                                 <p class="card-text">{value.subtitulo}</p>
//                             </div>
//                         </a>
//                     </div>,
//                     <div class="collapse" id={"collapse"+index}>
//                         <Video id={index}/>
//                         <Description id={index}/>
//                     </div>
//                 ]
//                 )
//             })}
//         </div>
//     );
// }