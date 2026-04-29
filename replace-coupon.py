import re

with open('src/data/projects.tsx', 'r') as f:
    content = f.read()

coupon_pattern = re.compile(
    r'([ \t]*{\n[ \t]*id: "couponluxury",.*?</TypographyP>.*?\n[ \t]*},)',
    re.DOTALL
)

belulu = '''  {
    id: "belulu",
    category: "Mobile App",
    title: "Belulu App",
    src: "/assets/projects-screenshots/belulu/belulu1.jpeg",
    screenshots: ["belulu1.jpeg", "belulu2.png", "belulu3.jpeg"],
    live: "https://apps.apple.com/us/app/belulu-app/id6759389105",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content(): React.JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono">
            Belulu App is a cross-platform mobile application designed to provide users with a seamless and intuitive experience. It offers a variety of features tailored to enhance daily activities and connectivity.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            The interface is crafted carefully to ensure that finding what you need is just a tap away, focusing heavily on user-centric design principles.
          </p>
          <SlideShow images={[`${BASE_PATH}/belulu/belulu1.jpeg`]} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            Enjoy exclusive features and a smooth UI that makes navigating the app an absolute breeze. Connecting with the platform has never been easier.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/belulu/belulu2.png`,
              `${BASE_PATH}/belulu/belulu3.jpeg`,
            ]}
          />
          
          <p className="font-mono mb-2 mt-5">
            Under the hood, the app leverages modern cross-platform technologies to deliver high performance on both iOS and Android, ensuring you get the best experience regardless of your device.
          </p>
        </div>
      );
    },
  },'''

new_content = coupon_pattern.sub(belulu, content)

if content != new_content:
    with open('src/data/projects.tsx', 'w') as f:
        f.write(new_content)
    print("Replaced!")
else:
    print("Match not found.")
