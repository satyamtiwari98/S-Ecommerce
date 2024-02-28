import { connect } from "react-redux";

const User = ({ name, email, mobile }) => {
  return (
    <div>
      <h1>My Name is {name}.</h1>
      <h2>My email is {email}</h2>
      <h3>My mobile is {mobile}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  mobile: state.user.mobile,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(User);
