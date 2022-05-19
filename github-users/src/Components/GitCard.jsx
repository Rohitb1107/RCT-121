import "../App.css";

const GithubCard = ({ avatar_url, login }) => {
  return (
    <div className="git-card">
      <img src={avatar_url} alt={login} />
      <div>{login}</div>
    </div>
  );
};

export default GithubCard;
