import type { ReactNode } from "react"
import styled, { css } from "styled-components"
import LogoSvg from "./assets/goodnotes-logo.svg"
import NavSvg from "./assets/nav-menu.svg"
import GlobeSvg from "./assets/globe.svg"
import PeopleSvg from "./assets/people.svg"
import AppleStoreSvg from "./assets/apple-store.svg"
import GooglePlaySvg from "./assets/google-play.svg"
import WindowsStoreSvg from "./assets/windows-store.svg"
import Review1Svg from "./assets/review-1.svg"
import Review2Svg from "./assets/review-2.svg"
import screenshotTopPng from "./assets/ss-top.png"
import screenshot1Png from "./assets/ss-1.png"
import screenshot2Png from "./assets/ss-2.png"
import screenshot3Png from "./assets/ss-3.png"
import screenshot4Png from "./assets/ss-4.png"
import screenshot5Png from "./assets/ss-5.png"
import feature1Png from "./assets/f1.png"
import feature2Png from "./assets/f2.png"
import feature3Png from "./assets/f3.png"
import FeatureHighlight1aSvg from "./assets/fh-1a.svg"
import FeatureHighlight1bSvg from "./assets/fh-1b.svg"
import FeatureHighlight1cSvg from "./assets/fh-1c.svg"
import FeatureHighlight2aSvg from "./assets/fh-2a.svg"
import FeatureHighlight2bSvg from "./assets/fh-2b.svg"
import FeatureHighlight2cSvg from "./assets/fh-2c.svg"

function App() {
  return (
    <Main>
      <Header>
        <Side>
          <Logo />
        </Side>
        <Side>
          <Nav>
            <Menu>
              <MenuItem>
                Product
                <NavIcon />
              </MenuItem>
              <MenuItem>
                Education
                <NavIcon />
              </MenuItem>
              <MenuItem>
                Business
              </MenuItem>
              <MenuItem>
                Help & Resources
                <NavIcon />
              </MenuItem>
              <MenuItem>
                Careers
              </MenuItem>
            </Menu>
            <DownloadButtonNav>
              Download
              <NavIcon />
            </DownloadButtonNav>
            <GlobeIcon />
          </Nav>
        </Side>
      </Header>

      <TopSection>
        <Side>
          <TopScreenshot src={screenshotTopPng} />
        </Side>
        <Side>
          <Title>The best note-taking app for <GnUnderscore>Students</GnUnderscore></Title>
          <PeopleSvg />
          <PeopleText>Smarter notes. Sharper tools. Stronger results.</PeopleText>
          <DownloadShopButtons />
        </Side>
      </TopSection>

      <ScreenshotSection
        description="Record lectures and auto-transcribe them so you never miss a detail"
        img={screenshot1Png}
        title="Capture everything" />

      <ScreenshotSection
        description="Search across handwritten, typed and imported notes in seconds"
        img={screenshot2Png}
        title="Find what you need instantly" reversed />

      <ScreenshotSection
        description="Study smarter with tools that understand your notes, drawings, and equations"
        img={screenshot3Png}
        title="Real learning, powered by your handwriting" />

      <DownloadShopButtons />

      <ReviewsSectionTitle>What students are saying</ReviewsSectionTitle>
      <ReviewsSection>
        <Side><Review author={{ name: "Anne", role: "Marketing Student of National University" }} icon={<Review1Svg />} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /></Side>
        <Side><Review author={{ name: "Benson", role: "Design Student of University" }} icon={<Review2Svg />} text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." /></Side>
      </ReviewsSection>

      <FeatureCarouselSection>
        <FeatureCarouselItem
          img={feature1Png}
          title="Learn more in every lecture"
          features={[
            "Auto - record and transcribe lectures",
            "Annotate class slides, PDFs, and textbooks",
            "Choose between handwriting or typing your notes"
          ]}
        />

        <FeatureCarouselItem
          img={feature2Png}
          title="Say goodbye to pesky typos"
          features={[
            "Capture ideas and feedback during meetings with audio and notes",
            "Share notebooks so everyone stays on the same page, literally",
            "Add a comment to start a new conversation, leave feedback, or brainstorm new ideas"
          ]}
        />

        <FeatureCarouselItem
          img={feature3Png}
          title="Turn your notes into study tools"
          features={[
            "Use AI to summarize or explain complex topics in seconds",
            "Create multimedia flashcards by hand, text, or dragging and dropping images",
            "Hide and reveal sections of your notes with digital tape when you need to test yourself"
          ]}
        />
      </FeatureCarouselSection>

      <FeatureHighlight
        img={screenshot4Png}
        title="Ask Goodnotes: Your AI study buddy"
        features={[
          { title: "Understand tricky topics", description: "Feeling stuck? Ask Goodnotes explains complex concepts in simpler terms, right in your notes.", icon: <FeatureHighlight1aSvg /> },
          { title: "Summarize key points", description: "Need a recap? Turn pages of notes into short, clear summaries. Perfect for finals or catch-up sessions.", icon: <FeatureHighlight1bSvg /> },
          { title: "Want help reviewing?", description: "Automatically generate practice questions and test yourself directly in Ask Goodnotes.", icon: <FeatureHighlight1cSvg /> },
        ]}
      />

      <FeatureHighlight
        img={screenshot5Png}
        title="Math Assist: Problem-solving made simple"
        features={[
          { title: "Visualize equations instantly", description: "Turn your handwritten equations into clear interactive graphs without any special formatting.", icon: <FeatureHighlight2aSvg /> },
          { title: "See each step, get unstuck", description: "Math Assist helps you solve problems step by step, offering hints and breakdown of workings so you can learn as you go.", icon: <FeatureHighlight2bSvg /> },
          { title: "Master math-heavy subjects", description: "From algebra to physics, tackle tough problems with accurate handwriting recognition and smart guidance.", icon: <FeatureHighlight2cSvg /> },
        ]}
      />

      <DownloadShopButtons />

      <MarketplaceCarousel />

      <BottomSection>
        <BottomSectionTitle>One app. More focus. Less stress.</BottomSectionTitle>
        <BottomSectionText>From your first class to your final exam, Goodnotes helps students around the world stay organized, focused, and ready to learn.</BottomSectionText>
        <DownloadShopButtons />
      </BottomSection>
    </Main>
  )
}

