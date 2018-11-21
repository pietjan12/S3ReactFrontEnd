import React, {Component} from "react";
import { withRouter } from "react-router";
import ReactLoading from 'react-loading';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "Components/Grid/GridItem.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";
import CustomInput from "Components/CustomInput/CustomInput.jsx";
import Button from "Components/CustomButtons/Button.jsx";
import Card from "Components/Card/Card.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import CardAvatar from "Components/Card/CardAvatar.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import CardFooter from "Components/Card/CardFooter.jsx";
import avatar from "img/marc.jpg"
import { Formik } from 'formik';

//CALLS
import { connect } from 'react-redux';
import { fetchUser } from 'Modules/Account/head';
import { logoutUser } from 'Modules/Authentication/head';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class UserProfile extends Component {
  componentWillMount() {
    //fetch user details by username stored in authentication.
    this.props.fetchUser(this.props.account.user);
  }

  updateProfile() {

  }

  render() {
    const { classes, user } = this.props;
    console.log(user);
    if(user.length === 0) {
      //return loading screen while redux action finishes.
      return (
          <div>
               <ReactLoading type="bubbles" color="#fff" height={'50px'} width={'50px'} className="centered"/>
          </div>
      );
    } else {
      return (
        <div>
          <Formik 
            initialValues ={{ username : user.username, email : user.email, newpass: "", confirmnewpass : ""}}
            render={({
              values,
              handleChange
            }) => ( 
              <form onSubmit={this.updateProfile}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={8}>
                    <Card>
                      <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                        <p className={classes.cardCategoryWhite}>Complete your profile</p>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem xs={12} sm={6} md={3}>
                            <CustomInput
                              labelText="Username"
                              id="username"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={values.username}
                              onChange={handleChange}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={4}>
                            <CustomInput
                              labelText="Email address"
                              id="email"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={values.email}
                              onChange={handleChange}
                            />
                          </GridItem>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={12} sm={6} md={4}>
                            <CustomInput
                              labelText="Password"
                              id="newpass"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={values.newpass}
                              onChange={handleChange}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={4}>
                            <CustomInput
                              labelText="Confirm password"
                              id="confirmnewpass"
                              formControlProps={{
                                fullWidth: true
                              }}
                              value={values.confirmnewpass}
                              onChange={handleChange}
                            />
                          </GridItem>

                        </GridContainer>
                      </CardBody>
                      <CardFooter>
                        <Button color="primary">Update Profile</Button>
                      </CardFooter>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Card profile>
                      <CardAvatar profile>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={avatar} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody profile>
                        <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                        <h4 className={classes.cardTitle}>Alec Thompson</h4>
                        <p className={classes.description}>
                          Don't be scared of the truth because we need to restart the
                          human foundation in truth And I love you like Kanye loves Kanye
                          I love Rick Owens’ bed design but the back is...
                        </p>
                        <Button color="primary" round>
                          Follow
                        </Button>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </form>
            )}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  //TODO : rename state.account to state.auth.
  return {
      user: state.users,
      account: state.account
  };
}

export default withRouter(connect(mapStateToProps, { fetchUser, logoutUser })(withStyles(styles)(UserProfile)));
