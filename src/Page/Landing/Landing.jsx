import styled from "styled-components";
import BG from "../../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const nav = useNavigate();
  return (
    <LandingStyle>
      <article className="landing_Wrapper">
        <header>
          <h2>VORTEX-MOVIE</h2>
          <button onClick={() => nav("/login")}>Sign in</button>
        </header>

        <section className="Hero">
          <article className="Hero_Wraper">
            <h2>
              Unlimited <span>movies</span>, TV <br />
              shows, and more
            </h2>
            <span>Starts at ₦1,500. Cancel anytime.</span>

            <div className="membership">
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="membership_Input">
                <input type="text" placeholder="Search" name="Search" />
                <button onClick={() => nav("/login")}>Get Started</button>
              </div>
            </div>
          </article>
        </section>
      </article>
    </LandingStyle>
  );
};

export default Landing;

const LandingStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.531), #000), url(${BG});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  .landing_Wrapper {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    header {
      width: 100%;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        color: red;
        font-size: 1.7rem;
      }

      button {
        width: 6rem;
        height: 2.5rem;
        color: white;
        background-color:red;
        border-radius: 0.2rem;
        border: none;
        cursor: pointer;
        transition: all 350ms ease-in-out;

      }
    }

    .Hero {
      width: 100%;
      height: 90%;
      display: flex;
      align-items: center;

      .Hero_Wraper {
        width: 100%;
        height: 80%;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        align-items: center;

        h2 {
          font-size: 5.5rem;
          text-align: center;

          span {
            color: red;
          }
        }

        .membership {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
          width: 70%;
          align-items: center;
          gap: 1rem;

          p {
            color: lightgray;
          }

          .membership_Input {
            width: 90%;
            height: 4rem;
            display: flex;
            align-items: center;
            gap: 1rem;

            input {
              width: 80%;
              height: 90%;
              padding-left: 1rem;
              border: 1px solid gray;
              border-radius: 0.2rem;
              background-color: transparent;
              outline: none;
              color: white;
            }
            button {
              width: 20%;
              height: 90%;
              color: white;
              background-color: red;
              cursor: pointer;
              border: none;
              border-radius: 0.2rem;
              font-size: 1.3rem;
              font-weight: bold;
              transition: all 350ms ease-in-out;

              &:hover {
                background-color: darkred;
              }
            }
          }
        }
      }
    }
  }
`;
