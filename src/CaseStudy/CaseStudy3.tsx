import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";

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

const Text = [
  {
    name: "Empathize",
    paragraph:
      "We understand the experience, situation and emotion of the person who we are working for. ",
  },
  {
    name: "Define",
    paragraph:
      "We process and synthesize the findings in order to form a user point of view that needs to be addressed.    ",
  },
  {
    name: "Ideate",
    paragraph:
      "We focus on idea generation. We explore a wide variety and large quantity of ideas to go beyond the solutions.    ",
  },
  {
    name: "Prototype",
    paragraph:
      "We build to think. A simple and fast way to shape ideas so users can experience and interact with them.    ",
  },
];

const AnimatedText = styled(Typography)`
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
`;

export default function CaseStudy3() {
  const [displayText, setDisplayText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prevText) =>
        prevText === texts[0] ? texts[1] : texts[0]
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  const imageStyle = {
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0px 0px 10px 0px",
    transition: "transform 0.3s", // Add smooth transition for the zoom effect
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };
  const imageStyle1 = {
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0px 0px 10px 0px",
    transition: "transform 0.3s", // Add smooth transition for the zoom effect
    transform: isHovered1 ? "scale(1.1)" : "scale(1)",
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpen1, setIsDrawerOpen1] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const handleDrawerOpen1 = () => {
    setIsDrawerOpen1(true);
  };

  const handleDrawerClose1 = () => {
    setIsDrawerOpen1(false);
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const boxStyle = {
    maxWidth: 255,
    width: "100%",
    backgroundColor: isHovered2 ? "blue" : "white",
    transition: "background-color 0.3s", // Add a smooth transition effect
    color: isHovered2 ? "white" : "black",
  };

  return (
    <Box>
      <Box paddingTop={"30px"}>
        <AnimatedContainer mb={5} padding={"0 100px"}>
          <AnimatedText>
            <Stack textAlign={"left"}>
              <img
                style={{
                  maxWidth: 150,
                  width: "100%",
                }}
                src={logo}
                alt=""
              />
              <Typography
                fontSize={"35px"}
                color={"Black"}
                fontFamily={"Nunito Sans,sans-serif"}
                whiteSpace={"nowrap"}
              >
                JoulestoWatts
              </Typography>
              <Stack mt={2} mb={2} direction={"row"} spacing={3}>
                <Box
                  style={{
                    background: "#0091f0",
                    padding: "10px",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 10px 0px",
                  }}
                >
                  <Typography
                    fontSize={"15px"}
                    color={"white"}
                    fontFamily={"Nunito Sans,sans-serif"}
                    whiteSpace={"nowrap"}
                  >
                    WEB APPLICATION
                  </Typography>
                </Box>

                <Box
                  style={{
                    background: "#0091f0",
                    padding: "10px",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 10px 0px",
                  }}
                >
                  <Typography
                    fontSize={"15px"}
                    color={"white"}
                    fontFamily={"Nunito Sans,sans-serif"}
                    whiteSpace={"nowrap"}
                  >
                    MOBILE APPLICATION
                  </Typography>
                </Box>
              </Stack>

              <Stack pb={5} spacing={15} direction={"row"}>
                <Box>
                  <Typography
                    fontSize={"45px"}
                    color={"Black"}
                    fontFamily={"Lato,sans-serif"}
                    whiteSpace={"nowrap"}
                  >
                    OUR CLIENT
                  </Typography>
                  <Box width={"70%"} border={"1px solid #0091f0"}></Box>
                </Box>
                <Typography
                  textAlign={"left"}
                  fontWeight={"none"}
                  fontFamily={"Lato Sans,sans-serif"}
                  fontSize={"18px"}
                >
                  JoulestoWatts is a leading IT talent solutions provider,
                  specializing in permanent staffing, contract staffing, and the
                  Hire-Train-Deploy model. J2W comprises two integral
                  components: Consultants & HRBP. They need to design a portal
                  to bridge these two aspects.
                </Typography>
              </Stack>

              {/* <img height={350} src={bg} alt="" /> */}
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
                spacing={5}
                position={"relative"}
                alignItems={"center"}
              >
                <Stack pt={10} spacing={15} direction={"row"}>
                  <Box>
                    <Typography
                      fontSize={"20px"}
                      color={"Black"}
                      fontFamily={"Nunito Sans,sans-serif"}
                    >
                      Brief
                    </Typography>
                    <Box width={"70%"} border={"1px solid #0091f0"}></Box>
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
                <Box width={"100%"} border={"1px solid #0091f0"}></Box>

                <Stack pt={5} spacing={10} direction={"row"}>
                  <Box>
                    <Typography
                      fontSize={"20px"}
                      fontFamily={"Nunito Sans,sans-serif"}
                      color={"Black"}
                    >
                      Solution
                    </Typography>
                    <Box width={"70%"} border={"1px solid #0091f0"}></Box>
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
              <Box width={"100%"} border={"1px solid #0091f0"}></Box>

              <Stack
                padding={"0 50px"}
                margin={"0 auto"}
                direction={"row"}
                spacing={2}
              >
                {Text.map((item, index) => (
                  <Box key={index} display={"flex"} mb={3}>
                    <Stack
                      height={180}
                      onMouseOver={() => setIsHovered2(true)}
                      onMouseOut={() => setIsHovered2(false)}
                      style={boxStyle}
                      borderRadius={"30px"}
                      padding={2}
                      spacing={6}
                      bgcolor="white"
                      border="1px solid gray"
                    >
                      <Typography textAlign="left">{item.name}</Typography>
                      <Typography textAlign="left">{item.paragraph}</Typography>
                    </Stack>
                  </Box>
                ))}
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
        </Box>
        <Stack
          mb={10}
          borderRadius={"30px"}
          padding={"50px 0 0 70px"}
          spacing={4}
        >
          <Stack
            margin={"0 auto"}
            direction={"row"}
            spacing={10}
            width={"100%"}
          >
            <Box>
              <Box>
                <Typography
                  textAlign={"left"}
                  fontSize={"30px"}
                  mb={1}
                  fontFamily={"Nunito Sans,sans-serif"}
                  color={"Black"}
                >
                  Wireframes
                </Typography>
                <Box width={"20%"} border={"1px solid #0091f0"}></Box>
              </Box>
              <Box mt={5}>
                <img
                  style={imageStyle}
                  src={wireframe}
                  alt=""
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  onClick={handleDrawerOpen}
                />
              </Box>
            </Box>
            <Dialog
              open={isDrawerOpen}
              onClose={handleDrawerClose}
              maxWidth="md"
            >
              <DialogTitle>Webdesigns</DialogTitle>
              <DialogContent>
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  src={wireframe}
                  alt=""
                />
              </DialogContent>
            </Dialog>
            <Box>
              <Box>
                <Typography
                  textAlign={"left"}
                  fontSize={"30px"}
                  mb={1}
                  fontFamily={"Nunito Sans,sans-serif"}
                  color={"Black"}
                >
                  Webdesign
                </Typography>
                <Box width={"20%"} border={"1px solid #0091f0"}></Box>
              </Box>

              <Box mt={5}>
                <img
                  style={imageStyle1}
                  src={webframe}
                  alt=""
                  onMouseOver={() => setIsHovered1(true)}
                  onMouseOut={() => setIsHovered1(false)}
                  onClick={handleDrawerOpen1}
                />
              </Box>
            </Box>
            <Dialog
              open={isDrawerOpen1}
              onClose={handleDrawerClose1}
              maxWidth="md"
            >
              <DialogTitle>Wireframes</DialogTitle>
              <DialogContent>
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  src={webframe}
                  alt=""
                />
              </DialogContent>
            </Dialog>
          </Stack>
        </Stack>
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
                      color={"Black"}
                      fontFamily={"Nunito Sans,sans-serif"}
                      whiteSpace={"nowrap"}
                    >
                      OUR PLANS & PROCESS
                    </Typography>
                    <Box width={"70%"} border={"1px solid #0091f0"}></Box>
                  </Box>
                  <Typography
                    gap={"2rem"}
                    textAlign={"left"}
                    fontWeight={"none"}
                    fontFamily={"Nunito Sans,sans-serif"}
                    fontSize={"18px"}
                  >
                    AT Digitals team introspected the Client’s need, worked
                    closely with the client’s team to design a highly responsive
                    prototype UI & creative mockups as a starting point, where
                    the end users can book for required services and can add any
                    level of customisations to their order – which is the main
                    differentiator.
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
                    integrated multiple third party API’s like Fedex Ship API to
                    enable the users for a smooth service booking facilities.
                    <br />
                    <br />
                    Ship It – You will get a pre-addressed / pre-paid FedEx
                    shipping label and a copy of the order mailed to you. NYC
                    Complimentary Pickup – Delivery is complimentary from 24 hr
                    residential doorman buildings.
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
              color={"Black"}
              fontFamily={"Nunito Sans,sans-serif"}
            >
              Result
            </Typography>
            <Box width={"70%"} border={"1px solid #0091f0"}></Box>
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
    </Box>
  );
}
