import React from "react";
import "./style.css";
import { Grid, GridRow, GridColumn, Button } from "semantic-ui-react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { login } from "features/Home/homeSlice";
const Login = () => {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    dispatch(
      login({
        accessToken: response.accessToken,
        picture: response.picture.data.url,
        name: response.name,
      })
    );
  };

  const responseGoogle = (response) => {
    const { Tt, accessToken, profileObj } = response;
    const { Du } = Tt;
    const { imageUrl } = profileObj;
    dispatch(
      login({
        accessToken: accessToken,
        picture: imageUrl,
        name: Du,
      })
    );
  };

  return (
    <Grid className="card-login">
      <GridRow>
        <GridColumn computer={16}>
          <h1 className="text text-center">Mời Bạn Chọn Cách Đăng Nhập</h1>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn className="text-center " computer={8}>
          <FacebookLogin
            appId="252933709306308"
            callback={responseFacebook}
            fields="name,email,picture"
            render={(renderProps) => (
              <Button
                circular
                content="Đăng Nhập Với Facebook"
                color="facebook"
                icon="facebook"
                onClick={renderProps.onClick}
              />
            )}
          />
        </GridColumn>
        <GridColumn className="text-center" computer={8}>
          <GoogleLogin
            clientId="664523963838-7jcppbs0lvo6sqs8d3o5585rtsgjeuen.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={(renderProps) => (
              <Button
                circular
                color="google plus"
                content="Đăng Nhập Với Google"
                icon="google"
                onClick={renderProps.onClick}
              />
            )}
            cookiePolicy={"single_host_origin"}
          />
        </GridColumn>
      </GridRow>
    </Grid>
  );
};

export default Login;