const DownloadShopButtons = () => (
  <DownloadShops>
    <DownloadShopButton><AppleStoreIcon />iOS</DownloadShopButton>
    <DownloadShopButton><GooglePlayIcon />Android</DownloadShopButton>
    <DownloadShopButton><WindowsStoreIcon />Windows</DownloadShopButton>
  </DownloadShops>
)

const ScreenshotSection = ({ description, img, reversed, title }: { description: string; img: string; reversed?: boolean; title: string }) => (
  <ScreenshotSectionContainer $reversed={reversed}>
    <Side $align={reversed ? "left" : "right"}>
      <ScreenshotSectionText>
        <ScreenshotSectionTitle>{title}</ScreenshotSectionTitle>
        <ScreenshotSectionDescription>{description}</ScreenshotSectionDescription>
      </ScreenshotSectionText>
    </Side>
    <Side $align={reversed ? "right" : "left"}>
      <ScreenshotSectionImg src={img} $reversed={reversed} />
    </Side>
  </ScreenshotSectionContainer>
)

const font600SemiBold80 = css`
  font-weight: 600;
  font-style: SemiBold;
  font-size: 80px;
  letter-spacing: 0%;
`

const font600Normal60 = css`
  font-weight: 600;
  font-style: Normal;
  font-size: 60px;
  letter-spacing: 0%;
`

const font600Normal32 = css`
  font-weight: 600;
  font-style: Normal;
  font-size: 32px;
  letter-spacing: 0%;
`

const font500Regular16 = css`
  font-family: Roobert;
  font-weight: 500;
  font-style: Regular;
  font-size: 16px;
  letter-spacing: 0%;
`

const font500Medium16 = css`
  font-family: Roobert;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  letter-spacing: 0%;
`

const font500Medium24 = css`
  font-family: Roobert;
  font-weight: 500;
  font-style: Medium;
  font-size: 24px;
  letter-spacing: 0%;
`

