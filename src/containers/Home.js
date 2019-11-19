import React from 'react';
import styled from 'styled-components';
import { Section, Card, HeaderBar, Row, HeaderImg, BarHeader, Column } from '../components';

const Home = () => {
  return (
    <>
      <Row>
        <Black />
        <Dev className="flex">
          <Subtitle>Developer</Subtitle>
          <Subtext>Full Stack Dev</Subtext>
          <Subtext>Web Design</Subtext>
          <Subtext>Instruction</Subtext>
        </Dev>
        <BannerIcon src="https://cdn.discordapp.com/attachments/518602442200580097/646171895070326815/kaos_kj_bw.png" />
        <Design className="flex">
          <Subtitle>Designer</Subtitle>
          <Subtext>Vector Design</Subtext>
          <Subtext>3D Modeling</Subtext>
          <Subtext>Photography</Subtext>
        </Design>
      </Row>

      {/* STATEMENT */ }
      <Section>
        <Row>
          <Card className="flat">
            <h3>Bottom Line</h3>
            I am passionate about solving problems. I frequently seek to work with and learn from others. My greatest lessons have come in experiences from peers and mentors (some fun, some hard). It is my joy to focus my energy and knowledge on the development and edification of others in the field. People are still the future of technology.
        </Card>
        </Row>
      </Section>

      {/* HIGHLIGHTS */ }
      <Section className="light">
        <BarHeader className="light">Highlights.</BarHeader>
        <Row>
          <Card className="flat">
            <h3>Education</h3>
            <p>Graduated <b>Summa Cum Laude from Georgia Tech.</b></p>
            <p>A lot of what I learned in college I find isn't exactly practical. Most of my useful knowledge has come from experience and mentors. What I did learn at GT was the ability to learn and adapt quickly and for that I am grateful.</p>
          </Card>
          <Card className="flat">
            <h3>Awards</h3>
            <p>Awarded <b>Home Depot's Best in Technology</b> (BiT, get it?) Award.</p>

            <p>Recognized for work on a set of Java batch services that helped to synchronize our supply chain with our vendors and save millions of dollars on shipping.</p>
          </Card>
        </Row>
      </Section>

      {/* EXPERIENCE AND PROJECTS */ }
      <Section className="primary">
        <BarHeader className="primary">Experience.</BarHeader>
        <Row>
          <Card className="skinny">
            <HeaderImg className="red">
              <Icon className="material-icons">school</Icon>
            </HeaderImg>
            <HeaderBar>
              <h3>Staff Software Instructor</h3>
            </HeaderBar>
            <p>Working at in an internal development boot camp teaching modern technologies and practices ranging from full stack developer courses, to one week technology workshops on git, Go, Java, JavaScript, React, Agile workflow, XP practices, and more.</p>
          </Card>
          <Card className="skinny">
            <HeaderImg className="orange">
              <Icon className="material-icons">desktop_mac</Icon>
            </HeaderImg>
            <HeaderBar>
              <h3>Senior Software Engineer</h3>
            </HeaderBar>
            <p>Member of the Home Depot Supply Chain Sync project. Our primary project revolves around a set of Java Batch processes meant to optimize our Supply Chain logistics.</p>
          </Card>
          <Card className="skinny">
            <HeaderImg className="green">
              <Icon className="material-icons">wifi_tethering</Icon>
            </HeaderImg>
            <HeaderBar>
              <h3>Software Developer</h3>
            </HeaderBar>
            <p>Working remotely at a small consulting firm in Atlanta I got the opportunity to work with an established company building custom extensions for Microsoft systems and the services to power them in order to better serve our clients.</p>
          </Card>
          <Card className="skinny">
            <HeaderImg className="purple">
              <Icon className="material-icons">create</Icon>
            </HeaderImg>
            <HeaderBar>
              <h3>Designer and Co-Founder</h3>
            </HeaderBar>
            <p>Shameless plug time: my wife and I run a small business designing and producing custom headbands and accessories. Here, I get the opportunity to really stretch and grow in design and 3D modeling skills.</p>
          </Card>
        </Row>
      </Section>

      {/* SKILLS AND LANGS */ }
      <Section className="dark">
        <BarHeader className="dark">Skills.</BarHeader>
        <Column>
          <Card className="flat">
            <h3>Lifetime Learner</h3>
            I have had the opportunity to work in quite a few languages and tools in a professional capacity and learned much through mentors and debugging issues. In hack projects I get to push the limits of what I know. It is important to always be learning and I have confidence that if something I need to succeed is not in one of these short lists, I can learn it and perform in it well. The abilities to learn and to fail gracefully are probably the skills I value most that have been instilled in me.
        </Card>
          <Row>
            <Tile><Tool src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" /></Tile>
            <Tile><Tool src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png" /></Tile>
            <Tile><Tool src="https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-png-transparent.png" /></Tile>
            <Tile><Tool src="https://cdn.freebiesupply.com/logos/large/2x/java-logo-png-transparent.png" /></Tile>
            <Tile><Tool src="https://camo.githubusercontent.com/98ed65187a84ecf897273d9fa18118ce45845057/68747470733a2f2f7261772e6769746875622e636f6d2f676f6c616e672d73616d706c65732f676f706865722d766563746f722f6d61737465722f676f706865722e706e67" /></Tile>
            <Tile><Tool src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Cloud-SQL-Logo.svg/1024px-Cloud-SQL-Logo.svg.png" /></Tile>
            <Tile><Tool src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png" /></Tile>
            <Tile><Tool src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" /></Tile>
            <Tile><Tool src="https://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png" /></Tile>
            <Tile><Tool src="https://angular.io/assets/images/logos/angular/angular.png" /></Tile>
            <Tile><Tool src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" /></Tile>
            <Tile><Tool src="https://d3r49iyjzglexf.cloudfront.net/circleci-logo-stacked-fb-2bbc2f98672809be0a4e917efde89548d5ee527dabbece4384317c540d2c3984.png" /></Tile>
            <Tile><Tool src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" /></Tile>
            <Tile><Tool src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" /></Tile>
            <Tile><Tool src="https://www.cloudfoundry.org/wp-content/uploads/www.cloudfoundry.orgs3_.amazonaws.comCFF_Logo_-a70d7459959a1ebb84303369cdf6ba7f5aeb414f.png" /></Tile>
            <Tile><Tool src="https://www.logolynx.com/images/logolynx/88/8853a2e976019ac1643c435fb02b8513.png" /></Tile>
            <Tile><Tool src="https://i.pinimg.com/originals/3f/bb/2f/3fbb2f0aa414d20476517f78061b7459.png" /></Tile>
            <Tile><Tool src="https://www.freepnglogos.com/uploads/photoshop-png-logo/photoshop-logo-png-transparent-photoshop-logo-images-13.png" /></Tile>
            <Tile><Tool src="https://download.blender.org/branding/blender_logo.png" /></Tile>
          </Row>
        </Column>
      </Section>

      {/* CONTACT */ }
      <Section className="darker">
        <BarHeader className="darker">Contact.</BarHeader>
        <Contact>
          <p>Find me on Instagram <a href="https://www.instagram.com/kjintroverted/">@kjintroverted</a></p>
          <p>Connect on Twitter <a href="https://twitter.com/kjintroverted">@kjintroverted</a></p>
          <p>Check out my projects on GitHub <a href="https://github.com/kjintroverted">@kjintroverted</a></p>
          <p>Email me at <a>mail@wkgreen.dev</a></p>
        </Contact>
      </Section>
    </>
  )
}

export default Home;

const Black = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: black;
`

const BannerIcon = styled.img`
  order: 1;
  margin: 100px 0px;
  @media (min-width: 496px) {
    order: 3;
  }
`

const Dev = styled.div` 
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  order: 2;
`

const Design = styled.div` 
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  order: 4;
`

const Subtitle = styled.h1`
  font-size: 2.5em;
  margin: 5px;
`

const Subtext = styled.p`
  margin: 0px 20px;
`

const Icon = styled.i`
  font-size: 10em;
  align-self: center;
  opacity: .5;
`

const Tool = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
`

const Tile = styled.div`
  height: 100px;
  width: 100px;
  margin: 10px;
`

const Contact = styled.div`
  width: 90%;
  max-width: 700px;
  padding-left: 10px;
`