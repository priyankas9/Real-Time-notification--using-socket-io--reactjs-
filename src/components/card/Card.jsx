import "./card.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
const Card = ({ post }) => {
 

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
       <div className="cardIcon">
        <FavoriteIcon/>
        
       </div>
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