const font500Medium32 = css`
  font-family: Roobert;
  font-weight: 500;
  font-style: Medium;
  font-size: 32px;
  letter-spacing: 0%;
`

const font500Normal24 = css`
  font-family: Roobert;
  font-weight: 500;
  font-style: Normal;
  font-size: 24px;
  letter-spacing: 0%;
`

const font500Normal18 = css`
  font-family: Roobert;
  font-weight: 500;
  font-style: Normal;
  font-size: 18px;
  letter-spacing: 0%;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Header = styled.header`
  align-items: center;
  justify-content: center;
  column-count: 2;
  padding: 20px;
  padding-bottom: 60px;
  background-color: #EBEBEB;
`;

const Title = styled.h1`
  ${font600SemiBold80}
`;

const Side = styled.div<{ $align?: "left" | "right" }>`
  display: flex;
  align-items: ${({ $align }) => $align ? ($align === "right" ? "end" : "start") : "center"};
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Logo = styled(LogoSvg)`
  height: 40px;
`;

const NavIcon = styled(NavSvg)`
  width: 10px;
  height: 10px;
`;

const GlobeIcon = styled(GlobeSvg)`
  width: 17px;
  height: 17px;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 20px;
`

const MenuItem = styled.li`
  ${font500Regular16}

  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const SectionContainer = styled.section<{ $reversed?: boolean }>`
  display: flex;
  column-count: 2;
  column-gap: 56px;
  flex-direction: ${({ $reversed }) => ($reversed ? 'row-reverse' : undefined)};
`;

const GnUnderscore = styled.span`
  background-image: url("/gn-underline.svg");
  background-repeat: repeat-x;
  background-position: bottom;
`;

const Button = styled.button`
  display: flex;
  border-radius: 16px;
  padding: 6px 12px;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  background-color: #69BDD8;
  border: none;
`

const DownloadButtonNav = styled(Button)`
  ${font500Medium16}
  height: 32px;
`

const DownloadShopButton = styled(Button)`
  ${font500Medium24}
  height: 54px;
  gap: 16px;
  border-radius: 27px;
  padding: 14px 24px;
`

const TopScreenshot = styled.img`
  height: 680px;
  margin-left: -75px;
`

const PeopleText = styled.p`
  ${font500Medium32}
`;

const DownloadShops = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const AppleStoreIcon = styled(AppleStoreSvg)`
  width: 22px;
  height: 27px;
`;

const GooglePlayIcon = styled(GooglePlaySvg)`
  width: 22px;
  height: 27px;
`;

const WindowsStoreIcon = styled(WindowsStoreSvg)`
  width: 22px;
  height: 27px;
`;

const TopSection = styled(SectionContainer)`
  background-color: #EBEBEB;
  padding-bottom: 100px;
`

const ScreenshotSectionContainer = styled(SectionContainer)`
  margin: 80px 0;
`

const ScreenshotSectionImg = styled.img<{ $reversed?: boolean }>`
  transform: rotate(${({ $reversed }) => `${($reversed ? -2 : 2)}deg`});
  height: 435px;
`

const ScreenshotSectionTitle = styled.h2`
  ${font600Normal60}
`

const ScreenshotSectionDescription = styled.p`
  ${font500Normal24}
`

const ScreenshotSectionText = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  max-width: 580px;
  text-align: left;
`


const ReviewsSectionTitle = styled.h2`
  ${font600Normal60}
  margin-top: 115px;
  margin-bottom: 50px;
`

const ReviewsSection = styled(SectionContainer)`
`

const Review = ({ author, icon, text }: { author: { name: string, role: string }, icon: ReactNode, text: string }) => (
  <ReviewContainer>
    {icon}
    <ReviewText>{text}</ReviewText>
    <ReviewAuthor>— <b>{author.name}</b>, {author.role}</ReviewAuthor>
  </ReviewContainer>
)

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 600px;
  max-width: 600px;
  border-radius: 20px;
  padding: 40px 60px;
  background: #F6F5F4;
  height: 100%;
  margin-bottom: 120px;
`

const ReviewText = styled.p`
  ${font500Normal24}
  text-align: center;
