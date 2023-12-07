
import { useEffect, useState } from "react";

import back from "./joulestowatts_cover.jpeg";
import bg from "./Mask group.jpg";
import logo from "./joulestowatts_logo.jpeg";
import timeline from "./Screenshot 2023-12-04 144427.png";
import webframe from "./webdesign.jpg";
import wireframe from "./wireframe.svg";
import styled from "@emotion/styled";
import { Box, Typography, Stack } from "@mui/material";

const texts = ["PROGRESSIVE WEB APPLICATION", "TECH STACK – REACT JS, NODE JS"];

const AnimatedContainer = styled(Box)`
  opacity: 0;
  transform: translateY(20px);
  animation: slideFromBottom 2s ease-out forwards;

  @keyframes slideFromBottom {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AnimatedText = styled(Typography)`
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
`;

export default function CaseStudy() {
  const [displayText, setDisplayText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prevText) =>
        prevText === texts[0] ? texts[1] : texts[0]
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box>
      <Box>
        <Box
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
          }}
        >
          <img src={back} alt="" />
        </Box>
      </Box>
      <Box paddingTop={"30px"}>
        <AnimatedContainer padding={"0 100px"}>
          <AnimatedText>
            <Stack direction="row" spacing={0}>
              {/* Left Box */}
              <Box
                style={{
                  backgroundImage: `url(${"#f2f0f0"})`,
                  backgroundSize: "cover",
                }}
                boxShadow={"0px 0px 10px 0px"}
                flex="1" // Adjusted flex value for the left box
                textAlign="left"
                bgcolor="white"
                padding="14px 30px"
              >
                <img src={logo} alt="Logo" width="80px" />
                <AnimatedContainer>
                  <AnimatedText
                    fontFamily={"Nunito Sans,sans-serif"}
                    variant="h3"
                  >
                    Joules To Watts
                  </AnimatedText>
                  <Typography
                    color={"#848484"}
                    fontFamily={"Nunito Sans,sans-serif"}
                  >
                    JoulestoWatts is a leading IT talent solutions provider,
                    specializing in permanent staffing, contract staffing, and
                    the Hire-Train-Deploy model. we have a proven track record
                    of matching the right candidates with the right job
                    opportunities.
                  </Typography>
                  <AnimatedText>
                    <Stack direction="row" spacing={2} marginTop="20px">
                      <Box>
                        <Box
                          borderRadius={"30px"}
                          bgcolor={"#0091F0"}
                          padding={"10px"}
                        >
                          <Typography
                            color={"white"}
                            fontFamily={"Nunito Sans,sans-serif"}
                          >
                            {displayText}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </AnimatedText>
                </AnimatedContainer>
              </Box>

              <Box
                boxShadow={"0px 0px 10px 0px"}
                bgcolor={"white"}
                flex="2"
                maxWidth="60%"
              >
                {" "}
                <img
                  src={bg}
                  alt="Background"
                  style={{ width: "100%", paddingTop: "25px" }}
                />
              </Box>
            </Stack>
          </AnimatedText>
        </AnimatedContainer>

        <AnimatedContainer>
          <AnimatedText>
            <section
              style={{
                padding: "0 100px",
                marginTop: "3rem",
              }}
            >
              <Stack
                marginTop={"-50px"}
                marginBottom={"20px"}
                direction={"column"}
                spacing={8}
                position={"relative"}
                alignItems={"center"}
              >
                <Stack pt={10} spacing={15} direction={"row"}>
                  <Box>
                    <Typography
                      fontSize={"20px"}
                      color={"#161f75"}
                      fontFamily={"Nunito Sans,sans-serif"}
                    >
                      Brief
                    </Typography>
                    <Box width={"70%"} border={"1px solid #161f75"}></Box>
                  </Box>
                  <Typography
                    textAlign={"left"}
                    fontWeight={"none"}
                    fontFamily={"Nunito Sans,sans-serif"}
                    fontSize={"18px"}
                  >
                    JoulestoWatts is a leading IT talent solutions provider,
                    specializing in permanent staffing, contract staffing, and
                    the Hire-Train-Deploy model. J2W comprises two integral
                    components: Consultants & HRBP. They need to design a portal
                    to bridge these two aspects.
                  </Typography>
                </Stack>
                <Stack pt={5} spacing={10} direction={"row"}>
                  <Box>
                    <Typography
                      fontSize={"20px"}
                      fontFamily={"Nunito Sans,sans-serif"}
                      color={"#161f75"}
                    >
                      Solution
                    </Typography>
                    <Box width={"70%"} border={"1px solid #161f75"}></Box>
                  </Box>
                  <Typography
                    textAlign={"left"}
                    fontFamily={"Nunito Sans,sans-serif"}
                    fontSize={"18px"}
                  >
                    Our solution is to build separate URLs and logins for both
                    [Consultants & HRBP]. The HRBP platform would function like
                    an admin panel, allowing them to manage consultant roles,
                    activities, etc. Key aspects of this portal would include a
                    ticketing system to manage the work of consultants, panel
                    member availability for scheduling interviews, overall data
                    population of each consultant, various reports, and
                    management of candidate resumes.
                  </Typography>
                </Stack>
              </Stack>
            </section>
          </AnimatedText>
        </AnimatedContainer>

        <Stack
          borderRadius={"30px"}
          padding={"30px"}
          // bgcolor={"cadetblue"}
          // style={{
          //   backgroundImage: `url(${back1})`,
          //   backgroundSize: "cover",
          // }}
          spacing={4}
          mt={10}
        >
          {/* <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: "-1",
              background:
                "linear-gradient(to bottom, #161f75 10%, transparent 50%)",
              animation: "wave-animation 2s infinite linear",
              backgroundImage: `url(${back})`,
            }}
          /> */}

          <Box>
            <Typography
              textAlign={"left"}
              fontSize={"30px"}
              mb={1}
              fontFamily={"Nunito Sans,sans-serif"}
              color={"#161f75"}
            >
              Wireframes
            </Typography>
            <Box width={"10%"} border={"1px solid #161f75"}></Box>
          </Box>

          <Box>
            <img
              style={{
                boxShadow: "0px 0px 10px 0px",
              }}
              src={wireframe}
              alt=""
            />
          </Box>
          <Stack>
            <Box>
              <Typography
                textAlign={"left"}
                fontSize={"30px"}
                mb={1}
                fontFamily={"Nunito Sans,sans-serif"}
                color={"#161f75"}
              >
                Project TimeLine
              </Typography>
              <Box width={"10%"} border={"1px solid #161f75"}></Box>
            </Box>
            <img src={timeline} alt="" />
          </Stack>
          <Box>
            <Typography
              textAlign={"left"}
              fontSize={"30px"}
              mb={1}
              fontFamily={"Nunito Sans,sans-serif"}
              color={"#161f75"}
            >
              Webdesign
            </Typography>
            <Box width={"10%"} border={"1px solid #161f75"}></Box>
          </Box>

          <Box>
            <img
              style={{
                boxShadow: "0px 0px 10px 0px",
              }}
              src={webframe}
              alt=""
            />
          </Box>
        </Stack>
        {/* <Box
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            opacity: 1,
          }}
        >
          <img src={back} alt="" />
        </Box> */}
        <Stack
          padding={"0 100px"}
          pb={15}
          pt={10}
          spacing={15}
          direction={"row"}
        >
          <Box>
            <Typography
              fontSize={"20px"}
              color={"#161f75"}
              fontFamily={"Nunito Sans,sans-serif"}
            >
              Result
            </Typography>
            <Box width={"70%"} border={"1px solid #161f75"}></Box>
          </Box>
          <Typography
            textAlign={"left"}
            fontWeight={"none"}
            fontFamily={"Nunito Sans,sans-serif"}
            fontSize={"18px"}
          >
            After rebranding and revamping the website, the average time spent
            on the homepage increased by 3x.
            <br />
            Average page visits from the homepage increased from 2 to 5.
            <br />
            The merchandise page had 2x more conversions.
          </Typography>
        </Stack>
      </Box>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </Box>
  );
}
