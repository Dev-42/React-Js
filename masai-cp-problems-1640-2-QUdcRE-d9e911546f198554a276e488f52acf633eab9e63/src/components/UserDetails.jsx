// import module.css here;
import styles from './userDetails.module.css'
const UserDetails = ({props}) => {
  const {avatar,first_name,last_name,address,karma,followers,posts,is_following} = props
  return (
    <>
      <div data-testid="user-container" className={styles.container}>
        {/* user image */}
        <img src={avatar} alt="UserImage" className={styles.image} />
        <div>
          <div className={styles.nameContainer}>
            <h3 data-testid="user-fname">{first_name}</h3>
            <h3 data-testid="user-lname">{last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address" className={styles.address}>{address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma" className={styles.details}>{karma}</h3>
          <p className={styles.items}>Karma</p>
        </div>
        <div>
          <h3 data-testid="user-followers" className={styles.details}>{followers}</h3>
          <p className={styles.items}>Followers</p>
        </div>
        <div>
          <h3 data-testid="user-posts" className={styles.details}>{posts}</h3>
          <p className={styles.items}>Posts</p>
        </div>
        {is_following ? <button data-testid="follow-btn" className={styles.btn}>follow</button> : <button data-testid="follow-btn" className={styles.btn}>unfollow</button>}
      </div>
    </>
  );
};
export default UserDetails;