`

const ReviewAuthor = styled.p`
  ${font500Normal18}
`

const FeatureCarouselSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  justify-content: space-between;
  gap: 45px;
`

const FeatureCarouselItem = ({ img, title, features }: { img: string, title: string, features: string[] }) => (
  <FeatureCarouselItemContainer>
    <FeatureCarouselItemImg src={img} alt={title} />
    <FeatureCarouselItemTitle>{title}</FeatureCarouselItemTitle>
    <FeatureCarouselItemList>
      {features.map((feature, index) => (
        <FeatureCarouselItemListItem key={index}>{feature}</FeatureCarouselItemListItem>
      ))}
    </FeatureCarouselItemList>
  </FeatureCarouselItemContainer>
)

const FeatureCarouselItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 390px;
`

const FeatureCarouselItemImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  margin-bottom: 25px;
`

const FeatureCarouselItemTitle = styled.h3`
  ${font600Normal32}
  text-align: center;
`

const FeatureCarouselItemList = styled.ul`
`

const FeatureCarouselItemListItem = styled.li`
  ${font500Normal18}
  text-align: left;
`

const FeatureHighlight = ({ img, title, features }: { img: string, title: string, features: Array<{ title: string, description: string; icon: ReactNode }> }) => (
  <FeatureHighlightContainer>
    <Side>
      <FeatureHighlightPlatform>Available on iOS only</FeatureHighlightPlatform>
      <FeatureHighlightTitle>{title}</FeatureHighlightTitle>
      <FeatureHighlightItems>
        {features.map((feature, index) => (
          <FeatureHighlightItem key={index}>
            <FeatureHighlightItemIcon>{feature.icon}</FeatureHighlightItemIcon>
            <FeatureHighlightItemText>
              <FeatureHighlightItemTitle>{feature.title}</FeatureHighlightItemTitle>
              <FeatureHighlightItemDescription>{feature.description}</FeatureHighlightItemDescription>
            </FeatureHighlightItemText>
          </FeatureHighlightItem>
        ))}

      </FeatureHighlightItems>
    </Side>
    <Side>
      <FeatureHighlightImage src={img} />
    </Side>
  </FeatureHighlightContainer>
)

const FeatureHighlightContainer = styled(SectionContainer)`
  background-color: #F6F5F4;
  border-radius: 20px;
  padding: 70px;
  margin: 40px 0;
`

const FeatureHighlightTitle = styled.h2`
  ${font600Normal60}
  max-width: 540px;
  margin-bottom: 50px;
`

const FeatureHighlightImage = styled.img`
  width: 485px;
  height: auto;
`

const FeatureHighlightItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 540px;
  list-style: none;
  padding: 0;
`

const FeatureHighlightItem = styled.li`
  display: flex;
  gap: 20px;
`

const FeatureHighlightItemIcon = styled.div`
  min-width: 24px;
`

const FeatureHighlightItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FeatureHighlightItemTitle = styled.h3`
  ${font600Normal32}
`

const FeatureHighlightItemDescription = styled.p`
  ${font500Normal18}
`

const FeatureHighlightPlatform = styled.div`
  ${font500Medium16}
  background-color: #1F233E;
  margin-left: 4px;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 4px 8px;
  color: white;
  align-self: flex-start;
`

const MarketplaceCarousel = () => {
  return (
    <MarketplaceEmbedItemCarousel src='https://marketplace.goodnotesbeta.com/en/embed/ic/65eb069b9413198024bed3ed?theme=light&padding-inline=max(24px, 50%25 - 580px)&title-gap=50px&hierarchy=2' />
  );
}

const MarketplaceEmbedItemCarousel = styled.iframe`
  border: none;
  width: 100%;
  height: 460px;
  margin-top: 60px;
  margin-bottom: 100px;
`;

const BottomSection = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  gap: 24px;
  background-color: #EBEBEB;
`

const BottomSectionTitle = styled.h2`
  ${font600Normal60}
  max-width: 900px;
  text-align: center;
`

const BottomSectionText = styled.p`
  ${font500Normal24}
  max-width: 900px;
  text-align: center;
`

export default App
