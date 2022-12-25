import React, { useState } from 'react';
import "../Components/Card/card.css";
import Sigiriya from "../images/sigiriya.jpg";

function ReadMore({children, maxCharacterCount = 500}){
    const text = children;

    const [isTruncated, setIsTrancated] = useState(true);
    const resultingSring = isTruncated ? text.slice(0, maxCharacterCount):text;
    
    function toggleIsTruncated(){
        setIsTrancated(!isTruncated)
    }

    return(
        
        <p className='has-text-left'>
        {resultingSring}
        <br/>
        <span onClick={toggleIsTruncated} className='read-more-button'>{isTruncated ? "Read More" : "\n Read Less"}</span> 
        </p>
    )
}


function Destination(props) { 
    return (
        <div>
        <h1>World Best Destination</h1>
        <section className='destination'>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
            <div className='location-card'>
                <img className='images' src={Sigiriya}/>
                <div className='card-line'/>
                <div className='card-details'>
                <h3>SIGIRIYA</h3>
                <h4>Dambulla, Sri Lanka</h4>
                <div className='discriptions'>
                <ReadMore>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock approximately 180 m (590 ft) high.
                According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock.
                </ReadMore>
                </div>
                </div>
            </div>
        </section>
            
            
        </div>
    );
}

export default Destination;