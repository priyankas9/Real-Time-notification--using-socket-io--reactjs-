import "./card.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
const Card = ({ post }) => {
 const [liked,setLiked] = useState(false);
const handleNotification = () => {
  setLiked(true);
}
const handleRemoveNotification = () => {
  setLiked(false);
}
  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? ( <div className="cardIcon">
        <FavoriteIcon style={{ color: 'red' }} onClick={handleRemoveNotification}/>
        
       </div>) :  <div className="cardIcon">
        <FavoriteIcon onClick={handleNotification}/>
        
       </div>}
      
       <div className="cardIcon">
       
        <CommentIcon/>
       
       </div>
       <div className="cardIcon">
       
       <ShareIcon/>
       
       </div>
       <div className="cardIcon infoIcon">
       <InfoIcon/>
       </div>
        
      </div>
    </div>
  );
};

export default Card;
