import { Box, Stack, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import back from "./Agility-Transfora-banner-min.jpg";
import logo from "./joulestowatts_logo.jpeg";
import timeline from "./79cd95184483349.655302b884cad.png";
import webframe from "./Group-762098-4.jpg";
import wireframe from "./wireframe.png";
import Back1 from './stains-cement-surface.jpg'
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
export default function CaseStudy4() {
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
        <Box display={"flex"} justifyContent={"center"}
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            
          }}
        >
          <img src={back} alt="" />
        </Box>
      </Box>
      <Box marginTop={"-160px"} paddingTop={"30px"}>
        <AnimatedContainer padding={"0 85px"}>
          <AnimatedText>
            <Stack direction="row" spacing={0} paddingBottom={"40px"}>
              {/* Left Box */}
              <Box
                style={{
                  backgroundImage: `url(${"#F2F0F0"})`,
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
                    style={{
                        textShadow: "0px 0px 3px #0091F0",
                        color: "#444444",
                        fontSize: "60px",
                        fontWeight: "700"
                    }}
                  >
                    Joules To Watts
                  </AnimatedText>
                  <Typography
                    color={"#848484"}
                    fontFamily={"Nunito Sans,sans-serif"}
                    paddingTop={"20px"}
                  >
                    JoulestoWatts is a leading IT talent solutions provider,
                    specializing in permanent staffing, contract staffing, and
                    the Hire-Train-Deploy model. we have a proven track record
                    of matching the right candidates with the right job
                    opportunities.It’s a VUCA world out there, with digital disrupting way of life and placing unprecedented demand on digital customer experience and digital operational excellence. JoulesToWatts simplifies this transformation through Time, Talent and Ideas and gives Power To You.
                  </Typography>
                 <Stack direction={"row"} marginBottom={"30px"}>
                 <Box style={{
                        border: '3px solid #0091F0',
                        height: "56px",
                        marginTop: "40px",
                    }}></Box>
                <Typography  style={{
                        textShadow: "0px 0px 3px #abb8c3",
                        color: "#161F75",
                        fontSize: "25px",
                        fontWeight: "700",
                        margin: "30px",
                    }}>React
                    <Typography paddingLeft={"7px"} color={"gray"} fontSize={"17px"}>React.js, Node.js</Typography></Typography>
                    <Box style={{
                        border: '3px solid #0091F0',
                        height: "56px",
                        marginTop: "40px",
                    }}></Box>
                    <Typography  style={{
                        textShadow: "0px 0px 3px #abb8c3",
                        color: "#161F75",
                        fontSize: "25px",
                        fontWeight: "700",
                        margin: "30px",
                    }}>JavaScript
                    <Typography color={"gray"} paddingLeft={"7px"} fontSize={"17px"}>Typescript, Next.js</Typography></Typography>
                    <Box style={{
                        border: '3px solid #0091F0',
                        height: "56px",
                        marginTop: "40px",
                    }}></Box>
                    <Typography  style={{
                        textShadow: "0px 0px 3px #abb8c3",
                        color: "#161F75",
                        fontSize: "25px",
                        fontWeight: "700",
                        margin: "30px",
                    }}>WebPage
                    <Typography color={"gray"} paddingLeft={"7px"} fontSize={"17px"}>Html, Css</Typography></Typography>
                    </Stack>
                </AnimatedContainer>
              </Box>
            </Stack>
          </AnimatedText>
        </AnimatedContainer>
        <AnimatedContainer>
          <AnimatedText>
            <section
              style={{
                padding: "0 100px",
                margin: "5rem",
                backgroundColor: "#f1f1f1",
                boxShadow: "0px 0px 10px 0px",
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
                     sx={{
                        textShadow: "0px 0px 3px #abb8c3",
                        color: "#161F75",
                        fontSize: "23px",
                        fontWeight: "500",
                       
                     }}
                      fontFamily={"Nunito Sans,sans-serif"}
                    >
                      Brief
                    </Typography>
                    <Box width={"70%"} border={"1px solid #0091F0"}></Box>
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
                <Stack pt={1} spacing={10} direction={"row"}>
                  <Box>
                    <Typography
                        sx={{
                            textShadow: "0px 0px 3px #abb8c3",
                            color: "#161F75",
                            fontSize: "23px",
                            fontWeight: "500",
                           
                         }}
                      fontFamily={"Nunito Sans,sans-serif"}
                    >
                      Solution
                    </Typography>
                    <Box width={"70%"} border={"1px solid #0091F0"}></Box>
                  </Box>
                  <Typography
                    textAlign={"left"}
                    fontFamily={"Nunito Sans,sans-serif"}
                    fontSize={"18px"}
                   style={{
                    marginBottom: "40px",
                   }}
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
         
          //   backgroundSize: "cover",
          // }}
          spacing={4}
          margin={"60px"}
          style={{
            backgroundImage: `url(${Back1})`,
          }}
        
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
                "linear-gradient(to bottom, #161F75 10%, transparent 50%)",
              animation: "wave-animation 2s infinite linear",
              backgroundImage: `url(${back})`,
            }}
          /> */}
          <Box style={{
             margin: "auto",
          }}>
            <Typography
             sx={{
                textShadow: "0px 0px 3px #0091F0",
                color: "#444444",
                fontSize: "50px",
                fontWeight: "700",
                paddingTop: "10px"
               
             }}
              mb={1}
              fontFamily={"Nunito Sans,sans-serif"}
            >
              Wireframes
            </Typography>
            <Box border={"1px solid #0091F0"}></Box>
          </Box>
          <Box  style={{
             margin: "auto",
          }} paddingTop={"40px"}>
            <img
              style={{
                boxShadow: "0px 0px 10px 0px",
                transition: "transform 0.5s ease",
                overflow: "hidden",
                cursor: "pointer",
                marginTop: "40px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              src={wireframe}
              alt=""
            />
          </Box>
          <Stack>
            <Box  style={{
             margin: "auto",
             paddingTop: "30px"
             
          }}>
              <Typography
                mb={1}
                fontFamily={"Nunito Sans,sans-serif"}
                sx={{
                    textShadow: "0px 0px 3px #0091F0",
                    color: "#444444",
                    fontSize: "50px",
                    fontWeight: "700"
                   
                 }}
              >
                Project TimeLine
              </Typography>
              <Box border={"1px solid #0091F0"}></Box>
            </Box>
            <img src={timeline} alt=""  style={{
                boxShadow: "0px 0px 10px 0px",
                margin: "50px",
                transition: "transform 0.5s ease",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }} />
          </Stack>
          <Box  style={{
             margin: "auto",
          }}>
            <Typography
              mb={1}
              fontFamily={"Nunito Sans,sans-serif"}
              sx={{
                textShadow: "0px 0px 3px #0091F0",
                color: "#444444",
                fontSize: "50px",
                fontWeight: "700"
               
             }}
            >
              Webdesign
            </Typography>
            <Box border={"1px solid #0091F0"}></Box>
          </Box>
          <Box  style={{
             margin: "auto",
             paddingTop: "40px",
             marginBottom: "40px"
          }}>
            <img
              style={{
                transition: "transform 0.5s ease",
                overflow: "hidden",
                cursor: "pointer",
                marginTop: "40px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
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
          pb={9}
          pt={7}
          spacing={15}
          direction={"row"}
          margin={"50px"}
          style={{
            backgroundColor: "black",
            boxShadow: "0px 0px 10px 0px",
          }}
        >
           <Box style={{
                        borderLeft: '4px solid #0091F0',
                        height: "156px",
                     
                        padding: "20px",
                    }}>
            <Typography
              sx={{
                // textShadow: "0px 0px 3px #abb8c3",
                // color: "#161F75",
                fontSize: "33px",
                fontWeight: "700",
                color: "#02010100",
              stroke: "#449B93",
              strokeWidth: '1px',
              WebkitTextStrokeColor: "#449B93",
              WebkitTextStrokeWidth: "1px",
              paddingTop: "40px",
            
               
             }}
              fontFamily={"Nunito Sans,sans-serif"}
            >
              Result
            </Typography>
          </Box>
          <Typography lineHeight={"1.7"} fontStyle={"italic"}
            textAlign={"left"}
            fontFamily={"Nunito Sans,sans-serif"}
            sx={{
                textShadow: "0px 0px 3px #abb8c3",
                color: "white",
                fontSize: "19px",
                fontWeight: "500",
                paddingTop: "15px",
             }}
          >
            After rebranding and revamping the website, the average time spent
            on the homepage increased by 3x.
           <Typography lineHeight={"1.7"}  sx={{
                textShadow: "0px 0px 3px #abb8c3",
                color: "white",
                fontSize: "19px",
                fontWeight: "500",
               
             }}>
            Average page visits from the homepage increased from 2 to 5.
            </Typography>
            <Typography lineHeight={"1.7"}  sx={{
                textShadow: "0px 0px 3px #abb8c3",
                color: "white",
                fontSize: "19px",
                fontWeight: "500",
               
             }}>
            The merchandise page had 2x more conversions.
            </Typography>
            <Typography lineHeight={"1.7"}
            textAlign={"left"}
            fontFamily={"Nunito Sans,sans-serif"}
            sx={{
                textShadow: "0px 0px 3px #abb8c3",
                color: "white",
                fontSize: "19px",
                fontWeight: "500",
             }}
          >
           This is a food ordering app offering food delivery services from fast food bars, and others. </Typography>
            <Typography lineHeight={"1.7"}
            textAlign={"left"}
            fontFamily={"Nunito Sans,sans-serif"}
            sx={{
                textShadow: "0px 0px 3px #abb8c3",
                color: "white",
                fontSize: "19px",
                fontWeight: "500",
             }}
          >
           The design challenges, solutions, and UI details are displayed and explained to illustrate the design project.</Typography>
            <Typography
            textAlign={"left"}
            fontFamily={"Nunito Sans,sans-serif"}
            sx={{
                textShadow: "0px 0px 3px #abb8c3",
                color: "white",
                fontSize: "19px",
                fontWeight: "500",
             }}
          >
          Job Portal App has been specially made for designers and freelancers. </Typography>
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