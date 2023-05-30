import React from 'react';
import './Product.css';
import { FaStar } from 'react-icons/fa';
import CommentSection from './Comment.jsx';

// import Colors from './components/Colors'
// import DetailsThumb from './components/DetailsThumb';

class Product extends React.Component{

 

  render(){
    const renderStars = () => {
        const stars = [];
        let rating=3;
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<FaStar key={i} className="star filled" size='55' style={{color:'gold',marginTop:'10px', marginRight:'20px'}}/>);
          } else {
            stars.push(<FaStar key={i} className="star"  size='55' style={{color:'#faf5e6',marginTop:'10px', marginRight:'20px'}}/>);
          }
        }
        return stars;
      };


    //comment function
    return(
      <div className="app">
        
            <div className="details" >
              <div className="big-img">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457" alt=""/>
                {renderStars()}
              </div>

              <div className="box">
                <div className="row">
                  <h2>The King of Drugs</h2>

                  <h6>Kim So-jin</h6>
              
             <div class="flex-container">
  <h5 style={{marginRight:'10px', fontSize:'25px'}}>Status: </h5>
  <span>Available</span>
</div>

                </div>

                <p>A book description is a short summary of a book's story or content that is designed to “hook” a reader and lead to a sale. Typically, the book's description conveys important information about its topic or focus 
                    (in nonfiction) or the plot and tone (for a novel or any other piece of fiction)
                    The Drrected by Woo Min-h It stars Song Kang-ho as Lee Doo-sam, an ordinary small-time narcotics dealer who becomes an infamous drug lord in Korea during the 1970s. The film also features Jo Jung-suk as a prosecutor from Seoul who is intent on taking Lee down and Bae Doona as a lobbyist who guides Lee into the upper levels of drug dealing. Other cast members include Kim Dae-myung, Kim So-jin, Lee Hee-joon, Jo Woo-jin and Yoon Je-moon.[7][8] The film was released on December 19, 2018
                    </p>

<CommentSection/>
              </div>
            </div>

      </div>
    );
  };
}

export default Product;