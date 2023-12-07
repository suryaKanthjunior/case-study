import { Box, Stack, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

import bg from "./Mask group.jpg";
import jb2 from "./funding2.jpg";
import jb3 from "./blank-white-card-paper-with-pen-apple-colorful-office-stationeries-laptop-black-background.jpg";
import jb4 from "./composition-natural-material-stationery.jpg";
import jb5 from "./top-view-keyboard-plant-arrangement.jpg";
import logo from "./joulestowatts_logo.jpeg";
import webframe from "./webdesign.jpg";
import wireframe from "./wireframe.svg";

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

export default function CaseStudy2() {
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
      <Box paddingTop={"30px"}>
        <AnimatedContainer mb={5} padding={"0 100px"}>
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

        <Box
          sx={{
            backgroundImage: `url(${jb5})`,
            backgroundAttachment: "fixed",
            padding: "10% 10% 10% 10%",
            position: "relative",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              content: '""',
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              content: '""',
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
              filter: "blur(10px)",
            }}
          />
          {/* Your content goes here */}
        </Box>

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
        <Box
          sx={{
            backgroundImage: `url(${jb3})`,
            backgroundAttachment: "fixed",
            height: "40vh",
            padding: "10% 10% 10% 10%",
            position: "relative",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              content: '""',
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              content: '""',
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
              filter: "blur(10px)",
            }}
          />
          {/* Your content goes here */}
        </Box>
        <Stack borderRadius={"30px"} padding={"30px"} spacing={4} mt={10}>
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

          <Box
            sx={{
              backgroundImage: `url(${jb4})`,
              backgroundAttachment: "fixed",
              height: "40vh",
              padding: "10% 10% 10% 10%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                content: '""',
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                content: '""',
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                zIndex: 1,
                filter: "blur(10px)",
              }}
            />
            {/* Your content goes here */}
          </Box>
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
                        whiteSpace={"nowrap"}
                      >
                        OUR PLANS & PROCESS
                      </Typography>
                      <Box width={"70%"} border={"1px solid #161f75"}></Box>
                    </Box>
                    <Typography
                      gap={"2rem"}
                      textAlign={"left"}
                      fontWeight={"none"}
                      fontFamily={"Nunito Sans,sans-serif"}
                      fontSize={"18px"}
                    >
                      AT Digitals team introspected the Client’s need, worked
                      closely with the client’s team to design a highly
                      responsive prototype UI & creative mockups as a starting
                      point, where the end users can book for required services
                      and can add any level of customisations to their order –
                      which is the main differentiator.
                      <br />
                      <br />
                      (Source – AlterKnit New York LLC)
                      <br />
                      <br />
                      Our UI/UX designers meticulously designed the application
                      using Figma and the development team did the needful
                      completing the whole application development process in
                      quick succession. Our testing team ensured the concurrent
                      usability scenarios and performances.
                      <br />
                      <br />
                      We created this web application for AlterKnit New York,
                      where their customers can book / opt in for their unique
                      services through the website in an e-commerce like flow
                      either by “Ship It” or “NYC Complimentary Pickup”. We
                      integrated multiple third party API’s like Fedex Ship API
                      to enable the users for a smooth service booking
                      facilities.
                      <br />
                      <br />
                      Ship It – You will get a pre-addressed / pre-paid FedEx
                      shipping label and a copy of the order mailed to you. NYC
                      Complimentary Pickup – Delivery is complimentary from 24
                      hr residential doorman buildings.
                    </Typography>
                  </Stack>
                </Stack>
              </section>
            </AnimatedText>
          </AnimatedContainer>
          <Box
            sx={{
              backgroundImage: `url(${jb3})`,
              backgroundAttachment: "fixed",
              height: "40vh",
              padding: "10% 10% 10% 10%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                content: '""',
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                content: '""',
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                zIndex: 1,
                filter: "blur(10px)",
              }}
            />
            {/* Your content goes here */}
          </Box>
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
        <Box
          sx={{
            backgroundImage: `url(${jb2})`,
            backgroundAttachment: "fixed",
            height: "40vh",
            padding: "10% 10% 10% 10%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              content: '""',
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              content: '""',
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
              filter: "blur(10px)",
            }}
          />
          {/* Your content goes here */}
        </Box>

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
