import "../styles/TeamMembers.css";

const TeamMembers = ({ teamMembers }) => {
  const teamMember = teamMembers.map((member) => (
    <div key={member.id} className="teamMember">
      <div
        className="photo"
        style={{ backgroundImage: "url(" + member.photo + ")" }}
      ></div>
      <h4>{member.name}</h4>
      <p>{member.position}</p>
    </div>
  ));

  return <section className="team">{teamMember}</section>;
};

export default TeamMembers;
